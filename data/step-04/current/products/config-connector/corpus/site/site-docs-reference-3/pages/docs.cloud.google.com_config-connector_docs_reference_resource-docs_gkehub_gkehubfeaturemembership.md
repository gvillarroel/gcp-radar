---
title: "GKEHubFeatureMembership \_|\_ Config Connector \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/gkehub/gkehubfeaturemembership
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/gkehub/gkehubfeaturemembership
  title: "GKEHubFeatureMembership \_|\_ Config Connector \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Config Connector
API and reference
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
GKEHubFeatureMembership
Note: GKE Hub REST documentation is under construction.
Property
Value
Google Cloud Service Name
GKE Hub
Google Cloud Service Documentation
/anthos/multicluster-management/connect/overview
Google Cloud REST Resource Name
v1beta1.projects.locations.features
Google Cloud REST Resource Documentation
https://gkehub.googleapis.com/$discovery/rest?version=v1beta
Config Connector Resource Short Names
gcpgkehubfeaturemembership gcpgkehubfeaturememberships gkehubfeaturemembership
Config Connector Service Name
gkehub.googleapis.com
Config Connector Resource Fully Qualified Name
gkehubfeaturememberships.gkehub.cnrm.cloud.google.com
Can Be Referenced by IAMPolicy/IAMPolicyMember
No
Config Connector Default Average Reconcile Interval In Seconds
600
Custom Resource Definition Properties
Spec
Schema
configmanagement :
binauthz :
enabled : boolean
configSync :
git :
gcpServiceAccountRef :
external : string
name : string
namespace : string
httpsProxy : string
policyDir : string
secretType : string
syncBranch : string
syncRepo : string
syncRev : string
syncWaitSecs : string
metricsGcpServiceAccountRef :
external : string
name : string
namespace : string
oci :
gcpServiceAccountRef :
external : string
name : string
namespace : string
policyDir : string
secretType : string
syncRepo : string
syncWaitSecs : string
preventDrift : boolean
sourceFormat : string
stopSyncing : boolean
hierarchyController :
enableHierarchicalResourceQuota : boolean
enablePodTreeLabels : boolean
enabled : boolean
management : string
policyController :
auditIntervalSeconds : string
enabled : boolean
exemptableNamespaces :
- string
logDeniesEnabled : boolean
monitoring :
backends :
- string
mutationEnabled : boolean
referentialRulesEnabled : boolean
templateLibraryInstalled : boolean
version : string
featureRef :
external : string
name : string
namespace : string
location : string
membershipLocation : string
membershipRef :
external : string
name : string
namespace : string
mesh :
controlPlane : string
management : string
policycontroller :
policyControllerHubConfig :
auditIntervalSeconds : integer
constraintViolationLimit : integer
deploymentConfigs :
admission :
containerResources :
limits :
cpu : string
memory : string
requests :
cpu : string
memory : string
podAffinity : string
podTolerations :
- effect : string
key : string
operator : string
value : string
replicaCount : integer
audit :
containerResources :
limits :
cpu : string
memory : string
requests :
cpu : string
memory : string
podAffinity : string
podTolerations :
- effect : string
key : string
operator : string
value : string
replicaCount : integer
mutation :
containerResources :
limits :
cpu : string
memory : string
requests :
cpu : string
memory : string
podAffinity : string
podTolerations :
- effect : string
key : string
operator : string
value : string
replicaCount : integer
exemptableNamespaces :
- string
installSpec : string
logDeniesEnabled : boolean
monitoring :
backends :
- string
mutationEnabled : boolean
policyContent :
templateLibrary :
installation : string
referentialRulesEnabled : boolean
version : string
projectRef :
external : string
name : string
namespace : string
Fields
configmanagement
Optional
object
Config Management-specific spec.
configmanagement.binauthz
Optional
object
**DEPRECATED** Binauthz configuration for the cluster. This field will be ignored and should not be set.
configmanagement.binauthz.enabled
Optional
boolean
Whether binauthz is enabled in this cluster.
configmanagement.configSync
Optional
object
Config Sync configuration for the cluster.
configmanagement.configSync.git
Optional
object
configmanagement.configSync.git.gcpServiceAccountRef
Optional
object
configmanagement.configSync.git.gcpServiceAccountRef.external
Optional
string
The `email` field of an `IAMServiceAccount` resource.
configmanagement.configSync.git.gcpServiceAccountRef.name
Optional
string
Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
configmanagement.configSync.git.gcpServiceAccountRef.namespace
Optional
string
Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
configmanagement.configSync.git.httpsProxy
Optional
string
URL for the HTTPS proxy to be used when communicating with the Git repo.
configmanagement.configSync.git.policyDir
Optional
string
The path within the Git repository that represents the top level of the repo to sync. Default: the root directory of the repository.
configmanagement.configSync.git.secretType
Optional
string
Type of secret configured for access to the Git repo. Must be one of ssh, cookiefile, gcenode, token, gcpserviceaccount or none. The validation of this is case-sensitive.
configmanagement.configSync.git.syncBranch
Optional
string
The branch of the repository to sync from. Default: master.
configmanagement.configSync.git.syncRepo
Optional
string
The URL of the Git repository to use as the source of truth.
configmanagement.configSync.git.syncRev
Optional
string
Git revision (tag or hash) to check out. Default HEAD.
configmanagement.configSync.git.syncWaitSecs
Optional
string
Period in seconds between consecutive syncs. Default: 15.
configmanagement.configSync.metricsGcpServiceAccountRef
Optional
object
configmanagement.configSync.metricsGcpServiceAccountRef.external
Optional
string
The Email of the Google Cloud Service Account (GSA) used for exporting Config Sync metrics to Cloud Monitoring. The GSA should have the Monitoring Metric Writer(roles/monitoring.metricWriter) IAM role. The Kubernetes ServiceAccount `default` in the namespace `config-management-monitoring` should be bound to the GSA. Allowed value: The `email` field of an `IAMServiceAccount` resource.
configmanagement.configSync.metricsGcpServiceAccountRef.name
Optional
string
Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
configmanagement.configSync.metricsGcpServiceAccountRef.namespace
Optional
string
Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
configmanagement.configSync.oci
Optional
object
configmanagement.configSync.oci.gcpServiceAccountRef
Optional
object
configmanagement.configSync.oci.gcpServiceAccountRef.external
Optional
string
The `email` field of an `IAMServiceAccount` resource.
configmanagement.configSync.oci.gcpServiceAccountRef.name
Optional
string
Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
configmanagement.configSync.oci.gcpServiceAccountRef.namespace
Optional
string
Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
configmanagement.configSync.oci.policyDir
Optional
string
The absolute path of the directory that contains the local resources. Default: the root directory of the image.
configmanagement.configSync.oci.secretType
Optional
string
Type of secret configured for access to the OCI Image. Must be one of gcenode, gcpserviceaccount or none. The validation of this is case-sensitive.
configmanagement.configSync.oci.syncRepo
Optional
string
The OCI image repository URL for the package to sync from. e.g. LOCATION-docker.pkg.dev/PROJECT_ID/REPOSITORY_NAME/PACKAGE_NAME.
configmanagement.configSync.oci.syncWaitSecs
Optional
string
Period in seconds(int64 format) between consecutive syncs. Default: 15.
configmanagement.configSync.preventDrift
Optional
boolean
Set to true to enable the Config Sync admission webhook to prevent drifts. If set to `false`, disables the Config Sync admission webhook and does not prevent drifts.
configmanagement.configSync.sourceFormat
Optional
string
Specifies whether the Config Sync Repo is in "hierarchical" or "unstructured" mode.
configmanagement.configSync.stopSyncing
Optional
boolean
Set to true to stop syncing configurations for a single cluster. This field is only available on clusters using Config Sync auto-upgrades or on Config Sync version 1.20.0 or later. Defaults: false.
configmanagement.hierarchyController
Optional
object
Hierarchy Controller is no longer available. Use https://github.com/kubernetes-sigs/hierarchical-namespaces instead.
configmanagement.hierarchyController.enableHierarchicalResourceQuota
Optional
boolean
Whether hierarchical resource quota is enabled in this cluster.
configmanagement.hierarchyController.enablePodTreeLabels
Optional
boolean
Whether pod tree labels are enabled in this cluster.
configmanagement.hierarchyController.enabled
Optional
boolean
Whether Hierarchy Controller is enabled in this cluster.
configmanagement.management
Optional
string
Optional. Whether to automatically manage the configmanagement Feature. There are 3 accepted values. MANAGEMENT_UNSPECIFIED means that the mamangement mode is unspecified. MANAGEMENT_AUTOMATIC means that Google manages the Feature for the cluster. MANAGEMENT_MANUAL means that users should manage the Feature for the cluster.
configmanagement.policyController
Optional
object
**DEPRECATED** Configuring Policy Controller through the configmanagement feature is no longer recommended. Use the policycontroller feature instead.
configmanagement.policyController.auditIntervalSeconds
Optional
string
Sets the interval for Policy Controller Audit Scans (in seconds). When set to 0, this disables audit functionality altogether.
configmanagement.policyController.enabled
Optional
boolean
Enables the installation of Policy Controller. If false, the rest of PolicyController fields take no effect.
configmanagement.policyController.exemptableNamespaces
Optional
list (string)
The set of namespaces that are excluded from Policy Controller checks. Namespaces do not need to currently exist on the cluster.
configmanagement.policyController.exemptableNamespaces[]
Optional
string
configmanagement.policyController.logDeniesEnabled
Optional
boolean
Logs all denies and dry run failures.
configmanagement.policyController.monitoring
Optional
object
Specifies the backends Policy Controller should export metrics to. For example, to specify metrics should be exported to Cloud Monitoring and Prometheus, specify backends: ["cloudmonitoring", "prometheus"]. Default: ["cloudmonitoring", "prometheus"]
configmanagement.policyController.monitoring.backends
Optional
list (string)
Specifies the list of backends Policy Controller will export to. Specifying an empty value `[]` disables metrics export.
configmanagement.policyController.monitoring.backends[]
Optional
string
configmanagement.policyController.mutationEnabled
Optional
boolean
Enable or disable mutation in policy controller. If true, mutation CRDs, webhook and controller deployment will be deployed to the cluster.
configmanagement.policyController.referentialRulesEnabled
Optional
boolean
Enables the ability to use Constraint Templates that reference to objects other than the object currently being evaluated.
configmanagement.policyController.templateLibraryInstalled
Optional
boolean
Installs the default template library along with Policy Controller.
configmanagement.version
Optional
string
Optional. Version of ACM to install. Defaults to the latest version.
featureRef
Required
object
Immutable.
featureRef.external
Optional
string
The name of the feature. Allowed value: The Google Cloud resource name of a `GKEHubFeature` resource (format: `projects/{{project}}/locations/{{location}}/features/{{name}}`).
featureRef.name
Optional
string
Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
featureRef.namespace
Optional
string
Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
location
Required
string
Immutable. The location of the feature
membershipLocation
Optional
string
Immutable. The location of the membership
membershipRef
Required
object
Immutable.
membershipRef.external
Optional
string
The name of the membership. Allowed value: The Google Cloud resource name of a `GKEHubMembership` resource (format: `projects/{{project}}/locations/{{location}}/memberships/{{name}}`).
membershipRef.name
Optional
string
Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
membershipRef.namespace
Optional
string
Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
mesh
Optional
object
Manage Mesh Features
mesh.controlPlane
Optional
string
**DEPRECATED** Whether to automatically manage Service Mesh control planes. Possible values: CONTROL_PLANE_MANAGEMENT_UNSPECIFIED, AUTOMATIC, MANUAL
mesh.management
Optional
string
Whether to automatically manage Service Mesh. Possible values: MANAGEMENT_UNSPECIFIED, MANAGEMENT_AUTOMATIC, MANAGEMENT_MANUAL
policycontroller
Optional
object
Policy Controller-specific spec.
policycontroller.policyControllerHubConfig
Optional
object
Policy Controller configuration for the cluster.
policycontroller.policyControllerHubConfig.auditIntervalSeconds
Optional
integer
Sets the interval for Policy Controller Audit Scans (in seconds). When set to 0, this disables audit functionality altogether.
policycontroller.policyControllerHubConfig.constraintViolationLimit
Optional
integer
The maximum number of audit violations to be stored in a constraint. If not set, the internal default of 20 will be used.
policycontroller.policyControllerHubConfig.deploymentConfigs
Optional
object
Map of deployment configs to deployments (“admission”, “audit”, “mutation”).
policycontroller.policyControllerHubConfig.deploymentConfigs.admission
Optional
object
policycontroller.policyControllerHubConfig.deploymentConfigs.admission.containerResources
Optional
object
Container resource requirements.
policycontroller.policyControllerHubConfig.deploymentConfigs.admission.containerResources.limits
Optional
object
Limits describes the maximum amount of compute resources allowed for use by the running container.
policycontroller.policyControllerHubConfig.deploymentConfigs.admission.containerResources.limits.cpu
Optional
string
CPU requirement expressed in Kubernetes resource units.
policycontroller.policyControllerHubConfig.deploymentConfigs.admission.containerResources.limits.memory
Optional
string
Memory requirement expressed in Kubernetes resource units.
policycontroller.policyControllerHubConfig.deploymentConfigs.admission.containerResources.requests
Optional
object
Requests describes the amount of compute resources reserved for the container by the kube-scheduler.
policycontroller.policyControllerHubConfig.deploymentConfigs.admission.containerResources.requests.cpu
Optional
string
CPU requirement expressed in Kubernetes resource units.
policycontroller.policyControllerHubConfig.deploymentConfigs.admission.containerResources.requests.memory
Optional
string
Memory requirement expressed in Kubernetes resource units.
policycontroller.policyControllerHubConfig.deploymentConfigs.admission.podAffinity
Optional
string
Pod affinity configuration.
policycontroller.policyControllerHubConfig.deploymentConfigs.admission.podTolerations
Optional
list (object)
Pod tolerations of node taints.
policycontroller.policyControllerHubConfig.deploymentConfigs.admission.podTolerations[]
Optional
object
policycontroller.policyControllerHubConfig.deploymentConfigs.admission.podTolerations[].effect
Optional
string
Matches a taint effect.
policycontroller.policyControllerHubConfig.deploymentConfigs.admission.podTolerations[].key
Optional
string
Matches a taint key (not necessarily unique).
policycontroller.policyControllerHubConfig.deploymentConfigs.admission.podTolerations[].operator
Optional
string
Matches a taint operator.
policycontroller.policyControllerHubConfig.deploymentConfigs.admission.podTolerations[].value
Optional
string
Matches a taint value.
policycontroller.policyControllerHubConfig.deploymentConfigs.admission.replicaCount
Optional
integer
Pod replica count.
policycontroller.policyControllerHubConfig.deploymentConfigs.audit
Optional
object
policycontroller.policyControllerHubConfig.deploymentConfigs.audit.containerResources
Optional
object
Container resource requirements.
policycontroller.policyControllerHubConfig.deploymentConfigs.audit.containerResources.limits
Optional
object
Limits describes the maximum amount of compute resources allowed for use by the running container.
policycontroller.policyControllerHubConfig.deploymentConfigs.audit.containerResources.limits.cpu
Optional
string
CPU requirement expressed in Kubernetes resource units.
policycontroller.policyControllerHubConfig.deploymentConfigs.audit.containerResources.limits.memory
Optional
string
Memory requirement expressed in Kubernetes resource units.
policycontroller.policyControllerHubConfig.deploymentConfigs.audit.containerResources.requests
Optional
object
Requests describes the amount of compute resources reserved for the container by the kube-scheduler.
policycontroller.policyControllerHubConfig.deploymentConfigs.audit.containerResources.requests.cpu
Optional
string
CPU requirement expressed in Kubernetes resource units.
policycontroller.policyControllerHubConfig.deploymentConfigs.audit.containerResources.requests.memory
Optional
string
Memory requirement expressed in Kubernetes resource units.
policycontroller.policyControllerHubConfig.deploymentConfigs.audit.podAffinity
Optional
string
Pod affinity configuration.
policycontroller.policyControllerHubConfig.deploymentConfigs.audit.podTolerations
Optional
list (object)
Pod tolerations of node taints.
policycontroller.policyControllerHubConfig.deploymentConfigs.audit.podTolerations[]
Optional
object
policycontroller.policyControllerHubConfig.deploymentConfigs.audit.podTolerations[].effect
Optional
string
Matches a taint effect.
policycontroller.policyControllerHubConfig.deploymentConfigs.audit.podTolerations[].key
Optional
string
Matches a taint key (not necessarily unique).
policycontroller.policyControllerHubConfig.deploymentConfigs.audit.podTolerations[].operator
Optional
string
Matches a taint operator.
policycontroller.policyControllerHubConfig.deploymentConfigs.audit.podTolerations[].value
Optional
string
Matches a taint value.
policycontroller.policyControllerHubConfig.deploymentConfigs.audit.replicaCount
Optional
integer
Pod replica count.
policycontroller.policyControllerHubConfig.deploymentConfigs.mutation
Optional
object
policycontroller.policyControllerHubConfig.deploymentConfigs.mutation.containerResources
Optional
object
Container resource requirements.
policycontroller.policyControllerHubConfig.deploymentConfigs.mutation.containerResources.limits
Optional
object
Limits describes the maximum amount of compute resources allowed for use by the running container.
policycontroller.policyControllerHubConfig.deploymentConfigs.mutation.containerResources.limits.cpu
Optional
string
CPU requirement expressed in Kubernetes resource units.
policycontroller.policyControllerHubConfig.deploymentConfigs.mutation.containerResources.limits.memory
Optional
string
Memory requirement expressed in Kubernetes resource units.
policycontroller.policyControllerHubConfig.deploymentConfigs.mutation.containerResources.requests
Optional
object
Requests describes the amount of compute resources reserved for the container by the kube-scheduler.
policycontroller.policyControllerHubConfig.deploymentConfigs.mutation.containerResources.requests.cpu
Optional
string
CPU requirement expressed in Kubernetes resource units.
policycontroller.policyControllerHubConfig.deploymentConfigs.mutation.containerResources.requests.memory
Optional
string
Memory requirement expressed in Kubernetes resource units.
policycontroller.policyControllerHubConfig.deploymentConfigs.mutation.podAffinity
Optional
string
Pod affinity configuration.
policycontroller.policyControllerHubConfig.deploymentConfigs.mutation.podTolerations
Optional
list (object)
Pod tolerations of node taints.
policycontroller.policyControllerHubConfig.deploymentConfigs.mutation.podTolerations[]
Optional
object
policycontroller.policyControllerHubConfig.deploymentConfigs.mutation.podTolerations[].effect
Optional
string
Matches a taint effect.
policycontroller.policyControllerHubConfig.deploymentConfigs.mutation.podTolerations[].key
Optional
string
Matches a taint key (not necessarily unique).
policycontroller.policyControllerHubConfig.deploymentConfigs.mutation.podTolerations[].operator
Optional
string
Matches a taint operator.
policycontroller.policyControllerHubConfig.deploymentConfigs.mutation.podTolerations[].value
Optional
string
Matches a taint value.
policycontroller.policyControllerHubConfig.deploymentConfigs.mutation.replicaCount
Optional
integer
Pod replica count.
policycontroller.policyControllerHubConfig.exemptableNamespaces
Optional
list (string)
The set of namespaces that are excluded from Policy Controller checks. Namespaces do not need to currently exist on the cluster.
policycontroller.policyControllerHubConfig.exemptableNamespaces[]
Optional
string
policycontroller.policyControllerHubConfig.installSpec
Optional
string
Configures the mode of the Policy Controller installation. Possible values: INSTALL_SPEC_UNSPECIFIED, INSTALL_SPEC_NOT_INSTALLED, INSTALL_SPEC_ENABLED, INSTALL_SPEC_SUSPENDED, INSTALL_SPEC_DETACHED
policycontroller.policyControllerHubConfig.logDeniesEnabled
Optional
boolean
Logs all denies and dry run failures.
policycontroller.policyControllerHubConfig.monitoring
Optional
object
Specifies the backends Policy Controller should export metrics to. For example, to specify metrics should be exported to Cloud Monitoring and Prometheus, specify backends: ["cloudmonitoring", "prometheus"]. Default: ["cloudmonitoring", "prometheus"]
policycontroller.policyControllerHubConfig.monitoring.backends
Optional
list (string)
Specifies the list of backends Policy Controller will export to. Specifying an empty value `[]` disables metrics export.
policycontroller.policyControllerHubConfig.monitoring.backends[]
Optional
string
policycontroller.policyControllerHubConfig.mutationEnabled
Optional
boolean
Enables the ability to mutate resources using Policy Controller.
policycontroller.policyControllerHubConfig.policyContent
Optional
object
Specifies the desired policy content on the cluster.
policycontroller.policyControllerHubConfig.policyContent.templateLibrary
Optional
object
Configures the installation of the Template Library.
policycontroller.policyControllerHubConfig.policyContent.templateLibrary.installation
Optional
string
Configures the manner in which the template library is installed on the cluster. Possible values: INSTALLATION_UNSPECIFIED, NOT_INSTALLED, ALL
policycontroller.policyControllerHubConfig.referentialRulesEnabled
Optional
boolean
Enables the ability to use Constraint Templates that reference to objects other than the object currently being evaluated.
policycontroller.version
Optional
string
Optional. Version of Policy Controller to install. Defaults to the latest version.
projectRef
Required
object
Immutable. The Project that this resource belongs to.
projectRef.external
Optional
string
The project of the feature. Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
projectRef.name
Optional
string
Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
projectRef.namespace
Optional
string
Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
Status
Schema
conditions :
- lastTransitionTime : string
message : string
reason : string
status : string
type : string
observedGeneration : integer
Fields
conditions
list (object)
Conditions represent the latest available observations of the GKEHubFeatureMembership's current state.
conditions[]
object
conditions[].lastTransitionTime
string
Last time the condition transitioned from one status to another.
conditions[].message
string
Human-readable message indicating details about last transition.
conditions[].reason
string
Unique, one-word, CamelCase reason for the condition's last transition.
conditions[].status
string
Status is the status of the condition. Can be True, False, Unknown.
conditions[].type
string
Type is the type of the condition.
observedGeneration
integer
ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
Sample YAML(s)
Config Management Feature Membership
# Copyright 2021 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
apiVersion : gkehub.cnrm.cloud.google.com/v1beta1
kind : GKEHubFeatureMembership
metadata :
name : gkehubfeaturemembership-sample
spec :
projectRef :
name : gkehubfeaturemembership-dep-acm
location : global
# membershipLocation needs to be explicitly set here because the dependent membership is regional.
membershipLocation : us-central1
membershipRef :
name : gkehubfeaturemembership-dep-acm
featureRef :
name : gkehubfeaturemembership-dep-acm
configmanagement :
configSync :
sourceFormat : unstructured
git :
syncRepo : "https://github.com/GoogleCloudPlatform/anthos-config-management-samples"
syncBranch : "main"
policyDir : "config-sync-quickstart/multirepo/root"
secretType : "none"
---
apiVersion : container.cnrm.cloud.google.com/v1beta1
kind : ContainerCluster
metadata :
annotations :
cnrm.cloud.google.com/project-id : gkehubfeaturemembership-dep-acm
name : gkehubfeaturemembership-dep-acm
spec :
location : us-central1-a
initialNodeCount : 1
workloadIdentityConfig :
# Workload Identity supports only a single namespace based on your project name.
workloadPool : gkehubfeaturemembership-dep-acm.svc.id.goog
---
apiVersion : gkehub.cnrm.cloud.google.com/v1beta1
kind : GKEHubFeature
metadata :
name : gkehubfeaturemembership-dep-acm
annotations :
cnrm.cloud.google.com/deletion-policy : abandon
spec :
projectRef :
name : gkehubfeaturemembership-dep-acm
location : global
# The resourceID must be "configmanagement" if you want to use Anthos config
# management feature.
resourceID : configmanagement
---
apiVersion : gkehub.cnrm.cloud.google.com/v1beta1
kind : GKEHubMembership
metadata :
annotations :
cnrm.cloud.google.com/project-id : gkehubfeaturemembership-dep-acm
name : gkehubfeaturemembership-dep-acm
spec :
location : us-central1
authority :
# Issuer must contain a link to a valid JWT issuer. Your ContainerCluster is one.
issuer : https://container.googleapis.com/v1/projects/gkehubfeaturemembership-dep-acm/locations/us-central1-a/clusters/gkehubfeaturemembership-dep-acm
description : A sample GKE Hub membership
endpoint :
gkeCluster :
resourceRef :
name : gkehubfeaturemembership-dep-acm
---
apiVersion : resourcemanager.cnrm.cloud.google.com/v1beta1
kind : Project
metadata :
name : gkehubfeaturemembership-dep-acm
spec :
name : Config Connector Sample
organizationRef :
# Replace "${ORG_ID?}" with the numeric ID for your organization
external : "${ORG_ID?}"
billingAccountRef :
# Replace "${BILLING_ACCOUNT_ID?}" with the numeric ID for your billing account
external : "${BILLING_ACCOUNT_ID?}"
---
apiVersion : serviceusage.cnrm.cloud.google.com/v1beta1
kind : Service
metadata :
annotations :
cnrm.cloud.google.com/project-id : gkehubfeaturemembership-dep-acm
cnrm.cloud.google.com/deletion-policy : "abandon"
name : gkehubfeaturemembership-dep1-acm1
spec :
resourceID : container.googleapis.com
---
apiVersion : serviceusage.cnrm.cloud.google.com/v1beta1
kind : Service
metadata :
annotations :
cnrm.cloud.google.com/project-id : gkehubfeaturemembership-dep-acm
cnrm.cloud.google.com/deletion-policy : "abandon"
name : gkehubfeaturemembership-dep2-acm
spec :
resourceID : gkehub.googleapis.com
---
apiVersion : serviceusage.cnrm.cloud.google.com/v1beta1
kind : Service
metadata :
annotations :
cnrm.cloud.google.com/project-id : gkehubfeaturemembership-dep-acm
cnrm.cloud.google.com/deletion-policy : "abandon"
name : gkehubfeaturemembership-dep3-acm
spec :
resourceID : anthosconfigmanagement.googleapis.com
Configsync Auto Upgrade Feature Membership
# Copyright 2024 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
apiVersion : gkehub.cnrm.cloud.google.com/v1beta1
kind : GKEHubFeatureMembership
metadata :
name : gkehubfeaturemembership-sample-csau
spec :
projectRef :
name : gkehubfeaturemembership-dep-csau
location : global
# membershipLocation needs to be explicitly set here because the dependent membership is regional.
membershipLocation : us-central1
membershipRef :
name : gkehubfeaturemembership-dep-csau
featureRef :
name : gkehubfeaturemembership-dep-csau
configmanagement :
configSync :
sourceFormat : unstructured
git :
syncRepo : "https://github.com/GoogleCloudPlatform/anthos-config-management-samples"
syncBranch : "main"
policyDir : "config-sync-quickstart/multirepo/root"
secretType : "none"
management : MANAGEMENT_AUTOMATIC
---
apiVersion : container.cnrm.cloud.google.com/v1beta1
kind : ContainerCluster
metadata :
annotations :
cnrm.cloud.google.com/project-id : gkehubfeaturemembership-dep-csau
name : gkehubfeaturemembership-dep-csau
spec :
location : us-central1-a
initialNodeCount : 3
workloadIdentityConfig :
# Workload Identity supports only a single namespace based on your project name.
workloadPool : gkehubfeaturemembership-dep-csau.svc.id.goog
---
apiVersion : gkehub.cnrm.cloud.google.com/v1beta1
kind : GKEHubFeature
metadata :
name : gkehubfeaturemembership-dep-csau
annotations :
cnrm.cloud.google.com/deletion-policy : abandon
spec :
projectRef :
name : gkehubfeaturemembership-dep-csau
location : global
# The resourceID must be "configmanagement" if you want to use Anthos config
# management feature.
resourceID : configmanagement
---
apiVersion : gkehub.cnrm.cloud.google.com/v1beta1
kind : GKEHubMembership
metadata :
annotations :
cnrm.cloud.google.com/project-id : gkehubfeaturemembership-dep-csau
name : gkehubfeaturemembership-dep-csau
spec :
location : us-central1
authority :
# Issuer must contain a link to a valid JWT issuer. Your ContainerCluster is one.
issuer : https://container.googleapis.com/v1/projects/gkehubfeaturemembership-dep-csau/locations/us-central1-a/clusters/gkehubfeaturemembership-dep-csau
description : A sample GKE Hub membership
endpoint :
gkeCluster :
resourceRef :
name : gkehubfeaturemembership-dep-csau
---
apiVersion : resourcemanager.cnrm.cloud.google.com/v1beta1
kind : Project
metadata :
name : gkehubfeaturemembership-dep-csau
spec :
name : Config Connector Sample
organizationRef :
# Replace "${ORG_ID?}" with the numeric ID for your organization
external : "${ORG_ID?}"
billingAccountRef :
# Replace "${BILLING_ACCOUNT_ID?}" with the numeric ID for your billing account
external : "${BILLING_ACCOUNT_ID?}"
---
apiVersion : serviceusage.cnrm.cloud.google.com/v1beta1
kind : Service
metadata :
annotations :
cnrm.cloud.google.com/project-id : gkehubfeaturemembership-dep-csau
cnrm.cloud.google.com/deletion-policy : "abandon"
name : gkehubfeaturemembership-dep1-csau
spec :
resourceID : container.googleapis.com
---
apiVersion : serviceusage.cnrm.cloud.google.com/v1beta1
kind : Service
metadata :
annotations :
cnrm.cloud.google.com/project-id : gkehubfeaturemembership-dep-csau
cnrm.cloud.google.com/deletion-policy : "abandon"
name : gkehubfeaturemembership-dep2-csau
spec :
resourceID : gkehub.googleapis.com
---
apiVersion : serviceusage.cnrm.cloud.google.com/v1beta1
kind : Service
metadata :
annotations :
cnrm.cloud.google.com/project-id : gkehubfeaturemembership-dep-csau
cnrm.cloud.google.com/deletion-policy : "abandon"
name : gkehubfeaturemembership-dep3-csau
spec :
resourceID : anthosconfigmanagement.googleapis.com
Service Mesh Feature Membership
# Copyright 2021 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
apiVersion : gkehub.cnrm.cloud.google.com/v1beta1
kind : GKEHubFeatureMembership
metadata :
name : gkehubfeaturemembership-sample-asm
spec :
projectRef :
name : gkehubfeaturemembership-dep-asm
location : global
membershipRef :
name : gkehubfeaturemembership-dep-asm
featureRef :
name : gkehubfeaturemembership-dep-asm
mesh :
management : MANAGEMENT_AUTOMATIC
---
apiVersion : container.cnrm.cloud.google.com/v1beta1
kind : ContainerCluster
metadata :
annotations :
cnrm.cloud.google.com/project-id : gkehubfeaturemembership-dep-asm
labels :
# Replace ${PROJECT_NUMBER?} with the number of the project once created,
# this will give you access to the ASM UI in the Google Cloud Console
mesh_id : proj-${PROJECT_NUMBER?}
name : gkehubfeaturemembership-dep-asm
spec :
location : us-east4-a
initialNodeCount : 1
workloadIdentityConfig :
workloadPool : gkehubfeaturemembership-dep-asm.svc.id.goog
---
apiVersion : gkehub.cnrm.cloud.google.com/v1beta1
kind : GKEHubFeature
metadata :
name : gkehubfeaturemembership-dep-asm
spec :
projectRef :
name : gkehubfeaturemembership-dep-asm
location : global
# The resourceID must be "servicemesh" if you want to use Anthos Service Mesh feature.
resourceID : servicemesh
---
apiVersion : gkehub.cnrm.cloud.google.com/v1beta1
kind : GKEHubMembership
metadata :
annotations :
cnrm.cloud.google.com/project-id : gkehubfeaturemembership-dep-asm
name : gkehubfeaturemembership-dep-asm
spec :
location : global
authority :
issuer : https://container.googleapis.com/v1/projects/gkehubfeaturemembership-dep-asm/locations/us-east4-a/clusters/gkehubfeaturemembership-dep-asm
endpoint :
gkeCluster :
resourceRef :
name : gkehubfeaturemembership-dep-asm
---
apiVersion : resourcemanager.cnrm.cloud.google.com/v1beta1
kind : Project
metadata :
name : gkehubfeaturemembership-dep-asm
spec :
name : Config Connector Sample
organizationRef :
# Replace "${ORG_ID?}" with the numeric ID for your organization
external : "${ORG_ID?}"
billingAccountRef :
# Replace "${BILLING_ACCOUNT_ID?}" with the numeric ID for your billing account
external : "${BILLING_ACCOUNT_ID?}"
---
apiVersion : serviceusage.cnrm.cloud.google.com/v1beta1
kind : Service
metadata :
annotations :
cnrm.cloud.google.com/disable-dependent-services : "false"
name : gkehubfeaturemembership-dep-asm
spec :
resourceID : mesh.googleapis.com
projectRef :
name : gkehubfeaturemembership-dep-asm
Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
