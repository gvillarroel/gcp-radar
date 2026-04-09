---
title: "REST Resource: projects.locations.instances.backtestResults \_|\_ Anti Money\
  \ Laundering AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/rest/v1/projects.locations.instances.backtestResults
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/rest/v1/projects.locations.instances.backtestResults
  title: "REST Resource: projects.locations.instances.backtestResults \_|\_ Anti Money\
    \ Laundering AI \_|\_ Google Cloud Documentation"
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
REST Resource: projects.locations.instances.backtestResults
Stay organized with collections
Save and categorize content based on your preferences.
Resource: BacktestResult
JSON representation
State
PerformanceTarget
JSON representation
Methods
Resource: BacktestResult
BacktestResult is created to test the performance of a model on a dataset.
JSON representation
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
"backtestPeriods" : integer ,
"performanceTarget" : {
object ( PerformanceTarget )
} ,
"lineOfBusiness" : enum ( LineOfBusiness ) ,
"satisfiesPzi" : boolean ,
"satisfiesPzs" : boolean
}
Fields
name
string
Output only. The resource name of the BacktestResult. format: /projects/{project_num}/locations/{location}/instances/{instance}/backtestResults/{backtestResult}
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
Labels
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
state
enum ( State )
Output only. State of the BacktestResult (creating, active, deleting, etc.)
dataset
string
Required. The resource name of the Dataset to backtest on Format: /projects/{project_num}/locations/{location}/instances/{instance}/datasets/{dataset}
model
string
Required. The resource name of the Model to use or to backtest. Format: /projects/{project_num}/locations/{location}/instances/{instance}/models/{model}
endTime
string ( Timestamp format)
Required. End_time specifies the latest time from which labels are used and from which data is used to generate features for backtesting. End_time should be no later than the end of the dateRange of the primary dataset.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
backtestPeriods
integer
The number of consecutive months to conduct backtesting for, ending with the last full month prior to the endTime according to the dataset's timezone.
performanceTarget
object ( PerformanceTarget )
Required. PerformanceTarget gives information on how the test will be evaluated.
lineOfBusiness
enum ( LineOfBusiness )
Output only. The line of business (Retail/Commercial) this backtest is for. Determined by Model, cannot be set by user.
satisfiesPzi
boolean
Output only. [Output Only] Reserved for future use.
satisfiesPzs
boolean
Output only. [Output Only] Reserved for future use.
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
PerformanceTarget
PerformanceTarget gives hints on how to evaluate the performance of a model.
JSON representation
{
"partyInvestigationsPerPeriodHint" : string
}
Fields
partyInvestigationsPerPeriodHint
string ( int64 format)
Required. A number that gives the tuner a hint on the number of parties from this data that will be investigated per period (monthly). This is used to control how the model is evaluated. For example, when trying AML AI for the first time, we recommend setting this to the number of parties investigated in an average month, based on alerts from your existing automated alerting system.
Methods
create
Create a BacktestResult.
delete
Deletes a BacktestResult.
exportMetadata
Export governance information for a BacktestResult resource.
get
Gets a BacktestResult.
list
List BacktestResults.
patch
Updates the parameters of a single BacktestResult.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-11-18 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-11-18 UTC."],[],[]]
