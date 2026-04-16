---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T18:40:29.762Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Advanced Anomaly Detection rule for abuse detection"
feature_slug: "advanced-anomaly-detection-rule-for-abuse-detection"
latest_feature_date: "2023-03-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/apihub/advanced-api-security-multi-gateway"
  - "https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery"
  - "https://docs.cloud.google.com/apigee/docs/apihub/api-observation-overview"
keywords:
  - "learning"
  - "anomaly"
  - "machine"
  - "rule"
  - "abuse"
  - "detection"
  - "advanced"
  - "based"
---

# Advanced Anomaly Detection rule for abuse detection

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

A new machine-learning-based Advanced Anomaly Detection rule type was introduced to identify unusual API traffic behavior.

## Extended Definition

A new machine-learning-based Advanced Anomaly Detection rule type was introduced to identify unusual API traffic behavior.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/apihub/advanced-api-security-multi-gateway](https://docs.cloud.google.com/apigee/docs/apihub/advanced-api-security-multi-gateway)
- [https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery](https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery)
- [https://docs.cloud.google.com/apigee/docs/apihub/api-observation-overview](https://docs.cloud.google.com/apigee/docs/apihub/api-observation-overview)

## Supporting Pages

### "Advanced API Security for multiple Apigee organizations and gateways \_\

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/advanced-api-security-multi-gateway](https://docs.cloud.google.com/apigee/docs/apihub/advanced-api-security-multi-gateway)
- Source ID: `site-docs-reference`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application development Apigee Guides Send feedback Advanced API Security for multiple Apigee organizations and gateways Stay organized with collections Save and categorize content based on your preferences.
- Caution: Pricing for Advanced API Security varies based on your existing Apigee organization license type.
- IAM roles and permissions To use Advanced API Security, you must have the following IAM roles and permissions: IAM roles Permissions Description API Security Admin ( roles/apigee.securityAdmin ) apigee.securityProfilesV2.create apigee.securityProfilesV2.delete apigee.securityProfilesV2.update apigee.securityProfilesV2.get apigee.securityProfilesV2.list Provides permissions to create, update, delete, get, and list security profiles. apigee.securityAssessmentResult.compute Provides permissions to compute security assessment results. apigee.securityMonitoringConditions.create apigee.securityMonitoringConditions.delete apigee.securityMonitoringConditions.get apigee.securityMonitoringConditions.list apigee.securityMonitoringConditions.update Provides permissions to create, delete, get, list, and update security monitoring conditions.
- To configure and use security monitoring conditions and alerts in Cloud Monitoring: Action(s) Required roles or steps List and view security monitoring condition metrics Monitoring Admin ( roles/monitoring.admin ) Monitoring Editor ( roles/monitoring.editor ) Create, update, or delete monitoring alerts See Required roles (for security alerts) View monitoring alerts See Incidents for metric-based alerting policies: Before you begin For information about granting IAM roles, see Grant or revoke multiple IAM roles using the Google Cloud console .

### Shadow API Discovery overview \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery](https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery)
- Source ID: `site-docs-reference`
- Final score: 63
- Re-rank relevance: N/A

Evidence snippets:
- Task Required Role(s) Enable or disable Advanced API Security Apigee Organization Admin (roles/apigee.admin) Create observation sources and jobs API Management Admin (roles/apim.admin) View observations API Management Viewer (roles/apim.viewer) Access Shadow API Discovery in the Apigee UI This section describes how to access Shadow API Discovery in the Apigee UI.
- Best practices We recommend these practices when working with Shadow API Discovery: Follow your organization's Data Residency rules to ensure compliance with any applicable regulations and laws.
- Home Documentation Application development Apigee Guides Send feedback Shadow API Discovery overview Stay organized with collections Save and categorize content based on your preferences.
- See the "Using a Private Service Connect backend (load balancer) to access a published service" section of Private Service Connect forwarding rules for information on costs.

### API observations in API hub \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/api-observation-overview](https://docs.cloud.google.com/apigee/docs/apihub/api-observation-overview)
- Source ID: `site-docs-reference`
- Final score: 49
- Re-rank relevance: N/A

Evidence snippets:
- Last Event Detected (UTC) : the timestamp (in UTC) of the most recent detection of the discovered API observation Discovered API observations in API hub IAM roles and permissions To use API observations in API hub, you need the following IAM roles and permissions: IAM roles Permissions API Management Admin ( roles/apim.admin ) apim.operations.delete apim.operations.cancel apim.observationSources.create apim.observationSources.delete apim.observationJobs.create apim.observationJobs.enable apim.observationJobs.disable apim.observationJobs.delete apim.apiObservations.batchEditTags API Management Viewer ( roles/apim.viewer ) resourcemanager.projects.get resourcemanager.projects.list apim.operations.list apim.operations.get apim.locations.list apim.locations.get apim.locations.listApiObservationTags apim.observationSources.list apim.observationSources.get apim.observationJobs.list apim.observationJobs.get apim.apiObservations.list apim.apiObservations.get apim.apiOperations.list apim.apiOperations.get apim.entitlements.get Provisioning Admin Role ( roles/apihub.provisioningAdmin ) apihub.runtimeProjectAttachments.create apihub.hostProjects.attach Viewer Role ( roles/apihub.viewer ) apihub.discoveredObservations.list apihub.discoveredObservations.get apihub.discoveredOperations.list apihub.discoveredOperations.get Pricing and billing The API observations feature in API hub is provided at no direct cost.
- The Advanced API Security add-on is available for Google Cloud projects with or without Apigee provisioning: For subscription customers, the Advanced API Security add-on is available with the Apigee organization.
- Home Documentation Application development Apigee Guides Send feedback API observations in API hub Stay organized with collections Save and categorize content based on your preferences.
- However, since API observations in API hub leverages Shadow API discovery, which is part of the Apigee Advanced API Security add-on, you can incur charges related to your Apigee usage.

