# Cloud DNS routing policy management

Product: Cloud DNS
Feature slug: `cloud-dns-routing-policy-management`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud DNS now supports management of routing policies.

## Lifecycle

- Latest feature date: 2022-01-21
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/dns/docs/configure-routing-policies](https://docs.cloud.google.com/dns/docs/configure-routing-policies), [https://docs.cloud.google.com/dns/docs/create-custom-constraints](https://docs.cloud.google.com/dns/docs/create-custom-constraints), [https://docs.cloud.google.com/dns/docs/policies](https://docs.cloud.google.com/dns/docs/policies), [https://docs.cloud.google.com/dns/docs/overview](https://docs.cloud.google.com/dns/docs/overview))
- audit (evidence: [https://docs.cloud.google.com/dns/docs/configure-routing-policies](https://docs.cloud.google.com/dns/docs/configure-routing-policies), [https://docs.cloud.google.com/dns/docs/create-custom-constraints](https://docs.cloud.google.com/dns/docs/create-custom-constraints), [https://docs.cloud.google.com/dns/docs/policies](https://docs.cloud.google.com/dns/docs/policies), [https://docs.cloud.google.com/dns/docs/overview](https://docs.cloud.google.com/dns/docs/overview))
- auth (evidence: [https://docs.cloud.google.com/dns/docs/configure-routing-policies](https://docs.cloud.google.com/dns/docs/configure-routing-policies), [https://docs.cloud.google.com/dns/docs/create-custom-constraints](https://docs.cloud.google.com/dns/docs/create-custom-constraints), [https://docs.cloud.google.com/dns/docs/policies](https://docs.cloud.google.com/dns/docs/policies), [https://docs.cloud.google.com/dns/docs/overview](https://docs.cloud.google.com/dns/docs/overview))
- constraint (evidence: [https://docs.cloud.google.com/dns/docs/configure-routing-policies](https://docs.cloud.google.com/dns/docs/configure-routing-policies), [https://docs.cloud.google.com/dns/docs/create-custom-constraints](https://docs.cloud.google.com/dns/docs/create-custom-constraints), [https://docs.cloud.google.com/dns/docs/policies](https://docs.cloud.google.com/dns/docs/policies), [https://docs.cloud.google.com/dns/docs/overview](https://docs.cloud.google.com/dns/docs/overview))
- dnssec (evidence: [https://docs.cloud.google.com/dns/docs/configure-routing-policies](https://docs.cloud.google.com/dns/docs/configure-routing-policies), [https://docs.cloud.google.com/dns/docs/create-custom-constraints](https://docs.cloud.google.com/dns/docs/create-custom-constraints), [https://docs.cloud.google.com/dns/docs/policies](https://docs.cloud.google.com/dns/docs/policies), [https://docs.cloud.google.com/dns/docs/overview](https://docs.cloud.google.com/dns/docs/overview))
- iam (evidence: [https://docs.cloud.google.com/dns/docs/configure-routing-policies](https://docs.cloud.google.com/dns/docs/configure-routing-policies), [https://docs.cloud.google.com/dns/docs/create-custom-constraints](https://docs.cloud.google.com/dns/docs/create-custom-constraints), [https://docs.cloud.google.com/dns/docs/policies](https://docs.cloud.google.com/dns/docs/policies), [https://docs.cloud.google.com/dns/docs/overview](https://docs.cloud.google.com/dns/docs/overview))
- identity (evidence: [https://docs.cloud.google.com/dns/docs/configure-routing-policies](https://docs.cloud.google.com/dns/docs/configure-routing-policies), [https://docs.cloud.google.com/dns/docs/create-custom-constraints](https://docs.cloud.google.com/dns/docs/create-custom-constraints), [https://docs.cloud.google.com/dns/docs/policies](https://docs.cloud.google.com/dns/docs/policies), [https://docs.cloud.google.com/dns/docs/overview](https://docs.cloud.google.com/dns/docs/overview))
- key (evidence: [https://docs.cloud.google.com/dns/docs/configure-routing-policies](https://docs.cloud.google.com/dns/docs/configure-routing-policies), [https://docs.cloud.google.com/dns/docs/create-custom-constraints](https://docs.cloud.google.com/dns/docs/create-custom-constraints), [https://docs.cloud.google.com/dns/docs/policies](https://docs.cloud.google.com/dns/docs/policies), [https://docs.cloud.google.com/dns/docs/overview](https://docs.cloud.google.com/dns/docs/overview))
- logging (evidence: [https://docs.cloud.google.com/dns/docs/configure-routing-policies](https://docs.cloud.google.com/dns/docs/configure-routing-policies), [https://docs.cloud.google.com/dns/docs/create-custom-constraints](https://docs.cloud.google.com/dns/docs/create-custom-constraints), [https://docs.cloud.google.com/dns/docs/policies](https://docs.cloud.google.com/dns/docs/policies), [https://docs.cloud.google.com/dns/docs/overview](https://docs.cloud.google.com/dns/docs/overview))
- permission (evidence: [https://docs.cloud.google.com/dns/docs/configure-routing-policies](https://docs.cloud.google.com/dns/docs/configure-routing-policies), [https://docs.cloud.google.com/dns/docs/create-custom-constraints](https://docs.cloud.google.com/dns/docs/create-custom-constraints), [https://docs.cloud.google.com/dns/docs/policies](https://docs.cloud.google.com/dns/docs/policies), [https://docs.cloud.google.com/dns/docs/overview](https://docs.cloud.google.com/dns/docs/overview))
- policy (evidence: [https://docs.cloud.google.com/dns/docs/configure-routing-policies](https://docs.cloud.google.com/dns/docs/configure-routing-policies), [https://docs.cloud.google.com/dns/docs/create-custom-constraints](https://docs.cloud.google.com/dns/docs/create-custom-constraints), [https://docs.cloud.google.com/dns/docs/policies](https://docs.cloud.google.com/dns/docs/policies), [https://docs.cloud.google.com/dns/docs/overview](https://docs.cloud.google.com/dns/docs/overview))
- private (evidence: [https://docs.cloud.google.com/dns/docs/configure-routing-policies](https://docs.cloud.google.com/dns/docs/configure-routing-policies), [https://docs.cloud.google.com/dns/docs/create-custom-constraints](https://docs.cloud.google.com/dns/docs/create-custom-constraints), [https://docs.cloud.google.com/dns/docs/policies](https://docs.cloud.google.com/dns/docs/policies), [https://docs.cloud.google.com/dns/docs/overview](https://docs.cloud.google.com/dns/docs/overview))
- role (evidence: [https://docs.cloud.google.com/dns/docs/configure-routing-policies](https://docs.cloud.google.com/dns/docs/configure-routing-policies), [https://docs.cloud.google.com/dns/docs/create-custom-constraints](https://docs.cloud.google.com/dns/docs/create-custom-constraints), [https://docs.cloud.google.com/dns/docs/policies](https://docs.cloud.google.com/dns/docs/policies), [https://docs.cloud.google.com/dns/docs/overview](https://docs.cloud.google.com/dns/docs/overview))
- security (evidence: [https://docs.cloud.google.com/dns/docs/configure-routing-policies](https://docs.cloud.google.com/dns/docs/configure-routing-policies), [https://docs.cloud.google.com/dns/docs/create-custom-constraints](https://docs.cloud.google.com/dns/docs/create-custom-constraints), [https://docs.cloud.google.com/dns/docs/policies](https://docs.cloud.google.com/dns/docs/policies), [https://docs.cloud.google.com/dns/docs/overview](https://docs.cloud.google.com/dns/docs/overview))

## Official Evidence

- [https://docs.cloud.google.com/dns/docs/configure-routing-policies](https://docs.cloud.google.com/dns/docs/configure-routing-policies)
- [https://docs.cloud.google.com/dns/docs/create-custom-constraints](https://docs.cloud.google.com/dns/docs/create-custom-constraints)
- [https://docs.cloud.google.com/dns/docs/overview](https://docs.cloud.google.com/dns/docs/overview)
- [https://docs.cloud.google.com/dns/docs/policies](https://docs.cloud.google.com/dns/docs/policies)
