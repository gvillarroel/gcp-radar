# HL7v2 message import from Cloud Storage

Product: Cloud Healthcare API
Feature slug: `hl7v2-message-import-from-cloud-storage`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Cloud Healthcare API now supports importing HL7v2 messages from Cloud Storage.

## Lifecycle

- Latest feature date: 2020-08-03
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
- auth
- authorization
- credential
- iam
- key
- logging
- permission
- policy
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/healthcare-api/docs/access-control](https://docs.cloud.google.com/healthcare-api/docs/access-control)
- [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export)
- [https://docs.cloud.google.com/healthcare-api/docs/how-tos/mllp-adapter](https://docs.cloud.google.com/healthcare-api/docs/how-tos/mllp-adapter)
