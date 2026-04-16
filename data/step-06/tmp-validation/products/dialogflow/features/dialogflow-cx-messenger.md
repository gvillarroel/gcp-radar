---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.721Z"
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
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/call-companion"
keywords:
  - "redesigned"
  - "messaging"
  - "messenger"
  - "generally"
  - "available"
---

# Dialogflow CX Messenger

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX Messenger is the redesigned generally available web messaging integration.

## Extended Definition

Dialogflow CX Messenger is the redesigned generally available web messaging integration.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/search-configure](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/search-configure)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/answer-feedback](https://docs.cloud.google.com/dialogflow/cx/docs/concept/answer-feedback)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/call-companion](https://docs.cloud.google.com/dialogflow/cx/docs/concept/call-companion)

## Supporting Pages

### Data store search configuration \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/search-configure](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/search-configure)
- Source ID: `site-docs-root`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- Go to the Session API reference Select a protocol and version for the Session reference: Protocol V3 V3beta1 REST Session resource Session resource RPC Session interface Session interface C++ SessionsClient Not available C# SessionsClient Not available Go SessionsClient Not available Java SessionsClient SessionsClient Node.js SessionsClient SessionsClient PHP Not available Not available Python SessionsClient SessionsClient Ruby Not available Not available Close Dialogflow CX Messenger configuration You can provide search configuration data to the Dialogflow CX Messenger integration.
- To apply a search spec or search config, the following snippet needs to be added to the Dialogflow CX Messenger code when embedding it into a website: <script> document.addEventListener('df-messenger-loaded', () => { const dfMessenger = document.querySelector('df-messenger'); const searchConfig = { ... } dfMessenger.setQueryParameters(searchConfig); }); </script> See the setQueryParameters method.
- Review the compiled SearchConfig The SearchConfig applied when the query is run is available in search signals in the response.
- For this option to be available, verify that end user metadata is included in the QueryParameters of your DetectIntent calls.

### Answer feedback \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/answer-feedback](https://docs.cloud.google.com/dialogflow/cx/docs/concept/answer-feedback)
- Source ID: `site-docs-root`
- Final score: 95
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Go to the Session API reference Select a protocol and version for the Session reference: Protocol V3 V3beta1 REST Session resource Session resource RPC Session interface Session interface C++ SessionsClient Not available C# SessionsClient Not available Go SessionsClient Not available Java SessionsClient SessionsClient Node.js SessionsClient SessionsClient PHP Not available Not available Python SessionsClient SessionsClient Ruby Not available Not available Close Custom feedback data structure You can have feedback data stored in your custom data structure filling the answerFeedback.customRating field in the Sessions.submitAnswerFeedback method.
- Enable feedback Before collecting answer feedback, you must enable the following settings in the general agent settings : Enable interaction logging Enable Answer Feedback Collect feedback with Dialogflow CX Messenger If you use Dialogflow CX Messenger , you can enable answer feedback collection for the chat dialog by setting the following HTML attribute : allow-feedback="all" .
- If you use Dialogflow CX Messenger , you can set up custom feedback collection by defining your custom feedback component .

### Call companion \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/call-companion](https://docs.cloud.google.com/dialogflow/cx/docs/concept/call-companion)
- Source ID: `site-docs-root`
- Final score: 75
- Re-rank relevance: N/A

Evidence snippets:
- Settings You can customize the following fields for the Dialogflow CX Messenger UI or call companion UI: Company name or title Font Logo (must be stored in a Google Cloud bucket, format: gs://<bucket name>/<object name> ) Text color (select the color or enter hex code) Background color (select the color or enter hex code) User input background color (select the color or enter hex code) Agent response background color (select the color or enter hex code) Customize the UI Select an agent with call companion enabled and click Agent Settings , then the Multimodal tab.
- If you are using Dialogflow CX Messenger , go to the left-hand navigation menu and click Manage > Integrations > Dialogflow CX Messenger > Manage .

