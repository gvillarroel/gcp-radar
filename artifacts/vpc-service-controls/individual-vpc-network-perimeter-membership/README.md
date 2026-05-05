# Individual VPC network perimeter membership

Product: VPC Service Controls
Feature slug: `individual-vpc-network-perimeter-membership`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

VPC Service Controls lets you add individual VPC networks to a service perimeter and authorize them with ingress rules.

## Lifecycle

- Latest feature date: 2023-02-17
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/set-up-service-perimeter-verify-access](https://docs.cloud.google.com/vpc-service-controls/docs/set-up-service-perimeter-verify-access), [https://docs.cloud.google.com/vpc-service-controls/docs/vpc-perimeters-management](https://docs.cloud.google.com/vpc-service-controls/docs/vpc-perimeters-management), [https://docs.cloud.google.com/vpc-service-controls/docs/manage-service-perimeters](https://docs.cloud.google.com/vpc-service-controls/docs/manage-service-perimeters), [https://docs.cloud.google.com/vpc-service-controls/docs/migrate-vpc-perimeters](https://docs.cloud.google.com/vpc-service-controls/docs/migrate-vpc-perimeters))
- allow (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/set-up-service-perimeter-verify-access](https://docs.cloud.google.com/vpc-service-controls/docs/set-up-service-perimeter-verify-access), [https://docs.cloud.google.com/vpc-service-controls/docs/vpc-perimeters-management](https://docs.cloud.google.com/vpc-service-controls/docs/vpc-perimeters-management), [https://docs.cloud.google.com/vpc-service-controls/docs/manage-service-perimeters](https://docs.cloud.google.com/vpc-service-controls/docs/manage-service-perimeters), [https://docs.cloud.google.com/vpc-service-controls/docs/migrate-vpc-perimeters](https://docs.cloud.google.com/vpc-service-controls/docs/migrate-vpc-perimeters))
- audit (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/set-up-service-perimeter-verify-access](https://docs.cloud.google.com/vpc-service-controls/docs/set-up-service-perimeter-verify-access), [https://docs.cloud.google.com/vpc-service-controls/docs/vpc-perimeters-management](https://docs.cloud.google.com/vpc-service-controls/docs/vpc-perimeters-management), [https://docs.cloud.google.com/vpc-service-controls/docs/manage-service-perimeters](https://docs.cloud.google.com/vpc-service-controls/docs/manage-service-perimeters), [https://docs.cloud.google.com/vpc-service-controls/docs/migrate-vpc-perimeters](https://docs.cloud.google.com/vpc-service-controls/docs/migrate-vpc-perimeters))
- auth (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/set-up-service-perimeter-verify-access](https://docs.cloud.google.com/vpc-service-controls/docs/set-up-service-perimeter-verify-access), [https://docs.cloud.google.com/vpc-service-controls/docs/vpc-perimeters-management](https://docs.cloud.google.com/vpc-service-controls/docs/vpc-perimeters-management), [https://docs.cloud.google.com/vpc-service-controls/docs/manage-service-perimeters](https://docs.cloud.google.com/vpc-service-controls/docs/manage-service-perimeters), [https://docs.cloud.google.com/vpc-service-controls/docs/migrate-vpc-perimeters](https://docs.cloud.google.com/vpc-service-controls/docs/migrate-vpc-perimeters))
- identity (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/set-up-service-perimeter-verify-access](https://docs.cloud.google.com/vpc-service-controls/docs/set-up-service-perimeter-verify-access), [https://docs.cloud.google.com/vpc-service-controls/docs/vpc-perimeters-management](https://docs.cloud.google.com/vpc-service-controls/docs/vpc-perimeters-management), [https://docs.cloud.google.com/vpc-service-controls/docs/manage-service-perimeters](https://docs.cloud.google.com/vpc-service-controls/docs/manage-service-perimeters), [https://docs.cloud.google.com/vpc-service-controls/docs/migrate-vpc-perimeters](https://docs.cloud.google.com/vpc-service-controls/docs/migrate-vpc-perimeters))
- logging (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/set-up-service-perimeter-verify-access](https://docs.cloud.google.com/vpc-service-controls/docs/set-up-service-perimeter-verify-access), [https://docs.cloud.google.com/vpc-service-controls/docs/vpc-perimeters-management](https://docs.cloud.google.com/vpc-service-controls/docs/vpc-perimeters-management), [https://docs.cloud.google.com/vpc-service-controls/docs/manage-service-perimeters](https://docs.cloud.google.com/vpc-service-controls/docs/manage-service-perimeters), [https://docs.cloud.google.com/vpc-service-controls/docs/migrate-vpc-perimeters](https://docs.cloud.google.com/vpc-service-controls/docs/migrate-vpc-perimeters))
- policy (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/set-up-service-perimeter-verify-access](https://docs.cloud.google.com/vpc-service-controls/docs/set-up-service-perimeter-verify-access), [https://docs.cloud.google.com/vpc-service-controls/docs/vpc-perimeters-management](https://docs.cloud.google.com/vpc-service-controls/docs/vpc-perimeters-management), [https://docs.cloud.google.com/vpc-service-controls/docs/manage-service-perimeters](https://docs.cloud.google.com/vpc-service-controls/docs/manage-service-perimeters), [https://docs.cloud.google.com/vpc-service-controls/docs/migrate-vpc-perimeters](https://docs.cloud.google.com/vpc-service-controls/docs/migrate-vpc-perimeters))
- private (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/set-up-service-perimeter-verify-access](https://docs.cloud.google.com/vpc-service-controls/docs/set-up-service-perimeter-verify-access), [https://docs.cloud.google.com/vpc-service-controls/docs/vpc-perimeters-management](https://docs.cloud.google.com/vpc-service-controls/docs/vpc-perimeters-management), [https://docs.cloud.google.com/vpc-service-controls/docs/manage-service-perimeters](https://docs.cloud.google.com/vpc-service-controls/docs/manage-service-perimeters), [https://docs.cloud.google.com/vpc-service-controls/docs/migrate-vpc-perimeters](https://docs.cloud.google.com/vpc-service-controls/docs/migrate-vpc-perimeters))
- role (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/set-up-service-perimeter-verify-access](https://docs.cloud.google.com/vpc-service-controls/docs/set-up-service-perimeter-verify-access), [https://docs.cloud.google.com/vpc-service-controls/docs/vpc-perimeters-management](https://docs.cloud.google.com/vpc-service-controls/docs/vpc-perimeters-management), [https://docs.cloud.google.com/vpc-service-controls/docs/manage-service-perimeters](https://docs.cloud.google.com/vpc-service-controls/docs/manage-service-perimeters), [https://docs.cloud.google.com/vpc-service-controls/docs/migrate-vpc-perimeters](https://docs.cloud.google.com/vpc-service-controls/docs/migrate-vpc-perimeters))

## Official Evidence

- [https://docs.cloud.google.com/vpc-service-controls/docs/manage-service-perimeters](https://docs.cloud.google.com/vpc-service-controls/docs/manage-service-perimeters)
- [https://docs.cloud.google.com/vpc-service-controls/docs/migrate-vpc-perimeters](https://docs.cloud.google.com/vpc-service-controls/docs/migrate-vpc-perimeters)
- [https://docs.cloud.google.com/vpc-service-controls/docs/set-up-service-perimeter-verify-access](https://docs.cloud.google.com/vpc-service-controls/docs/set-up-service-perimeter-verify-access)
- [https://docs.cloud.google.com/vpc-service-controls/docs/vpc-perimeters-management](https://docs.cloud.google.com/vpc-service-controls/docs/vpc-perimeters-management)
