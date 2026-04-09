---
title: "Error reference \_|\_ Config Sync \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors
  title: "Error reference \_|\_ Config Sync \_|\_ Google Cloud Documentation"
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
Error reference
Stay organized with collections
Save and categorize content based on your preferences.
This page describes Config Sync error codes and recommended actions to
handle these errors.
Config Sync error messages consist of an error ID in the format KNV1234
where 1234 is a unique number, followed by a description of the problem and a
suggestion for how to fix it. K is inherited from Kubernetes conventions,
rules with prefix N are specific to nomos , V is specific to
errors detectable in the initial state of the repository and the cluster. Codes
for errors detectable in the initial state of the repository and the cluster are
of the form KNV1XXX . Codes for errors that can only be detected at runtime are
of the form KNV2XXX .
KNV error table
Error code
Description
Recommended action
KNV1000: Internal Error
The ID of InternalError changed to KNV9998 with
Config Sync version 1.6.1.
N/A
KNV1001: Reserved Directory Name Error
Deprecated in Config Sync 1.3.
N/A
KNV1002: Duplicate Directory Name Error
Deprecated in Config Sync 1.3.
N/A
KNV1003: Illegal Namespace Subdirectory Error
When using a hierarchical repository structure, a directory that contains a
namespace config must not contain any subdirectories.
A directory without a namespace config is an abstract namespace
directory and has directories inheriting from it. Consequently,
abstract namespace directories must have subdirectories. A directory
containing a namespace config is a namespace directory and cannot be
inherited from, so it must not have any subdirectories.
Either remove the namespace config from the parent directory, or move the
subdirectory somewhere else.
KNV1004: Illegal Selector Annotation Error
A cluster-scoped object must not declare the annotation
configmanagement.gke.io/namespace-selector .
NamespaceSelectors can only be declared for namespace scoped objects.
Remove configmanagement.gke.io/namespace-selector from
the metadata.annotations field.
KNV1005: Illegal Management Annotation Error
The only valid setting for the management annotation is
configmanagement.gke.io/managed=disabled . This setting is
used to explicitly unmanage a resource in the Git repository while
leaving the config checked in. The annotation
configmanagement.gke.io/managed=enabled isn't necessary.
Ensure that the management annotation is
configmanagement.gke.io/managed=disabled .
For more information, see Managing objects .
KNV1006: Object Parse Error
An object declared in the repository couldn't be parsed.
Validate your YAML format. For example, you can use the
kubectl --validate command.
If nomos vet returns this error on a type with
group: configsync.gke.io , such as a RepoSync, download
v1.6.0-rc.6 or later from the
downloads page to resolve.
KNV1007: Illegal Abstract Namespace Object Kind Error
When using an unstructured repository, configs must not be declared in
an abstract namespace directory.
Move the config listed in the error message to a namespace directory.
For more information, see
Using an unstructured repository .
KNV1009: Illegal Metadata Namespace Declaration Error
When using a hierarchical repository structure, configs must either declare namespaces
that match the namespace directory containing them or omit the field.
Update the namespace field identified in the error message.
For more information, see
Structure of the hierarchical repository .
KNV1010: Illegal Annotation Definition Error
Configs must not declare unsupported annotations starting with configmanagement.gke.io .
Make sure you're using one of the following supported annotations:
configmanagement.gke.io/managed . For more information, see Managing objects .
configmanagement.gke.io/namespace-selector . For more information, see Namespace-scoped objects .
configmanagement.gke.io/cluster-selector . For more information, see ClusterSelectors .
KNV1011: Illegal Label Definition
Configs must not have labels with keys that begin with
configmanagement.gke.io/ . This label key prefix is
reserved for use by Config Sync.
Update any labels identified in the error message. For example, if
you tried to declare a label named
configmanagement.gke.io/example-label: label-value ,
you could change it to example-label: label-value .
KNV1012: Namespac Selector May Not Have Annotation
Deprecated in Config Sync 1.3.
N/A
KNV1013: Object Has Unknown Selector
The config refers to a ClusterSelector or NamespaceSelector that doesn't exist. Before you
can use a selector in an annotation for a config, the selector must exist.
Either create any missing selectors, or, if the selector was removed, remove any configs
that refer to it.
KNV1014: Invalid Selector Error
ClusterSelector and NamespaceSelector configs use the correct syntax, but a syntax error was found.
Ensure that you specify the config using the appropriate data schema:
ClusterSelector
NamespaceSelector
KNV1016: Policy Management Not Installed Error
Deprecated in Config Sync 1.3.2.
N/A
KNV1017: Missing Repo Error
When using the hierarchical repository structure, a config for the ConfigManagement Operator
must exist in the system/ directory of the repository. This config must
include required information such as the repo's semantic version.
Define at least a minimal config for the ConfigManagement Operator. For more
information, see
Structure of the hierarchical repository .
KNV1018: Illegal Subdirectory Error
Deprecated in Config Sync 1.3.
N/A
KNV1019: Illegal Top Level Namespace Error
When using the hierarchical repository structure, namespaces mustn't be declared directly
in the namespaces/ directory.
Create a subdirectory for the namespace configs listed in the error message. For more
information, see
Structure of the hierarchical repository .
KNV1020: Invalid Namespace Name Error
When using a hierarchical repository structure, a namespace config declares
metadata.name , and its value must match the name of the namespace's directory.
Correct the namespace's metadata.name or its directory.
KNV1021: Unknown Object Error
No CustomResourceDefinition is defined for the resource in the cluster.
Create a CustomResourceDefinition for the resource referenced in the error message.
Resource types that are not built-in Kubernetes objects must have a
CustomResourceDefinition.
KNV1024: Illegal Kind In System Error
When you're using a hierarchical repository, configs of this Kind cannot be declared in
the system/ directory.
Move the resource referenced in the error message out of the system/
directory. For more information, see
Structure of the hierarchical repository .
KNV1027: Unsupported Repo Spec Version
The spec.version field in the Repo config represents the semantic version of
the repository. This error indicates that you are using an unsupported version.
If your repository's format is compatible with the supported version, update the
spec.version field. If you need to upgrade, follow the instructions in the
release notes .
KNV1028: Invalid Directory Name Error
Directory names must have fewer than 64 characters, consist of lower case alphanumeric
characters or '-', and must start and end with an alphanumeric character.
Rename or remove the misnamed directory.
KNV1029: Metadata Name Collision Error
Configs of the same Kind must have unique names in the same namespace and their parent
abstract namespaces.
Rename or remove any configs referenced in the error message so that they all have unique
names.
KNV1030: Multiple Singletons Error
Multiple namespace resources cannot exist in the same directory.
Remove the duplicate config(s) so that no more than one namespace resource remains.
KNV1031: Missing Object Name Error
All configs must declare metadata.name .
Add the metadata.name field to the problematic configs.
KNV1032: Illegal Hierarchical Kind Error Code
The type Repo.configmanagement.gke.io is not allowed if
sourceFormat is set to unstructured .
Remove the problematic config, or convert your repository to use
sourceFormat: hierarchy .
KNV1033: Illegal System Resource Placement Error
If you're using a hierarchical repository, you can only declare
HierarchyConfig and Repo Kinds in the system/
directory.
Ensure any configs declared in the system/ directory is one of the
allowed Kinds. If it's not, move it to another directory.
KNV1034: Illegal Namespace Error
It is forbidden to declare the config-management-system ,
resource-group-system , and config-management-monitoring ,
or resources within them.
If you declared the config-management-system namespace, remove it and any
configs in that namespace.
If you declared the resource-group-system or
config-management-monitoring namespaces, unmanage the controller namespace:
Update Config Sync to stop managing the namespace and any resource declared underneath.
Wait for a sync and then confirm that the corresponding resources are still available on the cluster, but not in nomos status .
Remove the controller namespace YAML file from the source.
Let Config Sync resume managing the resources .
If you were previously syncing to a
hierarchical repository and had to
declare the controller namespace alongside any resources, consider
switching to an unstructured repository
for more flexibility in your source structure.
KNV1036: Invalid Metadata Name Error
The metadata.name supplied has an invalid format.
Change the metadata.name to satisfy the following conditions:
Be shorter than 254 characters
Consist of lower case alphanumeric characters, '-', or '.'
Start and end with an alphanumeric character
If metadata.name is invalid, and the original resource supports it, consider
using the spec.resourceID field instead so that you're not restricted by
these limitations. For more information, see
Managing resources with the resourceID field .
KNV1037: Illegal Kind In Clusterregistry Error
Deprecated in Config Sync 1.3.
N/A
KNV1038: Illegal Kind In Namespaces Error
It is forbidden to declare a namespace-scoped object outside of the
namespaces/ directory.
Move the problematic configs so that they are in a legal directory. For more
information about namespace-scoped objects, see
Namespace-scoped objects .
KNV1039: Illegal Kind In Cluster Error
It is forbidden to declare a cluster-scoped object outside of the cluster/
directory.
Move the problematic configs so that they are in a legal directory. For more
information about cluster-scoped objects, see
Cluster-scoped objects .
KNV1040: Unknown Resource In Hierarchy Config Error
Deprecated in Config Sync 1.3.
N/A
KNV1041: Unsupported Resource In Hierarchy Config Error
This Resource Kind must not be declared in a HierarchyConfig .
Remove the problematic resource. To read more about HierarchyConfig , see
Disabling Inheritance for an Object Type .
KNV1042: Illegal Hierarchy Mode Error
An illegal value for HierarchyMode was detected on a HierarchyConfig .
Change HierarchyMode to none or inherit . To
read more about HierarchyConfigs, see
Disabling Inheritance for an Object Type .
KNV1043: Unsupported Object Error
Config Sync cannot configure this object.
Remove the problematic config from the repository.
KNV1044: Unsyncable Resources Error Code
An abstract namespace directory with configs must have at least one
namespace subdirectory.
Either add a namespace directory under your abstract namespace
directory, add a namespace
config to your abstract namespace directory, or remove the configs in your abstract
namespace directory.
KNV1045: Illegal Fields In Config Error
Configs with metadata.ownerReference specified are not allowed.
Remove the status field from the source repository. For third party configs
that you don't own, use
kustomize patches
to remove status fields specified in your manifests in bulk.
KNV1046: Cluster Scoped Resource In HierarchyConfig Error
This HierarchyConfig references a resource which has cluster scope. Cluster
scoped objects aren't permitted in HierarchyConfig .
Update the HierarchyConfig so that it no longer references the problematic resource.
KNV1047: Unsupported CRD Removal Error
Removing a custom resource definition (CRD) and leaving the corresponding Custom Resources in the repository isn't allowed.
Remove the CRD along with the Custom Resources.
KNV1048: Invalid CRD Name Error
The CustomResourceDefinition has an invalid name.
Change the name to the recommendation in the error message.
KNV1050: Deprecated Group Kind Error
The config is using a deprecated Group and Kind.
Change the Group or Kind to the recommendation in the error message.
KNV1052: Illegal Namespace On Cluster Scoped Resource Error
Cluster-scoped resources mustn't declare metadata.namespace .
Remove the metadata.namespace field from your cluster-scoped resource.
KNV1053: Missing Namespace On Namespaced Resource Error
Namespace-scoped resources must either declare either metadata.namespace or
metadata.annotations.configmanagement.gke.io/namespace-selector .
Add the missing field to your namespace-scoped resource.
KNV1054: Invalid Annotation Value Error
Configs contain an invalid value for an annotation.
Follow the instructions in the error message to resolve the error.
KNV1055: Invalid Namespace Error
The value of metadata.namespace isn't a valid Kubernetes
namespace name.
Update the value of metadata.namespace so that it complies with the following rules:
Has a length of 63 characters or fewer
Consists only of lowercase letters (a-z), digits (0-9), and hyphen '-'
Begins and ends with a lowercase letter or digit
KNV1056: Managed Resource In Unmanaged Namespace
A resource is declared in an unmanaged namespace.
Either remove the configmanagement.gke.io/managed: disabled annotation, or add
the annotation to the declared resource.
KNV1057: Illegal Depth Label
A resource has an illegal label.
Remove the illegal labels listed in the error message.
KNV1058: Bad Scope Error
A namespace repository can only declare namespace-scoped resources in
the namespace the repository it applies to.
Make sure all namespace repositories are declaring namespace-scoped resources correctly.
For example, the repository for the shipping namespace repository can only
manage resources in the shipping namespace. The value of
metadata.namespace is optional. By default, Config Sync
assumes that all resources in a namespace repository belong in that namespace.
For example, if a config in the shipping namespace repository declared
metadata.namespace: billing , you would get an error.
In addition to making sure that namespace-scoped resources are declared correctly,
make sure that namespaces are declared in the root repository. This is necessary because
namespaces are cluster-scoped.
KNV 1059: Multiple Kptfiles Error
A namespace repository can declare at most one Kptfile resource.
Remove all but one Kptfile resource.
KNV 1060: Management Conflict Error
When managing objects in multiple sources of truth, conflicts can arise when the same
object (matching group, kind, name, and namespace) is declared in more than one source.
For example, when the same object is managed by a RootSync and a RepoSync, the RootSync
wins. If the RootSync applies first, the RepoSync reports a KNV1060 status error. If the
RepoSync applies first, the RootSync overwrites the RepoSync's object and the RepoSync
reports a KNV1060 status error when it sees the update.
Resolve the conflict by updating the config to match with the other source of truth, or by
deleting the conflicting object from one of the sources.
The nomos vet command only checks for errors
in one repository at a time, so it cannot detect this problem.
KNV 1061: Invalid RepoSync Error
An InvalidRepoSyncError reports that a RepoSync is misconfigured.
RepoSync objects must be properly configured for Config Sync to sync configuration from
namespace repositories.
Follow the instructions in the error message to fix the configuration errors.
KNV1062: Invalid Kptfile Error
The Kptfile doesn't have a valid inventory field. A Kptfile should
have a non-empty inventory field with both identifier and namespace specified.
Specify the values for .inventory.identifier and
.inventory.namespace in the Kptfile.
KNV1063: Kptfile Exist Error
Kptfiles were found in the Root repository. Kptfiles are only
supported in namespace-scoped repositories.
Remove the Kptfiles from the Root repository.
KNV1064: Invalid API Resources Error
The api-resources.txt file in your repository
couldn't be parsed.
Follow the instructions in the error message. For example, you might need to re-run
kubectl api-resources > api-resources.txt .
KNV1065: Malformed CRD Error
The CustomResourceDefinition is malformed.
Check the field specified by the error message and make sure its value is correctly formatted.
KNV1066: ClusterSelector Annotation Conflict Error
A config object must declare only cluster-selector annotation. This error occurs when both
the legacy annotation ( configmanagement.gke.io/cluster-selector ) and the
inline annotation ( configsync.gke.io/cluster-name-selector ) exist.
Remove one of the annotations from the metadata.annotations field.
KNV1067: Encode Declared Field Error
The reconciler fails to encode the declared fields into a format
that is compatible with
server-side apply .
It could be caused by an out-of-date schema.
Check the field specified by the error message and make sure it
matches the schema of the resource kind.
KNV1068: Actionable Rendering Error
The rendering process encountered a user-actionable issue.
If the Git repository contains Kustomize configurations, but no kustomization.yaml
file exists in the Git sync directory, either add kustomization.yaml in the
sync directory to trigger the rendering process, or remove kustomization.yaml
from all sub directories to skip rendering.
If the error is caused by kustomize build failures, you might need to update
the Kustomize configurations in your Git repository. You can preview and validate the
updated configs locally by using nomos hydrate and nomos vet
respectively. If the updated configs are rendered successfully, you can push a new commit
to fix the KNV1068 error.
If a kustomize build error happens when pulling remote bases from public
repositories, you need to set
spec.override.enableShellInRendering
to true .
KNV1069: Self Manage Error
A reconciler has reconciled its own RootSync or RepoSync object. A
RootSync object can manage other RootSync and RepoSync objects; A RepoSync
object can manage other RepoSync objects, but they cannot self-manage .
Remove the RootSync or RepoSync object from the source of truth that the object syncs from.
KNV2001: Path Error
An OS-level system call accessing a file system resource fails.
This error is likely caused by an invalid YAML configuration or using special characters. If you
have an invalid YAML configuration, you see an error message similar to the following:
KNV2001: yaml: line 2: did not find expected node content path:... . To
resolve this issue, check your YAML files and resolve any configuration problems. This
can be caused by any YAML configuration within the repository.
If your filename or path contains special characters, you might see an error message
similar to KNV2001: yaml: control characters are not allowed path:/repo/source/.../._pod.yaml .
In this example ._pod.yaml is not a valid filename. To resolve this issue, remove
special characters from your file or path names.
KNV2002: API Server Error
A request accessing the Kubernetes API Server fails.
Kubernetes API requests can fail for many reasons. Common causes include:
API discovery error
Client-side or server-side request or response timeout
Identity, authentication, or authorization error
Network connectivity error
Webhook denied the request
Webhook unhealthy or unreachable by the API Server
Config Sync retries after most API Server errors. Some might be
temporary issues that resolve themselves, but most will require user
intervention to resolve. API Server errors are rarely caused by
Config Sync itself, but if you suspect they might be, please file a
bug report .
KNV2003: osError
A generic OS-level system call fails.
KNV2004: Source Error
Config Sync cannot read from the source of truth .
Multiple issues can cause this error. To troubleshoot connecting to the
source of truth, see
Troubleshoot connecting to the source of truth .
To learn about known issues that cause KNV2004 errors, see
Known issues .
KNV2005: Resource Fight Error
Config Sync is fighting with another controller over a resource.
Such fights consume a high amount of resources and can degrade your performance.
For tips on how to diagnose and resolve controller fights, see
Troubleshoot controller fights .
KNV2006: Config Management Errors
To help prevent accidental deletion, Config Sync doesn't let you remove all namespaces
or cluster-scoped resources in a single commit.
If the Config Sync admission webhook is disabled, revert the commit that deletes all resources.
If the Config Sync admission webhook is enabled, your namespace might be stuck terminating. To fix it, run the following steps:
Disable Config Sync ,
and wait until all resources are cleaned or in a stable status. For example, you
can run kubectl get ns to make sure the namespaces are deleted.
Re-enable Config Sync .
Revert the commit that deletes all resources.
If you want to delete the full set of resources under management, complete the following steps:
Remove all but one namespace or cluster-scoped resource in a first commit and allow
Config Sync to sync those changes.
Remove the final resource in a second commit.
KNV2008: API Server Conflict Error
A resource on the API Server is modified or deleted while
Config Sync is also attempting to modify it.
If this type of error only appears at startup or infrequently, you can
ignore these errors.
If these errors are not transient (persisting multiple minutes), it might indicate a
serious issue and nomos status reports controller fights .
KNV2009: Apply Error
This is a generic error indicating that Config Sync failed to
sync some configs to the cluster.
There are multiple issues that can cause this error. For tips on how to resolve common
issues with syncing, see Troubleshoot syncing .
KNV2010: Resource Error
This is a generic error indicating a problem with a resource or set of resources.
The error message includes the specific resources which caused the error. Investigate these
resources.
KNV2011: Missing Resource Error
A specific resource is required to proceed, but the resource wasn't
found. For example, ConfigManagement Operator tried to update a resource, but
the resource was deleted while calculating the update.
Create or restore the missing resource.
KNV2012: Multiple Singletons Error
This error reports that more than one instance of an APIResource was found in a context
where exactly one of that APIResource is allowed. For example, only one Repo
resource should exist on a cluster.
Remove the additional APIResource.
KNV2013: Insufficient Permission Error
A namespace reconciler has insufficient permissions to manage
resources.
Make sure the reconciler has sufficient permissions.
KNV2014: Invalid Webhook Warning
This warning occurs when the Config Sync webhook configuration is illegally modified.
The illegal webhook configurations are ignored.
Remove the illegally modified webhook.
KNV2015: Internal Rendering Error
The rendering process encountered an internal issue. For example,
Config Sync is unable to access the file system.
This error might indicate the Pod is not healthy. You can restart the reconciler Pods by
running the following commands:
# restart a root reconciler
kubectl delete pod -n config-management-system -l configsync.gke.io/reconciler = root-reconciler
# restart a namespace reconciler
kubectl delete pod -n config-management-system -l configsync.gke.io/reconciler = ns-reconciler-NAMESPACE
KNV2016: Transient Error
This error represents a transient issue that should automatically resolve at a later time.
For example, if the rendering state doesn't match the source config, you might see this
error.
The error should automatically resolve.
KNV9998: Internal Error
There's a problem with Config Sync itself.
Please file a
bug report .
KNV9999: Undocumented Error
You've encountered an error with no documented error message.
We haven't yet written documentation specific to the error you encountered.
Back to top
Error messages without a KNV code
Errors that are reported by Config Sync reconcilers have the KNV error code,
but errors reported from other components don't have KNV code. For example, the
permission denied error comes from the fleet controller, which is a layer on top
of Config Sync.
The following table lists some common errors without the KNV prefix.
Error message
Recommended action
Error: cannot build exporters: error creating stackdriver exporter: cannot configure Google Cloud metric exporter: stackdriver: google: could not find default credentials.
Error: Permission monitoring.timeSeries.create denied (or the resource may not exist).
Cannot build exporters
When a component in Open Telemetry Collector can't access the
default service account under the same namespace, you might notice
that the otel-collector Pod under
config-management-monitoring is in CrashLoopBackoff
status, or you might see an error message similar to ones listed.
This issue usually happens when
Workload Identity Federation for GKE
is enabled in a cluster.
To solve this problem, follow the instructions in
Monitoring Config Sync to grant metric write permission to the default service account.
If the error persists after setting up the IAM, restart the
otel-collector Pod for the changes to take effect.
If you are using a custom monitoring solution , but forked the default otel-collector-googlecloud ConfigMap, check and rebase any difference.
server certificate verification failed. CAfile:/etc/ca-cert/cert CRLfile: none
Server certificate verification failed
If the git-sync , helm-sync , or oci-sync
container fails to fetch artifacts, you might see this error message.
This message indicates that the server is configured with
certificates from a custom Certificate Authority (CA). However,
the custom CA is not properly configured, resulting in the failure
of the container to fetch from the server.
To resolve this issue, first, you can verify whether the
caCertSecretRef field has been configured correctly
in your RootSync or RepoSync object, and also check if the Secret
object exists.
Next, if the field has been configured and the Secret object exists,
ensure that the Secret object contains the full certificates.
Depending on how the custom CA is provisioned, the approaches for
checking the full certificates might vary.
Here is an example of how to list the server certificates:
echo -n | openssl s_client -showcerts -connect HOST:PORT -servername SERVER_NAME 2 >/dev/null | sed -ne '/-BEGIN CERTIFICATE-/,/-END CERTIFICATE-/p'
You can request that your network administration team obtain the CA
certificates for you.
Error message: "MESSAGE": "Unable to retrieve pull secret, the image pull may not succeed."
Unable to retrieve pull secret, the image pull may not succeed
If you're using a private registry with Google Distributed Cloud, the
Config Sync installation or upgrade can get stuck. You'll see an
error similar to this message.
To resolve this issue, follow the steps in
Update Config Sync using a private registry
before installing or upgrading Config Sync.
Permission 'gkehub.features.create' denied on 'projects/PROJECT_ID/locations/global/features/configmanagement'
Permission denied
If you receive an error similar to this example when you try to
configure Config Sync, you might not have the
GKE Hub Admin role.
To ensure that you have the required permissions, make sure you have
granted the required IAM roles .
Back to top
What's next
View known issues .
Read the introduction to troubleshooting Config Sync .
If you need additional support, reach out to
Cloud Customer Care .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
