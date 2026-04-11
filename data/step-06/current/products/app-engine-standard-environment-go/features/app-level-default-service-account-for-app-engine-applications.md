---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:52:30.761Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "App-level default service account for App Engine applications"
feature_slug: "app-level-default-service-account-for-app-engine-applications"
latest_feature_date: "2022-12-13"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts"
  - "https://docs.cloud.google.com/appengine/docs/standard/access-control"
keywords:
  - "app-level default service account"
  - "application default service account"
  - "Cloud project service account"
  - "configured service account"
  - "create application"
  - "update application"
  - "app-level SA"
  - "application service account"
---

# App-level default service account for App Engine applications

Product: App Engine standard environment Go
Coverage: HIGH

## Step 02 Summary

App Engine now allows any configured service account in the Cloud project to be used as the app-level default service account when creating or updating applications.

## Extended Definition

The app-level default service account is a service account configured at the App Engine application level that provides credentials for all deployed services unless a per-version service account is set. Any service account in the Cloud project can be assigned as the app-level default when creating or updating an App Engine application using `gcloud app create --service-account` or `gcloud app update --service-account`, and previously deployed versions do not switch to the new app-level service account until redeployed. If no app-level default is configured, Google Cloud uses the auto-created App Engine default service account (`PROJECT_ID@appspot.gserviceaccount.com`).

## Evidence Summary

These docs define what the app-level default service account is, which account can be assigned, how to configure it during create/update, how it is used across services by default, and the fallback behavior when it is not configured.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts)
- [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control)

## Supporting Pages

### "Configure App Engine service accounts \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts)
- Source ID: `site-docs-root`
- Final score: 52
- Re-rank relevance: STRONG
- Re-rank rationale: The page clearly defines the app-level default service account concept and how to assign a different account during app creation or updates via CLI, console, or API.

Evidence snippets:
- View your configured service accounts To view the current app-level default service account, run the gcloud app describe command.
- To create a your App Engine application and assign an app-level default service account, you can use one of the following: gcloud Run the gcloud app create command: gcloud app create --service-account = SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com Replace: SERVICE ACCOUNT NAME with the name of the service account that you created.
- All previously deployed versions will not use the new app-level default service account until you re-deploy that version. gcloud Run the gcloud app update command. gcloud app update --service-account = SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com Replace: SERVICE ACCOUNT NAME with the name of the service account that you created.
- There are two types of service accounts in App Engine and any service account in your Cloud project can be assigned to act as either the app-level default or per-version service account: App-level default service account - This service account is used for all of your deployed services when you don't configure a "per-version service account".

### "Setting up access control \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control)
- Source ID: `site-docs-root`
- Final score: 38
- Re-rank relevance: MODERATE
- Re-rank rationale: It discusses service accounts and how App Engine applications access Google Cloud services, which is relevant context, but does not clearly document the app-level default service account selection behavior.

Evidence snippets:
- App-level default service account : If you don't configure a per-version service account, Google Cloud uses the app-level default service account for all of your deployed services.
- If you don't assign an app-level default service account, Google Cloud uses the auto-created App Engine default service account ( PROJECT ID @appspot.gserviceaccount.com ).
- For example, if a version requires permissions that differ from the app-level default service account, you can assign a service account that is specific to that version.
- You assign the app-level default service account when you create the app.

