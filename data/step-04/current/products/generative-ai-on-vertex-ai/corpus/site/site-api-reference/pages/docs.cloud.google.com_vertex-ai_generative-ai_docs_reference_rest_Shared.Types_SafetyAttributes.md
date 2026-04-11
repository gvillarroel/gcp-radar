---
title: "SafetyAttributes \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/SafetyAttributes
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/SafetyAttributes
  title: "SafetyAttributes \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI
Generative AI on Vertex AI
API reference
Send feedback
SafetyAttributes
Stay organized with collections
Save and categorize content based on your preferences.
Fields
categories[]
string
List of RAI categories.
scores[]
number
List of RAI scores.
detectedLabels[]
object ( DetectedLabels )
List of detected labels
JSON representation
{
"categories" : [
string
] ,
"scores" : [
number
] ,
"detectedLabels" : [
{
object ( DetectedLabels )
}
]
}
DetectedLabels
Filters which return labels with confidence scores.
Fields
entities[]
object ( Entity )
The list of detected entities for the rai signal.
raiCategory
string
The RAI category for the deteceted labels.
JSON representation
{
"entities" : [
{
object ( Entity )
}
] ,
"raiCategory" : string
}
Entity
The properties for a detected entity from the rai signal.
Fields
mid
string
MID of the label
description
string
description of the label
score
number
confidence score of the label
boundingBox
object ( BoundingBox )
Bounding box of the label
iouScore
number
The intersection ratio between the detection bounding box and the mask.
JSON representation
{
"mid" : string ,
"description" : string ,
"score" : number ,
"boundingBox" : {
object ( BoundingBox )
} ,
"iouScore" : number
}
BoundingBox
An integer bounding box of the original pixel size for the detected labels.
Fields
x1
integer
The X coordinate of the top-left corner, in pixels.
y1
integer
The Y coordinate of the top-left corner, in pixels.
x2
integer
The X coordinate of the bottom-right corner, in pixels.
y2
integer
The Y coordinate of the bottom-right corner, in pixels.
JSON representation
{
"x1" : integer ,
"y1" : integer ,
"x2" : integer ,
"y2" : integer
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-20 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-20 UTC."],[],[]]
