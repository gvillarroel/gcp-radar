---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.366Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Microservices observability for gRPC applications"
feature_slug: "microservices-observability-for-grpc-applications"
latest_feature_date: "2022-10-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party"
  - "https://docs.cloud.google.com/logging/docs/agent"
keywords:
  - "microservices"
  - "observability"
  - "grpc"
  - "applications"
  - "can"
  - "instrumented"
  - "use"
---

# Microservices observability for gRPC applications

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

GRPC applications can be instrumented to use Microservices observability.

## Extended Definition

GRPC applications can be instrumented to use Microservices observability.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party)
- [https://docs.cloud.google.com/logging/docs/agent](https://docs.cloud.google.com/logging/docs/agent)

## Supporting Pages

### "Google Cloud Observability agents \_|\_ Cloud Logging \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/logging/docs/agent](https://docs.cloud.google.com/logging/docs/agent)
- Source ID: `site-docs-root`
- Final score: 75
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Try Google Cloud Observability free Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Ops Agent Read docs Legacy Logging agent Read docs Try it for yourself If you're new to Google Cloud, create an account to evaluate how Google Cloud Observability performs in real-world scenarios.
- Home Documentation Observability Cloud Logging Guides Send feedback Google Cloud Observability agents Stay organized with collections Save and categorize content based on your preferences.
- Google Cloud Observability provides the following agents for collecting logs from Linux and Windows VM instances.

### LogEntry \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry)
- Source ID: `site-docs-reference`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- Applications that are instrumented for tracing will generally assign a new, unique span ID on each incoming request.
- AppHubApplication Resource identifiers associated with an AppHub application AppHub resources are of the form projects/ /locations/ /applications/ projects/ /locations/ /applications/ /services/ projects/ /locations/ /applications/ /workloads/ These resources can be reconstructed from the components below.
- Whereas a trace may involve multiple different microservices running on multiple different machines, a span generally corresponds to a single logical operation being performed in a single instance of a microservice on one specific machine.
- May be empty if there is no associated AppHub application or multiple associated applications (such as for VPC flow logs) apphubDestination object ( AppHub ) Output only.

### "Collect logs from third-party applications \_|\_ Cloud Logging \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party)
- Source ID: `site-docs-root-2`
- Final score: 71
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Observability Cloud Logging Guides Send feedback Collect logs from third-party applications Stay organized with collections Save and categorize content based on your preferences.
- For a walkthrough on how to use Ansible to install the Ops Agent, configure a third-party application, and install a sample dashboard, see the Install the Ops Agent to troubleshoot third-party applications video.
- To see the full list of integrations that the Ops Agent supports, including the integrations that collect metrics from third-party applications, go to Monitoring third-party applications .
- The following guides explain how to configure the Ops Agent to collect logs from supported third-party applications.

