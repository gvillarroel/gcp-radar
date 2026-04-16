---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.480Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Facebook Workplace integration"
feature_slug: "facebook-workplace-integration"
latest_feature_date: "2020-07-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/es/docs/agents-mega"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/call-companion"
  - "https://docs.cloud.google.com/dialogflow/es/docs/analytics"
keywords:
  - "facebook"
  - "workplace"
  - "integration"
  - "dialogflow"
  - "includes"
---

# Facebook Workplace integration

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow includes an integration with Facebook Workplace.

## Extended Definition

Dialogflow includes an integration with Facebook Workplace.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/es/docs/agents-mega](https://docs.cloud.google.com/dialogflow/es/docs/agents-mega)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/call-companion](https://docs.cloud.google.com/dialogflow/cx/docs/concept/call-companion)
- [https://docs.cloud.google.com/dialogflow/es/docs/analytics](https://docs.cloud.google.com/dialogflow/es/docs/analytics)

## Supporting Pages

### Mega agents \_|\_ Dialogflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/agents-mega](https://docs.cloud.google.com/dialogflow/es/docs/agents-mega)
- Source ID: `site-iam-reference`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- The Hangouts Chat, Dialogflow Messenger, Facebook Messenger, and Facebook Workplace integrations each automatically create this special service account.
- If you plan on using any integrations for the mega agent, the automatically created service- project-number @gcp-sa-dialogflow.iam.gserviceaccount.com service account for the mega agent's project must have a role on that project that includes permission to make detect intent calls.
- You can use the Dialogflow Messenger integration as an easy way to do this, or you could setup your desired integration for the mega agent prior to configuring sub-agents.
- To set up these roles: Create the mega agent and sub-agent Google Cloud projects as you normally would, and ensure you have enabled the "Dialogflow API" for each.

### Analytics \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/analytics](https://docs.cloud.google.com/dialogflow/es/docs/analytics)
- Source ID: `site-iam-reference`
- Final score: 49
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Common metrics The following common metrics are displayed on multiple chart types: Interactions : For most views, interactions include detect intent request counts via direct API calls and indirect calls via integrations (except for Google Assistant).
- For example: OK PERMISSION DENIED INTERNAL DEADLINE EXCEEDED Integrations view This view charts session and interaction counts for all requests (except Google Assistant) by integration type .
- See: tag consumed api Creating a Dashboard with Stackdriver SLI Monitoring Metrics Limitations The following limitations apply: Google Assistant integration data is not supported.
- Home Documentation AI and ML Dialogflow Dialogflow ES Send feedback Analytics Stay organized with collections Save and categorize content based on your preferences.

### Call companion \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/call-companion](https://docs.cloud.google.com/dialogflow/cx/docs/concept/call-companion)
- Source ID: `site-docs-root`
- Final score: 49
- Re-rank relevance: N/A

Evidence snippets:
- Enable call companion: For a new telephony integration: Follow the steps to enable Dialogflow CX Phone Gateway , and check the Enable call companion option for a new conversation profile.
- If you are using Dialogflow CX Messenger , go to the left-hand navigation menu and click Manage > Integrations > Dialogflow CX Messenger > Manage .
- Settings You can customize the following fields for the Dialogflow CX Messenger UI or call companion UI: Company name or title Font Logo (must be stored in a Google Cloud bucket, format: gs://<bucket name>/<object name> ) Text color (select the color or enter hex code) Background color (select the color or enter hex code) User input background color (select the color or enter hex code) Agent response background color (select the color or enter hex code) Customize the UI Select an agent with call companion enabled and click Agent Settings , then the Multimodal tab.
- When you are using the Dialogflow CX Phone Gateway, it will only use the output audio text for voice output and will only use the text response for the call companion transcript.

