# Automatic IAM database login with AlloyDB Auth Proxy

Product: AlloyDB
Feature slug: `automatic-iam-database-login-with-alloydb-auth-proxy`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The AlloyDB Auth Proxy can automatically authenticate IAM-based database logins for the proxy's IAM account.

## Lifecycle

- Latest feature date: 2023-11-15
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/alloydb/docs/auth-proxy/overview](https://docs.cloud.google.com/alloydb/docs/auth-proxy/overview), [https://docs.cloud.google.com/alloydb/docs/connect-iam](https://docs.cloud.google.com/alloydb/docs/connect-iam), [https://docs.cloud.google.com/alloydb/docs/quickstart/connect-cloud-shell](https://docs.cloud.google.com/alloydb/docs/quickstart/connect-cloud-shell))
- auth (evidence: [https://docs.cloud.google.com/alloydb/docs/auth-proxy/overview](https://docs.cloud.google.com/alloydb/docs/auth-proxy/overview), [https://docs.cloud.google.com/alloydb/docs/connect-iam](https://docs.cloud.google.com/alloydb/docs/connect-iam), [https://docs.cloud.google.com/alloydb/docs/quickstart/connect-cloud-shell](https://docs.cloud.google.com/alloydb/docs/quickstart/connect-cloud-shell))
- authorization (evidence: [https://docs.cloud.google.com/alloydb/docs/auth-proxy/overview](https://docs.cloud.google.com/alloydb/docs/auth-proxy/overview), [https://docs.cloud.google.com/alloydb/docs/connect-iam](https://docs.cloud.google.com/alloydb/docs/connect-iam), [https://docs.cloud.google.com/alloydb/docs/quickstart/connect-cloud-shell](https://docs.cloud.google.com/alloydb/docs/quickstart/connect-cloud-shell))
- credential (evidence: [https://docs.cloud.google.com/alloydb/docs/auth-proxy/overview](https://docs.cloud.google.com/alloydb/docs/auth-proxy/overview), [https://docs.cloud.google.com/alloydb/docs/connect-iam](https://docs.cloud.google.com/alloydb/docs/connect-iam), [https://docs.cloud.google.com/alloydb/docs/quickstart/connect-cloud-shell](https://docs.cloud.google.com/alloydb/docs/quickstart/connect-cloud-shell))
- encrypt (evidence: [https://docs.cloud.google.com/alloydb/docs/auth-proxy/overview](https://docs.cloud.google.com/alloydb/docs/auth-proxy/overview), [https://docs.cloud.google.com/alloydb/docs/connect-iam](https://docs.cloud.google.com/alloydb/docs/connect-iam), [https://docs.cloud.google.com/alloydb/docs/quickstart/connect-cloud-shell](https://docs.cloud.google.com/alloydb/docs/quickstart/connect-cloud-shell))
- iam (evidence: [https://docs.cloud.google.com/alloydb/docs/auth-proxy/overview](https://docs.cloud.google.com/alloydb/docs/auth-proxy/overview), [https://docs.cloud.google.com/alloydb/docs/connect-iam](https://docs.cloud.google.com/alloydb/docs/connect-iam), [https://docs.cloud.google.com/alloydb/docs/quickstart/connect-cloud-shell](https://docs.cloud.google.com/alloydb/docs/quickstart/connect-cloud-shell))
- identity (evidence: [https://docs.cloud.google.com/alloydb/docs/auth-proxy/overview](https://docs.cloud.google.com/alloydb/docs/auth-proxy/overview), [https://docs.cloud.google.com/alloydb/docs/connect-iam](https://docs.cloud.google.com/alloydb/docs/connect-iam), [https://docs.cloud.google.com/alloydb/docs/quickstart/connect-cloud-shell](https://docs.cloud.google.com/alloydb/docs/quickstart/connect-cloud-shell))
- permission (evidence: [https://docs.cloud.google.com/alloydb/docs/auth-proxy/overview](https://docs.cloud.google.com/alloydb/docs/auth-proxy/overview), [https://docs.cloud.google.com/alloydb/docs/connect-iam](https://docs.cloud.google.com/alloydb/docs/connect-iam), [https://docs.cloud.google.com/alloydb/docs/quickstart/connect-cloud-shell](https://docs.cloud.google.com/alloydb/docs/quickstart/connect-cloud-shell))
- role (evidence: [https://docs.cloud.google.com/alloydb/docs/auth-proxy/overview](https://docs.cloud.google.com/alloydb/docs/auth-proxy/overview), [https://docs.cloud.google.com/alloydb/docs/connect-iam](https://docs.cloud.google.com/alloydb/docs/connect-iam), [https://docs.cloud.google.com/alloydb/docs/quickstart/connect-cloud-shell](https://docs.cloud.google.com/alloydb/docs/quickstart/connect-cloud-shell))
- security (evidence: [https://docs.cloud.google.com/alloydb/docs/auth-proxy/overview](https://docs.cloud.google.com/alloydb/docs/auth-proxy/overview), [https://docs.cloud.google.com/alloydb/docs/connect-iam](https://docs.cloud.google.com/alloydb/docs/connect-iam), [https://docs.cloud.google.com/alloydb/docs/quickstart/connect-cloud-shell](https://docs.cloud.google.com/alloydb/docs/quickstart/connect-cloud-shell))
- token (evidence: [https://docs.cloud.google.com/alloydb/docs/auth-proxy/overview](https://docs.cloud.google.com/alloydb/docs/auth-proxy/overview), [https://docs.cloud.google.com/alloydb/docs/connect-iam](https://docs.cloud.google.com/alloydb/docs/connect-iam), [https://docs.cloud.google.com/alloydb/docs/quickstart/connect-cloud-shell](https://docs.cloud.google.com/alloydb/docs/quickstart/connect-cloud-shell))

## Official Evidence

- [https://docs.cloud.google.com/alloydb/docs/auth-proxy/overview](https://docs.cloud.google.com/alloydb/docs/auth-proxy/overview)
- [https://docs.cloud.google.com/alloydb/docs/connect-iam](https://docs.cloud.google.com/alloydb/docs/connect-iam)
- [https://docs.cloud.google.com/alloydb/docs/quickstart/connect-cloud-shell](https://docs.cloud.google.com/alloydb/docs/quickstart/connect-cloud-shell)
