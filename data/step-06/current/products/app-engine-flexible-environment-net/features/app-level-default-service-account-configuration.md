---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:14:55.670Z"
product_name: "App Engine flexible environment .NET"
product_slug: "app-engine-flexible-environment-net"
feature_name: "App-level default service account configuration"
feature_slug: "app-level-default-service-account-configuration"
latest_feature_date: "2022-12-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://cloud.google.com/appengine/docs/flexible/configure-service-accounts"
  - "https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts"
  - "https://docs.cloud.google.com/appengine/docs/flexible/dotnet/user-managed-service-accounts"
keywords:
  - "app"
  - "level"
  - "default"
  - "account"
  - "configuration"
  - "engine"
  - "now"
  - "allows"
---

# App-level default service account configuration

Product: App Engine flexible environment .NET
Coverage: MEDIUM

## Step 02 Summary

App Engine now allows any configured service account in the Cloud project to be used as the app-level default service account when creating or updating applications.

## Extended Definition

App Engine now allows any configured service account in the Cloud project to be used as the app-level default service account when creating or updating applications.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://cloud.google.com/appengine/docs/flexible/configure-service-accounts](https://cloud.google.com/appengine/docs/flexible/configure-service-accounts)
- [https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts)
- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/user-managed-service-accounts](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/user-managed-service-accounts)

## Supporting Pages

### "Configure App Engine service accounts \_|\_ App Engine flexible environment\

- URL: [https://cloud.google.com/appengine/docs/flexible/configure-service-accounts](https://cloud.google.com/appengine/docs/flexible/configure-service-accounts)
- Source ID: `site-docs-root`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- To create a your App Engine application and assign an app-level default service account, you can use one of the following: gcloud Run the gcloud app create command: gcloud app create --service-account = SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com Replace: SERVICE ACCOUNT NAME with the name of the service account that you created.
- There are two types of service accounts in App Engine and any service account in your Cloud project can be assigned to act as either the app-level default or per-version service account: App-level default service account - This service account is used for all of your deployed services when you don't configure a "per-version service account".
- Specify an app-level default service account during app creation During the initial App Engine application creation process, you can choose to assign a service account that you created or use the auto-created PROJECT ID @appspot.gserviceaccount.com service account to act as the default.
- All previously deployed versions will not use the new app-level default service account until you re-deploy that version. gcloud Run the gcloud app update command. gcloud app update --service-account = SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com Replace: SERVICE ACCOUNT NAME with the name of the service account that you created.

### "Configure App Engine service accounts \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts)
- Source ID: `site-docs-reference`
- Final score: 129
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To create a your App Engine application and assign an app-level default service account, you can use one of the following: gcloud Run the gcloud app create command: gcloud app create --service-account = SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com Replace: SERVICE ACCOUNT NAME with the name of the service account that you created.
- There are two types of service accounts in App Engine and any service account in your Cloud project can be assigned to act as either the app-level default or per-version service account: App-level default service account - This service account is used for all of your deployed services when you don't configure a "per-version service account".
- Specify an app-level default service account during app creation During the initial App Engine application creation process, you can choose to assign a service account that you created or use the auto-created PROJECT ID @appspot.gserviceaccount.com service account to act as the default.
- All previously deployed versions will not use the new app-level default service account until you re-deploy that version. gcloud Run the gcloud app update command. gcloud app update --service-account = SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com Replace: SERVICE ACCOUNT NAME with the name of the service account that you created.

### "Configure App Engine service accounts \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/user-managed-service-accounts](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/user-managed-service-accounts)
- Source ID: `site-docs-reference-2`
- Final score: 129
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To create a your App Engine application and assign an app-level default service account, you can use one of the following: gcloud Run the gcloud app create command: gcloud app create --service-account = SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com Replace: SERVICE ACCOUNT NAME with the name of the service account that you created.
- There are two types of service accounts in App Engine and any service account in your Cloud project can be assigned to act as either the app-level default or per-version service account: App-level default service account - This service account is used for all of your deployed services when you don't configure a "per-version service account".
- Specify an app-level default service account during app creation During the initial App Engine application creation process, you can choose to assign a service account that you created or use the auto-created PROJECT ID @appspot.gserviceaccount.com service account to act as the default.
- All previously deployed versions will not use the new app-level default service account until you re-deploy that version. gcloud Run the gcloud app update command. gcloud app update --service-account = SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com Replace: SERVICE ACCOUNT NAME with the name of the service account that you created.

