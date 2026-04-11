---
title: "ControlNetConfig \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/ControlNetConfig
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/ControlNetConfig
  title: "ControlNetConfig \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud Documentation"
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
ControlNetConfig
Stay organized with collections
Save and categorize content based on your preferences.
Fields
enableControlNet
boolean
true if ControlNet is enabled.
conditions[]
object ( ControlNetConditionConfig )
Configurations for each condition.
originalImageWeight
number
The weight for the original image. Valid range: [0, 1]. When set to 1.0, the output basically copies the input image. When set to 0.0, the output not respect the input image at all.
JSON representation
{
"enableControlNet" : boolean ,
"conditions" : [
{
object ( ControlNetConditionConfig )
}
] ,
"originalImageWeight" : number
}
ControlNetConditionConfig
Fields
conditionName
string
Currently supported conditions: * cannyEdges * depth
conditionMapBytesBase64Encoded
string ( bytes format)
When the condition map is provided by the user, we will not compute the condition map on our side.
A base64-encoded string.
conditionWeight
number
The guidance weight for the condition signal. Valid range: [0, 1]. The higher the weight, the model respects the ControlNet condition more. The default value is 1.0 if unspecified.
conditionMaxT
number
The strength of the ControlNet's effect on each diffusion step. Valid range: [0, 1].
JSON representation
{
"conditionName" : string ,
"conditionMapBytesBase64Encoded" : string ,
"conditionWeight" : number ,
"conditionMaxT" : number
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-20 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-20 UTC."],[],[]]
