# Direct VPC egress Cloud NAT support

Product: Cloud Run
Feature slug: `direct-vpc-egress-cloud-nat-support`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Direct VPC egress can use Cloud NAT with public NAT IP addresses.

## Lifecycle

- Latest feature date: 2024-03-14
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/run/docs/tutorials/secure-services](https://docs.cloud.google.com/run/docs/tutorials/secure-services), [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract), [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract))
- auth (evidence: [https://docs.cloud.google.com/run/docs/tutorials/secure-services](https://docs.cloud.google.com/run/docs/tutorials/secure-services), [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract), [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract))
- authorization (evidence: [https://docs.cloud.google.com/run/docs/tutorials/secure-services](https://docs.cloud.google.com/run/docs/tutorials/secure-services), [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract), [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract))
- credential (evidence: [https://docs.cloud.google.com/run/docs/tutorials/secure-services](https://docs.cloud.google.com/run/docs/tutorials/secure-services), [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract), [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract))
- identity (evidence: [https://docs.cloud.google.com/run/docs/tutorials/secure-services](https://docs.cloud.google.com/run/docs/tutorials/secure-services), [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract), [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract))
- private (evidence: [https://docs.cloud.google.com/run/docs/tutorials/secure-services](https://docs.cloud.google.com/run/docs/tutorials/secure-services), [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract), [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract))
- security (evidence: [https://docs.cloud.google.com/run/docs/tutorials/secure-services](https://docs.cloud.google.com/run/docs/tutorials/secure-services), [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract), [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract))
- token (evidence: [https://docs.cloud.google.com/run/docs/tutorials/secure-services](https://docs.cloud.google.com/run/docs/tutorials/secure-services), [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract), [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract))

## Official Evidence

- [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- [https://docs.cloud.google.com/run/docs/tutorials/secure-services](https://docs.cloud.google.com/run/docs/tutorials/secure-services)
