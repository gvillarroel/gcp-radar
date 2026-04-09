---
title: "REST Resource: projects.locations.instances \_|\_ Anti Money Laundering AI\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/rest/v1/projects.locations.instances
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/rest/v1/projects.locations.instances
  title: "REST Resource: projects.locations.instances \_|\_ Anti Money Laundering\
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
REST Resource: projects.locations.instances
Stay organized with collections
Save and categorize content based on your preferences.
Resource: Instance
JSON representation
State
Methods
Resource: Instance
Instance is a container for the rest of API resources. Only resources in the same instance can interact with each other. Child resources inherit the location (data residency) and encryption (CMEK). The location of the provided input and output in requests must match the location of the instance.
JSON representation
{
"name" : string ,
"createTime" : string ,
"updateTime" : string ,
"state" : enum ( State ) ,
"labels" : {
string : string ,
...
} ,
"kmsKey" : string ,
"validPartyRegistrationSharingConsumerInstances" : [
string
] ,
"partyRegistrationSharingHostInstance" : string ,
"satisfiesPzi" : boolean ,
"satisfiesPzs" : boolean
}
Fields
name
string
Output only. The full path to the Instance resource in this API. format: projects/{project}/locations/{location}/instances/{instance}
createTime
string ( Timestamp format)
Output only. Timestamp when the Instance was created. Assigned by the server.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
updateTime
string ( Timestamp format)
Output only. Timestamp when the Instance was last updated. Assigned by the server.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
state
enum ( State )
Output only. State of the instance. Assigned by the server.
labels
map (key: string, value: string)
Labels
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
kmsKey
string
Required. The KMS key name used for CMEK (encryption-at-rest). format: projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{cryptoKey} VPC-SC restrictions apply.
validPartyRegistrationSharingConsumerInstances[]
string
Optional. The resource names of AML instances which are valid Party Registration Sharing Consumers. format: projects/{project_num}/locations/{location}/instances/{instance} The listed instances will be able to generate Prediction Results for parties registered in this instance if they also specify this instance as the partyRegistrationSharingHostInstance . Parties can only be shared within the same Cloud region. Only one of validPartyRegistrationSharingConsumerInstances or partyRegistrationSharingHostInstance may be specified.
partyRegistrationSharingHostInstance
string
Optional. The resource name of this instance's Party Registration Sharing Host instance. format: projects/{project_num}/locations/{location}/instances/{instance} If the host instance has listed this instance in its validPartyRegistrationSharingConsumerInstances field, then registration sharing will be enabled. That means this instance can generate predictions for parties registered in the host instance. Any parties registered in this instance should be deregistered at the earliest opportunity to avoid unnecessary charges. Parties can only be shared within the same Cloud region. Only one of validPartyRegistrationSharingConsumerInstances or partyRegistrationSharingHostInstance may be specified.
satisfiesPzi
boolean
Output only. [Output Only] Reserved for future use.
satisfiesPzs
boolean
Output only. [Output Only] Reserved for future use.
State
The Resource State
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
Methods
create
Creates an instance.
delete
Deletes an instance.
exportRegisteredParties
Exports the list of registered parties.
get
Gets an instance.
importRegisteredParties
Imports the list of registered parties.
list
Lists instances.
patch
Updates the parameters of a single Instance.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-12-12 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-12-12 UTC."],[],[]]
