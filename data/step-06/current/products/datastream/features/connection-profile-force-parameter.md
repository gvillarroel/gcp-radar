---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:04.328Z"
product_name: "Datastream"
product_slug: "datastream"
feature_name: "Connection profile force parameter"
feature_slug: "connection-profile-force-parameter"
latest_feature_date: "2023-01-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles/discover"
  - "https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles"
  - "https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles/create"
  - "https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_connection_profiles"
keywords:
  - "connection"
  - "profile"
  - "force"
  - "parameter"
  - "the"
  - "datastream"
  - "api"
  - "supports"
---

# Connection profile force parameter

Product: Datastream
Coverage: MEDIUM

## Step 02 Summary

The Datastream API supports a force parameter on connection profile resources.

## Extended Definition

The Datastream API supports a force parameter on connection profile resources.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles/discover](https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles/discover)
- [https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles](https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles)
- [https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles/create](https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles/create)
- [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_connection_profiles](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_connection_profiles)

## Supporting Pages

### "Method: projects.locations.connectionProfiles.discover \_|\_ Datastream\

- URL: [https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles/discover](https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles/discover)
- Source ID: `site-api-reference`
- Final score: 260
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Authorization requires the following IAM permission on the specified resource parent : datastream.connectionProfiles.discover Request body The request body contains data with the following structure: JSON representation { // Union field target can be only one of the following: "connectionProfile" : { object ( ConnectionProfile ) } , "connectionProfileName" : string // End of list of possible types for union field target . // Union field hierarchy can be only one of the following: "fullHierarchy" : boolean , "hierarchyDepth" : integer // End of list of possible types for union field hierarchy . // Union field data object can be only one of the following: "oracleRdbms" : { object ( OracleRdbms ) } , "mysqlRdbms" : { object ( MysqlRdbms ) } , "postgresqlRdbms" : { object ( PostgresqlRdbms ) } , "sqlServerRdbms" : { object ( SqlServerRdbms ) } , "salesforceOrg" : { object ( SalesforceOrg ) } , "mongodbCluster" : { object ( MongodbCluster ) } , "spannerDatabase" : { object ( SpannerDatabase ) } // End of list of possible types for union field data object . } Fields Union field target .
- HTTP request POST https://datastream.googleapis.com/v1/{parent}/connectionProfiles:discover Path parameters Parameters parent string Required.
- IAM Permissions Requires the following IAM permission on the parent resource: datastream.connectionProfiles.discover For more information, see the IAM documentation .
- The data object that has been enriched by the discover API call. data object can be only one of the following: oracleRdbms object ( OracleRdbms ) Enriched Oracle RDBMS object. mysqlRdbms object ( MysqlRdbms ) Enriched MySQL RDBMS object. postgresqlRdbms object ( PostgresqlRdbms ) Enriched PostgreSQL RDBMS object. sqlServerRdbms object ( SqlServerRdbms ) Enriched SQLServer RDBMS object. salesforceOrg object ( SalesforceOrg ) Enriched Salesforce organization. mongodbCluster object ( MongodbCluster ) Enriched MongoDB cluster. spannerDatabase object ( SpannerDatabase ) Enriched Spanner database.

### "REST Resource: projects.locations.connectionProfiles \_|\_ Datastream \_\

- URL: [https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles](https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles)
- Source ID: `site-api-reference`
- Final score: 260
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Connection configuration for the ConnectionProfile. profile can be only one of the following: oracleProfile object ( OracleProfile ) Profile for connecting to an Oracle source. gcsProfile object ( GcsProfile ) Profile for connecting to a Cloud Storage destination. mysqlProfile object ( MysqlProfile ) Profile for connecting to a MySQL source. bigqueryProfile object ( BigQueryProfile ) Profile for connecting to a BigQuery destination. postgresqlProfile object ( PostgresqlProfile ) Profile for connecting to a PostgreSQL source. sqlServerProfile object ( SqlServerProfile ) Profile for connecting to a SQLServer source. salesforceProfile object ( SalesforceProfile ) Profile for connecting to a Salesforce source. mongodbProfile object ( MongodbProfile ) Profile for connecting to a MongoDB source. spannerProfile object ( SpannerProfile ) Profile for connecting to a Spanner source.
- Format: projects/{project}/locations/{location}/privateConnections/{name} Methods create Use this method to create a connection profile in a project and location. delete Use this method to delete a connection profile. discover Use this method to discover a connection profile. get Use this method to get details about a connection profile. list Use this method to list connection profiles created in a project and location. patch Use this method to update the parameters of a connection profile.
- If the DB server mandates encryption, then connection will be encrypted but server identity will not be authenticated. basicEncryption object ( BasicEncryption ) If set, Datastream will enforce encryption without authenticating server identity.
- Used when the source database is configured to allow incoming connections from the Datastream public IP addresses for the region specified in the connection profile.

### "Method: projects.locations.connectionProfiles.create \_|\_ Datastream \_\

- URL: [https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles/create](https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles/create)
- Source ID: `site-api-reference`
- Final score: 244
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Authorization requires the following IAM permission on the specified resource parent : datastream.connectionProfiles.create Query parameters Parameters connectionProfileId string Required.
- HTTP request POST https://datastream.googleapis.com/v1/{parent}/connectionProfiles Path parameters Parameters parent string Required.
- IAM Permissions Requires the following IAM permission on the parent resource: datastream.connectionProfiles.create For more information, see the IAM documentation .
- Home Documentation Data analytics Datastream Reference Send feedback Method: projects.locations.connectionProfiles.create Stay organized with collections Save and categorize content based on your preferences.

### MCP Tools Reference: datastream \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_connection_profiles](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_connection_profiles)
- Source ID: `site-api-reference`
- Final score: 244
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Curl Request curl --location 'https://datastream.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "list connection profiles", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Request message for 'ListConnectionProfiles' request.
- ConnectionProfile JSON representation { "name" : string , "createTime" : string , "updateTime" : string , "labels" : { string : string , ... } , "displayName" : string , // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . // Union field profile can be only one of the following: "oracleProfile" : { object ( OracleProfile ) } , "gcsProfile" : { object ( GcsProfile ) } , "mysqlProfile" : { object ( MysqlProfile ) } , "bigqueryProfile" : { object ( BigQueryProfile ) } , "postgresqlProfile" : { object ( PostgresqlProfile ) } , "sqlServerProfile" : { object ( SqlServerProfile ) } , "salesforceProfile" : { object ( SalesforceProfile ) } , "mongodbProfile" : { object ( MongodbProfile ) } , "spannerProfile" : { object ( SpannerProfile ) } // End of list of possible types for union field profile . // Union field connectivity can be only one of the following: "staticServiceIpConnectivity" : { object ( StaticServiceIpConnectivity ) } , "forwardSshConnectivity" : { object ( ForwardSshTunnelConnectivity ) } , "privateConnectivity" : { object ( PrivateConnectivity ) } // End of list of possible types for union field connectivity . } Fields name string Output only.
- Connection configuration for the ConnectionProfile. profile can be only one of the following: oracleProfile object ( OracleProfile ) Profile for connecting to an Oracle source. gcsProfile object ( GcsProfile ) Profile for connecting to a Cloud Storage destination. mysqlProfile object ( MysqlProfile ) Profile for connecting to a MySQL source. bigqueryProfile object ( BigQueryProfile ) Profile for connecting to a BigQuery destination. postgresqlProfile object ( PostgresqlProfile ) Profile for connecting to a PostgreSQL source. sqlServerProfile object ( SqlServerProfile ) Profile for connecting to a SQLServer source. salesforceProfile object ( SalesforceProfile ) Profile for connecting to a Salesforce source. mongodbProfile object ( MongodbProfile ) Profile for connecting to a MongoDB source. spannerProfile object ( SpannerProfile ) Profile for connecting to a Spanner source.
- If the DB server mandates encryption, then connection will be encrypted but server identity will not be authenticated. basicEncryption object ( BasicEncryption ) If set, Datastream will enforce encryption without authenticating server identity.

