---
title: "ImportStrategy \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ImportStrategy
knowledge_key: corpus
source_id: site-api-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ConversationTurn
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ImportStrategy
  title: "ImportStrategy \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Some products and features are in the process of being renamed. Generative playbook and flow features are also being migrated to a single consolidated console. See the details .
Home
Documentation
AI and ML
Dialogflow
Dialogflow CX
Reference
Send feedback
ImportStrategy
Stay organized with collections
Save and categorize content based on your preferences.
Import strategies for the conflict resolution of resources (i.e. intents, entities, and webhooks) with identical display names during import operations.
Enums
IMPORT_STRATEGY_UNSPECIFIED
Unspecified. Treated as 'CREATE_NEW'.
IMPORT_STRATEGY_CREATE_NEW
Create a new resource with a numeric suffix appended to the end of the existing display name.
IMPORT_STRATEGY_REPLACE
Replace existing resource with incoming resource in the content to be imported.
IMPORT_STRATEGY_KEEP
Keep existing resource and discard incoming resource in the content to be imported.
IMPORT_STRATEGY_MERGE
Combine existing and incoming resources when a conflict is encountered.
IMPORT_STRATEGY_THROW_ERROR
Throw error if a conflict is encountered.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
