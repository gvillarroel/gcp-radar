---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.324Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Connector tools"
feature_slug: "connector-tools"
latest_feature_date: "2025-03-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.Agent.Builder"
keywords:
  - "connector"
  - "tools"
  - "can"
  - "used"
  - "dialogflow"
  - "cx"
  - "playbooks"
  - "connect"
---

# Connector tools

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Connector tools can be used in Dialogflow CX playbooks to connect with external systems.

## Extended Definition

Connector tools can be used in Dialogflow CX playbooks to connect with external systems.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.Agent.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.Agent.Builder)

## Supporting Pages

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- Connector Tool A ConnectorTool enabling using Integration Connectors Connections as tools. com. google. cloud. dialogflow. v2.
- Builder A ConnectorTool enabling using Integration Connectors Connections as tools. com. google. cloud. dialogflow. v2.
- Tools can be used to interact with remote APIs (e.g. fetching orders) to retrieve additional information as input to LLM. com. google. cloud. dialogflow. v2.
- Tools can be used to interact with remote APIs (e.g. fetching orders) to retrieve additional information as input to LLM. com. google. cloud. dialogflow. v2.

### "Class Agent.Builder (4.94.0) \_|\_ Java client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.Agent.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.Agent.Builder)
- Source ID: `site-java-reference`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- However, bots connectors and webhook calls will follow the specified API version. .google.cloud.dialogflow.v2.Agent.ApiVersion api version = 14 [(.google.api.field behavior) = OPTIONAL]; Returns Type Description int The enum numeric value on the wire for apiVersion. getAvatarUri() public String getAvatarUri () Optional.
- However, bots connectors and webhook calls will follow the specified API version. .google.cloud.dialogflow.v2.Agent.ApiVersion api version = 14 [(.google.api.field behavior) = OPTIONAL]; Returns Type Description Agent.ApiVersion The apiVersion. getApiVersionValue() public int getApiVersionValue () Optional.
- However, bots connectors and webhook calls will follow the specified API version. .google.cloud.dialogflow.v2.Agent.ApiVersion api version = 14 [(.google.api.field behavior) = OPTIONAL]; Returns Type Description Agent.Builder This builder for chaining. clearAvatarUri() public Agent .
- However, bots connectors and webhook calls will follow the specified API version. .google.cloud.dialogflow.v2.Agent.ApiVersion api version = 14 [(.google.api.field behavior) = OPTIONAL]; Parameter Name Description value int The enum numeric value on the wire for apiVersion to set.

### Data stores \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store)
- Source ID: `site-docs-root`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- Each connector can contain multiple data stores, which are stored as entities in the Dialogflow CX system.
- Set up a third-party data store using a connector This section outlines the process of setting up a data store using third-party data.
- Note: We only support user accounts for authentication; service accounts are not supported for connectors.
- Data stores are used by data store tools to find answers for end-user's questions from your data.

