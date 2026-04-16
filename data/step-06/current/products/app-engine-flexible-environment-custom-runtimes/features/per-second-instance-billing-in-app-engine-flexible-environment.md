---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:21:29.613Z"
product_name: "App Engine flexible environment custom runtimes"
product_slug: "app-engine-flexible-environment-custom-runtimes"
feature_name: "Per-second instance billing in App Engine Flexible Environment"
feature_slug: "per-second-instance-billing-in-app-engine-flexible-environment"
latest_feature_date: "2017-09-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/quotas"
  - "https://docs.cloud.google.com/appengine/docs/flexible/secure-minimum-tls"
  - "https://docs.cloud.google.com/appengine/docs/flexible/debugging-an-instance"
keywords:
  - "per"
  - "second"
  - "instance"
  - "billing"
  - "app"
  - "engine"
  - "flexible"
  - "environment"
---

# Per-second instance billing in App Engine Flexible Environment

Product: App Engine flexible environment custom runtimes
Coverage: MEDIUM

## Step 02 Summary

Instance billing granularity was changed to per-second increments, with the minimum charge for instance resources reduced from 10 minutes to 1 minute.

## Extended Definition

Instance billing granularity was changed to per-second increments, with the minimum charge for instance resources reduced from 10 minutes to 1 minute.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/quotas](https://docs.cloud.google.com/appengine/docs/flexible/quotas)
- [https://docs.cloud.google.com/appengine/docs/flexible/secure-minimum-tls](https://docs.cloud.google.com/appengine/docs/flexible/secure-minimum-tls)
- [https://docs.cloud.google.com/appengine/docs/flexible/debugging-an-instance](https://docs.cloud.google.com/appengine/docs/flexible/debugging-an-instance)

## Supporting Pages

### "Quotas and limits \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/quotas](https://docs.cloud.google.com/appengine/docs/flexible/quotas)
- Source ID: `site-docs-reference-2`
- Final score: 98
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Resource Daily limit Maximum rate UrlFetch API calls 860,000,000 calls 660,000 calls/minute UrlFetch data sent 4.5 TB 3,600 MB/minute UrlFetch data received 4.5 TB 3,600 MB/minute Networking limits The following networking limits apply to App Engine: Outbound connections per second per instance: 500 (cannot be increased) Outbound DNS resolutions per second per instance: 100 (cannot be increased) Maximum packets per second per instance: 80,000 Maximum bits per second per instance: 100,000,000 Maximum worker connections in Nginx per instance: 4,096 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Application hosting App Engine Flexible environment Resources Send feedback Quotas and limits Stay organized with collections Save and categorize content based on your preferences.
- Quotas for the App Engine flexible environment When you deploy an application to the App Engine flexible environment, some Google Cloud resources are consumed.
- If the number of idle instances created by App Engine exceeds the maximum you specify in the Performance Settings tab of the Google Cloud console, the excess instances do not accrue instance hours.

### "Secure your app with minimum TLS (flexible environment) \_|\_ App Engine\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/secure-minimum-tls](https://docs.cloud.google.com/appengine/docs/flexible/secure-minimum-tls)
- Source ID: `site-docs-reference-2`
- Final score: 72
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Secure your app with minimum TLS (flexible environment) Stay organized with collections Save and categorize content based on your preferences.
- Update your application settings in the App Engine flexible environment to use TLS version 1.2 and later, along with a corresponding secure set of cipher suites.
- For tool-specific steps, click the tab for your preferred tool: Console In the Google Cloud console, go to the App Engine Settings page: Go to Settings In the Application settings tab, click Edit application settings .
- When you select the latest TLS version, App Engine automatically blocks insecure traffic, without requiring you to configure a global external Application Load Balancer to route requests to your application.

### "Debugging an instance \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/debugging-an-instance](https://docs.cloud.google.com/appengine/docs/flexible/debugging-an-instance)
- Source ID: `site-docs-reference`
- Final score: 68
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Debugging an instance Stay organized with collections Save and categorize content based on your preferences.
- In order to debug an instance, your role must contain the appengine.instances.enableDebug permission.
- Note: This guide is applicable to all runtimes in the flexible environment except for .NET.
- Understanding common containers In addition to the container running your application code, your instance may also have the following containers: Container and Source Code Description cloud-sql Ensures secure connections to your Cloud SQL instance. fluentd logger Logging agent. nginx proxy Proxies requests to the application. opentelemetry-collector Receives, processes, and exports telemetry data. stackdriver-monitoring-agent Collects, stores, and monitors system information.

