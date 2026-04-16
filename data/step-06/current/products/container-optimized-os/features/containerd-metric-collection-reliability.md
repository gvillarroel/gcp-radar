---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.049Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "containerd metric collection reliability"
feature_slug: "containerd-metric-collection-reliability"
latest_feature_date: "2025-08-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/resources/support-policy"
  - "https://docs.cloud.google.com/container-optimized-os/docs/concepts/versioning"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/monitoring"
keywords:
  - "containerd"
  - "metric"
  - "collection"
  - "reliability"
  - "fixes"
  - "issue"
  - "could"
  - "break"
---

# containerd metric collection reliability

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Fixes a containerd issue that could break metric collection.

## Extended Definition

Fixes a containerd issue that could break metric collection.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/resources/support-policy](https://docs.cloud.google.com/container-optimized-os/docs/resources/support-policy)
- [https://docs.cloud.google.com/container-optimized-os/docs/concepts/versioning](https://docs.cloud.google.com/container-optimized-os/docs/concepts/versioning)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/monitoring](https://docs.cloud.google.com/container-optimized-os/docs/how-to/monitoring)

## Supporting Pages

### Support policy \_|\_ Container-Optimized OS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/resources/support-policy](https://docs.cloud.google.com/container-optimized-os/docs/resources/support-policy)
- Source ID: `site-docs-reference`
- Final score: 73
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It is actively patched with security updates (CVEs) and bug-fixes to address issues that impact Google Cloud users.
- Home Documentation Compute Compute Engine Container-Optimized OS Resources Send feedback Support policy Stay organized with collections Save and categorize content based on your preferences.
- Warning: Any Image Family API references to the deprecated image family will return errors and break any workflows depending on it.
- The milestone is actively scanned for security vulnerabilities, and security fixes are applied on regular basis.

### Versioning scheme \_|\_ Container-Optimized OS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/versioning](https://docs.cloud.google.com/container-optimized-os/docs/concepts/versioning)
- Source ID: `site-docs-reference`
- Final score: 69
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Once promoted to the LTS family, the LTS milestone provides the following benefits: A support duration of 2 years Security fixes for the entire support duration Fixes for any production issues A dedicated release notes page listing every change going into the image.
- Production 2 years Active maintenance of milestone by addressing production issues and security fixes with priority.
- Home Documentation Compute Compute Engine Container-Optimized OS Guides Send feedback Versioning scheme Stay organized with collections Save and categorize content based on your preferences.
- A tiered testing setup like this should help to minimize issues when rolling out newer major versions of Container-Optimized OS images to your production environment.

### "Monitoring system health with Node Problem Detector \_|\_ Container-Optimized\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/monitoring](https://docs.cloud.google.com/container-optimized-os/docs/how-to/monitoring)
- Source ID: `site-docs-reference`
- Final score: 60
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Google will use aggregated metrics to understand node problems and improve the reliability of Container-Optimized OS.
- The following guest policy enables the Node problem detector agent on all the instances. recipes: - name: recipe-enable-npd desiredState: INSTALLED installSteps: - scriptRun: interpreter: SHELL script: - #!/bin/bash systemctl start node-problem-detector Viewing the collected metrics Node Problem Detector reports a list of metrics against a Compute Engine instance monitored resource.
- Home Documentation Compute Compute Engine Container-Optimized OS Guides Send feedback Monitoring system health with Node Problem Detector Stay organized with collections Save and categorize content based on your preferences.
- Node Problem Detector monitors the instance health and reports health-related metrics to Cloud Monitoring, including capacity and error metrics that you can then visualize with Google Cloud Observability dashboards .

