---
title: "Quickstart: Sync configs from a Git repository \_|\_ Config Sync \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/config-sync-multi-repo
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/config-sync-multi-repo
  title: "Quickstart: Sync configs from a Git repository \_|\_ Config Sync \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
Config Sync
Guides
Send feedback
Quickstart: Sync configs from a Git repository
Stay organized with collections
Save and categorize content based on your preferences.
This quickstart shows you how to use Config Sync to implement a GitOps approach
for managing your Google Kubernetes Engine clusters. With a GitOps
workflow, you use a Git repository as the single source of truth for your
cluster configurations.
By using Config Sync, you get the following benefits:
Enforce consistency: helps to ensure that all your clusters have the same
configuration, reducing the risk of configuration drift.
Improve security: centrally manage and audit your cluster
configurations, making it easier to enforce security policies.
Increase velocity: automate the rollout of configuration changes,
letting you to deploy changes faster and more reliably.
In this tutorial, you create a GKE cluster and configure Config Sync to
sync configuration files from a sample repository. This tutorial helps you understand how
Config Sync works and gives you experience
using Config Sync to manage your clusters in a consistent and automated way.
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Make sure that you have the following role or roles on the project:
Kubernetes Engine Admin
Check for the roles
In the Google Cloud console, go to the IAM page.
Go to IAM
Select the project.
In the Principal column, find all rows that identify you or a group that
you're included in. To learn which groups you're included in, contact your
administrator.
For all rows that specify or include you, check the Role column to see whether
the list of roles includes the required roles.
Grant the roles
In the Google Cloud console, go to the IAM page.
Go to IAM
Select the project.
Click person_add Grant access .
In the New principals field, enter your user identifier.
This is typically the email address for a Google Account.
Click Select a role , then search for the role.
To grant additional roles, click add Add
another role and add each additional role.
Click Save .
Create a cluster
In this section, you create a cluster that you can use in this tutorial.
Although in a real-world scenario you would likely manage multiple
clusters, to simplify this tutorial you only create and manage one cluster.
To create a cluster, complete the following steps:
Enable the Google Kubernetes Engine API.
Go to GKE
In the Google Cloud console, go to the Kubernetes Engine page.
Go to Google Kubernetes Engine
Click add_box Create .
In the Autopilot section, select Configure .
In the Cluster basics section, enter cs-cluster in the Name
field. Leave all other fields with their recommended defaults.
Click Create . You are taken to the Kubernetes clusters page. It
takes several minutes for your cluster to be created. When you see a green
check mark in the Status column next to your cluster, it's ready.
Configure your cluster
Now that you have a cluster, you can configure Config Sync to sync
configuration files from a Git repository.
To configure Config Sync in the Google Cloud console, complete the following
steps:
In the Google Cloud console, go to the Config page under the Features section.
Go to Config
Click add Install Config Sync .
Select the Config Sync version that you want to use.
Under Installation options , select
Install Config Sync on individual clusters .
In the
Available clusters table, select cs-cluster and click Install Config Sync .
In the Settings tab, you should see the status for the cs-cluster
as Enabled after a few minutes.
On the Config Sync dashboard , click Deploy cluster package .
In the Select clusters for package deployment table, select cs-cluster
and then click Continue .
Leave Package hosted on Git selected and then click Continue .
In the Package name field, enter sample-repository .
In the Repository URL field, enter https://github.com/GoogleCloudPlatform/anthos-config-management-samples .
In the Path field, enter config-sync-quickstart/multirepo/root .
Leave all other fields with their default values.
Click Deploy Package .
After a few minutes, you should see Synced in the Sync status
column for cs-cluster .
Now that Config Sync is synced to a repository, it continuously reconciles
the state of your clusters with the configs in the repository.
View package details
To view the objects managed by Config Sync, go to the Packages tab and
click cs-cluster . The package details page provides an overview of all synced
resources, including the resource type and which namespace the resource is
synced to.
(Optional) Explore the sample repository
The configurations applied to your cluster are defined in the
/config-sync-quickstart/multirepo/
repository. This sample demonstrates a multi-repository setup where
cluster-admin-level configurations, represented by the root repository, are
separated from namespace-level configurations, represented by the namespaces
repository. In this example, these configurations are split into different
folders. In a real-world scenario, you could store configurations in two different
repositories with different access permissions.
At a high level, cluster-level or root repositories are typically managed by a
central administrator and contain cluster-wide resources, namespace
configurations, and policies. Namespace-level repositories typically contain
configurations specific to individual namespaces and are often managed by
application teams.
Some of the key types of files that you might store in a root repository include
the following:
Namespace creation: files like namespace-gamestore.yaml create the
namespaces themselves.
Cluster-scoped resources: files that affect the entire cluster include
resources like ClusterRole objects which add cluster-wide roles that grant
permissions.
Connecting namespace repositories: the key file in this multi-repository
setup is the reposync-gamestore.yaml file. This RepoSync object tells
Config Sync to sync configurations for the gamestore namespace from a
different path. In this example, the RepoSync object points to the
config-sync-quickstart/multirepo/ namespaces/gamestore directory within
the same repository, but in a real-world scenario, you could point to a
different Git repository.
The namespace repository contains application-specific configurations for the
gamestore namespace. For example, the configmap-inventory.yaml file contains
inventory data for the gamestore application. This type of GitOps setup
lets application teams have more autonomy over their own deployments and
namespace-scoped resources without needing to modify the central root
repository.
Clean up
Go to the GKE menu in Google Cloud console.
Go to GKE
Next to the cs-cluster , click more_vert Actions , then click delete Delete .
When prompted to confirm, click Delete again.
What's next
Learn about validating configs .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
