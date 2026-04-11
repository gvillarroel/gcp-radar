---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:44:58.715Z"
product_name: "App Engine flexible environment PHP"
product_slug: "app-engine-flexible-environment-php"
feature_name: "User-managed service account per App Engine version"
feature_slug: "user-managed-service-account-per-app-engine-version"
latest_feature_date: "2022-05-18"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts"
keywords:
  - "per-version IAM identity"
  - "version-specific service account"
  - "App Engine version deployment identity"
  - "user-managed service account"
  - "version-level service account"
  - "user-managed SA"
  - "service account per version"
  - "app.yaml service_account"
---

# User-managed service account per App Engine version

Product: App Engine flexible environment PHP
Coverage: HIGH

## Step 02 Summary

Deployment now supports assigning a user-managed service account to each App Engine version; Deploying App Engine versions can specify a user-managed service account, enabling per-version privilege control.

## Extended Definition

In App Engine flexible environment, you can assign a user-managed (version-specific) service account when deploying an App Engine version, either by setting the `service_account` field in `app.yaml` or using `gcloud app deploy --service-account`. Each version can therefore run with its own IAM identity, and the configured account must be in the same project as the app. If no version-specific service account is provided, the deployment uses the app-level default service account.

## Evidence Summary

The cited App Engine flexible documentation page defines how to set version-specific service accounts via deployment configuration and explains the resulting per-version privilege isolation behavior.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts)

## Supporting Pages

### "Configure App Engine service accounts \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts)
- Source ID: `site-docs-root`
- Final score: 48
- Re-rank relevance: STRONG
- Re-rank rationale: The page clearly describes per-version service accounts and states you can specify a service account for a specific deployed version, with examples of assigning version-specific identities.

Evidence snippets:
- Your version-specific service account must be in the same project where you deploy your application. app.yaml In your app.yaml file, specify your service account by adding the service account element: service account: SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com Replace: SERVICE ACCOUNT NAME with the name of the service account that you created.
- Set a version-specific service account gcloud Run the gcloud app deploy command: gcloud app deploy --service-account = SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com Replace: SERVICE ACCOUNT NAME with the name of the service account that you created.
- Using a version-specific service account lets you grant different privileges to each application version, based on the specific tasks it performs, and avoid granting more privileges than necessary.
- Each new version that you deploy hereafter uses the new app-level default service account unless you explicitly assign a version-specific service account.

