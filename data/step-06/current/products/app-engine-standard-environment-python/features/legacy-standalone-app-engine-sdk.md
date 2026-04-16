---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:16:06.777Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "Legacy standalone App Engine SDK"
feature_slug: "legacy-standalone-app-engine-sdk"
latest_feature_date: "2019-07-30"
deprecation_date: "2020-07-30"
coverage_status: "MEDIUM"
source_links:
  - "https://cloud.google.com/appengine/docs/standard/python3/services/access"
  - "https://docs.cloud.google.com/appengine/docs/legacy/standard/python/apis"
  - "https://docs.cloud.google.com/appengine/docs/standard/apis"
keywords:
  - "standalone"
  - "packages"
  - "local"
  - "provide"
  - "legacy"
---

# Legacy standalone App Engine SDK

Product: App Engine standard environment Python
Coverage: MEDIUM

## Step 02 Summary

The legacy standalone App Engine SDK packages provide local development and deployment tooling outside Cloud SDK; deprecated on 2020-07-30.

## Extended Definition

The legacy standalone App Engine SDK packages provide local development and deployment tooling outside Cloud SDK; deprecated on 2020-07-30.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://cloud.google.com/appengine/docs/standard/python3/services/access](https://cloud.google.com/appengine/docs/standard/python3/services/access)
- [https://docs.cloud.google.com/appengine/docs/legacy/standard/python/apis](https://docs.cloud.google.com/appengine/docs/legacy/standard/python/apis)
- [https://docs.cloud.google.com/appengine/docs/standard/apis](https://docs.cloud.google.com/appengine/docs/standard/apis)

## Supporting Pages

### "APIs & Reference \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/legacy/standard/python/apis](https://docs.cloud.google.com/appengine/docs/legacy/standard/python/apis)
- Source ID: `site-docs-reference-required-9`
- Final score: 81
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- App Engine legacy bundled services APIs App Engine legacy bundled services APIs for Go Use the legacy bundled services APIs to ease the transition of moving your app from first-generation runtimes to newer runtimes.
- Cloud Client Libraries Cloud Client Libraries for Go A client library that embraces idioms of Go and provides high-level API abstractions so that you can easily access Google Cloud services.
- App Engine legacy bundled services APIs for Python Use the App Engine legacy bundled services APIs to ease the transition of moving your app from first-generation runtimes to newer runtimes.
- App Engine legacy bundled services APIs for PHP Use the App Engine legacy bundled services APIs to ease the transition of moving your app from first-generation runtimes to newer runtimes.

### "Access legacy bundled services for Python 3 \_|\_ App Engine standard environment\

- URL: [https://cloud.google.com/appengine/docs/standard/python3/services/access](https://cloud.google.com/appengine/docs/standard/python3/services/access)
- Source ID: `site-docs-reference-3`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- To locally test the legacy bundled services functionality in your Python 3 app, use the local development server .
- For example: python3 CLOUD SDK ROOT / bin / dev appserver . py -- runtime python path = "python27=/user/bin/python2.7,python3=/usr/bin/python3" Important: When using the local development server to test Python 3 apps that use the Deferred API , you must set the following environment variable in your app.yaml : DEFERRED USE CROSS COMPATIBLE PICKLE PROTOCOL: 'True' Pickle Compatibility Shared services including Memcache, Cloud NDB and deferred use the pickle module to serialize and share Python objects.
- Note: To continue using legacy bundled services with the latest supported version of Python , ensure you upgrade to the latest version of the App Engine services SDK by adding appengine-python-standard>=1.0.0 in your requirements.txt file.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Access legacy bundled services for Python 3 Stay organized with collections Save and categorize content based on your preferences.

### "APIs & Reference \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/apis](https://docs.cloud.google.com/appengine/docs/standard/apis)
- Source ID: `site-docs-reference`
- Final score: 71
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- App Engine legacy bundled services APIs App Engine legacy bundled services APIs for Go Use the legacy bundled services APIs to ease the transition of moving your app from first-generation runtimes to newer runtimes.
- Cloud Client Libraries Cloud Client Libraries for Go A client library that embraces idioms of Go and provides high-level API abstractions so that you can easily access Google Cloud services.
- App Engine legacy bundled services APIs for Python Use the App Engine legacy bundled services APIs to ease the transition of moving your app from first-generation runtimes to newer runtimes.
- App Engine legacy bundled services APIs for PHP Use the App Engine legacy bundled services APIs to ease the transition of moving your app from first-generation runtimes to newer runtimes.

