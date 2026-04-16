---
title: "REST Resource: customer.devices.chromeos.commands \_|\_ Admin console \_|\_\
  \ Google for Developers"
url: https://developers.google.com/workspace/admin/directory/reference/rest/v1/customer.devices.chromeos.commands
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/workspace/admin/directory/reference/rest
source_metadata:
  url: https://developers.google.com/workspace/admin/directory/reference/rest/v1/customer.devices.chromeos.commands
  title: "REST Resource: customer.devices.chromeos.commands \_|\_ Admin console \_\
    |\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Admin console
Reference
Send feedback
REST Resource: customer.devices.chromeos.commands
Stay organized with collections
Save and categorize content based on your preferences.
Resource: DirectoryChromeosdevicesCommand
Information regarding a command that was issued to a device.
JSON representation
{
"commandId" : string ,
"type" : enum ( CommandType ) ,
"issueTime" : string ,
"state" : enum ( State ) ,
"commandExpireTime" : string ,
"commandResult" : {
object ( DirectoryChromeosdevicesCommandResult )
} ,
"payload" : string
}
Fields
commandId
string ( int64 format)
Unique ID of a device command.
type
enum ( CommandType )
The type of the command.
issueTime
string ( Timestamp format)
The timestamp when the command was issued by the admin.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
state
enum ( State )
Indicates the command state.
commandExpireTime
string ( Timestamp format)
The time at which the command will expire. If the device doesn't execute the command within this time the command will become expired.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
commandResult
object ( DirectoryChromeosdevicesCommandResult )
The result of the command execution.
payload
string
The payload that the command specified, if any.
CommandType
Establishes the type of command the device must execute.
Enums
COMMAND_TYPE_UNSPECIFIED
The command type was unspecified.
REBOOT
Reboot the device. Can be issued to Kiosk and managed guest session devices, and regular devices running ChromeOS version 113 or later.
TAKE_A_SCREENSHOT
Take a screenshot of the device. Only available if the device is in Kiosk Mode.
SET_VOLUME
Set the volume of the device. Can only be issued to Kiosk and managed guest session devices.
WIPE_USERS
Wipe all the users off of the device. Executing this command in the device will remove all user profile data, but it will keep device policy and enrollment.
REMOTE_POWERWASH
Wipes the device by performing a power wash. Executing this command in the device will remove all data including user policies, device policies and enrollment policies. Warning: This will revert the device back to a factory state with no enrollment unless the device is subject to forced or auto enrollment. Use with caution, as this is an irreversible action!
DEVICE_START_CRD_SESSION
Starts a Chrome Remote Desktop session.
CAPTURE_LOGS
Capture the system logs of a kiosk device. The logs can be downloaded from the downloadUrl link present in deviceFiles field of chromeosdevices
FETCH_CRD_AVAILABILITY_INFO
Fetches available type(s) of Chrome Remote Desktop sessions (private or shared) that can be used to remotely connect to the device.
FETCH_SUPPORT_PACKET
Fetch support packet from a device remotely. Support packet is a zip archive that contains various system logs and debug data from a ChromeOS device. The support packet can be downloaded from the downloadURL link present in the deviceFiles field of chromeosdevices
State
Represents the state of the issued command.
Enums
STATE_UNSPECIFIED
The command status was unspecified.
PENDING
An unexpired command not yet sent to the client.
EXPIRED
The command didn't get executed by the client within the expected time.
CANCELLED
The command is cancelled by admin while in PENDING.
SENT_TO_CLIENT
The command has been sent to the client.
ACKED_BY_CLIENT
The client has responded that it received the command.
EXECUTED_BY_CLIENT
The client has (un)successfully executed the command.
DirectoryChromeosdevicesCommandResult
The result of executing a command.
JSON representation
{
"result" : enum ( CommandResultType ) ,
"executeTime" : string ,
"errorMessage" : string ,
"commandResultPayload" : string
}
Fields
result
enum ( CommandResultType )
The result of the command.
executeTime
string ( Timestamp format)
The time at which the command was executed or failed to execute.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
errorMessage
string
The error message with a short explanation as to why the command failed. Only present if the command failed.
commandResultPayload
string
The payload for the command result. The following commands respond with a payload:
DEVICE_START_CRD_SESSION : Payload is a stringified JSON object in the form: { "url": url }. The provided URL links to the Chrome Remote Desktop session and requires authentication using only the email associated with the command's issuance.
FETCH_CRD_AVAILABILITY_INFO : Payload is a stringified JSON object in the form: { "deviceIdleTimeInSeconds": number, "userSessionType": string, "remoteSupportAvailability": string, "remoteAccessAvailability": string }. The "remoteSupportAvailability" field is set to "AVAILABLE" if shared CRD session to the device is available. The "remoteAccessAvailability" field is set to "AVAILABLE" if private CRD session to the device is available.
CommandResultType
The type of the command result.
Enums
COMMAND_RESULT_TYPE_UNSPECIFIED
The command result was unspecified.
IGNORED
The command was ignored as obsolete.
FAILURE
The command could not be executed successfully.
SUCCESS
The command was successfully executed.
Methods
get
Gets command data a specific command issued to the device.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-09-25 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-09-25 UTC."],[],[]]
