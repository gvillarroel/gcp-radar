# Transfer Appliance Rehydrator storage class optimization

Product: Transfer Appliance
Feature slug: `transfer-appliance-rehydrator-storage-class-optimization`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The Rehydrator now uses regional or multi-regional storage locations when building component objects for rehydrating files larger than 100 GB to avoid early deletion charges.

## Lifecycle

- Latest feature date: 2018-06-26
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/known-limitations](https://docs.cloud.google.com/transfer-appliance/docs/4.0/known-limitations), [https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer](https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer), [https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview](https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview), [https://docs.cloud.google.com/transfer-appliance/docs/4.0/concepts](https://docs.cloud.google.com/transfer-appliance/docs/4.0/concepts))
- auth (evidence: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/known-limitations](https://docs.cloud.google.com/transfer-appliance/docs/4.0/known-limitations), [https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer](https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer), [https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview](https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview), [https://docs.cloud.google.com/transfer-appliance/docs/4.0/concepts](https://docs.cloud.google.com/transfer-appliance/docs/4.0/concepts))
- encrypt (evidence: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/known-limitations](https://docs.cloud.google.com/transfer-appliance/docs/4.0/known-limitations), [https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer](https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer), [https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview](https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview), [https://docs.cloud.google.com/transfer-appliance/docs/4.0/concepts](https://docs.cloud.google.com/transfer-appliance/docs/4.0/concepts))
- iam (evidence: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/known-limitations](https://docs.cloud.google.com/transfer-appliance/docs/4.0/known-limitations), [https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer](https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer), [https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview](https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview), [https://docs.cloud.google.com/transfer-appliance/docs/4.0/concepts](https://docs.cloud.google.com/transfer-appliance/docs/4.0/concepts))
- security (evidence: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/known-limitations](https://docs.cloud.google.com/transfer-appliance/docs/4.0/known-limitations), [https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer](https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer), [https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview](https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview), [https://docs.cloud.google.com/transfer-appliance/docs/4.0/concepts](https://docs.cloud.google.com/transfer-appliance/docs/4.0/concepts))

## Official Evidence

- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/concepts](https://docs.cloud.google.com/transfer-appliance/docs/4.0/concepts)
- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/known-limitations](https://docs.cloud.google.com/transfer-appliance/docs/4.0/known-limitations)
- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer](https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer)
- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview](https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview)
