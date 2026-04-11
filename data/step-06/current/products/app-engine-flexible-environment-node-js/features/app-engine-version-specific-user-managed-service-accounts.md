---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T21:05:36.388Z"
product_name: "App Engine flexible environment Node.js"
product_slug: "app-engine-flexible-environment-node-js"
feature_name: "App Engine version-specific user-managed service accounts"
feature_slug: "app-engine-version-specific-user-managed-service-accounts"
latest_feature_date: "2022-05-18"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts"
keywords:
  - "user-managed service account per version"
  - "deploy version with service account"
  - "per-version service identity"
  - "version-scoped SA"
  - "per-version SA"
  - "version-level service account"
  - "preview: version service account"
  - "version service account"
---

# App Engine version-specific user-managed service accounts

Product: App Engine flexible environment Node.js
Coverage: HIGH

## Step 02 Summary

Deployment now supports specifying a user-managed service account per App Engine version; App Engine added preview support for specifying a user-managed service account for each version during deployment to grant version-level privileges.

## Extended Definition

In the App Engine flexible environment, each deployed version can use a **per-version service account** that serves as the identity for that specific version. The documentation states that any service account in the Cloud project can be assigned as either the app-level default service account or a per-version one, enabling version-scoped identity configuration.

## Evidence Summary

The page explicitly defines both app-level and per-version service-account modes and confirms that a specific service account can be configured for an individual App Engine version.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts)

## Supporting Pages

### "Configure App Engine service accounts \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts)
- Source ID: `site-docs-reference`
- Final score: 40
- Re-rank relevance: STRONG
- Re-rank rationale: The page defines per-version service accounts, explains their use as a version identity during deployment, and notes permissions-driven selection of a specific service account for each version.

Evidence snippets:
- There are two types of service accounts in App Engine and any service account in your Cloud project can be assigned to act as either the app-level default or per-version service account: App-level default service account - This service account is used for all of your deployed services when you don't configure a "per-version service account".
- Per-version service account - A service account configured as the identity for a specific version of your deployed service.

