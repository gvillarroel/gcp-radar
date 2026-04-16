---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:17.782Z"
product_name: "Transfer Appliance"
product_slug: "transfer-appliance"
feature_name: "Remote Wipe"
feature_slug: "remote-wipe"
latest_feature_date: "2022-09-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer"
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide"
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/security-and-encryption"
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview"
keywords:
  - "remote"
  - "wipe"
  - "transfer"
  - "appliance"
  - "includes"
  - "an"
  - "optional"
  - "step"
---

# Remote Wipe

Product: Transfer Appliance
Coverage: MEDIUM

## Step 02 Summary

Transfer Appliance includes an optional Remote Wipe step in the return process to erase data on the appliance before it is returned to Google.

## Extended Definition

Transfer Appliance includes an optional Remote Wipe step in the return process to erase data on the appliance before it is returned to Google.

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
- Final score: 250
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To enable online transfer mode, follow the instructions below: Verify your outbound connectivity from the appliance to the HTTPS endpoints listed below: https://gcr.io https://storage.googleapis.com https://oauth2.googleapis.com https://storagetransfer.googleapis.com https://pubsub.googleapis.com Run the following command using each of the HTTPS endpoints: ping URL If the command fails, it may indicate that DNS is misconfigured on the appliance.
- Optional: change the transfer destination bucket and the job object prefix. ta online --bucket= BUCKET --object prefix= OBJECT PREFIX Replace BUCKET with the destination bucket and OBJECT PREFIX with the object prefix you are updating to.
- Home Documentation Storage Transfer Appliance Guides Send feedback Enable or disable online transfer Stay organized with collections Save and categorize content based on your preferences.
- To set the appliance to online mode, run the following command: ta online The following sample response resembles the output that is returned: Starting containers for online transfer...

### High-level overview \_|\_ Transfer Appliance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide](https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide)
- Source ID: `site-docs-root`
- Final score: 245
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The maximum path length is 1024 bytes, which includes the optional object prefix specified when you provide Transfer Appliance Team with bucket configuration details.
- Optional: You may request a Transfer Appliance wipe certificate to verify that we've securely wiped all data after copying it to Cloud Storage.
- Complete the project setup: Go to appliances page Find and select the appliance Click on the Open Setup Checklist button Complete the following steps: Enable API will enable the required APIs for the appliance Authorize the service accounts will create service accounts used for online transfer and authorize service accounts to the output bucket (only for online transfer) Create and Download the key of the appliance service account that is created during Authorize the service accounts Receive the appliance To receive an appliance, follow these steps: Track the appliance shipped to you.
- If you're interested in a wipe certificate, contact Transfer Appliance Team.

### Security and encryption \_|\_ Transfer Appliance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/security-and-encryption](https://docs.cloud.google.com/transfer-appliance/docs/4.0/security-and-encryption)
- Source ID: `site-docs-reference`
- Final score: 219
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following are details of how we encrypt your data: During transit to Cloud Storage : Your data is encrypted on Transfer Appliance with dm-encrypt and partition-level encryption, with the AES-256 encryption algorithm.
- You can request a wipe certificate for proof that we've securely sanitized the appliance media within 4 weeks after your data is available within Cloud Storage or after you've returned the appliance after data export.
- If the appliance validation indicates that the appliance was tampered with at any point, we invalidate the entire transfer session and work with you to ship you a replacement appliance.
- Home Documentation Storage Transfer Appliance Guides Send feedback Security and encryption Stay organized with collections Save and categorize content based on your preferences.

### Transfer Appliance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview](https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview)
- Source ID: `site-docs-reference`
- Final score: 212
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Transfer Appliance is available in the following locations: Location TA40(Rackable) TA300(Rackable) TA40(Freestanding) TA300(Freestanding) United States European Union member states United Kingdom Singapore Japan Canada Australia India For a complete list of countries where Transfer Appliance is available, refer to the Order Appliance page on the Google Cloud console.
- Online transfers offer the following benefits: Quickly transfer data to Cloud Storage with low latency : Online transfers are an accelerated method of transferring your data to Cloud Storage, omitting the need to wait for your appliance to be shipped back to Google before the data is copied to your destination bucket.
- Minimal software : For Linux and Apple macOS systems, copy directly to Transfer Appliance by mounting the exposed NFS share on the appliance to your workstation, using common software already installed on the system.
- Performance To enable you move data quickly and efficiently, Transfer Appliance has the following performance features: All SSD drives : Increased reliability over hard disk drives to ensure your transfer is smooth.

