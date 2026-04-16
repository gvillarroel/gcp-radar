---
title: "System entities \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-system
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/cx/docs/basics
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-system
  title: "System entities \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
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
System entities
Stay organized with collections
Save and categorize content based on your preferences.
Dialogflow CX provides many system entities
to extract common types from end-user expressions.
For example, the @sys.color type can be used
to extract values like "red" or "blue".
You can see the full list of system entities in the
System entity reference .
For most applications, the values provided by system entities work well.
However, your application may need to add additional values for system entities.
For example, you may want to add "blue-green"
to the list of values for @sys.color .
Some system entities can be extended for this purpose.
The
System entity reference
lists the system entities that can be extended.
System entity support differs for
languages
and
regions .
See the
system entity limitations
for details.
Extend a system entity
To extend a system entity:
Console
Use the system entity in one of your
parameters .
Select the Manage tab.
Click Entity Types .
Select the System tab for system entities.
The system entities currently used by your agent are listed.
Entities shown in a grey font color are not extendable,
and entities shown in a normal font color are extendable.
You can select an extendable entity and update the extended values.
Provide entity entries using the values you want to extend the entity with.
API
Creating system entity extensions is similar to how you create
custom entities .
Provide the name of the system entity you wish to extend,
and provide the values you want to extend it with.
If you attempt to extend a system entity that is not extendable,
you will receive an error.
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
