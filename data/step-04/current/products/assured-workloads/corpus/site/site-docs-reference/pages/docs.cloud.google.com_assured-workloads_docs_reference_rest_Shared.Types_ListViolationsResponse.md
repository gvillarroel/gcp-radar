---
title: "ListViolationsResponse \_|\_ Assured Workloads \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/assured-workloads/docs/reference/rest/Shared.Types/ListViolationsResponse
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/assured-workloads/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/assured-workloads/docs/reference/rest/Shared.Types/ListViolationsResponse
  title: "ListViolationsResponse \_|\_ Assured Workloads \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

The names for some Assured Workloads control packages have changed. For information about the name change, see Control package renaming notice .
Home
Documentation
Security
Assured Workloads
Reference
Send feedback
ListViolationsResponse
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Violation
JSON representation
Remediation
JSON representation
Instructions
JSON representation
Gcloud
JSON representation
Console
JSON representation
ExceptionContext
JSON representation
Response of ListViolations endpoint.
JSON representation
{
"violations" : [
{
object ( Violation )
}
] ,
"nextPageToken" : string
}
Fields
violations[]
object ( Violation )
List of Violations under a Workload.
nextPageToken
string
The next page token. Returns empty if reached the last page.
Violation
Workload monitoring Violation.
JSON representation
{
"name" : string ,
"description" : string ,
"beginTime" : string ,
"updateTime" : string ,
"resolveTime" : string ,
"category" : string ,
"state" : enum ( State ) ,
"orgPolicyConstraint" : string ,
"auditLogLink" : string ,
"nonCompliantOrgPolicy" : string ,
"remediation" : {
object ( Remediation )
} ,
"acknowledged" : boolean ,
"exceptionAuditLogLink" : string ,
"exceptionContexts" : [
{
object ( ExceptionContext )
}
] ,
"acknowledgementTime" : string
}
Fields
name
string
Output only. Immutable. Name of the Violation. Format: organizations/{organization}/locations/{location}/workloads/{workload_id}/violations/{violations_id}
description
string
Output only. Description for the Violation. e.g. OrgPolicy gcp.resourceLocations has non compliant value.
beginTime
string ( Timestamp format)
Output only. Time of the event which triggered the Violation.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
updateTime
string ( Timestamp format)
Output only. The last time when the Violation record was updated.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
resolveTime
string ( Timestamp format)
Output only. Time of the event which fixed the Violation. If the violation is ACTIVE this will be empty.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
category
string
Output only. Category under which this violation is mapped. e.g. Location, Service Usage, Access, Encryption, etc.
state
enum ( State )
Output only. State of the violation
orgPolicyConstraint (deprecated)
string
This item is deprecated!
Output only. Immutable. The org-policy-constraint that was incorrectly changed, which resulted in this violation.
auditLogLink
string
Output only. Immutable. Audit Log Link for violated resource Format: https://console.cloud.google.com/logs/query;query={logName}{protoPayload.resourceName}{timeRange}{folder }
nonCompliantOrgPolicy
string
Output only. Immutable. Name of the OrgPolicy which was modified with non-compliant change and resulted this violation. Format: projects/{project_number}/policies/{constraintName} folders/{folderId}/policies/{constraintName} organizations/{organization_id}/policies/{constraintName}
remediation
object ( Remediation )
Output only. Compliance violation remediation
acknowledged
boolean
Output only. A boolean that indicates if the violation is acknowledged
exceptionAuditLogLink
string
Output only. Immutable. Audit Log link to find business justification provided for violation exception. Format: https://console.cloud.google.com/logs/query;query={logName}{protoPayload.resourceName}{protoPayload.methodName}{timeRange}{organization }
exceptionContexts[]
object ( ExceptionContext )
Output only. List of all the exception detail added for the violation.
acknowledgementTime
string ( Timestamp format)
Optional. Timestamp when this violation was acknowledged last. This will be absent when acknowledged field is marked as false.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
Remediation
Represents remediation guidance to resolve compliance violation for AssuredWorkload
JSON representation
{
"instructions" : {
object ( Instructions )
} ,
"compliantValues" : [
string
] ,
"remediationType" : enum ( RemediationType )
}
Fields
instructions
object ( Instructions )
Required. Remediation instructions to resolve violations
compliantValues[]
string
Values that can resolve the violation For example: for list org policy violations, this will either be the list of allowed or denied values
remediationType
enum ( RemediationType )
Output only. Reemediation type based on the type of org policy values violated
Instructions
Instructions to remediate violation
JSON representation
{
"gcloudInstructions" : {
object ( Gcloud )
} ,
"consoleInstructions" : {
object ( Console )
}
}
Fields
gcloudInstructions
object ( Gcloud )
Remediation instructions to resolve violation via gcloud cli
consoleInstructions
object ( Console )
Remediation instructions to resolve violation via cloud console
Gcloud
Remediation instructions to resolve violation via gcloud cli
JSON representation
{
"gcloudCommands" : [
string
] ,
"steps" : [
string
] ,
"additionalLinks" : [
string
]
}
Fields
gcloudCommands[]
string
Gcloud command to resolve violation
steps[]
string
Steps to resolve violation via gcloud cli
additionalLinks[]
string
Additional urls for more information about steps
Console
Remediation instructions to resolve violation via cloud console
JSON representation
{
"consoleUris" : [
string
] ,
"steps" : [
string
] ,
"additionalLinks" : [
string
]
}
Fields
consoleUris[]
string
Link to console page where violations can be resolved
steps[]
string
Steps to resolve violation via cloud console
additionalLinks[]
string
Additional urls for more information about steps
ExceptionContext
Violation exception detail. Next Id: 6
JSON representation
{
"comment" : string ,
"acknowledgementTime" : string ,
"userName" : string
}
Fields
comment
string
Business justification provided towards the acknowledgement of the violation.
acknowledgementTime
string ( Timestamp format)
Timestamp when the violation was acknowledged.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
userName
string
Name of the user (or service account) who acknowledged the violation.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-27 UTC."],[],[]]
