---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:44:02.744Z"
product_name: "App Engine flexible environment .NET"
product_slug: "app-engine-flexible-environment-net"
feature_name: "Specify a user-managed service account per App Engine version"
feature_slug: "specify-a-user-managed-service-account-per-app-engine-version"
latest_feature_date: "2022-05-18"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts"
  - "https://docs.cloud.google.com/appengine/docs/flexible/access-control"
keywords:
  - "user-managed service account per version"
  - "deploy version with service account"
  - "version-level service account"
  - "per-version service account"
  - "per-version SA"
  - "user-managed SA"
  - "App Engine version settings"
  - "version service account"
---

# Specify a user-managed service account per App Engine version

Product: App Engine flexible environment .NET
Coverage: HIGH

## Step 02 Summary

You can now specify a user-managed service account for each App Engine version during deployment; Deployments can specify a user-managed service account for each App Engine version, enabling per-version privilege separation.

## Extended Definition

In App Engine flexible environment, you can configure a **per-version service account** so that a specific deployed version of a service uses that account as its runtime identity. This is an explicit alternative to the app-level default service account, which is used only when no per-version service account is configured. The per-version option allows identity/principal selection at the version level rather than globally.

## Evidence Summary

The cited pages define both app-level and per-version service accounts and state that App Engine uses per-version service accounts as the identity for specific versions, with app-level default applying only when no per-version account is set.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts)
- [https://docs.cloud.google.com/appengine/docs/flexible/access-control](https://docs.cloud.google.com/appengine/docs/flexible/access-control)

## Supporting Pages

### "Configure App Engine service accounts \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts)
- Source ID: `site-docs-root`
- Final score: 52
- Re-rank relevance: STRONG
- Re-rank rationale: The page explicitly defines per-version service accounts, explains why to use them, and states you can assign a specific service account when deploying a version.

Evidence snippets:
- There are two types of service accounts in App Engine and any service account in your Cloud project can be assigned to act as either the app-level default or per-version service account: App-level default service account - This service account is used for all of your deployed services when you don't configure a "per-version service account".
- Per-version service account - A service account configured as the identity for a specific version of your deployed service.

### "Setting up access control \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/access-control](https://docs.cloud.google.com/appengine/docs/flexible/access-control)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Specifying a service account App Engine lets you use two types of service accounts: Per-version service account : A service account configured as the identity for a specific version of your deployed service.
- App-level default service account : If you don't configure a per-version service account, Google Cloud uses the app-level default service account for all of your deployed services.
- If you remove Editor role from the App Engine default service account, or if you are using a per-version service account, make sure to grant the service account these roles.

