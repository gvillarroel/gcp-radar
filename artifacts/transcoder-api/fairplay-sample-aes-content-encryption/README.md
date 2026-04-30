# FairPlay SAMPLE-AES content encryption

Product: Transcoder API
Feature slug: `fairplay-sample-aes-content-encryption`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Added support in Transcoder API for FairPlay content encryption using SAMPLE-AES in HLS TS and HLS fMP4 outputs.

## Lifecycle

- Latest feature date: 2020-11-16
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

- access
- allow
- armor
- audit
- auth
- authorization
- certificate
- confidential
- constraint
- credential
- encrypt
- firewall
- iam
- identity
- key
- kms
- logging
- permission
- policy
- private
- role
- secret
- security
- threat
- token

## Official Evidence

- [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)
- [https://docs.cloud.google.com/transcoder/docs/concepts/overview](https://docs.cloud.google.com/transcoder/docs/concepts/overview)
- [https://docs.cloud.google.com/transcoder/docs/how-to/job-templates](https://docs.cloud.google.com/transcoder/docs/how-to/job-templates)
- [https://docs.cloud.google.com/transcoder/docs/reference/rest/v1/JobConfig](https://docs.cloud.google.com/transcoder/docs/reference/rest/v1/JobConfig)
