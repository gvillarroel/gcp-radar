---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.790Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "PostGIS GDAL driver support"
feature_slug: "postgis-gdal-driver-support"
latest_feature_date: "2023-05-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/client-side-encryption"
  - "https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication"
  - "https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users"
keywords:
  - "driver"
  - "gdal"
  - "postgis"
  - "supports"
---

# PostGIS GDAL driver support

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for PostgreSQL supports the PostGIS GDAL driver.

## Extended Definition

Cloud SQL for PostgreSQL supports the PostGIS GDAL driver.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/client-side-encryption](https://docs.cloud.google.com/sql/docs/postgres/client-side-encryption)
- [https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication](https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication)
- [https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users)

## Supporting Pages

### "Cloud SQL built-in database authentication \_|\_ Cloud SQL for PostgreSQL\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication](https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication)
- Source ID: `site-iam-reference`
- Final score: 30
- Re-rank relevance: N/A

### "About client-side encryption \_|\_ Cloud SQL for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/client-side-encryption](https://docs.cloud.google.com/sql/docs/postgres/client-side-encryption)
- Source ID: `site-iam-reference`
- Final score: 29
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- URL . create ( drivername = "postgresql+pg8000" , username = db user , # e.g. "my-database-user" password = db pass , # e.g. "my-database-password" database = db name , # e.g. "my-database-name" query = { "unix sock" : " {} / {} /.s.PGSQL.5432" . format ( db socket dir , instance connection name # e.g. "/cloudsql" ) # i.e "<PROJECT-NAME>:<INSTANCE-REGION>:<INSTANCE-NAME>" }, ), ) print ( "Created Unix socket connection pool" ) return pool def init db ( db user : str , db pass : str , db name : str , table name : str , instance connection name : str = None , db socket dir : str = None , db host : str = None , ) - > sqlalchemy . engine . base .
- Tink supports envelope encryption in C++, Java, Go, and Python using the AEAD API: public interface Aead { byte [] encrypt ( final byte [] plaintext, final byte [] associatedData ) throws… byte [] decrypt ( final byte [] ciphertext, final byte [] associatedData ) throws… } Besides the normal message/ciphertext argument, the encrypt and decrypt methods support optional associated data.
- URL . create ( drivername = "postgresql+pg8000" , username = db user , # e.g. "my-database-user" password = db pass , # e.g. "my-database-password" host = db hostname , # e.g. "127.0.0.1" port = db port , # e.g.
- Cloud KMS supports many different key types.

### "Manage users with IAM database authentication \_|\_ Cloud SQL for PostgreSQL\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users)
- Source ID: `site-iam-reference`
- Final score: 22
- Re-rank relevance: N/A

