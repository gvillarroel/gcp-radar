---
title: "REST Resource: devices.deviceUsers.clientStates \_|\_ Cloud Identity \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/identity/docs/reference/rest/v1/devices.deviceUsers.clientStates
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/identity/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/identity/docs/reference/rest/v1/devices.deviceUsers.clientStates
  title: "REST Resource: devices.deviceUsers.clientStates \_|\_ Cloud Identity \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Cloud Identity
Reference
Send feedback
REST Resource: devices.deviceUsers.clientStates
Stay organized with collections
Save and categorize content based on your preferences.
Resource: ClientState
Represents the state associated with an API client calling the Devices API.
Resource representing ClientState and supports updates from API users
JSON representation
{
"name" : string ,
"createTime" : string ,
"lastUpdateTime" : string ,
"etag" : string ,
"customId" : string ,
"assetTags" : [
string
] ,
"healthScore" : enum ( HealthScore ) ,
"scoreReason" : string ,
"managed" : enum ( ManagedState ) ,
"complianceState" : enum ( ComplianceState ) ,
"keyValuePairs" : {
string : {
object ( CustomAttributeValue )
} ,
...
} ,
"ownerType" : enum ( OwnerType )
}
Fields
name
string
Output only. Resource name of the ClientState in format: devices/{device}/deviceUsers/{deviceUser}/clientState/{partner} , where partner corresponds to the partner storing the data. For partners belonging to the "BeyondCorp Alliance", this is the partner ID specified to you by Google.
For all other callers, this is a string of the form: {customer}-suffix , where customer is your customer ID. The suffix is any string the caller specifies. This string will be displayed verbatim in the administration console. This suffix is used in setting up Custom Access Levels in Context-Aware Access.
Your organization's customer ID can be obtained from the URL: GET
https://www.googleapis.com/admin/directory/v1/customers/my_customer The id field in the response contains the customer ID starting with the letter 'C'. The customer ID to be used in this API is the string after the letter 'C' (not including 'C')
createTime
string ( Timestamp format)
Output only. The time the client state data was created.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
lastUpdateTime
string ( Timestamp format)
Output only. The time the client state data was last updated.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
etag
string
The token that needs to be passed back for concurrency control in updates. Token needs to be passed back in UpdateRequest
customId
string
This field may be used to store a unique identifier for the API resource within which these CustomAttributes are a field.
assetTags[]
string
The caller can specify asset tags for this resource
healthScore
enum ( HealthScore )
The Health score of the resource. The Health score is the callers specification of the condition of the device from a usability point of view. For example, a third-party device management provider may specify a health score based on its compliance with organizational policies.
scoreReason
string
A descriptive cause of the health score.
managed
enum ( ManagedState )
The management state of the resource as specified by the API client.
complianceState
enum ( ComplianceState )
The compliance state of the resource as specified by the API client.
keyValuePairs
map (key: string, value: object ( CustomAttributeValue ))
The map of key-value attributes stored by callers specific to a device. The total serialized length of this map may not exceed 10KB. No limit is placed on the number of attributes in a map.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
ownerType
enum ( OwnerType )
Output only. The owner of the ClientState
HealthScore
Enums
HEALTH_SCORE_UNSPECIFIED
Default value
VERY_POOR
The object is in very poor health as defined by the caller.
POOR
The object is in poor health as defined by the caller.
NEUTRAL
The object health is neither good nor poor, as defined by the caller.
GOOD
The object is in good health as defined by the caller.
VERY_GOOD
The object is in very good health as defined by the caller.
ManagedState
Management status of the device as provided by the Client
Enums
MANAGED_STATE_UNSPECIFIED
The management state of the resource is unknown or unspecified.
MANAGED
The resource is managed.
UNMANAGED
The resource is not managed.
ComplianceState
Whether the object is compliant with third party policies or not
Enums
COMPLIANCE_STATE_UNSPECIFIED
The compliance state of the resource is unknown or unspecified.
COMPLIANT
Device is compliant with third party policies
NON_COMPLIANT
Device is not compliant with third party policies
CustomAttributeValue
Additional custom attribute values may be one of these types
JSON representation
{
// Union field kind can be only one of the following:
"numberValue" : number ,
"stringValue" : string ,
"boolValue" : boolean
// End of list of possible types for union field kind .
}
Fields
Union field kind . The kind of value. kind can be only one of the following:
numberValue
number
Represents a double value.
stringValue
string
Represents a string value.
boolValue
boolean
Represents a boolean value.
OwnerType
Ownership type of data
Enums
OWNER_TYPE_UNSPECIFIED
Unknown owner type
OWNER_TYPE_CUSTOMER
Customer is the owner
OWNER_TYPE_PARTNER
Partner is the owner
Methods
get
Gets the client state for the device user
list
Lists the client states for the given search query.
patch
Updates the client state for the device user
Note : This method is available only to customers who have one of the following SKUs: Enterprise Standard, Enterprise Plus, Enterprise for Education, and Cloud Identity Premium
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-26 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-26 UTC."],[],[]]
