---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.608Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Compliance Manager monitoring and auditing"
feature_slug: "compliance-manager-monitoring-and-auditing"
latest_feature_date: "2025-11-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/compliance-manager-audit-logging"
  - "https://docs.cloud.google.com/security-command-center/docs/compliance-manager-overview"
keywords:
  - "compliance"
  - "manager"
  - "monitoring"
  - "auditing"
  - "capabilities"
  - "generally"
  - "available"
---

# Compliance Manager monitoring and auditing

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Monitoring and auditing capabilities for Compliance Manager are generally available.

## Extended Definition

Monitoring and auditing capabilities for Compliance Manager are generally available.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/compliance-manager-audit-logging](https://docs.cloud.google.com/security-command-center/docs/compliance-manager-audit-logging)
- [https://docs.cloud.google.com/security-command-center/docs/compliance-manager-overview](https://docs.cloud.google.com/security-command-center/docs/compliance-manager-overview)

## Supporting Pages

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 179
- Re-rank relevance: N/A

Evidence snippets:
- Feature The monitoring and auditing capabilities for Compliance Manager have been released to General Availability .
- The following detectors are new for v1.3.0: Access transparency disabled Cloud Asset API disabled Dataproc CMEK disabled Essential contacts not configured Flow logs settings not recommended The following detectors have been updated: Audit logging disabled For more information about Security Command Center support for standards and compliance, see the following: Detectors and compliance CIS Google Cloud Computing Platform Benchmarks March 23, 2023 Feature The version 3.0 release of the Google SCC App for QRadar , which lets you send Security Command Center data to QRadar v7.4.1FP2+, is generally available.
- October 15, 2025 Change The following features in Compliance Manager are available in General Availability : Applying and updating built-in frameworks and cloud controls Creating, applying, and editing custom frameworks and cloud controls Support for VPC Service Control perimeters Audit logging Client libraries REST APIs October 10, 2025 Feature Correlated Threats is available in Preview .
- August 27, 2025 Change Compliance Manager (available in Preview ) now lets you remove resources from deployed frameworks .

### "Compliance Manager audit logging \_|\_ Security Command Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/security-command-center/docs/compliance-manager-audit-logging](https://docs.cloud.google.com/security-command-center/docs/compliance-manager-audit-logging)
- Source ID: `site-docs-reference`
- Final score: 167
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Permission type Methods ADMIN READ google.cloud.cloudsecuritycompliance.v1.Deployment.GetCloudControlDeployment google.cloud.cloudsecuritycompliance.v1.Deployment.GetFrameworkDeployment google.cloud.cloudsecuritycompliance.v1.Deployment.ListCloudControlDeployments google.cloud.cloudsecuritycompliance.v1.Deployment.ListFrameworkDeployments google.longrunning.Operations.GetOperation google.longrunning.Operations.ListOperations ADMIN WRITE google.cloud.cloudsecuritycompliance.v1.CmEnrollmentService.UpdateCmEnrollment google.cloud.cloudsecuritycompliance.v1.Config.CreateCloudControl google.cloud.cloudsecuritycompliance.v1.Config.CreateFramework google.cloud.cloudsecuritycompliance.v1.Config.DeleteCloudControl google.cloud.cloudsecuritycompliance.v1.Config.DeleteFramework google.cloud.cloudsecuritycompliance.v1.Config.UpdateCloudControl google.cloud.cloudsecuritycompliance.v1.Config.UpdateFramework google.cloud.cloudsecuritycompliance.v1.Deployment.CreateFrameworkDeployment (LRO) google.cloud.cloudsecuritycompliance.v1.Deployment.DeleteFrameworkDeployment (LRO) google.longrunning.Operations.CancelOperation google.longrunning.Operations.DeleteOperation DATA READ google.cloud.cloudsecuritycompliance.v1.Audit.GetFrameworkAudit google.cloud.cloudsecuritycompliance.v1.Audit.ListFrameworkAudits google.cloud.cloudsecuritycompliance.v1.CmEnrollmentService.CalculateEffectiveCmEnrollment google.cloud.cloudsecuritycompliance.v1.Config.GetCloudControl google.cloud.cloudsecuritycompliance.v1.Config.GetFramework google.cloud.cloudsecuritycompliance.v1.Config.ListCloudControls google.cloud.cloudsecuritycompliance.v1.Config.ListFrameworks google.cloud.cloudsecuritycompliance.v1.Monitoring.AggregateFrameworkComplianceReport google.cloud.cloudsecuritycompliance.v1.Monitoring.FetchFrameworkComplianceReport google.cloud.cloudsecuritycompliance.v1.Monitoring.ListControlComplianceSummaries google.cloud.cloudsecuritycompliance.v1.Monitoring.ListFindingSummaries google.cloud.cloudsecuritycompliance.v1.Monitoring.ListFrameworkComplianceSummaries DATA WRITE google.cloud.cloudsecuritycompliance.v1.Audit.CreateFrameworkAudit (LRO) google.cloud.cloudsecuritycompliance.v1.Audit.GenerateFrameworkAuditScopeReport API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Compliance Manager. google.cloud.cloudsecuritycompliance.v1.Audit The following audit logs are associated with methods belonging to google.cloud.cloudsecuritycompliance.v1.Audit .
- Filter for this method : protoPayload.methodName="google.cloud.cloudsecuritycompliance.v1.Monitoring.AggregateFrameworkComplianceReport" FetchFrameworkComplianceReport Method : google.cloud.cloudsecuritycompliance.v1.Monitoring.FetchFrameworkComplianceReport Audit log type : Data access Permissions : cloudsecuritycompliance.frameworkComplianceReports.get - DATA READ Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="google.cloud.cloudsecuritycompliance.v1.Monitoring.FetchFrameworkComplianceReport" ListControlComplianceSummaries Method : google.cloud.cloudsecuritycompliance.v1.Monitoring.ListControlComplianceSummaries Audit log type : Data access Permissions : cloudsecuritycompliance.controlComplianceSummaries.list - DATA READ Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="google.cloud.cloudsecuritycompliance.v1.Monitoring.ListFindingSummaries" ListFrameworkComplianceSummaries Method : google.cloud.cloudsecuritycompliance.v1.Monitoring.ListFrameworkComplianceSummaries Audit log type : Data access Permissions : cloudsecuritycompliance.frameworkComplianceSummaries.list - DATA READ Method is a long-running or streaming operation : No.

### "Compliance Manager overview \_|\_ Security Command Center \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/security-command-center/docs/compliance-manager-overview](https://docs.cloud.google.com/security-command-center/docs/compliance-manager-overview)
- Source ID: `site-docs-reference`
- Final score: 156
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Frameworks for Google Cloud The following frameworks are available: Framework Service tier Standard Premium Enterprise Security Essentials AI Protection Center for Information Security (CIS) Controls 8.0 CIS Google Cloud Computing Platform 3.0 CIS Kubernetes Benchmark v1.1.7 Cloud Controls Matrix (CCM) 4 Data Security and Privacy Essentials International Organization for Standardization (ISO) 27001, 2022 National Institute of Standards and Technology (NIST) 800-53 R5 NIST Cybersecurity Framework (CSF) 1.1 Using Compliance Manager with Security Command Center services and features Premium and Enterprise service tiers You can enable other Security Command Center services and features and use them in the same organization where you enable Compliance Manager.
- Cloud controls have the following modes: Detective: Compliance Manager applies the cloud control to the defined resources for monitoring purposes.
- Consider the following: Most Security Health Analytics detectors are also available as cloud controls in Compliance Manager.
- For example, if you want to use a cloud control that checks whether your workloads and resources are running in particular regions, you must specify the permitted regions when you create the cloud control. (Premium and Enterprise tiers only) Audit: Compliance Manager uses this cloud control to audit your environment for alignment with your compliance obligations.

