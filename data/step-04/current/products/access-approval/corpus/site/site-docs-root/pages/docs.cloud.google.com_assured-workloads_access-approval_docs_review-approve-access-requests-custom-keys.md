---
title: "Review and approve access requests using a custom signing key \_|\_ Access\
  \ Approval \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-custom-keys
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/assured-workloads/access-approval/docs
source_metadata:
  url: https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-custom-keys
  title: "Review and approve access requests using a custom signing key \_|\_ Access\
    \ Approval \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

The names for some Assured Workload control packages are changing. For information about the name change, see Control package renaming notice .
Home
Technology areas
Assured Workloads
Cloud provider access management
Access Approval
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
(Optional) Configure Access Approval with a custom signing key
This document shows how to set up Access Approval using the
Google Cloud console to add an optional custom signing key for Access Approval requests.
Before you begin
Ensure that Access Approval is already enabled. For more information, see
Enabling Access Approval .
Configure a custom signing key (Optional)
Access Approval uses a signing key to verify the integrity of the
Access Approval request. By default, a Google-owned and managed key is used.
If you have Cloud EKM enabled, you can
choose an externally-managed signing key. For information about using external
keys, see Cloud EKM overview .
You can also choose to create a Cloud KMS signing key with
an algorithm of your choice. For more information, see
Creating asymmetric keys .
To use a custom signing key, follow the instructions in this section.
Get the email address of the service account
The email address for the service account is of the following form:
service- PROJECT_NUMBER @gcp-sa-accessapproval.iam.gserviceaccount.com
Replace PROJECT_NUMBER with the project number.
For example, the email address is service-p123456789@gcp-sa-accessapproval.iam.gserviceaccount.com
for a service account in a project whose project number is 123456789 .
To use your signing key, do the following:
On the Access Approval page in the Google Cloud console, select
Use a Cloud KMS signing key (advanced) .
Add the crypto key version resource ID.
The crypto key version resource ID must have the following form:
projects/ PROJECT_ID /locations/ LOCATION /keyRings/ KEYRING_ID /cryptoKeys/ CRYPTOKEY_ID /cryptoKeyVersions/ KEY_ID
For more information, see Getting a Cloud KMS resource ID .
To save your settings, click Save .
To use a custom signing key, you must grant the
Cloud KMS CryptoKey Signer/Verifier
( roles/cloudkms.signerVerifier ) IAM
role to the Access Approval service account for your project.
If the Access Approval service account doesn't have the permissions
to sign with the key you provided, you can grant the required permissions by
clicking Grant . After granting the permissions, click Save .
Clean up
To remove your optional custom signing key:
On the Access Approval page in the Google Cloud console, open settings.
Under Advanced Settings, select the default (Google) signing key option.
What's next
Learn about the anatomy of an access request .
Learn how to approve Access Approval requests .
Learn how to view historical Access Approval
requests .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
