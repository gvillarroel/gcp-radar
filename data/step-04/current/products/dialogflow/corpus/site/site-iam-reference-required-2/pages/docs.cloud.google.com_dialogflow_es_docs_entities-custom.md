---
title: "Custom entities \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/es/docs/entities-custom
knowledge_key: corpus
source_id: site-iam-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/es/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/es/docs/entities-custom
  title: "Custom entities \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation"
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
Custom entities
Stay organized with collections
Save and categorize content based on your preferences.
You can create custom entities for matching data specific to your agent.
For example, you could define a vegetable entity type
that can match the types of vegetables
available for purchase with a grocery store agent.
Note: When building your agent,
it's best to define your entities
prior to adding
training phrases
to your intents.
The console will automatically annotate your training phrases
with existing entities.
However, if you create entities after training phrases,
you can manually annotate the phrases.
Where to find this data
When building an agent,
it is most common to use the
Dialogflow ES console ( visit documentation , open console ).
The instructions below focus on using the console.
To access custom entity data:
Go to the Dialogflow ES console .
Select an agent.
Select Entities in the left sidebar menu.
Select the Custom tab for custom entities.
If you are building an agent using the API instead of the console, see the
EntityTypes reference .
The API field names are similar to the console field names.
The instructions below highlight any important differences between the console and the API.
Create custom entities
To create a custom map entity :
Click Create entity .
Enter a name for the entity.
Note that Define synonyms is already checked.
Click the first row and provide a reference value in the left column.
Click the next column or press Enter and provide synonyms.
Continue adding rows for other entity entries.
Click Save .
Batch operations
You can move, copy, or delete multiple entities using batch operations:
Copy :
Copies selected entities to the target agent.
Move :
Moves selected entities to the target agent.
Delete :
Permanently deletes the selected entities.
This cannot be undone.
The following additional options are prompted for copy and move operations:
Copy related entities :
Moves or copies entities used in
composite entities .
Overwrite entities :
Overwrites entities with the same name.
To copy, move, or delete multiple entities:
Hover you mouse over the list
and select one or more entities.
This reveals the batch options.
Choose the desired action.
Select the desired options in the dialog.
Click Start .
Limitations
The following limitations apply:
Custom entity type names are unique for each agent.
Entity type names should start with a letter
and can contain the following:
A-Z , a-z , 0-9 , _ (underscore), - (dash).
Entity reference and synonym values have no such limitation.
Previous
arrow_back
System entities
Next
Session entities
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
