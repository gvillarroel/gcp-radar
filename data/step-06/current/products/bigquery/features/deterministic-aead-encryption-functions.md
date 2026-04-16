---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.681Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Deterministic AEAD encryption functions"
feature_slug: "deterministic-aead-encryption-functions"
latest_feature_date: "2022-06-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts"
  - "https://docs.cloud.google.com/bigquery/docs/user-defined-functions"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "deterministic"
  - "aead"
  - "encryption"
  - "functions"
  - "sql"
  - "provide"
  - "column"
  - "level"
---

# Deterministic AEAD encryption functions

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Deterministic AEAD SQL functions provide column-level encryption and decryption while supporting aggregation and joins.

## Extended Definition

Deterministic AEAD SQL functions provide column-level encryption and decryption while supporting aggregation and joins.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts](https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts)
- [https://docs.cloud.google.com/bigquery/docs/user-defined-functions](https://docs.cloud.google.com/bigquery/docs/user-defined-functions)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### AEAD encryption concepts \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts](https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts)
- Source ID: `site-docs-reference-2`
- Final score: 193
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- AEAD encryption functions allow you to create keysets that contain keys for encryption and decryption, use these keys to encrypt and decrypt individual values in a table, and rotate keys within a keyset.
- Additional data AEAD encryption functions support the use of an additional data argument, also known as associated data (AD) or additional authenticated data.
- For a description of the different AEAD encryption functions that GoogleSQL supports, see AEAD encryption functions .
- Advanced Encryption Standard (AES) AEAD encryption functions use Advanced Encryption Standard (AES) encryption .

### User-defined functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/user-defined-functions](https://docs.cloud.google.com/bigquery/docs/user-defined-functions)
- Source ID: `site-docs-reference`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Custom masking routines support the following functions: AEAD.DECRYPT BYTES AEAD encryption function with KEYS.KEYSET CHAIN (raw key usage not supported) AEAD.DECRYPT STRING, AEAD encryption function with KEYS.KEYSET CHAIN (raw key usage not supported) AEAD.ENCRYPT AEAD encryption function with keyset chain (raw key usage not supported) CAST conversion function CONCAT string function CURRENT DATETIME datetime function CURRENT DATE date function CURRENT TIMESTAMP timestamp function CURRENT TIME time function DETERMINISTIC DECRYPT BYTES AEAD encryption function with KEYS.KEYSET CHAIN (raw key usage not supported) DETERMINISTIC DECRYPT STRING AEAD encryption function with KEYS.KEYSET CHAIN (raw key usage not supported) DETERMINISTIC ENCRYPT AEAD encryption function with KEYS.KEYSET CHAIN (raw key usage not supported) FARM FINGERPRINT hash function FROM BASE32 string function FROM BASE64 string function FROM HEX string function GENERATE UUID utility function KEYS.KEYSET CHAIN AEAD encryption function LENGTH string function LOWER string function LPAD string function LTRIM string function MD5 hash function REGEXP REPLACE string function REGEX EXTRACT string function REPLACE string function RPAD string function RTRIM string function SAFE CAST conversion function SHA1 hash function SHA256 hash function SHA512 hash function STARTS WITH string function SUBSTRING string function SUBSTR string function TO BASE32 string function TO BASE64 string function TO HEX string function TRIM string function UPPER string function Custom masking routines can accept either no inputs or one input within BigQuery data types , with the exception of GEOGRAPHY and STRUCT .
- REGEXP REPLACE ( ssn , '[0-9]' , 'X' ) # 123-45-6789 -> XXX-XX-XXXX ); The following example hashes with user provided salt , using the SHA256 function: CREATE OR REPLACE FUNCTION project .dataset.masking routine1 ( ssn STRING ) RETURNS STRING OPTIONS ( data governance type = 'DATA MASKING' ) AS ( CAST ( SHA256 ( CONCAT ( ssn , ' salt ' )) AS STRING format 'HEX' ) ); The following example masks a DATETIME column with a constant value: CREATE OR REPLACE FUNCTION project .dataset.masking routine2 ( column DATETIME ) RETURNS DATETIME OPTIONS ( data governance type = 'DATA MASKING' ) AS ( SAFE CAST ( '2023-09-07' AS DATETIME ) ); As a best practise, use the SAFE prefix wherever possible to avoid exposing raw data through error messages.
- Allow access to community-contributed functions within a VPC Service Controls perimeter For projects where VPC Service Controls is enabled and BigQuery is a protected service, you must define an egress rule to the bigquery-public-data project (Project ID: 1057666841514).
- For example: SELECT id , my utils . my function ( value ) FROM sales ; Limitations The following limitations apply to temporary and persistent user-defined functions: The DOM objects Window , Document , and Node , and functions that require them, are not supported.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 159
- Re-rank relevance: N/A

Evidence snippets:
- The constant expression cannot contain: A reference to a table Subqueries or SQL statements such as SELECT , CREATE , or UPDATE User-defined functions, aggregate functions, or analytic functions The following scalar functions: ARRAY TO STRING REPLACE REGEXP REPLACE RAND FORMAT LPAD RPAD REPEAT SESSION USER GENERATE ARRAY GENERATE DATE ARRAY If VALUE evaluates to NULL , the corresponding option NAME in the CREATE TABLE statement is ignored. column option list Specify a column option list in the following format: NAME=VALUE, ...
- You can use DDL commands to create, alter, and delete resources, such as the following: Datasets Tables Table schemas Table clones Table snapshots Views Connections User-defined functions (UDFs) Indexes Capacity commitments and reservations Row-level access policies Default configuration settings Required permissions To create a job that runs a DDL statement, you must have the bigquery.jobs.create permission for the project where you are running the job.
- The constant expression cannot contain: A reference to a table Subqueries or SQL statements such as SELECT , CREATE , or UPDATE User-defined functions, aggregate functions, or analytic functions The following scalar functions: ARRAY TO STRING REPLACE REGEXP REPLACE RAND FORMAT LPAD RPAD REPEAT SESSION USER GENERATE ARRAY GENERATE DATE ARRAY Setting the VALUE replaces the existing value of that option for the column, if there was one.
- The constant expression cannot contain: A reference to a table Subqueries or SQL statements such as SELECT , CREATE , or UPDATE User-defined functions, aggregate functions, or analytic functions The following scalar functions: ARRAY TO STRING REPLACE REGEXP REPLACE RAND FORMAT LPAD RPAD REPEAT SESSION USER GENERATE ARRAY GENERATE DATE ARRAY Setting the VALUE replaces the existing value of that option for the column, if there was one.

