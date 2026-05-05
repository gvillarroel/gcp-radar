# Out-of-disk recommender

Product: Cloud SQL for PostgreSQL
Feature slug: `out-of-disk-recommender`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The out-of-disk recommender proactively recommends actions to reduce downtime risk from low disk space; Cloud SQL provides a preview recommender that warns when an instance is trending toward running out of disk space.

## Lifecycle

- Latest feature date: 2021-09-10
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/postgres/about-storage-shrink](https://docs.cloud.google.com/sql/docs/postgres/about-storage-shrink), [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing), [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting))
- armor (evidence: [https://docs.cloud.google.com/sql/docs/postgres/about-storage-shrink](https://docs.cloud.google.com/sql/docs/postgres/about-storage-shrink), [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing), [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting))
- iam (evidence: [https://docs.cloud.google.com/sql/docs/postgres/about-storage-shrink](https://docs.cloud.google.com/sql/docs/postgres/about-storage-shrink), [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing), [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting))
- identity (evidence: [https://docs.cloud.google.com/sql/docs/postgres/about-storage-shrink](https://docs.cloud.google.com/sql/docs/postgres/about-storage-shrink), [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing), [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting))
- key (evidence: [https://docs.cloud.google.com/sql/docs/postgres/about-storage-shrink](https://docs.cloud.google.com/sql/docs/postgres/about-storage-shrink), [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing), [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting))
- logging (evidence: [https://docs.cloud.google.com/sql/docs/postgres/about-storage-shrink](https://docs.cloud.google.com/sql/docs/postgres/about-storage-shrink), [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing), [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting))
- private (evidence: [https://docs.cloud.google.com/sql/docs/postgres/about-storage-shrink](https://docs.cloud.google.com/sql/docs/postgres/about-storage-shrink), [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing), [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting))
- security (evidence: [https://docs.cloud.google.com/sql/docs/postgres/about-storage-shrink](https://docs.cloud.google.com/sql/docs/postgres/about-storage-shrink), [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing), [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting))
- threat (evidence: [https://docs.cloud.google.com/sql/docs/postgres/about-storage-shrink](https://docs.cloud.google.com/sql/docs/postgres/about-storage-shrink), [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing), [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/postgres/about-storage-shrink](https://docs.cloud.google.com/sql/docs/postgres/about-storage-shrink)
- [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing)
- [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting)
