---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:26:39.396Z"
product_name: "App Engine standard environment Ruby"
product_slug: "app-engine-standard-environment-ruby"
feature_name: "Task queue retry behavior for retry_limit 0"
feature_slug: "task-queue-retry-behavior-for-retry-limit-0"
latest_feature_date: "2015-08-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/create-appengine-tasks"
  - "https://docs.cloud.google.com/appengine/docs/standard/create-appengine-tasks"
  - "https://docs.cloud.google.com/appengine/docs/standard/scheduling-jobs-with-cron-yaml"
keywords:
  - "retry"
  - "behavior"
  - "tasks"
  - "queue"
  - "limit"
  - "task"
  - "for"
  - "in"
---

# Task queue retry behavior for retry_limit 0

Product: App Engine standard environment Ruby
Coverage: LOW

## Step 02 Summary

Tasks in queues configured with a retry limit of zero are no longer retried after failure.

## Extended Definition

Tasks in queues configured with a retry limit of zero are no longer retried after failure.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/create-appengine-tasks](https://docs.cloud.google.com/appengine/docs/flexible/create-appengine-tasks)
- [https://docs.cloud.google.com/appengine/docs/standard/create-appengine-tasks](https://docs.cloud.google.com/appengine/docs/standard/create-appengine-tasks)
- [https://docs.cloud.google.com/appengine/docs/standard/scheduling-jobs-with-cron-yaml](https://docs.cloud.google.com/appengine/docs/standard/scheduling-jobs-with-cron-yaml)

## Supporting Pages

### "Run asynchronous tasks \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/create-appengine-tasks](https://docs.cloud.google.com/appengine/docs/flexible/create-appengine-tasks)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create App Engine tasks in the form of an HTTP request and then place them in Cloud Tasks queues, see Create App Engine tasks .
- For a more detailed overview, see Understand Cloud Tasks in the Cloud Tasks documentation.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Run asynchronous tasks Stay organized with collections Save and categorize content based on your preferences.
- To run asynchronous tasks, you can: Create Cloud Tasks queues, see Create Cloud Tasks queues .

### "Run asynchronous tasks \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/create-appengine-tasks](https://docs.cloud.google.com/appengine/docs/standard/create-appengine-tasks)
- Source ID: `site-docs-root-2`
- Final score: 180
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create App Engine tasks in the form of an HTTP request and then place them in Cloud Tasks queues, see Create App Engine tasks .
- For a more detailed overview, see Understand Cloud Tasks in the Cloud Tasks documentation.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Run asynchronous tasks Stay organized with collections Save and categorize content based on your preferences.
- To run asynchronous tasks, you can: Create Cloud Tasks queues, see Create Cloud Tasks queues .

### "Scheduling jobs with cron.yaml \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/scheduling-jobs-with-cron-yaml](https://docs.cloud.google.com/appengine/docs/standard/scheduling-jobs-with-cron-yaml)
- Source ID: `site-docs-reference`
- Final score: 172
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, if the /tasks/hello service2 URL is defined in both of the following cron.yaml and dispatch.yaml files, the job requests are sent to service2 , even though target: service1 is specified: cron.yaml : cron : - description : "test dispatch vs target" url : /tasks/hello service2 schedule : every 1 mins target : service1 dispatch.yaml : dispatch : - url : ' /tasks/hello service2' service : service2 retry parameters Optional.
- If you also specify job retry limit , App Engine retries the cron job until it reaches both limits. min backoff seconds The minimum number of seconds to wait before retrying a cron job after it fails. max backoff seconds The maximum number of seconds to wait before retrying a cron job after it fails. max doublings The maximum number of times that the interval between failed cron job retries will be doubled before the increase becomes constant.
- The following is an example cron.yaml file: cron : - description : "daily summary job" url : /tasks/summary schedule : every 24 hours - description : "monday morning mailout" url : /mail/weekly schedule : every monday 09:00 timezone : Australia/NSW - description : "new daily summary job" url : /tasks/summary schedule : every 24 hours target : beta The cron.yaml file uses the YAML syntax and consists of definitions for each of your cron jobs.
- About the cron configuration file For all runtimes except for Java, a cron.yaml file in the root directory of your application (alongside app.yaml ) configures scheduled tasks for your app.

