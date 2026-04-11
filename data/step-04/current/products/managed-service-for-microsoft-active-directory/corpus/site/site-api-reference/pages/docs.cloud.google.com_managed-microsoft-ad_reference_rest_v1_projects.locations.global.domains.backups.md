---
title: "REST Resource: projects.locations.global.domains.backups \_|\_ Managed Microsoft\
  \ AD \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains.backups
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/managed-microsoft-ad/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains.backups
  title: "REST Resource: projects.locations.global.domains.backups \_|\_ Managed Microsoft\
    \ AD \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Managed Microsoft AD
Reference
Send feedback
REST Resource: projects.locations.global.domains.backups
Stay organized with collections
Save and categorize content based on your preferences.
Resource: Backup
JSON representation
Type
State
Methods
Resource: Backup
Represents a Managed Microsoft Identities backup.
JSON representation
{
"name" : string ,
"labels" : {
string : string ,
...
} ,
"createTime" : string ,
"updateTime" : string ,
"type" : enum ( Type ) ,
"state" : enum ( State ) ,
"statusMessage" : string
}
Fields
name
string
Output only. The unique name of the Backup in the form of projects/{projectId}/locations/global/domains/{domainName}/backups/{name}
labels
map (key: string, value: string)
Optional. Resource labels to represent user provided metadata.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
createTime
string ( Timestamp format)
Output only. The time the backups was created.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
updateTime
string ( Timestamp format)
Output only. Last update time.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
type
enum ( Type )
Output only. Indicates whether it’s an on-demand backup or scheduled.
state
enum ( State )
Output only. The current state of the backup.
statusMessage
string
Output only. Additional information about the current status of this backup, if available.
Type
Represents whether it’s an on-demand backup or scheduled.
Enums
TYPE_UNSPECIFIED
Backup was manually created.
ON_DEMAND
Backup was manually created.
SCHEDULED
Backup was automatically created.
State
Represents the different states of a Cloud AD Backup.
Enums
STATE_UNSPECIFIED
Not set.
CREATING
Backup is being created.
ACTIVE
Backup has been created and validated.
FAILED
Backup has been created but failed validation.
DELETING
Backup is being deleted.
Methods
create
Creates a Backup for a domain.
delete
Deletes identified Backup.
get
Gets details of a single Backup.
getIamPolicy
Gets the access control policy for a resource.
list
Lists Backup in a given project.
patch
Updates the labels for specified Backup.
setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
Returns permissions that a caller has on the specified resource.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-14 UTC."],[],[]]
