# TLS 1.0 and TLS 1.1 deprecation in API Gateway

Product: API Gateway
Feature slug: `tls-1-0-and-tls-1-1-deprecation-in-api-gateway`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

API Gateway is deprecating TLS 1.0 and 1.1 and enforces TLS 1.2+ for new security settings, with older protocol connections returning 400 errors; deprecated on 2025-07-23.

## Lifecycle

- Latest feature date: 2025-07-23
- Deprecation date: 2025-07-23
- Status: deprecation_noted

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- audit
- auth
- iam
- key
- policy
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/api-gateway/docs/about-api-gateway](https://docs.cloud.google.com/api-gateway/docs/about-api-gateway)
- [https://docs.cloud.google.com/api-gateway/docs/creating-api-config](https://docs.cloud.google.com/api-gateway/docs/creating-api-config)
- [https://docs.cloud.google.com/api-gateway/docs/secure-traffic-gcloud](https://docs.cloud.google.com/api-gateway/docs/secure-traffic-gcloud)
