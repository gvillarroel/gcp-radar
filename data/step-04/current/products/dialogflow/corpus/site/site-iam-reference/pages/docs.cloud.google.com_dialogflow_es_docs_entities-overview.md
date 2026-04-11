---
title: "Entities \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/es/docs/entities-overview
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/es/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/es/docs/entities-overview
  title: "Entities \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Dialogflow
Dialogflow ES
Send feedback
Entities
Stay organized with collections
Save and categorize content based on your preferences.
Each intent
parameter
has a type, called the
entity type ,
which dictates exactly how data from an end-user expression is extracted.
Dialogflow provides predefined
system entities
that can match many common types of data.
For example, there are system entities for matching dates, times, colors, email addresses, and so on.
You can also create your own
custom entities
for matching custom data.
For example, you could define a vegetable entity
that can match the types of vegetables available for purchase with a grocery store agent.
Entity terminology
The term entity is used in this documentation and in the Dialogflow Console
to describe the general concept of entities.
When discussing entity details,
it's important to understand more specific terms:
Entity type :
Defines the type of information you want to extract from user input.
For example, vegetable could be the name of an entity type.
Clicking Create Entity from the Dialogflow Console creates an entity type .
When using the API,
the term entity type refers to the
EntityType
type.
Entity entry :
For each entity type, there are many entity entries .
Each entity entry provides a set of words or phrases that are considered equivalent.
For example, if vegetable is an entity type, you could define these three entity entries:
carrot
scallion, green onion
bell pepper, sweet pepper
When editing an entity type from the Dialogflow Console,
each row of the display is an entity entry .
When using the API,
the term entity entry refers to the
Entity type ( EntityType.Entity or EntityType_Entity
for some client library languages).
Entity reference value and synonyms :
Some entity entries have multiple words or phrases
that are considered equivalent,
like the scallion example above.
For these entity entries, you provide one reference value
and one or more synonyms .
Previous
arrow_back
Intent settings
Next
Entity options
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
