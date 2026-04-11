---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:43:43.847Z"
product_name: "App Engine flexible environment Java"
product_slug: "app-engine-flexible-environment-java"
feature_name: "App Engine app-level default service account selection"
feature_slug: "app-engine-app-level-default-service-account-selection"
latest_feature_date: "2022-12-13"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts"
  - "https://docs.cloud.google.com/appengine/docs/flexible/access-control"
keywords:
  - "application-level default service account"
  - "create app engine application"
  - "service account selection"
  - "app-level default service account"
  - "app-level SA"
  - "default service account"
  - "default-service-account"
  - "update App Engine app"
---

# App Engine app-level default service account selection

Product: App Engine flexible environment Java
Coverage: HIGH

## Step 02 Summary

You can use any configured service account in the project as the app-level default service account when creating or updating App Engine applications.

## Extended Definition

In App Engine flexible environment, an app-level default service account is the IAM identity used by all deployed services when a per-version service account is not set. When you create or update an App Engine app, you can specify this app-level default service account as any service account in the same Cloud project via the App Engine create/update commands, and Google Cloud will use that assignment for subsequently deployed versions. Previously deployed versions do not automatically switch to the new app-level service account until they are re-deployed.

## Evidence Summary

These pages define how App Engine flexible uses an app-level default service account, how to assign it at app create/update time using supported CLI commands, and the deployment behavior when the assignment changes.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts)
- [https://docs.cloud.google.com/appengine/docs/flexible/access-control](https://docs.cloud.google.com/appengine/docs/flexible/access-control)

## Supporting Pages

### "Configure App Engine service accounts \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts)
- Source ID: `site-docs-root`
- Final score: 68
- Re-rank relevance: STRONG
- Re-rank rationale: The page explicitly explains the app-level default service account and states it can be set to a user-created service account during app creation or afterward via supported management methods.

Evidence snippets:
- To create a your App Engine application and assign an app-level default service account, you can use one of the following: gcloud Run the gcloud app create command: gcloud app create --service-account = SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com Replace: SERVICE ACCOUNT NAME with the name of the service account that you created.
- All previously deployed versions will not use the new app-level default service account until you re-deploy that version. gcloud Run the gcloud app update command. gcloud app update --service-account = SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com Replace: SERVICE ACCOUNT NAME with the name of the service account that you created.
- There are two types of service accounts in App Engine and any service account in your Cloud project can be assigned to act as either the app-level default or per-version service account: App-level default service account - This service account is used for all of your deployed services when you don't configure a "per-version service account".
- Update the app-level default service account for your app To update the app-level default service account for your application, you can use one of the following to assign a new service account: Important: Only versions deployed after the update will use the new app-level default service account.

### "Setting up access control \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/access-control](https://docs.cloud.google.com/appengine/docs/flexible/access-control)
- Source ID: `site-docs-root`
- Final score: 46
- Re-rank relevance: WEAK
- Re-rank rationale: The page covers IAM roles and service accounts for App Engine access control, but it does not explain how to configure or select an app-level default service account.

Evidence snippets:
- App-level default service account : If you don't configure a per-version service account, Google Cloud uses the app-level default service account for all of your deployed services.
- If you don't assign an app-level default service account, Google Cloud uses the auto-created App Engine default service account ( PROJECT ID @appspot.gserviceaccount.com ).
- For example, if a version requires permissions that differ from the app-level default service account, you can assign a service account that is specific to that version.
- You assign the app-level default service account when you create the app.

