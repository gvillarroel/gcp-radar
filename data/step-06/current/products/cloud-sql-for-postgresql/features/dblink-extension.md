---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.818Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "dblink extension"
feature_slug: "dblink-extension"
latest_feature_date: "2020-12-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/connect-overview"
  - "https://docs.cloud.google.com/sql/docs/postgres/about-private-service-connect"
  - "https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backups"
keywords:
  - "connecting"
  - "dblink"
  - "other"
  - "databases"
  - "extension"
  - "supports"
---

# dblink extension

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for PostgreSQL supports the dblink extension for connecting to other PostgreSQL databases.

## Extended Definition

Cloud SQL for PostgreSQL supports the dblink extension for connecting to other PostgreSQL databases.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/connect-overview](https://docs.cloud.google.com/sql/docs/postgres/connect-overview)
- [https://docs.cloud.google.com/sql/docs/postgres/about-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/about-private-service-connect)
- [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backups)

## Supporting Pages

### "Private Service Connect overview \_|\_ Cloud SQL for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/about-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/about-private-service-connect)
- Source ID: `site-iam-reference`
- Final score: 23
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- You can use outbound connectivity to migrate data from an external server within your network, use PostgreSQL extensions that require an outbound connection to your Cloud SQL instance, or do a homogeneous migration using Database Migration Service.
- By adding a single common services VPC network to the NCC hub, all Private Service Connect endpoints in the VPC network become accessible transitively to other spoke VPC networks through the hub.
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Choose how to connect to Cloud SQL \_|\_ Cloud SQL for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/connect-overview](https://docs.cloud.google.com/sql/docs/postgres/connect-overview)
- Source ID: `site-docs-root`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- Another more secure alternative for connecting to a Cloud SQL instance that uses public IP is to use a Cloud SQL connector (such as the Cloud SQL Auth Proxy or one of the Cloud SQL Language Connectors).
- Supported by using the Private Service Connect endpoint. pglogical , PL/Proxy , dblink , and postgres fdw extensions Supported.
- Remove networking options from an instance Cloud SQL supports the removal of the following networking options from an instance: Public IP from an instance with both private services access and public IP Public IP from an instance with public IP, private services access, and Private Service Connect Private Service Connect from an instance with both Private Service Connect and private services access Private Service Connect from an instance with Private Service Connect, private services access, and public IP Enable networking options for an instance You can enable Cloud SQL supports enabling the following connection options for instances: Private services access on an instance with public IP only Private Service Connect on an instance with private services access only Private Service Connect on an instance with both private services access and public IP Public IP on an instance with private services access only Limitations You can't create an instance with both a public IP address and Private Service Connect.
- Cloud Shell Connecting using the Cloud Shell Cloud Code Connecting using Cloud Code in JetBrains IDE Connect using third-party database administration tools pgAdmin pgAdmin.org for PostgreSQL Toad Edge Toad Edge for PostgreSQL Blendo How to connect Google Cloud SQL PostgreSQL with Blendo Troubleshoot If you're having problems connecting, then check the following pages for help debugging or finding solutions to known issues: Debugging connection issues Known connectivity errors Troubleshooting Cloud SQL Auth Proxy connection Common connection issues What's next Learn how to connect with the Quickstart for Cloud SQL for postgres .

### "Cloud SQL backups overview \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backups)
- Source ID: `site-docs-root`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- Restore from a backup Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Databases Cloud SQL PostgreSQL Guides Send feedback Cloud SQL backups overview Stay organized with collections Save and categorize content based on your preferences.
- Final backups are charged similar to other backups for the number of days retained.

