---
title: "Encrypt Cloud Speech-to-Text resources \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/speech-to-text/docs/set-up-encryption
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/speech-to-text/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/speech-to-text/docs/set-up-encryption
  title: "Encrypt Cloud Speech-to-Text resources \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Cloud Speech-to-Text
Send feedback
Encrypt Cloud Speech-to-Text resources
Stay organized with collections
Save and categorize content based on your preferences.
This page demonstrates how to set an encryption key in Cloud Speech-to-Text to
encrypt Speech-to-Text resources.
Speech-to-Text lets you provide Cloud Key Management Service
encryption keys and encrypts data with the provided key. To learn more about
encryption, see Introduction to encryption .
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Speech-to-Text APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Make sure that you have the following role or roles on the project:
Cloud Speech Administrator
Check for the roles
In the Google Cloud console, go to the IAM page.
Go to IAM
Select the project.
In the Principal column, find all rows that identify you or a group that
you're included in. To learn which groups you're included in, contact your
administrator.
For all rows that specify or include you, check the Role column to see whether
the list of roles includes the required roles.
Grant the roles
In the Google Cloud console, go to the IAM page.
Go to IAM
Select the project.
Click person_add Grant access .
In the New principals field, enter your user identifier.
This is typically the email address for a Google Account.
Click Select a role , then search for the role.
To grant additional roles, click add Add
another role and add each additional role.
Click Save .
Install the Google Cloud CLI.
Note: If you installed the gcloud CLI previously, make sure you have
the latest version by running gcloud components update .
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Speech-to-Text APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Make sure that you have the following role or roles on the project:
Cloud Speech Administrator
Check for the roles
In the Google Cloud console, go to the IAM page.
Go to IAM
Select the project.
In the Principal column, find all rows that identify you or a group that
you're included in. To learn which groups you're included in, contact your
administrator.
For all rows that specify or include you, check the Role column to see whether
the list of roles includes the required roles.
Grant the roles
In the Google Cloud console, go to the IAM page.
Go to IAM
Select the project.
Click person_add Grant access .
In the New principals field, enter your user identifier.
This is typically the email address for a Google Account.
Click Select a role , then search for the role.
To grant additional roles, click add Add
another role and add each additional role.
Click Save .
Install the Google Cloud CLI.
Note: If you installed the gcloud CLI previously, make sure you have
the latest version by running gcloud components update .
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Client libraries can use
Application Default Credentials
to easily authenticate with Google APIs and send requests to those APIs. With
Application Default Credentials, you can test your application locally and
deploy it without changing the underlying code. For more information, see
Authenticate for using client libraries .
If you're using a local shell, then create local authentication credentials for your user
account:
gcloud auth application-default login
You don't need to do this if you're using Cloud Shell.
If an authentication error is returned, and you are using an external identity provider
(IdP), confirm that you have
signed in to the gcloud CLI with your federated identity .
Also ensure you have installed the client library .
Enable access to Cloud Key Management Service keys
Cloud Speech-to-Text uses a service account to access your Cloud KMS keys.
By default, the service account has no access to Cloud KMS keys.
The service account email address is the following:
service- PROJECT_NUMBER @gcp-sa-speech.iam.gserviceaccount.com
To encrypt Speech-to-Text resources using Cloud KMS
keys, you can give this service account the
roles/cloudkms.cryptoKeyEncrypterDecrypter role:
gcloud projects add-iam-policy-binding PROJECT_NUMBER \
--member = serviceAccount:service- PROJECT_NUMBER @gcp-sa-speech.iam.gserviceaccount.com \
--role = roles/cloudkms.cryptoKeyEncrypterDecrypter
More information about project Identity and Access Management (IAM) policy is available at
Manage access to projects, folders, and organizations .
More information about managing access to Cloud Storage is available at
Create and Manage access control lists in the
Cloud Storage documentation.
Specify an encryption key
Here is an example of providing an encryption key to Cloud Speech-to-Text using the
Config resource:
Python
import os
from google.cloud.speech_v2 import SpeechClient
from google.cloud.speech_v2.types import cloud_speech
PROJECT_ID = os . getenv ( "GOOGLE_CLOUD_PROJECT" )
def enable_cmek (
kms_key_name : str ,
) - > cloud_speech . Config :
"""Enable Customer-Managed Encryption Keys (CMEK) in a project and region.
Args:
kms_key_name (str): The full resource name of the KMS key to be used for encryption.
E.g,: projects/{PROJECT_ID}/locations/{LOCATION}/keyRings/{KEY_RING}/cryptoKeys/{KEY_NAME}
Returns:
cloud_speech.Config: The response from the update configuration request,
containing the updated configuration details.
"""
# Instantiates a client
client = SpeechClient ()
request = cloud_speech . UpdateConfigRequest (
config = cloud_speech . Config (
name = f "projects/ { PROJECT_ID } /locations/global/config" ,
kms_key_name = kms_key_name ,
),
update_mask = { "paths" : [ "kms_key_name" ]},
)
# Updates the KMS key for the project and region.
response = client . update_config ( request = request )
print ( f "Updated KMS key: { response . kms_key_name } " )
return response
When an encryption key is specified in the Config resource of your project,
any new resources created in the corresponding location are encrypted using this
key. See Introduction to encryption page for more information on what is
encrypted and when.
Encrypted resources have the kms_key_name and kms_key_version_name fields
populated in Speech-to-Text API responses.
Remove encryption
To prevent future resources from being encrypted with an encryption key, use the
code above and provide the empty string ( "" ) as the key in the request. This
ensures that new resources aren't encrypted. This command doesn't decrypt
existing resources.
Key rotation and deletion
On key rotation, resources that are encrypted with a previous version of the
Cloud KMS key remain encrypted with that version. Any resources created
after the key rotation are encrypted with the new default version of the key.
Any resources updated (using Update* methods) after the key rotation are
re-encrypted with the new default version of the key.
On key deletion, Speech-to-Text can't decrypt your data and can't create
resources or access resources encrypted with the deleted key. Likewise, when you
revoke Speech-to-Text
permission for a key, Speech-to-Text can't decrypt your data and can't
create resources or access resources encrypted with the Speech-to-Text
permission-revoked key.
Re-encrypt data
To re-encrypt your resources, you can call the corresponding Update* method
for each resource after updating the key specification in the Config resource.
Clean up
To avoid incurring charges to your Google Cloud account for the resources used on this page, follow these steps.
Optional: Revoke the authentication credentials that you created, and delete the local
credential file.
gcloud auth application-default revoke
Optional: Revoke credentials from the gcloud CLI.
gcloud auth revoke
Console
Caution : Deleting a project has the following effects:
Everything in the project is deleted. If you used an existing project for
the tasks in this document, when you delete it, you also delete any other work you've
done in the project.
Custom project IDs are lost.
When you created this project, you might have created a custom project ID that you want to use in
the future. To preserve the URLs that use the project ID, such as an appspot.com
URL, delete selected resources inside the project instead of deleting the whole project.
If you plan to explore multiple architectures, tutorials, or quickstarts, reusing projects
can help you avoid exceeding project quota limits.
In the Google Cloud console, go to the Manage resources page.
Go to Manage resources
In the project list, select the project that you
want to delete, and then click Delete .
In the dialog, type the project ID, and then click
Shut down to delete the project.
gcloud
Caution : Deleting a project has the following effects:
Everything in the project is deleted. If you used an existing project for
the tasks in this document, when you delete it, you also delete any other work you've
done in the project.
Custom project IDs are lost.
When you created this project, you might have created a custom project ID that you want to use in
the future. To preserve the URLs that use the project ID, such as an appspot.com
URL, delete selected resources inside the project instead of deleting the whole project.
If you plan to explore multiple architectures, tutorials, or quickstarts, reusing projects
can help you avoid exceeding project quota limits.
Delete a Google Cloud project:
gcloud projects delete PROJECT_ID
What's next
Learn more about what is encrypted when specifying encryption keys in Speech-to-Text
Learn how to transcribe streaming audio .
Learn how to transcribe long audio files .
Learn how to transcribe short audio files .
For best performance, accuracy, and other tips, see the best practices documentation.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
