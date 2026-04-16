---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:09.991Z"
product_name: "Managed Service for Microsoft Active Directory"
product_slug: "managed-service-for-microsoft-active-directory"
feature_name: "Schema extensions for Managed Microsoft AD"
feature_slug: "schema-extensions-for-managed-microsoft-ad"
latest_feature_date: "2022-11-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/managed-microsoft-ad/docs/backup-restore"
  - "https://docs.cloud.google.com/managed-microsoft-ad/docs/faq"
  - "https://docs.cloud.google.com/managed-microsoft-ad/docs/audit-logging"
keywords:
  - "schema"
  - "extensions"
  - "managed"
  - "microsoft"
  - "ad"
  - "supports"
---

# Schema extensions for Managed Microsoft AD

Product: Managed Service for Microsoft Active Directory
Coverage: MEDIUM

## Step 02 Summary

Managed Microsoft AD supports schema extensions.

## Extended Definition

Managed Microsoft AD supports schema extensions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/managed-microsoft-ad/docs/backup-restore](https://docs.cloud.google.com/managed-microsoft-ad/docs/backup-restore)
- [https://docs.cloud.google.com/managed-microsoft-ad/docs/faq](https://docs.cloud.google.com/managed-microsoft-ad/docs/faq)
- [https://docs.cloud.google.com/managed-microsoft-ad/docs/audit-logging](https://docs.cloud.google.com/managed-microsoft-ad/docs/audit-logging)

## Supporting Pages

### "Back up and restore a domain \_|\_ Managed Service for Microsoft Active\

- URL: [https://docs.cloud.google.com/managed-microsoft-ad/docs/backup-restore](https://docs.cloud.google.com/managed-microsoft-ad/docs/backup-restore)
- Source ID: `site-docs-reference-required-1`
- Final score: 49
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If a domain already has 10 schema extension backups, when you initiate schema extension, Managed Microsoft AD deletes an existing schema extension backup in chronological order before it creates a new one.
- Schema extension backup: Managed Microsoft AD creates a backup automatically when you initiate schema extension .
- Note: Managed Microsoft AD retains scheduled and schema extension backups for 21 days.
- Overview Managed Microsoft AD supports backing up and restoring your domains.

### "Common questions \_|\_ Managed Service for Microsoft Active Directory \_\

- URL: [https://docs.cloud.google.com/managed-microsoft-ad/docs/faq](https://docs.cloud.google.com/managed-microsoft-ad/docs/faq)
- Source ID: `site-docs-root`
- Final score: 49
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Yes, you can extend the Active Directory schema of your Managed Microsoft AD domain.
- Managed Microsoft AD supports on-demand and automatic backups for your domain.
- The delegated administrator account doesn't have the Domain Administrator and Enterprise Administrator permissions, because Managed Microsoft AD is a managed service and Google reserves the right to use these permissions.
- Home Documentation Access and resource management Managed Microsoft AD Guides Send feedback Common questions Stay organized with collections Save and categorize content based on your preferences.

### "Managed Microsoft AD audit logging \_|\_ Managed Service for Microsoft Active\

- URL: [https://docs.cloud.google.com/managed-microsoft-ad/docs/audit-logging](https://docs.cloud.google.com/managed-microsoft-ad/docs/audit-logging)
- Source ID: `site-docs-reference-required-1`
- Final score: 43
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Permission type Methods ADMIN READ google.cloud.managedidentities.v1.ManagedIdentitiesService.CheckMigrationPermission google.cloud.managedidentities.v1.ManagedIdentitiesService.GetDomain google.cloud.managedidentities.v1.ManagedIdentitiesService.GetLDAPSSettings google.cloud.managedidentities.v1.ManagedIdentitiesService.GetPeering google.cloud.managedidentities.v1.ManagedIdentitiesService.GetSqlIntegration google.cloud.managedidentities.v1.ManagedIdentitiesService.ListDomains google.cloud.managedidentities.v1.ManagedIdentitiesService.ListPeerings google.cloud.managedidentities.v1.ManagedIdentitiesService.ListSqlIntegrations google.cloud.managedidentities.v1.ManagedIdentitiesService.ValidateTrust (LRO) google.cloud.managedidentities.v1alpha1.ManagedIdentitiesService.CheckMigrationPermission google.cloud.managedidentities.v1alpha1.ManagedIdentitiesService.GetDomain google.cloud.managedidentities.v1alpha1.ManagedIdentitiesService.GetLDAPSSettings google.cloud.managedidentities.v1alpha1.ManagedIdentitiesService.GetPeering google.cloud.managedidentities.v1alpha1.ManagedIdentitiesService.GetSQLIntegration google.cloud.managedidentities.v1alpha1.ManagedIdentitiesService.ListDomains google.cloud.managedidentities.v1alpha1.ManagedIdentitiesService.ListPeerings google.cloud.managedidentities.v1alpha1.ManagedIdentitiesService.ListSQLIntegrations google.cloud.managedidentities.v1alpha1.ManagedIdentitiesService.ValidateTrust google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.CheckMigrationPermission google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.GetDomain google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.GetLDAPSSettings google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.GetPeering google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.GetSqlIntegration google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.ListDomains google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.ListPeerings google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.ListSqlIntegrations google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.ValidateTrust google.cloud.managedidentities.v1internal1.ManagedIdentitiesService.GetInternalIntegratedNetwork GetIamPolicy google.longrunning.Operations.GetOperation google.longrunning.Operations.ListOperations ADMIN WRITE google.cloud.managedidentities.v1.ManagedIdentitiesService.AttachTrust (LRO) google.cloud.managedidentities.v1.ManagedIdentitiesService.CreateBackup (LRO) google.cloud.managedidentities.v1.ManagedIdentitiesService.CreateMicrosoftAdDomain (LRO) google.cloud.managedidentities.v1.ManagedIdentitiesService.CreatePeering (LRO) google.cloud.managedidentities.v1.ManagedIdentitiesService.DeleteBackup (LRO) google.cloud.managedidentities.v1.ManagedIdentitiesService.DeleteDomain (LRO) google.cloud.managedidentities.v1.ManagedIdentitiesService.DeletePeering (LRO) google.cloud.managedidentities.v1.ManagedIdentitiesService.DetachTrust (LRO) google.cloud.managedidentities.v1.ManagedIdentitiesService.DisableMigration google.cloud.managedidentities.v1.ManagedIdentitiesService.DomainJoinMachine google.cloud.managedidentities.v1.ManagedIdentitiesService.EnableMigration google.cloud.managedidentities.v1.ManagedIdentitiesService.ExtendSchema (LRO) google.cloud.managedidentities.v1.ManagedIdentitiesService.ReconfigureTrust (LRO) google.cloud.managedidentities.v1.ManagedIdentitiesService.ResetAdminPassword google.cloud.managedidentities.v1.ManagedIdentitiesService.RestoreDomain google.cloud.managedidentities.v1.ManagedIdentitiesService.UpdateBackup (LRO) google.cloud.managedidentities.v1.ManagedIdentitiesService.UpdateDomain (LRO) google.cloud.managedidentities.v1.ManagedIdentitiesService.UpdateLDAPSSettings (LRO) google.cloud.managedidentities.v1.ManagedIdentitiesService.UpdatePeering (LRO) google.cloud.managedidentities.v1alpha1.ManagedIdentitiesService.AttachTrust google.cloud.managedidentities.v1alpha1.ManagedIdentitiesService.CreateBackup (LRO) google.cloud.managedidentities.v1alpha1.ManagedIdentitiesService.CreateMicrosoftAdDomain (LRO) google.cloud.managedidentities.v1alpha1.ManagedIdentitiesService.CreatePeering google.cloud.managedidentities.v1alpha1.ManagedIdentitiesService.DeleteBackup google.cloud.managedidentities.v1alpha1.ManagedIdentitiesService.DeleteDomain (LRO) google.cloud.managedidentities.v1alpha1.ManagedIdentitiesService.DeletePeering google.cloud.managedidentities.v1alpha1.ManagedIdentitiesService.DetachTrust google.cloud.managedidentities.v1alpha1.ManagedIdentitiesService.DisableMigration google.cloud.managedidentities.v1alpha1.ManagedIdentitiesService.DomainJoinMachine google.cloud.managedidentities.v1alpha1.ManagedIdentitiesService.EnableMigration google.cloud.managedidentities.v1alpha1.ManagedIdentitiesService.ExtendSchema google.cloud.managedidentities.v1alpha1.ManagedIdentitiesService.ReconfigureTrust google.cloud.managedidentities.v1alpha1.ManagedIdentitiesService.ResetAdminPassword google.cloud.managedidentities.v1alpha1.ManagedIdentitiesService.RestoreDomain (LRO) google.cloud.managedidentities.v1alpha1.ManagedIdentitiesService.UpdateBackup google.cloud.managedidentities.v1alpha1.ManagedIdentitiesService.UpdateDomain (LRO) google.cloud.managedidentities.v1alpha1.ManagedIdentitiesService.UpdateLDAPSSettings google.cloud.managedidentities.v1alpha1.ManagedIdentitiesService.UpdatePeering google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.AttachTrust (LRO) google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.CreateBackup google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.CreateMicrosoftAdDomain (LRO) google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.CreatePeering (LRO) google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.DeleteBackup google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.DeleteDomain (LRO) google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.DeletePeering (LRO) google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.DetachTrust (LRO) google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.DisableMigration google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.DomainJoinMachine google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.EnableMigration google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.ExtendSchema google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.ReconfigureTrust google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.ResetAdminPassword google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.RestoreDomain google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.UpdateBackup google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.UpdateDomain (LRO) google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.UpdateLDAPSSettings (LRO) google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.UpdatePeering google.cloud.managedidentities.v1internal1.ManagedIdentitiesService.CreateInternalIntegratedNetwork (LRO) google.cloud.managedidentities.v1internal1.ManagedIdentitiesService.CreateInternalSQLIntegration (LRO) google.cloud.managedidentities.v1internal1.ManagedIdentitiesService.DeleteInternalIntegratedNetwork (LRO) google.cloud.managedidentities.v1internal1.ManagedIdentitiesService.DeleteInternalSQLIntegration (LRO) google.cloud.managedidentities.v1internal1.ManagedIdentitiesService.ResetInternalSQLPassword SetIamPolicy google.longrunning.Operations.CancelOperation google.longrunning.Operations.DeleteOperation API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Managed Service for Microsoft Active Directory. google.cloud.managedidentities.v1.ManagedIdentitiesService The following audit logs are associated with methods belonging to google.cloud.managedidentities.v1.ManagedIdentitiesService .
- Filter for this method : protoPayload.methodName="google.cloud.managedidentities.v1.ManagedIdentitiesService.CheckMigrationPermission" CreateBackup Method : google.cloud.managedidentities.v1.ManagedIdentitiesService.CreateBackup Audit log type : Admin activity Permissions : managedidentities.backups.create - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.managedidentities.v1.ManagedIdentitiesService.CreateBackup" CreateMicrosoftAdDomain Method : google.cloud.managedidentities.v1.ManagedIdentitiesService.CreateMicrosoftAdDomain Audit log type : Admin activity Permissions : managedidentities.domains.create - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.managedidentities.v1.ManagedIdentitiesService.CreateMicrosoftAdDomain" CreatePeering Method : google.cloud.managedidentities.v1.ManagedIdentitiesService.CreatePeering Audit log type : Admin activity Permissions : managedidentities.peerings.create - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.managedidentities.v1.ManagedIdentitiesService.CreatePeering" DeleteBackup Method : google.cloud.managedidentities.v1.ManagedIdentitiesService.DeleteBackup Audit log type : Admin activity Permissions : managedidentities.backups.delete - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.managedidentities.v1.ManagedIdentitiesService.DeleteBackup" DeleteDomain Method : google.cloud.managedidentities.v1.ManagedIdentitiesService.DeleteDomain Audit log type : Admin activity Permissions : managedidentities.domains.delete - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.managedidentities.v1.ManagedIdentitiesService.DeleteDomain" DeletePeering Method : google.cloud.managedidentities.v1.ManagedIdentitiesService.DeletePeering Audit log type : Admin activity Permissions : managedidentities.peerings.delete - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.managedidentities.v1.ManagedIdentitiesService.DeletePeering" DetachTrust Method : google.cloud.managedidentities.v1.ManagedIdentitiesService.DetachTrust Audit log type : Admin activity Permissions : managedidentities.domains.detachTrust - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.managedidentities.v1.ManagedIdentitiesService.DetachTrust" DisableMigration Method : google.cloud.managedidentities.v1.ManagedIdentitiesService.DisableMigration Audit log type : Admin activity Permissions : managedidentities.domains.disableMigration - ADMIN WRITE Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="google.cloud.managedidentities.v1alpha1.ManagedIdentitiesService.CheckMigrationPermission" CreateBackup Method : google.cloud.managedidentities.v1alpha1.ManagedIdentitiesService.CreateBackup Audit log type : Admin activity Permissions : managedidentities.backups.create - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.managedidentities.v1alpha1.ManagedIdentitiesService.CreateBackup" CreateMicrosoftAdDomain Method : google.cloud.managedidentities.v1alpha1.ManagedIdentitiesService.CreateMicrosoftAdDomain Audit log type : Admin activity Permissions : managedidentities.domains.create - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.managedidentities.v1alpha1.ManagedIdentitiesService.CreateMicrosoftAdDomain" CreatePeering Method : google.cloud.managedidentities.v1alpha1.ManagedIdentitiesService.CreatePeering Audit log type : Admin activity Permissions : managedidentities.peerings.create - ADMIN WRITE Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.CreateBackup" CreateMicrosoftAdDomain Method : google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.CreateMicrosoftAdDomain Audit log type : Admin activity Permissions : managedidentities.domains.create - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.CreateMicrosoftAdDomain" CreatePeering Method : google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.CreatePeering Audit log type : Admin activity Permissions : managedidentities.peerings.create - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.CreatePeering" DeleteBackup Method : google.cloud.managedidentities.v1beta1.ManagedIdentitiesService.DeleteBackup Audit log type : Admin activity Permissions : managedidentities.backups.delete - ADMIN WRITE Method is a long-running or streaming operation : No.

