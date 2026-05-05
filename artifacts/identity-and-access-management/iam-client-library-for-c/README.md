# IAM client library for C++

Product: Identity and Access Management
Feature slug: `iam-client-library-for-c`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

A C++ client library is available for the IAM API and the Service Account Credentials API.

## Lifecycle

- Latest feature date: 2021-07-22
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

- access (evidence: [https://docs.cloud.google.com/iam/docs/client-libraries](https://docs.cloud.google.com/iam/docs/client-libraries), [https://docs.cloud.google.com/iam/docs/apis](https://docs.cloud.google.com/iam/docs/apis), [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log), [https://docs.cloud.google.com/iam/docs/creating-custom-roles](https://docs.cloud.google.com/iam/docs/creating-custom-roles))
- allow (evidence: [https://docs.cloud.google.com/iam/docs/client-libraries](https://docs.cloud.google.com/iam/docs/client-libraries), [https://docs.cloud.google.com/iam/docs/apis](https://docs.cloud.google.com/iam/docs/apis), [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log), [https://docs.cloud.google.com/iam/docs/creating-custom-roles](https://docs.cloud.google.com/iam/docs/creating-custom-roles))
- armor (evidence: [https://docs.cloud.google.com/iam/docs/client-libraries](https://docs.cloud.google.com/iam/docs/client-libraries), [https://docs.cloud.google.com/iam/docs/apis](https://docs.cloud.google.com/iam/docs/apis), [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log), [https://docs.cloud.google.com/iam/docs/creating-custom-roles](https://docs.cloud.google.com/iam/docs/creating-custom-roles))
- audit (evidence: [https://docs.cloud.google.com/iam/docs/client-libraries](https://docs.cloud.google.com/iam/docs/client-libraries), [https://docs.cloud.google.com/iam/docs/apis](https://docs.cloud.google.com/iam/docs/apis), [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log), [https://docs.cloud.google.com/iam/docs/creating-custom-roles](https://docs.cloud.google.com/iam/docs/creating-custom-roles))
- auth (evidence: [https://docs.cloud.google.com/iam/docs/client-libraries](https://docs.cloud.google.com/iam/docs/client-libraries), [https://docs.cloud.google.com/iam/docs/apis](https://docs.cloud.google.com/iam/docs/apis), [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log), [https://docs.cloud.google.com/iam/docs/creating-custom-roles](https://docs.cloud.google.com/iam/docs/creating-custom-roles))
- certificate (evidence: [https://docs.cloud.google.com/iam/docs/client-libraries](https://docs.cloud.google.com/iam/docs/client-libraries), [https://docs.cloud.google.com/iam/docs/apis](https://docs.cloud.google.com/iam/docs/apis), [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log), [https://docs.cloud.google.com/iam/docs/creating-custom-roles](https://docs.cloud.google.com/iam/docs/creating-custom-roles))
- credential (evidence: [https://docs.cloud.google.com/iam/docs/client-libraries](https://docs.cloud.google.com/iam/docs/client-libraries), [https://docs.cloud.google.com/iam/docs/apis](https://docs.cloud.google.com/iam/docs/apis), [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log), [https://docs.cloud.google.com/iam/docs/creating-custom-roles](https://docs.cloud.google.com/iam/docs/creating-custom-roles))
- encrypt (evidence: [https://docs.cloud.google.com/iam/docs/client-libraries](https://docs.cloud.google.com/iam/docs/client-libraries), [https://docs.cloud.google.com/iam/docs/apis](https://docs.cloud.google.com/iam/docs/apis), [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log), [https://docs.cloud.google.com/iam/docs/creating-custom-roles](https://docs.cloud.google.com/iam/docs/creating-custom-roles))
- firewall (evidence: [https://docs.cloud.google.com/iam/docs/client-libraries](https://docs.cloud.google.com/iam/docs/client-libraries), [https://docs.cloud.google.com/iam/docs/apis](https://docs.cloud.google.com/iam/docs/apis), [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log), [https://docs.cloud.google.com/iam/docs/creating-custom-roles](https://docs.cloud.google.com/iam/docs/creating-custom-roles))
- iam (evidence: [https://docs.cloud.google.com/iam/docs/client-libraries](https://docs.cloud.google.com/iam/docs/client-libraries), [https://docs.cloud.google.com/iam/docs/apis](https://docs.cloud.google.com/iam/docs/apis), [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log), [https://docs.cloud.google.com/iam/docs/creating-custom-roles](https://docs.cloud.google.com/iam/docs/creating-custom-roles))
- identity (evidence: [https://docs.cloud.google.com/iam/docs/client-libraries](https://docs.cloud.google.com/iam/docs/client-libraries), [https://docs.cloud.google.com/iam/docs/apis](https://docs.cloud.google.com/iam/docs/apis), [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log), [https://docs.cloud.google.com/iam/docs/creating-custom-roles](https://docs.cloud.google.com/iam/docs/creating-custom-roles))
- key (evidence: [https://docs.cloud.google.com/iam/docs/client-libraries](https://docs.cloud.google.com/iam/docs/client-libraries), [https://docs.cloud.google.com/iam/docs/apis](https://docs.cloud.google.com/iam/docs/apis), [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log), [https://docs.cloud.google.com/iam/docs/creating-custom-roles](https://docs.cloud.google.com/iam/docs/creating-custom-roles))
- kms (evidence: [https://docs.cloud.google.com/iam/docs/client-libraries](https://docs.cloud.google.com/iam/docs/client-libraries), [https://docs.cloud.google.com/iam/docs/apis](https://docs.cloud.google.com/iam/docs/apis), [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log), [https://docs.cloud.google.com/iam/docs/creating-custom-roles](https://docs.cloud.google.com/iam/docs/creating-custom-roles))
- logging (evidence: [https://docs.cloud.google.com/iam/docs/client-libraries](https://docs.cloud.google.com/iam/docs/client-libraries), [https://docs.cloud.google.com/iam/docs/apis](https://docs.cloud.google.com/iam/docs/apis), [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log), [https://docs.cloud.google.com/iam/docs/creating-custom-roles](https://docs.cloud.google.com/iam/docs/creating-custom-roles))
- permission (evidence: [https://docs.cloud.google.com/iam/docs/client-libraries](https://docs.cloud.google.com/iam/docs/client-libraries), [https://docs.cloud.google.com/iam/docs/apis](https://docs.cloud.google.com/iam/docs/apis), [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log), [https://docs.cloud.google.com/iam/docs/creating-custom-roles](https://docs.cloud.google.com/iam/docs/creating-custom-roles))
- policy (evidence: [https://docs.cloud.google.com/iam/docs/client-libraries](https://docs.cloud.google.com/iam/docs/client-libraries), [https://docs.cloud.google.com/iam/docs/apis](https://docs.cloud.google.com/iam/docs/apis), [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log), [https://docs.cloud.google.com/iam/docs/creating-custom-roles](https://docs.cloud.google.com/iam/docs/creating-custom-roles))
- private (evidence: [https://docs.cloud.google.com/iam/docs/client-libraries](https://docs.cloud.google.com/iam/docs/client-libraries), [https://docs.cloud.google.com/iam/docs/apis](https://docs.cloud.google.com/iam/docs/apis), [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log), [https://docs.cloud.google.com/iam/docs/creating-custom-roles](https://docs.cloud.google.com/iam/docs/creating-custom-roles))
- role (evidence: [https://docs.cloud.google.com/iam/docs/client-libraries](https://docs.cloud.google.com/iam/docs/client-libraries), [https://docs.cloud.google.com/iam/docs/apis](https://docs.cloud.google.com/iam/docs/apis), [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log), [https://docs.cloud.google.com/iam/docs/creating-custom-roles](https://docs.cloud.google.com/iam/docs/creating-custom-roles))
- secret (evidence: [https://docs.cloud.google.com/iam/docs/client-libraries](https://docs.cloud.google.com/iam/docs/client-libraries), [https://docs.cloud.google.com/iam/docs/apis](https://docs.cloud.google.com/iam/docs/apis), [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log), [https://docs.cloud.google.com/iam/docs/creating-custom-roles](https://docs.cloud.google.com/iam/docs/creating-custom-roles))
- security (evidence: [https://docs.cloud.google.com/iam/docs/client-libraries](https://docs.cloud.google.com/iam/docs/client-libraries), [https://docs.cloud.google.com/iam/docs/apis](https://docs.cloud.google.com/iam/docs/apis), [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log), [https://docs.cloud.google.com/iam/docs/creating-custom-roles](https://docs.cloud.google.com/iam/docs/creating-custom-roles))
- threat (evidence: [https://docs.cloud.google.com/iam/docs/client-libraries](https://docs.cloud.google.com/iam/docs/client-libraries), [https://docs.cloud.google.com/iam/docs/apis](https://docs.cloud.google.com/iam/docs/apis), [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log), [https://docs.cloud.google.com/iam/docs/creating-custom-roles](https://docs.cloud.google.com/iam/docs/creating-custom-roles))
- token (evidence: [https://docs.cloud.google.com/iam/docs/client-libraries](https://docs.cloud.google.com/iam/docs/client-libraries), [https://docs.cloud.google.com/iam/docs/apis](https://docs.cloud.google.com/iam/docs/apis), [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log), [https://docs.cloud.google.com/iam/docs/creating-custom-roles](https://docs.cloud.google.com/iam/docs/creating-custom-roles))

## Official Evidence

- [https://docs.cloud.google.com/iam/docs/apis](https://docs.cloud.google.com/iam/docs/apis)
- [https://docs.cloud.google.com/iam/docs/client-libraries](https://docs.cloud.google.com/iam/docs/client-libraries)
- [https://docs.cloud.google.com/iam/docs/creating-custom-roles](https://docs.cloud.google.com/iam/docs/creating-custom-roles)
- [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log)
