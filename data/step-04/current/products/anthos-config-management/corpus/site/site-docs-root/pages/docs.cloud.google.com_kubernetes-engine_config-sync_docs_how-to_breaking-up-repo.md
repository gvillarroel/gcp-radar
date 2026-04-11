---
title: "Break up a repository into multiple repositories \_|\_ Config Sync \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/breaking-up-repo
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/breaking-up-repo
  title: "Break up a repository into multiple repositories \_|\_ Config Sync \_|\_\
    \ Google Cloud Documentation"
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
Break up a repository into multiple repositories
Stay organized with collections
Save and categorize content based on your preferences.
This page shows you how to safely break one root repository into two or more
root repositories. The steps can also be applied to namespace repositories.
A repository synced by Config Sync refers to the combination of
a Git repository, a branch, a revision, and a directory.
When there are a large number of resources, for example more than 5000, in your root repository, Config Sync
might not behave well for the following two reasons:
The ResourceGroup object might exceed the etcd object size limit. The ResourceGroup object
records the Group, Kind, Namespace, and Name of all the resources in the Git repository.
Having a large number of resources leads to a large ResourceGroup object.
It takes a longer time to sync all of the resources
than a repository with a smaller number of resources. Config Sync applies the resources
sequentially to the cluster. Sometimes the resources can't be applied successfully
the first time, and Config Sync has to retry applying them.
When you encounter these issues, you can break up your root repository
from one into multiple so that each root repository has fewer resources.
Break up an unstructured root repository
RootSync objects are used to explain the steps. The steps can also be
applied to the RepoSync objects.
Note: Objects which depend on
each other must be declared in the same repository. When you split up repositories,
keep dependent objects in the same RootSync or RepoSync.
1.21.0 or later (Recommended)
This method works for Config Sync version 1.21.0 and later due to a finalizer
added in that release, which stops managing objects when a RootSync or RepoSync
object is deleted. Previously, orphaned objects had persistent metadata, which
prevented them from being managed by other clients or new RootSync or RepoSync objects.
Assume that your root repository is synced by the object RootSync single-root-sync .
After breaking up the repository, you have two root repositories. One is synced by the root-sync-1
RootSync object while the other is synced by the root-sync-2 RootSync object.
To break up the repository, follow these steps:
Ensure the RootSync single-root-sync has the configsync.gke.io/deletion-propagation-policy
annotation value of Orphan or that it's not set. The default value when unset
is the same as "Orphan". This setting ensures objects aren't be deleted .
Delete the RootSync single-root-sync :
kubectl delete rootsync single-root-sync -n config-management-system
Set up your new repositories by following these steps:
Create a new repository or a new directory in your existing Git repository.
Move the resources into the new repository or new directory.
If you are splitting up your root repository into more than two repositories,
repeat these steps as necessary.
Commit and push the change:
git commit -am 'add configuration for the new root repository'
Apply the root-sync-1 and root-sync-2 RootSync objects. Doing so syncs
the new repository or directory so that the existing objects in the cluster
are managed by the new RootSync objects root-sync-1 and root-sync-2 :
apiVersion : configsync.gke.io/v1beta1
kind : RootSync
metadata :
name : ROOT_SYNC_NAME
namespace : config-management-system
spec :
sourceFormat : unstructured
git :
repo : NEW_ROOT_REPOSITORY
revision : NEW_ROOT_REVISION
branch : NEW_ROOT_BRANCH
dir : " NEW_ROOT_DIRECTORY "
auth : ROOT_AUTH_TYPE
gcpServiceAccountEmail : ROOT_EMAIL
# secretRef should be omitted if the auth type is none, gcenode, or gcpserviceaccount.
secretRef :
name : git-creds
Replace the following:
NEW_ROOT_REPOSITORY : the URL of the Git repository to
use as the new root repository. You can enter URLs using either the HTTPS
or SSH protocol. For example,
https://github.com/GoogleCloudPlatform/anthos-config-management-samples uses
the HTTPS protocol. If you don't enter a protocol, the URL is treated
as an HTTPS URL.
NEW_ROOT_REVISION : (Optional) the Git revision (tag or hash)
of the new root repository to check out.
NEW_ROOT_BRANCH : (Optional) the branch of the new root
repository to sync from.
NEW_ROOT_DIRECTORY : (Optional) the path in the Git repository to
the new root directory that contains the configuration that you want to sync
to.
ROOT_AUTH_TYPE : this value should be the same as the
existing RootSync/root-sync object.
ROOT_EMAIL : this value should be the same as the existing
RootSync/root-sync object.
Wait for the new root-sync-1 RootSync object to be synced. You can check the status
by using the following command:
nomos status
Any versions
This method works for any Config Sync version, including version 1.21.0, but
we recommend that you use the method available in version 1.21.0 and later because
it requires fewer steps. If your Config Sync version is earlier than 1.21.0,
you can use this method instead.
Assume that your root repository is synced by the object RootSync root-sync .
After breaking up the repository, you have two root repositories. One is synced by the root-sync
RootSync object while the other is synced by the root-sync-1 RootSync object.
To break up the repository, follow these steps:
In your existing root repository, choose the resources
that you plan to move to a different repository or a directory and add the
configmanagement.gke.io/managed: disabled annotation to them. This annotation
ensures that the existing objects in the cluster
are not affected when you move their configuration from one repository to another repository.
If you use the Kustomize format or helm charts, you can choose about half of the
bases and add the common annotation to the kustomization.yaml file,
such as in this example:
# kustomization.yaml
commonAnnotations :
configmanagement.gke.io/managed : disabled
Commit and push the change:
sh
git commit -am 'disable Config Sync management on subset of the configuration'
Wait for the existing root-sync RootSync object to be synced
by using the following command:
nomos status
Set up your second repository by following these steps:
Create a new repository or a new directory in your existing Git repository.
Copy the resources with the configmanagement.gke.io/managed: disabled
annotation into the new repository or new directory.
Remove the configmanagement.gke.io/managed: disabled annotation in the
new repository or directory.
If you are splitting up your root repository into more than two repositories,
repeat these steps as necessary.
Commit and push the change:
git commit -am 'add configuration for the new root repository'
Apply a root-sync-1 RootSync object
to sync the new repository or directory so that
the existing objects in the cluster will be managed by the new
root-sync-1 RootSync object.
apiVersion : configsync.gke.io/v1beta1
kind : RootSync
metadata :
name : root-sync-1
namespace : config-management-system
spec :
sourceFormat : unstructured
git :
repo : NEW_ROOT_REPOSITORY
revision : NEW_ROOT_REVISION
branch : NEW_ROOT_BRANCH
dir : " NEW_ROOT_DIRECTORY "
auth : ROOT_AUTH_TYPE
gcpServiceAccountEmail : ROOT_EMAIL
# secretRef should be omitted if the auth type is none, gcenode, or gcpserviceaccount.
secretRef :
name : git-creds
Replace the following:
NEW_ROOT_REPOSITORY : the URL of the Git repository to
use as the new root repository. You can enter URLs using either the HTTPS
or SSH protocol. For example,
https://github.com/GoogleCloudPlatform/anthos-config-management-samples uses
the HTTPS protocol. If you don't enter a protocol, the URL is treated
as an HTTPS URL.
NEW_ROOT_REVISION : (Optional) the Git revision (tag or hash)
of the new root repository to check out.
NEW_ROOT_BRANCH : (Optional) the branch of the new root
repository to sync from.
NEW_ROOT_DIRECTORY : (Optional) the path in the Git repository to
the new root directory that contains the configuration that you want to sync
to.
ROOT_AUTH_TYPE : this value should be the same as the
existing RootSync/root-sync object.
ROOT_EMAIL : this value should be the same as the existing
RootSync/root-sync object.
Wait for the new root-sync-1 RootSync object to be synced. You can check the status
by using the following command:
nomos status
Remove the resources with the configmanagement.gke.io/managed: disabled
annotation from the original repository. Commit and push the change:
git commit -am 'remove configuration managed by the new root repository'
Wait for the existing root-sync RootSync object to be synced using
the following command:
nomos status
Break up a hierarchical root repository
The steps to break up a hierarchical repository are similar
to the steps of breaking up an unstructured repository.
There are three major differences:
The new root repository (or new directory) should also be hierarchical.
You need to copy the existing directory system/ and clusterregistry/
directories into the new root repository (or the new directory).
The resources in a namespace cannot spread throughout multiple repositories.
Otherwise, different reconcilers fight to manage the namespace.
The root-sync-1 RootSync object should use spec.sourceFormat: hierarchical .
Since we recommend unstructured repositories, you might also consider
converting your hierarchical repository to an unstructured repository
before you break it up.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
