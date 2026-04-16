---
title: "Use customer-managed encryption keys (CMEK) \_|\_ Cloud SQL for MySQL \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/sql/docs/mysql/configure-cmek
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/sql/docs/mysql/connect-connectors
source_metadata:
  url: https://docs.cloud.google.com/sql/docs/mysql/configure-cmek
  title: "Use customer-managed encryption keys (CMEK) \_|\_ Cloud SQL for MySQL \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Cloud SQL
MySQL
Guides
Send feedback
Use customer-managed encryption keys (CMEK)
Stay organized with collections
Save and categorize content based on your preferences.
MySQL
| PostgreSQL
| SQL Server
This page describes how to set up a service account and keys for
customer-managed encryption keys, and how to create an instance that uses a
manually-created customer-managed encryption key. To learn more about using
customer-managed encryption keys with Cloud SQL, see Overview of
customer-managed encryption keys .
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
Install the gcloud CLI .
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
Install the gcloud CLI .
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Make sure you have the Cloud SQL Admin role on your user account.
Go to the IAM page
Enable the Cloud Key Management Service API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Enable the Cloud SQL Admin API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Workflow for creating a Cloud SQL instance with CMEK
gcloud and API users only: Create a service account
for each project that requires customer-managed encryption keys.
Create a keyring and key , and set the location for each key. The
location is the Google Cloud region.
gcloud and API users only:
Grant the service account access to the key .
Make a note of the key ID (KMS_KEY_ID), key location (GCP_REGION), and
keyring ID (KMS_KEYRING_ID).
Go to a project and create a Cloud SQL instance
with the following options:
The same location as the customer-managed encryption key
The customer-managed key configuration
The customer-managed encryption key ID
Your Cloud SQL instance is now enabled with CMEK.
Create a service account
You need to create a service account for each project that requires
customer-managed encryption keys.
To allow a user to manage service accounts, grant one of the following roles:
Service Account User ( roles/iam.serviceAccountUser ): Includes permissions
to list service accounts, get details about a service account, and
impersonate a service account.
Service Account Admin ( roles/iam.serviceAccountAdmin ): Includes
permissions to list service accounts and get details about a service
account. Also includes permissions to create, update, and delete service
accounts, and to view or change the Cloud SQL for MySQL policy on a
service account.
Currently, you can only use gcloud CLI commands to create the type of
service account you need for customer-managed encryption keys. If you are using
the Console, Cloud SQL automatically creates this service account for you.
gcloud
gcloud beta services identity create \
--service = sqladmin.googleapis.com \
--project = PROJECT_ID
Terraform
To create a service account, use a Terraform resource .
resource "google_project_service_identity" "gcp_sa_cloud_sql" {
provider = google-beta
service = "sqladmin.googleapis.com"
}
Apply the changes
To apply your Terraform configuration in a Google Cloud project, complete the steps in the
following sections.
Prepare Cloud Shell
Launch Cloud Shell .
Set the default Google Cloud project
where you want to apply your Terraform configurations.
You only need to run this command once per project, and you can run it in any directory.
export GOOGLE_CLOUD_PROJECT= PROJECT_ID
Environment variables are overridden if you set explicit values in the Terraform
configuration file.
Prepare the directory
Each Terraform configuration file must have its own directory (also
called a root module ).
In Cloud Shell , create a directory and a new
file within that directory. The filename must have the
.tf extension—for example main.tf . In this
tutorial, the file is referred to as main.tf .
mkdir DIRECTORY && cd DIRECTORY && touch main.tf
If you are following a tutorial, you can copy the sample code in each section or step.
Copy the sample code into the newly created main.tf .
Optionally, copy the code from GitHub. This is recommended
when the Terraform snippet is part of an end-to-end solution.
Review and modify the sample parameters to apply to your environment.
Save your changes.
Initialize Terraform. You only need to do this once per directory.
terraform init
Optionally, to use the latest Google provider version, include the -upgrade
option:
terraform init -upgrade
Apply the changes
Review the configuration and verify that the resources that Terraform is going to create or
update match your expectations:
terraform plan
Make corrections to the configuration as necessary.
Apply the Terraform configuration by running the following command and entering yes
at the prompt:
terraform apply
Wait until Terraform displays the "Apply complete!" message.
Open your Google Cloud project to view
the results. In the Google Cloud console, navigate to your resources in the UI to make sure
that Terraform has created or updated them.
Note: Terraform samples typically assume that the required APIs are
enabled in your Google Cloud project.
The previous command returns a service account name.
You use this service account name during the procedure in
Granting the service account access to the key .
Create a key
Note: You can use an externally managed key with CMEK using the
Cloud EKM service to
make the key available through Cloud KMS.
You can create the key in the same Google Cloud project as the Cloud SQL
instance or in a separate user project. The Cloud KMS key ring location
must match the region where you want to create Cloud SQL instance. A
multi-region or global region key will not work. The Cloud SQL
instance create request fails if the regions don't match.
Warning: Never delete the primary key version
that you initially use when you create your instance. You can't restore the
backup for the instance if the key version that was originally used when the
instance was created is destroyed. Even when the key version is rotated, the
original key version must be maintained. If it is destroyed, it can't be
re-created.
Note: Sometimes, a Cloud SQL instance enabled with
CMEK has the Cloud KMS key hosted in a different cloud project. For
this scenario, when you enable VPC-SC, you must add the KMS key hosting
project to the security perimeter.
Note: Cloud KMS usage is subject to a
quota . GKE calls the
Cloud KMS API every time it performs a cryptographic operation. Confirm
that you have enough quota to enable application-layer secrets encryption for
your application.
To create a Cloud KMS key:
Console
In the Google Cloud console, go to the Key management page.
Go to Key management
Click Create key ring .
Add a Key ring name . Note this name because you need it
when granting the service account access to the key.
Add a Key ring location .
Click Create . The Create key page opens.
Add a Key name .
For Purpose , select Symmetric encrypt/decrypt .
Select a Rotation period and Starting on date .
Click Create .
On the Keys table, click the three dots in the last column, and
select Copy Resource ID or write it down. This is the
KMS_KEY_ID. You need the KMS_KEY_ID when granting the key access
to the service account.
gcloud
Create a new key ring.
gcloud kms keyrings create KMS_KEYRING_ID \
--location = GCP_REGION
Write down this name because you need it when granting the key access to
the service account.
Create a key on the key ring.
gcloud kms keys create KMS_KEY_ID \
--location = GCP_REGION \
--keyring = KMS_KEYRING_ID \
--purpose = encryption
Write down this name because you need it when granting the key access to
the service account.
Terraform
To create a keyring, use a Terraform resource .
resource "google_kms_key_ring" "keyring" {
provider = google-beta
name = "keyring-name"
location = "us-central1"
}
To create a key, use a Terraform resource .
resource "google_kms_crypto_key" "key" {
provider = google-beta
name = "crypto-key-name"
key_ring = google_kms_key_ring.keyring.id
purpose = "ENCRYPT_DECRYPT"
}
Apply the Terraform configuration:
terraform apply
Grant the service account access to the key
When creating the Cloud SQL instance with CMEK, you only need to perform
this procedure if you are using gcloud or the API. You can perform this
procedure if you run into permission issues after the instance is created.
To grant the service account access:
Console
In the Google Cloud console, go to the Key management page.
Go to Key management
To select the project hosting the key, use the project selector.
Click the name of the key ring.
Click the name of the key.
Click the Permissions tab.
To open the panel, click Grant access .
Enter the service account as the principal and select "Cloud KMS CryptoKey Encrypter/Decrypter" as the role.
Click Save .
Alternatively, you can also grant it in the project IAM page.
GO TO THE PROJECT IAM PAGE
gcloud
gcloud kms keys add-iam-policy-binding KMS_KEY_ID \
--location = GCP_REGION \
--keyring = KMS_KEYRING_ID \
--member = serviceAccount:service- PROJECT_NUMBER @gcp-sa-cloud-sql.iam.gserviceaccount.com \
--role = roles/cloudkms.cryptoKeyEncrypterDecrypter
Terraform
To grant access to the key, use a Terraform resource .
resource "google_kms_crypto_key_iam_binding" "crypto_key" {
provider = google-beta
crypto_key_id = google_kms_crypto_key.key.id
role = "roles/cloudkms.cryptoKeyEncrypterDecrypter"
members = [
"serviceAccount:${google_project_service_identity.gcp_sa_cloud_sql.email}",
]
}
Apply the Terraform configuration:
terraform apply
Create a Cloud SQL instance with CMEK
Note: You can't enable customer-managed encryption keys on existing instances.
To create an instance with customer-managed encryption keys:
Console
In the Google Cloud console, go to the Cloud SQL Instances page.
Go to Cloud SQL Instances
Click Create instance .
Choose the database engine.
Enter a name for the instance. Do not include sensitive or personally
identifiable information in your instance name; it is externally visible.
You do not need to include the project ID in the instance name. This is
created automatically where appropriate (for example, in the log files).
Enter the password for the 'root'@'%' user.
Set the region for your instance.
Place your instance in the same region as the resources that access it. In
most cases, you don't need to specify a zone.
In the Configuration options section, select all your
configurations options until you reach Machine type and storage .
Expand Machine type and storage .
In the Encryption section, select Customer-managed key .
Select the KMS key from the dropdown menu or manually enter the
KMS_KEY_ID. Only KMS keys in the same project and region as the
instance are displayed. The primary key version of the key is used, so if a key version is provided in the key name, then it's trimmed. To choose a KMS key belonging to a different project
but in the same region, select Don't see your key? Enter key resource
ID and enter the KMS_KEY_ID captured earlier.
If the service account does not have permission to encrypt/decrypt with
the selected key, a message displays. If this happens, click Grant to
grant the service account the
roles/cloudkms.cryptoKeyEncrypterDecrypter>
IAM role on the selected KMS key.
Once the configuration options are selected, click Create .
You see a message explaining the implications of using customer-managed
encryption key. Read and acknowledge it to proceed further with instance
creation.
gcloud
gcloud sql instances create INSTANCE_NAME \
--project = PROJECT_ID \
--disk-encryption-key = KMS_KEY_ID \
--database-version = VERSION \
--tier = MACHINE_TYPE \
--region = REGION \
--root-password = INSERT-PASSWORD-HERE
Terraform
To create an instance with CMEK, use a Terraform resource .
resource "google_sql_database_instance" "mysql_instance_with_cmek" {
name = "mysql-instance-cmek"
provider = google-beta
region = "us-central1"
database_version = "MYSQL_8_0"
encryption_key_name = google_kms_crypto_key.key.id
settings {
tier = "db-n1-standard-2"
}
# set `deletion_protection` to true, will ensure that one cannot accidentally delete this instance by
# use of Terraform whereas `deletion_protection_enabled` flag protects this instance at the GCP level.
deletion_protection = false
}
Delete the changes
To delete your changes, do the following:
To disable deletion protection, in your Terraform configuration file set the
deletion_protection argument to false .
deletion_protection = "false"
Apply the updated Terraform configuration by running the following command and
entering yes at the prompt:
terraform apply
Remove resources previously applied with your Terraform configuration by running the following
command and entering yes at the prompt:
terraform destroy
REST v1
To create an instance with customer-managed encryption
keys, pass diskEncryptionConfiguration to the command.
Before using any of the request data,
make the following replacements:
project-id : The project ID
instance-id : The instance ID
region : The region
database-version : Emum version string (for example, MYSQL_8_0)
kms-resource-id : The ID you received from creating a key.
HTTP method and URL:
POST https://sqladmin.googleapis.com/v1/projects/ project-id /instances
Request JSON body:
{
"name":" instance-id ",
"region":" region ",
"databaseVersion": " database-version ",
"diskEncryptionConfiguration" :
{
"kmsKeyName" : " kms-resource-id "
},
"settings":
{
"backupConfiguration":
{
"binaryLogEnabled": true,
"enabled":true
}
}
}
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://sqladmin.googleapis.com/v1/projects/ project-id /instances"
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"kind": "sql#operation",
"targetLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances",
"status": "PENDING",
"user": "user@example.com",
"insertTime": "2020-01-16T02:32:12.281Z",
"operationType": "UPDATE",
"name": " operation-id ",
"targetId": " instance-id ",
"selfLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /operations/ operation-id ",
"targetProject": " project-id "
}
This example uses instances:insert .
REST v1beta4
To create an instance with customer-managed encryption
keys, pass diskEncryptionConfiguration to the command.
Before using any of the request data,
make the following replacements:
project-id : The project ID
instance-id : The instance ID
region : The region
database-version : Emum version string (for example, MYSQL_8_0)
kms-resource-id : The ID you received from creating a key.
HTTP method and URL:
POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances
Request JSON body:
{
"name":" instance-id ",
"region":" region ",
"databaseVersion": " database-version ",
"diskEncryptionConfiguration" :
{
"kmsKeyName" : " kms-resource-id "
},
"settings":
{
"backupConfiguration":
{
"binaryLogEnabled": true,
"enabled":true
}
}
}
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances"
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"kind": "sql#operation",
"targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances",
"status": "PENDING",
"user": "user@example.com",
"insertTime": "2020-01-16T02:32:12.281Z",
"operationType": "UPDATE",
"name": " operation-id ",
"targetId": " instance-id ",
"selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /operations/ operation-id ",
"targetProject": " project-id "
}
This example uses instances:insert .
Create a backup for a CMEK-enabled instance
When you create a backup of a Cloud SQL instance, the backup is encrypted
with the same primary key version as the primary instance's customer-managed
key. If your instance uses a CMEK created by Cloud KMS
Autokey , the backup still uses the same key as the
primary instance; Autokey doesn't create keys for backups.
See
Creating and managing on-demand and automatic backups .
You will see a message on the Create a backup form that says: "Your backup
will be encrypted with the primary version of this instance's customer-managed
encryption key. If anyone destroys or disables this key version, all backup data
encrypted using that key version will be permanently lost. You can check the
primary version for the key in Cloud KMS."
On the backups page, the list of backups enabled with customer-managed
encryption keys have two extra columns. One column that shows that the backup is
for a CMEK-enabled instance, and a column that displays the key version used to
encrypt the backup.
Create a replica for a CMEK-enabled instance
When you create a read replica of a Cloud SQL instance in the same region,
it inherits the same customer-managed encryption key as the parent instance. If
you create a read replica in a different region, you are given a new list of
customer-managed encryption keys to select from. Each region uses its own set of
keys.
See Creating read replicas .
On the Create read replica page, you see the following information:
The Encryption shows customer-managed .
The Encryption key for the replica is displayed.
There is a message saying "Your replica will be encrypted with the primary
instance's customer-managed key. If anyone destroys this key, all data
encrypted with it will be permanently lost."
For a cross-region replica, you see the following message:
"Your cross-region replica will be encrypted with the selected customer-managed
key. If anyone destroys this key, all data encrypted with it will be permanently
lost."
Create a clone of a CMEK-enabled instance
When you create a clone of Cloud SQL instance, it inherits the same
customer-managed encryption key as the one used to encrypt the source instance.
See Cloning instances .
On the Create clone page, you see the following information:
The Encryption shows customer-managed .
The Encryption key for the clone is displayed.
There is a message saying "Your clone will be encrypted with the source
instance's customer-managed key. If anyone destroys this key, all data
encrypted with it will be permanently lost."
View key information for a CMEK-enabled instance
Once you successfully create a Cloud SQL instance, you can look at the
instance list or the instance overview page to see that it was created using a
customer-managed encryption key. The details also show the key that was used to
create the instance.
In the Google Cloud console, go to the Cloud SQL Instances page.
Go to Cloud SQL Instances
In the Instances list, scroll to the right until you see the Encryption
column. In this column, you see Google-managed and Customer-managed .
Click an instance name to open its Overview page. The customer-managed
encryption key is listed in the Configuration pane.
Re-encrypt an existing CMEK-enabled instance or replica
You can re-encrypt your existing Cloud SQL instances and replicas
with the latest primary key version. For more information about
re-encrypting your existing CMEK-enabled instance or replica, see
About keys .
Note: Until re-encryption is completed, don't disable or destroy the existing
key versions.
Obtain the new primary key version
To re-encrypt your instance or replica with a new version, you'll need the new primary key version.
If you need a new key version for your instances, you'll need to rotate your key
using Cloud Key Management Service. To rotate your primary key,
see Rotate a key .
After your key rotation is complete, wait for the primary key change to be propagated
before you re-encrypt your instances. If your key version change isn't
consistent, your instance will continue to use the old key version
after re-encryption. For more information, see
Consistency of key versions .
Re-encrypt your CMEK-enabled instance
After key rotation is complete, re-encrypt your existing CMEK-enabled
instance or replica.
Note: If your new key version isn't consistent across Cloud SQL,
the instance continues using the old key version after re-encryption.
Console
In the Google Cloud console, go to the Cloud SQL Instances page.
Go to Cloud SQL Instances
To open the Overview page of an instance, click the instance name.
In the Configuration section, click Re-encrypt instance .
In the dialog that appears, confirm your selection by
clicking Re-encrypt .
gcloud
To re-encrypt the instance or replica, run the following command:
gcloud sql instances reencrypt INSTANCE_NAME
Replace INSTANCE_NAME with name of the instance or replica
you are re-encrypting.
REST v1
To re-encrypt your instance or replica with your new key, run
the following command:
POST https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /instances/ INSTANCE_ID /reencrypt
Before using any of the request data,
make the following replacements:
PROJECT_ID : The project ID
INSTANCE_ID : The instance ID
HTTP method and URL:
POST https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /instances/ INSTANCE_ID /reencrypt
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d "" \ "https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /instances/ INSTANCE_ID /reencrypt"
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /instances/ INSTANCE_ID /reencrypt" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"kind": "sql#operation",
"targetLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id ",
"status": "PENDING",
"user": "user@example.com",
"insertTime": "2023-06-28T21:19:09.503Z",
"operationType": "REENCRYPT",
"name": " operation-id ",
"targetId": " instance-id ",
"selfLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /operations/ operation-id ",
"targetProject": " project-id "
}
REST v1beta4
To re-encrypt your instance or replica with your new key, run the following
command:
POST https://sqladmin.googleapis.com/v1beta4/projects/ PROJECT_ID /instances/ INSTANCE_ID /reencrypt
Before using any of the request data,
make the following replacements:
PROJECT_ID : The project ID
INSTANCE_ID : The instance ID
HTTP method and URL:
POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT_ID /instances/ INSTANCE_ID /reencrypt
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d "" \ "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT_ID /instances/ INSTANCE_ID /reencrypt"
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT_ID /instances/ INSTANCE_ID /reencrypt" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"kind": "sql#operation",
"targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id ",
"status": "PENDING",
"user": "user@example.com",
"insertTime": "2023-06-28T21:22:13.663Z",
"operationType": "REENCRYPT",
"name": " operation-id ",
"targetId": " instance-id ",
"selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /operations/ operation-id ",
"targetProject": " project-id "
}
Automatic re-encryption backups
When you re-encrypt a primary instance with a new primary key version,
Cloud SQL automatically creates an on-demand backup called
the re-encryption backup.
In your list of backups for
your Cloud SQL instance, the re-encryption backup is listed as type on-demand
and labeled with backup created automatically for data before CMEK re-encryption .
As with other on-demand backups, re-encryption backups persist until you delete them or delete the instance.
Re-encryption limitations
When you re-encrypt an instance, keep note of the following limitations:
You can't perform any other admin operations on the instance while the
re-encryption operation is going on.
The re-encryption operation triggers a downtime that depends on the instance or replica size.
Replicas of an instance aren't re-encrypted when an instance is en-encrypted. You
need to re-encrypt each replica separately.
Backups aren't automatically re-encrypted with the new key version when you re-encrypt your instance.
To restore the backup or point-in-time-recovery to a time after the backup is taken,
you'll need to keep the Cloud KMS key version the backup is encrypted with.
Backups created after the Cloud KMS key that the instance is encrypted with is rotated will use the primary key version of that key automatically,
even if the instance isn't encrypted with this key version.
For troubleshooting, see the
Re-encryption troubleshooting table .
Use Cloud External Key Manager (Cloud EKM)
To protect data in Cloud SQL instances, you can use keys that you manage
within a supported external key management partner. For more information, see
Cloud External Key Manager , including the
Considerations section.
When you are ready to create a Cloud EKM key, see
Managing Cloud EKM keys . After a key is
created, provide the key name when you create a Cloud SQL instance.
You can use Key Access Justifications (KAJ) as part of Cloud EKM. KAJ enables
you to view the reason for each Cloud EKM request. Additionally, based on the
justification provided, you can automatically approve or deny a request. To
learn more, see the
Overview .
Thus, KAJ provides extra control over your data by providing a justification for
each attempt to decrypt the data.
Google lacks control over the availability of keys in an external key
management partner system.
Warning: If an external key is deleted or cannot
be recovered, any Cloud SQL instances encrypted with that key become permanently
inaccessible.
Disable and re-enable key versions
See the following topics:
Disable an enabled key version
Enable a disabled key version
Troubleshoot
This section describes things to try when you get an error message while setting
up or using CMEK-enabled instances.
Cloud SQL administrator operations, such as create, clone, or update, might fail due to
Cloud KMS errors, and missing roles or permissions. Common reasons for failure include a
missing Cloud KMS key version, a disabled or destroyed Cloud KMS key version,
insufficient IAM permissions to access the Cloud KMS key version, or the
Cloud KMS key version is in a different region than the Cloud SQL instance. Use the
following troubleshooting table to diagnose and resolve common problems.
Customer-managed encryption keys troubleshooting table
For this error...
The issue might be...
Try this...
Per-product, per-project service account not found
The service account name is incorrect.
Make sure you created a service account for the correct user project.
GO TO THE SERVICE ACCOUNTS PAGE .
Cannot grant access to the service account
The user account does not have permission to grant access to this key version.
Add the Organization Administrator role to your user or service account.
GO TO THE IAM ACCOUNTS PAGE
Cloud KMS key version is destroyed
The key version is destroyed.
If the key version is destroyed, you cannot use it to encrypt or decrypt data.
Cloud KMS key version is disabled
The key version is disabled.
Re-enable the Cloud KMS key version.
GO TO THE CRYPTO KEYS PAGE
Insufficient permission to use the Cloud KMS key
The cloudkms.cryptoKeyEncrypterDecrypter role is missing on the user or
service account you are using to run operations on Cloud SQL instances, or the
Cloud KMS key version doesn't exist.
In the Google Cloud project that hosts the key, add the
cloudkms.cryptoKeyEncrypterDecrypter role to your user or service account.
GO TO THE IAM ACCOUNTS PAGE
If the role is already granted to your account, see
Creating a key to learn how to create a
new key version. See note.
Cloud KMS key is not found
The key version does not exist.
Create a new key version. See Creating a key .
See note.
EKM key is unreachable
The External Key Manager (EKM) key is unreachable for several hours. Even after multiple
retries, the EKM key remains unreachable.
Verify EKM connection status and troubleshoot the issue with your EKM provider.
GO TO THE CRYPTO KEYS PAGE
Cloud SQL instance and Cloud KMS key version are in different regions
The Cloud KMS key version and Cloud SQL instance must be in the same region. It
does not work if the Cloud KMS key version is in a global region or multi-region.
Create a key version in the same region where you want to create instances. See
Creating a key . See note.
Cloud KMS key version is restored but the instance is still suspended a few minutes
later.
The internal validation process for the instance can take up to 10 minutes
before the instance becomes available again.
Wait for 10 minutes for the instance to become available.
Cloud KMS key version is restored but the instance is still suspended
more than 10 minutes later.
The key version is disabled or doesn't grant proper permissions.
Re-enable the key version, and grant the cloudkms.cryptoKeyEncrypterDecrypter role
to your user or service account in the Google Cloud project that hosts the key.
Note: If the instance is in a failed state during the create
operation, you must delete it, add the role to the account you are using, and create a new
instance with an active Cloud KMS key version.
Re-encryption troubleshooting table
For this error...
The issue might be...
Try this...
CMEK resource re-encryption failed because the Cloud KMS key is inaccessible.
Please ensure that the primary key version is enabled and the permission is granted properly.
The key version is disabled or doesn't grant proper permissions.
Re-enable the Cloud KMS key version:
GO TO THE CRYPTO KEYS PAGE
In the Google Cloud project that hosts the key, confirm the
cloudkms.cryptoKeyEncrypterDecrypter role is granted to your user or service
account:
GO TO THE IAM ACCOUNTS PAGE
CMEK resource re-encryption failed due to server internal error. Please retry later
There is a server internal error.
Retry re-encryption. For more information,
see Re-encrypt an existing CMEK-enabled instance or replica
What's next
Configure access to the instance .
Connect to the instance with a client .
Create a database on the instance .
Import data into the instance .
Create users on the instance .
Learn more about instance settings .
Learn how to add key access justifications to your keys.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
