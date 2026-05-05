# Node.js 20 runtime

Product: Cloud Run functions
Feature slug: `node-js-20-runtime`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Run functions supports the Node.js 20 runtime; Cloud Run functions supports the Node.js 20 runtime.

## Lifecycle

- Latest feature date: 2023-06-26
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow (evidence: [https://docs.cloud.google.com/functions/docs/managing](https://docs.cloud.google.com/functions/docs/managing), [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building), [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc))
- auth (evidence: [https://docs.cloud.google.com/functions/docs/managing](https://docs.cloud.google.com/functions/docs/managing), [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building), [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc))
- authorization (evidence: [https://docs.cloud.google.com/functions/docs/managing](https://docs.cloud.google.com/functions/docs/managing), [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building), [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc))
- identity (evidence: [https://docs.cloud.google.com/functions/docs/managing](https://docs.cloud.google.com/functions/docs/managing), [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building), [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc))
- private (evidence: [https://docs.cloud.google.com/functions/docs/managing](https://docs.cloud.google.com/functions/docs/managing), [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building), [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc))
- security (evidence: [https://docs.cloud.google.com/functions/docs/managing](https://docs.cloud.google.com/functions/docs/managing), [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building), [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc))
- token (evidence: [https://docs.cloud.google.com/functions/docs/managing](https://docs.cloud.google.com/functions/docs/managing), [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building), [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc))

## Official Evidence

- [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building)
- [https://docs.cloud.google.com/functions/docs/managing](https://docs.cloud.google.com/functions/docs/managing)
- [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
