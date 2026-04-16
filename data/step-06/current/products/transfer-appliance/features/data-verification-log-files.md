---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:17.782Z"
product_name: "Transfer Appliance"
product_slug: "transfer-appliance"
feature_name: "Data verification log files"
feature_slug: "data-verification-log-files"
latest_feature_date: "2022-09-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide"
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/audit-logging"
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/security-and-encryption"
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer"
keywords:
  - "verification"
  - "log"
  - "files"
  - "transfer"
  - "appliance"
  - "generates"
  - "after"
  - "each"
---

# Data verification log files

Product: Transfer Appliance
Coverage: MEDIUM

## Step 02 Summary

Transfer Appliance generates log files after each transfer that list successfully transferred and failed data for review.

## Extended Definition

Transfer Appliance generates log files after each transfer that list successfully transferred and failed data for review.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide](https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide)
- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/audit-logging](https://docs.cloud.google.com/transfer-appliance/docs/4.0/audit-logging)
- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/security-and-encryption](https://docs.cloud.google.com/transfer-appliance/docs/4.0/security-and-encryption)
- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer](https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer)

## Supporting Pages

### High-level overview \_|\_ Transfer Appliance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide](https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide)
- Source ID: `site-docs-root`
- Final score: 197
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Optional: You may request a Transfer Appliance wipe certificate to verify that we've securely wiped all data after copying it to Cloud Storage.
- Complete your copy After returning the appliance, do the following to complete your transfer: Verify that we received your appliance.
- Files and empty directories are deleted from the appliance after they're successfully copied to your Cloud Storage bucket.
- A transferappliance directory that logs successful and failed transfers from the appliance.

### Transfer Appliance audit logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/audit-logging](https://docs.cloud.google.com/transfer-appliance/docs/4.0/audit-logging)
- Source ID: `site-iam-reference`
- Final score: 186
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Permission type Methods ADMIN READ cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.ExportApplianceUserData cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.GetAppliance cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.GetCredential cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.GetCredentialMetadata cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.GetDownloadLinks cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.GetOrder cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.GetSavedAddress cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.ListAppliances cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.ListOrders cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.ListSavedAddresses ADMIN WRITE cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.CreateAppliance cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.CreateOrder cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.CreateSavedAddress cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.DeleteAppliance cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.DeleteOrder cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.DeleteSavedAddress cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.SubmitOrder cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.UpdateAppliance cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.UpdateOrder cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.UpdateSavedAddress API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Transfer Appliance. cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance The following audit logs are associated with methods belonging to cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance .
- When you call a method, Transfer Appliance generates an audit log whose category is dependent on the type property of the permission required to perform the method.
- CreateAppliance Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.CreateAppliance Audit log type : Admin activity Permissions : transferappliance.appliances.create - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.CreateAppliance" CreateOrder Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.CreateOrder Audit log type : Admin activity Permissions : transferappliance.orders.create - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.CreateOrder" CreateSavedAddress Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.CreateSavedAddress Audit log type : Admin activity Permissions : transferappliance.savedAddresses.create - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.CreateSavedAddress" DeleteAppliance Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.DeleteAppliance Audit log type : Admin activity Permissions : transferappliance.appliances.delete - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.DeleteAppliance" DeleteOrder Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.DeleteOrder Audit log type : Admin activity Permissions : transferappliance.orders.delete - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.DeleteOrder" DeleteSavedAddress Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.DeleteSavedAddress Audit log type : Admin activity Permissions : transferappliance.savedAddresses.delete - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.DeleteSavedAddress" ExportApplianceUserData Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.ExportApplianceUserData Audit log type : Data access Permissions : transferappliance.appliances.get - ADMIN READ Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.ListSavedAddresses" SubmitOrder Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.SubmitOrder Audit log type : Admin activity Permissions : transferappliance.appliances.update - ADMIN WRITE transferappliance.orders.update - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.SubmitOrder" UpdateAppliance Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.UpdateAppliance Audit log type : Admin activity Permissions : transferappliance.appliances.update - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.UpdateAppliance" UpdateOrder Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.UpdateOrder Audit log type : Admin activity Permissions : transferappliance.orders.update - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.UpdateOrder" UpdateSavedAddress Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.UpdateSavedAddress Audit log type : Admin activity Permissions : transferappliance.savedAddresses.update - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.UpdateSavedAddress" Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Security and encryption \_|\_ Transfer Appliance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/security-and-encryption](https://docs.cloud.google.com/transfer-appliance/docs/4.0/security-and-encryption)
- Source ID: `site-docs-reference`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- The following is a summary of how we refurbish each appliance after media sanitization: We partition the drives on the appliance.
- The following are details of how we encrypt your data: During transit to Cloud Storage : Your data is encrypted on Transfer Appliance with dm-encrypt and partition-level encryption, with the AES-256 encryption algorithm.
- You can request a wipe certificate for proof that we've securely sanitized the appliance media within 4 weeks after your data is available within Cloud Storage or after you've returned the appliance after data export.
- Appliance media sanitization After uploading your data or receiving the appliance for data export, we sanitize the drive media in the appliance you returned by applying NIST 800-88 standards for purging information.

### "Enable or disable online transfer \_|\_ Transfer Appliance \_|\_ Google\

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer](https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer)
- Source ID: `site-docs-root`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- To enable online transfer mode, follow the instructions below: Verify your outbound connectivity from the appliance to the HTTPS endpoints listed below: https://gcr.io https://storage.googleapis.com https://oauth2.googleapis.com https://storagetransfer.googleapis.com https://pubsub.googleapis.com Run the following command using each of the HTTPS endpoints: ping URL If the command fails, it may indicate that DNS is misconfigured on the appliance.
- Additionally, each invocation of this command with at least one of the the two flags triggers a new transfer operation, regardless of whether the appliance is offline or online.
- Home Documentation Storage Transfer Appliance Guides Send feedback Enable or disable online transfer Stay organized with collections Save and categorize content based on your preferences.
- To set the appliance to online mode, run the following command: ta online The following sample response resembles the output that is returned: Starting containers for online transfer...

