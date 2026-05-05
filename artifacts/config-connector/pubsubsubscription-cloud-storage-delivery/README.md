# PubSubSubscription Cloud Storage delivery

Product: Config Connector
Feature slug: `pubsubsubscription-cloud-storage-delivery`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Config Connector supports Cloud Storage delivery configuration on PubSubSubscription resources.

## Lifecycle

- Latest feature date: 2023-09-06
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references](https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references))
- allow (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references](https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references))
- audit (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references](https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references))
- auth (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references](https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references))
- authorization (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references](https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references))
- certificate (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references](https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references))
- constraint (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references](https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references))
- firewall (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references](https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references))
- iam (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references](https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references))
- identity (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references](https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references))
- key (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references](https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references))
- kms (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references](https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references))
- logging (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references](https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references))
- policy (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references](https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references))
- private (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references](https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references))
- role (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references](https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references))
- secret (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references](https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references))
- security (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references](https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references))

## Official Evidence

- [https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references](https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references)
- [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview)
- [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
