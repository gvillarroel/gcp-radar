---
title: "Set up a cross-project deployment \_|\_ Dataproc Metastore \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/dataproc-metastore/docs/cross-project-deployment
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc-metastore/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/dataproc-metastore/docs/cross-project-deployment
  title: "Set up a cross-project deployment \_|\_ Dataproc Metastore \_|\_ Google\
    \ Cloud Documentation"
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
Set up a cross-project deployment
Stay organized with collections
Save and categorize content based on your preferences.
You can set up a cross-project deployment for Dataproc Metastore to
separate the following resources:
The Dataproc Metastore service.
The Managed Service for Apache Spark cluster attached to the Dataproc Metastore
service.
The network used by the Managed Service for Apache Spark cluster.
Before you begin
Enable
Dataproc Metastore
in your project.
Create a Dataproc Metastore
service .
Understand networking
requirements specific to your
project.
Required Roles
To get the permissions that
you need to create a Dataproc Metastore and a Managed Service for Apache Spark cluster,
ask your administrator to grant you the
following IAM roles:
To grant full control of Dataproc Metastore resources:
Dataproc Metastore Editor ( roles/metastore.editor )
on the metastore project.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
For more information about specific Dataproc Metastore roles and permissions, see Manage access with IAM .
About cross-project deployments
A cross-project deployment for Dataproc Metastore
can consist of the following configurations:
Two projects:
Project one contains the Managed Service for Apache Spark cluster (cluster
project).
Project two contains the Dataproc Metastore service and
the network (metastore project and network project).
Two projects:
Project one contains the Managed Service for Apache Spark cluster.
Project two contains the Dataproc Metastore service and
the network (metastore project and network project).
Two projects:
Project one contains the Managed Service for Apache Spark cluster and the
Dataproc Metastore service (cluster project and metastore
project).
Project two contains and the network (network project).
Three projects:
Project one contains the Managed Service for Apache Spark cluster (cluster
project).
Project two contains the Dataproc Metastore service
(metastore project).
Project three contains the network (network project).
The following diagram provides an overview of the possible project
configurations you can use.
Cross-project permissions
Before you set up cross-project permissions, determine if it's necessary for
your configuration:
You must set up additional cross-project permissions
If your Managed Service for Apache Spark cluster and Dataproc Metastore
service are in separate projects.
If your Dataproc Metastore service and network are in separate
projects.
Set up cross-project permissions
If the cluster project and metastore project are in separate projects, grant
the following roles:
roles/metastore.user to the cluster project's Managed Service for Apache Spark
Service Agent account (contained in the metastore project's IAM policy). This
configuration applies to both the Thrift and gRPC endpoint protocols.
If the network project and metastore project are in separate projects, grant
the following roles:
roles/metastore.serviceAgent to the metastore project Service Agent
(contained in the network project's IAM policy). This configuration only
applies to the Thrift endpoint protocol.
Console
To find your project number:
Navigate to the IAM & Admin
Settings tab.
From the project list at the top of the page, select the project you
want to use to create the Managed Service for Apache Spark cluster.
Note the project number.
Configure the permissions:
Navigate to the IAM tab.
From the project list at the top of the page, select the metastore
project.
Click Add .
Enter the service account in the New Principals field.
From the Roles menu, select Dataproc Metastore >
Dataproc Metastore Viewer .
Click Add .
After you have completed the previous steps, you can create a Managed Service for Apache Spark
cluster that's attached to a Dataproc Metastore service. Note that
to do this, the Managed Service for Apache Spark cluster's network or subnetwork configuration
must match the Dataproc Metastore network or subnetwork.
Note: If you're using a VPC network belonging to a different project than the
service, you must provide the entire relative resource name in gcloud
metastore services create SERVICE .
For example:
gcloud metastore services create SERVICE \
--network=projects/ HOST_PROJECT /global/networks/ NETWORK_ID
What's next
Quickstart for deploying Dataproc Metastore
Dataproc Metastore overview
Managed Service for Apache Spark overview
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
