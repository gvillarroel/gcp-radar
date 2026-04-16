---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.653Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Google Secrets token storage"
feature_slug: "google-secrets-token-storage"
latest_feature_date: "2025-03-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/reference/json-export"
keywords:
  - "secrets"
  - "storage"
  - "restore"
  - "token"
  - "export"
---

# Google Secrets token storage

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX Git export and restore can store tokens in Google Secrets.

## Extended Definition

Dialogflow CX Git export and restore can store tokens in Google Secrets.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- [https://docs.cloud.google.com/dialogflow/cx/docs/reference/json-export](https://docs.cloud.google.com/dialogflow/cx/docs/reference/json-export)

## Supporting Pages

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- Input Config Represents the configuration of importing a set of conversation files in Google Cloud Storage. com. google. cloud. dialogflow. v2.
- Builder Represents the configuration of importing a set of conversation files in Google Cloud Storage. com. google. cloud. dialogflow. v2.
- Service Agent Auth Indicate the auth token type generated from the Diaglogflow service agent . com. google. cloud. dialogflow. v2.
- Section Token A pair of section name and input token count of the input summary section. com. google. cloud. dialogflow. v2.

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- Specify a Cloud Storage URI to store and playback voice conversations When conversation history is enabled, you can provide a Cloud Storage URI, and conversation audio will be saved in this location.
- Note: Some features, such as Experiments , Conversation history , BigQuery export , Analytics , and NLU model improvement require this setting to be enabled, as they rely on traffic logs.
- Note: Some features, such as Experiments , Conversation history , BigQuery export , Analytics , and NLU model improvement require this setting to be enabled, as they rely on traffic logs.
- You can increase token sizes to accommodate this, but keep in mind that increased prompt sizes also add to the LLM response latency.

### JSON package export format \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/reference/json-export](https://docs.cloud.google.com/dialogflow/cx/docs/reference/json-export)
- Source ID: `site-docs-reference`
- Final score: 74
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The JSON package format is only available for export and restore of an agent, not export and restore of individual flows.
- You can export and restore agents in the JSON package file format.
- For example: folder entityTypes ⤷ folder Entity Type A ⤷ folder entities ⤷ insert drive file en.json ⤷ insert drive file en-gb.json ⤷ insert drive file en-ca.json ⤷ folder excludedPhrases ⤷ insert drive file en.json ⤷ insert drive file en-gb.json ⤷ insert drive file en-ca.json ⤷ insert drive file Entity Type A.json ⤷ folder Entity Type B ⤷ folder entities ⤷ insert drive file en.json ⤷ insert drive file en-gb.json ⤷ insert drive file en-ca.json ⤷ folder excludedPhrases ⤷ insert drive file en.json ⤷ insert drive file en-gb.json ⤷ insert drive file en-ca.json ⤷ insert drive file Entity Type B.json folder flows ⤷ folder Flow A ⤷ folder pages ⤷ insert drive file Page A.json ⤷ insert drive file Page B.json ⤷ insert drive file Page C.json ⤷ folder transitionRouteGroups ⤷ insert drive file Route Group A.json ⤷ insert drive file Route Group B.json ⤷ insert drive file Route Group C.json ⤷ insert drive file Flow A.json ⤷ folder Flow B ⤷ folder pages ⤷ insert drive file Page D.json ⤷ insert drive file Page E.json ⤷ insert drive file Page F.json ⤷ folder transitionRouteGroups ⤷ insert drive file Route Group D.json ⤷ insert drive file Route Group E.json ⤷ insert drive file Route Group F.json ⤷ insert drive file Flow B.json folder intents ⤷ folder Intent A ⤷ folder trainingPhrases ⤷ insert drive file en.json ⤷ insert drive file en-gb.json ⤷ insert drive file en-ca.json ⤷ insert drive file Intent A.json ⤷ folder Intent B ⤷ folder trainingPhrases ⤷ insert drive file en.json ⤷ insert drive file en-gb.json ⤷ insert drive file en-ca.json ⤷ insert drive file Intent B.json folder testCases ⤷ insert drive file Test Case A.json ⤷ insert drive file Test Case B.json folder webhooks ⤷ insert drive file Webhook A.json ⤷ insert drive file Webhook B.json folder agentTransitionRouteGroups ⤷ insert drive file Agent Transition Route Group A.json ⤷ insert drive file Agent Transition Route Group B.json insert drive file agent.json Agent restore guidance When restoring an agent, you must provide a zip file as described above.
- Home Documentation AI and ML Dialogflow Dialogflow CX Reference Send feedback JSON package export format Stay organized with collections Save and categorize content based on your preferences.

