---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:12:10.634Z"
product_name: "SAP on Google Cloud"
product_slug: "sap-on-google-cloud"
feature_name: "SAP HANA Fast Restart"
feature_slug: "sap-hana-fast-restart"
latest_feature_date: "2023-09-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-hana"
  - "https://docs.cloud.google.com/sap/docs/architectures/sap-s4hana-on-gcp"
  - "https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles"
keywords:
  - "sap"
  - "hana"
  - "fast"
  - "restart"
  - "enabled"
  - "when"
  - "deploying"
  - "terraform"
---

# SAP HANA Fast Restart

Product: SAP on Google Cloud
Coverage: MEDIUM

## Step 02 Summary

SAP HANA Fast Restart is enabled when deploying SAP HANA on Google Cloud with supported Terraform modules.

## Extended Definition

SAP HANA Fast Restart is enabled when deploying SAP HANA on Google Cloud with supported Terraform modules.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-hana](https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-hana)
- [https://docs.cloud.google.com/sap/docs/architectures/sap-s4hana-on-gcp](https://docs.cloud.google.com/sap/docs/architectures/sap-s4hana-on-gcp)
- [https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles](https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles)

## Supporting Pages

### "HA scale-up cluster configuration guide for SAP HANA on SLES \_|\_ SAP on\

- URL: [https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles](https://docs.cloud.google.com/sap/docs/sap-hana-ha-config-sles)
- Source ID: `site-docs-reference-required-2`
- Final score: 257
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: If you deploy SAP HANA using Google Cloud's Terraform module sap hana or sap hana ha , version 202309280828 or later, or the Terraform module manual sap hana scaleup ha , then fast restart is automatically enabled.
- When you resize your machine to decrease the number of NUMA nodes, make sure that SAP HANA is stopped during the execution of the automation script that Google Cloud provides to enable SAP HANA Fast Restart.
- After SAP HANA Fast Restart is enabled, make sure to change your password.
- For the initial deployment of your SAP HANA system or resizing the machine to increase the number of NUMA nodes, make sure that SAP HANA is running during the execution of automation script that Google Cloud provides to enable SAP HANA Fast Restart.

### "Reference architecture: SAP Business Suite on SAP HANA on Google Cloud \_\

- URL: [https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-hana](https://docs.cloud.google.com/sap/docs/architectures/sap-business-suite-on-hana)
- Source ID: `site-docs-root`
- Final score: 257
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This option is automatically enabled when you deploy SAP HANA using the following Terraform modules provided by Google Cloud: module sap hana or sap hana ha , version 202309280828 or later.
- The following operating systems are certified by SAP for use with SAP NetWeaver on Google Cloud: Red Hat Enterprise Linux (RHEL) SUSE Linux Enterprise Server (SLES) You can find more information about specific OS versions and their compatibility with both SAP Business Suite and SAP HANA in the following guides: OS support for SAP NetWeaver on Google Cloud OS support for SAP HANA on Google Cloud SAP HANA Fast Restart option For SAP HANA 2.0 SP04 and later, Google strongly recommends the SAP HANA Fast Restart option .
- Supported machine types for SAP Business Suite instances Google Cloud offers Compute Engine VM instance types that are certified by SAP to match sizing requirements when you're deploying SAP Business Suite with SAP HANA.
- Additionally, on VMs in the M2 and M3 families of Compute Engine memory-optimized machine types, SAP HANA Fast Restart improves recovery time if uncorrectable errors occur in memory.

### "Reference architecture: SAP S/4HANA on Google Cloud \_|\_ SAP on Google\

- URL: [https://docs.cloud.google.com/sap/docs/architectures/sap-s4hana-on-gcp](https://docs.cloud.google.com/sap/docs/architectures/sap-s4hana-on-gcp)
- Source ID: `site-docs-reference`
- Final score: 257
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This option is automatically enabled when you deploy SAP HANA using the following Terraform modules provided by Google Cloud: module sap hana or sap hana ha , version 202309280828 or later.
- The following operating systems are certified by SAP for use with SAP NetWeaver on Google Cloud: Red Hat Enterprise Linux (RHEL) SUSE Linux Enterprise Server (SLES) You can find more information about specific OS versions and their compatibility with both SAP S/4HANA and SAP HANA in the following guides: OS support for SAP NetWeaver on Google Cloud OS support for SAP HANA on Google Cloud SAP HANA Fast Restart option For SAP HANA 2.0 SP04 and later, Google strongly recommends the SAP HANA Fast Restart option .
- Supported machine types for SAP S/4HANA Google Cloud offers Compute Engine VM instance types that are certified by SAP to match sizing requirements when you're deploying SAP S/4HANA.
- Additionally, on VMs in the M2 and M3 families of Compute Engine memory-optimized machine types, SAP HANA Fast Restart improves recovery time if uncorrectable errors occur in memory.

