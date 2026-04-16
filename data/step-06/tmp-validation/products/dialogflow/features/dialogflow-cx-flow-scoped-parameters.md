---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.729Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Dialogflow CX flow-scoped parameters"
feature_slug: "dialogflow-cx-flow-scoped-parameters"
latest_feature_date: "2023-06-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
  - "https://docs.cloud.google.com/dialogflow/docs/intents-actions-parameters"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/flow"
keywords:
  - "scoped"
  - "parameters"
  - "supports"
  - "flow"
---

# Dialogflow CX flow-scoped parameters

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX supports parameters scoped to a flow.

## Extended Definition

Dialogflow CX supports parameters scoped to a flow.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- [https://docs.cloud.google.com/dialogflow/docs/intents-actions-parameters](https://docs.cloud.google.com/dialogflow/docs/intents-actions-parameters)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/flow](https://docs.cloud.google.com/dialogflow/cx/docs/concept/flow)

## Supporting Pages

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

### Actions and parameters \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/docs/intents-actions-parameters](https://docs.cloud.google.com/dialogflow/docs/intents-actions-parameters)
- Source ID: `site-docs-root-2`
- Final score: 114
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When an intent is matched at runtime, the Dialogflow agent continues collecting information from the end-user until the end-user has provided data for each of the required parameters.
- Home Documentation AI and ML Dialogflow Dialogflow ES Send feedback Actions and parameters Stay organized with collections Save and categorize content based on your preferences.
- Parameters When an intent is matched at runtime, Dialogflow provides the extracted values from the end-user expression as parameters .
- To access actions and parameters data: Go to the Dialogflow ES console .

### Flows \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/flow](https://docs.cloud.google.com/dialogflow/cx/docs/concept/flow)
- Source ID: `site-docs-root`
- Final score: 112
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Input parameters : Parameters from the task playbook that are made available to the flow.
- Return parameters : Parameters that the flow returns to a task playbook.
- Go to the Flow API reference Select a protocol and version for the Flow reference: Protocol V3 V3beta1 REST Flow resource Flow resource RPC Flow interface Flow interface C++ FlowsClient Not available C# FlowsClient Not available Go FlowsClient Not available Java FlowsClient FlowsClient Node.js FlowsClient FlowsClient PHP Not available Not available Python FlowsClient FlowsClient Ruby Not available Not available Close Previous arrow back Flow-based agent basics Next Pages arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Go to the Flow API reference Select a protocol and version for the Flow reference: Protocol V3 V3beta1 REST Flow resource Flow resource RPC Flow interface Flow interface C++ FlowsClient Not available C# FlowsClient Not available Go FlowsClient Not available Java FlowsClient FlowsClient Node.js FlowsClient FlowsClient PHP Not available Not available Python FlowsClient FlowsClient Ruby Not available Not available Close Import a flow When you import a flow from a source agent to a target agent, the global resources referenced by the flow (intents, entities, webhooks) are imported along with the flow-specific data.

