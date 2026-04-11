---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T21:05:36.387Z"
product_name: "App Engine flexible environment Node.js"
product_slug: "app-engine-flexible-environment-node-js"
feature_name: "App Engine app-level default service account configuration"
feature_slug: "app-engine-app-level-default-service-account-configuration"
latest_feature_date: "2022-12-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts"
  - "https://docs.cloud.google.com/appengine/docs/flexible/access-control"
  - "https://docs.cloud.google.com/appengine/docs/flexible/nodejs/user-managed-service-accounts"
  - "https://docs.cloud.google.com/appengine/docs/flexible/nodejs/access-control"
keywords:
  - "create application with service account"
  - "update application service account"
  - "default service account setting"
  - "application default service account"
  - "application default SA"
  - "app-level default service account"
  - "app-level default SA"
  - "default app service account"
---

# App Engine app-level default service account configuration

Product: App Engine flexible environment Node.js
Coverage: LOW

## Step 02 Summary

App Engine now allows any configured service account in a project to be used as the app-level default service account when creating or updating an application.

## Extended Definition

App Engine now allows any configured service account in a project to be used as the app-level default service account when creating or updating an application.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts)
- [https://docs.cloud.google.com/appengine/docs/flexible/access-control](https://docs.cloud.google.com/appengine/docs/flexible/access-control)
- [https://docs.cloud.google.com/appengine/docs/flexible/nodejs/user-managed-service-accounts](https://docs.cloud.google.com/appengine/docs/flexible/nodejs/user-managed-service-accounts)
- [https://docs.cloud.google.com/appengine/docs/flexible/nodejs/access-control](https://docs.cloud.google.com/appengine/docs/flexible/nodejs/access-control)

## Supporting Pages

### "Configure App Engine service accounts \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts)
- Source ID: `site-docs-reference`
- Final score: 48
- Re-rank relevance: STRONG
- Re-rank rationale: The page explains that App Engine uses an app-level default service account, identifies the default value, and states that any project service account can be assigned as the app-level default via creation or later configuration.

Evidence snippets:
- To create a your App Engine application and assign an app-level default service account, you can use one of the following: gcloud Run the gcloud app create command: gcloud app create --service-account = SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com Replace: SERVICE ACCOUNT NAME with the name of the service account that you created.
- All previously deployed versions will not use the new app-level default service account until you re-deploy that version. gcloud Run the gcloud app update command. gcloud app update --service-account = SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com Replace: SERVICE ACCOUNT NAME with the name of the service account that you created.
- There are two types of service accounts in App Engine and any service account in your Cloud project can be assigned to act as either the app-level default or per-version service account: App-level default service account - This service account is used for all of your deployed services when you don't configure a "per-version service account".
- Update the app-level default service account for your app To update the app-level default service account for your application, you can use one of the following to assign a new service account: Important: Only versions deployed after the update will use the new app-level default service account.

### "Setting up access control \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/access-control](https://docs.cloud.google.com/appengine/docs/flexible/access-control)
- Source ID: `site-docs-reference`
- Final score: 38
- Re-rank relevance: MODERATE
- Re-rank rationale: The page explains how to grant App Engine apps access to Google Cloud services via service accounts, which is directly related to app service identity and IAM role configuration.

Evidence snippets:
- App-level default service account : If you don't configure a per-version service account, Google Cloud uses the app-level default service account for all of your deployed services.
- If you don't assign an app-level default service account, Google Cloud uses the auto-created App Engine default service account ( PROJECT ID @appspot.gserviceaccount.com ).
- For example, if a version requires permissions that differ from the app-level default service account, you can assign a service account that is specific to that version.
- You assign the app-level default service account when you create the app.

### "Configure App Engine service accounts \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/nodejs/user-managed-service-accounts](https://docs.cloud.google.com/appengine/docs/flexible/nodejs/user-managed-service-accounts)
- Source ID: `site-docs-reference-2`
- Final score: 26
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To create a your App Engine application and assign an app-level default service account, you can use one of the following: gcloud Run the gcloud app create command: gcloud app create --service-account = SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com Replace: SERVICE ACCOUNT NAME with the name of the service account that you created.
- All previously deployed versions will not use the new app-level default service account until you re-deploy that version. gcloud Run the gcloud app update command. gcloud app update --service-account = SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com Replace: SERVICE ACCOUNT NAME with the name of the service account that you created.
- There are two types of service accounts in App Engine and any service account in your Cloud project can be assigned to act as either the app-level default or per-version service account: App-level default service account - This service account is used for all of your deployed services when you don't configure a "per-version service account".
- Update the app-level default service account for your app To update the app-level default service account for your application, you can use one of the following to assign a new service account: Important: Only versions deployed after the update will use the new app-level default service account.

### "Setting up access control \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/nodejs/access-control](https://docs.cloud.google.com/appengine/docs/flexible/nodejs/access-control)
- Source ID: `site-docs-reference-2`
- Final score: 26
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- App-level default service account : If you don't configure a per-version service account, Google Cloud uses the app-level default service account for all of your deployed services.
- If you don't assign an app-level default service account, Google Cloud uses the auto-created App Engine default service account ( PROJECT ID @appspot.gserviceaccount.com ).
- For example, if a version requires permissions that differ from the app-level default service account, you can assign a service account that is specific to that version.
- You assign the app-level default service account when you create the app.

