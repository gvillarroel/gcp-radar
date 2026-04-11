---
title: "Configure an Azure SQL database for CDC \_|\_ Datastream \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/datastream/docs/configure-azure-sqlserver
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/datastream/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/datastream/docs/configure-azure-sqlserver
  title: "Configure an Azure SQL database for CDC \_|\_ Datastream \_|\_ Google Cloud\
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
Configure an Azure SQL database for CDC
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to configure change data capture (CDC) to
stream data from an Azure SQL database to a supported destination ,
such as BigQuery or Cloud Storage.
Note: Datastream supports Azure SQL Database only when you use the
change tables CDC method.
To configure an Azure SQL database:
Enable change data capture (CDC) for your source Azure SQL database. To do it,
connect to the database using Azure Data Studio or SQL Server Management Studio
and run the following command:
EXEC sys.sp_cdc_enable_db ;
GO
Enable CDC on the tables for which you need to capture changes:
EXEC sys.sp_cdc_enable_table
@source_schema = N ' SCHEMA_NAME ' ,
@source_name = N ' TABLE_NAME ' ,
@role_name = NULL
GO
Note: You need to run the command for each table for which you want to enable CDC.
Replace the following:
SCHEMA_NAME : the name of the schema to which the tables belong
TABLE_NAME : the name of the table for which you want to enable CDC
Enable snapshot isolation.
When you backfill data from your SQL Server database, it's important to ensure
consistent snapshots. If you don't apply the settings described in this
section, changes made to the database during the backfill process might lead to
duplicates or incorrect results, especially for tables without primary keys.
Enabling snapshot isolation creates a temporary view of your database at the start
of the backfill process. This ensures that the data being copied remains consistent,
even if other users are making changes to the live tables at the same time.
Enabling snapshot isolation might have a slight performance impact, but it's
essential for reliable data extraction.
To enable snapshot isolation:
Connect to your database using a SQL Server client.
Run the following command:
ALTER DATABASE DATABASE_NAME SET ALLOW_SNAPSHOT_ISOLATION ON ;
Replace DATABASE_NAME with the name of you database.
Create a Datastream user:
Connect to the master database and create a login:
USE master ;
CREATE LOGIN YOUR_LOGIN WITH PASSWORD = ' PASSWORD ' ;
Connect to the source database and create a user for your login:
USE DATABASE_NAME
CREATE USER USER_NAME FOR LOGIN YOUR_LOGIN ;
Assign the db_owner and db_denydatawriter roles to your user:
EXEC sp_addrolemember 'db_owner' , ' USER_NAME ' ;
EXEC sp_addrolemember 'db_denydatawriter' , ' USER_NAME ' ;
Grant the VIEW DATABASE STATE permission to your user:
GRANT VIEW DATABASE STATE TO USER_NAME ;
What's next
Learn more about how Datastream works with SQL Server sources .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
