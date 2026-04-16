---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.587Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "App Hub application filtering"
feature_slug: "app-hub-application-filtering"
latest_feature_date: "2026-02-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/compliance-manager-audit-logging"
  - "https://docs.cloud.google.com/database-center/docs/view-filter-database-health-issues"
  - "https://docs.cloud.google.com/security-command-center/docs/compliance-manager-overview"
keywords:
  - "app"
  - "hub"
  - "application"
  - "filtering"
  - "security"
  - "command"
  - "center"
  - "can"
---

# App Hub application filtering

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Security Command Center can filter findings, issues, and compliance information to show only resources registered to an App Hub application.

## Extended Definition

Security Command Center can filter findings, issues, and compliance information to show only resources registered to an App Hub application.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/compliance-manager-audit-logging](https://docs.cloud.google.com/security-command-center/docs/compliance-manager-audit-logging)
- [https://docs.cloud.google.com/database-center/docs/view-filter-database-health-issues](https://docs.cloud.google.com/database-center/docs/view-filter-database-health-issues)
- [https://docs.cloud.google.com/security-command-center/docs/compliance-manager-overview](https://docs.cloud.google.com/security-command-center/docs/compliance-manager-overview)

## Supporting Pages

### "View and filter database health issues \_|\_ Database Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/database-center/docs/view-filter-database-health-issues](https://docs.cloud.google.com/database-center/docs/view-filter-database-health-issues)
- Source ID: `site-docs-reference-2`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- You can also filter database health issues by clicking one of the database health categories, like Availability Configuration , Data Protection , Security , Industry Compliance , Performance and Capacity , and Cost .
- Filter database health issues To specify which database health issues you care about and the thresholds you consider relevant, follow these steps: Go to the Database Center page in the Google Cloud console.
- Home Documentation Databases Database Center Guides Send feedback View and filter database health issues Stay organized with collections Save and categorize content based on your preferences.
- To view recent health issues that occurred in a category in the last seven days, follow these steps: Go to the Database Center page in the Google Cloud console.

### "Compliance Manager audit logging \_|\_ Security Command Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/security-command-center/docs/compliance-manager-audit-logging](https://docs.cloud.google.com/security-command-center/docs/compliance-manager-audit-logging)
- Source ID: `site-docs-reference`
- Final score: 84
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Security Security Command Center Guides Send feedback Compliance Manager audit logging Stay organized with collections Save and categorize content based on your preferences.
- Permission type Methods ADMIN READ google.cloud.cloudsecuritycompliance.v1.Deployment.GetCloudControlDeployment google.cloud.cloudsecuritycompliance.v1.Deployment.GetFrameworkDeployment google.cloud.cloudsecuritycompliance.v1.Deployment.ListCloudControlDeployments google.cloud.cloudsecuritycompliance.v1.Deployment.ListFrameworkDeployments google.longrunning.Operations.GetOperation google.longrunning.Operations.ListOperations ADMIN WRITE google.cloud.cloudsecuritycompliance.v1.CmEnrollmentService.UpdateCmEnrollment google.cloud.cloudsecuritycompliance.v1.Config.CreateCloudControl google.cloud.cloudsecuritycompliance.v1.Config.CreateFramework google.cloud.cloudsecuritycompliance.v1.Config.DeleteCloudControl google.cloud.cloudsecuritycompliance.v1.Config.DeleteFramework google.cloud.cloudsecuritycompliance.v1.Config.UpdateCloudControl google.cloud.cloudsecuritycompliance.v1.Config.UpdateFramework google.cloud.cloudsecuritycompliance.v1.Deployment.CreateFrameworkDeployment (LRO) google.cloud.cloudsecuritycompliance.v1.Deployment.DeleteFrameworkDeployment (LRO) google.longrunning.Operations.CancelOperation google.longrunning.Operations.DeleteOperation DATA READ google.cloud.cloudsecuritycompliance.v1.Audit.GetFrameworkAudit google.cloud.cloudsecuritycompliance.v1.Audit.ListFrameworkAudits google.cloud.cloudsecuritycompliance.v1.CmEnrollmentService.CalculateEffectiveCmEnrollment google.cloud.cloudsecuritycompliance.v1.Config.GetCloudControl google.cloud.cloudsecuritycompliance.v1.Config.GetFramework google.cloud.cloudsecuritycompliance.v1.Config.ListCloudControls google.cloud.cloudsecuritycompliance.v1.Config.ListFrameworks google.cloud.cloudsecuritycompliance.v1.Monitoring.AggregateFrameworkComplianceReport google.cloud.cloudsecuritycompliance.v1.Monitoring.FetchFrameworkComplianceReport google.cloud.cloudsecuritycompliance.v1.Monitoring.ListControlComplianceSummaries google.cloud.cloudsecuritycompliance.v1.Monitoring.ListFindingSummaries google.cloud.cloudsecuritycompliance.v1.Monitoring.ListFrameworkComplianceSummaries DATA WRITE google.cloud.cloudsecuritycompliance.v1.Audit.CreateFrameworkAudit (LRO) google.cloud.cloudsecuritycompliance.v1.Audit.GenerateFrameworkAuditScopeReport API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Compliance Manager. google.cloud.cloudsecuritycompliance.v1.Audit The following audit logs are associated with methods belonging to google.cloud.cloudsecuritycompliance.v1.Audit .
- CreateFrameworkDeployment Method : google.cloud.cloudsecuritycompliance.v1.Deployment.CreateFrameworkDeployment Audit log type : Admin activity Permissions : cloudsecuritycompliance.frameworkDeployments.create - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.cloudsecuritycompliance.v1.Deployment.CreateFrameworkDeployment" DeleteFrameworkDeployment Method : google.cloud.cloudsecuritycompliance.v1.Deployment.DeleteFrameworkDeployment Audit log type : Admin activity Permissions : cloudsecuritycompliance.frameworkDeployments.delete - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.cloudsecuritycompliance.v1.Deployment.DeleteFrameworkDeployment" GetCloudControlDeployment Method : google.cloud.cloudsecuritycompliance.v1.Deployment.GetCloudControlDeployment Audit log type : Data access Permissions : cloudsecuritycompliance.cloudControlDeployments.get - ADMIN READ Method is a long-running or streaming operation : No.
- CreateFrameworkAudit Method : google.cloud.cloudsecuritycompliance.v1.Audit.CreateFrameworkAudit Audit log type : Data access Permissions : cloudsecuritycompliance.frameworkAudits.create - DATA WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.cloudsecuritycompliance.v1.Audit.CreateFrameworkAudit" GenerateFrameworkAuditScopeReport Method : google.cloud.cloudsecuritycompliance.v1.Audit.GenerateFrameworkAuditScopeReport Audit log type : Data access Permissions : cloudsecuritycompliance.auditScopeReports.generate - DATA WRITE Method is a long-running or streaming operation : No.

### "Compliance Manager overview \_|\_ Security Command Center \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/security-command-center/docs/compliance-manager-overview](https://docs.cloud.google.com/security-command-center/docs/compliance-manager-overview)
- Source ID: `site-docs-reference`
- Final score: 84
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Frameworks for Google Cloud The following frameworks are available: Framework Service tier Standard Premium Enterprise Security Essentials AI Protection Center for Information Security (CIS) Controls 8.0 CIS Google Cloud Computing Platform 3.0 CIS Kubernetes Benchmark v1.1.7 Cloud Controls Matrix (CCM) 4 Data Security and Privacy Essentials International Organization for Standardization (ISO) 27001, 2022 National Institute of Standards and Technology (NIST) 800-53 R5 NIST Cybersecurity Framework (CSF) 1.1 Using Compliance Manager with Security Command Center services and features Premium and Enterprise service tiers You can enable other Security Command Center services and features and use them in the same organization where you enable Compliance Manager.
- Home Documentation Security Security Command Center Guides Send feedback Compliance Manager overview Stay organized with collections Save and categorize content based on your preferences.
- Compliance Manager uses the global endpoint, not the endpoint that you might specify when you enable data residency for Security Command Center.
- However, Security Health Analytics uses the securitycenter.googleapis.com API to generate findings, and Compliance Manager uses the cloudsecuritycompliance.googleapis.com API .

