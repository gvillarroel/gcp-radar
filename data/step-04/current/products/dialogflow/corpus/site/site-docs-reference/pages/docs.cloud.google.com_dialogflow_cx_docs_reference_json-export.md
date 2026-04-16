---
title: "JSON package export format \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/cx/docs/reference/json-export
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/cx/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/cx/docs/reference/json-export
  title: "JSON package export format \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
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
Reference
Send feedback
JSON package export format
Stay organized with collections
Save and categorize content based on your preferences.
You can
export and restore agents
in the JSON package file format.
This format is ideal for agent source control versioning,
because the version differences can easily be reviewed and compared.
Note: It is not recommended to directly edit the JSON text files,
because format or value mistakes may result in a bad agent state.
Limitations
Warning: We will no longer export raw value credentials for OpenAPI Tools and
Webhooks, starting Aug 15, 2025. You should migrate
to store your credentials in Secret Manager. See
Webhook
and Tool
documentations for instructions.
The JSON package format is only available for export and restore of an agent,
not export and restore of individual flows.
Directory structure
An agent export is a zip file that contains a hierarchy
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
<entity type name>.json : This file name corresponds
to an entity type display name.
The file contains entity-type-specific data
not found in other files.
flows : This directory contains your flow data.
<flow name> : One or more of these directories exist,
and the directory names correspond to flow display names.
pages : This directory contains the page data for the flow.
<page name>.json : One or more of these files exist,
and the file names correspond to page display names.
Each file contains page-specific data.
transitionRouteGroups : This directory contains your
route group
data for the flow.
<route group name> : One or more of these files exist,
and the file names correspond to route group display names.
Each file contains route-group-specific data.
<flow name>.json : This file name corresponds
to a flow display name.
The file contains flow-specific data not found in other files.
intents : This directory contains your intent data.
<intent name> : One or more of these directories exist,
and the directory names correspond to intent display names.
trainingPhrases : This directory contains training phrase data.
<language tag>.json : One or more of these files exist,
and the file names correspond to language tags.
Each file contains language-specific training phrases
for the intent.
<intent name>.json : This file name corresponds
to an intent display name.
The file contains intent-specific data not found in other files.
testCases : This directory contains your test case data.
<test case name>.json : One or more of these files exist,
and the file names correspond to test case display names.
Each file contains test-case-specific data.
webhooks : This directory contains your webhook data.
<webhook name>.json : One or more of these files exist,
and the file names correspond to webhook display names.
Each file contains webhook-specific data.
agentTransitionRouteGroups : This directory contains your agent-level transition route group data.
<agent transition route group name>.json : One or more of these
files exist, and the file names correspond to
agent transition route group display names.
Each file contains agent-transition-route-group-specific data.
agent.json : This file contains agent-specific data
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
folder flows
⤷ folder Flow A
⤷ folder pages
⤷ insert_drive_file Page A.json
⤷ insert_drive_file Page B.json
⤷ insert_drive_file Page C.json
⤷ folder transitionRouteGroups
⤷ insert_drive_file Route Group A.json
⤷ insert_drive_file Route Group B.json
⤷ insert_drive_file Route Group C.json
⤷ insert_drive_file Flow A.json
⤷ folder Flow B
⤷ folder pages
⤷ insert_drive_file Page D.json
⤷ insert_drive_file Page E.json
⤷ insert_drive_file Page F.json
⤷ folder transitionRouteGroups
⤷ insert_drive_file Route Group D.json
⤷ insert_drive_file Route Group E.json
⤷ insert_drive_file Route Group F.json
⤷ insert_drive_file Flow B.json
folder intents
⤷ folder Intent A
⤷ folder trainingPhrases
⤷ insert_drive_file en.json
⤷ insert_drive_file en-gb.json
⤷ insert_drive_file en-ca.json
⤷ insert_drive_file Intent A.json
⤷ folder Intent B
⤷ folder trainingPhrases
⤷ insert_drive_file en.json
⤷ insert_drive_file en-gb.json
⤷ insert_drive_file en-ca.json
⤷ insert_drive_file Intent B.json
folder testCases
⤷ insert_drive_file Test Case A.json
⤷ insert_drive_file Test Case B.json
folder webhooks
⤷ insert_drive_file Webhook A.json
⤷ insert_drive_file Webhook B.json
folder agentTransitionRouteGroups
⤷ insert_drive_file Agent Transition Route Group A.json
⤷ insert_drive_file Agent Transition Route Group B.json
insert_drive_file agent.json
Agent restore guidance
When restoring an agent,
you must provide a zip file as described above.
Be sure that the agent.json and other top-level directories described above
are at the root directory of the zip file.
For example:
Good
Bad
/agent.json
/xxx/agent.json
/entityTypes
/xxx/entityTypes
Resource names
Some folder and JSON file names correspond to resource display names.
If a display name contains characters that are not allowed in file names
( $ , < , > , and so on),
these characters are
URL encoded
for the directory or file name.
Any JSON field that contains a resource reference is set to the
corresponding resource display name,
rather than the full resource name that includes the resource ID.
For example,
Parameter.entityType is set to the display name of an entity type,
rather than
projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/entityTypes/<Entity Type ID> .
If you edit a JSON file to change the display name
of any referenced resource,
be sure to update all the references to the resource as well.
JSON content format
Each JSON file mentioned above has a representation that corresponds to a
Dialogflow REST API resource in JSON form.
For example,
Webhook A.json contains a JSON representation of the
JSON form of the webhook resource
with a display name of Webhook A .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
