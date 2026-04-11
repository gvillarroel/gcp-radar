---
title: "SemanticFilterConfig \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/SemanticFilterConfig
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/SemanticFilterConfig
  title: "SemanticFilterConfig \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\
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
SemanticFilterConfig
Stay organized with collections
Save and categorize content based on your preferences.
Fields
filterClasses[]
string
Specify object class text names to filter. Any detected object in the masked region bearing anyone of the class names will be checked.
filterEntities[]
string
Specify object entity ids to filter, similar to filterClasses. The Final filter list is an union of filter classes and filter entities.
filterClassesOutpainting[]
string
For outpainting case. Specify object class text names to filter. Any detected object in the masked region bearing anyone of the class names will be checked.
filterEntitiesOutpainting[]
string
For outpainting case. Specify object entity ids to filter, similar to filterClasses. The Final filter list is an union of filter classes and filter entities.
filterClassesSpecialInit[]
string
For special_init case. Specify object class text names to filter. Any detected object in the masked region bearing anyone of the class names will be checked.
filterEntitiesSpecialInit[]
string
For special_init case. Specify object entity ids to filter, similar to filterClasses. The Final filter list is an union of filter classes and filter entities.
enableSemanticFilter
boolean
Whether to enable semantic filtering mode, which enables the following parameters to apply semantic filter on image editing results.
intersectRatioThreshold
number
A threshold value to decide what detected boxes should be included in semantic filter checking.
additionalSampleCount
integer
Additional count of samples, expect a value between 0 and 4.
semanticFilterMode
string
A string to specify semantic filter experimental mode. This allows semantic filter to change the default behavior to filter generated images.
detectionScoreThreshold
number
A detection confidence score threshold to decide which detection boxes are considered as the valid detections for semantic filter checking.
intersectRatioThresholdOutpainting
number
For outpainting case. A threshold value to decide what detected boxes should be included in semantic filter checking.
detectionScoreThresholdOutpainting
number
For outpainting case. A detection confidence score threshold to decide which detection boxes are considered as the valid detections for semantic filter checking.
intersectRatioThresholdSpecialInit
number
For special_init case. A threshold value to decide what detected boxes should be included in semantic filter checking.
detectionScoreThresholdSpecialInit
number
For special_init case. A detection confidence score threshold to decide which detection boxes are considered as the valid detections for semantic filter checking.
JSON representation
{
"filterClasses" : [
string
] ,
"filterEntities" : [
string
] ,
"filterClassesOutpainting" : [
string
] ,
"filterEntitiesOutpainting" : [
string
] ,
"filterClassesSpecialInit" : [
string
] ,
"filterEntitiesSpecialInit" : [
string
] ,
"enableSemanticFilter" : boolean ,
"intersectRatioThreshold" : number ,
"additionalSampleCount" : integer ,
"semanticFilterMode" : string ,
"detectionScoreThreshold" : number ,
"intersectRatioThresholdOutpainting" : number ,
"detectionScoreThresholdOutpainting" : number ,
"intersectRatioThresholdSpecialInit" : number ,
"detectionScoreThresholdSpecialInit" : number
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-20 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-20 UTC."],[],[]]
