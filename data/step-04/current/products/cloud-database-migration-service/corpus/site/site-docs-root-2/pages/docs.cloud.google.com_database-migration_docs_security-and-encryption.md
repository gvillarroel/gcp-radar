---
title: "Security and encryption \_|\_ Database Migration Service \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/database-migration/docs/security-and-encryption
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/database-migration/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/database-migration/docs/security-and-encryption
  title: "Security and encryption \_|\_ Database Migration Service \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Database Migration Service
Guides
Send feedback
Security and encryption
Stay organized with collections
Save and categorize content based on your preferences.
Database Migration Service protects your data during and after migration. The following
security and encryption features ensure the safety of your migration:
Customer-managed encryption keys (CMEK) encrypt data at rest.
Encryption methods, such as SSL/TLS certificates and
Private Service Connect, secure network connections between the
source and destination databases.
Identity and Access Management (IAM) practices ensure access control.
Homogeneous and heterogeneous migrations have different security options. For
homogeneous migrations, destination databases support CMEK natively while
heterogeneous migrations require Database Migration Service to additionally encrypt
data at rest during conversion to a temporary database.
Learn more in the sections that follow:
Secure homogeneous migrations
Select your homogeneous migration scenario to view security and encryption
options that your migration supports:
MySQL to Cloud SQL for MySQL
CMEK
You can migrate to Cloud SQL destinations where you configure CMEK to secure your data.
For more information, see
Use customer-managed encryption keys (CMEK)
in the Cloud SQL documentation.
Secure network connectivity
Database Migration Service supports SSL/TLS connectivity for your migration.
You can upload your own encryption certificates when you create the source
connection profile. For more information, see
Create a source connection profile .
IAM
With IAM, you can control access to your migration resources.
For more information, see
IAM authentication .
PostgreSQL to Cloud SQL for PostgreSQL
CMEK
You can migrate to Cloud SQL destinations where you configure CMEK to secure your data.
For more information, see
Use customer-managed encryption keys (CMEK) in the Cloud SQL documentation.
Secure network connectivity
Database Migration Service supports SSL/TLS connectivity for your migration.
You can upload your own encryption certificates when you create the source connection profile.
For more information, see
Create a source connection profile .
IAM
With IAM, you can control access to your migration resources. For more information see
IAM authentication .
PostgreSQL to AlloyDB for PostgreSQL
CMEK
You can migrate to AlloyDB destinations where you configure CMEK to secure your data. For more information, see
About CMEK in the AlloyDB documentation.
Secure network connectivity
Database Migration Service supports SSL/TLS connectivity for your migration.
You can upload your own encryption certificates when you create the source connection profile.
For more information, see
Create a source connection profile .
IAM
With IAM, you can control access to your migration resources. For more information, see
Manage IAM authentication .
SQL Server to Cloud SQL for SQL Server
CMEK
You can migrate to Cloud SQL destinations where you configure CMEK to secure your data.
For more information, see
Use customer-managed encryption keys (CMEK)
in the Cloud SQL documentation.
Migrate encrypted databases
Database Migration Service supports migrating encrypted columns. For more information, see
Use encrypted SQL Server backup files .
IAM
With IAM, you can control access to your migration resources. For more information, see
IAM authentication
Secure heterogeneous migrations
Select your heterogeneous migration scenario to view security and encryption options that your migration supports:
Oracle to Cloud SQL for PostgreSQL
CMEK
Database Migration Service supports CMEK in the migration job to secure the data at rest.
For more information, see
Use customer-managed encryption keys (CMEK) for continuous migrations .
Connectivity encryption
Database Migration Service supports SSL/TLS connectivity for your migration as well
as other methods that accommodate differences in network access, such as IP
allowlisting or using a forward SSH tunnel. For more information, see
Create connection profiles .
IAM
With IAM, you can control access to your migration resources. For more information, see
Access control with IAM .
Oracle to AlloyDB for PostgreSQL
CMEK
Database Migration Service supports CMEK in the migration job to secure the data at rest.
For more information, see
Use customer-managed encryption keys (CMEK) for continuous migrations .
Connectivity encryption
Database Migration Service supports SSL/TLS connectivity for your migration as well
as other methods that accommodate differences in network access, such as IP
allowlisting or using a forward SSH tunnel. For more information, see
Create connection profiles .
IAM
With IAM, you can control access to your migration resources. For more information, see
Access control with IAM .
SQL Server to Cloud SQL for PostgreSQL
CMEK
Database Migration Service supports CMEK in the migration job to secure the data at rest.
For more information, see
Use customer-managed encryption keys (CMEK) for continuous migrations .
Connectivity encryption
Database Migration Service supports SSL/TLS connectivity for your migration as well
as other methods that accommodate differences in network access, such as IP
allowlisting or using a forward SSH tunnel. For more information, see
Use SSL/TLS certificates to encrypt network connections .
IAM
With IAM, you can control access to your migration resources. For more information, see
Access control with IAM .
SQL Server to AlloyDB for PostgreSQL
CMEK
Database Migration Service supports CMEK in the migration job to secure the data at rest.
For more information, see
Use customer-managed encryption keys (CMEK) for continuous migrations .
Connectivity encryption
Database Migration Service supports SSL/TLS connectivity for your migration as well
as other methods that accommodate differences in network access, such as IP
allowlisting or using a forward SSH tunnel. For more information, see
Use SSL/TLS certificates to encrypt network connections .
IAM
With IAM, you can control access to your migration resources. For more information, see
Access control with IAM .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
