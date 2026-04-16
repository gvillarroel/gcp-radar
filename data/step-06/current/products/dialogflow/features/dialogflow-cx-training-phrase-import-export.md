---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.385Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Dialogflow CX training phrase import/export"
feature_slug: "dialogflow-cx-training-phrase-import-export"
latest_feature_date: "2023-09-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-custom"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/reference/json-export"
keywords:
  - "dialogflow"
  - "cx"
  - "training"
  - "phrase"
  - "import"
  - "export"
  - "supports"
  - "importing"
---

# Dialogflow CX training phrase import/export

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX supports importing and exporting training phrases.

## Extended Definition

Dialogflow CX supports importing and exporting training phrases.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-custom](https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-custom)
- [https://docs.cloud.google.com/dialogflow/cx/docs/reference/json-export](https://docs.cloud.google.com/dialogflow/cx/docs/reference/json-export)

## Supporting Pages

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- Input Config Represents the configuration of importing a set of conversation files in Google Cloud Storage. com. google. cloud. dialogflow. v2.
- Therefore, we provide a resource view that does not return training phrases in the response by default. com. google. cloud. dialogflow. v2.
- Builder Represents the configuration of importing a set of conversation files in Google Cloud Storage. com. google. cloud. dialogflow. v2.
- Import Document Template The template used for importing documents. com. google. cloud. dialogflow. v2.

### Custom entities \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-custom](https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-custom)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: folder entityTypes ⤷ folder Entity Type A ⤷ folder entities ⤷ insert drive file en.json ⤷ insert drive file en-gb.json ⤷ insert drive file en-ca.json ⤷ folder excludedPhrases ⤷ insert drive file en.json ⤷ insert drive file en-gb.json ⤷ insert drive file en-ca.json ⤷ insert drive file Entity Type A.json ⤷ folder Entity Type B ⤷ folder entities ⤷ insert drive file en.json ⤷ insert drive file en-gb.json ⤷ insert drive file en-ca.json ⤷ folder excludedPhrases ⤷ insert drive file en.json ⤷ insert drive file en-gb.json ⤷ insert drive file en-ca.json ⤷ insert drive file Entity Type B.json When importing entity types, there may be merge conflicts when the display name of an entity type in your existing agent matches that of an imported entity type.
- Export and import custom entities Preview This product or feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Note: When building your agent, it's best to define your entities prior to adding training phrases to your intents.
- The file format used for importing entity entries is the same as the format used for importing entity types.

### JSON package export format \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/reference/json-export](https://docs.cloud.google.com/dialogflow/cx/docs/reference/json-export)
- Source ID: `site-docs-reference`
- Final score: 123
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: folder entityTypes ⤷ folder Entity Type A ⤷ folder entities ⤷ insert drive file en.json ⤷ insert drive file en-gb.json ⤷ insert drive file en-ca.json ⤷ folder excludedPhrases ⤷ insert drive file en.json ⤷ insert drive file en-gb.json ⤷ insert drive file en-ca.json ⤷ insert drive file Entity Type A.json ⤷ folder Entity Type B ⤷ folder entities ⤷ insert drive file en.json ⤷ insert drive file en-gb.json ⤷ insert drive file en-ca.json ⤷ folder excludedPhrases ⤷ insert drive file en.json ⤷ insert drive file en-gb.json ⤷ insert drive file en-ca.json ⤷ insert drive file Entity Type B.json folder flows ⤷ folder Flow A ⤷ folder pages ⤷ insert drive file Page A.json ⤷ insert drive file Page B.json ⤷ insert drive file Page C.json ⤷ folder transitionRouteGroups ⤷ insert drive file Route Group A.json ⤷ insert drive file Route Group B.json ⤷ insert drive file Route Group C.json ⤷ insert drive file Flow A.json ⤷ folder Flow B ⤷ folder pages ⤷ insert drive file Page D.json ⤷ insert drive file Page E.json ⤷ insert drive file Page F.json ⤷ folder transitionRouteGroups ⤷ insert drive file Route Group D.json ⤷ insert drive file Route Group E.json ⤷ insert drive file Route Group F.json ⤷ insert drive file Flow B.json folder intents ⤷ folder Intent A ⤷ folder trainingPhrases ⤷ insert drive file en.json ⤷ insert drive file en-gb.json ⤷ insert drive file en-ca.json ⤷ insert drive file Intent A.json ⤷ folder Intent B ⤷ folder trainingPhrases ⤷ insert drive file en.json ⤷ insert drive file en-gb.json ⤷ insert drive file en-ca.json ⤷ insert drive file Intent B.json folder testCases ⤷ insert drive file Test Case A.json ⤷ insert drive file Test Case B.json folder webhooks ⤷ insert drive file Webhook A.json ⤷ insert drive file Webhook B.json folder agentTransitionRouteGroups ⤷ insert drive file Agent Transition Route Group A.json ⤷ insert drive file Agent Transition Route Group B.json insert drive file agent.json Agent restore guidance When restoring an agent, you must provide a zip file as described above.
- The file contains flow-specific data not found in other files. intents : This directory contains your intent data. <intent name> : One or more of these directories exist, and the directory names correspond to intent display names. trainingPhrases : This directory contains training phrase data. <language tag>.json : One or more of these files exist, and the file names correspond to language tags.
- Home Documentation AI and ML Dialogflow Dialogflow CX Reference Send feedback JSON package export format Stay organized with collections Save and categorize content based on your preferences.
- Each file contains language-specific training phrases for the intent. <intent name>.json : This file name corresponds to an intent display name.

