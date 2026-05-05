# Managed Service for Microsoft Active Directory

Schema version: `step-08-product-feature-cards-v1`
Generated at: `2026-05-05T13:11:36.755Z`
Product status: `PASS`

## Summary

- Feature cards: 24
- Step 07 failed features: 0
- Step 07 warned features: 1
- Corpus health: healthy
- IAM mapping: 7 explicit, 0 derived, 17 unknown

## Service Card

- Service card ID: `managed-service-for-microsoft-active-directory:service`
- Latest feature date: 2024-01-31
- Official source links: 30
- Security capabilities: 25

## Features

| Feature | Coverage | Gate | IAM | Sources |
| --- | --- | --- | --- | --- |
| Managed Microsoft AD regional availability | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/managed-microsoft-ad/docs/add-remove-regions)<br>[source](https://docs.cloud.google.com/managed-microsoft-ad/docs/overview)<br>[source](https://docs.cloud.google.com/managed-microsoft-ad/docs/part-1-deploy-active-directory) |
| Workforce identity federation for Managed Microsoft AD | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/deny-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services) |
| Automated domain join for Managed Microsoft AD | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/managed-microsoft-ad/docs/automated-domain-join-gke)<br>[source](https://docs.cloud.google.com/managed-microsoft-ad/docs/quickstart-domain-join-linux)<br>[source](https://docs.cloud.google.com/managed-microsoft-ad/docs/quickstart-domain-join-windows) |
| Managed Microsoft AD audit log event IDs | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/managed-microsoft-ad/docs/audit-logging)<br>[source](https://docs.cloud.google.com/managed-microsoft-ad/docs/faq)<br>[source](https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains) |
| Microsoft security baselines for Managed Microsoft AD VMs | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/roles-permissions/managedidentities)<br>[source](https://docs.cloud.google.com/managed-microsoft-ad/docs/hardening) |
| Schema extensions for Managed Microsoft AD | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/managed-microsoft-ad/docs/audit-logging)<br>[source](https://docs.cloud.google.com/managed-microsoft-ad/docs/backup-restore)<br>[source](https://docs.cloud.google.com/managed-microsoft-ad/docs/faq) |
| User migration to Managed Microsoft AD | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/managed-microsoft-ad/docs/create-trust)<br>[source](https://docs.cloud.google.com/managed-microsoft-ad/docs/domain-migration)<br>[source](https://docs.cloud.google.com/managed-microsoft-ad/docs/enable-migrate-permissions) |
| Virus and malware protection | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities)<br>[source](https://docs.cloud.google.com/managed-microsoft-ad/docs/deploy-adfs)<br>[source](https://docs.cloud.google.com/managed-microsoft-ad/docs/hardening) |
| Domain peering | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/managed-microsoft-ad/docs/create-domain)<br>[source](https://docs.cloud.google.com/managed-microsoft-ad/docs/domain-peering)<br>[source](https://docs.cloud.google.com/managed-microsoft-ad/docs/quickstart-domain-peering) |
| LDAPS | MEDIUM | WARN | unknown | [source](https://docs.cloud.google.com/managed-microsoft-ad/docs/audit-logging)<br>[source](https://docs.cloud.google.com/managed-microsoft-ad/reference/rest)<br>[source](https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/LDAPSSettings) |
| Schema extensions | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/managed-microsoft-ad/docs/audit-logging)<br>[source](https://docs.cloud.google.com/managed-microsoft-ad/docs/backup-restore)<br>[source](https://docs.cloud.google.com/managed-microsoft-ad/docs/faq) |
| Backup and restore | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/managed-microsoft-ad/docs/audit-logging)<br>[source](https://docs.cloud.google.com/managed-microsoft-ad/docs/backup-restore)<br>[source](https://docs.cloud.google.com/managed-microsoft-ad/docs/faq) |
| Regional availability | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/managed-microsoft-ad/docs/add-remove-regions)<br>[source](https://docs.cloud.google.com/managed-microsoft-ad/docs/overview)<br>[source](https://docs.cloud.google.com/managed-microsoft-ad/docs/part-1-deploy-active-directory) |
| Domain tags | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/iam/docs/roles-permissions/managedidentities)<br>[source](https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains)<br>[source](https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains.backups) |
| Audit logging | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/managed-microsoft-ad/docs/audit-logging)<br>[source](https://docs.cloud.google.com/managed-microsoft-ad/docs/faq)<br>[source](https://docs.cloud.google.com/managed-microsoft-ad/docs/troubleshooting) |
| Cloud SQL integration | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/iam/docs/roles-permissions/managedidentities)<br>[source](https://docs.cloud.google.com/managed-microsoft-ad/docs/access-control)<br>[source](https://docs.cloud.google.com/managed-microsoft-ad/docs/audit-logging) |
| Fine-grained password policies | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/managed-microsoft-ad/docs/how-to-use-delegated-admin)<br>[source](https://docs.cloud.google.com/managed-microsoft-ad/docs/troubleshooting) |
| Terraform support | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes)<br>[source](https://docs.cloud.google.com/managed-microsoft-ad/docs/create-trust)<br>[source](https://docs.cloud.google.com/managed-microsoft-ad/docs/part-1-deploy-active-directory) |
| Managed Microsoft AD SLA | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services)<br>[source](https://docs.cloud.google.com/managed-microsoft-ad/docs/access-control) |
| VPC Service Controls integration | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/deny-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services) |
| Default domain functional level for new domains | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/managed-microsoft-ad/docs/create-domain)<br>[source](https://docs.cloud.google.com/managed-microsoft-ad/docs/create-trust)<br>[source](https://docs.cloud.google.com/managed-microsoft-ad/docs/part-1-deploy-active-directory) |
| Domain controller regional deployment | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/managed-microsoft-ad/docs/add-remove-regions)<br>[source](https://docs.cloud.google.com/managed-microsoft-ad/docs/create-domain)<br>[source](https://docs.cloud.google.com/managed-microsoft-ad/docs/overview) |
| Domain controllers in up to four regions per domain | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/managed-microsoft-ad/docs/add-remove-regions)<br>[source](https://docs.cloud.google.com/managed-microsoft-ad/docs/create-domain)<br>[source](https://docs.cloud.google.com/managed-microsoft-ad/docs/overview) |
| Multi-regional VPC access to domain controllers | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/managed-microsoft-ad/docs/add-remove-regions)<br>[source](https://docs.cloud.google.com/managed-microsoft-ad/docs/create-domain)<br>[source](https://docs.cloud.google.com/managed-microsoft-ad/docs/overview) |
