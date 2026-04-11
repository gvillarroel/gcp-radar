---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:11:59.732Z"
product_name: "Datastream"
product_slug: "datastream"
feature_name: "Regional availability: me-west1"
feature_slug: "regional-availability-me-west1"
latest_feature_date: "2025-12-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/datastream/docs/using-datastream-apis"
  - "https://docs.cloud.google.com/datastream/docs/implementing-datastream-dataflow-analytics"
  - "https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_connection_profiles"
keywords:
  - "regional"
  - "availability"
  - "me"
  - "west1"
  - "datastream"
  - "is"
  - "available"
  - "in"
---

# Regional availability: me-west1

Product: Datastream
Coverage: LOW

## Step 02 Summary

Datastream is available in the me-west1 (Tel Aviv) region.

## Extended Definition

Datastream is available in the me-west1 (Tel Aviv) region.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/datastream/docs/using-datastream-apis](https://docs.cloud.google.com/datastream/docs/using-datastream-apis)
- [https://docs.cloud.google.com/datastream/docs/implementing-datastream-dataflow-analytics](https://docs.cloud.google.com/datastream/docs/implementing-datastream-dataflow-analytics)
- [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_connection_profiles](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_connection_profiles)

## Supporting Pages

### Using Datastream APIs \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/using-datastream-apis](https://docs.cloud.google.com/datastream/docs/using-datastream-apis)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Datastream provides a unified consumption API which democratizes the organization's access to the freshest enterprise data available across the organization, powering integrated near real-time scenarios.
- DATASTREAM API VERSION .OperationMetadata" , "createTime" : " DATE AND TIME STAMP " , "target" : " PROJECT PATH /streams/ STREAM ID " , "verb" : "start" , "requestedCancellation" : false , "apiVersion" : " DATASTREAM API VERSION " }, "done" : false } After a few seconds, retrieve information about the stream to confirm that it's running again. curl -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" https://datastream.googleapis.com/ DATASTREAM API VERSION / PROJECT PATH /streams/ STREAM ID Verify that the state of the stream has changed from PAUSED back to RUNNING . { "name" : " PROJECT PATH /streams/ STREAM ID " , "createTime" : " DATE AND TIME STAMP " , "updateTime" : " DATE AND TIME STAMP " , "displayName" : " DISPLAY NAME " , "sourceConfig" : { "sourceConnectionProfileName" : "projects/ YOUR PROJECT NUMBER /locations/ YOUR PROJECT LOCATION /connectionProfiles/ SOURCE CONNECTION PROFILE ID " , "oracleSourceConfig" : { "allowlist" : { "oracleSchemas" : [ { "schema" : "ROOT" } ] }, "rejectlist" : {} } }, "destinationConfig" : { "destinationConnectionProfileName" : "projects/ YOUR PROJECT NUMBER /locations/ YOUR PROJECT LOCATION /connectionProfiles/ DESTINATION CONNECTION PROFILE ID " , "gcsDestinationConfig" : { "fileRotationMb" : 100 , "fileRotationInterval" : "15s" "avroFileFormat" : {} } }, "state" : "RUNNING" , "backfillAll" : {} } Now that you created and managed a stream, confirmed that there are no errors associated with the stream, and that the state of the stream is RUNNING , you're ready to verify that it can transfer data from the source database into a folder in the Cloud Storage destination bucket.
- DATASTREAM API VERSION .OperationMetadata" , "createTime" : " DATE AND TIME STAMP " , "target" : " PROJECT PATH /streams/ STREAM ID " , "verb" : "start" , "requestedCancellation" : false , "apiVersion" : " DATASTREAM API VERSION " }, "done" : false } Retrieve information about the stream to confirm that it's paused. curl -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" https://datastream.googleapis.com/ DATASTREAM API VERSION / PROJECT PATH /streams/ STREAM ID Verify that the state of the stream has changed from RUNNING to PAUSED . { "name" : " PROJECT PATH /streams/ STREAM ID " , "createTime" : " DATE AND TIME STAMP " , "updateTime" : " DATE AND TIME STAMP " , "displayName" : " DISPLAY NAME " , "sourceConfig" : { "sourceConnectionProfileName" : "projects/ YOUR PROJECT NUMBER /locations/ YOUR PROJECT LOCATION /connectionProfiles/ SOURCE CONNECTION PROFILE ID " , "oracleSourceConfig" : { "allowlist" : { "oracleSchemas" : [ { "schema" : "ROOT" } ] }, "rejectlist" : {} } }, "destinationConfig" : { "destinationConnectionProfileName" : "projects/ YOUR PROJECT NUMBER /locations/ YOUR PROJECT LOCATION /connectionProfiles/ DESTINATION CONNECTION PROFILE ID " , "gcsDestinationConfig" : { "fileRotationMb" : 100 , "fileRotationInterval" : "15s" "avroFileFormat" : {} } }, "state" : "PAUSED" , "backfillAll" : {} } When a stream is paused, Datastream won't pull any new data from the source database into the destination.
- At the prompt, enter the following command: curl -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" https://datastream.googleapis.com/ DATASTREAM API VERSION / PROJECT PATH /streams/ STREAM ID Verify that the value of the fileRotationMb parameter for the Cloud Storage connection profile is now 100 . { "name" : " PROJECT PATH /streams/ STREAM ID " , "createTime" : " DATE AND TIME STAMP " , "updateTime" : " DATE AND TIME STAMP " , "displayName" : " DISPLAY NAME " , "sourceConfig" : { "sourceConnectionProfileName" : "projects/ YOUR PROJECT NUMBER /locations/ YOUR PROJECT LOCATION /connectionProfiles/ SOURCE CONNECTION PROFILE ID " , "oracleSourceConfig" : { "allowlist" : { "oracleSchemas" : [ { "schema" : "ROOT" } ] }, "rejectlist" : {} } }, "destinationConfig" : { "destinationConnectionProfileName" : "projects/ YOUR PROJECT NUMBER /locations/ YOUR PROJECT LOCATION /connectionProfiles/ DESTINATION CONNECTION PROFILE ID " , "gcsDestinationConfig" : { "fileRotationMb" : 100 , "fileRotationInterval" : "15s" "avroFileFormat" : {} } }, "state" : "CREATED" , "backfillAll" : {} } Start the stream.

### Implement Datastream and Dataflow for analytics \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/implementing-datastream-dataflow-analytics](https://docs.cloud.google.com/datastream/docs/implementing-datastream-dataflow-analytics)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Verify the integration In the Verify the stream section of this tutorial, you confirmed that Datastream transferred the data from all tables of a source MySQL database into the /integration/tutorial folder of your Cloud Storage destination bucket.
- Costs In this document, you use the following billable components of Google Cloud: Datastream Cloud Storage Pub/Sub Dataflow BigQuery To generate a cost estimate based on your projected usage, use the pricing calculator .
- In the Name or template for the dataset to contain staging tables. field, enter My integration dataset log because Dataflow uses this dataset to stage the data changes that it receives from Datastream.
- This confirms that Dataflow processed the files containing changes associated with the data that Datastream streamed into Cloud Storage, and transferred these changes into BigQuery.

### MCP Tools Reference: datastream \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_connection_profiles](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_connection_profiles)
- Source ID: `site-api-reference`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- Curl Request curl --location 'https://datastream.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "list connection profiles", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Request message for 'ListConnectionProfiles' request.
- ConnectionProfile JSON representation { "name" : string , "createTime" : string , "updateTime" : string , "labels" : { string : string , ... } , "displayName" : string , // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . // Union field profile can be only one of the following: "oracleProfile" : { object ( OracleProfile ) } , "gcsProfile" : { object ( GcsProfile ) } , "mysqlProfile" : { object ( MysqlProfile ) } , "bigqueryProfile" : { object ( BigQueryProfile ) } , "postgresqlProfile" : { object ( PostgresqlProfile ) } , "sqlServerProfile" : { object ( SqlServerProfile ) } , "salesforceProfile" : { object ( SalesforceProfile ) } , "mongodbProfile" : { object ( MongodbProfile ) } , "spannerProfile" : { object ( SpannerProfile ) } // End of list of possible types for union field profile . // Union field connectivity can be only one of the following: "staticServiceIpConnectivity" : { object ( StaticServiceIpConnectivity ) } , "forwardSshConnectivity" : { object ( ForwardSshTunnelConnectivity ) } , "privateConnectivity" : { object ( PrivateConnectivity ) } // End of list of possible types for union field connectivity . } Fields name string Output only.
- MongodbProfile JSON representation { "hostAddresses" : [ { object ( HostAddress ) } ] , "replicaSet" : string , "username" : string , "password" : string , "secretManagerStoredPassword" : string , "sslConfig" : { object ( MongodbSslConfig ) } , "additionalOptions" : { string : string , ... } , // Union field mongodb connection format can be only one of the following: "srvConnectionFormat" : { object ( SrvConnectionFormat ) } , "standardConnectionFormat" : { object ( StandardConnectionFormat ) } // End of list of possible types for union field mongodb connection format . } Fields hostAddresses[] object ( HostAddress ) Required.
- For example: { parent: "projects/my-project/locations/us-central1" create time after: 2025-10-02T10:15:33Z create time before: 2025-10-03T00:00:00Z display name: bookstore page size: 100 } will return up to 100 connection profiles in projects/my-project/locations/us-central1 that were created on or after 2025-10-02T10:15:33 UTC and before 2025-10-03T00:00:00 UTC, and have "bookstore" in their display name.

