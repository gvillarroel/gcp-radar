# Datastream

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 49
Unique features: 51

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-01-28 | Spanner source support |  | Datastream can use Spanner databases as a source for streaming data. |
| 2025-12-17 | Regional availability: europe-west10 |  | Datastream is available in the europe-west10 (Berlin) region. |
| 2025-12-17 | Regional availability: europe-west12 |  | Datastream is available in the europe-west12 (Turin) region. |
| 2025-12-17 | Regional availability: me-central1 |  | Datastream is available in the me-central1 (Doha) region. |
| 2025-12-17 | Regional availability: me-west1 |  | Datastream is available in the me-west1 (Tel Aviv) region. |
| 2025-11-17 | BigQuery destination partitioning and clustering |  | Datastream supports partitioning and clustering for BigQuery destinations. |
| 2025-09-30 | Salesforce source support |  | Datastream can use Salesforce as a source for streaming data; Datastream can use Salesforce as a source for streaming data. |
| 2025-09-23 | MongoDB source support |  | Datastream can use MongoDB as a source for streaming data; Datastream can use MongoDB as a source for streaming data. |
| 2025-06-30 | Regional availability: northamerica-south1 |  | Datastream is available in the northamerica-south1 (Mexico) region. |
| 2025-06-23 | BigLake Iceberg destination support |  | Datastream supports BigLake Iceberg tables as a destination in the console and API. |
| 2025-05-15 | MySQL GTID-based replication |  | Datastream supports global transaction identifier based replication for MySQL sources; Datastream supports global transaction identifier based replication for MySQL sources. |
| 2025-05-13 | Regional availability: europe-north2 |  | Datastream is available in the europe-north2 (Stockholm) region. |
| 2025-05-05 | Private Service Connect interfaces |  | Datastream supports Private Service Connect interfaces as a private connectivity method. |
| 2025-04-09 | BigLake managed table destination support |  | The Datastream API supports streaming data to BigLake managed tables. |
| 2025-03-20 | Secret Manager integration |  | Datastream can use Secret Manager to securely store authentication resources. |
| 2024-12-09 | Oracle binary log reader CDC method |  | Datastream supports the binary log reader change data capture method for Oracle sources. |
| 2024-10-23 | Regional availability: europe-southwest1 |  | Datastream is available in the europe-southwest1 (Madrid) region. |
| 2024-10-18 | Regional availability: us-south1 |  | Datastream is available in the us-south1 (Dallas) region. |
| 2024-10-11 | Regional availability: me-central2 |  | Datastream is available in the me-central2 (Dammam) region. |
| 2024-10-07 | Cloud Storage maximum row size |  | Datastream supports row sizes up to 100 MB when streaming data to Cloud Storage. |
| 2024-07-23 | SQL Server source support |  | Datastream can use SQL Server as a source for streaming data; Datastream can use SQL Server as a source for streaming data. |
| 2024-07-10 | Regional availability: us-east5 |  | Datastream is available in the us-east5 (Columbus) region. |
| 2024-06-21 | SQL Server change tables CDC method |  | Datastream supports the change tables change data capture method for SQL Server sources. |
| 2024-06-19 | BigQuery append-only write mode |  | Datastream supports append-only write mode when ingesting data to BigQuery. |
| 2024-01-26 | Oracle stream recovery |  | Datastream can recover a stream for an Oracle source. |
| 2024-01-26 | Oracle stream start from specific position |  | Datastream can start an Oracle source stream from a specific position. |
| 2024-01-23 | Oracle JA16SJIS and JA16SJISTILDE character encoding support |  | Datastream supports the JA16SJIS and JA16SJISTILDE character encodings for Oracle sources. |
| 2024-01-16 | BigQuery maximum event size |  | Datastream supports event sizes up to 20 MB when streaming data to BigQuery; Datastream supports event sizes up to 10 MB when streaming data to BigQuery. |
| 2023-11-22 | PostgreSQL SSL/TLS without client certificates |  | Datastream supports SSL/TLS encryption for PostgreSQL source connections that do not require client certificates. |
| 2023-11-10 | Oracle large object streaming |  | Datastream can stream Oracle large object data types including BLOB, CLOB, and NCLOB. |
| 2023-11-09 | MySQL stream start from specific binary log position |  | Datastream can start a MySQL source stream from a specific binary log position using the API. |
| 2023-11-09 | Permanent failed stream recovery |  | Datastream can recover a permanently failed stream. |
| 2023-10-20 | PostgreSQL ARRAY data type support |  | Datastream supports the PostgreSQL ARRAY data type. |
| 2023-09-10 | Oracle SSL/TLS encryption |  | Datastream supports SSL/TLS encryption for Oracle sources. |
| 2023-06-30 | PostgreSQL CITEXT data type support |  | Datastream supports the CITEXT data type for PostgreSQL sources. |
| 2023-06-30 | PostgreSQL ENUM data type support |  | Datastream supports the ENUM data type for PostgreSQL sources. |
| 2023-06-07 | Cloud Storage maximum event size |  | Datastream supports event sizes up to 30 MB when streaming data to Cloud Storage. |
| 2023-05-11 | PostgreSQL backfill for tables of any size |  | Datastream supports backfill for PostgreSQL tables of any size. |
| 2023-04-17 | Oracle multi-tenant architecture support |  | Datastream supports Oracle multi-tenant CDB and PDB architecture. |
| 2023-04-04 | BigQuery destination support |  | Datastream supports BigQuery as a destination for streamed data; Datastream supports BigQuery as a destination for streamed data. |
| 2023-04-04 | PostgreSQL source support |  | Datastream can use PostgreSQL as a source for streaming data; Datastream can use PostgreSQL as a source for streaming data. |
| 2023-02-27 | Terraform support for connection profile resources |  | Terraform supports Datastream connection profile resources. |
| 2023-02-27 | Terraform support for private connectivity resources |  | Terraform supports Datastream private connectivity resources. |
| 2023-02-27 | Terraform support for stream resources |  | Terraform supports Datastream stream resources. |
| 2023-02-21 | Maximum concurrent backfill tasks configuration |  | The Datastream API can set the maximum number of concurrent backfill tasks for a stream. |
| 2023-01-11 | Connection profile force parameter |  | The Datastream API supports a force parameter on connection profile resources. |
| 2023-01-11 | Connection profile validate_only parameter |  | The Datastream API supports a validate_only parameter on connection profile resources. |
| 2022-08-30 | Maximum concurrent CDC tasks configuration |  | The Datastream API can set the maximum number of concurrent CDC tasks for a stream. |
| 2022-06-16 | Resource tags support |  | Datastream supports tags on private connectivity configurations, connection profiles, and streams for fine-grained access control. |
| 2022-05-13 | Oracle backfill for tables over 100 million rows |  | Datastream supports backfilling Oracle tables with more than 100 million rows. |
| 2021-12-14 | Customer-managed encryption keys |  | Datastream supports customer-managed encryption keys for encryption control. |

Source file slug: `datastream.md`

