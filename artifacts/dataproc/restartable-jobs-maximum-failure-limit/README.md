# Restartable jobs maximum failure limit

Product: Dataproc
Feature slug: `restartable-jobs-maximum-failure-limit`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Restartable Dataproc jobs let users specify the maximum total number of job failures at submission time.

## Lifecycle

- Latest feature date: 2020-12-08
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/JobScheduling](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/JobScheduling), [https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore](https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore), [https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups](https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups))
- auth (evidence: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/JobScheduling](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/JobScheduling), [https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore](https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore), [https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups](https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups))
- authorization (evidence: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/JobScheduling](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/JobScheduling), [https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore](https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore), [https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups](https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups))
- credential (evidence: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/JobScheduling](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/JobScheduling), [https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore](https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore), [https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups](https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups))
- role (evidence: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/JobScheduling](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/JobScheduling), [https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore](https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore), [https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups](https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups))
- token (evidence: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/JobScheduling](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/JobScheduling), [https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore](https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore), [https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups](https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups))

## Official Evidence

- [https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore](https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore)
- [https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups](https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/JobScheduling](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/JobScheduling)
