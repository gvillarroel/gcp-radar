---
title: "REST Resource: organizations.locations.customers \_|\_ Sovereign Controls\
  \ by Partners guides for partners \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sovereign-controls-by-partners/docs/sovereign-partners/reference/rest/v1/organizations.locations.customers
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/sovereign-controls-by-partners/docs/sovereign-partners/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/sovereign-controls-by-partners/docs/sovereign-partners/reference/rest/v1/organizations.locations.customers
  title: "REST Resource: organizations.locations.customers \_|\_ Sovereign Controls\
    \ by Partners guides for partners \_|\_ Google Cloud Documentation"
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
REST Resource: organizations.locations.customers
Stay organized with collections
Save and categorize content based on your preferences.
Resource: Customer
JSON representation
CustomerOnboardingState
JSON representation
CustomerOnboardingStep
JSON representation
Step
Methods
Resource: Customer
Contains metadata around a Cloud Controls Partner Customer
JSON representation
{
"name" : string ,
"displayName" : string ,
"customerOnboardingState" : {
object ( CustomerOnboardingState )
} ,
"isOnboarded" : boolean
}
Fields
name
string
Identifier. Format: organizations/{organization}/locations/{location}/customers/{customer}
displayName
string
The customer organization's display name. E.g. "google.com".
customerOnboardingState
object ( CustomerOnboardingState )
Container for customer onboarding steps
isOnboarded
boolean
Indicates whether a customer is fully onboarded
CustomerOnboardingState
Container for customer onboarding steps
JSON representation
{
"onboardingSteps" : [
{
object ( CustomerOnboardingStep )
}
]
}
Fields
onboardingSteps[]
object ( CustomerOnboardingStep )
List of customer onboarding steps
CustomerOnboardingStep
Container for customer onboarding information
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
The onboarding step
startTime
string ( Timestamp format)
The starting time of the onboarding step
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
completionTime
string ( Timestamp format)
The completion time of the onboarding step
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
completionState
enum ( CompletionState )
Output only. Current state of the step
Step
Enum for possible onboarding steps
Enums
STEP_UNSPECIFIED
Unspecified step
KAJ_ENROLLMENT
KAJ Enrollment
CUSTOMER_ENVIRONMENT
Customer Environment
Methods
get
Gets details of a single customer
list
Lists customers of a partner identified by its Google Cloud organization ID
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-30 UTC."],[],[]]
