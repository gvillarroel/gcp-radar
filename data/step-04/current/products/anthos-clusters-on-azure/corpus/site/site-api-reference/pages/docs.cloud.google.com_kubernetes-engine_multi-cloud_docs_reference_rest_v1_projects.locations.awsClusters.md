---
title: "REST Resource: projects.locations.awsClusters \_|\_ GKE Multi-Cloud \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters
  title: "REST Resource: projects.locations.awsClusters \_|\_ GKE Multi-Cloud \_|\_\
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
GKE Multi-Cloud
GKE Multi-Cloud Reference
Send feedback
REST Resource: projects.locations.awsClusters
Stay organized with collections
Save and categorize content based on your preferences.
Resource: AwsCluster
JSON representation
AwsClusterNetworking
JSON representation
AwsControlPlane
JSON representation
AwsDatabaseEncryption
JSON representation
AwsServicesAuthentication
JSON representation
AwsAuthorization
JSON representation
AwsClusterUser
JSON representation
AwsClusterGroup
JSON representation
State
AwsClusterError
JSON representation
Methods
Resource: AwsCluster
GKE-on-AWS is deprecated. See https://cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/deprecations/deprecation-announcement for more details.
An Anthos cluster running on AWS.
JSON representation
{
"name" : string ,
"description" : string ,
"networking" : {
object ( AwsClusterNetworking )
} ,
"awsRegion" : string ,
"controlPlane" : {
object ( AwsControlPlane )
} ,
"authorization" : {
object ( AwsAuthorization )
} ,
"state" : enum ( State ) ,
"endpoint" : string ,
"uid" : string ,
"reconciling" : boolean ,
"createTime" : string ,
"updateTime" : string ,
"etag" : string ,
"annotations" : {
string : string ,
...
} ,
"workloadIdentityConfig" : {
object ( WorkloadIdentityConfig )
} ,
"clusterCaCertificate" : string ,
"fleet" : {
object ( Fleet )
} ,
"loggingConfig" : {
object ( LoggingConfig )
} ,
"errors" : [
{
object ( AwsClusterError )
}
] ,
"monitoringConfig" : {
object ( MonitoringConfig )
} ,
"binaryAuthorization" : {
object ( BinaryAuthorization )
}
}
Fields
name
string
The name of this resource.
Cluster names are formatted as projects/<project-number>/locations/<region>/awsClusters/<cluster-id> .
See Resource Names for more details on Google Cloud Platform resource names.
description
string
Optional. A human readable description of this cluster. Cannot be longer than 255 UTF-8 encoded bytes.
networking
object ( AwsClusterNetworking )
Required. Cluster-wide networking configuration.
awsRegion
string
Required. The AWS region where the cluster runs.
Each Google Cloud region supports a subset of nearby AWS regions. You can call locations.getAwsServerConfig to list all supported AWS regions within a given Google Cloud region.
controlPlane
object ( AwsControlPlane )
Required. Configuration related to the cluster control plane.
authorization
object ( AwsAuthorization )
Required. Configuration related to the cluster RBAC settings.
state
enum ( State )
Output only. The current state of the cluster.
endpoint
string
Output only. The endpoint of the cluster's API server.
uid
string
Output only. A globally unique identifier for the cluster.
reconciling
boolean
Output only. If set, there are currently changes in flight to the cluster.
createTime
string ( Timestamp format)
Output only. The time at which this cluster was created.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
updateTime
string ( Timestamp format)
Output only. The time at which this cluster was last updated.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
etag
string
Allows clients to perform consistent read-modify-writes through optimistic concurrency control.
Can be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
annotations
map (key: string, value: string)
Optional. Annotations on the cluster.
This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
workloadIdentityConfig
object ( WorkloadIdentityConfig )
Output only. Workload Identity settings.
clusterCaCertificate
string
Output only. PEM encoded x509 certificate of the cluster root of trust.
fleet
object ( Fleet )
Required. Fleet configuration.
loggingConfig
object ( LoggingConfig )
Optional. Logging configuration for this cluster.
errors[]
object ( AwsClusterError )
Output only. A set of errors found in the cluster.
monitoringConfig
object ( MonitoringConfig )
Optional. Monitoring configuration for this cluster.
binaryAuthorization
object ( BinaryAuthorization )
Optional. Binary Authorization configuration for this cluster.
AwsClusterNetworking
GKE-on-AWS is deprecated. See https://cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/deprecations/deprecation-announcement for more details.
ClusterNetworking defines cluster-wide networking configuration.
Anthos clusters on AWS run on a single VPC. This includes control plane replicas and node pool nodes.
JSON representation
{
"vpcId" : string ,
"podAddressCidrBlocks" : [
string
] ,
"serviceAddressCidrBlocks" : [
string
] ,
"perNodePoolSgRulesDisabled" : boolean
}
Fields
vpcId
string
Required. The VPC associated with the cluster. All component clusters (i.e. control plane and node pools) run on a single VPC.
This field cannot be changed after creation.
podAddressCidrBlocks[]
string
Required. All pods in the cluster are assigned an IPv4 address from these ranges. Only a single range is supported. This field cannot be changed after creation.
serviceAddressCidrBlocks[]
string
Required. All services in the cluster are assigned an IPv4 address from these ranges. Only a single range is supported. This field cannot be changed after creation.
perNodePoolSgRulesDisabled
boolean
Optional. Disable the per node pool subnet security group rules on the control plane security group. When set to true, you must also provide one or more security groups that ensure node pools are able to send requests to the control plane on TCP/443 and TCP/8132. Failure to do so may result in unavailable node pools.
AwsControlPlane
GKE-on-AWS is deprecated. See https://cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/deprecations/deprecation-announcement for more details.
ControlPlane defines common parameters between control plane nodes.
JSON representation
{
"version" : string ,
"instanceType" : string ,
"sshConfig" : {
object ( AwsSshConfig )
} ,
"subnetIds" : [
string
] ,
"securityGroupIds" : [
string
] ,
"iamInstanceProfile" : string ,
"rootVolume" : {
object ( AwsVolumeTemplate )
} ,
"mainVolume" : {
object ( AwsVolumeTemplate )
} ,
"databaseEncryption" : {
object ( AwsDatabaseEncryption )
} ,
"tags" : {
string : string ,
...
} ,
"awsServicesAuthentication" : {
object ( AwsServicesAuthentication )
} ,
"proxyConfig" : {
object ( AwsProxyConfig )
} ,
"configEncryption" : {
object ( AwsConfigEncryption )
} ,
"instancePlacement" : {
object ( AwsInstancePlacement )
}
}
Fields
version
string
Required. The Kubernetes version to run on control plane replicas (e.g. 1.19.10-gke.1000 ).
You can list all supported versions on a given Google Cloud region by calling locations.getAwsServerConfig .
instanceType
string
Optional. The AWS instance type.
When unspecified, it uses a default based on the cluster's version.
sshConfig
object ( AwsSshConfig )
Optional. SSH configuration for how to access the underlying control plane machines.
subnetIds[]
string
Required. The list of subnets where control plane replicas will run. A replica will be provisioned on each subnet and up to three values can be provided. Each subnet must be in a different AWS Availability Zone (AZ).
securityGroupIds[]
string
Optional. The IDs of additional security groups to add to control plane replicas. The Anthos Multi-Cloud API will automatically create and manage security groups with the minimum rules needed for a functioning cluster.
iamInstanceProfile
string
Required. The name or ARN of the AWS IAM instance profile to assign to each control plane replica.
rootVolume
object ( AwsVolumeTemplate )
Optional. Configuration related to the root volume provisioned for each control plane replica.
Volumes will be provisioned in the availability zone associated with the corresponding subnet.
When unspecified, it defaults to 32 GiB with the GP2 volume type.
mainVolume
object ( AwsVolumeTemplate )
Optional. Configuration related to the main volume provisioned for each control plane replica. The main volume is in charge of storing all of the cluster's etcd state.
Volumes will be provisioned in the availability zone associated with the corresponding subnet.
When unspecified, it defaults to 8 GiB with the GP2 volume type.
databaseEncryption
object ( AwsDatabaseEncryption )
Required. The ARN of the AWS KMS key used to encrypt cluster secrets.
tags
map (key: string, value: string)
Optional. A set of AWS resource tags to propagate to all underlying managed AWS resources.
Specify at most 50 pairs containing alphanumerics, spaces, and symbols (.+-=_:@/). Keys can be up to 127 Unicode characters. Values can be up to 255 Unicode characters.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
awsServicesAuthentication
object ( AwsServicesAuthentication )
Required. Authentication configuration for management of AWS resources.
proxyConfig
object ( AwsProxyConfig )
Optional. Proxy configuration for outbound HTTP(S) traffic.
configEncryption
object ( AwsConfigEncryption )
Required. Config encryption for user data.
instancePlacement
object ( AwsInstancePlacement )
Optional. The placement to use on control plane instances. When unspecified, the VPC's default tenancy will be used.
AwsDatabaseEncryption
GKE-on-AWS is deprecated. See https://cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/deprecations/deprecation-announcement for more details.
Configuration related to application-layer secrets encryption.
JSON representation
{
"kmsKeyArn" : string
}
Fields
kmsKeyArn
string
Required. The ARN of the AWS KMS key used to encrypt cluster secrets.
AwsServicesAuthentication
GKE-on-AWS is deprecated. See https://cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/deprecations/deprecation-announcement for more details.
Authentication configuration for the management of AWS resources.
JSON representation
{
"roleArn" : string ,
"roleSessionName" : string
}
Fields
roleArn
string
Required. The Amazon Resource Name (ARN) of the role that the Anthos Multi-Cloud API will assume when managing AWS resources on your account.
roleSessionName
string
Optional. An identifier for the assumed role session.
When unspecified, it defaults to multicloud-service-agent .
AwsAuthorization
GKE-on-AWS is deprecated. See https://cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/deprecations/deprecation-announcement for more details.
Configuration related to the cluster RBAC settings.
JSON representation
{
"adminUsers" : [
{
object ( AwsClusterUser )
}
] ,
"adminGroups" : [
{
object ( AwsClusterGroup )
}
]
}
Fields
adminUsers[]
object ( AwsClusterUser )
Optional. Users that can perform operations as a cluster admin. A managed ClusterRoleBinding will be created to grant the cluster-admin ClusterRole to the users. Up to ten admin users can be provided.
For more info on RBAC, see https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles
adminGroups[]
object ( AwsClusterGroup )
Optional. Groups of users that can perform operations as a cluster admin. A managed ClusterRoleBinding will be created to grant the cluster-admin ClusterRole to the groups. Up to ten admin groups can be provided.
For more info on RBAC, see https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles
AwsClusterUser
GKE-on-AWS is deprecated. See https://cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/deprecations/deprecation-announcement for more details.
Identities of a user-type subject for AWS clusters.
JSON representation
{
"username" : string
}
Fields
username
string
Required. The name of the user, e.g. my-gcp-id@gmail.com .
AwsClusterGroup
GKE-on-AWS is deprecated. See https://cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/deprecations/deprecation-announcement for more details.
Identities of a group-type subject for AWS clusters.
JSON representation
{
"group" : string
}
Fields
group
string
Required. The name of the group, e.g. my-group@domain.com .
State
The lifecycle state of the cluster.
Enums
STATE_UNSPECIFIED
Not set.
PROVISIONING
The PROVISIONING state indicates the cluster is being created.
RUNNING
The RUNNING state indicates the cluster has been created and is fully usable.
RECONCILING
The RECONCILING state indicates that some work is actively being done on the cluster, such as upgrading the control plane replicas.
STOPPING
The STOPPING state indicates the cluster is being deleted.
ERROR
The ERROR state indicates the cluster is in a broken unrecoverable state.
DEGRADED
The DEGRADED state indicates the cluster requires user action to restore full functionality.
AwsClusterError
GKE-on-AWS is deprecated. See https://cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/deprecations/deprecation-announcement for more details.
AwsClusterError describes errors found on AWS clusters.
JSON representation
{
"message" : string
}
Fields
message
string
Human-friendly description of the error.
Methods
create (deprecated)
Creates a new AwsCluster resource on a given Google Cloud Platform project and region.
delete (deprecated)
Deletes a specific AwsCluster resource.
generateAwsAccessToken (deprecated)
Generates a short-lived access token to authenticate to a given AwsCluster resource.
generateAwsClusterAgentToken (deprecated)
Generates an access token for a cluster agent.
get (deprecated)
Describes a specific AwsCluster resource.
getJwks (deprecated)
Gets the public component of the cluster signing keys in JSON Web Key format.
list (deprecated)
Lists all AwsCluster resources on a given Google Cloud project and region.
patch (deprecated)
Updates an AwsCluster .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-11-06 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-11-06 UTC."],[],[]]
