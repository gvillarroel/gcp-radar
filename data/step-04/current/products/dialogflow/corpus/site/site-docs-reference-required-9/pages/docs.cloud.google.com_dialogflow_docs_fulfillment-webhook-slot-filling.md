---
title: "Webhook for slot filling \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/docs/fulfillment-webhook-slot-filling
knowledge_key: corpus
source_id: site-docs-reference-required-9
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/docs/intents-actions-parameters
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/docs/fulfillment-webhook-slot-filling
  title: "Webhook for slot filling \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation"
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
Webhook for slot filling
Stay organized with collections
Save and categorize content based on your preferences.
When an intent is matched at runtime,
the Dialogflow agent continues collecting information from the end-user
until the end-user has provided data for each of the required parameters.
This process is called
slot filling .
By default,
Dialogflow does not send a fulfillment webhook request
until it has collected all required data from the end-user.
If webhook for slot filling is enabled,
Dialogflow sends a fulfillment webhook request for each
conversational turn during slot filling.
While in most cases, the parameter prompts are enough to collect all required
parameters, a webhook for slot-filling allows you to define more specific agent
logic during collection of the parameters.
For example, your webhook could handle the customization of follow-up questions
or setting parameter slots that cannot be retrieved from the end-user response,
like from a database.
Enable webhook for slot filling
To enable webhook for slot filling at design-time:
Go to the Dialogflow ES console .
Select an agent.
Select Intents in the left sidebar menu.
Select an intent.
Scroll down to the Fulfillment section.
Toggle Enable webhook call for slot filling on.
Click Save .
Handle webhook for slot filling calls at runtime
The webhook request message received by your webhook service
has a queryResult.parameters field.
This field contains the current set of parameters provided
by the end-user.
Values that have not been collected yet
are set to empty strings.
An example of the webhook response message for setting parameters can be found in
Webhook Response examples .
Previous
arrow_back
Webhook service
Next
Mutual TLS authentication
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
