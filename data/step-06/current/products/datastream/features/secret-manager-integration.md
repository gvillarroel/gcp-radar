---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:11:59.738Z"
product_name: "Datastream"
product_slug: "datastream"
feature_name: "Secret Manager integration"
feature_slug: "secret-manager-integration"
latest_feature_date: "2025-03-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_connection_profiles"
  - "https://docs.cloud.google.com/datastream/docs/create-connection-profiles"
  - "https://docs.cloud.google.com/datastream/docs/implementing-datastream-dataflow-analytics"
keywords:
  - "secret"
  - "manager"
  - "integration"
  - "datastream"
  - "can"
  - "use"
  - "to"
  - "securely"
---

# Secret Manager integration

Product: Datastream
Coverage: LOW

## Step 02 Summary

Datastream can use Secret Manager to securely store authentication resources.

## Extended Definition

Datastream can use Secret Manager to securely store authentication resources.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_connection_profiles](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_connection_profiles)
- [https://docs.cloud.google.com/datastream/docs/create-connection-profiles](https://docs.cloud.google.com/datastream/docs/create-connection-profiles)
- [https://docs.cloud.google.com/datastream/docs/implementing-datastream-dataflow-analytics](https://docs.cloud.google.com/datastream/docs/implementing-datastream-dataflow-analytics)

## Supporting Pages

### MCP Tools Reference: datastream \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_connection_profiles](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_connection_profiles)
- Source ID: `site-api-reference`
- Final score: 186
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- MongodbProfile JSON representation { "hostAddresses" : [ { object ( HostAddress ) } ] , "replicaSet" : string , "username" : string , "password" : string , "secretManagerStoredPassword" : string , "sslConfig" : { object ( MongodbSslConfig ) } , "additionalOptions" : { string : string , ... } , // Union field mongodb connection format can be only one of the following: "srvConnectionFormat" : { object ( SrvConnectionFormat ) } , "standardConnectionFormat" : { object ( StandardConnectionFormat ) } // End of list of possible types for union field mongodb connection format . } Fields hostAddresses[] object ( HostAddress ) Required.
- LabelsEntry JSON representation { "key" : string , "value" : string } Fields key string value string OracleProfile JSON representation { "hostname" : string , "port" : integer , "username" : string , "password" : string , "databaseService" : string , "connectionAttributes" : { string : string , ... } , "oracleSslConfig" : { object ( OracleSslConfig ) } , "oracleAsmConfig" : { object ( OracleAsmConfig ) } , "secretManagerStoredPassword" : string } Fields hostname string Required.
- OracleAsmConfig JSON representation { "hostname" : string , "port" : integer , "username" : string , "password" : string , "asmService" : string , "connectionAttributes" : { string : string , ... } , "oracleSslConfig" : { object ( OracleSslConfig ) } , "secretManagerStoredPassword" : string } Fields hostname string Required.
- PostgresqlProfile JSON representation { "hostname" : string , "port" : integer , "username" : string , "password" : string , "database" : string , "secretManagerStoredPassword" : string , "sslConfig" : { object ( PostgresqlSslConfig ) } } Fields hostname string Required.

### Create connection profiles \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/create-connection-profiles](https://docs.cloud.google.com/datastream/docs/create-connection-profiles)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Hostname or IP Enter a hostname or IP address that Datastream can use to connect to the source PostgreSQL database.
- Hostname or IP Enter a hostname or IP address that Datastream can use to connect to the source SQL Server database.
- Hostname or IP Enter a hostname or IP address that Datastream can use to connect to the source Oracle database.
- Hostname or IP Enter a hostname or IP address that Datastream can use to connect to the source MySQL database.

### Implement Datastream and Dataflow for analytics \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/implementing-datastream-dataflow-analytics](https://docs.cloud.google.com/datastream/docs/implementing-datastream-dataflow-analytics)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- Datastream uses the information defined in the connection profiles to connect to both the source and the destination so that it can stream data from the source database into your destination bucket in Cloud Storage.
- In the Name or template for the dataset to contain staging tables. field, enter My integration dataset log because Dataflow uses this dataset to stage the data changes that it receives from Datastream.
- Use the Objects to include menu to specify the tables and schemas in your source database that Datastream can transfer into a folder in the destination bucket in Cloud Storage.
- You can use IP allowlists to create lists of trusted IP addresses or IP ranges from which your users and other Google Cloud services such as Datastream can access this data.

