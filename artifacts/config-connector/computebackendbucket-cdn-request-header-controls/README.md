# ComputeBackendBucket CDN request header controls

Product: Config Connector
Feature slug: `computebackendbucket-cdn-request-header-controls`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Config Connector supports bypassCacheOnRequestHeaders and requestCoalescing fields in ComputeBackendBucket CDN policy configuration.

## Lifecycle

- Latest feature date: 2022-09-01
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- audit (evidence: [https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources](https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources), [https://docs.cloud.google.com/config-connector/docs/how-to/install-upgrade-uninstall](https://docs.cloud.google.com/config-connector/docs/how-to/install-upgrade-uninstall), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamauditconfig](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamauditconfig))
- iam (evidence: [https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources](https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources), [https://docs.cloud.google.com/config-connector/docs/how-to/install-upgrade-uninstall](https://docs.cloud.google.com/config-connector/docs/how-to/install-upgrade-uninstall), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamauditconfig](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamauditconfig))
- policy (evidence: [https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources](https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources), [https://docs.cloud.google.com/config-connector/docs/how-to/install-upgrade-uninstall](https://docs.cloud.google.com/config-connector/docs/how-to/install-upgrade-uninstall), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamauditconfig](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamauditconfig))

## Official Evidence

- [https://docs.cloud.google.com/config-connector/docs/how-to/install-upgrade-uninstall](https://docs.cloud.google.com/config-connector/docs/how-to/install-upgrade-uninstall)
- [https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources](https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamauditconfig](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamauditconfig)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:generic_supporting_pages` Supporting pages do not mention any informative feature tokens.
