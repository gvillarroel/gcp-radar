---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.995Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Cloud Functions connectivity"
feature_slug: "cloud-functions-connectivity"
latest_feature_date: "2018-06-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/connect-functions"
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-tools"
  - "https://docs.cloud.google.com/sql/docs/editions-intro"
keywords:
  - "functions"
  - "connectivity"
  - "sql"
  - "mysql"
  - "supports"
  - "connections"
---

# Cloud Functions connectivity

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for MySQL supports connections from Cloud Functions.

## Extended Definition

Cloud SQL for MySQL supports connections from Cloud Functions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/connect-functions](https://docs.cloud.google.com/sql/docs/mysql/connect-functions)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-tools](https://docs.cloud.google.com/sql/docs/mysql/admin-tools)
- [https://docs.cloud.google.com/sql/docs/editions-intro](https://docs.cloud.google.com/sql/docs/editions-intro)

## Supporting Pages

### "Connect from Cloud Run functions \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/connect-functions](https://docs.cloud.google.com/sql/docs/mysql/connect-functions)
- Source ID: `site-docs-reference-3`
- Final score: 32
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback Connect from Cloud Run functions Stay organized with collections Save and categorize content based on your preferences.
- PUBLIC initialize Cloud SQL Python Connector object connector = Connector ( ip type = ip type , refresh strategy = "LAZY" ) def getconn () - > pymysql . connections .
- Public IP (default) To configure Cloud Run functions to enable connections to a Cloud SQL instance: Confirm that the instance created above has a public IP address.
- Connection Pools Connections to underlying databases may be dropped, either by the database server itself, or by the infrastructure underlying Cloud Run functions.

### "Connect from other MySQL tools \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-tools](https://docs.cloud.google.com/sql/docs/mysql/admin-tools)
- Source ID: `site-docs-reference-required-5`
- Final score: 30
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- One way to do this is to edit the script that launches the SQuirrel SQL application as follows: $JAVACMD -Djavax.net.ssl.keyStore= <path-to-keystore> \ -Djavax.net.ssl.keyStorePassword= <keystore-password> \ -Djavax.net.ssl.trustStore= <path-to-truststore> \ -Djavax.net.ssl.trustStorePassword= <truststore-password> \ [existing launch parameters] After you've started SQuirrel SQL with the valid keystore and truststore information, you can connect with: jdbc:mysql:// <instance-ip> :3306/ <database> ?verifyServerCertificate=true&useSSL=true&requireSSL=true Once connected, you can test if you're using SSL by executing the following SQL statement and verifying that the ssl cipher value is not empty: SHOW STATUS like 'ssl cipher' ; Back to top Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Once connected, you can test if you're using SSL by executing the following SQL statement: SHOW STATUS like 'ssl cipher' ; Figure 3: Testing if the MySQL Workbench connection uses SSL.
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback Connect from other MySQL tools Stay organized with collections Save and categorize content based on your preferences.
- MySQL PostgreSQL SQL Server This page describes several common database administration and reporting tools that you can use to connect to your Cloud SQL instances.

### "Cloud SQL editions overview \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/editions-intro](https://docs.cloud.google.com/sql/docs/editions-intro)
- Source ID: `site-docs-reference-3`
- Final score: 23
- Re-rank relevance: N/A

Evidence snippets:
- MySQL 5.6, 5.7, 8.0, 8.4 Availability SLA 99.99% (includes maintenance) 99.95% (excludes maintenance) Performance Machine series N2 C4A General purpose shared core General purpose dedicated core N4 Machine configuration limits N2 machine series Up to 128 vCPU Up to 864 GB RAM 1:8 core:memory ratio C4A machine series Up to 72 vCPU Up to 576 GB RAM 1:8 core:memory ratio General purpose shared core 1 vCPU Up to 1.7 GB RAM 1:6.5 core:memory ratio General purpose dedicated core Up to 96 vCPU Up to 624 GB RAM 1:6.5 core:memory ratio N4 machine series Up to 80 vCPU Up to 624 GB RAM 1:8 core:memory ratio Data cache Yes No Optimized writes Yes No Point-in-time log retention Up to 35 days Up to 7 days Read pools Yes No Availability Maintenance downtime Planned operations downtime Sub-second downtime Few minutes Advanced disaster recovery (DR) Yes No Write endpoint for advanced disaster recovery (DR) Yes No Write endpoint connectivity Yes No Managed Connection Pooling Yes No Observability AI-assisted troubleshooting Yes No Query insights 30 day metric retention 1 MB query length 200 query plan sample maximum Wait event analysis Index advisor recommendations 7 day metric retention 4500 bytes query length 20 query plan sample maximum Enhanced recommenders Yes No Cloud SQL Enterprise Plus edition enhancements Cloud SQL Enterprise Plus edition is ideal for applications that require the best performance, availability, and observability.
- Cloud SQL editions features The following table provides an overview of key features enhancements available for Cloud SQL Enterprise Plus edition when compared to Cloud SQL Enterprise edition: Cloud SQL Enterprise Plus edition Cloud SQL Enterprise edition Database versions MySQL 8.0, 8.4 Note: If the database version for your instance is MySQL 8.4, then the default Cloud SQL edition is Enterprise Plus.
- MySQL PostgreSQL SQL Server Cloud SQL for MySQL editions is a tier-based pricing model where each edition provides different performance, availability, observability, and data protection characteristics to support your various business and application needs.
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback Cloud SQL editions overview Stay organized with collections Save and categorize content based on your preferences.

