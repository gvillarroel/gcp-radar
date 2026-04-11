---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:33:10.258Z"
product_name: "Apigee hybrid"
product_slug: "apigee-hybrid"
feature_name: "Custom metrics scaling"
feature_slug: "custom-metrics-scaling"
latest_feature_date: "2022-04-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/release-notes"
keywords:
  - "custom-metric autoscaling"
  - "autoscaling custom metrics"
  - "StackdriverExporter configuration"
  - "metrics:proxyStackdriverExporter"
  - "metrics:appStackdriverExporter"
  - "proxyStackdriverExporter"
  - "custom metrics scaling"
  - "appStackdriverExporter"
---

# Custom metrics scaling

Product: Apigee hybrid
Coverage: LOW

## Step 02 Summary

Apigee hybrid v1.7.0 introduces custom metrics scaling via the metrics:appStackdriverExporter and metrics:proxyStackdriverExporter configuration properties.

## Extended Definition

Apigee hybrid v1.7.0 introduces custom metrics scaling via the metrics:appStackdriverExporter and metrics:proxyStackdriverExporter configuration properties.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref)
- [https://docs.cloud.google.com/apigee/docs/hybrid/release-notes](https://docs.cloud.google.com/apigee/docs/hybrid/release-notes)

## Supporting Pages

### Configuration property reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref)
- Source ID: `site-docs-reference`
- Final score: 76
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- See: metrics.appStackdriverExporter.resources.requests.memory metrics.proxyStackdriverExporter.resources.requests.memory metrics.stackdriverExporter.resources.limits.cpu Advanced Introduced in version: 1.4.0 Chart: apigee-telemetry Deprecated : Starting in Hybrid version 1.8, metrics:stackdriverExporter has been replaced with metrics:appStackdriverExporter and metrics:proxyStackdriverExporter .
- See: metrics.appStackdriverExporter.resources.requests.cpu metrics.proxyStackdriverExporter.resources.requests.cpu metrics.stackdriverExporter.resources.requests.memory Advanced Introduced in version: 1.4.0 Chart: apigee-telemetry Deprecated : Starting in Hybrid version 1.8, metrics:stackdriverExporter has been replaced with metrics:appStackdriverExporter and metrics:proxyStackdriverExporter .
- See: metrics.appStackdriverExporter.resources.limits.cpu metrics.proxyStackdriverExporter.resources.limits.cpu metrics.stackdriverExporter.resources.limits.memory Advanced Introduced in version: 1.4.0 Chart: apigee-telemetry Deprecated : Starting in Hybrid version 1.8, metrics:stackdriverExporter has been replaced with metrics:appStackdriverExporter and metrics:proxyStackdriverExporter .
- See Storing service account keys in Kubernetes secrets . metrics.stackdriverExporter.resources.requests.cpu Advanced Introduced in version: 1.4.0 Chart: apigee-telemetry Deprecated : Starting in Hybrid version 1.8, metrics:stackdriverExporter has been replaced with metrics:appStackdriverExporter and metrics:proxyStackdriverExporter .

### Apigee hybrid release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/release-notes](https://docs.cloud.google.com/apigee/docs/hybrid/release-notes)
- Source ID: `site-docs-reference`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- See Using JWT OAuth tokens . (Implemented in Apigee hybrid v1.7.0) v1.7.0 Feature Cloud Logging Apigee hybrid v1.7.0 now supports the <CloudLogging> element in the MessageLogging policy that lets you log messages to Cloud Logging . (Implemented in Apigee hybrid v1.7.0) v1.7.0 Feature Custom metrics scaling Apigee hybrid v1.7.0 now supports custom metrics scaling using the metrics:appStackdriverExporter and metrics:proxyStackdriverExporter configuration properties.

