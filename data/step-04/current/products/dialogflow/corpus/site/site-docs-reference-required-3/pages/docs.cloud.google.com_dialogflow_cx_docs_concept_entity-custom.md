---
title: "Custom entities \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-custom
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/cx/docs/concept/flow
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-custom
  title: "Custom entities \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
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
Create custom entities
To create a custom entity:
Console
Open the Dialogflow CX console .
Choose your Google Cloud project.
Select your agent.
Select the Manage tab.
Click Entity Types .
Click Create .
Enter entity data.
Click Save .
API
Use the EntityType 's create method.
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
Custom entity type display names are unique for each agent.
Entity type display names should start with a letter
and can contain the following:
A-Z , a-z , 0-9 , _ (underscore), - (dash).
Entity reference and synonym values have no such limitation.
Export and import custom entities
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
You can export and import entities for sharing across agents.
One of the export format options is Json package,
which is a zip file that contains a hierarchy
of directories and JSON files.
The following describes the directory structure:
entityTypes : This directory contains your entity types.
<entity type name> : One or more of these directories exist,
and the directory names correspond to entity type display names.
entities : This directory contains entity entry files.
<language tag>.json : One or more of these files exist,
and the file names correspond to language tags.
Each file contains language-specific entity entries.
<excludedPhrases> : This directory contains
excluded phrase
files.
<language tag>.json : One or more of these files exist,
and the file names correspond to language tags.
Each file contains language-specific phrase exclusions.
<entity type name>.json : This filename corresponds
to an entity type display name.
The file contains entity-type-specific data
not found in other files.
For example:
folder entityTypes
⤷ folder Entity Type A
⤷ folder entities
⤷ insert_drive_file en.json
⤷ insert_drive_file en-gb.json
⤷ insert_drive_file en-ca.json
⤷ folder excludedPhrases
⤷ insert_drive_file en.json
⤷ insert_drive_file en-gb.json
⤷ insert_drive_file en-ca.json
⤷ insert_drive_file Entity Type A.json
⤷ folder Entity Type B
⤷ folder entities
⤷ insert_drive_file en.json
⤷ insert_drive_file en-gb.json
⤷ insert_drive_file en-ca.json
⤷ folder excludedPhrases
⤷ insert_drive_file en.json
⤷ insert_drive_file en-gb.json
⤷ insert_drive_file en-ca.json
⤷ insert_drive_file Entity Type B.json
When importing entity types,
there may be merge conflicts when the display name of an
entity type in your existing agent matches that of an imported entity type.
You can control the merge behavior when entity type display names match
by selecting one of the following:
Replace existing entity types : An imported entity type overwrites any
same-named entity type in your existing agent.
Merge with existing entity types :
The entity entries of an imported entity type are added to the existing entity
type.
If the same entity entries exist, they won't be duplicated,
and the synonyms under them will be merged.
Rename and import as new entity types :
The imported entity type is renamed by appending "_1" to the display name.
Skip the entity types :
The existing entity type remains unchanged,
and the imported entity type is ignored.
To export entity types:
Console
Open the Dialogflow CX console .
Choose your Google Cloud project.
Select your agent.
Select the Manage tab.
Click Entity Types .
Select all the entity types you want to export.
Click Export selected entity .
Select the format and destination.
Click Submit .
To import entity types:
Console
Open the Dialogflow CX console .
Choose your Google Cloud project.
Select your agent.
Select the Manage tab.
Click Entity Types .
Click Import .
Select the source and merge behavior.
Click Submit .
Import entity entries
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
You can import entity entries to an existing entity type.
The file format used for importing entity entries is the same as the format
used for importing entity types. However, the import file can only contain 1
entity type and all the entries under it will be imported to the selected entity
type.
If the same entity entries exist, they won't be duplicated,
and the synonyms under them will be merged.
To import entity entries for an entity type:
Console
Open the Dialogflow CX console .
Choose your Google Cloud project.
Select your agent.
Select the Manage tab.
Click Entity Types .
Select an entity.
Click Import to entity .
Select a file.
Click Submit .
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
