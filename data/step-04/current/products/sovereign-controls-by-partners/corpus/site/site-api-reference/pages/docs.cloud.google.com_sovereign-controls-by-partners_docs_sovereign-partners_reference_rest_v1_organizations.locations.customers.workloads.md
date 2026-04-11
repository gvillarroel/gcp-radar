---
title: "REST Resource: organizations.locations.customers.workloads \_|\_ Sovereign\
  \ Controls by Partners guides for partners \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sovereign-controls-by-partners/docs/sovereign-partners/reference/rest/v1/organizations.locations.customers.workloads
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/sovereign-controls-by-partners/docs/sovereign-partners/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/sovereign-controls-by-partners/docs/sovereign-partners/reference/rest/v1/organizations.locations.customers.workloads
  title: "REST Resource: organizations.locations.customers.workloads \_|\_ Sovereign\
    \ Controls by Partners guides for partners \_|\_ Google Cloud Documentation"
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
REST Resource: organizations.locations.customers.workloads
Stay organized with collections
Save and categorize content based on your preferences.
Resource: Workload
JSON representation
WorkloadOnboardingState
JSON representation
WorkloadOnboardingStep
JSON representation
Step
Partner
Methods
Resource: Workload
Contains metadata around the Workload resource in the Assured Workloads API.
JSON representation
{
"name" : string ,
"folderId" : string ,
"createTime" : string ,
"folder" : string ,
"workloadOnboardingState" : {
object ( WorkloadOnboardingState )
} ,
"isOnboarded" : boolean ,
"keyManagementProjectId" : string ,
"location" : string ,
"partner" : enum ( Partner )
}
Fields
name
string
Identifier. Format: organizations/{organization}/locations/{location}/customers/{customer}/workloads/{workload}
folderId
string ( int64 format)
Output only. Folder id this workload is associated with
createTime
string ( Timestamp format)
Output only. Time the resource was created.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
folder
string
Output only. The name of container folder of the assured workload
workloadOnboardingState
object ( WorkloadOnboardingState )
Container for workload onboarding steps.
isOnboarded
boolean
Indicates whether a workload is fully onboarded.
keyManagementProjectId
string
The project id of the key management project for the workload
location
string
The Google Cloud location of the workload
partner
enum ( Partner )
Partner associated with this workload.
WorkloadOnboardingState
Container for workload onboarding steps.
JSON representation
{
"onboardingSteps" : [
{
object ( WorkloadOnboardingStep )
}
]
}
Fields
onboardingSteps[]
object ( WorkloadOnboardingStep )
List of workload onboarding steps.
WorkloadOnboardingStep
Container for workload onboarding information.
JSON representation
{
"step" : enum ( Step ) ,
"startTime" : string ,
"completionTime" : string ,
"completionState" : enum ( CompletionState )
}
Fields
step
enum ( Step )
The onboarding step.
startTime
string ( Timestamp format)
The starting time of the onboarding step.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
completionTime
string ( Timestamp format)
The completion time of the onboarding step.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
completionState
enum ( CompletionState )
Output only. The completion state of the onboarding step.
Step
Enum for possible onboarding steps.
Enums
STEP_UNSPECIFIED
Unspecified step.
EKM_PROVISIONED
EKM Provisioned step.
SIGNED_ACCESS_APPROVAL_CONFIGURED
Signed Access Approval step.
Partner
Supported Assured Workloads Partners.
Enums
PARTNER_UNSPECIFIED
Unknown Partner.
PARTNER_LOCAL_CONTROLS_BY_S3NS
Enum representing S3NS (Thales) partner.
PARTNER_SOVEREIGN_CONTROLS_BY_T_SYSTEMS
Enum representing T_SYSTEM (TSI) partner.
PARTNER_SOVEREIGN_CONTROLS_BY_SIA_MINSAIT
Enum representing SIA_MINSAIT (Indra) partner.
PARTNER_SOVEREIGN_CONTROLS_BY_PSN
Enum representing PSN (TIM) partner.
PARTNER_SOVEREIGN_CONTROLS_BY_CNTXT
Enum representing CNTXT (Kingdom of Saudi Arabia) partner.
PARTNER_SOVEREIGN_CONTROLS_BY_CNTXT_NO_EKM
Enum representing CNXT (Kingdom of Saudi Arabia) partner offering without EKM provisioning.
Methods
get
Gets details of a single workload
getEkmConnections
Gets the EKM connections associated with a workload
getPartnerPermissions
Gets the partner permissions granted for a workload
list
Lists customer workloads for a given customer org id
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-30 UTC."],[],[]]
