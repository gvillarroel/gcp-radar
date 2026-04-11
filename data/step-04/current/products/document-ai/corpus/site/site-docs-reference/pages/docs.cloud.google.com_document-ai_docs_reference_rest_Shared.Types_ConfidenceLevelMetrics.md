---
title: "ConfidenceLevelMetrics \_|\_ Document AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/document-ai/docs/reference/rest/Shared.Types/ConfidenceLevelMetrics
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/document-ai/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/document-ai/docs/reference/rest/Shared.Types/ConfidenceLevelMetrics
  title: "ConfidenceLevelMetrics \_|\_ Document AI \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Document AI
Reference
Send feedback
ConfidenceLevelMetrics
Stay organized with collections
Save and categorize content based on your preferences.
Evaluations metrics, at a specific confidence level.
JSON representation
{
"confidenceLevel" : number ,
"metrics" : {
object ( Metrics )
}
}
Fields
confidenceLevel
number
The confidence level.
metrics
object ( Metrics )
The metrics at the specific confidence level.
Metrics
Evaluation metrics, either in aggregate or about a specific entity.
JSON representation
{
"precision" : number ,
"recall" : number ,
"f1Score" : number ,
"predictedOccurrencesCount" : integer ,
"groundTruthOccurrencesCount" : integer ,
"predictedDocumentCount" : integer ,
"groundTruthDocumentCount" : integer ,
"truePositivesCount" : integer ,
"falsePositivesCount" : integer ,
"falseNegativesCount" : integer ,
"totalDocumentsCount" : integer
}
Fields
precision
number
The calculated precision.
recall
number
The calculated recall.
f1Score
number
The calculated f1 score.
predictedOccurrencesCount
integer
The amount of occurrences in predicted documents.
groundTruthOccurrencesCount
integer
The amount of occurrences in ground truth documents.
predictedDocumentCount
integer
The amount of documents with a predicted occurrence.
groundTruthDocumentCount
integer
The amount of documents with a ground truth occurrence.
truePositivesCount
integer
The amount of true positives.
falsePositivesCount
integer
The amount of false positives.
falseNegativesCount
integer
The amount of false negatives.
totalDocumentsCount
integer
The amount of documents that had an occurrence of this label.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
