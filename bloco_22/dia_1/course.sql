-- *Criando um banco de dados para conter suas tabelas*

-- Cria um banco de dados com o nome especificado.
CREATE DATABASE nome_do_banco_de_dados;

-- Sinônimo de CREATE DATABASE, também cria um banco de dados.
CREATE SCHEMA nome_do_banco_de_dados;

-- Verifica se o banco de dados ainda não existe.
-- Essa verificação é comumente utilizada junto ao CREATE DATABASE para evitar
-- a tentativa de criar um banco de dados duplicado, o que ocasionaria um erro.
IF NOT EXISTS nome_do_banco_de_dados;

-- Lista todos os bancos de dados existentes.
SHOW DATABASES;

-- Define o banco de dados ativo para uso no momento. Isso elimina a necessidade de utilizar nome do banco de dados como prefixo nas queries.
USE nome_do_banco_de_dados;

-- Os comandos CREATE DATABASE ou CREATE SCHEMA fazem a mesma coisa, no entanto eles normalmente são utilizados em conjunto com o comando IF NOT EXISTS . Essa verificação é feita para evitar a tentativa de criar um banco de dados duplicado, o que ocasionaria um erro.
CREATE DATABASE IF NOT EXISTS albuns;


-- Os principais tipos de dados do MySQL são:

-- Tipos de String
VARCHAR() -- Uma string não binária de comprimento variável;
CHAR() -- Uma string não binária (caractere) de comprimento fixo;
TEXT -- Uma pequena string não binária.

-- Tipos Numéricos (existem outros tipos além dos listados)
TYNINT -- Um número inteiro muito pequeno (existem também SMALLINT, MEDIUMINT e BIGING, que também são valores exatos inteiro mas se diferenciam no tamanho);
INT -- Um inteiro padrão;
BIGINT -- Um grande número inteiro;
DECIMAL(x, y) -- Um número de ponto fixo.

-- Tipos Temporais
DATE -- Armazena valores no padrão YYYY-MM-DD;
TIME -- Armazena valores no padrão HH:MM:SS;
YEAR -- Armazena somente o ano entre 1901 e 2155;
MONTH -- Armazena somente o mês;
DAY -- Armazena somente o dia;
DATETIME -- Junta o DATE e o TIME no padrão YYYY-MM-DD HH:MM:SS;
TIMESTAMP -- Igual ao DATETIME mas também opera com bae em fuso horário que pode ser definido no servidor.

-- Tipos de chaves:
PRIMARY KEY -- Uma tabela possui apenas uma PRIMARY KEY, que pode ser uma coluna ou grupo de colunas usadas para identificar uma linha em uma tabela (um identificador único).
FOREIGN KEY -- Coluna ou grupo de colunas em uma tabela que identifica unicamentw uma linha em outra tabela. É através dela que criamos relacionamentos entre tabelas.

-- Por mais que só possamos ter uma única chave primária por tabela, essa chave pode ser simples (apenas uma coluna) ou composta (conjunto de colunas). Exemplo de implementação de PRIMARY KEY composta:
DROP SCHEMA IF EXISTS Brasil;
CREATE SCHEMA Brasil;
USE Brasil;

CREATE TABLE cidades(
  cidade VARCHAR(100) NOT NULL,
  estado VARCHAR(10) NOT NULL,
  populacao INTEGER,
  CONSTRAINT PRIMARY KEY(cidade, estado)
) ENGINE=InnoDB;

INSERT INTO cidades(cidade, estado, populacao)
VALUES('Rio Claro','SP',185421),
      ('Rio Claro','RJ',17216);

-- No caso acima, faz mais sentido criar um campo id e utilizá-lo como PRIMARY KEY simples, assim fica mais fácil fazer os relacionamentos com outras tabelas e utilizar operadores de busca pois você usará apenas o campo id.
-- Apagar a versão antiga da tabela
DROP TABLE cidades; 
CREATE TABLE cidades(
  id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  cidade VARCHAR(100) NOT NULL,
  estado VARCHAR(10) NOT NULL,
  populacao INTEGER
) ENGINE=InnoDB;

INSERT INTO cidades(cidade, estado, populacao)
VALUES('Rio Claro','SP',185421),
      ('Rio Claro','RJ',17216);

-- A aplicação de chaves compostas pode ser vantajosa em outras situações, como na criação de tabelas N:N, também conhecidas como tabelas de junção, pois os campos que contêm as chaves estrangeiras para as outras tabelas são utilizados para formar a chave primária composta, garantindo o bloqueio de registros com associações iguais.
-- Para o relcionamento das tabelas 'Ator'(AtorId, Nome) -> 'Filme_ator'(AtorId, FilmeId) -> 'Filme'(FilmeId, Nome) (ver imagem no course) o recomendado é utilizar os campos AtorId e FilmeId já existentes para formar uma chave composta, desta maneira conseguimos manter a identificação única e a integridade da tabela sem precisar criar um novo campo único id para usar como chave primária.
CREATE TABLE filme_ator(
    AtorId INTEGER,
    FilmeId INTEGER,
    CONSTRAINT PRIMARY KEY(AtorId, FilmeId),
    FOREIGN KEY (AtorId) REFERENCES Actor(Atorid),
    FOREIGN KEY (FilmeId) REFERENCES Filme(Filmeid)
) ENGINE=InnoDB;
