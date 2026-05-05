# Network tags parameter

Product: Dataflow
Feature slug: `network-tags-parameter`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The network tags parameter lets you apply network tags to all worker VMs for a Dataflow job.

## Lifecycle

- Latest feature date: 2020-09-29
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/routes-firewall](https://docs.cloud.google.com/dataflow/docs/guides/routes-firewall), [https://docs.cloud.google.com/dataflow/docs/guides/specifying-networks](https://docs.cloud.google.com/dataflow/docs/guides/specifying-networks), [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors))
- allow (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/routes-firewall](https://docs.cloud.google.com/dataflow/docs/guides/routes-firewall), [https://docs.cloud.google.com/dataflow/docs/guides/specifying-networks](https://docs.cloud.google.com/dataflow/docs/guides/specifying-networks), [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors))
- credential (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/routes-firewall](https://docs.cloud.google.com/dataflow/docs/guides/routes-firewall), [https://docs.cloud.google.com/dataflow/docs/guides/specifying-networks](https://docs.cloud.google.com/dataflow/docs/guides/specifying-networks), [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors))
- firewall (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/routes-firewall](https://docs.cloud.google.com/dataflow/docs/guides/routes-firewall), [https://docs.cloud.google.com/dataflow/docs/guides/specifying-networks](https://docs.cloud.google.com/dataflow/docs/guides/specifying-networks), [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors))
- iam (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/routes-firewall](https://docs.cloud.google.com/dataflow/docs/guides/routes-firewall), [https://docs.cloud.google.com/dataflow/docs/guides/specifying-networks](https://docs.cloud.google.com/dataflow/docs/guides/specifying-networks), [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors))
- permission (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/routes-firewall](https://docs.cloud.google.com/dataflow/docs/guides/routes-firewall), [https://docs.cloud.google.com/dataflow/docs/guides/specifying-networks](https://docs.cloud.google.com/dataflow/docs/guides/specifying-networks), [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors))
- security (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/routes-firewall](https://docs.cloud.google.com/dataflow/docs/guides/routes-firewall), [https://docs.cloud.google.com/dataflow/docs/guides/specifying-networks](https://docs.cloud.google.com/dataflow/docs/guides/specifying-networks), [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors))

## Official Evidence

- [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- [https://docs.cloud.google.com/dataflow/docs/guides/routes-firewall](https://docs.cloud.google.com/dataflow/docs/guides/routes-firewall)
- [https://docs.cloud.google.com/dataflow/docs/guides/specifying-networks](https://docs.cloud.google.com/dataflow/docs/guides/specifying-networks)
