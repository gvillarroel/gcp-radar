# run.app URL disablement

Product: Cloud Run
Feature slug: `run-app-url-disablement`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud Run can disable a service's built-in run.app URL so traffic only enters through explicitly configured paths.

## Lifecycle

- Latest feature date: 2025-07-16
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- audit
- auth
- certificate
- credential
- encrypt
- iam
- identity
- key
- logging
- secret
- token

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/run/latest/changelog](https://docs.cloud.google.com/python/docs/reference/run/latest/changelog)
- [https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run](https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run)
- [https://docs.cloud.google.com/run/docs/triggering/https-request](https://docs.cloud.google.com/run/docs/triggering/https-request)
