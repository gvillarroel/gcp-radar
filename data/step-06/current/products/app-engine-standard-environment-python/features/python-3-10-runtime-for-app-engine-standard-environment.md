---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:57:08.266Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "Python 3.10 runtime for App Engine standard environment"
feature_slug: "python-3-10-runtime-for-app-engine-standard-environment"
latest_feature_date: "2022-07-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/python3/runtime"
  - "https://docs.cloud.google.com/appengine/docs/standard/python/runtime"
  - "https://docs.cloud.google.com/appengine/docs/standard/python/customizing-the-python-runtime"
keywords:
  - "python"
  - "10"
  - "runtime"
  - "app"
  - "engine"
  - "standard"
  - "environment"
  - "became"
---

# Python 3.10 runtime for App Engine standard environment

Product: App Engine standard environment Python
Coverage: MEDIUM

## Step 02 Summary

The Python 3.10 runtime became generally available in App Engine standard environment.

## Extended Definition

The Python 3.10 runtime became generally available in App Engine standard environment.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/python3/runtime](https://docs.cloud.google.com/appengine/docs/standard/python3/runtime)
- [https://docs.cloud.google.com/appengine/docs/standard/python/runtime](https://docs.cloud.google.com/appengine/docs/standard/python/runtime)
- [https://docs.cloud.google.com/appengine/docs/standard/python/customizing-the-python-runtime](https://docs.cloud.google.com/appengine/docs/standard/python/customizing-the-python-runtime)

## Supporting Pages

### "Python 3 Runtime Environment \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/python3/runtime](https://docs.cloud.google.com/appengine/docs/standard/python3/runtime)
- Source ID: `site-docs-root-2`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Python 3 Runtime Environment Stay organized with collections Save and categorize content based on your preferences.
- The Python runtime for App Engine in the standard environment is declared in the app.yaml file: runtime : python VERSION Where VERSION is the Python MAJOR and MINOR version numbers.
- The following example shows how to use uwsgi with App Engine: runtime : python313 entrypoint : uwsgi --http-socket :$PORT --wsgi-file main.py --callable app --master --processes 1 --threads 2 uwsgi==2.0.22 Flask==3.0.0 Environment variables The following environment variables are set by the runtime: Environment variable Description GAE APPLICATION The ID of your App Engine application.
- The Python runtime is the software stack responsible for installing your web service's code and its dependencies and running your App Engine service.

### App Engine standard environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/standard/python/runtime](https://docs.cloud.google.com/appengine/docs/standard/python/runtime)
- Source ID: `site-docs-root-required-3`
- Final score: 54
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Standard environment languages and runtimes The standard environment supports the following languages: Go Java Node.js PHP Python Ruby Instance classes The instance class determines the amount of memory and CPU available to each instance, the amount of free quota , and the cost per hour after your app exceeds the free quota.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback App Engine standard environment Stay organized with collections Save and categorize content based on your preferences.
- The App Engine standard environment is based on container instances running on Google's infrastructure.
- Applications run in a secure, sandboxed environment, allowing the standard environment to distribute requests across multiple servers and scale servers to meet traffic demands.

### App Engine standard environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/standard/python/customizing-the-python-runtime](https://docs.cloud.google.com/appengine/docs/standard/python/customizing-the-python-runtime)
- Source ID: `site-docs-reference-required-5`
- Final score: 46
- Re-rank relevance: N/A

Evidence snippets:
- Standard environment languages and runtimes The standard environment supports the following languages: Go Java Node.js PHP Python Ruby Instance classes The instance class determines the amount of memory and CPU available to each instance, the amount of free quota , and the cost per hour after your app exceeds the free quota.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback App Engine standard environment Stay organized with collections Save and categorize content based on your preferences.
- The App Engine standard environment is based on container instances running on Google's infrastructure.
- Applications run in a secure, sandboxed environment, allowing the standard environment to distribute requests across multiple servers and scale servers to meet traffic demands.

