# Project-isolated certificate management

Product: Certificate Manager
Feature slug: `project-isolated-certificate-management`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Certificate Manager provides project-isolated certificate management through `PER_PROJECT_RECORD` DNS authorizations, which are used to independently manage certificates across multiple Google Cloud projects. In this model, DNS authorizations and certificates are created under a target Google Cloud project (including `/v1/projects/{PROJECT_ID}/...` API paths), and Google states those project resources are self-contained and do not interact with those in other projects. This makes certificate and validation state effectively partitioned by project when using per-project DNS authorization.

## Lifecycle

- Latest feature date: 2024-02-22
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth
- authorization
- certificate
- iam

## Official Evidence

- [https://docs.cloud.google.com/certificate-manager/docs/certificates](https://docs.cloud.google.com/certificate-manager/docs/certificates)
- [https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-dns-auth-cross-reg](https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-dns-auth-cross-reg)
- [https://docs.cloud.google.com/certificate-manager/docs/dns-authorizations](https://docs.cloud.google.com/certificate-manager/docs/dns-authorizations)
