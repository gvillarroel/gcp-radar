# Enhanced Flexibility Mode

Product: Dataproc
Feature slug: `enhanced-flexibility-mode`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Dataproc Enhanced Flexibility Mode manages shuffle data to reduce job delays when nodes are removed from a running cluster; Enhanced Flexibility Mode improves cluster stability and scalability by preserving stateful node data such as MapReduce shuffle data in HDFS.

## Lifecycle

- Latest feature date: 2020-08-21
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- authorization
- policy
- token

## Official Evidence

- [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-recreate-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-recreate-cluster)
- [https://docs.cloud.google.com/dataproc/docs/guides/recreate-cluster](https://docs.cloud.google.com/dataproc/docs/guides/recreate-cluster)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)
