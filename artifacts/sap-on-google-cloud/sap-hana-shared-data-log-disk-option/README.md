# SAP HANA shared data-log disk option

Product: SAP on Google Cloud
Feature slug: `sap-hana-shared-data-log-disk-option`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Terraform automation for SAP HANA can mount all SAP volumes on a single disk using the use_single_shared_data_log_disk argument.

## Lifecycle

- Latest feature date: 2023-03-13
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- constraint
- iam
- logging
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/sap/docs/architectures/sap-s4hana-on-gcp](https://docs.cloud.google.com/sap/docs/architectures/sap-s4hana-on-gcp)
- [https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles](https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles)
- [https://docs.cloud.google.com/sap/docs/sap-hana-ha-dm-deployment](https://docs.cloud.google.com/sap/docs/sap-hana-ha-dm-deployment)
