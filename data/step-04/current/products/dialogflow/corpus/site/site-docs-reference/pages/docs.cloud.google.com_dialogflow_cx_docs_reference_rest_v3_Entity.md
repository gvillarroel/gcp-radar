---
title: "Entity \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Entity
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/cx/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Entity
  title: "Entity \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
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
Entity
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
An entity entry for an associated entity type.
JSON representation
{
"value" : string ,
"synonyms" : [
string
]
}
Fields
value
string
Required. The primary value associated with this entity entry. For example, if the entity type is vegetable , the value could be scallions .
For KIND_MAP entity types:
A canonical value to be used in place of synonyms.
For KIND_LIST entity types:
A string that can contain references to other entity types (with or without aliases).
synonyms[]
string
Required. A collection of value synonyms. For example, if the entity type is vegetable , and value is scallions , a synonym could be green onions .
For KIND_LIST entity types:
This collection must contain exactly one synonym equal to value .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
