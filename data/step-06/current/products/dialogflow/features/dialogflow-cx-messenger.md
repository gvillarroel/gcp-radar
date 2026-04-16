---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.392Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Dialogflow CX Messenger"
feature_slug: "dialogflow-cx-messenger"
latest_feature_date: "2023-08-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/search-configure"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/answer-feedback"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/tutorials/deploy/host"
keywords:
  - "dialogflow"
  - "cx"
  - "messenger"
  - "redesigned"
  - "generally"
  - "available"
  - "web"
  - "messaging"
---

# Dialogflow CX Messenger

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX Messenger is the redesigned generally available web messaging integration.

## Extended Definition

Dialogflow CX Messenger is the redesigned generally available web messaging integration.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/search-configure](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/search-configure)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/answer-feedback](https://docs.cloud.google.com/dialogflow/cx/docs/concept/answer-feedback)
- [https://docs.cloud.google.com/dialogflow/cx/docs/tutorials/deploy/host](https://docs.cloud.google.com/dialogflow/cx/docs/tutorials/deploy/host)

## Supporting Pages

### Data store search configuration \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/search-configure](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/search-configure)
- Source ID: `site-docs-root`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- Go to the Session API reference Select a protocol and version for the Session reference: Protocol V3 V3beta1 REST Session resource Session resource RPC Session interface Session interface C++ SessionsClient Not available C# SessionsClient Not available Go SessionsClient Not available Java SessionsClient SessionsClient Node.js SessionsClient SessionsClient PHP Not available Not available Python SessionsClient SessionsClient Ruby Not available Not available Close Dialogflow CX Messenger configuration You can provide search configuration data to the Dialogflow CX Messenger integration.
- To apply a search spec or search config, the following snippet needs to be added to the Dialogflow CX Messenger code when embedding it into a website: <script> document.addEventListener('df-messenger-loaded', () => { const dfMessenger = document.querySelector('df-messenger'); const searchConfig = { ... } dfMessenger.setQueryParameters(searchConfig); }); </script> See the setQueryParameters method.
- You can configure data store search results using the Console , API , or Dialogflow CX Messenger integration .
- Dialogflow CX dynamic expressions Note: Dynamic expressions are available for data store tools only.

### Answer feedback \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/answer-feedback](https://docs.cloud.google.com/dialogflow/cx/docs/concept/answer-feedback)
- Source ID: `site-docs-root`
- Final score: 107
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enable feedback Before collecting answer feedback, you must enable the following settings in the general agent settings : Enable interaction logging Enable Answer Feedback Collect feedback with Dialogflow CX Messenger If you use Dialogflow CX Messenger , you can enable answer feedback collection for the chat dialog by setting the following HTML attribute : allow-feedback="all" .
- If you use Dialogflow CX Messenger , you can set up custom feedback collection by defining your custom feedback component .
- Go to the Session API reference Select a protocol and version for the Session reference: Protocol V3 V3beta1 REST Session resource Session resource RPC Session interface Session interface C++ SessionsClient Not available C# SessionsClient Not available Go SessionsClient Not available Java SessionsClient SessionsClient Node.js SessionsClient SessionsClient PHP Not available Not available Python SessionsClient SessionsClient Ruby Not available Not available Close Custom feedback data structure You can have feedback data stored in your custom data structure filling the answerFeedback.customRating field in the Sessions.submitAnswerFeedback method.
- Home Documentation AI and ML Dialogflow Dialogflow CX Send feedback Answer feedback Stay organized with collections Save and categorize content based on your preferences.

### Host your agent \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/tutorials/deploy/host](https://docs.cloud.google.com/dialogflow/cx/docs/tutorials/deploy/host)
- Source ID: `site-docs-root`
- Final score: 83
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To launch your browser and view your web service, you can open the target URL from the previous step, or run the following command: gcloud app browse Setup Dialogflow Messenger Note: Make sure billing is enabled on your project before testing the integration.
- To set up unauthenticated access to your Dialogflow CX Messenger agent: Go to the Dialogflow CX console .
- The Dialogflow Messenger integration is used for an agent user interface.
- Click Connect on Dialogflow CX Messenger .

