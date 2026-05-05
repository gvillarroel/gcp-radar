# Connection and project access control in GoogleSQL

Product: BigQuery
Feature slug: `connection-and-project-access-control-in-googlesql`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

GoogleSQL supports connection user and PROJECT resource types in GRANT and REVOKE statements for managing connection and project access.

## Lifecycle

- Latest feature date: 2026-04-02
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language), [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam), [https://docs.cloud.google.com/bigquery/docs/access-control-intro](https://docs.cloud.google.com/bigquery/docs/access-control-intro))
- allow (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language), [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam), [https://docs.cloud.google.com/bigquery/docs/access-control-intro](https://docs.cloud.google.com/bigquery/docs/access-control-intro))
- iam (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language), [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam), [https://docs.cloud.google.com/bigquery/docs/access-control-intro](https://docs.cloud.google.com/bigquery/docs/access-control-intro))
- permission (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language), [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam), [https://docs.cloud.google.com/bigquery/docs/access-control-intro](https://docs.cloud.google.com/bigquery/docs/access-control-intro))
- policy (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language), [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam), [https://docs.cloud.google.com/bigquery/docs/access-control-intro](https://docs.cloud.google.com/bigquery/docs/access-control-intro))
- role (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language), [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam), [https://docs.cloud.google.com/bigquery/docs/access-control-intro](https://docs.cloud.google.com/bigquery/docs/access-control-intro))
- security (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language), [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam), [https://docs.cloud.google.com/bigquery/docs/access-control-intro](https://docs.cloud.google.com/bigquery/docs/access-control-intro))

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/access-control-intro](https://docs.cloud.google.com/bigquery/docs/access-control-intro)
- [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
