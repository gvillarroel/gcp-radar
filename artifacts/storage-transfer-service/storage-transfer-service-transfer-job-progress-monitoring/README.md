# Storage Transfer Service Transfer Job progress monitoring

Product: Storage Transfer Service
Feature slug: `storage-transfer-service-transfer-job-progress-monitoring`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Storage Transfer Service now offers preview support for monitoring Transfer Job progress with Cloud Monitoring, including near-real-time counts of objects and data copied.

## Lifecycle

- Latest feature date: 2022-12-19
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/iam/docs/resource-types-with-policies](https://docs.cloud.google.com/iam/docs/resource-types-with-policies), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes), [https://docs.cloud.google.com/storage-transfer/docs/manage-transfers](https://docs.cloud.google.com/storage-transfer/docs/manage-transfers))
- allow (evidence: [https://docs.cloud.google.com/iam/docs/resource-types-with-policies](https://docs.cloud.google.com/iam/docs/resource-types-with-policies), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes), [https://docs.cloud.google.com/storage-transfer/docs/manage-transfers](https://docs.cloud.google.com/storage-transfer/docs/manage-transfers))
- auth (evidence: [https://docs.cloud.google.com/iam/docs/resource-types-with-policies](https://docs.cloud.google.com/iam/docs/resource-types-with-policies), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes), [https://docs.cloud.google.com/storage-transfer/docs/manage-transfers](https://docs.cloud.google.com/storage-transfer/docs/manage-transfers))
- authorization (evidence: [https://docs.cloud.google.com/iam/docs/resource-types-with-policies](https://docs.cloud.google.com/iam/docs/resource-types-with-policies), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes), [https://docs.cloud.google.com/storage-transfer/docs/manage-transfers](https://docs.cloud.google.com/storage-transfer/docs/manage-transfers))
- certificate (evidence: [https://docs.cloud.google.com/iam/docs/resource-types-with-policies](https://docs.cloud.google.com/iam/docs/resource-types-with-policies), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes), [https://docs.cloud.google.com/storage-transfer/docs/manage-transfers](https://docs.cloud.google.com/storage-transfer/docs/manage-transfers))
- credential (evidence: [https://docs.cloud.google.com/iam/docs/resource-types-with-policies](https://docs.cloud.google.com/iam/docs/resource-types-with-policies), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes), [https://docs.cloud.google.com/storage-transfer/docs/manage-transfers](https://docs.cloud.google.com/storage-transfer/docs/manage-transfers))
- encrypt (evidence: [https://docs.cloud.google.com/iam/docs/resource-types-with-policies](https://docs.cloud.google.com/iam/docs/resource-types-with-policies), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes), [https://docs.cloud.google.com/storage-transfer/docs/manage-transfers](https://docs.cloud.google.com/storage-transfer/docs/manage-transfers))
- firewall (evidence: [https://docs.cloud.google.com/iam/docs/resource-types-with-policies](https://docs.cloud.google.com/iam/docs/resource-types-with-policies), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes), [https://docs.cloud.google.com/storage-transfer/docs/manage-transfers](https://docs.cloud.google.com/storage-transfer/docs/manage-transfers))
- iam (evidence: [https://docs.cloud.google.com/iam/docs/resource-types-with-policies](https://docs.cloud.google.com/iam/docs/resource-types-with-policies), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes), [https://docs.cloud.google.com/storage-transfer/docs/manage-transfers](https://docs.cloud.google.com/storage-transfer/docs/manage-transfers))
- identity (evidence: [https://docs.cloud.google.com/iam/docs/resource-types-with-policies](https://docs.cloud.google.com/iam/docs/resource-types-with-policies), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes), [https://docs.cloud.google.com/storage-transfer/docs/manage-transfers](https://docs.cloud.google.com/storage-transfer/docs/manage-transfers))
- key (evidence: [https://docs.cloud.google.com/iam/docs/resource-types-with-policies](https://docs.cloud.google.com/iam/docs/resource-types-with-policies), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes), [https://docs.cloud.google.com/storage-transfer/docs/manage-transfers](https://docs.cloud.google.com/storage-transfer/docs/manage-transfers))
- kms (evidence: [https://docs.cloud.google.com/iam/docs/resource-types-with-policies](https://docs.cloud.google.com/iam/docs/resource-types-with-policies), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes), [https://docs.cloud.google.com/storage-transfer/docs/manage-transfers](https://docs.cloud.google.com/storage-transfer/docs/manage-transfers))
- logging (evidence: [https://docs.cloud.google.com/iam/docs/resource-types-with-policies](https://docs.cloud.google.com/iam/docs/resource-types-with-policies), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes), [https://docs.cloud.google.com/storage-transfer/docs/manage-transfers](https://docs.cloud.google.com/storage-transfer/docs/manage-transfers))
- policy (evidence: [https://docs.cloud.google.com/iam/docs/resource-types-with-policies](https://docs.cloud.google.com/iam/docs/resource-types-with-policies), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes), [https://docs.cloud.google.com/storage-transfer/docs/manage-transfers](https://docs.cloud.google.com/storage-transfer/docs/manage-transfers))
- private (evidence: [https://docs.cloud.google.com/iam/docs/resource-types-with-policies](https://docs.cloud.google.com/iam/docs/resource-types-with-policies), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes), [https://docs.cloud.google.com/storage-transfer/docs/manage-transfers](https://docs.cloud.google.com/storage-transfer/docs/manage-transfers))
- secret (evidence: [https://docs.cloud.google.com/iam/docs/resource-types-with-policies](https://docs.cloud.google.com/iam/docs/resource-types-with-policies), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes), [https://docs.cloud.google.com/storage-transfer/docs/manage-transfers](https://docs.cloud.google.com/storage-transfer/docs/manage-transfers))
- security (evidence: [https://docs.cloud.google.com/iam/docs/resource-types-with-policies](https://docs.cloud.google.com/iam/docs/resource-types-with-policies), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes), [https://docs.cloud.google.com/storage-transfer/docs/manage-transfers](https://docs.cloud.google.com/storage-transfer/docs/manage-transfers))

## Official Evidence

- [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes)
- [https://docs.cloud.google.com/iam/docs/resource-types-with-policies](https://docs.cloud.google.com/iam/docs/resource-types-with-policies)
- [https://docs.cloud.google.com/storage-transfer/docs/manage-transfers](https://docs.cloud.google.com/storage-transfer/docs/manage-transfers)
