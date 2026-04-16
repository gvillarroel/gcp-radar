---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.946Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Log-based alerts"
feature_slug: "log-based-alerts"
latest_feature_date: "2021-07-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/monitoring/latest"
  - "https://docs.cloud.google.com/monitoring/docs"
  - "https://docs.cloud.google.com/monitoring/docs/monitoring-overview"
keywords:
  - "log"
  - "based"
  - "alerts"
  - "monitoring"
  - "supports"
  - "triggered"
  - "content"
  - "matches"
---

# Log-based alerts

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

Cloud Monitoring supports alerts triggered by log content matches created from Logs Explorer or the Monitoring API.

## Extended Definition

Cloud Monitoring supports alerts triggered by log content matches created from Logs Explorer or the Monitoring API.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/monitoring/latest](https://docs.cloud.google.com/python/docs/reference/monitoring/latest)
- [https://docs.cloud.google.com/monitoring/docs](https://docs.cloud.google.com/monitoring/docs)
- [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)

## Supporting Pages

### "Python Client for Stackdriver Monitoring \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest](https://docs.cloud.google.com/python/docs/reference/monitoring/latest)
- Source ID: `site-python-reference`
- Final score: 41
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Developer tools Python Client libraries Send feedback Python Client for Stackdriver Monitoring Stay organized with collections Save and categorize content based on your preferences.
- The Google-specific logging configurations (default handlers for environment-based configuration; not propagating logging events to the root logger) get executed the first time any client library is instantiated in your application, and only if the affected loggers have not been previously configured. (This is the reason for 2.i. above.) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Code-Based Examples Configuring a handler for all Google-based loggers import logging from google.cloud import library v1 base logger = logging.getLogger("google") base logger.addHandler(logging.StreamHandler()) base logger.setLevel(logging.DEBUG) Configuring a handler for a specific Google module (for a client library called library v1 ): import logging from google.cloud import library v1 base logger = logging.getLogger("google.cloud.library v1") base logger.addHandler(logging.StreamHandler()) base logger.setLevel(logging.DEBUG) Logging details Regardless of which of the mechanisms above you use to configure logging for this library, by default logging events are not propagated up to the root logger from the google-level logger.
- 2.30.0 (latest) 2.29.1 2.28.0 2.27.2 2.26.0 2.25.0 2.24.0 2.23.1 2.22.2 2.21.0 2.20.0 2.19.4 2.18.0 2.17.0 2.16.0 2.15.1 2.14.2 2.13.0 2.12.0 2.11.3 2.10.1 2.9.2 2.8.0 2.7.0 2.6.0 2.5.2 2.4.2 2.3.0 2.2.1 2.1.0 2.0.1 1.1.2 1.0.0 0.36.2 0.35.0 0.34.0 0.33.0 0.32.0 Stackdriver Monitoring : collects metrics, events, and metadata from Google Cloud, Amazon Web Services (AWS), hosted uptime probes, and application instrumentation.

### Cloud Monitoring documentation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs](https://docs.cloud.google.com/monitoring/docs)
- Source ID: `site-docs-reference`
- Final score: 41
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use case Use cases SAP HANA monitoring agent user guide By using Cloud Monitoring, you can build dashboards to visualize your SAP HANA metrics and set up alerts based on metric.
- Documentation resources Find quickstarts and guides, review key references, and get help with common issues. format list numbered Guides Quickstart: Collect Apache web server metrics with Ops Agent Create alerting policies Configure notification channels Create synthetic monitors Create charts Select metrics for charts and alerts Install the Ops Agent Create metrics with the API Configure a metrics scope More guides find in page Reference Google Cloud metrics Anthos metrics Kubernetes metrics Agent metrics Monitored resource types REST API API Method: projects.timeSeries.list Monitoring filters Monitoring Client Libraries More references info Resources Quotas and limits Release notes Pricing More resources Related resources Training and tutorials Use cases Explore self-paced training, use cases, reference architectures, and code samples with examples of how to use and connect Google Cloud services.
- Training Training and tutorials Google Cloud Fundamentals: Core Infrastructure This one-day course uses lectures, demos, and hands-on labs to give you an overview of Google Cloud products and services so that you can learn the value of Google Cloud and how to incorporate cloud-based solutions into your business strategies.
- Training Training and tutorials Cloud Monitoring overview Learn how you can you can use Cloud Monitoring to collect and view performance characteristics of your system, how you can monitor the availability of your services, and how you can be notified of problems with your services.

### Cloud Monitoring overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- Source ID: `site-docs-reference`
- Final score: 35
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Observability Cloud Monitoring Guides Send feedback Cloud Monitoring overview Stay organized with collections Save and categorize content based on your preferences.
- Monitoring supports common notification channels , including email, Cloud Mobile App, and services such as PagerDuty or Slack.
- Cloud Monitoring API: The API supports Prometheus Query Language (PromQL) and Monitoring filter expressions.
- Query languages for Cloud Monitoring When you create an alerting policy or a chart, you must provide a query that describes the data that you want to monitor or chart: Google Cloud console: You can build your query by making selections from menus, or you can write a query.

