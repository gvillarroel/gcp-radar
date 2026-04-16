---
title: "Enable Cloud KMS Autokey \_|\_ Cloud Key Management Service \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/kms/docs/enable-autokey
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/enable-autokey
  title: "Enable Cloud KMS Autokey \_|\_ Cloud Key Management Service \_|\_ Google\
    \ Cloud Documentation"
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
Enable Cloud KMS Autokey
Stay organized with collections
Save and categorize content based on your preferences.
This page shows you how to enable and configure Cloud KMS Autokey for
centralized key management on a resource folder or for delegated key management
in projects ( Preview ). For more information about Autokey,
see Autokey overview . This document is intended for
administrators.
Before you begin
Before you can enable Cloud KMS Autokey for centralized key management using
a dedicated key project for all projects in a folder, you must have the
following:
An organization resource that contains a folder where you want to enable
Autokey. If you don't have a folder where you want to enable
Autokey, you can create a new resource folder .
Enabling Autokey on this folder enables Autokey for all
resource projects within the folder.
If you have resource projects where you want to use centralized key
management with Autokey but they aren't inside a folder where you
will enable Autokey, you can move existing resource projects into
new folders .
Before you can enable Autokey for projects ( Preview ) to
enable delegated key management and same-project keys, you must have one of the
following:
A Google Cloud project where you want to enable Autokey and
where the keyHandles.create permission is not blocked by an
IAM deny policy .
A Google Cloud folder where you want to enable Autokey, which
contains at least once project where the keyHandles.create permission is
not blocked by an IAM deny policy .
Required roles
To get the permissions that
you need to enable and configure Autokey,
ask your administrator to grant you the
following IAM roles on the folder, project, or a parent resource:
Cloud KMS Autokey Admin ( roles/cloudkms.autokeyAdmin )
Service Usage Admin ( roles/serviceusage.serviceUsageAdmin )
To enable centralized Autokey:
Folder IAM Admin ( roles/resourcemanager.folderIamAdmin )
Billing Account user ( roles/billing.user )
For more information about granting roles, see Manage access to projects, folders, and organizations .
These predefined roles contain
the permissions required to enable and configure Autokey. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to enable and configure Autokey:
cloudkms.autokeyConfigs.*
cloudkms.projects.showEffectiveAutokeyConfig
serviceusage.services.enable
To enable centralized Autokey:
resourcemanager.folders.get
resourcemanager.folders.getIamPolicy
resourcemanager.folders.setIamPolicy
billing.resourceAssociations.create
You might also be able to get
these permissions
with custom roles or
other predefined roles .
Decide how you want to enable Autokey
You can enable Autokey as part of your infrastructure-as-code
strategy by using Terraform to make the required configuration changes. If you
want to use Terraform to enable Autokey, see Enable Autokey
using Terraform on this page. If you don't want to use Terraform,
start by following the instructions in the next section.
Set up Autokey for centralized key management
When you use Autokey for centralized key management in a folder, you
need to choose a single key project to contain all keys created by
Autokey in that folder. If you are using the delegated key management
model ( Preview ), then you don't need a dedicated key project;
continue from Enable Autokey for delegated key
management .
We recommend creating a new key project to contain Cloud KMS resources
created by Autokey. You should create the key project inside your
organization resource. If you already have a key project that you want to use
for keys created by Autokey, you can skip the Create a key
project section and continue from Configure the
Autokey key project on this page.
The key project can be created inside the same folder where you plan to enable
Autokey. You shouldn't create other resources inside the key project.
If you attempt to create resources protected by Autokey in the key
project, Autokey rejects the request for a new key.
If you might want to migrate to Assured Workloads
in the future, create the key project inside the same folder as the resources
protected by those keys.
If your organization uses the constraints/gcp.restrictCmekCryptoKeyProjects
organization policy constraint to ensure that all CMEKs are from specified key
projects, you must add your key project to the list of allowed projects. For
more information about CMEK organization policy, see CMEK organization
policies .
Create a key project
Console
In the Google Cloud console, go to the Manage resources page.
Go to Manage resources
For Select organization , select the organization resource where you
want to create a project.
Click Create project .
In the New project window that appears, enter a project name and
select a billing account. A project name can contain only letters,
numbers, single quotes, hyphens, spaces, or exclamation points, and must
be between 4 and
30 characters.
For Location , select the resource that you want to be the parent for
your key project.
To finish creating the project, click Create .
gcloud
Create a new project:
gcloud projects create PROJECT_ID \
-- PARENT_TYPE = PARENT_ID
Replace the following:
PROJECT_ID : the ID of the project that contains the key ring.
PARENT_TYPE : the type of the resource where
you want to create the new key project. Enter organization to
create the new key project under a given organization, or enter
folder to create the new key project under a given folder.
PARENT_ID : the ID of the organization or
folder where you want to create the key project.
Set up a project lien
After you create the Cloud KMS project, we recommend that you
protect the project with a
lien ( Preview )
to avoid accidental deletion. When a project lien is enforced, the
Cloud KMS project is blocked from deletion until the lien is removed.
Prepare the Autokey key project
Console
Enable the Cloud KMS API on your key project.
Enable the API
If you are using a new key project, grant Cloud KMS
administrator permissions on the key project. Repeat the following steps
to grant the Cloud KMS Admin role to yourself and each other
Cloud KMS administrator user:
In the Google Cloud console, go to the IAM page.
Go
to IAM
Select the key project.
Click person_add Grant
Access , and then enter the user's email address.
Select the Cloud KMS Admin role.
Click Save .
gcloud
Enable the Cloud KMS API on your key project:
gcloud services enable cloudkms.googleapis.com
Grant Cloud KMS administrator permissions on the key project.
Repeat the following command to grant the roles/cloudkms.admin role to
yourself and each other Cloud KMS administrator users:
gcloud projects add-iam-policy-binding PROJECT_NUMBER \
--role = roles/cloudkms.admin \
--member = user: KEY_ADMIN_EMAIL
Replace the following:
PROJECT_NUMBER : the project number of the key
project.
KEY_ADMIN_EMAIL : the email address of the user
who is responsible for managing Cloud KMS keys.
Enable Cloud KMS Autokey on a resource folder
Console
In the Google Cloud console, go to the KMS controls page.
Go
to KMS controls
From the context picker, select the folder where you want to enable
Autokey.
Click Enable .
Select your key project and then click Submit .
A message confirms that Cloud KMS Autokey is enabled on the folder.
API
Create the AutokeyConfig for the folder where you want to enable
Autokey:
curl "https://cloudkms.googleapis.com/v1/folders/ FOLDER_ID /autokeyConfig?updateMask=keyProject" \
--request "PATCH" \
--header "authorization: Bearer TOKEN " \
--header "content-type: application/json" \
--data '{"key_project": "projects/ PROJECT_ID "}'
Replace the following:
FOLDER_ID : the ID of the folder
where you want to enable Autokey.
PROJECT_ID : the ID of the key project.
Set up the Cloud KMS service agent
The Cloud KMS service agent for a key project creates keys and applies
IAM policy bindings during resource creation, on behalf of a
human Cloud KMS administrator. To be able to create and assign keys,
the Cloud KMS service agent requires Cloud KMS administrator
permissions.
Create the Cloud KMS service agent:
gcloud beta services identity create --service = cloudkms.googleapis.com \
--project = PROJECT_NUMBER
Replace PROJECT_NUMBER with the project number of the key
project.
The output is similar to the following:
Service identity created: service- PROJECT_NUMBER @gcp-sa-ekms.iam.gserviceaccount.com
The output of the command indicates that the Cloud EKM
service account (with the gcp-sa-ekms subdomain) has been
created. However, the command also creates the Cloud KMS service
agent (with the gcp-sa-cloudkms subdomain), which is
the service agent that you use later in these instructions.
Grant Cloud KMS administrator permissions to the service agent:
gcloud projects add-iam-policy-binding PROJECT_NUMBER \
--role = roles/cloudkms.admin \
--member = serviceAccount:service- PROJECT_NUMBER @gcp-sa-cloudkms.iam.gserviceaccount.com
Replace PROJECT_NUMBER with the project number of the key
project.
Enable Autokey for delegated key management
Preview
This product is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA products are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
When you use Autokey for delegated key management,
Autokey creates your keys inside the same project as the resources that
they protect. Projects that support delegated key management with
Autokey can exist within folders where Autokey is enabled for
centralized key management. When Autokey is enabled on a project, the
project-level Autokey configuration overrides the Autokey
configuration on the parent folder.
To enable Autokey for an individual project, complete the following steps:
Using the REST API, create the AutokeyConfig for the project where you
want to enable Autokey:
curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT_ID /autokeyConfig?updateMask=key_project_resolution_mode" \
--request "PATCH" \
--header "authorization: Bearer TOKEN " \
--header "content-type: application/json" \
--data '{"key_project_resolution_mode": "RESOURCE_PROJECT"}'
Replace PROJECT_ID with the ID of the project where you want to
enable Autokey.
In the gcloud CLI, enable the Cloud KMS API on the project:
gcloud services enable cloudkms.googleapis.com
To enable Autokey for all projects within a folder, complete the
following steps:
Using the REST API, create the AutokeyConfig for the folder where you
want to enable Autokey to use delegated key management:
curl "https://cloudkms.googleapis.com/v1/folders/ FOLDER_ID /autokeyConfig?updateMask=key_project_resolution_mode" \
--request "PATCH" \
--header "authorization: Bearer TOKEN " \
--header "content-type: application/json" \
--data '{"key_project_resolution_mode": "RESOURCE_PROJECT"}'
Replace FOLDER_ID with the ID of the folder where you
want to enable Autokey. This command enables same-project
Autokey for all projects within the folder.
In the gcloud CLI, enable the Cloud KMS API on each project
where you want to use Autokey for delegated key management:
gcloud services enable cloudkms.googleapis.com
You can enable the Cloud KMS API on each project all at once, or enable
the API on individual projects as needed. Your developers can't
use Autokey in the project until the Cloud KMS API is enabled
for that project.
Enable Autokey using Terraform
Centralized key management with Terraform
The following Terraform sample automates the following setup steps:
Create a resource folder
Create a key project
Grant user permissions
Set up the Cloud KMS service agent
Enable Autokey
You must separately create resource projects within the resource folder.
variable "organization_ID" {
description = "Your Google Cloud Org ID"
type = string
default = " ORGANIZATION_ID "
}
variable "billing_account" {
description = "Your Google Cloud Billing Account ID"
type = string
default = " BILLING_ACCOUNT_ID "
}
/* List the users who should have the authority to enable and configure
Autokey at a folder level */
variable "autokey_folder_admins" {
type = list ( string )
default = [ AUTOKEY_ADMIN_USER_IDS ]
}
/* List the users who should have the authority to protect their resources
with Autokey */
variable "autokey_folder_users" {
type = list ( string )
default = [ AUTOKEY_DEVELOPER_USER_IDS ]
}
/* List the users who should have the authority to manage crypto operations in
the Autokey key project */
variable "autokey_project_kms_admins" {
type = list ( string )
default = [ KEY_PROJECT_ADMIN_USER_IDS ]
}
/* The project ID to use for the key project. The project ID must be 6 to 30
characters with lowercase letters, digits, hyphens. The project ID must start
with a letter. Trailing hyphens are prohibited */
variable "key_management_project_ID" {
description = "Sets the project ID for the Key Management Project. This project will contain the Key Rings and Keys generated by Cloud KMS Autokey"
type = string
default = " KEY_PROJECT_ID "
}
# Create a new folder
resource "google_folder" "autokey_folder" {
parent = "organizations/${var.organization_ID}"
display_name = "autokey_folder"
}
# Set permissions for key admins to use Autokey in this folder
resource "google_folder_iam_binding" "autokey_folder_admin" {
folder = google_folder.autokey_folder.name
role = "roles/cloudkms.autokeyAdmin"
members = var.autokey_folder_admins
}
# Set permissions for users to protect resources with Autokey in this folder
resource "google_folder_iam_binding" "autokey_folder_users" {
folder = google_folder.autokey_folder.name
role = "roles/cloudkms.autokeyUser"
members = var.autokey_folder_users
}
# Create a key project to store keys created by Autokey
resource "google_project" "key_management_project" {
project_id = var.key_management_project_ID
name = var.key_management_project_ID
billing_account = var.billing_account
folder_id = google_folder.autokey_folder.name
}
output "project_number" {
value = google_project.key_management_project.number
}
# Grant role for Cloud KMS admins to use Autokey in the key project
resource "google_project_iam_binding" "autokey_project_admin" {
project = google_project.key_management_project.project_id
role = "roles/cloudkms.admin"
members = var.autokey_project_kms_admins
depends_on = [ google_project.key_management_project ]
}
# Enable the Cloud KMS API in the key project
resource "google_project_service" "enable_api" {
service = "cloudkms.googleapis.com"
project = google_project.key_management_project.project_id
disable_on_destroy = false
disable_dependent_services = false
depends_on = [ google_project.key_management_project ]
}
# Create Cloud KMS service agent
resource "google_project_service_identity" "KMS_Service_Agent" {
provider = google-beta
service = "cloudkms.googleapis.com"
project = google_project.key_management_project.project_id
depends_on = [ google_project.key_management_project ]
}
/* Grant role for the Cloud KMS service agent to use delegated
Cloud KMS administrator permissions */
resource "google_project_iam_member" "autokey_project_admin" {
project = google_project.key_management_project.project_id
role = "roles/cloudkms.admin"
member = "serviceAccount:service-${google_project.key_management_project.number}@gcp-sa-cloudkms.iam.gserviceaccount.com"
}
/* Enable AutokeyConfig for centralized key management in this folder */
resource "google_kms_autokey_config" "autokey_config" {
provider = google-beta
folder = google_folder.autokey_folder.folder_id
key_project = "projects/${google_project.key_management_project.project_id}"
key_project_resolution_mode = "DEDICATED_KEY_PROJECT"
# For folder scope, valid values are: DEDICATED_KEY_PROJECT, RESOURCE_PROJECT, DISABLED
# With DEDICATED_KEY_PROJECT, define the key_project as well. With RESOURCE_PROJECT,
# omit key_project. Keys will be created in the same project as the protected resource.
}
Replace the following:
BILLING_ACCOUNT_ID : your Google Cloud billing
account ID. The billing account ID is an 18-character alphanumeric value
separated by dashes—for example, 010101-F0FFF0-10XX01 .
AUTOKEY_ADMIN_USER_IDS : a list of email addresses for
users that should have the roles/cloudkms.autokeyAdmin role—for
example, "Ariel@example.com", "Charlie@example.com" .
AUTOKEY_DEVELOPER_USER_IDS : a list of email addresses for
users that should have the roles/cloudkms.autokeyUser role—for
example, "Kalani@example.com", "Mahan@example.com" .
KEY_PROJECT_ADMIN_USER_IDS : a list of email addresses for
users that should have the roles/cloudkms.admin role—for example,
"Sasha@example.com", "Nur@example.com" .
KEY_PROJECT_ID : the ID to use for the dedicated key
project—for example, autokey-key-project . If you specify a key
project, the key_project_resolution_mode must be DEDICATED_KEY_PROJECT .
Delegated key management with Terraform
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
To enable Autokey on all projects in a folder for delegated key
management, use a folder_config resource similar to the following:
/* Enable AutokeyConfig on a folder */
resource "google_kms_autokey_config" "folder_config" {
provider = google-beta
folder = google_folder.autokey_folder.name
key_project_resolution_mode = "RESOURCE_PROJECT"
# For folder scope, valid values are: DEDICATED_KEY_PROJECT, RESOURCE_PROJECT, DISABLED
# With DEDICATED_KEY_PROJECT, define the key_project as well. With RESOURCE_PROJECT,
# omit key_project. Keys will be created in the same project as the protected resource.
}
To enable Autokey on an individual projects for delegated key
management, use a autokey_config_project resource similar to the following:
/* To set autokey config for a project */
resource "google_kms_autokey_config" "autokey_config_project" {
provider = google-beta
project = "projects/${google_project.key_management_project.project_id}"
key_project_resolution_mode = "RESOURCE_PROJECT"
# For project scope, valid values are: RESOURCE_PROJECT, DISABLED
}
Enforce Autokey usage
If you want to enforce usage of Autokey within a folder, you can do so
by combining IAM access controls with CMEK organization policies. This works by
removing key creation permissions from principals other than the
Cloud KMS service agent, and then requiring that all resources are
protected by CMEK using the Autokey key project.
To enforce Autokey usage within a folder, complete the following steps:
Remove access to create keys manually in the key project. If keys can't be
manually created, then only keys created by Autokey can be created
in this project. For more information about controlling access, see
Access control with IAM .
Set an organization policy on the folder to require that resources must be
protected with a CMEK using the constraints/gcp.restrictNonCmekServices
constraint. For more information, see
Require CMEK protection .
Set an organization policy on the folder to require that keys used for CMEK
must be from the Autokey key project using the
constraints/gcp.restrictCmekCryptoKeyProjects constraint. For more
information, see
Limit the use of Cloud KMS keys for CMEK .
Disable Autokey
Cloud KMS Autokey is enabled and disabled at the folder level. The same
roles that can enable Autokey for a folder can disable Autokey
for that folder. To disable Autokey on a folder, you must clear the
AutokeyConfig to remove the association between the folder and the
Autokey key project.
After the Autokey configuration on the folder is removed, the
Cloud KMS service agent can no longer create keys for developers when
they create resources in the folder. Removing the link between the folder and
the key project disables Autokey in the folder; however, we
recommend that you also remove the IAM bindings for the
roles/cloudkms.autokeyAdmin and roles/cloudkms.autokeyUser roles.
Disabling Autokey doesn't affect existing keys in the key project. You
can continue to use these keys to protect your resources.
Clear AutokeyConfig
Console
In the Google Cloud console, go to the KMS controls page.
Go
to KMS controls
From the context picker, select the folder where you want to disable
Autokey.
Click Disable .
A message appears prompting you to confirm that you want to disable
Autokey.
To disable Autokey, click Confirm .
A message confirms that Cloud KMS Autokey is disabled on the folder.
API
Clear the AutokeyConfig for the folder where you want to disable
Autokey:
curl "https://cloudkms.googleapis.com/v1/folders/ FOLDER_ID /autokeyConfig?updateMask=keyProject" \
--request "PATCH" \
--header "authorization: Bearer TOKEN " \
--header "content-type: application/json" \
--data '{}'
Replace the following:
FOLDER_ID : the ID of the folder
where you want to disable Autokey.
Revoke Autokey roles
Optional: Revoke the roles/cloudkms.autokeyAdmin role:
gcloud resource-manager folders remove-iam-policy-binding \
FOLDER_ID --role = roles/cloudkms.autokeyAdmin \
--member = user: USER_EMAIL
Replace the following:
FOLDER_ID : the ID of the
folder where you have disabled Autokey.
USER_EMAIL : the email address of the user for whom
you want to revoke permission to manage Autokey.
Optional: Revoke the roles/cloudkms.autokeyUser role at the folder level:
gcloud resource-manager folders remove-iam-policy-binding \
FOLDER_ID --role = roles/cloudkms.autokeyUser \
--member = user: USER_EMAIL
Replace the following:
FOLDER_ID : the ID of the
folder where you have disabled Autokey.
USER_EMAIL : the email address of the user for whom
you want to revoke permission to use Autokey.
Optional: Revoke the roles/cloudkms.autokeyUser role at the project level:
gcloud projects remove-iam-policy-binding RESOURCE_PROJECT_NUMBER \
--role = roles/cloudkms.autokeyUser \
--member = user: USER_EMAIL
Replace the following:
RESOURCE_PROJECT_NUMBER : the project number of
a resource project within the folder where you have disabled Autokey.
USER_EMAIL : the email address of the user for whom
you want to revoke permission to use Autokey.
Optional: If you don't plan to continue using the key project for
Autokey for other folders, revoke the roles/cloudkms.admin role
for the Cloud KMS service agent:
gcloud projects remove-iam-policy-binding KEY_PROJECT_NUMBER \
--role = roles/cloudkms.admin \
--member = serviceAccount:service- KEY_PROJECT_NUMBER @gcp-sa-cloudkms.iam.gserviceaccount.com
Replace KEY_PROJECT_NUMBER with the numerical ID of the key project.
Optional: If you don't plan to continue using keys created inside the key
project, revoke the roles/cloudkms.admin role for the Cloud KMS
administrator:
gcloud projects remove-iam-policy-binding KEY_PROJECT_NUMBER \
--role = roles/cloudkms.admin \
--member = user: KEY_ADMIN_EMAIL
Replace the following:
KEY_PROJECT_NUMBER : the project number of the
key project.
USER_EMAIL : the email address of the user for whom
you want to revoke permission to use Autokey.
What's next
Learn more about when to use Autokey .
Learn more about how Autokey works .
Your Autokey developers can now create protected resources using
Autokey .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
