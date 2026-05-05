# GET /v3/system/services/.../logs API

Product: Cloud Data Fusion
Feature slug: `get-v3-system-services-logs-api`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The system service logs download API was deprecated for retrieving system service log data; deprecated on 2025-03-17.

## Lifecycle

- Latest feature date: 2025-03-17
- Deprecation date: 2025-03-17
- Status: deprecation_noted

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference](https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference), [https://docs.cloud.google.com/data-fusion/docs/how-to/viewing-stackdriver-logs](https://docs.cloud.google.com/data-fusion/docs/how-to/viewing-stackdriver-logs), [https://docs.cloud.google.com/data-fusion/docs/support/billing-questions](https://docs.cloud.google.com/data-fusion/docs/support/billing-questions))
- armor (evidence: [https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference](https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference), [https://docs.cloud.google.com/data-fusion/docs/how-to/viewing-stackdriver-logs](https://docs.cloud.google.com/data-fusion/docs/how-to/viewing-stackdriver-logs), [https://docs.cloud.google.com/data-fusion/docs/support/billing-questions](https://docs.cloud.google.com/data-fusion/docs/support/billing-questions))
- audit (evidence: [https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference](https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference), [https://docs.cloud.google.com/data-fusion/docs/how-to/viewing-stackdriver-logs](https://docs.cloud.google.com/data-fusion/docs/how-to/viewing-stackdriver-logs), [https://docs.cloud.google.com/data-fusion/docs/support/billing-questions](https://docs.cloud.google.com/data-fusion/docs/support/billing-questions))
- auth (evidence: [https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference](https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference), [https://docs.cloud.google.com/data-fusion/docs/how-to/viewing-stackdriver-logs](https://docs.cloud.google.com/data-fusion/docs/how-to/viewing-stackdriver-logs), [https://docs.cloud.google.com/data-fusion/docs/support/billing-questions](https://docs.cloud.google.com/data-fusion/docs/support/billing-questions))
- authorization (evidence: [https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference](https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference), [https://docs.cloud.google.com/data-fusion/docs/how-to/viewing-stackdriver-logs](https://docs.cloud.google.com/data-fusion/docs/how-to/viewing-stackdriver-logs), [https://docs.cloud.google.com/data-fusion/docs/support/billing-questions](https://docs.cloud.google.com/data-fusion/docs/support/billing-questions))
- iam (evidence: [https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference](https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference), [https://docs.cloud.google.com/data-fusion/docs/how-to/viewing-stackdriver-logs](https://docs.cloud.google.com/data-fusion/docs/how-to/viewing-stackdriver-logs), [https://docs.cloud.google.com/data-fusion/docs/support/billing-questions](https://docs.cloud.google.com/data-fusion/docs/support/billing-questions))
- identity (evidence: [https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference](https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference), [https://docs.cloud.google.com/data-fusion/docs/how-to/viewing-stackdriver-logs](https://docs.cloud.google.com/data-fusion/docs/how-to/viewing-stackdriver-logs), [https://docs.cloud.google.com/data-fusion/docs/support/billing-questions](https://docs.cloud.google.com/data-fusion/docs/support/billing-questions))
- key (evidence: [https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference](https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference), [https://docs.cloud.google.com/data-fusion/docs/how-to/viewing-stackdriver-logs](https://docs.cloud.google.com/data-fusion/docs/how-to/viewing-stackdriver-logs), [https://docs.cloud.google.com/data-fusion/docs/support/billing-questions](https://docs.cloud.google.com/data-fusion/docs/support/billing-questions))
- logging (evidence: [https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference](https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference), [https://docs.cloud.google.com/data-fusion/docs/how-to/viewing-stackdriver-logs](https://docs.cloud.google.com/data-fusion/docs/how-to/viewing-stackdriver-logs), [https://docs.cloud.google.com/data-fusion/docs/support/billing-questions](https://docs.cloud.google.com/data-fusion/docs/support/billing-questions))
- private (evidence: [https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference](https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference), [https://docs.cloud.google.com/data-fusion/docs/how-to/viewing-stackdriver-logs](https://docs.cloud.google.com/data-fusion/docs/how-to/viewing-stackdriver-logs), [https://docs.cloud.google.com/data-fusion/docs/support/billing-questions](https://docs.cloud.google.com/data-fusion/docs/support/billing-questions))
- security (evidence: [https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference](https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference), [https://docs.cloud.google.com/data-fusion/docs/how-to/viewing-stackdriver-logs](https://docs.cloud.google.com/data-fusion/docs/how-to/viewing-stackdriver-logs), [https://docs.cloud.google.com/data-fusion/docs/support/billing-questions](https://docs.cloud.google.com/data-fusion/docs/support/billing-questions))
- threat (evidence: [https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference](https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference), [https://docs.cloud.google.com/data-fusion/docs/how-to/viewing-stackdriver-logs](https://docs.cloud.google.com/data-fusion/docs/how-to/viewing-stackdriver-logs), [https://docs.cloud.google.com/data-fusion/docs/support/billing-questions](https://docs.cloud.google.com/data-fusion/docs/support/billing-questions))
- token (evidence: [https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference](https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference), [https://docs.cloud.google.com/data-fusion/docs/how-to/viewing-stackdriver-logs](https://docs.cloud.google.com/data-fusion/docs/how-to/viewing-stackdriver-logs), [https://docs.cloud.google.com/data-fusion/docs/support/billing-questions](https://docs.cloud.google.com/data-fusion/docs/support/billing-questions))

## Official Evidence

- [https://docs.cloud.google.com/data-fusion/docs/how-to/viewing-stackdriver-logs](https://docs.cloud.google.com/data-fusion/docs/how-to/viewing-stackdriver-logs)
- [https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference](https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference)
- [https://docs.cloud.google.com/data-fusion/docs/support/billing-questions](https://docs.cloud.google.com/data-fusion/docs/support/billing-questions)
