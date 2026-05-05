# Jupyter notebook PDF export

Product: Dataproc
Feature slug: `jupyter-notebook-pdf-export`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Jupyter on Dataproc supports exporting notebooks as PDF files.

## Lifecycle

- Latest feature date: 2020-04-15
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/dataproc-metastore/docs/export-metadata](https://docs.cloud.google.com/dataproc-metastore/docs/export-metadata), [https://docs.cloud.google.com/dataproc-metastore/docs/cmek](https://docs.cloud.google.com/dataproc-metastore/docs/cmek), [https://docs.cloud.google.com/dataproc-metastore/docs/networking](https://docs.cloud.google.com/dataproc-metastore/docs/networking))
- allow (evidence: [https://docs.cloud.google.com/dataproc-metastore/docs/export-metadata](https://docs.cloud.google.com/dataproc-metastore/docs/export-metadata), [https://docs.cloud.google.com/dataproc-metastore/docs/cmek](https://docs.cloud.google.com/dataproc-metastore/docs/cmek), [https://docs.cloud.google.com/dataproc-metastore/docs/networking](https://docs.cloud.google.com/dataproc-metastore/docs/networking))
- auth (evidence: [https://docs.cloud.google.com/dataproc-metastore/docs/export-metadata](https://docs.cloud.google.com/dataproc-metastore/docs/export-metadata), [https://docs.cloud.google.com/dataproc-metastore/docs/cmek](https://docs.cloud.google.com/dataproc-metastore/docs/cmek), [https://docs.cloud.google.com/dataproc-metastore/docs/networking](https://docs.cloud.google.com/dataproc-metastore/docs/networking))
- encrypt (evidence: [https://docs.cloud.google.com/dataproc-metastore/docs/export-metadata](https://docs.cloud.google.com/dataproc-metastore/docs/export-metadata), [https://docs.cloud.google.com/dataproc-metastore/docs/cmek](https://docs.cloud.google.com/dataproc-metastore/docs/cmek), [https://docs.cloud.google.com/dataproc-metastore/docs/networking](https://docs.cloud.google.com/dataproc-metastore/docs/networking))
- firewall (evidence: [https://docs.cloud.google.com/dataproc-metastore/docs/export-metadata](https://docs.cloud.google.com/dataproc-metastore/docs/export-metadata), [https://docs.cloud.google.com/dataproc-metastore/docs/cmek](https://docs.cloud.google.com/dataproc-metastore/docs/cmek), [https://docs.cloud.google.com/dataproc-metastore/docs/networking](https://docs.cloud.google.com/dataproc-metastore/docs/networking))
- iam (evidence: [https://docs.cloud.google.com/dataproc-metastore/docs/export-metadata](https://docs.cloud.google.com/dataproc-metastore/docs/export-metadata), [https://docs.cloud.google.com/dataproc-metastore/docs/cmek](https://docs.cloud.google.com/dataproc-metastore/docs/cmek), [https://docs.cloud.google.com/dataproc-metastore/docs/networking](https://docs.cloud.google.com/dataproc-metastore/docs/networking))
- identity (evidence: [https://docs.cloud.google.com/dataproc-metastore/docs/export-metadata](https://docs.cloud.google.com/dataproc-metastore/docs/export-metadata), [https://docs.cloud.google.com/dataproc-metastore/docs/cmek](https://docs.cloud.google.com/dataproc-metastore/docs/cmek), [https://docs.cloud.google.com/dataproc-metastore/docs/networking](https://docs.cloud.google.com/dataproc-metastore/docs/networking))
- key (evidence: [https://docs.cloud.google.com/dataproc-metastore/docs/export-metadata](https://docs.cloud.google.com/dataproc-metastore/docs/export-metadata), [https://docs.cloud.google.com/dataproc-metastore/docs/cmek](https://docs.cloud.google.com/dataproc-metastore/docs/cmek), [https://docs.cloud.google.com/dataproc-metastore/docs/networking](https://docs.cloud.google.com/dataproc-metastore/docs/networking))
- kms (evidence: [https://docs.cloud.google.com/dataproc-metastore/docs/export-metadata](https://docs.cloud.google.com/dataproc-metastore/docs/export-metadata), [https://docs.cloud.google.com/dataproc-metastore/docs/cmek](https://docs.cloud.google.com/dataproc-metastore/docs/cmek), [https://docs.cloud.google.com/dataproc-metastore/docs/networking](https://docs.cloud.google.com/dataproc-metastore/docs/networking))
- logging (evidence: [https://docs.cloud.google.com/dataproc-metastore/docs/export-metadata](https://docs.cloud.google.com/dataproc-metastore/docs/export-metadata), [https://docs.cloud.google.com/dataproc-metastore/docs/cmek](https://docs.cloud.google.com/dataproc-metastore/docs/cmek), [https://docs.cloud.google.com/dataproc-metastore/docs/networking](https://docs.cloud.google.com/dataproc-metastore/docs/networking))
- permission (evidence: [https://docs.cloud.google.com/dataproc-metastore/docs/export-metadata](https://docs.cloud.google.com/dataproc-metastore/docs/export-metadata), [https://docs.cloud.google.com/dataproc-metastore/docs/cmek](https://docs.cloud.google.com/dataproc-metastore/docs/cmek), [https://docs.cloud.google.com/dataproc-metastore/docs/networking](https://docs.cloud.google.com/dataproc-metastore/docs/networking))
- policy (evidence: [https://docs.cloud.google.com/dataproc-metastore/docs/export-metadata](https://docs.cloud.google.com/dataproc-metastore/docs/export-metadata), [https://docs.cloud.google.com/dataproc-metastore/docs/cmek](https://docs.cloud.google.com/dataproc-metastore/docs/cmek), [https://docs.cloud.google.com/dataproc-metastore/docs/networking](https://docs.cloud.google.com/dataproc-metastore/docs/networking))
- private (evidence: [https://docs.cloud.google.com/dataproc-metastore/docs/export-metadata](https://docs.cloud.google.com/dataproc-metastore/docs/export-metadata), [https://docs.cloud.google.com/dataproc-metastore/docs/cmek](https://docs.cloud.google.com/dataproc-metastore/docs/cmek), [https://docs.cloud.google.com/dataproc-metastore/docs/networking](https://docs.cloud.google.com/dataproc-metastore/docs/networking))
- role (evidence: [https://docs.cloud.google.com/dataproc-metastore/docs/export-metadata](https://docs.cloud.google.com/dataproc-metastore/docs/export-metadata), [https://docs.cloud.google.com/dataproc-metastore/docs/cmek](https://docs.cloud.google.com/dataproc-metastore/docs/cmek), [https://docs.cloud.google.com/dataproc-metastore/docs/networking](https://docs.cloud.google.com/dataproc-metastore/docs/networking))

## Official Evidence

- [https://docs.cloud.google.com/dataproc-metastore/docs/cmek](https://docs.cloud.google.com/dataproc-metastore/docs/cmek)
- [https://docs.cloud.google.com/dataproc-metastore/docs/export-metadata](https://docs.cloud.google.com/dataproc-metastore/docs/export-metadata)
- [https://docs.cloud.google.com/dataproc-metastore/docs/networking](https://docs.cloud.google.com/dataproc-metastore/docs/networking)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
