---
title: "Dataproc Hub Overview \_|\_ Managed Service for Apache Spark \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/dataproc/docs/tutorials/dataproc-hub-overview
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/dataproc/docs/tutorials/dataproc-hub-overview
  title: "Dataproc Hub Overview \_|\_ Managed Service for Apache Spark \_|\_ Google\
    \ Cloud Documentation"
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
Send feedback
Dataproc Hub Overview
Stay organized with collections
Save and categorize content based on your preferences.
Dataproc Hub and
Vertex AI Workbench user-managed notebooks are
deprecated. On January 30, 2025, support for user-managed notebooks
will end and the ability to create user-managed notebooks instances
will be removed. For alternative notebook solutions
on Google Cloud, see:
Install
the Jupyter component on your Managed Service for Apache Spark cluster .
Create
a Managed Service for Apache Spark-enabled
Vertex AI Workbench instance .
The Dataproc Hub lets you to take advantage of
Vertex AI Workbench and Managed Service for Apache Spark to run
interactive ML and
data processing tasks at scale using Jupyter notebooks and the Hadoop and Spark
ecosystem.
Dataproc Hub notebooks are administrator-curated,
single-user notebooks running on a Managed Service for Apache Spark JupyterLab cluster
created and running in the user's project.
Dataproc Hub leverages JupyterHub to:
Bring consistency across the organization by enabling administrators to
create a curated list of notebook templates for different groups
of data and ML users.
Accelerate notebook creation by providing data and ML users with
pre-configured environments that match their software and hardware requirements.
Dataproc Hub provides separate interfaces for administrators and
users:
Administrators use the Dataproc→Workbench→User-Managed Notebooks
page in the Google Cloud console to create Dataproc Hub
instances. Each hub instance contains a predefined set of notebook
environments defined by YAML cluster configuration files.
Data and ML users use the Notebooks→Instances UI in the
Google Cloud console to select a predefined notebook environment to spawn
a notebook server on their Managed Service for Apache Spark cluster.
Users without console access can access the Dataproc Hub
instance to spawn a Managed Service for Apache Spark cluster from their web
browser by using a Dataproc Hub instance URL provided
by the administrator.
If the organization does not define and implement
separate notebook administrative and user roles, instead of using
Dataproc Hub to configure and spawn a Jupyter notebook cluster,
users can
install the Jupyter component on their cluster .
Dataproc Hub use cases:
Data and ML users are organized in groups with common software and
hardware requirements (users can be placed in multiple groups)
Restricted Managed Service for Apache Spark console access: Users do not have access
to Managed Service for Apache Spark in the Google Cloud console
Dataproc Hub features:
Predefined user environments
Cluster and notebook isolation: members of a group are not provided easy
access to clusters and notebooks of members in other groups
For more information
Admins: Configure Dataproc Hub
Users: Use Dataproc Hub
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
