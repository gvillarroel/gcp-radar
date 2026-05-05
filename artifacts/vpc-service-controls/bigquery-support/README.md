# BigQuery support

Product: VPC Service Controls
Feature slug: `bigquery-support`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

VPC Service Controls supports protecting BigQuery resources.

## Lifecycle

- Latest feature date: 2018-12-20
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products), [https://docs.cloud.google.com/vpc-service-controls/docs/resources](https://docs.cloud.google.com/vpc-service-controls/docs/resources), [https://docs.cloud.google.com/vpc-service-controls/docs/vpc-perimeters-management](https://docs.cloud.google.com/vpc-service-controls/docs/vpc-perimeters-management), [https://docs.cloud.google.com/vpc-service-controls/docs/vpc-accessible-services](https://docs.cloud.google.com/vpc-service-controls/docs/vpc-accessible-services))
- allow (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products), [https://docs.cloud.google.com/vpc-service-controls/docs/resources](https://docs.cloud.google.com/vpc-service-controls/docs/resources), [https://docs.cloud.google.com/vpc-service-controls/docs/vpc-perimeters-management](https://docs.cloud.google.com/vpc-service-controls/docs/vpc-perimeters-management), [https://docs.cloud.google.com/vpc-service-controls/docs/vpc-accessible-services](https://docs.cloud.google.com/vpc-service-controls/docs/vpc-accessible-services))
- auth (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products), [https://docs.cloud.google.com/vpc-service-controls/docs/resources](https://docs.cloud.google.com/vpc-service-controls/docs/resources), [https://docs.cloud.google.com/vpc-service-controls/docs/vpc-perimeters-management](https://docs.cloud.google.com/vpc-service-controls/docs/vpc-perimeters-management), [https://docs.cloud.google.com/vpc-service-controls/docs/vpc-accessible-services](https://docs.cloud.google.com/vpc-service-controls/docs/vpc-accessible-services))
- iam (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products), [https://docs.cloud.google.com/vpc-service-controls/docs/resources](https://docs.cloud.google.com/vpc-service-controls/docs/resources), [https://docs.cloud.google.com/vpc-service-controls/docs/vpc-perimeters-management](https://docs.cloud.google.com/vpc-service-controls/docs/vpc-perimeters-management), [https://docs.cloud.google.com/vpc-service-controls/docs/vpc-accessible-services](https://docs.cloud.google.com/vpc-service-controls/docs/vpc-accessible-services))
- logging (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products), [https://docs.cloud.google.com/vpc-service-controls/docs/resources](https://docs.cloud.google.com/vpc-service-controls/docs/resources), [https://docs.cloud.google.com/vpc-service-controls/docs/vpc-perimeters-management](https://docs.cloud.google.com/vpc-service-controls/docs/vpc-perimeters-management), [https://docs.cloud.google.com/vpc-service-controls/docs/vpc-accessible-services](https://docs.cloud.google.com/vpc-service-controls/docs/vpc-accessible-services))
- permission (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products), [https://docs.cloud.google.com/vpc-service-controls/docs/resources](https://docs.cloud.google.com/vpc-service-controls/docs/resources), [https://docs.cloud.google.com/vpc-service-controls/docs/vpc-perimeters-management](https://docs.cloud.google.com/vpc-service-controls/docs/vpc-perimeters-management), [https://docs.cloud.google.com/vpc-service-controls/docs/vpc-accessible-services](https://docs.cloud.google.com/vpc-service-controls/docs/vpc-accessible-services))
- role (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products), [https://docs.cloud.google.com/vpc-service-controls/docs/resources](https://docs.cloud.google.com/vpc-service-controls/docs/resources), [https://docs.cloud.google.com/vpc-service-controls/docs/vpc-perimeters-management](https://docs.cloud.google.com/vpc-service-controls/docs/vpc-perimeters-management), [https://docs.cloud.google.com/vpc-service-controls/docs/vpc-accessible-services](https://docs.cloud.google.com/vpc-service-controls/docs/vpc-accessible-services))
- security (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products), [https://docs.cloud.google.com/vpc-service-controls/docs/resources](https://docs.cloud.google.com/vpc-service-controls/docs/resources), [https://docs.cloud.google.com/vpc-service-controls/docs/vpc-perimeters-management](https://docs.cloud.google.com/vpc-service-controls/docs/vpc-perimeters-management), [https://docs.cloud.google.com/vpc-service-controls/docs/vpc-accessible-services](https://docs.cloud.google.com/vpc-service-controls/docs/vpc-accessible-services))
- token (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products), [https://docs.cloud.google.com/vpc-service-controls/docs/resources](https://docs.cloud.google.com/vpc-service-controls/docs/resources), [https://docs.cloud.google.com/vpc-service-controls/docs/vpc-perimeters-management](https://docs.cloud.google.com/vpc-service-controls/docs/vpc-perimeters-management), [https://docs.cloud.google.com/vpc-service-controls/docs/vpc-accessible-services](https://docs.cloud.google.com/vpc-service-controls/docs/vpc-accessible-services))

## Official Evidence

- [https://docs.cloud.google.com/vpc-service-controls/docs/resources](https://docs.cloud.google.com/vpc-service-controls/docs/resources)
- [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products)
- [https://docs.cloud.google.com/vpc-service-controls/docs/vpc-accessible-services](https://docs.cloud.google.com/vpc-service-controls/docs/vpc-accessible-services)
- [https://docs.cloud.google.com/vpc-service-controls/docs/vpc-perimeters-management](https://docs.cloud.google.com/vpc-service-controls/docs/vpc-perimeters-management)
