---
title: "REST Resource: projects.locations.assets \_|\_ Migration Center \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/projects.locations.assets
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/migration-center/docs/api
source_metadata:
  url: https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/projects.locations.assets
  title: "REST Resource: projects.locations.assets \_|\_ Migration Center \_|\_ Google\
    \ Cloud Documentation"
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
REST Resource: projects.locations.assets
Stay organized with collections
Save and categorize content based on your preferences.
Resource: Asset
JSON representation
InsightList
JSON representation
Insight
JSON representation
MigrationInsight
JSON representation
FitDescriptor
JSON representation
FitLevel
ComputeEngineMigrationTarget
JSON representation
ComputeEngineShapeDescriptor
JSON representation
ComputeStorageDescriptor
JSON representation
GenericInsight
JSON representation
AssetPerformanceData
JSON representation
DailyResourceUsageAggregation
JSON representation
CPU
JSON representation
Stats
JSON representation
Memory
JSON representation
Network
JSON representation
Disk
JSON representation
Methods
Resource: Asset
An asset represents a resource in your environment. Asset types include virtual machines and databases.
JSON representation
{
"name" : string ,
"title" : string ,
"createTime" : string ,
"updateTime" : string ,
"labels" : {
string : string ,
...
} ,
"attributes" : {
string : string ,
...
} ,
"insightList" : {
object ( InsightList )
} ,
"performanceData" : {
object ( AssetPerformanceData )
} ,
"sources" : [
string
] ,
"assignedGroups" : [
string
] ,
// Union field AssetDetails can be only one of the following:
"machineDetails" : {
object ( MachineDetails )
} ,
"databaseDeploymentDetails" : {
object ( DatabaseDeploymentDetails )
} ,
"databaseDetails" : {
object ( DatabaseDetails )
}
// End of list of possible types for union field AssetDetails .
}
Fields
name
string
Output only. The full name of the asset.
title
string
Output only. Server generated human readable name of the asset.
create Time
string ( Timestamp format)
Output only. The timestamp when the asset was created.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
update Time
string ( Timestamp format)
Output only. The timestamp when the asset was last updated.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
labels
map (key: string, value: string)
Labels as key value pairs.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
attributes
map (key: string, value: string)
Generic asset attributes.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
insight List
object ( InsightList )
Output only. The list of insights associated with the asset.
performance Data
object ( AssetPerformanceData )
Output only. Performance data for the asset.
sources[]
string
Output only. The list of sources contributing to the asset.
assigned Groups[]
string
Output only. The list of groups that the asset is assigned to.
Union field AssetDetails . The internal information of an asset. Only one field can be specified with different attributes based on the type of the asset. AssetDetails can be only one of the following:
machine Details
object ( MachineDetails )
Output only. Asset information specific for virtual and physical machines.
database Deployment Details
object ( DatabaseDeploymentDetails )
Output only. Asset information specific for database deployments.
database Details
object ( DatabaseDetails )
Output only. Asset information specific for logical databases.
InsightList
Message containing insights list.
JSON representation
{
"insights" : [
{
object ( Insight )
}
] ,
"updateTime" : string
}
Fields
insights[]
object ( Insight )
Output only. Insights of the list.
update Time
string ( Timestamp format)
Output only. Update timestamp.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
Insight
An insight about an asset.
JSON representation
{
// Union field insight can be only one of the following:
"migrationInsight" : {
object ( MigrationInsight )
} ,
"genericInsight" : {
object ( GenericInsight )
}
// End of list of possible types for union field insight .
}
Fields
Union field insight .
insight can be only one of the following:
migration Insight
object ( MigrationInsight )
Output only. An insight about potential migrations for an asset.
generic Insight
object ( GenericInsight )
Output only. A generic insight about an asset.
MigrationInsight
An insight about potential migrations for an asset.
JSON representation
{
"fit" : {
object ( FitDescriptor )
} ,
// Union field migration_target can be only one of the following:
"computeEngineTarget" : {
object ( ComputeEngineMigrationTarget )
}
// End of list of possible types for union field migration_target .
}
Fields
fit
object ( FitDescriptor )
Output only. Description of how well the asset this insight is associated with fits the proposed migration.
Union field migration_target . A target for the migration. migration_target can be only one of the following:
compute Engine Target
object ( ComputeEngineMigrationTarget )
Output only. A Google Compute Engine target.
FitDescriptor
Describes the fit level of an asset for migration to a specific target.
JSON representation
{
"fitLevel" : enum ( FitLevel )
}
Fields
fit Level
enum ( FitLevel )
Output only. Fit level.
FitLevel
Fit level.
Enums
FIT_LEVEL_UNSPECIFIED
Not enough information.
FIT
Fit.
NO_FIT
No Fit.
REQUIRES_EFFORT
Fit with effort.
ComputeEngineMigrationTarget
Compute engine migration target.
JSON representation
{
"shape" : {
object ( ComputeEngineShapeDescriptor )
}
}
Fields
shape
object ( ComputeEngineShapeDescriptor )
Description of the suggested shape for the migration target.
ComputeEngineShapeDescriptor
Compute Engine target shape descriptor.
JSON representation
{
"memoryMb" : integer ,
"physicalCoreCount" : integer ,
"logicalCoreCount" : integer ,
"series" : string ,
"machineType" : string ,
"storage" : [
{
object ( ComputeStorageDescriptor )
}
]
}
Fields
memory Mb
integer
Memory in mebibytes.
physical Core Count
integer
Number of physical cores.
logical Core Count
integer
Output only. Number of logical cores.
series
string
Output only. Compute Engine machine series.
machine Type
string
Output only. Compute Engine machine type.
storage[]
object ( ComputeStorageDescriptor )
Output only. Compute Engine storage. Never empty.
ComputeStorageDescriptor
Compute Engine storage option descriptor.
JSON representation
{
"type" : enum ( PersistentDiskType ) ,
"sizeGb" : integer
}
Fields
type
enum ( PersistentDiskType )
Output only. Disk type backing the storage.
size Gb
integer
Output only. Disk size in GiB.
GenericInsight
A generic insight about an asset.
JSON representation
{
"messageId" : string ,
"defaultMessage" : string ,
"additionalInformation" : [
string
]
}
Fields
message Id
string ( int64 format)
Output only. Represents a globally unique message id for this insight, can be used for localization purposes, in case message_code is not yet known by the client use defaultMessage instead.
default Message
string
Output only. In case message_code is not yet known by the client defaultMessage will be the message to be used instead.
additional Information[]
string
Output only. Additional information about the insight, each entry can be a logical entry and must make sense if it is displayed with line breaks between each entry. Text can contain md style links.
AssetPerformanceData
Performance data for an asset.
JSON representation
{
"dailyResourceUsageAggregations" : [
{
object ( DailyResourceUsageAggregation )
}
]
}
Fields
daily Resource Usage Aggregations[]
object ( DailyResourceUsageAggregation )
Daily resource usage aggregations. Contains all of the data available for an asset, up to the last 420 days. Aggregations are sorted from oldest to most recent.
DailyResourceUsageAggregation
Usage data aggregation for a single day.
JSON representation
{
"date" : {
object ( Date )
} ,
"cpu" : {
object ( CPU )
} ,
"memory" : {
object ( Memory )
} ,
"network" : {
object ( Network )
} ,
"disk" : {
object ( Disk )
}
}
Fields
date
object ( Date )
Aggregation date. Day boundaries are at midnight UTC.
cpu
object ( CPU )
CPU usage.
memory
object ( Memory )
Memory usage.
network
object ( Network )
Network usage.
disk
object ( Disk )
Disk usage.
CPU
Statistical aggregation of CPU usage.
JSON representation
{
"utilizationPercentage" : {
object ( Stats )
}
}
Fields
utilization Percentage
object ( Stats )
CPU utilization percentage.
Stats
Statistical aggregation of samples for a single resource usage.
JSON representation
{
"average" : number ,
"median" : number ,
"ninteyFifthPercentile" : number ,
"peak" : number
}
Fields
average
number
Average usage value.
median
number
Median usage value.
nintey Fifth Percentile
number
95th percentile usage value.
peak
number
Peak usage value.
Memory
Statistical aggregation of memory usage.
JSON representation
{
"utilizationPercentage" : {
object ( Stats )
}
}
Fields
utilization Percentage
object ( Stats )
Memory utilization percentage.
Network
Statistical aggregation of network usage.
JSON representation
{
"ingressBps" : {
object ( Stats )
} ,
"egressBps" : {
object ( Stats )
}
}
Fields
ingress Bps
object ( Stats )
Network ingress in B/s.
egress Bps
object ( Stats )
Network egress in B/s.
Disk
Statistical aggregation of disk usage.
JSON representation
{
"iops" : {
object ( Stats )
} ,
"readIops" : {
object ( Stats )
} ,
"writeIops" : {
object ( Stats )
}
}
Fields
iops
object ( Stats )
Optional. Disk I/O operations per second.
read Iops
object ( Stats )
Optional. Disk read I/O operations per second.
write Iops
object ( Stats )
Optional. Disk write I/O operations per second.
Methods
aggregate Values
Aggregates the requested fields based on provided function.
batch Delete
Deletes list of Assets.
batch Update
Updates the parameters of a list of assets.
delete
Deletes an asset.
get
Gets the details of an asset.
list
Lists all the assets in a given project and location.
patch
Updates the parameters of an asset.
report Asset Frames
Reports a set of frames.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-17 UTC."],[],[]]
