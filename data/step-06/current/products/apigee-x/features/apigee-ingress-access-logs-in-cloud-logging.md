---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T18:40:29.749Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Apigee ingress access logs in Cloud Logging"
feature_slug: "apigee-ingress-access-logs-in-cloud-logging"
latest_feature_date: "2024-04-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/apihub/audit-logging-apihub"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/add-spike-arrest"
  - "https://docs.cloud.google.com/apigee/docs/apihub/advanced-api-security-multi-gateway"
keywords:
  - "ingress"
  - "logging"
  - "logs"
  - "subscription"
  - "access"
---

# Apigee ingress access logs in Cloud Logging

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Apigee Subscription and Pay-as-you-go customers can enable Cloud Logging ingress access logs for each Apigee instance to troubleshoot API traffic.

## Extended Definition

Apigee Subscription and Pay-as-you-go customers can enable Cloud Logging ingress access logs for each Apigee instance to troubleshoot API traffic.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/apihub/audit-logging-apihub](https://docs.cloud.google.com/apigee/docs/apihub/audit-logging-apihub)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/add-spike-arrest](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/add-spike-arrest)
- [https://docs.cloud.google.com/apigee/docs/apihub/advanced-api-security-multi-gateway](https://docs.cloud.google.com/apigee/docs/apihub/advanced-api-security-multi-gateway)

## Supporting Pages

### Audit logging for API hub \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/audit-logging-apihub](https://docs.cloud.google.com/apigee/docs/apihub/audit-logging-apihub)
- Source ID: `site-docs-reference`
- Final score: 105
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information about Cloud Audit Logs, see the following: Types of audit logs Audit log entry structure Storing and routing audit logs Cloud Logging pricing summary Enable Data Access audit logs Service name API hub audit logs use the service name apihub.googleapis.com .
- Permission type Methods ADMIN READ google.cloud.apihub.v1.ApiHubPlugin.GetPlugin google.cloud.apihub.v1.Provisioning.LookupApiHubInstance google.cloud.apihub.v1.RuntimeProjectAttachmentService.ListRuntimeProjectAttachments google.cloud.apihub.v1.RuntimeProjectAttachmentService.LookupRuntimeProjectAttachment ADMIN WRITE google.cloud.apihub.v1.ApiHubPlugin.DisablePlugin google.cloud.apihub.v1.ApiHubPlugin.EnablePlugin google.cloud.apihub.v1.HostProjectRegistrationService.CreateHostProjectRegistration google.cloud.apihub.v1.Provisioning.CreateApiHubInstance (LRO) google.cloud.apihub.v1.RuntimeProjectAttachmentService.CreateRuntimeProjectAttachment DATA READ google.cloud.apihub.v1.ApiHub.GetApi google.cloud.apihub.v1.ApiHub.GetAttribute google.cloud.apihub.v1.ApiHub.GetDeployment google.cloud.apihub.v1.ApiHub.GetExternalApi google.cloud.apihub.v1.ApiHub.GetSpec google.cloud.apihub.v1.ApiHub.GetSpecContents google.cloud.apihub.v1.ApiHub.GetVersion google.cloud.apihub.v1.ApiHub.ListApis google.cloud.apihub.v1.ApiHub.ListAttributes google.cloud.apihub.v1.ApiHub.ListDeployments google.cloud.apihub.v1.ApiHub.ListExternalApis google.cloud.apihub.v1.ApiHub.ListSpecs google.cloud.apihub.v1.ApiHub.ListVersions DATA WRITE google.cloud.apihub.v1.ApiHub.CreateApi google.cloud.apihub.v1.ApiHub.CreateAttribute google.cloud.apihub.v1.ApiHub.CreateDeployment google.cloud.apihub.v1.ApiHub.CreateExternalApi google.cloud.apihub.v1.ApiHub.CreateSpec google.cloud.apihub.v1.ApiHub.CreateVersion google.cloud.apihub.v1.ApiHub.DeleteApi google.cloud.apihub.v1.ApiHub.DeleteAttribute google.cloud.apihub.v1.ApiHub.DeleteDeployment google.cloud.apihub.v1.ApiHub.DeleteExternalApi google.cloud.apihub.v1.ApiHub.DeleteSpec google.cloud.apihub.v1.ApiHub.DeleteVersion google.cloud.apihub.v1.ApiHub.UpdateApi google.cloud.apihub.v1.ApiHub.UpdateAttribute google.cloud.apihub.v1.ApiHub.UpdateDeployment google.cloud.apihub.v1.ApiHub.UpdateExternalApi google.cloud.apihub.v1.ApiHub.UpdateSpec google.cloud.apihub.v1.ApiHub.UpdateVersion API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for API hub. google.cloud.apihub.v1.ApiHub The following audit logs are associated with methods belonging to google.cloud.apihub.v1.ApiHub .
- Methods that require an IAM permission with the type property value of DATA READ , DATA WRITE , or ADMIN READ generate Data Access audit logs.
- Google Cloud services generate audit logs that record administrative and access activities within your Google Cloud resources.

### Add the SpikeArrest policy to your API \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/add-spike-arrest](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/add-spike-arrest)
- Source ID: `site-docs-reference-2`
- Final score: 68
- Re-rank relevance: N/A

### "Advanced API Security for multiple Apigee organizations and gateways \_\

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/advanced-api-security-multi-gateway](https://docs.cloud.google.com/apigee/docs/apihub/advanced-api-security-multi-gateway)
- Source ID: `site-docs-reference`
- Final score: 66
- Re-rank relevance: N/A

