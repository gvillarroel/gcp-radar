---
title: "System entities \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/docs/entities-system
knowledge_key: corpus
source_id: site-docs-reference-required-9
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/docs/intents-actions-parameters
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/docs/entities-system
  title: "System entities \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation"
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
System entities
Stay organized with collections
Save and categorize content based on your preferences.
Dialogflow provides many system entities
to extract common types from end-user expressions.
For example, the @sys.color type can be used
to extract values like "red" or "blue".
You can see the full list of system entities in the
System entity reference .
For most applications, the values provided by system entities work well.
However, your application may need to add additional values for system entities.
For example, you may want to add "blue-green" to the list of values for @sys.color .
Some system entities can be extended for this purpose.
The
System entity reference
lists the system entities that can be extended.
The remaining sections of this document describe how to extend system entities.
System entity support differs for each language.
See the
system entity limitations
for details.
Where to find this data
When building an agent,
it is most common to use the
Dialogflow ES console ( visit documentation , open console ).
The instructions below focus on using the console.
To access system entity data for your agent:
Go to the Dialogflow ES console .
Select an agent.
Select Entities in the left sidebar menu.
Select the System tab for system entities.
If you are building an agent using the API instead of the console, see the
EntityTypes reference .
The API field names are similar to the console field names.
The instructions below highlight any important differences between the console and the API.
Extend a system entity from the entities page
From the entities page,
you can view system entities used by your agent
and extend them by following these steps:
Use the system entity in one of your
parameters .
Select Entities in the left sidebar menu.
Select the System tab for system entities.
The system entities currently used by your agent are listed.
Entities shown in a grey font color are not extendable,
and entities shown in a normal font color are extendable.
You can select an extendable entity and update the extended values.
Provide entity entries using the values you want to extend the entity with.
Extend a system entity with the API
If you are using the API to extend system entities,
create system entity extensions similar to how you create
custom entities .
Provide the name of the system entity you wish to extend,
and provide the values you want to extend it with.
If you attempt to extend a system entity that is not extendable,
you will receive an error.
Extend a system entity while annotating a training phrase
From the intent page's training phrase section,
you can extend a system entity while
annotating a training phrase .
If you manually annotate a training phrase part
with an extendable system entity that does not include the selected value,
you will be prompted to add this value to the system entity.
Previous
arrow_back
Entity options
Next
Custom entities
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
