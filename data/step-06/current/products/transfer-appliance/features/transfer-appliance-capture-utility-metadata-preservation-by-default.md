---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:17.788Z"
product_name: "Transfer Appliance"
product_slug: "transfer-appliance"
feature_name: "Transfer Appliance Capture Utility metadata preservation by default"
feature_slug: "transfer-appliance-capture-utility-metadata-preservation-by-default"
latest_feature_date: "2018-06-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer"
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview"
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide"
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/security-and-encryption"
keywords:
  - "transfer"
  - "appliance"
  - "capture"
  - "utility"
  - "metadata"
  - "preservation"
  - "by"
  - "default"
---

# Transfer Appliance Capture Utility metadata preservation by default

Product: Transfer Appliance
Coverage: MEDIUM

## Step 02 Summary

The Transfer Appliance Capture Utility now preserves file metadata by default during capture operations.

## Extended Definition

The Transfer Appliance Capture Utility now preserves file metadata by default during capture operations.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer](https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer)
- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview](https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview)
- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide](https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide)
- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/security-and-encryption](https://docs.cloud.google.com/transfer-appliance/docs/4.0/security-and-encryption)

## Supporting Pages

### "Enable or disable online transfer \_|\_ Transfer Appliance \_|\_ Google\

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer](https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer)
- Source ID: `site-docs-root`
- Final score: 159
- Re-rank relevance: N/A

Evidence snippets:
- Port number : 22 Username : The appliance username provided by the Transfer Appliance Team.
- When prompted, enter the appliance password provided by the Transfer Appliance Team.
- When prompted, enter the appliance password provided by the Transfer Appliance Team.
- Password : The appliance password provided by the Transfer Appliance Team.

### Transfer Appliance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview](https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview)
- Source ID: `site-docs-reference`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- However, with Transfer Appliance, you can receive the appliance and capture 300 terabytes of data in under 25 days.
- Minimal software : For Linux and Apple macOS systems, copy directly to Transfer Appliance by mounting the exposed NFS share on the appliance to your workstation, using common software already installed on the system.
- Transfer Appliance helps ensure that you're connecting a trusted device to your equipment and network, and secures your data from end to end so that it is read by people you trust.
- Online capabilities Enabling online mode allows you to perform online transfers by streaming data directly to your Cloud Storage bucket after copying it to your appliance.

### High-level overview \_|\_ Transfer Appliance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide](https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- Before connecting the appliance to your network, validate that it hasn't been tampered with during shipping and submit the Transfer Appliance Attestation Passcode returned by the appliance in the appliance detail page of the Google Cloud console.
- Enter the passcode returned by the ta finalize command in the form included in the email titled Google Transfer Appliance Return Instructions sent by the Transfer Appliance Team.
- The maximum path length is 1024 bytes, which includes the optional object prefix specified when you provide Transfer Appliance Team with bucket configuration details.
- Complete the project setup: Go to appliances page Find and select the appliance Click on the Open Setup Checklist button Complete the following steps: Enable API will enable the required APIs for the appliance Authorize the service accounts will create service accounts used for online transfer and authorize service accounts to the output bucket (only for online transfer) Create and Download the key of the appliance service account that is created during Authorize the service accounts Receive the appliance To receive an appliance, follow these steps: Track the appliance shipped to you.

### Security and encryption \_|\_ Transfer Appliance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/security-and-encryption](https://docs.cloud.google.com/transfer-appliance/docs/4.0/security-and-encryption)
- Source ID: `site-docs-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- The following are details of how we encrypt your data: During transit to Cloud Storage : Your data is encrypted on Transfer Appliance with dm-encrypt and partition-level encryption, with the AES-256 encryption algorithm.
- Appliance media sanitization After uploading your data or receiving the appliance for data export, we sanitize the drive media in the appliance you returned by applying NIST 800-88 standards for purging information.
- If the appliance validation indicates that the appliance was tampered with at any point, we invalidate the entire transfer session and work with you to ship you a replacement appliance.
- Home Documentation Storage Transfer Appliance Guides Send feedback Security and encryption Stay organized with collections Save and categorize content based on your preferences.

