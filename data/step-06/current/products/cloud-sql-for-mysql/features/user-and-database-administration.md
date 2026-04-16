---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:52.003Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "User and database administration"
feature_slug: "user-and-database-administration"
latest_feature_date: "2016-12-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/introduction"
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-tools"
  - "https://docs.cloud.google.com/sql/docs/mysql/connect-overview"
keywords:
  - "user"
  - "database"
  - "administration"
  - "sql"
  - "mysql"
  - "supports"
  - "users"
  - "databases"
---

# User and database administration

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for MySQL supports administration of users and databases for Second Generation instances through the Google Cloud Console and the Cloud SQL API.

## Extended Definition

Cloud SQL for MySQL supports administration of users and databases for Second Generation instances through the Google Cloud Console and the Cloud SQL API.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/introduction](https://docs.cloud.google.com/sql/docs/introduction)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-tools](https://docs.cloud.google.com/sql/docs/mysql/admin-tools)
- [https://docs.cloud.google.com/sql/docs/mysql/connect-overview](https://docs.cloud.google.com/sql/docs/mysql/connect-overview)

## Supporting Pages

### "Connect from other MySQL tools \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-tools](https://docs.cloud.google.com/sql/docs/mysql/admin-tools)
- Source ID: `site-docs-reference-required-5`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback Connect from other MySQL tools Stay organized with collections Save and categorize content based on your preferences.
- MySQL PostgreSQL SQL Server This page describes several common database administration and reporting tools that you can use to connect to your Cloud SQL instances.
- In the New MySQL Connection form, fill in the following information: User : The name of a user in your MySQL database.
- Be sure to select the MySQL Driver and provide values for <instance-ip> , <database> , and <user-name> .

### Cloud SQL overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/introduction](https://docs.cloud.google.com/sql/docs/introduction)
- Source ID: `site-docs-root`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud SQL instance overview: Database administration Cloud SQL lets you create and delete databases and database users, but it isn't a database administration tool.
- There are many database administration tools you can choose from, depending on your database engine, including the following: phpMyAdmin for MySQL MySQL Workbench for MySQL Toad Edge for MySQL and PostgreSQL pgAdmin.org for PostgreSQL SQL Server Management Studio for SQL Server Visual Studio Code for SQL Server Cloud SQL pricing Cloud SQL pricing varies with your configuration settings, and depends on: How much storage you provision, in GiB per month How many CPUs you select for your Cloud SQL instance How much memory you select for your Cloud SQL instance Where you choose to host your data How much network traffic leaves your instance How many IP addresses you assign and use For more information, see the pricing page or the pricing calculator .
- Use cases for Cloud SQL Cloud SQL provides a cloud-based alternative to local MySQL, PostgreSQL, and SQL Server databases.
- Each VM operates the database program, such as MySQL Server, PostgreSQL, or SQL Server, and service agents that provide supporting services, such as logging and monitoring.

### "Choose how to connect to Cloud SQL \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/connect-overview](https://docs.cloud.google.com/sql/docs/mysql/connect-overview)
- Source ID: `site-docs-root`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Shell Connecting using the Cloud Shell Apps Script External connections with Apps Script Apps Script sample GitHub page Cloud Code Connecting using Cloud Code in JetBrains IDE Connect using third-party database administration tools MySQL Workbench Connecting with MySQL Workbench Toad for MySQL Connecting with Toad for MySQL SQuirrel SQL Connecting with SQuirrel SQL phpMyAdmin Using phpMyAdmin with Cloud SQL on App Engine Troubleshoot If you're having problems connecting, then check the following pages for help debugging or finding solutions to known issues: Debugging connection issues Known connectivity errors Troubleshooting Cloud SQL Auth Proxy connection Common connection issues What's next Learn how to connect with the Quickstart for Cloud SQL for mysql .
- IAM database authentication Built-in authentication Description IAM database authentication lets you authenticate to databases with Google Cloud IAM user and service accounts by using short-lived access tokens instead of passwords.
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback Choose how to connect to Cloud SQL Stay organized with collections Save and categorize content based on your preferences.
- Configuration options You can use IAM database authentication for individual IAM users, individual service accounts, and groups.

