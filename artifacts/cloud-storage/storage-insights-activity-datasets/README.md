# Storage Insights activity datasets

Product: Cloud Storage
Feature slug: `storage-insights-activity-datasets`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Storage Insights datasets can be generated for activity data to analyze object mutations, errors, and activity trends.

## Lifecycle

- Latest feature date: 2025-12-16
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/storage/docs/analyze-data-gemini-cloud-assist](https://docs.cloud.google.com/storage/docs/analyze-data-gemini-cloud-assist), [https://docs.cloud.google.com/storage/docs/audit-logging](https://docs.cloud.google.com/storage/docs/audit-logging), [https://docs.cloud.google.com/storage/docs/access-logs](https://docs.cloud.google.com/storage/docs/access-logs), [https://docs.cloud.google.com/storage/docs/access-control/iam-permissions](https://docs.cloud.google.com/storage/docs/access-control/iam-permissions))
- allow (evidence: [https://docs.cloud.google.com/storage/docs/analyze-data-gemini-cloud-assist](https://docs.cloud.google.com/storage/docs/analyze-data-gemini-cloud-assist), [https://docs.cloud.google.com/storage/docs/audit-logging](https://docs.cloud.google.com/storage/docs/audit-logging), [https://docs.cloud.google.com/storage/docs/access-logs](https://docs.cloud.google.com/storage/docs/access-logs), [https://docs.cloud.google.com/storage/docs/access-control/iam-permissions](https://docs.cloud.google.com/storage/docs/access-control/iam-permissions))
- audit (evidence: [https://docs.cloud.google.com/storage/docs/analyze-data-gemini-cloud-assist](https://docs.cloud.google.com/storage/docs/analyze-data-gemini-cloud-assist), [https://docs.cloud.google.com/storage/docs/audit-logging](https://docs.cloud.google.com/storage/docs/audit-logging), [https://docs.cloud.google.com/storage/docs/access-logs](https://docs.cloud.google.com/storage/docs/access-logs), [https://docs.cloud.google.com/storage/docs/access-control/iam-permissions](https://docs.cloud.google.com/storage/docs/access-control/iam-permissions))
- auth (evidence: [https://docs.cloud.google.com/storage/docs/analyze-data-gemini-cloud-assist](https://docs.cloud.google.com/storage/docs/analyze-data-gemini-cloud-assist), [https://docs.cloud.google.com/storage/docs/audit-logging](https://docs.cloud.google.com/storage/docs/audit-logging), [https://docs.cloud.google.com/storage/docs/access-logs](https://docs.cloud.google.com/storage/docs/access-logs), [https://docs.cloud.google.com/storage/docs/access-control/iam-permissions](https://docs.cloud.google.com/storage/docs/access-control/iam-permissions))
- credential (evidence: [https://docs.cloud.google.com/storage/docs/analyze-data-gemini-cloud-assist](https://docs.cloud.google.com/storage/docs/analyze-data-gemini-cloud-assist), [https://docs.cloud.google.com/storage/docs/audit-logging](https://docs.cloud.google.com/storage/docs/audit-logging), [https://docs.cloud.google.com/storage/docs/access-logs](https://docs.cloud.google.com/storage/docs/access-logs), [https://docs.cloud.google.com/storage/docs/access-control/iam-permissions](https://docs.cloud.google.com/storage/docs/access-control/iam-permissions))
- iam (evidence: [https://docs.cloud.google.com/storage/docs/analyze-data-gemini-cloud-assist](https://docs.cloud.google.com/storage/docs/analyze-data-gemini-cloud-assist), [https://docs.cloud.google.com/storage/docs/audit-logging](https://docs.cloud.google.com/storage/docs/audit-logging), [https://docs.cloud.google.com/storage/docs/access-logs](https://docs.cloud.google.com/storage/docs/access-logs), [https://docs.cloud.google.com/storage/docs/access-control/iam-permissions](https://docs.cloud.google.com/storage/docs/access-control/iam-permissions))
- key (evidence: [https://docs.cloud.google.com/storage/docs/analyze-data-gemini-cloud-assist](https://docs.cloud.google.com/storage/docs/analyze-data-gemini-cloud-assist), [https://docs.cloud.google.com/storage/docs/audit-logging](https://docs.cloud.google.com/storage/docs/audit-logging), [https://docs.cloud.google.com/storage/docs/access-logs](https://docs.cloud.google.com/storage/docs/access-logs), [https://docs.cloud.google.com/storage/docs/access-control/iam-permissions](https://docs.cloud.google.com/storage/docs/access-control/iam-permissions))
- logging (evidence: [https://docs.cloud.google.com/storage/docs/analyze-data-gemini-cloud-assist](https://docs.cloud.google.com/storage/docs/analyze-data-gemini-cloud-assist), [https://docs.cloud.google.com/storage/docs/audit-logging](https://docs.cloud.google.com/storage/docs/audit-logging), [https://docs.cloud.google.com/storage/docs/access-logs](https://docs.cloud.google.com/storage/docs/access-logs), [https://docs.cloud.google.com/storage/docs/access-control/iam-permissions](https://docs.cloud.google.com/storage/docs/access-control/iam-permissions))
- permission (evidence: [https://docs.cloud.google.com/storage/docs/analyze-data-gemini-cloud-assist](https://docs.cloud.google.com/storage/docs/analyze-data-gemini-cloud-assist), [https://docs.cloud.google.com/storage/docs/audit-logging](https://docs.cloud.google.com/storage/docs/audit-logging), [https://docs.cloud.google.com/storage/docs/access-logs](https://docs.cloud.google.com/storage/docs/access-logs), [https://docs.cloud.google.com/storage/docs/access-control/iam-permissions](https://docs.cloud.google.com/storage/docs/access-control/iam-permissions))
- policy (evidence: [https://docs.cloud.google.com/storage/docs/analyze-data-gemini-cloud-assist](https://docs.cloud.google.com/storage/docs/analyze-data-gemini-cloud-assist), [https://docs.cloud.google.com/storage/docs/audit-logging](https://docs.cloud.google.com/storage/docs/audit-logging), [https://docs.cloud.google.com/storage/docs/access-logs](https://docs.cloud.google.com/storage/docs/access-logs), [https://docs.cloud.google.com/storage/docs/access-control/iam-permissions](https://docs.cloud.google.com/storage/docs/access-control/iam-permissions))
- role (evidence: [https://docs.cloud.google.com/storage/docs/analyze-data-gemini-cloud-assist](https://docs.cloud.google.com/storage/docs/analyze-data-gemini-cloud-assist), [https://docs.cloud.google.com/storage/docs/audit-logging](https://docs.cloud.google.com/storage/docs/audit-logging), [https://docs.cloud.google.com/storage/docs/access-logs](https://docs.cloud.google.com/storage/docs/access-logs), [https://docs.cloud.google.com/storage/docs/access-control/iam-permissions](https://docs.cloud.google.com/storage/docs/access-control/iam-permissions))
- security (evidence: [https://docs.cloud.google.com/storage/docs/analyze-data-gemini-cloud-assist](https://docs.cloud.google.com/storage/docs/analyze-data-gemini-cloud-assist), [https://docs.cloud.google.com/storage/docs/audit-logging](https://docs.cloud.google.com/storage/docs/audit-logging), [https://docs.cloud.google.com/storage/docs/access-logs](https://docs.cloud.google.com/storage/docs/access-logs), [https://docs.cloud.google.com/storage/docs/access-control/iam-permissions](https://docs.cloud.google.com/storage/docs/access-control/iam-permissions))

## Official Evidence

- [https://docs.cloud.google.com/storage/docs/access-control/iam-permissions](https://docs.cloud.google.com/storage/docs/access-control/iam-permissions)
- [https://docs.cloud.google.com/storage/docs/access-logs](https://docs.cloud.google.com/storage/docs/access-logs)
- [https://docs.cloud.google.com/storage/docs/analyze-data-gemini-cloud-assist](https://docs.cloud.google.com/storage/docs/analyze-data-gemini-cloud-assist)
- [https://docs.cloud.google.com/storage/docs/audit-logging](https://docs.cloud.google.com/storage/docs/audit-logging)
