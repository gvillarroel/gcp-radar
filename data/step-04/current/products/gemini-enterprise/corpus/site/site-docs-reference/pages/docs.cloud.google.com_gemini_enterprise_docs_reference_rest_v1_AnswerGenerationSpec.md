---
title: "AnswerGenerationSpec \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AnswerGenerationSpec
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/gemini/enterprise/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AnswerGenerationSpec
  title: "AnswerGenerationSpec \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Note: This documentation applies to the Standard, Plus, and Frontline editions of Gemini Enterprise. For information about the Business edition, see the Gemini Enterprise - Business edition Help Center .
Home
Documentation
AI and ML
Gemini Enterprise
Reference
Send feedback
AnswerGenerationSpec
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
ModelSpec
JSON representation
PromptSpec
JSON representation
Answer generation specification.
JSON representation
{
"modelSpec" : {
object ( ModelSpec )
} ,
"promptSpec" : {
object ( PromptSpec )
} ,
"includeCitations" : boolean ,
"answerLanguageCode" : string ,
"ignoreAdversarialQuery" : boolean ,
"ignoreNonAnswerSeekingQuery" : boolean ,
"ignoreJailBreakingQuery" : boolean ,
"ignoreLowRelevantContent" : boolean
}
Fields
modelSpec
object ( ModelSpec )
Answer generation model specification.
promptSpec
object ( PromptSpec )
Answer generation prompt specification.
includeCitations
boolean
Specifies whether to include citation metadata in the answer. The default value is false .
answerLanguageCode
string
Language code for Answer. Use language tags defined by BCP47 . Note: This is an experimental feature.
ignoreAdversarialQuery
boolean
Specifies whether to filter out adversarial queries. The default value is false .
Google employs search-query classification to detect adversarial queries. No answer is returned if the search query is classified as an adversarial query. For example, a user might ask a question regarding negative comments about the company or submit a query designed to generate unsafe, policy-violating output. If this field is set to true , we skip generating answers for adversarial queries and return fallback messages instead.
ignoreNonAnswerSeekingQuery
boolean
Specifies whether to filter out queries that are not answer-seeking. The default value is false .
Google employs search-query classification to detect answer-seeking queries. No answer is returned if the search query is classified as a non-answer seeking query. If this field is set to true , we skip generating answers for non-answer seeking queries and return fallback messages instead.
ignoreJailBreakingQuery
boolean
Optional. Specifies whether to filter out jail-breaking queries. The default value is false .
Google employs search-query classification to detect jail-breaking queries. No summary is returned if the search query is classified as a jail-breaking query. A user might add instructions to the query to change the tone, style, language, content of the answer, or ask the model to act as a different entity, e.g. "Reply in the tone of a competing company's CEO". If this field is set to true , we skip generating summaries for jail-breaking queries and return fallback messages instead.
ignoreLowRelevantContent
boolean
Specifies whether to filter out queries that have low relevance.
If this field is set to false , all search results are used regardless of relevance to generate answers. If set to true or unset, the behavior will be determined automatically by the service.
ModelSpec
Answer Generation Model specification.
JSON representation
{
"modelVersion" : string
}
Fields
modelVersion
string
Model version. If not set, it will use the default stable model. Allowed values are: stable, preview.
PromptSpec
Answer generation prompt specification.
JSON representation
{
"preamble" : string
}
Fields
preamble
string
Customized preamble.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-08 UTC."],[],[]]
