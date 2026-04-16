---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:36:38.568Z"
product_name: "App Engine Admin API"
product_slug: "app-engine-admin-api"
feature_name: "Task Queue empty-payload Content-Length header"
feature_slug: "task-queue-empty-payload-content-length-header"
latest_feature_date: "2015-11-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1"
  - "https://docs.cloud.google.com/appengine/docs/standard/create-appengine-tasks"
  - "https://docs.cloud.google.com/appengine/docs/standard/communicating-between-services"
keywords:
  - "task"
  - "queue"
  - "empty"
  - "payload"
  - "content"
  - "length"
  - "header"
  - "push"
---

# Task Queue empty-payload Content-Length header

Product: App Engine Admin API
Coverage: MEDIUM

## Step 02 Summary

Push requests for Task Queue tasks with no payload now include a Content-Length header value of 0.

## Extended Definition

Push requests for Task Queue tasks with no payload now include a Content-Length header value of 0.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1)
- [https://docs.cloud.google.com/appengine/docs/standard/create-appengine-tasks](https://docs.cloud.google.com/appengine/docs/standard/create-appengine-tasks)
- [https://docs.cloud.google.com/appengine/docs/standard/communicating-between-services](https://docs.cloud.google.com/appengine/docs/standard/communicating-between-services)

## Supporting Pages

### "Package google.appengine.v1 \_|\_ App Engine Admin API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1)
- Source ID: `site-docs-reference-4`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Only applicable for the default version of a service. min total instances int32 Minimum number of running instances that should be maintained for this version. min pending latency Duration Minimum amount of time a request should wait in the pending queue before starting a new instance to handle it. request utilization RequestUtilization Target scaling by request utilization. disk utilization DiskUtilization Target scaling by disk usage. network utilization NetworkUtilization Target scaling by network usage. standard scheduler settings StandardSchedulerSettings Scheduler settings for standard environment.
- Defaults to a runtime-specific value. max idle instances int32 Maximum number of idle instances that should be maintained for this version. max total instances int32 Maximum number of instances that should be started to handle requests for this version. max pending latency Duration Maximum amount of time that a request should wait in the pending queue before starting a new instance to handle it. min idle instances int32 Minimum number of idle instances that should be maintained for this version.
- The path can refer to text matched in groupings in the URL pattern. upload path regex string Regular expression that matches the file paths for all files that should be referenced by this handler. http headers map<string, string> HTTP headers to use for all responses from these URLs. mime type string MIME type used to serve all files served by this handler.
- Type of handler for this URL pattern. handler type can be only one of the following: static files StaticFilesHandler Returns the contents of a file, such as an image, as the response. script ScriptHandler Executes a script to handle the requests that match this URL pattern.

### "Run asynchronous tasks \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/create-appengine-tasks](https://docs.cloud.google.com/appengine/docs/standard/create-appengine-tasks)
- Source ID: `site-docs-reference`
- Final score: 87
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Run asynchronous tasks Stay organized with collections Save and categorize content based on your preferences.
- Create App Engine tasks in the form of an HTTP request and then place them in Cloud Tasks queues, see Create App Engine tasks .
- To run asynchronous tasks, you can: Create Cloud Tasks queues, see Create Cloud Tasks queues .
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Communicating between your services \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/communicating-between-services](https://docs.cloud.google.com/appengine/docs/standard/communicating-between-services)
- Source ID: `site-docs-reference`
- Final score: 52
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Collaborate by assigning work between services through Task Queues .
- Reserved URL paths It is not possible to use the following URL paths: Paths ending with /eventlog Paths starting with / ah/ Some paths ending with z Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- REGION ID .r.appspot.com Note that the combined length of VERSION -dot- SERVICE -dot- PROJECT ID , where VERSION is the name of your version, SERVICE is the name of your service, and PROJECT ID is your project ID, cannot be longer than 63 characters and cannot start or end with a hyphen.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Communicating between your services Stay organized with collections Save and categorize content based on your preferences.

