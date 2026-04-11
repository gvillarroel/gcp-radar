---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:33:10.245Z"
product_name: "Apigee hybrid"
product_slug: "apigee-hybrid"
feature_name: "Metrics-based autoscaling via customAutoscaling.enabled"
feature_slug: "metrics-based-autoscaling-via-customautoscaling-enabled"
latest_feature_date: "2024-12-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/hybrid/release-notes"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/latest/scale-and-autoscale"
keywords:
  - "disable metrics autoscaling"
  - "enable metrics autoscaling"
  - "metrics-based autoscaling"
  - "autoscaling toggle"
  - "autoscaling flag"
  - "customAutoscaling.enabled"
  - "runtime service autoscaling"
  - "customAutoscaling"
---

# Metrics-based autoscaling via customAutoscaling.enabled

Product: Apigee hybrid
Coverage: LOW

## Step 02 Summary

Provides a configuration toggle (customAutoscaling.enabled) to enable or disable metrics-based autoscaling for Apigee Hybrid runtime services.

## Extended Definition

Provides a configuration toggle (customAutoscaling.enabled) to enable or disable metrics-based autoscaling for Apigee Hybrid runtime services.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/hybrid/release-notes](https://docs.cloud.google.com/apigee/docs/hybrid/release-notes)
- [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref)
- [https://docs.cloud.google.com/apigee/docs/hybrid/latest/scale-and-autoscale](https://docs.cloud.google.com/apigee/docs/hybrid/latest/scale-and-autoscale)

## Supporting Pages

### Apigee hybrid release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/release-notes](https://docs.cloud.google.com/apigee/docs/hybrid/release-notes)
- Source ID: `site-docs-reference`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- See: Rotating Cassandra credentials in Kubernetes secrets Rotating Cassandra credentials in Vault: Rolling back a rotation Rotating Cassandra credentials in Kubernetes secrets: Rolling back a rotation v1.14.0 Feature Enable and disable metrics-based scaling with customAutoscaling.enabled Starting in version v1.14, you can enable and disable metrics-based auto-scaling with the customAutoscaling.enabled configuration property.
- See: Scale and autoscale runtime services: Metrics-based scaling customAutoscaling.enabled v1.14.0 Feature Guardrails checks to ensure backups before upgrade Starting in version 1.14 new guardrails checks have been added to ensure a backup is enabled and has been made before proceeding with an upgrade.

### Configuration property reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref)
- Source ID: `site-docs-reference`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Apply changes to customAutoscaling.enabled by updating the apigee-telemetry chart. enhanceProxyLimits Advanced Introduced in version: 1.14.0 Default value: false Chart: apigee-org , apigee-virtualhost Required enhanceProxyLimits is required for Apigee's Enhanced per-environment proxy limits feature.
- For example: contractProvider: https://us-apigee.googleapis.com customAutoscaling.enabled Basic Introduced in version: 1.14.0 Default value: true Chart: apigee-telemetry Enables Apigee's metric-based autoscaling when set to true (the default).

### Scale and autoscale runtime services \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/latest/scale-and-autoscale](https://docs.cloud.google.com/apigee/docs/hybrid/latest/scale-and-autoscale)
- Source ID: `site-docs-reference`
- Final score: 22
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can enable or disable metrics-based scaling by setting the customAutoscaling.enabled property to true or false .
- Apply changes to the customAutoscaling.enabled property by updating the apigee-telemetry chart.

