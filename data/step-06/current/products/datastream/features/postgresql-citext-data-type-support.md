---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:04.324Z"
product_name: "Datastream"
product_slug: "datastream"
feature_name: "PostgreSQL CITEXT data type support"
feature_slug: "postgresql-citext-data-type-support"
latest_feature_date: "2023-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/datastream/docs/configure-alloydb-psql"
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
Coverage: MEDIUM

## Step 02 Summary

Datastream supports the CITEXT data type for PostgreSQL sources.

## Extended Definition

Datastream supports the CITEXT data type for PostgreSQL sources.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/datastream/docs/configure-alloydb-psql](https://docs.cloud.google.com/datastream/docs/configure-alloydb-psql)
- [https://docs.cloud.google.com/datastream/docs/create-a-stream](https://docs.cloud.google.com/datastream/docs/create-a-stream)
- [https://docs.cloud.google.com/datastream/docs/faq](https://docs.cloud.google.com/datastream/docs/faq)
- [https://docs.cloud.google.com/datastream/docs/implementing-datastream-dataflow-analytics](https://docs.cloud.google.com/datastream/docs/implementing-datastream-dataflow-analytics)

## Supporting Pages

### "Configure an AlloyDB for PostgreSQL database for CDC \_|\_ Datastream \_\

- URL: [https://docs.cloud.google.com/datastream/docs/configure-alloydb-psql](https://docs.cloud.google.com/datastream/docs/configure-alloydb-psql)
- Source ID: `site-docs-root-2`
- Final score: 222
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note that this approach increases the load on both the source database and Datastream: CREATE PUBLICATION PUBLICATION NAME FOR ALL TABLES; For PostgreSQL 15 and later, you can create a publication for all tables in a schema.
- Run the following script to create the TCP proxy and disable bridge networking to avoid connectivity issues: gcloud compute instances create-with-container \ --zone = REGION ID VM NAME \ --container-image gcr.io/dms-images/tcp-proxy \ --tags = dms-tcp-proxy \ --container-env = SOURCE CONFIG = ALLOYDB IP : ALLOYDB PORT \ --can-ip-forward \ --network = SOURCE AND DEST VPC \ --machine-type = VM TIER \ --metadata = startup-script = '#! /bin/bash mkdir -p /etc/docker cat <<EOF > /etc/docker/daemon.json {"bridge":"none"} EOF systemctl restart docker' Replace the following: REGION ID : The region in which you want to create the TCP proxy.
- Create a Datastream user To create a Datastream user, enter the following PostgreSQL command: CREATE USER USER NAME WITH REPLICATION LOGIN PASSWORD ' USER PASSWORD '; Replace the following: USER NAME : The name of the Datastream user that you want to create.
- Home Documentation Data analytics Datastream Guides Send feedback Configure an AlloyDB for PostgreSQL database for CDC Stay organized with collections Save and categorize content based on your preferences.

### Create a stream \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/create-a-stream](https://docs.cloud.google.com/datastream/docs/create-a-stream)
- Source ID: `site-docs-root`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- If you select the JSON format, then two checkboxes appear: Include a Unified Types schema file in the file path : If you select this checkbox, then Datastream writes two files to Cloud Storage: a JSON data file and an Avro schema file .
- If your source database is PostgreSQL, then Datastream performs the following checks: Check Description Connectivity to PostgreSQL database Datastream verifies that it can connect to the source PostgreSQL database.
- Source type Select the profile type that you specified when you created a connection profile for your Oracle , MySQL , SQL Server , PostgreSQL , Spanner , Salesforce source or MongoDB source.
- Datastream supports the Parquet file format and the Iceberg table format.

### FAQ \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/faq](https://docs.cloud.google.com/datastream/docs/faq)
- Source ID: `site-docs-root`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- Datastream uses PostgreSQL's logical decoding feature to extract the change events from PostgreSQL Does Datastream support replication from AlloyDB for PostgreSQL or AlloyDB Omni sources?
- Datastream takes the original source data type (for example, a MySQL or PostgreSQL NUMERIC type or an Oracle NUMBER type), and normalizes it into a Datastream unified type .
- Datastream supports streaming data from Oracle, MySQL, PostgreSQL, AlloyDB for PostgreSQL, SQL Server, Salesforce, and MongoDB sources, both cloud-hosted and self-managed.
- Yes, Datastream supports the TCPS protocol for SSL/TLS-encrypted connections to Oracle sources.

### Implement Datastream and Dataflow for analytics \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/implementing-datastream-dataflow-analytics](https://docs.cloud.google.com/datastream/docs/implementing-datastream-dataflow-analytics)
- Source ID: `site-docs-root`
- Final score: 214
- Re-rank relevance: N/A

Evidence snippets:
- Clean up To avoid incurring charges to your Google Cloud account for the resources used in this tutorial, use the Google Cloud console to do the following: Delete your project, Datastream stream, and Datastream connection profiles.
- By cleaning up the resources that you created on Datastream, Dataflow, BigQuery, Pub/Sub, and Cloud Storage, you prevent the resources from taking up quota and you aren't billed for them in the future.
- Clean up the resources that you created on Datastream, Cloud Storage, Pub/Sub, Dataflow, and BigQuery so they don't take up quota and you aren't billed for them in the future.
- Configure information about the source database for the stream In this section, you configure information about the source database for the stream by specifying the tables and schemas in the source database that Datastream: Can transfer into the destination.

