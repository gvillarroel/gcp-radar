---
title: "CustomizationRule \_|\_ Datastream \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/datastream/docs/reference/rest/v1/CustomizationRule
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/datastream/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/datastream/docs/reference/rest/v1/CustomizationRule
  title: "CustomizationRule \_|\_ Datastream \_|\_ Google Cloud Documentation"
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
CustomizationRule
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
BigQueryPartitioning
JSON representation
IntegerRangePartition
JSON representation
TimeUnitPartition
JSON representation
PartitioningTimeGranularity
IngestionTimePartition
JSON representation
BigQueryClustering
JSON representation
A customization rule to apply to a set of objects.
JSON representation
{
// Union field rule can be only one of the following:
"bigqueryPartitioning" : {
object ( BigQueryPartitioning )
} ,
"bigqueryClustering" : {
object ( BigQueryClustering )
}
// End of list of possible types for union field rule .
}
Fields
Union field rule . The rule to apply. rule can be only one of the following:
bigqueryPartitioning
object ( BigQueryPartitioning )
BigQuery partitioning rule.
bigqueryClustering
object ( BigQueryClustering )
BigQuery clustering rule.
BigQueryPartitioning
BigQuery partitioning configuration.
JSON representation
{
"requirePartitionFilter" : boolean ,
// Union field partitioning can be only one of the following:
"integerRangePartition" : {
object ( IntegerRangePartition )
} ,
"timeUnitPartition" : {
object ( TimeUnitPartition )
} ,
"ingestionTimePartition" : {
object ( IngestionTimePartition )
}
// End of list of possible types for union field partitioning .
}
Fields
requirePartitionFilter
boolean
Optional. If true, queries over the table require a partition filter.
Union field partitioning . Partitioning to apply on the table. partitioning can be only one of the following:
integerRangePartition
object ( IntegerRangePartition )
Integer range partitioning.
timeUnitPartition
object ( TimeUnitPartition )
Time unit column partitioning.
ingestionTimePartition
object ( IngestionTimePartition )
Ingestion time partitioning.
IntegerRangePartition
Integer range partitioning. see https://cloud.google.com/bigquery/docs/partitioned-tables#integer_range
JSON representation
{
"column" : string ,
"start" : string ,
"end" : string ,
"interval" : string
}
Fields
column
string
Required. The partitioning column.
start
string ( int64 format)
Required. The starting value for range partitioning (inclusive).
end
string ( int64 format)
Required. The ending value for range partitioning (exclusive).
interval
string ( int64 format)
Required. The interval of each range within the partition.
TimeUnitPartition
Time unit column partitioning. see https://cloud.google.com/bigquery/docs/partitioned-tables#date_timestamp_partitioned_tables
JSON representation
{
"column" : string ,
"partitioningTimeGranularity" : enum ( PartitioningTimeGranularity )
}
Fields
column
string
Required. The partitioning column.
partitioningTimeGranularity
enum ( PartitioningTimeGranularity )
Optional. Partition granularity.
PartitioningTimeGranularity
Partitioning granularity for time partitions.
Enums
PARTITIONING_TIME_GRANULARITY_UNSPECIFIED
Unspecified partitioing interval.
PARTITIONING_TIME_GRANULARITY_HOUR
Hourly partitioning.
PARTITIONING_TIME_GRANULARITY_DAY
Daily partitioning.
PARTITIONING_TIME_GRANULARITY_MONTH
Monthly partitioning.
PARTITIONING_TIME_GRANULARITY_YEAR
Yearly partitioning.
IngestionTimePartition
Ingestion time partitioning. see https://cloud.google.com/bigquery/docs/partitioned-tables#ingestion_time
JSON representation
{
"partitioningTimeGranularity" : enum ( PartitioningTimeGranularity )
}
Fields
partitioningTimeGranularity
enum ( PartitioningTimeGranularity )
Optional. Partition granularity
BigQueryClustering
BigQuery clustering configuration.
JSON representation
{
"columns" : [
string
]
}
Fields
columns[]
string
Required. Column names to set as clustering columns.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-11-24 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-11-24 UTC."],[],[]]
