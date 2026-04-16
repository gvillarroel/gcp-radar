---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.079Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "Legacy Logging Agent"
feature_slug: "legacy-logging-agent"
latest_feature_date: "2024-08-20"
deprecation_date: "2024-08-20"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/arm"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance"
keywords:
  - "legacy"
  - "logging"
  - "agent"
  - "provides"
  - "fluentd"
  - "based"
  - "container"
  - "optimized"
---

# Legacy Logging Agent

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Provides the legacy fluentd-based logging agent in Container-Optimized OS; The legacy fluentd logging agent was removed from Container-Optimized OS; deprecated on 2024-08-20.

## Extended Definition

Provides the legacy fluentd-based logging agent in Container-Optimized OS; The legacy fluentd logging agent was removed from Container-Optimized OS; deprecated on 2024-08-20.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging](https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/arm](https://docs.cloud.google.com/container-optimized-os/docs/how-to/arm)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance)

## Supporting Pages

### Using Cloud Logging with Container-Optimized OS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging](https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging)
- Source ID: `site-docs-reference`
- Final score: 223
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Selecting the logging agent x86-based Container-Optimized OS 105 and 109 images ship two implementations of the logging agent: fluentd (legacy) and fluent-bit.
- Logging agent configuration compatibility The logging agent is a fluentd-based container on x86-based Container-Optimized OS images and a fluent-bit binary on Arm-based Container-Optimized OS images.
- Up until Container-Optimized OS 101, x86-based Container-Optimized OS images used a containerized logging agent based on fluentd.
- The legacy logging agent, fluentd, will be removed in Container-Optimized OS 113.

### Using Arm-based Container-Optimized OS images \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/arm](https://docs.cloud.google.com/container-optimized-os/docs/how-to/arm)
- Source ID: `site-docs-reference`
- Final score: 124
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Logging agent Container-Optimized OS Arm-based images use fluent-bit as Cloud Logging agent and x86-based images use fluentd.
- The following table describes which containers are compatible with Arm-based images: Container images Compatible with Arm-based images gcr.io/cos-cloud/toolbox Yes gcr.io/cos-cloud/cos-gpu-installer No gcr.io/stackdriver-agents/stackdriver-logging-agent No gcr.io/gce-containers/konlet No Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- However, if you have custom fluentd configurations, you might experience breakage when migrating workloads to Arm-based Container-Optimized OS images.
- You can also see all available releases on command line by running the following command: gcloud compute images list --project cos-cloud --no-standard-images --filter = "name 'cos-arm64- '" The output is similar to the following: NAME PROJECT FAMILY DEPRECATED STATUS cos-arm64-101-17162-40-5 cos-cloud cos-arm64-101-lts READY cos-arm64-beta-101-17162-40-5 cos-cloud cos-arm64-beta READY cos-arm64-dev-105-17228-0-0 cos-cloud cos-arm64-dev READY cos-arm64-stable-101-17162-40-5 cos-cloud cos-arm64-stable READY Arm-based Container-Optimized OS images share the same versioning scheme and LTS milestone lifecycle with x86-based images.

### "Configuring and Checking CIS Compliance \_|\_ Container-Optimized OS \_\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance)
- Source ID: `site-docs-reference`
- Final score: 63
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Periodic checking of CIS compliance status Container-Optimized OS images include the following services to periodically check CIS compliance: cis-compliance-scanner.service : checks the compliance status based on environment variables defined at /etc/cis-scanner/env vars .
- Home Documentation Compute Compute Engine Container-Optimized OS Guides Send feedback Configuring and Checking CIS Compliance Stay organized with collections Save and categorize content based on your preferences.
- Note: Arm-based Container-Optimized OS images don't comply with the CIS benchmarks.
- This level includes recommendations such as the following: Firewall rules exist for all open ports ICMP redirects and router advertisements are not accepted Default user shell timeout is 900 seconds or less How Container-Optimized OS complies with the CIS Benchmarks Starting with Milestone 97 , Container-Optimized OS images comply with to CIS Level 1 by default and provide an option to comply with CIS Level 2.

