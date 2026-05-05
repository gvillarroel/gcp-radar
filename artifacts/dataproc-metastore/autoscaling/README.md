# Autoscaling

Product: Dataproc Metastore
Feature slug: `autoscaling`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Autoscaling automatically increases or decreases the scaling factor needed to run workloads.

## Lifecycle

- Latest feature date: 2024-04-01
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/dataproc-metastore/docs/create-service](https://docs.cloud.google.com/dataproc-metastore/docs/create-service), [https://docs.cloud.google.com/dataproc-metastore/docs/manage-service](https://docs.cloud.google.com/dataproc-metastore/docs/manage-service), [https://docs.cloud.google.com/dataproc-metastore/docs/core-concepts](https://docs.cloud.google.com/dataproc-metastore/docs/core-concepts), [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient))
- auth (evidence: [https://docs.cloud.google.com/dataproc-metastore/docs/create-service](https://docs.cloud.google.com/dataproc-metastore/docs/create-service), [https://docs.cloud.google.com/dataproc-metastore/docs/manage-service](https://docs.cloud.google.com/dataproc-metastore/docs/manage-service), [https://docs.cloud.google.com/dataproc-metastore/docs/core-concepts](https://docs.cloud.google.com/dataproc-metastore/docs/core-concepts), [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient))
- authorization (evidence: [https://docs.cloud.google.com/dataproc-metastore/docs/create-service](https://docs.cloud.google.com/dataproc-metastore/docs/create-service), [https://docs.cloud.google.com/dataproc-metastore/docs/manage-service](https://docs.cloud.google.com/dataproc-metastore/docs/manage-service), [https://docs.cloud.google.com/dataproc-metastore/docs/core-concepts](https://docs.cloud.google.com/dataproc-metastore/docs/core-concepts), [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient))
- iam (evidence: [https://docs.cloud.google.com/dataproc-metastore/docs/create-service](https://docs.cloud.google.com/dataproc-metastore/docs/create-service), [https://docs.cloud.google.com/dataproc-metastore/docs/manage-service](https://docs.cloud.google.com/dataproc-metastore/docs/manage-service), [https://docs.cloud.google.com/dataproc-metastore/docs/core-concepts](https://docs.cloud.google.com/dataproc-metastore/docs/core-concepts), [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient))
- key (evidence: [https://docs.cloud.google.com/dataproc-metastore/docs/create-service](https://docs.cloud.google.com/dataproc-metastore/docs/create-service), [https://docs.cloud.google.com/dataproc-metastore/docs/manage-service](https://docs.cloud.google.com/dataproc-metastore/docs/manage-service), [https://docs.cloud.google.com/dataproc-metastore/docs/core-concepts](https://docs.cloud.google.com/dataproc-metastore/docs/core-concepts), [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient))
- permission (evidence: [https://docs.cloud.google.com/dataproc-metastore/docs/create-service](https://docs.cloud.google.com/dataproc-metastore/docs/create-service), [https://docs.cloud.google.com/dataproc-metastore/docs/manage-service](https://docs.cloud.google.com/dataproc-metastore/docs/manage-service), [https://docs.cloud.google.com/dataproc-metastore/docs/core-concepts](https://docs.cloud.google.com/dataproc-metastore/docs/core-concepts), [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient))
- role (evidence: [https://docs.cloud.google.com/dataproc-metastore/docs/create-service](https://docs.cloud.google.com/dataproc-metastore/docs/create-service), [https://docs.cloud.google.com/dataproc-metastore/docs/manage-service](https://docs.cloud.google.com/dataproc-metastore/docs/manage-service), [https://docs.cloud.google.com/dataproc-metastore/docs/core-concepts](https://docs.cloud.google.com/dataproc-metastore/docs/core-concepts), [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient))
- token (evidence: [https://docs.cloud.google.com/dataproc-metastore/docs/create-service](https://docs.cloud.google.com/dataproc-metastore/docs/create-service), [https://docs.cloud.google.com/dataproc-metastore/docs/manage-service](https://docs.cloud.google.com/dataproc-metastore/docs/manage-service), [https://docs.cloud.google.com/dataproc-metastore/docs/core-concepts](https://docs.cloud.google.com/dataproc-metastore/docs/core-concepts), [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient))

## Official Evidence

- [https://docs.cloud.google.com/dataproc-metastore/docs/core-concepts](https://docs.cloud.google.com/dataproc-metastore/docs/core-concepts)
- [https://docs.cloud.google.com/dataproc-metastore/docs/create-service](https://docs.cloud.google.com/dataproc-metastore/docs/create-service)
- [https://docs.cloud.google.com/dataproc-metastore/docs/manage-service](https://docs.cloud.google.com/dataproc-metastore/docs/manage-service)
- [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient)
