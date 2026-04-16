---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:17.792Z"
product_name: "Transfer Appliance"
product_slug: "transfer-appliance"
feature_name: "Transfer Appliance symbolic link skipping"
feature_slug: "transfer-appliance-symbolic-link-skipping"
latest_feature_date: "2018-06-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/known-limitations"
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/audit-logging"
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer"
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview"
keywords:
  - "transfer"
  - "appliance"
  - "symbolic"
  - "link"
  - "skipping"
  - "capture"
  - "utility"
  - "now"
---

# Transfer Appliance symbolic link skipping

Product: Transfer Appliance
Coverage: MEDIUM

## Step 02 Summary

Transfer Appliance Capture Utility now supports skipping symbolic links when capturing files.

## Extended Definition

Transfer Appliance Capture Utility now supports skipping symbolic links when capturing files.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/known-limitations](https://docs.cloud.google.com/transfer-appliance/docs/4.0/known-limitations)
- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/audit-logging](https://docs.cloud.google.com/transfer-appliance/docs/4.0/audit-logging)
- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer](https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer)
- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview](https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview)

## Supporting Pages

### Known limitations \_|\_ Transfer Appliance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/known-limitations](https://docs.cloud.google.com/transfer-appliance/docs/4.0/known-limitations)
- Source ID: `site-docs-reference`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- Supported file metadata Transfer Appliance preserves symlinks, numeric MODE and the last modified time ( mtime ) from Transfer Appliance file system to copy into the corresponding Cloud Storage destination object.
- Home Documentation Storage Transfer Appliance Guides Send feedback Known limitations Stay organized with collections Save and categorize content based on your preferences.
- This page documents known limitations of Transfer Appliance.
- If you anticipate ordering many appliances for a large transfer and cannot follow the limitations listed below, you must perform an initial proof-of-concept transfer with a single Transfer Appliance and representative data to ensure performance is suitable before you order multiple appliances.

### Transfer Appliance audit logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/audit-logging](https://docs.cloud.google.com/transfer-appliance/docs/4.0/audit-logging)
- Source ID: `site-iam-reference`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- Permission type Methods ADMIN READ cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.ExportApplianceUserData cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.GetAppliance cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.GetCredential cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.GetCredentialMetadata cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.GetDownloadLinks cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.GetOrder cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.GetSavedAddress cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.ListAppliances cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.ListOrders cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.ListSavedAddresses ADMIN WRITE cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.CreateAppliance cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.CreateOrder cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.CreateSavedAddress cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.DeleteAppliance cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.DeleteOrder cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.DeleteSavedAddress cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.SubmitOrder cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.UpdateAppliance cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.UpdateOrder cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.UpdateSavedAddress API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Transfer Appliance. cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance The following audit logs are associated with methods belonging to cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance .
- Filter for this method : protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.GetCredentialMetadata" GetDownloadLinks Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.GetDownloadLinks Audit log type : Data access Permissions : transferappliance.appliances.get - ADMIN READ Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.GetDownloadLinks" GetOrder Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.GetOrder Audit log type : Data access Permissions : transferappliance.orders.get - ADMIN READ Method is a long-running or streaming operation : No.
- CreateAppliance Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.CreateAppliance Audit log type : Admin activity Permissions : transferappliance.appliances.create - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.CreateAppliance" CreateOrder Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.CreateOrder Audit log type : Admin activity Permissions : transferappliance.orders.create - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.CreateOrder" CreateSavedAddress Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.CreateSavedAddress Audit log type : Admin activity Permissions : transferappliance.savedAddresses.create - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.CreateSavedAddress" DeleteAppliance Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.DeleteAppliance Audit log type : Admin activity Permissions : transferappliance.appliances.delete - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.DeleteAppliance" DeleteOrder Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.DeleteOrder Audit log type : Admin activity Permissions : transferappliance.orders.delete - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.DeleteOrder" DeleteSavedAddress Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.DeleteSavedAddress Audit log type : Admin activity Permissions : transferappliance.savedAddresses.delete - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.DeleteSavedAddress" ExportApplianceUserData Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.ExportApplianceUserData Audit log type : Data access Permissions : transferappliance.appliances.get - ADMIN READ Method is a long-running or streaming operation : No.

### "Enable or disable online transfer \_|\_ Transfer Appliance \_|\_ Google\

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer](https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer)
- Source ID: `site-docs-root`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- To enable online transfer mode, follow the instructions below: Verify your outbound connectivity from the appliance to the HTTPS endpoints listed below: https://gcr.io https://storage.googleapis.com https://oauth2.googleapis.com https://storagetransfer.googleapis.com https://pubsub.googleapis.com Run the following command using each of the HTTPS endpoints: ping URL If the command fails, it may indicate that DNS is misconfigured on the appliance.
- Home Documentation Storage Transfer Appliance Guides Send feedback Enable or disable online transfer Stay organized with collections Save and categorize content based on your preferences.
- To set the appliance to online mode, run the following command: ta online The following sample response resembles the output that is returned: Starting containers for online transfer...
- Additionally, each invocation of this command with at least one of the the two flags triggers a new transfer operation, regardless of whether the appliance is offline or online.

### Transfer Appliance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview](https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview)
- Source ID: `site-docs-reference`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- However, with Transfer Appliance, you can receive the appliance and capture 300 terabytes of data in under 25 days.
- Transfer Appliance is available in the following locations: Location TA40(Rackable) TA300(Rackable) TA40(Freestanding) TA300(Freestanding) United States European Union member states United Kingdom Singapore Japan Canada Australia India For a complete list of countries where Transfer Appliance is available, refer to the Order Appliance page on the Google Cloud console.
- Online transfers offer the following benefits: Quickly transfer data to Cloud Storage with low latency : Online transfers are an accelerated method of transferring your data to Cloud Storage, omitting the need to wait for your appliance to be shipped back to Google before the data is copied to your destination bucket.
- Minimal software : For Linux and Apple macOS systems, copy directly to Transfer Appliance by mounting the exposed NFS share on the appliance to your workstation, using common software already installed on the system.

