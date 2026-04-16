---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:17.780Z"
product_name: "Transfer Appliance"
product_slug: "transfer-appliance"
feature_name: "Transfer Appliance ta mount/ta unmount CLI commands"
feature_slug: "transfer-appliance-ta-mount-ta-unmount-cli-commands"
latest_feature_date: "2023-10-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview"
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/known-limitations"
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer"
  - "https://docs.cloud.google.com/transfer-appliance/docs"
keywords:
  - "transfer"
  - "appliance"
  - "ta"
  - "mount"
  - "unmount"
  - "cli"
  - "commands"
  - "introduced"
---

# Transfer Appliance ta mount/ta unmount CLI commands

Product: Transfer Appliance
Coverage: MEDIUM

## Step 02 Summary

Transfer Appliance introduced the `ta mount` and `ta unmount` CLI commands so users can mount and unmount their own NFS or CIFS shares on the appliance.

## Extended Definition

Transfer Appliance introduced the `ta mount` and `ta unmount` CLI commands so users can mount and unmount their own NFS or CIFS shares on the appliance.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview](https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview)
- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/known-limitations](https://docs.cloud.google.com/transfer-appliance/docs/4.0/known-limitations)
- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer](https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer)
- [https://docs.cloud.google.com/transfer-appliance/docs](https://docs.cloud.google.com/transfer-appliance/docs)

## Supporting Pages

### Transfer Appliance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview](https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview)
- Source ID: `site-docs-reference`
- Final score: 196
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Minimal software : For Linux and Apple macOS systems, copy directly to Transfer Appliance by mounting the exposed NFS share on the appliance to your workstation, using common software already installed on the system.
- Transfer Appliance is available in the following locations: Location TA40(Rackable) TA300(Rackable) TA40(Freestanding) TA300(Freestanding) United States European Union member states United Kingdom Singapore Japan Canada Australia India For a complete list of countries where Transfer Appliance is available, refer to the Order Appliance page on the Google Cloud console.
- Online transfers offer the following benefits: Quickly transfer data to Cloud Storage with low latency : Online transfers are an accelerated method of transferring your data to Cloud Storage, omitting the need to wait for your appliance to be shipped back to Google before the data is copied to your destination bucket.
- Data migration Offline data transfer is suited for moving large amounts of existing backup images and archives to Cloud Storage, which can be stored in ultra low-cost, highly-durable, and highly available storage classes such as Archive Storage .

### Known limitations \_|\_ Transfer Appliance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/known-limitations](https://docs.cloud.google.com/transfer-appliance/docs/4.0/known-limitations)
- Source ID: `site-docs-reference`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- If you anticipate ordering many appliances for a large transfer and cannot follow the limitations listed below, you must perform an initial proof-of-concept transfer with a single Transfer Appliance and representative data to ensure performance is suitable before you order multiple appliances.
- Supported file metadata Transfer Appliance preserves symlinks, numeric MODE and the last modified time ( mtime ) from Transfer Appliance file system to copy into the corresponding Cloud Storage destination object.
- Home Documentation Storage Transfer Appliance Guides Send feedback Known limitations Stay organized with collections Save and categorize content based on your preferences.
- We strongly recommend that you replace newlines in your file names before copying data to Transfer Appliance.

### "Enable or disable online transfer \_|\_ Transfer Appliance \_|\_ Google\

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer](https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer)
- Source ID: `site-docs-root`
- Final score: 177
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Storage Transfer Appliance Guides Send feedback Enable or disable online transfer Stay organized with collections Save and categorize content based on your preferences.
- To set the appliance to online mode, run the following command: ta online The following sample response resembles the output that is returned: Starting containers for online transfer...
- Online transfer compresses and encrypts the data in transit and accelerates data transfer compared to the gcloud CLI and other command-line tools.
- The Transfer Appliance has two modes: Offline transfer : Data is copied to the appliance until it is full.

### Transfer Appliance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/transfer-appliance/docs](https://docs.cloud.google.com/transfer-appliance/docs)
- Source ID: `site-docs-reference`
- Final score: 176
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Minimal software : For Linux and Apple macOS systems, copy directly to Transfer Appliance by mounting the exposed NFS share on the appliance to your workstation, using common software already installed on the system.
- Transfer Appliance is available in the following locations: Location TA40(Rackable) TA300(Rackable) TA40(Freestanding) TA300(Freestanding) United States European Union member states United Kingdom Singapore Japan Canada Australia India For a complete list of countries where Transfer Appliance is available, refer to the Order Appliance page on the Google Cloud console.
- Online transfers offer the following benefits: Quickly transfer data to Cloud Storage with low latency : Online transfers are an accelerated method of transferring your data to Cloud Storage, omitting the need to wait for your appliance to be shipped back to Google before the data is copied to your destination bucket.
- Data migration Offline data transfer is suited for moving large amounts of existing backup images and archives to Cloud Storage, which can be stored in ultra low-cost, highly-durable, and highly available storage classes such as Archive Storage .

