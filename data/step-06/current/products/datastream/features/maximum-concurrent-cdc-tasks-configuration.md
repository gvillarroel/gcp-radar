---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:11:59.759Z"
product_name: "Datastream"
product_slug: "datastream"
feature_name: "Maximum concurrent CDC tasks configuration"
feature_slug: "maximum-concurrent-cdc-tasks-configuration"
latest_feature_date: "2022-08-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/get_stream"
  - "https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_streams"
  - "https://docs.cloud.google.com/datastream/docs/use-the-datastream-api"
keywords:
  - "maximum"
  - "concurrent"
  - "cdc"
  - "tasks"
  - "configuration"
  - "the"
  - "datastream"
  - "api"
---

# Maximum concurrent CDC tasks configuration

Product: Datastream
Coverage: LOW

## Step 02 Summary

The Datastream API can set the maximum number of concurrent CDC tasks for a stream.

## Extended Definition

The Datastream API can set the maximum number of concurrent CDC tasks for a stream.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/get_stream](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/get_stream)
- [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_streams](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_streams)
- [https://docs.cloud.google.com/datastream/docs/use-the-datastream-api](https://docs.cloud.google.com/datastream/docs/use-the-datastream-api)

## Supporting Pages

### MCP Tools Reference: datastream \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/get_stream](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/get_stream)
- Source ID: `site-api-reference`
- Final score: 182
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- OracleSourceConfig JSON representation { "includeObjects" : { object ( OracleRdbms ) } , "excludeObjects" : { object ( OracleRdbms ) } , "maxConcurrentCdcTasks" : integer , "maxConcurrentBackfillTasks" : integer , // Union field large objects handling can be only one of the following: "dropLargeObjects" : { object ( DropLargeObjects ) } , "streamLargeObjects" : { object ( StreamLargeObjects ) } // End of list of possible types for union field large objects handling . // Union field cdc method can be only one of the following: "logMiner" : { object ( LogMiner ) } , "binaryLogParser" : { object ( BinaryLogParser ) } // End of list of possible types for union field cdc method . } Fields includeObjects object ( OracleRdbms ) The Oracle objects to include in the stream. excludeObjects object ( OracleRdbms ) The Oracle objects to exclude from the stream. maxConcurrentCdcTasks integer Maximum number of concurrent CDC tasks.
- MysqlSourceConfig JSON representation { "includeObjects" : { object ( MysqlRdbms ) } , "excludeObjects" : { object ( MysqlRdbms ) } , "maxConcurrentCdcTasks" : integer , "maxConcurrentBackfillTasks" : integer , // Union field cdc method can be only one of the following: "binaryLogPosition" : { object ( BinaryLogPosition ) } , "gtid" : { object ( Gtid ) } // End of list of possible types for union field cdc method . } Fields includeObjects object ( MysqlRdbms ) The MySQL objects to retrieve from the source. excludeObjects object ( MysqlRdbms ) The MySQL objects to exclude from the stream. maxConcurrentCdcTasks integer Maximum number of concurrent CDC tasks.
- SqlServerSourceConfig JSON representation { "includeObjects" : { object ( SqlServerRdbms ) } , "excludeObjects" : { object ( SqlServerRdbms ) } , "maxConcurrentCdcTasks" : integer , "maxConcurrentBackfillTasks" : integer , // Union field cdc method can be only one of the following: "transactionLogs" : { object ( SqlServerTransactionLogs ) } , "changeTables" : { object ( SqlServerChangeTables ) } // End of list of possible types for union field cdc method . } Fields includeObjects object ( SqlServerRdbms ) The SQLServer objects to include in the stream. excludeObjects object ( SqlServerRdbms ) The SQLServer objects to exclude from the stream. maxConcurrentCdcTasks integer Max concurrent CDC tasks. maxConcurrentBackfillTasks integer Max concurrent backfill tasks.
- The name of the publication that includes the set of all tables that are defined in the stream's include objects. maxConcurrentBackfillTasks integer Maximum number of concurrent backfill tasks.

### MCP Tools Reference: datastream \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_streams](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_streams)
- Source ID: `site-api-reference`
- Final score: 182
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- OracleSourceConfig JSON representation { "includeObjects" : { object ( OracleRdbms ) } , "excludeObjects" : { object ( OracleRdbms ) } , "maxConcurrentCdcTasks" : integer , "maxConcurrentBackfillTasks" : integer , // Union field large objects handling can be only one of the following: "dropLargeObjects" : { object ( DropLargeObjects ) } , "streamLargeObjects" : { object ( StreamLargeObjects ) } // End of list of possible types for union field large objects handling . // Union field cdc method can be only one of the following: "logMiner" : { object ( LogMiner ) } , "binaryLogParser" : { object ( BinaryLogParser ) } // End of list of possible types for union field cdc method . } Fields includeObjects object ( OracleRdbms ) The Oracle objects to include in the stream. excludeObjects object ( OracleRdbms ) The Oracle objects to exclude from the stream. maxConcurrentCdcTasks integer Maximum number of concurrent CDC tasks.
- MysqlSourceConfig JSON representation { "includeObjects" : { object ( MysqlRdbms ) } , "excludeObjects" : { object ( MysqlRdbms ) } , "maxConcurrentCdcTasks" : integer , "maxConcurrentBackfillTasks" : integer , // Union field cdc method can be only one of the following: "binaryLogPosition" : { object ( BinaryLogPosition ) } , "gtid" : { object ( Gtid ) } // End of list of possible types for union field cdc method . } Fields includeObjects object ( MysqlRdbms ) The MySQL objects to retrieve from the source. excludeObjects object ( MysqlRdbms ) The MySQL objects to exclude from the stream. maxConcurrentCdcTasks integer Maximum number of concurrent CDC tasks.
- SqlServerSourceConfig JSON representation { "includeObjects" : { object ( SqlServerRdbms ) } , "excludeObjects" : { object ( SqlServerRdbms ) } , "maxConcurrentCdcTasks" : integer , "maxConcurrentBackfillTasks" : integer , // Union field cdc method can be only one of the following: "transactionLogs" : { object ( SqlServerTransactionLogs ) } , "changeTables" : { object ( SqlServerChangeTables ) } // End of list of possible types for union field cdc method . } Fields includeObjects object ( SqlServerRdbms ) The SQLServer objects to include in the stream. excludeObjects object ( SqlServerRdbms ) The SQLServer objects to exclude from the stream. maxConcurrentCdcTasks integer Max concurrent CDC tasks. maxConcurrentBackfillTasks integer Max concurrent backfill tasks.
- The name of the publication that includes the set of all tables that are defined in the stream's include objects. maxConcurrentBackfillTasks integer Maximum number of concurrent backfill tasks.

### Use the Datastream API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/use-the-datastream-api](https://docs.cloud.google.com/datastream/docs/use-the-datastream-api)
- Source ID: `site-api-reference`
- Final score: 172
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- API examples You can see examples of using the Datastream API with cURL in the following pages of the Datastream documentation: Manage private connectivity configurations Manage connection profiles Manage streams Provide JSON data from a file When you use the API with cURL, you provide property values using the command line.
- At the command line, provide the path to the file, preceded by the @ character, as the --data parameter: --data @<path-to-file>/<filename> For example, to create a connection profile for a MySQL source, you could create a file named request.json with the following content: { "displayName": "my MySQL connection profile", "mysql": { "host": "10.11.12.13", "port": 3306, "username": "myusername", "password": "mypassword" } } Then, you would use the following cURL command at the command line: curl --header "Authorization: Bearer ${ ACCESS TOKEN } " \ --header 'Content-Type: application/json' \ --data @./request.json \ -X POST \ https://datastream.googleapis.com/v1/projects/myProject/locations/myLocation/connectionProfiles?connectionProfileId = myMySQLconnectionprofile Work with long-running API calls Some API calls, such as object creation, can take some time to complete.
- Select Continue . gcloud Enter the following to display the project IDs for your Google Cloud projects: gcloud projects list Set your default project: gcloud config set project YOUR PROJECT ID Enable the Datastream API: gcloud services enable datastream.googleapis.com Permissions You must have the required permissions to use the Datastream API.
- You're also using the Datastream API, indirectly, when you use any of the following ways of administering instances: Google Cloud CLI : A command-line interface (CLI) that you can use to work with your instances.

