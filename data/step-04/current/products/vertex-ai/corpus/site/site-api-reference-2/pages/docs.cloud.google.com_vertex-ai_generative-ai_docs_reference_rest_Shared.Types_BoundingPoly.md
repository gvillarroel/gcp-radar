---
title: "BoundingPoly \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/BoundingPoly
knowledge_key: corpus
source_id: site-api-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/BoundingPoly
  title: "BoundingPoly \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud Documentation"
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
BoundingPoly
Stay organized with collections
Save and categorize content based on your preferences.
Bounding polygon in an image.
Fields
vertex[]
object ( Vertex )
Vertices of the bounding polygon in clockwise order.
JSON representation
{
"vertex" : [
{
object ( Vertex )
}
]
}
Vertex
Represents a 2D point in the image. Vertex coordinates are normalized to be relative to the original image dimensions and range from 0 to 1. The origin of the coordinate system (0,0) is the top-left corner of the image. x increases to the right, and y increases to the bottom.
Fields
x
number
X coordinate of the vertex, normalized to [0.0, 1.0].
y
number
Y coordinate of the vertex, normalized to [0.0, 1.0].
JSON representation
{
"x" : number ,
"y" : number
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-12-18 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-12-18 UTC."],[],[]]
