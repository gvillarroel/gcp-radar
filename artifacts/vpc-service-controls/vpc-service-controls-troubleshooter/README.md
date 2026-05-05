# VPC Service Controls Troubleshooter

Product: VPC Service Controls
Feature slug: `vpc-service-controls-troubleshooter`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The VPC Service Controls Troubleshooter uses identifiers from access errors to help diagnose and resolve common perimeter denials.

## Lifecycle

- Latest feature date: 2020-06-30
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooter](https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooter), [https://docs.cloud.google.com/vpc-service-controls/docs/violation-dashboard](https://docs.cloud.google.com/vpc-service-controls/docs/violation-dashboard), [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products), [https://docs.cloud.google.com/vpc-service-controls/docs/vpc-accessible-services](https://docs.cloud.google.com/vpc-service-controls/docs/vpc-accessible-services))
- allow (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooter](https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooter), [https://docs.cloud.google.com/vpc-service-controls/docs/violation-dashboard](https://docs.cloud.google.com/vpc-service-controls/docs/violation-dashboard), [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products), [https://docs.cloud.google.com/vpc-service-controls/docs/vpc-accessible-services](https://docs.cloud.google.com/vpc-service-controls/docs/vpc-accessible-services))
- audit (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooter](https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooter), [https://docs.cloud.google.com/vpc-service-controls/docs/violation-dashboard](https://docs.cloud.google.com/vpc-service-controls/docs/violation-dashboard), [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products), [https://docs.cloud.google.com/vpc-service-controls/docs/vpc-accessible-services](https://docs.cloud.google.com/vpc-service-controls/docs/vpc-accessible-services))
- auth (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooter](https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooter), [https://docs.cloud.google.com/vpc-service-controls/docs/violation-dashboard](https://docs.cloud.google.com/vpc-service-controls/docs/violation-dashboard), [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products), [https://docs.cloud.google.com/vpc-service-controls/docs/vpc-accessible-services](https://docs.cloud.google.com/vpc-service-controls/docs/vpc-accessible-services))
- iam (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooter](https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooter), [https://docs.cloud.google.com/vpc-service-controls/docs/violation-dashboard](https://docs.cloud.google.com/vpc-service-controls/docs/violation-dashboard), [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products), [https://docs.cloud.google.com/vpc-service-controls/docs/vpc-accessible-services](https://docs.cloud.google.com/vpc-service-controls/docs/vpc-accessible-services))
- logging (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooter](https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooter), [https://docs.cloud.google.com/vpc-service-controls/docs/violation-dashboard](https://docs.cloud.google.com/vpc-service-controls/docs/violation-dashboard), [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products), [https://docs.cloud.google.com/vpc-service-controls/docs/vpc-accessible-services](https://docs.cloud.google.com/vpc-service-controls/docs/vpc-accessible-services))
- permission (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooter](https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooter), [https://docs.cloud.google.com/vpc-service-controls/docs/violation-dashboard](https://docs.cloud.google.com/vpc-service-controls/docs/violation-dashboard), [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products), [https://docs.cloud.google.com/vpc-service-controls/docs/vpc-accessible-services](https://docs.cloud.google.com/vpc-service-controls/docs/vpc-accessible-services))
- private (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooter](https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooter), [https://docs.cloud.google.com/vpc-service-controls/docs/violation-dashboard](https://docs.cloud.google.com/vpc-service-controls/docs/violation-dashboard), [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products), [https://docs.cloud.google.com/vpc-service-controls/docs/vpc-accessible-services](https://docs.cloud.google.com/vpc-service-controls/docs/vpc-accessible-services))
- role (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooter](https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooter), [https://docs.cloud.google.com/vpc-service-controls/docs/violation-dashboard](https://docs.cloud.google.com/vpc-service-controls/docs/violation-dashboard), [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products), [https://docs.cloud.google.com/vpc-service-controls/docs/vpc-accessible-services](https://docs.cloud.google.com/vpc-service-controls/docs/vpc-accessible-services))
- security (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooter](https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooter), [https://docs.cloud.google.com/vpc-service-controls/docs/violation-dashboard](https://docs.cloud.google.com/vpc-service-controls/docs/violation-dashboard), [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products), [https://docs.cloud.google.com/vpc-service-controls/docs/vpc-accessible-services](https://docs.cloud.google.com/vpc-service-controls/docs/vpc-accessible-services))

## Official Evidence

- [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products)
- [https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooter](https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooter)
- [https://docs.cloud.google.com/vpc-service-controls/docs/violation-dashboard](https://docs.cloud.google.com/vpc-service-controls/docs/violation-dashboard)
- [https://docs.cloud.google.com/vpc-service-controls/docs/vpc-accessible-services](https://docs.cloud.google.com/vpc-service-controls/docs/vpc-accessible-services)
