# InstanceV3 monitored resource for Cloud Data Fusion

Product: Cloud Data Fusion
Feature slug: `instancev3-monitored-resource-for-cloud-data-fusion`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The default monitored resource for instance-level metrics and system service logs was introduced as datafusion.googleapis.com/InstanceV3, replacing InstanceV2 labels by default.

## Lifecycle

- Latest feature date: 2026-02-09
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/monitoring/api/resources](https://docs.cloud.google.com/monitoring/api/resources), [https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference](https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference), [https://docs.cloud.google.com/data-fusion/docs/reference/rest](https://docs.cloud.google.com/data-fusion/docs/reference/rest))
- audit (evidence: [https://docs.cloud.google.com/monitoring/api/resources](https://docs.cloud.google.com/monitoring/api/resources), [https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference](https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference), [https://docs.cloud.google.com/data-fusion/docs/reference/rest](https://docs.cloud.google.com/data-fusion/docs/reference/rest))
- auth (evidence: [https://docs.cloud.google.com/monitoring/api/resources](https://docs.cloud.google.com/monitoring/api/resources), [https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference](https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference), [https://docs.cloud.google.com/data-fusion/docs/reference/rest](https://docs.cloud.google.com/data-fusion/docs/reference/rest))
- authorization (evidence: [https://docs.cloud.google.com/monitoring/api/resources](https://docs.cloud.google.com/monitoring/api/resources), [https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference](https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference), [https://docs.cloud.google.com/data-fusion/docs/reference/rest](https://docs.cloud.google.com/data-fusion/docs/reference/rest))
- iam (evidence: [https://docs.cloud.google.com/monitoring/api/resources](https://docs.cloud.google.com/monitoring/api/resources), [https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference](https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference), [https://docs.cloud.google.com/data-fusion/docs/reference/rest](https://docs.cloud.google.com/data-fusion/docs/reference/rest))
- logging (evidence: [https://docs.cloud.google.com/monitoring/api/resources](https://docs.cloud.google.com/monitoring/api/resources), [https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference](https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference), [https://docs.cloud.google.com/data-fusion/docs/reference/rest](https://docs.cloud.google.com/data-fusion/docs/reference/rest))
- permission (evidence: [https://docs.cloud.google.com/monitoring/api/resources](https://docs.cloud.google.com/monitoring/api/resources), [https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference](https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference), [https://docs.cloud.google.com/data-fusion/docs/reference/rest](https://docs.cloud.google.com/data-fusion/docs/reference/rest))
- policy (evidence: [https://docs.cloud.google.com/monitoring/api/resources](https://docs.cloud.google.com/monitoring/api/resources), [https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference](https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference), [https://docs.cloud.google.com/data-fusion/docs/reference/rest](https://docs.cloud.google.com/data-fusion/docs/reference/rest))
- private (evidence: [https://docs.cloud.google.com/monitoring/api/resources](https://docs.cloud.google.com/monitoring/api/resources), [https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference](https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference), [https://docs.cloud.google.com/data-fusion/docs/reference/rest](https://docs.cloud.google.com/data-fusion/docs/reference/rest))
- security (evidence: [https://docs.cloud.google.com/monitoring/api/resources](https://docs.cloud.google.com/monitoring/api/resources), [https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference](https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference), [https://docs.cloud.google.com/data-fusion/docs/reference/rest](https://docs.cloud.google.com/data-fusion/docs/reference/rest))
- token (evidence: [https://docs.cloud.google.com/monitoring/api/resources](https://docs.cloud.google.com/monitoring/api/resources), [https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference](https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference), [https://docs.cloud.google.com/data-fusion/docs/reference/rest](https://docs.cloud.google.com/data-fusion/docs/reference/rest))

## Official Evidence

- [https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference](https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference)
- [https://docs.cloud.google.com/data-fusion/docs/reference/rest](https://docs.cloud.google.com/data-fusion/docs/reference/rest)
- [https://docs.cloud.google.com/monitoring/api/resources](https://docs.cloud.google.com/monitoring/api/resources)
