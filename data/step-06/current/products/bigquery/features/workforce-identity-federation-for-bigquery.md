---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.672Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Workforce identity federation for BigQuery"
feature_slug: "workforce-identity-federation-for-bigquery"
latest_feature_date: "2022-08-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-grant-roles"
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-exchanges"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
keywords:
  - "workforce"
  - "identity"
  - "federation"
  - "bigquery"
  - "lets"
  - "users"
  - "external"
  - "providers"
---

# Workforce identity federation for BigQuery

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Workforce identity federation lets users from external identity providers authenticate and access BigQuery resources.

## Extended Definition

Workforce identity federation lets users from external identity providers authenticate and access BigQuery resources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-grant-roles](https://docs.cloud.google.com/bigquery/docs/analytics-hub-grant-roles)
- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-exchanges](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-exchanges)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)

## Supporting Pages

### Configure BigQuery sharing roles \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-grant-roles](https://docs.cloud.google.com/bigquery/docs/analytics-hub-grant-roles)
- Source ID: `site-docs-reference-2`
- Final score: 130
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: When managing access for users in external identity providers , replace instances of Google Account principal identifiers—like user:kiran@example.com , group:support@example.com , and domain:example.com —with appropriate Workforce Identity Federation principal identifiers .
- Analytics Hub Subscriber and Viewer roles To view and subscribe to listings and data exchanges , Sharing provides the following predefined roles that you can grant for a project, a data exchange, or a listing: Analytics Hub Subscriber role ( roles/analyticshub.subscriber ), which lets users view and subscribe to listings.
- Analytics Hub Publisher and Listing Admin roles To manage listings , Sharing provides the following predefined roles that you can grant for a project, a data exchange, or a listing: Analytics Hub Publisher role ( roles/analyticshub.publisher ), which lets users do the following: Create, update, and delete listings.
- Analytics Hub Subscription Owner role To manage subscriptions , Sharing provides the following predefined role that you can grant at the project level: Analytics Hub Subscription Owner role ( roles/analyticshub.subscriptionOwner ), which lets users manage their subscriptions.

### Manage data exchanges \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-exchanges](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-exchanges)
- Source ID: `site-docs-reference-5`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- Note: When managing access for users in external identity providers , replace instances of Google Account principal identifiers—like user:kiran@example.com , group:support@example.com , and domain:example.com —with appropriate Workforce Identity Federation principal identifiers .
- Optional: In the Exchange Permissions section, complete the following steps: Enter email addresses in the following fields to grant the Identity and Access Management (IAM) roles: Administrators : assign the Analytics Hub Admin role ( roles/analyticshub.admin ) to these users.
- Create BigQuery sharing administrators To manage data exchanges, create data exchange administrators by granting users the Analytics Hub Admin role ( roles/analyticshub.admin ) at the project or data exchange level.
- You can make a data exchange public, which lets Google Cloud users ( allAuthenticatedUsers ) discover and subscribe to its listings.

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- Partner references BigQuery data source for Grafana Community Spotlight: BigQuery Plugin Connect Grafana to BigQuery using Workload Identity Federation Partner Advantage page Direct link LogicLoop Solution LogicLoop Category Data Quality, Observability, & FinOps Description LogicLoop empowers operations teams to set up alerts and automations on top of company data without needing engineers.
- Partner references Import BigQuery Data into Amplitude Export data to BigQuery AskYourDatabase Solution AskYourDatabase Category BI, ML, & Advanced Analytics Description AskYourDatabase is an AI-powered tool that lets users ask questions in plain English and get instant answers from their database.
- It lets users create, explore, and share interactive dashboards directly from cloud data warehouses like Google BigQuery, leveraging live data without extracts and offering embedded analytics capabilities.
- It lets users ingest, join, and analyze streaming data with the same ease as a traditional database, offering seamless integration to sink processed data into BigQuery for long-term storage and analysis.

