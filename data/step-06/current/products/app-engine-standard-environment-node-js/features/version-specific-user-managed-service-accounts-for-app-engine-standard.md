---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T22:04:50.068Z"
product_name: "App Engine standard environment Node.js"
product_slug: "app-engine-standard-environment-node-js"
feature_name: "Version-specific user-managed service accounts for App Engine standard"
feature_slug: "version-specific-user-managed-service-accounts-for-app-engine-standard"
latest_feature_date: "2021-06-30"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts"
keywords:
  - "assign service account on deploy"
  - "version-specific IAM privileges"
  - "gcloud app deploy --service-account"
  - "version-scoped service account"
  - "user-managed SA"
  - "user-managed service account"
  - "custom service account per version"
  - "per-version service account"
---

# Version-specific user-managed service accounts for App Engine standard

Product: App Engine standard environment Node.js
Coverage: HIGH

## Step 02 Summary

App Engine standard deployment now supports specifying a user-managed service account per version during deployment for finer-grained IAM privilege control.

## Extended Definition

App Engine Standard supports a **per-version service account** that is used as the identity for a specific deployed version of a service. Any service account in the project can be configured as that per-version account, and when it is not configured, the app-level default service account is used instead. The deployment command can set this by passing `--service-account=SERVICE_ACCOUNT_NAME@PROJECT_ID.iam.gserviceaccount.com` to `gcloud app deploy`.

## Evidence Summary

The cited App Engine standard documentation page explicitly defines per-version service accounts and documents how to assign one during deployment with `gcloud app deploy --service-account`.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts)

## Supporting Pages

### "Configure App Engine service accounts \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts)
- Source ID: `site-docs-reference`
- Final score: 22
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- There are two types of service accounts in App Engine and any service account in your Cloud project can be assigned to act as either the app-level default or per-version service account: App-level default service account - This service account is used for all of your deployed services when you don't configure a "per-version service account".
- Set a version-specific service account gcloud Run the gcloud app deploy command: gcloud app deploy --service-account = SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com Replace: SERVICE ACCOUNT NAME with the name of the service account that you created.
- Per-version service account - A service account configured as the identity for a specific version of your deployed service.

