# Cloud DNS routing policy health checks for cross-region internal Application Load Balancers

Product: Cloud DNS
Feature slug: `cloud-dns-routing-policy-health-checks-for-cross-region-internal-application-load-balancers`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud DNS routing policies can target a cross-region internal Application Load Balancer for health checks.

## Lifecycle

- Latest feature date: 2023-08-14
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/dns/docs/configure-routing-policies](https://docs.cloud.google.com/dns/docs/configure-routing-policies), [https://docs.cloud.google.com/dns/docs/create-custom-constraints](https://docs.cloud.google.com/dns/docs/create-custom-constraints), [https://docs.cloud.google.com/dns/docs/best-practices](https://docs.cloud.google.com/dns/docs/best-practices), [https://docs.cloud.google.com/dns/docs/policies](https://docs.cloud.google.com/dns/docs/policies))
- allow (evidence: [https://docs.cloud.google.com/dns/docs/configure-routing-policies](https://docs.cloud.google.com/dns/docs/configure-routing-policies), [https://docs.cloud.google.com/dns/docs/create-custom-constraints](https://docs.cloud.google.com/dns/docs/create-custom-constraints), [https://docs.cloud.google.com/dns/docs/best-practices](https://docs.cloud.google.com/dns/docs/best-practices), [https://docs.cloud.google.com/dns/docs/policies](https://docs.cloud.google.com/dns/docs/policies))
- audit (evidence: [https://docs.cloud.google.com/dns/docs/configure-routing-policies](https://docs.cloud.google.com/dns/docs/configure-routing-policies), [https://docs.cloud.google.com/dns/docs/create-custom-constraints](https://docs.cloud.google.com/dns/docs/create-custom-constraints), [https://docs.cloud.google.com/dns/docs/best-practices](https://docs.cloud.google.com/dns/docs/best-practices), [https://docs.cloud.google.com/dns/docs/policies](https://docs.cloud.google.com/dns/docs/policies))
- constraint (evidence: [https://docs.cloud.google.com/dns/docs/configure-routing-policies](https://docs.cloud.google.com/dns/docs/configure-routing-policies), [https://docs.cloud.google.com/dns/docs/create-custom-constraints](https://docs.cloud.google.com/dns/docs/create-custom-constraints), [https://docs.cloud.google.com/dns/docs/best-practices](https://docs.cloud.google.com/dns/docs/best-practices), [https://docs.cloud.google.com/dns/docs/policies](https://docs.cloud.google.com/dns/docs/policies))
- dnssec (evidence: [https://docs.cloud.google.com/dns/docs/configure-routing-policies](https://docs.cloud.google.com/dns/docs/configure-routing-policies), [https://docs.cloud.google.com/dns/docs/create-custom-constraints](https://docs.cloud.google.com/dns/docs/create-custom-constraints), [https://docs.cloud.google.com/dns/docs/best-practices](https://docs.cloud.google.com/dns/docs/best-practices), [https://docs.cloud.google.com/dns/docs/policies](https://docs.cloud.google.com/dns/docs/policies))
- key (evidence: [https://docs.cloud.google.com/dns/docs/configure-routing-policies](https://docs.cloud.google.com/dns/docs/configure-routing-policies), [https://docs.cloud.google.com/dns/docs/create-custom-constraints](https://docs.cloud.google.com/dns/docs/create-custom-constraints), [https://docs.cloud.google.com/dns/docs/best-practices](https://docs.cloud.google.com/dns/docs/best-practices), [https://docs.cloud.google.com/dns/docs/policies](https://docs.cloud.google.com/dns/docs/policies))
- logging (evidence: [https://docs.cloud.google.com/dns/docs/configure-routing-policies](https://docs.cloud.google.com/dns/docs/configure-routing-policies), [https://docs.cloud.google.com/dns/docs/create-custom-constraints](https://docs.cloud.google.com/dns/docs/create-custom-constraints), [https://docs.cloud.google.com/dns/docs/best-practices](https://docs.cloud.google.com/dns/docs/best-practices), [https://docs.cloud.google.com/dns/docs/policies](https://docs.cloud.google.com/dns/docs/policies))
- permission (evidence: [https://docs.cloud.google.com/dns/docs/configure-routing-policies](https://docs.cloud.google.com/dns/docs/configure-routing-policies), [https://docs.cloud.google.com/dns/docs/create-custom-constraints](https://docs.cloud.google.com/dns/docs/create-custom-constraints), [https://docs.cloud.google.com/dns/docs/best-practices](https://docs.cloud.google.com/dns/docs/best-practices), [https://docs.cloud.google.com/dns/docs/policies](https://docs.cloud.google.com/dns/docs/policies))
- policy (evidence: [https://docs.cloud.google.com/dns/docs/configure-routing-policies](https://docs.cloud.google.com/dns/docs/configure-routing-policies), [https://docs.cloud.google.com/dns/docs/create-custom-constraints](https://docs.cloud.google.com/dns/docs/create-custom-constraints), [https://docs.cloud.google.com/dns/docs/best-practices](https://docs.cloud.google.com/dns/docs/best-practices), [https://docs.cloud.google.com/dns/docs/policies](https://docs.cloud.google.com/dns/docs/policies))
- private (evidence: [https://docs.cloud.google.com/dns/docs/configure-routing-policies](https://docs.cloud.google.com/dns/docs/configure-routing-policies), [https://docs.cloud.google.com/dns/docs/create-custom-constraints](https://docs.cloud.google.com/dns/docs/create-custom-constraints), [https://docs.cloud.google.com/dns/docs/best-practices](https://docs.cloud.google.com/dns/docs/best-practices), [https://docs.cloud.google.com/dns/docs/policies](https://docs.cloud.google.com/dns/docs/policies))
- role (evidence: [https://docs.cloud.google.com/dns/docs/configure-routing-policies](https://docs.cloud.google.com/dns/docs/configure-routing-policies), [https://docs.cloud.google.com/dns/docs/create-custom-constraints](https://docs.cloud.google.com/dns/docs/create-custom-constraints), [https://docs.cloud.google.com/dns/docs/best-practices](https://docs.cloud.google.com/dns/docs/best-practices), [https://docs.cloud.google.com/dns/docs/policies](https://docs.cloud.google.com/dns/docs/policies))

## Official Evidence

- [https://docs.cloud.google.com/dns/docs/best-practices](https://docs.cloud.google.com/dns/docs/best-practices)
- [https://docs.cloud.google.com/dns/docs/configure-routing-policies](https://docs.cloud.google.com/dns/docs/configure-routing-policies)
- [https://docs.cloud.google.com/dns/docs/create-custom-constraints](https://docs.cloud.google.com/dns/docs/create-custom-constraints)
- [https://docs.cloud.google.com/dns/docs/policies](https://docs.cloud.google.com/dns/docs/policies)
