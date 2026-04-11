---
title: "Delete a Dataproc Metastore service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataproc-metastore/docs/delete-service
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc-metastore/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/dataproc-metastore/docs/delete-service
  title: "Delete a Dataproc Metastore service \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Dataproc Metastore
Guides
Send feedback
Delete a Dataproc Metastore service
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how to delete a Dataproc Metastore service.
You might want to delete your Dataproc Metastore service if you
chose some configuration settings that can't be changed, such as the service
name or the Hive metastore version.
Before you begin
Enable Dataproc Metastore in your project .
Create a Dataproc Metastore service .
Required roles
To get the permission that
you need to delete a Dataproc Metastore service,
ask your administrator to grant you the
following IAM roles on your project, based on the principle of least privilege:
Grant full control of Dataproc Metastore resources ( roles/metastore.editor )
Grant full access to all Dataproc Metastore resources, including IAM policy administration ( roles/metastore.admin )
For more information about granting roles, see Manage access to projects, folders, and organizations .
This predefined role contains the
metastore.services.delete
permission,
which is required to
delete a Dataproc Metastore service.
You might also be able to get
this permission
with custom roles or
other predefined roles .
For more information about specific Dataproc Metastore roles and permissions, see Dataproc Metastore IAM overview .
Delete a service
The following instructions demonstrate how to delete a Dataproc Metastore
service.
Considerations
Your Cloud Storage bucket isn't automatically deleted when you delete your
Dataproc Metastore. To delete a bucket, see Deleting buckets .
After deleting a Dataproc Metastore, auto-created
VPC Network Peering routes used by the service persist for up to 3 hours.
Note that if any other Dataproc Metastore services continue to
use these VPC Network Peering routes, they aren't deleted.
Caution: Deleting a service is permanent. Once deleted, a service can't be
restored. You can, however, quickly create new Dataproc Metastore
services as you need them.
Console
In the Google Cloud console, open the Dataproc Metastore page:
Go to Dataproc Metastore
Select the service you want to delete.
In the navigation bar, click Delete .
A dialog opens.
On the dialog, click Delete .
Return to the Dataproc Metastore page, and
verify that your deleted service no longer appears in the list.
You can also delete your service on the Service detail page.
On the Dataproc Metastore page, click the service that you want to
delete.
The Service detail page for that service opens.
In the navigation bar, click Delete Service .
A dialog opens.
On the dialog, click Delete .
Return to the Dataproc Metastore page, and
verify that your deleted service no longer appears in the list.
gcloud CLI
To delete a service, run the following gcloud metastore services delete command.
gcloud metastore services delete SERVICE \
--location= LOCATION
Replace the following:
SERVICE : The name of the
Dataproc Metastore service you're deleting.
LOCATION : The Google Cloud region that your
Dataproc Metastore service resides in.
Verify that the deletion was successful.
REST
Follow the API instructions to delete a service
by using the APIs Explorer.
Deletion-protection
Dataproc Metastore deletion protection is a feature that helps you
prevent the accidental removal of existing and new Dataproc Metastore
services. By using deletion protection, you can safeguard services that are
important to your applications and workloads.
Considerations
By default, the deletion protection option is disabled.
You can only set deletion protection at the instance level. Individual
protection can't be set on metadata, such as tables, databases or
partitions. You also can't enable protection on a backup.
If the project containing a protected instance is deleted, the instance is
also deleted, irrespective of deletion-protection.
Enable deletion-protection
You can enable deletion protection when you create an instance or
on an existing instance.
For new services
Console
In the Google Cloud console, go to the Dataproc Metastore
page.
Go to
Dataproc Metastore
In the navigation bar, click +Create .
The Create Metastore service dialog opens.
Select Dataproc Metastore 2 .
Under Deletion protection , click the toggle to enable the feature.
Configure the remaining service options as necessary, or use the provided
defaults.
Click Submit .
gcloud CLI
To enable deletion-protection on a new Dataproc Metastore service,
run the following gcloud metastore services create command.
gcloud metastore services update SERVICE \
--location= LOCATION \
--instance-size INSTANCE_SIZE \
--deletion-protection
Replace the following:
SERVICE : The name of the
Dataproc Metastore service you're deleting.
LOCATION : The Google Cloud region that your
Dataproc Metastore service resides in.
INSTANCE : The instance size for your service.
For existing services
Console
In the Google Cloud console, open the Dataproc Metastore page:
Go to Dataproc Metastore
On the Dataproc Metastore page, click the service name of the
service that you want to update.
The Service detail page opens.
On the Configuration tab, click Edit .
The Edit service page opens.
Under Deletion protection , click the toggle to enable the feature.
Click Submit .
gcloud CLI
To enable deletion-protection on an existing Dataproc Metastore service,
run the following gcloud metastore services update command.
gcloud metastore services update SERVICE \
--location= LOCATION \
--deletion-protection
Replace the following:
SERVICE : The name of the
Dataproc Metastore service you're deleting.
LOCATION : The Google Cloud region that your
Dataproc Metastore service resides in.
Disable deletion-protection
To disable deletion-protection on a Dataproc Metastore service, run
following gcloud metastore services update
command with the --no=deletion-protection option.
gcloud metastore services update SERVICE \
--location= LOCATION \
--no-deletion-protection
What's next
Cloud audit logging
Dataproc Metastore IAM and access control
Service access
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
