---
title: "ConditionEvaluation \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/ConditionEvaluation
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/asset-inventory/docs
source_metadata:
  url: https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/ConditionEvaluation
  title: "ConditionEvaluation \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Cloud Asset Inventory
Reference
Send feedback
ConditionEvaluation
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
EvaluationValue
The condition evaluation.
JSON representation
{
"evaluationValue" : enum ( EvaluationValue )
}
Fields
evaluationValue
enum ( EvaluationValue )
The evaluation result.
EvaluationValue
Value of this expression.
Enums
EVALUATION_VALUE_UNSPECIFIED
Reserved for future use.
TRUE
The evaluation result is true .
FALSE
The evaluation result is false .
CONDITIONAL
The evaluation result is conditional when the condition expression contains variables that are either missing input values or have not been supported by Policy Analyzer yet.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-08 UTC."],[],[]]
