# API hub VPC Service Controls integration

Product: Apigee API hub
Feature slug: `api-hub-vpc-service-controls-integration`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

API hub now integrates with VPC Service Controls, allowing service perimeters to control ingress and egress for the API hub instance.

## Lifecycle

- Latest feature date: 2025-04-02
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/vpc-service-control](https://docs.cloud.google.com/apigee/docs/apihub/vpc-service-control), [https://docs.cloud.google.com/apigee/docs/apihub/provision](https://docs.cloud.google.com/apigee/docs/apihub/provision), [https://docs.cloud.google.com/apigee/docs/apihub/api-supply-chain](https://docs.cloud.google.com/apigee/docs/apihub/api-supply-chain))
- allow (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/vpc-service-control](https://docs.cloud.google.com/apigee/docs/apihub/vpc-service-control), [https://docs.cloud.google.com/apigee/docs/apihub/provision](https://docs.cloud.google.com/apigee/docs/apihub/provision), [https://docs.cloud.google.com/apigee/docs/apihub/api-supply-chain](https://docs.cloud.google.com/apigee/docs/apihub/api-supply-chain))
- audit (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/vpc-service-control](https://docs.cloud.google.com/apigee/docs/apihub/vpc-service-control), [https://docs.cloud.google.com/apigee/docs/apihub/provision](https://docs.cloud.google.com/apigee/docs/apihub/provision), [https://docs.cloud.google.com/apigee/docs/apihub/api-supply-chain](https://docs.cloud.google.com/apigee/docs/apihub/api-supply-chain))
- auth (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/vpc-service-control](https://docs.cloud.google.com/apigee/docs/apihub/vpc-service-control), [https://docs.cloud.google.com/apigee/docs/apihub/provision](https://docs.cloud.google.com/apigee/docs/apihub/provision), [https://docs.cloud.google.com/apigee/docs/apihub/api-supply-chain](https://docs.cloud.google.com/apigee/docs/apihub/api-supply-chain))
- certificate (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/vpc-service-control](https://docs.cloud.google.com/apigee/docs/apihub/vpc-service-control), [https://docs.cloud.google.com/apigee/docs/apihub/provision](https://docs.cloud.google.com/apigee/docs/apihub/provision), [https://docs.cloud.google.com/apigee/docs/apihub/api-supply-chain](https://docs.cloud.google.com/apigee/docs/apihub/api-supply-chain))
- credential (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/vpc-service-control](https://docs.cloud.google.com/apigee/docs/apihub/vpc-service-control), [https://docs.cloud.google.com/apigee/docs/apihub/provision](https://docs.cloud.google.com/apigee/docs/apihub/provision), [https://docs.cloud.google.com/apigee/docs/apihub/api-supply-chain](https://docs.cloud.google.com/apigee/docs/apihub/api-supply-chain))
- encrypt (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/vpc-service-control](https://docs.cloud.google.com/apigee/docs/apihub/vpc-service-control), [https://docs.cloud.google.com/apigee/docs/apihub/provision](https://docs.cloud.google.com/apigee/docs/apihub/provision), [https://docs.cloud.google.com/apigee/docs/apihub/api-supply-chain](https://docs.cloud.google.com/apigee/docs/apihub/api-supply-chain))
- firewall (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/vpc-service-control](https://docs.cloud.google.com/apigee/docs/apihub/vpc-service-control), [https://docs.cloud.google.com/apigee/docs/apihub/provision](https://docs.cloud.google.com/apigee/docs/apihub/provision), [https://docs.cloud.google.com/apigee/docs/apihub/api-supply-chain](https://docs.cloud.google.com/apigee/docs/apihub/api-supply-chain))
- iam (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/vpc-service-control](https://docs.cloud.google.com/apigee/docs/apihub/vpc-service-control), [https://docs.cloud.google.com/apigee/docs/apihub/provision](https://docs.cloud.google.com/apigee/docs/apihub/provision), [https://docs.cloud.google.com/apigee/docs/apihub/api-supply-chain](https://docs.cloud.google.com/apigee/docs/apihub/api-supply-chain))
- identity (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/vpc-service-control](https://docs.cloud.google.com/apigee/docs/apihub/vpc-service-control), [https://docs.cloud.google.com/apigee/docs/apihub/provision](https://docs.cloud.google.com/apigee/docs/apihub/provision), [https://docs.cloud.google.com/apigee/docs/apihub/api-supply-chain](https://docs.cloud.google.com/apigee/docs/apihub/api-supply-chain))
- key (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/vpc-service-control](https://docs.cloud.google.com/apigee/docs/apihub/vpc-service-control), [https://docs.cloud.google.com/apigee/docs/apihub/provision](https://docs.cloud.google.com/apigee/docs/apihub/provision), [https://docs.cloud.google.com/apigee/docs/apihub/api-supply-chain](https://docs.cloud.google.com/apigee/docs/apihub/api-supply-chain))
- logging (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/vpc-service-control](https://docs.cloud.google.com/apigee/docs/apihub/vpc-service-control), [https://docs.cloud.google.com/apigee/docs/apihub/provision](https://docs.cloud.google.com/apigee/docs/apihub/provision), [https://docs.cloud.google.com/apigee/docs/apihub/api-supply-chain](https://docs.cloud.google.com/apigee/docs/apihub/api-supply-chain))
- permission (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/vpc-service-control](https://docs.cloud.google.com/apigee/docs/apihub/vpc-service-control), [https://docs.cloud.google.com/apigee/docs/apihub/provision](https://docs.cloud.google.com/apigee/docs/apihub/provision), [https://docs.cloud.google.com/apigee/docs/apihub/api-supply-chain](https://docs.cloud.google.com/apigee/docs/apihub/api-supply-chain))
- policy (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/vpc-service-control](https://docs.cloud.google.com/apigee/docs/apihub/vpc-service-control), [https://docs.cloud.google.com/apigee/docs/apihub/provision](https://docs.cloud.google.com/apigee/docs/apihub/provision), [https://docs.cloud.google.com/apigee/docs/apihub/api-supply-chain](https://docs.cloud.google.com/apigee/docs/apihub/api-supply-chain))
- private (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/vpc-service-control](https://docs.cloud.google.com/apigee/docs/apihub/vpc-service-control), [https://docs.cloud.google.com/apigee/docs/apihub/provision](https://docs.cloud.google.com/apigee/docs/apihub/provision), [https://docs.cloud.google.com/apigee/docs/apihub/api-supply-chain](https://docs.cloud.google.com/apigee/docs/apihub/api-supply-chain))
- role (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/vpc-service-control](https://docs.cloud.google.com/apigee/docs/apihub/vpc-service-control), [https://docs.cloud.google.com/apigee/docs/apihub/provision](https://docs.cloud.google.com/apigee/docs/apihub/provision), [https://docs.cloud.google.com/apigee/docs/apihub/api-supply-chain](https://docs.cloud.google.com/apigee/docs/apihub/api-supply-chain))
- secret (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/vpc-service-control](https://docs.cloud.google.com/apigee/docs/apihub/vpc-service-control), [https://docs.cloud.google.com/apigee/docs/apihub/provision](https://docs.cloud.google.com/apigee/docs/apihub/provision), [https://docs.cloud.google.com/apigee/docs/apihub/api-supply-chain](https://docs.cloud.google.com/apigee/docs/apihub/api-supply-chain))
- security (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/vpc-service-control](https://docs.cloud.google.com/apigee/docs/apihub/vpc-service-control), [https://docs.cloud.google.com/apigee/docs/apihub/provision](https://docs.cloud.google.com/apigee/docs/apihub/provision), [https://docs.cloud.google.com/apigee/docs/apihub/api-supply-chain](https://docs.cloud.google.com/apigee/docs/apihub/api-supply-chain))

## Official Evidence

- [https://docs.cloud.google.com/apigee/docs/apihub/api-supply-chain](https://docs.cloud.google.com/apigee/docs/apihub/api-supply-chain)
- [https://docs.cloud.google.com/apigee/docs/apihub/provision](https://docs.cloud.google.com/apigee/docs/apihub/provision)
- [https://docs.cloud.google.com/apigee/docs/apihub/vpc-service-control](https://docs.cloud.google.com/apigee/docs/apihub/vpc-service-control)
