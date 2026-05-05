# Detection Engine rule statuses

Product: Google SecOps SIEM
Feature slug: `detection-engine-rule-statuses`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Detection Engine supports Limited and Paused rule statuses for Chronicle YARA-L rules running on live data, in addition to Enabled and Disabled.

## Lifecycle

- Latest feature date: 2023-11-08
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- audit (evidence: [https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api](https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api), [https://docs.cloud.google.com/chronicle/docs/detection/detection-delays](https://docs.cloud.google.com/chronicle/docs/detection/detection-delays), [https://docs.cloud.google.com/chronicle/docs/detection/default-rules](https://docs.cloud.google.com/chronicle/docs/detection/default-rules))
- auth (evidence: [https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api](https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api), [https://docs.cloud.google.com/chronicle/docs/detection/detection-delays](https://docs.cloud.google.com/chronicle/docs/detection/detection-delays), [https://docs.cloud.google.com/chronicle/docs/detection/default-rules](https://docs.cloud.google.com/chronicle/docs/detection/default-rules))
- key (evidence: [https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api](https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api), [https://docs.cloud.google.com/chronicle/docs/detection/detection-delays](https://docs.cloud.google.com/chronicle/docs/detection/detection-delays), [https://docs.cloud.google.com/chronicle/docs/detection/default-rules](https://docs.cloud.google.com/chronicle/docs/detection/default-rules))
- security (evidence: [https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api](https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api), [https://docs.cloud.google.com/chronicle/docs/detection/detection-delays](https://docs.cloud.google.com/chronicle/docs/detection/detection-delays), [https://docs.cloud.google.com/chronicle/docs/detection/default-rules](https://docs.cloud.google.com/chronicle/docs/detection/default-rules))
- token (evidence: [https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api](https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api), [https://docs.cloud.google.com/chronicle/docs/detection/detection-delays](https://docs.cloud.google.com/chronicle/docs/detection/detection-delays), [https://docs.cloud.google.com/chronicle/docs/detection/default-rules](https://docs.cloud.google.com/chronicle/docs/detection/default-rules))

## Official Evidence

- [https://docs.cloud.google.com/chronicle/docs/detection/default-rules](https://docs.cloud.google.com/chronicle/docs/detection/default-rules)
- [https://docs.cloud.google.com/chronicle/docs/detection/detection-delays](https://docs.cloud.google.com/chronicle/docs/detection/detection-delays)
- [https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api](https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api)
