---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:04.328Z"
product_name: "Datastream"
product_slug: "datastream"
feature_name: "Maximum concurrent backfill tasks configuration"
feature_slug: "maximum-concurrent-backfill-tasks-configuration"
latest_feature_date: "2023-02-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/get_stream"
  - "https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_streams"
  - "https://docs.cloud.google.com/datastream/docs/faq"
  - "https://docs.cloud.google.com/datastream/docs/use-the-datastream-api"
keywords:
  - "maximum"
  - "concurrent"
  - "backfill"
  - "tasks"
  - "configuration"
  - "the"
  - "datastream"
  - "api"
---

# Maximum concurrent backfill tasks configuration

Product: Datastream
Coverage: MEDIUM

## Step 02 Summary

The Datastream API can set the maximum number of concurrent backfill tasks for a stream.

## Extended Definition

The Datastream API can set the maximum number of concurrent backfill tasks for a stream.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/get_stream](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/get_stream)
- [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_streams](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_streams)
- [https://docs.cloud.google.com/datastream/docs/faq](https://docs.cloud.google.com/datastream/docs/faq)
- [https://docs.cloud.google.com/datastream/docs/use-the-datastream-api](https://docs.cloud.google.com/datastream/docs/use-the-datastream-api)

## Supporting Pages

### MCP Tools Reference: datastream \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/get_stream](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/get_stream)
- Source ID: `site-api-reference`
- Final score: 233
- Re-rank relevance: N/A

Evidence snippets:
- OracleSourceConfig JSON representation { "includeObjects" : { object ( OracleRdbms ) } , "excludeObjects" : { object ( OracleRdbms ) } , "maxConcurrentCdcTasks" : integer , "maxConcurrentBackfillTasks" : integer , // Union field large objects handling can be only one of the following: "dropLargeObjects" : { object ( DropLargeObjects ) } , "streamLargeObjects" : { object ( StreamLargeObjects ) } // End of list of possible types for union field large objects handling . // Union field cdc method can be only one of the following: "logMiner" : { object ( LogMiner ) } , "binaryLogParser" : { object ( BinaryLogParser ) } // End of list of possible types for union field cdc method . } Fields includeObjects object ( OracleRdbms ) The Oracle objects to include in the stream. excludeObjects object ( OracleRdbms ) The Oracle objects to exclude from the stream. maxConcurrentCdcTasks integer Maximum number of concurrent CDC tasks.
- MysqlSourceConfig JSON representation { "includeObjects" : { object ( MysqlRdbms ) } , "excludeObjects" : { object ( MysqlRdbms ) } , "maxConcurrentCdcTasks" : integer , "maxConcurrentBackfillTasks" : integer , // Union field cdc method can be only one of the following: "binaryLogPosition" : { object ( BinaryLogPosition ) } , "gtid" : { object ( Gtid ) } // End of list of possible types for union field cdc method . } Fields includeObjects object ( MysqlRdbms ) The MySQL objects to retrieve from the source. excludeObjects object ( MysqlRdbms ) The MySQL objects to exclude from the stream. maxConcurrentCdcTasks integer Maximum number of concurrent CDC tasks.
- The name of the publication that includes the set of all tables that are defined in the stream's include objects. maxConcurrentBackfillTasks integer Maximum number of concurrent backfill tasks.
- If not set (or set to 0), the system's default value will be used. maxConcurrentBackfillTasks integer Maximum number of concurrent backfill tasks.

### MCP Tools Reference: datastream \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_streams](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_streams)
- Source ID: `site-api-reference`
- Final score: 233
- Re-rank relevance: N/A

Evidence snippets:
- OracleSourceConfig JSON representation { "includeObjects" : { object ( OracleRdbms ) } , "excludeObjects" : { object ( OracleRdbms ) } , "maxConcurrentCdcTasks" : integer , "maxConcurrentBackfillTasks" : integer , // Union field large objects handling can be only one of the following: "dropLargeObjects" : { object ( DropLargeObjects ) } , "streamLargeObjects" : { object ( StreamLargeObjects ) } // End of list of possible types for union field large objects handling . // Union field cdc method can be only one of the following: "logMiner" : { object ( LogMiner ) } , "binaryLogParser" : { object ( BinaryLogParser ) } // End of list of possible types for union field cdc method . } Fields includeObjects object ( OracleRdbms ) The Oracle objects to include in the stream. excludeObjects object ( OracleRdbms ) The Oracle objects to exclude from the stream. maxConcurrentCdcTasks integer Maximum number of concurrent CDC tasks.
- MysqlSourceConfig JSON representation { "includeObjects" : { object ( MysqlRdbms ) } , "excludeObjects" : { object ( MysqlRdbms ) } , "maxConcurrentCdcTasks" : integer , "maxConcurrentBackfillTasks" : integer , // Union field cdc method can be only one of the following: "binaryLogPosition" : { object ( BinaryLogPosition ) } , "gtid" : { object ( Gtid ) } // End of list of possible types for union field cdc method . } Fields includeObjects object ( MysqlRdbms ) The MySQL objects to retrieve from the source. excludeObjects object ( MysqlRdbms ) The MySQL objects to exclude from the stream. maxConcurrentCdcTasks integer Maximum number of concurrent CDC tasks.
- The name of the publication that includes the set of all tables that are defined in the stream's include objects. maxConcurrentBackfillTasks integer Maximum number of concurrent backfill tasks.
- If not set (or set to 0), the system's default value will be used. maxConcurrentBackfillTasks integer Maximum number of concurrent backfill tasks.

### FAQ \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/faq](https://docs.cloud.google.com/datastream/docs/faq)
- Source ID: `site-docs-root`
- Final score: 215
- Re-rank relevance: N/A

Evidence snippets:
- In addition, Datastream minimizes the impact of an initial backfill by limiting the number of simultaneous backfill tasks, and offering you the control to decide which objects to backfill, and when to backfill them.
- If your organization doesn't permit granting the networkAdmin role to the Datastream service account, then create a custom role with the following specific permissions: Select IP ranges dynamically compute.routes.get compute.routes.list compute.subnetworks.get compute.subnetworks.list Create peered networks compute.globalOperations.get compute.networks.addPeering compute.networks.removePeering compute.networks.get Reserve IP addresses compute.globalAddresses.get compute.globalAddresses.create compute.globalAddresses.createInternal compute.globalAddresses.delete compute.globalAddresses.deleteInternal compute.networks.use compute.networks.listPeeringRoutes Can I use Private Service Connect to create a private connectivity configuration?
- You must grant the following roles and permissions to your Datastream user to replicate data from a SQL Server database: For the change tables CDC method: db owner db denydatawriter Additionally, for the transaction logs CDC method: SELECT permissions on the database and for the sys.fn dblog function SELECT permissions on the dbo.sysjobs table VIEW SERVER STATE For detailed information about configuring your source, see the respective configuration pages for your database type.
- Why does the Create a private connectivity configuration page state that you must grant the roles/compute.networkAdmin role to the Datastream service account to create a private connectivity configuration on a shared VPC?

### Use the Datastream API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/use-the-datastream-api](https://docs.cloud.google.com/datastream/docs/use-the-datastream-api)
- Source ID: `site-api-reference`
- Final score: 206
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- API examples You can see examples of using the Datastream API with cURL in the following pages of the Datastream documentation: Manage private connectivity configurations Manage connection profiles Manage streams Provide JSON data from a file When you use the API with cURL, you provide property values using the command line.
- At the command line, provide the path to the file, preceded by the @ character, as the --data parameter: --data @<path-to-file>/<filename> For example, to create a connection profile for a MySQL source, you could create a file named request.json with the following content: { "displayName": "my MySQL connection profile", "mysql": { "host": "10.11.12.13", "port": 3306, "username": "myusername", "password": "mypassword" } } Then, you would use the following cURL command at the command line: curl --header "Authorization: Bearer ${ ACCESS TOKEN } " \ --header 'Content-Type: application/json' \ --data @./request.json \ -X POST \ https://datastream.googleapis.com/v1/projects/myProject/locations/myLocation/connectionProfiles?connectionProfileId = myMySQLconnectionprofile Work with long-running API calls Some API calls, such as object creation, can take some time to complete.
- Select Continue . gcloud Enter the following to display the project IDs for your Google Cloud projects: gcloud projects list Set your default project: gcloud config set project YOUR PROJECT ID Enable the Datastream API: gcloud services enable datastream.googleapis.com Permissions You must have the required permissions to use the Datastream API.
- You're also using the Datastream API, indirectly, when you use any of the following ways of administering instances: Google Cloud CLI : A command-line interface (CLI) that you can use to work with your instances.

