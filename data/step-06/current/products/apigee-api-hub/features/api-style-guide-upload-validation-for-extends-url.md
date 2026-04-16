---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:45:01.549Z"
product_name: "Apigee API hub"
product_slug: "apigee-api-hub"
feature_name: "API style guide upload validation for extends URL"
feature_slug: "api-style-guide-upload-validation-for-extends-url"
latest_feature_date: "2024-08-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools"
  - "https://docs.cloud.google.com/apigee/docs/release/known-issues"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines"
keywords:
  - "validation"
  - "extends"
  - "guide"
  - "upload"
  - "style"
---

# API style guide upload validation for extends URL

Product: Apigee API hub
Coverage: MEDIUM

## Step 02 Summary

API hub now validates style guide uploads and rejects uploaded style guides whose extends property contains a URL.

## Extended Definition

API hub now validates style guide uploads and rejects uploaded style guides whose extends property contains a URL.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools](https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools)
- [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues)
- [https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines)

## Supporting Pages

### Apigee known issues \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues)
- Source ID: `site-docs-reference`
- Final score: 75
- Re-rank relevance: N/A

Evidence snippets:
- 245664917 hybrid 1.8.x FIXED Apigee hybrid upgrade error can be ignored During upgrade to Apigee hybrid 1.8.x, after running apigeectl init and confirming that check-ready succeeded, you may notice, if you view the pods, that the Cassandra schema validation job is in an error state.
- 289583112 Apigee OPEN OASValidation policy does not work with global security requirements in OpenAPI specifications If the OASValidation policy specifies an <OASResource> with security requirements set at a global level, the security requirements are not enforced.
- 310384001 hybrid 1.11.0 OPEN Cert validation failures may return a 502 instead of a 503 error response when users add the tag <Enforce>true</Enforce> in the target <SSLInfo> block for default validation of TLS target endpoint certificates.
- Proxy deployments that include the OASValidation policy may fail if: The OpenAPI specification used for validation in the OASValidation policy is in YAML format, and The YAML-formatted OpenAPI specification contains a floating number.

### Manage MCP tools \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools](https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools)
- Source ID: `site-docs-reference-required-6`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- Caution: Selecting this checkbox may prevent the specification file from being uploaded due to current validation limitations.
- Home Documentation Application development Apigee Guides Send feedback Manage MCP tools Stay organized with collections Save and categorize content based on your preferences.
- These proxies are registered with the MCP API style, and their specification files are parsed to extract MCP tools.
- Specification document : Click Browse to upload the MCP specification JSON file.

### Cluster monitoring guidelines \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines)
- Source ID: `site-docs-root`
- Final score: 52
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Version 1.10 keyboard arrow down Supported versions: v1.16 (latest) v1.15 v1.14 List of supported versions Unsupported versions: v1.13 v1.12 v1.11 v1.10 v1.9 v1.8 v1.7 v1.6 v1.5 v1.4 v1.3 v1.2 v1.1 Overview This guide provides guidelines on what to monitor and how to monitor an Apigee Hybrid deployment.
- Home Documentation Application development Apigee Guides Send feedback Cluster monitoring guidelines Stay organized with collections Save and categorize content based on your preferences.

