---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.172Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner data import from files"
feature_slug: "spanner-data-import-from-files"
latest_feature_date: "2025-09-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminClient"
  - "https://docs.cloud.google.com/spanner/docs/psql-commands"
keywords:
  - "importing"
  - "import"
  - "files"
  - "database"
  - "supports"
  - "into"
---

# Spanner data import from files

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner now supports importing data into a database from CSV files, MySQL dump files, or PostgreSQL dump files.

## Extended Definition

Spanner now supports importing data into a database from CSV files, MySQL dump files, or PostgreSQL dump files.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminClient)
- [https://docs.cloud.google.com/spanner/docs/psql-commands](https://docs.cloud.google.com/spanner/docs/psql-commands)

## Supporting Pages

### "Class DatabaseAdminAsyncClient (3.63.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient)
- Source ID: `site-python-reference`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import spanner admin database v1 from google.iam.v1 import iam policy pb2 # type: ignore async def sample test iam permissions(): Create a client client = spanner admin database v1.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import spanner admin database v1 from google.iam.v1 import iam policy pb2 # type: ignore async def sample get iam policy(): Create a client client = spanner admin database v1.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import spanner admin database v1 from google.iam.v1 import iam policy pb2 # type: ignore async def sample set iam policy(): Create a client client = spanner admin database v1.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import spanner admin database v1 async def sample internal update graph operation(): Create a client client = spanner admin database v1.

### "Class DatabaseAdminClient (3.63.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminClient)
- Source ID: `site-python-reference`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import spanner admin database v1 from google.iam.v1 import iam policy pb2 # type: ignore def sample test iam permissions(): Create a client client = spanner admin database v1.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import spanner admin database v1 from google.iam.v1 import iam policy pb2 # type: ignore def sample get iam policy(): Create a client client = spanner admin database v1.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import spanner admin database v1 from google.iam.v1 import iam policy pb2 # type: ignore def sample set iam policy(): Create a client client = spanner admin database v1.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import spanner admin database v1 def sample internal update graph operation(): Create a client client = spanner admin database v1.

### psql command-line tool \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/psql-commands](https://docs.cloud.google.com/spanner/docs/psql-commands)
- Source ID: `site-docs-reference`
- Final score: 120
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Examples DML The following example shows how to submit a batch of INSERT statements. psql - h localhost - p 5432 - c "INSERT INTO users (id, age, firstname) VALUES (1, 25, 'Alex'); \ INSERT INTO users (id, age, firstname) VALUES (2, 31, 'Dana'); \ INSERT INTO users (id, age, firstname) VALUES (3, 54, 'Izumi');" The next example shows how to execute the SQL statements in the file insert contacts.sql . psql - h localhost - c "$(cat contacts insert.sql)" DDL This example submits a batch of ALTER TABLE statements. psql - h localhost - p 5432 test - db - c "ALTER TABLE users ADD col1 integer; \ ALTER TABLE users ADD col2 text; ALTER TABLE users ADD col3 float8;" COPY command for importing data Use the COPY FROM STDIN command to import data from a text or CSV file into a PostgreSQL-dialect database.
- Although only STDIN is supported, you can import using COPY by piping files into psql .
- The transactions are executed in parallel, so data after the row in the import file that caused the error might be imported to the database before the COPY operation is halted.
- Examples This example imports data from the text-formatted file named mydata.txt into table mytable .

