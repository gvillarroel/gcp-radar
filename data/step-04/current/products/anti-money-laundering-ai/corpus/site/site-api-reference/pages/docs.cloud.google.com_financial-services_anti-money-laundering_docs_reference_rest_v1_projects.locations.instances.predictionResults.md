---
title: "REST Resource: projects.locations.instances.predictionResults \_|\_ Anti Money\
  \ Laundering AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/rest/v1/projects.locations.instances.predictionResults
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/rest/v1/projects.locations.instances.predictionResults
  title: "REST Resource: projects.locations.instances.predictionResults \_|\_ Anti\
    \ Money Laundering AI \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

REST Resource: projects.locations.instances.predictionResults | Anti Money Laundering AI | Google Cloud Documentation
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
export Metadata
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
Resource: PredictionResult
State
Outputs
BigQueryDestination
WriteDisposition
Methods create
delete
exportMetadata
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
REST Resource: projects. locations. instances. prediction Results
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Resource: PredictionResult
State
Outputs
BigQueryDestination
WriteDisposition
Methods create
delete
exportMetadata
get
list
patch
Resource: PredictionResult
JSON representation
State
Outputs
JSON representation
BigQueryDestination
JSON representation
WriteDisposition
Methods
Resource: Prediction Result
PredictionResult is the result of using a model to create predictions.
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
"state" : enum ( State ) ,
"dataset" : string ,
"model" : string ,
"endTime" : string ,
"predictionPeriods" : integer ,
"outputs" : {
object ( Outputs )
} ,
"lineOfBusiness" : enum ( LineOfBusiness ) ,
"satisfiesPzi" : boolean ,
"satisfiesPzs" : boolean
}
Fields
name
string
Output only. The resource name of the PredictionResult. format: /projects/{project_num}/locations/{location}/instances/{instance}/predictionResults/{predictionResult}
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
Labels
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
state
enum ( State )
Output only. State of the PredictionResult (creating, active, deleting, etc.)
dataset
string
Required. The resource name of the Dataset to do predictions on Format: /projects/{project_num}/locations/{location}/instances/{instance}/dataset/{datasetId}
model
string
Required. The resource name of the Model to use to use to make predictions Format: /projects/{project_num}/locations/{location}/instances/{instance}/models/{model}
end Time
string ( Timestamp format)
Required. Specifies the latest time from which data is used to generate features for predictions. This time should be no later than the end of the dateRange of the dataset.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
prediction Periods
integer
The number of consecutive months to produce predictions for, ending with the last full month prior to endTime according to the dataset's timezone.
outputs
object ( Outputs )
Required. Where to write the output of the predictions.
line Of Business
enum ( LineOfBusiness )
Output only. The line of business (Retail/Commercial) this prediction is for. Determined by Model, cannot be set by user.
satisfies Pzi
boolean
Output only. [Output Only] Reserved for future use.
satisfies Pzs
boolean
Output only. [Output Only] Reserved for future use.
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
Outputs
Outputs is a list of places where the operation will write results.
JSON representation
{
"predictionDestination" : {
object ( BigQueryDestination )
} ,
"explainabilityDestination" : {
object ( BigQueryDestination )
}
}
Fields
predictionDestination
object ( BigQueryDestination )
Required. The location to output the predictions.
explainabilityDestination
object ( BigQueryDestination )
The location to output explainability information. If not specified no explainability data will be output.
BigQueryDestination
BigQueryDestination is a wrapper for BigQuery output information.
JSON representation
{
"tableUri" : string ,
"writeDisposition" : enum ( WriteDisposition )
}
Fields
tableUri
string
Optional. BigQuery URI to a table, must be of the form bq://projectId.bqDatasetId.tableId . Note that the BigQuery dataset must already exist. VPC-SC restrictions apply.
writeDisposition
enum ( WriteDisposition )
Required. Whether or not to overwrite the destination table. By default the table won't be overwritten and an error will be returned if the table exists and contains data.
WriteDisposition
WriteDisposition controls the behavior when the destination table already exists.
Enums
WRITE_DISPOSITION_UNSPECIFIED
Default behavior is the same as WRITE_EMPTY.
WRITE_EMPTY
If the table already exists and contains data, an error is returned.
WRITE_TRUNCATE
If the table already exists, the data will be overwritten.
Methods
create
Create a PredictionResult.
delete
Deletes a PredictionResult.
exportMetadata
Export governance information for a PredictionResult resource.
get
Gets a PredictionResult.
list
List PredictionResults.
patch
Updates the parameters of a single PredictionResult.
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
