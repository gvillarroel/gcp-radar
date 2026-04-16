---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.503Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Advanced logs filters"
feature_slug: "advanced-logs-filters"
latest_feature_date: "2015-08-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/logging/latest/entries"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/overview"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/manage-policies-auto-install"
keywords:
  - "advanced"
  - "logs"
  - "filters"
  - "logging"
  - "supports"
  - "arbitrary"
  - "boolean"
  - "expressions"
---

# Advanced logs filters

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

Cloud Logging supports advanced logs filters with arbitrary Boolean expressions over log entries.

## Extended Definition

Cloud Logging supports advanced logs filters with arbitrary Boolean expressions over log entries.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/logging/latest/entries](https://docs.cloud.google.com/python/docs/reference/logging/latest/entries)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/overview](https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/overview)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/manage-policies-auto-install](https://docs.cloud.google.com/logging/docs/agent/ops-agent/manage-policies-auto-install)

## Supporting Pages

### Log Entries \_|\_ Python client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/logging/latest/entries](https://docs.cloud.google.com/python/docs/reference/logging/latest/entries)
- Source ID: `site-python-reference`
- Final score: 64
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters log name ( str ) – The name of the logger used to post the entry. labels ( Optional [ dict ] ) – Mapping of labels for the entry insert id ( Optional [ str ] ) – The ID used to identify an entry uniquely. severity ( Optional [ str ] ) – The severity of the event being logged. http request ( Optional [ dict ] ) – Info about HTTP request associated with the entry. timestamp ( Optional [ datetime.datetime ] ) – Timestamp for the entry. resource ( Optional [ google.cloud.logging v2.resource.Resource ] ) – Monitored resource of the entry. trace ( Optional [ str ] ) – Trace ID to apply to the entry. span id ( Optional [ str ] ) – Span ID within the trace for the log entry.
- Parameters log name ( str ) – The name of the logger used to post the entry. labels ( Optional [ dict ] ) – Mapping of labels for the entry insert id ( Optional [ str ] ) – The ID used to identify an entry uniquely. severity ( Optional [ str ] ) – The severity of the event being logged. http request ( Optional [ dict ] ) – Info about HTTP request associated with the entry. timestamp ( Optional [ datetime.datetime ] ) – Timestamp for the entry. resource ( Optional [ google.cloud.logging v2.resource.Resource ] ) – Monitored resource of the entry. trace ( Optional [ str ] ) – Trace ID to apply to the entry. span id ( Optional [ str ] ) – Span ID within the trace for the log entry.
- Parameters log name ( str ) – The name of the logger used to post the entry. labels ( Optional [ dict ] ) – Mapping of labels for the entry insert id ( Optional [ str ] ) – The ID used to identify an entry uniquely. severity ( Optional [ str ] ) – The severity of the event being logged. http request ( Optional [ dict ] ) – Info about HTTP request associated with the entry. timestamp ( Optional [ datetime.datetime ] ) – Timestamp for the entry. resource ( Optional [ google.cloud.logging v2.resource.Resource ] ) – Monitored resource of the entry. trace ( Optional [ str ] ) – Trace ID to apply to the entry. span id ( Optional [ str ] ) – Span ID within the trace for the log entry.
- Parameters log name ( str ) – The name of the logger used to post the entry. labels ( Optional [ dict ] ) – Mapping of labels for the entry insert id ( Optional [ str ] ) – The ID used to identify an entry uniquely. severity ( Optional [ str ] ) – The severity of the event being logged. http request ( Optional [ dict ] ) – Info about HTTP request associated with the entry. timestamp ( Optional [ datetime.datetime ] ) – Timestamp for the entry. resource ( Optional [ google.cloud.logging v2.resource.Resource ] ) – Monitored resource of the entry. trace ( Optional [ str ] ) – Trace ID to apply to the entry. span id ( Optional [ str ] ) – Span ID within the trace for the log entry.

### "google-cloud-logging overview (3.29.0) \_|\_ Java client libraries \_|\_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/overview](https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/overview)
- Source ID: `site-java-reference`
- Final score: 56
- Re-rank relevance: N/A

Evidence snippets:
- The example below demonstrates how you would import the BOM and include the google-cloud-logging artifact. <dependencyManagement> <dependencies> <dependency> <groupId>com.google.cloud</groupId> <artifactId>libraries-bom</artifactId> <version>26.79.0</version> <type>pom</type> <scope>import</scope> </dependency> </dependencies> </dependencyManagement> <dependencies> <dependency> <groupId>com.google.cloud</groupId> <artifactId>google-cloud-logging</artifactId> </dependency> </dependencies> Gradle BOMs are supported by default in Gradle 5.x or later.
- Cloud Logging Product Reference GitHub Repository Maven artifact Getting Started In order to use this library, you first need to go through the following steps: Install a JDK (Java Development Kit) Select or create a Cloud Platform project Enable billing for your project Enable the API Set up authentication Use the Cloud Logging for Java To ensure that your project uses compatible versions of the libraries and their component artifacts, import com.google.cloud:libraries-bom and use the BOM to specify dependency versions.
- 3.29.0 (latest) 3.28.0 3.26.0 3.24.0 3.23.10 3.22.6 3.21.4 3.20.7 3.19.0 3.18.0 3.17.2 3.16.2 3.15.17 3.14.9 3.13.7 3.12.1 3.11.10 3.10.7 3.9.0 3.8.0 3.7.6 3.6.4 3.5.3 Key Reference Links Cloud Logging Description: Allows you to store, search, analyze, monitor, and alert on log data and events from Google Cloud and Amazon Web Services.
- The example below demonstrates how you would import the BOM and include the google-cloud-logging artifact. implementation ( platform ( "com.google.cloud:libraries-bom:26.79.0" )) implementation ( "com.google.cloud:google-cloud-logging" ) The platform and enforcedPlatform keywords supply dependency versions declared in a BOM.

### "Manage VMs covered by the Ops Agent OS policy \_|\_ Cloud Logging \_|\_\

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/manage-policies-auto-install](https://docs.cloud.google.com/logging/docs/agent/ops-agent/manage-policies-auto-install)
- Source ID: `site-docs-root-2`
- Final score: 56
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Observability Cloud Logging Guides Send feedback Manage VMs covered by the Ops Agent OS policy Stay organized with collections Save and categorize content based on your preferences.

