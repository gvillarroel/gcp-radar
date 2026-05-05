# Organization Policy analysis in Google Cloud console

Product: Resource Manager
Feature slug: `organization-policy-analysis-in-google-cloud-console`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Google Cloud console support lets you analyze organization policies.

## Lifecycle

- Latest feature date: 2023-11-07
- Deprecation date: none recorded
- Status: feature_observed

## IAM

Explicit IAM evidence was found in the supporting documentation.

Roles:

- `roles/accessapproval.admin`
- `roles/accessapproval.approver`
- `roles/accessapproval.configEditor`

Permissions:

- `resourcemanager.projects.get`
- `resourcemanager.projects.list`

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/resource-manager/docs/analyze-move](https://docs.cloud.google.com/resource-manager/docs/analyze-move), [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org), [https://docs.cloud.google.com/resource-manager/docs/audit-logging](https://docs.cloud.google.com/resource-manager/docs/audit-logging))
- allow (evidence: [https://docs.cloud.google.com/resource-manager/docs/analyze-move](https://docs.cloud.google.com/resource-manager/docs/analyze-move), [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org), [https://docs.cloud.google.com/resource-manager/docs/audit-logging](https://docs.cloud.google.com/resource-manager/docs/audit-logging))
- audit (evidence: [https://docs.cloud.google.com/resource-manager/docs/analyze-move](https://docs.cloud.google.com/resource-manager/docs/analyze-move), [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org), [https://docs.cloud.google.com/resource-manager/docs/audit-logging](https://docs.cloud.google.com/resource-manager/docs/audit-logging))
- constraint (evidence: [https://docs.cloud.google.com/resource-manager/docs/analyze-move](https://docs.cloud.google.com/resource-manager/docs/analyze-move), [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org), [https://docs.cloud.google.com/resource-manager/docs/audit-logging](https://docs.cloud.google.com/resource-manager/docs/audit-logging))
- firewall (evidence: [https://docs.cloud.google.com/resource-manager/docs/analyze-move](https://docs.cloud.google.com/resource-manager/docs/analyze-move), [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org), [https://docs.cloud.google.com/resource-manager/docs/audit-logging](https://docs.cloud.google.com/resource-manager/docs/audit-logging))
- iam (evidence: [https://docs.cloud.google.com/resource-manager/docs/analyze-move](https://docs.cloud.google.com/resource-manager/docs/analyze-move), [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org), [https://docs.cloud.google.com/resource-manager/docs/audit-logging](https://docs.cloud.google.com/resource-manager/docs/audit-logging))
- key (evidence: [https://docs.cloud.google.com/resource-manager/docs/analyze-move](https://docs.cloud.google.com/resource-manager/docs/analyze-move), [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org), [https://docs.cloud.google.com/resource-manager/docs/audit-logging](https://docs.cloud.google.com/resource-manager/docs/audit-logging))
- logging (evidence: [https://docs.cloud.google.com/resource-manager/docs/analyze-move](https://docs.cloud.google.com/resource-manager/docs/analyze-move), [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org), [https://docs.cloud.google.com/resource-manager/docs/audit-logging](https://docs.cloud.google.com/resource-manager/docs/audit-logging))
- permission (evidence: [https://docs.cloud.google.com/resource-manager/docs/analyze-move](https://docs.cloud.google.com/resource-manager/docs/analyze-move), [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org), [https://docs.cloud.google.com/resource-manager/docs/audit-logging](https://docs.cloud.google.com/resource-manager/docs/audit-logging))
- policy (evidence: [https://docs.cloud.google.com/resource-manager/docs/analyze-move](https://docs.cloud.google.com/resource-manager/docs/analyze-move), [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org), [https://docs.cloud.google.com/resource-manager/docs/audit-logging](https://docs.cloud.google.com/resource-manager/docs/audit-logging))
- role (evidence: [https://docs.cloud.google.com/resource-manager/docs/analyze-move](https://docs.cloud.google.com/resource-manager/docs/analyze-move), [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org), [https://docs.cloud.google.com/resource-manager/docs/audit-logging](https://docs.cloud.google.com/resource-manager/docs/audit-logging))
- security (evidence: [https://docs.cloud.google.com/resource-manager/docs/analyze-move](https://docs.cloud.google.com/resource-manager/docs/analyze-move), [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org), [https://docs.cloud.google.com/resource-manager/docs/audit-logging](https://docs.cloud.google.com/resource-manager/docs/audit-logging))

## Official Evidence

- [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org)
- [https://docs.cloud.google.com/resource-manager/docs/analyze-move](https://docs.cloud.google.com/resource-manager/docs/analyze-move)
- [https://docs.cloud.google.com/resource-manager/docs/audit-logging](https://docs.cloud.google.com/resource-manager/docs/audit-logging)
