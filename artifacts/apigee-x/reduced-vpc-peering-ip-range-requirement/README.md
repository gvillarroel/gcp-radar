# Reduced VPC peering IP range requirement

Product: Apigee X
Feature slug: `reduced-vpc-peering-ip-range-requirement`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Apigee provisioning reduces the required non-overlapping CIDR range for VPC peering to /22.

## Lifecycle

- Latest feature date: 2022-01-24
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow
- auth
- constraint
- encrypt
- policy

## Official Evidence

- [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/basic-authentication-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/basic-authentication-policy)
- [https://docs.cloud.google.com/apigee/docs/locations](https://docs.cloud.google.com/apigee/docs/locations)
