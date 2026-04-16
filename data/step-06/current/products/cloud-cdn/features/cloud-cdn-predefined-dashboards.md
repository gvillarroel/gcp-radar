---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T14:23:30.343Z"
product_name: "Cloud CDN"
product_slug: "cloud-cdn"
feature_name: "Cloud CDN predefined dashboards"
feature_slug: "cloud-cdn-predefined-dashboards"
latest_feature_date: "2025-10-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/cdn/docs/logging"
  - "https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring"
  - "https://docs.cloud.google.com/cdn/docs/best-practices"
keywords:
  - "predefined"
  - "dashboards"
  - "monitoring"
  - "provides"
  - "built"
  - "enabled"
  - "default"
---

# Cloud CDN predefined dashboards

Product: Cloud CDN
Coverage: MEDIUM

## Step 02 Summary

Cloud CDN provides built-in predefined dashboards enabled by default for monitoring CDN traffic distribution and cache effectiveness.

## Extended Definition

Cloud CDN provides built-in predefined dashboards enabled by default for monitoring CDN traffic distribution and cache effectiveness.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/cdn/docs/logging](https://docs.cloud.google.com/cdn/docs/logging)
- [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)
- [https://docs.cloud.google.com/cdn/docs/best-practices](https://docs.cloud.google.com/cdn/docs/best-practices)

## Supporting Pages

### Logs and metrics for caching \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/logging](https://docs.cloud.google.com/cdn/docs/logging)
- Source ID: `site-docs-reference-2`
- Final score: 152
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cloud Monitoring provides predefined dashboards that are enabled by default for a quick insight into system health and performance.
- Note: To filter your monitoring data for a specific URL map or path rule, add the following filters to each chart's Monitoring Query Language (MQL) query: filter (resource.url map name = 'URL MAP NAME') filter (resource.matched url path rule = 'PATH RULE NAME') Predefined dashboards Cloud Monitoring offers predefined dashboards for Cloud CDN.
- The predefined dashboards appear by default.
- A backend can be a Cloud Storage bucket, a Compute Engine VM group, or an external backend. histogram quantile( 0.95, sum by (proxy continent, le) ( rate({"loadbalancing.googleapis.com/https/frontend tcp rtt bucket", monitored resource="https lb rule", backend target name="example-backend" }[1m]) ) ) Request count broken out by response code class for Cloud CDN-enabled backends This query breaks out traffic by response code class (2xx, 3xx, 4xx, 5xx) to help separate client successes, client errors, and server errors. sum by (response code class) ( count over time( {"loadbalancing.googleapis.com/https/request count", monitored resource="https lb rule", cache result!="DISABLED" }[1h] ) ) Request count broken out by country of origin This query shows traffic broken out by country of origin, which is determined by using client IP addresses. sum by (client country) ( rate({"loadbalancing.googleapis.com/https/request count", monitored resource="https lb rule"}[1m]) ) What's next To learn more about logging, including how to export logs to BigQuery, Pub/Sub, or Cloud Storage, and how to configure logs-based metrics for monitoring and alerting, see the Cloud Logging documentation .

### "Logs and metrics for backend services \_|\_ Cloud CDN \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)
- Source ID: `site-docs-root-2`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- In Monitoring, this value is only available on default dashboards.
- The metrics created are based on the Application Load Balancer Rule (Logs-based Metrics) resource ( l7 lb rule ), which is available under Cloud Monitoring dashboards instead of under the https lb rule resource.
- The dashboard provides data analysis in default intervals of 1H (one hour), 6H (six hours), 1D (one day), 1W (one week), and 6W (six weeks).
- You can use monitoring metrics to do the following: Evaluate a load balancer's configuration, usage, and performance Troubleshoot problems Improve resource utilization and user experience Note: Metrics are based on sampled traffic, that is, they won't correspond one-to-one with actual requests.

### Content delivery best practices \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/best-practices](https://docs.cloud.google.com/cdn/docs/best-practices)
- Source ID: `site-docs-reference-2`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- Use the custom monitoring dashboard for Cloud CDN To ensure greater reliability and performance, a best practice is to regularly review monitoring metrics related to Cloud CDN.
- Ensure that logging is enabled for Cloud CDN A best practice for managing Cloud CDN is to ensure that logging is enabled for all Cloud CDN enabled backends .
- Ensure your configuration doesn't enable a GCPHTTPFilter for caching on any path already protected by an IAP-enabled GCPBackendPolicy .
- To automatically cache static responses from your origin, you can use the --cache-mode=CACHE ALL STATIC setting (default).

