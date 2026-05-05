# Cloud KMS Autokey

Product: Cloud Run
Feature slug: `cloud-kms-autokey`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Run supports Cloud KMS Autokey for encryption key management.

## Lifecycle

- Latest feature date: 2025-04-22
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- encrypt (evidence: [https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/overview](https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/overview), [https://docs.cloud.google.com/python/docs/reference/run/latest](https://docs.cloud.google.com/python/docs/reference/run/latest), [https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run](https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run))
- iam (evidence: [https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/overview](https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/overview), [https://docs.cloud.google.com/python/docs/reference/run/latest](https://docs.cloud.google.com/python/docs/reference/run/latest), [https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run](https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run))
- identity (evidence: [https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/overview](https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/overview), [https://docs.cloud.google.com/python/docs/reference/run/latest](https://docs.cloud.google.com/python/docs/reference/run/latest), [https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run](https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run))
- key (evidence: [https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/overview](https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/overview), [https://docs.cloud.google.com/python/docs/reference/run/latest](https://docs.cloud.google.com/python/docs/reference/run/latest), [https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run](https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run))
- kms (evidence: [https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/overview](https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/overview), [https://docs.cloud.google.com/python/docs/reference/run/latest](https://docs.cloud.google.com/python/docs/reference/run/latest), [https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run](https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run))
- role (evidence: [https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/overview](https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/overview), [https://docs.cloud.google.com/python/docs/reference/run/latest](https://docs.cloud.google.com/python/docs/reference/run/latest), [https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run](https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run))

## Official Evidence

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/overview](https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/overview)
- [https://docs.cloud.google.com/python/docs/reference/run/latest](https://docs.cloud.google.com/python/docs/reference/run/latest)
- [https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run](https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
