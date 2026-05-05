# Metadata preservation controls for Cloud Storage transfers

Product: Storage Transfer Service
Feature slug: `metadata-preservation-controls-for-cloud-storage-transfers`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Storage Transfer Service now lets you choose whether to retain or discard object metadata, including ACLs, CMEK settings, temporary holds, and creation time, during Cloud Storage bucket transfers.

## Lifecycle

- Latest feature date: 2022-03-08
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation](https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation), [https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc](https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc), [https://docs.cloud.google.com/storage-transfer/docs/create-transfers](https://docs.cloud.google.com/storage-transfer/docs/create-transfers))
- audit (evidence: [https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation](https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation), [https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc](https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc), [https://docs.cloud.google.com/storage-transfer/docs/create-transfers](https://docs.cloud.google.com/storage-transfer/docs/create-transfers))
- auth (evidence: [https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation](https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation), [https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc](https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc), [https://docs.cloud.google.com/storage-transfer/docs/create-transfers](https://docs.cloud.google.com/storage-transfer/docs/create-transfers))
- constraint (evidence: [https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation](https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation), [https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc](https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc), [https://docs.cloud.google.com/storage-transfer/docs/create-transfers](https://docs.cloud.google.com/storage-transfer/docs/create-transfers))
- credential (evidence: [https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation](https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation), [https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc](https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc), [https://docs.cloud.google.com/storage-transfer/docs/create-transfers](https://docs.cloud.google.com/storage-transfer/docs/create-transfers))
- encrypt (evidence: [https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation](https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation), [https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc](https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc), [https://docs.cloud.google.com/storage-transfer/docs/create-transfers](https://docs.cloud.google.com/storage-transfer/docs/create-transfers))
- iam (evidence: [https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation](https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation), [https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc](https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc), [https://docs.cloud.google.com/storage-transfer/docs/create-transfers](https://docs.cloud.google.com/storage-transfer/docs/create-transfers))
- key (evidence: [https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation](https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation), [https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc](https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc), [https://docs.cloud.google.com/storage-transfer/docs/create-transfers](https://docs.cloud.google.com/storage-transfer/docs/create-transfers))
- logging (evidence: [https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation](https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation), [https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc](https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc), [https://docs.cloud.google.com/storage-transfer/docs/create-transfers](https://docs.cloud.google.com/storage-transfer/docs/create-transfers))
- permission (evidence: [https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation](https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation), [https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc](https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc), [https://docs.cloud.google.com/storage-transfer/docs/create-transfers](https://docs.cloud.google.com/storage-transfer/docs/create-transfers))
- policy (evidence: [https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation](https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation), [https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc](https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc), [https://docs.cloud.google.com/storage-transfer/docs/create-transfers](https://docs.cloud.google.com/storage-transfer/docs/create-transfers))
- private (evidence: [https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation](https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation), [https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc](https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc), [https://docs.cloud.google.com/storage-transfer/docs/create-transfers](https://docs.cloud.google.com/storage-transfer/docs/create-transfers))
- role (evidence: [https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation](https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation), [https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc](https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc), [https://docs.cloud.google.com/storage-transfer/docs/create-transfers](https://docs.cloud.google.com/storage-transfer/docs/create-transfers))
- security (evidence: [https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation](https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation), [https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc](https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc), [https://docs.cloud.google.com/storage-transfer/docs/create-transfers](https://docs.cloud.google.com/storage-transfer/docs/create-transfers))
- token (evidence: [https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation](https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation), [https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc](https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc), [https://docs.cloud.google.com/storage-transfer/docs/create-transfers](https://docs.cloud.google.com/storage-transfer/docs/create-transfers))

## Official Evidence

- [https://docs.cloud.google.com/storage-transfer/docs/create-transfers](https://docs.cloud.google.com/storage-transfer/docs/create-transfers)
- [https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation](https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation)
- [https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc](https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc)
