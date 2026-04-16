---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:45:01.534Z"
product_name: "Apigee API hub"
product_slug: "apigee-api-hub"
feature_name: "API hub add-on management page"
feature_slug: "api-hub-add-on-management-page"
latest_feature_date: "2025-12-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/release/known-issues"
  - "https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart"
keywords:
  - "enabling"
  - "centralized"
  - "configuring"
  - "introduces"
  - "management"
  - "page"
---

# API hub add-on management page

Product: Apigee API hub
Coverage: MEDIUM

## Step 02 Summary

Introduces a centralized Add-on Management page in API hub for enabling, configuring, and managing add-on services.

## Extended Definition

Introduces a centralized Add-on Management page in API hub for enabling, configuring, and managing add-on services.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues)
- [https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery](https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery)
- [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)

## Supporting Pages

### Apigee known issues \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues)
- Source ID: `site-docs-reference`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- Select one or more of the following to filter this page: Select product API hub API Monitoring/Analytics Apigee Apigee in VS Code Archive deployments Connectors Documentation hybrid Integration Integrated portal Monetization UI Select status FIXED OPEN Apigee 1-10 Apigee 1-9 hybrid 1.16 hybrid 1.15 hybrid 1.14 hybrid 1.13 hybrid 1.12 hybrid 1.11 hybrid 1.10 hybrid 1.9 hybrid 1.8 hybrid 1.7 hybrid 1.6 hybrid 1.5 hybrid 1.4 hybrid 1.3 This section lists known issues for Apigee components.
- To distinguish actual spikes in requests vs. this issue, please consult the API Analytics page (specifically the Proxy Performance and Target Performance pages) Affected Metrics: apigee.googleapis.com/proxyv2/request count apigee.googleapis.com/proxyv2/response count apigee.googleapis.com/targetv2/request count apigee.googleapis.com/targetv2/response count New metrics You can use the new metrics to avoid this issue.
- After upgrading to Apigee Hybrid 1.16.0, environments using Workload Identity Federation (WIF) in conjunction with an HTTP Forward Proxy may fail to load management entities (API Products, Apps, Developers) due to a credential casting regression in MART.
- Error: no connections available from the Apigee connect agent(s)." The problem occurs after enabling VPC service control in the Google Cloud project and adding iamcredentials.googleapis.com as one of the restricted services in the service perimeter.

### Shadow API Discovery overview \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery](https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery)
- Source ID: `site-docs-reference-2`
- Final score: 73
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Task Required Role(s) Enable or disable Advanced API Security Apigee Organization Admin (roles/apigee.admin) Create observation sources and jobs API Management Admin (roles/apim.admin) View observations API Management Viewer (roles/apim.viewer) Access Shadow API Discovery in the Apigee UI This section describes how to access Shadow API Discovery in the Apigee UI.
- The following regions are currently supported for API observation and Shadow APIs: australia-southeast1 europe-west2 europe-west9 us-central1 us-east1 us-west1 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Enable, disable, and delete observation jobs To change whether an existing observation job is enabled (active), select either Enable or Disable from the Actions menu in the row for that job in the Observation jobs page.
- Within your centralized Apigee API hub instance, you can attach those projects to view the results of those jobs and automatically compare them to "known" APIs documented in API hub.

### Get started with the Apigee Extension Processor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- Source ID: `site-docs-reference-required-3`
- Final score: 67
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create a developer App and App credentials To create a developer App and App credentials for the newly created API product: Go to the Apigee API management page in the Google Cloud console: Apigee API management Create a developer: Select Distribution > Developers .
- Go to the VPC Networks page in the Google Cloud console: Go to VPC Networks Required roles To get the permissions that you need to install the Apigee Extension Processor, ask your administrator to grant you the following IAM roles: Create and manage service accounts: Service Account Admin ( roles/iam.serviceAccountAdmin ) on organization Create and manage service extensions: Service Extensions Admin ( roles/networkservices.serviceExtensionsAdmin ) on organization Create and manage network endpoint groups (NEGs): Compute Instance Admin ( roles/compute.instanceAdmin ) on organization Create and manage networking resources: Compute Network Admin ( roles/compute.networkAdmin ) on organization Create and manage backend services: Compute Load Balancer Admin ( roles/compute.loadBalancerAdmin ) on organization Create and manage Apigee resources: Apigee Org Admin ( roles/apigee.admin ) on organization Create and manage traffic extensions: Apigee APIM Service Extension Admin ( roles/apigee.apimServiceExtensionAdmin ) on organization View traffic extensions: Apigee APIM Service Extension Viewer ( roles/apigee.apimServiceExtensionViewer ) on organization Manage long-running operations: Apigee APIM Service Extension Service Agent ( roles/apigee.apimServiceExtensionServiceAgent ) on the service agent in the Google Cloud project For more information about granting roles, see Manage access to projects, folders, and organizations .
- Add the AssignMessage policy for Google authentication If you want to use your Extension Processor to provide API management for a Google-authenticated service, you can inject a Google access token or Google ID token into requests sent to the backend service using the AssignMessage policy .
- Follow the steps in Operations to add an API operation set to the API product, according to the following specifications: Source: In the Google Cloud console, go to the Apigee > Distribution > API Products page.

