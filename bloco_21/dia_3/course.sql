-- STORED ROUTINES & STORED FUNCTIONS

--1. Blocos de código SQL reutilizáveis

-- Podemos armazenar blocos de códigos (queries) para serem usados posteriormente no MySQL de duas maneiras, são elas:
-- Stored procedure;
-- Stored function.

-- Para tornar a leitura do seu código mais fácil e sua manutenção mais simples, siga o seguinte padrão ao nomear suas procedures e functions:
-- Verbo + Resultado
ObterTotalDeVendas
ExibirRankMaximo
ObterClienteMaisAtivo
CalcularNivelEngajamento
MontarNomeCompleto 

-- STORED PROCEDURES

-- Estrutura padrão de uma stored procedure:
USE banco_de_dados; -- obrigatório para criar a procedure no banco correto
DELIMITER $$ -- definindo delimitador

CREATE PROCEDURE nome_da_procedure(@parametro1, @parametro2, ..., @parametroN) -- parâmetros
BEGIN -- delimitando o início do código SQL
    -- query aqui ex: SELECT * FROM db.table;
END $$ -- delimitando o final do código SQL

DELIMITER ; -- muda o delimitador de volta para ; - o espaço entre DELIMITER e o ';' é necessário

-- Exemplo utilizando a tabela actor do sakila (sem parâmetros):
USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowAllActors()
BEGIN
    SELECT * FROM sakila.actor;
END $$

DELIMITER ;
-- Como usar:
CALL ShowAllActors();

-- Variáveis:
-- User-defined variables
SET @my_school = 'BeTrybe';
SELECT @my_school;

-- Tipos de dados:

-- Os principais tipos de dados do MySQL são:
-- Tipos de String
VARCHAR() -- Uma string não binária de comprimento variável;
CHAR() -- Uma string não binária (caractere) de comprimento fixo;
TEXT -- Uma pequena string não binária.

-- Tipos Numéricos (existem outros tipos além dos listados)
TYNINT -- Um número inteiro muito pequeno;
INT -- Um inteiro padrão;
BIGINT -- Um grande número inteiro;
DECIMAL(x, y) -- Um número de ponto fixo.

-- Tipos Temporais
DATE -- Armazena valores no padrão YYYY-MM-DD;
TIME -- Armazena valores no padrão HH:MM:SS;
YEAR -- Armazena somente o ano entre 1901 e 2155;
DATETIME -- Junta o DATE e o TIME no padrão YYYY-MM-DD HH:MM:SS;
TIMESTAMP -- Igual ao DATETIME mas também opera com bae em fuso horário que pode ser definido no servidor.

-- ** Construindo sua primeira stored procedure **

-- Temos os seguintes tipos de stored procedures:
-- a. Procedure sem parâmetros;
-- b. Procedure com parâmetros de entrada (IN) ;
-- c. Procedure com parâmetros de saída (OUT) ;
-- d. Procedure com parâmetros de entrada e saída (IN-OUT).

-- b. Procedure com parâmetros de entrada (IN):
USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowActorsWithSyllable(IN syllable VARCHAR(100))
BEGIN
    SELECT *
    FROM sakila.actor
    WHERE first_name LIKE CONCAT('%', syllable, '%');
END $$

DELIMITER ;
-- Como usar:
CALL ShowActorsWithSyllable('lope');

-- c. Procedure com parâmetros de saida (OUT): útil quando você precisa que algo seja avaliado ou encontrado dentro de uma query e te retorne esse valor para que algo adicional possa ser feito com ele.
USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowAverageRentalDurationOfMovie(
    IN film_name VARCHAR(300),
    OUT media_aluguel_em_dias DOUBLE
) 
BEGIN
    SELECT AVG(rental_duration) INTO media_aluguel_em_dias
    FROM sakila.film
    WHERE title = film_name;
END $$

DELIMITER ;
-- Como usar:
CALL ShowAverageRentalDurationOfMovie('ACADEMY DINOSAUR', @media_de_dias);
SELECT @media_de_dias;

-- d. Procedure com parâmetros de entrada-saida (IN-OUT): usado quando é necessário que um parâmetro possa ser modificado tanto antes como durante a execução de uma procedure.
USE sakila;
DELIMITER $$

CREATE PROCEDURE NameGenerator(INOUT film_name VARCHAR(300))
BEGIN
    SELECT CONCAT('ULTRA ', film_name, ' THE BEST MOVIE OF THE CENTURY')
    INTO film_name;
END $$

DELIMITER ;
-- Como usar:
SELECT 'ACE GOLDFINGER' INTO @movie_title;
CALL NameGenerator(@movie_title);
SELECT @movie_title;

-- STORED FUNCTIONS

-- Através das Stored Functions podemos encapsular nossas queries usadas mais frequentemente dentro de um bloco de código nomeado e parametrizável.
-- Stored functions podem ser executadas com o comando SELECT. Ao criá-las, temos que definir o tipo de retorno que sua função possui.

-- Tipos de retorno comuns:
DETERMINISTIC -- Sempre retorna o mesmo valor ao receber os mesmos dados de entrada;
READS SQL DATA -- Indica para o MySQL que sua função somente lerá dados.

-- Estrutura padrão de uma stored function:
USE banco_de_dados; -- obrigatório para criar a função no banco correto
DELIMITER $$

CREATE FUNCTION nome_da_function(parametro1, parametro2, ..., parametroN)
RETURNS tipo_de_dado tipo_de_retorno
BEGIN
    query_sql
    RETURN resultado_a_ser_retornado;
