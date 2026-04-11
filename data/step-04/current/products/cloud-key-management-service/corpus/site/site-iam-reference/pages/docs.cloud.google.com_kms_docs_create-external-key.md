---
title: "Create an external key \_|\_ Cloud Key Management Service \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/kms/docs/create-external-key
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/iam
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/create-external-key
  title: "Create an external key \_|\_ Cloud Key Management Service \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Cloud KMS
Guides
Send feedback
Create an external key
Stay organized with collections
Save and categorize content based on your preferences.
This page shows you how to create Cloud External Key Manager (Cloud EKM) keys on an existing
key ring in Cloud Key Management Service (Cloud KMS).
Before you begin
Before completing the tasks on this page, you need the following:
A Google Cloud project resource to contain your
Cloud KMS resources. We recommend using a separate project for your
Cloud KMS resources that does not contain any other
Google Cloud resources.
Make a note of your project's Cloud EKM service account. In the
following example, replace PROJECT_NUMBER with your
Google Cloud project's
project number . This information is also visible each time you use the
Google Cloud console to create a Cloud EKM key.
service- PROJECT_NUMBER @gcp-sa-ekms.iam.gserviceaccount.com
The name and location of the key ring where you want to create your key.
Choose a key ring in a location that is near your other resources and that
supports Cloud EKM.
To view available locations and the protection levels that they support, see
Cloud KMS locations .
To create a key ring, see Create a key
ring .
To create manually managed external keys, you must create the key in the
external key management partner system. The exact steps vary by
external key management partner.
If necessary, request access from your external key management partner to
participate.
Create a symmetric or asymmetric key in the external key management partner system or
select an existing key.
Create the key in a region near the Google Cloud region you
plan to use for Cloud EKM keys. This helps reduce the network
latency between your Google Cloud project and the external key management partner.
Otherwise, you may experience an increased number of failed operations.
For more information, see
Cloud EKM and regions .
Make a note of the external key's URI or key path. You need this
information to create a Cloud EKM key.
In the external key management partner system, grant the Google Cloud
service account access to use your external keys. Treat the service account
as an email address. EKM partners might use different terminology than that
used in this document.
To create EKM over VPC keys, you need to
create an EKM connection .
Optional: To use the gcloud CLI, prepare your environment.
In the Google Cloud console, activate Cloud Shell.
Activate Cloud Shell
Required roles
To get the permissions that
you need to create keys,
ask your administrator to grant you the
Cloud KMS Admin ( roles/cloudkms.admin )
IAM role on the project or a parent resource.
For more information about granting roles, see Manage access to projects, folders, and organizations .
This predefined role contains
the permissions required to create keys. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to create keys:
cloudkms.cryptoKeys.create
cloudkms.cryptoKeys.get
cloudkms.cryptoKeys.list
cloudkms.cryptoKeyVersions.create
cloudkms.cryptoKeyVersions.get
cloudkms.cryptoKeyVersions.list
cloudkms.keyRings.get
cloudkms.keyRings.list
cloudkms.locations.get
cloudkms.locations.list
resourcemanager.projects.get
To retrieve a public key:
cloudkms.cryptoKeyVersions.viewPublicKey
You might also be able to get
these permissions
with custom roles or
other predefined roles .
Caution: The Cloud KMS Admin
role contains permissions for key
maintenance and key version destruction. To protect your Cloud KMS
resources, this role should only be assigned to individuals responsible for key
administration.
Create a coordinated external key
Console
In the Google Cloud console, go to the
Key Management page.
Go to Key Management
Click the name of the key ring for which you will create a key.
Click Create key .
For Key name , enter a name for your key.
For Protection level , select External .
For External key manager (EKM) connection type , select via VPC .
For EKM via VPC connection , select a connection.
If you do not have the EkmConnection.list permission, you must
manually enter the connection resource name.
Click Continue .
In the Key material section, you should see a message about new key
material being requested by Cloud KMS and generated in your EKM.
If you see the Key path field, the EKM via VPC connection that you
selected isn't configured for coordinated external keys.
Configure the rest of the key settings as needed, and then click Create .
Cloud EKM sends a request to your EKM to create a new key. The key
shows as Pending generation until the key path is returned by your EKM
and the Cloud EKM key is available.
gcloud
To use Cloud KMS on the command line, first
Install or upgrade to the latest version of Google Cloud CLI .
gcloud kms keys create KEY_NAME \
--keyring KEY_RING \
--location LOCATION \
--purpose PURPOSE \
--default-algorithm ALGORITHM \
--protection-level "external-vpc" \
--crypto-key-backend VPC_CONNECTION_RESOURCE_ID
Replace the following:
KEY_NAME : the name of the key.
KEY_RING : the name of the key ring that contains the key.
LOCATION : the Cloud KMS location of the key ring.
PURPOSE : the
purpose
of the key.
ALGORITHM : the algorithm to use for the key, for example
google-symmetric-encryption . For a list of supported algorithms,
see Algorithms .
VPC_CONNECTION_RESOURCE_ID : the resource ID of the EKM
connection.
For information on all flags and possible values, run the command with the
--help flag.
Create a manually managed Cloud EKM via VPC key
Console
In the Google Cloud console, go to the
Key Management page.
Go to Key Management
Click the name of the key ring for which you will create a key.
Click Create key .
For Key name , enter a name for your key.
For Protection level , select External .
For External key manager (EKM) connection type , select via VPC .
For EKM via VPC connection , select a connection.
Note, if you do not have the EkmConnection.list permission, you must
manually enter the connection resource name.
Click Continue .
In the Key path field, enter the path to your external key.
Configure the rest of the key settings as needed, and then click Create .
gcloud
To use Cloud KMS on the command line, first
Install or upgrade to the latest version of Google Cloud CLI .
gcloud kms keys create KEY_NAME \
--keyring KEY_RING \
--location LOCATION \
--purpose PURPOSE \
--default-algorithm ALGORITHM \
--protection-level "external-vpc" \
--skip-initial-version-creation \
--crypto-key-backend VPC_CONNECTION_RESOURCE_ID
Replace the following:
KEY_NAME : the name of the key.
KEY_RING
LOCATION : the Cloud KMS location of the key ring.
PURPOSE : the
purpose
of the key.
ALGORITHM : the algorithm to use for the key, for example
google-symmetric-encryption . For a list of supported algorithms,
see Algorithms .
VPC_CONNECTION_RESOURCE_ID : the resource ID of the EKM
connection.
For information on all flags and possible values, run the command with the
--help flag.
Create a manually managed Cloud EKM via internet key
Console
In the Google Cloud console, go to the
Key Management page.
Go to Key Management
Click the name of the key ring for which you will create a key.
Click Create key .
For Key name , enter a name for your key.
For Protection level , select External .
For External key manager (EKM) connection type , select via internet .
Click Continue .
In the Key URI field, enter the path to your external key.
Configure the rest of the key settings as needed, and then click Create .
Note: If you enter the URI incorrectly, or the key is not found at that
URI, the key is created but has no version. If this happens, click
Rotate Key to create a new version, and enter the correct URI. You can
find more details about the error in the Activity tab of the
Show info panel , or in the
[Admin Activity audit logs][audit_logging] (enabled by default).
gcloud
To use Cloud KMS on the command line, first
Install or upgrade to the latest version of Google Cloud CLI .
Create an empty external key:
gcloud kms keys create KEY_NAME \
--keyring KEY_RING \
--location LOCATION \
--purpose PURPOSE \
--protection-level external \
--skip-initial-version-creation \
--default-algorithm ALGORITHM
Replace the following:
KEY_NAME : the name of the key.
KEY_RING : the name of the key ring that contains the key.
LOCATION : the Cloud KMS location of the key ring.
PURPOSE : the
purpose
of the key.
ALGORITHM : the algorithm to use for the key, for example
google-symmetric-encryption . For a list of supported algorithms,
see Algorithms .
For information on all flags and possible values, run the command with the
--help flag.
Create a new key version for the key you just created:
gcloud kms keys versions create \
--key KEY_NAME \
--keyring KEY_RING \
--location LOCATION \
--external-key-uri EXTERNAL_KEY_URI
Replace EXTERNAL_KEY_URI with the URI of the external key.
For symmetric key versions, add the --primary flag to set the new key
version as the primary version.
Note: The version is not created if the key URI is invalid or unreachable,
or if the Google Cloud service account does not have permission to
use the external key management partner key. If an error occurs, correct the problem and
run the command again.
What's next
Update an external key path without rotating the
key .
Rotate an external key .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
