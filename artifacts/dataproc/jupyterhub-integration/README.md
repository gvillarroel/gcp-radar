# JupyterHub integration

Product: Dataproc
Feature slug: `jupyterhub-integration`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Dataproc can enable jupyterhub-singleuser for the Jupyter optional component and populate related hub environment and argument properties for DataprocSpawner.

## Lifecycle

- Latest feature date: 2019-08-23
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth (evidence: [https://docs.cloud.google.com/dataproc/docs/guides/create-lakehouse](https://docs.cloud.google.com/dataproc/docs/guides/create-lakehouse), [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig), [https://docs.cloud.google.com/dataproc-metastore/docs/enable-service](https://docs.cloud.google.com/dataproc-metastore/docs/enable-service))
- encrypt (evidence: [https://docs.cloud.google.com/dataproc/docs/guides/create-lakehouse](https://docs.cloud.google.com/dataproc/docs/guides/create-lakehouse), [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig), [https://docs.cloud.google.com/dataproc-metastore/docs/enable-service](https://docs.cloud.google.com/dataproc-metastore/docs/enable-service))
- iam (evidence: [https://docs.cloud.google.com/dataproc/docs/guides/create-lakehouse](https://docs.cloud.google.com/dataproc/docs/guides/create-lakehouse), [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig), [https://docs.cloud.google.com/dataproc-metastore/docs/enable-service](https://docs.cloud.google.com/dataproc-metastore/docs/enable-service))
- key (evidence: [https://docs.cloud.google.com/dataproc/docs/guides/create-lakehouse](https://docs.cloud.google.com/dataproc/docs/guides/create-lakehouse), [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig), [https://docs.cloud.google.com/dataproc-metastore/docs/enable-service](https://docs.cloud.google.com/dataproc-metastore/docs/enable-service))
- kms (evidence: [https://docs.cloud.google.com/dataproc/docs/guides/create-lakehouse](https://docs.cloud.google.com/dataproc/docs/guides/create-lakehouse), [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig), [https://docs.cloud.google.com/dataproc-metastore/docs/enable-service](https://docs.cloud.google.com/dataproc-metastore/docs/enable-service))
- permission (evidence: [https://docs.cloud.google.com/dataproc/docs/guides/create-lakehouse](https://docs.cloud.google.com/dataproc/docs/guides/create-lakehouse), [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig), [https://docs.cloud.google.com/dataproc-metastore/docs/enable-service](https://docs.cloud.google.com/dataproc-metastore/docs/enable-service))
- role (evidence: [https://docs.cloud.google.com/dataproc/docs/guides/create-lakehouse](https://docs.cloud.google.com/dataproc/docs/guides/create-lakehouse), [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig), [https://docs.cloud.google.com/dataproc-metastore/docs/enable-service](https://docs.cloud.google.com/dataproc-metastore/docs/enable-service))
- security (evidence: [https://docs.cloud.google.com/dataproc/docs/guides/create-lakehouse](https://docs.cloud.google.com/dataproc/docs/guides/create-lakehouse), [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig), [https://docs.cloud.google.com/dataproc-metastore/docs/enable-service](https://docs.cloud.google.com/dataproc-metastore/docs/enable-service))

## Official Evidence

- [https://docs.cloud.google.com/dataproc-metastore/docs/enable-service](https://docs.cloud.google.com/dataproc-metastore/docs/enable-service)
- [https://docs.cloud.google.com/dataproc/docs/guides/create-lakehouse](https://docs.cloud.google.com/dataproc/docs/guides/create-lakehouse)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
