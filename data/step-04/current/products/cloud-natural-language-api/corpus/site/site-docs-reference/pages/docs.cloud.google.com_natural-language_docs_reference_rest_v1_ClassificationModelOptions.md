---
title: "ClassificationModelOptions \_|\_ Cloud Natural Language API \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/natural-language/docs/reference/rest/v1/ClassificationModelOptions
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/natural-language/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/natural-language/docs/reference/rest/v1/ClassificationModelOptions
  title: "ClassificationModelOptions \_|\_ Cloud Natural Language API \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Cloud Natural Language API
Reference
Send feedback
ClassificationModelOptions
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
V1Model
V2Model
JSON representation
ContentCategoriesVersion
Model options available for classification requests.
JSON representation
{
// Union field model_type can be only one of the following:
"v1Model" : {
object ( V1Model )
} ,
"v2Model" : {
object ( V2Model )
}
// End of list of possible types for union field model_type .
}
Fields
Union field model_type . If this field is not set, then the v1_model will be used by default. model_type can be only one of the following:
v1 Model
object ( V1Model )
Setting this field will use the V1 model and V1 content categories version. The V1 model is a legacy model; support for this will be discontinued in the future.
v2 Model
object ( V2Model )
Setting this field will use the V2 model with the appropriate content categories version. The V2 model is a better performing model.
V1Model
This type has no fields.
Options for the V1 model.
V2Model
Options for the V2 model.
JSON representation
{
"contentCategoriesVersion" : enum ( ContentCategoriesVersion )
}
Fields
content Categories Version
enum ( ContentCategoriesVersion )
The content categories used for classification.
ContentCategoriesVersion
The content categories used for classification.
Enums
CONTENT_CATEGORIES_VERSION_UNSPECIFIED
If ContentCategoriesVersion is not specified, this option will default to V1 .
V1
Legacy content categories of our initial launch in 2017.
V2
Updated content categories in 2022.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-13 UTC."],[],[]]
