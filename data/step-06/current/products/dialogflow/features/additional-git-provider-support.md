---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.322Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Additional Git provider support"
feature_slug: "additional-git-provider-support"
latest_feature_date: "2025-03-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/reference/json-export"
keywords:
  - "additional"
  - "git"
  - "provider"
  - "dialogflow"
  - "cx"
  - "export"
  - "restore"
  - "now"
---

# Additional Git provider support

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX Git export and restore now supports additional Git providers.

## Extended Definition

Dialogflow CX Git export and restore now supports additional Git providers.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store)
- [https://docs.cloud.google.com/dialogflow/cx/docs/reference/json-export](https://docs.cloud.google.com/dialogflow/cx/docs/reference/json-export)

## Supporting Pages

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- Human Agent Handoff Config Defines the hand off to a live agent, typically on which external agent service provider to connect to a conversation. com. google. cloud. dialogflow. v2.
- Builder Defines the hand off to a live agent, typically on which external agent service provider to connect to a conversation. com. google. cloud. dialogflow. v2.
- Tools can be used to interact with remote APIs (e.g. fetching orders) to retrieve additional information as input to LLM. com. google. cloud. dialogflow. v2.
- Tools can be used to interact with remote APIs (e.g. fetching orders) to retrieve additional information as input to LLM. com. google. cloud. dialogflow. v2.

### Data stores \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store)
- Source ID: `site-docs-root`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- Supported regions For supported regions, see the region reference . (Restricted access) Additional data store sources Additional data store types are listed in the following table.
- Home Documentation AI and ML Dialogflow Dialogflow CX Send feedback Data stores Stay organized with collections Save and categorize content based on your preferences.
- Restricted access data store sources Google offers many additional first- and third-party data store sources as a restricted access feature.
- When you set up a third-party data store, you have the option of using either a Google identity provider or a third-party identity provider.

### JSON package export format \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/reference/json-export](https://docs.cloud.google.com/dialogflow/cx/docs/reference/json-export)
- Source ID: `site-docs-reference`
- Final score: 86
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Dialogflow Dialogflow CX Reference Send feedback JSON package export format Stay organized with collections Save and categorize content based on your preferences.
- The JSON package format is only available for export and restore of an agent, not export and restore of individual flows.
- You can export and restore agents in the JSON package file format.
- For example: folder entityTypes ⤷ folder Entity Type A ⤷ folder entities ⤷ insert drive file en.json ⤷ insert drive file en-gb.json ⤷ insert drive file en-ca.json ⤷ folder excludedPhrases ⤷ insert drive file en.json ⤷ insert drive file en-gb.json ⤷ insert drive file en-ca.json ⤷ insert drive file Entity Type A.json ⤷ folder Entity Type B ⤷ folder entities ⤷ insert drive file en.json ⤷ insert drive file en-gb.json ⤷ insert drive file en-ca.json ⤷ folder excludedPhrases ⤷ insert drive file en.json ⤷ insert drive file en-gb.json ⤷ insert drive file en-ca.json ⤷ insert drive file Entity Type B.json folder flows ⤷ folder Flow A ⤷ folder pages ⤷ insert drive file Page A.json ⤷ insert drive file Page B.json ⤷ insert drive file Page C.json ⤷ folder transitionRouteGroups ⤷ insert drive file Route Group A.json ⤷ insert drive file Route Group B.json ⤷ insert drive file Route Group C.json ⤷ insert drive file Flow A.json ⤷ folder Flow B ⤷ folder pages ⤷ insert drive file Page D.json ⤷ insert drive file Page E.json ⤷ insert drive file Page F.json ⤷ folder transitionRouteGroups ⤷ insert drive file Route Group D.json ⤷ insert drive file Route Group E.json ⤷ insert drive file Route Group F.json ⤷ insert drive file Flow B.json folder intents ⤷ folder Intent A ⤷ folder trainingPhrases ⤷ insert drive file en.json ⤷ insert drive file en-gb.json ⤷ insert drive file en-ca.json ⤷ insert drive file Intent A.json ⤷ folder Intent B ⤷ folder trainingPhrases ⤷ insert drive file en.json ⤷ insert drive file en-gb.json ⤷ insert drive file en-ca.json ⤷ insert drive file Intent B.json folder testCases ⤷ insert drive file Test Case A.json ⤷ insert drive file Test Case B.json folder webhooks ⤷ insert drive file Webhook A.json ⤷ insert drive file Webhook B.json folder agentTransitionRouteGroups ⤷ insert drive file Agent Transition Route Group A.json ⤷ insert drive file Agent Transition Route Group B.json insert drive file agent.json Agent restore guidance When restoring an agent, you must provide a zip file as described above.

