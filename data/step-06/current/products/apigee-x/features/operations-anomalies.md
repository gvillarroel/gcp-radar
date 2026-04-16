---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.162Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Operations Anomalies"
feature_slug: "operations-anomalies"
latest_feature_date: "2024-07-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts"
  - "https://docs.cloud.google.com/apigee/docs/apihub/api-observation-overview"
  - "https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery"
keywords:
  - "anomalies"
  - "anomaly"
  - "detection"
  - "operations"
  - "available"
  - "advanced"
---

# Operations Anomalies

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Advanced API Operations Anomaly Detection is now available in the Apigee UI in Cloud Console under the name Operations Anomalies.

## Extended Definition

Advanced API Operations Anomaly Detection is now available in the Apigee UI in Cloud Console under the name Operations Anomalies.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts)
- [https://docs.cloud.google.com/apigee/docs/apihub/api-observation-overview](https://docs.cloud.google.com/apigee/docs/apihub/api-observation-overview)
- [https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery](https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery)

## Supporting Pages

### API observations in API hub \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/api-observation-overview](https://docs.cloud.google.com/apigee/docs/apihub/api-observation-overview)
- Source ID: `site-docs-reference-2`
- Final score: 87
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Last Event Detected (UTC) : the timestamp (in UTC) of the most recent detection of the discovered API observation Discovered API observations in API hub IAM roles and permissions To use API observations in API hub, you need the following IAM roles and permissions: IAM roles Permissions API Management Admin ( roles/apim.admin ) apim.operations.delete apim.operations.cancel apim.observationSources.create apim.observationSources.delete apim.observationJobs.create apim.observationJobs.enable apim.observationJobs.disable apim.observationJobs.delete apim.apiObservations.batchEditTags API Management Viewer ( roles/apim.viewer ) resourcemanager.projects.get resourcemanager.projects.list apim.operations.list apim.operations.get apim.locations.list apim.locations.get apim.locations.listApiObservationTags apim.observationSources.list apim.observationSources.get apim.observationJobs.list apim.observationJobs.get apim.apiObservations.list apim.apiObservations.get apim.apiOperations.list apim.apiOperations.get apim.entitlements.get Provisioning Admin Role ( roles/apihub.provisioningAdmin ) apihub.runtimeProjectAttachments.create apihub.hostProjects.attach Viewer Role ( roles/apihub.viewer ) apihub.discoveredObservations.list apihub.discoveredObservations.get apihub.discoveredOperations.list apihub.discoveredOperations.get Pricing and billing The API observations feature in API hub is provided at no direct cost.
- The Advanced API Security add-on is available for Google Cloud projects with or without Apigee provisioning: For subscription customers, the Advanced API Security add-on is available with the Apigee organization.
- However, since API observations in API hub leverages Shadow API discovery, which is part of the Apigee Advanced API Security add-on, you can incur charges related to your Apigee usage.
- Observed By : the name and location of the Apigee API Observation job that initially detected the observation (this column is only available if the source is from Apigee).

### Shadow API Discovery overview \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery](https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery)
- Source ID: `site-docs-reference-2`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- Enable Shadow API Discovery Shadow API Discovery is part of the Advanced API Security add-on and is available for Google Cloud projects with or without Apigee provisioning.
- See Manage Advanced API Security for Pay-as-you-go organizations Shadow API Discovery is not available for Apigee eval environments.
- Task Required Role(s) Enable or disable Advanced API Security Apigee Organization Admin (roles/apigee.admin) Create observation sources and jobs API Management Admin (roles/apim.admin) View observations API Management Viewer (roles/apim.viewer) Access Shadow API Discovery in the Apigee UI This section describes how to access Shadow API Discovery in the Apigee UI.
- See Manage Advanced API Security for Subscription organizations Pay-as-you-go customers must enable the add-on for at least one environment.

### Introduction to data residency \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts)
- Source ID: `site-docs-root-2`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- Operations Anomalies for non-hybrid Subscription organizations Monetization API analytics Advanced API Security Apigee API hub .
- The following Apigee offerings are not in scope under Apigee's FedRAMP ATO: API analytics Advanced API Security Integrated portals Apigee evaluation organizations Apigee data collectors For more information about the significance of a FedRAMP ATO, see FedRAMP Compliance .
- Apigee hybrid version 1.14.0 and later with data residency enabled supports Advanced API Security , Apigee API analytics , the Debug tool , and Monetization .

