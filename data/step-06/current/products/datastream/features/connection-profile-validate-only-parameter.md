---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:11:59.758Z"
product_name: "Datastream"
product_slug: "datastream"
feature_name: "Connection profile validate_only parameter"
feature_slug: "connection-profile-validate-only-parameter"
latest_feature_date: "2023-01-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/datastream/docs/using-datastream-apis"
  - "https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles"
  - "https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient"
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
Coverage: LOW

## Step 02 Summary

The Datastream API supports a validate_only parameter on connection profile resources.

## Extended Definition

The Datastream API supports a validate_only parameter on connection profile resources.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/datastream/docs/using-datastream-apis](https://docs.cloud.google.com/datastream/docs/using-datastream-apis)
- [https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles](https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles)
- [https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient](https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient)

## Supporting Pages

### Using Datastream APIs \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/using-datastream-apis](https://docs.cloud.google.com/datastream/docs/using-datastream-apis)
- Source ID: `site-docs-root`
- Final score: 224
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- At the prompt, enter the following command: curl -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" https://datastream.googleapis.com/ DATASTREAM API VERSION / PROJECT PATH /streams/ STREAM ID Verify that the value of the fileRotationMb parameter for the Cloud Storage connection profile is now 100 . { "name" : " PROJECT PATH /streams/ STREAM ID " , "createTime" : " DATE AND TIME STAMP " , "updateTime" : " DATE AND TIME STAMP " , "displayName" : " DISPLAY NAME " , "sourceConfig" : { "sourceConnectionProfileName" : "projects/ YOUR PROJECT NUMBER /locations/ YOUR PROJECT LOCATION /connectionProfiles/ SOURCE CONNECTION PROFILE ID " , "oracleSourceConfig" : { "allowlist" : { "oracleSchemas" : [ { "schema" : "ROOT" } ] }, "rejectlist" : {} } }, "destinationConfig" : { "destinationConnectionProfileName" : "projects/ YOUR PROJECT NUMBER /locations/ YOUR PROJECT LOCATION /connectionProfiles/ DESTINATION CONNECTION PROFILE ID " , "gcsDestinationConfig" : { "fileRotationMb" : 100 , "fileRotationInterval" : "15s" "avroFileFormat" : {} } }, "state" : "CREATED" , "backfillAll" : {} } Start the stream.
- To set the variable, at the prompt, enter the following command: UPDATE="{\"destination config\":{\"gcs destination config\":{\"file rotation mb\":100}}}" At the prompt, enter the following command: curl -X PATCH -d $UPDATE -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" https://datastream.googleapis.com/ DATASTREAM API VERSION / PROJECT PATH /streams/ STREAM ID / ?update mask=destination config.gcs destination config.file rotation mb Note: The update mask=destination config.gcs destination config.file rotation mb portion of code indicates that you want to change the value of the file rotation mb parameter for the Cloud Storage connection profile.
- To set the variable, at the prompt, enter the following command: UPDATE = "{\"gcsProfile\":{\"rootPath\":\"/root/tutorial\"}}" At the prompt, enter the following command: curl -X PATCH -d $UPDATE -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" https://datastream.googleapis.com/ DATASTREAM API VERSION / PROJECT PATH /connectionProfiles/ DESTINATION CONNECTION PROFILE ID ?update mask=gcsProfile.rootPath Note: The update mask=gcsProfile.rootPath portion of code indicates that you want to change the value of the rootPath parameter for the Cloud Storage connection profile.
- At the prompt, enter the following command: curl -X POST -d $ORACLE -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" https://datastream.googleapis.com/ DATASTREAM API VERSION / PROJECT PATH /connectionProfiles? connection profile id= SOURCE CONNECTION PROFILE ID Use the following table to help you understand the parameter values for this command: Parameter value Replace with DATASTREAM API VERSION The current version of the Datastream API (for example, v1 ).

### "REST Resource: projects.locations.connectionProfiles \_|\_ Datastream \_\

- URL: [https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles](https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles)
- Source ID: `site-api-reference`
- Final score: 210
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Connection configuration for the ConnectionProfile. profile can be only one of the following: oracleProfile object ( OracleProfile ) Profile for connecting to an Oracle source. gcsProfile object ( GcsProfile ) Profile for connecting to a Cloud Storage destination. mysqlProfile object ( MysqlProfile ) Profile for connecting to a MySQL source. bigqueryProfile object ( BigQueryProfile ) Profile for connecting to a BigQuery destination. postgresqlProfile object ( PostgresqlProfile ) Profile for connecting to a PostgreSQL source. sqlServerProfile object ( SqlServerProfile ) Profile for connecting to a SQLServer source. salesforceProfile object ( SalesforceProfile ) Profile for connecting to a Salesforce source. mongodbProfile object ( MongodbProfile ) Profile for connecting to a MongoDB source. spannerProfile object ( SpannerProfile ) Profile for connecting to a Spanner source.
- Format: projects/{project}/locations/{location}/privateConnections/{name} Methods create Use this method to create a connection profile in a project and location. delete Use this method to delete a connection profile. discover Use this method to discover a connection profile. get Use this method to get details about a connection profile. list Use this method to list connection profiles created in a project and location. patch Use this method to update the parameters of a connection profile.
- Connectivity options used to establish a connection to the profile. connectivity can be only one of the following: staticServiceIpConnectivity object ( StaticServiceIpConnectivity ) Static Service IP connectivity. forwardSshConnectivity object ( ForwardSshTunnelConnectivity ) Forward SSH tunnel connectivity. privateConnectivity object ( PrivateConnectivity ) Private connectivity.
- Used when the source database is configured to allow incoming connections from the Datastream public IP addresses for the region specified in the connection profile.

### "Class DatastreamAsyncClient (1.18.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient](https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient)
- Source ID: `site-python-reference`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- CreateConnectionProfileRequest ( parent="parent value", connection profile id="connection profile id value", connection profile=connection profile, ) Make the request operation = client. create connection profile (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.datastream v1.types.CreateConnectionProfileRequest , dict]] The request object.
- UpdateConnectionProfileRequest ( connection profile=connection profile, ) Make the request operation = client. update connection profile (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.datastream v1.types.UpdateConnectionProfileRequest , dict]] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import datastream v1 async def sample discover connection profile(): Create a client client = datastream v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import datastream v1 async def sample create connection profile(): Create a client client = datastream v1 .

