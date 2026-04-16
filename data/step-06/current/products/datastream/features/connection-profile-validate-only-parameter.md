---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:04.328Z"
product_name: "Datastream"
product_slug: "datastream"
feature_name: "Connection profile validate_only parameter"
feature_slug: "connection-profile-validate-only-parameter"
latest_feature_date: "2023-01-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/datastream/docs/using-datastream-apis"
  - "https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles"
  - "https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles/create"
  - "https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles/discover"
keywords:
  - "connection"
  - "profile"
  - "validate"
  - "only"
  - "parameter"
  - "the"
  - "datastream"
  - "api"
---

# Connection profile validate_only parameter

Product: Datastream
Coverage: MEDIUM

## Step 02 Summary

The Datastream API supports a validate_only parameter on connection profile resources.

## Extended Definition

The Datastream API supports a validate_only parameter on connection profile resources.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/datastream/docs/using-datastream-apis](https://docs.cloud.google.com/datastream/docs/using-datastream-apis)
- [https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles](https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles)
- [https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles/create](https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles/create)
- [https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles/discover](https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles/discover)

## Supporting Pages

### Using Datastream APIs \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/using-datastream-apis](https://docs.cloud.google.com/datastream/docs/using-datastream-apis)
- Source ID: `site-docs-root`
- Final score: 283
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- At the prompt, enter the following command: curl -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" https://datastream.googleapis.com/ DATASTREAM API VERSION / PROJECT PATH /streams/ STREAM ID Verify that the value of the fileRotationMb parameter for the Cloud Storage connection profile is now 100 . { "name" : " PROJECT PATH /streams/ STREAM ID " , "createTime" : " DATE AND TIME STAMP " , "updateTime" : " DATE AND TIME STAMP " , "displayName" : " DISPLAY NAME " , "sourceConfig" : { "sourceConnectionProfileName" : "projects/ YOUR PROJECT NUMBER /locations/ YOUR PROJECT LOCATION /connectionProfiles/ SOURCE CONNECTION PROFILE ID " , "oracleSourceConfig" : { "allowlist" : { "oracleSchemas" : [ { "schema" : "ROOT" } ] }, "rejectlist" : {} } }, "destinationConfig" : { "destinationConnectionProfileName" : "projects/ YOUR PROJECT NUMBER /locations/ YOUR PROJECT LOCATION /connectionProfiles/ DESTINATION CONNECTION PROFILE ID " , "gcsDestinationConfig" : { "fileRotationMb" : 100 , "fileRotationInterval" : "15s" "avroFileFormat" : {} } }, "state" : "CREATED" , "backfillAll" : {} } Start the stream.
- To set the variable, at the prompt, enter the following command: UPDATE="{\"destination config\":{\"gcs destination config\":{\"file rotation mb\":100}}}" At the prompt, enter the following command: curl -X PATCH -d $UPDATE -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" https://datastream.googleapis.com/ DATASTREAM API VERSION / PROJECT PATH /streams/ STREAM ID / ?update mask=destination config.gcs destination config.file rotation mb Note: The update mask=destination config.gcs destination config.file rotation mb portion of code indicates that you want to change the value of the file rotation mb parameter for the Cloud Storage connection profile.
- To set the variable, at the prompt, enter the following command: UPDATE = "{\"gcsProfile\":{\"rootPath\":\"/root/tutorial\"}}" At the prompt, enter the following command: curl -X PATCH -d $UPDATE -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" https://datastream.googleapis.com/ DATASTREAM API VERSION / PROJECT PATH /connectionProfiles/ DESTINATION CONNECTION PROFILE ID ?update mask=gcsProfile.rootPath Note: The update mask=gcsProfile.rootPath portion of code indicates that you want to change the value of the rootPath parameter for the Cloud Storage connection profile.
- At the prompt, enter the following command: curl -X POST -d $ORACLE -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" https://datastream.googleapis.com/ DATASTREAM API VERSION / PROJECT PATH /connectionProfiles? connection profile id= SOURCE CONNECTION PROFILE ID Use the following table to help you understand the parameter values for this command: Parameter value Replace with DATASTREAM API VERSION The current version of the Datastream API (for example, v1 ).

### "REST Resource: projects.locations.connectionProfiles \_|\_ Datastream \_\

- URL: [https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles](https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles)
- Source ID: `site-api-reference`
- Final score: 273
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Connection configuration for the ConnectionProfile. profile can be only one of the following: oracleProfile object ( OracleProfile ) Profile for connecting to an Oracle source. gcsProfile object ( GcsProfile ) Profile for connecting to a Cloud Storage destination. mysqlProfile object ( MysqlProfile ) Profile for connecting to a MySQL source. bigqueryProfile object ( BigQueryProfile ) Profile for connecting to a BigQuery destination. postgresqlProfile object ( PostgresqlProfile ) Profile for connecting to a PostgreSQL source. sqlServerProfile object ( SqlServerProfile ) Profile for connecting to a SQLServer source. salesforceProfile object ( SalesforceProfile ) Profile for connecting to a Salesforce source. mongodbProfile object ( MongodbProfile ) Profile for connecting to a MongoDB source. spannerProfile object ( SpannerProfile ) Profile for connecting to a Spanner source.
- Format: projects/{project}/locations/{location}/privateConnections/{name} Methods create Use this method to create a connection profile in a project and location. delete Use this method to delete a connection profile. discover Use this method to discover a connection profile. get Use this method to get details about a connection profile. list Use this method to list connection profiles created in a project and location. patch Use this method to update the parameters of a connection profile.
- Connectivity options used to establish a connection to the profile. connectivity can be only one of the following: staticServiceIpConnectivity object ( StaticServiceIpConnectivity ) Static Service IP connectivity. forwardSshConnectivity object ( ForwardSshTunnelConnectivity ) Forward SSH tunnel connectivity. privateConnectivity object ( PrivateConnectivity ) Private connectivity.
- Used when the source database is configured to allow incoming connections from the Datastream public IP addresses for the region specified in the connection profile.

### "Method: projects.locations.connectionProfiles.create \_|\_ Datastream \_\

- URL: [https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles/create](https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles/create)
- Source ID: `site-api-reference`
- Final score: 261
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Authorization requires the following IAM permission on the specified resource parent : datastream.connectionProfiles.create Query parameters Parameters connectionProfileId string Required.
- HTTP request POST https://datastream.googleapis.com/v1/{parent}/connectionProfiles Path parameters Parameters parent string Required.
- Only validate the connection profile, but don't create any resources.
- IAM Permissions Requires the following IAM permission on the parent resource: datastream.connectionProfiles.create For more information, see the IAM documentation .

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
- The connection profile on which to run discover. target can be only one of the following: connectionProfile object ( ConnectionProfile ) Optional.

