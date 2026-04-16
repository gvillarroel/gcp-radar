---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:52:59.659Z"
product_name: "Batch"
product_slug: "batch"
feature_name: "Batch VPC Service Controls support"
feature_slug: "batch-vpc-service-controls-support"
latest_feature_date: "2022-12-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/batch/docs/create-run-job"
  - "https://docs.cloud.google.com/iam/docs/resources"
  - "https://docs.cloud.google.com/iam/docs/roles-overview"
keywords:
  - "explicitly"
  - "perimeters"
  - "controls"
  - "enabling"
  - "protect"
  - "supports"
---

# Batch VPC Service Controls support

Product: Batch
Coverage: LOW

## Step 02 Summary

Batch supports VPC Service Controls, enabling perimeters to protect explicitly specified Google Cloud resources and data used by Batch.

## Extended Definition

Batch supports VPC Service Controls, enabling perimeters to protect explicitly specified Google Cloud resources and data used by Batch.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/batch/docs/create-run-job](https://docs.cloud.google.com/batch/docs/create-run-job)
- [https://docs.cloud.google.com/iam/docs/resources](https://docs.cloud.google.com/iam/docs/resources)
- [https://docs.cloud.google.com/iam/docs/roles-overview](https://docs.cloud.google.com/iam/docs/roles-overview)

## Supporting Pages

### "Resources \_|\_ Identity and Access Management (IAM) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/iam/docs/resources](https://docs.cloud.google.com/iam/docs/resources)
- Source ID: `site-iam-reference`
- Final score: 40
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

### "Roles and permissions \_|\_ Identity and Access Management (IAM) \_|\_ Google\

- URL: [https://docs.cloud.google.com/iam/docs/roles-overview](https://docs.cloud.google.com/iam/docs/roles-overview)
- Source ID: `site-iam-reference`
- Final score: 38
- Re-rank relevance: N/A

### Job creation and execution overview \_|\_ Batch \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/batch/docs/create-run-job](https://docs.cloud.google.com/batch/docs/create-run-job)
- Source ID: `site-docs-root`
- Final score: 35
- Re-rank relevance: N/A

Evidence snippets:
- Networking overview provides an overview of when and how you can customize the networking configuration for a job, including specifying the job's network, blocking external connections, and protecting data and resources by using VPC Service Controls.
- Protect sensitive data using Secret Manager explains how to securely define sensitive data, such as custom environment variables and login credentials, by using Secret Manager secrets to specify encrypted information when you create a job.

