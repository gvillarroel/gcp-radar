# Spanner instance configuration changes

Product: Spanner
Feature slug: `spanner-instance-configuration-changes`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Spanner added support for changing instance configuration as a preview capability.

## Lifecycle

- Latest feature date: 2021-08-03
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/spanner/docs/change-streams/manage](https://docs.cloud.google.com/spanner/docs/change-streams/manage), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog), [https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview](https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview))
- allow (evidence: [https://docs.cloud.google.com/spanner/docs/change-streams/manage](https://docs.cloud.google.com/spanner/docs/change-streams/manage), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog), [https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview](https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview))
- audit (evidence: [https://docs.cloud.google.com/spanner/docs/change-streams/manage](https://docs.cloud.google.com/spanner/docs/change-streams/manage), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog), [https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview](https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview))
- auth (evidence: [https://docs.cloud.google.com/spanner/docs/change-streams/manage](https://docs.cloud.google.com/spanner/docs/change-streams/manage), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog), [https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview](https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview))
- certificate (evidence: [https://docs.cloud.google.com/spanner/docs/change-streams/manage](https://docs.cloud.google.com/spanner/docs/change-streams/manage), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog), [https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview](https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview))
- credential (evidence: [https://docs.cloud.google.com/spanner/docs/change-streams/manage](https://docs.cloud.google.com/spanner/docs/change-streams/manage), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog), [https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview](https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview))
- encrypt (evidence: [https://docs.cloud.google.com/spanner/docs/change-streams/manage](https://docs.cloud.google.com/spanner/docs/change-streams/manage), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog), [https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview](https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview))
- iam (evidence: [https://docs.cloud.google.com/spanner/docs/change-streams/manage](https://docs.cloud.google.com/spanner/docs/change-streams/manage), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog), [https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview](https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview))
- key (evidence: [https://docs.cloud.google.com/spanner/docs/change-streams/manage](https://docs.cloud.google.com/spanner/docs/change-streams/manage), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog), [https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview](https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview))
- kms (evidence: [https://docs.cloud.google.com/spanner/docs/change-streams/manage](https://docs.cloud.google.com/spanner/docs/change-streams/manage), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog), [https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview](https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview))
- logging (evidence: [https://docs.cloud.google.com/spanner/docs/change-streams/manage](https://docs.cloud.google.com/spanner/docs/change-streams/manage), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog), [https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview](https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview))
- permission (evidence: [https://docs.cloud.google.com/spanner/docs/change-streams/manage](https://docs.cloud.google.com/spanner/docs/change-streams/manage), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog), [https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview](https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview))
- policy (evidence: [https://docs.cloud.google.com/spanner/docs/change-streams/manage](https://docs.cloud.google.com/spanner/docs/change-streams/manage), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog), [https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview](https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview))
- role (evidence: [https://docs.cloud.google.com/spanner/docs/change-streams/manage](https://docs.cloud.google.com/spanner/docs/change-streams/manage), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog), [https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview](https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview))
- token (evidence: [https://docs.cloud.google.com/spanner/docs/change-streams/manage](https://docs.cloud.google.com/spanner/docs/change-streams/manage), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog), [https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview](https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview))

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog)
- [https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview](https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview)
- [https://docs.cloud.google.com/spanner/docs/change-streams/manage](https://docs.cloud.google.com/spanner/docs/change-streams/manage)
