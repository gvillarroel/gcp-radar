---
title: "Manage packages \_|\_ Config Sync \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/manage-packages
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/manage-packages
  title: "Manage packages \_|\_ Config Sync \_|\_ Google Cloud Documentation"
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
Manage packages
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how to manage packages with Config Sync from the Google Cloud console.
Key Term: A package is a set of Kubernetes resource manifests that
are managed together in a source of truth and synced to a cluster by
Config Sync. Each package is defined by a RootSync or RepoSync object on
the cluster. For more information about these objects, see
Config Sync architecture .
You can have multiple packages per cluster, for example, from different sources.
Before you begin
Install Config Sync .
Deploy a package
After you have registered your clusters to a fleet and installed Config Sync,
you can configure Config Sync to deploy a package to a cluster from a
source of truth . You can deploy the same package
to multiple clusters or deploy different packages to different clusters.
You can edit a package after deploying it, except for some settings like
package name and sync type. For more information, see
Manage packages .
Note: If you want Config Sync to render and apply a Helm chart, you must
configure Config Sync with the Google Cloud CLI instead.
To deploy a package, complete the following steps:
In the Google Cloud console, go to the Config Sync dashboard .
Go to Config Sync dashboard
Click Deploy Package .
In the Select clusters for package deployment table, select the cluster
that you want to deploy a package to and then click Continue .
Select either Package hosted on Git or Package hosted on OCI as
your source type and then click Continue .
In the Package details section, enter a Package name , which
identifies the RootSync or RepoSync object.
In the Sync type field, choose either Cluster scoped sync or Namespace scoped sync as
the sync type.
Cluster scoped sync creates a RootSync object and Namespace scoped sync creates a RepoSync object.
For more information about these objects, see
Config Sync architecture .
In the Source section, complete the following:
For sources hosted in a Git repository, enter the following fields:
Enter the URL of the Git repository that you're using as a source of truth
as the Repository URL .
Optional: Update the Revision field to check out if you're not using
the default HEAD .
Optional: Update the Path field if you don't want to sync from the
root repository.
Optional: Update the Branch field if you're not using the default
main branch.
For sources hosted in an OCI image, enter the following fields:
Enter the URL of the OCI image that you're using as a source of truth
as the Image .
Enter the path of the directory to sync from,
relative to the root directory, as the Directory .
(Optional): Expand the Advanced settings section to complete the following:
Select an Authentication type . Config Sync needs read-only access to
your source of truth to read the configuration files in the source and apply them to your clusters.
Unless your source requires no authentication, such as a public repository,
ensure that you grant Config Sync
read-only access to your Git repository ,
OCI image , or Helm chart (gcloud CLI only).
Choose the same authentication type that you configured when you installed
Config Sync:
Note: for OCI, you can only select Workload Identity for authentication.
None : Use no authentication.
SSH : Authenticate by using an SSH key pair.
Cookiefile : Authenticate by using a cookiefile .
Token : Authenticate by using an access token or password.
Google Cloud Repository : Use a Google service account to access a
Cloud Source Repositories repository. Only select this option if
Workload Identity Federation for GKE is not enabled in your cluster.
Workload Identity : Use a Google service account to access a
Cloud Source Repositories repository.
Enter a number in seconds to set the Sync wait time , which determines
how long Config Sync waits between attempts to pull from the source of truth.
Enter a Git proxy URL for the HTTPS proxy to be used when
communicating with the source of truth.
Click Deploy Package .
You are redirected to the Config Sync Packages page. After a few
minutes, you should see Synced in the Sync status
column for the cluster that you configured.
Edit a package
To edit a package that you've already deployed, complete the following steps:
In the Google Cloud console, go to the Config Sync Packages tab.
Go to Packages
(Optional): Expand the Quick filters menu and then select a filter to
help find the package that you want to edit.
Expand the package name that you want to edit and then, in the row that contains
the cluster name, click the context menu more_vert
and then click edit
Edit package .
Review and update the package settings that you want to change.
Click Save .
Uninstall a package
Note: The Google Cloud console uses the deletion propagation feature to delete
package resources. If you don't manage your RootSync and RepoSync objects with
the Google Cloud console, you can still use the deletion propagation feature
to achieve a similar uninstall behavior, with kubectl or any other Kubernetes
client. For more information, see
Bulk delete objects
( Preview ).
To uninstall a package from the Google Cloud console, complete the following steps:
In the Google Cloud console, go to the Config Sync Packages tab.
Go to Packages
(Optional): Expand the Quick filters menu and then select a filter to
help find the package that you want to uninstall.
Expand the package name that you want to uninstall and then, in the row that contains
the cluster name, click the context menu more_vert
and then click delete
Uninstall package .
In the confirmation dialog, select whether to uninstall only the RootSync or RepoSync object,
or uninstall the RootSync or RepoSync and all of the resources managed by the
RootSync or RepoSync.
Type the confirmation message and then click Uninstall .
What's next
Monitor the status of Config Sync and packages
Use the nomos command-line tool
Troubleshoot Config Sync
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
