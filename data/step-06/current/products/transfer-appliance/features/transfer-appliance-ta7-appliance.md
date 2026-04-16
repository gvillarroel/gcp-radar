---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:17.784Z"
product_name: "Transfer Appliance"
product_slug: "transfer-appliance"
feature_name: "Transfer Appliance TA7 appliance"
feature_slug: "transfer-appliance-ta7-appliance"
latest_feature_date: "2022-07-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer"
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/known-limitations"
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/access-control"
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide"
keywords:
  - "transfer"
  - "appliance"
  - "ta7"
  - "new"
  - "size"
  - "was"
  - "introduced"
  - "with"
---

# Transfer Appliance TA7 appliance

Product: Transfer Appliance
Coverage: MEDIUM

## Step 02 Summary

A new Transfer Appliance size was introduced with the TA7 model, providing up to 7 TB storage in a smaller form factor and supporting both online and offline transfer modes.

## Extended Definition

A new Transfer Appliance size was introduced with the TA7 model, providing up to 7 TB storage in a smaller form factor and supporting both online and offline transfer modes.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer](https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer)
- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/known-limitations](https://docs.cloud.google.com/transfer-appliance/docs/4.0/known-limitations)
- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/access-control](https://docs.cloud.google.com/transfer-appliance/docs/4.0/access-control)
- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide](https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide)

## Supporting Pages

### "Enable or disable online transfer \_|\_ Transfer Appliance \_|\_ Google\

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer](https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer)
- Source ID: `site-docs-root`
- Final score: 197
- Re-rank relevance: N/A

Evidence snippets:
- Additionally, each invocation of this command with at least one of the the two flags triggers a new transfer operation, regardless of whether the appliance is offline or online.
- If the appliance was configured to use a static IP address, update it to use DHCP: ta config --data port= PORT --ip=dhcp Replace PORT with the data port you are using on the appliance, either RJ45 or QSFP .
- Home Documentation Storage Transfer Appliance Guides Send feedback Enable or disable online transfer Stay organized with collections Save and categorize content based on your preferences.
- To enable online transfer mode, follow the instructions below: Verify your outbound connectivity from the appliance to the HTTPS endpoints listed below: https://gcr.io https://storage.googleapis.com https://oauth2.googleapis.com https://storagetransfer.googleapis.com https://pubsub.googleapis.com Run the following command using each of the HTTPS endpoints: ping URL If the command fails, it may indicate that DNS is misconfigured on the appliance.

### Known limitations \_|\_ Transfer Appliance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/known-limitations](https://docs.cloud.google.com/transfer-appliance/docs/4.0/known-limitations)
- Source ID: `site-docs-reference`
- Final score: 189
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you anticipate ordering many appliances for a large transfer and cannot follow the limitations listed below, you must perform an initial proof-of-concept transfer with a single Transfer Appliance and representative data to ensure performance is suitable before you order multiple appliances.
- Object Versioning Using Transfer Appliance with a bucket where object versioning is enabled may result in multiple versions of the same object being created and storage costs associated with these versions.
- Transfer Appliance does not create empty directories in Cloud Storage when we transfer from the appliance to your Cloud Storage bucket, because objects don't reside within subdirectories within a bucket.
- Home Documentation Storage Transfer Appliance Guides Send feedback Known limitations Stay organized with collections Save and categorize content based on your preferences.

### Access control with IAM \_|\_ Transfer Appliance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/access-control](https://docs.cloud.google.com/transfer-appliance/docs/4.0/access-control)
- Source ID: `site-iam-reference`
- Final score: 171
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Role details The following table describes in detail the predefined roles for Transfer Appliance: Role Description Included Permissions Transfer Appliance Admin ( roles/transferappliance. admin ) Provides all Transfer Appliance permissions, including the ability to order new appliances and update existing appliance metadata. transferappliance.appliances. list get create update delete transferappliance.orders. list get create update delete transferappliance.savedAddresses. list get create update delete transferappliance.operations. list get cancel delete transferappliance.locations. list get transferappliance.projects. list get transferappliance.credentials. get Transfer Appliance Viewer ( roles/transferappliance. viewer ) Grants the required permissions for read-only access to all Transfer Appliance resources. transferappliance.appliances. list get transferappliance.orders. list get transferappliance.savedAddresses. list get transferappliance.operations. list get transferappliance.locations. list get resourcemanager.projects. list get Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Required, along with transferappliance.orders.create , to create and submit an appliance order. transferappliance.appliances.update Permission to update any appliance's metadata. transferappliance.appliances.delete Permission to delete appliance resources that are in a DRAFT state.
- Required, along with transferappliance.appliances.create , to create and submit an appliance order. transferappliance.orders.update Permission to update an existing order. transferappliance.orders.delete Permission to delete an order.
- Home Documentation Storage Transfer Appliance Resources Send feedback Access control with IAM Stay organized with collections Save and categorize content based on your preferences.

### High-level overview \_|\_ Transfer Appliance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide](https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide)
- Source ID: `site-docs-root`
- Final score: 167
- Re-rank relevance: N/A

Evidence snippets:
- Before connecting the appliance to your network, validate that it hasn't been tampered with during shipping and submit the Transfer Appliance Attestation Passcode returned by the appliance in the appliance detail page of the Google Cloud console.
- Home Documentation Storage Transfer Appliance Guides Send feedback High-level overview Stay organized with collections Save and categorize content based on your preferences.
- The maximum path length is 1024 bytes, which includes the optional object prefix specified when you provide Transfer Appliance Team with bucket configuration details.
- The Transfer Appliance Team responds with the shipping label for the Transfer Appliance for the given passcode.

