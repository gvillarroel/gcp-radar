---
title: "Session entities \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-session
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/cx/docs/basics
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-session
  title: "Session entities \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
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
Session entities
Stay organized with collections
Save and categorize content based on your preferences.
A session represents a conversation
between a Dialogflow CX agent and an end-user.
You can create special entities, called session entities ,
or user entities ,
during a session.
Session entities can extend or replace custom entity types
and only exist during the session that they were created for.
All session data, including session entities,
is stored by Dialogflow CX for 30 minutes.
For example, if your agent has a @fruit entity type
that includes "pear" and "grape",
that entity type could be updated to include "apple" or "orange",
depending on the information your agent collects from the end-user.
The updated entity type would have the "apple" or "orange" entity entry
for the rest of the session.
Managing session entities with the API
To manage session entities with the API,
use the methods for the SessionEntity type.
Go to the SessionEntityType API reference
Select a protocol and version for the SessionEntityType reference:
Protocol
V3
V3beta1
REST
SessionEntityType resource
SessionEntityType resource
RPC
SessionEntityType interface
SessionEntityType interface
C++
SessionEntityTypesClient
Not available
C#
SessionEntityTypesClient
Not available
Go
SessionEntityTypesClient
Not available
Java
SessionEntityTypesClient
SessionEntityTypesClient
Node.js
SessionEntityTypesClient
SessionEntityTypesClient
PHP
Not available
Not available
Python
SessionEntityTypesClient
SessionEntityTypesClient
Ruby
Not available
Not available
Close
Previous
arrow_back
Custom entities
Next
Regexp entities
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
