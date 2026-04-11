---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.909Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Service-level minimum instances"
feature_slug: "service-level-minimum-instances"
latest_feature_date: "2024-10-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/release-notes"
  - "https://docs.cloud.google.com/run/docs/container-contract"
  - "https://docs.cloud.google.com/run/docs/reference/container-contract"
keywords:
  - "level"
  - "minimum"
  - "instances"
  - "let"
  - "you"
  - "keep"
  - "configured"
  - "number"
---

# Service-level minimum instances

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Service-level minimum instances let you keep a configured minimum number of instances warm for a Cloud Run service; Service-level minimum instances let you keep a configured minimum number of instances warm for a Cloud Run service.

## Extended Definition

Service-level minimum instances let you keep a configured minimum number of instances warm for a Cloud Run service; Service-level minimum instances let you keep a configured minimum number of instances warm for a Cloud Run service.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)

## Supporting Pages

### Cloud Run release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- October 15, 2020 Feature You can now specify a minimum number of container instances to be kept warm and ready to serve requests, for services requiring reduced latency and fewer cold starts.
- This feature lets you override the arguments, environment variables, number of tasks, and task timeouts already configured for a job when you execute a job.
- This feature allows you to edit the machine (instance) type, as well as the minimum and maximum number of instances.
- This feature allows you to edit the machine (instance) type, as well as the minimum and maximum number of instances.

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- Source ID: `site-docs-root`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- If you have configured a number of minimum instances , you must use instance-based billing so that CPU is allocated outside of requests .
- Shutdown For Cloud Run services, an idle instance can be shut down at any time, including instances kept warm due to a configured minimum number of instances .
- When a revision does not receive any traffic, it is scaled in to the minimum number of instances configured (zero by default).
- Unless an instance must be kept idle due to the minimum number of instances configuration setting, it won't be kept idle for longer than 15 minutes.

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- Source ID: `site-docs-root`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- If you have configured a number of minimum instances , you must use instance-based billing so that CPU is allocated outside of requests .
- Shutdown For Cloud Run services, an idle instance can be shut down at any time, including instances kept warm due to a configured minimum number of instances .
- When a revision does not receive any traffic, it is scaled in to the minimum number of instances configured (zero by default).
- Unless an instance must be kept idle due to the minimum number of instances configuration setting, it won't be kept idle for longer than 15 minutes.

