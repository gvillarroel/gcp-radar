---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:26:39.373Z"
product_name: "App Engine standard environment Ruby"
product_slug: "app-engine-standard-environment-ruby"
feature_name: "App Engine cron task limit"
feature_slug: "app-engine-cron-task-limit"
latest_feature_date: "2016-07-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/scheduling-jobs-with-cron-yaml"
  - "https://docs.cloud.google.com/appengine/docs/flexible/create-appengine-tasks"
  - "https://docs.cloud.google.com/appengine/docs/standard/create-appengine-tasks"
keywords:
  - "cron"
  - "tasks"
  - "limit"
  - "maximum"
  - "task"
  - "engine"
  - "the"
  - "app"
---

# App Engine cron task limit

Product: App Engine standard environment Ruby
Coverage: LOW

## Step 02 Summary

The maximum cron tasks limit was increased to 250.

## Extended Definition

The maximum cron tasks limit was increased to 250.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/scheduling-jobs-with-cron-yaml](https://docs.cloud.google.com/appengine/docs/standard/scheduling-jobs-with-cron-yaml)
- [https://docs.cloud.google.com/appengine/docs/flexible/create-appengine-tasks](https://docs.cloud.google.com/appengine/docs/flexible/create-appengine-tasks)
- [https://docs.cloud.google.com/appengine/docs/standard/create-appengine-tasks](https://docs.cloud.google.com/appengine/docs/standard/create-appengine-tasks)

## Supporting Pages

### "Scheduling jobs with cron.yaml \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/scheduling-jobs-with-cron-yaml](https://docs.cloud.google.com/appengine/docs/standard/scheduling-jobs-with-cron-yaml)
- Source ID: `site-docs-reference`
- Final score: 234
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you also specify job retry limit , App Engine retries the cron job until it reaches both limits. min backoff seconds The minimum number of seconds to wait before retrying a cron job after it fails. max backoff seconds The maximum number of seconds to wait before retrying a cron job after it fails. max doublings The maximum number of times that the interval between failed cron job retries will be doubled before the increase becomes constant.
- For the Java, a cron.yaml file in the WEB-INF directory of your application (alongside apppengine-web.xml ) configures scheduled tasks for your app.
- The App Engine Cron Service allows you to configure regularly scheduled tasks that operate at defined times or regular intervals.
- About the cron configuration file For all runtimes except for Java, a cron.yaml file in the root directory of your application (alongside app.yaml ) configures scheduled tasks for your app.

### "Run asynchronous tasks \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/create-appengine-tasks](https://docs.cloud.google.com/appengine/docs/flexible/create-appengine-tasks)
- Source ID: `site-docs-root`
- Final score: 213
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create App Engine tasks in the form of an HTTP request and then place them in Cloud Tasks queues, see Create App Engine tasks .
- You can use the Cloud Tasks client library to run tasks in App Engine.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Run asynchronous tasks Stay organized with collections Save and categorize content based on your preferences.
- For a more detailed overview, see Understand Cloud Tasks in the Cloud Tasks documentation.

### "Run asynchronous tasks \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/create-appengine-tasks](https://docs.cloud.google.com/appengine/docs/standard/create-appengine-tasks)
- Source ID: `site-docs-root-2`
- Final score: 213
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create App Engine tasks in the form of an HTTP request and then place them in Cloud Tasks queues, see Create App Engine tasks .
- You can use the Cloud Tasks client library to run tasks in App Engine.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Run asynchronous tasks Stay organized with collections Save and categorize content based on your preferences.
- For a more detailed overview, see Understand Cloud Tasks in the Cloud Tasks documentation.

