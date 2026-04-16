---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.144Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Maintenance event email notifications"
feature_slug: "maintenance-event-email-notifications"
latest_feature_date: "2024-05-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/maintenance"
  - "https://docs.cloud.google.com/alloydb/docs/query-insights-overview"
  - "https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration"
keywords:
  - "notifications"
  - "event"
  - "email"
  - "about"
  - "send"
  - "maintenance"
---

# Maintenance event email notifications

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB can send email notifications about upcoming maintenance events.

## Extended Definition

AlloyDB can send email notifications about upcoming maintenance events.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/maintenance](https://docs.cloud.google.com/alloydb/docs/maintenance)
- [https://docs.cloud.google.com/alloydb/docs/query-insights-overview](https://docs.cloud.google.com/alloydb/docs/query-insights-overview)
- [https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration](https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration)

## Supporting Pages

### Maintenance overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/maintenance](https://docs.cloud.google.com/alloydb/docs/maintenance)
- Source ID: `site-docs-reference-2`
- Final score: 134
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In addition, if you opt in to receive email notifications about scheduled AlloyDB maintenance events, then you receive an automated notification about the event as soon as it's scheduled.
- Home Documentation Databases AlloyDB for PostgreSQL Guides Send feedback Maintenance overview Stay organized with collections Save and categorize content based on your preferences.
- If you set a maintenance window, then AlloyDB schedules future non-emergency maintenance events to begin no later than one hour after the specified time.
- A maintenance window defines your preferred maintenance time, in terms of hour-of-day and day-of-week, for your cluster to begin its maintenance events.

### "Manage your AlloyDB resources using Knowledge Catalog \_|\_ AlloyDB for\

- URL: [https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration](https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration)
- Source ID: `site-iam-reference`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- What's next About metadata management in Knowledge Catalog Knowledge Catalog Identity and Access Management roles Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Request JSON body: { "dataplexConfig" : { "enabled" : true } } To send your request, use one of the following options: curl (Linux, macOS, or Cloud Shell) The following command assumes you signed in to the Google Cloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically signs you in to the gcloud CLI.
- Request JSON body: { "dataplexConfig" : { "enabled" : false } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) The following command assumes you signed in to the Google Cloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically signs you in to the gcloud CLI.
- To send your request, use one of the following options: curl (Linux, macOS, or Cloud Shell) The following command assumes you signed in to the Google Cloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically signs you in to the gcloud CLI.

### About query insights \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/query-insights-overview](https://docs.cloud.google.com/alloydb/docs/query-insights-overview)
- Source ID: `site-docs-root`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- Query insights integrate with Cloud Monitoring , letting you create custom dashboards and alerts on query metrics or tags and receive notifications using email, SMS, Slack, PagerDuty, and more.
- Home Documentation Databases AlloyDB for PostgreSQL Guides Send feedback About query insights Stay organized with collections Save and categorize content based on your preferences.
- Limitations The limitations of query insights are as follows: When client IP address tracking is enabled and a high number of clients, for example, exceeding 100, send traffic to an instance, query insights capture the client addresses that contribute to the highest cumulative execution time.
- What's Next Improve query performance using query insights AlloyDB metrics Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

