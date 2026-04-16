---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:09:07.309Z"
product_name: "App Engine standard environment PHP"
product_slug: "app-engine-standard-environment-php"
feature_name: "Cloud Tasks"
feature_slug: "cloud-tasks"
latest_feature_date: "2019-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/create-appengine-tasks"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled"
  - "https://docs.cloud.google.com/appengine/docs/standard/communicating-between-services"
keywords:
  - "tasks"
  - "reached"
  - "availability"
  - "enabling"
  - "asynchronous"
  - "task"
  - "execution"
  - "outside"
---

# Cloud Tasks

Product: App Engine standard environment PHP
Coverage: MEDIUM

## Step 02 Summary

Cloud Tasks reached general availability, enabling asynchronous task execution outside user requests.

## Extended Definition

Cloud Tasks reached general availability, enabling asynchronous task execution outside user requests.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/create-appengine-tasks](https://docs.cloud.google.com/appengine/docs/standard/create-appengine-tasks)
- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- [https://docs.cloud.google.com/appengine/docs/standard/communicating-between-services](https://docs.cloud.google.com/appengine/docs/standard/communicating-between-services)

## Supporting Pages

### "Run asynchronous tasks \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/create-appengine-tasks](https://docs.cloud.google.com/appengine/docs/standard/create-appengine-tasks)
- Source ID: `site-docs-reference`
- Final score: 170
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Run asynchronous tasks Stay organized with collections Save and categorize content based on your preferences.
- To run asynchronous tasks, you can: Create Cloud Tasks queues, see Create Cloud Tasks queues .
- Create App Engine tasks in the form of an HTTP request and then place them in Cloud Tasks queues, see Create App Engine tasks .
- For a more detailed overview, see Understand Cloud Tasks in the Cloud Tasks documentation.

### "How requests are handled \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- Source ID: `site-docs-reference`
- Final score: 111
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- With Cloud Tasks, HTTP requests are long-lived and return a response only after any asynchronous work ends.
- When a service receives standard HTTP traffic at high volume while also serving Task queue or Cloud Tasks traffic at much lower volume, there is a disproportionate impact on the latency of the Task queue or the Cloud Tasks traffic.
- You should also consider serving latency sensitive requests from Cloud Tasks with a dedicated major version or service.
- We recommend splitting the traffic types to separate versions or using HTTP target tasks to avoid priority queuing.

### "Communicating between your services \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/communicating-between-services](https://docs.cloud.google.com/appengine/docs/standard/communicating-between-services)
- Source ID: `site-docs-reference`
- Final score: 69
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Note: The "internal" traffic setting blocks all traffic from additional Google Cloud services that do not use the VPC network, such as URLFetch, Cloud Tasks, and Pub/Sub, even within the same project.
- Additionally, services in the standard environment that reside within the same Google Cloud project can also use one of the App Engine APIs for the following tasks: Share a single memcache instance.
- Learn how to authorize the requests between your services and other Google Cloud services: Provide credentials for Application Default Credentials Using user-managed service accounts Your App Engine services can also communicate using Pub/Sub , which provides reliable asynchronous many-to-many messaging between processes, including App Engine.
- Your app can only be reached on the private.googleapis.com IP range using this appspot.com domain.

