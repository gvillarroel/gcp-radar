---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.182Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Advanced API Security detected traffic view"
feature_slug: "advanced-api-security-detected-traffic-view"
latest_feature_date: "2023-04-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery"
  - "https://docs.cloud.google.com/apigee/docs/apihub/advanced-api-security-multi-gateway"
  - "https://docs.cloud.google.com/apigee/docs/apihub/api-observation-overview"
keywords:
  - "originating"
  - "shows"
  - "view"
  - "detected"
  - "includes"
  - "advanced"
  - "traffic"
  - "security"
---

# Advanced API Security detected traffic view

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Advanced API Security includes a Detected Traffic view that shows API traffic originating from detected bots.

## Extended Definition

Advanced API Security includes a Detected Traffic view that shows API traffic originating from detected bots.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery](https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery)
- [https://docs.cloud.google.com/apigee/docs/apihub/advanced-api-security-multi-gateway](https://docs.cloud.google.com/apigee/docs/apihub/advanced-api-security-multi-gateway)
- [https://docs.cloud.google.com/apigee/docs/apihub/api-observation-overview](https://docs.cloud.google.com/apigee/docs/apihub/api-observation-overview)

## Supporting Pages

### Shadow API Discovery overview \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery](https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery)
- Source ID: `site-docs-reference-2`
- Final score: 194
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Task Required Role(s) Enable or disable Advanced API Security Apigee Organization Admin (roles/apigee.admin) Create observation sources and jobs API Management Admin (roles/apim.admin) View observations API Management Viewer (roles/apim.viewer) Access Shadow API Discovery in the Apigee UI This section describes how to access Shadow API Discovery in the Apigee UI.
- Enable Shadow API Discovery Shadow API Discovery is part of the Advanced API Security add-on and is available for Google Cloud projects with or without Apigee provisioning.
- See Manage Advanced API Security for Subscription organizations Pay-as-you-go customers must enable the add-on for at least one environment.
- See Manage Advanced API Security for Pay-as-you-go organizations Shadow API Discovery is not available for Apigee eval environments.

### "Advanced API Security for multiple Apigee organizations and gateways \_\

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/advanced-api-security-multi-gateway](https://docs.cloud.google.com/apigee/docs/apihub/advanced-api-security-multi-gateway)
- Source ID: `site-docs-reference-2`
- Final score: 142
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Leveraging API hub's plugins and curation capabilities, Advanced API Security offers an unified view that lets you monitor risks, compare configurations, and ensure consistent security standards across your entire API ecosystem.
- IAM roles and permissions To use Advanced API Security, you must have the following IAM roles and permissions: IAM roles Permissions Description API Security Admin ( roles/apigee.securityAdmin ) apigee.securityProfilesV2.create apigee.securityProfilesV2.delete apigee.securityProfilesV2.update apigee.securityProfilesV2.get apigee.securityProfilesV2.list Provides permissions to create, update, delete, get, and list security profiles. apigee.securityAssessmentResult.compute Provides permissions to compute security assessment results. apigee.securityMonitoringConditions.create apigee.securityMonitoringConditions.delete apigee.securityMonitoringConditions.get apigee.securityMonitoringConditions.list apigee.securityMonitoringConditions.update Provides permissions to create, delete, get, list, and update security monitoring conditions.
- To configure and use security monitoring conditions and alerts in Cloud Monitoring: Action(s) Required roles or steps List and view security monitoring condition metrics Monitoring Admin ( roles/monitoring.admin ) Monitoring Editor ( roles/monitoring.editor ) Create, update, or delete monitoring alerts See Required roles (for security alerts) View monitoring alerts See Incidents for metric-based alerting policies: Before you begin For information about granting IAM roles, see Grant or revoke multiple IAM roles using the Google Cloud console .
- API Security Viewer ( roles/apigee.securityViewer ) apigee.securityProfilesV2.get apigee.securityProfilesV2.list Provides permissions to get, list, and view security profiles. apigee.securityAssessmentResult.compute Provides permissions to compute security assessment results. apigee.securityMonitoringConditions.get apigee.securityMonitoringConditions.list Provides permissions to get and list security monitoring conditions.

### API observations in API hub \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/api-observation-overview](https://docs.cloud.google.com/apigee/docs/apihub/api-observation-overview)
- Source ID: `site-docs-reference-2`
- Final score: 136
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Last Event Detected (UTC) : the timestamp (in UTC) of the most recent detection of the discovered API observation Discovered API observations in API hub IAM roles and permissions To use API observations in API hub, you need the following IAM roles and permissions: IAM roles Permissions API Management Admin ( roles/apim.admin ) apim.operations.delete apim.operations.cancel apim.observationSources.create apim.observationSources.delete apim.observationJobs.create apim.observationJobs.enable apim.observationJobs.disable apim.observationJobs.delete apim.apiObservations.batchEditTags API Management Viewer ( roles/apim.viewer ) resourcemanager.projects.get resourcemanager.projects.list apim.operations.list apim.operations.get apim.locations.list apim.locations.get apim.locations.listApiObservationTags apim.observationSources.list apim.observationSources.get apim.observationJobs.list apim.observationJobs.get apim.apiObservations.list apim.apiObservations.get apim.apiOperations.list apim.apiOperations.get apim.entitlements.get Provisioning Admin Role ( roles/apihub.provisioningAdmin ) apihub.runtimeProjectAttachments.create apihub.hostProjects.attach Viewer Role ( roles/apihub.viewer ) apihub.discoveredObservations.list apihub.discoveredObservations.get apihub.discoveredOperations.list apihub.discoveredOperations.get Pricing and billing The API observations feature in API hub is provided at no direct cost.
- The Advanced API Security add-on is available for Google Cloud projects with or without Apigee provisioning: For subscription customers, the Advanced API Security add-on is available with the Apigee organization.
- However, since API observations in API hub leverages Shadow API discovery, which is part of the Apigee Advanced API Security add-on, you can incur charges related to your Apigee usage.
- Note: API observations in API hub relies on the Apigee Shadow API Discovery feature, which is included as part of the paid Apigee Advanced API Security add-on .

