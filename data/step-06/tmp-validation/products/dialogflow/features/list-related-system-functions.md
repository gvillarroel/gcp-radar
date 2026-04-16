---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.751Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "List-related system functions"
feature_slug: "list-related-system-functions"
latest_feature_date: "2022-04-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/reference/code-block-system-library"
keywords:
  - "list"
  - "including"
  - "related"
  - "functions"
  - "provides"
  - "system"
---

# List-related system functions

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX provides list-related system functions including APPEND, GET, and REMOVE.

## Extended Definition

Dialogflow CX provides list-related system functions including APPEND, GET, and REMOVE.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design)
- [https://docs.cloud.google.com/dialogflow/cx/docs/reference/code-block-system-library](https://docs.cloud.google.com/dialogflow/cx/docs/reference/code-block-system-library)

## Supporting Pages

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- Automated expansion allows an agent to recognize values that have not been explicitly listed in the entity (for example, new kinds of shopping list items). com. google. cloud. dialogflow. v2.
- List Conversation Model Evaluations Response The response message for ConversationModels.ListConversationModelEvaluations com. google. cloud. dialogflow. v2.
- List Conversation Model Evaluations Request The request message for ConversationModels.ListConversationModelEvaluations com. google. cloud. dialogflow. v2.
- List Conversation Datasets Response The response message for ConversationDatasets.ListConversationDatasets . com. google. cloud. dialogflow. v2.

### "General agent design best practices \_|\_ Dialogflow CX \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design)
- Source ID: `site-docs-root`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- The following lists the conversation control granularity of agent resources in increasing granularity order: Agents (one agent handles all conversations) Flows (one flow handles one or more related conversation topics) Pages (one page handles one or more related conversation turns) Routes (one route handles a user intent or condition check) Intent parameters versus form parameters The main way in which your system gets structured data from the end-user is with parameters .
- For example, the following table shows good and bad ways to annotate with the @sys.date system entity: Good Bad September 7th departure September 7th departure Leaving on July 4 Leaving on July 4 Use semantically meaningful annotations for system entities The semantic meaning of a training phrase part selected for an annotation can be affected by the rest of the text in a training phrase.
- For example, you could combine the following topics to a single "Get balance" flow: Get checking balance Get savings balance Get mortgage balance Get credit balance If your agent design has too many pages per flow, combine related pages and make use of many routes per page.
- For example: Annotated training phrase Semantic meaning of annotated text I am 7 years old A person's age The contract is valid for 7 years A time duration Dialogflow CX's machine learning models consider semantic meaning when matching system entities.

### Code block system library \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/reference/code-block-system-library](https://docs.cloud.google.com/dialogflow/cx/docs/reference/code-block-system-library)
- Source ID: `site-docs-reference`
- Final score: 109
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Properties: user utterances: List of all user utterances in the history as a list of strings. last user utterance: The last user utterance in history as a string or None. agent utterances: The list of all agent utterances in the history as a list of strings. last agent utterance: The last agent utterance in the history as a string or None.
- If failed, only "diagnostic info". generator output = tools . generators . my test generator ({ "param1" : "value1" , "param2" : "$session.params.foo" }) return generator output . get ( "response" ) Global functions add override Override the next action to be selected.
- Importing libraries You can import the following popular libraries globally or inside functions: grpcio==1.64.1 grpcio-tools==1.64.1 protobuf==5.27.1 Constants PRECEDING CONVERSATION SUMMARY The preceding conversation history playbook input parameter key.
- Home Documentation AI and ML Dialogflow Dialogflow CX Reference Send feedback Code block system library Stay organized with collections Save and categorize content based on your preferences.

