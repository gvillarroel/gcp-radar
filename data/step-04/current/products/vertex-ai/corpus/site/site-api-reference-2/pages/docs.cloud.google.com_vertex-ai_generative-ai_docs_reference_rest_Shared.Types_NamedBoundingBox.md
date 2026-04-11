---
title: "NamedBoundingBox \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/NamedBoundingBox
knowledge_key: corpus
source_id: site-api-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/NamedBoundingBox
  title: "NamedBoundingBox \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud Documentation"
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
NamedBoundingBox
Stay organized with collections
Save and categorize content based on your preferences.
NamedBoundingBox to track an annotated bounding box.
Fields
classes[]
string
Annotated classes.
entities[]
string
Annotated entities.
scores[]
number
Annotated scores. Scores are normalized between [0, 1].
x1
number
The top-left (x1, y1) corner's unnormalized coordinate.
x2
number
y1
number
The bottom-right (y1, y2) corner's unnormalized coordinate.
y2
number
JSON representation
{
"classes" : [
string
] ,
"entities" : [
string
] ,
"scores" : [
number
] ,
"x1" : number ,
"x2" : number ,
"y1" : number ,
"y2" : number
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-20 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-20 UTC."],[],[]]
