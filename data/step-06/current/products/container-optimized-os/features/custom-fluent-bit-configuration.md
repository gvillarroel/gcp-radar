---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.101Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "Custom Fluent Bit configuration"
feature_slug: "custom-fluent-bit-configuration"
latest_feature_date: "2023-08-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/arm"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance"
keywords:
  - "custom"
  - "fluent"
  - "bit"
  - "configuration"
  - "container"
  - "optimized"
  - "os"
  - "allows"
---

# Custom Fluent Bit configuration

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Container-Optimized OS allows Fluent Bit to use customized configuration.

## Extended Definition

Container-Optimized OS allows Fluent Bit to use customized configuration.

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
- Final score: 88
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- However, if you have a custom logging configuration, you might experience breakage when migrating workloads to images that are based on a different architecture or to a newer version of Container-Optimized OS.
- Logging agent configuration compatibility The logging agent is a fluentd-based container on x86-based Container-Optimized OS images and a fluent-bit binary on Arm-based Container-Optimized OS images.
- Create an instance with a logging agent enabled Console To run a Compute Engine instance on Container-Optimized OS with the fluent-bit logging agent enabled, perform the following: Open the Compute Engine instance creation page on Google Cloud console.
- Selecting the logging agent x86-based Container-Optimized OS 105 and 109 images ship two implementations of the logging agent: fluentd (legacy) and fluent-bit.

### Using Arm-based Container-Optimized OS images \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/arm](https://docs.cloud.google.com/container-optimized-os/docs/how-to/arm)
- Source ID: `site-docs-reference`
- Final score: 76
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- However, if you have custom fluentd configurations, you might experience breakage when migrating workloads to Arm-based Container-Optimized OS images.
- Differences between Arm and x86 images The Arm-based and x86-based Container-Optimized OS images share the same source code , but the build and compile configurations are different.
- Cloud Logging agent Container-Optimized OS Arm-based images use fluent-bit as Cloud Logging agent and x86-based images use fluentd.
- Kernel Container-Optimized OS Arm-based images have a separate kernel configuration that is different from x86-based images.

### "Configuring and Checking CIS Compliance \_|\_ Container-Optimized OS \_\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance)
- Source ID: `site-docs-reference`
- Final score: 59
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Check instance compliance status Container-Optimized OS images provide the following systemd services for compliance checking and configuration: cis-level1.service : Enabled by default and starts on boot.
- This level includes recommendations such as the following: Firewall rules exist for all open ports ICMP redirects and router advertisements are not accepted Default user shell timeout is 900 seconds or less How Container-Optimized OS complies with the CIS Benchmarks Starting with Milestone 97 , Container-Optimized OS images comply with to CIS Level 1 by default and provide an option to comply with CIS Level 2.
- Periodic checking of CIS compliance status Container-Optimized OS images include the following services to periodically check CIS compliance: cis-compliance-scanner.service : checks the compliance status based on environment variables defined at /etc/cis-scanner/env vars .
- Home Documentation Compute Compute Engine Container-Optimized OS Guides Send feedback Configuring and Checking CIS Compliance Stay organized with collections Save and categorize content based on your preferences.

