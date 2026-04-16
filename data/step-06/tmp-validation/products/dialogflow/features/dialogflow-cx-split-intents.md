---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.724Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Dialogflow CX split intents"
feature_slug: "dialogflow-cx-split-intents"
latest_feature_date: "2023-08-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
keywords:
  - "split"
  - "intents"
  - "feature"
  - "provides"
---

# Dialogflow CX split intents

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX provides a feature to split intents.

## Extended Definition

Dialogflow CX provides a feature to split intents.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)

## Supporting Pages

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- An example consent requesting flow could be: first ask the user if they would like to keep end-user input, and match the response with two intents, one is "yes intent" and the other is "no intent".
- An example consent requesting flow could be: first ask the user if they would like to keep end-user input, and match the response with two intents, one is "yes intent" and the other is "no intent".
- Note: Some features, such as Experiments , Conversation history , BigQuery export , Analytics , and NLU model improvement require this setting to be enabled, as they rely on traffic logs.
- Note: Some features, such as Experiments , Conversation history , BigQuery export , Analytics , and NLU model improvement require this setting to be enabled, as they rely on traffic logs.

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- Clear Suggestion Feature Config Operation Metadata Metadata for a ConversationProfiles.ClearSuggestionFeatureConfig operation. com. google. cloud. dialogflow. v2.
- Set Suggestion Feature Config Operation Metadata Metadata for a ConversationProfiles.SetSuggestionFeatureConfig operation. com. google. cloud. dialogflow. v2.
- Clear Suggestion Feature Config Request The request message for ConversationProfiles.ClearSuggestionFeatureConfig . com. google. cloud. dialogflow. v2.
- Set Suggestion Feature Config Request The request message for ConversationProfiles.SetSuggestionFeatureConfig . com. google. cloud. dialogflow. v2.

### "General agent design best practices \_|\_ Dialogflow CX \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design)
- Source ID: `site-docs-root`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- Handling end-user input This section provides guidelines for intents and training phrases, so your agent can optimally handle and process end-user input.
- For example, when confirming an order, you may want to have a specialized order.confirmation.yes intent with training phrases like: the order looks good to me I accept this order And, a specialized order.confirmation.no intent with training phrases like: I do not want this order I do not accept this order When your order confirmation page is active, intent routes for all four of these intents should be in scope.
- A confirmation.yes intent could have training phrases like: yes yeah yep okay yes I do you bet absolutely yes please A confirmation.no intent could have training phrases like: no nah nope no way not for me absolutely not no thank you These reusable confirmation intents can be used in many scenarios for your agent.
- In some cases, this is desired behavior, because you might define some intents that should be matched more often than others, because they correspond to end-user inputs more frequently observed in live traffic.

