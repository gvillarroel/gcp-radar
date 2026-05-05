# Key Access Justifications for external CMEK keys

Product: AlloyDB
Feature slug: `key-access-justifications-for-external-cmek-keys`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

AlloyDB supports Key Access Justifications for external CMEK keys so you can view and manage external key access requests.

## Lifecycle

- Latest feature date: 2024-03-04
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/alloydb/docs/backup/manage-enhanced-backups](https://docs.cloud.google.com/alloydb/docs/backup/manage-enhanced-backups), [https://docs.cloud.google.com/alloydb/docs/reference/ai/scann-index-reference](https://docs.cloud.google.com/alloydb/docs/reference/ai/scann-index-reference), [https://docs.cloud.google.com/alloydb/docs/ai/ai-query-engine-landing](https://docs.cloud.google.com/alloydb/docs/ai/ai-query-engine-landing))
- key (evidence: [https://docs.cloud.google.com/alloydb/docs/backup/manage-enhanced-backups](https://docs.cloud.google.com/alloydb/docs/backup/manage-enhanced-backups), [https://docs.cloud.google.com/alloydb/docs/reference/ai/scann-index-reference](https://docs.cloud.google.com/alloydb/docs/reference/ai/scann-index-reference), [https://docs.cloud.google.com/alloydb/docs/ai/ai-query-engine-landing](https://docs.cloud.google.com/alloydb/docs/ai/ai-query-engine-landing))
- permission (evidence: [https://docs.cloud.google.com/alloydb/docs/backup/manage-enhanced-backups](https://docs.cloud.google.com/alloydb/docs/backup/manage-enhanced-backups), [https://docs.cloud.google.com/alloydb/docs/reference/ai/scann-index-reference](https://docs.cloud.google.com/alloydb/docs/reference/ai/scann-index-reference), [https://docs.cloud.google.com/alloydb/docs/ai/ai-query-engine-landing](https://docs.cloud.google.com/alloydb/docs/ai/ai-query-engine-landing))
- role (evidence: [https://docs.cloud.google.com/alloydb/docs/backup/manage-enhanced-backups](https://docs.cloud.google.com/alloydb/docs/backup/manage-enhanced-backups), [https://docs.cloud.google.com/alloydb/docs/reference/ai/scann-index-reference](https://docs.cloud.google.com/alloydb/docs/reference/ai/scann-index-reference), [https://docs.cloud.google.com/alloydb/docs/ai/ai-query-engine-landing](https://docs.cloud.google.com/alloydb/docs/ai/ai-query-engine-landing))

## Official Evidence

- [https://docs.cloud.google.com/alloydb/docs/ai/ai-query-engine-landing](https://docs.cloud.google.com/alloydb/docs/ai/ai-query-engine-landing)
- [https://docs.cloud.google.com/alloydb/docs/backup/manage-enhanced-backups](https://docs.cloud.google.com/alloydb/docs/backup/manage-enhanced-backups)
- [https://docs.cloud.google.com/alloydb/docs/reference/ai/scann-index-reference](https://docs.cloud.google.com/alloydb/docs/reference/ai/scann-index-reference)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
