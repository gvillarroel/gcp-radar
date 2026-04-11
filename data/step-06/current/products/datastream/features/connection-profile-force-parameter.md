---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:11:59.757Z"
product_name: "Datastream"
product_slug: "datastream"
feature_name: "Connection profile force parameter"
feature_slug: "connection-profile-force-parameter"
latest_feature_date: "2023-01-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles/discover"
  - "https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles"
  - "https://docs.cloud.google.com/datastream/docs/use-the-datastream-api"
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
Coverage: LOW

## Step 02 Summary

The Datastream API supports a force parameter on connection profile resources.

## Extended Definition

The Datastream API supports a force parameter on connection profile resources.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles/discover](https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles/discover)
- [https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles](https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles)
- [https://docs.cloud.google.com/datastream/docs/use-the-datastream-api](https://docs.cloud.google.com/datastream/docs/use-the-datastream-api)

## Supporting Pages

### "Method: projects.locations.connectionProfiles.discover \_|\_ Datastream\

- URL: [https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles/discover](https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles/discover)
- Source ID: `site-api-reference`
- Final score: 202
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Authorization requires the following IAM permission on the specified resource parent : datastream.connectionProfiles.discover Request body The request body contains data with the following structure: JSON representation { // Union field target can be only one of the following: "connectionProfile" : { object ( ConnectionProfile ) } , "connectionProfileName" : string // End of list of possible types for union field target . // Union field hierarchy can be only one of the following: "fullHierarchy" : boolean , "hierarchyDepth" : integer // End of list of possible types for union field hierarchy . // Union field data object can be only one of the following: "oracleRdbms" : { object ( OracleRdbms ) } , "mysqlRdbms" : { object ( MysqlRdbms ) } , "postgresqlRdbms" : { object ( PostgresqlRdbms ) } , "sqlServerRdbms" : { object ( SqlServerRdbms ) } , "salesforceOrg" : { object ( SalesforceOrg ) } , "mongodbCluster" : { object ( MongodbCluster ) } , "spannerDatabase" : { object ( SpannerDatabase ) } // End of list of possible types for union field data object . } Fields Union field target .
- HTTP request POST https://datastream.googleapis.com/v1/{parent}/connectionProfiles:discover Path parameters Parameters parent string Required.
- IAM Permissions Requires the following IAM permission on the parent resource: datastream.connectionProfiles.discover For more information, see the IAM documentation .
- The data object that has been enriched by the discover API call. data object can be only one of the following: oracleRdbms object ( OracleRdbms ) Enriched Oracle RDBMS object. mysqlRdbms object ( MysqlRdbms ) Enriched MySQL RDBMS object. postgresqlRdbms object ( PostgresqlRdbms ) Enriched PostgreSQL RDBMS object. sqlServerRdbms object ( SqlServerRdbms ) Enriched SQLServer RDBMS object. salesforceOrg object ( SalesforceOrg ) Enriched Salesforce organization. mongodbCluster object ( MongodbCluster ) Enriched MongoDB cluster. spannerDatabase object ( SpannerDatabase ) Enriched Spanner database.

### "REST Resource: projects.locations.connectionProfiles \_|\_ Datastream \_\

- URL: [https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles](https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles)
- Source ID: `site-api-reference`
- Final score: 202
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Connection configuration for the ConnectionProfile. profile can be only one of the following: oracleProfile object ( OracleProfile ) Profile for connecting to an Oracle source. gcsProfile object ( GcsProfile ) Profile for connecting to a Cloud Storage destination. mysqlProfile object ( MysqlProfile ) Profile for connecting to a MySQL source. bigqueryProfile object ( BigQueryProfile ) Profile for connecting to a BigQuery destination. postgresqlProfile object ( PostgresqlProfile ) Profile for connecting to a PostgreSQL source. sqlServerProfile object ( SqlServerProfile ) Profile for connecting to a SQLServer source. salesforceProfile object ( SalesforceProfile ) Profile for connecting to a Salesforce source. mongodbProfile object ( MongodbProfile ) Profile for connecting to a MongoDB source. spannerProfile object ( SpannerProfile ) Profile for connecting to a Spanner source.
- Format: projects/{project}/locations/{location}/privateConnections/{name} Methods create Use this method to create a connection profile in a project and location. delete Use this method to delete a connection profile. discover Use this method to discover a connection profile. get Use this method to get details about a connection profile. list Use this method to list connection profiles created in a project and location. patch Use this method to update the parameters of a connection profile.
- If the DB server mandates encryption, then connection will be encrypted but server identity will not be authenticated. basicEncryption object ( BasicEncryption ) If set, Datastream will enforce encryption without authenticating server identity.
- Used when the source database is configured to allow incoming connections from the Datastream public IP addresses for the region specified in the connection profile.

### Use the Datastream API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/use-the-datastream-api](https://docs.cloud.google.com/datastream/docs/use-the-datastream-api)
- Source ID: `site-api-reference`
- Final score: 192
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- At the command line, provide the path to the file, preceded by the @ character, as the --data parameter: --data @<path-to-file>/<filename> For example, to create a connection profile for a MySQL source, you could create a file named request.json with the following content: { "displayName": "my MySQL connection profile", "mysql": { "host": "10.11.12.13", "port": 3306, "username": "myusername", "password": "mypassword" } } Then, you would use the following cURL command at the command line: curl --header "Authorization: Bearer ${ ACCESS TOKEN } " \ --header 'Content-Type: application/json' \ --data @./request.json \ -X POST \ https://datastream.googleapis.com/v1/projects/myProject/locations/myLocation/connectionProfiles?connectionProfileId = myMySQLconnectionprofile Work with long-running API calls Some API calls, such as object creation, can take some time to complete.
- API examples You can see examples of using the Datastream API with cURL in the following pages of the Datastream documentation: Manage private connectivity configurations Manage connection profiles Manage streams Provide JSON data from a file When you use the API with cURL, you provide property values using the command line.
- These permissions include: Datastream Admin: With this permission, a user gains access to all resources of Datastream used to manage private connectivity configurations, connection profiles, and streams.
- The REST API is defined by resources associated with creating and managing private connectivity configurations, connection profiles, and streams.

