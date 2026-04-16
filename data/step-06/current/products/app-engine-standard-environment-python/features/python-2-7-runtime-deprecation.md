---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:57:08.260Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "Python 2.7 runtime deprecation"
feature_slug: "python-2-7-runtime-deprecation"
latest_feature_date: "2026-01-31"
deprecation_date: "2026-01-31"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/python3/runtime"
  - "https://docs.cloud.google.com/appengine/docs/standard/python/customizing-the-python-runtime"
  - "https://docs.cloud.google.com/appengine/docs/standard/python/runtime"
keywords:
  - "python"
  - "runtime"
  - "deprecation"
  - "deployment"
  - "applications"
  - "deprecated"
  - "app"
  - "engine"
---

# Python 2.7 runtime deprecation

Product: App Engine standard environment Python
Coverage: MEDIUM

## Step 02 Summary

Deployment of Python 2.7 applications is deprecated in App Engine standard environment, while existing apps continue to run and receive traffic; deprecated on 2026-01-31.

## Extended Definition

Deployment of Python 2.7 applications is deprecated in App Engine standard environment, while existing apps continue to run and receive traffic; deprecated on 2026-01-31.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/python3/runtime](https://docs.cloud.google.com/appengine/docs/standard/python3/runtime)
- [https://docs.cloud.google.com/appengine/docs/standard/python/customizing-the-python-runtime](https://docs.cloud.google.com/appengine/docs/standard/python/customizing-the-python-runtime)
- [https://docs.cloud.google.com/appengine/docs/standard/python/runtime](https://docs.cloud.google.com/appengine/docs/standard/python/runtime)

## Supporting Pages

### "Python 3 Runtime Environment \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/python3/runtime](https://docs.cloud.google.com/appengine/docs/standard/python3/runtime)
- Source ID: `site-docs-root-2`
- Final score: 105
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following example shows how to use uwsgi with App Engine: runtime : python313 entrypoint : uwsgi --http-socket :$PORT --wsgi-file main.py --callable app --master --processes 1 --threads 2 uwsgi==2.0.22 Flask==3.0.0 Environment variables The following environment variables are set by the runtime: Environment variable Description GAE APPLICATION The ID of your App Engine application.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Python 3 Runtime Environment Stay organized with collections Save and categorize content based on your preferences.
- Dependencies During deployment, App Engine uses the Python package manager pip to install dependencies defined in the requirements.txt metadata file located in your project's root directory.
- The Python runtime for App Engine in the standard environment is declared in the app.yaml file: runtime : python VERSION Where VERSION is the Python MAJOR and MINOR version numbers.

### App Engine standard environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/standard/python/customizing-the-python-runtime](https://docs.cloud.google.com/appengine/docs/standard/python/customizing-the-python-runtime)
- Source ID: `site-docs-reference-required-5`
- Final score: 65
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Standard environment languages and runtimes The standard environment supports the following languages: Go Java Node.js PHP Python Ruby Instance classes The instance class determines the amount of memory and CPU available to each instance, the amount of free quota , and the cost per hour after your app exceeds the free quota.
- Try App Engine free Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback App Engine standard environment Stay organized with collections Save and categorize content based on your preferences.
- Applications run in a secure, sandboxed environment, allowing the standard environment to distribute requests across multiple servers and scale servers to meet traffic demands.

### App Engine standard environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/standard/python/runtime](https://docs.cloud.google.com/appengine/docs/standard/python/runtime)
- Source ID: `site-docs-root-required-3`
- Final score: 65
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Standard environment languages and runtimes The standard environment supports the following languages: Go Java Node.js PHP Python Ruby Instance classes The instance class determines the amount of memory and CPU available to each instance, the amount of free quota , and the cost per hour after your app exceeds the free quota.
- Try App Engine free Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback App Engine standard environment Stay organized with collections Save and categorize content based on your preferences.
- Applications run in a secure, sandboxed environment, allowing the standard environment to distribute requests across multiple servers and scale servers to meet traffic demands.

