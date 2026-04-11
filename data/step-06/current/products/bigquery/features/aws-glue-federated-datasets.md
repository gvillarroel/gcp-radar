---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.555Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "AWS Glue federated datasets"
feature_slug: "aws-glue-federated-datasets"
latest_feature_date: "2024-04-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "AWS Glue federated datasets"
  - "AWS Glue connection"
  - "BigQuery Glue federation"
  - "Glue dataset integration"
  - "dataset-level connection"
  - "federated dataset in BigQuery"
  - "external catalog dataset"
---

# AWS Glue federated datasets

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery added generally available AWS Glue federated datasets, defining a dataset-level connection between BigQuery and databases in AWS Glue.

## Extended Definition

BigQuery DDL supports creation of AWS Glue federated datasets by defining an external dataset in SQL and providing an external `source` value. The feature requires that the federated dataset location supports AWS Glue (an AWS location), and the source must be an Amazon Resource Name (ARN) using an `aws-glue://` prefix. The documentation points to a dedicated guide for creating AWS Glue federated datasets, but it does not confirm broader rollout details such as GA status in the provided excerpt.

## Evidence Summary

The cited BigQuery DDL reference page documents the constraints and required ARN prefix format for defining AWS Glue federated datasets, including AWS-location requirements and the `aws-glue://` source pattern.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- The location must support the kind of federated dataset that you are creating, for example, you can only create AWS Glue federated datasets in AWS locations. external source STRING The source of the external dataset.
- The location must support the kind of federated dataset that you are creating, for example, you can only create AWS Glue federated datasets in AWS locations.
- For AWS Glue federated datasets this must be an Amazon Resource Name (ARN) , with a prefix identifying the source, such as aws-glue:// .
- For more information about creating federated datasets, see the following: Create AWS Glue federated datasets .

