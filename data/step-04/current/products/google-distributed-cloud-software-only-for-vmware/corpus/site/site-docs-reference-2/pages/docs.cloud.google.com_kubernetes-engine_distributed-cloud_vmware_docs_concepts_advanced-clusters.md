---
title: "Advanced clusters \_|\_ Google Distributed Cloud (software only) for VMware\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/security
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters
  title: "Advanced clusters \_|\_ Google Distributed Cloud (software only) for VMware\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Google Distributed Cloud
Documentation
GDC for VMware
Guides
Send feedback
Advanced clusters
Stay organized with collections
Save and categorize content based on your preferences.
This document provides information about the advanced clusters feature and the
implications of enabling it. The advanced clusters feature is available for
Preview for version 1.31 admin clusters and user clusters. The advanced clusters
feature is in GA for version 1.32 admin clusters and user clusters and higher.
Note the following differences between versions:
In version 1.31, the advanced cluster feature is in preview.
You can enable advanced cluster at cluster creation time for new 1.31
clusters only.
After advanced cluster is enabled, you won't be able to upgrade the cluster
to 1.32. Only enable advanced cluster in a test environment.
In version 1.32, the advanced cluster feature is GA.
By default, clusters are created as advanced clusters. You have to
explicitly set enableAdvancedCluster to false in the cluster
configuration file if you want to create a non-advanced cluster.
For clusters that have the advanced clusters feature enabled, cluster
upgrades are supported.
Starting with version 1.33, advanced clusters are the standard for all new
clusters you create. If you set enableAdvancedCluster to false , cluster
creation fails.
If you upgrade existing non-advanced clusters to version 1.33, by default, the
system automatically converts them to advanced clusters. When upgrading
to version 1.33, you have the option to have the cluster remain
non-advanced. For details, see
Upgrade a version 1.32 non-advanced cluster and keep it as non-advanced .
Keeping a cluster as non-advanced is supported only for upgrades from version
1.32 to 1.33. When you upgrade a non-advanced cluster from version 1.33 to
1.34, the cluster is always converted to an advanced cluster.
You must use the gkectl command line tool to upgrade non-advanced clusters
to version 1.33 or later. The GKE On-Prem API clients, Terraform, the
Google Cloud console, and the gcloud CLI, aren't supported.
About cert-manager installation: cert-manager is
automatically installed on advanced clusters. When you migrate from a
non-advanced cluster to an advanced cluster, the integrated
cert-manager automatically overrides any
customer-installed versions of cert-manager . Make sure you don't
have critical custom configurations or features applied to
your existing cert-manager before you update or upgrade to advanced
clusters. For more information, see Upgrade to
cert-manager bundled with advanced clusters .
Note: Advanced clusters use a consolidated Google Distributed Cloud architecture by
using Google Distributed Cloud for Bare Metal as the underlying framework for
Google Distributed Cloud for VMware. You might see references to "bare metal" in node
labels, API resources, and system tags.
This page is for Admins and architects who define IT solutions and system
architecture in accordance with company strategy, and create and manage policies
related to user permissions. To learn more about common roles and example tasks
that we reference in Google Cloud content, see
Common GKE user roles and tasks .
Consistent experience and implementation
The advanced clusters feature implements a cluster architecture that better
aligns Google Distributed Cloud for VMware with the rest of the Google Distributed Cloud
products. A cluster that has advanced clusters enabled has a shared platform
with other Google Distributed Cloud clusters. This shared platform uses the same
controllers and agents, which increases reliability and can help Google provide
better support. There's also improved performance for cluster operations when
advanced clusters is enabled.
The new architecture brings a consistent experience and implementation with all
other Google Distributed Cloud offerings, and you can benefit from feature parity with
other Google Distributed Cloud offerings in the long run.
Access to new features
You enable advanced clusters to access the latest features and capability, such
as topology domains , which gives you better control over how your workloads are distributed across your cluster nodes.
In future minor releases, advanced features, such as topology domains, are available for advanced clusters only.
Differences when running advanced clusters
When you enable advanced clusters, some features or capabilities might not work
the same as they do for clusters without the feature enabled. Some of these
changes apply only while the feature is in Preview. The differences are noted
throughout the documentation, where relevant.
The following table lists the features supported for Google Distributed Cloud for
VMware, their availability status when advanced clusters is enabled , and any
differences in behavior or use:
Make a selection
No differences
Changes apply
Not supported
Not recommended
Deprecated
Feature/capability
1.31 Adv. clusters (Preview)
1.32 Not enabled
1.32 Advanced clusters (GA)
1.33 Advanced clusters (GA)
Differences
Advanced clusters
Preview
GA
GA
GA
Not supported
Topology domains
Preview
Preview
Preview
Changes apply. For more information see
Set up topology domains
and related cluster configuration references.
Regional fleet membership
GA
GA
GA
GA
No differences.
Version skew n+2 admin cluster - user cluster
GA
GA
GA
Not recommended: Since we don't support managing a lower version
preview user cluster, this feature shouldn't be used.
Version skew n+2 node pool - user cluster
GA
GA
GA
Not recommended: Since we don't support managing a lower version
preview user cluster, this feature shouldn't be used.
Max surge setting for node pool updates
Preview
Preview
Preview
Preview
No differences.
cgroup v2 for nodes
GA
GA
GA
GA
No differences.
DSR mode for Dataplane V2
GA
GA
GA
GA
No differences.
BinAuthz for Controlplane V2 user clusters
GA
GA
GA
GA
No differences.
User-managed admin workstation
GA
GA
GA
GA
No differences.
StatefulSet CSI migration tool
GA
GA
GA
GA
No differences.
Seesaw to MetalLB migration
GA
GA
GA
GA
No differences.
Disable bundled ingress
GA
GA
GA
GA
No differences.
Admin cluster prepared credentials
GA
GA
GA
No differences.
Storage policy for a user cluster
GA
GA
GA
GA
No differences.
Storage policy for an admin cluster
GA
GA
GA
GA
No differences.
Node auto repair
GA
GA
GA
GA
Changes apply: If advanced cluster is enabled, the periodic health checks aren't
run as part of auto repair. For information and other differences, see
Automatic node repair and
health checking .
High availability admin cluster
GA
GA
GA
GA
No differences.
VM-Host affinity
GA
GA
Changes apply. Capability for this feature can be covered partly by
topology domains ,
but this feature isn't fully covered in version 1.32.
Generate configuration files from an existing cluster
GA
GA
GA
GA
No differences.
Google Cloud Managed Service for Prometheus system metrics collection
GA
GA
GA
GA
No differences.
Upgrade and rollback of nodepools
GA
GA
GA
No differences.
Update private registry credentials
GA
GA
GA
GA
No differences.
Admin cluster backup and restore with gkectl
Preview
Preview
GA
Changes apply. Updated the gkectl command for improved
restoring of admin clusters and to support backing up and restoring user
clusters. For more information, see
Back up and restore advanced clusters with gkectl
User cluster nodepool autoscaling
GA
GA
GA
GA
No differences.
Cluster automatic node resizing
GA
GA
No differences.
Multiple vSphere cluster support
GA
GA
GA
GA
No differences.
Multiple vSphere data centers support
GA
GA
GA
GA
No differences.
OpenID Connect (OIDC) support for authentication to clusters
GA
GA
GA
GA
No differences.
CA certificate rotation
GA
GA
GA
No differences.
Workload Identity Federation support
GA
GA
GA
GA
No differences.
AIS with LDAP authentication support
GA
GA
GA
GA
No differences.
Always-on secrets encryption without hardware security module (HSM)
GA
GA
GA
No differences.
Update vCenter CA certificates with gkectl
GA
GA
GA
GA
No differences.
Egress NAT gateway
GA
GA
GA
GA
No differences.
Admin cluster fleet registration
GA
GA
GA
GA
No differences.
Windows node pool support
GA
Not supported.
containerd runtime for Windows node pool
GA
Not supported.
Container-Optimized OS node pool support
GA
GA
GA
No differences.
CoreDNS as the cluster DNS provider
GA
GA
GA
GA
No differences.
User cluster lifecycle in the Google Cloud console
GA
Partial support
GA
Changes apply. For more information, see
Advanced cluster limitations .
Admin cluster node creation with Container-Optimized OS
GA
GA
GA
No differences.
Multi-NIC capability for Pods
GA
GA
GA
GA
No differences.
MetalLB load balancer option
GA
GA
GA
GA
Changes apply. For details, see
Bundled load balancing with MetalLB .
gkectl update admin support for enabling and disabling Cloud Logging and Cloud Monitoring
GA
GA
GA
GA
No differences.
Windows Dataplane V2 support
GA
Not supported.
Summary API metrics
GA
GA
GA
GA
No differences.
gkectl update credentials support for updating component access service account key
Partial support
GA
Partial support
Partial support
Changes apply. For details about what is or isn't supported for
updating credentials for advanced clusters, see
Advanced
cluster differences for rotating service account keys .
Prepared credentials for user cluster
GA
GA
GA
No differences.
Dry run upgrade of user cluster
GA
GA
GA
GA
No differences.
Asynchronous upgrade of user cluster
GA
GA
GA
GA
No differences.
Dry run upgrade of admin cluster
GA
GA
No differences.
Asynchronous upgrade of admin cluster
GA
GA
GA
GA
No differences.
Sequential update of node pools
GA
GA
GA
No differences.
Create volume snapshot with vSphere CSI driver
Preview
Preview
Preview
Preview
No differences.
Create user cluster with Controlplane V2 enabled
GA
GA
GA
GA
No differences.
Storage migration with SPBM
GA
GA
GA
GA
No differences.
Migrate a datastore to a SPBM
GA
GA
GA
GA
No differences.
Migrate a user cluster to Controlplane V2
GA
GA
GA
GA
No differences.
Migrate to an HA admin cluster
GA
GA
GA
GA
No differences.
Migrate configuration settings for F5 BIG-IP
GA
GA
GA
GA
No differences.
Load balancer
Partial support
GA
GA
GA
Changes apply. For more information, refer to the relevant load
balancer and cluster configuration reference documentation.
Preflight checks
Partial support
GA
GA
GA
No differences.
Hardware requirements
GA
GA
GA
GA
Changes apply. For details, see CPU, RAM, and storage requirements .
Snapshot
GA
GA
GA
GA
No differences.
Private registry
GA
GA
GA
GA
Changes apply. For details about using a private registry on an
advanced cluster, see
Limitations
with advanced clusters and the full bundle .
IPAM, DNS , NTP and multi-NIC
GA
GA
GA
GA
No differences.
Cluster creation/upgrade/deletion
GA
GA
GA
GA
Changes apply. For more information, refer to the relevant cluster
operation documentation and
Advanced cluster limitations .
Proxy
GA
GA
GA
GA
No differences.
NodePool update policy
GA
GA
GA
No differences.
Diagnose
GA
GA
GA
Changes apply. vCenter-related checks aren't available for advanced
clusters. Since there's no longer a onprem-user-cluster-controller
controller, the Diagnose
cluster issues guide is obsolete for advanced clusters. For version
1.32 advanced clusters, the gkectl diagnose cluster command
runs health checks
for the specified cluster.
vSphere tags and VM tracking
GA
GA
No differences.
vSphere host group
GA
GA
No differences.
Logging and monitoring
GA
GA
GA
GA
No differences.
Anti affinity groups
GA
GA
GA
No differences.
Non-HA user cluster control plane
GA
Not supported.
gkectl check-config
GA
GA
GA
Changes apply. Support for the command on advanced user clusters was
added in the following versions: 1.32.700+, 1.33.300+, and 1.34.0 and higher.
What's next
Create clusters with advanced cluster enabled:
Create an admin cluster
Create a user cluster
Update or upgrade a cluster to an advanced cluster
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
