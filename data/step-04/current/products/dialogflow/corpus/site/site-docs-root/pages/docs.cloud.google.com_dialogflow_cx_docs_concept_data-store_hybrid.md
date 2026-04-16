---
title: "Data store hybrid agents \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/hybrid
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/cx/docs
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/hybrid
  title: "Data store hybrid agents \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
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
Data store hybrid agents
Stay organized with collections
Save and categorize content based on your preferences.
If you have an existing Dialogflow CX agent,
you can upgrade this agent to a hybrid agent ,
which combines the power of precise conversation controls
(flows, parameters, intents, conditions, transitions, and so on)
with data store handler generative features.
As part of this upgrade,
you may wish to delete or temporarily disable intent routes
(while testing data store handlers)
for certain conversation scenarios from your agent,
because the data store handlers can handle those scenarios more simply.
Recommended scenarios
The following scenarios are recommended for data store handlers:
Questions that can be answered by your organization's documents or website.
FAQs that do not require database lookups.
The following scenarios are not recommended for data store handlers:
Content that does not have answers to desired questions.
Questions that require database lookups or server requests.
Scenarios that require data redaction.
Scenarios that require deterministic agent responses.
Input evaluation order
Dialogflow CX evaluates end-user input in the following order
for hybrid agents:
Parameter input while form filling.
Intent matches for
routes in scope .
Data store handler with FAQ data store content.
Data store handler with unstructured data store content.
Previous
arrow_back
Data store performance improvements
Next
Data store search configuration
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
