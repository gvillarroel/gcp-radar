---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:52:30.764Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "User-managed service account per App Engine version"
feature_slug: "user-managed-service-account-per-app-engine-version"
latest_feature_date: "2022-05-18"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts"
keywords:
  - "version deployment identity"
  - "service account during deployment"
  - "user-managed service account"
  - "service account per App Engine version"
  - "version-level service account"
  - "per-version service account"
  - "deployment service account"
  - "custom service account"
---

# User-managed service account per App Engine version

Product: App Engine standard environment Go
Coverage: HIGH

## Step 02 Summary

App Engine now generally supports specifying a user-managed service account for each version during deployment.

## Extended Definition

App Engine standard supports a per-version service account, which is a service account configured as the identity for a specific deployed version. Any service account in your Cloud project can be used as this per-version service account, while the app-level default service account is used when no per-version account is configured.

## Evidence Summary

The cited documentation page defines both App Engine default and per-version service accounts and explicitly states that any project service account may be assigned as a per-version identity.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts)

## Supporting Pages

### "Configure App Engine service accounts \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts)
- Source ID: `site-docs-root`
- Final score: 40
- Re-rank relevance: STRONG
- Re-rank rationale: The page states that any project service account can be configured for a specific deployed version, directly covering per-version user-managed service account support.

Evidence snippets:
- There are two types of service accounts in App Engine and any service account in your Cloud project can be assigned to act as either the app-level default or per-version service account: App-level default service account - This service account is used for all of your deployed services when you don't configure a "per-version service account".
- Per-version service account - A service account configured as the identity for a specific version of your deployed service.

