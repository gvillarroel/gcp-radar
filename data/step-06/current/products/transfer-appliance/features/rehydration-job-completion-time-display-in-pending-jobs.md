---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:17.787Z"
product_name: "Transfer Appliance"
product_slug: "transfer-appliance"
feature_name: "Rehydration job completion time display in pending jobs"
feature_slug: "rehydration-job-completion-time-display-in-pending-jobs"
latest_feature_date: "2018-06-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer"
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/audit-logging"
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide"
  - "https://docs.cloud.google.com/transfer-appliance/docs/4.0/known-limitations"
keywords:
  - "rehydration"
  - "job"
  - "completion"
  - "time"
  - "display"
  - "in"
  - "pending"
  - "jobs"
---

# Rehydration job completion time display in pending jobs

Product: Transfer Appliance
Coverage: MEDIUM

## Step 02 Summary

Transfer Appliance now displays the rehydration job time-to-completion in the Pending Jobs list.

## Extended Definition

Transfer Appliance now displays the rehydration job time-to-completion in the Pending Jobs list.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer](https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer)
- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/audit-logging](https://docs.cloud.google.com/transfer-appliance/docs/4.0/audit-logging)
- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide](https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide)
- [https://docs.cloud.google.com/transfer-appliance/docs/4.0/known-limitations](https://docs.cloud.google.com/transfer-appliance/docs/4.0/known-limitations)

## Supporting Pages

### "Enable or disable online transfer \_|\_ Transfer Appliance \_|\_ Google\

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer](https://docs.cloud.google.com/transfer-appliance/docs/4.0/online-transfer)
- Source ID: `site-docs-root`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- Optional: change the transfer destination bucket and the job object prefix. ta online --bucket= BUCKET --object prefix= OBJECT PREFIX Replace BUCKET with the destination bucket and OBJECT PREFIX with the object prefix you are updating to.
- Set to online mode Before enabling online transfer mode for the first time, follow the instructions to complete project setup .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- To enable online transfer mode, follow the instructions below: Verify your outbound connectivity from the appliance to the HTTPS endpoints listed below: https://gcr.io https://storage.googleapis.com https://oauth2.googleapis.com https://storagetransfer.googleapis.com https://pubsub.googleapis.com Run the following command using each of the HTTPS endpoints: ping URL If the command fails, it may indicate that DNS is misconfigured on the appliance.

### Transfer Appliance audit logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/audit-logging](https://docs.cloud.google.com/transfer-appliance/docs/4.0/audit-logging)
- Source ID: `site-iam-reference`
- Final score: 61
- Re-rank relevance: N/A

Evidence snippets:
- CreateAppliance Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.CreateAppliance Audit log type : Admin activity Permissions : transferappliance.appliances.create - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.CreateAppliance" CreateOrder Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.CreateOrder Audit log type : Admin activity Permissions : transferappliance.orders.create - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.CreateOrder" CreateSavedAddress Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.CreateSavedAddress Audit log type : Admin activity Permissions : transferappliance.savedAddresses.create - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.CreateSavedAddress" DeleteAppliance Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.DeleteAppliance Audit log type : Admin activity Permissions : transferappliance.appliances.delete - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.DeleteAppliance" DeleteOrder Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.DeleteOrder Audit log type : Admin activity Permissions : transferappliance.orders.delete - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.DeleteOrder" DeleteSavedAddress Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.DeleteSavedAddress Audit log type : Admin activity Permissions : transferappliance.savedAddresses.delete - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.DeleteSavedAddress" ExportApplianceUserData Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.ExportApplianceUserData Audit log type : Data access Permissions : transferappliance.appliances.get - ADMIN READ Method is a long-running or streaming operation : No.
- Permission type Methods ADMIN READ cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.ExportApplianceUserData cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.GetAppliance cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.GetCredential cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.GetCredentialMetadata cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.GetDownloadLinks cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.GetOrder cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.GetSavedAddress cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.ListAppliances cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.ListOrders cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.ListSavedAddresses ADMIN WRITE cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.CreateAppliance cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.CreateOrder cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.CreateSavedAddress cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.DeleteAppliance cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.DeleteOrder cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.DeleteSavedAddress cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.SubmitOrder cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.UpdateAppliance cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.UpdateOrder cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.UpdateSavedAddress API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Transfer Appliance. cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance The following audit logs are associated with methods belonging to cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance .
- Filter for this method : protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.ListSavedAddresses" SubmitOrder Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.SubmitOrder Audit log type : Admin activity Permissions : transferappliance.appliances.update - ADMIN WRITE transferappliance.orders.update - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.SubmitOrder" UpdateAppliance Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.UpdateAppliance Audit log type : Admin activity Permissions : transferappliance.appliances.update - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.UpdateAppliance" UpdateOrder Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.UpdateOrder Audit log type : Admin activity Permissions : transferappliance.orders.update - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.UpdateOrder" UpdateSavedAddress Method : cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.UpdateSavedAddress Audit log type : Admin activity Permissions : transferappliance.savedAddresses.update - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="cloud.transfer.appliance.ccfe.api.v1alpha1.TransferAppliance.UpdateSavedAddress" Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

### High-level overview \_|\_ Transfer Appliance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide](https://docs.cloud.google.com/transfer-appliance/docs/4.0/procedure-guide)
- Source ID: `site-docs-root`
- Final score: 57
- Re-rank relevance: N/A

Evidence snippets:
- Sometimes, a cloud-ingest directory that is used to coordinate the data uploaded from the appliance to your destination Transfer Appliance bucket.
- If the device was not tampered with during shipping, the credentials will be displayed in the Google Cloud console.
- Data that's been transferred from your appliance is displayed in your Cloud Storage bucket.
- Complete the project setup: Go to appliances page Find and select the appliance Click on the Open Setup Checklist button Complete the following steps: Enable API will enable the required APIs for the appliance Authorize the service accounts will create service accounts used for online transfer and authorize service accounts to the output bucket (only for online transfer) Create and Download the key of the appliance service account that is created during Authorize the service accounts Receive the appliance To receive an appliance, follow these steps: Track the appliance shipped to you.

### Known limitations \_|\_ Transfer Appliance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/transfer-appliance/docs/4.0/known-limitations](https://docs.cloud.google.com/transfer-appliance/docs/4.0/known-limitations)
- Source ID: `site-docs-reference`
- Final score: 52
- Re-rank relevance: N/A

Evidence snippets:
- Supported file metadata Transfer Appliance preserves symlinks, numeric MODE and the last modified time ( mtime ) from Transfer Appliance file system to copy into the corresponding Cloud Storage destination object.
- We recommend that you disable object versioning for the bucket you specified as the destination at the time of ordering your Transfer Appliance.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- If you anticipate ordering many appliances for a large transfer and cannot follow the limitations listed below, you must perform an initial proof-of-concept transfer with a single Transfer Appliance and representative data to ensure performance is suitable before you order multiple appliances.

