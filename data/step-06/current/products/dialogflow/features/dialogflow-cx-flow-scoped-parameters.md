---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.408Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Dialogflow CX flow-scoped parameters"
feature_slug: "dialogflow-cx-flow-scoped-parameters"
latest_feature_date: "2023-06-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/docs/intents-actions-parameters"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/flow"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
keywords:
  - "dialogflow"
  - "cx"
  - "flow"
  - "scoped"
  - "parameters"
  - "supports"
---

# Dialogflow CX flow-scoped parameters

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX supports parameters scoped to a flow.

## Extended Definition

Dialogflow CX supports parameters scoped to a flow.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/docs/intents-actions-parameters](https://docs.cloud.google.com/dialogflow/docs/intents-actions-parameters)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/flow](https://docs.cloud.google.com/dialogflow/cx/docs/concept/flow)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)

## Supporting Pages

### Actions and parameters \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/docs/intents-actions-parameters](https://docs.cloud.google.com/dialogflow/docs/intents-actions-parameters)
- Source ID: `site-docs-root-2`
- Final score: 126
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When an intent is matched at runtime, the Dialogflow agent continues collecting information from the end-user until the end-user has provided data for each of the required parameters.
- Home Documentation AI and ML Dialogflow Dialogflow ES Send feedback Actions and parameters Stay organized with collections Save and categorize content based on your preferences.
- Parameters When an intent is matched at runtime, Dialogflow provides the extracted values from the end-user expression as parameters .
- To access actions and parameters data: Go to the Dialogflow ES console .

### Flows \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/flow](https://docs.cloud.google.com/dialogflow/cx/docs/concept/flow)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Go to the Flow API reference Select a protocol and version for the Flow reference: Protocol V3 V3beta1 REST Flow resource Flow resource RPC Flow interface Flow interface C++ FlowsClient Not available C# FlowsClient Not available Go FlowsClient Not available Java FlowsClient FlowsClient Node.js FlowsClient FlowsClient PHP Not available Not available Python FlowsClient FlowsClient Ruby Not available Not available Close Flow data To access a flow's data: Console Open the Dialogflow CX console .
- Go to the Flow API reference Select a protocol and version for the Flow reference: Protocol V3 V3beta1 REST Flow resource Flow resource RPC Flow interface Flow interface C++ FlowsClient Not available C# FlowsClient Not available Go FlowsClient Not available Java FlowsClient FlowsClient Node.js FlowsClient FlowsClient PHP Not available Not available Python FlowsClient FlowsClient Ruby Not available Not available Close Create a flow To create a flow: Console Open the Dialogflow CX console .
- Go to the Flow API reference Select a protocol and version for the Flow reference: Protocol V3 V3beta1 REST Flow resource Flow resource RPC Flow interface Flow interface C++ FlowsClient Not available C# FlowsClient Not available Go FlowsClient Not available Java FlowsClient FlowsClient Node.js FlowsClient FlowsClient PHP Not available Not available Python FlowsClient FlowsClient Ruby Not available Not available Close Delete a flow To delete a flow: Console Open the Dialogflow CX console .
- Go to the Flow API reference Select a protocol and version for the Flow reference: Protocol V3 V3beta1 REST Flow resource Flow resource RPC Flow interface Flow interface C++ FlowsClient Not available C# FlowsClient Not available Go FlowsClient Not available Java FlowsClient FlowsClient Node.js FlowsClient FlowsClient PHP Not available Not available Python FlowsClient FlowsClient Ruby Not available Not available Close Train a flow To train a flow: Console Open the Dialogflow CX console .

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- For instance, input <event: { name: "welcome event", parameters: { name: "Sam" } }> can trigger a personalized welcome response. com. google. cloud. dialogflow. v2.
- For instance, input <event: { name: "welcome event", parameters: { name: "Sam" } }> can trigger a personalized welcome response. com. google. cloud. dialogflow. v2.
- Dtmf Parameters The message in the response that indicates the parameters of DTMF. com. google. cloud. dialogflow. v2.
- Builder The message in the response that indicates the parameters of DTMF. com. google. cloud. dialogflow. v2.

