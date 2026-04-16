---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:09.993Z"
product_name: "Managed Service for Microsoft Active Directory"
product_slug: "managed-service-for-microsoft-active-directory"
feature_name: "Schema extensions"
feature_slug: "schema-extensions"
latest_feature_date: "2022-06-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/managed-microsoft-ad/docs/faq"
  - "https://docs.cloud.google.com/managed-microsoft-ad/docs/backup-restore"
  - "https://docs.cloud.google.com/managed-microsoft-ad/docs/audit-logging"
keywords:
  - "schema"
  - "extensions"
  - "managed"
  - "microsoft"
  - "ad"
  - "supports"
  - "extending"
  - "directory"
---

# Schema extensions

Product: Managed Service for Microsoft Active Directory
Coverage: MEDIUM

## Step 02 Summary

Managed Microsoft AD supports extending the directory schema.

## Extended Definition

Managed Microsoft AD supports extending the directory schema.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/managed-microsoft-ad/docs/faq](https://docs.cloud.google.com/managed-microsoft-ad/docs/faq)
- [https://docs.cloud.google.com/managed-microsoft-ad/docs/backup-restore](https://docs.cloud.google.com/managed-microsoft-ad/docs/backup-restore)
- [https://docs.cloud.google.com/managed-microsoft-ad/docs/audit-logging](https://docs.cloud.google.com/managed-microsoft-ad/docs/audit-logging)

## Supporting Pages

### "Common questions \_|\_ Managed Service for Microsoft Active Directory \_\

- URL: [https://docs.cloud.google.com/managed-microsoft-ad/docs/faq](https://docs.cloud.google.com/managed-microsoft-ad/docs/faq)
- Source ID: `site-docs-root`
- Final score: 59
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Yes, you can extend the Active Directory schema of your Managed Microsoft AD domain.
- By default, Managed Microsoft AD creates the Cloud Service Default Computer Policy GPO along with other default Active Directory objects and links it to the Cloud OU.
- When you create a new domain, Managed Microsoft AD automatically creates the Cloud and Cloud Service Objects OUs along with other default Active Directory objects .
- This page provides answers to some common questions about Google Cloud's Managed Service for Microsoft Active Directory.

### "Back up and restore a domain \_|\_ Managed Service for Microsoft Active\

- URL: [https://docs.cloud.google.com/managed-microsoft-ad/docs/backup-restore](https://docs.cloud.google.com/managed-microsoft-ad/docs/backup-restore)
- Source ID: `site-docs-reference-required-1`
- Final score: 49
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To restore a domain, run the following gcloud CLI command from the project where you created your Managed Microsoft AD domain. gcloud active-directory domains restore DOMAIN NAME \ --backup= BACKUP NAME \ --project= DOMAIN RESOURCE PROJECT ID Replace the following: DOMAIN NAME : The name of your Managed Microsoft AD domain.
- Run the following gcloud CLI command: gcloud active-directory domains backups list \ --domain= DOMAIN NAME \ --project= DOMAIN RESOURCE PROJECT ID Replace the following: DOMAIN NAME : The name of your Managed Microsoft AD domain.
- If a domain already has 10 schema extension backups, when you initiate schema extension, Managed Microsoft AD deletes an existing schema extension backup in chronological order before it creates a new one.
- This topic shows you how to do the following tasks in Managed Service for Microsoft Active Directory: Take a backup of your existing domain which saves the current state of your domain.

### "Managed Microsoft AD audit logging \_|\_ Managed Service for Microsoft Active\

- URL: [https://docs.cloud.google.com/managed-microsoft-ad/docs/audit-logging](https://docs.cloud.google.com/managed-microsoft-ad/docs/audit-logging)
- Source ID: `site-docs-reference-required-1`
- Final score: 43
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Permission type Methods ADMIN READ google.cloud.managedidentities.v1.ManagedIdentitiesService.CheckMigrationPermission google.cloud.managedidentities.v1.ManagedIdentitiesService.GetDomain google.cloud.managedidentities.v1.ManagedIdentitiesService.GetLDAPSSettings google.cloud.managedidentities.v1.ManagedIdentitiesService.GetPeering google.cloud.managedidentities.v1.ManagedIdentitiesService.GetSqlIntegration google.cloud.managedidentities.v1.ManagedIdentitiesService.ListDomains google.cloud.managedidentities.v1.ManagedIdentitiesService.ListPeerings google.cloud.managedidentities.v1.ManagedIdentitiesService.ListSqlIntegrations google.cloud.managedidentities.v1.ManagedIdentitiesService.ValidateTrust (LRO) google.cloud.managedidentities.v1alpha1.ManagedIdentitiesService.CheckMigrationPermission google.cloud.managedidentities.v1alpha1.ManagedIdentitiesService.GetDomain google.cloud.managedidentities.v1alpha1.ManagedIdentitiesService.GetLDAPSSettings google.cloud.managedidentities.v1alpha1.ManagedIdentitiesService.GetPeering google.cloud.managedidentities.v1alpha1.ManagedIdentitiesService.GetSQLIntegration google.cloud.managedidentities.v1alpha1.ManagedIdentitiesService.ListDomains google.cloud.managedidentities.v1alpha1.ManagedIdentitiesService.ListPeerings google.cloud.managedidentities.v1alpha1.ManagedIdentitiesService.ListSQLIntegrations google.cloud.managedidentities.v1alpha1.ManagedIdentitiesService.ValidateTrust google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.CheckMigrationPermission google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.GetDomain google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.GetLDAPSSettings google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.GetPeering google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.GetSqlIntegration google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.ListDomains google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.ListPeerings google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.ListSqlIntegrations google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.ValidateTrust google.cloud.managedidentities.v1internal1.ManagedIdentitiesService.GetInternalIntegratedNetwork GetIamPolicy google.longrunning.Operations.GetOperation google.longrunning.Operations.ListOperations ADMIN WRITE google.cloud.managedidentities.v1.ManagedIdentitiesService.AttachTrust (LRO) google.cloud.managedidentities.v1.ManagedIdentitiesService.CreateBackup (LRO) google.cloud.managedidentities.v1.ManagedIdentitiesService.CreateMicrosoftAdDomain (LRO) google.cloud.managedidentities.v1.ManagedIdentitiesService.CreatePeering (LRO) google.cloud.managedidentities.v1.ManagedIdentitiesService.DeleteBackup (LRO) google.cloud.managedidentities.v1.ManagedIdentitiesService.DeleteDomain (LRO) google.cloud.managedidentities.v1.ManagedIdentitiesService.DeletePeering (LRO) google.cloud.managedidentities.v1.ManagedIdentitiesService.DetachTrust (LRO) google.cloud.managedidentities.v1.ManagedIdentitiesService.DisableMigration google.cloud.managedidentities.v1.ManagedIdentitiesService.DomainJoinMachine google.cloud.managedidentities.v1.ManagedIdentitiesService.EnableMigration google.cloud.managedidentities.v1.ManagedIdentitiesService.ExtendSchema (LRO) google.cloud.managedidentities.v1.ManagedIdentitiesService.ReconfigureTrust (LRO) google.cloud.managedidentities.v1.ManagedIdentitiesService.ResetAdminPassword google.cloud.managedidentities.v1.ManagedIdentitiesService.RestoreDomain google.cloud.managedidentities.v1.ManagedIdentitiesService.UpdateBackup (LRO) google.cloud.managedidentities.v1.ManagedIdentitiesService.UpdateDomain (LRO) google.cloud.managedidentities.v1.ManagedIdentitiesService.UpdateLDAPSSettings (LRO) google.cloud.managedidentities.v1.ManagedIdentitiesService.UpdatePeering (LRO) google.cloud.managedidentities.v1alpha1.ManagedIdentitiesService.AttachTrust google.cloud.managedidentities.v1alpha1.ManagedIdentitiesService.CreateBackup (LRO) google.cloud.managedidentities.v1alpha1.ManagedIdentitiesService.CreateMicrosoftAdDomain (LRO) google.cloud.managedidentities.v1alpha1.ManagedIdentitiesService.CreatePeering google.cloud.managedidentities.v1alpha1.ManagedIdentitiesService.DeleteBackup google.cloud.managedidentities.v1alpha1.ManagedIdentitiesService.DeleteDomain (LRO) google.cloud.managedidentities.v1alpha1.ManagedIdentitiesService.DeletePeering google.cloud.managedidentities.v1alpha1.ManagedIdentitiesService.DetachTrust google.cloud.managedidentities.v1alpha1.ManagedIdentitiesService.DisableMigration google.cloud.managedidentities.v1alpha1.ManagedIdentitiesService.DomainJoinMachine google.cloud.managedidentities.v1alpha1.ManagedIdentitiesService.EnableMigration google.cloud.managedidentities.v1alpha1.ManagedIdentitiesService.ExtendSchema google.cloud.managedidentities.v1alpha1.ManagedIdentitiesService.ReconfigureTrust google.cloud.managedidentities.v1alpha1.ManagedIdentitiesService.ResetAdminPassword google.cloud.managedidentities.v1alpha1.ManagedIdentitiesService.RestoreDomain (LRO) google.cloud.managedidentities.v1alpha1.ManagedIdentitiesService.UpdateBackup google.cloud.managedidentities.v1alpha1.ManagedIdentitiesService.UpdateDomain (LRO) google.cloud.managedidentities.v1alpha1.ManagedIdentitiesService.UpdateLDAPSSettings google.cloud.managedidentities.v1alpha1.ManagedIdentitiesService.UpdatePeering google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.AttachTrust (LRO) google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.CreateBackup google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.CreateMicrosoftAdDomain (LRO) google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.CreatePeering (LRO) google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.DeleteBackup google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.DeleteDomain (LRO) google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.DeletePeering (LRO) google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.DetachTrust (LRO) google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.DisableMigration google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.DomainJoinMachine google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.EnableMigration google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.ExtendSchema google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.ReconfigureTrust google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.ResetAdminPassword google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.RestoreDomain google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.UpdateBackup google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.UpdateDomain (LRO) google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.UpdateLDAPSSettings (LRO) google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.UpdatePeering google.cloud.managedidentities.v1internal1.ManagedIdentitiesService.CreateInternalIntegratedNetwork (LRO) google.cloud.managedidentities.v1internal1.ManagedIdentitiesService.CreateInternalSQLIntegration (LRO) google.cloud.managedidentities.v1internal1.ManagedIdentitiesService.DeleteInternalIntegratedNetwork (LRO) google.cloud.managedidentities.v1internal1.ManagedIdentitiesService.DeleteInternalSQLIntegration (LRO) google.cloud.managedidentities.v1internal1.ManagedIdentitiesService.ResetInternalSQLPassword SetIamPolicy google.longrunning.Operations.CancelOperation google.longrunning.Operations.DeleteOperation API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Managed Service for Microsoft Active Directory. google.cloud.managedidentities.v1.ManagedIdentitiesService The following audit logs are associated with methods belonging to google.cloud.managedidentities.v1.ManagedIdentitiesService .
- For more information about Cloud Audit Logs, see the following: Types of audit logs Audit log entry structure Storing and routing audit logs Cloud Logging pricing summary Enable Data Access audit logs Service name Managed Service for Microsoft Active Directory audit logs use the service name managedidentities.googleapis.com .
- When you call a method, Managed Service for Microsoft Active Directory generates an audit log whose category is dependent on the type property of the permission required to perform the method.
- This document describes audit logging for Managed Service for Microsoft Active Directory.

