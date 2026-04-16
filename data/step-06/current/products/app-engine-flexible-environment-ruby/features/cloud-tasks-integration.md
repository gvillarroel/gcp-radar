---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:49:04.004Z"
product_name: "App Engine flexible environment Ruby"
product_slug: "app-engine-flexible-environment-ruby"
feature_name: "Cloud Tasks integration"
feature_slug: "cloud-tasks-integration"
latest_feature_date: "2019-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/create-appengine-tasks"
  - "https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/about-custom-runtimes"
  - "https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build"
keywords:
  - "tasks"
  - "integration"
  - "app"
  - "engine"
  - "can"
  - "use"
  - "run"
  - "asynchronous"
---

# Cloud Tasks integration

Product: App Engine flexible environment Ruby
Coverage: MEDIUM

## Step 02 Summary

App Engine can use Cloud Tasks to run asynchronous tasks outside of user requests; App Engine flexible environment supports migrating Task Queue API workloads in compat runtimes to Cloud Tasks.

## Extended Definition

App Engine can use Cloud Tasks to run asynchronous tasks outside of user requests; App Engine flexible environment supports migrating Task Queue API workloads in compat runtimes to Cloud Tasks.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/create-appengine-tasks](https://docs.cloud.google.com/appengine/docs/flexible/create-appengine-tasks)
- [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/about-custom-runtimes](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/about-custom-runtimes)
- [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build)

## Supporting Pages

### "Run asynchronous tasks \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/create-appengine-tasks](https://docs.cloud.google.com/appengine/docs/flexible/create-appengine-tasks)
- Source ID: `site-docs-reference`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Run asynchronous tasks Stay organized with collections Save and categorize content based on your preferences.
- Create App Engine tasks in the form of an HTTP request and then place them in Cloud Tasks queues, see Create App Engine tasks .
- To run asynchronous tasks, you can: Create Cloud Tasks queues, see Create Cloud Tasks queues .
- You can use the Cloud Tasks client library to run tasks in App Engine.

### "Build custom runtimes \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build)
- Source ID: `site-docs-reference`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- For example, Cloud SDK-based Java tools such as the Maven, Gradle, Eclipse, and IntelliJ plugins require the Dockerfile to be in src/main/docker/Dockerfile and the app.yaml file to be in src/main/appengine/app.yaml .
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Build custom runtimes Stay organized with collections Save and categorize content based on your preferences.
- In rare cases, outages can prevent App Engine from providing 30 seconds of shutdown time, which means the STOP and KILL signals might not be sent before an instance terminates.
- Build and deploy your custom runtime After you configure your app.yaml and DOCKER file, you can build and deploy that container image to App Engine.

### "About Custom runtimes \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/about-custom-runtimes](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/about-custom-runtimes)
- Source ID: `site-docs-reference`
- Final score: 68
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Use the following table to understand how a custom runtime compares to the existing set of App Engine runtimes: Feature Flexible runtime Custom runtime Dockerfile Default file supplied automatically by the SDK Hand-written by the developer Dockerfile modifications permitted Yes Yes Languages Python, Java, Node.js, Go, Ruby, PHP, .NET Any software that can service HTTP requests Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Applications that use custom runtimes take advantage of all the various Google Cloud services by using the public REST APIs or client libraries, such as the App Engine Admin API and the Google Client Libraries .
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback About Custom runtimes Stay organized with collections Save and categorize content based on your preferences.

