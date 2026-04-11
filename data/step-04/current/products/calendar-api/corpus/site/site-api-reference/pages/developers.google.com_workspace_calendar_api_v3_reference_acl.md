---
title: "Acl \_|\_ Google Calendar \_|\_ Google for Developers"
url: https://developers.google.com/workspace/calendar/api/v3/reference/acl
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/workspace/calendar/api/v3/reference
source_metadata:
  url: https://developers.google.com/workspace/calendar/api/v3/reference/acl
  title: "Acl \_|\_ Google Calendar \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Google Calendar
Reference
Send feedback
Acl
Stay organized with collections
Save and categorize content based on your preferences.
For a list of methods for this resource, see the end of this page.
Resource representations
{
"kind" : "calendar#aclRule" ,
"etag" : etag ,
"id" : string ,
"scope" : {
"type" : string ,
"value" : string
} ,
"role" : string
}
Property name
Value
Description
Notes
etag
etag
ETag of the resource.
id
string
Identifier of the Access Control List (ACL) rule. See Sharing calendars .
kind
string
Type of the resource (" calendar#aclRule ").
role
string
The role assigned to the scope. Possible values are: " none " - Provides no access.
" freeBusyReader " - Provides read access to free/busy information.
" reader " - Provides read access to the calendar. Private events will appear to users with reader access, but event details will be hidden.
" writer " - Provides read and write access to the calendar. Private events will appear to users with writer access, and event details will be visible. Provides read access to the calendar's ACLs.
" owner " - Provides manager access to the calendar. This role has all of the permissions of the writer role with the additional ability to modify access levels of other users. Important: the owner role is different from the calendar's data owner. A calendar has a single data owner, but can have multiple users with owner role.
writable
scope
object
The extent to which calendar access is granted by this ACL rule.
scope. type
string
The type of the scope. Possible values are: " default " - The public scope. This is the default value.
" user " - Limits the scope to a single user.
" group " - Limits the scope to a group.
" domain " - Limits the scope to a domain.
Note: The permissions granted to the " default ", or public, scope apply to any user, authenticated or not.
scope. value
string
The email address of a user or group, or the name of a domain, depending on the scope type. Omitted for type " default ".
writable
Methods
delete
Deletes an access control rule.
get
Returns an access control rule.
insert
Creates an access control rule.
list
Returns the rules in the access control list for the calendar.
patch
Updates an access control rule. This method supports patch semantics. Note that each patch request consumes three quota units; prefer using a get followed by an update . The field values you specify replace the existing values. Fields that you don't specify in the request remain unchanged. Array fields, if specified, overwrite the existing arrays; this discards any previous array elements.
update
Updates an access control rule.
watch
Watch for changes to ACL resources.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-28 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-28 UTC."],[],[]]
