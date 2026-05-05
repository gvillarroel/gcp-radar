# Cloud DNS routing policy internal Application Load Balancer health-check targets

Product: Cloud DNS
Feature slug: `cloud-dns-routing-policy-internal-application-load-balancer-health-check-targets`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud DNS routing policies now support using an internal Application Load Balancer as a health-check target.

## Lifecycle

- Latest feature date: 2023-08-07
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/dns/docs/configure-routing-policies](https://docs.cloud.google.com/dns/docs/configure-routing-policies), [https://docs.cloud.google.com/dns/docs/create-custom-constraints](https://docs.cloud.google.com/dns/docs/create-custom-constraints), [https://docs.cloud.google.com/dns/docs/best-practices](https://docs.cloud.google.com/dns/docs/best-practices), [https://docs.cloud.google.com/dns/docs/key-terms](https://docs.cloud.google.com/dns/docs/key-terms))
- allow (evidence: [https://docs.cloud.google.com/dns/docs/configure-routing-policies](https://docs.cloud.google.com/dns/docs/configure-routing-policies), [https://docs.cloud.google.com/dns/docs/create-custom-constraints](https://docs.cloud.google.com/dns/docs/create-custom-constraints), [https://docs.cloud.google.com/dns/docs/best-practices](https://docs.cloud.google.com/dns/docs/best-practices), [https://docs.cloud.google.com/dns/docs/key-terms](https://docs.cloud.google.com/dns/docs/key-terms))
- audit (evidence: [https://docs.cloud.google.com/dns/docs/configure-routing-policies](https://docs.cloud.google.com/dns/docs/configure-routing-policies), [https://docs.cloud.google.com/dns/docs/create-custom-constraints](https://docs.cloud.google.com/dns/docs/create-custom-constraints), [https://docs.cloud.google.com/dns/docs/best-practices](https://docs.cloud.google.com/dns/docs/best-practices), [https://docs.cloud.google.com/dns/docs/key-terms](https://docs.cloud.google.com/dns/docs/key-terms))
- auth (evidence: [https://docs.cloud.google.com/dns/docs/configure-routing-policies](https://docs.cloud.google.com/dns/docs/configure-routing-policies), [https://docs.cloud.google.com/dns/docs/create-custom-constraints](https://docs.cloud.google.com/dns/docs/create-custom-constraints), [https://docs.cloud.google.com/dns/docs/best-practices](https://docs.cloud.google.com/dns/docs/best-practices), [https://docs.cloud.google.com/dns/docs/key-terms](https://docs.cloud.google.com/dns/docs/key-terms))
- constraint (evidence: [https://docs.cloud.google.com/dns/docs/configure-routing-policies](https://docs.cloud.google.com/dns/docs/configure-routing-policies), [https://docs.cloud.google.com/dns/docs/create-custom-constraints](https://docs.cloud.google.com/dns/docs/create-custom-constraints), [https://docs.cloud.google.com/dns/docs/best-practices](https://docs.cloud.google.com/dns/docs/best-practices), [https://docs.cloud.google.com/dns/docs/key-terms](https://docs.cloud.google.com/dns/docs/key-terms))
- dnssec (evidence: [https://docs.cloud.google.com/dns/docs/configure-routing-policies](https://docs.cloud.google.com/dns/docs/configure-routing-policies), [https://docs.cloud.google.com/dns/docs/create-custom-constraints](https://docs.cloud.google.com/dns/docs/create-custom-constraints), [https://docs.cloud.google.com/dns/docs/best-practices](https://docs.cloud.google.com/dns/docs/best-practices), [https://docs.cloud.google.com/dns/docs/key-terms](https://docs.cloud.google.com/dns/docs/key-terms))
- key (evidence: [https://docs.cloud.google.com/dns/docs/configure-routing-policies](https://docs.cloud.google.com/dns/docs/configure-routing-policies), [https://docs.cloud.google.com/dns/docs/create-custom-constraints](https://docs.cloud.google.com/dns/docs/create-custom-constraints), [https://docs.cloud.google.com/dns/docs/best-practices](https://docs.cloud.google.com/dns/docs/best-practices), [https://docs.cloud.google.com/dns/docs/key-terms](https://docs.cloud.google.com/dns/docs/key-terms))
- logging (evidence: [https://docs.cloud.google.com/dns/docs/configure-routing-policies](https://docs.cloud.google.com/dns/docs/configure-routing-policies), [https://docs.cloud.google.com/dns/docs/create-custom-constraints](https://docs.cloud.google.com/dns/docs/create-custom-constraints), [https://docs.cloud.google.com/dns/docs/best-practices](https://docs.cloud.google.com/dns/docs/best-practices), [https://docs.cloud.google.com/dns/docs/key-terms](https://docs.cloud.google.com/dns/docs/key-terms))
- policy (evidence: [https://docs.cloud.google.com/dns/docs/configure-routing-policies](https://docs.cloud.google.com/dns/docs/configure-routing-policies), [https://docs.cloud.google.com/dns/docs/create-custom-constraints](https://docs.cloud.google.com/dns/docs/create-custom-constraints), [https://docs.cloud.google.com/dns/docs/best-practices](https://docs.cloud.google.com/dns/docs/best-practices), [https://docs.cloud.google.com/dns/docs/key-terms](https://docs.cloud.google.com/dns/docs/key-terms))
- private (evidence: [https://docs.cloud.google.com/dns/docs/configure-routing-policies](https://docs.cloud.google.com/dns/docs/configure-routing-policies), [https://docs.cloud.google.com/dns/docs/create-custom-constraints](https://docs.cloud.google.com/dns/docs/create-custom-constraints), [https://docs.cloud.google.com/dns/docs/best-practices](https://docs.cloud.google.com/dns/docs/best-practices), [https://docs.cloud.google.com/dns/docs/key-terms](https://docs.cloud.google.com/dns/docs/key-terms))

## Official Evidence

- [https://docs.cloud.google.com/dns/docs/best-practices](https://docs.cloud.google.com/dns/docs/best-practices)
- [https://docs.cloud.google.com/dns/docs/configure-routing-policies](https://docs.cloud.google.com/dns/docs/configure-routing-policies)
- [https://docs.cloud.google.com/dns/docs/create-custom-constraints](https://docs.cloud.google.com/dns/docs/create-custom-constraints)
- [https://docs.cloud.google.com/dns/docs/key-terms](https://docs.cloud.google.com/dns/docs/key-terms)
