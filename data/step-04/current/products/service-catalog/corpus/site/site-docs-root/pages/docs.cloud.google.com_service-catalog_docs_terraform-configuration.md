---
title: "Creating a Terraform configuration \_|\_ Service Catalog \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/service-catalog/docs/terraform-configuration
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/service-catalog/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/service-catalog/docs/terraform-configuration
  title: "Creating a Terraform configuration \_|\_ Service Catalog \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Service Catalog
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Creating a Terraform configuration
When curating Service Catalog solutions for your organization, you can
create a Terraform configuration, or config , which your users deploy using
Terraform. After you create the configuration, you can share it with users by
assigning it to catalogs .
In this guide, you use Cloud Build to run Terraform
commands in the latest version of the Terraform Docker image, and you use
Cloud Storage to store and manage Terraform resources such
as modules and
state files .
For resources and guidance on using Terraform, see
Using Terraform with Google Cloud .
Before you begin
Note: Starting April 29, 2024, Cloud Build uses Compute Engine service
accounts by default, instead of Cloud Build service accounts. This doesn't
affect any existing Google Cloud projects where Cloud Build is already
enabled. If you enable Cloud Build for a project on or after April 29th,
2024, you or your organization administrator must update your organization
policies or your Compute Engine service accounts to prevent issues. For more
details, see
Cloud Build Service Account Change .
You must have the following
Identity and Access Management (IAM) roles :
Catalog Admin OR
Catalog Manager for the
Google Cloud organization associated with the Google Cloud project which
has Service Catalog enabled. If you don't have this role, contact
your Organization Administrator to request access.
Storage Admin for
the Google Cloud project where you want to create your solution. If your
Terraform config is in a different project, you must also have the
Storage Admin role for the project that contains your Terraform config.
Cloud Build Editor
for the Google Cloud project where you want to create the solution.
If you plan to use your own service account, you must also have the
Service Account User
role for the Google Cloud project that contains the service account that you
plan to use.
If you don't have these roles, contact your Organization Administrator to
request access.
If you plan to use your own service account, your service account must have
the following IAM roles :
Storage Admin for
the Google Cloud project where you want to create your solution. If your
Terraform config is in a different project, your service account must
also have the role
Storage Object Viewer
for the project containing the Terraform config.
Logs Writer for the
Google Cloud project where you want to create your solution.
If you don't have these roles, contact your Organization Administrator to
request access.
Set up Cloud Build in the project where you're creating the config:
Enable the Cloud Build API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Enabling the API automatically creates a Cloud Build service account
that you use in the following step.
Go to the Cloud Build
page.
On the Left Panel, select Settings .
Use the service account provided under the section
Service account email .
If you aren't using your own service account, grant the following
IAM roles to the service account. For steps to grant
roles, see
Configuring access for Cloud Build Service Account .
Project Editor
( roles/editor )
Storage Admin
( roles/storage.admin )
Note: If you don't provide your own service account, Service Catalog uses
the default Cloud Build service account settings. For more information, see
Cloud Build Service Account Change .
Uploading your configuration files to Cloud Storage
You use Cloud Storage to manage your Terraform configuration files for
Service Catalog.
Creating a Cloud Storage bucket
To set up Cloud Storage, create a bucket in the same project where you
enabled Service Catalog for your organization:
In the Google Cloud console, go to the Cloud Storage
Buckets page.
Go to Buckets
Click add_box Create .
On the Create a bucket page, enter your bucket information. To go to the next
step, click Continue .
In the Get started section, do the following:
Enter a globally unique name that meets the
bucket naming requirements .
To add a
bucket label ,
expand the Labels section ( expand_more ),
click add_box
Add label , and specify a key and a value for your label.
In the Choose where to store your data section, do the following:
Select a Location type .
Choose a location where your bucket's data is permanently stored from the Location type drop-down menu.
If you select the dual-region location type, you can
also choose to enable turbo replication by using the
relevant checkbox.
To set up cross-bucket replication , select
Add cross-bucket replication via Storage Transfer Service and
follow these steps:
Set up cross-bucket replication
In the Bucket menu, select a bucket.
In the Replication settings section,
click Configure to configure settings for the
replication job.
The Configure cross-bucket replication pane
appears.
To filter objects to replicate by object name prefix,
enter a prefix that you want to include or exclude objects from, then click add
Add a prefix .
To set a storage class for the replicated objects,
select a storage class from the Storage class menu.
If you skip this step, the replicated objects will use the
destination bucket's storage class by default.
Click Done .
In the Choose how to store your data section, do the following:
Select a default storage class for the bucket or
Autoclass for automatic storage class management of your
bucket's data.
To enable hierarchical namespace , in the
Optimize storage for data-intensive workloads section, select
Enable hierarchical namespace on this bucket .
Note: You cannot enable hierarchical namespace in existing
buckets.
In the Choose how to control access to objects section, select
whether or not your bucket enforces public access prevention ,
and select an access control method for your bucket's objects.
Note: You cannot change the Prevent public access setting if this setting is enforced at an organization policy .
In the Choose how to protect object data section, do the
following:
Select any of the options under Data protection that you
want to set for your bucket.
To enable soft delete , click the
Soft delete policy (For data recovery) checkbox,
and specify the number of days you want to retain objects
after deletion.
To set Object Versioning , click the
Object versioning (For version control) checkbox,
and specify the maximum number of versions per object and the number of days after which
the noncurrent versions expire.
To enable the retention policy on objects and buckets, click the Retention (For compliance) checkbox, and then do the following:
To enable Object Retention Lock , click the
Enable object retention checkbox.
To enable Bucket Lock , click the Set bucket retention policy checkbox, and choose a unit of time and a length of time for your retention period.
To choose how your object data will be encrypted, expand the
Data encryption section ( expand_more ), and select a
Data encryption method .
Click Create .
Enabling Object Versioning
You must use Object Versioning for your bucket to protect your Terraform
configuration from being deleted or overwritten. To enable Object
Versioning, see Cloud Storage's documentation on Using Object Versioning .
Granting access to your bucket
When users in your organization deploy the configuration, their Cloud Build
service account must have read access to your bucket. If your bucket is stored
in the same Google Cloud project where users deploy the configuration, then
the service account already has this access.
If your users are deploying the configuration in a different
Google Cloud project, grant access to the bucket using one of the following
methods:
Grant the Storage Object Viewer
( roles/storage.objectViewer ) role to your users' Cloud Build
service accounts, or to a Google Cloud resource where your users deploy
Terraform configurations, such as a project, folder, or organization.
Use an Access Control List (ACL) to
manage access to the bucket.
For details on managing access to buckets, see Cloud Storage's
Overview of access control .
Creating and uploading a Terraform module
After setting up your Cloud Storage bucket, you must create and upload
a Terraform module , which
is a container of all of your configuration files. Service Catalog uses
the module to automatically generate a JSON schema file to define the variables
of your configuration.
When you call modules outside of the current directory, use the
remote path instead of a relative path. For example, instead of
source = "../../" , use source = "GoogleCloudPlatform/cloud-run/google" .
Note: Terraform state files are created and stored in the projects where your
users deploy the configuration.
For modules of common Google Cloud use cases, see
Terraform blueprints and modules for Google Cloud .
The following code sample illustrates a Terraform configuration file, main.tf :
variable "machine_type" {
type = string
default = "n1-standard-1"
}
variable "zone" {
type = string
default = "us-central1-a"
}
variable "deployment_identifier" {
description = "The unique name for your instance"
type = string
}
resource "google_compute_instance" "default" {
name = "vm-${var.deployment_identifier}"
machine_type = var.machine_type
zone = var.zone
boot_disk {
device_name = "boot"
auto_delete = true
initialize_params {
image = "debian-cloud/debian-11"
}
}
network_interface {
network = "default"
access_config {
// Ephemeral IP
}
}
}
After creating your module, compress the file(s) into a zip file. Make sure the
module is stored at the root of the zip file.
To ensure proper storage of the module when you zip your Terraform files, run the following command:
none
zip solution.zip file1.tf file2.tf file3.tf
Note: If you try to create a product with a zip file that contains Terraform modules in subdirectories or folders other than the root directory, the Validation can't run successfully.
Then, upload the zip file to your bucket. For steps to upload the zip file, see
Cloud Storage's documentation on Uploading objects .
Creating the configuration in Service Catalog
After setting up a Cloud Storage bucket with your Terraform module, you
create a Service Catalog solution that includes the bucket.
To create the Terraform configuration as a Service Catalog solution:
Go to the Service Catalog Admin
Solutions page
in the Google Cloud console.
Go to the Solutions page
To choose the Google Cloud project, click Select .
Click Create solution . In the drop-down list, select
Create Terraform config .
Enter a name, description, and tagline for your Terraform configuration. The
tagline is a short description of a solution that users see as they browse
Service Catalog.
In the Link to Terraform config field, provide the link to the
Cloud Storage bucket that contains your zip file for the Terraform
module, such as gs://my-terraform-bucket/my-zip-file.zip .
Optionally, upload an icon for the solution. The recommended dimensions for
an icon are 80 by 80 pixels.
Optionally, enter a support link and contact information for the creator.
Optionally, add a link to the documentation for the solution.
Select the Terraform version you want to use to deploy the solution.
Optionally, you can provide your own service account by clicking the
checkbox next to Select or enter your own service account . If your
service account is located in the same Google Cloud project where you're
creating your solution, select
Select a service account from the current project , and select your
service account from the drop-down menu. If your service account is located
in a different Google Cloud project from your solution, select
Enter a service account email from any project , and enter the email of
your service account.
Note: If you don't provide your own service account, Service Catalog
uses the default Cloud Build service account settings. For more
information, see
Cloud Build Service Account Change .
Click CREATE .
The solution is created and appears on the Service Catalog Admin
Solutions page.
The following screenshot illustrates creating a Terraform configuration:
Next steps
Assign the Terraform configuration to a catalog, so that
users in your organization can access and deploy the solution.
Update a solution
with the latest Terraform configuration details.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
