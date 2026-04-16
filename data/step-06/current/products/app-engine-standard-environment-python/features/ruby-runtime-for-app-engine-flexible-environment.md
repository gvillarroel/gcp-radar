---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:57:08.287Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "Ruby runtime for App Engine flexible environment"
feature_slug: "ruby-runtime-for-app-engine-flexible-environment"
latest_feature_date: "2016-05-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/overview"
  - "https://docs.cloud.google.com/appengine/docs/standard/python3/runtime"
  - "https://docs.cloud.google.com/appengine/docs/standard/python/customizing-the-python-runtime"
keywords:
  - "ruby"
  - "runtime"
  - "app"
  - "engine"
  - "flexible"
  - "environment"
  - "made"
  - "available"
---

# Ruby runtime for App Engine flexible environment

Product: App Engine standard environment Python
Coverage: MEDIUM

## Step 02 Summary

App Engine made the Ruby runtime available in the App Engine flexible environment.

## Extended Definition

App Engine made the Ruby runtime available in the App Engine flexible environment.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/overview](https://docs.cloud.google.com/appengine/docs/flexible/overview)
- [https://docs.cloud.google.com/appengine/docs/standard/python3/runtime](https://docs.cloud.google.com/appengine/docs/standard/python3/runtime)
- [https://docs.cloud.google.com/appengine/docs/standard/python/customizing-the-python-runtime](https://docs.cloud.google.com/appengine/docs/standard/python/customizing-the-python-runtime)

## Supporting Pages

### App Engine flexible environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/overview](https://docs.cloud.google.com/appengine/docs/flexible/overview)
- Source ID: `site-docs-reference`
- Final score: 118
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Go Java Node.js PHP Python Ruby .NET Custom runtimes Features Customizable infrastructure - App Engine flexible environment instances are Compute Engine virtual machines, which means that you can take advantage of custom libraries, use SSH for debugging, and deploy your own Docker containers.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback App Engine flexible environment Stay organized with collections Save and categorize content based on your preferences.
- You can specify how much CPU and memory each instance of your application needs, and the App Engine flexible environment provisions the necessary infrastructure for you.
- Based on Compute Engine , the App Engine flexible environment automatically scales your app up and down while also balancing the load.

### "Python 3 Runtime Environment \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/python3/runtime](https://docs.cloud.google.com/appengine/docs/standard/python3/runtime)
- Source ID: `site-docs-root-2`
- Final score: 86
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following example shows how to use uwsgi with App Engine: runtime : python313 entrypoint : uwsgi --http-socket :$PORT --wsgi-file main.py --callable app --master --processes 1 --threads 2 uwsgi==2.0.22 Flask==3.0.0 Environment variables The following environment variables are set by the runtime: Environment variable Description GAE APPLICATION The ID of your App Engine application.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Python 3 Runtime Environment Stay organized with collections Save and categorize content based on your preferences.
- The Python runtime for App Engine in the standard environment is declared in the app.yaml file: runtime : python VERSION Where VERSION is the Python MAJOR and MINOR version numbers.
- The example below shows an App Engine deployment that uses two gunicorn workers for serving apps: entrypoint : gunicorn - b : $ PORT - w 2 main : app We recommend that you configure your web server to listen and respond to HTTP requests on the port specified by your $PORT environment variable .

### App Engine standard environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/standard/python/customizing-the-python-runtime](https://docs.cloud.google.com/appengine/docs/standard/python/customizing-the-python-runtime)
- Source ID: `site-docs-reference-required-5`
- Final score: 85
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Standard environment languages and runtimes The standard environment supports the following languages: Go Java Node.js PHP Python Ruby Instance classes The instance class determines the amount of memory and CPU available to each instance, the amount of free quota , and the cost per hour after your app exceeds the free quota.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback App Engine standard environment Stay organized with collections Save and categorize content based on your preferences.
- This is different from the instance's enforced memory limit, which is the maximum memory available to the instance's isolated sandbox environment.
- The App Engine standard environment is based on container instances running on Google's infrastructure.

