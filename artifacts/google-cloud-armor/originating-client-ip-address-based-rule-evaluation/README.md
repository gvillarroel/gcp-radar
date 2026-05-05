# Originating client IP address-based rule evaluation

Product: Google Cloud Armor
Feature slug: `originating-client-ip-address-based-rule-evaluation`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud Armor can evaluate custom rules or Adaptive Protection using the originating client IP address.

## Lifecycle

- Latest feature date: 2023-07-17
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow (evidence: [https://docs.cloud.google.com/armor/docs/rules-language-reference](https://docs.cloud.google.com/armor/docs/rules-language-reference), [https://docs.cloud.google.com/armor/docs/address-groups-using](https://docs.cloud.google.com/armor/docs/address-groups-using), [https://docs.cloud.google.com/armor/docs/adaptive-protection-overview](https://docs.cloud.google.com/armor/docs/adaptive-protection-overview), [https://docs.cloud.google.com/armor/docs/configure-rate-limiting](https://docs.cloud.google.com/armor/docs/configure-rate-limiting))
- armor (evidence: [https://docs.cloud.google.com/armor/docs/rules-language-reference](https://docs.cloud.google.com/armor/docs/rules-language-reference), [https://docs.cloud.google.com/armor/docs/address-groups-using](https://docs.cloud.google.com/armor/docs/address-groups-using), [https://docs.cloud.google.com/armor/docs/adaptive-protection-overview](https://docs.cloud.google.com/armor/docs/adaptive-protection-overview), [https://docs.cloud.google.com/armor/docs/configure-rate-limiting](https://docs.cloud.google.com/armor/docs/configure-rate-limiting))
- iam (evidence: [https://docs.cloud.google.com/armor/docs/rules-language-reference](https://docs.cloud.google.com/armor/docs/rules-language-reference), [https://docs.cloud.google.com/armor/docs/address-groups-using](https://docs.cloud.google.com/armor/docs/address-groups-using), [https://docs.cloud.google.com/armor/docs/adaptive-protection-overview](https://docs.cloud.google.com/armor/docs/adaptive-protection-overview), [https://docs.cloud.google.com/armor/docs/configure-rate-limiting](https://docs.cloud.google.com/armor/docs/configure-rate-limiting))
- key (evidence: [https://docs.cloud.google.com/armor/docs/rules-language-reference](https://docs.cloud.google.com/armor/docs/rules-language-reference), [https://docs.cloud.google.com/armor/docs/address-groups-using](https://docs.cloud.google.com/armor/docs/address-groups-using), [https://docs.cloud.google.com/armor/docs/adaptive-protection-overview](https://docs.cloud.google.com/armor/docs/adaptive-protection-overview), [https://docs.cloud.google.com/armor/docs/configure-rate-limiting](https://docs.cloud.google.com/armor/docs/configure-rate-limiting))
- logging (evidence: [https://docs.cloud.google.com/armor/docs/rules-language-reference](https://docs.cloud.google.com/armor/docs/rules-language-reference), [https://docs.cloud.google.com/armor/docs/address-groups-using](https://docs.cloud.google.com/armor/docs/address-groups-using), [https://docs.cloud.google.com/armor/docs/adaptive-protection-overview](https://docs.cloud.google.com/armor/docs/adaptive-protection-overview), [https://docs.cloud.google.com/armor/docs/configure-rate-limiting](https://docs.cloud.google.com/armor/docs/configure-rate-limiting))
- permission (evidence: [https://docs.cloud.google.com/armor/docs/rules-language-reference](https://docs.cloud.google.com/armor/docs/rules-language-reference), [https://docs.cloud.google.com/armor/docs/address-groups-using](https://docs.cloud.google.com/armor/docs/address-groups-using), [https://docs.cloud.google.com/armor/docs/adaptive-protection-overview](https://docs.cloud.google.com/armor/docs/adaptive-protection-overview), [https://docs.cloud.google.com/armor/docs/configure-rate-limiting](https://docs.cloud.google.com/armor/docs/configure-rate-limiting))
- policy (evidence: [https://docs.cloud.google.com/armor/docs/rules-language-reference](https://docs.cloud.google.com/armor/docs/rules-language-reference), [https://docs.cloud.google.com/armor/docs/address-groups-using](https://docs.cloud.google.com/armor/docs/address-groups-using), [https://docs.cloud.google.com/armor/docs/adaptive-protection-overview](https://docs.cloud.google.com/armor/docs/adaptive-protection-overview), [https://docs.cloud.google.com/armor/docs/configure-rate-limiting](https://docs.cloud.google.com/armor/docs/configure-rate-limiting))
- role (evidence: [https://docs.cloud.google.com/armor/docs/rules-language-reference](https://docs.cloud.google.com/armor/docs/rules-language-reference), [https://docs.cloud.google.com/armor/docs/address-groups-using](https://docs.cloud.google.com/armor/docs/address-groups-using), [https://docs.cloud.google.com/armor/docs/adaptive-protection-overview](https://docs.cloud.google.com/armor/docs/adaptive-protection-overview), [https://docs.cloud.google.com/armor/docs/configure-rate-limiting](https://docs.cloud.google.com/armor/docs/configure-rate-limiting))
- security (evidence: [https://docs.cloud.google.com/armor/docs/rules-language-reference](https://docs.cloud.google.com/armor/docs/rules-language-reference), [https://docs.cloud.google.com/armor/docs/address-groups-using](https://docs.cloud.google.com/armor/docs/address-groups-using), [https://docs.cloud.google.com/armor/docs/adaptive-protection-overview](https://docs.cloud.google.com/armor/docs/adaptive-protection-overview), [https://docs.cloud.google.com/armor/docs/configure-rate-limiting](https://docs.cloud.google.com/armor/docs/configure-rate-limiting))
- threat (evidence: [https://docs.cloud.google.com/armor/docs/rules-language-reference](https://docs.cloud.google.com/armor/docs/rules-language-reference), [https://docs.cloud.google.com/armor/docs/address-groups-using](https://docs.cloud.google.com/armor/docs/address-groups-using), [https://docs.cloud.google.com/armor/docs/adaptive-protection-overview](https://docs.cloud.google.com/armor/docs/adaptive-protection-overview), [https://docs.cloud.google.com/armor/docs/configure-rate-limiting](https://docs.cloud.google.com/armor/docs/configure-rate-limiting))

## Official Evidence

- [https://docs.cloud.google.com/armor/docs/adaptive-protection-overview](https://docs.cloud.google.com/armor/docs/adaptive-protection-overview)
- [https://docs.cloud.google.com/armor/docs/address-groups-using](https://docs.cloud.google.com/armor/docs/address-groups-using)
- [https://docs.cloud.google.com/armor/docs/configure-rate-limiting](https://docs.cloud.google.com/armor/docs/configure-rate-limiting)
- [https://docs.cloud.google.com/armor/docs/rules-language-reference](https://docs.cloud.google.com/armor/docs/rules-language-reference)
