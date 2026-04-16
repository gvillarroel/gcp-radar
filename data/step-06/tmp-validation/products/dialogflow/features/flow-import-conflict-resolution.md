---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.738Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Flow import conflict resolution"
feature_slug: "flow-import-conflict-resolution"
latest_feature_date: "2023-02-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/flow"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-options"
keywords:
  - "resolution"
  - "conflict"
  - "options"
  - "import"
  - "provides"
  - "flow"
---

# Flow import conflict resolution

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX provides flow import options to resolve resource conflicts during import.

## Extended Definition

Dialogflow CX provides flow import options to resolve resource conflicts during import.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/flow](https://docs.cloud.google.com/dialogflow/cx/docs/concept/flow)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-options](https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-options)

## Supporting Pages

### Flows \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/flow](https://docs.cloud.google.com/dialogflow/cx/docs/concept/flow)
- Source ID: `site-docs-root`
- Final score: 149
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If the target agent has any global resources with the same display names found in the source agent, Dialogflow CX provides a summary of these resources, along with three options to resolve the conflicts for these resources: Replace existing resources : Source agent resources will overwrite target agent resources.
- Go to the Flow API reference Select a protocol and version for the Flow reference: Protocol V3 V3beta1 REST Flow resource Flow resource RPC Flow interface Flow interface C++ FlowsClient Not available C# FlowsClient Not available Go FlowsClient Not available Java FlowsClient FlowsClient Node.js FlowsClient FlowsClient PHP Not available Not available Python FlowsClient FlowsClient Ruby Not available Not available Close Import a flow When you import a flow from a source agent to a target agent, the global resources referenced by the flow (intents, entities, webhooks) are imported along with the flow-specific data.
- Go to the Flow API reference Select a protocol and version for the Flow reference: Protocol V3 V3beta1 REST Flow resource Flow resource RPC Flow interface Flow interface C++ FlowsClient Not available C# FlowsClient Not available Go FlowsClient Not available Java FlowsClient FlowsClient Node.js FlowsClient FlowsClient PHP Not available Not available Python FlowsClient FlowsClient Ruby Not available Not available Close Export a flow You can export a flow in two ways: Data export : This exports your flow as raw data, so it can be imported to any agent.
- You can export a flow with the following options: Include referenced flows : Exports the target flow and all levels of referenced flows.

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- The data inside ConversationDataset can not be changed after ImportConversationData finishes (and calling ImportConversationData on a com. google. cloud. dialogflow. v2.
- The data inside ConversationDataset can not be changed after ImportConversationData finishes (and calling ImportConversationData on a com. google. cloud. dialogflow. v2.
- Import Conversation Data Operation Response Response used for ConversationDatasets.ImportConversationData long running operation. com. google. cloud. dialogflow. v2.
- Import Conversation Data Operation Metadata Metadata for a ConversationDatasets.ImportConversationData operation. com. google. cloud. dialogflow. v2.

### Entity options \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-options](https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-options)
- Source ID: `site-docs-root`
- Final score: 129
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation AI and ML Dialogflow Dialogflow CX Send feedback Entity options Stay organized with collections Save and categorize content based on your preferences.
- To access entity options data: Open the Dialogflow CX console .
- You can create different kinds of entities, depending on the options selected: Map entity List entity Composite entity (a special kind of list entity) Regexp entity There are other options that do not determine the kind of entity, but do affect the behavior of entity matching: Automated expansion Fuzzy matching Redact in log Entity exclusions This document describes each of these options.
- See the following options for any existing entities (some of these may only be visible after expanding Advanced options ): Entities only (no synonyms) Regexp entities Automatically add entities Fuzzy matching Redact in log Entity exclusions If you are building an agent using the API instead of the console, see the EntityType type.

