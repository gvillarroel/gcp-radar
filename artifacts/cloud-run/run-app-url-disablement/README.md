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

- access (evidence: [https://docs.cloud.google.com/run/docs/triggering/https-request](https://docs.cloud.google.com/run/docs/triggering/https-request), [https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run](https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run), [https://docs.cloud.google.com/python/docs/reference/run/latest/changelog](https://docs.cloud.google.com/python/docs/reference/run/latest/changelog))
- allow (evidence: [https://docs.cloud.google.com/run/docs/triggering/https-request](https://docs.cloud.google.com/run/docs/triggering/https-request), [https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run](https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run), [https://docs.cloud.google.com/python/docs/reference/run/latest/changelog](https://docs.cloud.google.com/python/docs/reference/run/latest/changelog))
- audit (evidence: [https://docs.cloud.google.com/run/docs/triggering/https-request](https://docs.cloud.google.com/run/docs/triggering/https-request), [https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run](https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run), [https://docs.cloud.google.com/python/docs/reference/run/latest/changelog](https://docs.cloud.google.com/python/docs/reference/run/latest/changelog))
- auth (evidence: [https://docs.cloud.google.com/run/docs/triggering/https-request](https://docs.cloud.google.com/run/docs/triggering/https-request), [https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run](https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run), [https://docs.cloud.google.com/python/docs/reference/run/latest/changelog](https://docs.cloud.google.com/python/docs/reference/run/latest/changelog))
- certificate (evidence: [https://docs.cloud.google.com/run/docs/triggering/https-request](https://docs.cloud.google.com/run/docs/triggering/https-request), [https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run](https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run), [https://docs.cloud.google.com/python/docs/reference/run/latest/changelog](https://docs.cloud.google.com/python/docs/reference/run/latest/changelog))
- credential (evidence: [https://docs.cloud.google.com/run/docs/triggering/https-request](https://docs.cloud.google.com/run/docs/triggering/https-request), [https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run](https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run), [https://docs.cloud.google.com/python/docs/reference/run/latest/changelog](https://docs.cloud.google.com/python/docs/reference/run/latest/changelog))
- encrypt (evidence: [https://docs.cloud.google.com/run/docs/triggering/https-request](https://docs.cloud.google.com/run/docs/triggering/https-request), [https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run](https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run), [https://docs.cloud.google.com/python/docs/reference/run/latest/changelog](https://docs.cloud.google.com/python/docs/reference/run/latest/changelog))
- iam (evidence: [https://docs.cloud.google.com/run/docs/triggering/https-request](https://docs.cloud.google.com/run/docs/triggering/https-request), [https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run](https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run), [https://docs.cloud.google.com/python/docs/reference/run/latest/changelog](https://docs.cloud.google.com/python/docs/reference/run/latest/changelog))
- identity (evidence: [https://docs.cloud.google.com/run/docs/triggering/https-request](https://docs.cloud.google.com/run/docs/triggering/https-request), [https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run](https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run), [https://docs.cloud.google.com/python/docs/reference/run/latest/changelog](https://docs.cloud.google.com/python/docs/reference/run/latest/changelog))
- key (evidence: [https://docs.cloud.google.com/run/docs/triggering/https-request](https://docs.cloud.google.com/run/docs/triggering/https-request), [https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run](https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run), [https://docs.cloud.google.com/python/docs/reference/run/latest/changelog](https://docs.cloud.google.com/python/docs/reference/run/latest/changelog))
- logging (evidence: [https://docs.cloud.google.com/run/docs/triggering/https-request](https://docs.cloud.google.com/run/docs/triggering/https-request), [https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run](https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run), [https://docs.cloud.google.com/python/docs/reference/run/latest/changelog](https://docs.cloud.google.com/python/docs/reference/run/latest/changelog))
- secret (evidence: [https://docs.cloud.google.com/run/docs/triggering/https-request](https://docs.cloud.google.com/run/docs/triggering/https-request), [https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run](https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run), [https://docs.cloud.google.com/python/docs/reference/run/latest/changelog](https://docs.cloud.google.com/python/docs/reference/run/latest/changelog))
- token (evidence: [https://docs.cloud.google.com/run/docs/triggering/https-request](https://docs.cloud.google.com/run/docs/triggering/https-request), [https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run](https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run), [https://docs.cloud.google.com/python/docs/reference/run/latest/changelog](https://docs.cloud.google.com/python/docs/reference/run/latest/changelog))

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/run/latest/changelog](https://docs.cloud.google.com/python/docs/reference/run/latest/changelog)
- [https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run](https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run)
- [https://docs.cloud.google.com/run/docs/triggering/https-request](https://docs.cloud.google.com/run/docs/triggering/https-request)
