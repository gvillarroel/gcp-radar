---
title: "Method: projects.locations.connectionProfiles.discover \_|\_ Datastream \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles/discover
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/datastream/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles/discover
  title: "Method: projects.locations.connectionProfiles.discover \_|\_ Datastream\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Datastream
Reference
Send feedback
Method: projects.locations.connectionProfiles.discover
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
JSON representation
Response body
JSON representation
Authorization scopes
IAM Permissions
Examples
Try it!
Use this method to discover a connection profile. The discover API call exposes the data objects and metadata belonging to the profile. Typically, a request returns children data objects of a parent data object that's optionally supplied in the request.
HTTP request
POST https://datastream.googleapis.com/v1/{parent}/connectionProfiles:discover
Path parameters
Parameters
parent
string
Required. The parent resource of the connection profile type. Must be in the format projects/*/locations/* .
Authorization requires the following IAM permission on the specified resource parent :
datastream.connectionProfiles.discover
Request body
The request body contains data with the following structure:
JSON representation
{
// Union field target can be only one of the following:
"connectionProfile" : {
object ( ConnectionProfile )
} ,
"connectionProfileName" : string
// End of list of possible types for union field target .
// Union field hierarchy can be only one of the following:
"fullHierarchy" : boolean ,
"hierarchyDepth" : integer
// End of list of possible types for union field hierarchy .
// Union field data_object can be only one of the following:
"oracleRdbms" : {
object ( OracleRdbms )
} ,
"mysqlRdbms" : {
object ( MysqlRdbms )
} ,
"postgresqlRdbms" : {
object ( PostgresqlRdbms )
} ,
"sqlServerRdbms" : {
object ( SqlServerRdbms )
} ,
"salesforceOrg" : {
object ( SalesforceOrg )
} ,
"mongodbCluster" : {
object ( MongodbCluster )
} ,
"spannerDatabase" : {
object ( SpannerDatabase )
}
// End of list of possible types for union field data_object .
}
Fields
Union field target . The connection profile on which to run discover. target can be only one of the following:
connectionProfile
object ( ConnectionProfile )
Optional. An ad-hoc connection profile configuration.
connectionProfileName
string
Optional. A reference to an existing connection profile.
Union field hierarchy . The depth of the retrieved hierarchy of data objects. hierarchy can be only one of the following:
fullHierarchy
boolean
Optional. Whether to retrieve the full hierarchy of data objects (TRUE) or only the current level (FALSE).
hierarchyDepth
integer
Optional. The number of hierarchy levels below the current level to be retrieved.
Union field data_object . The data object to populate with child data objects and metadata. data_object can be only one of the following:
oracleRdbms
object ( OracleRdbms )
Optional. Oracle RDBMS to enrich with child data objects and metadata.
mysqlRdbms
object ( MysqlRdbms )
Optional. MySQL RDBMS to enrich with child data objects and metadata.
postgresqlRdbms
object ( PostgresqlRdbms )
Optional. PostgreSQL RDBMS to enrich with child data objects and metadata.
sqlServerRdbms
object ( SqlServerRdbms )
Optional. SQLServer RDBMS to enrich with child data objects and metadata.
salesforceOrg
object ( SalesforceOrg )
Optional. Salesforce organization to enrich with child data objects and metadata.
mongodbCluster
object ( MongodbCluster )
Optional. MongoDB cluster to enrich with child data objects and metadata.
spannerDatabase
object ( SpannerDatabase )
Optional. Spanner database to enrich with child data objects and metadata.
Response body
Response from a discover request.
If successful, the response body contains data with the following structure:
JSON representation
{
// Union field data_object can be only one of the following:
"oracleRdbms" : {
object ( OracleRdbms )
} ,
"mysqlRdbms" : {
object ( MysqlRdbms )
} ,
"postgresqlRdbms" : {
object ( PostgresqlRdbms )
} ,
"sqlServerRdbms" : {
object ( SqlServerRdbms )
} ,
"salesforceOrg" : {
object ( SalesforceOrg )
} ,
"mongodbCluster" : {
object ( MongodbCluster )
} ,
"spannerDatabase" : {
object ( SpannerDatabase )
}
// End of list of possible types for union field data_object .
}
Fields
Union field data_object . The data object that has been enriched by the discover API call. data_object can be only one of the following:
oracleRdbms
object ( OracleRdbms )
Enriched Oracle RDBMS object.
mysqlRdbms
object ( MysqlRdbms )
Enriched MySQL RDBMS object.
postgresqlRdbms
object ( PostgresqlRdbms )
Enriched PostgreSQL RDBMS object.
sqlServerRdbms
object ( SqlServerRdbms )
Enriched SQLServer RDBMS object.
salesforceOrg
object ( SalesforceOrg )
Enriched Salesforce organization.
mongodbCluster
object ( MongodbCluster )
Enriched MongoDB cluster.
spannerDatabase
object ( SpannerDatabase )
Enriched Spanner database.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the parent resource:
datastream.connectionProfiles.discover
For more information, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-01-26 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-01-26 UTC."],[],[]]
