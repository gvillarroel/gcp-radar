# Regional endpoints

Product: Cloud Storage
Feature slug: `regional-endpoints`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Regional endpoints route Cloud Storage request traffic directly to a specified region to support data residency and sovereignty requirements.

## Lifecycle

- Latest feature date: 2023-11-20
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/storage/docs/bandwidth-usage](https://docs.cloud.google.com/storage/docs/bandwidth-usage), [https://docs.cloud.google.com/storage/docs/authentication/canonical-requests](https://docs.cloud.google.com/storage/docs/authentication/canonical-requests), [https://docs.cloud.google.com/storage/docs/troubleshooting](https://docs.cloud.google.com/storage/docs/troubleshooting), [https://docs.cloud.google.com/storage/docs/xml-api/overview](https://docs.cloud.google.com/storage/docs/xml-api/overview))
- allow (evidence: [https://docs.cloud.google.com/storage/docs/bandwidth-usage](https://docs.cloud.google.com/storage/docs/bandwidth-usage), [https://docs.cloud.google.com/storage/docs/authentication/canonical-requests](https://docs.cloud.google.com/storage/docs/authentication/canonical-requests), [https://docs.cloud.google.com/storage/docs/troubleshooting](https://docs.cloud.google.com/storage/docs/troubleshooting), [https://docs.cloud.google.com/storage/docs/xml-api/overview](https://docs.cloud.google.com/storage/docs/xml-api/overview))
- audit (evidence: [https://docs.cloud.google.com/storage/docs/bandwidth-usage](https://docs.cloud.google.com/storage/docs/bandwidth-usage), [https://docs.cloud.google.com/storage/docs/authentication/canonical-requests](https://docs.cloud.google.com/storage/docs/authentication/canonical-requests), [https://docs.cloud.google.com/storage/docs/troubleshooting](https://docs.cloud.google.com/storage/docs/troubleshooting), [https://docs.cloud.google.com/storage/docs/xml-api/overview](https://docs.cloud.google.com/storage/docs/xml-api/overview))
- auth (evidence: [https://docs.cloud.google.com/storage/docs/bandwidth-usage](https://docs.cloud.google.com/storage/docs/bandwidth-usage), [https://docs.cloud.google.com/storage/docs/authentication/canonical-requests](https://docs.cloud.google.com/storage/docs/authentication/canonical-requests), [https://docs.cloud.google.com/storage/docs/troubleshooting](https://docs.cloud.google.com/storage/docs/troubleshooting), [https://docs.cloud.google.com/storage/docs/xml-api/overview](https://docs.cloud.google.com/storage/docs/xml-api/overview))
- authorization (evidence: [https://docs.cloud.google.com/storage/docs/bandwidth-usage](https://docs.cloud.google.com/storage/docs/bandwidth-usage), [https://docs.cloud.google.com/storage/docs/authentication/canonical-requests](https://docs.cloud.google.com/storage/docs/authentication/canonical-requests), [https://docs.cloud.google.com/storage/docs/troubleshooting](https://docs.cloud.google.com/storage/docs/troubleshooting), [https://docs.cloud.google.com/storage/docs/xml-api/overview](https://docs.cloud.google.com/storage/docs/xml-api/overview))
- encrypt (evidence: [https://docs.cloud.google.com/storage/docs/bandwidth-usage](https://docs.cloud.google.com/storage/docs/bandwidth-usage), [https://docs.cloud.google.com/storage/docs/authentication/canonical-requests](https://docs.cloud.google.com/storage/docs/authentication/canonical-requests), [https://docs.cloud.google.com/storage/docs/troubleshooting](https://docs.cloud.google.com/storage/docs/troubleshooting), [https://docs.cloud.google.com/storage/docs/xml-api/overview](https://docs.cloud.google.com/storage/docs/xml-api/overview))
- logging (evidence: [https://docs.cloud.google.com/storage/docs/bandwidth-usage](https://docs.cloud.google.com/storage/docs/bandwidth-usage), [https://docs.cloud.google.com/storage/docs/authentication/canonical-requests](https://docs.cloud.google.com/storage/docs/authentication/canonical-requests), [https://docs.cloud.google.com/storage/docs/troubleshooting](https://docs.cloud.google.com/storage/docs/troubleshooting), [https://docs.cloud.google.com/storage/docs/xml-api/overview](https://docs.cloud.google.com/storage/docs/xml-api/overview))
- policy (evidence: [https://docs.cloud.google.com/storage/docs/bandwidth-usage](https://docs.cloud.google.com/storage/docs/bandwidth-usage), [https://docs.cloud.google.com/storage/docs/authentication/canonical-requests](https://docs.cloud.google.com/storage/docs/authentication/canonical-requests), [https://docs.cloud.google.com/storage/docs/troubleshooting](https://docs.cloud.google.com/storage/docs/troubleshooting), [https://docs.cloud.google.com/storage/docs/xml-api/overview](https://docs.cloud.google.com/storage/docs/xml-api/overview))
- security (evidence: [https://docs.cloud.google.com/storage/docs/bandwidth-usage](https://docs.cloud.google.com/storage/docs/bandwidth-usage), [https://docs.cloud.google.com/storage/docs/authentication/canonical-requests](https://docs.cloud.google.com/storage/docs/authentication/canonical-requests), [https://docs.cloud.google.com/storage/docs/troubleshooting](https://docs.cloud.google.com/storage/docs/troubleshooting), [https://docs.cloud.google.com/storage/docs/xml-api/overview](https://docs.cloud.google.com/storage/docs/xml-api/overview))
- token (evidence: [https://docs.cloud.google.com/storage/docs/bandwidth-usage](https://docs.cloud.google.com/storage/docs/bandwidth-usage), [https://docs.cloud.google.com/storage/docs/authentication/canonical-requests](https://docs.cloud.google.com/storage/docs/authentication/canonical-requests), [https://docs.cloud.google.com/storage/docs/troubleshooting](https://docs.cloud.google.com/storage/docs/troubleshooting), [https://docs.cloud.google.com/storage/docs/xml-api/overview](https://docs.cloud.google.com/storage/docs/xml-api/overview))

## Official Evidence

- [https://docs.cloud.google.com/storage/docs/authentication/canonical-requests](https://docs.cloud.google.com/storage/docs/authentication/canonical-requests)
- [https://docs.cloud.google.com/storage/docs/bandwidth-usage](https://docs.cloud.google.com/storage/docs/bandwidth-usage)
- [https://docs.cloud.google.com/storage/docs/troubleshooting](https://docs.cloud.google.com/storage/docs/troubleshooting)
- [https://docs.cloud.google.com/storage/docs/xml-api/overview](https://docs.cloud.google.com/storage/docs/xml-api/overview)
