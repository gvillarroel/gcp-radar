---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T21:44:03.342Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "App-level default service account selection for App Engine"
feature_slug: "app-level-default-service-account-selection-for-app-engine"
latest_feature_date: "2022-12-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts"
  - "https://docs.cloud.google.com/appengine/docs/standard/java11/access-control"
  - "https://docs.cloud.google.com/appengine/docs/standard/access-control"
keywords:
  - "app-level IAM identity"
  - "configured service accounts"
  - "service account selection"
  - "project service account list"
  - "application default service account"
  - "app-level SA"
  - "app-level default service account"
  - "default service account for app"
---

# App-level default service account selection for App Engine

Product: App Engine standard environment Java
Coverage: LOW

## Step 02 Summary

App Engine now allows any configured service account in a Cloud project to be used as the app-level default service account.

## Extended Definition

App Engine now allows any configured service account in a Cloud project to be used as the app-level default service account.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts)
- [https://docs.cloud.google.com/appengine/docs/standard/java11/access-control](https://docs.cloud.google.com/appengine/docs/standard/java11/access-control)
- [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control)

## Supporting Pages

### "Configure App Engine service accounts \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts)
- Source ID: `site-docs-reference`
- Final score: 52
- Re-rank relevance: STRONG
- Re-rank rationale: It describes the app-level default service account concept and explains how to assign another service account to be the app-level default.

Evidence snippets:
- View your configured service accounts To view the current app-level default service account, run the gcloud app describe command.
- To create a your App Engine application and assign an app-level default service account, you can use one of the following: gcloud Run the gcloud app create command: gcloud app create --service-account = SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com Replace: SERVICE ACCOUNT NAME with the name of the service account that you created.
- All previously deployed versions will not use the new app-level default service account until you re-deploy that version. gcloud Run the gcloud app update command. gcloud app update --service-account = SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com Replace: SERVICE ACCOUNT NAME with the name of the service account that you created.
- There are two types of service accounts in App Engine and any service account in your Cloud project can be assigned to act as either the app-level default or per-version service account: App-level default service account - This service account is used for all of your deployed services when you don't configure a "per-version service account".

### "Setting up access control \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java11/access-control](https://docs.cloud.google.com/appengine/docs/standard/java11/access-control)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- App-level default service account : If you don't configure a per-version service account, Google Cloud uses the app-level default service account for all of your deployed services.
- If you don't assign an app-level default service account, Google Cloud uses the auto-created App Engine default service account ( PROJECT ID @appspot.gserviceaccount.com ).
- For example, if a version requires permissions that differ from the app-level default service account, you can assign a service account that is specific to that version.
- You assign the app-level default service account when you create the app.

### "Setting up access control \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control)
- Source ID: `site-docs-reference-2`
- Final score: 26
- Re-rank relevance: WEAK
- Re-rank rationale: It covers App Engine service account usage and IAM permissions, but does not define how to configure or select an app-level default service account.

Evidence snippets:
- App-level default service account : If you don't configure a per-version service account, Google Cloud uses the app-level default service account for all of your deployed services.
- If you don't assign an app-level default service account, Google Cloud uses the auto-created App Engine default service account ( PROJECT ID @appspot.gserviceaccount.com ).
- For example, if a version requires permissions that differ from the app-level default service account, you can assign a service account that is specific to that version.
- You assign the app-level default service account when you create the app.

