---
title: "REST Resource: devices.deviceUsers \_|\_ Cloud Identity \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/identity/docs/reference/rest/v1/devices.deviceUsers
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/identity/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/identity/docs/reference/rest/v1/devices.deviceUsers
  title: "REST Resource: devices.deviceUsers \_|\_ Cloud Identity \_|\_ Google Cloud\
    \ Documentation"
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
REST Resource: devices.deviceUsers
Stay organized with collections
Save and categorize content based on your preferences.
Resource: DeviceUser
Represents a user's use of a Device in the Cloud Identity Devices API.
A DeviceUser is a resource representing a user's use of a Device
JSON representation
{
"name" : string ,
"userEmail" : string ,
"managementState" : enum ( ManagementState ) ,
"firstSyncTime" : string ,
"lastSyncTime" : string ,
"userAgent" : string ,
"languageCode" : string ,
"compromisedState" : enum ( CompromisedState ) ,
"passwordState" : enum ( PasswordState ) ,
"createTime" : string
}
Fields
name
string
Output only. Resource name of the DeviceUser in format: devices/{device}/deviceUsers/{deviceUser} , where deviceUser uniquely identifies a user's use of a device.
userEmail
string
Email address of the user registered on the device.
managementState
enum ( ManagementState )
Output only. Management state of the user on the device.
firstSyncTime
string ( Timestamp format)
Output only. Most recent time when user registered with this service.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
lastSyncTime
string ( Timestamp format)
Output only. Last time when user synced with policies.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
userAgent
string
Output only. User agent on the device for this specific user
languageCode
string
Output only. Default locale used on device, in IETF BCP-47 format.
compromisedState
enum ( CompromisedState )
Compromised State of the DeviceUser object
passwordState
enum ( PasswordState )
Password state of the DeviceUser object
createTime
string ( Timestamp format)
When the user first signed in to the device
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
ManagementState
Possible management states of a user on a device.
Enums
MANAGEMENT_STATE_UNSPECIFIED
Default value. This value is unused.
WIPING
This user's data and profile is being removed from the device.
WIPED
This user's data and profile is removed from the device.
APPROVED
User is approved to access data on the device.
BLOCKED
User is blocked from accessing data on the device.
PENDING_APPROVAL
User is awaiting approval.
UNENROLLED
User is unenrolled from Advanced Windows Management, but the Windows account is still intact.
CompromisedState
Describes whether the DeviceUser object is compromised or not.
Enums
COMPROMISED_STATE_UNSPECIFIED
Compromised state of Device User account is unknown or unspecified.
COMPROMISED
Device User Account is compromised.
NOT_COMPROMISED
Device User Account is not compromised.
PasswordState
The password state of the object
Enums
PASSWORD_STATE_UNSPECIFIED
Password state not set.
PASSWORD_SET
Password set in object.
PASSWORD_NOT_SET
Password not set in object.
Methods
approve
Approves device to access user data.
block
Blocks device from accessing user data
cancelWipe
Cancels an unfinished user account wipe.
delete
Deletes the specified DeviceUser.
get
Retrieves the specified DeviceUser
list
Lists/Searches DeviceUsers.
lookup
Looks up resource names of the DeviceUsers associated with the caller's credentials, as well as the properties provided in the request.
wipe
Wipes the user's account on a device.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-26 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-26 UTC."],[],[]]
