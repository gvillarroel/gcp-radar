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
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

REST Resource: projects.locations.instances.datasets | Anti Money Laundering AI | Google Cloud Documentation
Skip to main content
Technology areas
close
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Cross-product tools
close
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
More
/
Console
English
Deutsch
Español – América Latina
Français
Português – Brasil
中文 – 简体
日本語
한국어
Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
Anti Money Laundering AI
Start free
Overview
Guides
Reference
Resources
More
Technology areas
More
Overview
Guides
Reference
Resources
Cross-product tools
More
Console
Anti Money Laundering AI
REST Reference
Overview
v1
REST Resources
projects. locations
Overview
get
list
projects. locations. instances
Overview
create
delete
exportRegisteredParties
get
importRegisteredParties
list
patch
projects. locations. instances. backtest Results
Overview
create
delete
exportMetadata
get
list
patch
projects. locations. instances. datasets
Overview
create
delete
get
list
patch
projects. locations. instances. engine Configs
Overview
create
delete
exportMetadata
get
list
patch
projects. locations. instances. engine Versions
Overview
get
list
projects. locations. instances. models
Overview
copy
create
delete
exportMetadata
get
list
patch
projects. locations. instances. prediction Results
Overview
create
delete
exportMetadata
get
list
patch
projects. locations. operations
Overview
cancel
delete
get
list
Types
Line Of Business
AML input data model
AML output data model
Lifecycle of a risk case
Engine versions
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
On this page
Resource: Dataset
State
Interval
TimeZone
Methods create
delete
get
list
patch
Home
Documentation
Industry solutions
Anti Money Laundering AI
Reference
Was this helpful?
Send feedback
REST Resource: projects. locations. instances. datasets
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Resource: Dataset
State
Interval
TimeZone
Methods create
delete
get
list
patch
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
See more code actions.
Light code theme
Dark code theme
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
create Time
string ( Timestamp format)
Output only. The timestamp of creation of this resource.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
update Time
string ( Timestamp format)
Output only. The timestamp of the most recent update of this resource.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
labels
map (key: string, value: string)
Optional. Labels
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
table Specs
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
date Range
object ( Interval )
Required. Core time window of the dataset. All tables should have complete data covering this period.
time Zone
object ( TimeZone )
Optional. The timezone of the data, default will act as UTC.
State
The possible states of a resource.
Enums
STATE_ UNSPECIFIED
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
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-11-18 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-11-18 UTC."],[],[]]
Products and pricing
See all products
Google Cloud pricing
Google Cloud Marketplace
Contact sales
Support
Community forums
Support
Release Notes
System status
Resources
GitHub
Getting Started with Google Cloud
Code samples
Cloud Architecture Center
Training and Certification
Engage
Blog
Events
X (Twitter)
Google Cloud on YouTube
Google Cloud Tech on YouTube
About Google
Privacy
Site terms
Google Cloud terms
Manage cookies
Our third decade of climate action: join us
Sign up for the Google Cloud newsletter
Subscribe
English
Deutsch
Español – América Latina
Français
Português – Brasil
中文 – 简体
日本語
한국어
close
Welcome to Cloud Shell
Cloud Shell is a development environment that you can use in the browser:
Activate Cloud Shell to explore Google Cloud with a terminal and an editor
Start a free trial to get $300 in free credits
Activate Cloud Shell
Start a free trial
