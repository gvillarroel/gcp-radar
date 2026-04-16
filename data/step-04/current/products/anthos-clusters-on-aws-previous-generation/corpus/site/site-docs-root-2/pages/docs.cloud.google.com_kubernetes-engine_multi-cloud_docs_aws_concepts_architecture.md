---
title: "GKE on AWS architecture \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/architecture
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/architecture
  title: "GKE on AWS architecture \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

The product described by this documentation, GKE on AWS, is now in maintenance mode and will be shut down on March 17, 2027.
Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
GKE Multi-Cloud
GKE on AWS
Guides
Send feedback
GKE on AWS architecture
Stay organized with collections
Save and categorize content based on your preferences.
GKE on AWS is a managed service that helps you provision,
operate, and scale Kubernetes clusters in your AWS account.
This page is for Admins and architects and Operators who want to
define IT solutions and system architecture in accordance with company strategy
and requirements. To learn more about common roles and example tasks that we
reference in Google Cloud content, see
Common GKE user roles and tasks .
Resource management
GKE on AWS uses AWS APIs to provision the resources
needed by your cluster, including virtual machines, managed disks,
Auto Scaling group,
security groups, and load balancers.
You can create, describe, and delete clusters with the
Google Cloud CLI or
GKE Multi-Cloud API .
Authenticating to AWS
When you set up GKE on AWS, you create an AWS IAM role in your AWS
account with the required permissions. You also create a service account
in your Google Cloud project to establish a trust relationship
for
AWS IAM identity federation .
For more information, see
Authentication overview .
Resources on Google Cloud
GKE on AWS uses a Google Cloud project to store cluster configuration
information on Google Cloud.
Warning: Soon after you delete a Google Cloud project, any cluster resources in
AWS are permanently deleted. To safeguard against the accidental
deletion of a Google Cloud project, use
Project liens .
Fleets and Connect
GKE on AWS registers each cluster with a
Fleet when it is created.
Connect enables
access to cluster and workload management features from Google Cloud. A
cluster's Fleet membership name is the same as its cluster name.
You can enable features such as Config Management and
Cloud Service Mesh within your Fleet.
Cluster architecture
GKE on AWS provisions clusters using private subnets inside your
AWS Virtual Private Cloud. Each cluster consists of the following components:
Control plane : The Kubernetes control plane uses a high-availability
architecture with three replicas. Each replica runs all Kubernetes components
including kube-apiserver , kube-controller-manager , kube-scheduler , and
etcd . Each etcd instance stores data in an EBS volume, and uses a
network interface to communicate with other etcd instances. A standard load
balancer is used to balance traffic to the Kubernetes API endpoint,
kube-apiserver .
Node pools : A node pool is a group of Kubernetes worker nodes
with the same configuration, including instance type, disk configuration,
and instance profile. All nodes in a node pool run on the same
subnet. For high availability, you can provision multiple node pools across
different subnets in the same AWS region.
The following diagram shows a sample VPC, node pool, and control plane
structure, including network address translation (NAT) gateway and load balancer.
You create this infrastructure with the instructions to
Create an AWS VPC and
Quickstart .
What's next
Complete the Prerequisites .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
