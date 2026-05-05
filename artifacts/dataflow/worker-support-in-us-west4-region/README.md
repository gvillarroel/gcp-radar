# Worker support in us-west4 region

Product: Dataflow
Feature slug: `worker-support-in-us-west4-region`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Dataflow can run worker VMs in zones within the us-west4 region.

## Lifecycle

- Latest feature date: 2020-04-20
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth (evidence: [https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints](https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints), [https://docs.cloud.google.com/dataflow/docs/dataflow-regulatory-compliance](https://docs.cloud.google.com/dataflow/docs/dataflow-regulatory-compliance), [https://docs.cloud.google.com/dataflow/docs/guides/build-container-image](https://docs.cloud.google.com/dataflow/docs/guides/build-container-image))
- credential (evidence: [https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints](https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints), [https://docs.cloud.google.com/dataflow/docs/dataflow-regulatory-compliance](https://docs.cloud.google.com/dataflow/docs/dataflow-regulatory-compliance), [https://docs.cloud.google.com/dataflow/docs/guides/build-container-image](https://docs.cloud.google.com/dataflow/docs/guides/build-container-image))
- key (evidence: [https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints](https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints), [https://docs.cloud.google.com/dataflow/docs/dataflow-regulatory-compliance](https://docs.cloud.google.com/dataflow/docs/dataflow-regulatory-compliance), [https://docs.cloud.google.com/dataflow/docs/guides/build-container-image](https://docs.cloud.google.com/dataflow/docs/guides/build-container-image))
- kms (evidence: [https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints](https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints), [https://docs.cloud.google.com/dataflow/docs/dataflow-regulatory-compliance](https://docs.cloud.google.com/dataflow/docs/dataflow-regulatory-compliance), [https://docs.cloud.google.com/dataflow/docs/guides/build-container-image](https://docs.cloud.google.com/dataflow/docs/guides/build-container-image))
- logging (evidence: [https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints](https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints), [https://docs.cloud.google.com/dataflow/docs/dataflow-regulatory-compliance](https://docs.cloud.google.com/dataflow/docs/dataflow-regulatory-compliance), [https://docs.cloud.google.com/dataflow/docs/guides/build-container-image](https://docs.cloud.google.com/dataflow/docs/guides/build-container-image))

## Official Evidence

- [https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints](https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints)
- [https://docs.cloud.google.com/dataflow/docs/dataflow-regulatory-compliance](https://docs.cloud.google.com/dataflow/docs/dataflow-regulatory-compliance)
- [https://docs.cloud.google.com/dataflow/docs/guides/build-container-image](https://docs.cloud.google.com/dataflow/docs/guides/build-container-image)
