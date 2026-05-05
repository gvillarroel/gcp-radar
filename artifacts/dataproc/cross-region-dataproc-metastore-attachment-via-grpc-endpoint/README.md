# Cross-region Dataproc Metastore attachment via gRPC endpoint

Product: Dataproc
Feature slug: `cross-region-dataproc-metastore-attachment-via-grpc-endpoint`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Clusters in any region can attach to a Dataproc Metastore service that uses the gRPC endpoint protocol.

## Lifecycle

- Latest feature date: 2022-11-07
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/dataproc-metastore/docs/grpc-endpoints](https://docs.cloud.google.com/dataproc-metastore/docs/grpc-endpoints), [https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos-grpc](https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos-grpc), [https://docs.cloud.google.com/dataproc-metastore/docs/about-endpoint-protocols](https://docs.cloud.google.com/dataproc-metastore/docs/about-endpoint-protocols))
- iam (evidence: [https://docs.cloud.google.com/dataproc-metastore/docs/grpc-endpoints](https://docs.cloud.google.com/dataproc-metastore/docs/grpc-endpoints), [https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos-grpc](https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos-grpc), [https://docs.cloud.google.com/dataproc-metastore/docs/about-endpoint-protocols](https://docs.cloud.google.com/dataproc-metastore/docs/about-endpoint-protocols))
- private (evidence: [https://docs.cloud.google.com/dataproc-metastore/docs/grpc-endpoints](https://docs.cloud.google.com/dataproc-metastore/docs/grpc-endpoints), [https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos-grpc](https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos-grpc), [https://docs.cloud.google.com/dataproc-metastore/docs/about-endpoint-protocols](https://docs.cloud.google.com/dataproc-metastore/docs/about-endpoint-protocols))
- role (evidence: [https://docs.cloud.google.com/dataproc-metastore/docs/grpc-endpoints](https://docs.cloud.google.com/dataproc-metastore/docs/grpc-endpoints), [https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos-grpc](https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos-grpc), [https://docs.cloud.google.com/dataproc-metastore/docs/about-endpoint-protocols](https://docs.cloud.google.com/dataproc-metastore/docs/about-endpoint-protocols))

## Official Evidence

- [https://docs.cloud.google.com/dataproc-metastore/docs/about-endpoint-protocols](https://docs.cloud.google.com/dataproc-metastore/docs/about-endpoint-protocols)
- [https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos-grpc](https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos-grpc)
- [https://docs.cloud.google.com/dataproc-metastore/docs/grpc-endpoints](https://docs.cloud.google.com/dataproc-metastore/docs/grpc-endpoints)
