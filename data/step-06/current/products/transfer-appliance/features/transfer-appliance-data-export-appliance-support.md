---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:17.779Z"
product_name: "Transfer Appliance"
product_slug: "transfer-appliance"
feature_name: "Transfer Appliance data export appliance support"
feature_slug: "transfer-appliance-data-export-appliance-support"
latest_feature_date: "2023-12-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer"
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/audit-logging"
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/security-and-encryption"
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide"
keywords:
  - "transfer"
  - "appliance"
  - "export"
  - "introduced"
  - "ga"
  - "for"
  - "its"
  - "in"
---

# Transfer Appliance data export appliance support

Product: Transfer Appliance
Coverage: MEDIUM

## Step 02 Summary

Transfer Appliance introduced GA support for its data export appliance in the US, enabling customers to place orders to export data from Cloud Storage buckets to a shipped appliance.

## Extended Definition

Transfer Appliance introduced GA support for its data export appliance in the US, enabling customers to place orders to export data from Cloud Storage buckets to a shipped appliance.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer](https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer)
- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/audit-logging](https://docs.cloud.google.com/transfer-appliance/docs/4.0/audit-logging)
- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/security-and-encryption](https://docs.cloud.google.com/transfer-appliance/docs/4.0/security-and-encryption)
- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide](https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide)

## Supporting Pages

### "Enable or disable online transfer \_|\_ Transfer Appliance \_|\_ Google\

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer](https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer)
- Source ID: `site-docs-root`
- Final score: 246
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Storage Transfer Appliance Guides Send feedback Enable or disable online transfer Stay organized with collections Save and categorize content based on your preferences.
- To set the appliance to online mode, run the following command: ta online The following sample response resembles the output that is returned: Starting containers for online transfer...
- Additionally, each invocation of this command with at least one of the the two flags triggers a new transfer operation, regardless of whether the appliance is offline or online.
- To enable online transfer mode, follow the instructions below: Verify your outbound connectivity from the appliance to the HTTPS endpoints listed below: https://gcr.io https://storage.googleapis.com https://oauth2.googleapis.com https://storagetransfer.googleapis.com https://pubsub.googleapis.com Run the following command using each of the HTTPS endpoints: ping URL If the command fails, it may indicate that DNS is misconfigured on the appliance.

### Transfer Appliance audit logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/audit-logging](https://docs.cloud.google.com/transfer-appliance/docs/4.0/audit-logging)
- Source ID: `site-iam-reference`
- Final score: 243
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CreateAppliance Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.CreateAppliance Audit log type : Admin activity Permissions : transferappliance.appliances.create - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.CreateAppliance" CreateOrder Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.CreateOrder Audit log type : Admin activity Permissions : transferappliance.orders.create - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.CreateOrder" CreateSavedAddress Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.CreateSavedAddress Audit log type : Admin activity Permissions : transferappliance.savedAddresses.create - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.CreateSavedAddress" DeleteAppliance Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.DeleteAppliance Audit log type : Admin activity Permissions : transferappliance.appliances.delete - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.DeleteAppliance" DeleteOrder Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.DeleteOrder Audit log type : Admin activity Permissions : transferappliance.orders.delete - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.DeleteOrder" DeleteSavedAddress Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.DeleteSavedAddress Audit log type : Admin activity Permissions : transferappliance.savedAddresses.delete - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.DeleteSavedAddress" ExportApplianceUserData Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.ExportApplianceUserData Audit log type : Data access Permissions : transferappliance.appliances.get - ADMIN READ Method is a long-running or streaming operation : No.
- Permission type Methods ADMIN READ cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.ExportApplianceUserData cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.GetAppliance cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.GetCredential cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.GetCredentialMetadata cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.GetDownloadLinks cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.GetOrder cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.GetSavedAddress cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.ListAppliances cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.ListOrders cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.ListSavedAddresses ADMIN WRITE cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.CreateAppliance cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.CreateOrder cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.CreateSavedAddress cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.DeleteAppliance cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.DeleteOrder cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.DeleteSavedAddress cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.SubmitOrder cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.UpdateAppliance cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.UpdateOrder cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.UpdateSavedAddress API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Transfer Appliance. cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance The following audit logs are associated with methods belonging to cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance .
- Filter for this method : protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.ExportApplianceUserData" GetAppliance Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.GetAppliance Audit log type : Data access Permissions : transferappliance.appliances.get - ADMIN READ Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.ListSavedAddresses" SubmitOrder Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.SubmitOrder Audit log type : Admin activity Permissions : transferappliance.appliances.update - ADMIN WRITE transferappliance.orders.update - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.SubmitOrder" UpdateAppliance Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.UpdateAppliance Audit log type : Admin activity Permissions : transferappliance.appliances.update - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.UpdateAppliance" UpdateOrder Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.UpdateOrder Audit log type : Admin activity Permissions : transferappliance.orders.update - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.UpdateOrder" UpdateSavedAddress Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.UpdateSavedAddress Audit log type : Admin activity Permissions : transferappliance.savedAddresses.update - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.UpdateSavedAddress" Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Security and encryption \_|\_ Transfer Appliance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/security-and-encryption](https://docs.cloud.google.com/transfer-appliance/docs/4.0/security-and-encryption)
- Source ID: `site-docs-reference`
- Final score: 231
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- During download to Transfer Appliance : Your data is encrypted in the cloud before it is downloaded to the appliance when data export feature is used.
- You can request a wipe certificate for proof that we've securely sanitized the appliance media within 4 weeks after your data is available within Cloud Storage or after you've returned the appliance after data export.
- Appliance media sanitization After uploading your data or receiving the appliance for data export, we sanitize the drive media in the appliance you returned by applying NIST 800-88 standards for purging information.
- Encrypt data for data export from Cloud Storage When you order an appliance for data export, your appliance is prepared in a secured Google data center and your data is encrypted first.

### High-level overview \_|\_ Transfer Appliance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide](https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide)
- Source ID: `site-docs-root`
- Final score: 209
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Complete the project setup: Go to appliances page Find and select the appliance Click on the Open Setup Checklist button Complete the following steps: Enable API will enable the required APIs for the appliance Authorize the service accounts will create service accounts used for online transfer and authorize service accounts to the output bucket (only for online transfer) Create and Download the key of the appliance service account that is created during Authorize the service accounts Receive the appliance To receive an appliance, follow these steps: Track the appliance shipped to you.
- Before connecting the appliance to your network, validate that it hasn't been tampered with during shipping and submit the Transfer Appliance Attestation Passcode returned by the appliance in the appliance detail page of the Google Cloud console.
- Review the Transfer Appliance specifications and confirm the following for your facility: Power capabilities Cooling capabilities Physical space requirements Identify the servers and the folders that contain data to transfer.
- Prepare for the appliance To prepare for Transfer Appliance, do the following: When you're ready to transfer your data, apply for Transfer Appliance from the same Google Cloud project as your destination Cloud Storage bucket.

