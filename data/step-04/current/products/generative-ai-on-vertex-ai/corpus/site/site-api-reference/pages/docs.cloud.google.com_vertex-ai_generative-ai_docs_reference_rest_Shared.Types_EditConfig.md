---
title: "EditConfig \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/EditConfig
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/EditConfig
  title: "EditConfig \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud Documentation"
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
EditConfig
Stay organized with collections
Save and categorize content based on your preferences.
Fields
bufferZones[]
object ( BufferZone )
Buffer zone, if provided, must be length 2.
baseGuidanceScale[]
integer
Guidance scale: this controls strength of text guidance. If provided, must be a list of 4 integers representing values during 4 stages of diffusion [fine-grained,...,...,coarse].
enableClamping
boolean
Whether to enable clamping mode, which: * Enables the rest of the configurations in EditConfig. * Better preserves unmasked area * Skips model internal dilation so client can fully control this
baseSteps
integer
Number of sampling steps.
baseGamma
number
Gamma: influences how much noise is added during sampling.
sr1Steps
integer
Number of sampling steps for sr1 stage.
sr2Steps
integer
Number of sampling steps for sr2 stage.
semanticFilterConfig
object ( SemanticFilterConfig )
NOTE: for experiment use, not production ready. Semantic Filter Config. This config reduces object hallucination on inpainted images. Users can set filter classes and filter entities to filter out generated images that hallucinate undesired objects in the inpainted area. This config is only enabled in Editing config.
experimentUseServoBackend
boolean
Experiment flag to use servo backend.
editMode
string
The editing mode that describes the use case for editing. The values can be one of: * inpainting-remove * inpainting-insert * outpainting
alternateInitConfig
object ( AlternateInitConfig )
Parameters for AlternateInitConfig
experimentalSrVersion
string
Experimental flag for sr version.
experimentalBaseVersion
string
Experimental flag for base version.
embeddingScale
number
Parameter to control embedding scale, range: [0, 1], default: 0.6.
enableBorderReplicatePadding (deprecated)
boolean
This item is deprecated!
Parameter to enable recompute with BORDER_REPLICATE mode for outpainting image padding.
enablePostProcessingBlend (deprecated)
boolean
This item is deprecated!
Parameter to enable post-processing blending for masked editing.
outpaintingConfig
object ( OutpaintingProcessingConfig )
Outpainting processing config.
bgswapConfig
object ( BackgroundSwapProcessingConfig )
Background swap processing config.
JSON representation
{
"bufferZones" : [
{
object ( BufferZone )
}
] ,
"baseGuidanceScale" : [
integer
] ,
"enableClamping" : boolean ,
"baseSteps" : integer ,
"baseGamma" : number ,
"sr1Steps" : integer ,
"sr2Steps" : integer ,
"semanticFilterConfig" : {
object ( SemanticFilterConfig )
} ,
"experimentUseServoBackend" : boolean ,
"editMode" : string ,
"alternateInitConfig" : {
object ( AlternateInitConfig )
} ,
"experimentalSrVersion" : string ,
"experimentalBaseVersion" : string ,
"embeddingScale" : number ,
"enableBorderReplicatePadding" : boolean ,
"enablePostProcessingBlend" : boolean ,
"outpaintingConfig" : {
object ( OutpaintingProcessingConfig )
} ,
"bgswapConfig" : {
object ( BackgroundSwapProcessingConfig )
}
}
BufferZone
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
