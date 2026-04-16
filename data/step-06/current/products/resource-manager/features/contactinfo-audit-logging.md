---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:51:00.096Z"
product_name: "Resource Manager"
product_slug: "resource-manager"
feature_name: "ContactInfo audit logging"
feature_slug: "contactinfo-audit-logging"
latest_feature_date: "2018-03-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/resource-manager/docs/audit-logging"
  - "https://docs.cloud.google.com/mcp/audit-logging"
  - "https://docs.cloud.google.com/resource-manager/reference/rest/Shared.Types/AuditConfig"
keywords:
  - "contactinfo"
  - "audit"
  - "logging"
  - "records"
  - "updatecontactinfo"
  - "getcontactinfo"
  - "operations"
---

# ContactInfo audit logging

Product: Resource Manager
Coverage: MEDIUM

## Step 02 Summary

Audit logging records the UpdateContactInfo and GetContactInfo operations for ContactInfo.

## Extended Definition

Audit logging records the UpdateContactInfo and GetContactInfo operations for ContactInfo.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/resource-manager/docs/audit-logging](https://docs.cloud.google.com/resource-manager/docs/audit-logging)
- [https://docs.cloud.google.com/mcp/audit-logging](https://docs.cloud.google.com/mcp/audit-logging)
- [https://docs.cloud.google.com/resource-manager/reference/rest/Shared.Types/AuditConfig](https://docs.cloud.google.com/resource-manager/reference/rest/Shared.Types/AuditConfig)

## Supporting Pages

### Resource Manager audit logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/audit-logging](https://docs.cloud.google.com/resource-manager/docs/audit-logging)
- Source ID: `site-docs-reference-2`
- Final score: 201
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Audited operations The following table summarizes which API operations correspond to each audit log type in Resource Manager: Audit logs category Resource Manager operations Admin Activity logs (ADMIN WRITE) UpdateContactInfo v3: cloudresourcemanager.v3.organizations.setIamPolicy cloudresourcemanager.v3.folders.create cloudresourcemanager.v3.folders.delete cloudresourcemanager.v3.folders.move cloudresourcemanager.v3.folders.patch cloudresourcemanager.v3.folders.setIamPolicy cloudresourcemanager.v3.folders.undelete cloudresourcemanager.v3.projects.create cloudresourcemanager.v3.projects.delete cloudresourcemanager.v3.projects.move cloudresourcemanager.v3.projects.patch cloudresourcemanager.v3.projects.setIamPolicy cloudresourcemanager.v3.projects.undelete cloudresourcemanager.v3.tagBindings.create cloudresourcemanager.v3.tagBindings.delete cloudresourcemanager.v3.tagKeys.create cloudresourcemanager.v3.tagKeys.delete cloudresourcemanager.v3.tagKeys.patch cloudresourcemanager.v3.tagKeys.setIamPermissions cloudresourcemanager.v3.tagValues.create cloudresourcemanager.v3.tagValues.delete cloudresourcemanager.v3.tagValues.patch cloudresourcemanager.v3.tagValues.setIamPermissions v2beta1: cloudresourcemanager.v2beta1.folders.create cloudresourcemanager.v2beta1.folders.delete cloudresourcemanager.v2beta1.folders.move cloudresourcemanager.v2beta1.folders.update cloudresourcemanager.v2beta1.folders.setIamPolicy cloudresourcemanager.v2beta1.folders.undelete v2: cloudresourcemanager.v2.folders.create cloudresourcemanager.v2.folders.delete cloudresourcemanager.v2.folders.move cloudresourcemanager.v2.folders.update cloudresourcemanager.v2.folders.setIamPolicy cloudresourcemanager.v2.folders.undelete v1beta1: cloudresourcemanager.v1beta1.organizations.setIamPolicy cloudresourcemanager.v1beta1.organizations.update cloudresourcemanager.v1beta1.projects.create cloudresourcemanager.v1beta1.projects.delete cloudresourcemanager.v1beta1.projects.setIamPolicy cloudresourcemanager.v1beta1.projects.undelete cloudresourcemanager.v1beta1.projects.update v1: cloudresourcemanager.v1.folders.clearOrgPolicy cloudresourcemanager.v1.folders.setOrgPolicy cloudresourcemanager.v1.organizations.clearOrgPolicy cloudresourcemanager.v1.organizations.setIamPolicy cloudresourcemanager.v1.organizations.setOrgPolicy cloudresourcemanager.v1.projects.clearOrgPolicy cloudresourcemanager.v1.projects.create cloudresourcemanager.v1.projects.delete cloudresourcemanager.v1.projects.setIamPolicy cloudresourcemanager.v1.projects.setOrgPolicy cloudresourcemanager.v1.projects.undelete cloudresourcemanager.v1.projects.update Data Access logs (ADMIN READ) GetContactInfo v3: cloudresourcemanager.v3.organizations.get cloudresourcemanager.v3.organizations.getIamPolicy cloudresourcemanager.v3.organizations.search cloudresourcemanager.v3.organizations.testIamPermissions cloudresourcemanager.v3.folders.get cloudresourcemanager.v3.folders.getIamPolicy cloudresourcemanager.v3.folders.list cloudresourcemanager.v3.folders.search cloudresourcemanager.v3.folders.testIamPermissions cloudresourcemanager.v3.projects.get cloudresourcemanager.v3.projects.getIamPolicy cloudresourcemanager.v3.projects.list cloudresourcemanager.v3.projects.search cloudresourcemanager.v3.projects.testIamPermissions cloudresourcemanager.v3.tagKeys.get cloudresourcemanager.v3.tagKeys.getIamPolicy cloudresourcemanager.v3.tagKeys.list cloudresourcemanager.v3.tagKeys.testIamPermissions cloudresourcemanager.v3.tagValues.get cloudresourcemanager.v3.tagValues.getIamPolicy cloudresourcemanager.v3.tagValues.list cloudresourcemanager.v3.tagValues.testIamPermissions v2beta1: cloudresourcemanager.v2beta1.folders.get cloudresourcemanager.v2beta1.folders.getIamPolicy cloudresourcemanager.v2beta1.folders.list v2: cloudresourcemanager.v2.folders.get cloudresourcemanager.v2.folders.getIamPolicy cloudresourcemanager.v2.folders.list v1beta1: cloudresourcemanager.v1beta1.organizations.get cloudresourcemanager.v1beta1.organizations.getIamPolicy cloudresourcemanager.v1beta1.projects.get cloudresourcemanager.v1beta1.projects.getIamPolicy v1: cloudresourcemanager.v1.folders.getEffectiveOrgPolicy cloudresourcemanager.v1.folders.getOrgPolicy cloudresourcemanager.v1.folders.listAvailableOrgPolicyConstraints cloudresourcemanager.v1.folders.listOrgPolicies cloudresourcemanager.v1.organizations.get cloudresourcemanager.v1.organizations.getEffectiveOrgPolicy cloudresourcemanager.v1.organizations.getIamPolicy cloudresourcemanager.v1.organizations.getOrgPolicy cloudresourcemanager.v1.organizations.listAvailableOrgPolicyConstraints cloudresourcemanager.v1.organizations.listOrgPolicies cloudresourcemanager.v1.projects.get cloudresourcemanager.v1.projects.getEffectiveOrgPolicy cloudresourcemanager.v1.projects.getIamPolicy cloudresourcemanager.v1.projects.listAvailableOrgPolicyConstraints cloudresourcemanager.v1.projects.listOrgPolicies Data Access logs (ADMIN READ under integrating service name) [1] v3: cloudresourcemanager.v3.tagBindings.list cloudresourcemanager.v3.effectiveTags.list Data Access logs (ADMIN READ under Organization Policy Service) [2] v2: orgpolicy.policies.getEffectivePolicy [1] ADMIN READ must be enabled under the service for the particular resource to which the tag is attached in order to enable this log [2] ADMIN READ must be enabled under the Organization Policy Service API in order to enable this log Note: The audit logs for projects.delete operations are written to the project's parent resource, which might not be the organization resource.
- The GetContactInfo and UpdateContactInfo operations support the ContactInfo service for the EU General Data Protection Regulation (GDPR).
- To read your Google Cloud project-level audit log entries, run the following command: gcloud logging read "logName : projects/ PROJECT ID /logs/cloudaudit.googleapis.com" \ --project= PROJECT ID To read your folder-level audit log entries, run the following command: gcloud logging read "logName : folders/ FOLDER ID /logs/cloudaudit.googleapis.com" \ --folder= FOLDER ID To read your organization-level audit log entries, run the following command: gcloud logging read "logName : organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com" \ --organization= ORGANIZATION ID To read your Cloud Billing account-level audit log entries, run the following command: gcloud logging read "logName : billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com" \ --billing-account= BILLING ACCOUNT ID Add the --freshness flag to your command to read logs that are more than 1 day old.
- Log name Cloud Audit Logs log names include resource identifiers indicating the Google Cloud project or other Google Cloud entity that owns the audit logs, and whether the log contains Admin Activity, Data Access, Policy Denied, or System Event audit logging data.

### Google Cloud MCP servers audit logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mcp/audit-logging](https://docs.cloud.google.com/mcp/audit-logging)
- Source ID: `site-docs-reference-required-3`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- For more information about Cloud Audit Logs, see the following: Types of audit logs Audit log entry structure Storing and routing audit logs Cloud Logging pricing summary Enable Data Access audit logs Service name Audit logs for MCP servers are generated per service.
- Home Documentation Developer tools Google Cloud MCP servers Guides Send feedback Google Cloud MCP servers audit logging Stay organized with collections Save and categorize content based on your preferences.
- This document describes audit logging for Google Cloud remote Model Context Protocol (MCP) servers.
- Methods that require an Identity and Access Management permission with the type property value of DATA READ , DATA WRITE , or ADMIN READ generate Data Access audit logs.

### AuditConfig \_|\_ Resource Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/reference/rest/Shared.Types/AuditConfig](https://docs.cloud.google.com/resource-manager/reference/rest/Shared.Types/AuditConfig)
- Source ID: `site-api-reference`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- Example Policy with multiple AuditConfigs: { "auditConfigs": [ { "service": "allServices", "auditLogConfigs": [ { "logType": "DATA READ", "exemptedMembers": [ "user:jose@example.com" ] }, { "logType": "DATA WRITE" }, { "logType": "ADMIN READ" } ] }, { "service": "sampleservice.googleapis.com", "auditLogConfigs": [ { "logType": "DATA READ" }, { "logType": "DATA WRITE", "exemptedMembers": [ "user:aliya@example.com" ] } ] } ] } For sampleservice, this policy enables DATA READ, DATA WRITE and ADMIN READ logging.
- Example: { "auditLogConfigs": [ { "logType": "DATA READ", "exemptedMembers": [ "user:jose@example.com" ] }, { "logType": "DATA WRITE" } ] } This enables 'DATA READ' and 'DATA WRITE' logging, while exempting jose@example.com from DATA READ logging.
- For example, storage.googleapis.com , cloudsql.googleapis.com . allServices is a special value that covers all services. auditLogConfigs[] object ( AuditLogConfig ) The configuration for logging of each type of permission.
- JSON representation { "service" : string , "auditLogConfigs" : [ { object ( AuditLogConfig ) } ] } Fields service string Specifies a service that will be enabled for audit logging.

