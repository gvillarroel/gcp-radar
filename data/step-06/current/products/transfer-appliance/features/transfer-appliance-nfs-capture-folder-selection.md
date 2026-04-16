---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:17.790Z"
product_name: "Transfer Appliance"
product_slug: "transfer-appliance"
feature_name: "Transfer Appliance NFS capture folder selection"
feature_slug: "transfer-appliance-nfs-capture-folder-selection"
latest_feature_date: "2018-06-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/known-limitations"
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide"
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview"
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer"
keywords:
  - "transfer"
  - "appliance"
  - "nfs"
  - "capture"
  - "folder"
  - "selection"
  - "now"
  - "supports"
---

# Transfer Appliance NFS capture folder selection

Product: Transfer Appliance
Coverage: MEDIUM

## Step 02 Summary

Transfer Appliance now supports navigating to and selecting specific folders during an NFS capture.

## Extended Definition

Transfer Appliance now supports navigating to and selecting specific folders during an NFS capture.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/known-limitations](https://docs.cloud.google.com/transfer-appliance/docs/4.0/known-limitations)
- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide](https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide)
- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview](https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview)
- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer](https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer)

## Supporting Pages

### Known limitations \_|\_ Transfer Appliance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/known-limitations](https://docs.cloud.google.com/transfer-appliance/docs/4.0/known-limitations)
- Source ID: `site-docs-reference`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Storage Transfer Appliance Guides Send feedback Known limitations Stay organized with collections Save and categorize content based on your preferences.
- Supported file types Transfer Appliance supports transferring regular files.
- This page documents known limitations of Transfer Appliance.
- If you anticipate ordering many appliances for a large transfer and cannot follow the limitations listed below, you must perform an initial proof-of-concept transfer with a single Transfer Appliance and representative data to ensure performance is suitable before you order multiple appliances.

### High-level overview \_|\_ Transfer Appliance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide](https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- Review the Transfer Appliance specifications and confirm the following for your facility: Power capabilities Cooling capabilities Physical space requirements Identify the servers and the folders that contain data to transfer.
- Before you begin Before ordering, use the following checklist to ensure that your environment supports using Transfer Appliance.
- Complete the project setup: Go to appliances page Find and select the appliance Click on the Open Setup Checklist button Complete the following steps: Enable API will enable the required APIs for the appliance Authorize the service accounts will create service accounts used for online transfer and authorize service accounts to the output bucket (only for online transfer) Create and Download the key of the appliance service account that is created during Authorize the service accounts Receive the appliance To receive an appliance, follow these steps: Track the appliance shipped to you.
- Before connecting the appliance to your network, validate that it hasn't been tampered with during shipping and submit the Transfer Appliance Attestation Passcode returned by the appliance in the appliance detail page of the Google Cloud console.

### Transfer Appliance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview](https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview)
- Source ID: `site-docs-reference`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Minimal software : For Linux and Apple macOS systems, copy directly to Transfer Appliance by mounting the exposed NFS share on the appliance to your workstation, using common software already installed on the system.
- However, with Transfer Appliance, you can receive the appliance and capture 300 terabytes of data in under 25 days.
- Transfer Appliance is available in the following locations: Location TA40(Rackable) TA300(Rackable) TA40(Freestanding) TA300(Freestanding) United States European Union member states United Kingdom Singapore Japan Canada Australia India For a complete list of countries where Transfer Appliance is available, refer to the Order Appliance page on the Google Cloud console.
- Online transfers offer the following benefits: Quickly transfer data to Cloud Storage with low latency : Online transfers are an accelerated method of transferring your data to Cloud Storage, omitting the need to wait for your appliance to be shipped back to Google before the data is copied to your destination bucket.

### "Enable or disable online transfer \_|\_ Transfer Appliance \_|\_ Google\

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer](https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer)
- Source ID: `site-docs-root`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- To enable online transfer mode, follow the instructions below: Verify your outbound connectivity from the appliance to the HTTPS endpoints listed below: https://gcr.io https://storage.googleapis.com https://oauth2.googleapis.com https://storagetransfer.googleapis.com https://pubsub.googleapis.com Run the following command using each of the HTTPS endpoints: ping URL If the command fails, it may indicate that DNS is misconfigured on the appliance.
- Copy the service key downloaded in Download Appliance Service Account Key to the appliance's tmp folder, by doing the following: Windows Using the SCP tool, connect to the appliance using the following settings: File protocol : SFTP Host name : The IP address for the appliance.
- Home Documentation Storage Transfer Appliance Guides Send feedback Enable or disable online transfer Stay organized with collections Save and categorize content based on your preferences.
- To set the appliance to online mode, run the following command: ta online The following sample response resembles the output that is returned: Starting containers for online transfer...

