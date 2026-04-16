---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:14.589Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "default database collation"
feature_slug: "default-database-collation"
latest_feature_date: "2020-09-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/create-instance"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-databases"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/best-practices"
keywords:
  - "default"
  - "database"
  - "collation"
  - "sql"
  - "server"
  - "lets"
  - "you"
  - "set"
---

# default database collation

Product: Cloud SQL for SQL Server
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL for SQL Server lets you set the default collation for databases in an instance.

## Extended Definition

Cloud SQL for SQL Server lets you set the default collation for databases in an instance.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- [https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-databases](https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-databases)
- [https://docs.cloud.google.com/sql/docs/sqlserver/best-practices](https://docs.cloud.google.com/sql/docs/sqlserver/best-practices)

## Supporting Pages

### Create instances \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- Source ID: `site-docs-root`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- The collation field (not shown in the following basic API call) lets you to set a default value for the type of collation used for the databases in your instance.
- The collation field (not shown in the following basic API call) lets you set a default value for the type of collation used for the databases in your instance.
- Set the password for the user: gcloud sql users set-password sqlserver no-host --instance =[ INSTANCE NAME ] \ --password =[ PASSWORD ] Terraform To create an instance, use a Terraform resource . resource "google sql database instance" "default" { name = "sqlserver-instance" region = "us-central1" database version = "SQLSERVER 2019 STANDARD" root password = "INSERT-PASSWORD-HERE" settings { tier = "db-custom-2-7680" } } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- This collation default is permanent at the instance level but not at the database level.

### "Create and manage databases \_|\_ Cloud SQL for SQL Server \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-databases](https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-databases)
- Source ID: `site-docs-root`
- Final score: 117
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For information about collations in SQL Server, see Collation and Unicode Support in the SQL Server documentation. gcloud sql databases create DATABASE NAME \ --instance = INSTANCE NAME \ [ --charset = CHARSET ] \ [ --collation = COLLATION ] Terraform To create a database, use a Terraform resource . resource "google sql database" "database" { name = "my-database" instance = google sql database instance.instance.name } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- For information about setting a default value for the type of collation used for the databases in an instance, see Creating instances .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /databases" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#database", "charset": "utf8", "collation": "utf8 general ci", "etag": " etag ", "name": "sys", "instance": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /databases/sys", "project": " project-id " } Note : The databases.list API supports only response payloads that include up to 4 MB of text.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /databases" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#database", "charset": "utf8", "collation": "utf8 general ci", "etag": " etag ", "name": "sys", "instance": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /databases/sys", "project": " project-id " } Note : The databases.list API supports only response payloads that include up to 4 MB of text.

### "General best practices \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/best-practices](https://docs.cloud.google.com/sql/docs/sqlserver/best-practices)
- Source ID: `site-docs-reference-required-4`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- Database collation Whether you're installing a new instance of SQL Server, restoring a database backup, or connecting a server to client databases, it's important to understand the locale requirements, sorting order, and case and accent sensitivity of the data that you're working with.
- Database settings to retain For optimal performance of the SQL Server database, retain the default values of the following SQL Server settings .
- When you select a collation for your server, database, column, or expression, you're assigning certain characteristics to your data.
- The following table has recommended values and percentages of total RAM for some popular virtual machine (VM) tiers: Instance tier (MB) max server memory (mb) % (Total) 3840 1440 37 4096 1632 39 5792 2912 50 8192 4704 57 11584 7248 62 16384 10848 66 23168 16800 72 32768 25200 76 46336 37072 80 65568 53888 82 92704 77648 83 131136 111248 84 185440 158784 85 262272 226000 86 370880 321056 86 524544 455488 86 741792 645600 87 To monitor the memory usage for your instance, use the following metrics : database/memory/usage database/sqlserver/memory/buffer cache hit ratio database/sqlserver/memory/memory grants pending database/sqlserver/memory/page life expectancy For more information, see Monitor Cloud SQL instances .

