---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:39:03.546Z"
product_name: "App Engine flexible environment custom runtimes"
product_slug: "app-engine-flexible-environment-custom-runtimes"
feature_name: "Configurable app-level default service account for App Engine applications"
feature_slug: "configurable-app-level-default-service-account-for-app-engine-applications"
latest_feature_date: "2022-12-13"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts"
  - "https://docs.cloud.google.com/appengine/docs/flexible/access-control"
keywords:
  - "configure project service account"
  - "application-level service account"
  - "app update default SA"
  - "app creation service account"
  - "app-level default service account"
  - "default service account for app"
  - "app default service account"
  - "default app SA"
---

# Configurable app-level default service account for App Engine applications

Product: App Engine flexible environment custom runtimes
Coverage: HIGH

## Step 02 Summary

Any configured project service account can now be used as the App Engine app-level default service account during creation and updates.

## Extended Definition

App Engine flexible environment lets you assign an app-level default service account using a Cloud IAM service account from your project when creating an app (`gcloud app create --service-account=...`) and when updating an existing app (`gcloud app update --service-account=...`). The app-level default service account is used by all deployed services when no per-version service account is configured, and if changed, only versions deployed after the update use the new value unless previous versions are re-deployed; if none is assigned, App Engine uses the auto-created app default service account.

## Evidence Summary

These two official pages confirm that any project service account can be configured as the app-level default via create/update commands, and define how that account is selected at runtime (with service-level override and fallback behavior).

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts)
- [https://docs.cloud.google.com/appengine/docs/flexible/access-control](https://docs.cloud.google.com/appengine/docs/flexible/access-control)

## Supporting Pages

### "Configure App Engine service accounts \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts)
- Source ID: `site-docs-root`
- Final score: 48
- Re-rank relevance: STRONG
- Re-rank rationale: The page explicitly describes the App Engine app-level default service account, including the default service account behavior and how to assign a user-created account during app creation or via CLI/console/API.

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
- Re-rank rationale: The page discusses app-level identity and service-account-based access for App Engine, which is relevant context, but it does not clearly define configurable app-level default service account behavior at creation/update time.

Evidence snippets:
- App-level default service account : If you don't configure a per-version service account, Google Cloud uses the app-level default service account for all of your deployed services.
- If you don't assign an app-level default service account, Google Cloud uses the auto-created App Engine default service account ( PROJECT ID @appspot.gserviceaccount.com ).
- For example, if a version requires permissions that differ from the app-level default service account, you can assign a service account that is specific to that version.
- You assign the app-level default service account when you create the app.

