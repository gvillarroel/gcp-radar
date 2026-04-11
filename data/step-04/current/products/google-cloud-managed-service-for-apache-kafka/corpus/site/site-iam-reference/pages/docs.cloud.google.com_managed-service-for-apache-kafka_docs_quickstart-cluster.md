---
title: "Quickstart: Create and view a Google Cloud Managed Service for Apache Kafka\
  \ cluster \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/quickstart-cluster
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/quickstart-cluster
  title: "Quickstart: Create and view a Google Cloud Managed Service for Apache Kafka\
    \ cluster \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Google Cloud Managed Service for Apache Kafka
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Create and view a Managed Service for Apache Kafka cluster
Learn how to create a Managed Service for Apache Kafka cluster with a topic,
and view details about the cluster. You can use the Google Cloud console or the
Google Cloud CLI to complete this tutorial.
Before you begin
Console
Sign in to your Google Account. If you don't already have one,
sign up for a new account .
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
If you're using an existing project for this guide,
verify that you have
the permissions required to complete this guide . If you created a new
project, then you already have the required permissions.
Verify that billing is enabled for your Google Cloud project .
Enable the Managed Kafka API.
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
If you're using an existing project for this guide,
verify that you have
the permissions required to complete this guide . If you created a new
project, then you already have the required permissions.
Verify that billing is enabled for your Google Cloud project .
Enable the Managed Kafka API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
gcloud
Sign in to your Google Account. If you don't already have one,
sign up for a new account .
Install the Google Cloud CLI.
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
If you're using an existing project for this guide,
verify that you have the
permissions required to complete this guide . If you created a new project,
then you already have the required permissions.
Verify that billing is enabled for your Google Cloud project .
Enable the Managed Kafka API:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable managedkafka.googleapis.com
Install the Google Cloud CLI.
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
If you're using an existing project for this guide,
verify that you have the
permissions required to complete this guide . If you created a new project,
then you already have the required permissions.
Verify that billing is enabled for your Google Cloud project .
Enable the Managed Kafka API:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable managedkafka.googleapis.com
Required roles
To get the permissions that
you need to create the cluster,
ask your administrator to grant you the
following IAM roles on the project:
Managed Kafka Cluster Editor ( roles/managedkafka.clusterEditor )
Managed Kafka Topic Editor ( roles/managedkafka.topicEditor )
Compute Network User ( roles/compute.networkUser )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Create a cluster
Console
Go to the Managed Service for Apache Kafka > Clusters page.
Go to Clusters
Click add_box Create .
In the Cluster name box, enter a name for the cluster.
In the Region list, select a location for the cluster.
For Network configuration , configure the subnet where the cluster is accessible:
For Project , select your project.
For Network , select the VPC network.
For Subnet , select the subnet.
Click Done .
Click Create .
After you click Create , the cluster state is Creating . When the cluster
is ready, the state is Active .
gcloud
To create a Kafka cluster, run the
managed-kafka clusters
create command.
gcloud managed-kafka clusters create KAFKA_CLUSTER \
--location = REGION \
--cpu = 3 \
--memory = 3GiB \
--subnets = projects/ PROJECT_ID /regions/ REGION /subnetworks/ SUBNET_NAME \
--async
Replace the following:
KAFKA_CLUSTER : a name for the Kafka cluster
REGION : the location of the cluster
PROJECT_ID : your project ID
SUBNET_NAME : the subnet where you want to create the
cluster, for example default
For information about supported locations, see
Managed Service for Apache Kafka locations .
The command runs asynchronously and returns an operation ID:
Check operation [ projects/ PROJECT_ID /locations/ REGION /operations/ OPERATION_ID ] for status.
To track the progress of the create operation, use the
gcloud managed-kafka
operations describe command:
gcloud managed-kafka operations describe OPERATION_ID \
--location = REGION
When the cluster is ready, the output from this command includes the entry state:
ACTIVE . For more information, see
Monitor the
cluster creation operation .
After you follow these steps, it can take up to 30 minutes for the cluster to
be ready.
Optionally, while you wait for this operation to complete, look at the tutorials
listed in What's next . They show how to produce messages for the
cluster using various methods. Once the cluster is ready, you can complete any
of those tutorials.
Create a topic
When the Managed Service for Apache Kafka cluster is ready, create a topic.
Console
Go to the Managed Service for Apache Kafka >
Clusters page.
Go to Clusters
Click the name of the cluster.
In the cluster details page, click
add_box Create Topic .
In the Topic name box, enter a name for the topic.
Click Create .
gcloud
To create a Kafka topic, run the
managed-kafka topics create
command.
gcloud managed-kafka topics create KAFKA_TOPIC_NAME \
--cluster = KAFKA_CLUSTER \
--location = REGION \
--partitions = 10 \
--replication-factor = 3
Replace the following:
KAFKA_TOPIC_NAME : the name of the Kafka topic to
create
KAFKA_CLUSTER : the name of the Kafka cluster
REGION : the region where you created the Kafka
cluster
View the cluster
Once the cluster is ready, you can view information about the cluster,
including the topics, consumer groups, networks, and other details.
Console
Go to the Managed Service for Apache Kafka >
Clusters page.
Go to Clusters
Click the name of the cluster. The Cluster details page shows
information about the cluster. The Resources tab shows the resources
associated with the cluster, including topics.
To view details about a topic, select the Resources tab and click the
topic name. The Topic details page shows information about the topic,
such as the number of partitions and replicas.
To return to the Cluster details page, click
arrow_back Back to parent page .
gcloud
To view information about the cluster, run the
gcloud managed-kafka clusters describe command.
gcloud managed-kafka clusters describe KAFKA_CLUSTER \
--location = REGION
Replace the following:
KAFKA_CLUSTER : the name of the cluster
REGION : the region where you created the cluster
The output of this command is a list of cluster properties, similar to the
following:
bootstrapAddress: BOOTSTRAP_ADDRESS
capacityConfig:
memoryBytes: '3221225472'
vcpuCount: '3'
createTime: ' TIMESTAMP '
To get a list of topics in the cluster, run the
gcloud managed-kafka topics list command.
gcloud managed-kafka topics list KAFKA_CLUSTER \
--location = REGION \
--format = "value(name)"
The output includes the topics that you created, as well as topics that
Managed Service for Apache Kafka creates for internal use.
To view information about a topic, run the
gcloud managed-kafka topics describe command.
gcloud managed-kafka topics describe TOPIC_NAME \
--cluster = KAFKA_CLUSTER \
--location = REGION
Replace TOPIC_NAME with the name of the topic.
The output of this command is a list of topic properties, similar to the
following:
name: projects/ PROJECT_ID /locations/ /clusters/ KAFKA_CLUSTER /topics/ TOPIC_NAME
partitionCount: 10
replicationFactor: 3
Get the bootstrap address
Kafka clients use the cluster's bootstrap address to establish a connection
with the cluster. To get the bootstrap address, perform the following steps:
Console
Go to the Managed Service for Apache Kafka >
Clusters page.
Go to Clusters
Click the name of the cluster.
Select the Configurations tab.
The bootstrap URL is listed under Bootstrap URL . Click
content_copy Copy to copy the
value.
gcloud
To get the bootstrap URL, run the
managed-kafka clusters describe
command.
gcloud managed-kafka clusters describe KAFKA_CLUSTER \
--location = REGION \
--format = "value(bootstrapAddress)"
Replace the following:
KAFKA_CLUSTER : the name of the cluster
REGION : the region where you created the cluster
You are now ready to send messages to the cluster. For
more information, see What's next in this document.
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, delete the Google Cloud project with the
resources.
Console
Delete the cluster.
Go to the Managed Service for Apache Kafka >
Clusters page.
Go to Clusters
Select the Kafka cluster and click Delete .
gcloud
To delete the cluster, use the
gcloud managed-kafka clusters delete
command.
gcloud managed-kafka clusters delete KAFKA_CLUSTER \
--location = REGION --async
What's next
Produce messages for Kafka, either by using the Kafka command-line tools, or
by creating a client application:
Use the Kafka command-line tools
Develop a Java producer application
Develop a Python producer application
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
