---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:17.790Z"
product_name: "Transfer Appliance"
product_slug: "transfer-appliance"
feature_name: "Transfer Appliance rehydration target path configuration"
feature_slug: "transfer-appliance-rehydration-target-path-configuration"
latest_feature_date: "2018-06-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer"
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide"
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview"
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/known-limitations"
keywords:
  - "transfer"
  - "appliance"
  - "rehydration"
  - "target"
  - "path"
  - "configuration"
  - "allows"
  - "the"
---

# Transfer Appliance rehydration target path configuration

Product: Transfer Appliance
Coverage: MEDIUM

## Step 02 Summary

Transfer Appliance allows the target path to be configured while rehydrating uploaded data.

## Extended Definition

Transfer Appliance allows the target path to be configured while rehydrating uploaded data.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer](https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer)
- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide](https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide)
- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview](https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview)
- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/known-limitations](https://docs.cloud.google.com/transfer-appliance/docs/4.0/known-limitations)

## Supporting Pages

### "Enable or disable online transfer \_|\_ Transfer Appliance \_|\_ Google\

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer](https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer)
- Source ID: `site-docs-root`
- Final score: 183
- Re-rank relevance: N/A

Evidence snippets:
- To enable online transfer mode, follow the instructions below: Verify your outbound connectivity from the appliance to the HTTPS endpoints listed below: https://gcr.io https://storage.googleapis.com https://oauth2.googleapis.com https://storagetransfer.googleapis.com https://pubsub.googleapis.com Run the following command using each of the HTTPS endpoints: ping URL If the command fails, it may indicate that DNS is misconfigured on the appliance.
- To set the appliance to online mode, run the following command: ta online The following sample response resembles the output that is returned: Starting containers for online transfer...
- Additionally, each invocation of this command with at least one of the the two flags triggers a new transfer operation, regardless of whether the appliance is offline or online.
- The Transfer Appliance has two modes: Offline transfer : Data is copied to the appliance until it is full.

### High-level overview \_|\_ Transfer Appliance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide](https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- The maximum path length is 1024 bytes, which includes the optional object prefix specified when you provide Transfer Appliance Team with bucket configuration details.
- Complete the project setup: Go to appliances page Find and select the appliance Click on the Open Setup Checklist button Complete the following steps: Enable API will enable the required APIs for the appliance Authorize the service accounts will create service accounts used for online transfer and authorize service accounts to the output bucket (only for online transfer) Create and Download the key of the appliance service account that is created during Authorize the service accounts Receive the appliance To receive an appliance, follow these steps: Track the appliance shipped to you.
- Before connecting the appliance to your network, validate that it hasn't been tampered with during shipping and submit the Transfer Appliance Attestation Passcode returned by the appliance in the appliance detail page of the Google Cloud console.
- Review the Transfer Appliance specifications and confirm the following for your facility: Power capabilities Cooling capabilities Physical space requirements Identify the servers and the folders that contain data to transfer.

### Transfer Appliance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview](https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview)
- Source ID: `site-docs-reference`
- Final score: 155
- Re-rank relevance: N/A

Evidence snippets:
- Transfer Appliance is available in the following locations: Location TA40(Rackable) TA300(Rackable) TA40(Freestanding) TA300(Freestanding) United States European Union member states United Kingdom Singapore Japan Canada Australia India For a complete list of countries where Transfer Appliance is available, refer to the Order Appliance page on the Google Cloud console.
- Online transfers offer the following benefits: Quickly transfer data to Cloud Storage with low latency : Online transfers are an accelerated method of transferring your data to Cloud Storage, omitting the need to wait for your appliance to be shipped back to Google before the data is copied to your destination bucket.
- Minimal software : For Linux and Apple macOS systems, copy directly to Transfer Appliance by mounting the exposed NFS share on the appliance to your workstation, using common software already installed on the system.
- Performance To enable you move data quickly and efficiently, Transfer Appliance has the following performance features: All SSD drives : Increased reliability over hard disk drives to ensure your transfer is smooth.

### Known limitations \_|\_ Transfer Appliance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/known-limitations](https://docs.cloud.google.com/transfer-appliance/docs/4.0/known-limitations)
- Source ID: `site-docs-reference`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- If you anticipate ordering many appliances for a large transfer and cannot follow the limitations listed below, you must perform an initial proof-of-concept transfer with a single Transfer Appliance and representative data to ensure performance is suitable before you order multiple appliances.
- Supported file metadata Transfer Appliance preserves symlinks, numeric MODE and the last modified time ( mtime ) from Transfer Appliance file system to copy into the corresponding Cloud Storage destination object.
- Object Versioning Using Transfer Appliance with a bucket where object versioning is enabled may result in multiple versions of the same object being created and storage costs associated with these versions.
- Transfer Appliance does not create empty directories in Cloud Storage when we transfer from the appliance to your Cloud Storage bucket, because objects don't reside within subdirectories within a bucket.

