---
title: "BatchProcessMetadata \_|\_ Document AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/document-ai/docs/reference/rest/Shared.Types/BatchProcessMetadata
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/document-ai/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/document-ai/docs/reference/rest/Shared.Types/BatchProcessMetadata
  title: "BatchProcessMetadata \_|\_ Document AI \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Document AI
Reference
Send feedback
BatchProcessMetadata
Stay organized with collections
Save and categorize content based on your preferences.
The long-running operation metadata for BatchProcessDocuments .
JSON representation
{
"state" : enum ( State ) ,
"stateMessage" : string ,
"createTime" : string ,
"updateTime" : string ,
"individualProcessStatuses" : [
{
object ( IndividualProcessStatus )
}
]
}
Fields
state
enum ( State )
The state of the current batch processing.
stateMessage
string
A message providing more details about the current state of processing. For example, the error message if the operation is failed.
createTime
string ( Timestamp format)
The creation time of the operation.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6, or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
updateTime
string ( Timestamp format)
The last update time of the operation.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
individualProcessStatuses[]
object ( IndividualProcessStatus )
The list of response details of each document.
IndividualProcessStatus
The status of a each individual document in the batch process.
JSON representation
{
"inputGcsSource" : string ,
"status" : {
object ( Status )
} ,
"outputGcsDestination" : string ,
"humanReviewStatus" : {
object ( HumanReviewStatus )
}
}
Fields
inputGcsSource
string
The source of the document, same as the inputGcsSource field in the request when the batch process started.
status
object ( Status )
The status processing the document.
outputGcsDestination
string
The Cloud Storage output destination (in the request as DocumentOutputConfig.GcsOutputConfig.gcs_uri ) of the processed document if it was successful, otherwise empty.
humanReviewStatus
object ( HumanReviewStatus )
The status of human review on the processed document.
HumanReviewStatus
The status of human review on a processed document.
JSON representation
{
"state" : enum ( State ) ,
"stateMessage" : string ,
"humanReviewOperation" : string
}
Fields
state
enum ( State )
The state of human review on the processing request.
stateMessage
string
A message providing more details about the human review state.
humanReviewOperation
string
The name of the operation triggered by the processed document. This field is populated only when the state is HUMAN_REVIEW_IN_PROGRESS . It has the same response type and metadata as the long-running operation returned by ReviewDocument .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
