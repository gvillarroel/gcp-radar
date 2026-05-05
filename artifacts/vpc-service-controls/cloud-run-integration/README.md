# Cloud Run integration

Product: VPC Service Controls
Feature slug: `cloud-run-integration`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

VPC Service Controls supports Cloud Run resources within service perimeter protections.

## Lifecycle

- Latest feature date: 2021-07-27
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products), [https://docs.cloud.google.com/vpc-service-controls/docs/create-service-perimeters](https://docs.cloud.google.com/vpc-service-controls/docs/create-service-perimeters), [https://docs.cloud.google.com/vpc-service-controls/docs/dry-run-mode](https://docs.cloud.google.com/vpc-service-controls/docs/dry-run-mode), [https://docs.cloud.google.com/vpc-service-controls/docs/access-level-design](https://docs.cloud.google.com/vpc-service-controls/docs/access-level-design))
- allow (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products), [https://docs.cloud.google.com/vpc-service-controls/docs/create-service-perimeters](https://docs.cloud.google.com/vpc-service-controls/docs/create-service-perimeters), [https://docs.cloud.google.com/vpc-service-controls/docs/dry-run-mode](https://docs.cloud.google.com/vpc-service-controls/docs/dry-run-mode), [https://docs.cloud.google.com/vpc-service-controls/docs/access-level-design](https://docs.cloud.google.com/vpc-service-controls/docs/access-level-design))
- audit (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products), [https://docs.cloud.google.com/vpc-service-controls/docs/create-service-perimeters](https://docs.cloud.google.com/vpc-service-controls/docs/create-service-perimeters), [https://docs.cloud.google.com/vpc-service-controls/docs/dry-run-mode](https://docs.cloud.google.com/vpc-service-controls/docs/dry-run-mode), [https://docs.cloud.google.com/vpc-service-controls/docs/access-level-design](https://docs.cloud.google.com/vpc-service-controls/docs/access-level-design))
- auth (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products), [https://docs.cloud.google.com/vpc-service-controls/docs/create-service-perimeters](https://docs.cloud.google.com/vpc-service-controls/docs/create-service-perimeters), [https://docs.cloud.google.com/vpc-service-controls/docs/dry-run-mode](https://docs.cloud.google.com/vpc-service-controls/docs/dry-run-mode), [https://docs.cloud.google.com/vpc-service-controls/docs/access-level-design](https://docs.cloud.google.com/vpc-service-controls/docs/access-level-design))
- identity (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products), [https://docs.cloud.google.com/vpc-service-controls/docs/create-service-perimeters](https://docs.cloud.google.com/vpc-service-controls/docs/create-service-perimeters), [https://docs.cloud.google.com/vpc-service-controls/docs/dry-run-mode](https://docs.cloud.google.com/vpc-service-controls/docs/dry-run-mode), [https://docs.cloud.google.com/vpc-service-controls/docs/access-level-design](https://docs.cloud.google.com/vpc-service-controls/docs/access-level-design))
- key (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products), [https://docs.cloud.google.com/vpc-service-controls/docs/create-service-perimeters](https://docs.cloud.google.com/vpc-service-controls/docs/create-service-perimeters), [https://docs.cloud.google.com/vpc-service-controls/docs/dry-run-mode](https://docs.cloud.google.com/vpc-service-controls/docs/dry-run-mode), [https://docs.cloud.google.com/vpc-service-controls/docs/access-level-design](https://docs.cloud.google.com/vpc-service-controls/docs/access-level-design))
- logging (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products), [https://docs.cloud.google.com/vpc-service-controls/docs/create-service-perimeters](https://docs.cloud.google.com/vpc-service-controls/docs/create-service-perimeters), [https://docs.cloud.google.com/vpc-service-controls/docs/dry-run-mode](https://docs.cloud.google.com/vpc-service-controls/docs/dry-run-mode), [https://docs.cloud.google.com/vpc-service-controls/docs/access-level-design](https://docs.cloud.google.com/vpc-service-controls/docs/access-level-design))
- policy (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products), [https://docs.cloud.google.com/vpc-service-controls/docs/create-service-perimeters](https://docs.cloud.google.com/vpc-service-controls/docs/create-service-perimeters), [https://docs.cloud.google.com/vpc-service-controls/docs/dry-run-mode](https://docs.cloud.google.com/vpc-service-controls/docs/dry-run-mode), [https://docs.cloud.google.com/vpc-service-controls/docs/access-level-design](https://docs.cloud.google.com/vpc-service-controls/docs/access-level-design))
- private (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products), [https://docs.cloud.google.com/vpc-service-controls/docs/create-service-perimeters](https://docs.cloud.google.com/vpc-service-controls/docs/create-service-perimeters), [https://docs.cloud.google.com/vpc-service-controls/docs/dry-run-mode](https://docs.cloud.google.com/vpc-service-controls/docs/dry-run-mode), [https://docs.cloud.google.com/vpc-service-controls/docs/access-level-design](https://docs.cloud.google.com/vpc-service-controls/docs/access-level-design))

## Official Evidence

- [https://docs.cloud.google.com/vpc-service-controls/docs/access-level-design](https://docs.cloud.google.com/vpc-service-controls/docs/access-level-design)
- [https://docs.cloud.google.com/vpc-service-controls/docs/create-service-perimeters](https://docs.cloud.google.com/vpc-service-controls/docs/create-service-perimeters)
- [https://docs.cloud.google.com/vpc-service-controls/docs/dry-run-mode](https://docs.cloud.google.com/vpc-service-controls/docs/dry-run-mode)
- [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products)
