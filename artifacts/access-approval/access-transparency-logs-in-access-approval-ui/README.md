# Access Transparency logs in Access Approval UI

Product: Access Approval
Feature slug: `access-transparency-logs-in-access-approval-ui`
Coverage: `MEDIUM`
IAM mapping: `derived_from_permission_prefix`

## Technical Summary

The Access Approval UI lets users view Access Transparency logs associated with an approval request.

## Lifecycle

- Latest feature date: 2021-04-15
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No explicit feature-level IAM statement was found. Related IAM data is derived from product permission prefixes in the Step 05 inventory.

Derived permissions:

- `accessapproval.requests.approve`
- `accessapproval.requests.dismiss`
- `accessapproval.requests.get`
- `accessapproval.requests.invalidate`
- `accessapproval.requests.list`

## Security Capabilities

- access
- audit
- auth
- credential
- encrypt
- iam
- identity
- key
- logging
- role
- security

## Official Evidence

- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/access-transparency](https://docs.cloud.google.com/assured-workloads/access-approval/docs/access-transparency)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/overview](https://docs.cloud.google.com/assured-workloads/access-approval/docs/overview)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/view-historical-requests](https://docs.cloud.google.com/assured-workloads/access-approval/docs/view-historical-requests)