END $$

DELIMITER ;

-- Exemplo 1: exibe a quantidade de filmes em que um determinado ator ou atriz atuou.
USE sakila;
DELIMITER $$

CREATE FUNCTION MoviesWithActor(actor_id INT)
RETURNS INT READS SQL DATA
BEGIN
    DECLARE movie_total INT;
    SELECT COUNT(*)
    FROM sakila.film_actor
    WHERE sakila.film_actor.actor_id = actor_id INTO movie_total;
    RETURN movie_total;
END $$

DELIMITER ;
-- Como usar:
SELECT MoviesWithActor(1);

-- Exemplo 2: exibe o nome completo de um ator ou de uma atriz, dado seu id como parâmetro.
USE sakila;
DELIMITER $$

CREATE FUNCTION GetFullName(id INT)
RETURNS VARCHAR(200) READS SQL DATA
BEGIN
    DECLARE full_name VARCHAR(200);
    SELECT concat(first_name, ' ', last_name)
    FROM sakila.actor
    WHERE actor_id = id
    LIMIT 1
    INTO full_name ;
    RETURN full_name;
END $$

DELIMITER ;
-- Como usar:
SELECT GetFullName(51);


--2. Reações dinâmicas

-- TRIGGERS

-- Triggers são blocos de código SQL que são disparados em reação a alguma atividade que ocorre no banco de dados. Eles podem ser disparados em dois momentos distintos, e é possível definir condições para esse disparo.

-- Momentos em que um trigger pode ser disparado:
BEFORE -- antes que alguma ação seja executada;
AFTER -- após alguma ação já ter sido executada.

-- O que pode ativar um Trigger:
INSERT
UPDATE
DELETE

-- O que pode ser acessado dentro de um trigger:
OLD -- valor presente em uma coluna antes de uma operação (UPDATE e DELETE); 
NEW -- valor presente em uma coluna após uma operação (INSERT e UPDATE).

-- Estrutura padrão de um trigger:
DELIMITER $$

CREATE TRIGGER nome_do_trigger
[BEFORE | AFTER] [INSERT | UPDATE | DELETE] ON tabela
FOR EACH ROW
BEGIN
    -- o código SQL entra aqui
END $$

DELIMITER ;

-- Para os próximos exemplos, considere as seguintes tabelas e banco de dados:
CREATE DATABASE IF NOT EXISTS rede_social;

USE rede_social;

CREATE TABLE perfil(
    perfil_id INT PRIMARY KEY auto_increment,
    saldo DECIMAL(10, 2) NOT NULL DEFAULT 0,
    ultima_atualizacao DATETIME,
    acao VARCHAR(50),
    ativo BOOLEAN DEFAULT 1
) engine = InnoDB;

CREATE TABLE log_perfil(
    acao_id INT PRIMARY KEY AUTO_INCREMENT,
    acao VARCHAR(300),
    data_acao DATE
) engine = InnoDB;

-- Exemplo 1 (INSERT): Considerando a tabela perfil, hora de montar um Trigger que define a data de inserção e o tipo de operação, quando um novo registro é inserido.
USE rede_social;

DELIMITER $$
CREATE TRIGGER trigger_perfil_insert
    BEFORE INSERT ON perfil
    FOR EACH ROW
BEGIN
    SET NEW.ultima_atualizacao = NOW(),
        NEW.acao = 'INSERT';
END $$
DELIMITER ;
-- Como usar:
INSERT INTO perfil(saldo) VALUES (2500);

SELECT * FROM perfil;

-- No trigger acima, o valor da coluna ultima_atualizacao está sendo definido para a data atual com o comando NOW() e, na sequência, definindo o valor da coluna acao para "INSERT". A palavra-chave NEW é utilizada para acessar e modificar as propriedades da tabela.

-- Exemplo 2 (UPDATE): Considerando a tabela perfil , hora de montar um Trigger que define a data de atualização e o tipo de operação, quando algum registro for modificado.
USE rede_social;

DELIMITER $$
CREATE TRIGGER trigger_perfil_update
    BEFORE UPDATE ON perfil
    FOR EACH ROW
BEGIN
    SET NEW.ultima_atualizacao = NOW(),
        NEW.acao = 'UPDATE';
END $$
DELIMITER ;
-- Como usar:
UPDATE perfil
SET saldo = 3000
WHERE perfil_id = 1;

SELECT * FROM perfil;

-- No Trigger acima, o valor da coluna ultima_atualizacao está sendo atualizado para a data atual com o comando NOW() e, na sequência, definindo o valor da coluna acao para "UPDATE". Novamente, a palavra-chave NEW é utilizada para acessar e modificar as propriedades da tabela.

-- Exemplo 3 (DELETE): Considerando a tabela log_perfil, hora de criar um trigger que envia informações para essa tabela quando um registro da tabela perfil é excluído.
USE rede_social;

DELIMITER $$
CREATE TRIGGER trigger_perfil_delete
    AFTER DELETE ON perfil
    FOR EACH ROW
BEGIN
    INSERT INTO log_perfil(acao, data_acao)
    VALUES ('exclusão', NOW());
END $$
DELIMITER ;
-- Como usar:
DELETE FROM perfil WHERE perfil_id = 1;

SELECT * FROM log_perfil;

-- O trigger acima envia informações para a tabela log_perfil, dizendo qual foi o tipo da operação e o horário do ocorrido.
