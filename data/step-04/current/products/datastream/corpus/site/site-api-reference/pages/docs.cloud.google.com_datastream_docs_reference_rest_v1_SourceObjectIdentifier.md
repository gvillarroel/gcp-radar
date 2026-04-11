---
title: "SourceObjectIdentifier \_|\_ Datastream \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/datastream/docs/reference/rest/v1/SourceObjectIdentifier
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/datastream/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/datastream/docs/reference/rest/v1/SourceObjectIdentifier
  title: "SourceObjectIdentifier \_|\_ Datastream \_|\_ Google Cloud Documentation"
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
SourceObjectIdentifier
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
OracleObjectIdentifier
JSON representation
MysqlObjectIdentifier
JSON representation
PostgresqlObjectIdentifier
JSON representation
SqlServerObjectIdentifier
JSON representation
SalesforceObjectIdentifier
JSON representation
MongodbObjectIdentifier
JSON representation
SpannerObjectIdentifier
JSON representation
Represents an identifier of an object in the data source.
JSON representation
{
// Union field source_identifier can be only one of the following:
"oracleIdentifier" : {
object ( OracleObjectIdentifier )
} ,
"mysqlIdentifier" : {
object ( MysqlObjectIdentifier )
} ,
"postgresqlIdentifier" : {
object ( PostgresqlObjectIdentifier )
} ,
"sqlServerIdentifier" : {
object ( SqlServerObjectIdentifier )
} ,
"salesforceIdentifier" : {
object ( SalesforceObjectIdentifier )
} ,
"mongodbIdentifier" : {
object ( MongodbObjectIdentifier )
} ,
"spannerIdentifier" : {
object ( SpannerObjectIdentifier )
}
// End of list of possible types for union field source_identifier .
}
Fields
Union field source_identifier . The identifier for an object in the data source. source_identifier can be only one of the following:
oracleIdentifier
object ( OracleObjectIdentifier )
Oracle data source object identifier.
mysqlIdentifier
object ( MysqlObjectIdentifier )
Mysql data source object identifier.
postgresqlIdentifier
object ( PostgresqlObjectIdentifier )
PostgreSQL data source object identifier.
sqlServerIdentifier
object ( SqlServerObjectIdentifier )
SQLServer data source object identifier.
salesforceIdentifier
object ( SalesforceObjectIdentifier )
Salesforce data source object identifier.
mongodbIdentifier
object ( MongodbObjectIdentifier )
MongoDB data source object identifier.
spannerIdentifier
object ( SpannerObjectIdentifier )
Spanner data source object identifier.
OracleObjectIdentifier
Oracle data source object identifier.
JSON representation
{
"schema" : string ,
"table" : string
}
Fields
schema
string
Required. The schema name.
table
string
Required. The table name.
MysqlObjectIdentifier
Mysql data source object identifier.
JSON representation
{
"database" : string ,
"table" : string
}
Fields
database
string
Required. The database name.
table
string
Required. The table name.
PostgresqlObjectIdentifier
PostgreSQL data source object identifier.
JSON representation
{
"schema" : string ,
"table" : string
}
Fields
schema
string
Required. The schema name.
table
string
Required. The table name.
SqlServerObjectIdentifier
SQLServer data source object identifier.
JSON representation
{
"schema" : string ,
"table" : string
}
Fields
schema
string
Required. The schema name.
table
string
Required. The table name.
SalesforceObjectIdentifier
Salesforce data source object identifier.
JSON representation
{
"objectName" : string
}
Fields
objectName
string
Required. The object name.
MongodbObjectIdentifier
MongoDB data source object identifier.
JSON representation
{
"database" : string ,
"collection" : string
}
Fields
database
string
Required. The database name.
collection
string
Required. The collection name.
SpannerObjectIdentifier
Spanner data source object identifier.
JSON representation
{
"schema" : string ,
"table" : string
}
Fields
schema
string
Optional. The schema name.
table
string
Required. The table name.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-01-26 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-01-26 UTC."],[],[]]
