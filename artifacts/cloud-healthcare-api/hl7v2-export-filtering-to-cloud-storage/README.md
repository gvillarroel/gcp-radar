# HL7v2 export filtering to Cloud Storage

Product: Cloud Healthcare API
Feature slug: `hl7v2-export-filtering-to-cloud-storage`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Exporting HL7v2 messages to Cloud Storage now supports a filter option and is generally available in preview; Exporting HL7v2 messages to Cloud Storage now supports a filter option and is generally available in preview.

## Lifecycle

- Latest feature date: 2024-05-07
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

- access
- allow
- auth
- authorization
- iam
- permission
- policy
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/healthcare-api/docs/access-control](https://docs.cloud.google.com/healthcare-api/docs/access-control)
- [https://docs.cloud.google.com/healthcare-api/docs/how-tos/mllp-adapter](https://docs.cloud.google.com/healthcare-api/docs/how-tos/mllp-adapter)
- [https://docs.cloud.google.com/healthcare-api/docs/reference/rpc](https://docs.cloud.google.com/healthcare-api/docs/reference/rpc)
