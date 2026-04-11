---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T22:04:50.066Z"
product_name: "App Engine standard environment Node.js"
product_slug: "app-engine-standard-environment-node-js"
feature_name: "User-managed service account per App Engine version"
feature_slug: "user-managed-service-account-per-app-engine-version"
latest_feature_date: "2022-05-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts"
  - "https://docs.cloud.google.com/appengine/docs/standard/nodejs/access-control"
  - "https://docs.cloud.google.com/appengine/docs/standard/nodejs/granting-project-access"
keywords:
  - "deploy with service account"
  - "user-managed service account"
  - "version-level service account"
  - "per-version service account"
  - "service account per version"
  - "custom service account"
  - "version service account"
---

# User-managed service account per App Engine version

Product: App Engine standard environment Node.js
Coverage: LOW

## Step 02 Summary

Specifying a user-managed service account for each App Engine version during deployment is now generally available.

## Extended Definition

Specifying a user-managed service account for each App Engine version during deployment is now generally available.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts)
- [https://docs.cloud.google.com/appengine/docs/standard/nodejs/access-control](https://docs.cloud.google.com/appengine/docs/standard/nodejs/access-control)
- [https://docs.cloud.google.com/appengine/docs/standard/nodejs/granting-project-access](https://docs.cloud.google.com/appengine/docs/standard/nodejs/granting-project-access)

## Supporting Pages

### "Configure App Engine service accounts \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- There are two types of service accounts in App Engine and any service account in your Cloud project can be assigned to act as either the app-level default or per-version service account: App-level default service account - This service account is used for all of your deployed services when you don't configure a "per-version service account".
- Per-version service account - A service account configured as the identity for a specific version of your deployed service.

### "Setting up access control \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/nodejs/access-control](https://docs.cloud.google.com/appengine/docs/standard/nodejs/access-control)
- Source ID: `site-docs-reference`
- Final score: 24
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Specifying a service account App Engine lets you use two types of service accounts: Per-version service account : A service account configured as the identity for a specific version of your deployed service.
- App-level default service account : If you don't configure a per-version service account, Google Cloud uses the app-level default service account for all of your deployed services.
- If you need to use a unique identity for a version of your App Engine app when accessing other Google Cloud services or executing tasks, you can specify a user-managed service account in App Engine.

### "Setting up access control \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/nodejs/granting-project-access](https://docs.cloud.google.com/appengine/docs/standard/nodejs/granting-project-access)
- Source ID: `site-docs-reference`
- Final score: 24
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Specifying a service account App Engine lets you use two types of service accounts: Per-version service account : A service account configured as the identity for a specific version of your deployed service.
- App-level default service account : If you don't configure a per-version service account, Google Cloud uses the app-level default service account for all of your deployed services.
- If you need to use a unique identity for a version of your App Engine app when accessing other Google Cloud services or executing tasks, you can specify a user-managed service account in App Engine.

