---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:50:21.238Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "Java 7 deprecation warning"
feature_slug: "java-7-deprecation-warning"
latest_feature_date: "2017-12-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled"
  - "https://docs.cloud.google.com/appengine/docs/deprecations"
  - "https://docs.cloud.google.com/appengine/docs/standard/deprecations"
keywords:
  - "deprecation"
  - "locally"
  - "shown"
  - "warning"
  - "deploying"
  - "when"
---

# Java 7 deprecation warning

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

A deprecation warning is now shown when deploying or locally running a Java 7 application.

## Extended Definition

A deprecation warning is now shown when deploying or locally running a Java 7 application.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- [https://docs.cloud.google.com/appengine/docs/deprecations](https://docs.cloud.google.com/appengine/docs/deprecations)
- [https://docs.cloud.google.com/appengine/docs/standard/deprecations](https://docs.cloud.google.com/appengine/docs/standard/deprecations)

## Supporting Pages

### "Feature deprecations \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/deprecations](https://docs.cloud.google.com/appengine/docs/deprecations)
- Source ID: `site-docs-reference-4`
- Final score: 57
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Resources Send feedback Feature deprecations Stay organized with collections Save and categorize content based on your preferences.
- The Google Cloud Platform Terms of Service (section "Discontinuation of Services") defines the deprecation policy that applies to App Engine.
- The deprecation policy only applies to the services, features, or products listed therein.
- See when previous features were deprecated and shut down .

### "Feature deprecations \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/deprecations](https://docs.cloud.google.com/appengine/docs/standard/deprecations)
- Source ID: `site-docs-reference-4`
- Final score: 57
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Resources Send feedback Feature deprecations Stay organized with collections Save and categorize content based on your preferences.
- The Google Cloud Platform Terms of Service (section "Discontinuation of Services") defines the deprecation policy that applies to App Engine.
- The deprecation policy only applies to the services, features, or products listed therein.
- See when previous features were deprecated and shut down .

### "How requests are handled \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- Source ID: `site-docs-reference`
- Final score: 57
- Re-rank relevance: N/A

Evidence snippets:
- Returns: A string with the words 'Hello World!'. """ return "Hello World!" if name == " main " : This is used when running locally only.
- When deploying to Google App Engine, a webserver process such as Gunicorn will serve the app.
- The following response headers that you can set in app.yaml influence how and when the Google Front End caches content: Cache-Control should be set to public for the Google Front End to cache content; it may also be cached by the Google Front End unless you specify a Cache-Control private or no-store directive.
- When a service receives standard HTTP traffic at high volume while also serving Task queue or Cloud Tasks traffic at much lower volume, there is a disproportionate impact on the latency of the Task queue or the Cloud Tasks traffic.

