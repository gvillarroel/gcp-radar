# v1beta1 endpoint

Product: Access Approval
Feature slug: `v1beta1-endpoint`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The v1beta1 endpoint is the beta Access Approval API endpoint being retired in favor of v1; deprecated on 2020-08-01.

## Lifecycle

- Latest feature date: 2020-01-27
- Deprecation date: 2020-08-01
- Status: deprecation_noted

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- credential

## Official Evidence

- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/authentication](https://docs.cloud.google.com/assured-workloads/access-approval/docs/authentication)
- [https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.AccessApprovalAsyncClient](https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.AccessApprovalAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.AccessApprovalClient](https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.AccessApprovalClient)

## Validation Findings

- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
