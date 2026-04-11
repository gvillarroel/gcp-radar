---
title: "Use customer-managed encryption keys (CMEK) \_|\_ Colab Enterprise \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/colab/docs/cmek
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/colab/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/colab/docs/cmek
  title: "Use customer-managed encryption keys (CMEK) \_|\_ Colab Enterprise \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Colab Enterprise
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Use customer-managed encryption keys (CMEK)
By default, Colab Enterprise encrypts customer content at
rest. Colab Enterprise handles encryption for you without any
additional actions on your part. This option is called Google default encryption .
If you want to control your encryption keys, then you can use customer-managed encryption keys
(CMEKs) in Cloud KMS with CMEK-integrated services including
Colab Enterprise. Using Cloud KMS keys gives you control over their protection
level, location, rotation schedule, usage and access permissions, and cryptographic boundaries.
Using Cloud KMS also lets
you view audit logs and control key lifecycles.
Instead of Google owning and managing the symmetric
key encryption keys (KEKs) that protect your data, you control and
manage these keys in Cloud KMS.
After you set up your resources with CMEKs, the experience of accessing your
Colab Enterprise resources is similar to using Google default encryption.
For more information about your encryption
options, see Customer-managed encryption keys (CMEK) .
This guide describes how to use CMEK for Colab Enterprise.
For more information about how to use CMEK for Vertex AI, see the
Vertex AI CMEK page .
CMEK for Colab Enterprise
You can use CMEK to encrypt Colab Enterprise runtimes and
notebook files (notebooks).
Runtimes
When you run code in a Colab Enterprise notebook, a runtime runs
the code on one or more virtual machine (VM) instances managed by
Colab Enterprise. When you enable
CMEK for your Colab Enterprise runtimes, the key that you designate,
rather than a key managed by Google, is used to encrypt data on these VMs.
The CMEK key encrypts the following kinds of data:
The copy of your code on the VMs.
Any data that gets loaded by your code.
Any temporary data that gets saved to the local disk by your code.
You can start, stop, and upgrade your runtime without affecting its
CMEK encryption.
In general, the CMEK key does not encrypt metadata associated with your
operation, like the runtime's name or your notebook's name and region.
This metadata is always encrypted using Google's default encryption mechanism.
Notebooks
Colab Enterprise notebooks are stored in Dataform
repositories. When you create a notebook, Colab Enterprise
automatically creates a hidden Dataform repository
where the notebook is stored. Because the repository is hidden,
you can't modify its encryption settings as you would with other
Dataform repositories.
To use CMEK for your notebooks, you must set a default Dataform
CMEK key for the Google Cloud project that will contain your notebooks.
After you set a default Dataform CMEK key,
Dataform applies the key to all new repositories created
in the Google Cloud project by default, including any hidden repositories
created for storing your notebooks.
The default Dataform CMEK key isn't applied to existing
repositories. Therefore, if you already have notebooks in that project,
they won't be encrypted by the default Dataform CMEK key.
To use CMEK with a notebook that was created before you set your project's
default Dataform CMEK key, you can save the notebook file
as a new Colab Enterprise notebook.
To learn more about default Dataform CMEK keys, see Use
Dataform default CMEK keys .
To use CMEK for your notebooks, see Set a default
Dataform CMEK key .
Supported keys
Colab Enterprise supports the following types of CMEK keys:
Cloud KMS software keys
Cloud Hardware Security Module (HSM) keys
Key availability varies by key type and region.
For more information about the geographical availability of CMEK keys,
see Cloud KMS locations .
Restrictions and limitations
Colab Enterprise supports CMEK with the following restrictions
and limitations:
The default quota in Vertex AI is one encryption key
per project and region. If you need to register more than one key for
a region in your project, contact your Google account team to request
a quota increase for CMEK configurations, providing a justification
for why you need more than one key.
Cloud KMS quotas and Colab Enterprise
When you use CMEK in Colab Enterprise,
your projects can consume Cloud KMS cryptographic requests
quotas.
Encryption and decryption operations using CMEK keys affect Cloud KMS
quotas only if you use hardware (Cloud HSM) or external
(Cloud EKM) keys.
For more information, see
Cloud KMS quotas .
Configure CMEK for your runtimes
The following sections describe how to create a key ring and key
in Cloud Key Management Service, grant Colab Enterprise encrypter and decrypter
permissions for your key, and create a runtime template configures to
use CMEK. Any runtime that Colab Enterprise generates from this
runtime template uses CMEK encryption.
Before you begin
This guide assumes that you use two separate Google Cloud projects to
configure CMEK for Colab Enterprise runtimes:
A project for managing your encryption key (referred to as the
"Cloud KMS project").
A project for accessing your Colab Enterprise resources and
interacting with any other Google Cloud products that you need
(referred to as the "Notebook project").
This recommended setup supports a separation of
duties .
Alternatively, you can use a single Google Cloud project for the whole
guide. To do so, use the same project for all of the following tasks that refer
to the Cloud KMS project and the tasks that refer to the
Notebook project.
Set up the Cloud KMS project
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
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Cloud KMS API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
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
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Cloud KMS API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Set up the Notebook project
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
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Vertex AI API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
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
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Vertex AI API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Set up the Google Cloud CLI
The gcloud CLI is required for some steps in this guide and optional
for others.
Install the Google Cloud CLI.
After installation,
initialize the Google Cloud CLI by running the following command:
gcloud init
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
Note: You can run the gcloud CLI in
the Google Cloud console without installing the Google Cloud CLI. To run the
gcloud CLI in the Google Cloud console,
use
Cloud Shell .
Create a key ring and key
Follow the Cloud KMS guide to creating symmetric
keys to create a key ring and a key. When you create
your key ring, specify a region that supports
Colab Enterprise operations as
the key ring's location . Colab Enterprise only
supports CMEK when your runtime and key use the same region. You must not
specify a dual-regional, multi-regional, or global location for your key ring.
Make sure to create your key ring and key in your Cloud KMS project.
Grant Colab Enterprise permissions
To use CMEK for your resources, you must grant Colab Enterprise
permission to encrypt and decrypt data using your key.
Colab Enterprise uses a Google-managed
service agent to run
operations using your resources. This service account is identified by an email
address with the following format:
service- PROJECT_NUMBER @gcp-sa-aiplatform.iam.gserviceaccount.com .
To find the appropriate service account for your
Notebook project, go to the IAM page in the
Google Cloud console and find the member that matches this
email address format, with the project
number for
your Notebook project replacing the
NOTEBOOK_PROJECT_NUMBER variable. The service account also has the
name Vertex AI Service Agent .
Go to the IAM
page
Make note of the email address for this service account, and use it in the
following steps to grant it permission to encrypt and decrypt data using your
key. You can grant permission by using the Google Cloud console or
by using the Google Cloud CLI:
Google Cloud console
In the Google Cloud console, Click Security and select
Key Management . This will take you to Cryptographic Keys page and
select your Cloud KMS project.
Go to the Cryptographic Keys
page
Click on the name of the key ring that you created in a preceding
section of this guide to go to the
Key ring details page.
Select the checkbox for the key that you created in a preceding
section of this guide . If an info panel
labeled with the name of your key is not already open,
click Show info panel .
In the info panel, click person_add Add member to open the
Add members to " KEY_NAME " dialog. In this dialog,
do the following:
In the New members box, enter the service account email address
that you made a note of in the preceding section:
service- NOTEBOOK_PROJECT_NUMBER @gcp-sa-aiplatform.iam.gserviceaccount.com
In the Select a role drop-down list, click Cloud KMS
and then select the Cloud KMS
CryptoKey Encrypter/Decrypter role.
Click Save .
gcloud
Run the following command:
gcloud kms keys add-iam-policy-binding KEY_NAME \
--keyring = KEY_RING_NAME \
--location = REGION \
--project = KMS_PROJECT_ID \
--member = serviceAccount:service- NOTEBOOK_PROJECT_NUMBER @gcp-sa-aiplatform.iam.gserviceaccount.com \
--role = roles/cloudkms.cryptoKeyEncrypterDecrypter
In this command, replace the following placeholders:
KEY_NAME : The name of the key that you created in a preceding
section of this guide .
KEY_RING_NAME : The key ring that you created in a preceding
section of this guide .
REGION : The region where you created your key ring.
KMS_PROJECT_ID : The ID of your Cloud KMS project.
NOTEBOOK_PROJECT_NUMBER : The project number of your
Notebook project, which you noted in the preceding section
as part of a service account email address.
Configure a runtime template with the KMS key
When you create a new CMEK-supported resource you can specify
your key as one of the create parameters. To create a Colab Enterprise
runtime, you create a runtime template with your CMEK key specified as a
parameter. Any runtime that Colab Enterprise generates from this
runtime template uses CMEK encryption.
To create a runtime template by using the Google Cloud console,
you specify the key in the Create new runtime template dialog.
Do the following:
In the Google Cloud console, go to
the Colab Enterprise Runtime templates page.
Go to Runtime templates
Click add_box New
template .
The Create new runtime template dialog appears.
In the Configure compute section, in
Encryption , select Cloud KMS key .
For Key type , select Cloud KMS ,
and then, in the next field, select your customer-managed encryption key.
Complete the rest of the instance creation dialog,
and then click Create .
Your runtime template appears in the list on
the Runtime templates tab.
What's next
To use CMEK for your notebooks, see Set a default
Dataform CMEK key .
Learn more about CMEK on Google Cloud .
Learn how to use CMEK with other Google Cloud
products .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
