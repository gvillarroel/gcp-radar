---
title: "Method: analyzeMove \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeMove
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/asset-inventory/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeMove
  title: "Method: analyzeMove \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Cloud Asset Inventory
Reference
Send feedback
Method: analyzeMove
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
JSON representation
Authorization scopes
AnalysisView
MoveAnalysis
JSON representation
MoveAnalysisResult
JSON representation
MoveImpact
JSON representation
Try it!
Analyze moving a resource to a specified destination without kicking off the actual move. The analysis is best effort depending on the user's permissions of viewing different hierarchical policies and configurations. The policies and configuration are subject to change before the actual resource migration takes place.
HTTP request
GET https://cloudasset.googleapis.com/v1/{resource=*/*}:analyzeMove
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
resource
string
Required. Name of the resource to perform the analysis against. Only Google Cloud projects are supported as of today. Hence, this can only be a project ID (such as "projects/my-project-id") or a project number (such as "projects/12345").
Query parameters
Parameters
destinationParent
string
Required. Name of the Google Cloud folder or organization to reparent the target resource. The analysis will be performed against hypothetically moving the resource to this specified destination parent. This can only be a folder number (such as "folders/123") or an organization number (such as "organizations/123").
view
enum ( AnalysisView )
Analysis view indicating what information should be included in the analysis response. If unspecified, the default view is FULL.
Request body
The request body must be empty.
Response body
The response message for resource move analysis.
If successful, the response body contains data with the following structure:
JSON representation
{
"moveAnalysis" : [
{
object ( MoveAnalysis )
}
]
}
Fields
moveAnalysis[]
object ( MoveAnalysis )
The list of analyses returned from performing the intended resource move analysis. The analysis is grouped by different Google Cloud services.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
AnalysisView
View enum for supporting partial analysis responses.
Enums
ANALYSIS_VIEW_UNSPECIFIED
The default/unset value. The API will default to the FULL view.
FULL
Full analysis including all level of impacts of the specified resource move.
BASIC
Basic analysis only including blockers which will prevent the specified resource move at runtime.
MoveAnalysis
A message to group the analysis information.
JSON representation
{
"displayName" : string ,
// Union field result can be only one of the following:
"analysis" : {
object ( MoveAnalysisResult )
} ,
"error" : {
object ( Status )
}
// End of list of possible types for union field result .
}
Fields
displayName
string
The user friendly display name of the analysis. E.g. IAM, organization policy etc.
Union field result .
result can be only one of the following:
analysis
object ( MoveAnalysisResult )
Analysis result of moving the target resource.
error
object ( Status )
Description of error encountered when performing the analysis.
MoveAnalysisResult
An analysis result including blockers and warnings.
JSON representation
{
"blockers" : [
{
object ( MoveImpact )
}
] ,
"warnings" : [
{
object ( MoveImpact )
}
]
}
Fields
blockers[]
object ( MoveImpact )
Blocking information that would prevent the target resource from moving to the specified destination at runtime.
warnings[]
object ( MoveImpact )
Warning information indicating that moving the target resource to the specified destination might be unsafe. This can include important policy information and configuration changes, but will not block moves at runtime.
MoveImpact
A message to group impacts of moving the target resource.
JSON representation
{
"detail" : string
}
Fields
detail
string
User friendly impact detail in a free form message.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-30 UTC."],[],[]]
