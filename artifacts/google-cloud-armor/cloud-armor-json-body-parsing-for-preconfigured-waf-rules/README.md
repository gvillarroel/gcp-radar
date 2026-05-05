# Cloud Armor JSON body parsing for preconfigured WAF rules

Product: Google Cloud Armor
Feature slug: `cloud-armor-json-body-parsing-for-preconfigured-waf-rules`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud Armor can parse JSON content in POST bodies when evaluating preconfigured WAF rules.

## Lifecycle

- Latest feature date: 2021-06-30
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow (evidence: [https://docs.cloud.google.com/armor/docs/content-parsing](https://docs.cloud.google.com/armor/docs/content-parsing), [https://docs.cloud.google.com/armor/docs/rule-tuning](https://docs.cloud.google.com/armor/docs/rule-tuning), [https://docs.cloud.google.com/armor/docs/configure-waf](https://docs.cloud.google.com/armor/docs/configure-waf), [https://docs.cloud.google.com/armor/docs/best-practices](https://docs.cloud.google.com/armor/docs/best-practices))
- armor (evidence: [https://docs.cloud.google.com/armor/docs/content-parsing](https://docs.cloud.google.com/armor/docs/content-parsing), [https://docs.cloud.google.com/armor/docs/rule-tuning](https://docs.cloud.google.com/armor/docs/rule-tuning), [https://docs.cloud.google.com/armor/docs/configure-waf](https://docs.cloud.google.com/armor/docs/configure-waf), [https://docs.cloud.google.com/armor/docs/best-practices](https://docs.cloud.google.com/armor/docs/best-practices))
- constraint (evidence: [https://docs.cloud.google.com/armor/docs/content-parsing](https://docs.cloud.google.com/armor/docs/content-parsing), [https://docs.cloud.google.com/armor/docs/rule-tuning](https://docs.cloud.google.com/armor/docs/rule-tuning), [https://docs.cloud.google.com/armor/docs/configure-waf](https://docs.cloud.google.com/armor/docs/configure-waf), [https://docs.cloud.google.com/armor/docs/best-practices](https://docs.cloud.google.com/armor/docs/best-practices))
- policy (evidence: [https://docs.cloud.google.com/armor/docs/content-parsing](https://docs.cloud.google.com/armor/docs/content-parsing), [https://docs.cloud.google.com/armor/docs/rule-tuning](https://docs.cloud.google.com/armor/docs/rule-tuning), [https://docs.cloud.google.com/armor/docs/configure-waf](https://docs.cloud.google.com/armor/docs/configure-waf), [https://docs.cloud.google.com/armor/docs/best-practices](https://docs.cloud.google.com/armor/docs/best-practices))
- security (evidence: [https://docs.cloud.google.com/armor/docs/content-parsing](https://docs.cloud.google.com/armor/docs/content-parsing), [https://docs.cloud.google.com/armor/docs/rule-tuning](https://docs.cloud.google.com/armor/docs/rule-tuning), [https://docs.cloud.google.com/armor/docs/configure-waf](https://docs.cloud.google.com/armor/docs/configure-waf), [https://docs.cloud.google.com/armor/docs/best-practices](https://docs.cloud.google.com/armor/docs/best-practices))

## Official Evidence

- [https://docs.cloud.google.com/armor/docs/best-practices](https://docs.cloud.google.com/armor/docs/best-practices)
- [https://docs.cloud.google.com/armor/docs/configure-waf](https://docs.cloud.google.com/armor/docs/configure-waf)
- [https://docs.cloud.google.com/armor/docs/content-parsing](https://docs.cloud.google.com/armor/docs/content-parsing)
- [https://docs.cloud.google.com/armor/docs/rule-tuning](https://docs.cloud.google.com/armor/docs/rule-tuning)
