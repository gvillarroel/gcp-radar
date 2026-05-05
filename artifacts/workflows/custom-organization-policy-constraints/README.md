# Custom organization policy constraints

Product: Workflows
Feature slug: `custom-organization-policy-constraints`
Coverage: `LOW`
IAM mapping: `explicit`

## Technical Summary

Workflows supports creating custom organization policy constraints for governance control.

## Lifecycle

- Latest feature date: 2025-02-06
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

- access (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/workflows/docs/create-workflow-gcloud](https://docs.cloud.google.com/workflows/docs/create-workflow-gcloud), [https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets](https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets))
- allow (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/workflows/docs/create-workflow-gcloud](https://docs.cloud.google.com/workflows/docs/create-workflow-gcloud), [https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets](https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets))
- armor (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/workflows/docs/create-workflow-gcloud](https://docs.cloud.google.com/workflows/docs/create-workflow-gcloud), [https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets](https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets))
- audit (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/workflows/docs/create-workflow-gcloud](https://docs.cloud.google.com/workflows/docs/create-workflow-gcloud), [https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets](https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets))
- auth (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/workflows/docs/create-workflow-gcloud](https://docs.cloud.google.com/workflows/docs/create-workflow-gcloud), [https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets](https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets))
- authorization (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/workflows/docs/create-workflow-gcloud](https://docs.cloud.google.com/workflows/docs/create-workflow-gcloud), [https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets](https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets))
- certificate (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/workflows/docs/create-workflow-gcloud](https://docs.cloud.google.com/workflows/docs/create-workflow-gcloud), [https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets](https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets))
- confidential (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/workflows/docs/create-workflow-gcloud](https://docs.cloud.google.com/workflows/docs/create-workflow-gcloud), [https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets](https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets))
- constraint (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/workflows/docs/create-workflow-gcloud](https://docs.cloud.google.com/workflows/docs/create-workflow-gcloud), [https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets](https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets))
- credential (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/workflows/docs/create-workflow-gcloud](https://docs.cloud.google.com/workflows/docs/create-workflow-gcloud), [https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets](https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets))
- encrypt (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/workflows/docs/create-workflow-gcloud](https://docs.cloud.google.com/workflows/docs/create-workflow-gcloud), [https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets](https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets))
- firewall (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/workflows/docs/create-workflow-gcloud](https://docs.cloud.google.com/workflows/docs/create-workflow-gcloud), [https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets](https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets))
- iam (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/workflows/docs/create-workflow-gcloud](https://docs.cloud.google.com/workflows/docs/create-workflow-gcloud), [https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets](https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets))
- identity (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/workflows/docs/create-workflow-gcloud](https://docs.cloud.google.com/workflows/docs/create-workflow-gcloud), [https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets](https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets))
- key (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/workflows/docs/create-workflow-gcloud](https://docs.cloud.google.com/workflows/docs/create-workflow-gcloud), [https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets](https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets))
- kms (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/workflows/docs/create-workflow-gcloud](https://docs.cloud.google.com/workflows/docs/create-workflow-gcloud), [https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets](https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets))
- logging (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/workflows/docs/create-workflow-gcloud](https://docs.cloud.google.com/workflows/docs/create-workflow-gcloud), [https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets](https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets))
- permission (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/workflows/docs/create-workflow-gcloud](https://docs.cloud.google.com/workflows/docs/create-workflow-gcloud), [https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets](https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets))
- policy (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/workflows/docs/create-workflow-gcloud](https://docs.cloud.google.com/workflows/docs/create-workflow-gcloud), [https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets](https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets))
- private (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/workflows/docs/create-workflow-gcloud](https://docs.cloud.google.com/workflows/docs/create-workflow-gcloud), [https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets](https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets))
- role (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/workflows/docs/create-workflow-gcloud](https://docs.cloud.google.com/workflows/docs/create-workflow-gcloud), [https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets](https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets))
- secret (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/workflows/docs/create-workflow-gcloud](https://docs.cloud.google.com/workflows/docs/create-workflow-gcloud), [https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets](https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets))
- security (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/workflows/docs/create-workflow-gcloud](https://docs.cloud.google.com/workflows/docs/create-workflow-gcloud), [https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets](https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets))
- threat (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/workflows/docs/create-workflow-gcloud](https://docs.cloud.google.com/workflows/docs/create-workflow-gcloud), [https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets](https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets))
- token (evidence: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/workflows/docs/create-workflow-gcloud](https://docs.cloud.google.com/workflows/docs/create-workflow-gcloud), [https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets](https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets))

## Official Evidence

- [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)
- [https://docs.cloud.google.com/workflows/docs/create-workflow-gcloud](https://docs.cloud.google.com/workflows/docs/create-workflow-gcloud)
- [https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets](https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
