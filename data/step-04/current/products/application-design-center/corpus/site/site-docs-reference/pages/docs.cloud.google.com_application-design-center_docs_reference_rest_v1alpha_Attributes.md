---
title: "Attributes \_|\_ Application Design Center \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/application-design-center/docs/reference/rest/v1alpha/Attributes
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/application-design-center/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/application-design-center/docs/reference/rest/v1alpha/Attributes
  title: "Attributes \_|\_ Application Design Center \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Application Design Center
Reference
Send feedback
Attributes
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Criticality
JSON representation
Type
Environment
JSON representation
Type
ContactInfo
JSON representation
Channel
JSON representation
Consumer provided attributes.
JSON representation
{
"criticality" : {
object ( Criticality )
} ,
"environment" : {
object ( Environment )
} ,
"developerOwners" : [
{
object ( ContactInfo )
}
] ,
"operatorOwners" : [
{
object ( ContactInfo )
}
] ,
"businessOwners" : [
{
object ( ContactInfo )
}
]
}
Fields
criticality
object ( Criticality )
Optional. User-defined criticality information.
environment
object ( Environment )
Optional. User-defined environment information.
developerOwners[]
object ( ContactInfo )
Optional. Developer team that owns development and coding.
operatorOwners[]
object ( ContactInfo )
Optional. Operator team that ensures runtime and operations.
businessOwners[]
object ( ContactInfo )
Optional. Business team that ensures user needs are met and value is delivered
Criticality
Criticality of the Application, Service, or Workload
JSON representation
{
"level" : string ,
"missionCritical" : boolean ,
"type" : enum ( Type )
}
Fields
level (deprecated)
string
This item is deprecated!
Optional. Criticality level. Can contain only lowercase letters, numeric characters, underscores, and dashes. Can have a maximum length of 63 characters. Deprecated: Please refer to type instead.
missionCritical (deprecated)
boolean
This item is deprecated!
Optional. Indicates mission-critical Application, Service, or Workload. Deprecated: Please refer to type instead.
type
enum ( Type )
Required. Criticality Type.
Type
Criticality Type.
Enums
TYPE_UNSPECIFIED
Unspecified type.
MISSION_CRITICAL
Mission critical service, application or workload.
HIGH
High impact.
MEDIUM
Medium impact.
LOW
Low impact.
Environment
Environment of the Application, Service, or Workload
JSON representation
{
"environment" : string ,
"type" : enum ( Type )
}
Fields
environment (deprecated)
string
This item is deprecated!
Optional. Environment name. Can contain only lowercase letters, numeric characters, underscores, and dashes. Can have a maximum length of 63 characters. Deprecated: Please refer to type instead.
type
enum ( Type )
Required. Environment Type.
Type
Environment Type.
Enums
TYPE_UNSPECIFIED
Unspecified type.
PRODUCTION
Production environment.
STAGING
Staging environment.
TEST
Test environment.
DEVELOPMENT
Development environment.
ContactInfo
Contact information of stakeholders.
JSON representation
{
"displayName" : string ,
"email" : string ,
"channel" : {
object ( Channel )
}
}
Fields
displayName
string
Optional. Contact's name. Can have a maximum length of 63 characters.
email
string
Required. Email address of the contacts.
channel
object ( Channel )
Optional. Communication channel of the contacts.
Channel
Separate message to accommodate custom formats across IRC and Slack.
JSON representation
{
"uri" : string
}
Fields
uri
string
Required. URI of the channel.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-27 UTC."],[],[]]
