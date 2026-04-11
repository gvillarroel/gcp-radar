---
title: "Customer-managed encryption keys \_|\_ Integration Connectors \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/integration-connectors/docs/cmek
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/integration-connectors/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/integration-connectors/docs/cmek
  title: "Customer-managed encryption keys \_|\_ Integration Connectors \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Integration Connectors
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Customer-managed encryption keys
By default, Integration Connectors encrypts customer content at
rest. Integration Connectors handles encryption for you without any
additional actions on your part. This option is called Google default encryption .
If you want to control your encryption keys, then you can use customer-managed encryption keys
(CMEKs) in Cloud KMS with CMEK-integrated services including
Integration Connectors. Using Cloud KMS keys gives you control over their protection
level, location, rotation schedule, usage and access permissions, and cryptographic boundaries.
Using Cloud KMS also lets
you view audit logs and control key lifecycles.
Instead of Google owning and managing the symmetric
key encryption keys (KEKs) that protect your data, you control and
manage these keys in Cloud KMS.
After you set up your resources with CMEKs, the experience of accessing your
Integration Connectors resources is similar to using Google default encryption.
For more information about your encryption
options, see Customer-managed encryption keys (CMEK) .
Before you begin
Ensure that the following tasks are completed before using CMEK for Integration Connectors:
Enable the Cloud KMS API for the project that will store your encryption keys.
Enable Cloud KMS API
Tip: You can run Integration Connectors and Cloud KMS in the same Google Cloud project, or in different projects.
Assign the Cloud KMS Admin IAM role or grant the following IAM permissions for the project that will store your encryption keys:
cloudkms.cryptoKeys.setIamPolicy
cloudkms.keyRings.create
cloudkms.cryptoKeys.create
For information about granting additional roles or permissions, see Granting, changing, and revoking access .
Caution: The Cloud KMS Admin role contains permissions for key maintenance and key version destruction. To protect your Cloud KMS resources, this role should only be assigned to individuals responsible for key administration.
Create a key ring and a key .
Note: The key ring must be created in the same region where you have set up Integration Connectors.
Add service account to CMEK key
In order to use a CMEK key in Integration Connectors, you must ensure that your default service account (having the format service- PROJECT_NUMBER @gcp-sa-connectors.iam.gserviceaccount.com ) is added and assigned with the CryptoKey Encrypter/Decrypter IAM role for that CMEK key.
Note: The default service account may not exist if you are
provisioning the first region. To generate the service account, run the
gcloud beta services identity create --service=connectors.googleapis.com --project= PROJECT_ID
command.
In the Google Cloud console, go to the Key Inventory page.
Go to Key Inventory page
Select the checkbox for the desired CMEK key.
The Permissions tab in the right window pane becomes available.
Click Add principal , and enter the email address of the default service account.
Click Select a role and select the Cloud KMS CryptoKey Encrypter/Decrypter role from the available dropdown list.
Click Save .
Enable CMEK encryption for an existing Integration Connectors region
Caution:
Enabling CMEK encryption
for an Integration Connectors region cannot be undone. This also means that
you can't change the encryption method for a region if CMEK is already enabled.
You can enable CMEK for an Integration Connectors region only
when all the connections in that region are SUSPENDED .
Therefore, before you enable CMEK for an existing region that has connections,
you must suspend all the connections
in the region.
You can use CMEK to encrypt and
decrypt the supported data
stored in a region (also referred as location). To enable CMEK encryption
for an existing Integration Connectors region, do the following steps:
In the Google Cloud console, go to the Integration Connectors > Connections page.
Go to all connections page.
Filter the connections for the required Location .
You will get a list of all the connections for the specified location (region).
Suspend all the connections in the region.
Go to the Integration Connectors > Regions page.
This lists all the regions where Integration Connectors is available.
For the region in which you want to enable CMEK, click Edit encryption in the Actions menu.
This shows the Edit encryption pane.
Select Customer-managed encryption key (CMEK) , and then select the required key from the
Customer-managed key drop-down list.
This may prompt you to grant to cloudkms.cryptoKeyEncrypterDecrypter role to the
service account. Click Grant .
Click Done .
Enable CMEK encryption for a new Integration Connectors region
Caution: Enabling CMEK encryption for an Integration Connectors region cannot be undone.
You can use CMEK to encrypt and
decrypt the supported data
stored in a region (also referred as location). To enable CMEK encryption
for a new Integration Connectors region, do the following steps:
In the Google Cloud console, go to the Integration Connectors > Regions page.
Go to Regions page.
Click Provision new region .
This displays the create region page.
Select the required region from the Region drop-down list.
In the Advanced settings section, select
Customer-managed encryption key (CMEK) , and then select the required key from the
Customer-managed key drop-down list
This may prompt you to grant to cloudkms.cryptoKeyEncrypterDecrypter role to the
service account. Click Grant .
Click Done .
Cloud KMS quotas and Integration Connectors
When you use CMEK in Integration Connectors,
your projects can consume Cloud KMS cryptographic requests
quotas. For example, CMEK keys can consume these quotas for each encryption and decryption call.
Encryption and decryption operations
using CMEK keys affect Cloud KMS quotas in these ways:
For software CMEK keys generated in Cloud KMS, no
Cloud KMS quota is consumed.
For hardware CMEK keys—sometimes called Cloud HSM
keys—encryption and decryption operations count against
Cloud HSM quotas in the project that
contains the key.
For external CMEK keys—sometimes called Cloud EKM
keys—encryption and decryption operations count against
Cloud EKM quotas in the project that
contains the key.
For more information, see
Cloud KMS quotas .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
