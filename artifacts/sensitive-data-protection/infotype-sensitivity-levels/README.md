# InfoType sensitivity levels

Product: Sensitive Data Protection
Feature slug: `infotype-sensitivity-levels`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

You can assign sensitivity levels to built-in or custom infoTypes so Cloud DLP can use them when calculating table sensitivity during profiling.

## Lifecycle

- Latest feature date: 2023-04-17
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference](https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference), [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes), [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes))
- authorization (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference](https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference), [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes), [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes))
- certificate (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference](https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference), [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes), [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes))
- credential (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference](https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference), [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes), [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes))
- encrypt (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference](https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference), [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes), [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes))
- iam (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference](https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference), [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes), [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes))
- identity (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference](https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference), [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes), [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes))
- key (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference](https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference), [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes), [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes))
- policy (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference](https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference), [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes), [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes))
- secret (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference](https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference), [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes), [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes))
- security (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference](https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference), [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes), [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes))
- token (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference](https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference), [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes), [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes))

## Official Evidence

- [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference](https://docs.cloud.google.com/sensitive-data-protection/docs/infotypes-reference)
