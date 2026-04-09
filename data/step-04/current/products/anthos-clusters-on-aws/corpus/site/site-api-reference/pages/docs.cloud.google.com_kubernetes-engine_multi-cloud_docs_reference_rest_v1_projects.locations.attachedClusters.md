---
title: "REST Resource: projects.locations.attachedClusters \_|\_ GKE Multi-Cloud \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.attachedClusters
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.attachedClusters
  title: "REST Resource: projects.locations.attachedClusters \_|\_ GKE Multi-Cloud\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
GKE Multi-Cloud
GKE Multi-Cloud Reference
Send feedback
REST Resource: projects.locations.attachedClusters
Stay organized with collections
Save and categorize content based on your preferences.
Resource: AttachedCluster
JSON representation
AttachedOidcConfig
JSON representation
State
AttachedClusterError
JSON representation
AttachedClustersAuthorization
JSON representation
AttachedClusterUser
JSON representation
AttachedClusterGroup
JSON representation
AttachedProxyConfig
JSON representation
KubernetesSecret
JSON representation
SecurityPostureConfig
JSON representation
VulnerabilityMode
SystemComponentsConfig
JSON representation
Toleration
JSON representation
KeyOperator
Effect
Label
JSON representation
Methods
Resource: AttachedCluster
An Anthos cluster running on customer own infrastructure.
JSON representation
{
"name" : string ,
"description" : string ,
"oidcConfig" : {
object ( AttachedOidcConfig )
} ,
"platformVersion" : string ,
"distribution" : string ,
"clusterRegion" : string ,
"fleet" : {
object ( Fleet )
} ,
"state" : enum ( State ) ,
"uid" : string ,
"reconciling" : boolean ,
"createTime" : string ,
"updateTime" : string ,
"etag" : string ,
"kubernetesVersion" : string ,
"annotations" : {
string : string ,
...
} ,
"workloadIdentityConfig" : {
object ( WorkloadIdentityConfig )
} ,
"loggingConfig" : {
object ( LoggingConfig )
} ,
"errors" : [
{
object ( AttachedClusterError )
}
] ,
"authorization" : {
object ( AttachedClustersAuthorization )
} ,
"monitoringConfig" : {
object ( MonitoringConfig )
} ,
"proxyConfig" : {
object ( AttachedProxyConfig )
} ,
"binaryAuthorization" : {
object ( BinaryAuthorization )
} ,
"securityPostureConfig" : {
object ( SecurityPostureConfig )
} ,
"tags" : {
string : string ,
...
} ,
"systemComponentsConfig" : {
object ( SystemComponentsConfig )
}
}
Fields
name
string
The name of this resource.
Cluster names are formatted as projects/<project-number>/locations/<region>/attachedClusters/<cluster-id> .
See Resource Names for more details on Google Cloud Platform resource names.
description
string
Optional. A human readable description of this cluster. Cannot be longer than 255 UTF-8 encoded bytes.
oidcConfig
object ( AttachedOidcConfig )
Required. OpenID Connect (OIDC) configuration for the cluster.
platformVersion
string
Required. The platform version for the cluster (e.g. 1.19.0-gke.1000 ).
You can list all supported versions on a given Google Cloud region by calling locations.getAttachedServerConfig .
distribution
string
Required. The Kubernetes distribution of the underlying attached cluster.
Supported values: ["eks", "aks", "generic"].
clusterRegion
string
Output only. The region where this cluster runs.
For EKS clusters, this is a AWS region. For AKS clusters, this is an Azure region.
fleet
object ( Fleet )
Required. Fleet configuration.
state
enum ( State )
Output only. The current state of the cluster.
uid
string
Output only. A globally unique identifier for the cluster.
reconciling
boolean
Output only. If set, there are currently changes in flight to the cluster.
createTime
string ( Timestamp format)
Output only. The time at which this cluster was registered.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
updateTime
string ( Timestamp format)
Output only. The time at which this cluster was last updated.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
etag
string
Allows clients to perform consistent read-modify-writes through optimistic concurrency control.
Can be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
kubernetesVersion
string
Output only. The Kubernetes version of the cluster.
annotations
map (key: string, value: string)
Optional. Annotations on the cluster.
This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
workloadIdentityConfig
object ( WorkloadIdentityConfig )
Output only. Workload Identity settings.
loggingConfig
object ( LoggingConfig )
Optional. Logging configuration for this cluster.
errors[]
object ( AttachedClusterError )
Output only. A set of errors found in the cluster.
authorization
object ( AttachedClustersAuthorization )
Optional. Configuration related to the cluster RBAC settings.
monitoringConfig
object ( MonitoringConfig )
Optional. Monitoring configuration for this cluster.
proxyConfig
object ( AttachedProxyConfig )
Optional. Proxy configuration for outbound HTTP(S) traffic.
binaryAuthorization
object ( BinaryAuthorization )
Optional. Binary Authorization configuration for this cluster.
securityPostureConfig
object ( SecurityPostureConfig )
Optional. Security Posture configuration for this cluster.
tags
map (key: string, value: string)
Optional. Input only. Tag keys and values directly bound to this resource.
The tag key must be specified in the format <tag namespace>/<tag key name>, where the tag namespace is the ID of the organization or name of the project that the tag key is defined in. The short name of a tag key or value can have a maximum length of 256 characters. The permitted character set for the short name includes UTF-8 encoded Unicode characters except single quotation marks ( ' ), double quotation marks ( " ), backslashes ( \ ), and forward slashes ( / ).
See Tags for more details on Google Cloud Platform tags.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
systemComponentsConfig
object ( SystemComponentsConfig )
Optional. Kubernetes configurationss for auto-installed components on the cluster.
AttachedOidcConfig
OIDC discovery information of the target cluster.
Kubernetes Service Account (KSA) tokens are JWT tokens signed by the cluster API server. This fields indicates how Google Cloud Platform services validate KSA tokens in order to allow system workloads (such as GKE Connect and telemetry agents) to authenticate back to Google Cloud Platform.
Both clusters with public and private issuer URLs are supported. Clusters with public issuers only need to specify the issuerUrl field while clusters with private issuers need to provide both issuerUrl and oidc_jwks .
JSON representation
{
"issuerUrl" : string ,
"jwks" : string
}
Fields
issuerUrl
string
A JSON Web Token (JWT) issuer URI. issuer must start with https:// .
jwks
string ( bytes format)
Optional. OIDC verification keys in JWKS format (RFC 7517). It contains a list of OIDC verification keys that can be used to verify OIDC JWTs.
This field is required for cluster that doesn't have a publicly available discovery endpoint. When provided, it will be directly used to verify the OIDC JWT asserted by the IDP.
A base64-encoded string.
State
The lifecycle state of the cluster.
Enums
STATE_UNSPECIFIED
Not set.
PROVISIONING
The PROVISIONING state indicates the cluster is being registered.
RUNNING
The RUNNING state indicates the cluster has been register and is fully usable.
RECONCILING
The RECONCILING state indicates that some work is actively being done on the cluster, such as upgrading software components.
STOPPING
The STOPPING state indicates the cluster is being de-registered.
ERROR
The ERROR state indicates the cluster is in a broken unrecoverable state.
DEGRADED
The DEGRADED state indicates the cluster requires user action to restore full functionality.
AttachedClusterError
AttachedClusterError describes errors found on attached clusters.
JSON representation
{
"message" : string
}
Fields
message
string
Human-friendly description of the error.
AttachedClustersAuthorization
Configuration related to the cluster RBAC settings.
JSON representation
{
"adminUsers" : [
{
object ( AttachedClusterUser )
}
] ,
"adminGroups" : [
{
object ( AttachedClusterGroup )
}
]
}
Fields
adminUsers[]
object ( AttachedClusterUser )
Optional. Users that can perform operations as a cluster admin. A managed ClusterRoleBinding will be created to grant the cluster-admin ClusterRole to the users. Up to ten admin users can be provided.
For more info on RBAC, see https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles
adminGroups[]
object ( AttachedClusterGroup )
Optional. Groups of users that can perform operations as a cluster admin. A managed ClusterRoleBinding will be created to grant the cluster-admin ClusterRole to the groups. Up to ten admin groups can be provided.
For more info on RBAC, see https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles
AttachedClusterUser
Identities of a user-type subject for Attached clusters.
JSON representation
{
"username" : string
}
Fields
username
string
Required. The name of the user, e.g. my-gcp-id@gmail.com .
AttachedClusterGroup
Identities of a group-type subject for Attached clusters.
JSON representation
{
"group" : string
}
Fields
group
string
Required. The name of the group, e.g. my-group@domain.com .
AttachedProxyConfig
Details of a proxy config.
JSON representation
{
"kubernetesSecret" : {
object ( KubernetesSecret )
}
}
Fields
kubernetesSecret
object ( KubernetesSecret )
The Kubernetes Secret resource that contains the HTTP(S) proxy configuration. The secret must be a JSON encoded proxy configuration as described in https://cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/use-a-proxy#configure-proxy-support for EKS clusters and https://cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/use-a-proxy#configure-proxy-support for AKS clusters.
KubernetesSecret
Information about a Kubernetes Secret
JSON representation
{
"name" : string ,
"namespace" : string
}
Fields
name
string
Name of the kubernetes secret.
namespace
string
Namespace in which the kubernetes secret is stored.
SecurityPostureConfig
SecurityPostureConfig defines the flags needed to enable/disable features for the Security Posture API.
JSON representation
{
"vulnerabilityMode" : enum ( VulnerabilityMode )
}
Fields
vulnerabilityMode
enum ( VulnerabilityMode )
Sets which mode to use for vulnerability scanning.
VulnerabilityMode
VulnerabilityMode defines enablement mode for vulnerability scanning.
Enums
VULNERABILITY_MODE_UNSPECIFIED
Default value not specified.
VULNERABILITY_DISABLED
Disables vulnerability scanning on the cluster.
VULNERABILITY_ENTERPRISE
Applies the Security Posture's vulnerability on cluster Enterprise level features.
SystemComponentsConfig
SystemComponentsConfig defines the fields for customizing configurations for auto-installed components.
JSON representation
{
"tolerations" : [
{
object ( Toleration )
}
] ,
"labels" : [
{
object ( Label )
}
]
}
Fields
tolerations[]
object ( Toleration )
Sets custom tolerations for pods created by auto-installed components.
labels[]
object ( Label )
Sets custom labels for pods created by auto-installed components.
Toleration
Toleration defines the fields for tolerations for pods created by auto-installed components.
JSON representation
{
"key" : string ,
"value" : string ,
"keyOperator" : enum ( KeyOperator ) ,
"effect" : enum ( Effect )
}
Fields
key
string
Key is the taint key that the toleration applies to.
value
string
Value is the taint value that the toleration applies to.
keyOperator
enum ( KeyOperator )
KeyOperator represents a key's relationship to the value e.g. 'Exist'.
effect
enum ( Effect )
Effect indicates the taint effect to match e.g. 'NoSchedule'
KeyOperator
KeyOperator represents a key's relationship to the value e.g. 'Equal'.
Enums
KEY_OPERATOR_UNSPECIFIED
Operator is not specified.
KEY_OPERATOR_EQUAL
Operator maps to 'Equal'.
KEY_OPERATOR_EXISTS
Operator maps to 'Exists'.
Effect
Effect indicates the taint effect to match e.g. 'NoSchedule'.
Enums
EFFECT_UNSPECIFIED
Effect is not specified.
EFFECT_NO_SCHEDULE
Effect maps to 'NoSchedule'.
EFFECT_PREFER_NO_SCHEDULE
Effect maps to 'PreferNoSchedule'.
EFFECT_NO_EXECUTE
Effect maps to 'NoExecute'.
Label
Label defines the additional fields for labels for pods created by auto-installed components.
JSON representation
{
"key" : string ,
"value" : string
}
Fields
key
string
This is the key of the label.
value
string
This is the value of the label.
Methods
create
Creates a new AttachedCluster resource on a given Google Cloud Platform project and region.
delete
Deletes a specific AttachedCluster resource.
generateAttachedClusterAgentToken
Generates an access token for a cluster agent.
get
Describes a specific AttachedCluster resource.
import
Imports creates a new AttachedCluster resource by importing an existing Fleet Membership resource.
list
Lists all AttachedCluster resources on a given Google Cloud project and region.
patch
Updates an AttachedCluster .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-11-06 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-11-06 UTC."],[],[]]
