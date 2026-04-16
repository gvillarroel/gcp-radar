---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:50:31.510Z"
product_name: "App Engine flexible environment Ruby"
product_slug: "app-engine-flexible-environment-ruby"
feature_name: "Ruby default interpreter version update"
feature_slug: "ruby-default-interpreter-version-update"
latest_feature_date: "2017-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/ruby"
  - "https://docs.cloud.google.com/appengine/docs/flexible/ruby/runtime"
  - "https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts"
keywords:
  - "ruby"
  - "default"
  - "interpreter"
  - "version"
  - "update"
  - "app"
  - "engine"
  - "flexible"
---

# Ruby default interpreter version update

Product: App Engine flexible environment Ruby
Coverage: MEDIUM

## Step 02 Summary

The default Ruby interpreter version for App Engine flexible environment was updated to Ruby 2.3.4.

## Extended Definition

The default Ruby interpreter version for App Engine flexible environment was updated to Ruby 2.3.4.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/ruby](https://docs.cloud.google.com/appengine/docs/flexible/ruby)
- [https://docs.cloud.google.com/appengine/docs/flexible/ruby/runtime](https://docs.cloud.google.com/appengine/docs/flexible/ruby/runtime)
- [https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts)

## Supporting Pages

### "The Ruby runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/ruby](https://docs.cloud.google.com/appengine/docs/flexible/ruby)
- Source ID: `site-docs-reference-2`
- Final score: 104
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Specify the operating system setting in your app.yaml file: runtime : ruby env : flex runtime config : operating system : "ubuntu24" Optionally, you can specify a version of the Ruby interpreter using a .ruby-version file in your application directory.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback The Ruby runtime Stay organized with collections Save and categorize content based on your preferences.
- To use Ruby runtime version 3.1 and earlier , specify a version of the Ruby interpreter using a .ruby-version file in your application directory.
- Note that the default can change at any time, so it is recommended that your app specifies a Ruby version.

### "The Ruby runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/ruby/runtime](https://docs.cloud.google.com/appengine/docs/flexible/ruby/runtime)
- Source ID: `site-docs-reference-2`
- Final score: 104
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Specify the operating system setting in your app.yaml file: runtime : ruby env : flex runtime config : operating system : "ubuntu24" Optionally, you can specify a version of the Ruby interpreter using a .ruby-version file in your application directory.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback The Ruby runtime Stay organized with collections Save and categorize content based on your preferences.
- To use Ruby runtime version 3.1 and earlier , specify a version of the Ruby interpreter using a .ruby-version file in your application directory.
- Note that the default can change at any time, so it is recommended that your app specifies a Ruby version.

### "Configure App Engine service accounts \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts)
- Source ID: `site-docs-reference`
- Final score: 99
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- All previously deployed versions will not use the new app-level default service account until you re-deploy that version. gcloud Run the gcloud app update command. gcloud app update --service-account = SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com Replace: SERVICE ACCOUNT NAME with the name of the service account that you created.
- There are two types of service accounts in App Engine and any service account in your Cloud project can be assigned to act as either the app-level default or per-version service account: App-level default service account - This service account is used for all of your deployed services when you don't configure a "per-version service account".
- Update the app-level default service account for your app To update the app-level default service account for your application, you can use one of the following to assign a new service account: Important: Only versions deployed after the update will use the new app-level default service account.
- To create a your App Engine application and assign an app-level default service account, you can use one of the following: gcloud Run the gcloud app create command: gcloud app create --service-account = SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com Replace: SERVICE ACCOUNT NAME with the name of the service account that you created.

