---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:11:59.742Z"
product_name: "Datastream"
product_slug: "datastream"
feature_name: "SQL Server source support"
feature_slug: "sql-server-source-support"
latest_feature_date: "2024-07-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/datastream/docs/configure-cloudsql-sqlserver"
  - "https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient"
  - "https://docs.cloud.google.com/datastream/docs/configure-self-managed-sqlserver"
keywords:
  - "sql"
  - "server"
  - "source"
  - "datastream"
  - "can"
  - "use"
  - "as"
  - "for"
---

# SQL Server source support

Product: Datastream
Coverage: LOW

## Step 02 Summary

Datastream can use SQL Server as a source for streaming data; Datastream can use SQL Server as a source for streaming data.

## Extended Definition

Datastream can use SQL Server as a source for streaming data; Datastream can use SQL Server as a source for streaming data.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/datastream/docs/configure-cloudsql-sqlserver](https://docs.cloud.google.com/datastream/docs/configure-cloudsql-sqlserver)
- [https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient](https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient)
- [https://docs.cloud.google.com/datastream/docs/configure-self-managed-sqlserver](https://docs.cloud.google.com/datastream/docs/configure-self-managed-sqlserver)

## Supporting Pages

### "Configure a Cloud SQL for SQL Server database for CDC \_|\_ Datastream \_\

- URL: [https://docs.cloud.google.com/datastream/docs/configure-cloudsql-sqlserver](https://docs.cloud.google.com/datastream/docs/configure-cloudsql-sqlserver)
- Source ID: `site-docs-root-2`
- Final score: 316
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Go to Cloud SQL Instances Create a user and assign the db owner and db denydatawriter roles to them: CREATE USER USER NAME FOR LOGIN YOUR LOGIN ; EXEC sp addrolemember 'db owner' , ' USER NAME ' ; EXEC sp addrolemember 'db denydatawriter' , ' USER NAME ' ; Additional steps required for the transaction logs CDC method The steps described in this section are only required when you configure your source SQL Server database for use with the transaction logs CDC method.
- DECLARE @schedule name 2 VARCHAR ( MAX ); Set @schedule name 2 = CONCAT ( @database name , ' ' , 'DatastreamEveryGivenMinutesAfterDelay' ); DECLARE @start time 2 time ; SET @start time 2 = DATEADD ( MINUTE , @transaction logs retention time / 2 , GETDATE ()); DECLARE @formatted start time 2 INT ; SET @formatted start time 2 = CONVERT ( INT , REPLACE ( CONVERT ( VARCHAR ( 8 ), @start time 2 , 114 ), ':' , '' )); EXEC msdb . dbo . sp add schedule @schedule name = @schedule name 2 , @freq type = 4 , -- daily start @freq subday type = 4 , -- every x minutes daily @freq interval = 1 , @freq subday interval = @transaction logs retention time , @active start time = @formatted start time 2 ; EXEC msdb . dbo . sp attach schedule @job name = @job name , @schedule name = @schedule name 2 ; -- Add a schedule that runs the stored procedure on the SQL Server Agent startup.
- DECLARE @schedule name agent startup VARCHAR ( MAX ); Set @schedule name agent startup = CONCAT ( @database name , ' ' , 'DatastreamSqlServerAgentStartupSchedule' ) EXEC msdb . dbo . sp add schedule @schedule name = @schedule name agent startup , @freq type = 64 , -- start on SQL Server Agent startup @active start time = @formatted start time 1 ; EXEC msdb . dbo . sp attach schedule @job name = @job name , @schedule name = @schedule name agent startup ; EXEC msdb . dbo . sp add jobserver @job name = @job name , @server name = @@servername ; END END ; Execute the stored procedure that creates the Datastream job.
- Home Documentation Data analytics Datastream Guides Send feedback Configure a Cloud SQL for SQL Server database for CDC Stay organized with collections Save and categorize content based on your preferences.

### "Class DatastreamAsyncClient (1.18.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient](https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient)
- Source ID: `site-python-reference`
- Final score: 284
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Returns Type Description google.cloud.datastream v1.types.Route The route resource is the child of the private connection resource, used for defining a route for a private connection. get stream get stream ( request : typing .
- The result type for the operation will be PrivateConnection The PrivateConnection resource is used to establish private connectivity between Datastream and a customer's network. create route create route ( request : typing .
- Returns Type Description google.cloud.datastream v1.types.ConnectionProfile A set of reusable connection configurations to be used as a source or destination for a stream. get location get location ( request : typing .
- Returns Type Description google.cloud.datastream v1.types.PrivateConnection The PrivateConnection resource is used to establish private connectivity between Datastream and a customer's network. get route get route ( request : typing .

### "Configure a self-managed SQL Server database for CDC \_|\_ Datastream \_\

- URL: [https://docs.cloud.google.com/datastream/docs/configure-self-managed-sqlserver](https://docs.cloud.google.com/datastream/docs/configure-self-managed-sqlserver)
- Source ID: `site-docs-root-2`
- Final score: 274
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- CREATE LOGIN YOUR LOGIN WITH PASSWORD = ' PASSWORD ' ; Create a user: CREATE USER USER NAME FOR LOGIN YOUR LOGIN ; Assign the db datareader role to them: EXEC sp addrolemember 'db datareader' , ' USER NAME ' ; Grant the VIEW DATABASE STATE permission to them: GRANT VIEW DATABASE STATE TO USER NAME ; Add this user to the master database: USE master ; CREATE USER USER NAME FOR LOGIN YOUR LOGIN ; Additional steps required for the transaction logs CDC method The steps described in this section are only required when you configure your source SQL Server database for use with the transaction logs CDC method.
- For example: The value of 60 sets the retention time to 1 hour The value of 24 60 sets the retention time to 1 day The value of 3 24 60 sets the retention time to 3 days What's next Learn more about how Datastream works with SQL Server sources .
- USE master ; GRANT SELECT ON sys . fn dblog TO USER NAME ; Add your user to the msdb database and assign the following permissions to them: USE msdb ; CREATE USER USER NAME FOR LOGIN YOUR LOGIN ; GRANT SELECT ON dbo . sysjobs TO USER NAME ; Assign the following permissions to your user in the master database: USE master ; GRANT VIEW SERVER STATE TO YOUR LOGIN ; Set the polling interval for which you want the changes to be available on your source.
- Replace the following: DATABASE NAME : the name of your source database SCHEMA NAME : the name of the schema to which the tables belong TABLE NAME : the name of the table for which you want to enable CDC Start the SQL Server Agent and make sure it's running at all times.

