# Cloud SQL Studio

Product: Gemini
Feature slug: `cloud-sql-studio`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Cloud SQL Studio lets authorized users run SQL queries and manipulate data from the Google Cloud console.

## Lifecycle

- Latest feature date: 2024-04-09
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
- credential
- iam
- identity
- logging
- permission
- policy
- role
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/gemini/docs/codeassist/android-studio-overview](https://docs.cloud.google.com/gemini/docs/codeassist/android-studio-overview)
- [https://docs.cloud.google.com/gemini/docs/codeassist/overview](https://docs.cloud.google.com/gemini/docs/codeassist/overview)
- [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control)
- [https://docs.cloud.google.com/python/docs/reference/google-cloud-geminidataanalytics/latest/google.cloud.geminidataanalytics_v1alpha.types](https://docs.cloud.google.com/python/docs/reference/google-cloud-geminidataanalytics/latest/google.cloud.geminidataanalytics_v1alpha.types)
