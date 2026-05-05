# Service agent quota and billing attribution

Product: Workflows
Feature slug: `service-agent-quota-and-billing-attribution`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The Cloud Workflows service agent can use serviceusage.services.use so API calls consume quota and apply billing to the correct project.

## Lifecycle

- Latest feature date: 2023-05-01
- Deprecation date: none recorded
- Status: feature_observed

## IAM

Explicit IAM evidence was found in the supporting documentation.

Roles:

- `roles/accessapproval.admin`
- `roles/accessapproval.approver`
- `roles/accessapproval.configEditor`

Permissions:

- `accessapproval.requests.approve`
- `accessapproval.requests.dismiss`
- `accessapproval.requests.get`
- `accessapproval.requests.invalidate`
- `accessapproval.requests.list`
- `accessapproval.serviceAccounts.get`
- `accessapproval.settings.delete`
- `accessapproval.settings.get`
- `accessapproval.settings.update`
- `resourcemanager.projects.get`
- `resourcemanager.projects.list`

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/serviceusage](https://docs.cloud.google.com/iam/docs/roles-permissions/serviceusage), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/roles-permissions/workflows](https://docs.cloud.google.com/iam/docs/roles-permissions/workflows))
- allow (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/serviceusage](https://docs.cloud.google.com/iam/docs/roles-permissions/serviceusage), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/roles-permissions/workflows](https://docs.cloud.google.com/iam/docs/roles-permissions/workflows))
- armor (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/serviceusage](https://docs.cloud.google.com/iam/docs/roles-permissions/serviceusage), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/roles-permissions/workflows](https://docs.cloud.google.com/iam/docs/roles-permissions/workflows))
- audit (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/serviceusage](https://docs.cloud.google.com/iam/docs/roles-permissions/serviceusage), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/roles-permissions/workflows](https://docs.cloud.google.com/iam/docs/roles-permissions/workflows))
- auth (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/serviceusage](https://docs.cloud.google.com/iam/docs/roles-permissions/serviceusage), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/roles-permissions/workflows](https://docs.cloud.google.com/iam/docs/roles-permissions/workflows))
- authorization (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/serviceusage](https://docs.cloud.google.com/iam/docs/roles-permissions/serviceusage), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/roles-permissions/workflows](https://docs.cloud.google.com/iam/docs/roles-permissions/workflows))
- certificate (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/serviceusage](https://docs.cloud.google.com/iam/docs/roles-permissions/serviceusage), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/roles-permissions/workflows](https://docs.cloud.google.com/iam/docs/roles-permissions/workflows))
- confidential (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/serviceusage](https://docs.cloud.google.com/iam/docs/roles-permissions/serviceusage), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/roles-permissions/workflows](https://docs.cloud.google.com/iam/docs/roles-permissions/workflows))
- constraint (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/serviceusage](https://docs.cloud.google.com/iam/docs/roles-permissions/serviceusage), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/roles-permissions/workflows](https://docs.cloud.google.com/iam/docs/roles-permissions/workflows))
- credential (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/serviceusage](https://docs.cloud.google.com/iam/docs/roles-permissions/serviceusage), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/roles-permissions/workflows](https://docs.cloud.google.com/iam/docs/roles-permissions/workflows))
- encrypt (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/serviceusage](https://docs.cloud.google.com/iam/docs/roles-permissions/serviceusage), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/roles-permissions/workflows](https://docs.cloud.google.com/iam/docs/roles-permissions/workflows))
- firewall (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/serviceusage](https://docs.cloud.google.com/iam/docs/roles-permissions/serviceusage), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/roles-permissions/workflows](https://docs.cloud.google.com/iam/docs/roles-permissions/workflows))
- iam (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/serviceusage](https://docs.cloud.google.com/iam/docs/roles-permissions/serviceusage), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/roles-permissions/workflows](https://docs.cloud.google.com/iam/docs/roles-permissions/workflows))
- identity (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/serviceusage](https://docs.cloud.google.com/iam/docs/roles-permissions/serviceusage), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/roles-permissions/workflows](https://docs.cloud.google.com/iam/docs/roles-permissions/workflows))
- key (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/serviceusage](https://docs.cloud.google.com/iam/docs/roles-permissions/serviceusage), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/roles-permissions/workflows](https://docs.cloud.google.com/iam/docs/roles-permissions/workflows))
- kms (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/serviceusage](https://docs.cloud.google.com/iam/docs/roles-permissions/serviceusage), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/roles-permissions/workflows](https://docs.cloud.google.com/iam/docs/roles-permissions/workflows))
- logging (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/serviceusage](https://docs.cloud.google.com/iam/docs/roles-permissions/serviceusage), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/roles-permissions/workflows](https://docs.cloud.google.com/iam/docs/roles-permissions/workflows))
- permission (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/serviceusage](https://docs.cloud.google.com/iam/docs/roles-permissions/serviceusage), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/roles-permissions/workflows](https://docs.cloud.google.com/iam/docs/roles-permissions/workflows))
- policy (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/serviceusage](https://docs.cloud.google.com/iam/docs/roles-permissions/serviceusage), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/roles-permissions/workflows](https://docs.cloud.google.com/iam/docs/roles-permissions/workflows))
- private (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/serviceusage](https://docs.cloud.google.com/iam/docs/roles-permissions/serviceusage), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/roles-permissions/workflows](https://docs.cloud.google.com/iam/docs/roles-permissions/workflows))
- role (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/serviceusage](https://docs.cloud.google.com/iam/docs/roles-permissions/serviceusage), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/roles-permissions/workflows](https://docs.cloud.google.com/iam/docs/roles-permissions/workflows))
- secret (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/serviceusage](https://docs.cloud.google.com/iam/docs/roles-permissions/serviceusage), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/roles-permissions/workflows](https://docs.cloud.google.com/iam/docs/roles-permissions/workflows))
- security (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/serviceusage](https://docs.cloud.google.com/iam/docs/roles-permissions/serviceusage), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/roles-permissions/workflows](https://docs.cloud.google.com/iam/docs/roles-permissions/workflows))
- threat (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/serviceusage](https://docs.cloud.google.com/iam/docs/roles-permissions/serviceusage), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/roles-permissions/workflows](https://docs.cloud.google.com/iam/docs/roles-permissions/workflows))
- token (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/serviceusage](https://docs.cloud.google.com/iam/docs/roles-permissions/serviceusage), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/iam/docs/roles-permissions/workflows](https://docs.cloud.google.com/iam/docs/roles-permissions/workflows))

## Official Evidence

- [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)
- [https://docs.cloud.google.com/iam/docs/roles-permissions/serviceusage](https://docs.cloud.google.com/iam/docs/roles-permissions/serviceusage)
- [https://docs.cloud.google.com/iam/docs/roles-permissions/workflows](https://docs.cloud.google.com/iam/docs/roles-permissions/workflows)
