---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.763Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Dialogflow CX Facebook Messenger integration"
feature_slug: "dialogflow-cx-facebook-messenger-integration"
latest_feature_date: "2021-04-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/es/docs/agents-mega"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/call-companion"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/tutorials/deploy/host"
keywords:
  - "facebook"
  - "messenger"
  - "integration"
  - "includes"
---

# Dialogflow CX Facebook Messenger integration

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX includes an integration with Facebook Messenger.

## Extended Definition

Dialogflow CX includes an integration with Facebook Messenger.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/es/docs/agents-mega](https://docs.cloud.google.com/dialogflow/es/docs/agents-mega)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/call-companion](https://docs.cloud.google.com/dialogflow/cx/docs/concept/call-companion)
- [https://docs.cloud.google.com/dialogflow/cx/docs/tutorials/deploy/host](https://docs.cloud.google.com/dialogflow/cx/docs/tutorials/deploy/host)

## Supporting Pages

### Mega agents \_|\_ Dialogflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/agents-mega](https://docs.cloud.google.com/dialogflow/es/docs/agents-mega)
- Source ID: `site-iam-reference`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- The Hangouts Chat, Dialogflow Messenger, Facebook Messenger, and Facebook Workplace integrations each automatically create this special service account.
- If you plan on using any integrations for the mega agent, the automatically created service- project-number @gcp-sa-dialogflow.iam.gserviceaccount.com service account for the mega agent's project must have a role on that project that includes permission to make detect intent calls.
- You can use the Dialogflow Messenger integration as an easy way to do this, or you could setup your desired integration for the mega agent prior to configuring sub-agents.
- Caution: If this service account is not populated, you may need to send at least one request to your mega agent using an integration.

### Call companion \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/call-companion](https://docs.cloud.google.com/dialogflow/cx/docs/concept/call-companion)
- Source ID: `site-docs-root`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- If you are using Dialogflow CX Messenger , go to the left-hand navigation menu and click Manage > Integrations > Dialogflow CX Messenger > Manage .
- Settings You can customize the following fields for the Dialogflow CX Messenger UI or call companion UI: Company name or title Font Logo (must be stored in a Google Cloud bucket, format: gs://<bucket name>/<object name> ) Text color (select the color or enter hex code) Background color (select the color or enter hex code) User input background color (select the color or enter hex code) Agent response background color (select the color or enter hex code) Customize the UI Select an agent with call companion enabled and click Agent Settings , then the Multimodal tab.
- Enable call companion: For a new telephony integration: Follow the steps to enable Dialogflow CX Phone Gateway , and check the Enable call companion option for a new conversation profile.
- For an existing telephony integration: On the Manage tab, click Integrations , then click Manage for CX Phone Gateway.

### Host your agent \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/tutorials/deploy/host](https://docs.cloud.google.com/dialogflow/cx/docs/tutorials/deploy/host)
- Source ID: `site-docs-root`
- Final score: 60
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To launch your browser and view your web service, you can open the target URL from the previous step, or run the following command: gcloud app browse Setup Dialogflow Messenger Note: Make sure billing is enabled on your project before testing the integration.
- The Dialogflow Messenger integration is used for an agent user interface.
- Delete your agent More information For more information about the steps above, see: Building a Go App on App Engine Interactions with an integration Previous arrow back Query a database Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To set up unauthenticated access to your Dialogflow CX Messenger agent: Go to the Dialogflow CX console .

