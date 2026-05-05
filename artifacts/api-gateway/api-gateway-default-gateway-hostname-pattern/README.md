# API Gateway default gateway hostname pattern

Product: API Gateway
Feature slug: `api-gateway-default-gateway-hostname-pattern`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Newly created gateways now use the default hostname format with GATEWAY_ID and HASH; Newly created gateways now use the default hostname format with GATEWAY_ID and HASH.

## Lifecycle

- Latest feature date: 2020-09-08
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow (evidence: [https://docs.cloud.google.com/api-gateway/docs/secure-traffic-gcloud](https://docs.cloud.google.com/api-gateway/docs/secure-traffic-gcloud), [https://docs.cloud.google.com/api-gateway/docs/creating-api-config](https://docs.cloud.google.com/api-gateway/docs/creating-api-config), [https://docs.cloud.google.com/api-gateway/docs/quickstart](https://docs.cloud.google.com/api-gateway/docs/quickstart))
- auth (evidence: [https://docs.cloud.google.com/api-gateway/docs/secure-traffic-gcloud](https://docs.cloud.google.com/api-gateway/docs/secure-traffic-gcloud), [https://docs.cloud.google.com/api-gateway/docs/creating-api-config](https://docs.cloud.google.com/api-gateway/docs/creating-api-config), [https://docs.cloud.google.com/api-gateway/docs/quickstart](https://docs.cloud.google.com/api-gateway/docs/quickstart))
- iam (evidence: [https://docs.cloud.google.com/api-gateway/docs/secure-traffic-gcloud](https://docs.cloud.google.com/api-gateway/docs/secure-traffic-gcloud), [https://docs.cloud.google.com/api-gateway/docs/creating-api-config](https://docs.cloud.google.com/api-gateway/docs/creating-api-config), [https://docs.cloud.google.com/api-gateway/docs/quickstart](https://docs.cloud.google.com/api-gateway/docs/quickstart))
- identity (evidence: [https://docs.cloud.google.com/api-gateway/docs/secure-traffic-gcloud](https://docs.cloud.google.com/api-gateway/docs/secure-traffic-gcloud), [https://docs.cloud.google.com/api-gateway/docs/creating-api-config](https://docs.cloud.google.com/api-gateway/docs/creating-api-config), [https://docs.cloud.google.com/api-gateway/docs/quickstart](https://docs.cloud.google.com/api-gateway/docs/quickstart))
- key (evidence: [https://docs.cloud.google.com/api-gateway/docs/secure-traffic-gcloud](https://docs.cloud.google.com/api-gateway/docs/secure-traffic-gcloud), [https://docs.cloud.google.com/api-gateway/docs/creating-api-config](https://docs.cloud.google.com/api-gateway/docs/creating-api-config), [https://docs.cloud.google.com/api-gateway/docs/quickstart](https://docs.cloud.google.com/api-gateway/docs/quickstart))
- policy (evidence: [https://docs.cloud.google.com/api-gateway/docs/secure-traffic-gcloud](https://docs.cloud.google.com/api-gateway/docs/secure-traffic-gcloud), [https://docs.cloud.google.com/api-gateway/docs/creating-api-config](https://docs.cloud.google.com/api-gateway/docs/creating-api-config), [https://docs.cloud.google.com/api-gateway/docs/quickstart](https://docs.cloud.google.com/api-gateway/docs/quickstart))

## Official Evidence

- [https://docs.cloud.google.com/api-gateway/docs/creating-api-config](https://docs.cloud.google.com/api-gateway/docs/creating-api-config)
- [https://docs.cloud.google.com/api-gateway/docs/quickstart](https://docs.cloud.google.com/api-gateway/docs/quickstart)
- [https://docs.cloud.google.com/api-gateway/docs/secure-traffic-gcloud](https://docs.cloud.google.com/api-gateway/docs/secure-traffic-gcloud)
