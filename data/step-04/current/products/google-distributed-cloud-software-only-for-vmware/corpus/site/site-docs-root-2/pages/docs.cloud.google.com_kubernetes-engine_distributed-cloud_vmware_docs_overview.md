---
title: "Google Distributed Cloud (software only) for VMware overview \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/overview
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/overview
  title: "Google Distributed Cloud (software only) for VMware overview \_|\_ Google\
    \ Cloud Documentation"
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
Google Distributed Cloud (software only) for VMware overview
Stay organized with collections
Save and categorize content based on your preferences.
Google Distributed Cloud is a fully managed software and hardware solution that extends
Google Cloud infrastructure and services into your data center.
Google Distributed Cloud is available in both connected and air-gapped
configurations that run on Google-provided hardware. Google Distributed Cloud is
also available as a software-only product that runs on your own hardware on
either VMware or bare metal. This guide is for Google Distributed Cloud software
that runs on your own hardware in a VMware vSphere environment.
Google Distributed Cloud is based on
Google Kubernetes Engine (GKE) ,
with its own Kubernetes package that extends GKE for use in an
on-premises environment. With Google Distributed Cloud you can create, manage, and
upgrade GKE clusters on your own premises while using
Google Cloud features, and deploy and operate containerized applications
on your clusters at scale using Google infrastructure.
With Google Distributed Cloud software installed, you can use many
Google Cloud features for governing, managing, and operating containerized
workloads at scale. You can find out more about the features available on VMware
in the
GKE overview .
This page provides an overview of how Google Distributed Cloud works on VMware,
giving you the background you need before going on to a minimal or production
installation.
How it works
Google Distributed Cloud extends
GKE
to let you create GKE clusters in a
vSphere environment
on your own premises, and manage them in Google Cloud along with regular
GKE clusters and clusters in other environments as part of a
fleet .
Because the Google Distributed Cloud software runs in your data center rather than on
Google Cloud, it requires you to install some admin and control plane software
in addition to the GKE software itself. The software that runs in
your data center is downloaded as part of the installation and upgrade
processes.
The following diagram shows the simplified result of a completed installation.
Google Distributed Cloud architecture with one user cluster
Key components
The following components make up a software-only installation on VMware of
Google Distributed Cloud:
A user cluster is where the workloads that implement your applications run,
like in GKE on Google Cloud. The nodes that run your workloads
are called worker nodes . A user cluster also has one or more control plane
nodes. In the preceding diagram, the user cluster has one control plane node.
The admin cluster manages one or more user clusters. In the preceding diagram,
the admin cluster has three control plane nodes.
The admin workstation is a separate machine that includes the tools that
cluster creators and developers need to manage their installation:
Running gkectl from the admin workstation lets you create and update
clusters and perform some other administrative tasks.
Running kubectl from the admin workstation lets you interact with your
admin and user clusters, including deploying and managing workloads.
The Google Cloud console provides a web interface for your Google Cloud project,
including your clusters on VMware. You can perform a subset of administrative
tasks, including cluster creation, from the Google Cloud console as an
alternative to running commands on the admin workstation.
Cluster admins and developers use kubectl and virtual IP addresses (VIPs)
to access the control planes in the admin and user clusters. You configure
VIPs during cluster creation. Users and developers calling workloads in your
user clusters use Service and Ingress VIPs. Each node in the installation
also has its own IP address. You can learn more about IP planning for
Google Distributed Cloud in
Plan your IP addresses .
Connecting to the fleet
All Google Distributed Cloud clusters are members of a
fleet : a logical grouping of Kubernetes
clusters. Fleets let your organization uplevel management from individual
clusters to entire groups of clusters, and can help your teams adopt similar
best practices to those used at Google. You can view and manage fleet clusters
together in the Google Cloud console, and use fleet-enabled features to help
you manage, govern, and operate your workloads at scale. You can see a complete
list of available
fleet features
for on-premises environments.
Each fleet cluster's connection to Google Cloud is managed by a Connect
Agent, which is deployed as part of the Google Distributed Cloud installation process.
You can learn more about how this agent works in the
Connect Agent overview .
Fleet membership is also used to manage Google Distributed Cloud pricing, as described
in the next section.
Pricing
GKE clusters on-premises created as part of Google Distributed Cloud are
billed per vCPU. You enable billing by enabling the
Anthos API
in your Google Cloud project.
Note: Google Distributed Cloud software-only was formerly known as Anthos.
For full pricing information, including how to contact sales, see
GKE pricing .
Installing Google Distributed Cloud on VMware
Because the Google Distributed Cloud software runs in your own infrastructure, it is
highly configurable to meet your particular organizational and use case needs:
you can choose from a range of supported load balancing modes, vSphere
configurations, IP addressing options, security features, connectivity options,
and more. This means that setting up Google Distributed Cloud involves making decisions
before and during installation in consultation with your networking, vSphere,
and application teams to ensure that your installation meets your needs. This
documentation set includes guides to help your team make these decisions.
However, if you just need to see Google Distributed Cloud in action, we also provide a
basic installation path for a small test installation where we've made a lot of
these choices for you, letting you quickly get a workload up and running.
In each case, the installation process is as follows:
Plan your installation . Minimally, this includes ensuring you can meet the
resource and vSphere requirements for Google Distributed Cloud, as well as planning
your IP addresses.
Set up your on-premises environment to support Google Distributed Cloud,
including setting up vSphere inventory objects and your connection to Google.
Set up Google Cloud resources , including the Google Cloud project you
will use when setting up and managing Google Distributed Cloud.
Create an admin workstation with the resources and tools you need to
create clusters.
Create an admin cluster to create, manage, and update user clusters.
Create user clusters to run your actual workloads.
Supported versions
This documentation covers all supported versions of Google Distributed Cloud.
Where relevant, we also retain limited information for older, unsupported
versions in this documentation. Version-specific differences in requirements and
behavior are noted in the documentation. Similarly, when a new feature becomes
available, the supported version for the feature is documented.
For a list of the supported minor versions and available patches, see
Versioning .
Starting with the 1.29 release, we no longer create a directory for the previous
minor release. Differences in behavior are noted in the documentation.
Similarly, when a new feature becomes available, the supported version for
the feature is documented.
You can find the complete documentation for an earlier version by adding the
minor version number in the following URL:
https://cloud.google.com/anthos/clusters/docs/on-prem/ VERSION /
Replace VERSION with a minor version from 1.0 to 1.16 and
copy the URL to the address bar in your browser.
What's next?
To start a minimal proof-of-concept installation, see
Set up minimal infrastructure .
To review some of the considerations needed to plan a Google Distributed Cloud
installation, start a production installation, or both, see the
installation overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
