---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:40:06.736Z"
product_name: "App Engine flexible environment Go"
product_slug: "app-engine-flexible-environment-go"
feature_name: "Per-version user-managed service account deployment"
feature_slug: "per-version-user-managed-service-account-deployment"
latest_feature_date: "2022-05-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts"
keywords:
  - "gcloud app deploy --service-account"
  - "version-specific service account"
  - "user-managed service account"
  - "version-level app identity"
  - "per-version service account"
  - "service account per version"
  - "service-account-per-version"
---

# Per-version user-managed service account deployment

Product: App Engine flexible environment Go
Coverage: MEDIUM

## Step 02 Summary

Makes it generally available to specify a user-managed service account per App Engine version during deployment; Introduces preview support for specifying a user-managed service account for each App Engine version during deployment.

## Extended Definition

In App Engine flexible environment, a version-specific (per-version) user-managed service account can be configured for deployment, either via `gcloud app deploy --service-account=SERVICE_ACCOUNT_NAME@PROJECT_ID.iam.gserviceaccount.com` or by setting `service account: SERVICE_ACCOUNT_NAME@PROJECT_ID.iam.gserviceaccount.com` in `app.yaml`. The configured per-version service account must be in the same project as the app deployment, and it is used in place of the app-level default service account to allow different privileges per application version.

## Evidence Summary

The referenced App Engine flexible documentation provides direct instructions for setting per-version service accounts (CLI and `app.yaml`), scope constraints, and their relationship to the app-level default account.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts)

## Supporting Pages

### "Configure App Engine service accounts \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts)
- Source ID: `site-docs-root`
- Final score: 64
- Re-rank relevance: STRONG
- Re-rank rationale: The page explicitly explains that each App Engine version can be assigned a specific service account during deployment, which directly defines per-version service account behavior.

Evidence snippets:
- Set a version-specific service account gcloud Run the gcloud app deploy command: gcloud app deploy --service-account = SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com Replace: SERVICE ACCOUNT NAME with the name of the service account that you created.
- Your version-specific service account must be in the same project where you deploy your application. app.yaml In your app.yaml file, specify your service account by adding the service account element: service account: SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com Replace: SERVICE ACCOUNT NAME with the name of the service account that you created.
- There are two types of service accounts in App Engine and any service account in your Cloud project can be assigned to act as either the app-level default or per-version service account: App-level default service account - This service account is used for all of your deployed services when you don't configure a "per-version service account".
- Using a version-specific service account lets you grant different privileges to each application version, based on the specific tasks it performs, and avoid granting more privileges than necessary.

