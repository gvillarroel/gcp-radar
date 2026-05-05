# DeleteAccessApprovalSettings API

Product: Access Approval
Feature slug: `deleteaccessapprovalsettings-api`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Access Approval provides a DeleteAccessApprovalSettings API to remove approval settings.

## Lifecycle

- Latest feature date: 2020-01-27
- Deprecation date: none recorded
- Status: feature_observed

## IAM

Explicit IAM evidence was found in the supporting documentation.

Roles:

- `roles/accessapproval.admin`
- `roles/accessapproval.configEditor`

Permissions:

- `accessapproval.settings.delete`

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders/deleteAccessApprovalSettings](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders/deleteAccessApprovalSettings), [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations/deleteAccessApprovalSettings](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations/deleteAccessApprovalSettings), [https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.types.DeleteAccessApprovalSettingsMessage](https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.types.DeleteAccessApprovalSettingsMessage))
- auth (evidence: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders/deleteAccessApprovalSettings](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders/deleteAccessApprovalSettings), [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations/deleteAccessApprovalSettings](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations/deleteAccessApprovalSettings), [https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.types.DeleteAccessApprovalSettingsMessage](https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.types.DeleteAccessApprovalSettingsMessage))
- authorization (evidence: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders/deleteAccessApprovalSettings](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders/deleteAccessApprovalSettings), [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations/deleteAccessApprovalSettings](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations/deleteAccessApprovalSettings), [https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.types.DeleteAccessApprovalSettingsMessage](https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.types.DeleteAccessApprovalSettingsMessage))
- iam (evidence: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders/deleteAccessApprovalSettings](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders/deleteAccessApprovalSettings), [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations/deleteAccessApprovalSettings](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations/deleteAccessApprovalSettings), [https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.types.DeleteAccessApprovalSettingsMessage](https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.types.DeleteAccessApprovalSettingsMessage))
- permission (evidence: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders/deleteAccessApprovalSettings](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders/deleteAccessApprovalSettings), [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations/deleteAccessApprovalSettings](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations/deleteAccessApprovalSettings), [https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.types.DeleteAccessApprovalSettingsMessage](https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.types.DeleteAccessApprovalSettingsMessage))
- security (evidence: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders/deleteAccessApprovalSettings](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders/deleteAccessApprovalSettings), [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations/deleteAccessApprovalSettings](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations/deleteAccessApprovalSettings), [https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.types.DeleteAccessApprovalSettingsMessage](https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.types.DeleteAccessApprovalSettingsMessage))

## Official Evidence

- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders/deleteAccessApprovalSettings](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders/deleteAccessApprovalSettings)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations/deleteAccessApprovalSettings](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations/deleteAccessApprovalSettings)
- [https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.types.DeleteAccessApprovalSettingsMessage](https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.types.DeleteAccessApprovalSettingsMessage)
