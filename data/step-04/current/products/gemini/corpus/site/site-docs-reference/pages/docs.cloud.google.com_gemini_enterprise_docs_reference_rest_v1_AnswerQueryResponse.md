---
title: "AnswerQueryResponse \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AnswerQueryResponse
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/gemini/enterprise/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AnswerQueryResponse
  title: "AnswerQueryResponse \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation"
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
AnswerQueryResponse
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Response message for ConversationalSearchService.AnswerQuery method.
JSON representation
{
"answer" : {
object ( Answer )
} ,
"session" : {
object ( Session )
} ,
"answerQueryToken" : string
}
Fields
answer
object ( Answer )
Answer resource object. If AnswerQueryRequest.QueryUnderstandingSpec.QueryRephraserSpec.max_rephrase_steps is greater than 1, use Answer.name to fetch answer information using ConversationalSearchService.GetAnswer API.
session
object ( Session )
Session resource object. It will be only available when session field is set and valid in the AnswerQueryRequest request.
answerQueryToken
string
A global unique ID used for logging.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-08 UTC."],[],[]]
