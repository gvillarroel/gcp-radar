---
title: "BigQueryTable \_|\_ Config Connector \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/bigquery/bigquerytable
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs/reference/overview
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/bigquery/bigquerytable
  title: "BigQueryTable \_|\_ Config Connector \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Config Connector
API and reference
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
BigQueryTable
Property
Value
Google Cloud Service Name
BigQuery
Google Cloud Service Documentation
/bigquery/docs/
Google Cloud REST Resource Name
bigquery/v2/tables
Google Cloud Rest Resource Documentation
/bigquery/docs/reference/rest/v2/tables
Config Connector Resource Short Names
gcpbigquerytable gcpbigquerytables bigquerytable
Config Connector Service Name
bigquery.googleapis.com
Config Connector Resource Fully Qualified Name
bigquerytables.bigquery.cnrm.cloud.google.com
Can Be Referenced by IAMPolicy/IAMPolicyMember
Yes
Supports IAM Conditions
Yes
Supports IAM Audit Configs
No
IAM External Reference Format
projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}
Config Connector Default Average Reconcile Interval In Seconds
600
Custom Resource Definition Properties
Annotations
Fields
cnrm.cloud.google.com/project-id
cnrm.cloud.google.com/unmanaged
Spec
Schema
clustering :
- string
datasetRef :
external : string
name : string
namespace : string
description : string
encryptionConfiguration :
kmsKeyRef :
external : string
name : string
namespace : string
kmsKeyVersion : string
expirationTime : integer
externalDataConfiguration :
autodetect : boolean
avroOptions :
useAvroLogicalTypes : boolean
compression : string
connectionId : string
csvOptions :
allowJaggedRows : boolean
allowQuotedNewlines : boolean
encoding : string
fieldDelimiter : string
quote : string
skipLeadingRows : integer
fileSetSpecType : string
googleSheetsOptions :
range : string
skipLeadingRows : integer
hivePartitioningOptions :
mode : string
requirePartitionFilter : boolean
sourceUriPrefix : string
ignoreUnknownValues : boolean
jsonOptions :
encoding : string
maxBadRecords : integer
metadataCacheMode : string
objectMetadata : string
parquetOptions :
enableListInference : boolean
enumAsString : boolean
referenceFileSchemaUri : string
schema : string
sourceFormat : string
sourceUris :
- string
friendlyName : string
labels :
string : string
materializedView :
allowNonIncrementalDefinition : boolean
enableRefresh : boolean
query : string
refreshIntervalMs : integer
maxStaleness : string
rangePartitioning :
field : string
range :
end : integer
interval : integer
start : integer
requirePartitionFilter : boolean
resourceID : string
schema : string
tableConstraints :
foreignKeys :
- columnReferences :
referencedColumn : string
referencingColumn : string
name : string
referencedTable :
datasetId : string
projectId : string
tableId : string
primaryKey :
columns :
- string
timePartitioning :
expirationMs : integer
field : string
requirePartitionFilter : boolean
type : string
view :
query : string
useLegacySql : boolean
Fields
clustering
Optional
list (string)
Clustering specification for the table. Must be specified with time-based partitioning, data in the table will be first partitioned and subsequently clustered.
clustering[]
Optional
string
datasetRef
Required
object
DatasetRef defines the resource reference to BigQueryDataset, which "External" field holds the Google Cloud identifier for the KRM object.
datasetRef.external
Optional
string
A reference to an externally-managed BigQueryDataset resource. Should be in the format "projects/{{projectID}}/datasets/{{datasetID}}".
datasetRef.name
Optional
string
The name of a BigQueryDataset resource.
datasetRef.namespace
Optional
string
The namespace of a BigQueryDataset resource.
description
Optional
string
A user-friendly description of this table.
encryptionConfiguration
Optional
object
Custom encryption configuration (e.g., Cloud KMS keys).
encryptionConfiguration.kmsKeyRef
Required*
object
Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table. The BigQuery Service Account associated with your project requires access to this encryption key.
encryptionConfiguration.kmsKeyRef.external
Optional
string
A reference to an externally managed KMSCryptoKey. Should be in the format `projects/[kms_project_id]/locations/[region]/keyRings/[key_ring_id]/cryptoKeys/[key]`.
encryptionConfiguration.kmsKeyRef.name
Optional
string
The `name` of a `KMSCryptoKey` resource.
encryptionConfiguration.kmsKeyRef.namespace
Optional
string
The `namespace` of a `KMSCryptoKey` resource.
encryptionConfiguration.kmsKeyVersion
Optional
string
DEPRECATED. // The table will be encrypted with the primary version of Cloud KMS encryption key. // The self link or full name of the kms key version used to encrypt this table.
expirationTime
Optional
integer
The time when this table expires, in milliseconds since the epoch. If not present, the table will persist indefinitely. Expired tables will be deleted and their storage reclaimed. The defaultTableExpirationMs property of the encapsulating dataset can be used to set a default expirationTime on newly created tables.
externalDataConfiguration
Optional
object
Describes the data format, location, and other properties of a table stored outside of BigQuery. By defining these properties, the data source can then be queried as if it were a standard BigQuery table.
externalDataConfiguration.autodetect
Required*
boolean
Try to detect schema and format options automatically. Any option specified explicitly will be honored.
externalDataConfiguration.avroOptions
Optional
object
Additional properties to set if sourceFormat is set to AVRO.
externalDataConfiguration.avroOptions.useAvroLogicalTypes
Required*
boolean
If sourceFormat is set to "AVRO", indicates whether to interpret logical types as the corresponding BigQuery data type (for example, TIMESTAMP), instead of using the raw type (for example, INTEGER).
externalDataConfiguration.compression
Optional
string
The compression type of the data source. Possible values include GZIP and NONE. The default value is NONE. This setting is ignored for Google Cloud Bigtable, Google Cloud Datastore backups, Avro, ORC and Parquet formats. An empty string is an invalid value.
externalDataConfiguration.connectionId
Optional
string
The connection specifying the credentials to be used to read external storage, such as Azure Blob, Cloud Storage, or S3. The connection_id can have the form `{project_id}.{location_id};{connection_id}` or `projects/{project_id}/locations/{location_id}/connections/{connection_id}`.
externalDataConfiguration.csvOptions
Optional
object
Additional properties to set if sourceFormat is set to CSV.
externalDataConfiguration.csvOptions.allowJaggedRows
Optional
boolean
Indicates if BigQuery should accept rows that are missing trailing optional columns. If true, BigQuery treats missing trailing columns as null values. If false, records with missing trailing columns are treated as bad records, and if there are too many bad records, an invalid error is returned in the job result. The default value is false.
externalDataConfiguration.csvOptions.allowQuotedNewlines
Optional
boolean
Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file. The default value is false.
externalDataConfiguration.csvOptions.encoding
Optional
string
The character encoding of the data. The supported values are UTF-8, ISO-8859-1, UTF-16BE, UTF-16LE, UTF-32BE, and UTF-32LE. The default value is UTF-8. BigQuery decodes the data after the raw, binary data has been split using the values of the quote and fieldDelimiter properties.
externalDataConfiguration.csvOptions.fieldDelimiter
Optional
string
The separator character for fields in a CSV file. The separator is interpreted as a single byte. For files encoded in ISO-8859-1, any single character can be used as a separator. For files encoded in UTF-8, characters represented in decimal range 1-127 (U+0001-U+007F) can be used without any modification. UTF-8 characters encoded with multiple bytes (i.e. U+0080 and above) will have only the first byte used for separating fields. The remaining bytes will be treated as a part of the field. BigQuery also supports the escape sequence "\t" (U+0009) to specify a tab separator. The default value is comma (",", U+002C).
externalDataConfiguration.csvOptions.quote
Required*
string
The value that is used to quote data sections in a CSV file. BigQuery converts the string to ISO-8859-1 encoding, and then uses the first byte of the encoded string to split the data in its raw, binary state. The default value is a double-quote ("). If your data does not contain quoted sections, set the property value to an empty string. If your data contains quoted newline characters, you must also set the allowQuotedNewlines property to true. To include the specific quote character within a quoted value, precede it with an additional matching quote character. For example, if you want to escape the default character ' " ', use ' "" '.
externalDataConfiguration.csvOptions.skipLeadingRows
Optional
integer
The number of rows at the top of a CSV file that BigQuery will
skip when reading the data. The default value is 0. This property is
useful if you have header rows in the file that should be skipped.
When autodetect is on, the behavior is the following:
* skipLeadingRows unspecified - Autodetect tries to detect headers in the
first row. If they are not detected, the row is read as data. Otherwise
data is read starting from the second row.
* skipLeadingRows is 0 - Instructs autodetect that there are no headers and
data should be read starting from the first row.
* skipLeadingRows = N > 0 - Autodetect skips N-1 rows and tries to detect
headers in row N. If headers are not detected, row N is just skipped.
Otherwise row N is used to extract column names for the detected schema.
externalDataConfiguration.fileSetSpecType
Optional
string
Specifies how source URIs are interpreted for constructing the file set to load. By default source URIs are expanded against the underlying storage. Other options include specifying manifest files. Only applicable to object storage systems.
externalDataConfiguration.googleSheetsOptions
Optional
object
Additional options if sourceFormat is set to GOOGLE_SHEETS.
externalDataConfiguration.googleSheetsOptions.range
Optional
string
Range of a sheet to query from. Only used when non-empty. Typical format: sheet_name!top_left_cell_id:bottom_right_cell_id For example: sheet1!A1:B20
externalDataConfiguration.googleSheetsOptions.skipLeadingRows
Optional
integer
The number of rows at the top of a sheet that BigQuery will skip when reading the data. The default value is 0. This property is useful if you have header rows that should be skipped. When autodetect is on, the behavior is the following: * skipLeadingRows unspecified - Autodetect tries to detect headers in the first row. If they are not detected, the row is read as data. Otherwise data is read starting from the second row. * skipLeadingRows is 0 - Instructs autodetect that there are no headers and data should be read starting from the first row. * skipLeadingRows = N > 0 - Autodetect skips N-1 rows and tries to detect headers in row N. If headers are not detected, row N is just skipped. Otherwise row N is used to extract column names for the detected schema.
externalDataConfiguration.hivePartitioningOptions
Optional
object
When set, configures hive partitioning support. Not all storage formats support hive partitioning -- requesting hive partitioning on an unsupported format will lead to an error, as will providing an invalid specification.
externalDataConfiguration.hivePartitioningOptions.mode
Optional
string
When set, what mode of hive partitioning to use when reading
data. The following modes are supported:
* AUTO: automatically infer partition key name(s) and type(s).
* STRINGS: automatically infer partition key name(s). All types are
strings.
* CUSTOM: partition key schema is encoded in the source URI prefix.
Not all storage formats support hive partitioning. Requesting hive
partitioning on an unsupported format will lead to an error.
Currently supported formats are: JSON, CSV, ORC, Avro and Parquet.
externalDataConfiguration.hivePartitioningOptions.requirePartitionFilter
Optional
boolean
If set to true, queries over this table require a partition
filter that can be used for partition elimination to be specified.
Note that this field should only be true when creating a permanent
external table or querying a temporary external table.
Hive-partitioned loads with require_partition_filter explicitly set to
true will fail.
externalDataConfiguration.hivePartitioningOptions.sourceUriPrefix
Optional
string
When hive partition detection is requested, a common prefix for
all source uris must be required. The prefix must end immediately before
the partition key encoding begins. For example, consider files following
this data layout:
gs://bucket/path_to_table/dt=2019-06-01/country=USA/id=7/file.avro
gs://bucket/path_to_table/dt=2019-05-31/country=CA/id=3/file.avro
When hive partitioning is requested with either AUTO or STRINGS detection,
the common prefix can be either of gs://bucket/path_to_table or
gs://bucket/path_to_table/.
CUSTOM detection requires encoding the partitioning schema immediately
after the common prefix. For CUSTOM, any of
* gs://bucket/path_to_table/{dt:DATE}/{country:STRING}/{id:INTEGER}
* gs://bucket/path_to_table/{dt:STRING}/{country:STRING}/{id:INTEGER}
* gs://bucket/path_to_table/{dt:DATE}/{country:STRING}/{id:STRING}
would all be valid source URI prefixes.
externalDataConfiguration.ignoreUnknownValues
Optional
boolean
Indicates if BigQuery should allow extra values that are not represented in the table schema. If true, the extra values are ignored. If false, records with extra columns are treated as bad records, and if there are too many bad records, an invalid error is returned in the job result. The default value is false. The sourceFormat property determines what BigQuery treats as an extra value: CSV: Trailing columns JSON: Named values that don't match any column names Google Cloud Bigtable: This setting is ignored. Google Cloud Datastore backups: This setting is ignored. Avro: This setting is ignored. ORC: This setting is ignored. Parquet: This setting is ignored.
externalDataConfiguration.jsonOptions
Optional
object
Additional properties to set if sourceFormat is set to JSON.
externalDataConfiguration.jsonOptions.encoding
Optional
string
The character encoding of the data. The supported values are UTF-8, UTF-16BE, UTF-16LE, UTF-32BE, and UTF-32LE. The default value is UTF-8.
externalDataConfiguration.maxBadRecords
Optional
integer
The maximum number of bad records that BigQuery can ignore when reading data. If the number of bad records exceeds this value, an invalid error is returned in the job result. The default value is 0, which requires that all records are valid. This setting is ignored for Google Cloud Bigtable, Google Cloud Datastore backups, Avro, ORC and Parquet formats.
externalDataConfiguration.metadataCacheMode
Optional
string
Metadata Cache Mode for the table. Set this to enable caching of metadata from external data source.
externalDataConfiguration.objectMetadata
Optional
string
ObjectMetadata is used to create Object Tables. Object Tables
contain a listing of objects (with their metadata) found at the
source_uris. If ObjectMetadata is set, source_format should be omitted.
Currently SIMPLE is the only supported Object Metadata type.
externalDataConfiguration.parquetOptions
Optional
object
Additional properties to set if sourceFormat is set to PARQUET.
externalDataConfiguration.parquetOptions.enableListInference
Optional
boolean
Indicates whether to use schema inference specifically for Parquet LIST logical type.
externalDataConfiguration.parquetOptions.enumAsString
Optional
boolean
Indicates whether to infer Parquet ENUM logical type as STRING instead of BYTES by default.
externalDataConfiguration.referenceFileSchemaUri
Optional
string
When creating an external table, the user can provide a reference file with the table schema. This is enabled for the following formats: AVRO, PARQUET, ORC.
externalDataConfiguration.schema
Optional
string
The schema for the data. Schema is required for CSV and JSON formats if autodetect is not on. Schema is disallowed for Google Cloud Bigtable, Cloud Datastore backups, Avro, ORC and Parquet formats.
externalDataConfiguration.sourceFormat
Optional
string
Please see sourceFormat under ExternalDataConfiguration in Bigquery's public API documentation (https://cloud.google.com/bigquery/docs/reference/rest/v2/tables#externaldataconfiguration) for supported formats. To use "GOOGLE_SHEETS" the scopes must include "googleapis.com/auth/drive.readonly".
externalDataConfiguration.sourceUris
Required*
list (string)
A list of the fully-qualified URIs that point to your data in Google Cloud.
externalDataConfiguration.sourceUris[]
Required*
string
friendlyName
Optional
string
A descriptive name for this table.
labels
Optional
map (key: string, value: string)
When using `alpha.cnrm.cloud.google.com/reconciler:direct` annotion, use labels field to set the labels for this resource on Google Cloud. Otherwise, use .metadata.labels. Please refer to https://github.com/GoogleCloudPlatform/k8s-config-connector/issues/4274 for context. The labels associated with this table. You can use these to organize and group your tables. Label keys and values can be no longer than 63 characters, can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter and each label in the list must have a different key.
materializedView
Optional
object
The materialized view definition.
materializedView.allowNonIncrementalDefinition
Optional
boolean
This option declares the intention to construct a materialized view that isn't refreshed incrementally.
materializedView.enableRefresh
Optional
boolean
Enable automatic refresh of the materialized view when the base table is updated. The default value is "true".
materializedView.query
Required*
string
Required. A query whose results are persisted.
materializedView.refreshIntervalMs
Optional
integer
The maximum frequency at which this materialized view will be refreshed. The default value is "1800000" (30 minutes).
maxStaleness
Optional
string
The maximum staleness of data that could be returned when the table (or stale MV) is queried. Staleness encoded as a string encoding of sql IntervalValue type.
rangePartitioning
Optional
object
If specified, configures range partitioning for this table.
rangePartitioning.field
Required*
string
Required. The name of the column to partition the table on. It must be a top-level, INT64 column whose mode is NULLABLE or REQUIRED.
rangePartitioning.range
Required*
object
Defines the ranges for range partitioning.
rangePartitioning.range.end
Required*
integer
Required. The end of range partitioning, exclusive.
rangePartitioning.range.interval
Required*
integer
Required. The width of each interval.
rangePartitioning.range.start
Required*
integer
Immutable. The start of range partitioning, inclusive.
requirePartitionFilter
Optional
boolean
If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified.
resourceID
Optional
string
The BigQueryTable name. If not given, the metadata.name will be used.
schema
Optional
string
Describes the schema of this table.
tableConstraints
Optional
object
Tables Primary Key and Foreign Key information
tableConstraints.foreignKeys
Optional
list (object)
Present only if the table has a foreign key. The foreign key is not enforced.
tableConstraints.foreignKeys[]
Optional
object
tableConstraints.foreignKeys[].columnReferences
Required*
object
Required. The columns that compose the foreign key.
tableConstraints.foreignKeys[].columnReferences.referencedColumn
Required*
string
Required. The column in the primary key that are referenced by the referencing_column.
tableConstraints.foreignKeys[].columnReferences.referencingColumn
Required*
string
Required. The column that composes the foreign key.
tableConstraints.foreignKeys[].name
Optional
string
Optional. Set only if the foreign key constraint is named.
tableConstraints.foreignKeys[].referencedTable
Required*
object
Required. The table that holds the primary key and is referenced by this foreign key.
tableConstraints.foreignKeys[].referencedTable.datasetId
Required*
string
The ID of the dataset containing this table.
tableConstraints.foreignKeys[].referencedTable.projectId
Required*
string
The ID of the project containing this table.
tableConstraints.foreignKeys[].referencedTable.tableId
Required*
string
The Id of the table. The Id can contain Unicode characters in category L (letter), M (mark), N (number), Pc (connector, including underscore), Pd (dash), and Zs (space). For more information, see [General Category](https://wikipedia.org/wiki/Unicode_character_property#General_Category). The maximum length is 1,024 characters. Certain operations allow suffixing of the table Id with a partition decorator, such as `sample_table$20190123`.
tableConstraints.primaryKey
Optional
object
Represents a primary key constraint on a table's columns. Present only if the table has a primary key. The primary key is not enforced.
tableConstraints.primaryKey.columns
Required*
list (string)
Required. The columns that are composed of the primary key constraint.
tableConstraints.primaryKey.columns[]
Required*
string
timePartitioning
Optional
object
If specified, configures time-based partitioning for this table.
timePartitioning.expirationMs
Optional
integer
Number of milliseconds for which to keep the storage for a partition. A wrapper is used here because 0 is an invalid value.
timePartitioning.field
Optional
string
Optional. Immutable. If not set, the table is partitioned by pseudo column '_PARTITIONTIME'; if set, the table is partitioned by this field. The field must be a top-level TIMESTAMP or DATE field. Its mode must be NULLABLE or REQUIRED. A wrapper is used here because an empty string is an invalid value.
timePartitioning.requirePartitionFilter
Optional
boolean
DEPRECATED. This field is deprecated; please use the top level field with the same name instead. If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified.
timePartitioning.type
Required*
string
Required. The supported types are DAY, HOUR, MONTH, and YEAR, which will generate one partition per day, hour, month, and year, respectively.
view
Optional
object
The view definition.
view.query
Required*
string
Required. A query that BigQuery executes when the view is referenced.
view.useLegacySql
Optional
boolean
Specifies whether to use BigQuery's legacy SQL for this view.
The default value is true. If set to false, the view will use
BigQuery's GoogleSQL:
https://cloud.google.com/bigquery/sql-reference/
Queries and views that reference this view must use the same flag value.
A wrapper is used here because the default value is True.
* Field is required when parent field is specified
Status
Schema
conditions :
- lastTransitionTime : string
message : string
reason : string
status : string
type : string
creationTime : integer
etag : string
externalRef : string
lastModifiedTime : integer
location : string
numBytes : integer
numLongTermBytes : integer
numRows : integer
observedGeneration : integer
observedState : {}
selfLink : string
type : string
Fields
conditions
list (object)
Conditions represent the latest available observations of the object's current state.
conditions[]
object
conditions[].lastTransitionTime
string
Last time the condition transitioned from one status to another.
conditions[].message
string
Human-readable message indicating details about last transition.
conditions[].reason
string
Unique, one-word, CamelCase reason for the condition's last transition.
conditions[].status
string
Status is the status of the condition. Can be True, False, Unknown.
conditions[].type
string
Type is the type of the condition.
creationTime
integer
Output only. The time when this table was created, in milliseconds since the epoch.
etag
string
Output only. A hash of this resource.
externalRef
string
A unique specifier for the BigQueryTable resource in Google Cloud.
lastModifiedTime
integer
Output only. The time when this table was last modified, in milliseconds since the epoch.
location
string
Output only. The geographic location where the table resides. This value is inherited from the dataset.
numBytes
integer
Output only. The size of this table in logical bytes, excluding any data in the streaming buffer.
numLongTermBytes
integer
Output only. The number of logical bytes in the table that are considered "long-term storage".
numRows
integer
Output only. The number of rows of data in this table, excluding any data in the streaming buffer.
observedGeneration
integer
ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
observedState
object
ObservedState is the state of the resource as most recently observed in Google Cloud.
selfLink
string
Output only. A URL that can be used to access this resource again.
type
string
Output only. Describes the table type. The following values are supported:
* `TABLE`: A normal BigQuery table.
* `VIEW`: A virtual table defined by a SQL query.
* `EXTERNAL`: A table that references data stored in an external storage
system, such as Google Cloud Storage.
* `MATERIALIZED_VIEW`: A precomputed view defined by a SQL query.
* `SNAPSHOT`: An immutable BigQuery table that preserves the contents of a
base table at a particular time. See additional information on
[table
snapshots](https://cloud.google.com/bigquery/docs/table-snapshots-intro).
The default value is `TABLE`.
Sample YAML(s)
Typical Use Case
# Copyright 2020 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
apiVersion : bigquery.cnrm.cloud.google.com/v1beta1
kind : BigQueryTable
metadata :
name : bigquerytablesample
labels :
data-source : "external"
schema-type : "auto-junk"
spec :
description : "BigQuery Sample Table"
datasetRef :
name : bigquerytabledep
requirePartitionFilter : true
friendlyName : bigquerytable-sample
externalDataConfiguration :
autodetect : true
compression : NONE
ignoreUnknownValues : false
maxBadRecords : 10
sourceFormat : CSV
sourceUris :
- "gs://gcp-public-data-landsat/LC08/01/044/034/LC08_L1GT_044034_20130330_20170310_01_T2/LC08_L1GT_044034_20130330_20170310_01_T2_ANG.txt"
- "gs://gcp-public-data-landsat/LC08/01/044/034/LC08_L1GT_044034_20130330_20180201_01_T2/LC08_L1GT_044034_20130330_20180201_01_T2_ANG.txt"
---
apiVersion : bigquery.cnrm.cloud.google.com/v1beta1
kind : BigQueryDataset
metadata :
name : bigquerytabledep
spec :
friendlyName : bigquerytable-dep
location : us-central1
Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
