# CSR signer authorization

Product: Google Kubernetes Engine
Feature slug: `csr-signer-authorization`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The certificatesigningrequests/approval API now requires permission to approve a CSR for the specific signer requested.

## Lifecycle

- Latest feature date: 2020-09-08
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- audit
- auth
- authorization
- certificate
- constraint
- credential
- iam
- key
- logging
- permission
- policy
- role
- secret
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
