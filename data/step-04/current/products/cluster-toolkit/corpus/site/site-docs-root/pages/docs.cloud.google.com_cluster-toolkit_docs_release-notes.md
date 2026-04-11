---
title: "Cluster Toolkit release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/cluster-toolkit/docs/release-notes
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/cluster-toolkit/docs
source_metadata:
  url: https://docs.cloud.google.com/cluster-toolkit/docs/release-notes
  title: "Cluster Toolkit release notes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Cluster Toolkit
Resources
Send feedback
Cluster Toolkit release notes
Stay organized with collections
Save and categorize content based on your preferences.
This page documents production updates to Cluster Toolkit. Check this page for
announcements about new or updated features, bug fixes, known issues, and
deprecated functionality.
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
March 25, 2026
v1.85.0
Feature
Cluster Toolkit version v1.85.0 is available. This release updates the
cloud_dns_config setting in the gke-cluster module to default to KUBE_DNS
(CoreDNS). This version also adds Google Cloud Managed Lustre integration for
Google Kubernetes Engine with the A4X Max machine type.
For more information about this release and other minor changes, see the Release
announcement on GitHub .
March 12, 2026
v1.84.0
Feature
Cluster Toolkit version v1.84.0 is available. This release adds disk
type validation in specific zones, updates GKE versioning for GPU
direct configurations, and fixes an issue with NCCL test scripts on A3 High
instances. For details, see the Release announcement on
GitHub .
March 05, 2026
v1.83.0
Feature
Cluster Toolkit version v1.83.0 is available. This release introduces
early conditional and required validations, adds support for A4X-Max Bare Metal
on GKE and Slurm, and enables Dynamic Workload Scheduler Queued Provisioning
for TPU v6e and 7x. It also includes several module migrations to Helm and pins
Terraform to version 1.12.2. For details, see the Release announcement on
GitHub .
February 12, 2026
v1.82.0
Feature
Cluster Toolkit version v1.82.0 is available. This release adds
an A4X JBVM blueprint that is designed to provision and deploy a group of
virtual machines (VMs) for machine learning (ML) workloads. This release
includes a ZIP archive of binaries to the release that improves the install
process. This release removes Terraform validation for machine types. The API
validation now handles this Terraform validation because custom machine types
are not supported.
For more information about this release, see the Release announcement on
GitHub .
February 05, 2026
v1.81.0
Feature
Cluster Toolkit version v1.81.0 is available. This release adds
support for the Dynamic Workload Scheduler (DWS) Flex-start provisioning model on TPU
7x and TPU v6e resources. This release also updates Slurm cluster blueprints to
use the Cloud Storage FUSE profile feature for AI/ML Cloud Storage bucket mounts.
For more information about this release, see the Release
announcement on GitHub .
January 28, 2026
v1.80.0
Feature
Cluster Toolkit version v1.80.0 is available. This release adds
support for IPv6 and the Infrastructure Data-Plane Function (IDPF). This version
makes the H4D blueprint more concise by refactoring the vpc and multivpc
modules to support more variables. Additionally, this release integrates the
Report and Replace (R&R) API with Slurm, which lets you report faulty nodes for
repair or replacement.
For more information about this release, see the Release announcement on GitHub .
January 21, 2026
v1.79.0
Feature
Cluster Toolkit version v1.79.0 is available. This release enables
Dynamic Workload Scheduler
Flex-start provisioning for G4 instances.
For more information about this release and other minor changes, see the
Release announcement on
GitHub .
January 14, 2026
v1.78.0
Feature
Cluster Toolkit version v1.78.0 is available. This release adds a
deprecation notice for the Parallelstore module. This version also adds support
for gIB versions v1.1.1 and v1.1.0 for the Arm64-based architecture.
For more information about this release and other minor changes, see the Release
announcement on GitHub .
January 07, 2026
v1.77.0
Feature
Cluster Toolkit version v1.77.0 is available. This release introduces
a robust destroy process to help ensure that you can reliably delete resources from
the Cluster Toolkit. This version also adds an automated Google Cloud
resource cleanup script and integrates a Cloud Build pipeline to let you
remove resources that are no longer required.
For more information
about this release and other minor changes, see the Release announcement on
GitHub .
December 18, 2025
v1.76.0
Feature
Cluster Toolkit version v1.76.0 is available. This release introduces
an example NCCL test script for Slurm on GKE and makes the wait parameter for
Kueue installation configurable, and adds a wait parameter for
Kueue in the
examples/gke-g4/gke-g4.yaml
blueprint. For more information about this release, see the Release
announcement on
GitHub .
December 10, 2025
v1.75.0
Feature
Cluster Toolkit version v1.75.0 is available. This release graduates
the cloud-storage-bucket module to the core collection of modules and adds
integration tests for TPU v6e and TPU 7x. This version also enables Spot VM
testing for A3 Ultra instances and provides ML dependencies and dual NIC
guidance for G4 machines. For more information about this release, see the
Release announcement on
GitHub .
December 04, 2025
v1.74.0
Feature
Cluster Toolkit version v1.74.0 is available. This release adds support
for Google Cloud NetApp Volumes and introduces new blueprint files for TPU 7x
instances. This release also adds a force_conflicts flag that you can use when
you apply manifests using the kubectl command. This release also updates the
nccl-tcpxo-installer , nri-device-injector , and nccl-test values for
a3-megagpu-8g machines. For more information about this release, see the
Release announcement on
GitHub .
November 19, 2025
v1.73.0
Feature
Cluster Toolkit version v1.73.0 is available. This release adds support
for the
GKE Inference Gateway
and adds a new blueprint for A3
High machines that
automates the process of building a custom image with a TCPx-patched kernel for
enhanced network performance. This version also includes an initial blueprint
for G4 machine types and parameterized the
gIB NCCL RDMA plugin installer in the gke-a4x.yaml blueprint. For more
information about this release, see the Release announcement on
GitHub .
November 13, 2025
v1.72.0
Feature
Cluster Toolkit version v1.72.0 is available. This release adds support
for Google Cloud Managed Lustre as an optional storage solution for the
gke-tpu-v6-advanced blueprint. This release also adds four example
blueprints to support the deployment of Sycomp storage. In addition, this release makes
improvements to the gke-node-pool module and a4xhigh-slurm-blueprint.yaml
blueprint. For more information about this release, see the Release
announcement on
GitHub .
November 03, 2025
v1.71.0
Feature
Cluster Toolkit version v1.71.0 is available. This release includes a
fix for a munge mount on login failure due to slow controller Slurm v6 setup, and
adds Managed Lustre support in the gke-a4x blueprint. For more information about
this release, see the Release announcement on
GitHub .
October 24, 2025
v1.70.0
Feature
Cluster Toolkit version v1.70.0 is available. This release adds
automated TPU support and Cloud Storage FUSE mounts in the TPU v6 blueprint and refactors
the H4D blueprint. This version also includes breaking changes, such as removing
support for the maintenance_interval field for reservations created by Technical Account Managers (TAMs) and
migrating Jobset from static manifests to a Helm chart. For a complete list of
changes, see the Release announcement on
GitHub .
October 21, 2025
v1.69.0
Feature
Cluster Toolkit version v1.69.0 is available. This release adds
NUMA-aware scheduling in GKE clusters for G4 machines and adds a new module that
provides mount scripts for WEKA filesystems. This version also includes PSA
updates and adds a GKE sample for running the nvidia-bug-report shell script. For details, see
the Release announcement on
GitHub .
October 10, 2025
v1.68.0
Feature
Cluster Toolkit version v1.68.0 is available. This release lets you
download the NVIDIA Collective Communications Library (NCCL) software packages
libnccl2 and libnccl-dev for A3U and A4H machine types. For more information
about this release, see the Release announcement on
GitHub .
This release supports the generally available, open-source IBM Spectrum Symphony
HostFactory connectors for Google Compute Engine and Google Kubernetes Engine, which you
can deploy through Cluster Toolkit to extend your on-premises cluster
or run entirely within Google Cloud. For information, see Run IBM Spectrum
Symphony workloads .
September 19, 2025
v1.67.0
Feature
Cluster Toolkit version v1.67.0 is available. This release adds support
for aarch64-based architecture. For more information about this release, see the
Release announcement on
GitHub .
September 15, 2025
v1.66.0
Feature
Cluster Toolkit version v1.66.0 is available. This release lets you use
Cloud Storage FUSE for H4D machine types and sets the default cluster availability to
zonal. For more information about this release, see the Release announcement on
GitHub .
September 09, 2025
v1.65.0
Feature
Cluster Toolkit version v1.65.0 is available. This release expands
support for Managed Lustre on A4X instances and provides an improved GPU network
wait solution for A-family machine types. This version also deprecates
Debian-based blueprints for A3 Mega GPUs. For a complete list of changes, see
the Release announcement on
GitHub .
September 01, 2025
v1.64.0
Feature
Cluster Toolkit version v1.64.0 is available. This release integrates
GKE Managed Lustre, which provides high-performance, scalable storage for your
GKE clusters. The storage for A3 Ultra machine types now uses basic SSD for
improved performance. This version also improves support for alternative
services for private service access. For details about these changes and other
updates, see the Release announcement on
GitHub .
August 26, 2025
v1.63.0
Feature
Cluster Toolkit version v1.63.0 is available. This release upgrades
Slurm image versions to the 6-11 iteration, for example,
slurm-gcp-6-11-hpc-rocky-linux-8 . This version migrates Dynamic Workload
Scheduler (DWS) Flex-start to regional managed instance groups (MIGs). This
version also includes breaking changes, for example, updating the file storage
for A3 Ultra machine types to basic HDD. For a complete list of new features,
improvements, and bug fixes, see the Release announcement on
GitHub .
August 14, 2025
v1.62.0
Feature
Cluster Toolkit version v1.62.0 is available. This release adds new
blueprints for A4X instances and adds a community scheduler module for Slinky
(Slurm on Kubernetes). For details, see the Release announcement on
GitHub .
August 04, 2025
v1.61.0
Change
Cluster Toolkit version v1.61.0 is available. This release adds a
namespace for GKE modules and optimizes Cloud Storage FUSE
configurations for A3 Ultra and A4 blueprints. For details, see the Release
announcement on
GitHub .
July 22, 2025
v1.59.0
Change
Cluster Toolkit version v1.59.0 is available. This release adds a
configurable number of IP addresses per NAT for A-family blueprints and fixes an
issue with additional disks for login nodes. For details, see the Release
announcement on
GitHub .
July 15, 2025
v1.58.0
Feature
Cluster Toolkit version v1.58.0 is available. This release adds a new
blueprint for deploying GKE clusters with H4D instances and
deprecates blueprints for deploying Parallelstore. For details, see the
Release announcement on
GitHub .
June 30, 2025
v1.57.0
Feature
Cluster Toolkit version v1.57.0 is available. This release integrates
Cluster Health Scripts (CHS) with GKE blueprints for A3 Mega, A3
Ultra, and A4 instances. For details, see the Release announcement on
GitHub .
June 23, 2025
v1.56.0
Change
Cluster Toolkit version v1.56.0 is available. This release improves
SlurmGCP Resume functionality and includes several bug fixes. For details, see
the Release announcement on
GitHub .
June 16, 2025
v1.55.0
Feature
Cluster Toolkit version v1.55.0 is available. This release adds a new
blueprint for a high-throughput AlphaFold 3 execution environment and aligns
Cloud Storage FUSE configurations with best practices. For details, see the Release
announcement on
GitHub .
June 10, 2025
v1.54.0
Change
Cluster Toolkit version v1.54.0 is available. This release adds Managed
Lustre support for non-default ports in GKE and adds a network
blocking script for A3 High instances. For details, see the Release
announcement on
GitHub .
June 05, 2025
v1.53.0
Change
Cluster Toolkit version v1.53.0 is available. This release standardizes
the A3 Mega Slurm solution on Ubuntu and adds a new GKE blueprint
for A4X instances. For details, see the Release announcement on
GitHub .
May 22, 2025
v1.52.0
Breaking
Cluster Toolkit version v1.52.0 is available. This release improves
CloudSQL support with database flags and query insights, and adds several bug
fixes. For details, see the Release announcement on
GitHub .
May 13, 2025
v1.51.0
Feature
Cluster Toolkit version v1.51.0 is available. This release adds GPU
health-check epilogs for A3 High and A3 Mega Slurm blueprints and adds a new
GKE TPU v6e example. For details, see the Release announcement
on
GitHub .
May 05, 2025
v1.50.0
Feature
Cluster Toolkit version v1.50.0 is available. This release adds new
blueprints for Managed Lustre attached to VMs and Slurm clusters. For details,
see the Release announcement on
GitHub .
April 24, 2025
v1.49.0
Feature
Cluster Toolkit version v1.49.0 is available. This release adds TPU
support to the GKE nodepool module and adds support for Managed
Lustre. For details, see the Release announcement on
GitHub .
April 01, 2025
v1.48.0
Feature
Cluster Toolkit version v1.48.0 is available. This release updates the
GKE nodepool module to support multiple nodepools and adds
automatic GPU health checks for Slurm. For details, see the Release
announcement on
GitHub .
February 27, 2025
v1.47.0
Feature
Cluster Toolkit version v1.47.0 is available. This release adds support
for the A4 machine family in GKE and Slurm blueprints and adds
Dynamic Workload Scheduler Flex support for GKE. For details, see the Release
announcement on
GitHub .
February 07, 2025
v1.46.0
Feature
Cluster Toolkit version v1.46.0 is available. This release officially
supports Kueue as the workload scheduler for A3U and adds new blueprints for
A3U, H4D VMs, and Slurm. For details, see the Release announcement on
GitHub .
January 15, 2025
v1.45.0
Change
Cluster Toolkit version v1.45.0 is available. This release updates A3
Ultra GKE blueprints to newer versions of Kueue and Jobset, and
adds support for cluster deletion protection. For details, see the Release
announcement on
GitHub .
For information about previous releases of Cluster Toolkit, see the
Announcements page on
GitHub .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
