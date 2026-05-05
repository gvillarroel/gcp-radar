# SAP Table Reader plugin snapshot mode cleanup handling

Product: Cloud Data Fusion
Feature slug: `sap-table-reader-plugin-snapshot-mode-cleanup-handling`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

SAP Table Reader plugin version 0.11.5 fixes the Snapshot mode cleanup process to avoid an unnecessary Job abort failed log error.

## Lifecycle

- Latest feature date: 2026-01-29
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow (evidence: [https://docs.cloud.google.com/data-fusion/docs/tutorials/connect-salesforce-to-bq](https://docs.cloud.google.com/data-fusion/docs/tutorials/connect-salesforce-to-bq), [https://docs.cloud.google.com/data-fusion/docs/reference/replication-ref](https://docs.cloud.google.com/data-fusion/docs/reference/replication-ref), [https://docs.cloud.google.com/data-fusion/docs/tutorials/redacting-confidential-data](https://docs.cloud.google.com/data-fusion/docs/tutorials/redacting-confidential-data))
- confidential (evidence: [https://docs.cloud.google.com/data-fusion/docs/tutorials/connect-salesforce-to-bq](https://docs.cloud.google.com/data-fusion/docs/tutorials/connect-salesforce-to-bq), [https://docs.cloud.google.com/data-fusion/docs/reference/replication-ref](https://docs.cloud.google.com/data-fusion/docs/reference/replication-ref), [https://docs.cloud.google.com/data-fusion/docs/tutorials/redacting-confidential-data](https://docs.cloud.google.com/data-fusion/docs/tutorials/redacting-confidential-data))
- iam (evidence: [https://docs.cloud.google.com/data-fusion/docs/tutorials/connect-salesforce-to-bq](https://docs.cloud.google.com/data-fusion/docs/tutorials/connect-salesforce-to-bq), [https://docs.cloud.google.com/data-fusion/docs/reference/replication-ref](https://docs.cloud.google.com/data-fusion/docs/reference/replication-ref), [https://docs.cloud.google.com/data-fusion/docs/tutorials/redacting-confidential-data](https://docs.cloud.google.com/data-fusion/docs/tutorials/redacting-confidential-data))
- key (evidence: [https://docs.cloud.google.com/data-fusion/docs/tutorials/connect-salesforce-to-bq](https://docs.cloud.google.com/data-fusion/docs/tutorials/connect-salesforce-to-bq), [https://docs.cloud.google.com/data-fusion/docs/reference/replication-ref](https://docs.cloud.google.com/data-fusion/docs/reference/replication-ref), [https://docs.cloud.google.com/data-fusion/docs/tutorials/redacting-confidential-data](https://docs.cloud.google.com/data-fusion/docs/tutorials/redacting-confidential-data))
- permission (evidence: [https://docs.cloud.google.com/data-fusion/docs/tutorials/connect-salesforce-to-bq](https://docs.cloud.google.com/data-fusion/docs/tutorials/connect-salesforce-to-bq), [https://docs.cloud.google.com/data-fusion/docs/reference/replication-ref](https://docs.cloud.google.com/data-fusion/docs/reference/replication-ref), [https://docs.cloud.google.com/data-fusion/docs/tutorials/redacting-confidential-data](https://docs.cloud.google.com/data-fusion/docs/tutorials/redacting-confidential-data))

## Official Evidence

- [https://docs.cloud.google.com/data-fusion/docs/reference/replication-ref](https://docs.cloud.google.com/data-fusion/docs/reference/replication-ref)
- [https://docs.cloud.google.com/data-fusion/docs/tutorials/connect-salesforce-to-bq](https://docs.cloud.google.com/data-fusion/docs/tutorials/connect-salesforce-to-bq)
- [https://docs.cloud.google.com/data-fusion/docs/tutorials/redacting-confidential-data](https://docs.cloud.google.com/data-fusion/docs/tutorials/redacting-confidential-data)
