---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:17.782Z"
product_name: "Transfer Appliance"
product_slug: "transfer-appliance"
feature_name: "SMB file share transfer support"
feature_slug: "smb-file-share-transfer-support"
latest_feature_date: "2022-11-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer"
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide"
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview"
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/security-and-encryption"
keywords:
  - "smb"
  - "file"
  - "share"
  - "transfer"
  - "adds"
  - "so"
  - "users"
  - "can"
---

# SMB file share transfer support

Product: Transfer Appliance
Coverage: MEDIUM

## Step 02 Summary

Adds SMB file share support so users can transfer data using SMB with Transfer Appliance.

## Extended Definition

Adds SMB file share support so users can transfer data using SMB with Transfer Appliance.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer](https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer)
- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide](https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide)
- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview](https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview)
- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/security-and-encryption](https://docs.cloud.google.com/transfer-appliance/docs/4.0/security-and-encryption)

## Supporting Pages

### "Enable or disable online transfer \_|\_ Transfer Appliance \_|\_ Google\

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer](https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- Copy the file to the /tmp folder Linux Run the following command: scp PATH TO KEY FILE /key.json USERNAME @ IP ADDRESS :/tmp Replace the following: PATH TO KEY FILE : The path to the key file that you are copying.
- Apple macOS Run the following command: scp PATH TO KEY FILE /key.json USERNAME @ IP ADDRESS :/tmp Replace the following: PATH TO KEY FILE : The path to the key file that you are copying.
- You can transfer data in online mode.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

### High-level overview \_|\_ Transfer Appliance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide](https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide)
- Source ID: `site-docs-root`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- Before connecting the appliance to your network, validate that it hasn't been tampered with during shipping and submit the Transfer Appliance Attestation Passcode returned by the appliance in the appliance detail page of the Google Cloud console.
- Sometimes, a cloud-ingest directory that is used to coordinate the data uploaded from the appliance to your destination Transfer Appliance bucket.
- You can delete these directories once your data transfer is complete and the data is fully available in your Transfer Appliance bucket.
- We recommend that you don't delete your source data until you verify that it successfully transferred to your Cloud Storage bucket.

### Transfer Appliance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview](https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview)
- Source ID: `site-docs-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Transfer Appliance is available in the following locations: Location TA40(Rackable) TA300(Rackable) TA40(Freestanding) TA300(Freestanding) United States European Union member states United Kingdom Singapore Japan Canada Australia India For a complete list of countries where Transfer Appliance is available, refer to the Order Appliance page on the Google Cloud console.
- Minimal software : For Linux and Apple macOS systems, copy directly to Transfer Appliance by mounting the exposed NFS share on the appliance to your workstation, using common software already installed on the system.
- Data migration Offline data transfer is suited for moving large amounts of existing backup images and archives to Cloud Storage, which can be stored in ultra low-cost, highly-durable, and highly available storage classes such as Archive Storage .
- To ensure Transfer Appliance is trusted and safe to connect to your devices, Transfer Appliance offers the following features: Tamper resistant : Bad actors cannot easily open Transfer Appliance's physical case.

### Security and encryption \_|\_ Transfer Appliance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/security-and-encryption](https://docs.cloud.google.com/transfer-appliance/docs/4.0/security-and-encryption)
- Source ID: `site-docs-reference`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- Restrict access to data on your appliance To restrict access to the data stored on your appliance's NFS shares, you can apply an IP filter that allows specific hosts on your network to access the appliance.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- The following are the settings used to create Google-owned and managed keys: Region : Global Protection level: Software Purpose : Asymmetric decrypt Algorithm: 4096-bit RSA - OAEP Padding - SHA256 Digest Destroying the KEK before the session is completed results in complete data loss on the appliance.
- The following are details of how we encrypt your data: During transit to Cloud Storage : Your data is encrypted on Transfer Appliance with dm-encrypt and partition-level encryption, with the AES-256 encryption algorithm.

