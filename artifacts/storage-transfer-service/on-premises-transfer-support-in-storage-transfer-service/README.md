# On-premises transfer support in Storage Transfer Service

Product: Storage Transfer Service
Feature slug: `on-premises-transfer-support-in-storage-transfer-service`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Storage Transfer Service added support for on-premises transfers, with this capability entering beta.

## Lifecycle

- Latest feature date: 2019-12-04
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc](https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc), [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible), [https://docs.cloud.google.com/storage-transfer/docs/event-driven-transfers](https://docs.cloud.google.com/storage-transfer/docs/event-driven-transfers))
- audit (evidence: [https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc](https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc), [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible), [https://docs.cloud.google.com/storage-transfer/docs/event-driven-transfers](https://docs.cloud.google.com/storage-transfer/docs/event-driven-transfers))
- auth (evidence: [https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc](https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc), [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible), [https://docs.cloud.google.com/storage-transfer/docs/event-driven-transfers](https://docs.cloud.google.com/storage-transfer/docs/event-driven-transfers))
- constraint (evidence: [https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc](https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc), [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible), [https://docs.cloud.google.com/storage-transfer/docs/event-driven-transfers](https://docs.cloud.google.com/storage-transfer/docs/event-driven-transfers))
- encrypt (evidence: [https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc](https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc), [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible), [https://docs.cloud.google.com/storage-transfer/docs/event-driven-transfers](https://docs.cloud.google.com/storage-transfer/docs/event-driven-transfers))
- iam (evidence: [https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc](https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc), [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible), [https://docs.cloud.google.com/storage-transfer/docs/event-driven-transfers](https://docs.cloud.google.com/storage-transfer/docs/event-driven-transfers))
- key (evidence: [https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc](https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc), [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible), [https://docs.cloud.google.com/storage-transfer/docs/event-driven-transfers](https://docs.cloud.google.com/storage-transfer/docs/event-driven-transfers))
- logging (evidence: [https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc](https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc), [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible), [https://docs.cloud.google.com/storage-transfer/docs/event-driven-transfers](https://docs.cloud.google.com/storage-transfer/docs/event-driven-transfers))
- permission (evidence: [https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc](https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc), [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible), [https://docs.cloud.google.com/storage-transfer/docs/event-driven-transfers](https://docs.cloud.google.com/storage-transfer/docs/event-driven-transfers))
- policy (evidence: [https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc](https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc), [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible), [https://docs.cloud.google.com/storage-transfer/docs/event-driven-transfers](https://docs.cloud.google.com/storage-transfer/docs/event-driven-transfers))
- private (evidence: [https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc](https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc), [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible), [https://docs.cloud.google.com/storage-transfer/docs/event-driven-transfers](https://docs.cloud.google.com/storage-transfer/docs/event-driven-transfers))
- role (evidence: [https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc](https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc), [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible), [https://docs.cloud.google.com/storage-transfer/docs/event-driven-transfers](https://docs.cloud.google.com/storage-transfer/docs/event-driven-transfers))
- security (evidence: [https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc](https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc), [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible), [https://docs.cloud.google.com/storage-transfer/docs/event-driven-transfers](https://docs.cloud.google.com/storage-transfer/docs/event-driven-transfers))

## Official Evidence

- [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible)
- [https://docs.cloud.google.com/storage-transfer/docs/event-driven-transfers](https://docs.cloud.google.com/storage-transfer/docs/event-driven-transfers)
- [https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc](https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc)
