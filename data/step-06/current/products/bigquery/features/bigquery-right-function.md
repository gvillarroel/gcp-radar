---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.809Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery RIGHT function"
feature_slug: "bigquery-right-function"
latest_feature_date: "2020-10-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
keywords:
  - "RIGHT(string_expr, length)"
  - "RIGHT(str, n)"
  - "rightmost characters"
  - "RIGHT function"
  - "RIGHT()"
  - "RIGHT"
  - "standard SQL string function"
---

# BigQuery RIGHT function

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery standard SQL added support for the RIGHT function and marked it generally available.

## Extended Definition

BigQuery standard SQL added support for the RIGHT function and marked it generally available.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)

## Supporting Pages

### "Legacy SQL Syntax, Functions and Operators \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- Source ID: `site-docs-reference`
- Final score: 42
- Re-rank relevance: N/A

Evidence snippets:
- RIGHT(' str ', numeric expr ) Returns the rightmost numeric expr characters of str .
- RIGHT() Returns the rightmost characters of a string.
- RIGHT() Returns the rightmost characters of a string.
- Here we present the full grammar of SELECT statements in a compact form with links back to the individual sections. query : SELECT { field path . expression } [ [ AS ] alias ] [ , ... ] [ FROM from body [ WHERE bool expression ] [ OMIT RECORD IF bool expression ] [ GROUP [ EACH ] BY [ ROLLUP ] { field name or alias } [ , ... ] ] [ HAVING bool expression ] [ ORDER BY field name or alias [ { DESC ASC } ] [, ... ] ] [ LIMIT n ] ]; from body : { from item [, ...] # Warning : Comma means UNION ALL here from item [ join type ] JOIN [ EACH ] from item [ ON join predicate ] ( FLATTEN ( { table name ( query ) } , field name or alias )) table wildcard function } from item : { table name ( query ) } [ [ AS ] alias ] join type : { INNER [ FULL ] [ OUTER ] RIGHT [ OUTER ] LEFT [ OUTER ] CROSS } join predicate : field from one side of the join = field from the other side of the join [ AND ...] expression : { literal value field name or alias function call } bool expression : { expression which results in a boolean value bool expression AND bool expression bool expression OR bool expression NOT bool expression } Notation: Square brackets "[ ]" indicate optional clauses.

### String functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- Source ID: `site-docs-root`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- Return type STRING or BYTES Examples SELECT REVERSE ( 'abc' ) AS results / ---------+ results +---------+ cba +--------- / SELECT FORMAT ( '%T' , REVERSE ( b '1a3' )) AS results / ---------+ results +---------+ b"3a1" +--------- / RIGHT RIGHT ( value , length ) Description Returns a STRING or BYTES value that consists of the specified number of rightmost characters or bytes from value .
- If value is STRING , length is the number of rightmost characters to return.
- Return type STRING or BYTES Examples SELECT 'apple' AS example , RIGHT ( 'apple' , 3 ) AS right example / ---------+---------------+ example right example +---------+---------------+ apple ple +---------+--------------- / SELECT b 'apple' AS example , RIGHT ( b 'apple' , 3 ) AS right example -- Note that the result of RIGHT is of type BYTES, displayed as a base64-encoded string. / ----------+---------------+ example right example +----------+---------------+ YXBwbGU= cGxl +----------+--------------- / RPAD RPAD ( original value , return length [ , pattern ] ) Description Returns a STRING or BYTES value that consists of original value appended with pattern .
- Flags Flags Description - Left-justify within the given field width; Right justification is the default (see width sub-specifier) + Forces to precede the result with a plus or minus sign ( + or - ) even for positive numbers.

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Examples The following example shows how to use the USING clause with one column name in the column name list: WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 9 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 9 UNION ALL SELECT 9 UNION ALL SELECT 5 ) SELECT FROM A INNER JOIN B USING ( x ); / Table A Table B Result +------+ +---+ +---+ x x = x +------+ +---+ +---+ 1 2 2 2 9 9 9 9 9 NULL 5 +---+ +------+ +---+ / The following example shows how to use the USING clause with multiple column names in the column name list: WITH A AS ( SELECT 1 as x , 15 as y UNION ALL SELECT 2 , 10 UNION ALL SELECT 9 , 16 UNION ALL SELECT NULL , 12 ), B AS ( SELECT 2 as x , 10 as y UNION ALL SELECT 9 , 17 UNION ALL SELECT 9 , 16 UNION ALL SELECT 5 , 15 ) SELECT FROM A INNER JOIN B USING ( x , y ); / Table A Table B Result +-----------+ +---------+ +---------+ x y x y = x y +-----------+ +---------+ +---------+ 1 15 2 10 2 10 2 10 9 17 9 16 9 16 9 16 +---------+ NULL 12 5 15 +-----------+ +---------+ / The following examples show additional ways in which to use the USING clause with one column name in the column name list: WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 9 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 9 UNION ALL SELECT 9 UNION ALL SELECT 5 ) SELECT x , A . x , B . x FROM A INNER JOIN B USING ( x ) / Table A Table B Result +------+ +---+ +--------------------+ x x = x A.x B.x +------+ +---+ +--------------------+ 1 2 2 2 2 2 9 9 9 9 9 9 9 9 9 NULL 5 +--------------------+ +------+ +---+ / WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 9 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 9 UNION ALL SELECT 9 UNION ALL SELECT 5 ) SELECT x , A . x , B . x FROM A LEFT OUTER JOIN B USING ( x ) / Table A Table B Result +------+ +---+ +--------------------+ x x = x A.x B.x +------+ +---+ +--------------------+ 1 2 1 1 NULL 2 9 2 2 2 9 9 9 9 9 NULL 5 9 9 9 +------+ +---+ NULL NULL NULL +--------------------+ / WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 2 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 9 UNION ALL SELECT 9 UNION ALL SELECT 5 ) SELECT x , A . x , B . x FROM A RIGHT OUTER JOIN B USING ( x ) / Table A Table B Result +------+ +---+ +--------------------+ x x = x A.x B.x +------+ +---+ +--------------------+ 1 2 2 2 2 2 9 2 2 2 2 9 9 NULL 9 NULL 5 9 NULL 9 +------+ +---+ 5 NULL 5 +--------------------+ / WITH A AS ( SELECT 1 as x UNION ALL SELECT 2 UNION ALL SELECT 2 UNION ALL SELECT NULL ), B AS ( SELECT 2 as x UNION ALL SELECT 9 UNION ALL SELECT 9 UNION ALL SELECT 5 ) SELECT x , A . x , B . x FROM A FULL OUTER JOIN B USING ( x ); / Table A Table B Result +------+ +---+ +--------------------+ x x = x A.x B.x +------+ +---+ +--------------------+ 1 2 1 1 NULL 2 9 2 2 2 2 9 2 2 2 NULL 5 NULL NULL NULL +------+ +---+ 9 NULL 9 9 NULL 9 5 NULL 5 +--------------------+ / The following example shows how to use the USING clause with only some column names in the column name list.
- Provided there are no comma cross joins in the FROM clause, joins don't require parenthesis, though parenthesis can help readability: FROM A JOIN B JOIN C JOIN D USING ( w ) ON B . x = C . y ON A . z = B . x If your clause contains comma cross joins, you must use parentheses: FROM A , B JOIN C JOIN D ON C . x = D . y ON B . z = C . x // INVALID FROM A , B JOIN ( C JOIN D ON C . x = D . y ) ON B . z = C . x // VALID When comma cross joins are present in a query with a sequence of JOINs, they group from left to right like other JOIN types: FROM A JOIN B USING ( x ) JOIN C USING ( x ), D -- A JOIN B USING (x) = result 1 -- result 1 JOIN C USING (x) = result 2 -- result 2 CROSS JOIN D = return value There can't be a RIGHT JOIN or FULL JOIN after a comma cross join unless it's parenthesized: FROM A , B RIGHT JOIN C ON TRUE // INVALID FROM A , B FULL JOIN C ON TRUE // INVALID FROM A , B JOIN C ON TRUE // VALID FROM A , ( B RIGHT JOIN C ON TRUE ) // VALID FROM A , ( B FULL JOIN C ON TRUE ) // VALID Correlated join operation A join operation is correlated when the right from item contains a reference to at least one range variable or column name introduced by the left from item .
- The following table shows the equivalent syntaxes between the BY NAME and CORRESPONDING modifiers, using the UNION ALL set operator as an example: BY NAME syntax Equivalent CORRESPONDING syntax UNION ALL BY NAME UNION ALL STRICT CORRESPONDING INNER UNION ALL BY NAME UNION ALL CORRESPONDING {LEFT FULL} [OUTER] UNION ALL BY NAME {LEFT FULL} [OUTER] UNION ALL CORRESPONDING [FULL] OUTER UNION ALL BY NAME [FULL] OUTER UNION ALL CORRESPONDING UNION ALL BY NAME ON (col1, col2, ...) UNION ALL STRICT CORRESPONDING BY (col1, col2, ...) The following table shows the behavior of the mode prefixes for the BY NAME and CORRESPONDING modifiers when left and right input columns don't match: Mode prefix and modifier Behavior when left and right input columns don't match BY NAME (no prefix) or STRICT CORRESPONDING Error, all columns must match in both inputs.
- FROM A RIGHT OUTER JOIN B ON A . w = B . y / Table A Table B Result +-------+ +-------+ +---------------------------+ w x y z = w x y z +-------+ +-------+ +---------------------------+ 1 a 2 k 2 b 2 k 2 b 3 m 3 c 3 m 3 c 3 n 3 c 3 n 3 d 4 p 3 d 3 m +-------+ +-------+ 3 d 3 n NULL NULL 4 p +---------------------------+ / FROM A RIGHT OUTER JOIN B USING ( x ) / Table A Table B Result +-------+ +-------+ +--------------------+ x y x z = x y z +-------+ +-------+ +--------------------+ 1 a 2 k 2 b k 2 b 3 m 3 c m 3 c 3 n 3 c n 3 d 4 p 3 d m +-------+ +-------+ 3 d n 4 NULL p +--------------------+ / Example This query performs a RIGHT JOIN on the Roster and TeamMascot tables.

