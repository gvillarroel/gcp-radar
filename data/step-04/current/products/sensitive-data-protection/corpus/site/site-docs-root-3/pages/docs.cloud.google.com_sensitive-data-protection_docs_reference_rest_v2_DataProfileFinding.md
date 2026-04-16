---
title: "DataProfileFinding \_|\_ Sensitive Data Protection \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/DataProfileFinding
knowledge_key: corpus
source_id: site-docs-root-3
source_type: site
entrypoint: https://docs.cloud.google.com/sensitive-data-protection/docs/data-security
source_metadata:
  url: https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/DataProfileFinding
  title: "DataProfileFinding \_|\_ Sensitive Data Protection \_|\_ Google Cloud Documentation"
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
DataProfileFinding
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
DataProfileFindingLocation
JSON representation
DataProfileFindingRecordLocation
JSON representation
Details about a piece of potentially sensitive information that was detected when the data resource was profiled.
JSON representation
{
"quote" : string ,
"infotype" : {
object ( InfoType )
} ,
"quoteInfo" : {
object ( QuoteInfo )
} ,
"dataProfileResourceName" : string ,
"findingId" : string ,
"timestamp" : string ,
"location" : {
object ( DataProfileFindingLocation )
} ,
"resourceVisibility" : enum ( ResourceVisibility ) ,
"fullResourceName" : string ,
"dataSourceType" : {
object ( DataSourceType )
}
}
Fields
quote
string
The content that was found. Even if the content is not textual, it may be converted to a textual representation here. If the finding exceeds 4096 bytes in length, the quote may be omitted.
infotype
object ( InfoType )
The type of content that might have been found.
quoteInfo
object ( QuoteInfo )
Contains data parsed from quotes. Currently supported infoTypes: DATE, DATE_OF_BIRTH, and TIME.
dataProfileResourceName
string
Resource name of the data profile associated with the finding.
findingId
string
A unique identifier for the finding.
timestamp
string ( Timestamp format)
Timestamp when the finding was detected.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
location
object ( DataProfileFindingLocation )
Where the content was found.
resourceVisibility
enum ( ResourceVisibility )
How broadly a resource has been shared.
fullResourceName
string
The full resource name of the resource profiled for this finding.
dataSourceType
object ( DataSourceType )
The type of the resource that was profiled.
DataProfileFindingLocation
Location of a data profile finding within a resource.
JSON representation
{
"containerName" : string ,
// Union field location_extra_details can be only one of the following:
"dataProfileFindingRecordLocation" : {
object ( DataProfileFindingRecordLocation )
}
// End of list of possible types for union field location_extra_details .
}
Fields
containerName
string
Name of the container where the finding is located. The top-level name is the source file name or table name. Names of some common storage containers are formatted as follows:
BigQuery tables: {projectId}:{datasetId}.{tableId}
Cloud Storage files: gs://{bucket}/{path}
Union field location_extra_details . Additional location details that may be provided for some types of profiles. At this time, only findings for table data profiles include such details. location_extra_details can be only one of the following:
dataProfileFindingRecordLocation
object ( DataProfileFindingRecordLocation )
Location of a finding within a resource that produces a table data profile.
DataProfileFindingRecordLocation
Location of a finding within a resource that produces a table data profile.
JSON representation
{
"field" : {
object ( FieldId )
}
}
Fields
field
object ( FieldId )
Field ID of the column containing the finding.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-09-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-09-09 UTC."],[],[]]
