---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:48:27.782Z"
product_name: "App Engine flexible environment Ruby"
product_slug: "app-engine-flexible-environment-ruby"
feature_name: "App Engine flexible app-level default service account"
feature_slug: "app-engine-flexible-app-level-default-service-account"
latest_feature_date: "2022-12-13"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts"
  - "https://docs.cloud.google.com/appengine/docs/flexible/access-control"
keywords:
  - "application-level default service account"
  - "create app with custom default account"
  - "set app default service account"
  - "application default SA"
  - "update app default service account"
  - "app-level default service account"
  - "app-level SA"
---

# App Engine flexible app-level default service account

Product: App Engine flexible environment Ruby
Coverage: HIGH

## Step 02 Summary

App Engine now supports using any configured Cloud project service account as the app-level default service account when creating or updating applications.

## Extended Definition

In App Engine flexible environment, an app-level default service account is a configurable account that can be set when creating an app (for example with `gcloud app create --service-account`) and later changed (for example with `gcloud app update --service-account`). If no per-version service account is configured, this app-level account is used by default for deployed services, while previously deployed versions will not use a newly updated app-level default until they are redeployed. Any service account in the Cloud project may be assigned as either the app-level default or a per-version service account.

## Evidence Summary

The two App Engine flexible documentation pages collectively specify how to configure and update the app-level default service account, its fallback behavior, and that app-level and per-version accounts can be any service account in the project.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts)
- [https://docs.cloud.google.com/appengine/docs/flexible/access-control](https://docs.cloud.google.com/appengine/docs/flexible/access-control)

## Supporting Pages

### "Configure App Engine service accounts \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts)
- Source ID: `site-docs-root`
- Final score: 48
- Re-rank relevance: STRONG
- Re-rank rationale: It defines the app-level default service account concept and documents assigning or changing it via CLI, console, or Admin API.

Evidence snippets:
- To create a your App Engine application and assign an app-level default service account, you can use one of the following: gcloud Run the gcloud app create command: gcloud app create --service-account = SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com Replace: SERVICE ACCOUNT NAME with the name of the service account that you created.
- All previously deployed versions will not use the new app-level default service account until you re-deploy that version. gcloud Run the gcloud app update command. gcloud app update --service-account = SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com Replace: SERVICE ACCOUNT NAME with the name of the service account that you created.
- There are two types of service accounts in App Engine and any service account in your Cloud project can be assigned to act as either the app-level default or per-version service account: App-level default service account - This service account is used for all of your deployed services when you don't configure a "per-version service account".
- Update the app-level default service account for your app To update the app-level default service account for your application, you can use one of the following to assign a new service account: Important: Only versions deployed after the update will use the new app-level default service account.

### "Setting up access control \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/access-control](https://docs.cloud.google.com/appengine/docs/flexible/access-control)
- Source ID: `site-docs-root`
- Final score: 38
- Re-rank relevance: MODERATE
- Re-rank rationale: The page explains App Engine access-control patterns and how service accounts are used for an app’s access to Google Cloud services, which is relevant background for app-level service account behavior.

Evidence snippets:
- App-level default service account : If you don't configure a per-version service account, Google Cloud uses the app-level default service account for all of your deployed services.
- If you don't assign an app-level default service account, Google Cloud uses the auto-created App Engine default service account ( PROJECT ID @appspot.gserviceaccount.com ).
- For example, if a version requires permissions that differ from the app-level default service account, you can assign a service account that is specific to that version.
- You assign the app-level default service account when you create the app.

