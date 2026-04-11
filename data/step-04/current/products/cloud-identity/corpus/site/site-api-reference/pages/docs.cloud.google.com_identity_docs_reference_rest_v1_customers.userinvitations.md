---
title: "REST Resource: customers.userinvitations \_|\_ Cloud Identity \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/identity/docs/reference/rest/v1/customers.userinvitations
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/identity/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/identity/docs/reference/rest/v1/customers.userinvitations
  title: "REST Resource: customers.userinvitations \_|\_ Cloud Identity \_|\_ Google\
    \ Cloud Documentation"
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
REST Resource: customers.userinvitations
Stay organized with collections
Save and categorize content based on your preferences.
Resource: UserInvitation
The UserInvitation resource represents an email that can be sent to an unmanaged user account inviting them to join the customer's Google Workspace or Cloud Identity account. An unmanaged account shares an email address domain with the Google Workspace or Cloud Identity account but is not managed by it yet. If the user accepts the UserInvitation , the user account will become managed.
JSON representation
{
"name" : string ,
"state" : enum ( State ) ,
"mailsSentCount" : string ,
"updateTime" : string
}
Fields
name
string
Shall be of the form customers/{customer}/userinvitations/{user_email_address} .
state
enum ( State )
State of the UserInvitation .
mailsSentCount
string ( int64 format)
Number of invitation emails sent to the user.
updateTime
string ( Timestamp format)
Time when the UserInvitation was last updated.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
State
State of the invitation.
Enums
STATE_UNSPECIFIED
The default value. This value is used if the state is omitted.
NOT_YET_SENT
The UserInvitation has been created and is ready for sending as an email.
INVITED
The user has been invited by email.
ACCEPTED
The user has accepted the invitation and is part of the organization.
DECLINED
The user declined the invitation.
Methods
cancel
Cancels a UserInvitation that was already sent.
get
Retrieves a UserInvitation resource.
isInvitableUser
Verifies whether a user account is eligible to receive a UserInvitation (is an unmanaged account).
list
Retrieves a list of UserInvitation resources.
send
Sends a UserInvitation to email.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-26 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-26 UTC."],[],[]]
