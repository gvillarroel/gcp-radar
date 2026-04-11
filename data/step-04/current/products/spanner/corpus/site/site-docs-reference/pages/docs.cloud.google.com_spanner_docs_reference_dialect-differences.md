---
title: "Dialect parity between GoogleSQL and PostgreSQL \_|\_ Spanner \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/spanner/docs/reference/dialect-differences
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/spanner/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/spanner/docs/reference/dialect-differences
  title: "Dialect parity between GoogleSQL and PostgreSQL \_|\_ Spanner \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Spanner
Reference
Send feedback
Dialect parity between GoogleSQL and PostgreSQL
Stay organized with collections
Save and categorize content based on your preferences.
This page describes the dialect differences between GoogleSQL and
PostgreSQL and offers recommendations for using PostgreSQL
approaches for specific GoogleSQL features.
GoogleSQL dialect feature differences
GoogleSQL feature
PostgreSQL dialect recommendation
Sample datasets
No recommendation available.
BigQuery external datasets
Use
Spanner federated queries .
ENUM
Use TEXT columns with checked
constraints instead. Unlike ENUMS , the sort order of a
TEXT column can't be user-defined.
The following example restricts the column to only support the
'C' , 'B' , and 'A' values.
CREATE TABLE singers (
singer_id BIGINT PRIMARY KEY,
type TEXT NOT NULL CHECK (type IN ('C', 'B', 'A'))
);
GROUP_METHOD hint
No recommendation available.
Graph
No recommendation available.
HAVING MAX or HAVING MIN
Use a JOIN or a subquery to filter
for the MAX or MIN value for the aggregation.
The following example requires filtering MAX or
MIN in a subquery.
WITH amount_per_year AS (
SELECT 1000 AS amount, 2025 AS year
UNION ALL
SELECT 10000, 2024
UNION ALL
SELECT 500, 2023
UNION ALL
SELECT 1500, 2025
UNION ALL
SELECT 20000, 2024
)
SELECT SUM(amount) AS max_year_amount_sum
FROM amount_per_year
WHERE year = (SELECT MAX(year) FROM amount_per_year);
Informational foreign keys
No recommendation available.
JSON data type
Use the JSONB data type.
SELECT to_json(table) FROM table
We recommend explicitly mapping each column with the jsonb_build_object function:
WITH singers AS (
SELECT 1::int8 AS id, 'Singer First Name'::text AS first_name
)
SELECT jsonb_build_object('id', id, 'first_name', first_name)
FROM singers;
ORDER BY … COLLATE …
No recommendation available.
NUMERIC column as a primary key, secondary index, or
foreign key
We recommend using an index over a TEXT generated column,
as shown in the following example:
CREATE TABLE singers(
id numeric NOT NULL,
pk text GENERATED ALWAYS AS (id::text) STORED,
PRIMARY KEY(pk)
);
Protocol buffer data type
You can store serialized protocol buffers as the PostgreSQL
BYTEA data type .
PRIMARY KEY DESC
No recommendation available.
SELECT AS VALUE
SELECT * EXCEPT
We recommend that you spell out all columns in the SELECT
statement.
SELECT * REPLACE
We recommend that you spell out all columns in the SELECT
statement.
The following columns in the SPANNER_SYS statistics tables:
Transaction statistics : TOTAL_LATENCY_DISTRIBUTION and OPERATIONS_BY_TABLE
Query statistics : LATENCY_DISTRIBUTION
Lock Statistics : SAMPLE_LOCK_REQUESTS
We recommend using the following JSON-compatible string representation
columns instead:
Transaction statistics :
TOTAL_LATENCY_DISTRIBUTION_JSON_STRING and OPERATIONS_BY_TABLE_JSON_STRING
Query statistics : LATENCY_DISTRIBUTION_JSON_STRING
Lock Statistics : SAMPLE_LOCK_REQUESTS_JSON_STRING
TABLESAMPLE
We recommend that you apply a custom function F , which
converts a row to TEXT or BYTEA . You can then
use spanner.farm_fingerprint to sample your
data.
In the following example, we use CONCAT as our function
F :
-- Given the following schema
CREATE TABLE singers (
singer_id BIGINT PRIMARY KEY,
first_name VARCHAR(1024),
last_name VARCHAR(1024),
singer_info BYTEA
);
-- Create a hash for each row (using all columns)
WITH hashed_rows AS (
SELECT
*,
ABS(MOD(spanner.farm_fingerprint(
CONCAT(
singer_id::text,
first_name,
last_name,
singer_info::text
)
), 100)) AS hash_value
FROM singers
)
-- Sample data
SELECT *
FROM hashed_rows
WHERE hash_value < 10 -- sample roughly 10%
LIMIT 10; /* Optional: LIMIT to a max of 10 rows
to be returned */
VALUE IN UNNEST(ARRAY(...))
Use the equality operator with the
ANY function, as shown in the following example:
SELECT value = any(array[...])
GoogleSQL dialect function differences
GoogleSQL function
PostgreSQL dialect recommendation
ACOSH
Use the formula of the function explicitly, as
shown in the following example:
SELECT LN(x + SQRT(x*x - 1));
APPROX_COSINE_DISTANCE
No recommendation available.
APPROX_DOT_PRODUCT
APPROX_EUCLIDEAN_DISTANCE
ANY_VALUE
Workaround available outside of aggregation and GROUP BY .
Use a subquery with the ORDER BY or
LIMIT clauses, as shown in the following example:
SELECT * FROM
(
(expression)
UNION ALL SELECT NULL, … -- as many columns as you have
) AS rows
ORDER BY 1 NULLS LAST
LIMIT 1;
ARRAY_CONCAT_AGG
You can use ARRAY_AGG and UNNEST as shown in the
following example:
WITH albums AS
(
SELECT ARRAY['Song A', NULL, 'Song B'] AS songs
UNION ALL
SELECT NULL
UNION ALL
SELECT ARRAY[]::TEXT[]
)
SELECT ARRAY_AGG(song) FROM albums, UNNEST(songs) song;
ARRAY_FIRST
Use the array subscript operator, as shown in the
following example:
SELECT array_expression[1];
Note that this will return NULL for empty arrays.
ARRAY_INCLUDES
Use the equality operator with the ANY
function, as shown in the following example:
SELECT search_value = ANY(array_to_search);
ARRAY_INCLUDES_ALL
Use the array contains operator, as shown in the
following example:
SELECT array_to_search @> search_values;
ARRAY_INCLUDES_ANY
Use the array overlap operator, as shown in the
following example:
SELECT array_to_search && search_values;
ARRAY_IS_DISTINCT
Use a subquery to count distinct values and
compare them to the original array length, as shown in the following
example:
SELECT ARRAY_LENGTH(value, 1) = (
SELECT COUNT(DISTINCT e)
FROM UNNEST(value) AS e);
ARRAY_LAST
Use the array subscript operator, as shown in the
following example
SELECT (value)[ARRAY_LENGTH(value, 1)];
This returns NULL for empty arrays.
ARRAY_MAX
Use a subquery with UNNEST and the
MAX function, as shown in the following example:
SELECT MAX(e) FROM UNNEST(value) AS e;
ARRAY_MIN
Use a subquery with UNNEST and the
MIN function, as shown in the following example:
SELECT MIN(e) FROM UNNEST(value) AS e;
ARRAY_REVERSE
No recommendation available.
ASINH
Use the formula of the function explicitly, as
shown in the following example:
SELECT LN(x + SQRT(x*x - 1));
ATANH
Use the formula of the function explicitly, as
shown in the following example:
SELECT 0.5 * LN((1 + x) / (1 - x));
BIT_COUNT
No recommendation available.
BIT_XOR
BYTE_LENGTH
CODE_POINTS_TO_BYTES
CODE_POINTS_TO_STRING
COSH
Use the formula of the function explicitly, as
shown in the following example:
SELECT (EXP(x) + EXP(-x)) / 2;
ERROR
No recommendation available.
FROM_BASE32
FROM_BASE64
FROM_HEX
GENERATE_ARRAY
GENERATE_DATE_ARRAY
NET.HOST
Use a regular expression and the
substring function, as shown in the following example:
/* Use modified regular expression from
https://tools.ietf.org/html/rfc3986#appendix-A. */
SELECT Substring('http://www.google.com/test' FROM
'^(?:[^:/?#]+:)?(?://)?([^/?#]*)?[^?#]*(?:\\?[^#]*)?(?:#.*)?')
NET.IP_FROM_STRING
No recommendation available.
NET.IP_NET_MASK
NET.IP_TO_STRING
NET.IP_TRUNC
NET.IPV4_FROM_INT64
NET.IPV4_TO_INT64
NET.PUBLIC_SUFFIX
NET.REG_DOMAIN
NET.SAFE_IP_FROM_STRING
NORMALIZE
NORMALIZE_AND_CASEFOLD
REGEXP_EXTRACT_ALL
SAFE.ADD
We recommend that you protect against an overflow explicitly leveraging
the NUMERIC data type.
WITH numbers AS
(
SELECT 1::int8 AS a, 9223372036854775807::int8 AS b
UNION ALL
SELECT 1, 2
)
SELECT
CASE
WHEN a::numeric + b::numeric > 9223372036854775807 THEN NULL
WHEN a + b < -9223372036854775808 THEN NULL
ELSE a + b
END AS result
FROM numbers;
SAFE.CAST
No recommendation available.
SAFE.CONVERT_BYTES_TO_STRING
SAFE.DIVIDE
We recommend that you protect against an overflow explicitly leveraging
the NUMERIC data type during a division operation.
WITH numbers AS
(
SELECT 1::int8 AS a, 9223372036854775807::int8 AS b
UNION ALL
SELECT 10, 2
)
SELECT
CASE
WHEN b = 0 THEN NULL
WHEN a::numeric / b::numeric > 9223372036854775807 THEN NULL
WHEN a::numeric / b::numeric < -9223372036854775808 THEN NULL
ELSE a / b
END AS result
FROM numbers;
SAFE.MULTIPLY
We recommend that you protect against an overflow explicitly leveraging
the NUMERIC data type during a multiplication operation.
WITH numbers AS
(
SELECT 1::int8 AS a, 9223372036854775807::int8 AS b
UNION ALL
SELECT 1, 2
)
SELECT
CASE
WHEN a::numeric * b::numeric > 9223372036854775807 THEN NULL
WHEN a::numeric * b::numeric < -9223372036854775808 THEN NULL
ELSE a * b
END AS result
FROM numbers;
SAFE.NEGATE
We recommend that you protect against an overflow explicitly leveraging
the NUMERIC data type during a negation operation.
WITH numbers AS
(
SELECT 9223372036854775807 AS a
UNION ALL
SELECT -9223372036854775808
)
SELECT
CASE
WHEN a <= -9223372036854775808 THEN NULL
WHEN a >= 9223372036854775809 THEN NULL
ELSE -a
END AS result
FROM numbers;
SAFE.SUBTRACT
We recommend that you protect against an overflow explicitly leveraging
the NUMERIC data type during a subtraction operation.
WITH numbers AS
(
SELECT 1::int8 AS a, 9223372036854775807::int8 AS b
UNION ALL
SELECT 1, 2
)
SELECT
CASE
WHEN a::numeric - b::numeric > 9223372036854775807 THEN NULL
WHEN a::numeric - b::numeric < -9223372036854775808 THEN NULL
ELSE a - b
END AS result
FROM numbers;
SAFE.TO_JSON
No recommendation available.
SINH
Use the formula of the function explicitly, as
shown in the following example:
SELECT (EXP(x) - EXP(-x)) / 2;
SPLIT
Use the regexp_split_to_array
function, as shown in the following example:
WITH letters AS
(
SELECT '' as letter_group
UNION ALL
SELECT 'a' as letter_group
UNION ALL
SELECT 'b c d' as letter_group
)
SELECT regexp_split_to_array(letter_group, ' ') as example
FROM letters;
STDDEV
Use the formula of the function explicitly
(unbiased standard deviation), as shown in the following example:
WITH numbers AS
(
SELECT 1 AS x
UNION ALL
SELECT 2
UNION ALL
SELECT 3
),
mean AS
(
SELECT AVG(x)::float8 AS mean
FROM numbers
)
SELECT SQRT(SUM(POWER(numbers.x - mean.mean, 2)) / (COUNT(x) - 1))
AS stddev
FROM numbers
CROSS JOIN mean
STDDEV_SAMP
Use the formula of the function explicitly
(unbiased standard deviation), as shown in the following example:
WITH numbers AS
(
SELECT 1 AS x
UNION ALL
SELECT 2
UNION ALL
SELECT 3
),
mean AS (
SELECT AVG(x)::float8 AS mean
FROM numbers
)
SELECT SQRT(SUM(POWER(numbers.x - mean.mean, 2)) / (COUNT(x) - 1))
AS stddev
FROM numbers
CROSS JOIN mean
TANH
Use the formula of the function explicitly.
SELECT (EXP(x) - EXP(-x)) / (EXP(x) + EXP(-x));
TIMESTAMP_MICROS
Use the to_timestamp function and
truncate the microseconds part of the input (precision loss), as shown
in the following example:
SELECT to_timestamp(1230219000123456 / 1000000);
TIMESTAMP_MILLIS
Use the to_timestamp function and
truncate the milliseconds part of the input (precision loss), as shown
in the following example:
SELECT to_timestamp(1230219000123 / 1000);
TO_BASE32
No recommendation available.
TO_BASE64
TO_CODE_POINTS
TO_HEX
VAR_SAMP
Use the formula of the function explicitly
(unbiased variance), as shown in the following:
-- Use formula directly (unbiased)
WITH numbers AS
(
SELECT 1 AS x
UNION ALL
SELECT 2
UNION ALL
SELECT 3 ), mean AS
(
SELECT Avg(x)::float8 AS mean
FROM numbers )
SELECT Sum(Power(numbers.x - mean.mean, 2)) / (Count(x) - 1)
AS variance
FROM numbers
CROSS JOIN mean
VARIANCE
Use the formula of the function explicitly
(unbiased variance), as shown in the following example:
-- Use formula directly (unbiased VARIANCE like VAR_SAMP)
WITH numbers AS
(
SELECT 1 AS x
UNION ALL
SELECT 2
UNION ALL
SELECT 3
),
mean AS (
SELECT AVG(x)::float8 AS mean
FROM numbers
)
SELECT SUM(POWER(numbers.x - mean.mean, 2)) / (COUNT(x) - 1)
AS variance
FROM numbers
CROSS JOIN mean
What's next
Learn more about Spanner's PostgreSQL language
support .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
