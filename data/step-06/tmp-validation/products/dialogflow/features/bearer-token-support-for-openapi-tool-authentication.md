---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.672Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Bearer token support for OpenAPI tool authentication"
feature_slug: "bearer-token-support-for-openapi-tool-authentication"
latest_feature_date: "2024-05-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents"
keywords:
  - "bearer"
  - "authentication"
  - "openapi"
  - "token"
  - "tool"
  - "vertex"
  - "agents"
---

# Bearer token support for OpenAPI tool authentication

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Vertex AI Agents OpenAPI tool authentication supports bearer tokens.

## Extended Definition

Vertex AI Agents OpenAPI tool authentication supports bearer tokens.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents](https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents)

## Supporting Pages

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 160
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Bearer Token Config Config for authentication using bearer token. com. google. cloud. dialogflow. v2.
- Builder Config for authentication using bearer token. com. google. cloud. dialogflow. v2.
- Open Api Tool An OpenAPI tool is a way to provide the Tool specifications in the Open API schema format. com. google. cloud. dialogflow. v2.
- Builder An OpenAPI tool is a way to provide the Tool specifications in the Open API schema format. com. google. cloud. dialogflow. v2.

### "Conversational Agents console overview \_|\_ Dialogflow CX \_|\_ Google\

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents](https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents)
- Source ID: `site-docs-root`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- Console compatibility Agents previously built with the Dialogflow CX console or the Vertex AI Agent Builder console can be seamlessly accessed by the Conversational Agents console.
- The Conversational Agents console is a new console that includes features from both the Dialogflow CX console and the Vertex AI Agent Builder console.
- All users of the Vertex AI Agent Builder console should start using the Conversational Agents console.
- Home Documentation AI and ML Dialogflow Dialogflow CX Send feedback Conversational Agents console overview Stay organized with collections Save and categorize content based on your preferences.

### Data store tools \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler)
- Source ID: `site-docs-root`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- See the reference documentation for details. { "toolUse" : { "tool" : "projects/PROJECT ID/locations/LOCATION ID/agents/AGENT ID/tools/TOOL ID" , "action" : "TOOL DISPLAY NAME" , "inputParameters" : [ { "name" : "TOOL DISPLAY NAME input" , "value" : { "query" : "QUERY" } } ], "outputParameters" : [ { "name" : "TOOL DISPLAY NAME output" , "value" : { "answer" : "ANSWER" , "snippets" : [ { "title" : "TITLE" , "text" : "TEXT FROM DATASTORE" , "uri" : "URI OF DATASTORE" } ] } } ] } } (Playbooks-based agents only) Data store tool examples Note: Examples work with playbooks-based agents only.
- Choose the data store that you would like to add to the tool. (Optional) To create a new data store in the Vertex AI Agent Builder console, click Create new data store .
- There are no snippets in the tool output, which can help to reduce latency and use of input token limits. "fallback": "I'm sorry I cannot help you with that.
- Create a data store tool Open the Conversational Agents console and choose a Google Cloud project.

