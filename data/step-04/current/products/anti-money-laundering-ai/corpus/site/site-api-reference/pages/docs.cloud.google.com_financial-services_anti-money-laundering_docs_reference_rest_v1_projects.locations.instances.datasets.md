---
title: "REST Resource: projects.locations.instances.datasets \_|\_ Anti Money Laundering\
  \ AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/rest/v1/projects.locations.instances.datasets
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/rest/v1/projects.locations.instances.datasets
  title: "REST Resource: projects.locations.instances.datasets \_|\_ Anti Money Laundering\
    \ AI \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Industry solutions
Anti Money Laundering AI
Reference
Send feedback
REST Resource: projects.locations.instances.datasets
Stay organized with collections
Save and categorize content based on your preferences.
Resource: Dataset
JSON representation
State
Interval
JSON representation
TimeZone
JSON representation
Methods
Resource: Dataset
The Dataset resource contains summary information about a dataset.
JSON representation
{
"name" : string ,
"createTime" : string ,
"updateTime" : string ,
"labels" : {
string : string ,
...
} ,
"tableSpecs" : {
string : string ,
...
} ,
"state" : enum ( State ) ,
"dateRange" : {
object ( Interval )
} ,
"timeZone" : {
object ( TimeZone )
}
}
Fields
name
string
Output only. Identifier. The resource name of the Dataset. format: /projects/{project_num}/locations/{location}/instances/{instance}/datasets/{dataset}
createTime
string ( Timestamp format)
Output only. The timestamp of creation of this resource.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
updateTime
string ( Timestamp format)
Output only. The timestamp of the most recent update of this resource.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
labels
map (key: string, value: string)
Optional. Labels
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
tableSpecs
map (key: string, value: string)
Required. The set of BigQuery tables in the dataset. The key should be the table type and the value should be the BigQuery tables in the format bq://{project}.{dataset}.{table} . Current table types are:
party
account_party_link
transaction
risk_case_event
party_supplementary_data
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
state
enum ( State )
Output only. State of the dataset (creating, active, deleting, etc.)
dateRange
object ( Interval )
Required. Core time window of the dataset. All tables should have complete data covering this period.
timeZone
object ( TimeZone )
Optional. The timezone of the data, default will act as UTC.
State
The possible states of a resource.
Enums
STATE_UNSPECIFIED
State is unspecified, should not occur.
CREATING
The resource has not finished being created.
ACTIVE
The resource is active/ready to be used.
UPDATING
The resource is in the process of being updated.
DELETING
The resource is in the process of being deleted.
Interval
Represents a time interval, encoded as a Timestamp start (inclusive) and a Timestamp end (exclusive).
The start must be less than or equal to the end. When the start equals the end, the interval is empty (matches no time). When both start and end are unspecified, the interval matches any time.
JSON representation
{
"startTime" : string ,
"endTime" : string
}
Fields
startTime
string ( Timestamp format)
Optional. Inclusive start of the interval.
If specified, a Timestamp matching this interval will have to be the same or after the start.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
endTime
string ( Timestamp format)
Optional. Exclusive end of the interval.
If specified, a Timestamp matching this interval will have to be before the end.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
TimeZone
Represents a time zone from the IANA Time Zone Database .
JSON representation
{
"id" : string ,
"version" : string
}
Fields
id
string
IANA Time Zone Database time zone. For example "America/New_York".
version
string
Optional. IANA Time Zone Database version number. For example "2019a".
Methods
create
Creates a dataset.
delete
Deletes a dataset.
get
Gets a dataset.
list
Lists datasets.
patch
Updates the parameters of a single Dataset.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-11-18 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-11-18 UTC."],[],[]]
