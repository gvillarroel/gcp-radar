---
title: "DatabaseDetails \_|\_ Migration Center \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/DatabaseDetails
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/migration-center/docs/api
source_metadata:
  url: https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/DatabaseDetails
  title: "DatabaseDetails \_|\_ Migration Center \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Migration
Migration Center
Reference
Send feedback
DatabaseDetails
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
ParentDatabaseDeployment
JSON representation
DatabaseSchema
JSON representation
DatabaseObjects
JSON representation
Category
SqlServerSchemaDetails
JSON representation
MySqlSchemaDetails
JSON representation
MySqlStorageEngineDetails
JSON representation
Engine
PostgreSqlSchemaDetails
JSON representation
PostgreSqlExtension
JSON representation
Details of a logical database.
JSON representation
{
"databaseName" : string ,
"parentDatabaseDeployment" : {
object ( ParentDatabaseDeployment )
} ,
"allocatedStorageBytes" : string ,
"schemas" : [
{
object ( DatabaseSchema )
}
]
}
Fields
database Name
string
Required. The name of the database.
parent Database Deployment
object ( ParentDatabaseDeployment )
Required. The parent database deployment that contains the logical database.
allocated Storage Bytes
string ( int64 format)
Optional. The allocated storage for the database in bytes.
schemas[]
object ( DatabaseSchema )
Optional. The database schemas.
ParentDatabaseDeployment
The identifiers of the parent database deployment.
JSON representation
{
"generatedId" : string ,
"manualUniqueId" : string
}
Fields
generated Id
string
Optional. The parent database deployment generated ID.
manual Unique Id
string
Optional. The parent database deployment optional manual unique ID set by the user.
DatabaseSchema
Details of a database schema.
JSON representation
{
"schemaName" : string ,
"tablesSizeBytes" : string ,
"objects" : [
{
object ( DatabaseObjects )
}
] ,
// Union field engine_details can be only one of the following:
"sqlServer" : {
object ( SqlServerSchemaDetails )
} ,
"mysql" : {
object ( MySqlSchemaDetails )
} ,
"postgresql" : {
object ( PostgreSqlSchemaDetails )
}
// End of list of possible types for union field engine_details .
}
Fields
schema Name
string
Required. The name of the schema.
tables Size Bytes
string ( int64 format)
Optional. The total size of tables in bytes.
objects[]
object ( DatabaseObjects )
Optional. List of details of objects by category.
Union field engine_details . Engine-specific details. engine_details can be only one of the following:
sql Server
object ( SqlServerSchemaDetails )
Optional. Details of a SqlServer schema.
mysql
object ( MySqlSchemaDetails )
Optional. Details of a Mysql schema.
postgresql
object ( PostgreSqlSchemaDetails )
Optional. Details of a PostgreSql schema.
DatabaseObjects
Details of a group of database objects.
JSON representation
{
"category" : enum ( Category ) ,
"count" : string
}
Fields
category
enum ( Category )
Optional. The category of the objects.
count
string ( int64 format)
Optional. The number of objects.
Category
The category of a database object.
Enums
CATEGORY_UNSPECIFIED
Unspecified type.
TABLE
Table.
INDEX
Index.
CONSTRAINTS
Constraints.
VIEWS
Views.
SOURCE_CODE
Source code, e.g. procedures.
OTHER
Uncategorized objects.
SqlServerSchemaDetails
Specific details for a SqlServer database.
JSON representation
{
"clrObjectCount" : integer
}
Fields
clr Object Count
integer
Optional. SqlServer number of CLR objects.
MySqlSchemaDetails
Specific details for a Mysql database.
JSON representation
{
"storageEngines" : [
{
object ( MySqlStorageEngineDetails )
}
]
}
Fields
storage Engines[]
object ( MySqlStorageEngineDetails )
Optional. Mysql storage engine tables.
MySqlStorageEngineDetails
Mysql storage engine tables.
JSON representation
{
"engine" : enum ( Engine ) ,
"tableCount" : integer ,
"encryptedTableCount" : integer
}
Fields
engine
enum ( Engine )
Required. The storage engine.
table Count
integer
Optional. The number of tables.
encrypted Table Count
integer
Optional. The number of encrypted tables.
Engine
Storage engines.
Enums
ENGINE_UNSPECIFIED
Unspecified storage engine.
INNODB
InnoDB.
MYISAM
MyISAM.
MEMORY
Memory.
CSV
CSV.
ARCHIVE
Archive.
BLACKHOLE
Blackhole.
NDB
NDB.
MERGE
Merge.
FEDERATED
Federated.
EXAMPLE
Example.
OTHER
Other.
PostgreSqlSchemaDetails
Specific details for a PostgreSql schema.
JSON representation
{
"foreignTablesCount" : integer ,
"postgresqlExtensions" : [
{
object ( PostgreSqlExtension )
}
]
}
Fields
foreign Tables Count
integer
Optional. PostgreSql foreign tables.
postgresql Extensions[]
object ( PostgreSqlExtension )
Optional. PostgreSql extensions.
PostgreSqlExtension
PostgreSql extension.
JSON representation
{
"extension" : string ,
"version" : string
}
Fields
extension
string
Required. The extension name.
version
string
Required. The extension version.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-17 UTC."],[],[]]
