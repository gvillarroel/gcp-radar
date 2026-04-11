---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:11:59.751Z"
product_name: "Datastream"
product_slug: "datastream"
feature_name: "PostgreSQL ENUM data type support"
feature_slug: "postgresql-enum-data-type-support"
latest_feature_date: "2023-06-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/datastream/docs/create-a-stream"
  - "https://docs.cloud.google.com/datastream/docs/release-notes"
  - "https://docs.cloud.google.com/datastream/docs/faq"
keywords:
  - "postgresql"
  - "enum"
  - "type"
  - "datastream"
  - "supports"
  - "the"
  - "for"
  - "sources"
---

# PostgreSQL ENUM data type support

Product: Datastream
Coverage: LOW

## Step 02 Summary

Datastream supports the ENUM data type for PostgreSQL sources.

## Extended Definition

Datastream supports the ENUM data type for PostgreSQL sources.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/datastream/docs/create-a-stream](https://docs.cloud.google.com/datastream/docs/create-a-stream)
- [https://docs.cloud.google.com/datastream/docs/release-notes](https://docs.cloud.google.com/datastream/docs/release-notes)
- [https://docs.cloud.google.com/datastream/docs/faq](https://docs.cloud.google.com/datastream/docs/faq)

## Supporting Pages

### Create a stream \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/create-a-stream](https://docs.cloud.google.com/datastream/docs/create-a-stream)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- If you select the JSON format, then two checkboxes appear: Include a Unified Types schema file in the file path : If you select this checkbox, then Datastream writes two files to Cloud Storage: a JSON data file and an Avro schema file .
- If your source database is PostgreSQL, then Datastream performs the following checks: Check Description Connectivity to PostgreSQL database Datastream verifies that it can connect to the source PostgreSQL database.
- Source type Select the profile type that you specified when you created a connection profile for your Oracle , MySQL , SQL Server , PostgreSQL , Spanner , Salesforce source or MongoDB source.
- Datastream supports the Parquet file format and the Iceberg table format.

### Datastream release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/release-notes](https://docs.cloud.google.com/datastream/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- November 10, 2023 Feature You can now stream the following large object data types for Oracle sources: BLOB CLOB NCLOB Note: For Datastream to stream large object data types to the destination, you need to pass the streamLargeObjects flag in your request to create or update a stream.
- November 22, 2023 Feature Datastream now supports SSL/TLS encryption for connections to PostgreSQL sources that don't require client certificates.
- January 23, 2024 Feature Datastream now supports the JA16SJIS and JA16SJISTILDE character encodings for Oracle sources.
- June 21, 2024 Feature Datastream now supports the change tables CDC method for SQL Server sources.

### FAQ \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/faq](https://docs.cloud.google.com/datastream/docs/faq)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- Datastream uses PostgreSQL's logical decoding feature to extract the change events from PostgreSQL Does Datastream support replication from AlloyDB for PostgreSQL or AlloyDB Omni sources?
- Datastream takes the original source data type (for example, a MySQL or PostgreSQL NUMERIC type or an Oracle NUMBER type), and normalizes it into a Datastream unified type .
- Datastream supports streaming data from Oracle, MySQL, PostgreSQL, AlloyDB for PostgreSQL, SQL Server, Salesforce, and MongoDB sources, both cloud-hosted and self-managed.
- Yes, Datastream supports the TCPS protocol for SSL/TLS-encrypted connections to Oracle sources.

