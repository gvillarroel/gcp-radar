---
title: "Quickstart: Migrate a self-managed MySQL metastore to Dataproc Metastore \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataproc-metastore/docs/migrate-mysql-metastore
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc-metastore/docs
source_metadata:
  url: https://docs.cloud.google.com/dataproc-metastore/docs/migrate-mysql-metastore
  title: "Quickstart: Migrate a self-managed MySQL metastore to Dataproc Metastore\
    \ \_|\_ Google Cloud Documentation"
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
Stay organized with collections
Save and categorize content based on your preferences.
Migrate a self-managed MySQL metastore to Dataproc Metastore
This page shows you how to migrate your external self-managed MySQL metastore to
Dataproc Metastore by creating a MySQL dump file and importing
the metadata into an existing Dataproc Metastore service.
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
Enable the Dataproc Metastore API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Required Roles
To get the permissions that
you need to create a Dataproc Metastore and import a MySQL metastore,
ask your administrator to grant you the
following IAM roles:
To create a service and import metadata:
Dataproc Metastore Editor ( roles/metastore.editor )
on the project
Dataproc Metastore Admin ( roles/metastore.admin )
on the project.
To use the Cloud Storage object (SQL dump file) for import:
Storage Object Viewer ( roles/storage.objectViewer )
on the Dataproc Metastore service agent. For example, service- CUSTOMER_PROJECT_NUMBER @gcp-sa-metastore.iam.gserviceaccount.com .
Storage Object Viewer ( roles/storage.objectViewer )
on the user account.
For more information about granting roles, see Manage access to projects, folders, and organizations .
These predefined roles contain
the permissions required to create a Dataproc Metastore and import a MySQL metastore. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to create a Dataproc Metastore and import a MySQL metastore:
To create a service:
metastore.services.create
on the project.
To import metadata:
metastore.imports.create
on the project.
To use the Cloud Storage object (SQL dump file) for import:
storage.objects.get
on the Dataproc Metastore service agent. For example, service- CUSTOMER_PROJECT_NUMBER @gcp-sa-metastore.iam.gserviceaccount.com
storage.objects.get
on the user account.
You might also be able to get
these permissions
with custom roles or
other predefined roles .
For more information about specific Dataproc Metastore roles and permissions, see Manage Managed Service for Apache Spark access with IAM .
Create a Dataproc Metastore service
The following instructions demonstrate how to create a Dataproc Metastore
service that you can migrate your SQL dump file to.
Console
In the Google Cloud console, open the Create service page:
Go to Create service
The Dataproc Metastore Create service page
In the Service name field, enter example-service .
Select the Data location .
For information on selecting a region, see
Cloud locations .
For other service configuration options, use the provided defaults.
To create and start the service, click the Submit button.
Your new service appears in the Service list.
gcloud
Run the following gcloud metastore services create
command to create a service:
gcloud metastore services create example-service \
--location= LOCATION
Replace LOCATION with the Compute Engine region
where you plan to create the service. Make sure Dataproc Metastore is available
in the region.
REST
Follow the API instructions to create a service
by using the API Explorer.
Prepare for migration
You must now prepare the metadata stored in your Hive metastore database for
import by making a MySQL dump file and placing it into a Cloud Storage
bucket.
See Prepare the import files before import
for steps to prepare for migration.
Import the metadata
Now that you've prepared the dump file, import it into your
Dataproc Metastore service.
See Import the files into Dataproc Metastore
for steps to import your metadata into your example-service service.
Note: If you're using VPC Service Controls , then you can only import data from a Cloud Storage bucket that resides in the same service perimeter as the Dataproc Metastore service.
Create and attach a Managed Service for Apache Spark cluster
After you import your metadata into your Dataproc Metastore
example-service service, create and attach a Managed Service for Apache Spark cluster
that uses the service as its Hive metastore.
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, follow these steps.
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
If the project that you plan to delete is attached to an organization,
expand the Organization list in the Name column.
In the project list, select the project that you
want to delete, and then click Delete .
In the dialog, type the project ID, and then click
Shut down to delete the project.
Alternatively, you can delete the resources used in this tutorial:
Delete the Dataproc Metastore service.
Console
In the Google Cloud console, open the Dataproc Metastore page:
Open Dataproc Metastore in the
Google Cloud console
On the left of the service name, select example-service by checking
the box.
At the top of the Dataproc Metastore page, click Delete
to delete the service.
On the dialog, click Delete to confirm the deletion.
Your service no longer appears in the Service list.
gcloud
Run the following gcloud metastore services delete command to delete a
service:
gcloud metastore services delete example-service \
--location= LOCATION
Replace LOCATION with the Compute Engine
region where you created the service.
REST
Follow the API instructions to delete a service
by using the API Explorer.
All deletions succeed immediately.
Note: Deleting the service itself deletes all nested imports under that
service.
Delete the Cloud Storage bucket
for the Dataproc Metastore service.
Note: Deleting the Dataproc Metastore service doesn't delete
its bucket.
What's next
What is Dataproc Metastore?
Import metadata into a service
Attach a Managed Service for Apache Spark cluster or self-managed cluster
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
