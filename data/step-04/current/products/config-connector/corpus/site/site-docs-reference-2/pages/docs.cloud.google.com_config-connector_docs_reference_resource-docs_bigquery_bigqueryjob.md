---
title: "BigQueryJob \_|\_ Config Connector \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/bigquery/bigqueryjob
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs/reference/overview
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/bigquery/bigqueryjob
  title: "BigQueryJob \_|\_ Config Connector \_|\_ Google Cloud Documentation"
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
BigQueryJob
Property
Value
Google Cloud Service Name
BigQuery
Google Cloud Service Documentation
/bigquery/docs/
Google Cloud REST Resource Name
bigquery/v2/jobs
Google Cloud Rest Resource Documentation
/bigquery/docs/reference/rest/v2/jobs
Config Connector Resource Short Names
gcpbigqueryjob gcpbigqueryjobs bigqueryjob
Config Connector Service Name
bigquery.googleapis.com
Config Connector Resource Fully Qualified Name
bigqueryjobs.bigquery.cnrm.cloud.google.com
Can Be Referenced by IAMPolicy/IAMPolicyMember
No
Config Connector Default Average Reconcile Interval In Seconds
600
Custom Resource Definition Properties
Annotations
Fields
cnrm.cloud.google.com/project-id
Spec
Schema
copy :
createDisposition : string
destinationEncryptionConfiguration :
kmsKeyRef :
external : string
name : string
namespace : string
kmsKeyVersion : string
destinationTable :
tableRef :
external : string
name : string
namespace : string
sourceTables :
- tableRef :
external : string
name : string
namespace : string
writeDisposition : string
extract :
compression : string
destinationFormat : string
destinationUris :
- string
fieldDelimiter : string
printHeader : boolean
sourceTable :
tableRef :
external : string
name : string
namespace : string
useAvroLogicalTypes : boolean
jobTimeoutMs : string
load :
allowJaggedRows : boolean
allowQuotedNewlines : boolean
autodetect : boolean
createDisposition : string
destinationEncryptionConfiguration :
kmsKeyRef :
external : string
name : string
namespace : string
kmsKeyVersion : string
destinationTable :
tableRef :
external : string
name : string
namespace : string
encoding : string
fieldDelimiter : string
ignoreUnknownValues : boolean
jsonExtension : string
maxBadRecords : integer
nullMarker : string
parquetOptions :
enableListInference : boolean
enumAsString : boolean
projectionFields :
- string
quote : string
schemaUpdateOptions :
- string
skipLeadingRows : integer
sourceFormat : string
sourceUris :
- string
timePartitioning :
expirationMs : string
field : string
type : string
writeDisposition : string
location : string
query :
allowLargeResults : boolean
createDisposition : string
defaultDataset :
datasetRef :
external : string
name : string
namespace : string
destinationEncryptionConfiguration :
kmsKeyRef :
external : string
name : string
namespace : string
kmsKeyVersion : string
destinationTable :
tableRef :
external : string
name : string
namespace : string
flattenResults : boolean
maximumBillingTier : integer
maximumBytesBilled : string
parameterMode : string
priority : string
query : string
schemaUpdateOptions :
- string
scriptOptions :
keyResultStatement : string
statementByteBudget : string
statementTimeoutMs : string
useLegacySql : boolean
useQueryCache : boolean
userDefinedFunctionResources :
- inlineCode : string
resourceUri : string
writeDisposition : string
resourceID : string
Fields
copy
Optional
object
Immutable. Copies a table.
copy.createDisposition
Optional
string
Immutable. Specifies whether the job is allowed to create new tables. The following values are supported:
CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table.
CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result.
Creation, truncation and append actions occur as one atomic update upon job completion Default value: "CREATE_NEVER" Possible values: ["CREATE_IF_NEEDED", "CREATE_NEVER"].
copy.destinationEncryptionConfiguration
Optional
object
Immutable. Custom encryption configuration (e.g., Cloud KMS keys).
copy.destinationEncryptionConfiguration.kmsKeyRef
Required*
object
Describes the Cloud KMS encryption key that will be used to protect
destination BigQuery table. The BigQuery Service Account associated
with your project requires access to this encryption key.
copy.destinationEncryptionConfiguration.kmsKeyRef.external
Optional
string
Allowed value: The `selfLink` field of a `KMSCryptoKey` resource.
copy.destinationEncryptionConfiguration.kmsKeyRef.name
Optional
string
Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
copy.destinationEncryptionConfiguration.kmsKeyRef.namespace
Optional
string
Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
copy.destinationEncryptionConfiguration.kmsKeyVersion
Optional
string
Describes the Cloud KMS encryption key version used to protect destination BigQuery table.
copy.destinationTable
Optional
object
Immutable. The destination table.
copy.destinationTable.tableRef
Required*
object
A reference to the table.
copy.destinationTable.tableRef.external
Optional
string
Allowed value: The `selfLink` field of a `BigQueryTable` resource.
copy.destinationTable.tableRef.name
Optional
string
Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
copy.destinationTable.tableRef.namespace
Optional
string
Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
copy.sourceTables
Required*
list (object)
Immutable. Source tables to copy.
copy.sourceTables[]
Required*
object
copy.sourceTables[].tableRef
Required*
object
A reference to the table.
copy.sourceTables[].tableRef.external
Optional
string
Allowed value: The `selfLink` field of a `BigQueryTable` resource.
copy.sourceTables[].tableRef.name
Optional
string
Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
copy.sourceTables[].tableRef.namespace
Optional
string
Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
copy.writeDisposition
Optional
string
Immutable. Specifies the action that occurs if the destination table already exists. The following values are supported:
WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data and uses the schema from the query result.
WRITE_APPEND: If the table already exists, BigQuery appends the data to the table.
WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result.
Each action is atomic and only occurs if BigQuery is able to complete the job successfully.
Creation, truncation and append actions occur as one atomic update upon job completion. Default value: "WRITE_EMPTY" Possible values: ["WRITE_TRUNCATE", "WRITE_APPEND", "WRITE_EMPTY"].
extract
Optional
object
Immutable. Configures an extract job.
extract.compression
Optional
string
Immutable. The compression type to use for exported files. Possible values include GZIP, DEFLATE, SNAPPY, and NONE.
The default value is NONE. DEFLATE and SNAPPY are only supported for Avro.
extract.destinationFormat
Optional
string
Immutable. The exported file format. Possible values include CSV, NEWLINE_DELIMITED_JSON and AVRO for tables and SAVED_MODEL for models.
The default value for tables is CSV. Tables with nested or repeated fields cannot be exported as CSV.
The default value for models is SAVED_MODEL.
extract.destinationUris
Required*
list (string)
Immutable. A list of fully-qualified Google Cloud Storage URIs where the extracted table should be written.
extract.destinationUris[]
Required*
string
extract.fieldDelimiter
Optional
string
Immutable. When extracting data in CSV format, this defines the delimiter to use between fields in the exported data.
Default is ','.
extract.printHeader
Optional
boolean
Immutable. Whether to print out a header row in the results. Default is true.
extract.sourceTable
Optional
object
Immutable. A reference to the table being exported.
extract.sourceTable.tableRef
Required*
object
A reference to the table.
extract.sourceTable.tableRef.external
Optional
string
Allowed value: The `selfLink` field of a `BigQueryTable` resource.
extract.sourceTable.tableRef.name
Optional
string
Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
extract.sourceTable.tableRef.namespace
Optional
string
Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
extract.useAvroLogicalTypes
Optional
boolean
Immutable. Whether to use logical types when extracting to AVRO format.
jobTimeoutMs
Optional
string
Immutable. Job timeout in milliseconds. If this time limit is exceeded, BigQuery may attempt to terminate the job.
load
Optional
object
Immutable. Configures a load job.
load.allowJaggedRows
Optional
boolean
Immutable. Accept rows that are missing trailing optional columns. The missing values are treated as nulls.
If false, records with missing trailing columns are treated as bad records, and if there are too many bad records,
an invalid error is returned in the job result. The default value is false. Only applicable to CSV, ignored for other formats.
load.allowQuotedNewlines
Optional
boolean
Immutable. Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file.
The default value is false.
load.autodetect
Optional
boolean
Immutable. Indicates if we should automatically infer the options and schema for CSV and JSON sources.
load.createDisposition
Optional
string
Immutable. Specifies whether the job is allowed to create new tables. The following values are supported:
CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table.
CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result.
Creation, truncation and append actions occur as one atomic update upon job completion Default value: "CREATE_NEVER" Possible values: ["CREATE_IF_NEEDED", "CREATE_NEVER"].
load.destinationEncryptionConfiguration
Optional
object
Immutable. Custom encryption configuration (e.g., Cloud KMS keys).
load.destinationEncryptionConfiguration.kmsKeyRef
Required*
object
Describes the Cloud KMS encryption key that will be used to protect
destination BigQuery table. The BigQuery Service Account associated
with your project requires access to this encryption key.
load.destinationEncryptionConfiguration.kmsKeyRef.external
Optional
string
Allowed value: The `selfLink` field of a `KMSCryptoKey` resource.
load.destinationEncryptionConfiguration.kmsKeyRef.name
Optional
string
Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
load.destinationEncryptionConfiguration.kmsKeyRef.namespace
Optional
string
Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
load.destinationEncryptionConfiguration.kmsKeyVersion
Optional
string
Describes the Cloud KMS encryption key version used to protect destination BigQuery table.
load.destinationTable
Required*
object
Immutable. The destination table to load the data into.
load.destinationTable.tableRef
Required*
object
A reference to the table.
load.destinationTable.tableRef.external
Optional
string
Allowed value: The `selfLink` field of a `BigQueryTable` resource.
load.destinationTable.tableRef.name
Optional
string
Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
load.destinationTable.tableRef.namespace
Optional
string
Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
load.encoding
Optional
string
Immutable. The character encoding of the data. The supported values are UTF-8 or ISO-8859-1.
The default value is UTF-8. BigQuery decodes the data after the raw, binary data
has been split using the values of the quote and fieldDelimiter properties.
load.fieldDelimiter
Optional
string
Immutable. The separator for fields in a CSV file. The separator can be any ISO-8859-1 single-byte character.
To use a character in the range 128-255, you must encode the character as UTF8. BigQuery converts
the string to ISO-8859-1 encoding, and then uses the first byte of the encoded string to split the
data in its raw, binary state. BigQuery also supports the escape sequence "\t" to specify a tab separator.
The default value is a comma (',').
load.ignoreUnknownValues
Optional
boolean
Immutable. Indicates if BigQuery should allow extra values that are not represented in the table schema.
If true, the extra values are ignored. If false, records with extra columns are treated as bad records,
and if there are too many bad records, an invalid error is returned in the job result.
The default value is false. The sourceFormat property determines what BigQuery treats as an extra value:
CSV: Trailing columns
JSON: Named values that don't match any column names.
load.jsonExtension
Optional
string
Immutable. If sourceFormat is set to newline-delimited JSON, indicates whether it should be processed as a JSON variant such as GeoJSON.
For a sourceFormat other than JSON, omit this field. If the sourceFormat is newline-delimited JSON: - for newline-delimited
GeoJSON: set to GEOJSON.
load.maxBadRecords
Optional
integer
Immutable. The maximum number of bad records that BigQuery can ignore when running the job. If the number of bad records exceeds this value,
an invalid error is returned in the job result. The default value is 0, which requires that all records are valid.
load.nullMarker
Optional
string
Immutable. Specifies a string that represents a null value in a CSV file. For example, if you specify "\N", BigQuery interprets "\N" as a null value
when loading a CSV file. The default value is the empty string. If you set this property to a custom value, BigQuery throws an error if an
empty string is present for all data types except for STRING and BYTE. For STRING and BYTE columns, BigQuery interprets the empty string as
an empty value.
load.parquetOptions
Optional
object
Immutable. Parquet Options for load and make external tables.
load.parquetOptions.enableListInference
Optional
boolean
Immutable. If sourceFormat is set to PARQUET, indicates whether to use schema inference specifically for Parquet LIST logical type.
load.parquetOptions.enumAsString
Optional
boolean
Immutable. If sourceFormat is set to PARQUET, indicates whether to infer Parquet ENUM logical type as STRING instead of BYTES by default.
load.projectionFields
Optional
list (string)
Immutable. If sourceFormat is set to "DATASTORE_BACKUP", indicates which entity properties to load into BigQuery from a Cloud Datastore backup.
Property names are case sensitive and must be top-level properties. If no properties are specified, BigQuery loads all properties.
If any named property isn't found in the Cloud Datastore backup, an invalid error is returned in the job result.
load.projectionFields[]
Optional
string
load.quote
Optional
string
Immutable. The value that is used to quote data sections in a CSV file. BigQuery converts the string to ISO-8859-1 encoding,
and then uses the first byte of the encoded string to split the data in its raw, binary state.
The default value is a double-quote ('"'). If your data does not contain quoted sections, set the property value to an empty string.
If your data contains quoted newline characters, you must also set the allowQuotedNewlines property to true.
load.schemaUpdateOptions
Optional
list (string)
Immutable. Allows the schema of the destination table to be updated as a side effect of the load job if a schema is autodetected or
supplied in the job configuration. Schema update options are supported in two cases: when writeDisposition is WRITE_APPEND;
when writeDisposition is WRITE_TRUNCATE and the destination table is a partition of a table, specified by partition decorators.
For normal tables, WRITE_TRUNCATE will always overwrite the schema. One or more of the following values are specified:
ALLOW_FIELD_ADDITION: allow adding a nullable field to the schema.
ALLOW_FIELD_RELAXATION: allow relaxing a required field in the original schema to nullable.
load.schemaUpdateOptions[]
Optional
string
load.skipLeadingRows
Optional
integer
Immutable. The number of rows at the top of a CSV file that BigQuery will skip when loading the data.
The default value is 0. This property is useful if you have header rows in the file that should be skipped.
When autodetect is on, the behavior is the following:
skipLeadingRows unspecified - Autodetect tries to detect headers in the first row. If they are not detected,
the row is read as data. Otherwise data is read starting from the second row.
skipLeadingRows is 0 - Instructs autodetect that there are no headers and data should be read starting from the first row.
skipLeadingRows = N > 0 - Autodetect skips N-1 rows and tries to detect headers in row N. If headers are not detected,
row N is just skipped. Otherwise row N is used to extract column names for the detected schema.
load.sourceFormat
Optional
string
Immutable. The format of the data files. For CSV files, specify "CSV". For datastore backups, specify "DATASTORE_BACKUP".
For newline-delimited JSON, specify "NEWLINE_DELIMITED_JSON". For Avro, specify "AVRO". For parquet, specify "PARQUET".
For orc, specify "ORC". [Beta] For Bigtable, specify "BIGTABLE".
The default value is CSV.
load.sourceUris
Required*
list (string)
Immutable. The fully-qualified URIs that point to your data in Google Cloud.
For Google Cloud Storage URIs: Each URI can contain one '\*' wildcard character
and it must come after the 'bucket' name. Size limits related to load jobs apply
to external data sources. For Google Cloud Bigtable URIs: Exactly one URI can be
specified and it has be a fully specified and valid HTTPS URL for a Google Cloud Bigtable table.
For Google Cloud Datastore backups: Exactly one URI can be specified. Also, the '\*' wildcard character is not allowed.
load.sourceUris[]
Required*
string
load.timePartitioning
Optional
object
Immutable. Time-based partitioning specification for the destination table.
load.timePartitioning.expirationMs
Optional
string
Immutable. Number of milliseconds for which to keep the storage for a partition. A wrapper is used here because 0 is an invalid value.
load.timePartitioning.field
Optional
string
Immutable. If not set, the table is partitioned by pseudo column '_PARTITIONTIME'; if set, the table is partitioned by this field.
The field must be a top-level TIMESTAMP or DATE field. Its mode must be NULLABLE or REQUIRED.
A wrapper is used here because an empty string is an invalid value.
load.timePartitioning.type
Required*
string
Immutable. The only type supported is DAY, which will generate one partition per day. Providing an empty string used to cause an error,
but in OnePlatform the field will be treated as unset.
load.writeDisposition
Optional
string
Immutable. Specifies the action that occurs if the destination table already exists. The following values are supported:
WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data and uses the schema from the query result.
WRITE_APPEND: If the table already exists, BigQuery appends the data to the table.
WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result.
Each action is atomic and only occurs if BigQuery is able to complete the job successfully.
Creation, truncation and append actions occur as one atomic update upon job completion. Default value: "WRITE_EMPTY" Possible values: ["WRITE_TRUNCATE", "WRITE_APPEND", "WRITE_EMPTY"].
location
Optional
string
Immutable. The geographic location of the job. The default value is US.
query
Optional
object
Immutable. Configures a query job.
query.allowLargeResults
Optional
boolean
Immutable. If true and query uses legacy SQL dialect, allows the query to produce arbitrarily large result tables at a slight cost in performance.
Requires destinationTable to be set. For standard SQL queries, this flag is ignored and large results are always allowed.
However, you must still set destinationTable when result size exceeds the allowed maximum response size.
query.createDisposition
Optional
string
Immutable. Specifies whether the job is allowed to create new tables. The following values are supported:
CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table.
CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result.
Creation, truncation and append actions occur as one atomic update upon job completion Default value: "CREATE_NEVER" Possible values: ["CREATE_IF_NEEDED", "CREATE_NEVER"].
query.defaultDataset
Optional
object
Immutable. Specifies the default dataset to use for unqualified table names in the query. Note that this does not alter behavior of unqualified dataset names.
query.defaultDataset.datasetRef
Required*
object
A reference to the dataset.
query.defaultDataset.datasetRef.external
Optional
string
Allowed value: The `selfLink` field of a `BigQueryDataset` resource.
query.defaultDataset.datasetRef.name
Optional
string
Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
query.defaultDataset.datasetRef.namespace
Optional
string
Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
query.destinationEncryptionConfiguration
Optional
object
Immutable. Custom encryption configuration (e.g., Cloud KMS keys).
query.destinationEncryptionConfiguration.kmsKeyRef
Required*
object
Describes the Cloud KMS encryption key that will be used to protect
destination BigQuery table. The BigQuery Service Account associated
with your project requires access to this encryption key.
query.destinationEncryptionConfiguration.kmsKeyRef.external
Optional
string
Allowed value: The `selfLink` field of a `KMSCryptoKey` resource.
query.destinationEncryptionConfiguration.kmsKeyRef.name
Optional
string
Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
query.destinationEncryptionConfiguration.kmsKeyRef.namespace
Optional
string
Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
query.destinationEncryptionConfiguration.kmsKeyVersion
Optional
string
Describes the Cloud KMS encryption key version used to protect destination BigQuery table.
query.destinationTable
Optional
object
Immutable. Describes the table where the query results should be stored.
This property must be set for large results that exceed the maximum response size.
For queries that produce anonymous (cached) results, this field will be populated by BigQuery.
query.destinationTable.tableRef
Required*
object
A reference to the table.
query.destinationTable.tableRef.external
Optional
string
Allowed value: The `selfLink` field of a `BigQueryTable` resource.
query.destinationTable.tableRef.name
Optional
string
Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
query.destinationTable.tableRef.namespace
Optional
string
Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
query.flattenResults
Optional
boolean
Immutable. If true and query uses legacy SQL dialect, flattens all nested and repeated fields in the query results.
allowLargeResults must be true if this is set to false. For standard SQL queries, this flag is ignored and results are never flattened.
query.maximumBillingTier
Optional
integer
Immutable. Limits the billing tier for this job. Queries that have resource usage beyond this tier will fail (without incurring a charge).
If unspecified, this will be set to your project default.
query.maximumBytesBilled
Optional
string
Immutable. Limits the bytes billed for this job. Queries that will have bytes billed beyond this limit will fail (without incurring a charge).
If unspecified, this will be set to your project default.
query.parameterMode
Optional
string
Immutable. Standard SQL only. Set to POSITIONAL to use positional (?) query parameters or to NAMED to use named (@myparam) query parameters in this query.
query.priority
Optional
string
Immutable. Specifies a priority for the query. Default value: "INTERACTIVE" Possible values: ["INTERACTIVE", "BATCH"].
query.query
Required*
string
Immutable. SQL query text to execute. The useLegacySql field can be used to indicate whether the query uses legacy SQL or standard SQL.
*NOTE*: queries containing [DML language](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-manipulation-language)
('DELETE', 'UPDATE', 'MERGE', 'INSERT') must specify 'create_disposition = ""' and 'write_disposition = ""'.
query.schemaUpdateOptions
Optional
list (string)
Immutable. Allows the schema of the destination table to be updated as a side effect of the query job.
Schema update options are supported in two cases: when writeDisposition is WRITE_APPEND;
when writeDisposition is WRITE_TRUNCATE and the destination table is a partition of a table,
specified by partition decorators. For normal tables, WRITE_TRUNCATE will always overwrite the schema.
One or more of the following values are specified:
ALLOW_FIELD_ADDITION: allow adding a nullable field to the schema.
ALLOW_FIELD_RELAXATION: allow relaxing a required field in the original schema to nullable.
query.schemaUpdateOptions[]
Optional
string
query.scriptOptions
Optional
object
Immutable. Options controlling the execution of scripts.
query.scriptOptions.keyResultStatement
Optional
string
Immutable. Determines which statement in the script represents the "key result",
used to populate the schema and query results of the script job. Possible values: ["LAST", "FIRST_SELECT"].
query.scriptOptions.statementByteBudget
Optional
string
Immutable. Limit on the number of bytes billed per statement. Exceeding this budget results in an error.
query.scriptOptions.statementTimeoutMs
Optional
string
Immutable. Timeout period for each statement in a script.
query.useLegacySql
Optional
boolean
Immutable. Specifies whether to use BigQuery's legacy SQL dialect for this query. The default value is true.
If set to false, the query will use BigQuery's standard SQL.
query.useQueryCache
Optional
boolean
Immutable. Whether to look for the result in the query cache. The query cache is a best-effort cache that will be flushed whenever
tables in the query are modified. Moreover, the query cache is only available when a query does not have a destination table specified.
The default value is true.
query.userDefinedFunctionResources
Optional
list (object)
Immutable. Describes user-defined function resources used in the query.
query.userDefinedFunctionResources[]
Optional
object
query.userDefinedFunctionResources[].inlineCode
Optional
string
Immutable. An inline resource that contains code for a user-defined function (UDF).
Providing a inline code resource is equivalent to providing a URI for a file containing the same code.
query.userDefinedFunctionResources[].resourceUri
Optional
string
Immutable. A code resource to load from a Google Cloud Storage URI (gs://bucket/path).
query.writeDisposition
Optional
string
Immutable. Specifies the action that occurs if the destination table already exists. The following values are supported:
WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data and uses the schema from the query result.
WRITE_APPEND: If the table already exists, BigQuery appends the data to the table.
WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result.
Each action is atomic and only occurs if BigQuery is able to complete the job successfully.
Creation, truncation and append actions occur as one atomic update upon job completion. Default value: "WRITE_EMPTY" Possible values: ["WRITE_TRUNCATE", "WRITE_APPEND", "WRITE_EMPTY"].
resourceID
Optional
string
Immutable. Optional. The jobId of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
* Field is required when parent field is specified
Status
Schema
conditions :
- lastTransitionTime : string
message : string
reason : string
status : string
type : string
jobType : string
observedGeneration : integer
status :
- errorResult :
- location : string
message : string
reason : string
errors :
- location : string
message : string
reason : string
state : string
userEmail : string
Fields
conditions
list (object)
Conditions represent the latest available observation of the resource's current state.
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
jobType
string
The type of the job.
observedGeneration
integer
ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
status
list (object)
The status of this job. Examine this value when polling an asynchronous job to see if the job is complete.
status[]
object
status[].errorResult
list (object)
Final error result of the job. If present, indicates that the job has completed and was unsuccessful.
status[].errorResult[]
object
status[].errorResult[].location
string
Specifies where the error occurred, if present.
status[].errorResult[].message
string
A human-readable description of the error.
status[].errorResult[].reason
string
A short error code that summarizes the error.
status[].errors
list (object)
The first errors encountered during the running of the job. The final message
includes the number of errors that caused the process to stop. Errors here do
not necessarily mean that the job has not completed or was unsuccessful.
status[].errors[]
object
status[].errors[].location
string
Specifies where the error occurred, if present.
status[].errors[].message
string
A human-readable description of the error.
status[].errors[].reason
string
A short error code that summarizes the error.
status[].state
string
Running state of the job. Valid states include 'PENDING', 'RUNNING', and 'DONE'.
userEmail
string
Email address of the user who ran the job.
Sample YAML(s)
Copy BigQuery Job
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
kind : BigQueryJob
metadata :
labels :
label-one : "value-one"
# BigQueryJobs cannot be deleted from GCP, so you must use a new unique name
# if you want to create a new job, otherwise Config Connector will try to
# acquire the job with the given name.
name : bigqueryjob-sample-copy
spec :
location : "US"
jobTimeoutMs : "600000"
copy :
sourceTables :
- tableRef :
name : bigqueryjobdep1copy
- tableRef :
name : bigqueryjobdep2copy
destinationTable :
tableRef :
name : bigqueryjobdep3copy
destinationEncryptionConfiguration :
kmsKeyRef :
name : bigqueryjob-dep-copy
writeDisposition : "WRITE_APPEND"
---
apiVersion : bigquery.cnrm.cloud.google.com/v1beta1
kind : BigQueryDataset
metadata :
name : bigqueryjobdep1copy
spec :
friendlyName : bigqueryjob-dep1-copy
description : "Source BigQueryDataset 1"
---
apiVersion : bigquery.cnrm.cloud.google.com/v1beta1
kind : BigQueryDataset
metadata :
name : bigqueryjobdep2copy
spec :
friendlyName : bigqueryjob-dep2-copy
description : "Source BigQueryDataset 2"
---
apiVersion : bigquery.cnrm.cloud.google.com/v1beta1
kind : BigQueryDataset
metadata :
name : bigqueryjobdep3copy
spec :
friendlyName : bigqueryjob-dep3-copy
description : "Destination BigQueryDataset"
---
apiVersion : bigquery.cnrm.cloud.google.com/v1beta1
kind : BigQueryTable
metadata :
name : bigqueryjobdep1copy
spec :
friendlyName : bigqueryjob-dep1-copy
description : "Source BigQueryTable 1"
datasetRef :
name : bigqueryjobdep1copy
schema : |
[
{
"name": "name",
"type": "STRING",
"mode": "NULLABLE"
},
{
"name": "post_abbr",
"type": "STRING",
"mode": "NULLABLE"
},
{
"name": "date",
"type": "DATE",
"mode": "NULLABLE"
}
]
---
apiVersion : bigquery.cnrm.cloud.google.com/v1beta1
kind : BigQueryTable
metadata :
name : bigqueryjobdep2copy
spec :
friendlyName : bigqueryjob-dep2-copy
description : "Source BigQueryTable 2"
datasetRef :
name : bigqueryjobdep2copy
schema : |
[
{
"name": "name",
"type": "STRING",
"mode": "NULLABLE"
},
{
"name": "post_abbr",
"type": "STRING",
"mode": "NULLABLE"
},
{
"name": "date",
"type": "DATE",
"mode": "NULLABLE"
}
]
---
apiVersion : bigquery.cnrm.cloud.google.com/v1beta1
kind : BigQueryTable
metadata :
name : bigqueryjobdep3copy
spec :
friendlyName : bigqueryjob-dep3-copy
description : "Destination BigQueryTable"
datasetRef :
name : bigqueryjobdep3copy
schema : |
[
{
"name": "name",
"type": "STRING",
"mode": "NULLABLE"
},
{
"name": "post_abbr",
"type": "STRING",
"mode": "NULLABLE"
},
{
"name": "date",
"type": "DATE",
"mode": "NULLABLE"
}
]
encryptionConfiguration :
kmsKeyRef :
name : bigqueryjob-dep-copy
---
# Replace ${PROJECT_ID?} below with your project ID and ${PROJECT_NUMBER?} with
# your project number.
apiVersion : iam.cnrm.cloud.google.com/v1beta1
kind : IAMPolicyMember
metadata :
name : bigqueryjob-dep-copy
spec :
member : serviceAccount:bq-${PROJECT_NUMBER?}@bigquery-encryption.iam.gserviceaccount.com
role : roles/cloudkms.cryptoKeyEncrypterDecrypter
resourceRef :
kind : Project
external : projects/${PROJECT_ID?}
---
apiVersion : kms.cnrm.cloud.google.com/v1beta1
kind : KMSCryptoKey
metadata :
name : bigqueryjob-dep-copy
spec :
keyRingRef :
name : bigqueryjob-dep-copy
---
apiVersion : kms.cnrm.cloud.google.com/v1beta1
kind : KMSKeyRing
metadata :
name : bigqueryjob-dep-copy
spec :
location : global
Extract BigQuery Job
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
kind : BigQueryJob
metadata :
labels :
label-one : "value-one"
# BigQueryJobs cannot be deleted from GCP, so you must use a new unique name
# if you want to create a new job, otherwise Config Connector will try to
# acquire the job with the given name.
name : bigqueryjob-sample-extract
spec :
location : "US"
jobTimeoutMs : "600000"
extract :
sourceTable :
tableRef :
name : bigqueryjobdepextract
destinationUris :
- "gs://${PROJECT_ID?}-bigqueryjob-dep-extract/extract"
destinationFormat : "CSV"
compression : "GZIP"
printHeader : true
fieldDelimiter : ","
---
apiVersion : bigquery.cnrm.cloud.google.com/v1beta1
kind : BigQueryDataset
metadata :
name : bigqueryjobdepextract
spec :
friendlyName : bigqueryjob-dep-extract
---
apiVersion : bigquery.cnrm.cloud.google.com/v1beta1
kind : BigQueryTable
metadata :
name : bigqueryjobdepextract
spec :
friendlyName : bigqueryjob-dep-extract
datasetRef :
name : bigqueryjobdepextract
schema : |
[
{
"name": "name",
"type": "STRING",
"mode": "NULLABLE"
},
{
"name": "post_abbr",
"type": "STRING",
"mode": "NULLABLE"
},
{
"name": "date",
"type": "DATE",
"mode": "NULLABLE"
}
]
---
apiVersion : storage.cnrm.cloud.google.com/v1beta1
kind : StorageBucket
metadata :
annotations :
cnrm.cloud.google.com/force-destroy : "true"
# StorageBucket names must be globally unique. Replace ${PROJECT_ID?} with your project ID.
name : ${PROJECT_ID?}-bigqueryjob-dep-extract
Load BigQuery Job
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
kind : BigQueryJob
metadata :
labels :
label-one : "value-one"
# BigQueryJobs cannot be deleted from GCP, so you must use a new unique name
# if you want to create a new job, otherwise Config Connector will try to
# acquire the job with the given name.
name : bigqueryjob-sample-load
spec :
location : "US"
jobTimeoutMs : "600000"
load :
sourceUris :
- "gs://cloud-samples-data/bigquery/us-states/us-states-by-date.csv"
destinationTable :
tableRef :
name : bigqueryjobdepload
sourceFormat : "CSV"
encoding : "UTF-8"
fieldDelimiter : ","
quote : '"'
allowQuotedNewlines : false
maxBadRecords : 0
allowJaggedRows : false
ignoreUnknownValues : false
skipLeadingRows : 1
autodetect : true
writeDisposition : "WRITE_APPEND"
schemaUpdateOptions :
- "ALLOW_FIELD_ADDITION"
- "ALLOW_FIELD_RELAXATION"
---
apiVersion : bigquery.cnrm.cloud.google.com/v1beta1
kind : BigQueryDataset
metadata :
name : bigqueryjobdepload
spec :
friendlyName : bigqueryjob-dep-load
---
apiVersion : bigquery.cnrm.cloud.google.com/v1beta1
kind : BigQueryTable
metadata :
name : bigqueryjobdepload
spec :
friendlyName : bigqueryjob-dep-load
datasetRef :
name : bigqueryjobdepload
Query BigQuery Job
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
kind : BigQueryJob
metadata :
labels :
label-one : "value-one"
# BigQueryJobs cannot be deleted from GCP, so you must use a new unique name
# if you want to create a new job, otherwise Config Connector will try to
# acquire the job with the given name.
name : bigqueryjob-sample-query
spec :
location : "US"
jobTimeoutMs : "600000"
query :
query : "SELECT state FROM [lookerdata:cdc.project_tycho_reports]"
useLegacySql : true
defaultDataset :
datasetRef :
name : bigqueryjobdep1query
destinationTable :
tableRef :
name : bigqueryjobdepquery
allowLargeResults : true
flattenResults : true
useQueryCache : true
priority : "INTERACTIVE"
writeDisposition : "WRITE_APPEND"
schemaUpdateOptions :
- "ALLOW_FIELD_ADDITION"
- "ALLOW_FIELD_RELAXATION"
scriptOptions :
statementTimeoutMs : "300000"
keyResultStatement : "LAST"
---
apiVersion : bigquery.cnrm.cloud.google.com/v1beta1
kind : BigQueryDataset
metadata :
name : bigqueryjobdep1query
spec :
friendlyName : bigqueryjob-dep1-query
description : "Default Source BigQueryDataset"
---
apiVersion : bigquery.cnrm.cloud.google.com/v1beta1
kind : BigQueryDataset
metadata :
name : bigqueryjobdep2query
spec :
friendlyName : bigqueryjob-dep2-query
description : "Destination BigQueryDataset"
---
apiVersion : bigquery.cnrm.cloud.google.com/v1beta1
kind : BigQueryTable
metadata :
name : bigqueryjobdepquery
spec :
friendlyName : bigqueryjob-dep-query
description : "Destination BigQueryTable"
datasetRef :
name : bigqueryjobdep2query
Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
