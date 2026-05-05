# --num-preemptible-workers flag

Product: Dataproc
Feature slug: `num-preemptible-workers-flag`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The --num-preemptible-workers flag in gcloud dataproc clusters update configured the number of preemptible workers during cluster updates; deprecated on 2020-03-18.

## Lifecycle

- Latest feature date: 2020-03-18
- Deprecation date: 2020-03-18
- Status: deprecation_noted

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-gcloud](https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-gcloud), [https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels](https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels), [https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups](https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups))
- auth (evidence: [https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-gcloud](https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-gcloud), [https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels](https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels), [https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups](https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups))
- authorization (evidence: [https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-gcloud](https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-gcloud), [https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels](https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels), [https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups](https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups))
- key (evidence: [https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-gcloud](https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-gcloud), [https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels](https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels), [https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups](https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups))
- role (evidence: [https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-gcloud](https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-gcloud), [https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels](https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels), [https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups](https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups))
- token (evidence: [https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-gcloud](https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-gcloud), [https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels](https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels), [https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups](https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups))

## Official Evidence

- [https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels](https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels)
- [https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups](https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups)
- [https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-gcloud](https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-gcloud)
