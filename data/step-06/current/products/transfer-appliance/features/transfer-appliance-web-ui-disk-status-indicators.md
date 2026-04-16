---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:17.792Z"
product_name: "Transfer Appliance"
product_slug: "transfer-appliance"
feature_name: "Transfer Appliance Web UI disk status indicators"
feature_slug: "transfer-appliance-web-ui-disk-status-indicators"
latest_feature_date: "2018-06-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/access-control"
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide"
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer"
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview"
keywords:
  - "transfer"
  - "appliance"
  - "web"
  - "ui"
  - "disk"
  - "status"
  - "indicators"
  - "are"
---

# Transfer Appliance Web UI disk status indicators

Product: Transfer Appliance
Coverage: MEDIUM

## Step 02 Summary

Disk status indicators are now available in the Settings menu of the Transfer Appliance Web User Interface.

## Extended Definition

Disk status indicators are now available in the Settings menu of the Transfer Appliance Web User Interface.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/access-control](https://docs.cloud.google.com/transfer-appliance/docs/4.0/access-control)
- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide](https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide)
- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer](https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer)
- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview](https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview)

## Supporting Pages

### Access control with IAM \_|\_ Transfer Appliance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/access-control](https://docs.cloud.google.com/transfer-appliance/docs/4.0/access-control)
- Source ID: `site-iam-reference`
- Final score: 180
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Role details The following table describes in detail the predefined roles for Transfer Appliance: Role Description Included Permissions Transfer Appliance Admin ( roles/transferappliance. admin ) Provides all Transfer Appliance permissions, including the ability to order new appliances and update existing appliance metadata. transferappliance.appliances. list get create update delete transferappliance.orders. list get create update delete transferappliance.savedAddresses. list get create update delete transferappliance.operations. list get cancel delete transferappliance.locations. list get transferappliance.projects. list get transferappliance.credentials. get Transfer Appliance Viewer ( roles/transferappliance. viewer ) Grants the required permissions for read-only access to all Transfer Appliance resources. transferappliance.appliances. list get transferappliance.orders. list get transferappliance.savedAddresses. list get transferappliance.operations. list get transferappliance.locations. list get resourcemanager.projects. list get Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Permissions The following resources exist for Transfer Appliance: appliances orders savedAddresses operations locations credentials Appliance permissions The following table describes permissions for Transfer Appliance appliances resources: Permission Description transferappliance.appliances.list Permission to view a list of appliances and information related to them, including the ID, order status, appliance type and model, firmware version, activation status, and connection status. transferappliance.appliances.get Permission to view detailed information about any appliance.
- Required, along with transferappliance.orders.create , to create and submit an appliance order. transferappliance.appliances.update Permission to update any appliance's metadata. transferappliance.appliances.delete Permission to delete appliance resources that are in a DRAFT state.
- All of the permissions included in those roles are required by Transfer Appliance and Google Cloud console in order to properly render pages and retrieve or update resources.

### High-level overview \_|\_ Transfer Appliance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide](https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- Complete the project setup: Go to appliances page Find and select the appliance Click on the Open Setup Checklist button Complete the following steps: Enable API will enable the required APIs for the appliance Authorize the service accounts will create service accounts used for online transfer and authorize service accounts to the output bucket (only for online transfer) Create and Download the key of the appliance service account that is created during Authorize the service accounts Receive the appliance To receive an appliance, follow these steps: Track the appliance shipped to you.
- Review the Transfer Appliance specifications and confirm the following for your facility: Power capabilities Cooling capabilities Physical space requirements Identify the servers and the folders that contain data to transfer.
- Prepare for the appliance To prepare for Transfer Appliance, do the following: When you're ready to transfer your data, apply for Transfer Appliance from the same Google Cloud project as your destination Cloud Storage bucket.
- Home Documentation Storage Transfer Appliance Guides Send feedback High-level overview Stay organized with collections Save and categorize content based on your preferences.

### "Enable or disable online transfer \_|\_ Transfer Appliance \_|\_ Google\

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer](https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer)
- Source ID: `site-docs-root`
- Final score: 177
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Storage Transfer Appliance Guides Send feedback Enable or disable online transfer Stay organized with collections Save and categorize content based on your preferences.
- To enable online transfer mode, follow the instructions below: Verify your outbound connectivity from the appliance to the HTTPS endpoints listed below: https://gcr.io https://storage.googleapis.com https://oauth2.googleapis.com https://storagetransfer.googleapis.com https://pubsub.googleapis.com Run the following command using each of the HTTPS endpoints: ping URL If the command fails, it may indicate that DNS is misconfigured on the appliance.
- Optional: change the transfer destination bucket and the job object prefix. ta online --bucket= BUCKET --object prefix= OBJECT PREFIX Replace BUCKET with the destination bucket and OBJECT PREFIX with the object prefix you are updating to.
- If the appliance was configured to use a static IP address, update it to use DHCP: ta config --data port= PORT --ip=dhcp Replace PORT with the data port you are using on the appliance, either RJ45 or QSFP .

### Transfer Appliance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview](https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview)
- Source ID: `site-docs-reference`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- Online transfers offer the following benefits: Quickly transfer data to Cloud Storage with low latency : Online transfers are an accelerated method of transferring your data to Cloud Storage, omitting the need to wait for your appliance to be shipped back to Google before the data is copied to your destination bucket.
- Performance To enable you move data quickly and efficiently, Transfer Appliance has the following performance features: All SSD drives : Increased reliability over hard disk drives to ensure your transfer is smooth.
- Minimal software : For Linux and Apple macOS systems, copy directly to Transfer Appliance by mounting the exposed NFS share on the appliance to your workstation, using common software already installed on the system.
- Transfer Appliance helps ensure that you're connecting a trusted device to your equipment and network, and secures your data from end to end so that it is read by people you trust.

