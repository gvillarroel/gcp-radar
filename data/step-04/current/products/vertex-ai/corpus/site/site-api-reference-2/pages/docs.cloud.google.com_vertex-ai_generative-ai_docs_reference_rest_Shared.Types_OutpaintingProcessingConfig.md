---
title: "OutpaintingProcessingConfig \_|\_ Generative AI on Vertex AI \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/OutpaintingProcessingConfig
knowledge_key: corpus
source_id: site-api-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/OutpaintingProcessingConfig
  title: "OutpaintingProcessingConfig \_|\_ Generative AI on Vertex AI \_|\_ Google\
    \ Cloud Documentation"
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
OutpaintingProcessingConfig
Stay organized with collections
Save and categorize content based on your preferences.
OutpaintingProcessingConfig for imagen-3.0-capability-001
Fields
blendingMode
string
The blending mode for outpainting. The values can be one of: * alpha-blending * pyramid-blending
blendingFactor
number
The blending factor for outpainting blending. Valid range: [0, 1]. Default value: 0
enableBorderReplicatePadding
boolean
Parameter to enable recompute with BORDER_REPLICATE mode for outpainting image padding.
expansionConfig
object ( ExpansionConfig )
Fix to one-side expansion issue by adding padding to the image and mask in the backend server and cropped them out in the post-processing.
JSON representation
{
"blendingMode" : string ,
"blendingFactor" : number ,
"enableBorderReplicatePadding" : boolean ,
"expansionConfig" : {
object ( ExpansionConfig )
}
}
ExpansionConfig
ExpansionConfig to fix one-side expansion issue by adding padding to the image and mask in the backend server and cropped them out in the post-processing.
Fields
top
integer
Number of pixels to expand the image and mask from the top value is an integer that has a minimum of 0 and a maximum of 500.
bottom
integer
Number of pixels to expand the image and mask from the bottom value is an integer that has a minimum of 0 and a maximum of 500.
left
integer
Number of pixels to expand the image and mask from the left value is an integer that has a minimum of 0 and a maximum of 500.
right
integer
Number of pixels to expand the image and mask from the right value is an integer that has a minimum of 0 and a maximum of 500.
JSON representation
{
"top" : integer ,
"bottom" : integer ,
"left" : integer ,
"right" : integer
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-20 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-20 UTC."],[],[]]
