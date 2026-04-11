---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:39:03.552Z"
product_name: "App Engine flexible environment custom runtimes"
product_slug: "app-engine-flexible-environment-custom-runtimes"
feature_name: "Cloud Tasks general availability"
feature_slug: "cloud-tasks-general-availability"
latest_feature_date: "2019-04-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/create-appengine-tasks"
  - "https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled"
  - "https://docs.cloud.google.com/appengine/docs/flexible/configuration-files"
keywords:
  - "asynchronous"
  - "execution"
  - "tasks"
  - "task"
  - "enabling"
  - "reached"
  - "availability"
  - "general"
---

# Cloud Tasks general availability

Product: App Engine flexible environment custom runtimes
Coverage: LOW

## Step 02 Summary

Cloud Tasks reached general availability, enabling asynchronous task execution outside user requests.

## Extended Definition

Cloud Tasks reached general availability, enabling asynchronous task execution outside user requests.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/create-appengine-tasks](https://docs.cloud.google.com/appengine/docs/flexible/create-appengine-tasks)
- [https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled)
- [https://docs.cloud.google.com/appengine/docs/flexible/configuration-files](https://docs.cloud.google.com/appengine/docs/flexible/configuration-files)

## Supporting Pages

### "Run asynchronous tasks \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/create-appengine-tasks](https://docs.cloud.google.com/appengine/docs/flexible/create-appengine-tasks)
- Source ID: `site-docs-root`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Run asynchronous tasks Stay organized with collections Save and categorize content based on your preferences.
- To run asynchronous tasks, you can: Create Cloud Tasks queues, see Create Cloud Tasks queues .
- Create App Engine tasks in the form of an HTTP request and then place them in Cloud Tasks queues, see Create App Engine tasks .
- For a more detailed overview, see Understand Cloud Tasks in the Cloud Tasks documentation.

### "How requests are handled \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled)
- Source ID: `site-docs-root`
- Final score: 42
- Re-rank relevance: N/A

Evidence snippets:
- With Cloud Tasks, HTTP requests are long-lived and return a response only after any asynchronous work ends.
- For long-running jobs, we recommend using Cloud Tasks .
- Avoid performing background work in your app, and review your code to make sure all asynchronous operations finish before you deliver your response.
- Handling asynchronous background work Background work is any work that your app performs for a request after you have delivered your HTTP response.

### "Structuring web services in App Engine \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/configuration-files](https://docs.cloud.google.com/appengine/docs/flexible/configuration-files)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Use queues for performing asynchronous task execution.
- See the following topics for details about each of the optional features: cron.yaml configures regularly scheduled tasks that operate at defined times or regular intervals. dispatch.yaml overrides routing default rules by sending incoming requests to a specific service based on the path or hostname in the URL. index.yaml specifies which indexes your app needs if using Datastore queries.

