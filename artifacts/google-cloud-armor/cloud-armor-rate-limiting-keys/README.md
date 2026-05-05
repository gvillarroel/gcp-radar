# Cloud Armor rate limiting keys

Product: Google Cloud Armor
Feature slug: `cloud-armor-rate-limiting-keys`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud Armor rate limiting supports additional keys including HTTP-PATH, SNI, and REGION-CODE.

## Lifecycle

- Latest feature date: 2022-11-29
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/armor/docs/configure-rate-limiting](https://docs.cloud.google.com/armor/docs/configure-rate-limiting), [https://docs.cloud.google.com/armor/docs/bot-management](https://docs.cloud.google.com/armor/docs/bot-management), [https://docs.cloud.google.com/armor/docs/armor-enterprise-overview](https://docs.cloud.google.com/armor/docs/armor-enterprise-overview), [https://docs.cloud.google.com/armor/docs/security-policy-overview](https://docs.cloud.google.com/armor/docs/security-policy-overview))
- allow (evidence: [https://docs.cloud.google.com/armor/docs/configure-rate-limiting](https://docs.cloud.google.com/armor/docs/configure-rate-limiting), [https://docs.cloud.google.com/armor/docs/bot-management](https://docs.cloud.google.com/armor/docs/bot-management), [https://docs.cloud.google.com/armor/docs/armor-enterprise-overview](https://docs.cloud.google.com/armor/docs/armor-enterprise-overview), [https://docs.cloud.google.com/armor/docs/security-policy-overview](https://docs.cloud.google.com/armor/docs/security-policy-overview))
- armor (evidence: [https://docs.cloud.google.com/armor/docs/configure-rate-limiting](https://docs.cloud.google.com/armor/docs/configure-rate-limiting), [https://docs.cloud.google.com/armor/docs/bot-management](https://docs.cloud.google.com/armor/docs/bot-management), [https://docs.cloud.google.com/armor/docs/armor-enterprise-overview](https://docs.cloud.google.com/armor/docs/armor-enterprise-overview), [https://docs.cloud.google.com/armor/docs/security-policy-overview](https://docs.cloud.google.com/armor/docs/security-policy-overview))
- constraint (evidence: [https://docs.cloud.google.com/armor/docs/configure-rate-limiting](https://docs.cloud.google.com/armor/docs/configure-rate-limiting), [https://docs.cloud.google.com/armor/docs/bot-management](https://docs.cloud.google.com/armor/docs/bot-management), [https://docs.cloud.google.com/armor/docs/armor-enterprise-overview](https://docs.cloud.google.com/armor/docs/armor-enterprise-overview), [https://docs.cloud.google.com/armor/docs/security-policy-overview](https://docs.cloud.google.com/armor/docs/security-policy-overview))
- firewall (evidence: [https://docs.cloud.google.com/armor/docs/configure-rate-limiting](https://docs.cloud.google.com/armor/docs/configure-rate-limiting), [https://docs.cloud.google.com/armor/docs/bot-management](https://docs.cloud.google.com/armor/docs/bot-management), [https://docs.cloud.google.com/armor/docs/armor-enterprise-overview](https://docs.cloud.google.com/armor/docs/armor-enterprise-overview), [https://docs.cloud.google.com/armor/docs/security-policy-overview](https://docs.cloud.google.com/armor/docs/security-policy-overview))
- iam (evidence: [https://docs.cloud.google.com/armor/docs/configure-rate-limiting](https://docs.cloud.google.com/armor/docs/configure-rate-limiting), [https://docs.cloud.google.com/armor/docs/bot-management](https://docs.cloud.google.com/armor/docs/bot-management), [https://docs.cloud.google.com/armor/docs/armor-enterprise-overview](https://docs.cloud.google.com/armor/docs/armor-enterprise-overview), [https://docs.cloud.google.com/armor/docs/security-policy-overview](https://docs.cloud.google.com/armor/docs/security-policy-overview))
- key (evidence: [https://docs.cloud.google.com/armor/docs/configure-rate-limiting](https://docs.cloud.google.com/armor/docs/configure-rate-limiting), [https://docs.cloud.google.com/armor/docs/bot-management](https://docs.cloud.google.com/armor/docs/bot-management), [https://docs.cloud.google.com/armor/docs/armor-enterprise-overview](https://docs.cloud.google.com/armor/docs/armor-enterprise-overview), [https://docs.cloud.google.com/armor/docs/security-policy-overview](https://docs.cloud.google.com/armor/docs/security-policy-overview))
- logging (evidence: [https://docs.cloud.google.com/armor/docs/configure-rate-limiting](https://docs.cloud.google.com/armor/docs/configure-rate-limiting), [https://docs.cloud.google.com/armor/docs/bot-management](https://docs.cloud.google.com/armor/docs/bot-management), [https://docs.cloud.google.com/armor/docs/armor-enterprise-overview](https://docs.cloud.google.com/armor/docs/armor-enterprise-overview), [https://docs.cloud.google.com/armor/docs/security-policy-overview](https://docs.cloud.google.com/armor/docs/security-policy-overview))
- permission (evidence: [https://docs.cloud.google.com/armor/docs/configure-rate-limiting](https://docs.cloud.google.com/armor/docs/configure-rate-limiting), [https://docs.cloud.google.com/armor/docs/bot-management](https://docs.cloud.google.com/armor/docs/bot-management), [https://docs.cloud.google.com/armor/docs/armor-enterprise-overview](https://docs.cloud.google.com/armor/docs/armor-enterprise-overview), [https://docs.cloud.google.com/armor/docs/security-policy-overview](https://docs.cloud.google.com/armor/docs/security-policy-overview))
- policy (evidence: [https://docs.cloud.google.com/armor/docs/configure-rate-limiting](https://docs.cloud.google.com/armor/docs/configure-rate-limiting), [https://docs.cloud.google.com/armor/docs/bot-management](https://docs.cloud.google.com/armor/docs/bot-management), [https://docs.cloud.google.com/armor/docs/armor-enterprise-overview](https://docs.cloud.google.com/armor/docs/armor-enterprise-overview), [https://docs.cloud.google.com/armor/docs/security-policy-overview](https://docs.cloud.google.com/armor/docs/security-policy-overview))
- role (evidence: [https://docs.cloud.google.com/armor/docs/configure-rate-limiting](https://docs.cloud.google.com/armor/docs/configure-rate-limiting), [https://docs.cloud.google.com/armor/docs/bot-management](https://docs.cloud.google.com/armor/docs/bot-management), [https://docs.cloud.google.com/armor/docs/armor-enterprise-overview](https://docs.cloud.google.com/armor/docs/armor-enterprise-overview), [https://docs.cloud.google.com/armor/docs/security-policy-overview](https://docs.cloud.google.com/armor/docs/security-policy-overview))
- security (evidence: [https://docs.cloud.google.com/armor/docs/configure-rate-limiting](https://docs.cloud.google.com/armor/docs/configure-rate-limiting), [https://docs.cloud.google.com/armor/docs/bot-management](https://docs.cloud.google.com/armor/docs/bot-management), [https://docs.cloud.google.com/armor/docs/armor-enterprise-overview](https://docs.cloud.google.com/armor/docs/armor-enterprise-overview), [https://docs.cloud.google.com/armor/docs/security-policy-overview](https://docs.cloud.google.com/armor/docs/security-policy-overview))
- threat (evidence: [https://docs.cloud.google.com/armor/docs/configure-rate-limiting](https://docs.cloud.google.com/armor/docs/configure-rate-limiting), [https://docs.cloud.google.com/armor/docs/bot-management](https://docs.cloud.google.com/armor/docs/bot-management), [https://docs.cloud.google.com/armor/docs/armor-enterprise-overview](https://docs.cloud.google.com/armor/docs/armor-enterprise-overview), [https://docs.cloud.google.com/armor/docs/security-policy-overview](https://docs.cloud.google.com/armor/docs/security-policy-overview))
- token (evidence: [https://docs.cloud.google.com/armor/docs/configure-rate-limiting](https://docs.cloud.google.com/armor/docs/configure-rate-limiting), [https://docs.cloud.google.com/armor/docs/bot-management](https://docs.cloud.google.com/armor/docs/bot-management), [https://docs.cloud.google.com/armor/docs/armor-enterprise-overview](https://docs.cloud.google.com/armor/docs/armor-enterprise-overview), [https://docs.cloud.google.com/armor/docs/security-policy-overview](https://docs.cloud.google.com/armor/docs/security-policy-overview))

## Official Evidence

- [https://docs.cloud.google.com/armor/docs/armor-enterprise-overview](https://docs.cloud.google.com/armor/docs/armor-enterprise-overview)
- [https://docs.cloud.google.com/armor/docs/bot-management](https://docs.cloud.google.com/armor/docs/bot-management)
- [https://docs.cloud.google.com/armor/docs/configure-rate-limiting](https://docs.cloud.google.com/armor/docs/configure-rate-limiting)
- [https://docs.cloud.google.com/armor/docs/security-policy-overview](https://docs.cloud.google.com/armor/docs/security-policy-overview)
