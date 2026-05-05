# Internal IP address access to protected resources

Product: VPC Service Controls
Feature slug: `internal-ip-address-access-to-protected-resources`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Lets access to VPC Service Controls protected resources be allowed based on an internal IP address.

## Lifecycle

- Latest feature date: 2024-06-27
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/enable-internal-ip-access](https://docs.cloud.google.com/vpc-service-controls/docs/enable-internal-ip-access), [https://docs.cloud.google.com/vpc-service-controls/docs/use-access-levels](https://docs.cloud.google.com/vpc-service-controls/docs/use-access-levels), [https://docs.cloud.google.com/vpc-service-controls/docs/access-level-design](https://docs.cloud.google.com/vpc-service-controls/docs/access-level-design), [https://docs.cloud.google.com/vpc-service-controls/docs/violation-analyzer](https://docs.cloud.google.com/vpc-service-controls/docs/violation-analyzer))
- allow (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/enable-internal-ip-access](https://docs.cloud.google.com/vpc-service-controls/docs/enable-internal-ip-access), [https://docs.cloud.google.com/vpc-service-controls/docs/use-access-levels](https://docs.cloud.google.com/vpc-service-controls/docs/use-access-levels), [https://docs.cloud.google.com/vpc-service-controls/docs/access-level-design](https://docs.cloud.google.com/vpc-service-controls/docs/access-level-design), [https://docs.cloud.google.com/vpc-service-controls/docs/violation-analyzer](https://docs.cloud.google.com/vpc-service-controls/docs/violation-analyzer))
- audit (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/enable-internal-ip-access](https://docs.cloud.google.com/vpc-service-controls/docs/enable-internal-ip-access), [https://docs.cloud.google.com/vpc-service-controls/docs/use-access-levels](https://docs.cloud.google.com/vpc-service-controls/docs/use-access-levels), [https://docs.cloud.google.com/vpc-service-controls/docs/access-level-design](https://docs.cloud.google.com/vpc-service-controls/docs/access-level-design), [https://docs.cloud.google.com/vpc-service-controls/docs/violation-analyzer](https://docs.cloud.google.com/vpc-service-controls/docs/violation-analyzer))
- auth (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/enable-internal-ip-access](https://docs.cloud.google.com/vpc-service-controls/docs/enable-internal-ip-access), [https://docs.cloud.google.com/vpc-service-controls/docs/use-access-levels](https://docs.cloud.google.com/vpc-service-controls/docs/use-access-levels), [https://docs.cloud.google.com/vpc-service-controls/docs/access-level-design](https://docs.cloud.google.com/vpc-service-controls/docs/access-level-design), [https://docs.cloud.google.com/vpc-service-controls/docs/violation-analyzer](https://docs.cloud.google.com/vpc-service-controls/docs/violation-analyzer))
- identity (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/enable-internal-ip-access](https://docs.cloud.google.com/vpc-service-controls/docs/enable-internal-ip-access), [https://docs.cloud.google.com/vpc-service-controls/docs/use-access-levels](https://docs.cloud.google.com/vpc-service-controls/docs/use-access-levels), [https://docs.cloud.google.com/vpc-service-controls/docs/access-level-design](https://docs.cloud.google.com/vpc-service-controls/docs/access-level-design), [https://docs.cloud.google.com/vpc-service-controls/docs/violation-analyzer](https://docs.cloud.google.com/vpc-service-controls/docs/violation-analyzer))
- logging (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/enable-internal-ip-access](https://docs.cloud.google.com/vpc-service-controls/docs/enable-internal-ip-access), [https://docs.cloud.google.com/vpc-service-controls/docs/use-access-levels](https://docs.cloud.google.com/vpc-service-controls/docs/use-access-levels), [https://docs.cloud.google.com/vpc-service-controls/docs/access-level-design](https://docs.cloud.google.com/vpc-service-controls/docs/access-level-design), [https://docs.cloud.google.com/vpc-service-controls/docs/violation-analyzer](https://docs.cloud.google.com/vpc-service-controls/docs/violation-analyzer))
- permission (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/enable-internal-ip-access](https://docs.cloud.google.com/vpc-service-controls/docs/enable-internal-ip-access), [https://docs.cloud.google.com/vpc-service-controls/docs/use-access-levels](https://docs.cloud.google.com/vpc-service-controls/docs/use-access-levels), [https://docs.cloud.google.com/vpc-service-controls/docs/access-level-design](https://docs.cloud.google.com/vpc-service-controls/docs/access-level-design), [https://docs.cloud.google.com/vpc-service-controls/docs/violation-analyzer](https://docs.cloud.google.com/vpc-service-controls/docs/violation-analyzer))
- policy (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/enable-internal-ip-access](https://docs.cloud.google.com/vpc-service-controls/docs/enable-internal-ip-access), [https://docs.cloud.google.com/vpc-service-controls/docs/use-access-levels](https://docs.cloud.google.com/vpc-service-controls/docs/use-access-levels), [https://docs.cloud.google.com/vpc-service-controls/docs/access-level-design](https://docs.cloud.google.com/vpc-service-controls/docs/access-level-design), [https://docs.cloud.google.com/vpc-service-controls/docs/violation-analyzer](https://docs.cloud.google.com/vpc-service-controls/docs/violation-analyzer))
- private (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/enable-internal-ip-access](https://docs.cloud.google.com/vpc-service-controls/docs/enable-internal-ip-access), [https://docs.cloud.google.com/vpc-service-controls/docs/use-access-levels](https://docs.cloud.google.com/vpc-service-controls/docs/use-access-levels), [https://docs.cloud.google.com/vpc-service-controls/docs/access-level-design](https://docs.cloud.google.com/vpc-service-controls/docs/access-level-design), [https://docs.cloud.google.com/vpc-service-controls/docs/violation-analyzer](https://docs.cloud.google.com/vpc-service-controls/docs/violation-analyzer))

## Official Evidence

- [https://docs.cloud.google.com/vpc-service-controls/docs/access-level-design](https://docs.cloud.google.com/vpc-service-controls/docs/access-level-design)
- [https://docs.cloud.google.com/vpc-service-controls/docs/enable-internal-ip-access](https://docs.cloud.google.com/vpc-service-controls/docs/enable-internal-ip-access)
- [https://docs.cloud.google.com/vpc-service-controls/docs/use-access-levels](https://docs.cloud.google.com/vpc-service-controls/docs/use-access-levels)
- [https://docs.cloud.google.com/vpc-service-controls/docs/violation-analyzer](https://docs.cloud.google.com/vpc-service-controls/docs/violation-analyzer)
