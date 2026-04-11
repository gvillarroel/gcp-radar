---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.777Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "CONTAINS_SUBSTR SQL function"
feature_slug: "contains-substr-sql-function"
latest_feature_date: "2021-07-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions"
  - "https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql"
  - "https://docs.cloud.google.com/bigquery/docs/user-defined-functions"
keywords:
  - "contains substring"
  - "CONTAINS_SUBSTR function"
  - "CONTAINS_SUBSTR()"
  - "CONTAINS_SUBSTR"
  - "contains_substr"
  - "Standard SQL function"
  - "string function"
---

# CONTAINS_SUBSTR SQL function

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery standard SQL introduced the CONTAINS_SUBSTR string function.

## Extended Definition

BigQuery standard SQL introduced the CONTAINS_SUBSTR string function.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- [https://docs.cloud.google.com/bigquery/docs/user-defined-functions](https://docs.cloud.google.com/bigquery/docs/user-defined-functions)

## Supporting Pages

### String functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- Source ID: `site-docs-root`
- Final score: 82
- Re-rank relevance: STRONG
- Re-rank rationale: The page explicitly lists CONTAINS SUBSTR with a behavior summary, directly defining how the function works in BigQuery SQL.

Evidence snippets:
- SELECT CONTAINS SUBSTR ( 'hello' , NULL ) AS result ; -- Throws an error The following examples reference a table called Recipes that you can emulate with a WITH clause like this: WITH Recipes AS ( SELECT 'Blueberry pancakes' as Breakfast , 'Egg salad sandwich' as Lunch , 'Potato dumplings' as Dinner UNION ALL SELECT 'Potato pancakes' , 'Toasted cheese sandwich' , 'Beef stroganoff' UNION ALL SELECT 'Ham scramble' , 'Steak avocado salad' , 'Tomato pasta' UNION ALL SELECT 'Avocado toast' , 'Tomato soup' , 'Blueberry salmon' UNION ALL SELECT 'Corned beef hash' , 'Lentil potato soup' , 'Glazed ham' ) SELECT FROM Recipes ; / -------------------+-------------------------+------------------+ Breakfast Lunch Dinner +-------------------+-------------------------+------------------+ Bluberry pancakes Egg salad sandwich Potato dumplings Potato pancakes Toasted cheese sandwich Beef stroganoff Ham scramble Steak avocado salad Tomato pasta Avocado toast Tomato soup Blueberry samon Corned beef hash Lentil potato soup Glazed ham +-------------------+-------------------------+------------------ / The following query searches across all columns of the Recipes table for the value toast and returns the rows that contain this value.
- Bar +--------------------- / SELECT CONCAT ( 'Summer' , ' ' , 1923 ) as release date ; / ---------------------+ release date +---------------------+ Summer 1923 +--------------------- / With Employees AS ( SELECT 'John' AS first name , 'Doe' AS last name UNION ALL SELECT 'Jane' AS first name , 'Smith' AS last name UNION ALL SELECT 'Joe' AS first name , 'Jackson' AS last name ) SELECT CONCAT ( first name , ' ' , last name ) AS full name FROM Employees ; / ---------------------+ full name +---------------------+ John Doe Jane Smith Joe Jackson +--------------------- / CONTAINS SUBSTR CONTAINS SUBSTR ( expression , search value literal [ , json scope = > json scope value ] ) Description Performs a normalized, case-insensitive search to see if a value exists as a substring in an expression.
- SELECT FROM Recipes WHERE CONTAINS SUBSTR ( Recipes , 'toast' ); / -------------------+-------------------------+------------------+ Breakfast Lunch Dinner +-------------------+-------------------------+------------------+ Potato pancakes Toasted cheese sandwich Beef stroganoff Avocado toast Tomato soup Blueberry samon +-------------------+-------------------------+------------------ / The following query searches the Lunch and Dinner columns of the Recipe table for the value potato and returns the row if either column contains this value.
- SELECT FROM Recipes WHERE CONTAINS SUBSTR (( Lunch , Dinner ), 'potato' ); / -------------------+-------------------------+------------------+ Breakfast Lunch Dinner +-------------------+-------------------------+------------------+ Bluberry pancakes Egg salad sandwich Potato dumplings Corned beef hash Lentil potato soup Glazed ham +-------------------+-------------------------+------------------ / The following query searches across all columns of the Recipes table except for the Lunch and Dinner columns.

### "Legacy SQL Syntax, Functions and Operators \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- Source ID: `site-docs-reference`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- Uses the 'LEFT()' string function to return only the first 7 characters of the formatted timestamp. / LEFT ( FORMAT UTC USEC ( UTC USEC TO MONTH ( timestamp 1000000 )), 7 ) AS month , SUM ( LENGTH ( comment )) as total chars used FROM [ bigquery - public - data : samples . wikipedia ] WHERE ( contributor username != '' AND contributor username IS NOT NULL ) AND timestamp > 1133395200 AND timestamp < 1157068800 GROUP BY contributor username , month ORDER BY total chars used DESC ; Returns (truncated): +--------------------------------+---------+-----------------------+ contributor username month total chars used +--------------------------------+---------+-----------------------+ Kingbotk 2006-08 18015066 SmackBot 2006-03 7838365 SmackBot 2006-05 5148863 Tawkerbot2 2006-05 4434348 Cydebot 2006-06 3380577 etc ...
- Example: legacySQL SELECT / Replace white spaces in the title with underscores. / REGEXP REPLACE ( title , r '\s+' , ' ' ) AS regexp title , revisions FROM ( SELECT title , COUNT ( revision id ) as revisions FROM [ bigquery - public - data : samples . wikipedia ] WHERE wp namespace = 0 / Match titles that start with 'G', end with 'e', and contain at least two 'o's. / AND REGEXP MATCH ( title , r '^G. o. o. e$' ) GROUP BY title ORDER BY revisions DESC LIMIT 100 ); Using regular expressions on integer or float data While BigQuery's regular expression functions only work for string data, it's possible to use the STRING() function to cast integer or float data into string format.
- Example: legacySQL SELECT corpus date , / Cast the corpus date to a string value / REGEXP REPLACE ( STRING ( corpus date ), '^16' , 'Written in the sixteen hundreds, in the year \'' ) AS date string FROM [bigquery-public-data:samples.shakespeare] / Cast the corpus date to string, / / match values that begin with ' 16 ' / WHERE REGEXP MATCH(STRING(corpus date), ' ^ 16 ' ) GROUP BY corpus date , date string ORDER BY date string DESC LIMIT 5 ; String functions String functions operate on string data.
- Syntax String functions CONCAT() Returns the concatenation of two or more strings, or NULL if any of the values are NULL. expr CONTAINS ' str ' Returns true if expr contains the specified string argument.

### User-defined functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/user-defined-functions](https://docs.cloud.google.com/bigquery/docs/user-defined-functions)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Custom masking routines support the following functions: AEAD.DECRYPT BYTES AEAD encryption function with KEYS.KEYSET CHAIN (raw key usage not supported) AEAD.DECRYPT STRING, AEAD encryption function with KEYS.KEYSET CHAIN (raw key usage not supported) AEAD.ENCRYPT AEAD encryption function with keyset chain (raw key usage not supported) CAST conversion function CONCAT string function CURRENT DATETIME datetime function CURRENT DATE date function CURRENT TIMESTAMP timestamp function CURRENT TIME time function DETERMINISTIC DECRYPT BYTES AEAD encryption function with KEYS.KEYSET CHAIN (raw key usage not supported) DETERMINISTIC DECRYPT STRING AEAD encryption function with KEYS.KEYSET CHAIN (raw key usage not supported) DETERMINISTIC ENCRYPT AEAD encryption function with KEYS.KEYSET CHAIN (raw key usage not supported) FARM FINGERPRINT hash function FROM BASE32 string function FROM BASE64 string function FROM HEX string function GENERATE UUID utility function KEYS.KEYSET CHAIN AEAD encryption function LENGTH string function LOWER string function LPAD string function LTRIM string function MD5 hash function REGEXP REPLACE string function REGEX EXTRACT string function REPLACE string function RPAD string function RTRIM string function SAFE CAST conversion function SHA1 hash function SHA256 hash function SHA512 hash function STARTS WITH string function SUBSTRING string function SUBSTR string function TO BASE32 string function TO BASE64 string function TO HEX string function TRIM string function UPPER string function Custom masking routines can accept either no inputs or one input within BigQuery data types , with the exception of GEOGRAPHY and STRUCT .

