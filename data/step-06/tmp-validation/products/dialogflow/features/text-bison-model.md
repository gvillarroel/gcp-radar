---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.662Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "text-bison model"
feature_slug: "text-bison-model"
latest_feature_date: "2024-09-19"
deprecation_date: "2024-10-21"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents"
keywords:
  - "features"
  - "generative"
  - "bison"
  - "text"
  - "used"
  - "model"
---

# text-bison model

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX generative features used the text-bison model for supported agent capabilities; deprecated on 2024-10-21.

## Extended Definition

Dialogflow CX generative features used the text-bison model for supported agent capabilities; deprecated on 2024-10-21.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents](https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents)

## Supporting Pages

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Generative AI settings The following generative AI settings are available: General Generative model selection link Select the model used by generative features.
- Generative model selection Select the model used by generative features.
- Select generative model : This controls the LLM used for classification.
- Note: Some features, such as Experiments , Conversation history , BigQuery export , Analytics , and NLU model improvement require this setting to be enabled, as they rely on traffic logs.

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- Conversation datasets contain raw conversation files and their customizable metadata that can be used for model training. com. google. cloud. dialogflow. v2.
- Conversation datasets contain raw conversation files and their customizable metadata that can be used for model training. com. google. cloud. dialogflow. v2.
- Conversation datasets contain raw conversation files and their customizable metadata that can be used for model training. com. google. cloud. dialogflow. v2.
- Input Text Config Defines the language used in the input text. com. google. cloud. dialogflow. v2.

### "Conversational Agents console overview \_|\_ Dialogflow CX \_|\_ Google\

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents](https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- Agents that utilize generative features such as playbooks, data stores, generators, or generative fallback for a request are charged as generative requests.
- Users of the Dialogflow CX console that want to incorporate generative features into agents should start using the Conversational Agents console.
- The features used in each of the consoles are conceptually the same, but the detailed steps for using these features may vary.
- End user metadata : Provide contextual hint in the form of a JSON object for generative AI to better answer an end-user query.

