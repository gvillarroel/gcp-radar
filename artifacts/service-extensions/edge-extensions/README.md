# Edge extensions

Product: Service Extensions
Feature slug: `edge-extensions`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Service Extensions now supports edge extensions to modify request headers early in the request lifecycle for global external Application Load Balancers to influence caching and routing behavior.

## Lifecycle

- Latest feature date: 2025-06-23
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- armor (evidence: [https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview](https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview), [https://docs.cloud.google.com/service-extensions/docs/configure-edge-extensions](https://docs.cloud.google.com/service-extensions/docs/configure-edge-extensions), [https://docs.cloud.google.com/service-extensions/docs/cel-matcher-language-reference](https://docs.cloud.google.com/service-extensions/docs/cel-matcher-language-reference), [https://docs.cloud.google.com/service-extensions/docs/callouts-overview](https://docs.cloud.google.com/service-extensions/docs/callouts-overview))
- auth (evidence: [https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview](https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview), [https://docs.cloud.google.com/service-extensions/docs/configure-edge-extensions](https://docs.cloud.google.com/service-extensions/docs/configure-edge-extensions), [https://docs.cloud.google.com/service-extensions/docs/cel-matcher-language-reference](https://docs.cloud.google.com/service-extensions/docs/cel-matcher-language-reference), [https://docs.cloud.google.com/service-extensions/docs/callouts-overview](https://docs.cloud.google.com/service-extensions/docs/callouts-overview))
- authorization (evidence: [https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview](https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview), [https://docs.cloud.google.com/service-extensions/docs/configure-edge-extensions](https://docs.cloud.google.com/service-extensions/docs/configure-edge-extensions), [https://docs.cloud.google.com/service-extensions/docs/cel-matcher-language-reference](https://docs.cloud.google.com/service-extensions/docs/cel-matcher-language-reference), [https://docs.cloud.google.com/service-extensions/docs/callouts-overview](https://docs.cloud.google.com/service-extensions/docs/callouts-overview))
- constraint (evidence: [https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview](https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview), [https://docs.cloud.google.com/service-extensions/docs/configure-edge-extensions](https://docs.cloud.google.com/service-extensions/docs/configure-edge-extensions), [https://docs.cloud.google.com/service-extensions/docs/cel-matcher-language-reference](https://docs.cloud.google.com/service-extensions/docs/cel-matcher-language-reference), [https://docs.cloud.google.com/service-extensions/docs/callouts-overview](https://docs.cloud.google.com/service-extensions/docs/callouts-overview))
- identity (evidence: [https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview](https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview), [https://docs.cloud.google.com/service-extensions/docs/configure-edge-extensions](https://docs.cloud.google.com/service-extensions/docs/configure-edge-extensions), [https://docs.cloud.google.com/service-extensions/docs/cel-matcher-language-reference](https://docs.cloud.google.com/service-extensions/docs/cel-matcher-language-reference), [https://docs.cloud.google.com/service-extensions/docs/callouts-overview](https://docs.cloud.google.com/service-extensions/docs/callouts-overview))
- key (evidence: [https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview](https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview), [https://docs.cloud.google.com/service-extensions/docs/configure-edge-extensions](https://docs.cloud.google.com/service-extensions/docs/configure-edge-extensions), [https://docs.cloud.google.com/service-extensions/docs/cel-matcher-language-reference](https://docs.cloud.google.com/service-extensions/docs/cel-matcher-language-reference), [https://docs.cloud.google.com/service-extensions/docs/callouts-overview](https://docs.cloud.google.com/service-extensions/docs/callouts-overview))
- logging (evidence: [https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview](https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview), [https://docs.cloud.google.com/service-extensions/docs/configure-edge-extensions](https://docs.cloud.google.com/service-extensions/docs/configure-edge-extensions), [https://docs.cloud.google.com/service-extensions/docs/cel-matcher-language-reference](https://docs.cloud.google.com/service-extensions/docs/cel-matcher-language-reference), [https://docs.cloud.google.com/service-extensions/docs/callouts-overview](https://docs.cloud.google.com/service-extensions/docs/callouts-overview))
- policy (evidence: [https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview](https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview), [https://docs.cloud.google.com/service-extensions/docs/configure-edge-extensions](https://docs.cloud.google.com/service-extensions/docs/configure-edge-extensions), [https://docs.cloud.google.com/service-extensions/docs/cel-matcher-language-reference](https://docs.cloud.google.com/service-extensions/docs/cel-matcher-language-reference), [https://docs.cloud.google.com/service-extensions/docs/callouts-overview](https://docs.cloud.google.com/service-extensions/docs/callouts-overview))
- security (evidence: [https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview](https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview), [https://docs.cloud.google.com/service-extensions/docs/configure-edge-extensions](https://docs.cloud.google.com/service-extensions/docs/configure-edge-extensions), [https://docs.cloud.google.com/service-extensions/docs/cel-matcher-language-reference](https://docs.cloud.google.com/service-extensions/docs/cel-matcher-language-reference), [https://docs.cloud.google.com/service-extensions/docs/callouts-overview](https://docs.cloud.google.com/service-extensions/docs/callouts-overview))

## Official Evidence

- [https://docs.cloud.google.com/service-extensions/docs/callouts-overview](https://docs.cloud.google.com/service-extensions/docs/callouts-overview)
- [https://docs.cloud.google.com/service-extensions/docs/cel-matcher-language-reference](https://docs.cloud.google.com/service-extensions/docs/cel-matcher-language-reference)
- [https://docs.cloud.google.com/service-extensions/docs/configure-edge-extensions](https://docs.cloud.google.com/service-extensions/docs/configure-edge-extensions)
- [https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview](https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview)
