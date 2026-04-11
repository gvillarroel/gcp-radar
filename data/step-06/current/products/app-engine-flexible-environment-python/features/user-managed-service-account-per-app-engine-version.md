---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:45:54.275Z"
product_name: "App Engine flexible environment Python"
product_slug: "app-engine-flexible-environment-python"
feature_name: "User-managed service account per App Engine version"
feature_slug: "user-managed-service-account-per-app-engine-version"
latest_feature_date: "2022-05-18"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts"
  - "https://docs.cloud.google.com/appengine/docs/flexible/access-control"
keywords:
  - "App Engine flex service_account setting"
  - "user-managed service account"
  - "version-specific service account"
  - "user-managed SA"
  - "service account per App Engine version"
  - "custom SA per version"
  - "per-version service account"
  - "version-level service account"
---

# User-managed service account per App Engine version

Product: App Engine flexible environment Python
Coverage: HIGH

## Step 02 Summary

Specifying a user-managed service account per App Engine version during deployment is now generally available; You can now specify a user-managed service account for each App Engine version during deployment in Preview.

## Extended Definition

In App Engine flexible environment, a version-specific (per-version) service account lets you assign a distinct user-managed service account as the runtime identity for an individual deployed version of an application. You configure it in `app.yaml` via the `service_account` field or during deployment with `gcloud app deploy --service-account`, and if not configured, the app-level default service account is used for all deployed versions.

## Evidence Summary

The cited App Engine flexible docs define per-version versus app-level default service accounts, show configuration mechanisms in `app.yaml` and `gcloud app deploy`, and state the security motivation for assigning separate identities per version.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts)
- [https://docs.cloud.google.com/appengine/docs/flexible/access-control](https://docs.cloud.google.com/appengine/docs/flexible/access-control)

## Supporting Pages

### "Configure App Engine service accounts \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts)
- Source ID: `site-docs-root`
- Final score: 60
- Re-rank relevance: STRONG
- Re-rank rationale: The page defines per-version service accounts and describes assigning a specific service account as the identity for a deployed App Engine version, directly covering this feature.

Evidence snippets:
- Your version-specific service account must be in the same project where you deploy your application. app.yaml In your app.yaml file, specify your service account by adding the service account element: service account: SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com Replace: SERVICE ACCOUNT NAME with the name of the service account that you created.
- There are two types of service accounts in App Engine and any service account in your Cloud project can be assigned to act as either the app-level default or per-version service account: App-level default service account - This service account is used for all of your deployed services when you don't configure a "per-version service account".
- Set a version-specific service account gcloud Run the gcloud app deploy command: gcloud app deploy --service-account = SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com Replace: SERVICE ACCOUNT NAME with the name of the service account that you created.
- Using a version-specific service account lets you grant different privileges to each application version, based on the specific tasks it performs, and avoid granting more privileges than necessary.

### "Setting up access control \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/access-control](https://docs.cloud.google.com/appengine/docs/flexible/access-control)
- Source ID: `site-docs-root`
- Final score: 22
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Specifying a service account App Engine lets you use two types of service accounts: Per-version service account : A service account configured as the identity for a specific version of your deployed service.
- If you need to use a unique identity for a version of your App Engine app when accessing other Google Cloud services or executing tasks, you can specify a user-managed service account in App Engine.
- App-level default service account : If you don't configure a per-version service account, Google Cloud uses the app-level default service account for all of your deployed services.
- If you remove Editor role from the App Engine default service account, or if you are using a per-version service account, make sure to grant the service account these roles.

