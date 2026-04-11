---
title: "Config Sync known issues \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/known-issues
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/known-issues
  title: "Config Sync known issues \_|\_ Google Cloud Documentation"
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
Config Sync known issues
Stay organized with collections
Save and categorize content based on your preferences.
This page lists known issues for supported versions of Config Sync.
Many of the issues listed here have been fixed. The Fixed version
column indicates the version in which the fix was introduced. To receive
this fix,
upgrade
to the listed version or later.
If you're part of the Google Developer Program, save this page to receive
notifications when a release note related to this page is published. To
learn more, see
Saved Pages .
To filter the known issues by a product version or problem category, select
your filters from the following drop-down menus.
Select your Config Sync version:
1.19
1.17
1.15
1.13
Select your problem category:
Component health
Google Cloud console
Metrics
nomos command-line tool
Private registry
Remediation
Source of truth
Syncing
Terraform
Or, filter the known issues:
Category
Identified version
Fixed version
Issue and workaround
Metrics
1.5.0
1.21.0
Fixed: Metrics reported for deleted packages
If you delete a RootSync or RepoSync object, but
don't delete the ResourceGroup object with the same name,
Config Sync continues to report the following metrics for that
ResourceGroup object:
rg_reconcile_duration_seconds
resource_group_total
resource_count
ready_resource_count
resource_ns_count
cluster_scoped_resource_count
crd_count
kcc_resource_count
pipeline_error_observed
The ResourceGroup object is only deleted automatically if
deletion propagation
was enabled before the deletion of the RootSync or
RepoSync object.
Workaround:
Delete the ResourceGroup object:
kubectl delete resourcegroup RESOURCE_GROUP_NAME -n config-management-system
Replace RESOURCE_GROUP_NAME with the name of the
ResourceGroup object that needs to be deleted. To learn more
about ResourceGroup
naming, see ResourceGroup Controller and ResourceGroup objects .
Component health
1.15.0
Reconciler unschedulable
Config Sync reconcilers require varying amounts of resources,
depending on the configuration of the RootSync or RepoSync. Certain
configurations require more resources than others.
If a reconciler is unschedulable, it might be due to requesting more
resources than are available on your nodes.
If you're using standard mode GKE clusters, the reconciler resource
requests are set very low. This setting was chosen in an attempt to
allow scheduling, even if it would lead to throttling and slow
performance, so that Config Sync works on small clusters and small
nodes. However, on GKE Autopilotclusters,
the reconciler requests are set higher, to more realistically represent
usage while syncing.
Workaround:
GKE Autopilot or
Standard with
node auto-provisioning
enabled should be able to see how many resources are requested and create
appropriately sized nodes to allow scheduling. However, if you're manually
configuring the nodes or node instance sizes, you might need to adjust
those settings to accommodate the reconciler Pod resource requirements.
Metrics
1.15.0
Exporting failed. Permission denied
By default, when the reconciler-manager detects
Application Default Credentials ,
the otel-collector is configured to export metrics to Prometheus,
Cloud Monitoring, and Monarch.
Workaround:
otel-collector logs errors if you haven't
Configured Cloud Monitoring
or customizing metric filters
and Cloud Monarch.
Metrics
1.15.0
otel-collector crashing with custom config
If you try to modify or delete one of the default ConfigMaps,
otel-collector or otel-collector-google-cloud ,
the otel-collector might error or crash from not being able to load the
required ConfigMap.
Workaround:
To customize the metrics export configuration, create a ConfigMap named
otel-collector-custom in the
config-management-monitoring namespace.
Remediation
Config Sync fighting with itself
Config Sync might appear to be in a
controller fight .
with itself. This issue occurs if you set the default value for an
optional field of a resource in the Git repository. For example,
setting apiGroup: "" for the subject of a RoleBinding
triggers this because the apiGroup field is optional and an
empty string is the default value. The default values of string, boolean,
and integer fields are "" , false , and 0
(respectively).
Workaround:
Remove the field from the resource declaration.
Remediation
Config Sync fighting with Config Connector resources
Config Sync might appear to be
fighting
Config Connector over a resource, for example a
StorageBucket .
This issue occurs if you don't set the value of an optional field of a resource
spec.lifecycleRule.condition.withState in the source of truth.
Workaround:
You can avoid this issue by adding the withState=ANY field
on the resource declaration. Alternatively, you can
abandon
and then reacquire the resource with the
cnrm.cloud.google.com/state-into-spec: absent annotation.
Source of truth
1.13.0
1.20.1
Fixed: Unable to generate access token for OCI source
When Config Sync is configured to use OCI as the source of truth
and authenticate with Workload Identity Federation for GKE, Config Sync
might occasionally encounter temporary KNV2004 errors when it
attempts to authenticate with the container registry.
This issue is caused by the oauth2 library only refreshing the auth token
after the token has already expired.
The error message might include the following text:
"oauth2/google: unable to generate access token" or
"ID Token issued at (xxx) is stale to sign-in."
Workaround:
The error should resolve itself the next time Config Sync attempts
to fetch from the source of truth.
When Config Sync has errored multiple times, retries become less
frequent. To force Config Sync to retry sooner, delete the reconciler
Pod. This action causes Config Sync to recreate the reconciler Pod
and immediately fetch from the source of truth:
kubectl delete pod -n config-management-system RECONCILER_NAME
Replace RECONCILER_NAME with the reconciler name
of the RootSync or RepoSync object.
Source of truth
1.20.0
1.21.3
git-sync container crash loops after a Git lock file is orphaned
If you see the git-sync container crash looping with errors
similar to the following in the git-sync container log,
a previous git invocation might have failed and left an orphaned
lock file in the container:
{"logger":""..."msg":"repo contains lock file","error":null,"path":"/repo/source/.git/shallow.lock"}
...runtime error: invalid memory address or nil pointer dereference
Workaround:
To work around this issue, restart the impacted reconciler Pod to give it
a new ephemeral volume:
kubectl delete pod -n config-management-system RECONCILER_NAME
Replace RECONCILER_NAME with the reconciler name
of the RootSync or RepoSync object.
Source of truth
1.19.0
1.20.0
Fixed: Lingering Git lock file
If you see an error similar to the following from the
git-sync container, then a previous git
invocation might have failed and left a lingering lock file in the
container:
KNV2004: error in the git-sync container: ... fatal: Unable to create '/repo/source/.git/shallow.lock': File exists. ...
Workaround:
To work around this issue, restart the impacted reconciler Pod to give it
a new ephemeral volume:
kubectl delete pod -n config-management-system RECONCILER_NAME
Replace RECONCILER_NAME with the reconciler name
of the RootSync or RepoSync object.
Syncing
1.7.0
1.21.0
Fixed: Ignore mutation annotation not honored
A bug in the Config Sync reconciler causes it to apply changes from declared configurations even when the client.lifecycle.config.k8s.io/mutation annotation is present. This might cause the state of the object in the cluster to be overwritten.
Workaround:
You can stop managing the managed object by adding the configmanagement.gke.io/managed: disabled annotation. However, disabling management prevents Config Sync from re-creating the object if it is deleted from the cluster. It also prevents further updates in the source of truth from being applied.
Syncing
1.5.0
1.20.1
Fixed: API discovery errors can cause managed objects to incorrectly be marked as Not Found
If an API Service backend is unhealthy, it can cause API discovery to error. If this happens while the ResourceGroup Controller is starting up, after being updated or rescheduled, the resource cache will fail to initialize, causing all the managed objects to be reported as Not Found in the ResourceGroup status.
This issue often occurs when the metrics-server is unhealthy.
Workaround:
Restart the resource-group-controller Pod after the metrics-server becomes healthy again:
kubectl delete pod -n resource-group-system RESOURCE_GROUP_CONTROLLER_NAME
Replace RESOURCE_GROUP_CONTROLLER_NAME with the ResourceGroup Controller name, which is the same as the RootSync or RepoSync name for that package.
Syncing
1.15.0
High number of ineffective PATCH requests in the audit logs
The Config Sync remediator uses
Dry-run
to detect drift. This can cause PATCH requests to show up in
the audit log, even when the PATCH isn't persisted,
because the audit log doesn't distinguish between dry-runs and normal requests .
Workaround:
Because the audit log cannot distinguish between dry-run and non-dry-run
requests, you can ignore the PATCH requests.
Syncing
1.7.0
1.21.0
Fixed: Failed to write updated inventory to cluster
If Config Sync fails to update the status of a ResourceGroup object, you might encounter an intermittent error in the reconciler logs that's similar to the following:
KNV2009: task failed (action: "Inventory", name: "inventory-set-0"): failed to write updated inventory to cluster: Operation cannot be fulfilled on resourcegroups.kpt.dev "root-sync": the object has been modified; please apply your changes to the latest version and try again
This error is due to a race condition between the reconciler and the ResourceGroup Controller. The ResourceGroup Controller might update the ResourceGroup status before the reconciler can update the ResourceGroup spec, causing the KNV2009 error.
Workaround:
This issue doesn't have a workaround. The error should resolve itself.
Terraform
Terraform version 5.41.0
Config Sync can't be installed or upgraded using Terraform
Terraform version 5.41.0 introduced a new field to the google_gke_hub_feature_membership resource: config_sync.enabled . Because the default value of this field is false ,
if this field is not explicitly set to true , it causes Config Sync installations or upgrades to fail when using Terraform version 5.41.0 or later. You might also see an error message that states git spec not included in configmanagement spec if this issue occurs.
Workaround:
If you use the google_gke_hub_feature_membership resource, manually set the config_sync.enabled to true .
If you use the acm submodule , it's recommended to switch to an alternative way to install Config Sync.
If you're unable to switch, upgrade to v33.0.0 .
Google Cloud console
Config Sync dashboard missing data errors in the Google Cloud console
You might see errors such as "missing data" or "invalid cluster credentials" for Config Sync clusters on dashboards in the Google Cloud console. This issue can occur
when you're not logged in to your GDC (VMware) or GDC (bare metal) clusters.
Workaround:
If you see these types of errors in the Google Cloud console on your
GDC (VMware) or GDC (bare metal) clusters,
ensure that you're logged in to your clusters with GKE Identity Service
or connect gateway .
Syncing
1.21.0
Fixed: Config Sync prevents updates of abandoned resources
Prior to version 1.21.0, a deleted RootSync or RepoSync
object can leave behind several labels and annotations
that Config Sync uses to track these resource objects.
These labels and annotations can cause the following side effects after a RootSync or RepoSync object is deleted:
Other RepoSync objects cannot take ownership of previously managed objects.
If drift prevention is enabled, this can cause Config Sync to reject changes to abandoned resources.
nomos command-line tool
1.17.0
nomos CLI doesn't support oidc auth plugin
You may see errors such as no Auth Provider found for name "oidc" when you use the nomos command-line tool. This issue might occur when you're using the oidc authentication plugin.
Workaround:
There is no workaround. The oidc auth plugin will be added back in a subsequent release.
Back to top
What's next
If you can't find a solution to your problem in the documentation, see Get
support
for further help, including advice on the following topics:
Opening a support case by contacting
Cloud Customer Care .
Getting support from the community by
asking questions on
StackOverflow .
If you use kpt or Kustomize, use the kpt or kustomize tag to
search for similar issues.
Opening bugs or feature requests by using the
public issue tracker
on GitHub.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
