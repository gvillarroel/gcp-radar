---
title: "DatabaseDeploymentDetails \_|\_ Migration Center \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/DatabaseDeploymentDetails
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/migration-center/docs/api
source_metadata:
  url: https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/DatabaseDeploymentDetails
  title: "DatabaseDeploymentDetails \_|\_ Migration Center \_|\_ Google Cloud Documentation"
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
DatabaseDeploymentDetails
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
DatabaseDeploymentTopology
JSON representation
DatabaseInstance
JSON representation
Role
DatabaseInstanceNetwork
JSON representation
SqlServerDatabaseDeployment
JSON representation
SqlServerFeature
JSON representation
SqlServerServerFlag
JSON representation
SqlServerTraceFlag
JSON representation
Scope
MysqlDatabaseDeployment
JSON representation
MySqlProperty
JSON representation
MySqlPlugin
JSON representation
MySqlVariable
JSON representation
PostgreSqlDatabaseDeployment
JSON representation
PostgreSqlProperty
JSON representation
PostgreSqlSetting
JSON representation
AggregatedStats
JSON representation
The details of a database deployment asset.
JSON representation
{
"generatedId" : string ,
"manualUniqueId" : string ,
"version" : string ,
"edition" : string ,
"topology" : {
object ( DatabaseDeploymentTopology )
} ,
"aggregatedStats" : {
object ( AggregatedStats )
} ,
// Union field engine_details can be only one of the following:
"sqlServer" : {
object ( SqlServerDatabaseDeployment )
} ,
"mysql" : {
object ( MysqlDatabaseDeployment )
} ,
"postgresql" : {
object ( PostgreSqlDatabaseDeployment )
}
// End of list of possible types for union field engine_details .
}
Fields
generated Id
string
Optional. The database deployment generated ID.
manual Unique Id
string
Optional. A manual unique ID set by the user.
version
string
Optional. The database deployment version.
edition
string
Optional. The database deployment edition.
topology
object ( DatabaseDeploymentTopology )
Optional. Details of the database deployment topology.
aggregated Stats
object ( AggregatedStats )
Output only. Aggregated stats for the database deployment.
Union field engine_details . Engine-specific details. engine_details can be only one of the following:
sql Server
object ( SqlServerDatabaseDeployment )
Optional. Details of a Microsoft SQL Server database deployment.
mysql
object ( MysqlDatabaseDeployment )
Optional. Details of a MYSQL database deployment.
postgresql
object ( PostgreSqlDatabaseDeployment )
Optional. Details of a PostgreSQL database deployment.
DatabaseDeploymentTopology
Details of database deployment's topology.
JSON representation
{
"coreCount" : integer ,
"physicalCoreCount" : integer ,
"memoryBytes" : string ,
"diskAllocatedBytes" : string ,
"diskUsedBytes" : string ,
"coreLimit" : integer ,
"physicalCoreLimit" : integer ,
"memoryLimitBytes" : string ,
"instances" : [
{
object ( DatabaseInstance )
}
]
}
Fields
core Count
integer
Optional. Number of total logical cores.
physical Core Count
integer
Optional. Number of total physical cores.
memory Bytes
string ( int64 format)
Optional. Total memory in bytes.
disk Allocated Bytes
string ( int64 format)
Optional. Disk allocated in bytes.
disk Used Bytes
string ( int64 format)
Optional. Disk used in bytes.
core Limit
integer
Optional. Number of total logical cores limited by db deployment.
physical Core Limit
integer
Optional. Number of total physical cores limited by db deployment.
memory Limit Bytes
string ( int64 format)
Optional. Total memory in bytes limited by db deployment.
instances[]
object ( DatabaseInstance )
Optional. List of database instances.
DatabaseInstance
Details of a database instance.
JSON representation
{
"instanceName" : string ,
"role" : enum ( Role ) ,
"network" : {
object ( DatabaseInstanceNetwork )
}
}
Fields
instance Name
string
Optional. The instance's name.
role
enum ( Role )
Optional. The instance role in the database engine.
network
object ( DatabaseInstanceNetwork )
Optional. Networking details.
Role
Database instance roles.
Enums
ROLE_UNSPECIFIED
Unspecified.
PRIMARY
Primary.
SECONDARY
Secondary.
ARBITER
Arbiter.
DatabaseInstanceNetwork
Network details of a database instance.
JSON representation
{
"primaryMacAddress" : string ,
"ipAddresses" : [
string
] ,
"hostNames" : [
string
]
}
Fields
primary Mac Address
string
Optional. The instance's primary MAC address.
ip Addresses[]
string
Optional. The instance's IP addresses.
host Names[]
string
Optional. The instance's host names.
SqlServerDatabaseDeployment
Specific details for a Microsoft SQL Server database deployment.
JSON representation
{
"features" : [
{
object ( SqlServerFeature )
}
] ,
"serverFlags" : [
{
object ( SqlServerServerFlag )
}
] ,
"traceFlags" : [
{
object ( SqlServerTraceFlag )
}
]
}
Fields
features[]
object ( SqlServerFeature )
Optional. List of SQL Server features.
server Flags[]
object ( SqlServerServerFlag )
Optional. List of SQL Server server flags.
trace Flags[]
object ( SqlServerTraceFlag )
Optional. List of SQL Server trace flags.
SqlServerFeature
SQL Server feature details.
JSON representation
{
"featureName" : string ,
"enabled" : boolean
}
Fields
feature Name
string
Required. The feature name.
enabled
boolean
Required. Field enabled is set when a feature is used on the source deployment.
SqlServerServerFlag
SQL Server server flag details.
JSON representation
{
"serverFlagName" : string ,
"value" : string ,
"valueInUse" : string
}
Fields
server Flag Name
string
Required. The server flag name.
value
string
Required. The server flag value set by the user.
value In Use
string
Required. The server flag actual value. If valueInUse is different from value it means that either the configuration change was not applied or it is an expected behavior. See SQL Server documentation for more details.
SqlServerTraceFlag
SQL Server trace flag details.
JSON representation
{
"traceFlagName" : string ,
"scope" : enum ( Scope )
}
Fields
trace Flag Name
string
Required. The trace flag name.
scope
enum ( Scope )
Required. The trace flag scope.
Scope
The trace flag scope.
Enums
SCOPE_UNSPECIFIED
Unspecified.
OFF
Off.
GLOBAL
Global.
SESSION
Session.
MysqlDatabaseDeployment
Specific details for a Mysql database deployment.
JSON representation
{
"properties" : [
{
object ( MySqlProperty )
}
] ,
"plugins" : [
{
object ( MySqlPlugin )
}
] ,
"resourceGroupsCount" : integer ,
"variables" : [
{
object ( MySqlVariable )
}
]
}
Fields
properties[]
object ( MySqlProperty )
Optional. List of MySql properties.
plugins[]
object ( MySqlPlugin )
Optional. List of MySql plugins.
resource Groups Count
integer
Optional. Number of resource groups.
variables[]
object ( MySqlVariable )
Optional. List of MySql variables.
MySqlProperty
MySql property.
JSON representation
{
"property" : string ,
// Union field value can be only one of the following:
"enabled" : boolean ,
"numericValue" : string
// End of list of possible types for union field value .
}
Fields
property
string
Required. The property name.
Union field value . The property value. value can be only one of the following:
enabled
boolean
Required. The property is enabled.
numeric Value
string ( int64 format)
Required. The property numeric value.
MySqlPlugin
MySql plugin.
JSON representation
{
"plugin" : string ,
"version" : string ,
"enabled" : boolean
}
Fields
plugin
string
Required. The plugin name.
version
string
Required. The plugin version.
enabled
boolean
Required. The plugin is active.
MySqlVariable
MySql variable.
JSON representation
{
"variable" : string ,
"value" : string ,
"category" : string
}
Fields
variable
string
Required. The variable name.
value
string
Required. The variable value.
category
string
Required. The variable category.
PostgreSqlDatabaseDeployment
Specific details for a PostgreSQL database deployment.
JSON representation
{
"properties" : [
{
object ( PostgreSqlProperty )
}
] ,
"settings" : [
{
object ( PostgreSqlSetting )
}
]
}
Fields
properties[]
object ( PostgreSqlProperty )
Optional. List of PostgreSql properties.
settings[]
object ( PostgreSqlSetting )
Optional. List of PostgreSql settings.
PostgreSqlProperty
PostgreSql property.
JSON representation
{
"property" : string ,
// Union field value can be only one of the following:
"enabled" : boolean ,
"numericValue" : string
// End of list of possible types for union field value .
}
Fields
property
string
Required. The property name.
Union field value . The property value. value can be only one of the following:
enabled
boolean
Required. The property is enabled.
numeric Value
string ( int64 format)
Required. The property numeric value.
PostgreSqlSetting
PostgreSql setting.
JSON representation
{
"setting" : string ,
"source" : string ,
"unit" : string ,
// Union field value can be only one of the following:
"boolValue" : boolean ,
"intValue" : string ,
"realValue" : number ,
"stringValue" : string
// End of list of possible types for union field value .
}
Fields
setting
string
Required. The setting name.
source
string
Required. The setting source.
unit
string
Optional. The setting unit.
Union field value . The setting value. value can be only one of the following:
bool Value
boolean
Required. The setting boolean value.
int Value
string ( int64 format)
Required. The setting int value.
real Value
number
Required. The setting real value.
string Value
string
Required. The setting string value. Notice that enum values are stored as strings.
AggregatedStats
Aggregated stats for the database deployment.
JSON representation
{
"databaseCount" : integer
}
Fields
database Count
integer
Output only. The number of databases in the deployment.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-17 UTC."],[],[]]
