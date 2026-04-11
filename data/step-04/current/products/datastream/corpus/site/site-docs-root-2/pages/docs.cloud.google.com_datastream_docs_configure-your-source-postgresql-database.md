---
title: "Configure a source PostgreSQL database \_|\_ Datastream \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/datastream/docs/configure-your-source-postgresql-database
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/datastream/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/datastream/docs/configure-your-source-postgresql-database
  title: "Configure a source PostgreSQL database \_|\_ Datastream \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Datastream
Guides
Send feedback
Configure a source PostgreSQL database
Stay organized with collections
Save and categorize content based on your preferences.
Each source PostgreSQL database relies upon its logical decoding feature. In PostgreSQL, logical decoding is implemented by decoding the contents of the Write Ahead Log (WAL) files. The WAL files contain information about the history of activity on a database, and Datastream leverages these files to query data changes. For more information about how Datastream works with WAL files, see Work with PostgreSQL database WAL files .
Publication and replication slots
When you configure your PostgreSQL source, you need to create a publication and a
replication slot.
A publication is a set of changes generated from a table, or a group of tables,
that you want to replicate using logical replication.
A replication slot is a PostgreSQL feature which ensures that a stream of changes
stored in a WAL log file is replicated to the destination in the correct order.
Each replication slot streams a sequence of changes from a single database, and each publication exists in only one database. This means that you need to create one or more streams per database, with one replication slot per stream. It's also a good practice to keep the publication name aligned with the tables selected in the stream for clarity.
For more information, see Publication
and Replication slots
in PostgreSQL documentation.
Supported databases
Datastream works with the following types of PostgreSQL databases:
AlloyDB for PostgreSQL
AlloyDB Omni
Amazon Aurora PostgreSQL
Amazon RDS for PostgreSQL
Cloud SQL for PostgreSQL
Self-managed PostgreSQL (on-premise or cloud-hosted)
Datastream also supports replication from PostgreSQL read replica instances for PostgreSQL version 16 and later. For more information, see Replication from read replicas .
What's next
Learn how to configure an AlloyDB for PostgreSQL database to work with Datastream.
Learn how to configure AlloyDB Omni to work with Datastream.
Learn how to configure an Amazon Aurora PostgreSQL database to work with Datastream.
Learn how to configure an Amazon RDS for PostgreSQL database to work with Datastream.
Learn how to configure a Cloud SQL for PostgreSQL database to work with Datastream.
Learn how to configure a self-managed PostgreSQL database to work with Datastream.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
