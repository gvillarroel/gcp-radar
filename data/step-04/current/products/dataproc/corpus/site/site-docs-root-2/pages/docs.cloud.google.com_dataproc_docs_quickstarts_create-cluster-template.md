---
title: "Quickstart: Create a Managed Service for Apache Spark cluster by using a template\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataproc/docs/quickstarts/create-cluster-template
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage
source_metadata:
  url: https://docs.cloud.google.com/dataproc/docs/quickstarts/create-cluster-template
  title: "Quickstart: Create a Managed Service for Apache Spark cluster by using a\
    \ template \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

"Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
Home
Documentation
Data analytics
Managed Service for Apache Spark
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Create a cluster by using a template
This page shows you how to use an inline
Google APIs Explorer
template to create a Managed Service for Apache Spark cluster.
For other ways to create a cluster, see:
Create a cluster by using the Google Cloud console
Create a cluster by using the Google Cloud CLI
Create a cluster by using client libraries
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
Verify that
you have the permissions required to complete this guide .
Verify that billing is enabled for your Google Cloud project .
Enable the Dataproc API.
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
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that
you have the permissions required to complete this guide .
Verify that billing is enabled for your Google Cloud project .
Enable the Dataproc API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Required roles
Certain IAM roles are required to
run the examples on this page. Depending on organization policies, these
roles may have already been granted. To check role grants, see
Do you need to grant roles? .
For more information about granting roles, see
Manage access to projects,folders, and organizations .
User roles
To get the permissions that
you need to create a Managed Service for Apache Spark cluster,
ask your administrator to grant you the
following IAM roles:
Dataproc Editor ( roles/dataproc.editor )
on the project
Service Account User ( roles/iam.serviceAccountUser )
on the Compute Engine default service account
Service account role
To ensure that the Compute Engine default service account has the necessary
permissions to create a Managed Service for Apache Spark cluster,
ask your administrator to grant the
Dataproc Worker ( roles/dataproc.worker )
IAM role to the Compute Engine default service account on the project.
Important: You must grant this role
to the Compute Engine default service account, not to your user account. Failure to grant the role to the correct principal might result in permission errors.
Create a cluster
Before you can run Managed Service for Apache Spark jobs, you need to create a cluster
of virtual machines to run them on. To create a Managed Service for Apache Spark cluster
in your project, fill in and execute the Google APIs Explorer Try this Method
template on this page (scroll or click Try it! to move to the template).
Note: The region and clusterName parameter values are filled in for you.
Accept or replace these "seeded" parameter values.
Request parameters:
Insert your projectId .
Specify the region
where your cluster will be located (accept or replace "us-central1"). Since you
are not specifying a zone within the region in this quickstart,
Managed Service for Apache Spark Auto Zone placement
will pick a zone within the region where it will create the cluster.
Request body:
Specify a
clusterName ,
(accept or replace "example-cluster").
You will use this name to interact with your cluster, for example when you
submit jobs
or update the cluster .
Click EXECUTE . The first time you
run the API template, you may be asked to choose and sign into
your Google account, then authorize the Google APIs Explorer to access your
account. If the request is successful, the JSON response
shows that cluster creation is pending.
To confirm cluster creation, open the
Managed Service for Apache Spark Clusters
page in the Google Cloud console. After cluster provisioning completes,
the cluster's status will show as "Running".
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, follow these steps.
If you don't need the cluster to explore the other quickstarts or to run
other jobs, use the
APIs Explorer , the
Google Cloud console ,
the gcloud CLI
gcloud command-line tool,
or the Cloud Client Libraries
to delete the cluster.
What's next
Learn how to submit a Spark job by using a template .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
