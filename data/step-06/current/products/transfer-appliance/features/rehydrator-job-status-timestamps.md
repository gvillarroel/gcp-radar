---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:17.787Z"
product_name: "Transfer Appliance"
product_slug: "transfer-appliance"
feature_name: "Rehydrator job status timestamps"
feature_slug: "rehydrator-job-status-timestamps"
latest_feature_date: "2018-06-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/known-limitations"
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide"
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/access-control"
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/support"
keywords:
  - "rehydrator"
  - "job"
  - "status"
  - "timestamps"
  - "now"
  - "includes"
  - "both"
  - "start"
---

# Rehydrator job status timestamps

Product: Transfer Appliance
Coverage: MEDIUM

## Step 02 Summary

Rehydrator job status now includes both start and end times for rehydration jobs.

## Extended Definition

Rehydrator job status now includes both start and end times for rehydration jobs.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/known-limitations](https://docs.cloud.google.com/transfer-appliance/docs/4.0/known-limitations)
- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide](https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide)
- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/access-control](https://docs.cloud.google.com/transfer-appliance/docs/4.0/access-control)
- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/support](https://docs.cloud.google.com/transfer-appliance/docs/4.0/support)

## Supporting Pages

### Known limitations \_|\_ Transfer Appliance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/known-limitations](https://docs.cloud.google.com/transfer-appliance/docs/4.0/known-limitations)
- Source ID: `site-docs-reference`
- Final score: 42
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Storage Transfer Appliance Guides Send feedback Known limitations Stay organized with collections Save and categorize content based on your preferences.
- This page documents known limitations of Transfer Appliance.

### High-level overview \_|\_ Transfer Appliance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide](https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide)
- Source ID: `site-docs-root`
- Final score: 39
- Re-rank relevance: N/A

Evidence snippets:
- The maximum path length is 1024 bytes, which includes the optional object prefix specified when you provide Transfer Appliance Team with bucket configuration details.
- We'll start transferring data from the appliance to the destination Cloud Storage bucket indicated in the appliance order form .
- It includes the expected interactions between you and Google.
- Unix-style hidden files start with a . character.

### Access control with IAM \_|\_ Transfer Appliance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/access-control](https://docs.cloud.google.com/transfer-appliance/docs/4.0/access-control)
- Source ID: `site-iam-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Permissions The following resources exist for Transfer Appliance: appliances orders savedAddresses operations locations credentials Appliance permissions The following table describes permissions for Transfer Appliance appliances resources: Permission Description transferappliance.appliances.list Permission to view a list of appliances and information related to them, including the ID, order status, appliance type and model, firmware version, activation status, and connection status. transferappliance.appliances.get Permission to view detailed information about any appliance.
- In addition to the information allowed by transferappliance.appliances.list, this permission allows access to the appliance's region, transfer job IDs, Cloud Storage destination, encryption type, key resource name, online functionality setting, and detailed order-related information such as tracking number. transferappliance.appliances.create Permission to create an appliance resource.

### Support \_|\_ Transfer Appliance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/support](https://docs.cloud.google.com/transfer-appliance/docs/4.0/support)
- Source ID: `site-docs-root`
- Final score: 28
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

