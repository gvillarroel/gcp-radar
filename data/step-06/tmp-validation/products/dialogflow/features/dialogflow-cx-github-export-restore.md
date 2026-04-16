---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.727Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Dialogflow CX GitHub export/restore"
feature_slug: "dialogflow-cx-github-export-restore"
latest_feature_date: "2023-07-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/reference/json-export"
keywords:
  - "restoring"
  - "github"
  - "exporting"
  - "restore"
  - "export"
  - "supports"
---

# Dialogflow CX GitHub export/restore

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX supports exporting and restoring agents through GitHub.

## Extended Definition

Dialogflow CX supports exporting and restoring agents through GitHub.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent)
- [https://docs.cloud.google.com/dialogflow/cx/docs/reference/json-export](https://docs.cloud.google.com/dialogflow/cx/docs/reference/json-export)

## Supporting Pages

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- 4.94.0 (latest) 4.93.0 4.91.0 4.89.0 4.88.0 4.87.0 4.86.0 4.84.0 4.82.0 4.81.0 4.80.0 4.79.0 4.78.0 4.76.0 4.74.0 4.73.0 4.70.0 4.69.0 4.68.0 4.66.0 4.65.0 4.64.0 4.63.0 4.62.0 4.61.0 4.60.0 4.59.0 4.58.0 4.57.0 4.55.0 4.54.0 4.53.0 4.52.0 4.51.0 4.50.0 4.49.0 4.48.0 4.47.0 4.46.0 4.45.0 4.43.0 4.42.0 4.41.0 4.40.0 4.39.0 4.38.0 4.37.0 4.36.0 4.35.0 4.34.0 4.33.0 4.30.0 4.29.0 4.28.0 4.27.0 4.26.0 4.25.0 4.24.0 4.23.0 4.22.0 4.21.0 4.20.0 4.19.0 4.18.0 4.17.0 4.15.0 4.14.0 4.13.0 4.12.0 4.11.0 4.10.0 4.9.1 4.8.6 4.7.5 4.6.0 4.5.11 4.4.0 4.3.1 GitHub Repository Client Classes Client classes are the main entry point to using a package.
- Export Document Request Request message for Documents.ExportDocument . com. google. cloud. dialogflow. v2.
- Export Agent Response The response message for Agents.ExportAgent . com. google. cloud. dialogflow. v2.
- Restore Agent Request The request message for Agents.RestoreAgent . com. google. cloud. dialogflow. v2.

### Agents \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent)
- Source ID: `site-docs-root`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- If you use GitHub, also see the GitHub export/restore guide .
- Go to the Agent API reference Select a protocol and version for the Agent reference: Protocol V3 V3beta1 REST Agent resource Agent resource RPC Agent interface Agent interface C++ AgentsClient Not available C# AgentsClient Not available Go AgentsClient Not available Java AgentsClient AgentsClient Node.js AgentsClient AgentsClient PHP Not available Not available Python AgentsClient AgentsClient Ruby Not available Not available Close If the agent size exceeds the maximum limit , use the Cloud Storage option for agent export and restore.
- Export and restore an agent Warning: We will no longer export raw value credentials for OpenAPI Tools and Webhooks, starting Aug 15, 2025.
- You can export an agent to a file, and restore an agent with that file.

### JSON package export format \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/reference/json-export](https://docs.cloud.google.com/dialogflow/cx/docs/reference/json-export)
- Source ID: `site-docs-reference`
- Final score: 90
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example: folder entityTypes ⤷ folder Entity Type A ⤷ folder entities ⤷ insert drive file en.json ⤷ insert drive file en-gb.json ⤷ insert drive file en-ca.json ⤷ folder excludedPhrases ⤷ insert drive file en.json ⤷ insert drive file en-gb.json ⤷ insert drive file en-ca.json ⤷ insert drive file Entity Type A.json ⤷ folder Entity Type B ⤷ folder entities ⤷ insert drive file en.json ⤷ insert drive file en-gb.json ⤷ insert drive file en-ca.json ⤷ folder excludedPhrases ⤷ insert drive file en.json ⤷ insert drive file en-gb.json ⤷ insert drive file en-ca.json ⤷ insert drive file Entity Type B.json folder flows ⤷ folder Flow A ⤷ folder pages ⤷ insert drive file Page A.json ⤷ insert drive file Page B.json ⤷ insert drive file Page C.json ⤷ folder transitionRouteGroups ⤷ insert drive file Route Group A.json ⤷ insert drive file Route Group B.json ⤷ insert drive file Route Group C.json ⤷ insert drive file Flow A.json ⤷ folder Flow B ⤷ folder pages ⤷ insert drive file Page D.json ⤷ insert drive file Page E.json ⤷ insert drive file Page F.json ⤷ folder transitionRouteGroups ⤷ insert drive file Route Group D.json ⤷ insert drive file Route Group E.json ⤷ insert drive file Route Group F.json ⤷ insert drive file Flow B.json folder intents ⤷ folder Intent A ⤷ folder trainingPhrases ⤷ insert drive file en.json ⤷ insert drive file en-gb.json ⤷ insert drive file en-ca.json ⤷ insert drive file Intent A.json ⤷ folder Intent B ⤷ folder trainingPhrases ⤷ insert drive file en.json ⤷ insert drive file en-gb.json ⤷ insert drive file en-ca.json ⤷ insert drive file Intent B.json folder testCases ⤷ insert drive file Test Case A.json ⤷ insert drive file Test Case B.json folder webhooks ⤷ insert drive file Webhook A.json ⤷ insert drive file Webhook B.json folder agentTransitionRouteGroups ⤷ insert drive file Agent Transition Route Group A.json ⤷ insert drive file Agent Transition Route Group B.json insert drive file agent.json Agent restore guidance When restoring an agent, you must provide a zip file as described above.
- The JSON package format is only available for export and restore of an agent, not export and restore of individual flows.
- You can export and restore agents in the JSON package file format.
- Home Documentation AI and ML Dialogflow Dialogflow CX Reference Send feedback JSON package export format Stay organized with collections Save and categorize content based on your preferences.

