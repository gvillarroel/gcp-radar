# Google Cloud's Agent for SAP OS image packaging

Product: SAP on Google Cloud
Feature slug: `google-cloud-s-agent-for-sap-os-image-packaging`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Google Cloud's Agent for SAP is bundled with all RHEL for SAP images and with SLES 15 SP4 for SAP and later images.

## Lifecycle

- Latest feature date: 2023-07-14
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sap/docs/sap-hana-ha-dm-deployment](https://docs.cloud.google.com/sap/docs/sap-hana-ha-dm-deployment), [https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles](https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles), [https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-ase-or-db2](https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-ase-or-db2))
- allow (evidence: [https://docs.cloud.google.com/sap/docs/sap-hana-ha-dm-deployment](https://docs.cloud.google.com/sap/docs/sap-hana-ha-dm-deployment), [https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles](https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles), [https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-ase-or-db2](https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-ase-or-db2))
- auth (evidence: [https://docs.cloud.google.com/sap/docs/sap-hana-ha-dm-deployment](https://docs.cloud.google.com/sap/docs/sap-hana-ha-dm-deployment), [https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles](https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles), [https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-ase-or-db2](https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-ase-or-db2))
- constraint (evidence: [https://docs.cloud.google.com/sap/docs/sap-hana-ha-dm-deployment](https://docs.cloud.google.com/sap/docs/sap-hana-ha-dm-deployment), [https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles](https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles), [https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-ase-or-db2](https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-ase-or-db2))
- firewall (evidence: [https://docs.cloud.google.com/sap/docs/sap-hana-ha-dm-deployment](https://docs.cloud.google.com/sap/docs/sap-hana-ha-dm-deployment), [https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles](https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles), [https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-ase-or-db2](https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-ase-or-db2))
- iam (evidence: [https://docs.cloud.google.com/sap/docs/sap-hana-ha-dm-deployment](https://docs.cloud.google.com/sap/docs/sap-hana-ha-dm-deployment), [https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles](https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles), [https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-ase-or-db2](https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-ase-or-db2))
- key (evidence: [https://docs.cloud.google.com/sap/docs/sap-hana-ha-dm-deployment](https://docs.cloud.google.com/sap/docs/sap-hana-ha-dm-deployment), [https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles](https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles), [https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-ase-or-db2](https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-ase-or-db2))
- logging (evidence: [https://docs.cloud.google.com/sap/docs/sap-hana-ha-dm-deployment](https://docs.cloud.google.com/sap/docs/sap-hana-ha-dm-deployment), [https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles](https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles), [https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-ase-or-db2](https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-ase-or-db2))
- role (evidence: [https://docs.cloud.google.com/sap/docs/sap-hana-ha-dm-deployment](https://docs.cloud.google.com/sap/docs/sap-hana-ha-dm-deployment), [https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles](https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles), [https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-ase-or-db2](https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-ase-or-db2))
- token (evidence: [https://docs.cloud.google.com/sap/docs/sap-hana-ha-dm-deployment](https://docs.cloud.google.com/sap/docs/sap-hana-ha-dm-deployment), [https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles](https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles), [https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-ase-or-db2](https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-ase-or-db2))

## Official Evidence

- [https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-ase-or-db2](https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-ase-or-db2)
- [https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles](https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles)
- [https://docs.cloud.google.com/sap/docs/sap-hana-ha-dm-deployment](https://docs.cloud.google.com/sap/docs/sap-hana-ha-dm-deployment)
