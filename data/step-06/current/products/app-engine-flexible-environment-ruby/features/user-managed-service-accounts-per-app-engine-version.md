---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:48:27.785Z"
product_name: "App Engine flexible environment Ruby"
product_slug: "app-engine-flexible-environment-ruby"
feature_name: "User-managed service accounts per App Engine version"
feature_slug: "user-managed-service-accounts-per-app-engine-version"
latest_feature_date: "2022-05-18"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts"
keywords:
  - "set service account per version"
  - "user-managed service account per version"
  - "version-specific service account"
  - "service account in deployment"
  - "app.yaml service_account"
  - "per-version SA"
  - "version service account"
---

# User-managed service accounts per App Engine version

Product: App Engine flexible environment Ruby
Coverage: HIGH

## Step 02 Summary

You can now specify a user-managed service account for each App Engine version during deployment; You can specify a user-managed service account for each App Engine version during deployment.

## Extended Definition

In App Engine flexible environment, you can configure a user-managed, version-specific service account for each deployed app version, either by adding `service_account` in `app.yaml` or by passing `--service-account` to `gcloud app deploy`. The version-specific service account must belong to the same project as the deployed application and is distinct from the app-level default service account, enabling different privileges per version. This lets operators grant version-tailored permissions based on each version’s workload needs.

## Evidence Summary

The cited Google Cloud documentation page defines version-specific service accounts, how to configure them in flexible App Engine deployment, and their scope and role relative to the app-level default account.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts)

## Supporting Pages

### "Configure App Engine service accounts \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts)
- Source ID: `site-docs-root`
- Final score: 60
- Re-rank relevance: STRONG
- Re-rank rationale: The page explicitly explains per-version service accounts and how to assign a specific service account identity when deploying a version.

Evidence snippets:
- Your version-specific service account must be in the same project where you deploy your application. app.yaml In your app.yaml file, specify your service account by adding the service account element: service account: SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com Replace: SERVICE ACCOUNT NAME with the name of the service account that you created.
- There are two types of service accounts in App Engine and any service account in your Cloud project can be assigned to act as either the app-level default or per-version service account: App-level default service account - This service account is used for all of your deployed services when you don't configure a "per-version service account".
- Set a version-specific service account gcloud Run the gcloud app deploy command: gcloud app deploy --service-account = SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com Replace: SERVICE ACCOUNT NAME with the name of the service account that you created.
- Using a version-specific service account lets you grant different privileges to each application version, based on the specific tasks it performs, and avoid granting more privileges than necessary.

