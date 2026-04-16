---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:57:41.399Z"
product_name: "App Engine standard environment Ruby"
product_slug: "app-engine-standard-environment-ruby"
feature_name: "AppCfg tooling and legacy standalone App Engine SDK"
feature_slug: "appcfg-tooling-and-legacy-standalone-app-engine-sdk"
latest_feature_date: "2019-07-30"
deprecation_date: "2020-07-30"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml"
  - "https://docs.cloud.google.com/appengine/docs/standard/scheduling-jobs-with-cron-yaml"
  - "https://docs.cloud.google.com/appengine/docs/standard/bundled-services-overview"
keywords:
  - "appcfg"
  - "tooling"
  - "legacy"
  - "standalone"
  - "app"
  - "engine"
  - "sdk"
  - "distributions"
---

# AppCfg tooling and legacy standalone App Engine SDK

Product: App Engine standard environment Ruby
Coverage: MEDIUM

## Step 02 Summary

The AppCfg tooling and legacy standalone App Engine SDK distributions (GoogleAppEngineLauncher.dmg, GoogleAppEngine.msi, google_appengine.zip) were deprecated with planned support removal; deprecated on 2020-07-30.

## Extended Definition

The AppCfg tooling and legacy standalone App Engine SDK distributions (GoogleAppEngineLauncher.dmg, GoogleAppEngine.msi, google_appengine.zip) were deprecated with planned support removal; deprecated on 2020-07-30.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml](https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml)
- [https://docs.cloud.google.com/appengine/docs/standard/scheduling-jobs-with-cron-yaml](https://docs.cloud.google.com/appengine/docs/standard/scheduling-jobs-with-cron-yaml)
- [https://docs.cloud.google.com/appengine/docs/standard/bundled-services-overview](https://docs.cloud.google.com/appengine/docs/standard/bundled-services-overview)

## Supporting Pages

### "Configure Datastore indexes with index.yaml \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml](https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml)
- Source ID: `site-docs-reference`
- Final score: 76
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When you are sure that old indexes are no longer needed, you can delete them from App Engine as follows: gcloud datastore indexes cleanup index.yaml Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Deploy the index configuration file To deploy the index.yaml configuration file, run the following command: gcloud app deploy index.yaml Delete unused indexes When you change or remove an index from the index configuration, the original index is not deleted from App Engine automatically.
- Home Documentation Application hosting App Engine Standard environment Reference Send feedback Configure Datastore indexes with index.yaml Stay organized with collections Save and categorize content based on your preferences.

### "Scheduling jobs with cron.yaml \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/scheduling-jobs-with-cron-yaml](https://docs.cloud.google.com/appengine/docs/standard/scheduling-jobs-with-cron-yaml)
- Source ID: `site-docs-reference`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- If you also specify job retry limit , App Engine retries the cron job until it reaches both limits. min backoff seconds The minimum number of seconds to wait before retrying a cron job after it fails. max backoff seconds The maximum number of seconds to wait before retrying a cron job after it fails. max doublings The maximum number of times that the interval between failed cron job retries will be doubled before the increase becomes constant.
- On the first day of January, April, July, and October, it runs one time at 00:00: schedule : 1 of jan,april,july,oct 00:00 Specifying retries If a cron job's request handler returns a status code that is not in the range 200–299 (inclusive) App Engine considers that job to have failed.
- You can do so by validating an HTTP header and the source IP address for the request: Requests from the Cron Service will contain the following HTTP header: "X-Appengine-Cron" : "true" This and other headers are set internally by App Engine.
- Home Documentation Application hosting App Engine Standard environment Reference Send feedback Scheduling jobs with cron.yaml Stay organized with collections Save and categorize content based on your preferences.

### "Overview of legacy bundled services \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/bundled-services-overview](https://docs.cloud.google.com/appengine/docs/standard/bundled-services-overview)
- Source ID: `site-docs-root-2`
- Final score: 64
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Because several of the legacy runtimes are no longer maintained by their respective open-source communities, as an App Engine developer, you may face hard choices on whether to invest time and effort in migrating to a newer runtime or else incur growing costs to retain your app on a legacy runtime.
- To reduce runtime migration complexity, Google Cloud now supports a set of App Engine legacy bundled services and their associated APIs on second-generation runtimes, which include Python 3 , Java 11+ , Go 1.12+ , and PHP 7+ .
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Overview of legacy bundled services Stay organized with collections Save and categorize content based on your preferences.
- How apps access the App Engine legacy bundled services In runtime migration scenarios, you often also have the option to use Google Cloud products that offer similar functionality as the legacy bundled services.

