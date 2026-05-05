# HTTP(S) load balancing rejected request logs

Product: Cloud Logging
Feature slug: `http-s-load-balancing-rejected-request-logs`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

HTTP(S) load balancing logging includes logs for rejected requests such as invalid or expired URL signatures.

## Lifecycle

- Latest feature date: 2017-12-04
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/logging/docs/api/platform-logs](https://docs.cloud.google.com/logging/docs/api/platform-logs), [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration), [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/iis](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/iis))
- auth (evidence: [https://docs.cloud.google.com/logging/docs/api/platform-logs](https://docs.cloud.google.com/logging/docs/api/platform-logs), [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration), [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/iis](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/iis))
- authorization (evidence: [https://docs.cloud.google.com/logging/docs/api/platform-logs](https://docs.cloud.google.com/logging/docs/api/platform-logs), [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration), [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/iis](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/iis))
- identity (evidence: [https://docs.cloud.google.com/logging/docs/api/platform-logs](https://docs.cloud.google.com/logging/docs/api/platform-logs), [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration), [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/iis](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/iis))
- key (evidence: [https://docs.cloud.google.com/logging/docs/api/platform-logs](https://docs.cloud.google.com/logging/docs/api/platform-logs), [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration), [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/iis](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/iis))
- kms (evidence: [https://docs.cloud.google.com/logging/docs/api/platform-logs](https://docs.cloud.google.com/logging/docs/api/platform-logs), [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration), [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/iis](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/iis))
- logging (evidence: [https://docs.cloud.google.com/logging/docs/api/platform-logs](https://docs.cloud.google.com/logging/docs/api/platform-logs), [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration), [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/iis](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/iis))
- security (evidence: [https://docs.cloud.google.com/logging/docs/api/platform-logs](https://docs.cloud.google.com/logging/docs/api/platform-logs), [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration), [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/iis](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/iis))
- threat (evidence: [https://docs.cloud.google.com/logging/docs/api/platform-logs](https://docs.cloud.google.com/logging/docs/api/platform-logs), [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration), [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/iis](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/iis))

## Official Evidence

- [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/iis](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/iis)
- [https://docs.cloud.google.com/logging/docs/api/platform-logs](https://docs.cloud.google.com/logging/docs/api/platform-logs)
