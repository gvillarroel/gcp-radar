---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:17.790Z"
product_name: "Transfer Appliance"
product_slug: "transfer-appliance"
feature_name: "Transfer Appliance pre-shipment factory reset"
feature_slug: "transfer-appliance-pre-shipment-factory-reset"
latest_feature_date: "2018-06-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide"
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer"
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/known-limitations"
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/access-control"
keywords:
  - "transfer"
  - "appliance"
  - "pre"
  - "shipment"
  - "factory"
  - "reset"
  - "supports"
  - "performing"
---

# Transfer Appliance pre-shipment factory reset

Product: Transfer Appliance
Coverage: MEDIUM

## Step 02 Summary

Transfer Appliance supports performing a factory reset after an appliance is prepared for shipment to the Google upload facility.

## Extended Definition

Transfer Appliance supports performing a factory reset after an appliance is prepared for shipment to the Google upload facility.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide](https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide)
- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer](https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer)
- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/known-limitations](https://docs.cloud.google.com/transfer-appliance/docs/4.0/known-limitations)
- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/access-control](https://docs.cloud.google.com/transfer-appliance/docs/4.0/access-control)

## Supporting Pages

### High-level overview \_|\_ Transfer Appliance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide](https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Prepare for the appliance To prepare for Transfer Appliance, do the following: When you're ready to transfer your data, apply for Transfer Appliance from the same Google Cloud project as your destination Cloud Storage bucket.
- Home Documentation Storage Transfer Appliance Guides Send feedback High-level overview Stay organized with collections Save and categorize content based on your preferences.
- The maximum path length is 1024 bytes, which includes the optional object prefix specified when you provide Transfer Appliance Team with bucket configuration details.
- Before you begin Before ordering, use the following checklist to ensure that your environment supports using Transfer Appliance.

### "Enable or disable online transfer \_|\_ Transfer Appliance \_|\_ Google\

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer](https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer)
- Source ID: `site-docs-root`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Storage Transfer Appliance Guides Send feedback Enable or disable online transfer Stay organized with collections Save and categorize content based on your preferences.
- To enable online transfer mode, follow the instructions below: Verify your outbound connectivity from the appliance to the HTTPS endpoints listed below: https://gcr.io https://storage.googleapis.com https://oauth2.googleapis.com https://storagetransfer.googleapis.com https://pubsub.googleapis.com Run the following command using each of the HTTPS endpoints: ping URL If the command fails, it may indicate that DNS is misconfigured on the appliance.
- Optional: change the transfer destination bucket and the job object prefix. ta online --bucket= BUCKET --object prefix= OBJECT PREFIX Replace BUCKET with the destination bucket and OBJECT PREFIX with the object prefix you are updating to.
- To set the appliance to online mode, run the following command: ta online The following sample response resembles the output that is returned: Starting containers for online transfer...

### Known limitations \_|\_ Transfer Appliance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/known-limitations](https://docs.cloud.google.com/transfer-appliance/docs/4.0/known-limitations)
- Source ID: `site-docs-reference`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- If you anticipate ordering many appliances for a large transfer and cannot follow the limitations listed below, you must perform an initial proof-of-concept transfer with a single Transfer Appliance and representative data to ensure performance is suitable before you order multiple appliances.
- Supported file metadata Transfer Appliance preserves symlinks, numeric MODE and the last modified time ( mtime ) from Transfer Appliance file system to copy into the corresponding Cloud Storage destination object.
- Home Documentation Storage Transfer Appliance Guides Send feedback Known limitations Stay organized with collections Save and categorize content based on your preferences.
- Supported file types Transfer Appliance supports transferring regular files.

### Access control with IAM \_|\_ Transfer Appliance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/access-control](https://docs.cloud.google.com/transfer-appliance/docs/4.0/access-control)
- Source ID: `site-iam-reference`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- Role details The following table describes in detail the predefined roles for Transfer Appliance: Role Description Included Permissions Transfer Appliance Admin ( roles/transferappliance. admin ) Provides all Transfer Appliance permissions, including the ability to order new appliances and update existing appliance metadata. transferappliance.appliances. list get create update delete transferappliance.orders. list get create update delete transferappliance.savedAddresses. list get create update delete transferappliance.operations. list get cancel delete transferappliance.locations. list get transferappliance.projects. list get transferappliance.credentials. get Transfer Appliance Viewer ( roles/transferappliance. viewer ) Grants the required permissions for read-only access to all Transfer Appliance resources. transferappliance.appliances. list get transferappliance.orders. list get transferappliance.savedAddresses. list get transferappliance.operations. list get transferappliance.locations. list get resourcemanager.projects. list get Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Storage Transfer Appliance Resources Send feedback Access control with IAM Stay organized with collections Save and categorize content based on your preferences.
- Predefined roles This section describes the predefined roles for Transfer Appliance.
- Permissions The following resources exist for Transfer Appliance: appliances orders savedAddresses operations locations credentials Appliance permissions The following table describes permissions for Transfer Appliance appliances resources: Permission Description transferappliance.appliances.list Permission to view a list of appliances and information related to them, including the ID, order status, appliance type and model, firmware version, activation status, and connection status. transferappliance.appliances.get Permission to view detailed information about any appliance.

