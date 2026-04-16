---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:07:28.109Z"
product_name: "Access Transparency"
product_slug: "access-transparency"
feature_name: "Cloud Scheduler"
feature_slug: "cloud-scheduler"
latest_feature_date: "2025-10-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support"
  - "https://docs.cloud.google.com/iam/docs/federated-identity-supported-services"
  - "https://docs.cloud.google.com/iam/docs/overview"
  - "https://docs.cloud.google.com/iam/docs/deny-permissions-support"
keywords:
  - "Cloud Scheduler jobs"
  - "Access Transparency for Cloud Scheduler"
  - "Cloud Scheduler API"
  - "Cloud Scheduler service"
  - "Cloud Scheduler"
---

# Cloud Scheduler

Product: Access Transparency
Coverage: MEDIUM

## Step 02 Summary

Cloud Scheduler is a managed service for scheduling and automating recurring tasks.

## Extended Definition

Cloud Scheduler is a managed service for scheduling and automating recurring tasks.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)
- [https://docs.cloud.google.com/iam/docs/federated-identity-supported-services](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services)
- [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview)
- [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support)

## Supporting Pages

### "Support levels for permissions in custom roles \_|\_ Identity and Access\

- URL: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)
- Source ID: `site-iam-reference`
- Final score: 52
- Re-rank relevance: N/A

### "Identity federation: products and limitations \_|\_ Identity and Access\

- URL: [https://docs.cloud.google.com/iam/docs/federated-identity-supported-services](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services)
- Source ID: `site-iam-reference`
- Final score: 46
- Re-rank relevance: N/A

Evidence snippets:
- Google Cloud API: The Cloud Scheduler API doesn't support identity federation for jobs that have their target attribute set to appEngineHttpTarget .
- Cloud Scheduler GA Console (federated): The App Engine Cron Jobs tab isn't available for Workforce Identity Federation users.

### "IAM overview \_|\_ Identity and Access Management (IAM) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview)
- Source ID: `site-iam-reference`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### "Permissions supported in deny policies \_|\_ Identity and Access Management\

- URL: [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support)
- Source ID: `site-iam-reference`
- Final score: 42
- Re-rank relevance: N/A

