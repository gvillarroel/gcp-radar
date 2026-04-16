---
title: "Authentication overview \_|\_ GKE on AWS \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/authentication
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/aws-iam-roles
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/authentication
  title: "Authentication overview \_|\_ GKE on AWS \_|\_ Google Cloud Documentation"
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
Authentication overview
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how GKE on AWS handles authentication to
Google Cloud and user authentication to your clusters.
How GKE on AWS connects to AWS
For more information on how GKE on AWS uses AWS IAM roles to connect to
AWS, see AWS IAM roles .
Authentication
GKE Multi-Cloud API authentication
You use the GKE Multi-Cloud API to create, update, and delete clusters
and node pools. As with other Google Cloud APIs, you can use this
API with REST, Google Cloud CLI, or the Google Cloud console.
For more information, see
Google Cloud authentication overview
and the GKE Multi-Cloud API
reference documentation.
Kubernetes API authentication
You can use the kubectl command-line tool to perform cluster operations such
as deploying a workload and configuring a load balancer. The kubectl tool
connects to the Kubernetes API on your cluster's control plane. To call this
API, you need to authenticate with authorized credentials.
To get credentials, you can use one of the following methods:
Google Identity ,
which lets users log in using their Google Cloud identity. Use this option if
your users already have access to Google Cloud with a Google Identity.
GKE Identity Service ,
which lets users log in using OpenID Connect
(OIDC) or AWS IAM.
GKE Identity Service lets you use identity providers such as
Okta ,
Active Directory Federation Services (ADFS) ,
or any
OIDC
compliant identity provider.
Authorization
GKE on AWS has two methods for access control, the GKE Multi-Cloud API and
role-based access control (RBAC) .
This section describes the differences between these methods.
It's best to take a layered approach to protecting your clusters and workloads.
You can apply the
principle of least privilege
to the level of access that you provide to your users and workloads. You might
need to make tradeoffs to allow the right level of flexibility and security.
GKE Multi-Cloud API access control
The GKE Multi-Cloud API lets cluster administrators create, update, and delete clusters
and node pools. You manage permissions for the API with
Identity and Access Management (IAM). To use the API, users must have the appropriate
permissions. For the permissions necessary for each
operation, see API roles and permissions .
IAM lets you define roles
and assign them to
principals .
A role is a collection of permissions, and when assigned to a principal, controls
access to one or more Google Cloud
resources .
When you create a cluster or node pool in an organization, folder, or project,
users with appropriate permissions in that organization, folder, or project can
modify it. For example, if you give a user a cluster deletion permission at a
Google Cloud project level, that user can delete any cluster in that
project. For more information, see
Google Cloud resource hierarchy and
Creating IAM policies .
Kubernetes API access control
The Kubernetes API lets you manage
Kubernetes objects .
To manage access control on the Kubernetes API, you use role-based access
control (RBAC). For more information, see
Configuring role-based access control
in the GKE documentation.
Administrator access
When you use the gcloud CLI to create a cluster, by default the
GKE Multi-Cloud API adds your user account as an administrator and creates
appropriate RBAC policies that grant you full administrative access to the
cluster. To configure different users, pass the
--admin-users
flag when you create or update a cluster. When you use the --admin-users flag,
you must include all users that can administer the cluster. The
gcloud CLI doesn't include the user that creates the cluster.
You can also add admin users using the Google Cloud console. For more
information, see
Update your cluster .
Note: When you add admin users, the GKE Multi-Cloud API applies the Kubernetes
RBAC policies to the cluster to grant the users the same administrative access
that you were granted when you created the cluster. These policies grant users
the Kubernetes clusterrole/cluster-admin role, which provides full access to
every resource in the cluster in all namespaces.
To see the configuration of your cluster's access, run the following command:
kubectl describe clusterrolebinding gke-multicloud-cluster-admin
In addition to the RBAC policies to access the Kubernetes API server, if an
admin user isn't a project owner, you need to grant specific IAM
roles that let the admin users authenticate using their Google identity. For
more information about how to connect to the cluster, see
Connect and authenticate to your cluster .
What's next
To set up OIDC, see
Manage identity with GKE Identity Service .
Connect and authenticate to your cluster .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
