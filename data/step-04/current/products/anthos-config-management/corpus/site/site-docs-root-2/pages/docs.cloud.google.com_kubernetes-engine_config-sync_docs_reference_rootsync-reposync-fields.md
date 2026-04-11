---
title: "RootSync and RepoSync fields \_|\_ Config Sync \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields
  title: "RootSync and RepoSync fields \_|\_ Config Sync \_|\_ Google Cloud Documentation"
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
RootSync and RepoSync fields
Stay organized with collections
Save and categorize content based on your preferences.
This page provides a reference for the fields in RootSync , RepoSync , and
ResourceGroup objects. To learn more about how these objects work, see
Config Sync architecture .
RootSync and RepoSync fields
RootSync and RepoSync resource objects have the same fields with the exception of the following RootSync-only fields:
spec.helm.namespace
spec.helm.deployNamespace
spec.override.roleRefs
Configuration for the source format
Key
Description
spec.sourceFormat
Specifies how the source of truth is formatted. Optional.
The validation of this field is case-sensitive.
For RootSync objects, the value must be one of
hierarchy or unstructured . The default
value is hierarchy if not specified, but
unstructured is recommended.
For RepoSync objects, the default is unstructured
and can't be changed.
For more information, see the unstructured
and hierarchical
format guides.
Configuration for the source type
Key
Description
spec.sourceType
sourceType specifies the type of the source of truth. Must be one of
git , oci , or helm . Optional.
Set to git if not specified. The validation of this field is
case-sensitive.
Configuration for the Git repository
Key
Description
spec.git.auth
The type of Secret configured for access to the Git repo. Must be
ssh , cookiefile , gcenode ,
gcpserviceaccount , githubapp , token , or none .
The validation of this field is case-sensitive. Required.
spec.git.gcpServiceAccountEmail
The Google Cloud service account used to annotate the RootSync or
RepoSync controller's Kubernetes Service Account. This field is only used
when spec.git.auth is gcpserviceaccount .
spec.git.branch
The Git branch of the repository to sync from. This field is optional
and the default value is master . We recommend using the
spec.git.revision field to specify a branch name. If both
fields are used,
spec.git.revision field takes precedence over
spec.git.branch .
spec.git.dir
The absolute path in the Git repository to the root directory that
contains the configuration that you want to sync. Default: the root
directory ( / ) of the repository.
spec.git.period
The time duration between consecutive syncs. Default:
15s .
spec.git.repo
The Git repository URL to sync from. Required.
spec.git.revision
The Git revision (branch, tag, or commit) to sync from. This field is
optional and the default value is HEAD . When using a hash, it must be a full hash, and not an abbreviated form.
spec.git.secretRef.name
The name of the Secret used to connect to the Git source of truth.
spec.git.noSSLVerify 1
noSSLVerify specifies whether to enable or disable the SSL certificate
verification. Default: false.
If noSSLVerify is set to true, it tells Git to skip the SSL certificate verification.
spec.git.caCertSecretRef.name 1
The name of the Secret containing the certificate authority (CA) certificate.
If this field is provided, the Git server must be using a certificate issued by this CA.
The CA certificate must be stored in the Secret under a key named "cert".
Proxy configuration for the Git repository
If your organization's security policies require you to route traffic through
an HTTP(S) proxy, you can use the proxy's URI to configure
Config Sync to communicate with your Git host.
Key
Description
spec.git.proxy
The proxy URL with scheme for configuring access to the Git repo using
a proxy. For example,
https://proxy.internal.business.co:443 .
The Git proxy accepts https , http , and
unadorned URLs, but http is not recommended for
security concerns.
If using an http or an unadorned URL, make sure the
communication between your proxy server and Git host is secure.
This field only has an effect when spec.git.auth is
cookiefile , none , or token .
Configuration for the OCI image
Config Sync requires that the OCI layer is compressed in the tar or
tar+gzip format.
Other formats (for example, tar+bz2 ) will not be recognized by Config Sync.
Switching from a valid REPO to an OCI image with an unsupported format will cause
managed resources to be pruned without an error.
Key
Description
spec.oci.auth
The type of authentication configured for access to the OCI image. Must
be gcenode , k8sserviceaccount ,
gcpserviceaccount , or none .
The validation of this field is case-sensitive. Required.
spec.oci.gcpServiceAccountEmail
The Google Cloud service account used to annotate the RootSync or
RepoSync controller's Kubernetes Service Account. This field is only used
when spec.oci.auth is gcpserviceaccount .
spec.oci.dir
The absolute path in the OCI image to the root directory that
contains the configuration that you want to sync. Default: the root
directory ( / ) of the image.
spec.oci.period
The time duration between consecutive syncs. Default:
15s .
spec.oci.image
The OCI image URL to sync from. Required.
spec.oci.caCertSecretRef.name 1
The name of the Secret containing the certificate authority (CA) certificate.
If this field is provided, the OCI server must be using a certificate issued by this CA.
The CA certificate must be stored in the Secret under a key named "cert".
Configuration for the Helm repository
Key
Description
spec.helm.auth
The type of authentication configured for access to the Helm repository.
Must be token , gcenode ,
k8sserviceaccount , gcpserviceaccount , or
none . The validation of this field is case-sensitive.
Required.
spec.helm.gcpServiceAccountEmail
The Google Cloud service account used to annotate the RootSync or
RepoSync controller's Kubernetes Service Account. This field is only used
when spec.helm.auth is gcpserviceaccount .
spec.helm.secretRef.name
The name of the Secret
used to access the Helm repository. This field is used only when
spec.helm.auth is token .
spec.helm.repo
The Helm repository URL to sync from. Required.
spec.helm.chart
The Helm chart name. Required.
spec.helm.version
The Helm chart version number. Default: the latest version.
The version field can be specified
as a static value, as a range of versions from which Config Sync pulls the latest,
or left blank to indicate that Config Sync should pull the latest chart.
Config Sync determines the "latest" version based on semantic versioning.
If specified as a range or left blank, Config Sync re-pulls
the chart every 1 hour by default. You can configure
the re-pull period with the spec.helm.period field.
If the version is specified as the literal string "latest", the chart is re-pulled
according to spec.helm.period , just like with version ranges or blank versions.
The version range syntax is identical to the
version range syntax supported by the Helm CLI .
Specifying the version as a range or leaving the value empty can cause high
CPU use for large charts with many versions. You can use
spec.override to increase the CPU request for the helm-sync
container, such as in the following example:
spec :
override :
resources :
- containerName : helm-sync
cpuRequest : "200m"
spec.helm.period
The time duration that Config Sync waits before re-pulling the chart.
The default value is 1 hour. The field accepts string values, for example
"30s" or "5m". See the
Go documentation on valid inputs
for more information.
If the chart version is a range, uses the literal tag "latest", or is left
empty to indicate that Config Sync should pull the latest version, the
chart is re-pulled according to spec.helm.period . If the chart
version is specified as a single static version, the chart is not re-pulled.
spec.helm.releaseName
The name of the Helm release.
spec.helm.namespace
This is mutually exclusive with spec.helm.deployNamespace .
namespace sets the target namespace for a release. This field is used with RootSync objects only.
It only sets namespace for resources that contain namespace: {{ .Release.Namespace }} in their templates.
The value specified in spec.helm.namespace is only used as the value of Release.Namespace declared in your Helm templates.
For the resources that do not have namespace: {{ .Release.Namespace }} in their templates,
namespace default will be used. Default: default
spec.helm.deployNamespace
This is mutually exclusive with spec.helm.namespace .
deployNamespace specifies which namespace to deploy the chart. Setting this field leverages the kpt set-namespace function , which causes Config Sync to replace the namespace fields of resources in the chart, including metadata.namespace of namespace-scoped resources, metadata.name of Namespace objects, and namespace references in some special resource types.
If deployNamespace is not set, resources where metadata.namespace is not set are deployed to the default namespace.
spec.helm.values
Values to use instead of default values that accompany the chart. Format the values in the same way with the default values.yaml. For example:
values :
foo :
bar : val1
quz :
- val2
- val3
If valuesFileRefs is also specified, fields from values override
fields from valuesFileRefs .
For more information, see the Helm example manifest .
spec.helm.includeCRDs
Specifies if the Helm template should generate CustomResourceDefinitions.
Default: false .
spec.helm.valuesFileRefs
A list of references to objects in the cluster that represent
values to use instead of the default values that accompany the chart. Only
ConfigMaps are supported. The ConfigMap must be immutable and in the same
namespace as the RootSync or RepoSync .
ConfigMaps are immutable. To change the valuesFile after syncing, you must create a ConfigMap
with a different name and update the RootSync or RepoSync
spec.valuesFileRefs.name .
When multiple values files are specified, duplicated keys in later files
override the value from earlier files. This is equivalent to passing in
multiple values files to the Helm CLI. If spec.helm.values is also
specified, fields from values override fields from
valuesFileRefs .
Each item in the list must contain the following:
name (required): the name of the ConfigMap object
dataKey (optional): the data key in the object to read the values from. Default: values.yaml
For an example of how to change values, see Sync Helm charts .
spec.helm.caCertSecretRef.name 1
The name of the Secret containing the certificate authority (CA) certificate.
If this field is provided, the Helm server must be using a certificate issued by this CA.
The CA certificate must be stored in the Secret under a key named "cert".
Configuration for overriding the resource requests and limits of a root or namespace reconciler
You can override the git-sync , oci-sync , helm-sync ,
hydration-controller , and reconciler containers. Partial overriding is
allowed: when an override value for a resource request or limit isn't provided,
the default resource value for the request or limit is used.
For Autopilot clusters ,
Config Sync ignores resource limit overrides. Resource request overrides are applied
only when there exists one or more resource requests higher than the corresponding
adjusted output declared in the annotation, or there exists one or more resource
requests lower than the corresponding input declared in the annotation. For more
information, see
Cluster requirements for Config Sync .
Key
Description
spec.override.resources 1
The list of container resource request and limit overrides. Optional.
Each item in the list contains three fields:
containerName : this field can be either
git-sync , oci-sync , helm-sync ,
hydration-controller , or reconciler .
cpuRequest (optional)
cpuLimit (optional)
memoryRequest (optional)
memoryLimit (optional)
When an override value for a resource request or limit isn't provided, the
default resource value for the request or limit is used.
Configuration for overriding the log level of a container in root or namespace reconciler
When log level override value is not set, log level is configured to be the default value.
The default log level for all containers in a RootSync or RepoSync reconciler is 0,
with the exception of the git-sync container where the default is 5. Accepted log
level override value is between 0 to 10 inclusive.
Key
Description
spec.override.logLevels
The list of container log level override values. Optional.
Each item in the list contains two fields:
containerName : this field can be either
git-sync , oci-sync , helm-sync ,
hydration-controller , or reconciler .
logLevel
When an override value for a container's log level isn't provided, the
default log level value is used.
Configuration for the number of Git commits to fetch
Key
Description
spec.override.gitSyncDepth 1
gitSyncDepth lets you override the number of Git commits to fetch.
Must be no less than 0.
Config Sync does a full clone if this field is 0, and a shallow
clone if this field is greater than 0.
If this field is not provided, Config Sync configures it automatically.
Configuration for capturing the resource level status
Key
Description
spec.override.statusMode 1
statusMode lets you enable or disable capturing the resource level status.
The default is enabled .
To disable capturing the resource level status, set this field to disabled .
Configuration for overriding the reconcile timeout
Key
Description
spec.override.reconcileTimeout 1
reconcileTimeout lets you override the threshold for how long to wait for
resources in an apply group to reconcile before giving up. All the resources in a commit
can be in multiple apply groups based on the dependencies .
The default timeout is 5m .
Use string to specify this field value, like 30s , 5m .
Configuration for overriding the timeout for requests to the API server
Key
Description
spec.override.apiServerTimeout 1 apiServerTimeout lets you
override the timeout for requests to the API server.
The default timeout is 15 seconds, specified as
15s . Use string to specify this field value, like
30s , 5m .
Configuration for shell access in rendering process
Key
Description
spec.override.enableShellInRendering 1
enableShellInRendering specifies whether to enable or disable the shell access in the rendering process.
Kustomize remote bases require shell access. Setting this field to true enables shell access in the rendering process and
supports pulling remote bases from public repositories.
The default is false .
Configuration for namespace strategy (RootSync only)
Key
Description
spec.override.namespaceStrategy 1
namespaceStrategy controls how the reconciler handles missing Namespace configs of the namespace-scoped objects declared in the source. Only applies
when using the unstructured sourceFormat.
implicit : the reconciler will implicitly create Namespaces if they do not exist, even if they are not declared in the source. Implicit Namespaces are created with the prevent deletion annotation and managed by Config Sync.
explicit : the reconciler will only create Namespaces that are declared explicitly in the source.
The default is implicit .
Configuration for RBAC bindings (RootSync only)
Key
Description
spec.override.roleRefs 1
roleRefs is a list of Roles or ClusterRoles to create bindings.
Each item in the list contains the following fields:
kind (required): refers to the Kind of the RBAC resource. Accepted values are Role and ClusterRole.
name (required): the name of the Role or ClusterRole resource.
namespace (optional): indicates the Namespace in which a RoleBinding should be created. For ClusterRole objects, will determine whether a RoleBinding or ClusterRoleBinding is created. For Role objects, must be set to the same namespace as the Role.
If unset, a ClusterRoleBinding to cluster-admin will be created.
Status of the objects
Key
Description
status.observedGeneration
The generation (metadata.generation) of the spec of a RootSync or
RepoSync resource that was last observed and acted on by Config Sync.
This value can be compared with metadata.generation, which is an integer
and is updated on spec mutation by the API server.
status.reconciler
The name of the reconciler process which corresponds to the sync
resource.
status.source.gitStatus.repo
The Git repository URL being fetched.
status.source.gitStatus.revision
The Git revision (tag, commit, or hash) being fetched.
status.source.gitStatus.branch
The Git branch of the repository being fetched.
status.source.gitStatus.dir
The absolute path in the Git repository to the root directory that
contains the configuration that you are syncing to.
status.source.ociStatus.image
The OCI image URL being fetched.
status.source.ociStatus.dir
The absolute path in the OCI image to the root directory that
contains the configuration that you are syncing to.
status.source.helmStatus.repo
The helm repository URL being fetched.
status.source.helmStatus.version
The helm chart version being fetched.
status.source.helmStatus.chart
The name of the helm chart being fetched.
status.source.commit
The hash of the most recent commit or digest fetched from the source URL.
status.source.errors
The errors encountered while reading and parsing the configs from the
source of truth. This might not include all the encountered errors, because
Config Sync truncates errors if there are too many errors.
status.source.errorSummary.totalCount An integer
tracking the total number of errors encountered while reading and parsing
the configs from the source of truth.
status.source.errorSummary.truncated A boolean
indicating whether the status.source.errors field includes all
the errors encountered while reading and parsing the configs from the source
of truth.
status.source.errorSummary.errorCountAfterTruncation
An integer tracking the number of errors in the
status.source.errors field.
status.rendering.gitStatus.repo
The Git repository URL being rendered.
status.rendering.gitStatus.revision
The Git revision (tag, commit, or hash) being rendered.
status.rendering.gitStatus.branch
The Git branch of the repository being rendered.
status.rendering.gitStatus.dir
The absolute path in the Git repository to the root directory that
contains the configuration that you are rendering.
status.rendering.ociStatus.image
The OCI image URL being rendered.
status.rendering.ociStatus.dir
The absolute path in the OCI image to the root directory that
contains the configuration that you are rendering.
status.rendering.helmStatus.repo
The helm repository URL being rendered.
status.rendering.helmStatus.version
The helm chart version being rendered.
status.rendering.helmStatus.chart
The name of the helm chart being rendered.
status.rendering.commit
The hash of the most recent commit or digest that was rendered. This
value is updated even when a commit or digest is only partially synced due
to an error.
status.rendering.errors
A list of any errors encountered during the process of rendering the
resources from the change indicated by status.rendering.commit .
This might not include all the encountered errors, since Config Sync
truncates errors if there are too many errors.
status.rendering.errorSummary.totalCount An
integer tracking the total number of errors encountered during the process
of rendering the configs from the source of truth.
status.rendering.errorSummary.truncated A boolean
indicating whether the status.rendering.errors field includes
all the errors encountered during the process of rendering the configs from
the source of truth.
status.rendering.errorSummary.errorCountAfterTruncation
An integer tracking the number of errors in the
status.rendering.errors field.
status.sync.gitStatus.repo
The Git repository URL being synced.
status.sync.gitStatus.revision
The Git revision (tag, commit, or hash) being synced.
status.sync.gitStatus.branch
The Git branch of the repository being synced.
status.sync.gitStatus.dir
The absolute path in the Git repository to the root directory that
contains the configuration that you are syncing to.
status.sync.ociStatus.image
The OCI image URL being synced.
status.sync.ociStatus.dir
The absolute path in the OCI image to the root directory that
contains the configuration that you are syncing to.
status.sync.helmStatus.repo
The helm repository URL being synced.
status.sync.helmStatus.version
The helm chart version being synced.
status.sync.helmStatus.chart
The name of the helm chart being synced.
status.sync.commit
The hash of the most recent commit or digest that was synced to the
cluster. This value is updated even when a commit or digest is only
partially synced due to an error.
status.sync.errors
A list of any errors that occurred while applying the resources from
the change indicated by status.sync.commit . This might not
include all the encountered errors, because Config Sync truncates errors
if there are too many errors.
status.sync.errorSummary.totalCount An integer
tracking the total number of errors encountered while applying the configs
from the source of truth.
status.sync.errorSummary.truncated A boolean
indicating whether the status.sync.errors field includes all
the errors encountered while applying the configs from the source of
truth.
status.sync.errorSummary.errorCountAfterTruncation
An integer tracking the number of errors in the
status.sync.errors field.
status.conditions
A list of conditions tracking the current state of a
RootSync or RepoSync object.
When the type field of a condition is Reconciling
or Stalled :
This condition indicates the status of the Reconciler Manager in creating and managing the reconciler for this RootSync or RepoSync object.
The errors field of the condition tracks the errors
encountered while reconciling the RootSync or RepoSync object.
The errorSummary field of the condition summarizes the
errors in the errors field of the condition.
The errorsSourceRefs field of the condition is empty.
When the type of a condition is Syncing :
This condition indicates the status of the reconciler in syncing resources to the cluster.
The errors field of the condition is not used and should be ignored.
The errorsSourceRefs field of the condition track the
origination(s) of errors. The origination of errors can be
status.rendering.errors , status.source.errors ,
or status.sync.errors .
The errorSummary field of the condition summarizes the
errors referred in the errorsSourceRefs field.
1 If you
created a RootSync
configuration file after installing with the Google Cloud console or Google Cloud CLI
, you can overwrite this field.
ResourceGroup fields
Spec and status fields
Key
Description
spec.resources
The list of identifiers (Group, Kind, Namespace, Name) for resources
that are applied to the cluster from the Git repository that is specified
in a RepoSync CR or a RootSync CR. Optional.
Each item in the list contains four fields: group ,
kind , namespace , and name .
Status fields
Key
Description
status.observedGeneration
The generation (metadata.generation) of the spec of a RootSync or
RepoSync resource that was last observed and acted on by ResourceGroup
controller. This value can be compared with metadata.generation, which is
an integer and is updated on spec mutation by the API server.
status.conditions
The latest observed conditions for the current ResourceGroup. The
conditions have two different types: Reconciling and
Stalled . When the Reconciling type condition is
true, it means the current ResourceGroup is in reconciliation. When the
Stalled type condition is true, it means that the
reconciliation is stalled. When both are false, it means the current
ResourceGroup is reconciled and the status is up to date.
status.resourceStatuses
The list of statuses for resources that are included in
.spec.resources . Each item contains the identifier (Group, Kind,
Namespace, or Name) and status of a resource. The status is one of:
InProgress , Current , Failed ,
Terminating , NotFound , or
Unknown .
Unmanaged root-sync fields
The following fields of the RootSync named root-sync are not managed by
the Fleet (Hub) service and can be edited with any Kubernetes client:
Key
Description
spec.helm
All fields for Helm repository configuration.
spec.override
All fields for overriding default configurations.
spec.git.noSSLVerify
Specifies whether to enable or disable SSL certificate verification for Git. The default is false .
spec.git.caCertSecretRef.name
The name of the Secret containing the certificate authority (CA) certificate for a Git repository.
spec.oci.caCertSecretRef.name
The name of the Secret containing the certificate authority (CA) certificate for an OCI repository.
To learn more about managed and unmanaged fields in RootSync objects, see
How the Fleet service manages RootSync objects .
Example CRs
The following sections show you examples of RootSync and RepoSync CRs.
RootSync CR
The following example shows a RootSync object.
# root-sync.yaml
apiVersion : configsync.gke.io/v1beta1
kind : RootSync
metadata :
name : root-sync
namespace : config-management-system
spec :
sourceType : git
sourceFormat : unstructured
git :
repo : https://github.com/GoogleCloudPlatform/anthos-config-management-samples
branch : main
dir : config-sync-quickstart/multirepo/root
auth : none
period : 30s
RepoSync CR
The following example shows a RepoSync object.
# repo-sync.yaml
apiVersion : configsync.gke.io/v1beta1
kind : RepoSync
metadata :
name : repo-sync
namespace : gamestore
spec :
sourceType : git
sourceFormat : unstructured
git :
repo : https://github.com/GoogleCloudPlatform/anthos-config-management-samples
branch : main
dir : config-sync-quickstart/multirepo/root
auth : none
period : 30s
What's next
Learn how to monitor your RootSync and RepoSync objects .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
