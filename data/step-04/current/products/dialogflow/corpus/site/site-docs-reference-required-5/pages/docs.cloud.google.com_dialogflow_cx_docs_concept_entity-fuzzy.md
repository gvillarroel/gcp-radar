---
title: "Fuzzy matching \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-fuzzy
knowledge_key: corpus
source_id: site-docs-reference-required-5
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/cx/docs/concept/audit-logging
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-fuzzy
  title: "Fuzzy matching \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
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
Send feedback
Fuzzy matching
Stay organized with collections
Save and categorize content based on your preferences.
By default, entity matching requires an exact match for one of the entity entries.
This works well for single-word entity entry values and synonyms
but may present a problem for multi-word values and synonyms.
For example,
consider a ball entity
that should be matched for the following end-user expression parts:
"ball"
"red ball"
"ball red"
"small ball"
"ball small"
"small red ball"
"small ball red"
"red small ball"
"red ball small"
"ball small red"
"ball red small"
For a match to occur,
you normally need to define an entity entry value and synonyms for each of these permutations.
However, with fuzzy matching enabled,
the ordering of the words in a value or synonym does not matter.
The following will trigger a match for all of the examples above:
"ball"
"red ball"
"small ball"
"small red ball"
Create a fuzzy matching entity
Console
Open the Dialogflow CX console .
Choose your GCP project.
Select your agent.
Select the Manage tab.
Click Entity Types .
Click Create .
Check Fuzzy matching .
Complete remaining fields.
Click Save .
API
Set the EntityType.enableFuzzyExtraction field to true.
Go to the EntityType API reference
Select a protocol and version for the EntityType reference:
Protocol
V3
V3beta1
REST
EntityType resource
EntityType resource
RPC
EntityType interface
EntityType interface
C++
EntityTypesClient
Not available
C#
EntityTypesClient
Not available
Go
EntityTypesClient
Not available
Java
EntityTypesClient
EntityTypesClient
Node.js
EntityTypesClient
EntityTypesClient
PHP
Not available
Not available
Python
EntityTypesClient
EntityTypesClient
Ruby
Not available
Not available
Close
Limitations
The following limitations apply:
Fuzzy matching cannot be enabled for
regexp entities .
These features are mutually exclusive.
Fuzzy matching should not be enabled for entities which are used
to match strict values like IDs, national identification numbers,
and so on.
Previous
arrow_back
Regexp entities
Next
Parameters
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
