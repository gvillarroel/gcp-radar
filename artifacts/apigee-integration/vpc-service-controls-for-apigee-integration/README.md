# VPC Service Controls for Apigee Integration

Product: Apigee Integration
Feature slug: `vpc-service-controls-for-apigee-integration`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

VPC Service Controls support for Apigee Integration moved to general availability; Adds support for VPC Service Controls to place Apigee Integration within a Google Cloud security perimeter.

## Lifecycle

- Latest feature date: 2023-06-13
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/application-integration/docs/vpc-service-controls](https://docs.cloud.google.com/application-integration/docs/vpc-service-controls), [https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks](https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks), [https://docs.cloud.google.com/application-integration/docs/data-mapping-functions-reference](https://docs.cloud.google.com/application-integration/docs/data-mapping-functions-reference))
- audit (evidence: [https://docs.cloud.google.com/application-integration/docs/vpc-service-controls](https://docs.cloud.google.com/application-integration/docs/vpc-service-controls), [https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks](https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks), [https://docs.cloud.google.com/application-integration/docs/data-mapping-functions-reference](https://docs.cloud.google.com/application-integration/docs/data-mapping-functions-reference))
- auth (evidence: [https://docs.cloud.google.com/application-integration/docs/vpc-service-controls](https://docs.cloud.google.com/application-integration/docs/vpc-service-controls), [https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks](https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks), [https://docs.cloud.google.com/application-integration/docs/data-mapping-functions-reference](https://docs.cloud.google.com/application-integration/docs/data-mapping-functions-reference))
- constraint (evidence: [https://docs.cloud.google.com/application-integration/docs/vpc-service-controls](https://docs.cloud.google.com/application-integration/docs/vpc-service-controls), [https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks](https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks), [https://docs.cloud.google.com/application-integration/docs/data-mapping-functions-reference](https://docs.cloud.google.com/application-integration/docs/data-mapping-functions-reference))
- encrypt (evidence: [https://docs.cloud.google.com/application-integration/docs/vpc-service-controls](https://docs.cloud.google.com/application-integration/docs/vpc-service-controls), [https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks](https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks), [https://docs.cloud.google.com/application-integration/docs/data-mapping-functions-reference](https://docs.cloud.google.com/application-integration/docs/data-mapping-functions-reference))
- iam (evidence: [https://docs.cloud.google.com/application-integration/docs/vpc-service-controls](https://docs.cloud.google.com/application-integration/docs/vpc-service-controls), [https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks](https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks), [https://docs.cloud.google.com/application-integration/docs/data-mapping-functions-reference](https://docs.cloud.google.com/application-integration/docs/data-mapping-functions-reference))
- key (evidence: [https://docs.cloud.google.com/application-integration/docs/vpc-service-controls](https://docs.cloud.google.com/application-integration/docs/vpc-service-controls), [https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks](https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks), [https://docs.cloud.google.com/application-integration/docs/data-mapping-functions-reference](https://docs.cloud.google.com/application-integration/docs/data-mapping-functions-reference))
- kms (evidence: [https://docs.cloud.google.com/application-integration/docs/vpc-service-controls](https://docs.cloud.google.com/application-integration/docs/vpc-service-controls), [https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks](https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks), [https://docs.cloud.google.com/application-integration/docs/data-mapping-functions-reference](https://docs.cloud.google.com/application-integration/docs/data-mapping-functions-reference))
- logging (evidence: [https://docs.cloud.google.com/application-integration/docs/vpc-service-controls](https://docs.cloud.google.com/application-integration/docs/vpc-service-controls), [https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks](https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks), [https://docs.cloud.google.com/application-integration/docs/data-mapping-functions-reference](https://docs.cloud.google.com/application-integration/docs/data-mapping-functions-reference))
- private (evidence: [https://docs.cloud.google.com/application-integration/docs/vpc-service-controls](https://docs.cloud.google.com/application-integration/docs/vpc-service-controls), [https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks](https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks), [https://docs.cloud.google.com/application-integration/docs/data-mapping-functions-reference](https://docs.cloud.google.com/application-integration/docs/data-mapping-functions-reference))
- role (evidence: [https://docs.cloud.google.com/application-integration/docs/vpc-service-controls](https://docs.cloud.google.com/application-integration/docs/vpc-service-controls), [https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks](https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks), [https://docs.cloud.google.com/application-integration/docs/data-mapping-functions-reference](https://docs.cloud.google.com/application-integration/docs/data-mapping-functions-reference))
- secret (evidence: [https://docs.cloud.google.com/application-integration/docs/vpc-service-controls](https://docs.cloud.google.com/application-integration/docs/vpc-service-controls), [https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks](https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks), [https://docs.cloud.google.com/application-integration/docs/data-mapping-functions-reference](https://docs.cloud.google.com/application-integration/docs/data-mapping-functions-reference))
- security (evidence: [https://docs.cloud.google.com/application-integration/docs/vpc-service-controls](https://docs.cloud.google.com/application-integration/docs/vpc-service-controls), [https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks](https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks), [https://docs.cloud.google.com/application-integration/docs/data-mapping-functions-reference](https://docs.cloud.google.com/application-integration/docs/data-mapping-functions-reference))

## Official Evidence

- [https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks](https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks)
- [https://docs.cloud.google.com/application-integration/docs/data-mapping-functions-reference](https://docs.cloud.google.com/application-integration/docs/data-mapping-functions-reference)
- [https://docs.cloud.google.com/application-integration/docs/vpc-service-controls](https://docs.cloud.google.com/application-integration/docs/vpc-service-controls)
