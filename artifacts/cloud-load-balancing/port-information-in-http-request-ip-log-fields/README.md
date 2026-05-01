# Port information in HTTP request IP log fields

Product: Cloud Load Balancing
Feature slug: `port-information-in-http-request-ip-log-fields`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

HTTP request logs can include port numbers in the httpRequest.remoteIp and httpRequest.serverIp fields.

## Lifecycle

- Latest feature date: 2020-10-20
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth
- certificate
- logging

## Official Evidence

- [https://docs.cloud.google.com/load-balancing/docs/health-check-logging](https://docs.cloud.google.com/load-balancing/docs/health-check-logging)
- [https://docs.cloud.google.com/load-balancing/docs/https/setting-up-https](https://docs.cloud.google.com/load-balancing/docs/https/setting-up-https)
- [https://docs.cloud.google.com/load-balancing/docs/tutorials/http-https-over-same-domain](https://docs.cloud.google.com/load-balancing/docs/tutorials/http-https-over-same-domain)
