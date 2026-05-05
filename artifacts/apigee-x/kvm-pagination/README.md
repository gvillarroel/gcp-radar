# KVM pagination

Product: Apigee X
Feature slug: `kvm-pagination`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Key value maps support pagination through the API.

## Lifecycle

- Latest feature date: 2022-03-15
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/data-capture-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/data-capture-policy), [https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference](https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference))
- allow (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/data-capture-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/data-capture-policy), [https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference](https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference))
- auth (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/data-capture-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/data-capture-policy), [https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference](https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference))
- authorization (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/data-capture-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/data-capture-policy), [https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference](https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference))
- certificate (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/data-capture-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/data-capture-policy), [https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference](https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference))
- credential (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/data-capture-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/data-capture-policy), [https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference](https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference))
- firewall (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/data-capture-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/data-capture-policy), [https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference](https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference))
- key (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/data-capture-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/data-capture-policy), [https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference](https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference))
- policy (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/data-capture-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/data-capture-policy), [https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference](https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference))
- security (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/data-capture-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/data-capture-policy), [https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference](https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference))

## Official Evidence

- [https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference](https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference)
- [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/data-capture-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/data-capture-policy)
