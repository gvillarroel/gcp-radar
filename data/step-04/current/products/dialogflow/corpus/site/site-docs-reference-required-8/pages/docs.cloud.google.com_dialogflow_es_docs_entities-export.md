---
title: "Export and import entities \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/es/docs/entities-export
knowledge_key: corpus
source_id: site-docs-reference-required-8
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/es/docs/entities-regexp
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/es/docs/entities-export
  title: "Export and import entities \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation"
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
Export and import entities
Stay organized with collections
Save and categorize content based on your preferences.
You can export and import entities to simplify creation or movement
of large amounts of entity data.
Where to find this data
When building an agent,
it is most common to use the
Dialogflow ES console ( visit documentation , open console ).
The instructions below focus on using the console.
To access entity options data:
Go to the Dialogflow ES console .
Select an agent.
Select Entities in the left sidebar menu.
Select the Custom tab for
custom entities
defined for your agent
or the System tab for
system entities
used by your agent.
Format
The hand-editable import/export format is either JSON or CSV.
JSON format
See the
EntityType
REST reference.
CSV format
The CSV content should have the following format:
Each entity entry is on one line and ends with a newline.
Each value should be enclosed in double quotes.
Each value should be separated by commas.
For a map entity :
The reference value should be at the beginning of the line,
followed by synonyms.
Include the reference value twice
if you want it to be matched by the entity.
For a list entity :
Each line contains a single value.
For example, the following are two map entity entries:
"New York City", "New York City", "NYC", "New York City, USA"
"Philadelphia", "Philadelphia", "Philly", "Philadelphia, USA"
Export
To export an entity:
Hover your mouse over an entity
and click the cloud download
cloud_download
icon.
Choose JSON or CSV for the format.
Choose a location on your system to save the file.
Import
To import an entity:
Click the more more_vert icon.
Click Upload entity and choose the file.
Previous
arrow_back
Fuzzy matching
Next
Contexts
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
