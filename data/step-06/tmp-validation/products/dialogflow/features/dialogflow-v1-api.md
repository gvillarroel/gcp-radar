---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.761Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Dialogflow V1 API"
feature_slug: "dialogflow-v1-api"
latest_feature_date: "2021-06-15"
deprecation_date: "2021-07-12"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/analytics-legacy"
  - "https://docs.cloud.google.com/dialogflow/es/docs/analytics"
keywords:
  - "undergoing"
  - "legacy"
  - "integrations"
  - "requests"
  - "supports"
---

# Dialogflow V1 API

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow V1 API supports bot requests for legacy Dialogflow integrations; The Dialogflow V1 API is undergoing a gradual shutdown; deprecated on 2021-07-12.

## Extended Definition

Dialogflow V1 API supports bot requests for legacy Dialogflow integrations; The Dialogflow V1 API is undergoing a gradual shutdown; deprecated on 2021-07-12.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/analytics-legacy](https://docs.cloud.google.com/dialogflow/cx/docs/concept/analytics-legacy)
- [https://docs.cloud.google.com/dialogflow/es/docs/analytics](https://docs.cloud.google.com/dialogflow/es/docs/analytics)

## Supporting Pages

### "General agent design best practices \_|\_ Dialogflow CX \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design)
- Source ID: `site-docs-root`
- Final score: 55
- Re-rank relevance: N/A

Evidence snippets:
- For example, if the end-user requests a small shirt at the beginning of the conversation, you want to capture the desired size parameter (small) while transitioning to the shirt order page.
- For example, if the end-user requests a particular product at the beginning of the conversation, you want to capture the desired product while transitioning to the appropriate order page.
- Necessary training phrase variety Include variations of questions, commands, verbs, and synonyms for common nouns to ensure your phrases cover a broad spectrum of possible requests.
- Dialogflow CX API If none of the ready-to-use integrations are suitable, or you would like to customize the interface for your system, you can use the Dialogflow CX API directly .

### Analytics \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/analytics](https://docs.cloud.google.com/dialogflow/es/docs/analytics)
- Source ID: `site-iam-reference`
- Final score: 51
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example: OK PERMISSION DENIED INTERNAL DEADLINE EXCEEDED Integrations view This view charts session and interaction counts for all requests (except Google Assistant) by integration type .
- Hovering your mouse over a data point shows a popup with individual counts at that point: Knowledge had result Knowledge was used Knowledge had primary result Sentiment view This view charts session and interaction counts for sentiment requests by sentiment result data.
- Common metrics The following common metrics are displayed on multiple chart types: Interactions : For most views, interactions include detect intent request counts via direct API calls and indirect calls via integrations (except for Google Assistant).
- Hovering your mouse over a data point shows a popup with individual counts at that point: Webhook called Webhook not called Languages view This view charts session and interaction counts for all requests by language .

### Legacy Analytics \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/analytics-legacy](https://docs.cloud.google.com/dialogflow/cx/docs/concept/analytics-legacy)
- Source ID: `site-docs-root`
- Final score: 51
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Common metric definitions The following metrics are displayed on multiple charts: Interactions : Interactions include detect intent request counts via direct API calls and indirect calls via integrations.
- Home Documentation AI and ML Dialogflow Dialogflow CX Send feedback Legacy Analytics Stay organized with collections Save and categorize content based on your preferences.
- Back-end session count The Back-end session count view shows sessions by integrations and webhooks.

