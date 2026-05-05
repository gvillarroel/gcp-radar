# HTTP request size alignment in load balancing logs

Product: Cloud Logging
Feature slug: `http-request-size-alignment-in-load-balancing-logs`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

HTTP(S) load balancing logging aligns httpRequest.requestSize with Stackdriver Monitoring API metrics.

## Lifecycle

- Latest feature date: 2017-12-04
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth (evidence: [https://docs.cloud.google.com/logging/docs/samples/logging-write-log-entry-advanced](https://docs.cloud.google.com/logging/docs/samples/logging-write-log-entry-advanced), [https://docs.cloud.google.com/logging/docs/api/platform-logs](https://docs.cloud.google.com/logging/docs/api/platform-logs), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry))
- authorization (evidence: [https://docs.cloud.google.com/logging/docs/samples/logging-write-log-entry-advanced](https://docs.cloud.google.com/logging/docs/samples/logging-write-log-entry-advanced), [https://docs.cloud.google.com/logging/docs/api/platform-logs](https://docs.cloud.google.com/logging/docs/api/platform-logs), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry))
- identity (evidence: [https://docs.cloud.google.com/logging/docs/samples/logging-write-log-entry-advanced](https://docs.cloud.google.com/logging/docs/samples/logging-write-log-entry-advanced), [https://docs.cloud.google.com/logging/docs/api/platform-logs](https://docs.cloud.google.com/logging/docs/api/platform-logs), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry))
- key (evidence: [https://docs.cloud.google.com/logging/docs/samples/logging-write-log-entry-advanced](https://docs.cloud.google.com/logging/docs/samples/logging-write-log-entry-advanced), [https://docs.cloud.google.com/logging/docs/api/platform-logs](https://docs.cloud.google.com/logging/docs/api/platform-logs), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry))
- kms (evidence: [https://docs.cloud.google.com/logging/docs/samples/logging-write-log-entry-advanced](https://docs.cloud.google.com/logging/docs/samples/logging-write-log-entry-advanced), [https://docs.cloud.google.com/logging/docs/api/platform-logs](https://docs.cloud.google.com/logging/docs/api/platform-logs), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry))
- logging (evidence: [https://docs.cloud.google.com/logging/docs/samples/logging-write-log-entry-advanced](https://docs.cloud.google.com/logging/docs/samples/logging-write-log-entry-advanced), [https://docs.cloud.google.com/logging/docs/api/platform-logs](https://docs.cloud.google.com/logging/docs/api/platform-logs), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry))
- security (evidence: [https://docs.cloud.google.com/logging/docs/samples/logging-write-log-entry-advanced](https://docs.cloud.google.com/logging/docs/samples/logging-write-log-entry-advanced), [https://docs.cloud.google.com/logging/docs/api/platform-logs](https://docs.cloud.google.com/logging/docs/api/platform-logs), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry))
- threat (evidence: [https://docs.cloud.google.com/logging/docs/samples/logging-write-log-entry-advanced](https://docs.cloud.google.com/logging/docs/samples/logging-write-log-entry-advanced), [https://docs.cloud.google.com/logging/docs/api/platform-logs](https://docs.cloud.google.com/logging/docs/api/platform-logs), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry))

## Official Evidence

- [https://docs.cloud.google.com/logging/docs/api/platform-logs](https://docs.cloud.google.com/logging/docs/api/platform-logs)
- [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry)
- [https://docs.cloud.google.com/logging/docs/samples/logging-write-log-entry-advanced](https://docs.cloud.google.com/logging/docs/samples/logging-write-log-entry-advanced)
