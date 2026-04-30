# scan sampling with sample_method

Product: Sensitive Data Protection
Feature slug: `scan-sampling-with-sample-method`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

BigQueryOptions and CloudStorageOptions can sample scanned content instead of exhaustively inspecting every record.

## Lifecycle

- Latest feature date: 2018-05-18
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth

## Official Evidence

- [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/inspecting-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/inspecting-storage)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/InspectJobConfig](https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/InspectJobConfig)
