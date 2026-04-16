---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.901Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Hash functions"
feature_slug: "hash-functions"
latest_feature_date: "2016-12-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/geography_functions"
  - "https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql"
  - "https://docs.cloud.google.com/bigquery/docs/user-defined-functions"
keywords:
  - "hash"
  - "functions"
  - "bigquery"
  - "standard"
  - "sql"
  - "provides"
---

# Hash functions

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Standard SQL provides hash functions.

## Extended Definition

BigQuery Standard SQL provides hash functions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/geography_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/geography_functions)
- [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- [https://docs.cloud.google.com/bigquery/docs/user-defined-functions](https://docs.cloud.google.com/bigquery/docs/user-defined-functions)

## Supporting Pages

### Geography functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/geography_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/geography_functions)
- Source ID: `site-docs-reference-required-7`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- GoogleSQL for BigQuery supports the following functions that can be used to analyze geographical data, determine spatial relationships between geographical features, and construct or manipulate GEOGRAPHY s.
- Parsers ST GEOGFROM ST GEOGFROMGEOJSON ST GEOGFROMTEXT ST GEOGFROMWKB ST GEOGPOINTFROMGEOHASH Functions that create geographies from an external format such as WKT and GeoJSON .
- Home Documentation Data analytics BigQuery Reference Send feedback Geography functions Stay organized with collections Save and categorize content based on your preferences.
- Formatters ST ASBINARY ST ASGEOJSON ST ASTEXT ST GEOHASH Functions that export geographies to an external format such as WKT.

### "Legacy SQL Syntax, Functions and Operators \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- Source ID: `site-docs-reference`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- 1515 ) AS distance , AVG ( mean temp ) AS temp , AVG ( lat / 1000 ) lat , AVG ( long / 1000 ) long FROM [ weather geo . table ] WHERE month = 1 GROUP BY distance ) WHERE distance < 100 ORDER BY distance ASC LIMIT 100 ; Regular expression functions BigQuery provides regular expression support using the re2 library; see that documentation for its regular expression syntax .
- This window function requires ORDER BY in the OVER clause. legacySQL SELECT word , word count , RANK () OVER ( PARTITION BY corpus ORDER BY word count DESC ) rank , FROM [ bigquery - public - data : samples . shakespeare ] WHERE corpus = 'othello' and length ( word ) > 10 LIMIT 5 Returns: word word count rank handkerchief 29 1 satisfaction 5 2 displeasure 4 3 instruments 4 3 circumstance 3 5 RATIO TO REPORT( <column> ) Returns the ratio of each value to the sum of the values, as a double between 0 and 1. legacySQL SELECT word , word count , RATIO TO REPORT ( word count ) OVER ( PARTITION BY corpus ORDER BY word count DESC ) r to r , FROM [ bigquery - public - data : samples . shakespeare ] WHERE corpus = 'othello' and length ( word ) > 10 LIMIT 5 Returns: word word count r to r handkerchief 29 0.6444444444444445 satisfaction 5 0.1111111111111111 displeasure 4 0.08888888888888889 instruments 4 0.08888888888888889 circumstance 3 0.06666666666666667 ROW NUMBER() Returns the current row number of the query result over the window, starting with 1. legacySQL SELECT word , word count , ROW NUMBER () OVER ( PARTITION BY corpus ORDER BY word count DESC ) row num , FROM [ bigquery - public - data : samples . shakespeare ] WHERE corpus = 'othello' and length ( word ) > 10 LIMIT 5 Returns: word word count row num handkerchief 29 1 satisfaction 5 2 displeasure 4 3 instruments 4 4 circumstance 3 5 Other functions Syntax Other functions CASE WHEN ...
- Example: legacySQL SELECT page title , / Populate these columns as True or False, / / depending on the condition / IF ( page title CONTAINS 'search' , INTEGER ( total ), 0 ) AS search , IF ( page title CONTAINS 'Earth' OR page title CONTAINS 'Maps' , INTEGER ( total ), 0 ) AS geo , FROM / Subselect to return top revised Wikipedia articles / / containing 'Google', followed by additional text. / ( SELECT TOP ( title , 5 ) as page title , COUNT ( ) as total FROM [ bigquery - public - data : samples . wikipedia ] WHERE REGEXP MATCH ( title , r '^Google.+' ) AND wp namespace = 0 ); Returns: +---------------+--------+------+ page title search geo +---------------+--------+------+ Google search 4261 0 Google Earth 0 3874 Google Chrome 0 0 Google Maps 0 2617 Google bomb 0 0 +---------------+--------+------+ Using HASH to select a random sample of your data Some queries can provide a useful result using random subsampling of the result set.
- This example displays the top TLDs that are not in a list of common examples. legacySQL SELECT TLD ( repository homepage ) AS user tld , COUNT ( ) AS activity count FROM [ bigquery - public - data : samples . github timeline ] GROUP BY user tld HAVING / Only consider TLDs that are NOT NULL / / or in our list of common TLDs / user tld IS NOT NULL AND NOT user tld IN ( '' , '.com' , '.net' , '.org' , '.info' , '.edu' ) ORDER BY activity count DESC LIMIT 5 ; Returns: +----------+----------------+ user tld activity count +----------+----------------+ .de 22934 .io 17528 .me 13652 .fr 12895 .co.uk 9135 +----------+----------------+ Window functions Window functions, also known as analytic functions, enable calculations on a specific subset, or "window", of a result set.

### User-defined functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/user-defined-functions](https://docs.cloud.google.com/bigquery/docs/user-defined-functions)
- Source ID: `site-docs-reference`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- Custom masking routines support the following functions: AEAD.DECRYPT BYTES AEAD encryption function with KEYS.KEYSET CHAIN (raw key usage not supported) AEAD.DECRYPT STRING, AEAD encryption function with KEYS.KEYSET CHAIN (raw key usage not supported) AEAD.ENCRYPT AEAD encryption function with keyset chain (raw key usage not supported) CAST conversion function CONCAT string function CURRENT DATETIME datetime function CURRENT DATE date function CURRENT TIMESTAMP timestamp function CURRENT TIME time function DETERMINISTIC DECRYPT BYTES AEAD encryption function with KEYS.KEYSET CHAIN (raw key usage not supported) DETERMINISTIC DECRYPT STRING AEAD encryption function with KEYS.KEYSET CHAIN (raw key usage not supported) DETERMINISTIC ENCRYPT AEAD encryption function with KEYS.KEYSET CHAIN (raw key usage not supported) FARM FINGERPRINT hash function FROM BASE32 string function FROM BASE64 string function FROM HEX string function GENERATE UUID utility function KEYS.KEYSET CHAIN AEAD encryption function LENGTH string function LOWER string function LPAD string function LTRIM string function MD5 hash function REGEXP REPLACE string function REGEX EXTRACT string function REPLACE string function RPAD string function RTRIM string function SAFE CAST conversion function SHA1 hash function SHA256 hash function SHA512 hash function STARTS WITH string function SUBSTRING string function SUBSTR string function TO BASE32 string function TO BASE64 string function TO HEX string function TRIM string function UPPER string function Custom masking routines can accept either no inputs or one input within BigQuery data types , with the exception of GEOGRAPHY and STRUCT .
- Allow access to community-contributed functions within a VPC Service Controls perimeter For projects where VPC Service Controls is enabled and BigQuery is a protected service, you must define an egress rule to the bigquery-public-data project (Project ID: 1057666841514).
- Community-contributed functions Community contributed UDFs are available in the bigquery-public-data.persistent udfs public dataset and the open source bigquery-utils GitHub repository .
- The following example shows a SQL UDF that uses a scalar subquery to count the number of users with a given age in a user table: CREATE TEMP TABLE users AS ( SELECT 1 AS id , 10 AS age UNION ALL SELECT 2 AS id , 30 AS age UNION ALL SELECT 3 AS id , 10 AS age ); CREATE TEMP FUNCTION countUserByAge ( userAge INT64 ) AS ( ( SELECT COUNT ( 1 ) FROM users WHERE age = userAge ) ); SELECT countUserByAge ( 10 ) AS count user age 10 , countUserByAge ( 20 ) AS count user age 20 , countUserByAge ( 30 ) AS count user age 30 ; This example produces the following output: +-------------------+-------------------+-------------------+ count user age 10 count user age 20 count user age 30 +-------------------+-------------------+-------------------+ 2 0 1 +-------------------+-------------------+-------------------+ Default project in SQL expressions In the body of a SQL UDF, any references to BigQuery entities, such as tables or views, must include the project ID, unless the entity resides in the same project that contains the UDF.

