---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:50:17.312Z"
product_name: "App Engine flexible environment Python"
product_slug: "app-engine-flexible-environment-python"
feature_name: "App Engine regional app URL format"
feature_slug: "app-engine-regional-app-url-format"
latest_feature_date: "2020-02-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/audit-logging"
  - "https://docs.cloud.google.com/appengine/docs/flexible/python/how-requests-are-routed"
  - "https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed"
keywords:
  - "app"
  - "engine"
  - "regional"
  - "url"
  - "format"
  - "urls"
  - "now"
  - "include"
---

# App Engine regional app URL format

Product: App Engine flexible environment Python
Coverage: MEDIUM

## Step 02 Summary

App Engine app URLs now include a region ID (for example, PROJECT_ID.REGION_ID.r.appspot.com) to improve request routing.

## Extended Definition

App Engine app URLs now include a region ID (for example, PROJECT_ID.REGION_ID.r.appspot.com) to improve request routing.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/audit-logging](https://docs.cloud.google.com/appengine/docs/flexible/audit-logging)
- [https://docs.cloud.google.com/appengine/docs/flexible/python/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/flexible/python/how-requests-are-routed)
- [https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed)

## Supporting Pages

### "App Engine audit logging information \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/audit-logging](https://docs.cloud.google.com/appengine/docs/flexible/audit-logging)
- Source ID: `site-docs-reference-2`
- Final score: 88
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Available audit logs The following types of audit logs are available for App Engine: Admin Activity audit logs Includes "admin write" operations that write metadata or configuration information.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback App Engine audit logging information Stay organized with collections Save and categorize content based on your preferences.
- The audit log name includes the resource identifier of the Google Cloud project, folder, billing account, or organization for which you want to view audit logging information.
- Audit log format Audit log entries include the following objects: The log entry itself, which is an object of type LogEntry .

### "How requests are routed \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/python/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/flexible/python/how-requests-are-routed)
- Source ID: `site-docs-reference`
- Final score: 86
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For apps created after February 2020, REGION ID .r is included in App Engine URLs.
- For apps created after February 2020, REGION ID .r is included in App Engine URLs.
- Example URLs Here are some examples of URLs for App Engine, showing both the appspot.com domain that App Engine assigns to your app and a custom domain, which you can set up for your app .
- All of these URLs include the region ID. gcloud When you deploy an app or service, the gcloud app deploy command displays the URL after the deployment succeeds.

### "How requests are routed \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed)
- Source ID: `site-docs-reference-2`
- Final score: 86
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For apps created after February 2020, REGION ID .r is included in App Engine URLs.
- For apps created after February 2020, REGION ID .r is included in App Engine URLs.
- Example URLs Here are some examples of URLs for App Engine, showing both the appspot.com domain that App Engine assigns to your app and a custom domain, which you can set up for your app .
- All of these URLs include the region ID. gcloud When you deploy an app or service, the gcloud app deploy command displays the URL after the deployment succeeds.

