---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:04.316Z"
product_name: "Datastream"
product_slug: "datastream"
feature_name: "MySQL GTID-based replication"
feature_slug: "mysql-gtid-based-replication"
latest_feature_date: "2025-05-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/datastream/docs/create-a-stream"
  - "https://docs.cloud.google.com/datastream/docs/faq"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-datastream/latest/com.google.cloud.datastream.v1"
  - "https://docs.cloud.google.com/datastream/docs/configure-self-managed-mysql"
keywords:
  - "mysql"
  - "gtid"
  - "based"
  - "replication"
  - "datastream"
  - "supports"
  - "global"
  - "transaction"
---

# MySQL GTID-based replication

Product: Datastream
Coverage: MEDIUM

## Step 02 Summary

Datastream supports global transaction identifier based replication for MySQL sources; Datastream supports global transaction identifier based replication for MySQL sources.

## Extended Definition

Datastream supports global transaction identifier based replication for MySQL sources; Datastream supports global transaction identifier based replication for MySQL sources.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/datastream/docs/create-a-stream](https://docs.cloud.google.com/datastream/docs/create-a-stream)
- [https://docs.cloud.google.com/datastream/docs/faq](https://docs.cloud.google.com/datastream/docs/faq)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-datastream/latest/com.google.cloud.datastream.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-datastream/latest/com.google.cloud.datastream.v1)
- [https://docs.cloud.google.com/datastream/docs/configure-self-managed-mysql](https://docs.cloud.google.com/datastream/docs/configure-self-managed-mysql)

## Supporting Pages

### Create a stream \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/create-a-stream](https://docs.cloud.google.com/datastream/docs/create-a-stream)
- Source ID: `site-docs-root`
- Final score: 214
- Re-rank relevance: N/A

Evidence snippets:
- Specify the CDC method for your stream: GTID (Global Transaction IDs)-based replication : select this method if you want Datastream to support failovers and provide seamless replication irrespective of the changes in your database cluster.
- GTID mode configuration ( applies only to GTID-based CDC ) Datastream verifies that the GTID mode is set to ON if GTID based replication is used.
- If your source database is MySQL, then Datastream performs the following checks: Check Description Replication permissions Datastream verifies that it has permissions to replicate a MySQL database.
- Enforce GTID consistency or GTID strict mode ( applies only to GTID-based CDC ) Datastream verifies that the GTID consistency or GTID strict mode is enabled.

### FAQ \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/faq](https://docs.cloud.google.com/datastream/docs/faq)
- Source ID: `site-docs-root`
- Final score: 209
- Re-rank relevance: N/A

Evidence snippets:
- Datastream enables direct replication into BigQuery, and supports additional destinations like Cloud SQL and Spanner through integration with Dataflow, by leveraging templates that pull the change stream events from Cloud Storage and updating the destination tables accordingly.
- Datastream enables seamless replication of data from relational database sources such as AlloyDB for PostgreSQL, PostgreSQL, MySQL, SQL Server and Oracle, as well as from Salesforce and MongoDB, directly into BigQuery.
- You must grant the following permissions to your Datastream user to replicate data from a MySQL database: SELECT REPLICATION SLAVE REPLICATION CLIENT Does Datastream support binary log compression?
- Datastream supports streaming data from Oracle, MySQL, PostgreSQL, AlloyDB for PostgreSQL, SQL Server, Salesforce, and MongoDB sources, both cloud-hosted and self-managed.

### "Package com.google.cloud.datastream.v1 (1.87.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-datastream/latest/com.google.cloud.datastream.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-datastream/latest/com.google.cloud.datastream.v1)
- Source ID: `site-java-reference`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- Builder Use GTID based replication. com. google. cloud. datastream. v1.
- Gtid Use GTID based replication. com. google. cloud. datastream. v1.
- Binary Log Position Use Binary log position based replication. com. google. cloud. datastream. v1.
- Builder Use Binary log position based replication. com. google. cloud. datastream. v1.

### "Configure a self-managed MySQL database for CDC \_|\_ Datastream \_|\_ Google\

- URL: [https://docs.cloud.google.com/datastream/docs/configure-self-managed-mysql](https://docs.cloud.google.com/datastream/docs/configure-self-managed-mysql)
- Source ID: `site-docs-root-2`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- Confirm that the row format for the binary log is set to FULL by entering the following MySQL command: SHOW GLOBAL VARIABLES LIKE 'binlog row image' ; For MySQL versions 8.0 and later, confirm that the binlog row value options variable is set to an empty value by entering the following MySQL command: SHOW GLOBAL VARIABLES LIKE 'binlog row value options' ; Verify that the replica updates option for the binary log is set to ON by entering the following MySQL command: SHOW GLOBAL VARIABLES LIKE 'log replica updates' ; For MySQL versions earlier than 8.0.26, enter the following command instead: SHOW GLOBAL VARIABLES LIKE 'log slave updates' ; Verify that the retention period of the binary log is set to 604800 seconds ( 7 days) by entering the following MySQL command: SHOW GLOBAL VARIABLES LIKE 'binlog expire logs seconds' ; For MySQL versions earlier than 8.0.3, enter the following command instead: SHOW GLOBAL VARIABLES LIKE 'expire logs days' ; If your MySQL database isn't set to full row-based replication and a 7-day retention period, then you'll need to change the configuration of the binary log, as follows: Navigate to the /etc/mysql/ directory.
- For GTID-based replication, also add the following lines: [mysqld] gtid mode=ON enforce-gtid-consistency=ON Save your changes to the my.cnf file, and then close the file.
- Create a Datastream user To create a Datastream user, enter the following MySQL commands: CREATE USER 'datastream' @ '%' IDENTIFIED BY ' YOUR PASSWORD ' ; GRANT REPLICATION SLAVE , SELECT , REPLICATION CLIENT ON .
- Home Documentation Data analytics Datastream Guides Send feedback Configure a self-managed MySQL database for CDC Stay organized with collections Save and categorize content based on your preferences.

