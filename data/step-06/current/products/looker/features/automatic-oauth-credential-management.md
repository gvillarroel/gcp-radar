---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.399Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Automatic OAuth credential management"
feature_slug: "automatic-oauth-credential-management"
latest_feature_date: "2026-03-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-settings"
  - "https://docs.cloud.google.com/looker/docs/looker-core-access-control"
  - "https://docs.cloud.google.com/bigquery/docs/facebook-ads-transfer"
keywords:
  - "automatic"
  - "oauth"
  - "credential"
  - "management"
  - "looker"
  - "core"
  - "can"
  - "automatically"
---

# Automatic OAuth credential management

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Looker (Google Cloud core) can automatically manage OAuth client and secret information for instances that use only public secure connections and no custom domain.

## Extended Definition

Looker (Google Cloud core) can automatically manage OAuth client and secret information for instances that use only public secure connections and no custom domain.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- [https://docs.cloud.google.com/looker/docs/looker-core-access-control](https://docs.cloud.google.com/looker/docs/looker-core-access-control)
- [https://docs.cloud.google.com/bigquery/docs/facebook-ads-transfer](https://docs.cloud.google.com/bigquery/docs/facebook-ads-transfer)

## Supporting Pages

### Admin settings - General settings \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- Source ID: `site-docs-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- The status of the Automated Gemini in Looker enablement and user management setting affects the group as follows: If you enable the setting: New users who are added to the instance are added to the group automatically.
- Gemini in Looker isn't enabled automatically for Looker (Google Cloud core) instances.
- Limit Automatically refresh dashboard option When this setting is enabled, only Looker admins will be able to enable the Automatically refresh dashboard option on user-defined dashboards.
- A new user group called Default Gemini Users has been created automatically for all Looker (original) instances that use an open system configuration .

### Load Facebook Ads data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/facebook-ads-transfer](https://docs.cloud.google.com/bigquery/docs/facebook-ads-transfer)
- Source ID: `site-docs-reference-required-6`
- Final score: 130
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In this example, when a daily transfer occurs, the BigQuery Data Transfer Service creates a new BigQuery destination table partition with a copy of your source table data from the current day, then automatically triggers backfill runs to update the BigQuery destination table partitions with your source table data from the past two days.
- The automatically triggered backfill runs will either overwrite or incrementally update your BigQuery destination table, depending on whether or not incremental updates are supported in the BigQuery Data Transfer Service connector.
- When you save the transfer configuration, the Facebook Ads connector automatically triggers a transfer run according to your schedule option.
- When this data transfer runs, the BigQuery Data Transfer Service automatically populates the following tables.

### Looker (Google Cloud core) access control with IAM \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/looker-core-access-control](https://docs.cloud.google.com/looker/docs/looker-core-access-control)
- Source ID: `site-iam-reference`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- Looker IAM roles: These kinds of roles govern the following abilities: Users' capabilities within the Google Cloud console with regard to Looker (Google Cloud core) When used together with OAuth , they also govern the following abilities: Users' abilities to sign in to a Looker (Google Cloud core) instance Whether or not users are automatically assigned the Admin via IAM Looker role once they sign in to a Looker (Google Cloud core) instance.
- What's next Use Google OAuth for Looker (Google Cloud core) user authentication Manage users within Looker (Google Cloud core) Configure a Looker (Google Cloud core) instance Looker (Google Cloud core) admin settings Administer a Looker (Google Cloud core) instance from the Google Cloud console Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Warning: The Looker Service Agent IAM role is intended only for the Looker service account and is automatically assigned to the service account when the Looker API is enabled .
- Looker (Google Cloud core) uses Identity and Access Management (IAM) to provision user and admin access through a set of IAM roles .

