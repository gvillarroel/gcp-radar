# Signed access requests

Product: Access Approval
Feature slug: `signed-access-requests`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Access Approval can cryptographically sign access requests using a Google-managed or customer-provided key to verify approval integrity.

## Lifecycle

- Latest feature date: 2021-12-13
- Deprecation date: none recorded
- Status: feature_observed

## IAM

Explicit IAM evidence was found in the supporting documentation.

Roles:

- `roles/accessapproval.approver`
- `roles/accessapproval.configEditor`

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-google-keys](https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-google-keys), [https://docs.cloud.google.com/assured-workloads/access-approval/docs/validate-request-signature](https://docs.cloud.google.com/assured-workloads/access-approval/docs/validate-request-signature), [https://docs.cloud.google.com/assured-workloads/access-approval/docs/overview](https://docs.cloud.google.com/assured-workloads/access-approval/docs/overview))
- encrypt (evidence: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-google-keys](https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-google-keys), [https://docs.cloud.google.com/assured-workloads/access-approval/docs/validate-request-signature](https://docs.cloud.google.com/assured-workloads/access-approval/docs/validate-request-signature), [https://docs.cloud.google.com/assured-workloads/access-approval/docs/overview](https://docs.cloud.google.com/assured-workloads/access-approval/docs/overview))
- iam (evidence: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-google-keys](https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-google-keys), [https://docs.cloud.google.com/assured-workloads/access-approval/docs/validate-request-signature](https://docs.cloud.google.com/assured-workloads/access-approval/docs/validate-request-signature), [https://docs.cloud.google.com/assured-workloads/access-approval/docs/overview](https://docs.cloud.google.com/assured-workloads/access-approval/docs/overview))
- key (evidence: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-google-keys](https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-google-keys), [https://docs.cloud.google.com/assured-workloads/access-approval/docs/validate-request-signature](https://docs.cloud.google.com/assured-workloads/access-approval/docs/validate-request-signature), [https://docs.cloud.google.com/assured-workloads/access-approval/docs/overview](https://docs.cloud.google.com/assured-workloads/access-approval/docs/overview))
- kms (evidence: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-google-keys](https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-google-keys), [https://docs.cloud.google.com/assured-workloads/access-approval/docs/validate-request-signature](https://docs.cloud.google.com/assured-workloads/access-approval/docs/validate-request-signature), [https://docs.cloud.google.com/assured-workloads/access-approval/docs/overview](https://docs.cloud.google.com/assured-workloads/access-approval/docs/overview))
- permission (evidence: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-google-keys](https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-google-keys), [https://docs.cloud.google.com/assured-workloads/access-approval/docs/validate-request-signature](https://docs.cloud.google.com/assured-workloads/access-approval/docs/validate-request-signature), [https://docs.cloud.google.com/assured-workloads/access-approval/docs/overview](https://docs.cloud.google.com/assured-workloads/access-approval/docs/overview))
- role (evidence: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-google-keys](https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-google-keys), [https://docs.cloud.google.com/assured-workloads/access-approval/docs/validate-request-signature](https://docs.cloud.google.com/assured-workloads/access-approval/docs/validate-request-signature), [https://docs.cloud.google.com/assured-workloads/access-approval/docs/overview](https://docs.cloud.google.com/assured-workloads/access-approval/docs/overview))

## Official Evidence

- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/overview](https://docs.cloud.google.com/assured-workloads/access-approval/docs/overview)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-google-keys](https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-google-keys)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/validate-request-signature](https://docs.cloud.google.com/assured-workloads/access-approval/docs/validate-request-signature)
