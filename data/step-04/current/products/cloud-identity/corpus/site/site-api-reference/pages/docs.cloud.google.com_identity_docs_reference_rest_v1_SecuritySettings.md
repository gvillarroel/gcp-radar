---
title: "SecuritySettings \_|\_ Cloud Identity \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/identity/docs/reference/rest/v1/SecuritySettings
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/identity/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/identity/docs/reference/rest/v1/SecuritySettings
  title: "SecuritySettings \_|\_ Cloud Identity \_|\_ Google Cloud Documentation"
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
SecuritySettings
Stay organized with collections
Save and categorize content based on your preferences.
The definition of security settings.
JSON representation
{
"name" : string ,
"memberRestriction" : {
object ( MemberRestriction )
}
}
Fields
name
string
Output only. The resource name of the security settings.
Shall be of the form groups/{groupId}/securitySettings .
memberRestriction
object ( MemberRestriction )
The Member Restriction value
MemberRestriction
The definition of MemberRestriction
JSON representation
{
"query" : string ,
"evaluation" : {
object ( RestrictionEvaluation )
}
}
Fields
query
string
Member Restriction as defined by CEL expression. Supported restrictions are: member.customer_id and member.type .
Valid values for member.type are 1 , 2 and 3 . They correspond to USER, SERVICE_ACCOUNT, and GROUP respectively.
The value for member.customer_id only supports groupCustomerId() currently which means the customer id of the group will be used for restriction.
Supported operators are && , || and == , corresponding to AND, OR, and EQUAL.
Examples: Allow only service accounts of given customer to be members.
member.type == 2 && member.customer_id == groupCustomerId()
Allow only users or groups to be members.
member.type == 1 || member.type == 3
evaluation
object ( RestrictionEvaluation )
The evaluated state of this restriction on a group.
RestrictionEvaluation
The evaluated state of this restriction.
JSON representation
{
"state" : enum ( State )
}
Fields
state
enum ( State )
Output only. The current state of the restriction
State
All possible states of a restriction.
Enums
STATE_UNSPECIFIED
Default. Should not be used.
EVALUATING
The restriction state is currently being evaluated.
COMPLIANT
All transitive memberships are adhering to restriction.
FORWARD_COMPLIANT
Some transitive memberships violate the restriction. No new violating memberships can be added.
NON_COMPLIANT
Some transitive memberships violate the restriction. New violating direct memberships will be denied while indirect memberships may be added.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-06 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-06 UTC."],[],[]]
