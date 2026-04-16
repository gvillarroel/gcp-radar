---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.780Z"
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
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/call-companion"
keywords:
  - "messenger"
  - "integration"
  - "chat"
  - "includes"
---

# Dialogflow CX Messenger integration

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX includes the Dialogflow Messenger integration for web chat.

## Extended Definition

Dialogflow CX includes the Dialogflow Messenger integration for web chat.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/search-configure](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/search-configure)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/call-companion](https://docs.cloud.google.com/dialogflow/cx/docs/concept/call-companion)

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

### Data store tools \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler)
- Source ID: `site-docs-root`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- The Dialogflow CX Messenger integration is a particularly good option for data store handlers.
- Deploy your agent There are many ways to deploy your agent: The simplest option is to use an integration , which provides a user interface for your agent.
- Such information includes: The identified sources of the answer with the following fields: snippet, title, uri.
- Each integration provides instructions for deployment.

### Call companion \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/call-companion](https://docs.cloud.google.com/dialogflow/cx/docs/concept/call-companion)
- Source ID: `site-docs-root`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- If you are using Dialogflow CX Messenger , go to the left-hand navigation menu and click Manage > Integrations > Dialogflow CX Messenger > Manage .
- Settings You can customize the following fields for the Dialogflow CX Messenger UI or call companion UI: Company name or title Font Logo (must be stored in a Google Cloud bucket, format: gs://<bucket name>/<object name> ) Text color (select the color or enter hex code) Background color (select the color or enter hex code) User input background color (select the color or enter hex code) Agent response background color (select the color or enter hex code) Customize the UI Select an agent with call companion enabled and click Agent Settings , then the Multimodal tab.
- Enable call companion: For a new telephony integration: Follow the steps to enable Dialogflow CX Phone Gateway , and check the Enable call companion option for a new conversation profile.
- For an existing telephony integration: On the Manage tab, click Integrations , then click Manage for CX Phone Gateway.

