---
title: "In-cluster Cloud Service Mesh prerequisites \_|\_ Cloud Service Mesh v1.26\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-mesh/v1.26/docs/onboarding/kubernetes-off-gcp/install/cloud-service-mesh-prerequisites
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-mesh/v1.26/docs/onboarding/provision-control-plane
source_metadata:
  url: https://docs.cloud.google.com/service-mesh/v1.26/docs/onboarding/kubernetes-off-gcp/install/cloud-service-mesh-prerequisites
  title: "In-cluster Cloud Service Mesh prerequisites \_|\_ Cloud Service Mesh v1.26\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Anthos Service Mesh and Traffic Director are now Cloud Service Mesh. For more information, see the Cloud Service Mesh overview .
Home
Documentation
Networking
Cloud Service Mesh
v1.26
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
In-cluster Cloud Service Mesh prerequisites
Note: This guide only supports Cloud Service Mesh with Istio APIs and does
not support Google Cloud APIs. For more information see,
Cloud Service Mesh overview .
This page describes the prerequisites and the requirements for installing
in-cluster Cloud Service Mesh for Kubernetes workloads off Google Cloud, such
as cluster requirements, fleet requirements, and general requirements.
Cloud project
Before you begin:
Select or create a Google Cloud project .
Verify that billing is enabled for your project.
General requirements
To be included in the service mesh, service ports must be named, and the name
must include the port's protocol in the following syntax:
name: protocol [- suffix ]
where the square brackets indicate an optional suffix that must start with a
dash. For more information, see
Naming service ports .
If you have created a service perimeter
in your organization, you might need to add the Cloud Service Mesh certificate authority service
to the perimeter. See
Adding Cloud Service Mesh certificate authority to a service perimeter
for more information.
If you want to change the default resource limits
for the istio-proxy sidecar container, the new values must be greater than the
default values to
avoid out-of-memory (OOM) events .
A Google Cloud project can only have one mesh associated with it.
Cluster requirements
Ensure that the user cluster that you install Cloud Service Mesh on has at
least 4 vCPUs, 15 GB memory, and 4 nodes.
Verify that your cluster version is listed in
Supported platforms .
Ensure that the client machine that you install Cloud Service Mesh from has
network connectivity to the API server.
If you are deploying sidecars in application pods where direct connectivity
to CA services (such as meshca.googleapis.com and
privateca.googleapis.com ) is not available, you must
configure an explicit CONNECT -based HTTPS proxy .
For public clusters with egress firewall rules set that are blocking
implied rules , ensure you have
configured HTTP/HTTPS and DNS rules to reach public Google APIs.
Fleet requirements
All clusters must be registered to a
fleet , and
fleet workload identity
must be enabled. You can either
setup up the clusters
yourself, or you can let asmcli register the clusters as long as they
meet the following requirements:
Caution: All Cloud Service Mesh clusters for one mesh must be registered to
the same fleet at all times to use Cloud Service Mesh. Other clusters in the
project of a Cloud Service Mesh cluster must not be registered to a different
fleet.
GKE clusters outside Google Cloud :
(applies to in-cluster Cloud Service Mesh)
Google Distributed Cloud (software only) for VMware ,
Google Distributed Cloud (software only) for bare metal ,
GKE on AWS (deprecated), and
GKE on Azure (deprecated) are
automatically registered to your project fleet at cluster creation time. As of
GKE Enterprise 1.8, all these cluster types automatically enable fleet
Workload Identity when registered. Existing registered clusters are updated
to use fleet Workload Identity when they are upgraded to GKE Enterprise 1.8.
Amazon EKS clusters (deprecated): (applies to in-cluster Cloud Service Mesh) The cluster
must have a public IAM OIDC Identity Provider. Follow the instructions in
Create an IAM OIDC provider for your cluster
to check if a provider exists, and create a provider if necessary.
When you run asmcli install , you specify the project ID
of the
fleet host project .
asmcli registers the cluster if it isn't already registered.
Note: If you have not registered a cluster from a project to a fleet hosted in
a different project before, there are extra steps required to configure fleet
permissions. For detailed instructions, see
Grant permissions for registering a cluster into a different project .
Starting with asmcli version 1.25, all in-cluster Cloud Service Mesh
installations and upgrades provision the Managed Canonical Service Controller.
This requires the Cloud Service Mesh feature to be enabled on your fleet
project. To allow asmcli to enable this feature automatically during
installation or upgrade, you must run the asmcli command with the
--enable_gcp_components flag.
What's next?
Plan a new installation
Plan an upgrade
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
