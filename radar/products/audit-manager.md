# Audit Manager

Generated at: `2026-05-05T13:13:05.575Z`

Service card: [card.json](../../artifacts/audit-manager/card.json)

Artifacts index: [audit-manager](../../artifacts/audit-manager/index.md)

## Summary

- Promoted features: 2
- Skipped features during promotion: 0
- Latest feature date: 2025-08-27
- Service IAM status: {"explicit":1,"derived_from_permission_prefix":0,"unknown":1}

## Features

| Feature | IAM | Explicit roles | Explicit permissions | Derived roles | Derived permissions | Coverage | Official sources |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [Compliance document downloads](../../artifacts/audit-manager/compliance-document-downloads/README.md) | unknown | none | none | none | none | MEDIUM | [source](https://docs.cloud.google.com/audit-manager/docs)<br>[source](https://docs.cloud.google.com/audit-manager/docs/overview)<br>[source](https://docs.cloud.google.com/python/docs/reference/google-cloud-auditmanager/latest/google.cloud.auditmanager_v1.types.ComplianceState) |
| [Custom compliance frameworks for audits](../../artifacts/audit-manager/custom-compliance-frameworks-for-audits/README.md) | explicit | `roles/accessapproval.admin`<br>`roles/accessapproval.approver`<br>`roles/accessapproval.configEditor` | `accessapproval.settings.get`<br>`resourcemanager.projects.get`<br>`resourcemanager.projects.list` | none | none | MEDIUM | [source](https://docs.cloud.google.com/audit-manager/docs/run-audit)<br>[source](https://docs.cloud.google.com/iam/docs/roles-permissions/auditmanager)<br>[source](https://docs.cloud.google.com/python/docs/reference/google-cloud-auditmanager/latest/google.cloud.auditmanager_v1.services.audit_manager.AuditManagerAsyncClient) |
