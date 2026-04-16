---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:17.785Z"
product_name: "Transfer Appliance"
product_slug: "transfer-appliance"
feature_name: "Transfer Appliance Cloud Setup Application"
feature_slug: "transfer-appliance-cloud-setup-application"
latest_feature_date: "2021-06-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer"
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide"
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/security-and-encryption"
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview"
keywords:
  - "transfer"
  - "appliance"
  - "setup"
  - "application"
  - "the"
  - "is"
  - "tool"
  - "that"
---

# Transfer Appliance Cloud Setup Application

Product: Transfer Appliance
Coverage: MEDIUM

## Step 02 Summary

The Transfer Appliance Cloud Setup Application is a setup tool that collects user-provided configuration details and automatically configures Cloud permissions, a target Cloud Storage bucket, and a Cloud KMS key.

## Extended Definition

The Transfer Appliance Cloud Setup Application is a setup tool that collects user-provided configuration details and automatically configures Cloud permissions, a target Cloud Storage bucket, and a Cloud KMS key.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer](https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer)
- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide](https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide)
- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/security-and-encryption](https://docs.cloud.google.com/transfer-appliance/docs/4.0/security-and-encryption)
- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview](https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview)

## Supporting Pages

### "Enable or disable online transfer \_|\_ Transfer Appliance \_|\_ Google\

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer](https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer)
- Source ID: `site-docs-root`
- Final score: 266
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To enable online transfer mode, follow the instructions below: Verify your outbound connectivity from the appliance to the HTTPS endpoints listed below: https://gcr.io https://storage.googleapis.com https://oauth2.googleapis.com https://storagetransfer.googleapis.com https://pubsub.googleapis.com Run the following command using each of the HTTPS endpoints: ping URL If the command fails, it may indicate that DNS is misconfigured on the appliance.
- To set the appliance to online mode, run the following command: ta online The following sample response resembles the output that is returned: Starting containers for online transfer...
- Set to offline mode To specify offline mode, run the following command: ta offline The following sample response resembles the output that is returned: Putting the appliance in offline mode...
- Additionally, each invocation of this command with at least one of the the two flags triggers a new transfer operation, regardless of whether the appliance is offline or online.

### High-level overview \_|\_ Transfer Appliance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide](https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide)
- Source ID: `site-docs-root`
- Final score: 230
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Complete the project setup: Go to appliances page Find and select the appliance Click on the Open Setup Checklist button Complete the following steps: Enable API will enable the required APIs for the appliance Authorize the service accounts will create service accounts used for online transfer and authorize service accounts to the output bucket (only for online transfer) Create and Download the key of the appliance service account that is created during Authorize the service accounts Receive the appliance To receive an appliance, follow these steps: Track the appliance shipped to you.
- Sometimes, a cloud-ingest directory that is used to coordinate the data uploaded from the appliance to your destination Transfer Appliance bucket.
- Before you begin Before ordering, use the following checklist to ensure that your environment supports using Transfer Appliance.
- Before connecting the appliance to your network, validate that it hasn't been tampered with during shipping and submit the Transfer Appliance Attestation Passcode returned by the appliance in the appliance detail page of the Google Cloud console.

### Security and encryption \_|\_ Transfer Appliance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/security-and-encryption](https://docs.cloud.google.com/transfer-appliance/docs/4.0/security-and-encryption)
- Source ID: `site-docs-reference`
- Final score: 222
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This application validates the appliance identity and its state, to ensure that the appliance is in the same state as it was when we shipped it to you.
- The following are details of how we encrypt your data: During transit to Cloud Storage : Your data is encrypted on Transfer Appliance with dm-encrypt and partition-level encryption, with the AES-256 encryption algorithm.
- You can request a wipe certificate for proof that we've securely sanitized the appliance media within 4 weeks after your data is available within Cloud Storage or after you've returned the appliance after data export.
- If the appliance validation indicates that the appliance was tampered with at any point, we invalidate the entire transfer session and work with you to ship you a replacement appliance.

### Transfer Appliance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview](https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview)
- Source ID: `site-docs-reference`
- Final score: 212
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Transfer Appliance is available in the following locations: Location TA40(Rackable) TA300(Rackable) TA40(Freestanding) TA300(Freestanding) United States European Union member states United Kingdom Singapore Japan Canada Australia India For a complete list of countries where Transfer Appliance is available, refer to the Order Appliance page on the Google Cloud console.
- Online transfers offer the following benefits: Quickly transfer data to Cloud Storage with low latency : Online transfers are an accelerated method of transferring your data to Cloud Storage, omitting the need to wait for your appliance to be shipped back to Google before the data is copied to your destination bucket.
- Performance To enable you move data quickly and efficiently, Transfer Appliance has the following performance features: All SSD drives : Increased reliability over hard disk drives to ensure your transfer is smooth.
- To ensure Transfer Appliance is trusted and safe to connect to your devices, Transfer Appliance offers the following features: Tamper resistant : Bad actors cannot easily open Transfer Appliance's physical case.

