---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:52:30.768Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "Per-version user-managed service accounts for App Engine standard deployments"
feature_slug: "per-version-user-managed-service-accounts-for-app-engine-standard-deployments"
latest_feature_date: "2021-06-30"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts"
keywords:
  - "deployment with own service account"
  - "scoped privileges per version"
  - "per-version user-managed service account"
  - "version-specific service account"
  - "custom service account per version"
  - "service account by version"
  - "version service account"
  - "App Engine standard deployment"
---

# Per-version user-managed service accounts for App Engine standard deployments

Product: App Engine standard environment Go
Coverage: HIGH

## Step 02 Summary

This preview feature allows each App Engine version to be deployed with its own user-managed service account so privileges can be scoped to the work each version performs.

## Extended Definition

Per-version user-managed service accounts in App Engine standard allow each deployed version to run under its own specified service account instead of only using the app-level default account. The feature is configured by setting the version-specific service account in `app.yaml`, `appengine-web.xml` (for Java runtimes using legacy bundled services), or via `gcloud app deploy --service-account`, and the service account must be in the same project as the deployed app. The docs also distinguish this from the app-level default service account, which applies when no per-version account is configured.

## Evidence Summary

The cited App Engine standard documentation page explains that App Engine supports per-version service accounts, defines their project placement requirement, and provides multiple supported methods to configure them.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts)

## Supporting Pages

### "Configure App Engine service accounts \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts)
- Source ID: `site-docs-root`
- Final score: 60
- Re-rank relevance: STRONG
- Re-rank rationale: The page explicitly explains that each deployed version can be assigned a specific service account identity when deploying a version, including permissions differences from the app-level default.

Evidence snippets:
- Your version-specific service account must be in the same project where you deploy your application. appengine-web.xml If you use the Java runtimes and include the App Engine legacy bundled services, specify your service account by adding the <service-account> element in your appengine-web.xml file: <service-account> SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com</service-account> Replace: SERVICE ACCOUNT NAME with the name of the service account that you created.
- Your version-specific service account must be in the same project where you deploy your application. app.yaml In your app.yaml file, specify your service account by adding the service account element: service account: SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com Replace: SERVICE ACCOUNT NAME with the name of the service account that you created.
- There are two types of service accounts in App Engine and any service account in your Cloud project can be assigned to act as either the app-level default or per-version service account: App-level default service account - This service account is used for all of your deployed services when you don't configure a "per-version service account".
- Set a version-specific service account gcloud Run the gcloud app deploy command: gcloud app deploy --service-account = SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com Replace: SERVICE ACCOUNT NAME with the name of the service account that you created.

