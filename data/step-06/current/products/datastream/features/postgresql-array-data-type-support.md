---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:11:59.749Z"
product_name: "Datastream"
product_slug: "datastream"
feature_name: "PostgreSQL ARRAY data type support"
feature_slug: "postgresql-array-data-type-support"
latest_feature_date: "2023-10-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/datastream/docs/bq-map-data-types"
  - "https://docs.cloud.google.com/datastream/docs/release-notes"
  - "https://docs.cloud.google.com/datastream/docs/create-a-stream"
keywords:
  - "postgresql"
  - "array"
  - "type"
  - "datastream"
  - "supports"
  - "the"
---

# PostgreSQL ARRAY data type support

Product: Datastream
Coverage: LOW

## Step 02 Summary

Datastream supports the PostgreSQL ARRAY data type.

## Extended Definition

Datastream supports the PostgreSQL ARRAY data type.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/datastream/docs/bq-map-data-types](https://docs.cloud.google.com/datastream/docs/bq-map-data-types)
- [https://docs.cloud.google.com/datastream/docs/release-notes](https://docs.cloud.google.com/datastream/docs/release-notes)
- [https://docs.cloud.google.com/datastream/docs/create-a-stream](https://docs.cloud.google.com/datastream/docs/create-a-stream)

## Supporting Pages

### Data type mappings in BigQuery \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/bq-map-data-types](https://docs.cloud.google.com/datastream/docs/bq-map-data-types)
- Source ID: `site-docs-root-2`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Source data type Example value BigQuery JSON type value DOUBLE 3.1415926535 3.1415926535 STRING "Hello, MongoDB!" "Hello, MongoDB!" ARRAY [ "item1", 123, true, { subItem: "object in array" } ] ["item1",123,true,{"subItem":"object in array"}] BINARY DATA new BinData(0, "SGVsbG8gQmluYXJ5IERhdGE=") {"$binary":"SGVsbG8gQmluYXJ5IERhdGE=","$type":"00"} BOOLEAN true true DATE 2024-12-25T10:30:00.000+00:00 {"$date": 1735122600000} NULL null null REGEX /^mongo(db)?$/i {"$options":"i","$regex":"^mongo(db)?$"} JAVASCRIPT function() {return this.stringField.length;} {"$code":"function() {\n return this.stringField.length;\n }"} DECIMAL128 NumberDecimal("1234567890.1234567890") {"$numberDecimal":"1234567890.1234567890"} OBJECTID ObjectId('673c5d8dbfe2e51808cc2c3d') {"$oid": "673c5d8dbfe2e51808cc2c3d"} LONG 3567587327 {"$numberLong": "3567587327"} INT32 42 42 INT64 1864712049423024127 {"$numberLong": "1864712049423024127"} TIMESTAMP new Timestamp(1747888877, 1) {"$timestamp":{"i":1,"t":1747888877}} Query a PostgreSQL array as a BigQuery array data type If you prefer to query a PostgreSQL array as a BigQuery ARRAY data type , you can convert the JSON values to a BigQuery array using the BigQuery JSON VALUE ARRAY function: SELECT ARRAY ( SELECT CAST ( element AS TYPE ) FROM UNNEST ( JSON VALUE ARRAY ( BQ COLUMN NAME , '$' )) AS element ) AS array col Replace the following: TYPE : the BigQuery type that matches the element type in the PostgreSQL source array.
- Salesforce URL STRING Spanner (GoogleSQL) ARRAY JSON Spanner (GoogleSQL) BOOL BOOLEAN Spanner (GoogleSQL) BYTES BYTES Spanner (GoogleSQL) DATE DATE Spanner (GoogleSQL) FLOAT32 FLOAT64 Spanner (GoogleSQL) FLOAT64 FLOAT64 Spanner (GoogleSQL) INT64 INT64 Spanner (GoogleSQL) JSON JSON Spanner (GoogleSQL) NUMERIC NUMERIC Spanner (GoogleSQL) STRING STRING Spanner (GoogleSQL) TIMESTAMP TIMESTAMP WITH TIME ZONE Spanner (GoogleSQL) PROTO UNSUPPORTED Spanner (GoogleSQL) ENUM UNSUPPORTED Spanner (PostgreSQL) ARRAY JSON Spanner (PostgreSQL) BIGINT INT64 Spanner (PostgreSQL) BOOL BOOLEAN Spanner (PostgreSQL) BYTEA BYTES Spanner (PostgreSQL) DATE DATE Spanner (PostgreSQL) DECIMAL NUMERIC Spanner (PostgreSQL) DOUBLE PRECISION FLOAT64 Spanner (PostgreSQL) FLOAT8 FLOAT64 Spanner (PostgreSQL) INT8 INT64 Spanner (PostgreSQL) JSONB JSON Spanner (PostgreSQL) NUMERIC NUMERIC Spanner (PostgreSQL) TIMESTAMP WITH TIME ZONE TIMESTAMP WITH TIME ZONE Spanner (PostgreSQL) TIMESTAMPZ TIMESTAMP WITH TIME ZONE Spanner (PostgreSQL) VARCHAR STRING MongoDB data types MongoDB binary JSON (BSON) documents are written to BigQuery in MongoDB Extended JSON (v1) strict mode format.
- PostgreSQL BIGINT INT64 PostgreSQL BIT BYTES PostgreSQL BIT VARYING BYTES PostgreSQL BOOLEAN BOOLEAN PostgreSQL BOX UNSUPPORTED PostgreSQL BYTEA BYTES PostgreSQL CHARACTER STRING PostgreSQL CHARACTER VARYING STRING PostgreSQL CIDR STRING PostgreSQL CIRCLE UNSUPPORTED PostgreSQL DATE DATE PostgreSQL DOUBLE PRECISION FLOAT64 PostgreSQL ENUM STRING PostgreSQL INET STRING PostgreSQL INTEGER INT64 PostgreSQL INTERVAL INTERVAL PostgreSQL JSON JSON PostgreSQL JSONB JSON PostgreSQL LINE UNSUPPORTED PostgreSQL LSEG UNSUPPORTED PostgreSQL MACADDR STRING PostgreSQL MONEY FLOAT64 PostgreSQL NUMERIC If precision = -1 , then STRING (BigQuery NUMERIC types require fixed precision).
- All sources MySQL Oracle PostgreSQL Spanner (GoogleSQL) Spanner (PostgreSQL) SQL Server Salesforce Source database Source data type BigQuery data type MySQL BIGINT(size) INT64 MySQL BIGINT (unsigned) DECIMAL MySQL BINARY(size) STRING (hex encoded) MySQL BIT(size) INT64 MySQL BLOB(size) STRING (hex encoded) MySQL BOOL INT64 MySQL CHAR(size) STRING MySQL DATE DATE MySQL DATETIME(fsp) DATETIME MySQL DECIMAL(precision, scale) If the precision value is NUMERIC .

### Datastream release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/release-notes](https://docs.cloud.google.com/datastream/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- October 20, 2023 Feature Support for the PostgreSQL ARRAY data type is now added in Datastream.
- November 10, 2023 Feature You can now stream the following large object data types for Oracle sources: BLOB CLOB NCLOB Note: For Datastream to stream large object data types to the destination, you need to pass the streamLargeObjects flag in your request to create or update a stream.
- June 16, 2022 Feature Datastream now supports the use of tags on its resources, which include private connectivity configurations, connection profiles, and streams.
- November 22, 2023 Feature Datastream now supports SSL/TLS encryption for connections to PostgreSQL sources that don't require client certificates.

### Create a stream \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/create-a-stream](https://docs.cloud.google.com/datastream/docs/create-a-stream)
- Source ID: `site-docs-root`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- If you select the JSON format, then two checkboxes appear: Include a Unified Types schema file in the file path : If you select this checkbox, then Datastream writes two files to Cloud Storage: a JSON data file and an Avro schema file .
- If your source database is PostgreSQL, then Datastream performs the following checks: Check Description Connectivity to PostgreSQL database Datastream verifies that it can connect to the source PostgreSQL database.
- Replication slot configuration Datastream verifies whether the PostgreSQL replication slot exists and is active, whether Datastream has the permissions required to access it, and whether it is configured correctly.
- SQL Server database validations Datastream checks whether the source database is configured properly, whether all replication requirements are met and whether there are no unsupported data types in the columns.

