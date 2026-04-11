---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:11:59.751Z"
product_name: "Datastream"
product_slug: "datastream"
feature_name: "PostgreSQL CITEXT data type support"
feature_slug: "postgresql-citext-data-type-support"
latest_feature_date: "2023-06-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/datastream/docs/create-a-stream"
  - "https://docs.cloud.google.com/datastream/docs/faq"
  - "https://docs.cloud.google.com/datastream/docs/implementing-datastream-dataflow-analytics"
keywords:
  - "postgresql"
  - "citext"
  - "type"
  - "datastream"
  - "supports"
  - "the"
  - "for"
  - "sources"
---

# PostgreSQL CITEXT data type support

Product: Datastream
Coverage: LOW

## Step 02 Summary

Datastream supports the CITEXT data type for PostgreSQL sources.

## Extended Definition

Datastream supports the CITEXT data type for PostgreSQL sources.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/datastream/docs/create-a-stream](https://docs.cloud.google.com/datastream/docs/create-a-stream)
- [https://docs.cloud.google.com/datastream/docs/faq](https://docs.cloud.google.com/datastream/docs/faq)
- [https://docs.cloud.google.com/datastream/docs/implementing-datastream-dataflow-analytics](https://docs.cloud.google.com/datastream/docs/implementing-datastream-dataflow-analytics)

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

### Implement Datastream and Dataflow for analytics \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/implementing-datastream-dataflow-analytics](https://docs.cloud.google.com/datastream/docs/implementing-datastream-dataflow-analytics)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Clean up To avoid incurring charges to your Google Cloud account for the resources used in this tutorial, use the Google Cloud console to do the following: Delete your project, Datastream stream, and Datastream connection profiles.
- By cleaning up the resources that you created on Datastream, Dataflow, BigQuery, Pub/Sub, and Cloud Storage, you prevent the resources from taking up quota and you aren't billed for them in the future.
- Clean up the resources that you created on Datastream, Cloud Storage, Pub/Sub, Dataflow, and BigQuery so they don't take up quota and you aren't billed for them in the future.
- Configure information about the source database for the stream In this section, you configure information about the source database for the stream by specifying the tables and schemas in the source database that Datastream: Can transfer into the destination.

