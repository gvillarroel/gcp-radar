---
title: "InspectResult \_|\_ Sensitive Data Protection \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/InspectResult
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/InspectResult
  title: "InspectResult \_|\_ Sensitive Data Protection \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Cloud Data Loss Prevention (Cloud DLP) is now a part of Sensitive Data Protection. The API name remains the same: Cloud Data Loss Prevention API (DLP API). For information about the services that make up Sensitive Data Protection, see Sensitive Data Protection overview .
Home
Documentation
Security
Sensitive Data Protection
Reference
Send feedback
InspectResult
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Finding
JSON representation
Location
JSON representation
Range
JSON representation
ContentLocation
JSON representation
RecordLocation
JSON representation
RecordKey
JSON representation
DatastoreKey
JSON representation
Key
JSON representation
PathElement
JSON representation
BigQueryKey
JSON representation
TableLocation
JSON representation
ImageLocation
JSON representation
BoundingBox
JSON representation
DocumentLocation
JSON representation
MetadataLocation
JSON representation
MetadataType
StorageMetadataLabel
JSON representation
KeyValueMetadataLabel
JSON representation
QuoteInfo
JSON representation
DateTime
JSON representation
TimeZone
JSON representation
All the findings for a single scanned item.
JSON representation
{
"findings" : [
{
object ( Finding )
}
] ,
"findingsTruncated" : boolean
}
Fields
findings[]
object ( Finding )
List of findings for an item.
findingsTruncated
boolean
If true, then this item might have more findings than were returned, and the findings returned are an arbitrary subset of all findings. The findings list might be truncated because the input items were too large, or because the server reached the maximum amount of resources allowed for a single API call. For best results, divide the input into smaller batches.
Finding
Represents a piece of potentially sensitive content.
JSON representation
{
"name" : string ,
"quote" : string ,
"infoType" : {
object ( InfoType )
} ,
"likelihood" : enum ( Likelihood ) ,
"location" : {
object ( Location )
} ,
"createTime" : string ,
"quoteInfo" : {
object ( QuoteInfo )
} ,
"resourceName" : string ,
"triggerName" : string ,
"labels" : {
string : string ,
...
} ,
"jobCreateTime" : string ,
"jobName" : string ,
"findingId" : string
}
Fields
name
string
Resource name in format projects/{project}/locations/{location}/findings/{finding} Populated only when viewing persisted findings.
quote
string
The content that was found. Even if the content is not textual, it may be converted to a textual representation here. Provided if includeQuote is true and the finding is less than or equal to 4096 bytes long. If the finding exceeds 4096 bytes in length, the quote may be omitted.
infoType
object ( InfoType )
The type of content that might have been found. Provided if excluded_types is false.
likelihood
enum ( Likelihood )
Confidence of how likely it is that the infoType is correct.
location
object ( Location )
Where the content was found.
createTime
string ( Timestamp format)
Timestamp when finding was detected.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
quoteInfo
object ( QuoteInfo )
Contains data parsed from quotes. Only populated if includeQuote was set to true and a supported infoType was requested. Currently supported infoTypes: DATE, DATE_OF_BIRTH and TIME.
resourceName
string
The job that stored the finding.
triggerName
string
Job trigger name, if applicable, for this finding.
labels
map (key: string, value: string)
The labels associated with this Finding .
Label keys must be between 1 and 63 characters long and must conform to the following regular expression: [a-z]([-a-z0-9]*[a-z0-9])? .
Label values must be between 0 and 63 characters long and must conform to the regular expression ([a-z]([-a-z0-9]*[a-z0-9])?)? .
No more than 10 labels can be associated with a given finding.
Examples:
"environment" : "production"
"pipeline" : "etl"
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
jobCreateTime
string ( Timestamp format)
Time the job started that produced this finding.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
jobName
string
The job that stored the finding.
findingId
string
The unique finding id.
Location
Specifies the location of the finding.
JSON representation
{
"byteRange" : {
object ( Range )
} ,
"codepointRange" : {
object ( Range )
} ,
"contentLocations" : [
{
object ( ContentLocation )
}
] ,
"container" : {
object ( Container )
}
}
Fields
byteRange
object ( Range )
Zero-based byte offsets delimiting the finding. These are relative to the finding's containing element. Note that when the content is not textual, this references the UTF-8 encoded textual representation of the content. Omitted if content is an image.
codepointRange
object ( Range )
Unicode character offsets delimiting the finding. These are relative to the finding's containing element. Provided when the content is text.
contentLocations[]
object ( ContentLocation )
List of nested objects pointing to the precise location of the finding within the file or record.
container
object ( Container )
Information about the container where this finding occurred, if available.
Range
Generic half-open interval [start, end)
JSON representation
{
"start" : string ,
"end" : string
}
Fields
start
string ( int64 format)
Index of the first character of the range (inclusive).
end
string ( int64 format)
Index of the last character of the range (exclusive).
ContentLocation
Precise location of the finding within a document, record, image, or metadata container.
JSON representation
{
"containerName" : string ,
"containerTimestamp" : string ,
"containerVersion" : string ,
// Union field location can be only one of the following:
"recordLocation" : {
object ( RecordLocation )
} ,
"imageLocation" : {
object ( ImageLocation )
} ,
"documentLocation" : {
object ( DocumentLocation )
} ,
"metadataLocation" : {
object ( MetadataLocation )
}
// End of list of possible types for union field location .
}
Fields
containerName
string
Name of the container where the finding is located. The top level name is the source file name or table name. Names of some common storage containers are formatted as follows:
BigQuery tables: {projectId}:{datasetId}.{tableId}
Cloud Storage files: gs://{bucket}/{path}
Datastore namespace: {namespace}
Nested names could be absent if the embedded object has no string identifier (for example, an image contained within a document).
containerTimestamp
string ( Timestamp format)
Finding container modification timestamp, if applicable. For Cloud Storage, this field contains the last file modification timestamp. For a BigQuery table, this field contains the lastModifiedTime property. For Datastore, this field isn't populated.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
containerVersion
string
Finding container version, if available ("generation" for Cloud Storage).
Union field location . Type of the container within the file with location of the finding. location can be only one of the following:
recordLocation
object ( RecordLocation )
Location within a row or record of a database table.
imageLocation
object ( ImageLocation )
Location within an image's pixels.
documentLocation
object ( DocumentLocation )
Location data for document files.
metadataLocation
object ( MetadataLocation )
Location within the metadata for inspected content.
RecordLocation
Location of a finding within a row or record.
JSON representation
{
"recordKey" : {
object ( RecordKey )
} ,
"fieldId" : {
object ( FieldId )
} ,
"tableLocation" : {
object ( TableLocation )
}
}
Fields
recordKey
object ( RecordKey )
Key of the finding.
fieldId
object ( FieldId )
Field id of the field containing the finding.
tableLocation
object ( TableLocation )
Location within a ContentItem.Table .
RecordKey
Message for a unique key indicating a record that contains a finding.
JSON representation
{
"idValues" : [
string
] ,
// Union field type can be only one of the following:
"datastoreKey" : {
object ( DatastoreKey )
} ,
"bigQueryKey" : {
object ( BigQueryKey )
}
// End of list of possible types for union field type .
}
Fields
idValues[]
string
Values of identifying columns in the given row. Order of values matches the order of identifyingFields specified in the scanning request.
Union field type . Type of key type can be only one of the following:
datastoreKey
object ( DatastoreKey )
BigQuery key
bigQueryKey
object ( BigQueryKey )
Datastore key
DatastoreKey
Record key for a finding in Cloud Datastore.
JSON representation
{
"entityKey" : {
object ( Key )
}
}
Fields
entityKey
object ( Key )
Datastore entity key.
Key
A unique identifier for a Datastore entity. If a key's partition ID or any of its path kinds or names are reserved/read-only, the key is reserved/read-only. A reserved/read-only key is forbidden in certain documented contexts.
JSON representation
{
"partitionId" : {
object ( PartitionId )
} ,
"path" : [
{
object ( PathElement )
}
]
}
Fields
partitionId
object ( PartitionId )
Entities are partitioned into subsets, currently identified by a project ID and namespace ID. Queries are scoped to a single partition.
path[]
object ( PathElement )
The entity path. An entity path consists of one or more elements composed of a kind and a string or numerical identifier, which identify entities. The first element identifies a root entity , the second element identifies a child of the root entity, the third element identifies a child of the second entity, and so forth. The entities identified by all prefixes of the path are called the element's ancestors .
A path can never be empty, and a path can have at most 100 elements.
PathElement
A (kind, ID/name) pair used to construct a key path.
If either name or ID is set, the element is complete. If neither is set, the element is incomplete.
JSON representation
{
"kind" : string ,
// Union field id_type can be only one of the following:
"id" : string ,
"name" : string
// End of list of possible types for union field id_type .
}
Fields
kind
string
The kind of the entity. A kind matching regex __.*__ is reserved/read-only. A kind must not contain more than 1500 bytes when UTF-8 encoded. Cannot be "" .
Union field id_type . The type of ID. id_type can be only one of the following:
id
string ( int64 format)
The auto-allocated ID of the entity. Never equal to zero. Values less than zero are discouraged and may not be supported in the future.
name
string
The name of the entity. A name matching regex __.*__ is reserved/read-only. A name must not be more than 1500 bytes when UTF-8 encoded. Cannot be "" .
BigQueryKey
Row key for identifying a record in BigQuery table.
JSON representation
{
"tableReference" : {
object ( BigQueryTable )
} ,
"rowNumber" : string
}
Fields
tableReference
object ( BigQueryTable )
Complete BigQuery table reference.
rowNumber
string ( int64 format)
Row number inferred at the time the table was scanned. This value is nondeterministic, cannot be queried, and may be null for inspection jobs. To locate findings within a table, specify inspectJob.storage_config.big_query_options.identifying_fields in CreateDlpJobRequest .
TableLocation
Location of a finding within a table.
JSON representation
{
"rowIndex" : string
}
Fields
rowIndex
string ( int64 format)
The zero-based index of the row where the finding is located. Only populated for resources that have a natural ordering, not BigQuery. In BigQuery, to identify the row a finding came from, populate BigQueryOptions.identifying_fields with your primary key column names and when you store the findings the value of those columns will be stored inside of Finding.
ImageLocation
Location of the finding within an image.
JSON representation
{
"boundingBoxes" : [
{
object ( BoundingBox )
}
]
}
Fields
boundingBoxes[]
object ( BoundingBox )
Bounding boxes locating the pixels within the image containing the finding.
BoundingBox
Bounding box encompassing detected text within an image.
JSON representation
{
"top" : integer ,
"left" : integer ,
"width" : integer ,
"height" : integer
}
Fields
top
integer
Top coordinate of the bounding box. (0,0) is upper left.
left
integer
Left coordinate of the bounding box. (0,0) is upper left.
width
integer
Width of the bounding box in pixels.
height
integer
Height of the bounding box in pixels.
DocumentLocation
Location of a finding within a document.
JSON representation
{
"fileOffset" : string
}
Fields
fileOffset
string ( int64 format)
Offset of the line, from the beginning of the file, where the finding is located.
MetadataLocation
Metadata Location
JSON representation
{
"type" : enum ( MetadataType ) ,
// Union field label can be only one of the following:
"storageLabel" : {
object ( StorageMetadataLabel )
} ,
"keyValueMetadataLabel" : {
object ( KeyValueMetadataLabel )
}
// End of list of possible types for union field label .
}
Fields
type
enum ( MetadataType )
Type of metadata containing the finding.
Union field label . Label of the piece of metadata containing the finding, for example - latitude, author, caption. label can be only one of the following:
storageLabel
object ( StorageMetadataLabel )
Storage metadata.
keyValueMetadataLabel
object ( KeyValueMetadataLabel )
Metadata key that contains the finding.
MetadataType
Type of metadata containing the finding.
Enums
METADATATYPE_UNSPECIFIED
Unused
STORAGE_METADATA
General file metadata provided by Cloud Storage.
CONTENT_METADATA
Metadata extracted from the files.
CLIENT_PROVIDED_METADATA
Metadata provided by the client.
StorageMetadataLabel
Storage metadata label to indicate which metadata entry contains findings.
JSON representation
{
"key" : string
}
Fields
key
string
Label name.
KeyValueMetadataLabel
The metadata key that contains a finding.
JSON representation
{
"key" : string
}
Fields
key
string
The metadata key. The format depends on the source of the metadata.
Example:
MSIP_Label_122709e3-8f6b-4860-985f-7f722a94f61e_Enabled (a Microsoft Purview Information Protection key example)
QuoteInfo
Message for infoType-dependent details parsed from quote.
JSON representation
{
// Union field parsed_quote can be only one of the following:
"dateTime" : {
object ( DateTime )
}
// End of list of possible types for union field parsed_quote .
}
Fields
Union field parsed_quote . Object representation of the quote. parsed_quote can be only one of the following:
dateTime
object ( DateTime )
The date time indicated by the quote.
DateTime
Message for a date time object. e.g. 2018-01-01, 5th August.
JSON representation
{
"date" : {
object ( Date )
} ,
"dayOfWeek" : enum ( DayOfWeek ) ,
"time" : {
object ( TimeOfDay )
} ,
"timeZone" : {
object ( TimeZone )
}
}
Fields
date
object ( Date )
One or more of the following must be set. Must be a valid date or time value.
dayOfWeek
enum ( DayOfWeek )
Day of week
time
object ( TimeOfDay )
Time of day
timeZone
object ( TimeZone )
Time zone
TimeZone
Time zone of the date time object.
JSON representation
{
"offsetMinutes" : integer
}
Fields
offsetMinutes
integer
Set only if the offset can be determined. Positive for time ahead of UTC. E.g. For "UTC-9", this value is -540.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-24 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-24 UTC."],[],[]]
