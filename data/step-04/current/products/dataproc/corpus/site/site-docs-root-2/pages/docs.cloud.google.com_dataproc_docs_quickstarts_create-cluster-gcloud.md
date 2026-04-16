---
title: "Create a cluster by using the gcloud CLI \_|\_ Managed Service for Apache\
  \ Spark \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataproc/docs/quickstarts/create-cluster-gcloud
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage
source_metadata:
  url: https://docs.cloud.google.com/dataproc/docs/quickstarts/create-cluster-gcloud
  title: "Create a cluster by using the gcloud CLI \_|\_ Managed Service for Apache\
    \ Spark \_|\_ Google Cloud Documentation"
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
Create a cluster by using the gcloud CLI
Stay organized with collections
Save and categorize content based on your preferences.
This page shows you how to use the Google Cloud CLI
gcloud command-line tool to create a
Managed Service for Apache Spark cluster, run a Apache Spark job
in the cluster, then modify the number of workers in the cluster.
You can find out how to do the same or similar tasks with
Quickstarts Using the API Explorer ,
the Google Cloud console in
Create a cluster by using the Google Cloud console ,
and using the client libraries in
Create a cluster by using client libraries .
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
Install the Google Cloud CLI.
Note: If you installed the gcloud CLI previously, make sure you have
the latest version by running gcloud components update .
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Create or select a Google Cloud project .
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
Create a Google Cloud project:
gcloud projects create PROJECT_ID
Replace PROJECT_ID with a name for the Google Cloud project you are creating.
Select the Google Cloud project that you created:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with your Google Cloud project name.
Verify that
you have the permissions required to complete this guide .
Verify that billing is enabled for your Google Cloud project .
Enable the Dataproc API:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable dataproc.googleapis.com
Install the Google Cloud CLI.
Note: If you installed the gcloud CLI previously, make sure you have
the latest version by running gcloud components update .
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Create or select a Google Cloud project .
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
Create a Google Cloud project:
gcloud projects create PROJECT_ID
Replace PROJECT_ID with a name for the Google Cloud project you are creating.
Select the Google Cloud project that you created:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with your Google Cloud project name.
Verify that
you have the permissions required to complete this guide .
Verify that billing is enabled for your Google Cloud project .
Enable the Dataproc API:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable dataproc.googleapis.com
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
To create a cluster called example-cluster , run the following
gcloud Managed Service for Apache Spark clusters create command.
A convenient way to run the gcloud
command-line tool is from
Cloud Shell ,
which has the Google Cloud CLI pre-installed. Cloud Shell
is free for Google Cloud customers. To use Cloud Shell, you need a
Google Cloud project.
gcloud dataproc clusters create example-cluster --region= REGION
Replace the following:
REGION : Specify a region
where the cluster will be located.
Submit a job
To submit a sample Spark job that calculates a rough value for pi , run the
following
gcloud Managed Service for Apache Spark jobs submit spark command:
gcloud dataproc jobs submit spark --cluster example-cluster \
--region= REGION \
--class org.apache.spark.examples.SparkPi \
--jars file:///usr/lib/spark/examples/jars/spark-examples.jar -- 1000
Notes:
Replace the following:
REGION : Specify the cluster region.
The job runs on the example-cluster .
The class contains the main method for the SparkPi, which calculates
an approximate value of pi .
application.
The jar file contains the job code.
1000 is a job parameter. It specifies the number of tasks (iterations)
the job performs to calculater the value of pi .
Parameters passed to the job must follow a double dash ( -- ).
For more information, see the
Google Cloud CLI documentation .
The job's running and final output is displayed in the terminal window:
Waiting for job output...
...
Pi is roughly 3.14118528
...
Job finished successfully.
Update a cluster
To change the number of workers in the cluster to five, run the
following command:
gcloud dataproc clusters update example-cluster \
--region= REGION \
--num-workers 5
The command output displays cluster details:
workerConfig:
...
instanceNames:
- example-cluster-w-0
- example-cluster-w-1
- example-cluster-w-2
- example-cluster-w-3
- example-cluster-w-4
numInstances: 5
statusHistory:
...
- detail: Add 3 workers.
To decrease the number of worker nodes to the original value of 2 , run
the following command:
gcloud dataproc clusters update example-cluster \
--region= REGION \
--num-workers 2
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, follow these steps.
To delete the example-cluster , run the
clusters delete
command:
gcloud dataproc clusters delete example-cluster \
--region= REGION
What's next
Learn how to write and run a Spark Scala job .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
