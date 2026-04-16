---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:57:08.285Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "App Engine XMPP service"
feature_slug: "app-engine-xmpp-service"
latest_feature_date: "2016-10-27"
deprecation_date: "October 31, 2017"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/scheduling-jobs-with-cron-yaml"
  - "https://docs.cloud.google.com/appengine/docs/standard/authenticating-users"
  - "https://docs.cloud.google.com/appengine/docs/standard/configuring-warmup-requests"
keywords:
  - "app"
  - "engine"
  - "xmpp"
  - "was"
  - "deprecated"
  - "scheduled"
  - "shutdown"
  - "october"
---

# App Engine XMPP service

Product: App Engine standard environment Python
Coverage: MEDIUM

## Step 02 Summary

The App Engine XMPP service was deprecated and is scheduled for shutdown; deprecated on October 31, 2017.

## Extended Definition

The App Engine XMPP service was deprecated and is scheduled for shutdown; deprecated on October 31, 2017.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/scheduling-jobs-with-cron-yaml](https://docs.cloud.google.com/appengine/docs/standard/scheduling-jobs-with-cron-yaml)
- [https://docs.cloud.google.com/appengine/docs/standard/authenticating-users](https://docs.cloud.google.com/appengine/docs/standard/authenticating-users)
- [https://docs.cloud.google.com/appengine/docs/standard/configuring-warmup-requests](https://docs.cloud.google.com/appengine/docs/standard/configuring-warmup-requests)

## Supporting Pages

### "Scheduling jobs with cron.yaml \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/scheduling-jobs-with-cron-yaml](https://docs.cloud.google.com/appengine/docs/standard/scheduling-jobs-with-cron-yaml)
- Source ID: `site-docs-reference`
- Final score: 59
- Re-rank relevance: N/A

Evidence snippets:
- On the first day of January, April, July, and October, it runs one time at 00:00: schedule : 1 of jan,april,july,oct 00:00 Specifying retries If a cron job's request handler returns a status code that is not in the range 200–299 (inclusive) App Engine considers that job to have failed.
- The Cron service is designed to provide "at least once" delivery; that is, if a job is scheduled, App Engine sends the job request at least one time.
- For the Java, a cron.yaml file in the WEB-INF directory of your application (alongside apppengine-web.xml ) configures scheduled tasks for your app.
- The App Engine Cron Service allows you to configure regularly scheduled tasks that operate at defined times or regular intervals.

### "Authenticating users \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/authenticating-users](https://docs.cloud.google.com/appengine/docs/standard/authenticating-users)
- Source ID: `site-docs-reference-required-2`
- Final score: 56
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Authenticating users Stay organized with collections Save and categorize content based on your preferences.
- Identity-Aware Proxy (IAP) Provides authentication by adding an Identity and Access Management (IAM) verification layer above your App Engine app.
- The Users API allows an App Engine app to perform the following tasks: Detect whether the current user is signed in using a Google Account.
- IAP doesn't protect against activity within a project, such as one App Engine service accessing another service in the same project.

### "Configuring warmup requests to improve performance \_|\_ App Engine standard\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/configuring-warmup-requests](https://docs.cloud.google.com/appengine/docs/standard/configuring-warmup-requests)
- Source ID: `site-docs-reference-required-2`
- Final score: 56
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Configuring warmup requests to improve performance Stay organized with collections Save and categorize content based on your preferences.
- If warmup requests are enabled for your application, App Engine attempts to detect when your application needs a new instance and initiates a warmup request to initialize a new instance.
- Enabling warmup requests Warmup requests are used by the App Engine scheduler, which controls the auto scaling of instances based on user-supplied configuration.
- When deploying to Google App Engine, a webserver process such as Gunicorn will serve the app.

