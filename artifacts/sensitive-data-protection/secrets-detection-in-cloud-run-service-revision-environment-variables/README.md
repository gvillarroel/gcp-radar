# Secrets detection in Cloud Run service revision environment variables

Product: Sensitive Data Protection
Feature slug: `secrets-detection-in-cloud-run-service-revision-environment-variables`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Sensitive Data Protection can detect secrets in Cloud Run service revision environment variables and send findings to Security Command Center.

## Lifecycle

- Latest feature date: 2024-10-25
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/secrets-discovery](https://docs.cloud.google.com/sensitive-data-protection/docs/secrets-discovery), [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources), [https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview))
- auth (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/secrets-discovery](https://docs.cloud.google.com/sensitive-data-protection/docs/secrets-discovery), [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources), [https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview))
- credential (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/secrets-discovery](https://docs.cloud.google.com/sensitive-data-protection/docs/secrets-discovery), [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources), [https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview))
- iam (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/secrets-discovery](https://docs.cloud.google.com/sensitive-data-protection/docs/secrets-discovery), [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources), [https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview))
- secret (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/secrets-discovery](https://docs.cloud.google.com/sensitive-data-protection/docs/secrets-discovery), [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources), [https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview))
- security (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/secrets-discovery](https://docs.cloud.google.com/sensitive-data-protection/docs/secrets-discovery), [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources), [https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview))
- threat (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/secrets-discovery](https://docs.cloud.google.com/sensitive-data-protection/docs/secrets-discovery), [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources), [https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview))
- token (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/secrets-discovery](https://docs.cloud.google.com/sensitive-data-protection/docs/secrets-discovery), [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources), [https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview))

## Official Evidence

- [https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/secrets-discovery](https://docs.cloud.google.com/sensitive-data-protection/docs/secrets-discovery)
