---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T21:44:03.343Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "Per-version service account configuration for App Engine deployment"
feature_slug: "per-version-service-account-configuration-for-app-engine-deployment"
latest_feature_date: "2022-05-18"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts"
keywords:
  - "version-specific service account"
  - "gcloud app deploy --service-account"
  - "deployment service identity"
  - "user-managed service account"
  - "deploy with service account"
  - "version-level service account"
  - "per-version service account"
  - "service account by version"
---

# Per-version service account configuration for App Engine deployment

Product: App Engine standard environment Java
Coverage: HIGH

## Step 02 Summary

Specifying a user-managed service account for each App Engine version at deployment time is now generally available.

## Extended Definition

App Engine standard environment supports a per-version service account, allowing a specific deployed version to use a chosen user-managed service account instead of only the app-level default. You can set this during deployment with `gcloud app deploy --service-account`, or in configuration files (for Java legacy bundled services via `appengine-web.xml` `<service-account>`, and generally via `app.yaml` `service_account`), with the account required to be in the same project as the deployment target.

## Evidence Summary

The cited App Engine standard documentation explicitly describes how to configure version-specific service accounts through gcloud and configuration files and clarifies that either app-level default or per-version service accounts can be used per version from within the same project.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts)

## Supporting Pages

### "Configure App Engine service accounts \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts)
- Source ID: `site-docs-reference`
- Final score: 64
- Re-rank relevance: STRONG
- Re-rank rationale: The page is explicitly about configuring per-version service accounts and states that a version-specific service account can be set at deployment time.

Evidence snippets:
- Set a version-specific service account gcloud Run the gcloud app deploy command: gcloud app deploy --service-account = SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com Replace: SERVICE ACCOUNT NAME with the name of the service account that you created.
- Your version-specific service account must be in the same project where you deploy your application. appengine-web.xml If you use the Java runtimes and include the App Engine legacy bundled services, specify your service account by adding the <service-account> element in your appengine-web.xml file: <service-account> SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com</service-account> Replace: SERVICE ACCOUNT NAME with the name of the service account that you created.
- Your version-specific service account must be in the same project where you deploy your application. app.yaml In your app.yaml file, specify your service account by adding the service account element: service account: SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com Replace: SERVICE ACCOUNT NAME with the name of the service account that you created.
- There are two types of service accounts in App Engine and any service account in your Cloud project can be assigned to act as either the app-level default or per-version service account: App-level default service account - This service account is used for all of your deployed services when you don't configure a "per-version service account".

