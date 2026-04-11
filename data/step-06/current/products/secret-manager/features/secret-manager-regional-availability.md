---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:54.973Z"
product_name: "Secret Manager"
product_slug: "secret-manager"
feature_name: "Secret Manager regional availability"
feature_slug: "secret-manager-regional-availability"
latest_feature_date: "2026-01-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/secret-manager/docs/creating-and-accessing-secrets"
  - "https://docs.cloud.google.com/secret-manager/docs/view-secret-details"
  - "https://docs.cloud.google.com/secret-manager/regional-secrets/access-control-rs"
keywords:
  - "secret"
  - "manager"
  - "regional"
  - "availability"
  - "is"
  - "available"
  - "in"
  - "the"
---

# Secret Manager regional availability

Product: Secret Manager
Coverage: MEDIUM

## Step 02 Summary

Secret Manager is available in the Bangkok region (asia-southeast3); Secret Manager is available in the Stockholm region (europe-north2).

## Extended Definition

Secret Manager is available in the Bangkok region (asia-southeast3); Secret Manager is available in the Stockholm region (europe-north2).

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/secret-manager/docs/creating-and-accessing-secrets](https://docs.cloud.google.com/secret-manager/docs/creating-and-accessing-secrets)
- [https://docs.cloud.google.com/secret-manager/docs/view-secret-details](https://docs.cloud.google.com/secret-manager/docs/view-secret-details)
- [https://docs.cloud.google.com/secret-manager/regional-secrets/access-control-rs](https://docs.cloud.google.com/secret-manager/regional-secrets/access-control-rs)

## Supporting Pages

### Create a secret | Secret Manager | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secret-manager/docs/creating-and-accessing-secrets](https://docs.cloud.google.com/secret-manager/docs/creating-and-accessing-secrets)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can create secrets using the Google Cloud console, the Google Cloud CLI, the Secret Manager API, or the Secret Manager client libraries.
- Create a secret Secret Manager Google Cloud Documentation Source URL: https://docs.cloud.google.com/secret-manager/docs/creating-and-accessing-secrets For more information about granting roles, see Manage access to projects, folders, and organizations.
- You might also be able to get the required permissions through custom roles or other predefined roles.

### List secrets and view secret details | Secret Manager | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secret-manager/docs/view-secret-details](https://docs.cloud.google.com/secret-manager/docs/view-secret-details)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- List secrets and view secret details Secret Manager Google Cloud Documentation Source URL: https://docs.cloud.google.com/secret-manager/docs/view-secret-details In the Google Cloud console, go to the Secret Manager page. ...
- On the secret details page, click the Overview tab.
- Click the secret whose details you want to view.

### Access control with IAM | Secret Manager Documentation | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secret-manager/regional-secrets/access-control-rs](https://docs.cloud.google.com/secret-manager/regional-secrets/access-control-rs)
- Source ID: `site-iam-reference`
- Final score: 174
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Access control with IAM Secret Manager Documentation Google Cloud Documentation Source URL: https://docs.cloud.google.com/secret-manager/regional-secrets/access-control-rs The role roles/owner includes the secretmanager.versions.access permission, but the roles/editor and roles/viewer do not.
- For example, you can grant a service account the Secret Manager Secret Accessor role (roles/secretmanager.secretAccessor) on a single secret.
- If a principal only needs to access a single secret&#x27;s value, don&#x27;t grant that principal the ability to access all secrets.

