---
title: "EditConfigV6 \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/EditConfigV6
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/EditConfigV6
  title: "EditConfigV6 \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud Documentation"
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
EditConfigV6
Stay organized with collections
Save and categorize content based on your preferences.
EditConfig for imagegeneration@006
Fields
bufferZones[]
object ( BufferZone )
Buffer zone, if provided, must be length 2.
editMode
string
The editing mode that describes the use case for editing. The values can be one of: * inpainting-remove * inpainting-insert * outpainting * product-image
maskDilation
number
Parameter to control mask dilation, range: [0, 1], default: 0.03.
guidanceScale
integer
Guidance scale: this controls strength of text guidance.
productPosition
string
Product position: this controls the product position in the returned product editing image. The values can be one of: * reposition - the default behavior in the GPS pipeline * fixed - keeps the product in the same position as in the position as in the input image. This assume input image is square.
maskMode
object ( MaskMode )
Automatic mask generation configuration.
baseSteps
integer
Number of sampling steps for base model.
backend
string
The backend to use for the model. The values can be one of: * experimental * prod
semanticFilterConfig
object ( SemanticFilterConfig )
Semantic Filter Config. This config reduces object hallucination on inpainted images. Users can set filter classes and filter entities to filter out generated images that hallucinate undesired objects in the inpainted area. This config is only enabled in Editing config.
alternateInitConfig
object ( AlternateInitConfig )
Parameters for AlternateInitConfig
outpaintingConfig
object ( OutpaintingProcessingConfig )
Outpainting config.
JSON representation
{
"bufferZones" : [
{
object ( BufferZone )
}
] ,
"editMode" : string ,
"maskDilation" : number ,
"guidanceScale" : integer ,
"productPosition" : string ,
"maskMode" : {
object ( MaskMode )
} ,
"baseSteps" : integer ,
"backend" : string ,
"semanticFilterConfig" : {
object ( SemanticFilterConfig )
} ,
"alternateInitConfig" : {
object ( AlternateInitConfig )
} ,
"outpaintingConfig" : {
object ( OutpaintingProcessingConfig )
}
}
MaskMode
Fields
maskType
string
The type of mask to generate from the provided input image. The values can be one of: * background * foreground * semantic
classes[]
value ( Value format)
The class IDs to generate masks of using the Semantic Segmenter model. Only numeric class IDs are supported.
Not used if the maskType value is not semantic .
JSON representation
{
"maskType" : string ,
"classes" : [
value
]
}
BufferZone
BufferZone config.
Fields
pixels
integer
The number of pixels for the mask to dilate.
diffusionT
number
When during diffusion this pixel dilation takes effect, 1=start, 0=end.
JSON representation
{
"pixels" : integer ,
"diffusionT" : number
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-20 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-20 UTC."],[],[]]
