---
title: "Backup for GKE \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/concepts/backup-for-gke
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/concepts/backup-for-gke
  title: "Backup for GKE \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
Documentation
Guides
Send feedback
Backup for GKE
Stay organized with collections
Save and categorize content based on your preferences.
Autopilot
Standard
Backup for GKE is a service for backing up and restoring workloads in
GKE clusters. It has two components:
A Google Cloud API that serves as the control plane for the service.
A GKE add-on (the Backup for GKE agent) that must be enabled in each cluster
for which you wish to perform backup and restore operations.
Backups of your workloads may be useful
for disaster recovery, CI/CD pipelines, cloning workloads, or upgrade scenarios.
Protecting your workloads can help you achieve business-critical recovery point objectives.
Note: Backup for GKE is a separate service from GKE with
independent certifications and accreditation. For more information, see the
Backup for GKE architecture
overview .
Introduction
Once enabled, the Backup for GKE service integrates with the GKE UI,
Google Cloud CLI and REST APIs, providing consistent workflows for development
and operations. Two forms of data are captured in a backup:
Config backup : a set of Kubernetes resource manifests
extracted from the API server of the cluster undergoing backup, capturing
the cluster state.
Volume backups : a set of volume backups that correspond to
PersistentVolumeClaim resources found in the config backup.
You can choose which workloads that you want to back up or restore, or you can
back up or restore all workloads. You can back up workloads from one cluster and
restore them into another cluster. You can schedule your backups to
automatically run, so that you can respond quickly to recover your workloads in
the event of an incident.
Backup for GKE supports backing up or restoring a cluster across
projects. You can also create backup plans for a GKE cluster in
the same project as the cluster. Similarly, you can create restore plans
for a GKE cluster in the same project as the cluster.
Restoring a workload involves re-creating Kubernetes resources in the target
cluster. After the resources are created, restoration of workload capabilities
is subject to the cluster reconciliation process (for example, Pods are
scheduled to nodes, and then Pods are started on those nodes). During
restoration, you can optionally apply transformation rules, which are used to
match a set of resources and substitute the current value of an attribute on
those resources for a new value.
The combination of selective backup and restore with substitutions is designed
to enable and support many different backup and restore scenarios, for
example:
Back up all workloads in a cluster and restore them into a separate
cluster for disaster recovery.
Back up all workloads, but selectively roll back a single workload in
the source cluster.
Back up the resources in one namespace and clone them into another
namespace.
Migrate or clone a workload from one cluster to another cluster.
Change the storage parameters for a workload (for example, move the
workload from a zonal persistent disk to a regional persistent disk).
You must create a target cluster with the Backup for GKE service enabled before
you can back up or restore any workloads.
Architecture
Backup for GKE consists of two main components:
A service that runs in Google Cloud and supports a resource-based
REST API. This service serves as the control plane for Backup for GKE. The
service includes Google Cloud console UI elements that interact with this API.
An agent that runs in every cluster where backups or restores are
performed. The agent runs backup and restore operations in these clusters by
interacting with the Backup for GKE API.
The following diagram shows the relationship between the different
Backup for GKE components:
Service overview
The Backup for GKE service provides an API endpoint for clients to interact
with. The Backup for GKE API, like most Google Cloud APIs, operates against
application-specific cloud resources in a
resource hierarchy .
Backup for GKE manages a database of these application-specific resources and
the service API methods mostly correspond to create, read, update, or delete
operations against these resources.
There are two primary active resource types in the cloud resource model:
Backup : Represents the backup of a particular portion of a
GKE cluster at a specific point in time. Creating a Backup
resource initiates the backup process (eventually storing copies of the
target Kubernetes resources and creating snapshots of the target persistent
disk volumes). Deleting a Backup deletes these stored artifacts.
Restore : Represents the restore of a selected portion of a
specific Backup into a GKE cluster. Creating a Restore
resource initiates the restore process. Deleting
a Restore has no side effects, and removes the record of the
restore from the database.
Backup for GKE also includes two configuration and control resource types:
BackupPlan : a parent resource for Backup resources that
represent a chain of backups. This resource contains a backup configuration
including the source cluster, the selection of which workloads to back up,
and the region in which Backup artifacts produced under this plan are
stored. This region can be any of the supported locations. For backups
stored in a region different from the region of the GKE cluster,
outbound network data transfer charges apply. For more information,
see Backup for GKE pricing.
RestorePlan : provides a reusable restore template.
This resource contains a restore configuration including the target cluster
in which you want to restore the backup, the source backup plan, the scope of the restore,
conflict handling, and transformation rules. Before creating a restore plan,
you must create the target cluster. Backup for GKE doesn't create the
target cluster during a restore.
Agent overview
The Backup for GKE agent is deployed and runs in each GKE cluster
that you configure to be backed up by the Backup for GKE service. The agent
is responsible for running the backup and restore activities, for example:
Backup:
Orchestrating the backup process.
Fetching resources from the Kubernetes API server, serializing
them into an archive, and storing the archive.
Creating backups of underlying volumes associated with
PersistentVolumeClaims .
Restore:
Orchestrating the restore process.
Fetching the Kubernetes resource archive from storage, extracting the
selected resources, applying the appropriate modifications to these
resources, and creating them in the target cluster.
Creating volumes and wiring them into the Kubernetes configuration of
the target cluster.
Administrators don't interact with the agent, as the agent is driven by custom
Kubernetes resources ( BackupJob and RestoreJob ) automatically created in the
cluster by the Backup for GKE service in response to the creation of backup
and restore cloud resources. However, administrators can influence the
orchestration of backups by
creating optional ProtectedApplication
Kubernetes resources in the cluster. These ProtectedApplication resources are
unique to Backup for GKE and provide more fine-grained options for defining
backup and restore scope.
See Preview agent deprecation
for information about differences between the preview and GA versions of the
agent.
Zonal redundancy
The following section describes the zonal redundancy for Backup for GKE.
Backup for GKE artifacts are replicated across multiple zones within a
region, ensuring continued operation even if a zone experiences an outage.
Backup for GKE as a service is replicated across at least three zones
within each region, providing added redundancy and resilience.
Backup for GKE doesn't make any zone-level decisions when storing data.
Backup for GKE relies on the underlying regional facilities to handle zone-level replication.
What's not backed up
You can only back up Kubernetes resources and underlying persistent volumes with
Backup for GKE. Backup for GKE does not back up the following:
GKE cluster configuration information such as node
configuration, node pools, initial cluster size, or enabled features.
Container images referenced by a backup. Only the Kubernetes resources
that describe the workload and refer to the container images are backed up.
If an image referenced by a workload manifest in a backup is removed
from its image repository, then a subsequent restore of that configuration
won't successfully restore the workload.
Configuration information or state of services outside the cluster, such as
Cloud SQL or external load balancers.
Only Persistent Disk type volumes are backed up. Other volume types, such as
Filestore NFS or Google Cloud NetApp Volumes, aren't backed up. However,
Backup for GKE can be used to provide solutions for workloads that are
backed by Filestore volumes. For more information, see
Handle Filestore volumes with Backup for GKE .
What's next
Learn how to install Backup for GKE .
Learn how to create a manual backup .
Learn how to plan a set of backups .
Learn how to define custom backup and restore logic .
Learn how to restore a backup .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
