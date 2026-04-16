---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:30:30.386Z"
product_name: "App Engine flexible environment custom runtimes"
product_slug: "app-engine-flexible-environment-custom-runtimes"
feature_name: "App-level default service account selection"
feature_slug: "app-level-default-service-account-selection"
latest_feature_date: "2022-12-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/user-managed-service-accounts"
  - "https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts"
  - "https://docs.cloud.google.com/appengine/docs/flexible/access-control"
keywords:
  - "app"
  - "level"
  - "default"
  - "account"
  - "selection"
  - "engine"
  - "lets"
  - "you"
---

# App-level default service account selection

Product: App Engine flexible environment custom runtimes
Coverage: MEDIUM

## Step 02 Summary

App Engine lets you choose any configured project service account as the app-level default service account during app creation and updates.

## Extended Definition

App Engine lets you choose any configured project service account as the app-level default service account during app creation and updates.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/user-managed-service-accounts](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/user-managed-service-accounts)
- [https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts)
- [https://docs.cloud.google.com/appengine/docs/flexible/access-control](https://docs.cloud.google.com/appengine/docs/flexible/access-control)

## Supporting Pages

### "Configure App Engine service accounts \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/user-managed-service-accounts](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/user-managed-service-accounts)
- Source ID: `site-docs-reference-2`
- Final score: 140
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To create a your App Engine application and assign an app-level default service account, you can use one of the following: gcloud Run the gcloud app create command: gcloud app create --service-account = SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com Replace: SERVICE ACCOUNT NAME with the name of the service account that you created.
- There are two types of service accounts in App Engine and any service account in your Cloud project can be assigned to act as either the app-level default or per-version service account: App-level default service account - This service account is used for all of your deployed services when you don't configure a "per-version service account".
- Specify an app-level default service account during app creation During the initial App Engine application creation process, you can choose to assign a service account that you created or use the auto-created PROJECT ID @appspot.gserviceaccount.com service account to act as the default.
- All previously deployed versions will not use the new app-level default service account until you re-deploy that version. gcloud Run the gcloud app update command. gcloud app update --service-account = SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com Replace: SERVICE ACCOUNT NAME with the name of the service account that you created.

### "Configure App Engine service accounts \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts)
- Source ID: `site-docs-reference`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- To create a your App Engine application and assign an app-level default service account, you can use one of the following: gcloud Run the gcloud app create command: gcloud app create --service-account = SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com Replace: SERVICE ACCOUNT NAME with the name of the service account that you created.
- There are two types of service accounts in App Engine and any service account in your Cloud project can be assigned to act as either the app-level default or per-version service account: App-level default service account - This service account is used for all of your deployed services when you don't configure a "per-version service account".
- Specify an app-level default service account during app creation During the initial App Engine application creation process, you can choose to assign a service account that you created or use the auto-created PROJECT ID @appspot.gserviceaccount.com service account to act as the default.
- All previously deployed versions will not use the new app-level default service account until you re-deploy that version. gcloud Run the gcloud app update command. gcloud app update --service-account = SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com Replace: SERVICE ACCOUNT NAME with the name of the service account that you created.

### "Setting up access control \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/access-control](https://docs.cloud.google.com/appengine/docs/flexible/access-control)
- Source ID: `site-docs-reference`
- Final score: 112
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you don't assign an app-level default service account, Google Cloud uses the auto-created App Engine default service account ( PROJECT ID @appspot.gserviceaccount.com ).
- Specifying a service account App Engine lets you use two types of service accounts: Per-version service account : A service account configured as the identity for a specific version of your deployed service.
- App-level default service account : If you don't configure a per-version service account, Google Cloud uses the app-level default service account for all of your deployed services.
- If you remove Editor role from the App Engine default service account, or if you are using a per-version service account, make sure to grant the service account these roles.

