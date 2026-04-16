---
title: "Managed Service for Apache Spark components \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataproc/docs/concepts/components/druid
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/dataproc/docs/concepts/components/druid
  title: "Managed Service for Apache Spark components \_|\_ Google Cloud Documentation"
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
Managed Service for Apache Spark components
Stay organized with collections
Save and categorize content based on your preferences.
This document provides an overview of the different types of components
available in Managed Service for Apache Spark clusters. Understanding these components
is essential for configuring your clusters to include the necessary tools and
services for your big data workloads. Managed Service for Apache Spark components are
categorized as installed, optional, or initialization action components.
Types of components
Managed Service for Apache Spark clusters feature the following types of components:
Installed components: Components that are installed in the image and activated
when the cluster is created.
Optional components: Components that you select to install and use on
your cluster when you create the cluster. Managed Service for Apache Spark installs and
activates optional components depending on the cluster image version as follows:
2.2 and earlier image versions : Optional components are automatically
installed. Selected optional components are activated and non-selected
optional components are uninstalled at cluster creation.
2.3 and later image versions : All optional components are installed during
cluster creation except the Jupyter, Iceberg, and Delta Lake optional components,
which are pre-installed in 2.3 and later image versions. Pre-installed
optional components are removed from a 2.3 or later image version cluster
if they are not enabled when the cluster is created. For more information, see
Managed Service for Apache Spark 2.3.x release versions .
To avoid increased startup time for
2.3 and later image version clusters, create a
custom image
with optional components pre-installed. You can do this by running
generate_custom_image.py
with the
--optional-components
flag.
Initialization action components: Components installed on a cluster as part
of an initialization action
that you specify when you create a cluster.
Optional components are installed on a cluster before
initialization actions
are run on the cluster.
The Managed Service for Apache Spark image version pages
list the components and component types available in the latest
Managed Service for Apache Spark image releases.
Optional components have the following advantages over initialization actions
used to install components:
Optional components are tested as compatible with specific
Managed Service for Apache Spark versions.
Optional components are enabled with a cluster creation parameter;
initialization actions require a script.
Available optional components
Optional component
Component name
in Google Cloud CLI commands and API requests
Image Version
Release Stage
Delta Lake
DELTA
2.2.46 and later
GA
Docker
DOCKER
1.5 and later
GA
Flink
FLINK
1.5 and later
GA
HBase
HBASE
1.5 and later
(not available in 2.1 and later)
Deprecated
Hive WebHCat
HIVE_WEBHCAT
1.3 and later
GA
Hudi
HUDI
1.5 and later
GA
Iceberg
ICEBERG
2.2 and later
GA
Jupyter Notebook
JUPYTER
1.3 and later
GA
Pig
PIG
1.5 * and later
GA
Presto
PRESTO
1.3 and later
(not available in 2.1 and later)
GA
Ranger
RANGER
1.3 and later
GA
Solr
SOLR
1.3 and later
GA
Trino
TRINO
2.1 and later
GA
Zeppelin Notebook
ZEPPELIN
1.3 and later
GA
Zookeeper
ZOOKEEPER
1.0 and later
GA
Notes:
Apache Pig is an optional component in image versions 2.3 and later. It was
pre-installed in 2.2 and earlier image versions.
See Cluster web interfaces
for connecting to component Web interfaces running on clusters.
Also see the Managed Service for Apache Spark
Component Gateway ,
which lets you connect to the web interfaces of Managed Service for Apache Spark
core and optional components, including YARN, HDFS, Jupyter,
and Zeppelin UIs, without requiring the use of
SSH tunnels or the
modification of firewall rules
to allow inbound traffic.
Add optional components
Note: The following usage examples apply to
General Availability (GA)
components.
Console
In the Google Cloud console, go to the Managed Service for Apache Spark
Create a cluster page.
Go to Create a cluster
The Set up cluster panel is selected.
In the Components section, under
Optional components , select one or more components to
install on your cluster.
Google Cloud CLI
To create a Managed Service for Apache Spark cluster and install one or more
optional components on the cluster, use the
gcloud beta dataproc clusters create cluster-name
command with the --optional-components flag.
gcloud dataproc clusters create CLUSTER_NAME \
--optional-components= COMPONENT-NAME(s) \
... other flags
REST API
Optional components can be specified through the Managed Service for Apache Spark API
using
SoftwareConfig.Component
as part of a
clusters.create
request.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
