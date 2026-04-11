---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T21:05:36.396Z"
product_name: "App Engine flexible environment Node.js"
product_slug: "app-engine-flexible-environment-node-js"
feature_name: "Cloud Scheduler GA for App Engine"
feature_slug: "cloud-scheduler-ga-for-app-engine"
latest_feature_date: "2019-03-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/nodejs/understanding-firewalls"
keywords:
  - "cron-style execution"
  - "Cloud Scheduler integration"
  - "App Engine scheduled jobs"
  - "scheduler jobs"
  - "GA Cloud Scheduler"
  - "Cloud Scheduler on App Engine"
  - "App Engine Cloud Scheduler"
  - "App Engine cron"
---

# Cloud Scheduler GA for App Engine

Product: App Engine flexible environment Node.js
Coverage: LOW

## Step 02 Summary

Cloud Scheduler is generally available on App Engine, providing scheduled (cron-style) unit-of-work execution.

## Extended Definition

Cloud Scheduler is generally available on App Engine, providing scheduled (cron-style) unit-of-work execution.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/nodejs/understanding-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/nodejs/understanding-firewalls)

## Supporting Pages

### "Understanding the App Engine firewall \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/nodejs/understanding-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/nodejs/understanding-firewalls)
- Source ID: `site-docs-reference-2`
- Final score: 22
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Service IP range for requests sent to the App Engine standard environment IP range for requests sent to the App Engine flexible environment App Engine Cron 0.1.0.1/32 or 0.1.0.2/32, bypasses the default firewall rule if set to deny 0.1.0.1/32 or 0.1.0.2/32 Compute Engine instances with external IP addresses External IP address of the instance External IP address of the instance Compute Engine instances without an external IP address 0.0.0.0/32 0.0.0.0/32 Compute Engine instances without an external IP address using Cloud NAT for outbound connections 0.0.0.0/32 0.0.0.0/32 Cloud Scheduler jobs using App Engine HTTP and App Engine tasks in Cloud Tasks (including App Engine Task Queues) 0.1.0.2/32, bypasses the default firewall rule if set to deny 0.1.0.2/32 Cloud Storage or Blobstore 0.1.0.30/32 Not applicable URL Fetch 0.1.0.40/32 0.1.0.40/32 Warming requests 0.1.0.3/32, bypasses the default firewall rule if set to deny Not applicable Depending on your use case, these additional instructions might apply when configuring App Engine firewall rules: Requests from newly created or updated App Engine Cron jobs sent to either the App Engine standard or flexible environment come from 0.1.0.2 .
- To learn more about how to identify requests from the App Engine Cron service, see Validating cron requests .

