---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:16:06.777Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "Cloud SDK-based App Engine tooling"
feature_slug: "cloud-sdk-based-app-engine-tooling"
latest_feature_date: "2019-07-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://cloud.google.com/appengine/docs/standard/python3/services/access"
  - "https://cloud.google.com/appengine/docs/standard/how-requests-are-routed"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed"
keywords:
  - "functionality"
  - "delivers"
  - "development"
  - "based"
  - "tooling"
---

# Cloud SDK-based App Engine tooling

Product: App Engine standard environment Python
Coverage: MEDIUM

## Step 02 Summary

Cloud SDK delivers the supported App Engine SDK functionality for development and deployment workflows.

## Extended Definition

Cloud SDK delivers the supported App Engine SDK functionality for development and deployment workflows.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://cloud.google.com/appengine/docs/standard/python3/services/access](https://cloud.google.com/appengine/docs/standard/python3/services/access)
- [https://cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://cloud.google.com/appengine/docs/standard/how-requests-are-routed)
- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed)

## Supporting Pages

### "Access legacy bundled services for Python 3 \_|\_ App Engine standard environment\

- URL: [https://cloud.google.com/appengine/docs/standard/python3/services/access](https://cloud.google.com/appengine/docs/standard/python3/services/access)
- Source ID: `site-docs-reference-3`
- Final score: 54
- Re-rank relevance: N/A

Evidence snippets:
- To locally test the legacy bundled services functionality in your Python 3 app, use the local development server .
- For example: python3 CLOUD SDK ROOT / bin / dev appserver . py -- runtime python path = "python27=/user/bin/python2.7,python3=/usr/bin/python3" Important: When using the local development server to test Python 3 apps that use the Deferred API , you must set the following environment variable in your app.yaml : DEFERRED USE CROSS COMPATIBLE PICKLE PROTOCOL: 'True' Pickle Compatibility Shared services including Memcache, Cloud NDB and deferred use the pickle module to serialize and share Python objects.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Access legacy bundled services for Python 3 Stay organized with collections Save and categorize content based on your preferences.
- Testing Important: Before running the local development server, follow the setup instructions .

### "How requests are routed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed)
- Source ID: `site-docs-reference`
- Final score: 47
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback How requests are routed Stay organized with collections Save and categorize content based on your preferences.
- Note that if you use the legacy bundled services to test your app using the local development server , the available routing and dispatch features are slightly different.
- For example, if you want to redirect to an official domain, you can code your app to check the Host request header and then respond accordingly based on the domain name.
- Go Java Node.js PHP Python Ruby Region ID The REGION ID is an abbreviated code that Google assigns based on the region you select when you create your app.

### "How requests are routed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://cloud.google.com/appengine/docs/standard/how-requests-are-routed)
- Source ID: `site-docs-reference-3`
- Final score: 47
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback How requests are routed Stay organized with collections Save and categorize content based on your preferences.
- Note that if you use the legacy bundled services to test your app using the local development server , the available routing and dispatch features are slightly different.
- For example, if you want to redirect to an official domain, you can code your app to check the Host request header and then respond accordingly based on the domain name.
- Go Java Node.js PHP Python Ruby Region ID The REGION ID is an abbreviated code that Google assigns based on the region you select when you create your app.

