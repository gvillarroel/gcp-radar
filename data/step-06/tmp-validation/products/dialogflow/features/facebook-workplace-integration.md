---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.782Z"
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
  - "https://docs.cloud.google.com/dialogflow/docs/basics"
keywords:
  - "facebook"
  - "workplace"
  - "integration"
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

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/es/docs/agents-mega](https://docs.cloud.google.com/dialogflow/es/docs/agents-mega)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/call-companion](https://docs.cloud.google.com/dialogflow/cx/docs/concept/call-companion)
- [https://docs.cloud.google.com/dialogflow/docs/basics](https://docs.cloud.google.com/dialogflow/docs/basics)

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
- Caution: If this service account is not populated, you may need to send at least one request to your mega agent using an integration.

### Call companion \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/call-companion](https://docs.cloud.google.com/dialogflow/cx/docs/concept/call-companion)
- Source ID: `site-docs-root`
- Final score: 49
- Re-rank relevance: N/A

Evidence snippets:
- Enable call companion: For a new telephony integration: Follow the steps to enable Dialogflow CX Phone Gateway , and check the Enable call companion option for a new conversation profile.
- If you are using Dialogflow CX Messenger , go to the left-hand navigation menu and click Manage > Integrations > Dialogflow CX Messenger > Manage .
- For an existing telephony integration: On the Manage tab, click Integrations , then click Manage for CX Phone Gateway.
- The link sent to the end-user's phone includes your Cloud project ID.

### Dialogflow ES basics \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/docs/basics](https://docs.cloud.google.com/dialogflow/docs/basics)
- Source ID: `site-docs-root-2`
- Final score: 46
- Re-rank relevance: N/A

Evidence snippets:
- User interactions with integrations Dialogflow integrates with many popular conversation platforms like Google Assistant, Slack, and Facebook Messenger.
- User interactions with the API If you are not using one of the integration options, you must write code that directly interacts with the end-user.
- Each integration handles end-user interactions in a platform-specific way, so see the documentation for your integration platform for details.
- If you want to build an agent for one of these platforms, you should use one of the many integrations options.

