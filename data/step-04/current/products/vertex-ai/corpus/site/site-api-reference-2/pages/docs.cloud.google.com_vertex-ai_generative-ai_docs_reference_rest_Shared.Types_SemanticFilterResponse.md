---
title: "SemanticFilterResponse \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/SemanticFilterResponse
knowledge_key: corpus
source_id: site-api-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/SemanticFilterResponse
  title: "SemanticFilterResponse \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\
    \ Documentation"
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
SemanticFilterResponse
Stay organized with collections
Save and categorize content based on your preferences.
SemanticFilterResponse tracks the semantic filtering results if user turns on the semantic filtering in LVM image editing's editConfig.
Fields
namedBoundingBoxes[]
object ( NamedBoundingBox )
If semantic filtering is not passed, a list of named bounding boxes will be populated to report users the detected objects that failed semantic filtering.
passedSemanticFilter
boolean
Whether the semantic filtering is passed.
JSON representation
{
"namedBoundingBoxes" : [
{
object ( NamedBoundingBox )
}
] ,
"passedSemanticFilter" : boolean
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-20 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-20 UTC."],[],[]]
