# Entity-only rules for risk-based alerting

Product: Google SecOps SIEM
Feature slug: `entity-only-rules-for-risk-based-alerting`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Lets YARA-L detection rules trigger on changes in entity risk score through the ENTITY_RISK_CHANGE UDM event type.

## Lifecycle

- Latest feature date: 2025-10-28
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/chronicle/docs/detection/risk-based-alerting](https://docs.cloud.google.com/chronicle/docs/detection/risk-based-alerting), [https://docs.cloud.google.com/chronicle/docs/detection/curated-detections](https://docs.cloud.google.com/chronicle/docs/detection/curated-detections))
- audit (evidence: [https://docs.cloud.google.com/chronicle/docs/detection/risk-based-alerting](https://docs.cloud.google.com/chronicle/docs/detection/risk-based-alerting), [https://docs.cloud.google.com/chronicle/docs/detection/curated-detections](https://docs.cloud.google.com/chronicle/docs/detection/curated-detections))
- auth (evidence: [https://docs.cloud.google.com/chronicle/docs/detection/risk-based-alerting](https://docs.cloud.google.com/chronicle/docs/detection/risk-based-alerting), [https://docs.cloud.google.com/chronicle/docs/detection/curated-detections](https://docs.cloud.google.com/chronicle/docs/detection/curated-detections))
- encrypt (evidence: [https://docs.cloud.google.com/chronicle/docs/detection/risk-based-alerting](https://docs.cloud.google.com/chronicle/docs/detection/risk-based-alerting), [https://docs.cloud.google.com/chronicle/docs/detection/curated-detections](https://docs.cloud.google.com/chronicle/docs/detection/curated-detections))
- firewall (evidence: [https://docs.cloud.google.com/chronicle/docs/detection/risk-based-alerting](https://docs.cloud.google.com/chronicle/docs/detection/risk-based-alerting), [https://docs.cloud.google.com/chronicle/docs/detection/curated-detections](https://docs.cloud.google.com/chronicle/docs/detection/curated-detections))
- iam (evidence: [https://docs.cloud.google.com/chronicle/docs/detection/risk-based-alerting](https://docs.cloud.google.com/chronicle/docs/detection/risk-based-alerting), [https://docs.cloud.google.com/chronicle/docs/detection/curated-detections](https://docs.cloud.google.com/chronicle/docs/detection/curated-detections))
- identity (evidence: [https://docs.cloud.google.com/chronicle/docs/detection/risk-based-alerting](https://docs.cloud.google.com/chronicle/docs/detection/risk-based-alerting), [https://docs.cloud.google.com/chronicle/docs/detection/curated-detections](https://docs.cloud.google.com/chronicle/docs/detection/curated-detections))
- key (evidence: [https://docs.cloud.google.com/chronicle/docs/detection/risk-based-alerting](https://docs.cloud.google.com/chronicle/docs/detection/risk-based-alerting), [https://docs.cloud.google.com/chronicle/docs/detection/curated-detections](https://docs.cloud.google.com/chronicle/docs/detection/curated-detections))
- logging (evidence: [https://docs.cloud.google.com/chronicle/docs/detection/risk-based-alerting](https://docs.cloud.google.com/chronicle/docs/detection/risk-based-alerting), [https://docs.cloud.google.com/chronicle/docs/detection/curated-detections](https://docs.cloud.google.com/chronicle/docs/detection/curated-detections))
- permission (evidence: [https://docs.cloud.google.com/chronicle/docs/detection/risk-based-alerting](https://docs.cloud.google.com/chronicle/docs/detection/risk-based-alerting), [https://docs.cloud.google.com/chronicle/docs/detection/curated-detections](https://docs.cloud.google.com/chronicle/docs/detection/curated-detections))
- policy (evidence: [https://docs.cloud.google.com/chronicle/docs/detection/risk-based-alerting](https://docs.cloud.google.com/chronicle/docs/detection/risk-based-alerting), [https://docs.cloud.google.com/chronicle/docs/detection/curated-detections](https://docs.cloud.google.com/chronicle/docs/detection/curated-detections))
- role (evidence: [https://docs.cloud.google.com/chronicle/docs/detection/risk-based-alerting](https://docs.cloud.google.com/chronicle/docs/detection/risk-based-alerting), [https://docs.cloud.google.com/chronicle/docs/detection/curated-detections](https://docs.cloud.google.com/chronicle/docs/detection/curated-detections))
- secret (evidence: [https://docs.cloud.google.com/chronicle/docs/detection/risk-based-alerting](https://docs.cloud.google.com/chronicle/docs/detection/risk-based-alerting), [https://docs.cloud.google.com/chronicle/docs/detection/curated-detections](https://docs.cloud.google.com/chronicle/docs/detection/curated-detections))
- security (evidence: [https://docs.cloud.google.com/chronicle/docs/detection/risk-based-alerting](https://docs.cloud.google.com/chronicle/docs/detection/risk-based-alerting), [https://docs.cloud.google.com/chronicle/docs/detection/curated-detections](https://docs.cloud.google.com/chronicle/docs/detection/curated-detections))
- threat (evidence: [https://docs.cloud.google.com/chronicle/docs/detection/risk-based-alerting](https://docs.cloud.google.com/chronicle/docs/detection/risk-based-alerting), [https://docs.cloud.google.com/chronicle/docs/detection/curated-detections](https://docs.cloud.google.com/chronicle/docs/detection/curated-detections))

## Official Evidence

- [https://docs.cloud.google.com/chronicle/docs/detection/curated-detections](https://docs.cloud.google.com/chronicle/docs/detection/curated-detections)
- [https://docs.cloud.google.com/chronicle/docs/detection/risk-based-alerting](https://docs.cloud.google.com/chronicle/docs/detection/risk-based-alerting)
