---
title: "Supported source and destination databases \_|\_ Database Migration Service\
  \ for MySQL \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/database-migration/docs/mysql/migration-src-and-dest
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/database-migration/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/database-migration/docs/mysql/migration-src-and-dest
  title: "Supported source and destination databases \_|\_ Database Migration Service\
    \ for MySQL \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Database Migration Service
MySQL
Guides
Send feedback
Supported source and destination databases
Stay organized with collections
Save and categorize content based on your preferences.
MySQL
| PostgreSQL
| PostgreSQL to AlloyDB
Overview
Database Migration Service supports one-time and continuous migrations from source databases to Cloud SQL destination databases.
Supported source databases
Amazon RDS 5.6, 5.7, 8.0, 8.4
Self-managed MySQL (on premises or on any cloud VM that you fully control) 5.5, 5.6, 5.7, 8.0, 8.4
Cloud SQL for MySQL 5.6, 5.7, 8.0, 8.4
Amazon Aurora 5.6, 5.7, 8.0, 8.4
Microsoft Azure Database for MySQL 5.7, 8.0, 8.4
For MySQL 8.0 sources, Database Migration Service also supports the following minor versions:
8.0.18, 8.0.26, 8.0.27, 8.0.28, 8.0.30, 8.0.31, 8.0.32, 8.0.33, 8.0.34, 8.0.35, 8.0.36, 8.0.37,
8.0.39, 8.0.40, 8.0.41, 8.0.42, 8.0.43.
Database Migration Service isn't compatible with MariaDB.
Supported destination databases
Cloud SQL for MySQL 5.6 and 5.7
Cloud SQL for MySQL 8.0 including the following minor versions:
8.0.18, 8.0.26, 8.0.27, 8.0.28, 8.0.30, 8.0.31, 8.0.32, 8.0.33, 8.0.34, 8.0.35, 8.0.36, 8.0.37,
8.0.39, 8.0.40, 8.0.41, 8.0.42, 8.0.43.
Cloud SQL for MySQL 8.4 with certain limitations. For example, migrations that use physical
backup files are not supported for MySQL 8.4 destinations. For more information, see
Known limitations .
Note: Migrating from a later minor version to an earlier minor version
is not recommended.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
