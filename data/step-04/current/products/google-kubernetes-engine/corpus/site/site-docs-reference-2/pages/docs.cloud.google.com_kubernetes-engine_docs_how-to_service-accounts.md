---
title: "About service accounts in GKE \_|\_ GKE security \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/how-to/service-accounts
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/how-to/service-accounts
  title: "About service accounts in GKE \_|\_ GKE security \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
GKE security
Send feedback
About service accounts in GKE
Stay organized with collections
Save and categorize content based on your preferences.
Autopilot
Standard
This document describes service accounts in Google Kubernetes Engine (GKE) and how they
provide identities for applications. You'll learn about the different types of
service accounts and when to use each type to authenticate access to resources
within GKE without relying on personal credentials.
This document is for
Security specialists and Operators who create and manage
service accounts to interact with GKE applications.
To learn more about
common roles and example tasks that we reference in Google Cloud content, see
Common GKE user roles and tasks .
Kubernetes service accounts and IAM service accounts
The following table describes the main differences between Kubernetes service
accounts and IAM service accounts:
Types of service accounts in GKE
Kubernetes ServiceAccount
ServiceAccount object in the Kubernetes API server
Scoped to a Kubernetes namespace in a cluster
Provides an identity for Pods to use inside the cluster
IAM service account
Manage using the IAM API
Scoped to a Google Cloud project
Provides an identity for applications in the project
Kubernetes ServiceAccounts
Kubernetes service accounts are managed at the cluster level and exist in the
Kubernetes API server as ServiceAccount objects. The Kubernetes documentation
and the GKE documentation often use the term ServiceAccount to
distinguish these Kubernetes resources from service accounts in other
environments like IAM.
You create a Kubernetes ServiceAccount in a namespace and then assign that
ServiceAccount to a Pod by using the serviceAccountName field in the Pod
manifest. The kubelet process on the node gets a short-lived bearer token for
the assigned ServiceAccount and mounts the token as a projected volume in the
Pod. By default, this projected volume has a name that starts with the
kube-api-access- prefix. Any volumes that start with this prefix are managed
by GKE, which means that you can't modify the size of these
volumes. For more accurate disk usage monitoring, exclude volumes that start
with the kube-api-access- prefix from your monitoring configuration.
The short-lived bearer token is a JSON web token (JWT) that's signed by the API
server, which is an OpenID Connect (OIDC) provider. To validate the bearer
token, get the public validation key for the cluster by calling the
projects.locations.clusters.getJwks method
in the GKE API.
To learn the basics of Kubernetes ServiceAccounts, in the Kubernetes
documentation, see
Service Accounts .
To learn how to create new ServiceAccounts, grant permissions using
role-based access control (RBAC), and assign ServiceAccounts to Pods, see
Configure Service Accounts for Pods .
For best practices when managing Kubernetes ServiceAccounts, see
Best practices for RBAC .
To read the OIDC configuration of the Kubernetes API server for a cluster,
call the projects.locations.clusters.well-known.getOpenid-configuration method
in the GKE API.
Compromised Kubernetes ServiceAccount credentials
If a Kubernetes service account credential is compromised, use one of the
following options to revoke the credentials:
Recreate your Pods : The bearer token is bound to each unique
Pod UID, so recreating the Pods invalidates the previous credentials.
Recreate the Kubernetes service account : The bearer token is bound to
the UID of the ServiceAccount object in the Kubernetes API. Delete the
ServiceAccount and create a new ServiceAccount with the same name. Previous
tokens become invalid because the UID of the new ServiceAccount is
different.
Perform a credential rotation : This operation revokes all the Kubernetes
service account credentials in your cluster. The rotation also changes your
cluster's CA certificate and IP address. For details, see
credential rotation .
IAM service accounts
IAM service accounts are managed at
the project level using the IAM API. You can use these service
accounts to perform actions like programmatically calling Google Cloud
APIs and managing permissions for applications running in Google Cloud
products.
To learn more, see the
IAM service accounts overview .
GKE service agents
An IAM service agent is an
IAM service account that Google Cloud manages. GKE
uses the following two service agents:
Kubernetes Engine Service Agent
Kubernetes Engine Default Node Service Agent
Kubernetes Engine Service Agent
GKE uses the Kubernetes Engine Service Agent to manage the
lifecycle of cluster resources on your behalf such as nodes, disks, and load
balancers. This service agent has the domain
container-engine-robot.iam.gserviceaccount.com and is granted
the
Kubernetes Engine Service Agent
role ( roles/container.serviceAgent ) on your project when you enable the
GKE API.
The identifier of this service agent is as follows:
service- CLUSTER_PROJECT_NUMBER @container-engine-robot.iam.gserviceaccount.com
CLUSTER_PROJECT_NUMBER is the numerical
project number
of the project that contains your GKE cluster.
Kubernetes Engine Default Node Service Agent
GKE uses the Kubernetes Engine Default Node Service Agent to
support the logging and monitoring of Kubernetes nodes for clusters using
Kubernetes version 1.33 and later. This service agent has the domain
gcp-sa-gkenode.iam.gserviceaccount.com and
is granted the
Kubernetes Engine Default Node Service Agent
role ( roles/container.defaultNodeServiceAgent ) on your project when you enable
the GKE API.
The identifier of this service agent is as follows:
service- CLUSTER_PROJECT_NUMBER @gcp-sa-gkenode.iam.gserviceaccount.com
CLUSTER_PROJECT_NUMBER is the numerical
project number
of the project that contains your GKE cluster.
If you remove the service agent's permissions in your project, you can recover
them by following the instructions in
Error 400/403: Missing edit permissions on account .
Node service accounts
GKE uses IAM service accounts that are attached to your nodes to
run system tasks like logging and monitoring. At a minimum, these node service accounts
must have the
Kubernetes Engine Default Node Service Account
( roles/container.defaultNodeServiceAccount ) role on your project. By default,
GKE uses the
Compute Engine default service account ,
which is automatically created in your project, as the node service account.
If your organization enforces the
iam.automaticIamGrantsForDefaultServiceAccounts organization policy constraint , the default Compute Engine service account in your project might
not automatically get the required permissions for GKE.
Note : If your organization was created on or after May 3, 2024, this
constraint is enforced by default.
If you use the Compute Engine default service account for other functions in your
project or organization, the service account might have more permissions than GKE
needs, which could expose you to security risks.
Best practice: Instead of using the Compute Engine default service account, create
a custom service account for your nodes to use and give it only the permissions that
GKE needs to run system tasks.
For
more information, see
Configure a custom node service account .
Don't disable the default Compute Engine service account unless you are
migrating to
user-managed service accounts .
Email addresses of node service accounts
The email address of your node service account depends on the type of service
account, as follows:
Default Compute Engine service account :
CLUSTER_PROJECT_NUMBER -compute@developer.gserviceaccount.com
Replace CLUSTER_PROJECT_NUMBER with the project
number of the project that contains your cluster, such as 1234567890 .
Custom service account :
SERVICE_ACCOUNT_NAME @ SERVICE_ACCOUNT_PROJECT_ID .iam.gserviceaccount.com
Replace the following:
SERVICE_ACCOUNT_NAME : the name of the service
account.
SERVICE_ACCOUNT_PROJECT_ID : the
project ID of the Google Cloud project that contains the service
account.
Node service accounts and project service agents
When you create a cluster or a node pool, service agents in the cluster project
use the service account that's attached to the nodes to perform tasks like
image pulls. By default, service agents in the cluster project have the
following access to node service accounts in that project:
The Compute Engine service agent in a project can create access
tokens for node service accounts in the same project.
The GKE service agent in a project can impersonate node
service accounts in the same project.
Some organizations use a dedicated project to manage all service accounts. If
your node service account isn't in your cluster project, the service agents in
the cluster project can't create tokens or impersonate that service account.
You must grant the service agents in your cluster project the following roles on
the service account:
Service Account Token Creator
( roles/iam.serviceAccountTokenCreator ) on the service account to the
Compute Engine service agent in your cluster project.
Service Account User
( roles/iam.serviceAccountUser ) on the service account to the
GKE service agent in your cluster project.
For more information, see
Configure service account usage across projects .
When to use a specific service account
The type of service account that you use depends on the type of identity that
you want to provide for your applications, as follows:
Provide an identity for your Pods to use in the cluster : Use a
Kubernetes ServiceAccount. Every Kubernetes namespace has a default
ServiceAccount, but we recommend that you create new minimally-privileged
ServiceAccounts for each workload in each namespace.
Provide an identity for your Pods to use outside the cluster : Use
Workload Identity Federation for GKE .
Workload Identity Federation for GKE lets you specify Kubernetes resources like
ServiceAccounts as principals in IAM policies. For example,
use Workload Identity Federation for GKE when calling Google Cloud APIs like
Secret Manager or Spanner from your Pods.
Provide a default identity for your nodes : Use a custom
minimally-privileged IAM service
account when you create your GKE clusters or nodes. If you
don't use a custom IAM service account, GKE
uses the Compute Engine default service account.
What's next
Learn how to use Workload Identity Federation for GKE .
Learn how to harden your cluster's security .
Read an overview of Workload Identity Federation for GKE .
Learn more about API server authentication .
Learn how to configure IAM .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
