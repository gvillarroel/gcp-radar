---
title: "Enable CMEK for Security Command Center \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/security-command-center/docs/cmek
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/security-command-center/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/security-command-center/docs/cmek
  title: "Enable CMEK for Security Command Center \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Security Command Center
Guides
Send feedback
Enable CMEK for Security Command Center
Stay organized with collections
Save and categorize content based on your preferences.
Standard-legacy, Standard, and Premium service tiers (requires organization-level activation )
By default, Security Command Center encrypts customer content at
rest. Security Command Center handles encryption for you without any
additional actions on your part. This option is called Google default encryption .
If you want to control your encryption keys, then you can use customer-managed encryption keys
(CMEKs) in Cloud KMS with CMEK-integrated services including
Security Command Center. Using Cloud KMS keys gives you control over their protection
level, location, rotation schedule, usage and access permissions, and cryptographic boundaries.
Using Cloud KMS also lets
you track key usage , view audit logs, and
control key lifecycles.
Instead of Google owning and managing the symmetric
key encryption keys (KEKs) that protect your data, you control and
manage these keys in Cloud KMS.
After you set up your resources with CMEKs, the experience of accessing your
Security Command Center resources is similar to using Google default encryption.
For more information about your encryption
options, see Customer-managed encryption keys (CMEK) .
To support separation of duties and greater control over
access to keys, we recommend that you create and manage keys in a separate
project that doesn't include other Google Cloud resources.
To enable CMEK for Security Command Center, you must choose Cloud KMS data
encryption when you activate an Security Command Center organization. After you
activate Security Command Center, you can no longer configure data encryption. You
can't enable CMEK during project-level activation. To learn more, see the
following:
Activate Security Command Center Standard tier for an organization
Activate Security Command Center Premium tier for an organization
You can use CMEK organization policy constraints to enforce your encryption
settings when you activate Security Command Center. For information about using CMEK
organization policy constraints and Security Command Center, see
CMEK organization policy constraints on this page.
Warning: If you disable, revoke access to, or destroy the CMEK after activation,
Security Command Center stops working and you can lose your
Security Command Center data. Destroying a key version is permanent and causes
unrecoverable data loss.
Before you begin
Before you set up CMEK for Security Command Center, do the following:
Install and initialize the Google Cloud CLI:
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Create a Google Cloud project with Cloud KMS enabled. This is your
key project .
Create a key ring in the correct location. The key ring location must
correspond to the location where you plan to activate Security Command Center.
To find the correct location, see Key location on this
page. To learn how to create a key ring, see
Create a key ring .
Create a Cloud KMS key on the key ring. For instructions, see
Create a key .
To ensure that the Cloud Security Command Center Service Agent has the necessary
permissions to encrypt and decrypt data,
ask your administrator to grant the
Cloud KMS CryptoKey Encrypter/Decrypter ( roles/cloudkms.cryptoKeyEncrypterDecrypter )
IAM role to the Cloud Security Command Center Service Agent on the Cloud KMS key.
For more information about granting roles, see Manage access to projects, folders, and organizations .
Your administrator might also be able to give the Cloud Security Command Center Service Agent
the required permissions through custom
roles or other predefined
roles .
Key location
When you create a Cloud KMS key and key ring for Security Command Center,
you must use a location that corresponds to your Security Command Center location.
If you don't plan to enable
data residency for Security Command Center ,
then create your Cloud KMS key and key ring in the us location.
If you plan to enable data residency, then choose the Cloud KMS
location that corresponds to your Security Command Center location:
Security Command Center location
Cloud KMS key location
eu
europe
sa
me-central2
us
us
Changes to the CMEK key
After you activate Security Command Center with CMEK, you can't change the
Cloud KMS key or switch to a Google-owned and Google-managed encryption key.
Warning: If you disable, revoke access to, or destroy the CMEK after activation,
Security Command Center stops working and you can lose your
Security Command Center data. Destroying a key version is permanent and causes
unrecoverable data loss.
You can rotate the CMEK key , which causes
Security Command Center to use the new key version. However, some Security Command Center
capabilities continue to use the old key for 30 days.
Supported resource types
CMEK encrypts data for the following Security Command Center resource types:
Findings
Notification configurations
BigQuery exports
Mute configs
CMEK organization policy constraints
To enforce CMEK usage for Security Command Center, you can enforce the following
organization policy constraints at the organization, folder, or project level:
constraints/gcp.restrictNonCmekServices : Requires you to use CMEK. If you
enforce constraints/gcp.restrictNonCmekServices on an organization, and
you've listed Security Command Center as a restricted service that's required to
use CMEK, then you must enable CMEK when you activate Security Command Center.
Important: If you enforce this constraint, and you don't list
Security Command Center as a restricted service, then
some Security Command Center features won't work correctly.
constraints/gcp.restrictCmekCryptoKeyProjects : Requires that the CMEK key
for Security Command Center must come from a specific project or set of projects.
If you enforce both of these constraints on the organization where you activate
Security Command Center, then Security Command Center requires you to enable CMEK
and requires that the CMEK key is located in a specific project.
For information about how organization policies are evaluated across the
Google Cloud resource hierarchy (organizations, folders, and projects), see
Understanding hierarchy evaluation .
For general information about using CMEK organization policies, see
CMEK organization policies .
Set up CMEK for Security Command Center
To use CMEK with Security Command Center, follow these steps:
When you activate Security Command Center for an organization, select
Edit data encryption .
The Edit data encryption settings pane opens.
Select Cloud KMS key .
Select a project.
Select a key. You can select a key from any Google Cloud project,
including projects in other organizations. Only keys in compatible locations
are displayed in the list.
To learn which key locations are compatible with Security Command Center, see
Key location on this page.
Click Done , and continue the Security Command Center activation process.
After you activate Security Command Center for your organization, Security Command Center
encrypts your data using your chosen Cloud KMS key.
Troubleshooting CMEK
The following sections help you resolve issues that might occur with
resource types that support CMEK .
Restore service agent access to keys
With CMEK enabled, the
Cloud Security Command Center Service Agent
must have access to your Cloud KMS key. If this service agent doesn't
have the required IAM role on your key, then
some features of Security Command Center won't work correctly.
To determine whether you have this issue, view the list of
principals that have access to your key .
If the service agent is configured correctly, then the list includes a principal
with the identifier
service-org- ORGANIZATION_NUMBER @security-center-api.iam.gserviceaccount.com
and the Cloud KMS CryptoKey Encrypter/Decrypter role
( roles/cloudkms.cryptoKeyEncrypterDecrypter ).
If you don't see this principal and role, then grant the required role to the
service agent on your key:
gcloud kms keys add-iam-policy-binding KEY_NAME \
--keyring KEY_RING \
--location LOCATION \
--member = serviceAccount:service-org- ORGANIZATION_NUMBER @security-center-api.iam.gserviceaccount.com \
--role = roles/cloudkms.cryptoKeyEncrypterDecrypter
Replace the following:
KEY_RING : the key ring for your
Cloud KMS key
LOCATION : the location of your
Cloud KMS key
KEY_NAME : the name of your Cloud KMS
key
ORGANIZATION_NUMBER : your organization number
Restore keys that are disabled or scheduled for destruction
If a Cloud KMS key or key version is disabled, then you can
enable a key version .
Similarly, if a Cloud KMS key is scheduled for destruction, then you
can restore a key version . After a key is
destroyed, you can't recover it, and you won't have access to Security Command Center
resources that support CMEK .
Resolve errors creating protected resources
If you choose Google-owned and Google-managed encryption keys when you activate
Security Command Center, and then you enforce a CMEK organization policy constraint
within that organization, you won't be able to create new
resources that support CMEK .
If you can't create these resources, then check whether a CMEK organization
policy constraint is enforced for your organization, or for any projects or
folders in that organization. For more information, see
CMEK organization policy constraints on this page.
Quotas and pricing
When you use CMEK in Security Command Center,
your projects can consume Cloud KMS cryptographic requests
quotas.
CMEK-encrypted instances consume quotas when reading
or writing data in Security Command Center.
Encryption and decryption operations using CMEK keys affect Cloud KMS
quotas only if you use hardware (Cloud HSM) or external
(Cloud EKM) keys.
For more information, see
Cloud KMS quotas .
In addition, Cloud KMS charges apply when Security Command Center uses your
CMEK to encrypt or decrypt data. For more information, see
Cloud KMS pricing .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
