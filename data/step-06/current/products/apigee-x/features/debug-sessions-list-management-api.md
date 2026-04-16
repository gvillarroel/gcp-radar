---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T18:40:29.735Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Debug sessions list Management API"
feature_slug: "debug-sessions-list-management-api"
latest_feature_date: "2025-05-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/pci-configuration-guide"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/create-api-proxy-openapi-spec"
keywords:
  - "sessions"
  - "recent"
  - "debug"
  - "lists"
  - "list"
  - "management"
---

# Debug sessions list Management API

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

A new Management API now lists all recent debug sessions for a proxy across revisions and environments, and powers recent-debug-session retrieval in the Apigee Debug UI.

## Extended Definition

A new Management API now lists all recent debug sessions for a proxy across revisions and environments, and powers recent-debug-session retrieval in the Apigee Debug UI.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery](https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/pci-configuration-guide](https://docs.cloud.google.com/apigee/docs/api-platform/reference/pci-configuration-guide)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/create-api-proxy-openapi-spec](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/create-api-proxy-openapi-spec)

## Supporting Pages

### Shadow API Discovery overview \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery](https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery)
- Source ID: `site-docs-reference`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- Behaviors and limitations This section lists behaviors and limitations that apply to Shadow API Discovery: Use of Shadow API Discovery does not guarantee observation of 100% of traffic or discovery of all shadow APIs.
- Task Required Role(s) Enable or disable Advanced API Security Apigee Organization Admin (roles/apigee.admin) Create observation sources and jobs API Management Admin (roles/apim.admin) View observations API Management Viewer (roles/apim.viewer) Access Shadow API Discovery in the Apigee UI This section describes how to access Shadow API Discovery in the Apigee UI.
- Select one or more Observation sources(s) , or click Create observation source at the bottom of the Observation source(s) list to create new source locations if needed.
- View API Observations To view API Observations for enabled observation jobs, choose the API Observations tab and then select the Observation job from the list.

### "Creating an API proxy from an OpenAPI Specification \_|\_ Apigee \_|\_ Google\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/create-api-proxy-openapi-spec](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/create-api-proxy-openapi-spec)
- Source ID: `site-docs-reference-2`
- Final score: 80
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

### PCI Configuration Guide for Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/pci-configuration-guide](https://docs.cloud.google.com/apigee/docs/api-platform/reference/pci-configuration-guide)
- Source ID: `site-docs-reference`
- Final score: 78
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Debug Sessions Debug Sessions is a troubleshooting tool that allows the user to view the status and contents of an API call as it is processed through the Apigee platform.
- Use/Authorizations Access to Debug Session is managed through the Cloud IAM (Identity Access Management) RBAC (Role-Based Access Control) system.
- Because user management is a customer responsibility, the granting of Debug Session permissions is also a customer responsibility.
- Testing of shared resources, such as the management portal UI, is not approved for individual customers (a third party report covering testing of the shared services is available to customers under a non-disclosure agreement and upon request).

