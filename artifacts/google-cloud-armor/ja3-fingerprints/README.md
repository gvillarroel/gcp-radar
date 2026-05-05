# JA3 fingerprints

Product: Google Cloud Armor
Feature slug: `ja3-fingerprints`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud Armor custom rules can use JA3 fingerprints generally available.

## Lifecycle

- Latest feature date: 2024-01-25
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/armor/docs/rules-language-reference](https://docs.cloud.google.com/armor/docs/rules-language-reference), [https://docs.cloud.google.com/armor/docs/configure-rate-limiting](https://docs.cloud.google.com/armor/docs/configure-rate-limiting), [https://docs.cloud.google.com/armor/docs/armor-enterprise-overview](https://docs.cloud.google.com/armor/docs/armor-enterprise-overview), [https://docs.cloud.google.com/armor/docs/common-use-cases](https://docs.cloud.google.com/armor/docs/common-use-cases))
- allow (evidence: [https://docs.cloud.google.com/armor/docs/rules-language-reference](https://docs.cloud.google.com/armor/docs/rules-language-reference), [https://docs.cloud.google.com/armor/docs/configure-rate-limiting](https://docs.cloud.google.com/armor/docs/configure-rate-limiting), [https://docs.cloud.google.com/armor/docs/armor-enterprise-overview](https://docs.cloud.google.com/armor/docs/armor-enterprise-overview), [https://docs.cloud.google.com/armor/docs/common-use-cases](https://docs.cloud.google.com/armor/docs/common-use-cases))
- armor (evidence: [https://docs.cloud.google.com/armor/docs/rules-language-reference](https://docs.cloud.google.com/armor/docs/rules-language-reference), [https://docs.cloud.google.com/armor/docs/configure-rate-limiting](https://docs.cloud.google.com/armor/docs/configure-rate-limiting), [https://docs.cloud.google.com/armor/docs/armor-enterprise-overview](https://docs.cloud.google.com/armor/docs/armor-enterprise-overview), [https://docs.cloud.google.com/armor/docs/common-use-cases](https://docs.cloud.google.com/armor/docs/common-use-cases))
- constraint (evidence: [https://docs.cloud.google.com/armor/docs/rules-language-reference](https://docs.cloud.google.com/armor/docs/rules-language-reference), [https://docs.cloud.google.com/armor/docs/configure-rate-limiting](https://docs.cloud.google.com/armor/docs/configure-rate-limiting), [https://docs.cloud.google.com/armor/docs/armor-enterprise-overview](https://docs.cloud.google.com/armor/docs/armor-enterprise-overview), [https://docs.cloud.google.com/armor/docs/common-use-cases](https://docs.cloud.google.com/armor/docs/common-use-cases))
- iam (evidence: [https://docs.cloud.google.com/armor/docs/rules-language-reference](https://docs.cloud.google.com/armor/docs/rules-language-reference), [https://docs.cloud.google.com/armor/docs/configure-rate-limiting](https://docs.cloud.google.com/armor/docs/configure-rate-limiting), [https://docs.cloud.google.com/armor/docs/armor-enterprise-overview](https://docs.cloud.google.com/armor/docs/armor-enterprise-overview), [https://docs.cloud.google.com/armor/docs/common-use-cases](https://docs.cloud.google.com/armor/docs/common-use-cases))
- identity (evidence: [https://docs.cloud.google.com/armor/docs/rules-language-reference](https://docs.cloud.google.com/armor/docs/rules-language-reference), [https://docs.cloud.google.com/armor/docs/configure-rate-limiting](https://docs.cloud.google.com/armor/docs/configure-rate-limiting), [https://docs.cloud.google.com/armor/docs/armor-enterprise-overview](https://docs.cloud.google.com/armor/docs/armor-enterprise-overview), [https://docs.cloud.google.com/armor/docs/common-use-cases](https://docs.cloud.google.com/armor/docs/common-use-cases))
- key (evidence: [https://docs.cloud.google.com/armor/docs/rules-language-reference](https://docs.cloud.google.com/armor/docs/rules-language-reference), [https://docs.cloud.google.com/armor/docs/configure-rate-limiting](https://docs.cloud.google.com/armor/docs/configure-rate-limiting), [https://docs.cloud.google.com/armor/docs/armor-enterprise-overview](https://docs.cloud.google.com/armor/docs/armor-enterprise-overview), [https://docs.cloud.google.com/armor/docs/common-use-cases](https://docs.cloud.google.com/armor/docs/common-use-cases))
- permission (evidence: [https://docs.cloud.google.com/armor/docs/rules-language-reference](https://docs.cloud.google.com/armor/docs/rules-language-reference), [https://docs.cloud.google.com/armor/docs/configure-rate-limiting](https://docs.cloud.google.com/armor/docs/configure-rate-limiting), [https://docs.cloud.google.com/armor/docs/armor-enterprise-overview](https://docs.cloud.google.com/armor/docs/armor-enterprise-overview), [https://docs.cloud.google.com/armor/docs/common-use-cases](https://docs.cloud.google.com/armor/docs/common-use-cases))
- policy (evidence: [https://docs.cloud.google.com/armor/docs/rules-language-reference](https://docs.cloud.google.com/armor/docs/rules-language-reference), [https://docs.cloud.google.com/armor/docs/configure-rate-limiting](https://docs.cloud.google.com/armor/docs/configure-rate-limiting), [https://docs.cloud.google.com/armor/docs/armor-enterprise-overview](https://docs.cloud.google.com/armor/docs/armor-enterprise-overview), [https://docs.cloud.google.com/armor/docs/common-use-cases](https://docs.cloud.google.com/armor/docs/common-use-cases))
- role (evidence: [https://docs.cloud.google.com/armor/docs/rules-language-reference](https://docs.cloud.google.com/armor/docs/rules-language-reference), [https://docs.cloud.google.com/armor/docs/configure-rate-limiting](https://docs.cloud.google.com/armor/docs/configure-rate-limiting), [https://docs.cloud.google.com/armor/docs/armor-enterprise-overview](https://docs.cloud.google.com/armor/docs/armor-enterprise-overview), [https://docs.cloud.google.com/armor/docs/common-use-cases](https://docs.cloud.google.com/armor/docs/common-use-cases))
- security (evidence: [https://docs.cloud.google.com/armor/docs/rules-language-reference](https://docs.cloud.google.com/armor/docs/rules-language-reference), [https://docs.cloud.google.com/armor/docs/configure-rate-limiting](https://docs.cloud.google.com/armor/docs/configure-rate-limiting), [https://docs.cloud.google.com/armor/docs/armor-enterprise-overview](https://docs.cloud.google.com/armor/docs/armor-enterprise-overview), [https://docs.cloud.google.com/armor/docs/common-use-cases](https://docs.cloud.google.com/armor/docs/common-use-cases))
- threat (evidence: [https://docs.cloud.google.com/armor/docs/rules-language-reference](https://docs.cloud.google.com/armor/docs/rules-language-reference), [https://docs.cloud.google.com/armor/docs/configure-rate-limiting](https://docs.cloud.google.com/armor/docs/configure-rate-limiting), [https://docs.cloud.google.com/armor/docs/armor-enterprise-overview](https://docs.cloud.google.com/armor/docs/armor-enterprise-overview), [https://docs.cloud.google.com/armor/docs/common-use-cases](https://docs.cloud.google.com/armor/docs/common-use-cases))
- token (evidence: [https://docs.cloud.google.com/armor/docs/rules-language-reference](https://docs.cloud.google.com/armor/docs/rules-language-reference), [https://docs.cloud.google.com/armor/docs/configure-rate-limiting](https://docs.cloud.google.com/armor/docs/configure-rate-limiting), [https://docs.cloud.google.com/armor/docs/armor-enterprise-overview](https://docs.cloud.google.com/armor/docs/armor-enterprise-overview), [https://docs.cloud.google.com/armor/docs/common-use-cases](https://docs.cloud.google.com/armor/docs/common-use-cases))

## Official Evidence

- [https://docs.cloud.google.com/armor/docs/armor-enterprise-overview](https://docs.cloud.google.com/armor/docs/armor-enterprise-overview)
- [https://docs.cloud.google.com/armor/docs/common-use-cases](https://docs.cloud.google.com/armor/docs/common-use-cases)
- [https://docs.cloud.google.com/armor/docs/configure-rate-limiting](https://docs.cloud.google.com/armor/docs/configure-rate-limiting)
- [https://docs.cloud.google.com/armor/docs/rules-language-reference](https://docs.cloud.google.com/armor/docs/rules-language-reference)
