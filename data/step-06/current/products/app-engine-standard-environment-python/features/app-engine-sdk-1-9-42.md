---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:57:08.285Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "App Engine SDK 1.9.42"
feature_slug: "app-engine-sdk-1-9-42"
latest_feature_date: "2016-08-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/admin-api/getting-started"
  - "https://docs.cloud.google.com/appengine/docs/an-overview-of-app-engine"
  - "https://docs.cloud.google.com/appengine/docs/standard/python3/runtime"
keywords:
  - "app"
  - "engine"
  - "sdk"
  - "42"
  - "version"
  - "was"
  - "released"
---

# App Engine SDK 1.9.42

Product: App Engine standard environment Python
Coverage: MEDIUM

## Step 02 Summary

App Engine SDK version 1.9.42 was released.

## Extended Definition

App Engine SDK version 1.9.42 was released.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/admin-api/getting-started](https://docs.cloud.google.com/appengine/docs/admin-api/getting-started)
- [https://docs.cloud.google.com/appengine/docs/an-overview-of-app-engine](https://docs.cloud.google.com/appengine/docs/an-overview-of-app-engine)
- [https://docs.cloud.google.com/appengine/docs/standard/python3/runtime](https://docs.cloud.google.com/appengine/docs/standard/python3/runtime)

## Supporting Pages

### "An Overview of the Admin API \_|\_ App Engine Admin API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/getting-started](https://docs.cloud.google.com/appengine/docs/admin-api/getting-started)
- Source ID: `site-docs-reference-required-2`
- Final score: 33
- Re-rank relevance: N/A

Evidence snippets:
- Home Technology areas App Engine Admin API Overview Send feedback An Overview of the Admin API Stay organized with collections Save and categorize content based on your preferences.
- Tighter control around deploying new versions, including the ability to automate traffic migration between two versions or traffic splitting across one or more versions.
- After configuring authentication, you can begin managing your apps, including deploying versions of applications and managing the amount of traffic to those versions.
- The Admin API provides programmatic access to several of the App Engine administrative operations that are found in the Google Cloud console .

### An overview of App Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/an-overview-of-app-engine](https://docs.cloud.google.com/appengine/docs/an-overview-of-app-engine)
- Source ID: `site-docs-reference`
- Final score: 33
- Re-rank relevance: N/A

Evidence snippets:
- In this diagram, the app has two services that contain multiple versions, and two of those versions are actively running on multiple instances: Other Google Cloud services, for example Datastore, are shared across your App Engine app.
- Each App Engine application includes at least one service, the default service, which can hold many versions, depending on your app's billing status.
- The App Engine application is a top-level container that includes the service, version, and instance resources that make up your app.
- For example, an app that handles your customer requests might include separate services that each handle different tasks, such as: API requests from mobile devices Internal, administration-type requests Backend processing such as billing pipelines and data analysis Each service in App Engine consists of the source code from your app and the corresponding App Engine configuration files.

### "Python 3 Runtime Environment \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/python3/runtime](https://docs.cloud.google.com/appengine/docs/standard/python3/runtime)
- Source ID: `site-docs-root-2`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- The Python runtime for App Engine in the standard environment is declared in the app.yaml file: runtime : python VERSION Where VERSION is the Python MAJOR and MINOR version numbers.
- App Engine automatically updates to new patch versions, but it does not automatically update the minor version.
- The following example shows how to use uwsgi with App Engine: runtime : python313 entrypoint : uwsgi --http-socket :$PORT --wsgi-file main.py --callable app --master --processes 1 --threads 2 uwsgi==2.0.22 Flask==3.0.0 Environment variables The following environment variables are set by the runtime: Environment variable Description GAE APPLICATION The ID of your App Engine application.
- The example below shows an App Engine deployment that uses two gunicorn workers for serving apps: entrypoint : gunicorn - b : $ PORT - w 2 main : app We recommend that you configure your web server to listen and respond to HTTP requests on the port specified by your $PORT environment variable .

