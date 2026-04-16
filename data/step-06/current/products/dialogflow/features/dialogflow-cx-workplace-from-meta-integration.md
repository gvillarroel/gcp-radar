---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.370Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Dialogflow CX Workplace from Meta integration"
feature_slug: "dialogflow-cx-workplace-from-meta-integration"
latest_feature_date: "2023-12-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/search-configure"
keywords:
  - "dialogflow"
  - "cx"
  - "workplace"
  - "meta"
  - "integration"
  - "provides"
---

# Dialogflow CX Workplace from Meta integration

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX provides an integration for Workplace from Meta.

## Extended Definition

Dialogflow CX provides an integration for Workplace from Meta.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/search-configure](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/search-configure)

## Supporting Pages

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- Create Conversation Model Evaluation Operation Metadata Metadata for a ConversationModels.CreateConversationModelEvaluation operation. com. google. cloud. dialogflow. v2.
- Clear Suggestion Feature Config Operation Metadata Metadata for a ConversationProfiles.ClearSuggestionFeatureConfig operation. com. google. cloud. dialogflow. v2.
- Set Suggestion Feature Config Operation Metadata Metadata for a ConversationProfiles.SetSuggestionFeatureConfig operation. com. google. cloud. dialogflow. v2.
- Conversation datasets contain raw conversation files and their customizable metadata that can be used for model training. com. google. cloud. dialogflow. v2.

### Data store tools \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler)
- Source ID: `site-docs-root`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- The following is a example of a userMetadata parameter value to refine search results relevant to a specific: "userMetadata": { "favoriteColor": "blue", ... } The fallback parameter provides an answer that the data store tool should respond with if there is no valid summarized answer for the query.
- When creating data store tool examples, the tool input parameter requestBody provides three optional inputs together with the required query string - a filter string, a userMetadata structured object, and a fallback string.
- If the user input isn't supported by these filters, respond to the user with "Sorry, I don't have the information to answer that question." The userMetadata parameter provides information about the end-user.
- Deploy your agent There are many ways to deploy your agent: The simplest option is to use an integration , which provides a user interface for your agent.

### Data store search configuration \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/search-configure](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/search-configure)
- Source ID: `site-docs-root`
- Final score: 61
- Re-rank relevance: N/A

Evidence snippets:
- Go to the Session API reference Select a protocol and version for the Session reference: Protocol V3 V3beta1 REST Session resource Session resource RPC Session interface Session interface C++ SessionsClient Not available C# SessionsClient Not available Go SessionsClient Not available Java SessionsClient SessionsClient Node.js SessionsClient SessionsClient PHP Not available Not available Python SessionsClient SessionsClient Ruby Not available Not available Close Dialogflow CX Messenger configuration You can provide search configuration data to the Dialogflow CX Messenger integration.
- You can use Dialogflow CX expressions to make the results dynamic, such as $session.params.YOUR PARAM NAME or $request.end-user-metadata.YOUR KEY . boost : (Number) A value between -1.0 and 1.0 that determines the strength of the boost.
- You can use Dialogflow CX expressions within this string to make the results dynamic, such as $session.params.YOUR PARAM NAME or $request.end-user-metadata.YOUR KEY .
- You can configure data store search results using the Console , API , or Dialogflow CX Messenger integration .

