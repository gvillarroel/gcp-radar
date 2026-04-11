---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:40:06.735Z"
product_name: "App Engine flexible environment Go"
product_slug: "app-engine-flexible-environment-go"
feature_name: "App-level default service account configurability"
feature_slug: "app-level-default-service-account-configurability"
latest_feature_date: "2022-12-13"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts"
  - "https://docs.cloud.google.com/appengine/docs/flexible/access-control"
keywords:
  - "gcloud app update --service-account"
  - "project service account selection"
  - "configurable app SA"
  - "application default service account"
  - "set app default service account"
  - "app-level default service account"
  - "app default SA"
---

# App-level default service account configurability

Product: App Engine flexible environment Go
Coverage: HIGH

## Step 02 Summary

Allows any configured service account in the project to be used as the App Engine app-level default service account.

## Extended Definition

App-level default service account configurability in App Engine flexible is the ability to configure which service account the application uses by default for all deployed services unless a per-version service account is explicitly assigned. You can set this app-level default at app creation or update it later via gcloud app create --service-account or gcloud app update --service-account, choosing any service account in the Cloud project, and versions already deployed use the new account only after redeployment. If no app-level default is configured, App Engine falls back to the auto-created appspot.gserviceaccount.com account.

## Evidence Summary

The cited docs define the app-level default service account concept, explain when it is used, and provide supported commands and behavior for assigning or changing it.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts)
- [https://docs.cloud.google.com/appengine/docs/flexible/access-control](https://docs.cloud.google.com/appengine/docs/flexible/access-control)

## Supporting Pages

### "Configure App Engine service accounts \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts)
- Source ID: `site-docs-root`
- Final score: 52
- Re-rank relevance: STRONG
- Re-rank rationale: It describes that the app-level default service account can be changed from the auto-created default to another service account in the project, including during app creation.

Evidence snippets:
- All previously deployed versions will not use the new app-level default service account until you re-deploy that version. gcloud Run the gcloud app update command. gcloud app update --service-account = SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com Replace: SERVICE ACCOUNT NAME with the name of the service account that you created.
- To create a your App Engine application and assign an app-level default service account, you can use one of the following: gcloud Run the gcloud app create command: gcloud app create --service-account = SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com Replace: SERVICE ACCOUNT NAME with the name of the service account that you created.
- There are two types of service accounts in App Engine and any service account in your Cloud project can be assigned to act as either the app-level default or per-version service account: App-level default service account - This service account is used for all of your deployed services when you don't configure a "per-version service account".
- Update the app-level default service account for your app To update the app-level default service account for your application, you can use one of the following to assign a new service account: Important: Only versions deployed after the update will use the new app-level default service account.

### "Setting up access control \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/access-control](https://docs.cloud.google.com/appengine/docs/flexible/access-control)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: WEAK
- Re-rank rationale: The page covers IAM access and service-account use in App Engine, but it does not define how to configure the app-level default service account.

Evidence snippets:
- App-level default service account : If you don't configure a per-version service account, Google Cloud uses the app-level default service account for all of your deployed services.
- If you don't assign an app-level default service account, Google Cloud uses the auto-created App Engine default service account ( PROJECT ID @appspot.gserviceaccount.com ).
- For example, if a version requires permissions that differ from the app-level default service account, you can assign a service account that is specific to that version.
- You assign the app-level default service account when you create the app.

