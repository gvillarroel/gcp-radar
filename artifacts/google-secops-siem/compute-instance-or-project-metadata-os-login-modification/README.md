# Compute Instance or Project Metadata OS Login Modification

Product: Google SecOps SIEM
Feature slug: `compute-instance-or-project-metadata-os-login-modification`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

This Cloud Hacktool rule detects privilege escalation by changing Compute metadata to enable OS Login.

## Lifecycle

- Latest feature date: 2025-03-11
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- armor
- audit
- auth
- firewall
- iam
- identity
- key
- logging
- policy
- role
- security
- threat

## Official Evidence

- [https://docs.cloud.google.com/chronicle/docs/administration/migrate-to-gcp-project](https://docs.cloud.google.com/chronicle/docs/administration/migrate-to-gcp-project)
- [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- [https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs](https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs)
