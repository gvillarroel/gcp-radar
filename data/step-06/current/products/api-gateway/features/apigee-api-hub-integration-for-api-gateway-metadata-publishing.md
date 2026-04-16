---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:11:52.459Z"
product_name: "API Gateway"
product_slug: "api-gateway"
feature_name: "Apigee API Hub integration for API Gateway metadata publishing"
feature_slug: "apigee-api-hub-integration-for-api-gateway-metadata-publishing"
latest_feature_date: "2026-01-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/api-gateway/docs/api-hub-overview"
  - "https://docs.cloud.google.com/api-gateway/docs/reference/rest/Shared.Types/OperationMetadata"
  - "https://docs.cloud.google.com/api-gateway/docs/api-hub-connect"
keywords:
  - "integration"
  - "publishing"
  - "publish"
  - "apigee"
  - "metadata"
---

# Apigee API Hub integration for API Gateway metadata publishing

Product: API Gateway
Coverage: MEDIUM

## Step 02 Summary

API Gateway can publish API metadata to Apigee API Hub to provide a unified API catalog, improved discovery, and centralized lifecycle governance across gateways.

## Extended Definition

API Gateway can publish API metadata to Apigee API Hub to provide a unified API catalog, improved discovery, and centralized lifecycle governance across gateways.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/api-gateway/docs/api-hub-overview](https://docs.cloud.google.com/api-gateway/docs/api-hub-overview)
- [https://docs.cloud.google.com/api-gateway/docs/reference/rest/Shared.Types/OperationMetadata](https://docs.cloud.google.com/api-gateway/docs/reference/rest/Shared.Types/OperationMetadata)
- [https://docs.cloud.google.com/api-gateway/docs/api-hub-connect](https://docs.cloud.google.com/api-gateway/docs/api-hub-connect)

## Supporting Pages

### "Centralize API management using API hub \_|\_ API Gateway \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/api-gateway/docs/api-hub-overview](https://docs.cloud.google.com/api-gateway/docs/api-hub-overview)
- Source ID: `site-docs-reference-required-2`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- Connect API Gateway to API hub to enable seamless publishing of API metadata from your API Gateway project to API hub.
- Overview Apigee API hub provides a centralized catalog, governance, and lifecycle management layer for all your organization's APIs, regardless of where they are deployed.
- This integration provides a centralized, unified view of your APIs across different gateways, simplifying API discovery, governance, and management.
- Centralize API management using API hub This page describes how to centralize the management of your organization's APIs using Apigee API hub.

### OperationMetadata \_|\_ API Gateway \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/api-gateway/docs/reference/rest/Shared.Types/OperationMetadata](https://docs.cloud.google.com/api-gateway/docs/reference/rest/Shared.Types/OperationMetadata)
- Source ID: `site-docs-reference`
- Final score: 50
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application development API Gateway Reference Send feedback OperationMetadata Stay organized with collections Save and categorize content based on your preferences.
- JSON representation Diagnostic JSON representation Represents the metadata of the long-running operation.

### Connect API Gateway with API hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/api-gateway/docs/api-hub-connect](https://docs.cloud.google.com/api-gateway/docs/api-hub-connect)
- Source ID: `site-docs-reference-required-2`
- Final score: 38
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Then, to create the API Gateway plugin instance: curl "https://apihub.googleapis.com/v1/projects/ HUB PROJECT ID /locations/ HUB LOCATION /plugins/ PLUGIN TYPE /instances" \ -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -d '{ "displayName": "API Gateway Plugin Instance", "sourceProjectId": " RUNTIME PROJECT ID ", "actions": [ { "actionId": "sync-metadata" } ] }' Replace the following: HUB PROJECT ID : The name of your API hub host project.
- Connect API Gateway with API hub This page describes how to connect API Gateway with Apigee API hub to allow you to view your APIs and centralize your API management.
- Note that during provisioning: You choose the hosting location where you want to persist the API Gateway API metadata.

