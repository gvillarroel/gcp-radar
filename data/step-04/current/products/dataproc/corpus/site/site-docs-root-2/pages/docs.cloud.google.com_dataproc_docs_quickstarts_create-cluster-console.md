---
title: "Quickstart: Create a cluster by using the Google Cloud console \_|\_ Managed\
  \ Service for Apache Spark \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataproc/docs/quickstarts/create-cluster-console
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage
source_metadata:
  url: https://docs.cloud.google.com/dataproc/docs/quickstarts/create-cluster-console
  title: "Quickstart: Create a cluster by using the Google Cloud console \_|\_ Managed\
    \ Service for Apache Spark \_|\_ Google Cloud Documentation"
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
Create a cluster by using the Google Cloud console
This page shows you how to use the Google Cloud console to create a
Managed Service for Apache Spark cluster, run a basic
Apache Spark
job in the cluster, and then modify the number of workers in the cluster.
To follow step-by-step guidance for this task directly in the
Google Cloud console, click Guide me :
Guide me
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
Manage access to projects, folders, and organizations .
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
In the Google Cloud console, go to the Managed Service for Apache Spark
Clusters page.
Go to Clusters
Click Create cluster .
In the Create Dataproc cluster dialog, click Create in
the Cluster on Compute Engine row.
In the Cluster name field, enter example-cluster .
In the Region and Zone lists, select a region and zone.
Select a region (for example, us-east1 or europe-west1 )
to isolate resources, such as virtual machine (VM) instances and
Cloud Storage and metadata storage locations that are utilized by
Managed Service for Apache Spark, in the region. For more
information, see
Available regions and zones
and
Cluster region .
For all the other options, use the default settings.
To create the cluster, click Create .
Your new cluster appears in a list on the Clusters page. The status is
Provisioning until the cluster is ready to use, and then the status
changes to Running . Provisioning the cluster might take a couple of
minutes.
Submit a Spark job
Submit a Spark job that estimates a value of Pi:
In the Managed Service for Apache Spark navigation menu, click Jobs .
On the Jobs page, click
add_box Submit job , and then do
the following:
In the Job ID field, use the default setting, or provide an ID that
is unique to your Google Cloud project.
In the Cluster drop-down, select example-cluster .
For Job type , select Spark .
In the Main class or jar field, enter
org.apache.spark.examples.SparkPi .
In the Jar files field, enter
file:///usr/lib/spark/examples/jars/spark-examples.jar .
In the Arguments field, enter 1000 to set the number of tasks.
Note: The Spark job estimates Pi by using the
Monte Carlo method .
It generates x and y points on a coordinate plane that models a
circle enclosed by a unit square. The input argument ( 1000 ) determines
the number of x-y pairs to generate; the more pairs generated, the
greater the accuracy of the estimation. This estimation uses
Managed Service for Apache Spark worker nodes to parallelize the computation. For
more information, see
Estimating Pi using the Monte Carlo Method
and
JavaSparkPi.java on GitHub .
Click Submit .
Your job is displayed on the Job details page. The job status is
Running or Starting , and then it changes to Succeeded after
it's submitted.
To avoid scrolling in the output, click Line wrap: off . The output
is similar to the following:
Pi is roughly 3.1416759514167594
To view job details, click the Configuration tab.
Update a cluster
Update your cluster by changing the number of worker instances:
In the Managed Service for Apache Spark navigation menu, click Clusters .
In the list of clusters, click example-cluster .
On the Cluster details page, click the Configuration tab.
Your cluster settings are displayed.
Click mode_edit Edit .
In the Worker nodes field, enter 5 .
Click Save .
Your cluster is now updated. To decrease the number of worker nodes to the
original value, follow the same procedure.
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, follow these steps.
To delete the cluster, on the Cluster details page
for example-cluster , click
delete Delete .
To confirm that you want to delete the cluster, click Delete .
What's next
Try this quickstart by using other tools:
Use the API Explorer .
Use the Google Cloud CLI .
Learn how to create robust firewall rules when you create a project .
Learn how to write and run a Spark Scala job .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
