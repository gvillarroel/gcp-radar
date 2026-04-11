---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:39:03.548Z"
product_name: "App Engine flexible environment custom runtimes"
product_slug: "app-engine-flexible-environment-custom-runtimes"
feature_name: "Per-version user-managed service account selection during App Engine deployment"
feature_slug: "per-version-user-managed-service-account-selection-during-app-engine-deployment"
latest_feature_date: "2022-05-18"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts"
  - "https://docs.cloud.google.com/appengine/docs/flexible/access-control"
keywords:
  - "set service account per version"
  - "deployment-time service account"
  - "version-level service account"
  - "per-version service account"
  - "per-version IAM"
  - "user-managed service account"
  - "version identity"
  - "version SA"
---

# Per-version user-managed service account selection during App Engine deployment

Product: App Engine flexible environment custom runtimes
Coverage: HIGH

## Step 02 Summary

You can now specify a user-managed service account for each App Engine version at deployment time in general availability; App Engine now supports specifying a user-managed service account per version during deployment, initially introduced in preview.

## Extended Definition

App Engine flexible environment supports configuring a specific deployed version to run with its own per-version service account identity, which can be a user-managed service account, instead of using the app-level default service account. If a per-version service account is not configured, the app-level default service account is used for all deployed services. This lets a version have a unique identity when accessing other Google Cloud services.

## Evidence Summary

The cited pages define App Engine flexible service account options and confirm that a deployed version can be assigned a specific per-version (user-managed) service account, with the app-level account as the fallback.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts)
- [https://docs.cloud.google.com/appengine/docs/flexible/access-control](https://docs.cloud.google.com/appengine/docs/flexible/access-control)

## Supporting Pages

### "Configure App Engine service accounts \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts)
- Source ID: `site-docs-root`
- Final score: 40
- Re-rank relevance: STRONG
- Re-rank rationale: The page defines per-version service accounts and states that you can specify a service account when deploying an existing or new version, directly supporting per-version identity configuration.

Evidence snippets:
- There are two types of service accounts in App Engine and any service account in your Cloud project can be assigned to act as either the app-level default or per-version service account: App-level default service account - This service account is used for all of your deployed services when you don't configure a "per-version service account".
- Per-version service account - A service account configured as the identity for a specific version of your deployed service.

### "Setting up access control \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/access-control](https://docs.cloud.google.com/appengine/docs/flexible/access-control)
- Source ID: `site-docs-root`
- Final score: 22
- Re-rank relevance: WEAK
- Re-rank rationale: It mentions service accounts and deployment tooling, but provides only general IAM guidance and not the per-version deployment selection mechanism itself.

Evidence snippets:
- Specifying a service account App Engine lets you use two types of service accounts: Per-version service account : A service account configured as the identity for a specific version of your deployed service.
- If you need to use a unique identity for a version of your App Engine app when accessing other Google Cloud services or executing tasks, you can specify a user-managed service account in App Engine.
- App-level default service account : If you don't configure a per-version service account, Google Cloud uses the app-level default service account for all of your deployed services.
- If you remove Editor role from the App Engine default service account, or if you are using a per-version service account, make sure to grant the service account these roles.

