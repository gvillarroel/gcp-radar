---
title: "Cloud Workstations architecture \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/workstations/docs/architecture
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/workstations/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/workstations/docs/architecture
  title: "Cloud Workstations architecture \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Workstations
Guides
Send feedback
Cloud Workstations architecture
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Workstations manages Google Cloud resources, such as Compute Engine
VMs
and persistent disks
(PDs), to give you more visibility and control over your projects' resources.
For example, you can set up scheduled disk snapshot
policies that enforce
backup policies for all workstations PDs. Similarly, having VMs inside your
project lets you seamlessly access and manage resources in your
VPC network.
The following diagram illustrates the architecture of Cloud Workstations.
Figure 1. Cloud Workstations Architecture
Workstation cluster
A workstation cluster contains and manages a collection of workstations in a
single cloud region
and VPC
network inside your
project. Each workstation cluster includes two components that are managed by
Google Cloud: a controller and a gateway.
Controller: manages the lifecycle of VM
instances and other
workstation resources inside of your project.
The controllers use the Compute Engine API to manage the lifecycle of
the resources, and utilize
Private Service Connect
to route traffic to the workstations' VMs.
Gateway: receives traffic from clients bound for particular
workstations, and forwards traffic to the appropriate VM instance. Each
workstation cluster has a unique domain name, and each workstation can be
reached at a subdomain of the workstation cluster's domain—for example,
$WORKSTATION_ID . $CLUSTER_ID .cloudworkstations.dev .
Other features of workstation clusters are as follows:
Administrators and platform teams create workstation clusters, which define
a group of workstations in a particular region and the VPC
network that they're attached to.
Workstation clusters aren't related to
Google Kubernetes Engine (GKE)
clusters.
Each workstation cluster has a dedicated controller that is connected to a
VPC within which workstations reside with
Private Service Connect
(and this has no impact on VPC peering limits). This
controller manages the workstations resources throughout their lifecycle and
provides network egress and ingress to the workstations through a public
cluster gateway.
Each cloud region requires at least one workstation cluster.
If necessary, it is also possible to enable a fully private
gateway , so that
only endpoints inside your private network have access to
Cloud Workstations.
VPC network
When creating a workstation cluster, you specify a project and a
VPC network to host the resources. Cloud Workstations
then provisions the following resources in your project:
Private Service Connect : establishes a connection between the
Cloud Workstations controller and your VPC, enabling
the creation of resources inside your project.
VM instance : a Compute Engine VM is dynamically created inside your
project and VPC after a workstation is started. This VM is
automatically deleted at the end of a user session or after a configurable
session timeout.
VM Gateway : pulls client traffic from the workstation cluster
gateway, authenticates and authorizes it, and forwards it to the
container.
Container : defines the tools pre-installed in a workstation, such as
the IDE or code editor, and any other programs or settings as specified by
the workstation configuration.
Cloud Workstations provides a number of base images
preconfigured with popular IDEs and language tooling. Additionally,
administrators and platform teams can customize their environments by
creating and specifying custom container images
that contain the tools necessary to meet their developers' needs. These
container images can extend the Cloud Workstations base image or
can be new, custom Linux container images created by the platform team.
Persistent Disk : a persistent disk attached to the workstation VM
mounted to the /home folder, allowing for data and files to be stored
after the session ends.
Resource lifecycle
Cloud Workstations manages VMs, container images and persistent disks for use as
the runtime environment for each workstation. Configure the specifications for
these resources in your workstation
configuration .
When a workstation is started, Cloud Workstations does the following:
Creates a VM.
Pulls the workstation container image onto the VM.
The first time the workstation is started, creates a persistent disk
to act as the workstation's /home directory.
Attaches the persistent disk to the VM.
Starts the container on the VM and mounts the persistent disk to the
/home directory in the container.
When the session ends, Cloud Workstations deletes the VM but detaches and
retains the persistent disk so that it can be used in future workstation
sessions. The workstations service retains the disk until the workstation is
deleted, at which point the persistent disk is also deleted—unless it is
optionally
configured to be retained .
Resource pooling
Administrators and platform teams can optionally pool VMs and persistent disks
for faster workstation startup using the
pool size workstation
configuration option. When specified, the service pools the specified number of
persistent disks and VMs and pre-pulls the container image onto the VM before
workstation assignment. Unassigned VMs and disks in the pool are automatically
deleted and recreated every 12 hours. This enables faster workstation startup
times by removing the wait time for creating VMs and pulling the container image
onto the VM.
When pooling is enabled, Cloud Workstations does the following when starting a
workstation:
Selects a VM from the pool that has the container image pre-pulled.
The first time the workstation is started, selects a persistent disk
from the pool.
Attaches the persistent disk to the VM.
Starts the container image on the VM and mounts the persistent disk to the
/home directory in the container image.
Refills the pool by creating a new VM and persistent disk to replace those
that were assigned.
When the session ends, Cloud Workstations deletes the VM but detaches and
retains the persistent disk so that it can be used in future workstation
sessions. The workstations service retains the disk until the workstation is
deleted, at which point the persistent disk is also deleted—unless it is
optionally
configured to be retained .
Container image updates
Because the workstation container image is pre-pulled onto the pooled VMs,
updates to the container image made in the remote image repository with the same
image tag are not picked up until all the pooled VMs have been assigned or
deleted after 12 hours. At that point, new VMs are created to replenish the pool
and pull the updated container image.
To force a pool refresh to pick up the container image updates immediately,
administrators can set the pool_size to 0 , and then set it back to the
preferred pool_size . From the Google Cloud console, Disable the
Quick start workstations feature in the workstation configuration, save the
configuration, set it back to the preferred number, and then save again.
Alternatively, administrators and platform teams can update the image tag in the
container.image
field in the workstation configuration, which forces a refresh of the pool to
pick up the new container image tag.
Reduce workstation startup time with Image streaming
Cloud Workstations supports Image streaming, which provides faster
workstation startup time by reducing the workstation container image pull time.
Image streaming in Cloud Workstations typically reduces container image pull
time from minutes to seconds, and workstation containers
usually start running without waiting for the entire image to download.
Requirements
You must meet the following requirements to use Image streaming in
Cloud Workstations:
You must enable the Container File System API in workstations host project.
Enable the Container File System API
Alternatively, you can run the following gcloud CLI command to
enable the Container File System API in workstations host project:
gcloud services enable containerfilesystem.googleapis.com
Your container images must be stored in Artifact Registry.
You must specify a service account for use in your workstation
configuration.
Tip: You can use the Compute Engine default service account
which is in format:
$WORKSTATION_CLUSTER_HOST_PROJECT_NUMBER -compute@developer.gserviceaccount.com
Warning: You cannot use the default workstations VM service
account formatted like:
service- $WORKSTATION_CLUSTER_HOST_PROJECT_NUMBER @gcp-sa-workstationsvm.iam.gserviceaccount.com
If your cluster is inside a VPC Service Controls perimeter, you must add an
egress rule
allowing your service account to access the Container File System API on
the project hosting your container image. If you are using a
preconfigured IDE , you must add
the cloud-workstations-images project (project number 662288601415 )
to the allowlist.
Limitations
You might not notice the benefits of Image streaming during the first
pull of an eligible image. However, after Image streaming caches the
image, future image pulls on a workstation benefit from Image streaming.
Other GKE Image streaming Limitations
apply.
Idle timeouts
You can configure your workstations to automatically shut down after a
period of idleness. The idle timeout is reset on every incoming network request
and every time the workstations.Start
API call is issued. Additionally, the Preconfigured IDEs
installed in the base workstation images
come preinstalled with a plugin to detect interaction with the IDE (mouse click, key press, etc)
and reset the idle timeout.
If you kick off a long running background process and stop interacting with the
workstation you might reach the idle timeout threshold. This causes the workstation to shutdown.
If the workstation needs to be kept alive, you can use the /google/scripts/keep_alive.sh
script present in the base workstation images to prevent idle timeouts. Alternatively,
trigger the workstation.Start API call in the background process to prevent the idle
shutdown. For example, if you are using the Google Cloud CLI, you can do this by running the
gcloud workstations start command.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
