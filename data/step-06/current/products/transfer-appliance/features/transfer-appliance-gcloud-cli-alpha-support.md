---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:17.780Z"
product_name: "Transfer Appliance"
product_slug: "transfer-appliance"
feature_name: "Transfer Appliance gcloud CLI alpha support"
feature_slug: "transfer-appliance-gcloud-cli-alpha-support"
latest_feature_date: "2023-10-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer"
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/audit-logging"
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide"
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/security-and-encryption"
keywords:
  - "transfer"
  - "appliance"
  - "gcloud"
  - "cli"
  - "alpha"
  - "added"
  - "level"
  - "in"
---

# Transfer Appliance gcloud CLI alpha support

Product: Transfer Appliance
Coverage: MEDIUM

## Step 02 Summary

Transfer Appliance added alpha-level support in the gcloud CLI via `gcloud alpha transfer appliances`, allowing users to view in-progress transfers, work with draft orders, and clone existing orders.

## Extended Definition

Transfer Appliance added alpha-level support in the gcloud CLI via `gcloud alpha transfer appliances`, allowing users to view in-progress transfers, work with draft orders, and clone existing orders.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer](https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer)
- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/audit-logging](https://docs.cloud.google.com/transfer-appliance/docs/4.0/audit-logging)
- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide](https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide)
- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/security-and-encryption](https://docs.cloud.google.com/transfer-appliance/docs/4.0/security-and-encryption)

## Supporting Pages

### "Enable or disable online transfer \_|\_ Transfer Appliance \_|\_ Google\

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer](https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer)
- Source ID: `site-docs-root`
- Final score: 216
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Online transfer compresses and encrypts the data in transit and accelerates data transfer compared to the gcloud CLI and other command-line tools.
- To enable online transfer mode, follow the instructions below: Verify your outbound connectivity from the appliance to the HTTPS endpoints listed below: https://gcr.io https://storage.googleapis.com https://oauth2.googleapis.com https://storagetransfer.googleapis.com https://pubsub.googleapis.com Run the following command using each of the HTTPS endpoints: ping URL If the command fails, it may indicate that DNS is misconfigured on the appliance.
- Home Documentation Storage Transfer Appliance Guides Send feedback Enable or disable online transfer Stay organized with collections Save and categorize content based on your preferences.
- To set the appliance to online mode, run the following command: ta online The following sample response resembles the output that is returned: Starting containers for online transfer...

### Transfer Appliance audit logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/audit-logging](https://docs.cloud.google.com/transfer-appliance/docs/4.0/audit-logging)
- Source ID: `site-iam-reference`
- Final score: 193
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CreateAppliance Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.CreateAppliance Audit log type : Admin activity Permissions : transferappliance.appliances.create - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.CreateAppliance" CreateOrder Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.CreateOrder Audit log type : Admin activity Permissions : transferappliance.orders.create - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.CreateOrder" CreateSavedAddress Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.CreateSavedAddress Audit log type : Admin activity Permissions : transferappliance.savedAddresses.create - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.CreateSavedAddress" DeleteAppliance Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.DeleteAppliance Audit log type : Admin activity Permissions : transferappliance.appliances.delete - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.DeleteAppliance" DeleteOrder Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.DeleteOrder Audit log type : Admin activity Permissions : transferappliance.orders.delete - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.DeleteOrder" DeleteSavedAddress Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.DeleteSavedAddress Audit log type : Admin activity Permissions : transferappliance.savedAddresses.delete - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.DeleteSavedAddress" ExportApplianceUserData Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.ExportApplianceUserData Audit log type : Data access Permissions : transferappliance.appliances.get - ADMIN READ Method is a long-running or streaming operation : No.
- Permission type Methods ADMIN READ cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.ExportApplianceUserData cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.GetAppliance cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.GetCredential cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.GetCredentialMetadata cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.GetDownloadLinks cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.GetOrder cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.GetSavedAddress cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.ListAppliances cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.ListOrders cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.ListSavedAddresses ADMIN WRITE cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.CreateAppliance cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.CreateOrder cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.CreateSavedAddress cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.DeleteAppliance cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.DeleteOrder cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.DeleteSavedAddress cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.SubmitOrder cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.UpdateAppliance cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.UpdateOrder cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.UpdateSavedAddress API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Transfer Appliance. cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance The following audit logs are associated with methods belonging to cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance .
- Filter for this method : protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.ListSavedAddresses" SubmitOrder Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.SubmitOrder Audit log type : Admin activity Permissions : transferappliance.appliances.update - ADMIN WRITE transferappliance.orders.update - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.SubmitOrder" UpdateAppliance Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.UpdateAppliance Audit log type : Admin activity Permissions : transferappliance.appliances.update - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.UpdateAppliance" UpdateOrder Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.UpdateOrder Audit log type : Admin activity Permissions : transferappliance.orders.update - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.UpdateOrder" UpdateSavedAddress Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.UpdateSavedAddress Audit log type : Admin activity Permissions : transferappliance.savedAddresses.update - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.UpdateSavedAddress" Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Filter for this method : protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.GetCredential" GetCredentialMetadata Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.GetCredentialMetadata Audit log type : Data access Permissions : transferappliance.credentials.get - ADMIN READ Method is a long-running or streaming operation : No.

### High-level overview \_|\_ Transfer Appliance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide](https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide)
- Source ID: `site-docs-root`
- Final score: 188
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Complete the project setup: Go to appliances page Find and select the appliance Click on the Open Setup Checklist button Complete the following steps: Enable API will enable the required APIs for the appliance Authorize the service accounts will create service accounts used for online transfer and authorize service accounts to the output bucket (only for online transfer) Create and Download the key of the appliance service account that is created during Authorize the service accounts Receive the appliance To receive an appliance, follow these steps: Track the appliance shipped to you.
- This page describes the high-level procedure for ordering, installing, and returning Transfer Appliance.
- Before connecting the appliance to your network, validate that it hasn't been tampered with during shipping and submit the Transfer Appliance Attestation Passcode returned by the appliance in the appliance detail page of the Google Cloud console.
- Review the Transfer Appliance specifications and confirm the following for your facility: Power capabilities Cooling capabilities Physical space requirements Identify the servers and the folders that contain data to transfer.

### Security and encryption \_|\_ Transfer Appliance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/security-and-encryption](https://docs.cloud.google.com/transfer-appliance/docs/4.0/security-and-encryption)
- Source ID: `site-docs-reference`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- The following are details of how we encrypt your data: During transit to Cloud Storage : Your data is encrypted on Transfer Appliance with dm-encrypt and partition-level encryption, with the AES-256 encryption algorithm.
- The following are the settings used to create Google-owned and managed keys: Region : Global Protection level: Software Purpose : Asymmetric decrypt Algorithm: 4096-bit RSA - OAEP Padding - SHA256 Digest Destroying the KEK before the session is completed results in complete data loss on the appliance.
- If the appliance validation indicates that the appliance was tampered with at any point, we invalidate the entire transfer session and work with you to ship you a replacement appliance.
- During download to Transfer Appliance : Your data is encrypted in the cloud before it is downloaded to the appliance when data export feature is used.

