--  JOINS, UNIONS E SUBQUERIES

--1. INNER JOIN

-- INNER JOIN: foca em trazer somente os registros que possuem valores correspondentes em ambas as tabelas.
SELECT t1.coluna, t2.coluna
FROM tabela1 AS t1
INNER JOIN tabela2 AS t2
ON t1.coluna_em_comum = t2.coluna_em_comum;

-- A palavra-chave AS pode ser omitida
SELECT a.first_name, a.actor_id, f.actor_id
FROM sakila.actor a
INNER JOIN film_actor f
ON a.actor_id = f.actor_id;

--2. LEFT JOIN e RIGHT JOIN

-- LEFT JOIN: quando utilizamos o LEFT JOIN , focamos a tabela da esquerda. São retornados todos os registros da tabela esquerda e valores correspondentes da tabela da direita, caso existam . Valores que não possuem correspondentes são exibidos como nulos.
SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM sakila.customer AS c
LEFT JOIN sakila.actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;

-- RIGHT JOIN: quando utilizamos o RIGHT JOIN , focamos a tabela da direita. São retornados todos os registros da tabela da direita e valores correspondentes da tabela da esquerda, caso existam . Valores que não possuem correspondentes são exibidos como nulos.
SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM sakila.customer AS c
RIGHT JOIN sakila.actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;

--3. SELF JOIN

-- Podemos fazer pesquisas e comparações dentro da própria tabela através do SELF JOIN.
SELECT t1.title, t1.replacement_cost, t2.title, t2.replacement_cost
FROM sakila.film AS t1, sakila.film AS t2
WHERE t1.length = t2.length; 

--4. UNION e UNION ALL

-- UNION: remove os dados duplicados
SELECT first_name, last_name FROM sakila.actor
UNION
SELECT first_name, last_name FROM sakila.customer;

-- UNION ALL: mantém dados duplicado
SELECT first_name, last_name FROM sakila.actor
UNION ALL
SELECT first_name, last_name FROM sakila.customer;

--5. Subqueries

-- Uma SUBQUERY é uma query aninhada que é avaliada dentro de um par de parênteses. Ela pode conter expressões simples, como adições e subtrações, mas não se limita a isso, uma vez que podemos utilizar praticamente todos os comandos já vistos até o momento dentro de uma SUBQUERY.

-- Usando uma SUBQUERY como fonte de dados para o FROM.
SELECT f.title, f.rating
FROM (
    SELECT *
    FROM sakila.film
    WHERE rating = 'R'
) AS f;

-- Preenchendo uma coluna de um SELECT por meio de uma SUBQUERY.
SELECT
    address,
    district,
    (
        SELECT city
        FROM sakila.city
        WHERE city.city_id = sakila.address.city_id
    ) AS city
FROM sakila.address;

-- Filtrando resultados com WHERE usando como base os dados retornados de uma SUBQUERY.
SELECT address, district
FROM sakila.address
WHERE city_id in (
    SELECT city_id
    FROM sakila.city
    WHERE city in ('Sasebo', 'San Bernardino', 'Athenai', 'Myingyan')
);

-- Usando uma tabela externa, de fora da SUBQUERY, dentro dela.
SELECT
    first_name,
    (
        SELECT address
        FROM sakila.address
        WHERE address.address_id = tabela_externa.address_id
    ) AS address
FROM sakila.customer AS tabela_externa;

--6. EXISTS

--  EXISTS: retorna os registros da tabela A que possuem um relacionamento com os registros da tabela B.
SELECT * FROM hotel.customers AS customer
WHERE EXISTS (
    SELECT * FROM hotel.reservations
    WHERE c.CustumerID = reservations.CustumerID
);