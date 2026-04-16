---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:45:01.544Z"
product_name: "Apigee API hub"
product_slug: "apigee-api-hub"
feature_name: "API hub hosting region expansion"
feature_slug: "api-hub-hosting-region-expansion"
latest_feature_date: "2024-10-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/release/known-issues"
  - "https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/environments-overview"
keywords:
  - "hosting"
  - "region"
  - "expansion"
  - "added"
  - "regions"
  - "deployment"
  - "including"
---

# API hub hosting region expansion

Product: Apigee API hub
Coverage: MEDIUM

## Step 02 Summary

API hub added new deployment regions including us-east4, us-west1, europe-west2, asia-southeast1, asia-south, southamerica-east1, and australia-southeast1.

## Extended Definition

API hub added new deployment regions including us-east4, us-west1, europe-west2, asia-southeast1, asia-south, southamerica-east1, and australia-southeast1.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues)
- [https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery](https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery)
- [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/environments-overview](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/environments-overview)

## Supporting Pages

### Apigee known issues \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues)
- Source ID: `site-docs-reference`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- MCP infrastructure deployment may be subject to capacity limitations in the following regions: asia-east2 asia-northeast3 asia-southeast2 australia-southeast1 europe-central2 europe-west12 europe-west9 me-central2 us-central2 If you see an error related to load balancer provisioning failure, or the provisioning status never changes to Deployed , it might be due to temporary infrastructure capacity limits in the selected region.
- 496552286 Apigee OPEN Deployment fails for MCP Discovery Proxies in regions with capacity limitations.
- 383372330 Apigee Emulator versions 1.13.0 up to but not including 1.15.1 FIXED in Apigee Emulator versions 1.15.1 and later All proxy deployments fail locally with error messages including Error parsing deployment report as JSON : 06 / 13 / 2025 6 : 45 PM EMULATOR INFO Deploying environment testenv , to Cont ainer apigee - 1.14.2 ( 1.14.2 ) 06 / 13 / 2025 6 : 45 PM EMULATOR ERROR Error parsing deployment report as JSON 06 / 13 / 2025 6 : 45 PM EMULATOR ERROR null 06 / 13 / 2025 6 : 45 PM EMULATOR ERROR Environment testenv deployment , to Cont ainer apigee - 1.14.2 ( 1.14.2 ) failed with Error : 500 06 / 13 / 2025 6 : 45 PM EMULATOR ERROR Deploy to Cont ainer apigee - 1.14.2 ( 1.14.2 ), failed with Error : Environment testenv deployment , to Cont ainer apigee - 1.14.2 ( 1.14.2 ) failed with Error : 500 Fix: Update to an Apigee Emulator version 1.15.1 or later.
- And, since those regions do not exist anymore, the restore job will conflict with the current state of Cassandra and fail with the following error: Unrecognized strategy option passed to NetworkTopologyStrategy .

### Shadow API Discovery overview \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery](https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery)
- Source ID: `site-docs-reference-2`
- Final score: 84
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Including more source regions in your observation jobs results in a broader view of APIs across your infrastructure.
- Including more source regions allows a broader view of APIs across your infrastructure.
- The following regions are currently supported for API observation and Shadow APIs: australia-southeast1 europe-west2 europe-west9 us-central1 us-east1 us-west1 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- All data collected in the source regions is processed in and accessed from this region, consistent with Google's Data Residency policies .

### "About environments and environment groups \_|\_ Apigee \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/environments-overview](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/environments-overview)
- Source ID: `site-docs-reference`
- Final score: 81
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If a proxy or shared flow is deployed to environments that are all attached to the same number of instances, a simplified formula can be used: PDUs = (Deployed Revisions) × (Environments) × (Instances) Examples The following table provides examples of how PDUs are calculated in different infrastructure scenarios: Scenario Proxies Environments Instances (Regions) Total PDUs Single Region Small-scale deployment 1 1 1 1 Multi-Region High Availability Same proxy in two regions 1 1 (attached to 2 instances) 2 2 Multi-Environment Same proxy in Dev and Test 1 2 (Dev, Test) 1 2 Enterprise Scale Global deployment across multiple envs (Assumes both Prod and Staging environments are attached to all 3 instances) 5 2 (Prod, Staging) 3 (US, EU, Asia) 30 Proxy deployment unit types Proxy deployment units count proxies and shared flows deployed to environments per region.
- When new basepaths are added, they may start capturing entirely new traffic, or they may start capturing a subset of existing traffic already being handled by an existing deployment.
- For each environment, the PDU contribution is the number of deployed revisions multiplied by the number of instances (regions) the environment is attached to.
- A proxy deployment unit is defined as one API proxy or shared flow revision deployment, per environment, per instance (region).

