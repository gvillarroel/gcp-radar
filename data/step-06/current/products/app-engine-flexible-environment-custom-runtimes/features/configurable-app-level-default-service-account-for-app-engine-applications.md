---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:21:29.603Z"
product_name: "App Engine flexible environment custom runtimes"
product_slug: "app-engine-flexible-environment-custom-runtimes"
feature_name: "Configurable app-level default service account for App Engine applications"
feature_slug: "configurable-app-level-default-service-account-for-app-engine-applications"
latest_feature_date: "2022-12-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts"
  - "https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/user-managed-service-accounts"
  - "https://docs.cloud.google.com/appengine/docs/flexible/access-control"
keywords:
  - "configurable"
  - "app"
  - "level"
  - "default"
  - "account"
  - "engine"
  - "applications"
  - "configured"
---

# Configurable app-level default service account for App Engine applications

Product: App Engine flexible environment custom runtimes
Coverage: MEDIUM

## Step 02 Summary

Any configured project service account can now be used as the App Engine app-level default service account during creation and updates.

## Extended Definition

Any configured project service account can now be used as the App Engine app-level default service account during creation and updates.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts)
- [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/user-managed-service-accounts](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/user-managed-service-accounts)
- [https://docs.cloud.google.com/appengine/docs/flexible/access-control](https://docs.cloud.google.com/appengine/docs/flexible/access-control)

## Supporting Pages

### "Configure App Engine service accounts \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts)
- Source ID: `site-docs-reference`
- Final score: 154
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To create a your App Engine application and assign an app-level default service account, you can use one of the following: gcloud Run the gcloud app create command: gcloud app create --service-account = SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com Replace: SERVICE ACCOUNT NAME with the name of the service account that you created.
- There are two types of service accounts in App Engine and any service account in your Cloud project can be assigned to act as either the app-level default or per-version service account: App-level default service account - This service account is used for all of your deployed services when you don't configure a "per-version service account".
- Specify an app-level default service account during app creation During the initial App Engine application creation process, you can choose to assign a service account that you created or use the auto-created PROJECT ID @appspot.gserviceaccount.com service account to act as the default.
- View your configured service accounts To view the current app-level default service account, run the gcloud app describe command.

### "Configure App Engine service accounts \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/user-managed-service-accounts](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/user-managed-service-accounts)
- Source ID: `site-docs-reference-2`
- Final score: 154
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To create a your App Engine application and assign an app-level default service account, you can use one of the following: gcloud Run the gcloud app create command: gcloud app create --service-account = SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com Replace: SERVICE ACCOUNT NAME with the name of the service account that you created.
- There are two types of service accounts in App Engine and any service account in your Cloud project can be assigned to act as either the app-level default or per-version service account: App-level default service account - This service account is used for all of your deployed services when you don't configure a "per-version service account".
- Specify an app-level default service account during app creation During the initial App Engine application creation process, you can choose to assign a service account that you created or use the auto-created PROJECT ID @appspot.gserviceaccount.com service account to act as the default.
- View your configured service accounts To view the current app-level default service account, run the gcloud app describe command.

### "Setting up access control \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/access-control](https://docs.cloud.google.com/appengine/docs/flexible/access-control)
- Source ID: `site-docs-reference`
- Final score: 126
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you don't assign an app-level default service account, Google Cloud uses the auto-created App Engine default service account ( PROJECT ID @appspot.gserviceaccount.com ).
- Specifying a service account App Engine lets you use two types of service accounts: Per-version service account : A service account configured as the identity for a specific version of your deployed service.
- App-level default service account : If you don't configure a per-version service account, Google Cloud uses the app-level default service account for all of your deployed services.
- If you remove Editor role from the App Engine default service account, or if you are using a per-version service account, make sure to grant the service account these roles.

