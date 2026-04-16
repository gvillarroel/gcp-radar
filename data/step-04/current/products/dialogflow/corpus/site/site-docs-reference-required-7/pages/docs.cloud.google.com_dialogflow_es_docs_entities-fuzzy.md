---
title: "Fuzzy matching \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/es/docs/entities-fuzzy
knowledge_key: corpus
source_id: site-docs-reference-required-7
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/es/docs/entities-options
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/es/docs/entities-fuzzy
  title: "Fuzzy matching \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation"
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
Where to find this data
When building an agent,
it is most common to use the
Dialogflow ES console ( visit documentation , open console ).
The instructions below focus on using the console.
To access entity data:
Go to the Dialogflow ES console .
Select an agent.
Select Entities in the left sidebar menu.
If you are building an agent using the API instead of the console, see the
EntityTypes reference .
The API field names are similar to the console field names.
The instructions below highlight any important differences between the console and the API.
Create a fuzzy matching entity
To create a fuzzy matching entity:
Open an existing entity or create a new one.
Check Fuzzy matching .
Enter one or more entries in the table.
Click Save .
If you are using the API to create or update entities,
set the enable_fuzzy_extraction field to true for the EntityType .
Limitations
The following limitations apply:
Fuzzy matching cannot be enabled for
regexp entities .
These features are mutually exclusive.
Fuzzy matching should not be enabled for entities which are used
to match strict values like IDs, national identification numbers,
and so on.
Partial matches
When you define synonyms that contain multiple words,
Dialogflow will attempt to match end-user input to the closest matching synonym,
which may include partial matches.
For example,
if you define a synonym as "cold brew coffee",
and the end-user input is "cold coffee",
the associated entity will be matched unless there is a better match.
Spell correction
When end-user input could be considered a misspelling of an entity synonym,
the associated entity may be matched.
For example,
if you define a synonym as "lumber",
and the end-user input is "number",
the associated entity may be matched.
Previous
arrow_back
Regexp entities
Next
Export and import entities
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
