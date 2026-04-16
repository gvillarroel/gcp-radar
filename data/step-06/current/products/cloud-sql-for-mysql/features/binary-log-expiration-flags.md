---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.976Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Binary log expiration flags"
feature_slug: "binary-log-expiration-flags"
latest_feature_date: "2021-06-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/view-audit-logs-for-automated-backups"
  - "https://docs.cloud.google.com/sql/docs/mysql/charset-collation"
  - "https://docs.cloud.google.com/sql/docs/mysql/audit-logging"
keywords:
  - "binary"
  - "log"
  - "expiration"
  - "flags"
  - "sql"
  - "mysql"
  - "supports"
  - "expire"
---

# Binary log expiration flags

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for MySQL supports the expire_logs_days and binlog_expire_logs_seconds flags for controlling binary log expiration.

## Extended Definition

Cloud SQL for MySQL supports the expire_logs_days and binlog_expire_logs_seconds flags for controlling binary log expiration.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/view-audit-logs-for-automated-backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/view-audit-logs-for-automated-backups)
- [https://docs.cloud.google.com/sql/docs/mysql/charset-collation](https://docs.cloud.google.com/sql/docs/mysql/charset-collation)
- [https://docs.cloud.google.com/sql/docs/mysql/audit-logging](https://docs.cloud.google.com/sql/docs/mysql/audit-logging)

## Supporting Pages

### "View audit logs for automated backups \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/view-audit-logs-for-automated-backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/view-audit-logs-for-automated-backups)
- Source ID: `site-docs-reference-3`
- Final score: 68
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback View audit logs for automated backups Stay organized with collections Save and categorize content based on your preferences.
- MySQL PostgreSQL SQL Server This page describes how to view an audit log for an automated backup of your Cloud SQL instance.

### "Update the character set and collation for a database \_|\_ Cloud SQL for\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/charset-collation](https://docs.cloud.google.com/sql/docs/mysql/charset-collation)
- Source ID: `site-docs-reference-required-5`
- Final score: 52
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Check the configuration of your tables To check the existing values for the tables, use the following statement: SELECT T . table name , T . table schema , CCSA . character set name , CCSA . collation name FROM information schema . tables T , information schema . collation character set applicability CCSA WHERE CCSA . collation name = T . table collation AND T . table schema NOT IN ( 'performance schema' , 'mysql' , 'sys' , 'information schema' ); Example output: + ------------+--------------+--------------------+-------------------+ TABLE NAME TABLE SCHEMA CHARACTER SET NAME COLLATION NAME + ------------+--------------+--------------------+-------------------+ t1 test1 ascii ascii general ci t2 test2 latin1 latin1 swedish ci t3 test3 utf16 utf16 general ci t4 test4 ucs2 ucs2 general ci + ------------+--------------+--------------------+-------------------+ Check the configuration of your table columns To check the values for columns, use the following statement: SELECT table schema , table name , column name , character set name , collation name FROM information schema . columns WHERE table schema NOT IN ( 'information schema' , 'performance schema' , 'sys' , 'mysql' ); Example output: + --------------+------------+-------------+--------------------+------------------+ TABLE SCHEMA TABLE NAME COLUMN NAME CHARACTER SET NAME COLLATION NAME + --------------+------------+-------------+--------------------+------------------+ test1 t1 c ascii ascii general ci test1 t1 i NULL NULL test2 t2 j NULL NULL test2 t2 v ascii ascii general ci test3 t3 k NULL NULL test3 t3 summary utf16 utf16 general ci test4 t4 col ucs2 ucs2 general ci test4 t4 p NULL NULL + --------------+------------+-------------+--------------------+------------------+ Note: Character set and collation configuration applies only to string-based columns (for example, char , varchar , enum , text , mediumtext , longtext , and set ).
- SCHEMATA WHERE schema name NOT IN ( 'performance schema' , 'mysql' , 'sys' , 'information schema' ); For example, you receive the following output: + --------------+-------------+----------------------------+------------------------+----------+--------------------+ CATALOG NAME SCHEMA NAME DEFAULT CHARACTER SET NAME DEFAULT COLLATION NAME SQL PATH DEFAULT ENCRYPTION + --------------+-------------+----------------------------+------------------------+----------+--------------------+ def test1 utf8mb4 utf8mb4 0900 ai ci NULL NO def test2 utf8mb4 utf8mb4 0900 ai ci NULL NO def test3 utf8mb4 utf8mb4 0900 ai ci NULL NO def test4 utf8mb4 utf8mb4 0900 ai ci NULL NO + --------------+-------------+----------------------------+------------------------+----------+--------------------+ However, you want to change the databases to the following custom character set values: + --------------+-------------+----------------------------+------------------------+----------+--------------------+ CATALOG NAME SCHEMA NAME DEFAULT CHARACTER SET NAME DEFAULT COLLATION NAME SQL PATH DEFAULT ENCRYPTION + --------------+-------------+----------------------------+------------------------+----------+--------------------+ def test1 ascii ascii general ci NULL NO def test2 latin1 latin1 swedish ci NULL NO def test3 utf16 utf16 general ci NULL NO def test4 ucs2 ucs2 general ci NULL NO + --------------+-------------+----------------------------+------------------------+----------+--------------------+ Then, in this case, for each database that has a value that you want to change, you need to update each object that resides in the database.
- Run the following command so you can use the output to recreate all the stored procedures, functions, and events of a particular database later (when you recreate stored database objects ). $ mysqldump -uDBAuser -p -h IP ADDRESS \ -P 3306 DB NAME --no-data --no-create-db \ --no-create-info --routines --triggers --events \ --set-gtid-purged = OFF --events > dump objects.sql Replace the following: IP ADDRESS : IP address of the Cloud SQL for MySQL instance DB NAME : the name of the MySQL database Perform updates to your databases, and if necessary, tables and columns.
- Check your instance configuration To check the default global values on the instance (server) level, start a MySQL shell and enter the following command: mysql > SELECT @@ character set server , @@ collation server ; Example output: + ------------------------+--------------------+ @@ character set server @@ collation server + ------------------------+--------------------+ utf8mb4 utf8mb4 0900 ai ci + ------------------------+--------------------+ 1 row in set ( 0 .

### Cloud SQL for MySQL audit logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/audit-logging](https://docs.cloud.google.com/sql/docs/mysql/audit-logging)
- Source ID: `site-docs-reference-required-5`
- Final score: 50
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback Cloud SQL for MySQL audit logging Stay organized with collections Save and categorize content based on your preferences.
- MySQL PostgreSQL SQL Server This document describes audit logging for Cloud SQL.

