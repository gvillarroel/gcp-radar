---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:57:41.408Z"
product_name: "App Engine standard environment Ruby"
product_slug: "app-engine-standard-environment-ruby"
feature_name: "App Engine cron task limit"
feature_slug: "app-engine-cron-task-limit"
latest_feature_date: "2016-07-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/scheduling-jobs-with-cron-yaml"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled"
  - "https://docs.cloud.google.com/appengine/docs/flexible/create-appengine-tasks"
keywords:
  - "app"
  - "engine"
  - "cron"
  - "task"
  - "limit"
  - "maximum"
  - "tasks"
  - "was"
---

# App Engine cron task limit

Product: App Engine standard environment Ruby
Coverage: MEDIUM

## Step 02 Summary

The maximum cron tasks limit was increased to 250.

## Extended Definition

The maximum cron tasks limit was increased to 250.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/scheduling-jobs-with-cron-yaml](https://docs.cloud.google.com/appengine/docs/standard/scheduling-jobs-with-cron-yaml)
- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- [https://docs.cloud.google.com/appengine/docs/flexible/create-appengine-tasks](https://docs.cloud.google.com/appengine/docs/flexible/create-appengine-tasks)

## Supporting Pages

### "Scheduling jobs with cron.yaml \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/scheduling-jobs-with-cron-yaml](https://docs.cloud.google.com/appengine/docs/standard/scheduling-jobs-with-cron-yaml)
- Source ID: `site-docs-reference`
- Final score: 173
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you also specify job retry limit , App Engine retries the cron job until it reaches both limits. min backoff seconds The minimum number of seconds to wait before retrying a cron job after it fails. max backoff seconds The maximum number of seconds to wait before retrying a cron job after it fails. max doublings The maximum number of times that the interval between failed cron job retries will be doubled before the increase becomes constant.
- For the Java, a cron.yaml file in the WEB-INF directory of your application (alongside apppengine-web.xml ) configures scheduled tasks for your app.
- The App Engine Cron Service allows you to configure regularly scheduled tasks that operate at defined times or regular intervals.
- The following is an example cron.yaml file: cron : - description : "daily summary job" url : /tasks/summary schedule : every 24 hours - description : "monday morning mailout" url : /mail/weekly schedule : every monday 09:00 timezone : Australia/NSW - description : "new daily summary job" url : /tasks/summary schedule : every 24 hours target : beta The cron.yaml file uses the YAML syntax and consists of definitions for each of your cron jobs.

### "How requests are handled \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- Source ID: `site-docs-root-2`
- Final score: 116
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Requests from App Engine Cloud Tasks also share this pending queue priority behavior for compatibility reasons.
- Within the pending queue, App Engine treats requests from HTTP target Cloud Tasks as regular HTTP traffic.
- The following limits apply specifically to the use of request handlers: Limit Amount Request size 32 megabytes Response size 32 megabytes Request timeout Depends on the type of scaling your app uses Maximum total number of files (app files and static files) 10,000 total 1,000 per directory Maximum size of an application file 32 megabytes Maximum size of a static file 32 megabytes Maximum total size of all application and static files First 1 gigabyte is free $ 0.026 per gigabyte per month after first 1 gigabyte Pending request timeout 10 seconds Maximum size of a single request header field 8 kilobytes for second-generation runtimes in the standard environment.
- See the License for the specific language governing permissions and limitations under the License. from flask import Flask If entrypoint is not defined in app.yaml, App Engine will look for an app called app in main.py. app = Flask ( name ) @app . route ( "/" ) def hello (): """Return a friendly HTTP greeting.

### "Run asynchronous tasks \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/create-appengine-tasks](https://docs.cloud.google.com/appengine/docs/flexible/create-appengine-tasks)
- Source ID: `site-docs-root`
- Final score: 112
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Run asynchronous tasks Stay organized with collections Save and categorize content based on your preferences.
- Create App Engine tasks in the form of an HTTP request and then place them in Cloud Tasks queues, see Create App Engine tasks .
- You can use the Cloud Tasks client library to run tasks in App Engine.
- To run asynchronous tasks, you can: Create Cloud Tasks queues, see Create Cloud Tasks queues .

