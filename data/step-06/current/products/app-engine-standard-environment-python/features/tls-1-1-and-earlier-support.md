---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:16:06.766Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "TLS 1.1 and earlier support"
feature_slug: "tls-1-1-and-earlier-support"
latest_feature_date: "2025-08-07"
deprecation_date: "March 2025"
coverage_status: "MEDIUM"
source_links:
  - "https://cloud.google.com/appengine/docs/standard/how-instances-are-managed"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed"
  - "https://docs.cloud.google.com/appengine/docs/standard/scheduling-jobs-with-cron-yaml"
keywords:
  - "previously"
  - "earlier"
  - "application"
---

# TLS 1.1 and earlier support

Product: App Engine standard environment Python
Coverage: MEDIUM

## Step 02 Summary

App Engine standard environment previously supported TLS 1.1 and earlier for application connections; deprecated on March 2025.

## Extended Definition

App Engine standard environment previously supported TLS 1.1 and earlier for application connections; deprecated on March 2025.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- [https://docs.cloud.google.com/appengine/docs/standard/scheduling-jobs-with-cron-yaml](https://docs.cloud.google.com/appengine/docs/standard/scheduling-jobs-with-cron-yaml)

## Supporting Pages

### "How instances are managed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- Source ID: `site-docs-reference`
- Final score: 52
- Re-rank relevance: N/A

Evidence snippets:
- One of the benefits App Engine standard environment's "pay for only what you need" platform as described earlier in Scaling Down is that the system autoscales the number of instances down to zero when there is no traffic.
- Setting an appropriate number of idle instances for your application based on request volume allows your application to serve every request with little latency, unless you are experiencing abnormally high request volume.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback How instances are managed Stay organized with collections Save and categorize content based on your preferences.
- Scaling dynamic instances App Engine applications that use basic or automatic scaling are powered by any number of dynamic instances at a given time, depending on the volume of incoming requests.

### "How instances are managed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- Source ID: `site-docs-reference-3`
- Final score: 52
- Re-rank relevance: N/A

Evidence snippets:
- One of the benefits App Engine standard environment's "pay for only what you need" platform as described earlier in Scaling Down is that the system autoscales the number of instances down to zero when there is no traffic.
- Setting an appropriate number of idle instances for your application based on request volume allows your application to serve every request with little latency, unless you are experiencing abnormally high request volume.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback How instances are managed Stay organized with collections Save and categorize content based on your preferences.
- Scaling dynamic instances App Engine applications that use basic or automatic scaling are powered by any number of dynamic instances at a given time, depending on the volume of incoming requests.

### "Scheduling jobs with cron.yaml \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/scheduling-jobs-with-cron-yaml](https://docs.cloud.google.com/appengine/docs/standard/scheduling-jobs-with-cron-yaml)
- Source ID: `site-docs-reference-required-9`
- Final score: 48
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Reference Send feedback Scheduling jobs with cron.yaml Stay organized with collections Save and categorize content based on your preferences.
- About the cron configuration file For all runtimes except for Java, a cron.yaml file in the root directory of your application (alongside app.yaml ) configures scheduled tasks for your app.
- For the Java, a cron.yaml file in the WEB-INF directory of your application (alongside apppengine-web.xml ) configures scheduled tasks for your app.
- For Cron jobs created with older gcloud versions (earlier than 326.0.0), Cron requests will come from 0.1.0.1 .

