---
title: "Entities \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/cx/docs
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity
  title: "Entities \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
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
Entities
Stay organized with collections
Save and categorize content based on your preferences.
Entity types
are used to control how data from end-user input is extracted.
Dialogflow CX provides predefined
system entities
that can match many common types of data.
For example, there are system entities for matching dates,
times, colors, email addresses, and so on.
You can also create your own
custom entities
for matching custom data.
For example,
you could define a vegetable entity
that can match the types of vegetables available
for purchase with a grocery store agent.
Entity terminology
The term entity is used in this documentation and in the Dialogflow CX console
to describe the general concept of entities.
When discussing entity details,
it's important to understand more specific terms:
Entity type :
Defines the type of information you want to extract from user input.
For example, vegetable could be the display name of an entity type.
Clicking Create from the Entity Types section
of the Dialogflow CX console creates an entity type .
When using the API,
the term entity type refers to the EntityType type.
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
(Optional) Description : Describes the purpose of the entity type, for
example "This entity is triggered when the user mentions a vegetable". If
you intend to use AI generation to auto-generate reference value synonyms,
this field will be used by the model to produce higher-quality results.
Entity entry :
For each entity type, there can be many entity entries . Each entity entry
provides a set of words or phrases that are considered equivalent, a
reference value in the first column and one or more synonyms to that
reference value in the second column. For example, if vegetable is an
entity type, you could define these entity entries:
Reference value
Synonyms
scallion
scallion, green onion
bell pepper
bell pepper, sweet pepper
carrot
carrot
potato
potato, tater, tuber
Instead of entering entity entries and synonyms manually, you can select
the Auto-generate __ syonyms per entity checkbox when you create a new
entity entry. The default value is 3 synonyms. The AI will generate synonyms
based on the reference value and entity type description and enter them in
the table. Please note that the synonyms list must also include the
original reference value in order to produce a match to that value.
When editing an entity type from the Dialogflow CX console, each row of the
display is an entity entry . When using the API,
the term entity entry refers to the
Entity type ( EntityType.Entity or EntityType_Entity
for some client library languages).
Entity reference value and synonyms :
Some entity entries have multiple words or phrases
that are considered equivalent,
like the scallion in previous example.
For these entity entries, you provide one reference value
and one or more synonyms .
Previous
arrow_back
Intents
Next
Entity options
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
