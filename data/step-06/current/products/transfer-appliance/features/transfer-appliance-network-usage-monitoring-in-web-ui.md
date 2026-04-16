---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:17.789Z"
product_name: "Transfer Appliance"
product_slug: "transfer-appliance"
feature_name: "Transfer Appliance network usage monitoring in web UI"
feature_slug: "transfer-appliance-network-usage-monitoring-in-web-ui"
latest_feature_date: "2018-06-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer"
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide"
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/specifications"
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview"
keywords:
  - "transfer"
  - "appliance"
  - "network"
  - "usage"
  - "monitoring"
  - "in"
  - "web"
  - "ui"
---

# Transfer Appliance network usage monitoring in web UI

Product: Transfer Appliance
Coverage: MEDIUM

## Step 02 Summary

Transfer Appliance now supports monitoring network usage through its web-based user interface.

## Extended Definition

Transfer Appliance now supports monitoring network usage through its web-based user interface.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer](https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer)
- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide](https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide)
- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/specifications](https://docs.cloud.google.com/transfer-appliance/docs/4.0/specifications)
- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview](https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview)

## Supporting Pages

### "Enable or disable online transfer \_|\_ Transfer Appliance \_|\_ Google\

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer](https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Storage Transfer Appliance Guides Send feedback Enable or disable online transfer Stay organized with collections Save and categorize content based on your preferences.
- To enable online transfer mode, follow the instructions below: Verify your outbound connectivity from the appliance to the HTTPS endpoints listed below: https://gcr.io https://storage.googleapis.com https://oauth2.googleapis.com https://storagetransfer.googleapis.com https://pubsub.googleapis.com Run the following command using each of the HTTPS endpoints: ping URL If the command fails, it may indicate that DNS is misconfigured on the appliance.
- To set the appliance to online mode, run the following command: ta online The following sample response resembles the output that is returned: Starting containers for online transfer...
- Additionally, each invocation of this command with at least one of the the two flags triggers a new transfer operation, regardless of whether the appliance is offline or online.

### High-level overview \_|\_ Transfer Appliance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide](https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide)
- Source ID: `site-docs-root`
- Final score: 203
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Complete the project setup: Go to appliances page Find and select the appliance Click on the Open Setup Checklist button Complete the following steps: Enable API will enable the required APIs for the appliance Authorize the service accounts will create service accounts used for online transfer and authorize service accounts to the output bucket (only for online transfer) Create and Download the key of the appliance service account that is created during Authorize the service accounts Receive the appliance To receive an appliance, follow these steps: Track the appliance shipped to you.
- Before connecting the appliance to your network, validate that it hasn't been tampered with during shipping and submit the Transfer Appliance Attestation Passcode returned by the appliance in the appliance detail page of the Google Cloud console.
- Review the Transfer Appliance specifications and confirm the following for your facility: Power capabilities Cooling capabilities Physical space requirements Identify the servers and the folders that contain data to transfer.
- Prepare for the appliance To prepare for Transfer Appliance, do the following: When you're ready to transfer your data, apply for Transfer Appliance from the same Google Cloud project as your destination Cloud Storage bucket.

### Specifications \_|\_ Transfer Appliance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/specifications](https://docs.cloud.google.com/transfer-appliance/docs/4.0/specifications)
- Source ID: `site-docs-root`
- Final score: 199
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Package contents Brochures Connection instructions Packaging instructions Shipping label pouch Shipping tag and zip-tie Tamper-evident tag Cables Included cables Rackable TA40 and TA300 Cable photo Cable description NEMA 5-15p to C13 power cable (1.8 m / 5.91 ft) C14 to C13 power cable, for connections to the power distribution unit (PDU) (1.5 m / 4.92 ft) Cat 6 network cable (2.1 m / 6.89 ft) TA40 and TA300 V1: QSFP+ Twinax copper network cable TA300 V2: QSFP28 Twinax copper network cable TA40 and TA300 V1: QSFP+ to 4xSFP+ network cable (3 m / 9.84 ft) - only one (out of 4) SFP+ connector can be used, and link aggregation is not supported TA300 V2: not required TA40 and TA300 V1: not required TA300 V2: QSFP28 to SFP28 adapter TA40 and TA300 V1: not required TA300 V2: SFP28 to SFP28 network cable USB-to-serial adapter cable – use only if instructed by Transfer Appliance Team Pin-to-socket serial adapter Freestanding TA40 and TA300 Cable photo Cable description NEMA 5-15P to C13 power cable (1.8 m / 5.91 ft) C14 to C13 power cable, for connections to the power distribution unit (PDU) (1.5 m / 4.92 ft) Cat 6 network cable (2.1 m / 6.89 ft) QSFP+ twinaxial copper network cable (3 m / 9.84 ft) QSFP+ to 4xSFP+ network cable (3 m / 9.84 ft) - only one (out of 4) SFP+ connector can be used, and link aggregation is not supported USB-to-serial adapter cable – use only if instructed by Transfer Appliance Team Pin-to-socket serial adapter Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Power requirements 100-240 V, 50-60 Hz, 700 W Network connectivity Data ports: RJ45 (10 Gbps) QSFP+ (40 Gbps) - TA40 and TA300 V1 only QSFP28 (100 Gbps) - TA300 V2 only Configuration port: RJ45 (10 Gbps) Delivery time Overnight (US) End-to-end cycle time Approximately 3 weeks Security and encryption Customer-Managed Encryption Key (CMEK) Remote attestation with Secure Boot Unique PIN Transfer modes NFS share SMB share SSH or SCP transfer On-device interface Command-line interface Ease-of-use Automated ingest Transfer Appliance weights and capacities Rackable Specification TA40 TA300 V1 TA300 V2 Shipping dimensions 22 in x 14 in x 9 in / 560 mm x 360 mm x 230 mm 25.5 in x 24 in x 9.5 in / 647.7 mm x 609.6 mm x 241.3 mm 26.5 in x 24.5 in x 10.5 in / 673.1 mm x 622.3 mm x 266.7 mm Appliance dimensions (H x W x D) 1.7 in x 8.2 in x 14.8 in / 43 mm x 209 mm x 376 mm 3.48 in x 17 in x 21 in / 88.4 mm x 431.8 mm x 533.4 mm 3.46 in x 17 in x 20.03 in / 88.1 mm x 431.8 mm x 509 mm Shipping weight 30 lbs / 13.6 kg 50 lbs / 23 kg 55 lbs / 25 kg 64 lbs / 29 kg Appliance weight 7.9 lbs / 3.6 kg 31.7 lbs / 14.4 kg 39 lbs / 17.7 kg 33 lbs / 15 kg Usable capacity Maximum of 7 TB of encrypted data.
- This page lists specifications for Transfer Appliance models, including usable space capacities, dimensions, power requirements, and packing lists.
- Home Documentation Storage Transfer Appliance Guides Send feedback Specifications Stay organized with collections Save and categorize content based on your preferences.

### Transfer Appliance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview](https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview)
- Source ID: `site-docs-reference`
- Final score: 199
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Transfer Appliance helps ensure that you're connecting a trusted device to your equipment and network, and secures your data from end to end so that it is read by people you trust.
- Multiple network connectivity options : Quickly move data from your devices to Transfer Appliance, using either a 10Gbps RJ45 interface or a 40Gbps QSFP+ interface.
- Online transfers offer the following benefits: Quickly transfer data to Cloud Storage with low latency : Online transfers are an accelerated method of transferring your data to Cloud Storage, omitting the need to wait for your appliance to be shipped back to Google before the data is copied to your destination bucket.
- Performance To enable you move data quickly and efficiently, Transfer Appliance has the following performance features: All SSD drives : Increased reliability over hard disk drives to ensure your transfer is smooth.

