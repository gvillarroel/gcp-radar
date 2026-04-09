---
title: "REST Resource: projects.locations.instances.engineConfigs \_|\_ Anti Money\
  \ Laundering AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/rest/v1/projects.locations.instances.engineConfigs
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/rest/v1/projects.locations.instances.engineConfigs
  title: "REST Resource: projects.locations.instances.engineConfigs \_|\_ Anti Money\
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
REST Resource: projects.locations.instances.engineConfigs
Stay organized with collections
Save and categorize content based on your preferences.
Resource: EngineConfig
JSON representation
State
Tuning
JSON representation
PerformanceTarget
JSON representation
HyperparameterSourceType
HyperparameterSource
JSON representation
Methods
Resource: EngineConfig
The EngineConfig resource creates the configuration for training a model.
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
"engineVersion" : string ,
"tuning" : {
object ( Tuning )
} ,
"performanceTarget" : {
object ( PerformanceTarget )
} ,
"lineOfBusiness" : enum ( LineOfBusiness ) ,
"hyperparameterSourceType" : enum ( HyperparameterSourceType ) ,
"hyperparameterSource" : {
object ( HyperparameterSource )
} ,
"satisfiesPzi" : boolean ,
"satisfiesPzs" : boolean
}
Fields
name
string
Output only. The resource name of the EngineConfig. format: /projects/{project_num}/locations/{location}/instances/{instance}/engineConfigs/{engineConfig}
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
Output only. State of the EngineConfig (creating, active, deleting, etc.)
engineVersion
string
Required. The resource name of the EngineVersion used in this model tuning. format: /projects/{project_num}/locations/{location}/instances/{instance}/engineVersions/{engineVersion}
tuning
object ( Tuning )
Optional. Configuration for tuning in creation of the EngineConfig. This field is required if hyperparameterSource.type is not INHERITED , and output-only otherwise.
performanceTarget
object ( PerformanceTarget )
Optional. PerformanceTarget gives information on how the tuning and training will be evaluated. This field is required if hyperparameterSource.type is not INHERITED , and output-only otherwise.
lineOfBusiness
enum ( LineOfBusiness )
Output only. The line of business (Retail/Commercial) this engine config is used for. Determined by EngineVersion, cannot be set by user.
hyperparameterSourceType
enum ( HyperparameterSourceType )
Optional. The origin of hyperparameters for the created EngineConfig. The default is TUNING . In this case, the hyperparameters are selected as a result of a tuning run.
hyperparameterSource
object ( HyperparameterSource )
Optional. Configuration of hyperparameters source EngineConfig.
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
Tuning
The parameters needed for the tuning operation, these are used only in tuning and not passed on to training.
JSON representation
{
"primaryDataset" : string ,
"endTime" : string
}
Fields
primaryDataset
string
Required. The resource name of the Primary Dataset used in this model tuning. For information about how primary and auxiliary datasets are used, refer to the engine version's documentation. Format: /projects/{project_num}/locations/{location}/instances/{instance}/datasets/{dataset}
endTime
string ( Timestamp format)
Required. End_time specifies the latest time from which labels are used and from which data is used to generate features for tuning. End_time should be no later than the end of the dateRange of the dataset.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
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
HyperparameterSourceType
The type of the hyperparameter source.
Enums
HYPERPARAMETER_SOURCE_TYPE_UNSPECIFIED
Hyperparameter source type is unspecified, defaults to TUNING.
TUNING
The EngineConfig creation starts a tuning job which selects the best hyperparameters.
INHERITED
The hyperparameters are inherited from another EngineConfig.
HyperparameterSource
Parameters for bootstrapping an Engine Config with the results of another one.
JSON representation
{
"sourceEngineConfig" : string ,
"sourceEngineVersion" : string
}
Fields
sourceEngineConfig
string
Required. The resource name of the source EngineConfig whose outputs are used. Format: /projects/{project_num}/locations/{location}/instances/{instance}/engineConfigs/{engineConfig}
sourceEngineVersion
string
Output only. The resource name of the EngineVersion that was used in the tuning run. Format: /projects/{project_num}/locations/{location}/instances/{instance}/engineVersions/{engineVersion}
Methods
create
Creates an engine config.
delete
Deletes an engine config.
exportMetadata
Export governance information for an EngineConfig resource.
get
Gets an engine config.
list
Lists engine configs.
patch
Updates the parameters of a single EngineConfig.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-11-18 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-11-18 UTC."],[],[]]
