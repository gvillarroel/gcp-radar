---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.395Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Dialogflow CX open source integrations"
feature_slug: "dialogflow-cx-open-source-integrations"
latest_feature_date: "2023-08-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment"
  - "https://docs.cloud.google.com/dialogflow/es/docs/access-control"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
keywords:
  - "dialogflow"
  - "cx"
  - "open"
  - "source"
  - "integrations"
  - "sourced"
  - "set"
  - "multiple"
---

# Dialogflow CX open source integrations

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Google open sourced a set of Dialogflow CX integrations for multiple external platforms.

## Extended Definition

Google open sourced a set of Dialogflow CX integrations for multiple external platforms.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment](https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment)
- [https://docs.cloud.google.com/dialogflow/es/docs/access-control](https://docs.cloud.google.com/dialogflow/es/docs/access-control)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)

## Supporting Pages

### Fulfillments \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment](https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment)
- Source ID: `site-docs-root`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- Go to the Session API reference Select a protocol and version for the Session reference: Protocol V3 V3beta1 REST Session resource Session resource RPC Session interface Session interface C++ SessionsClient Not available C# SessionsClient Not available Go SessionsClient Not available Java SessionsClient SessionsClient Node.js SessionsClient SessionsClient PHP Not available Not available Python SessionsClient SessionsClient Ruby Not available Not available Close If no channel is defined in a request, or no matching channel is found in fulfillment, the default response message will be returned by Dialogflow CX.
- Fulfillment use cases Fulfillment is used everywhere that a response message is needed: Page entry fulfillment Routes Event handlers Initial prompts for forms Reprompt handlers for forms For each of these use cases, the console will open a fulfillment editing panel.
- Channel-specific response messages When defining fulfillment, you can create channel-specific response messages , so you can create targeted responses for text chat, voice, SMS, specific integrations that support channels, and so on.
- At runtime, when the Dialogflow CX virtual agent calls a fulfillment with call transfer, the call is transferred to the specified number and virtual agent handling is suspended.

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- Minimal Conversation The minimum amount of information required to generate a Summary without having a Conversation resource created. com. google. cloud. dialogflow. v2.
- We use QuerySource to distinguish queries directly entered by agents and suggested queries from Participants.SuggestKnowledgeAssist . com. google. cloud. dialogflow. v2.
- Sip Trunk SipTrunk is the resource that represents a SIP trunk to connect to Google Telephony platform SIP trunking service. com. google. cloud. dialogflow. v2.
- The generator resources will be used inside a conversation and will be triggered by TriggerEvent to query LLM for answers. com. google. cloud. dialogflow. v2.

### Access control \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/access-control](https://docs.cloud.google.com/dialogflow/es/docs/access-control)
- Source ID: `site-iam-reference`
- Final score: 95
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you have integrations with other Google Cloud resources, like Cloud Functions, and you don't want to grant full project access to an application, you must assign the Dialogflow API roles (Admin, Client, or Reader) in the Google Cloud console for IAM.
- When implementing your own client and using OAuth , you must use the following OAuth scope: https://www.googleapis.com/auth/cloud-platform (access to all project resources) Previous arrow back Training Next Using multiple projects arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Access to the Dialogflow API requires one of the following OAuth scopes: https://www.googleapis.com/auth/cloud-platform (access to all project resources) https://www.googleapis.com/auth/dialogflow (access to Dialogflow resources) Requests that involve Cloud Storage access Some Dialogflow requests access objects in Cloud Storage for reading or writing data.
- Dialogflow Console role IAM role Permission Summary Permission Detail Admin Project > Owner Grant to project owners that need full access to all Google Cloud and Dialogflow resources: Full access to all Google Cloud project resources using Google Cloud console or APIs.

