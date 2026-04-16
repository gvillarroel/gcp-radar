---
title: "Managed Service for Apache Spark optional Docker component \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/dataproc/docs/concepts/components/docker
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/dataproc/docs/concepts/components/docker
  title: "Managed Service for Apache Spark optional Docker component \_|\_ Google\
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
Guides
Send feedback
Managed Service for Apache Spark optional Docker component
Stay organized with collections
Save and categorize content based on your preferences.
To run Docker containers on your Managed Service for Apache Spark cluster nodes, enable
the Docker optional component during cluster creation. This document explains
how to install and configure the Docker component on Managed Service for Apache Spark.
To learn more about other available optional components in
Managed Service for Apache Spark, see
Available optional components .
How the Docker component works
When you enable the Managed Service for Apache Spark Docker component, it installs a
Docker daemon
on each cluster node. It also sets up a Linux user and group, both named
"docker", on each node to run the Docker daemon. Additionally, the component
creates "docker" systemd
service to run the dockerd
service. You should use this systemd service to manage the
lifecycle of the Docker service.
Install the component
Install the component when you create a Managed Service for Apache Spark cluster.
The Docker component can be installed on clusters created with
Managed Service for Apache Spark image version 1.5
or later .
See
Supported Managed Service for Apache Spark versions
for the component version included in each Managed Service for Apache Spark image release.
gcloud command
To create a Managed Service for Apache Spark cluster that includes the Docker component,
use the
gcloud dataproc clusters create cluster-name
command with the --optional-components flag.
gcloud dataproc clusters create cluster-name \
--optional-components=DOCKER \
--region= region \
--image-version=1.5 \
... other flags
REST API
The Docker component can be specified through the Managed Service for Apache Spark API using
SoftwareConfig.Component
as part of a
clusters.create
request.
Console
Enable the component.
In the Google Cloud console, open the Managed Service for Apache Spark
Create a cluster
page. The Set up cluster panel is selected.
In the Components section:
Under Optional components, select Docker and other optional
components to install on your cluster.
Enable Docker on YARN
See Customize your Spark job runtime environment with Docker on YARN
to use a customized Docker image with YARN.
Docker Logging
By default, the Managed Service for Apache Spark Docker component writes logs to
Cloud Logging by setting the gcplogs driver —see
Viewing your logs .
Docker Registry
The Managed Service for Apache Spark Docker component configures Docker to
use Container Registry in addition to the default Docker registries.
Docker will use the Docker credential helper to authenticate with
Container Registry.
Use the Docker component on a Kerberos cluster
You can install the Docker optional component on a cluster that is
being created with
Kerberos security enabled .
Docker is not part of the Hadoop ecosystem, and isn't
recognized by Hadoop services. If you run a container that communicates with
Hadoop services directly, your container must have the required Kerberos keytab
file and credential.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
