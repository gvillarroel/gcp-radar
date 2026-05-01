# Large alert entity trimming

Product: Google SecOps SOAR
Feature slug: `large-alert-entity-trimming`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Alerts with more than 500 entities now keep the key entities and remove the extras during ingestion to reduce performance issues.

## Lifecycle

- Latest feature date: 2024-01-04
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow
- audit
- auth
- credential
- key
- security
- threat

## Official Evidence

- [https://docs.cloud.google.com/chronicle/docs/administration/bulk-close-alerts](https://docs.cloud.google.com/chronicle/docs/administration/bulk-close-alerts)
- [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)
- [https://docs.cloud.google.com/chronicle/docs/detection/migrate-cbn-alerts](https://docs.cloud.google.com/chronicle/docs/detection/migrate-cbn-alerts)
- [https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-alerts/whats-on-the-alert-overview-tab](https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-alerts/whats-on-the-alert-overview-tab)
