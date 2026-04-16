---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.478Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Dialogflow CX Messenger integration"
feature_slug: "dialogflow-cx-messenger-integration"
latest_feature_date: "2020-11-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/search-configure"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/tutorials/deploy/host"
keywords:
  - "dialogflow"
  - "cx"
  - "messenger"
  - "integration"
  - "includes"
  - "web"
  - "chat"
---

# Dialogflow CX Messenger integration

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX includes the Dialogflow Messenger integration for web chat.

## Extended Definition

Dialogflow CX includes the Dialogflow Messenger integration for web chat.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/search-configure](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/search-configure)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler)
- [https://docs.cloud.google.com/dialogflow/cx/docs/tutorials/deploy/host](https://docs.cloud.google.com/dialogflow/cx/docs/tutorials/deploy/host)

## Supporting Pages

### Data store search configuration \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/search-configure](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/search-configure)
- Source ID: `site-docs-root`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- Go to the Session API reference Select a protocol and version for the Session reference: Protocol V3 V3beta1 REST Session resource Session resource RPC Session interface Session interface C++ SessionsClient Not available C# SessionsClient Not available Go SessionsClient Not available Java SessionsClient SessionsClient Node.js SessionsClient SessionsClient PHP Not available Not available Python SessionsClient SessionsClient Ruby Not available Not available Close Dialogflow CX Messenger configuration You can provide search configuration data to the Dialogflow CX Messenger integration.
- You can configure data store search results using the Console , API , or Dialogflow CX Messenger integration .
- To apply a search spec or search config, the following snippet needs to be added to the Dialogflow CX Messenger code when embedding it into a website: <script> document.addEventListener('df-messenger-loaded', () => { const dfMessenger = document.querySelector('df-messenger'); const searchConfig = { ... } dfMessenger.setQueryParameters(searchConfig); }); </script> See the setQueryParameters method.
- Runtime substitution errors If a ConditionBoostSpec JSON string is valid and parsable but an error occurs during the runtime substitution of Dialogflow CX expressions within its fields (such as the condition string), these errors will be reported in diagnostic info as SystemFunctionResults .

### Data store tools \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler)
- Source ID: `site-docs-root`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- The Dialogflow CX Messenger integration is a particularly good option for data store handlers.
- Home Documentation AI and ML Dialogflow Dialogflow CX Send feedback Data store tools Stay organized with collections Save and categorize content based on your preferences.
- If you are not the project owner, you must have the following roles: Dialogflow Admin Discovery Engine Admin For more information, see the access control guide .
- Deploy your agent There are many ways to deploy your agent: The simplest option is to use an integration , which provides a user interface for your agent.

### Host your agent \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/tutorials/deploy/host](https://docs.cloud.google.com/dialogflow/cx/docs/tutorials/deploy/host)
- Source ID: `site-docs-root`
- Final score: 80
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To launch your browser and view your web service, you can open the target URL from the previous step, or run the following command: gcloud app browse Setup Dialogflow Messenger Note: Make sure billing is enabled on your project before testing the integration.
- The Dialogflow Messenger integration is used for an agent user interface.
- To set up unauthenticated access to your Dialogflow CX Messenger agent: Go to the Dialogflow CX console .
- Click Connect on Dialogflow CX Messenger .

