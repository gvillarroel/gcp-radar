---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:49.166Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Audit Logging"
feature_slug: "audit-logging"
latest_feature_date: "2019-04-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/audit-logging-aoss"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/compliance-manager-audit-logging"
keywords:
  - "audit"
  - "logging"
  - "example"
  - "apps"
  - "available"
  - "integrating"
  - "security"
  - "command"
---

# Audit Logging

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Example apps are available for integrating Security Command Center tools with Access Transparency Logs, Audit Logging, and Binary Authorization.

## Extended Definition

Example apps are available for integrating Security Command Center tools with Access Transparency Logs, Audit Logging, and Binary Authorization.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/audit-logging-aoss](https://docs.cloud.google.com/security-command-center/docs/audit-logging-aoss)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/compliance-manager-audit-logging](https://docs.cloud.google.com/security-command-center/docs/compliance-manager-audit-logging)

## Supporting Pages

### "Assured OSS audit logging \_|\_ Security Command Center \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/security-command-center/docs/audit-logging-aoss](https://docs.cloud.google.com/security-command-center/docs/audit-logging-aoss)
- Source ID: `site-iam-reference`
- Final score: 214
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Security Security Command Center Guides Send feedback Assured OSS audit logging Stay organized with collections Save and categorize content based on your preferences.
- After you integrate Assured Open Source Software with Security Command Center , Assured OSS supports audit logging.
- To read your Google Cloud project-level audit log entries, run the following command: gcloud logging read "logName : projects/ PROJECT ID /logs/cloudaudit.googleapis.com" \ --project= PROJECT ID To read your folder-level audit log entries, run the following command: gcloud logging read "logName : folders/ FOLDER ID /logs/cloudaudit.googleapis.com" \ --folder= FOLDER ID To read your organization-level audit log entries, run the following command: gcloud logging read "logName : organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com" \ --organization= ORGANIZATION ID To read your Cloud Billing account-level audit log entries, run the following command: gcloud logging read "logName : billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com" \ --billing-account= BILLING ACCOUNT ID Add the --freshness flag to your command to read logs that are more than 1 day old.
- For example, to use the Logging API to view your project-level audit log entries, do the following: Go to the Try this API section in the documentation for the entries.list method.

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- The following detectors are new for v1.3.0: Access transparency disabled Cloud Asset API disabled Dataproc CMEK disabled Essential contacts not configured Flow logs settings not recommended The following detectors have been updated: Audit logging disabled For more information about Security Command Center support for standards and compliance, see the following: Detectors and compliance CIS Google Cloud Computing Platform Benchmarks March 23, 2023 Feature The version 3.0 release of the Google SCC App for QRadar , which lets you send Security Command Center data to QRadar v7.4.1FP2+, is generally available.
- February 06, 2023 Feature The version 1.0 release of the Google SCC ITSM app and the Google SCC SIR app, which let you send data, such as findings, sources, assets, and audit logs, from Security Command Center to ServiceNow, is generally available.
- August 24, 2020 Feature Audit logs are now available in Security Command Center as part of Cloud Audit Logs.
- Learn more about Security Command Center audit logging .

### "Compliance Manager audit logging \_|\_ Security Command Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/security-command-center/docs/compliance-manager-audit-logging](https://docs.cloud.google.com/security-command-center/docs/compliance-manager-audit-logging)
- Source ID: `site-docs-reference`
- Final score: 154
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Security Security Command Center Guides Send feedback Compliance Manager audit logging Stay organized with collections Save and categorize content based on your preferences.
- For more information about Cloud Audit Logs, see the following: Types of audit logs Audit log entry structure Storing and routing audit logs Cloud Logging pricing summary Enable Data Access audit logs Service name Compliance Manager audit logs use the service name cloudsecuritycompliance.googleapis.com .
- Permission type Methods ADMIN READ google.cloud.cloudsecuritycompliance.v1.Deployment.GetCloudControlDeployment google.cloud.cloudsecuritycompliance.v1.Deployment.GetFrameworkDeployment google.cloud.cloudsecuritycompliance.v1.Deployment.ListCloudControlDeployments google.cloud.cloudsecuritycompliance.v1.Deployment.ListFrameworkDeployments google.longrunning.Operations.GetOperation google.longrunning.Operations.ListOperations ADMIN WRITE google.cloud.cloudsecuritycompliance.v1.CmEnrollmentService.UpdateCmEnrollment google.cloud.cloudsecuritycompliance.v1.Config.CreateCloudControl google.cloud.cloudsecuritycompliance.v1.Config.CreateFramework google.cloud.cloudsecuritycompliance.v1.Config.DeleteCloudControl google.cloud.cloudsecuritycompliance.v1.Config.DeleteFramework google.cloud.cloudsecuritycompliance.v1.Config.UpdateCloudControl google.cloud.cloudsecuritycompliance.v1.Config.UpdateFramework google.cloud.cloudsecuritycompliance.v1.Deployment.CreateFrameworkDeployment (LRO) google.cloud.cloudsecuritycompliance.v1.Deployment.DeleteFrameworkDeployment (LRO) google.longrunning.Operations.CancelOperation google.longrunning.Operations.DeleteOperation DATA READ google.cloud.cloudsecuritycompliance.v1.Audit.GetFrameworkAudit google.cloud.cloudsecuritycompliance.v1.Audit.ListFrameworkAudits google.cloud.cloudsecuritycompliance.v1.CmEnrollmentService.CalculateEffectiveCmEnrollment google.cloud.cloudsecuritycompliance.v1.Config.GetCloudControl google.cloud.cloudsecuritycompliance.v1.Config.GetFramework google.cloud.cloudsecuritycompliance.v1.Config.ListCloudControls google.cloud.cloudsecuritycompliance.v1.Config.ListFrameworks google.cloud.cloudsecuritycompliance.v1.Monitoring.AggregateFrameworkComplianceReport google.cloud.cloudsecuritycompliance.v1.Monitoring.FetchFrameworkComplianceReport google.cloud.cloudsecuritycompliance.v1.Monitoring.ListControlComplianceSummaries google.cloud.cloudsecuritycompliance.v1.Monitoring.ListFindingSummaries google.cloud.cloudsecuritycompliance.v1.Monitoring.ListFrameworkComplianceSummaries DATA WRITE google.cloud.cloudsecuritycompliance.v1.Audit.CreateFrameworkAudit (LRO) google.cloud.cloudsecuritycompliance.v1.Audit.GenerateFrameworkAuditScopeReport API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Compliance Manager. google.cloud.cloudsecuritycompliance.v1.Audit The following audit logs are associated with methods belonging to google.cloud.cloudsecuritycompliance.v1.Audit .
- CreateFrameworkDeployment Method : google.cloud.cloudsecuritycompliance.v1.Deployment.CreateFrameworkDeployment Audit log type : Admin activity Permissions : cloudsecuritycompliance.frameworkDeployments.create - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.cloudsecuritycompliance.v1.Deployment.CreateFrameworkDeployment" DeleteFrameworkDeployment Method : google.cloud.cloudsecuritycompliance.v1.Deployment.DeleteFrameworkDeployment Audit log type : Admin activity Permissions : cloudsecuritycompliance.frameworkDeployments.delete - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.cloudsecuritycompliance.v1.Deployment.DeleteFrameworkDeployment" GetCloudControlDeployment Method : google.cloud.cloudsecuritycompliance.v1.Deployment.GetCloudControlDeployment Audit log type : Data access Permissions : cloudsecuritycompliance.cloudControlDeployments.get - ADMIN READ Method is a long-running or streaming operation : No.

