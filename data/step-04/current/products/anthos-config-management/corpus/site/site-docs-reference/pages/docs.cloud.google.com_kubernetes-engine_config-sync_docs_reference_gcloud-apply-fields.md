---
title: "gcloud apply spec fields \_|\_ Config Sync \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/gcloud-apply-fields
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/gcloud-apply-fields
  title: "gcloud apply spec fields \_|\_ Config Sync \_|\_ Google Cloud Documentation"
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
Reference
Send feedback
gcloud apply spec fields
Stay organized with collections
Save and categorize content based on your preferences.
This page explains the different fields that you can use to configure
Config Sync with the --config flag on the Google Cloud CLI
apply
command and the --fleet-default-member-config flag on the
enable
command in the beta release track. This field schema is now discouraged in
the
alpha release track of the enable command
in favor of the
new API schema
.
The file format used with these gcloud CLI flags is similar to the
format of the ConfigManagement object. However the formats are different and
the two are not interchangeable.
Common configuration for Config Management
Key
Description
spec.version
The version of Config Management. If you are configuring
Config Management for a cluster, the default version is
the current version of the Config Management installation on
said cluster. Otherwise, for fleet-wide configuration or in the absence of
an existing installation on the target cluster, the default is the
latest version .
Configuration for Config Sync
Key
Description
spec.cluster
The cluster name used by Config Sync
cluster-name-selector
annotation or ClusterSelector ,
for applying configs to only a subset of clusters. Set this field if a name
different from the cluster's fleet membership name is used by
Config Sync cluster-name-selector annotation or ClusterSelector .
spec.upgrades
( Preview ) The upgrade setting for Config Sync.
The default and only supported value is manual .
spec.configSync.enabled
If true , installs and manages
Config Sync .
If false , uninstalls any previously-managed Config Sync
and ignores the rest of the .spec.configSync configuration.
Required for gcloud CLI version 429.0.0 and earlier. Optional for
gcloud CLI version 430.0.0 and later. Default: true
spec.configSync.sourceType
The type of source that Config Sync should sync from.
Accepts git or oci . Default: git .
spec.configSync.syncRepo
The URL of the Git repository or OCI image to use as the source of
truth. You can omit this field if you don't have a repository prepared.
spec.configSync.syncBranch
The branch of the Git repository to sync from. This field is ignored if
.spec.configSync.sourceType is set to oci . This
field is optional and the default is master . We recommend using the
spec.configSync.syncRev field to specify a branch name. If both
fields are used,
spec.configSync.syncRev field takes precedence over
spec.configSync.syncBranch .
spec.configSync.policyDir
The path in the Git repository or OCI Image to the root directory that
contains the configuration that you want to sync. Default: the root
directory of the repository.
spec.configSync.syncWait
Period in seconds between consecutive syncs. Default: 15.
spec.configSync.syncRev
Git revision (tag or hash) or branch to sync from. This field is ignored if
.spec.configSync.sourceType is set to oci . This
field is optional and the default value is HEAD . When using a hash,
it must be a full hash, and not an abbreviated form.
spec.configSync.preventDrift
If true , enables the Config Sync admission webhook to
prevent drifts
by rejecting conflicting changes from being pushed to live
clusters. Defaults: false .
Config Sync always remediates drifts no matter the value of this field.
spec.configSync.stopSyncing
If true , stops syncing configurations for a single cluster.
Defaults to false .
spec.configSync.secretType
The type of Secret configured for access to the .spec.configSync.syncRepo .
If you selected git as the source type, the value must be ssh ,
cookiefile , gcenode , gcpserviceaccount ,
token , or none .
If you selected oci as the source type, the value must be
gcenode , gcpserviceaccount , or none .
The validation of this field is case-sensitive. Required.
spec.configSync.gcpServiceAccountEmail
The Google Cloud Service Account used to annotate the RootSync or
RepoSync controller's Kubernetes Service Account. This field is only used
when spec.configSync.secretType is gcpserviceaccount .
spec.configSync.metricsGcpServiceAccountEmail
Deprecated : If Workload Identity Federation for GKE is enabled,
Google Cloud Service Account is not required for exporting
Config Sync metrics. Use Kubernetes
Service Account instead.
spec.configSync.sourceFormat
When set to unstructured , configures a
non-hierarchical repo .
Default: hierarchy .
spec.configSync.deploymentOverrides
A list of resource override configurations for Config Sync deployments.
The field applies only to Config Sync deployments with
containers that are not a root or namespace reconciler, such as
reconciler-manager . If you must override a root or namespace
reconciler, use
rootsync or reposync fields instead. Optional.
spec.configSync.deploymentOverrides.name
The name of the Config Sync deployment to override.
The value cannot be empty.
spec.configSync.deploymentOverrides.namespace
The namespace of the Config Sync deployment to override.
The value cannot be empty.
spec.configSync.deploymentOverrides.containers
A list of override configurations for Config Sync
containers' requests and limits. Optional.
spec.configSync.deploymentOverrides.containers.name
The name of the Config Sync container to override.
The value cannot be empty.
spec.configSync.deploymentOverrides.containers.cpuRequest
The CPU request for the container. Use
CPU resource units in Kubernetes . Optional.
spec.configSync.deploymentOverrides.containers.cpuLimit
The CPU limit for the container. Use
CPU resource units in Kubernetes . Optional.
spec.configSync.deploymentOverrides.containers.memoryRequest
The memory request for the container. Use
memory resource units in Kubernetes . Optional.
spec.configSync.deploymentOverrides.containers.memoryLimit
The memory limit for the container. Use
memory resource units in Kubernetes . Optional.
Proxy configuration for the Git repository
If your organization's security policies require you to route traffic through
an HTTPS proxy, you can use the proxy's URI to configure
Config Sync to communicate with your Git host. Proxy is only supported when
using an authorization type of cookiefile , none , or token .
Note: HTTP proxy is not supported for security reasons.
Key
Description
spec.configSync.httpsProxy
Defines an HTTPS_PROXY environment variable used to access
the Git repository. For example,
https://proxy.internal.business.co:443 .
The HTTPS proxy only accepts https or unadorned URLs.
URLs containing http:// are rejected.
If using an unadorned URL, make sure the communication between your
proxy server and Git host is secure.
Example gcloud apply spec
applySpecVersion : 1
spec :
configSync :
enabled : true
sourceFormat : unstructured
syncRepo : https://github.com/GoogleCloudPlatform/anthos-config-management-samples
syncBranch : main
secretType : none
policyDir : config-sync-quickstart/multirepo/root
Example gcloud apply spec with deployment resource overrides
If you want to customize Config Sync resource requests and limits, add the
deploymentOverrides field in your apply spec. For example, the following YAML
overrides the CPU and memory limits for the reconciler-manager container:
Note: The deploymentOverrides field is only for customizing the resource
requests and limits of Config Sync containers. You can't use this field to override
other fields in a Deployment, such as the number of replicas.
applySpecVersion : 1
spec :
configSync :
enabled : true
deploymentOverrides :
- name : reconciler-manager
namespace : config-management-system
containers :
- name : reconciler-manager
cpuRequest : 50m
cpuLimit : 100m
memoryRequest : 256Mi
memoryLimit : 512Mi
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
