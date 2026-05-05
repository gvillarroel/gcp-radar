# Supported services metadata retrieval

Product: VPC Service Controls
Feature slug: `supported-services-metadata-retrieval`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Lets users programmatically retrieve VPC Service Controls supported services and the associated supported methods and permissions.

## Lifecycle

- Latest feature date: 2024-07-02
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products), [https://docs.cloud.google.com/vpc-service-controls/docs/retrieve-troubleshoot-errors](https://docs.cloud.google.com/vpc-service-controls/docs/retrieve-troubleshoot-errors), [https://docs.cloud.google.com/vpc-service-controls/docs/enable](https://docs.cloud.google.com/vpc-service-controls/docs/enable), [https://docs.cloud.google.com/vpc-service-controls/docs/audit-logging](https://docs.cloud.google.com/vpc-service-controls/docs/audit-logging))
- allow (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products), [https://docs.cloud.google.com/vpc-service-controls/docs/retrieve-troubleshoot-errors](https://docs.cloud.google.com/vpc-service-controls/docs/retrieve-troubleshoot-errors), [https://docs.cloud.google.com/vpc-service-controls/docs/enable](https://docs.cloud.google.com/vpc-service-controls/docs/enable), [https://docs.cloud.google.com/vpc-service-controls/docs/audit-logging](https://docs.cloud.google.com/vpc-service-controls/docs/audit-logging))
- audit (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products), [https://docs.cloud.google.com/vpc-service-controls/docs/retrieve-troubleshoot-errors](https://docs.cloud.google.com/vpc-service-controls/docs/retrieve-troubleshoot-errors), [https://docs.cloud.google.com/vpc-service-controls/docs/enable](https://docs.cloud.google.com/vpc-service-controls/docs/enable), [https://docs.cloud.google.com/vpc-service-controls/docs/audit-logging](https://docs.cloud.google.com/vpc-service-controls/docs/audit-logging))
- auth (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products), [https://docs.cloud.google.com/vpc-service-controls/docs/retrieve-troubleshoot-errors](https://docs.cloud.google.com/vpc-service-controls/docs/retrieve-troubleshoot-errors), [https://docs.cloud.google.com/vpc-service-controls/docs/enable](https://docs.cloud.google.com/vpc-service-controls/docs/enable), [https://docs.cloud.google.com/vpc-service-controls/docs/audit-logging](https://docs.cloud.google.com/vpc-service-controls/docs/audit-logging))
- identity (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products), [https://docs.cloud.google.com/vpc-service-controls/docs/retrieve-troubleshoot-errors](https://docs.cloud.google.com/vpc-service-controls/docs/retrieve-troubleshoot-errors), [https://docs.cloud.google.com/vpc-service-controls/docs/enable](https://docs.cloud.google.com/vpc-service-controls/docs/enable), [https://docs.cloud.google.com/vpc-service-controls/docs/audit-logging](https://docs.cloud.google.com/vpc-service-controls/docs/audit-logging))
- logging (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products), [https://docs.cloud.google.com/vpc-service-controls/docs/retrieve-troubleshoot-errors](https://docs.cloud.google.com/vpc-service-controls/docs/retrieve-troubleshoot-errors), [https://docs.cloud.google.com/vpc-service-controls/docs/enable](https://docs.cloud.google.com/vpc-service-controls/docs/enable), [https://docs.cloud.google.com/vpc-service-controls/docs/audit-logging](https://docs.cloud.google.com/vpc-service-controls/docs/audit-logging))
- permission (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products), [https://docs.cloud.google.com/vpc-service-controls/docs/retrieve-troubleshoot-errors](https://docs.cloud.google.com/vpc-service-controls/docs/retrieve-troubleshoot-errors), [https://docs.cloud.google.com/vpc-service-controls/docs/enable](https://docs.cloud.google.com/vpc-service-controls/docs/enable), [https://docs.cloud.google.com/vpc-service-controls/docs/audit-logging](https://docs.cloud.google.com/vpc-service-controls/docs/audit-logging))
- policy (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products), [https://docs.cloud.google.com/vpc-service-controls/docs/retrieve-troubleshoot-errors](https://docs.cloud.google.com/vpc-service-controls/docs/retrieve-troubleshoot-errors), [https://docs.cloud.google.com/vpc-service-controls/docs/enable](https://docs.cloud.google.com/vpc-service-controls/docs/enable), [https://docs.cloud.google.com/vpc-service-controls/docs/audit-logging](https://docs.cloud.google.com/vpc-service-controls/docs/audit-logging))
- security (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products), [https://docs.cloud.google.com/vpc-service-controls/docs/retrieve-troubleshoot-errors](https://docs.cloud.google.com/vpc-service-controls/docs/retrieve-troubleshoot-errors), [https://docs.cloud.google.com/vpc-service-controls/docs/enable](https://docs.cloud.google.com/vpc-service-controls/docs/enable), [https://docs.cloud.google.com/vpc-service-controls/docs/audit-logging](https://docs.cloud.google.com/vpc-service-controls/docs/audit-logging))
- token (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products), [https://docs.cloud.google.com/vpc-service-controls/docs/retrieve-troubleshoot-errors](https://docs.cloud.google.com/vpc-service-controls/docs/retrieve-troubleshoot-errors), [https://docs.cloud.google.com/vpc-service-controls/docs/enable](https://docs.cloud.google.com/vpc-service-controls/docs/enable), [https://docs.cloud.google.com/vpc-service-controls/docs/audit-logging](https://docs.cloud.google.com/vpc-service-controls/docs/audit-logging))

## Official Evidence

- [https://docs.cloud.google.com/vpc-service-controls/docs/audit-logging](https://docs.cloud.google.com/vpc-service-controls/docs/audit-logging)
- [https://docs.cloud.google.com/vpc-service-controls/docs/enable](https://docs.cloud.google.com/vpc-service-controls/docs/enable)
- [https://docs.cloud.google.com/vpc-service-controls/docs/retrieve-troubleshoot-errors](https://docs.cloud.google.com/vpc-service-controls/docs/retrieve-troubleshoot-errors)
- [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products)
