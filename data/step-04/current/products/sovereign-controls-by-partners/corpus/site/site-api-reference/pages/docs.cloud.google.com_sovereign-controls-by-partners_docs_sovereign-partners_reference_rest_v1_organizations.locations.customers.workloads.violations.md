---
title: "REST Resource: organizations.locations.customers.workloads.violations \_|\_\
  \ Sovereign Controls by Partners guides for partners \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sovereign-controls-by-partners/docs/sovereign-partners/reference/rest/v1/organizations.locations.customers.workloads.violations
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/sovereign-controls-by-partners/docs/sovereign-partners/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/sovereign-controls-by-partners/docs/sovereign-partners/reference/rest/v1/organizations.locations.customers.workloads.violations
  title: "REST Resource: organizations.locations.customers.workloads.violations \_\
    |\_ Sovereign Controls by Partners guides for partners \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Sovereign Controls by Partners
Sovereign Partners
Reference
Send feedback
REST Resource: organizations.locations.customers.workloads.violations
Stay organized with collections
Save and categorize content based on your preferences.
Resource: Violation
JSON representation
State
Remediation
JSON representation
Instructions
JSON representation
Gcloud
JSON representation
Console
JSON representation
RemediationType
Methods
Resource: Violation
Details of resource Violation
JSON representation
{
"name" : string ,
"description" : string ,
"beginTime" : string ,
"updateTime" : string ,
"resolveTime" : string ,
"category" : string ,
"state" : enum ( State ) ,
"nonCompliantOrgPolicy" : string ,
"folderId" : string ,
"remediation" : {
object ( Remediation )
}
}
Fields
name
string
Identifier. Format: organizations/{organization}/locations/{location}/customers/{customer}/workloads/{workload}/violations/{violation}
description
string
Output only. Description for the Violation. e.g. OrgPolicy gcp.resourceLocations has non compliant value.
beginTime
string ( Timestamp format)
Output only. Time of the event which triggered the Violation.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
updateTime
string ( Timestamp format)
Output only. The last time when the Violation record was updated.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
resolveTime
string ( Timestamp format)
Output only. Time of the event which fixed the Violation. If the violation is ACTIVE this will be empty.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
category
string
Output only. Category under which this violation is mapped. e.g. Location, Service Usage, Access, Encryption, etc.
state
enum ( State )
Output only. State of the violation
nonCompliantOrgPolicy
string
Output only. Immutable. Name of the OrgPolicy which was modified with non-compliant change and resulted this violation. Format: projects/{project_number}/policies/{constraint_name} folders/{folderId}/policies/{constraint_name} organizations/{organizationId}/policies/{constraint_name}
folderId
string ( int64 format)
The folderId of the violation
remediation
object ( Remediation )
Output only. Compliance violation remediation
State
Violation State Values
Enums
STATE_UNSPECIFIED
Unspecified state.
RESOLVED
Violation is resolved.
UNRESOLVED
Violation is Unresolved
EXCEPTION
Violation is Exception
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
Output only. Remediation type based on the type of org policy values violated
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
RemediationType
Classifying remediation into various types based on the kind of violation. For example, violations caused due to changes in boolean org policy requires different remediation instructions compared to violation caused due to changes in allowed values of list org policy.
Enums
REMEDIATION_TYPE_UNSPECIFIED
Unspecified remediation type
REMEDIATION_BOOLEAN_ORG_POLICY_VIOLATION
Remediation type for boolean org policy
REMEDIATION_LIST_ALLOWED_VALUES_ORG_POLICY_VIOLATION
Remediation type for list org policy which have allowed values in the monitoring rule
REMEDIATION_LIST_DENIED_VALUES_ORG_POLICY_VIOLATION
Remediation type for list org policy which have denied values in the monitoring rule
REMEDIATION_RESTRICT_CMEK_CRYPTO_KEY_PROJECTS_ORG_POLICY_VIOLATION
Remediation type for gcp.restrictCmekCryptoKeyProjects
REMEDIATION_RESOURCE_VIOLATION
Remediation type for resource violation.
Methods
get
Gets details of a single Violation.
list
Lists Violations for a workload Callers may also choose to read across multiple Customers or for a single customer as per AIP-159 by using '-' (the hyphen or dash character) as a wildcard character instead of {customer} & {workload}.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-30 UTC."],[],[]]
