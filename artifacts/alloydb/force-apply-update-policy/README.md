# FORCE_APPLY update policy

Product: AlloyDB
Feature slug: `force-apply-update-policy`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The FORCE_APPLY update policy lets AlloyDB apply database flag changes and updates faster to an instance.

## Lifecycle

- Latest feature date: 2023-05-17
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow (evidence: [https://docs.cloud.google.com/alloydb/docs/reference/password-policy-flags](https://docs.cloud.google.com/alloydb/docs/reference/password-policy-flags), [https://docs.cloud.google.com/alloydb/docs/reference/database-flags](https://docs.cloud.google.com/alloydb/docs/reference/database-flags), [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes))
- audit (evidence: [https://docs.cloud.google.com/alloydb/docs/reference/password-policy-flags](https://docs.cloud.google.com/alloydb/docs/reference/password-policy-flags), [https://docs.cloud.google.com/alloydb/docs/reference/database-flags](https://docs.cloud.google.com/alloydb/docs/reference/database-flags), [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes))
- auth (evidence: [https://docs.cloud.google.com/alloydb/docs/reference/password-policy-flags](https://docs.cloud.google.com/alloydb/docs/reference/password-policy-flags), [https://docs.cloud.google.com/alloydb/docs/reference/database-flags](https://docs.cloud.google.com/alloydb/docs/reference/database-flags), [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes))
- constraint (evidence: [https://docs.cloud.google.com/alloydb/docs/reference/password-policy-flags](https://docs.cloud.google.com/alloydb/docs/reference/password-policy-flags), [https://docs.cloud.google.com/alloydb/docs/reference/database-flags](https://docs.cloud.google.com/alloydb/docs/reference/database-flags), [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes))
- encrypt (evidence: [https://docs.cloud.google.com/alloydb/docs/reference/password-policy-flags](https://docs.cloud.google.com/alloydb/docs/reference/password-policy-flags), [https://docs.cloud.google.com/alloydb/docs/reference/database-flags](https://docs.cloud.google.com/alloydb/docs/reference/database-flags), [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes))
- iam (evidence: [https://docs.cloud.google.com/alloydb/docs/reference/password-policy-flags](https://docs.cloud.google.com/alloydb/docs/reference/password-policy-flags), [https://docs.cloud.google.com/alloydb/docs/reference/database-flags](https://docs.cloud.google.com/alloydb/docs/reference/database-flags), [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes))
- key (evidence: [https://docs.cloud.google.com/alloydb/docs/reference/password-policy-flags](https://docs.cloud.google.com/alloydb/docs/reference/password-policy-flags), [https://docs.cloud.google.com/alloydb/docs/reference/database-flags](https://docs.cloud.google.com/alloydb/docs/reference/database-flags), [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes))
- logging (evidence: [https://docs.cloud.google.com/alloydb/docs/reference/password-policy-flags](https://docs.cloud.google.com/alloydb/docs/reference/password-policy-flags), [https://docs.cloud.google.com/alloydb/docs/reference/database-flags](https://docs.cloud.google.com/alloydb/docs/reference/database-flags), [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes))
- permission (evidence: [https://docs.cloud.google.com/alloydb/docs/reference/password-policy-flags](https://docs.cloud.google.com/alloydb/docs/reference/password-policy-flags), [https://docs.cloud.google.com/alloydb/docs/reference/database-flags](https://docs.cloud.google.com/alloydb/docs/reference/database-flags), [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes))
- policy (evidence: [https://docs.cloud.google.com/alloydb/docs/reference/password-policy-flags](https://docs.cloud.google.com/alloydb/docs/reference/password-policy-flags), [https://docs.cloud.google.com/alloydb/docs/reference/database-flags](https://docs.cloud.google.com/alloydb/docs/reference/database-flags), [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes))
- role (evidence: [https://docs.cloud.google.com/alloydb/docs/reference/password-policy-flags](https://docs.cloud.google.com/alloydb/docs/reference/password-policy-flags), [https://docs.cloud.google.com/alloydb/docs/reference/database-flags](https://docs.cloud.google.com/alloydb/docs/reference/database-flags), [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes))
- secret (evidence: [https://docs.cloud.google.com/alloydb/docs/reference/password-policy-flags](https://docs.cloud.google.com/alloydb/docs/reference/password-policy-flags), [https://docs.cloud.google.com/alloydb/docs/reference/database-flags](https://docs.cloud.google.com/alloydb/docs/reference/database-flags), [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes))
- security (evidence: [https://docs.cloud.google.com/alloydb/docs/reference/password-policy-flags](https://docs.cloud.google.com/alloydb/docs/reference/password-policy-flags), [https://docs.cloud.google.com/alloydb/docs/reference/database-flags](https://docs.cloud.google.com/alloydb/docs/reference/database-flags), [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes))

## Official Evidence

- [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes)
- [https://docs.cloud.google.com/alloydb/docs/reference/database-flags](https://docs.cloud.google.com/alloydb/docs/reference/database-flags)
- [https://docs.cloud.google.com/alloydb/docs/reference/password-policy-flags](https://docs.cloud.google.com/alloydb/docs/reference/password-policy-flags)
