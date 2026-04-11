---
title: "AnswerValue \_|\_ Customer Experience Insights \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/contact-center/insights/docs/reference/rest/v1/AnswerValue
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/contact-center/insights/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/contact-center/insights/docs/reference/rest/v1/AnswerValue
  title: "AnswerValue \_|\_ Customer Experience Insights \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Customer Experience Insights
Reference
Send feedback
AnswerValue
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Message for holding the value of a QaAnswer . QaQuestion.AnswerChoice defines the possible answer values for a question.
JSON representation
{
"key" : string ,
// Union field value can be only one of the following:
"strValue" : string ,
"numValue" : number ,
"boolValue" : boolean ,
"naValue" : boolean
// End of list of possible types for union field value .
"score" : number ,
"potentialScore" : number ,
"normalizedScore" : number
}
Fields
key
string
A short string used as an identifier. Matches the value used in QaQuestion.AnswerChoice.key.
Union field value . The answer value may be one of a few different types. value can be only one of the following:
strValue
string
String value.
numValue
number
Numerical value.
boolValue
boolean
Boolean value.
naValue
boolean
A value of "Not Applicable (N/A)". Should only ever be true .
score
number
Output only. Numerical score of the answer.
potentialScore
number
Output only. The maximum potential score of the question.
normalizedScore
number
Output only. Normalized score of the questions. Calculated as score / potentialScore.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-30 UTC."],[],[]]
