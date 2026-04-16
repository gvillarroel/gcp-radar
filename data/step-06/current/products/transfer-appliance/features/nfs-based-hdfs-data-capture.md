---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:17.786Z"
product_name: "Transfer Appliance"
product_slug: "transfer-appliance"
feature_name: "NFS-based HDFS data capture"
feature_slug: "nfs-based-hdfs-data-capture"
latest_feature_date: "2019-04-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/known-limitations"
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview"
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer"
  - "https://docs.cloud.google.com/transfer-appliance/docs"
keywords:
  - "nfs"
  - "based"
  - "hdfs"
  - "capture"
  - "transfer"
  - "appliance"
  - "now"
  - "documents"
---

# NFS-based HDFS data capture

Product: Transfer Appliance
Coverage: MEDIUM

## Step 02 Summary

Transfer Appliance now documents how to capture data from HDFS using NFS.

## Extended Definition

Transfer Appliance now documents how to capture data from HDFS using NFS.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/known-limitations](https://docs.cloud.google.com/transfer-appliance/docs/4.0/known-limitations)
- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview](https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview)
- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer](https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer)
- [https://docs.cloud.google.com/transfer-appliance/docs](https://docs.cloud.google.com/transfer-appliance/docs)

## Supporting Pages

### Known limitations \_|\_ Transfer Appliance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/known-limitations](https://docs.cloud.google.com/transfer-appliance/docs/4.0/known-limitations)
- Source ID: `site-docs-reference`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Storage Transfer Appliance Guides Send feedback Known limitations Stay organized with collections Save and categorize content based on your preferences.
- This page documents known limitations of Transfer Appliance.
- If you anticipate ordering many appliances for a large transfer and cannot follow the limitations listed below, you must perform an initial proof-of-concept transfer with a single Transfer Appliance and representative data to ensure performance is suitable before you order multiple appliances.
- Supported file metadata Transfer Appliance preserves symlinks, numeric MODE and the last modified time ( mtime ) from Transfer Appliance file system to copy into the corresponding Cloud Storage destination object.

### Transfer Appliance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview](https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview)
- Source ID: `site-docs-reference`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- Minimal software : For Linux and Apple macOS systems, copy directly to Transfer Appliance by mounting the exposed NFS share on the appliance to your workstation, using common software already installed on the system.
- Home Documentation Storage Transfer Appliance Overview Send feedback Transfer Appliance Stay organized with collections Save and categorize content based on your preferences.
- However, with Transfer Appliance, you can receive the appliance and capture 300 terabytes of data in under 25 days.
- Transfer Appliance is available in the following locations: Location TA40(Rackable) TA300(Rackable) TA40(Freestanding) TA300(Freestanding) United States European Union member states United Kingdom Singapore Japan Canada Australia India For a complete list of countries where Transfer Appliance is available, refer to the Order Appliance page on the Google Cloud console.

### "Enable or disable online transfer \_|\_ Transfer Appliance \_|\_ Google\

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer](https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Storage Transfer Appliance Guides Send feedback Enable or disable online transfer Stay organized with collections Save and categorize content based on your preferences.
- To enable online transfer mode, follow the instructions below: Verify your outbound connectivity from the appliance to the HTTPS endpoints listed below: https://gcr.io https://storage.googleapis.com https://oauth2.googleapis.com https://storagetransfer.googleapis.com https://pubsub.googleapis.com Run the following command using each of the HTTPS endpoints: ping URL If the command fails, it may indicate that DNS is misconfigured on the appliance.
- To set the appliance to online mode, run the following command: ta online The following sample response resembles the output that is returned: Starting containers for online transfer...
- Additionally, each invocation of this command with at least one of the the two flags triggers a new transfer operation, regardless of whether the appliance is offline or online.

### Transfer Appliance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/transfer-appliance/docs](https://docs.cloud.google.com/transfer-appliance/docs)
- Source ID: `site-docs-reference`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- Minimal software : For Linux and Apple macOS systems, copy directly to Transfer Appliance by mounting the exposed NFS share on the appliance to your workstation, using common software already installed on the system.
- Home Documentation Storage Transfer Appliance Overview Send feedback Transfer Appliance Stay organized with collections Save and categorize content based on your preferences.
- However, with Transfer Appliance, you can receive the appliance and capture 300 terabytes of data in under 25 days.
- Transfer Appliance is available in the following locations: Location TA40(Rackable) TA300(Rackable) TA40(Freestanding) TA300(Freestanding) United States European Union member states United Kingdom Singapore Japan Canada Australia India For a complete list of countries where Transfer Appliance is available, refer to the Order Appliance page on the Google Cloud console.

