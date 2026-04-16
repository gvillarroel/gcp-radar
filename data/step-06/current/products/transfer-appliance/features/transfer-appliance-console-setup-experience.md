---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:17.781Z"
product_name: "Transfer Appliance"
product_slug: "transfer-appliance"
feature_name: "Transfer Appliance console setup experience"
feature_slug: "transfer-appliance-console-setup-experience"
latest_feature_date: "2023-09-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer"
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide"
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview"
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/access-control"
keywords:
  - "transfer"
  - "appliance"
  - "console"
  - "setup"
  - "experience"
  - "new"
  - "based"
  - "flow"
---

# Transfer Appliance console setup experience

Product: Transfer Appliance
Coverage: MEDIUM

## Step 02 Summary

A new Google Cloud Console-based setup flow was released to let users fully configure appliance permissions and obtain appliance credentials.

## Extended Definition

A new Google Cloud Console-based setup flow was released to let users fully configure appliance permissions and obtain appliance credentials.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer](https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer)
- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide](https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide)
- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview](https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview)
- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/access-control](https://docs.cloud.google.com/transfer-appliance/docs/4.0/access-control)

## Supporting Pages

### "Enable or disable online transfer \_|\_ Transfer Appliance \_|\_ Google\

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer](https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer)
- Source ID: `site-docs-root`
- Final score: 181
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Storage Transfer Appliance Guides Send feedback Enable or disable online transfer Stay organized with collections Save and categorize content based on your preferences.
- Additionally, each invocation of this command with at least one of the the two flags triggers a new transfer operation, regardless of whether the appliance is offline or online.
- To enable online transfer mode, follow the instructions below: Verify your outbound connectivity from the appliance to the HTTPS endpoints listed below: https://gcr.io https://storage.googleapis.com https://oauth2.googleapis.com https://storagetransfer.googleapis.com https://pubsub.googleapis.com Run the following command using each of the HTTPS endpoints: ping URL If the command fails, it may indicate that DNS is misconfigured on the appliance.
- To set the appliance to online mode, run the following command: ta online The following sample response resembles the output that is returned: Starting containers for online transfer...

### High-level overview \_|\_ Transfer Appliance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide](https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- Complete the project setup: Go to appliances page Find and select the appliance Click on the Open Setup Checklist button Complete the following steps: Enable API will enable the required APIs for the appliance Authorize the service accounts will create service accounts used for online transfer and authorize service accounts to the output bucket (only for online transfer) Create and Download the key of the appliance service account that is created during Authorize the service accounts Receive the appliance To receive an appliance, follow these steps: Track the appliance shipped to you.
- Before connecting the appliance to your network, validate that it hasn't been tampered with during shipping and submit the Transfer Appliance Attestation Passcode returned by the appliance in the appliance detail page of the Google Cloud console.
- Home Documentation Storage Transfer Appliance Guides Send feedback High-level overview Stay organized with collections Save and categorize content based on your preferences.
- Review the Transfer Appliance specifications and confirm the following for your facility: Power capabilities Cooling capabilities Physical space requirements Identify the servers and the folders that contain data to transfer.

### Transfer Appliance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview](https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview)
- Source ID: `site-docs-reference`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- Transfer Appliance is available in the following locations: Location TA40(Rackable) TA300(Rackable) TA40(Freestanding) TA300(Freestanding) United States European Union member states United Kingdom Singapore Japan Canada Australia India For a complete list of countries where Transfer Appliance is available, refer to the Order Appliance page on the Google Cloud console.
- Home Documentation Storage Transfer Appliance Overview Send feedback Transfer Appliance Stay organized with collections Save and categorize content based on your preferences.
- Online transfers offer the following benefits: Quickly transfer data to Cloud Storage with low latency : Online transfers are an accelerated method of transferring your data to Cloud Storage, omitting the need to wait for your appliance to be shipped back to Google before the data is copied to your destination bucket.
- Minimal software : For Linux and Apple macOS systems, copy directly to Transfer Appliance by mounting the exposed NFS share on the appliance to your workstation, using common software already installed on the system.

### Access control with IAM \_|\_ Transfer Appliance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/access-control](https://docs.cloud.google.com/transfer-appliance/docs/4.0/access-control)
- Source ID: `site-iam-reference`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- Role details The following table describes in detail the predefined roles for Transfer Appliance: Role Description Included Permissions Transfer Appliance Admin ( roles/transferappliance. admin ) Provides all Transfer Appliance permissions, including the ability to order new appliances and update existing appliance metadata. transferappliance.appliances. list get create update delete transferappliance.orders. list get create update delete transferappliance.savedAddresses. list get create update delete transferappliance.operations. list get cancel delete transferappliance.locations. list get transferappliance.projects. list get transferappliance.credentials. get Transfer Appliance Viewer ( roles/transferappliance. viewer ) Grants the required permissions for read-only access to all Transfer Appliance resources. transferappliance.appliances. list get transferappliance.orders. list get transferappliance.savedAddresses. list get transferappliance.operations. list get transferappliance.locations. list get resourcemanager.projects. list get Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Storage Transfer Appliance Resources Send feedback Access control with IAM Stay organized with collections Save and categorize content based on your preferences.
- All of the permissions included in those roles are required by Transfer Appliance and Google Cloud console in order to properly render pages and retrieve or update resources.
- Permissions The following resources exist for Transfer Appliance: appliances orders savedAddresses operations locations credentials Appliance permissions The following table describes permissions for Transfer Appliance appliances resources: Permission Description transferappliance.appliances.list Permission to view a list of appliances and information related to them, including the ID, order status, appliance type and model, firmware version, activation status, and connection status. transferappliance.appliances.get Permission to view detailed information about any appliance.

