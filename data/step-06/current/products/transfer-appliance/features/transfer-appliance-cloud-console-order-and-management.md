---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:17.785Z"
product_name: "Transfer Appliance"
product_slug: "transfer-appliance"
feature_name: "Transfer Appliance Cloud console order and management"
feature_slug: "transfer-appliance-cloud-console-order-and-management"
latest_feature_date: "2022-06-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/security-and-encryption"
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide"
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/access-control"
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview"
keywords:
  - "transfer"
  - "appliance"
  - "console"
  - "order"
  - "and"
  - "management"
  - "can"
  - "be"
---

# Transfer Appliance Cloud console order and management

Product: Transfer Appliance
Coverage: MEDIUM

## Step 02 Summary

Transfer Appliance can be ordered, viewed, tracked, and managed directly from the Google Cloud console, including order and appliance management.

## Extended Definition

Transfer Appliance can be ordered, viewed, tracked, and managed directly from the Google Cloud console, including order and appliance management.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/security-and-encryption](https://docs.cloud.google.com/transfer-appliance/docs/4.0/security-and-encryption)
- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide](https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide)
- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/access-control](https://docs.cloud.google.com/transfer-appliance/docs/4.0/access-control)
- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview](https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview)

## Supporting Pages

### Security and encryption \_|\_ Transfer Appliance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/security-and-encryption](https://docs.cloud.google.com/transfer-appliance/docs/4.0/security-and-encryption)
- Source ID: `site-docs-reference`
- Final score: 254
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The KEK is generated as a Cloud Key Management Service (Cloud KMS) asymmetric key in Google Cloud, and we download the KEK public key to the appliance before we ship it to you.
- This page describes how Transfer Appliance secures and encrypts your data.
- The following are the settings used to create Google-owned and managed keys: Region : Global Protection level: Software Purpose : Asymmetric decrypt Algorithm: 4096-bit RSA - OAEP Padding - SHA256 Digest Destroying the KEK before the session is completed results in complete data loss on the appliance.
- Upload data to Cloud Storage When we receive your appliance in one of our secured data centers, we upload your encrypted data into your VPC Service Controls perimeter before applying the KEK to decrypt the DEK and your data.

### High-level overview \_|\_ Transfer Appliance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide](https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide)
- Source ID: `site-docs-root`
- Final score: 246
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before connecting the appliance to your network, validate that it hasn't been tampered with during shipping and submit the Transfer Appliance Attestation Passcode returned by the appliance in the appliance detail page of the Google Cloud console.
- This page describes the high-level procedure for ordering, installing, and returning Transfer Appliance.
- You can delete these directories once your data transfer is complete and the data is fully available in your Transfer Appliance bucket.
- Before you begin Before ordering, use the following checklist to ensure that your environment supports using Transfer Appliance.

### Access control with IAM \_|\_ Transfer Appliance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/access-control](https://docs.cloud.google.com/transfer-appliance/docs/4.0/access-control)
- Source ID: `site-iam-reference`
- Final score: 245
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Role details The following table describes in detail the predefined roles for Transfer Appliance: Role Description Included Permissions Transfer Appliance Admin ( roles/transferappliance. admin ) Provides all Transfer Appliance permissions, including the ability to order new appliances and update existing appliance metadata. transferappliance.appliances. list get create update delete transferappliance.orders. list get create update delete transferappliance.savedAddresses. list get create update delete transferappliance.operations. list get cancel delete transferappliance.locations. list get transferappliance.projects. list get transferappliance.credentials. get Transfer Appliance Viewer ( roles/transferappliance. viewer ) Grants the required permissions for read-only access to all Transfer Appliance resources. transferappliance.appliances. list get transferappliance.orders. list get transferappliance.savedAddresses. list get transferappliance.operations. list get transferappliance.locations. list get resourcemanager.projects. list get Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Permissions The following resources exist for Transfer Appliance: appliances orders savedAddresses operations locations credentials Appliance permissions The following table describes permissions for Transfer Appliance appliances resources: Permission Description transferappliance.appliances.list Permission to view a list of appliances and information related to them, including the ID, order status, appliance type and model, firmware version, activation status, and connection status. transferappliance.appliances.get Permission to view detailed information about any appliance.
- In addition to the information allowed by transferappliance.appliances.list, this permission allows access to the appliance's region, transfer job IDs, Cloud Storage destination, encryption type, key resource name, online functionality setting, and detailed order-related information such as tracking number. transferappliance.appliances.create Permission to create an appliance resource.
- All of the permissions included in those roles are required by Transfer Appliance and Google Cloud console in order to properly render pages and retrieve or update resources.

### Transfer Appliance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview](https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview)
- Source ID: `site-docs-reference`
- Final score: 237
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Transfer Appliance is available in the following locations: Location TA40(Rackable) TA300(Rackable) TA40(Freestanding) TA300(Freestanding) United States European Union member states United Kingdom Singapore Japan Canada Australia India For a complete list of countries where Transfer Appliance is available, refer to the Order Appliance page on the Google Cloud console.
- Data migration Offline data transfer is suited for moving large amounts of existing backup images and archives to Cloud Storage, which can be stored in ultra low-cost, highly-durable, and highly available storage classes such as Archive Storage .
- To ensure Transfer Appliance is trusted and safe to connect to your devices, Transfer Appliance offers the following features: Tamper resistant : Bad actors cannot easily open Transfer Appliance's physical case.
- Hardware attestation : We use a remote attestation process to validate the appliance before you can connect it to your device and copy data to it.

