---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:04.320Z"
product_name: "Datastream"
product_slug: "datastream"
feature_name: "SQL Server change tables CDC method"
feature_slug: "sql-server-change-tables-cdc-method"
latest_feature_date: "2024-06-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/datastream/docs/configure-cloudsql-sqlserver"
  - "https://docs.cloud.google.com/datastream/docs/configure-self-managed-sqlserver"
  - "https://docs.cloud.google.com/datastream/docs/configure-amazon-rds-sqlserver"
  - "https://docs.cloud.google.com/datastream/docs/configure-azure-sqlserver"
keywords:
  - "sql"
  - "server"
  - "change"
  - "tables"
  - "cdc"
  - "method"
  - "datastream"
  - "supports"
---

# SQL Server change tables CDC method

Product: Datastream
Coverage: MEDIUM

## Step 02 Summary

Datastream supports the change tables change data capture method for SQL Server sources.

## Extended Definition

Datastream supports the change tables change data capture method for SQL Server sources.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/datastream/docs/configure-cloudsql-sqlserver](https://docs.cloud.google.com/datastream/docs/configure-cloudsql-sqlserver)
- [https://docs.cloud.google.com/datastream/docs/configure-self-managed-sqlserver](https://docs.cloud.google.com/datastream/docs/configure-self-managed-sqlserver)
- [https://docs.cloud.google.com/datastream/docs/configure-amazon-rds-sqlserver](https://docs.cloud.google.com/datastream/docs/configure-amazon-rds-sqlserver)
- [https://docs.cloud.google.com/datastream/docs/configure-azure-sqlserver](https://docs.cloud.google.com/datastream/docs/configure-azure-sqlserver)

## Supporting Pages

### "Configure a Cloud SQL for SQL Server database for CDC \_|\_ Datastream \_\

- URL: [https://docs.cloud.google.com/datastream/docs/configure-cloudsql-sqlserver](https://docs.cloud.google.com/datastream/docs/configure-cloudsql-sqlserver)
- Source ID: `site-docs-root-2`
- Final score: 298
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Go to Cloud SQL Instances Create a user and assign the db owner and db denydatawriter roles to them: CREATE USER USER NAME FOR LOGIN YOUR LOGIN ; EXEC sp addrolemember 'db owner' , ' USER NAME ' ; EXEC sp addrolemember 'db denydatawriter' , ' USER NAME ' ; Additional steps required for the transaction logs CDC method The steps described in this section are only required when you configure your source SQL Server database for use with the transaction logs CDC method.
- Home Documentation Data analytics Datastream Guides Send feedback Configure a Cloud SQL for SQL Server database for CDC Stay organized with collections Save and categorize content based on your preferences.
- This page describes how to configure change data capture (CDC) to stream data from a Cloud SQL for SQL Server database to a supported destination , such as BigQuery or Cloud Storage.
- DECLARE @schedule name 2 VARCHAR ( MAX ); Set @schedule name 2 = CONCAT ( @database name , ' ' , 'DatastreamEveryGivenMinutesAfterDelay' ); DECLARE @start time 2 time ; SET @start time 2 = DATEADD ( MINUTE , @transaction logs retention time / 2 , GETDATE ()); DECLARE @formatted start time 2 INT ; SET @formatted start time 2 = CONVERT ( INT , REPLACE ( CONVERT ( VARCHAR ( 8 ), @start time 2 , 114 ), ':' , '' )); EXEC msdb . dbo . sp add schedule @schedule name = @schedule name 2 , @freq type = 4 , -- daily start @freq subday type = 4 , -- every x minutes daily @freq interval = 1 , @freq subday interval = @transaction logs retention time , @active start time = @formatted start time 2 ; EXEC msdb . dbo . sp attach schedule @job name = @job name , @schedule name = @schedule name 2 ; -- Add a schedule that runs the stored procedure on the SQL Server Agent startup.

### "Configure a self-managed SQL Server database for CDC \_|\_ Datastream \_\

- URL: [https://docs.cloud.google.com/datastream/docs/configure-self-managed-sqlserver](https://docs.cloud.google.com/datastream/docs/configure-self-managed-sqlserver)
- Source ID: `site-docs-root-2`
- Final score: 278
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CREATE LOGIN YOUR LOGIN WITH PASSWORD = ' PASSWORD ' ; Create a user: CREATE USER USER NAME FOR LOGIN YOUR LOGIN ; Assign the db datareader role to them: EXEC sp addrolemember 'db datareader' , ' USER NAME ' ; Grant the VIEW DATABASE STATE permission to them: GRANT VIEW DATABASE STATE TO USER NAME ; Add this user to the master database: USE master ; CREATE USER USER NAME FOR LOGIN YOUR LOGIN ; Additional steps required for the transaction logs CDC method The steps described in this section are only required when you configure your source SQL Server database for use with the transaction logs CDC method.
- Replace the following: DATABASE NAME : the name of your source database SCHEMA NAME : the name of the schema to which the tables belong TABLE NAME : the name of the table for which you want to enable CDC Start the SQL Server Agent and make sure it's running at all times.
- Home Documentation Data analytics Datastream Guides Send feedback Configure a self-managed SQL Server database for CDC Stay organized with collections Save and categorize content based on your preferences.
- This page describes how to configure change data capture (CDC) to stream data from a self-managed SQL Server database to a supported destination , such as BigQuery or Cloud Storage.

### "Configure an Amazon RDS SQL Server database for CDC \_|\_ Datastream \_\

- URL: [https://docs.cloud.google.com/datastream/docs/configure-amazon-rds-sqlserver](https://docs.cloud.google.com/datastream/docs/configure-amazon-rds-sqlserver)
- Source ID: `site-docs-root-2`
- Final score: 274
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enable CDC on each table for which you need to capture changes: USE [ DATABASE NAME ] EXEC sys.sp cdc enable table @source schema = N ' SCHEMA NAME ' , @source name = N ' TABLE NAME ' , @role name = NULL GO Replace the following: DATABASE NAME : the name of your source database SCHEMA NAME : the name of the schema to which the tables belong TABLE NAME : the name of the table for which you want to enable CDC Start the SQL Server Agent and make sure it's running at all times.
- CREATE LOGIN YOUR LOGIN WITH PASSWORD = ' PASSWORD ' ; Create a user and assign the db owner and db denydatawriter roles to them: CREATE USER USER NAME FOR LOGIN YOUR LOGIN ; EXEC sp addrolemember 'db owner' , ' USER NAME ' ; EXEC sp addrolemember 'db denydatawriter' , ' USER NAME ' ; Add this user to the master database: USE master ; CREATE USER USER NAME FOR LOGIN YOUR LOGIN ; Additional steps required for the transaction logs CDC method The steps described in this section are only required when you configure your source SQL Server database for use with the transaction logs CDC method.
- Home Documentation Data analytics Datastream Guides Send feedback Configure an Amazon RDS SQL Server database for CDC Stay organized with collections Save and categorize content based on your preferences.
- This page describes how to configure change data capture (CDC) to stream data from an Amazon RDS SQL Server database to a supported destination , such as BigQuery or Cloud Storage.

### "Configure an Azure SQL database for CDC \_|\_ Datastream \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastream/docs/configure-azure-sqlserver](https://docs.cloud.google.com/datastream/docs/configure-azure-sqlserver)
- Source ID: `site-docs-root-2`
- Final score: 262
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: Datastream supports Azure SQL Database only when you use the change tables CDC method.
- To do it, connect to the database using Azure Data Studio or SQL Server Management Studio and run the following command: EXEC sys.sp cdc enable db ; GO Enable CDC on the tables for which you need to capture changes: EXEC sys.sp cdc enable table @source schema = N ' SCHEMA NAME ' , @source name = N ' TABLE NAME ' , @role name = NULL GO Note: You need to run the command for each table for which you want to enable CDC.
- Create a Datastream user: Connect to the master database and create a login: USE master ; CREATE LOGIN YOUR LOGIN WITH PASSWORD = ' PASSWORD ' ; Connect to the source database and create a user for your login: USE DATABASE NAME CREATE USER USER NAME FOR LOGIN YOUR LOGIN ; Assign the db owner and db denydatawriter roles to your user: EXEC sp addrolemember 'db owner' , ' USER NAME ' ; EXEC sp addrolemember 'db denydatawriter' , ' USER NAME ' ; Grant the VIEW DATABASE STATE permission to your user: GRANT VIEW DATABASE STATE TO USER NAME ; What's next Learn more about how Datastream works with SQL Server sources .
- Home Documentation Data analytics Datastream Guides Send feedback Configure an Azure SQL database for CDC Stay organized with collections Save and categorize content based on your preferences.

