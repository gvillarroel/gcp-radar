---
title: "GenSelfieConfig \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/GenSelfieConfig
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/GenSelfieConfig
  title: "GenSelfieConfig \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud Documentation"
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
GenSelfieConfig
Stay organized with collections
Save and categorize content based on your preferences.
Fields
perExampleSeeds[]
integer
Initialization seed per generation sample. len(seeds) should be equal to sampleCount .
identityControl
number
Parameter for identity control. Valid range: [0, 1.0] Default value: 0.9
structureControl
number
Parameter for structure control. Valid range: [0, 1.0] Default value: 1.0
experimentalBaseVersion
string
The version for the base model.
skipFaceCropping
boolean
Whether to skip detecting and cropping the face in the input image. Default value: false.
samplingSteps
integer
Number of sampling steps.
enableSharpening
boolean
Whether to enable image sharpening post-processing.
detectionScoreThreshold
number
The threshold for the face detection model. Images with a face detection score below this threshold will be rejected.
faceSelectionCriteria
string
The criteria to select the face for Gen Selfie. Accepted values: * LARGEST * MOST_CONFIDENT
style
string
The style for the generated image. Accepted values: * watercolor * hand-drawing * illustration * 3d-character
JSON representation
{
"perExampleSeeds" : [
integer
] ,
"identityControl" : number ,
"structureControl" : number ,
"experimentalBaseVersion" : string ,
"skipFaceCropping" : boolean ,
"samplingSteps" : integer ,
"enableSharpening" : boolean ,
"detectionScoreThreshold" : number ,
"faceSelectionCriteria" : string ,
"style" : string
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-20 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-20 UTC."],[],[]]
