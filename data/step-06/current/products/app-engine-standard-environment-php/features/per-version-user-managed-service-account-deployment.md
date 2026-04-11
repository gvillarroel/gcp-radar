---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:27.535Z"
product_name: "App Engine standard environment PHP"
product_slug: "app-engine-standard-environment-php"
feature_name: "Per-version user-managed service account deployment"
feature_slug: "per-version-user-managed-service-account-deployment"
latest_feature_date: "2022-05-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts"
keywords:
  - "deploy with user-managed service account"
  - "gcloud app deploy --service-account"
  - "version deployment service identity"
  - "per-version user-managed service account"
  - "version-specific identity"
  - "per-version SA"
  - "version-level service account"
  - "version service account"
---

# Per-version user-managed service account deployment

Product: App Engine standard environment PHP
Coverage: LOW

## Step 02 Summary

Selecting a user-managed service account per App Engine version at deployment is now generally available.

## Extended Definition

Selecting a user-managed service account per App Engine version at deployment is now generally available.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts)

## Supporting Pages

### "Configure App Engine service accounts \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts)
- Source ID: `site-docs-root`
- Final score: 22
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- There are two types of service accounts in App Engine and any service account in your Cloud project can be assigned to act as either the app-level default or per-version service account: App-level default service account - This service account is used for all of your deployed services when you don't configure a "per-version service account".
- Set a version-specific service account gcloud Run the gcloud app deploy command: gcloud app deploy --service-account = SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com Replace: SERVICE ACCOUNT NAME with the name of the service account that you created.
- Per-version service account - A service account configured as the identity for a specific version of your deployed service.

