# accessApprovals field in Access Transparency logs

Product: Access Approval
Feature slug: `accessapprovals-field-in-access-transparency-logs`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Access Transparency logs include an accessApprovals field that lists approvals granting access to enrolled resources.

## Lifecycle

- Latest feature date: 2021-03-24
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- armor
- auth
- certificate
- iam
- identity
- key
- kms
- logging
- policy
- private
- secret
- security

## Official Evidence

- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/AccessApprovalSettings](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/AccessApprovalSettings)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders/updateAccessApprovalSettings](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders/updateAccessApprovalSettings)
- [https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.types.UpdateAccessApprovalSettingsMessage](https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.types.UpdateAccessApprovalSettingsMessage)
