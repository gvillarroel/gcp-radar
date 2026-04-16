---
title: "REST Resource: projects.locations.environments \_|\_ Cloud Composer \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/composer/docs/composer-versions
source_metadata:
  url: https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments
  title: "REST Resource: projects.locations.environments \_|\_ Cloud Composer \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

On September 15, 2026 , all Cloud Composer 1 versions and versions 2.0.x of Cloud Composer 2 will reach their planned end of life . You will not be able to use environments with these versions. We recommend planning migration to Cloud Composer 3 . Cloud Composer 2 versions 2.1.x and later are still supported and are not impacted by this change.
Home
Documentation
Data analytics
Cloud Composer
Reference
Send feedback
REST Resource: projects.locations.environments
Stay organized with collections
Save and categorize content based on your preferences.
Resource: Environment
JSON representation
EnvironmentConfig
JSON representation
SoftwareConfig
JSON representation
CloudDataLineageIntegration
JSON representation
WebServerPluginsMode
NodeConfig
JSON representation
IPAllocationPolicy
JSON representation
PrivateEnvironmentConfig
JSON representation
NetworkingType
PrivateClusterConfig
JSON representation
NetworkingConfig
JSON representation
ConnectionType
WebServerNetworkAccessControl
JSON representation
AllowedIpRange
JSON representation
DatabaseConfig
JSON representation
WebServerConfig
JSON representation
EncryptionConfig
JSON representation
MaintenanceWindow
JSON representation
WorkloadsConfig
JSON representation
SchedulerResource
JSON representation
WebServerResource
JSON representation
WorkerResource
JSON representation
TriggererResource
JSON representation
DagProcessorResource
JSON representation
EnvironmentSize
MasterAuthorizedNetworksConfig
JSON representation
CidrBlock
JSON representation
RecoveryConfig
JSON representation
ScheduledSnapshotsConfig
JSON representation
ResilienceMode
DataRetentionConfig
JSON representation
AirflowMetadataRetentionPolicyConfig
JSON representation
RetentionMode
TaskLogsRetentionConfig
JSON representation
TaskLogsStorageMode
State
StorageConfig
JSON representation
Methods
Resource: Environment
An environment for running orchestration tasks.
JSON representation
{
"name" : string ,
"config" : {
object ( EnvironmentConfig )
} ,
"uuid" : string ,
"state" : enum ( State ) ,
"createTime" : string ,
"updateTime" : string ,
"labels" : {
string : string ,
...
} ,
"satisfiesPzs" : boolean ,
"satisfiesPzi" : boolean ,
"storageConfig" : {
object ( StorageConfig )
}
}
Fields
name
string
Identifier. The resource name of the environment, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}"
EnvironmentId must start with a lowercase letter followed by up to 63 lowercase letters, numbers, or hyphens, and cannot end with a hyphen.
config
object ( EnvironmentConfig )
Optional. Configuration parameters for this environment.
uuid
string
Output only. The UUID (Universally Unique IDentifier) associated with this environment. This value is generated when the environment is created.
state
enum ( State )
The current state of the environment.
createTime
string ( Timestamp format)
Output only. The time at which this environment was created.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
updateTime
string ( Timestamp format)
Output only. The time at which this environment was last modified.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
labels
map (key: string, value: string)
Optional. User-defined labels for this environment. The labels map can contain no more than 64 entries. Entries of the labels map are UTF8 strings that comply with the following restrictions:
Keys must conform to regexp: [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}
Values must conform to regexp: [\p{Ll}\p{Lo}\p{N}_-]{0,63}
Both keys and values are additionally constrained to be <= 128 bytes in size.
satisfiesPzs
boolean
Output only. Reserved for future use.
satisfiesPzi
boolean
Output only. Reserved for future use.
storageConfig
object ( StorageConfig )
Optional. Storage configuration for this environment.
EnvironmentConfig
Configuration information for an environment.
JSON representation
{
"gkeCluster" : string ,
"dagGcsPrefix" : string ,
"nodeCount" : integer ,
"softwareConfig" : {
object ( SoftwareConfig )
} ,
"nodeConfig" : {
object ( NodeConfig )
} ,
"privateEnvironmentConfig" : {
object ( PrivateEnvironmentConfig )
} ,
"webServerNetworkAccessControl" : {
object ( WebServerNetworkAccessControl )
} ,
"databaseConfig" : {
object ( DatabaseConfig )
} ,
"webServerConfig" : {
object ( WebServerConfig )
} ,
"encryptionConfig" : {
object ( EncryptionConfig )
} ,
"maintenanceWindow" : {
object ( MaintenanceWindow )
} ,
"workloadsConfig" : {
object ( WorkloadsConfig )
} ,
"environmentSize" : enum ( EnvironmentSize ) ,
"airflowUri" : string ,
"airflowByoidUri" : string ,
"masterAuthorizedNetworksConfig" : {
object ( MasterAuthorizedNetworksConfig )
} ,
"recoveryConfig" : {
object ( RecoveryConfig )
} ,
"resilienceMode" : enum ( ResilienceMode ) ,
"dataRetentionConfig" : {
object ( DataRetentionConfig )
}
}
Fields
gkeCluster
string
Output only. The Kubernetes Engine cluster used to run this environment.
dagGcsPrefix
string
Output only. The Cloud Storage prefix of the DAGs for this environment. Although Cloud Storage objects reside in a flat namespace, a hierarchical file tree can be simulated using "/"-delimited object name prefixes. DAG objects for this environment reside in a simulated directory with the given prefix.
nodeCount
integer
The number of nodes in the Kubernetes Engine cluster that will be used to run this environment.
This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.
softwareConfig
object ( SoftwareConfig )
Optional. The configuration settings for software inside the environment.
nodeConfig
object ( NodeConfig )
Optional. The configuration used for the Kubernetes Engine cluster.
privateEnvironmentConfig
object ( PrivateEnvironmentConfig )
Optional. The configuration used for the Private IP Cloud Composer environment.
webServerNetworkAccessControl
object ( WebServerNetworkAccessControl )
Optional. The network-level access control policy for the Airflow web server. If unspecified, no network-level access restrictions will be applied.
databaseConfig
object ( DatabaseConfig )
Optional. The configuration settings for Cloud SQL instance used internally by Apache Airflow software.
webServerConfig
object ( WebServerConfig )
Optional. The configuration settings for the Airflow web server App Engine instance.
encryptionConfig
object ( EncryptionConfig )
Optional. The encryption options for the Cloud Composer environment and its dependencies. Cannot be updated.
maintenanceWindow
object ( MaintenanceWindow )
Optional. The maintenance window is the period when Cloud Composer components may undergo maintenance. It is defined so that maintenance is not executed during peak hours or critical time periods.
The system will not be under maintenance for every occurrence of this window, but when maintenance is planned, it will be scheduled during the window.
The maintenance window period must encompass at least 12 hours per week. This may be split into multiple chunks, each with a size of at least 4 hours.
If this value is omitted, the default value for maintenance window is applied. By default, maintenance windows are from 00:00:00 to 04:00:00 (GMT) on Friday, Saturday, and Sunday every week.
workloadsConfig
object ( WorkloadsConfig )
Optional. The workloads configuration settings for the GKE cluster associated with the Cloud Composer environment. The GKE cluster runs Airflow scheduler, web server and workers workloads.
This field is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.
environmentSize
enum ( EnvironmentSize )
Optional. The size of the Cloud Composer environment.
This field is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.
airflowUri
string
Output only. The URI of the Apache Airflow Web UI hosted within this environment (see Airflow web interface ).
airflowByoidUri
string
Output only. The 'bring your own identity' variant of the URI of the Apache Airflow Web UI hosted within this environment, to be accessed with external identities using workforce identity federation (see Access environments with workforce identity federation ).
masterAuthorizedNetworksConfig
object ( MasterAuthorizedNetworksConfig )
Optional. The configuration options for GKE cluster master authorized networks. By default master authorized networks feature is: - in case of private environment: enabled with no external networks allowlisted. - in case of public environment: disabled.
recoveryConfig
object ( RecoveryConfig )
Optional. The Recovery settings configuration of an environment.
This field is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.
resilienceMode
enum ( ResilienceMode )
Optional. Resilience mode of the Cloud Composer Environment.
This field is supported for Cloud Composer environments in versions composer-2.2.0-airflow-*.*.* and newer.
dataRetentionConfig
object ( DataRetentionConfig )
Optional. The configuration setting for Airflow database data retention mechanism.
SoftwareConfig
Specifies the selection and configuration of software inside the environment.
JSON representation
{
"imageVersion" : string ,
"airflowConfigOverrides" : {
string : string ,
...
} ,
"pypiPackages" : {
string : string ,
...
} ,
"envVariables" : {
string : string ,
...
} ,
"pythonVersion" : string ,
"schedulerCount" : integer ,
"cloudDataLineageIntegration" : {
object ( CloudDataLineageIntegration )
} ,
"webServerPluginsMode" : enum ( WebServerPluginsMode )
}
Fields
imageVersion
string
Optional. The version of the software running in the environment. This encapsulates both the version of Cloud Composer functionality and the version of Apache Airflow. It must match the regular expression composer-([0-9]+(\.[0-9]+\.[0-9]+(-preview\.[0-9]+)?)?|latest)-airflow-([0-9]+(\.[0-9]+(\.[0-9]+)?)?) . When used as input, the server also checks if the provided version is supported and denies the request for an unsupported version.
The Cloud Composer portion of the image version is a full semantic version , or an alias in the form of major version number or latest . When an alias is provided, the server replaces it with the current Cloud Composer version that satisfies the alias.
The Apache Airflow portion of the image version is a full semantic version that points to one of the supported Apache Airflow versions, or an alias in the form of only major or major.minor versions specified. When an alias is provided, the server replaces it with the latest Apache Airflow version that satisfies the alias and is supported in the given Cloud Composer version.
In all cases, the resolved image version is stored in the same field.
See also version list and versioning overview .
airflowConfigOverrides
map (key: string, value: string)
Optional. Apache Airflow configuration properties to override.
Property keys contain the section and property names, separated by a hyphen, for example "core-dags_are_paused_at_creation". Section names must not contain hyphens ("-"), opening square brackets ("["), or closing square brackets ("]"). The property name must not be empty and must not contain an equals sign ("=") or semicolon (";"). Section and property names must not contain a period ("."). Apache Airflow configuration property names must be written in snake_case . Property values can contain any character, and can be written in any lower/upper case format.
Certain Apache Airflow configuration property values are blocked , and cannot be overridden.
pypiPackages
map (key: string, value: string)
Optional. Custom Python Package Index (PyPI) packages to be installed in the environment.
Keys refer to the lowercase package name such as "numpy" and values are the lowercase extras and version specifier such as "==1.12.0", "[devel,gcp_api]", or "[devel]>=1.8.2, <1.9.2". To specify a package without pinning it to a version specifier, use the empty string as the value.
envVariables
map (key: string, value: string)
Optional. Additional environment variables to provide to the Apache Airflow scheduler, worker, and webserver processes.
Environment variable names must match the regular expression [a-zA-Z_][a-zA-Z0-9_]* . They cannot specify Apache Airflow software configuration overrides (they cannot match the regular expression AIRFLOW__[A-Z0-9_]+__[A-Z0-9_]+ ), and they cannot match any of the following reserved names:
AIRFLOW_HOME
C_FORCE_ROOT
CONTAINER_NAME
DAGS_FOLDER
GCP_PROJECT
GCS_BUCKET
GKE_CLUSTER_NAME
SQL_DATABASE
SQL_INSTANCE
SQL_PASSWORD
SQL_PROJECT
SQL_REGION
SQL_USER
pythonVersion
string
Optional. The major version of Python used to run the Apache Airflow scheduler, worker, and webserver processes.
Can be set to '2' or '3'. If not specified, the default is '3'. Cannot be updated.
This field is only supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. Environments in newer versions always use Python major version 3.
schedulerCount
integer
Optional. The number of schedulers for Airflow.
This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-2.*.*.
cloudDataLineageIntegration
object ( CloudDataLineageIntegration )
Optional. The configuration for Cloud Data Lineage integration.
webServerPluginsMode
enum ( WebServerPluginsMode )
Optional. Whether or not the web server uses custom plugins. If unspecified, the field defaults to PLUGINS_ENABLED .
This field is supported for Cloud Composer environments in versions composer-3-airflow-*.*.*-build.* and newer.
CloudDataLineageIntegration
Configuration for Cloud Data Lineage integration.
JSON representation
{
"enabled" : boolean
}
Fields
enabled
boolean
Optional. Whether or not Cloud Data Lineage integration is enabled.
WebServerPluginsMode
Web server plugins mode of the Cloud Composer environment.
Enums
WEB_SERVER_PLUGINS_MODE_UNSPECIFIED
Default mode.
PLUGINS_DISABLED
Web server plugins are not supported.
PLUGINS_ENABLED
Web server plugins are supported.
NodeConfig
The configuration information for the Kubernetes Engine nodes running the Apache Airflow software.
JSON representation
{
"location" : string ,
"machineType" : string ,
"network" : string ,
"subnetwork" : string ,
"diskSizeGb" : integer ,
"oauthScopes" : [
string
] ,
"serviceAccount" : string ,
"tags" : [
string
] ,
"ipAllocationPolicy" : {
object ( IPAllocationPolicy )
} ,
"enableIpMasqAgent" : boolean ,
"composerNetworkAttachment" : string ,
"composerInternalIpv4CidrBlock" : string
}
Fields
location
string
Optional. The Compute Engine zone in which to deploy the VMs used to run the Apache Airflow software, specified as a relative resource name . For example: "projects/{projectId}/zones/{zoneId}".
This location must belong to the enclosing environment's project and location. If both this field and nodeConfig.machineType are specified, nodeConfig.machineType must belong to this location ; if both are unspecified, the service will pick a zone in the Compute Engine region corresponding to the Cloud Composer location, and propagate that choice to both fields. If only one field ( location or nodeConfig.machineType ) is specified, the location information from the specified field will be propagated to the unspecified field.
This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.
machineType
string
Optional. The Compute Engine machine type used for cluster instances, specified as a relative resource name . For example: "projects/{projectId}/zones/{zoneId}/machineTypes/{machineTypeId}".
The machineType must belong to the enclosing environment's project and location. If both this field and nodeConfig.location are specified, this machineType must belong to the nodeConfig.location ; if both are unspecified, the service will pick a zone in the Compute Engine region corresponding to the Cloud Composer location, and propagate that choice to both fields. If exactly one of this field and nodeConfig.location is specified, the location information from the specified field will be propagated to the unspecified field.
The machineTypeId must not be a shared-core machine type .
If this field is unspecified, the machineTypeId defaults to "n1-standard-1".
This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.
network
string
Optional. The Compute Engine network to be used for machine communications, specified as a relative resource name . For example: "projects/{projectId}/global/networks/{networkId}".
If unspecified, the "default" network ID in the environment's project is used. If a Custom Subnet Network is provided, nodeConfig.subnetwork must also be provided. For Shared VPC subnetwork requirements, see nodeConfig.subnetwork .
subnetwork
string
Optional. The Compute Engine subnetwork to be used for machine communications, specified as a relative resource name . For example: "projects/{projectId}/regions/{regionId}/subnetworks/{subnetworkId}"
If a subnetwork is provided, nodeConfig.network must also be provided, and the subnetwork must belong to the enclosing environment's project and location.
diskSizeGb
integer
Optional. The disk size in GB used for node VMs. Minimum size is 30GB. If unspecified, defaults to 100GB. Cannot be updated.
This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.
oauthScopes[]
string
Optional. The set of Google API scopes to be made available on all node VMs. If oauthScopes is empty, defaults to ["https://www.googleapis.com/auth/cloud-platform"]. Cannot be updated.
This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.
serviceAccount
string
Optional. The Google Cloud Platform Service Account to be used by the node VMs. If a service account is not specified, the "default" Compute Engine service account is used. Cannot be updated.
tags[]
string
Optional. The list of instance tags applied to all node VMs. Tags are used to identify valid sources or targets for network firewalls. Each tag within the list must comply with RFC1035 . Cannot be updated.
ipAllocationPolicy
object ( IPAllocationPolicy )
Optional. The configuration for controlling how IPs are allocated in the GKE cluster.
enableIpMasqAgent
boolean
Optional. Deploys 'ip-masq-agent' daemon set in the GKE cluster and defines nonMasqueradeCIDRs equals to pod IP range so IP masquerading is used for all destination addresses, except between pods traffic.
See: https://cloud.google.com/kubernetes-engine/docs/how-to/ip-masquerade-agent
composerNetworkAttachment
string
Optional. Network Attachment that Cloud Composer environment is connected to, which provides connectivity with a user's VPC network. Takes precedence over network and subnetwork settings. If not provided, but network and subnetwork are defined during environment, it will be provisioned. If not provided and network and subnetwork are also empty, then connectivity to user's VPC network is disabled. Network attachment must be provided in format projects/{project}/regions/{region}/networkAttachments/{networkAttachment}.
This field is supported for Cloud Composer environments in versions composer-3-airflow-*.*.*-build.* and newer.
composerInternalIpv4CidrBlock
string
Optional. The IP range in CIDR notation to use internally by Cloud Composer. IP addresses are not reserved - and the same range can be used by multiple Cloud Composer environments. In case of overlap, IPs from this range will not be accessible in the user's VPC network. Cannot be updated. If not specified, the default value of '100.64.128.0/20' is used.
This field is supported for Cloud Composer environments in versions composer-3-airflow-*.*.*-build.* and newer.
IPAllocationPolicy
Configuration for controlling how IPs are allocated in the GKE cluster running the Apache Airflow software.
JSON representation
{
"useIpAliases" : boolean ,
// Union field cluster_ip_allocation can be only one of the following:
"clusterSecondaryRangeName" : string ,
"clusterIpv4CidrBlock" : string
// End of list of possible types for union field cluster_ip_allocation .
// Union field services_ip_allocation can be only one of the following:
"servicesSecondaryRangeName" : string ,
"servicesIpv4CidrBlock" : string
// End of list of possible types for union field services_ip_allocation .
}
Fields
useIpAliases
boolean
Optional. Whether or not to enable Alias IPs in the GKE cluster. If true , a VPC-native cluster is created.
This field is only supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. Environments in newer versions always use VPC-native GKE clusters.
Union field cluster_ip_allocation . Configuration of allocating IP addresses for pods in the GKE cluster. cluster_ip_allocation can be only one of the following:
clusterSecondaryRangeName
string
Optional. The name of the GKE cluster's secondary range used to allocate IP addresses to pods.
For Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*, this field is applicable only when useIpAliases is true.
clusterIpv4CidrBlock
string
Optional. The IP address range used to allocate IP addresses to pods in the GKE cluster.
For Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*, this field is applicable only when useIpAliases is true.
Set to blank to have GKE choose a range with the default size.
Set to /netmask (e.g. /14 ) to have GKE choose a range with a specific netmask.
Set to a CIDR notation (e.g. 10.96.0.0/14 ) from the RFC-1918 private networks (e.g. 10.0.0.0/8 , 172.16.0.0/12 , 192.168.0.0/16 ) to pick a specific range to use.
Union field services_ip_allocation . Configuration of allocating IP addresses for services in the GKE cluster. services_ip_allocation can be only one of the following:
servicesSecondaryRangeName
string
Optional. The name of the services' secondary range used to allocate IP addresses to the GKE cluster.
For Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*, this field is applicable only when useIpAliases is true.
servicesIpv4CidrBlock
string
Optional. The IP address range of the services IP addresses in this GKE cluster.
For Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*, this field is applicable only when useIpAliases is true.
Set to blank to have GKE choose a range with the default size.
Set to /netmask (e.g. /14 ) to have GKE choose a range with a specific netmask.
Set to a CIDR notation (e.g. 10.96.0.0/14 ) from the RFC-1918 private networks (e.g. 10.0.0.0/8 , 172.16.0.0/12 , 192.168.0.0/16 ) to pick a specific range to use.
PrivateEnvironmentConfig
The configuration information for configuring a Private IP Cloud Composer environment.
JSON representation
{
"networkingType" : enum ( NetworkingType ) ,
"enablePrivateEnvironment" : boolean ,
"enablePrivateBuildsOnly" : boolean ,
"privateClusterConfig" : {
object ( PrivateClusterConfig )
} ,
"webServerIpv4CidrBlock" : string ,
"cloudSqlIpv4CidrBlock" : string ,
"webServerIpv4ReservedRange" : string ,
"cloudComposerNetworkIpv4CidrBlock" : string ,
"cloudComposerNetworkIpv4ReservedRange" : string ,
"enablePrivatelyUsedPublicIps" : boolean ,
"cloudComposerConnectionSubnetwork" : string ,
"networkingConfig" : {
object ( NetworkingConfig )
}
}
Fields
networkingType
enum ( NetworkingType )
Optional. Networking type for the environment, either private or public.
enablePrivateEnvironment
boolean
Optional. If true , a Private IP Cloud Composer environment is created. If this field is set to true, IPAllocationPolicy.use_ip_aliases must be set to true for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.
This field is going to be deprecated. Use networkingType instead.
enablePrivateBuildsOnly
boolean
Optional. If true , builds performed during operations that install Python packages have only private connectivity to Google services (including Artifact Registry) and VPC network (if either NodeConfig.network and NodeConfig.subnetwork fields or NodeConfig.composer_network_attachment field are specified). If false , the builds also have access to the internet.
This field is supported for Cloud Composer environments in versions composer-3-airflow-*.*.*-build.* and newer.
privateClusterConfig
object ( PrivateClusterConfig )
Optional. Configuration for the private GKE cluster for a Private IP Cloud Composer environment.
webServerIpv4CidrBlock
string
Optional. The CIDR block from which IP range for web server will be reserved. Needs to be disjoint from privateClusterConfig.master_ipv4_cidr_block and cloudSqlIpv4CidrBlock .
This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.
cloudSqlIpv4CidrBlock
string
Optional. The CIDR block from which IP range in tenant project will be reserved for Cloud SQL. Needs to be disjoint from webServerIpv4CidrBlock .
webServerIpv4ReservedRange
string
Output only. The IP range reserved for the tenant project's App Engine VMs.
This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.
cloudComposerNetworkIpv4CidrBlock
string
Optional. The CIDR block from which IP range for Cloud Composer Network in tenant project will be reserved. Needs to be disjoint from privateClusterConfig.master_ipv4_cidr_block and cloudSqlIpv4CidrBlock.
This field is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.
cloudComposerNetworkIpv4ReservedRange
string
Output only. The IP range reserved for the tenant project's Cloud Composer network.
This field is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.
enablePrivatelyUsedPublicIps
boolean
Optional. When enabled, IPs from public (non-RFC1918) ranges can be used for IPAllocationPolicy.cluster_ipv4_cidr_block and IPAllocationPolicy.service_ipv4_cidr_block .
cloudComposerConnectionSubnetwork
string
Optional. When specified, the environment will use Private Service Connect instead of VPC peerings to connect to Cloud SQL in the Tenant Project, and the PSC endpoint in the Customer Project will use an IP address from this subnetwork.
networkingConfig
object ( NetworkingConfig )
Optional. Configuration for the network connections configuration in the environment.
NetworkingType
Networking type for the environment, either private or public.
Enums
NETWORKING_TYPE_UNSPECIFIED
Default networking type.
PRIVATE
Private IP Cloud Composer environment with no access to the internet.
PUBLIC
Cloud Composer environment with access to the internet.
PrivateClusterConfig
Configuration options for the private GKE cluster in a Cloud Composer environment.
JSON representation
{
"enablePrivateEndpoint" : boolean ,
"masterIpv4CidrBlock" : string ,
"masterIpv4ReservedRange" : string
}
Fields
enablePrivateEndpoint
boolean
Optional. If true , access to the public endpoint of the GKE cluster is denied.
masterIpv4CidrBlock
string
Optional. The CIDR block from which IPv4 range for GKE master will be reserved. If left blank, the default value of '172.16.0.0/23' is used.
masterIpv4ReservedRange
string
Output only. The IP range in CIDR notation to use for the hosted master network. This range is used for assigning internal IP addresses to the GKE cluster master or set of masters and to the internal load balancer virtual IP. This range must not overlap with any other ranges in use within the cluster's network.
NetworkingConfig
Configuration options for networking connections in the Composer 2 environment.
JSON representation
{
"connectionType" : enum ( ConnectionType )
}
Fields
connectionType
enum ( ConnectionType )
Optional. Indicates the user requested specific connection type between Tenant and Customer projects. You cannot set networking connection type in public IP environment.
ConnectionType
Represents connection type between Composer environment in Customer Project and the corresponding Tenant project, from a predefined list of available connection modes.
Enums
CONNECTION_TYPE_UNSPECIFIED
No specific connection type was requested, so the environment uses the default value corresponding to the rest of its configuration.
VPC_PEERING
Requests the use of VPC peerings for connecting the Customer and Tenant projects.
PRIVATE_SERVICE_CONNECT
Requests the use of Private Service Connect for connecting the Customer and Tenant projects.
WebServerNetworkAccessControl
Network-level access control policy for the Airflow web server.
JSON representation
{
"allowedIpRanges" : [
{
object ( AllowedIpRange )
}
]
}
Fields
allowedIpRanges[]
object ( AllowedIpRange )
A collection of allowed IP ranges with descriptions.
AllowedIpRange
Allowed IP range with user-provided description.
JSON representation
{
"value" : string ,
"description" : string
}
Fields
value
string
IP address or range, defined using CIDR notation, of requests that this rule applies to. Examples: 192.168.1.1 or 192.168.0.0/16 or 2001:db8::/32 or 2001:0db8:0000:0042:0000:8a2e:0370:7334 .
IP range prefixes should be properly truncated. For example, 1.2.3.4/24 should be truncated to 1.2.3.0/24 . Similarly, for IPv6, 2001:db8::1/32 should be truncated to 2001:db8::/32 .
description
string
Optional. User-provided description. It must contain at most 300 characters.
DatabaseConfig
The configuration of Cloud SQL instance that is used by the Apache Airflow software.
JSON representation
{
"machineType" : string ,
"zone" : string
}
Fields
machineType
string
Optional. Cloud SQL machine type used by Airflow database. It has to be one of: db-n1-standard-2, db-n1-standard-4, db-n1-standard-8 or db-n1-standard-16. If not specified, db-n1-standard-2 will be used. Supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.
zone
string
Optional. The Compute Engine zone where the Airflow database is created. If zone is provided, it must be in the region selected for the environment. If zone is not provided, a zone is automatically selected. The zone can only be set during environment creation. Supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.*.
WebServerConfig
The configuration settings for the Airflow web server App Engine instance. Supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*
JSON representation
{
"machineType" : string
}
Fields
machineType
string
Optional. Machine type on which Airflow web server is running. It has to be one of: composer-n1-webserver-2, composer-n1-webserver-4 or composer-n1-webserver-8. If not specified, composer-n1-webserver-2 will be used. Value custom is returned only in response, if Airflow web server parameters were manually changed to a non-standard values.
EncryptionConfig
The encryption options for the Cloud Composer environment and its dependencies.Supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.
JSON representation
{
"kmsKeyName" : string
}
Fields
kmsKeyName
string
Optional. Customer-managed Encryption Key available through Google's Key Management Service. Cannot be updated. If not specified, Google-managed key will be used.
MaintenanceWindow
The configuration settings for Cloud Composer maintenance window. The following example:
{
"startTime":"2019-08-01T01:00:00Z"
"endTime":"2019-08-01T07:00:00Z"
"recurrence":"FREQ=WEEKLY;BYDAY=TU,WE"
}
would define a maintenance window between 01 and 07 hours UTC during each Tuesday and Wednesday.
JSON representation
{
"startTime" : string ,
"endTime" : string ,
"recurrence" : string
}
Fields
startTime
string ( Timestamp format)
Required. Start time of the first recurrence of the maintenance window.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
endTime
string ( Timestamp format)
Required. Maintenance window end time. It is used only to calculate the duration of the maintenance window. The value for end-time must be in the future, relative to startTime .
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
recurrence
string
Required. Maintenance window recurrence. Format is a subset of RFC-5545 RRULE . The only allowed values for FREQ field are FREQ=DAILY and FREQ=WEEKLY;BYDAY=... Example values: FREQ=WEEKLY;BYDAY=TU,WE , FREQ=DAILY .
WorkloadsConfig
The Kubernetes workloads configuration for GKE cluster associated with the Cloud Composer environment. Supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.
JSON representation
{
"scheduler" : {
object ( SchedulerResource )
} ,
"webServer" : {
object ( WebServerResource )
} ,
"worker" : {
object ( WorkerResource )
} ,
"triggerer" : {
object ( TriggererResource )
} ,
"dagProcessor" : {
object ( DagProcessorResource )
}
}
Fields
scheduler
object ( SchedulerResource )
Optional. Resources used by Airflow schedulers.
webServer
object ( WebServerResource )
Optional. Resources used by Airflow web server.
worker
object ( WorkerResource )
Optional. Resources used by Airflow workers.
triggerer
object ( TriggererResource )
Optional. Resources used by Airflow triggerers.
dagProcessor
object ( DagProcessorResource )
Optional. Resources used by Airflow DAG processors.
This field is supported for Cloud Composer environments in versions composer-3-airflow-*.*.*-build.* and newer.
SchedulerResource
Configuration for resources used by Airflow schedulers.
JSON representation
{
"cpu" : number ,
"memoryGb" : number ,
"storageGb" : number ,
"count" : integer
}
Fields
cpu
number
Optional. CPU request and limit for a single Airflow scheduler replica.
memoryGb
number
Optional. Memory (GB) request and limit for a single Airflow scheduler replica.
storageGb
number
Optional. Storage (GB) request and limit for a single Airflow scheduler replica.
count
integer
Optional. The number of schedulers.
WebServerResource
Configuration for resources used by Airflow web server.
JSON representation
{
"cpu" : number ,
"memoryGb" : number ,
"storageGb" : number
}
Fields
cpu
number
Optional. CPU request and limit for Airflow web server.
memoryGb
number
Optional. Memory (GB) request and limit for Airflow web server.
storageGb
number
Optional. Storage (GB) request and limit for Airflow web server.
WorkerResource
Configuration for resources used by Airflow workers.
JSON representation
{
"cpu" : number ,
"memoryGb" : number ,
"storageGb" : number ,
"minCount" : integer ,
"maxCount" : integer
}
Fields
cpu
number
Optional. CPU request and limit for a single Airflow worker replica.
memoryGb
number
Optional. Memory (GB) request and limit for a single Airflow worker replica.
storageGb
number
Optional. Storage (GB) request and limit for a single Airflow worker replica.
minCount
integer
Optional. Minimum number of workers for autoscaling.
maxCount
integer
Optional. Maximum number of workers for autoscaling.
TriggererResource
Configuration for resources used by Airflow triggerers.
JSON representation
{
"count" : integer ,
"cpu" : number ,
"memoryGb" : number
}
Fields
count
integer
Optional. The number of triggerers.
cpu
number
Optional. CPU request and limit for a single Airflow triggerer replica.
memoryGb
number
Optional. Memory (GB) request and limit for a single Airflow triggerer replica.
DagProcessorResource
Configuration for resources used by Airflow DAG processors.
This field is supported for Cloud Composer environments in versions composer-3-airflow-*.*.*-build.* and newer.
JSON representation
{
"cpu" : number ,
"memoryGb" : number ,
"storageGb" : number ,
"count" : integer
}
Fields
cpu
number
Optional. CPU request and limit for a single Airflow DAG processor replica.
memoryGb
number
Optional. Memory (GB) request and limit for a single Airflow DAG processor replica.
storageGb
number
Optional. Storage (GB) request and limit for a single Airflow DAG processor replica.
count
integer
Optional. The number of DAG processors. If not provided or set to 0, a single DAG processor instance will be created.
EnvironmentSize
The size of the Cloud Composer environment.
Enums
ENVIRONMENT_SIZE_UNSPECIFIED
The size of the environment is unspecified.
ENVIRONMENT_SIZE_SMALL
The environment size is small.
ENVIRONMENT_SIZE_MEDIUM
The environment size is medium.
ENVIRONMENT_SIZE_LARGE
The environment size is large.
ENVIRONMENT_SIZE_EXTRA_LARGE
The environment size is extra large.
MasterAuthorizedNetworksConfig
Configuration options for the master authorized networks feature. Enabled master authorized networks will disallow all external traffic to access Kubernetes master through HTTPS except traffic from the given CIDR blocks, Google Compute Engine Public IPs and Google Prod IPs.
JSON representation
{
"enabled" : boolean ,
"cidrBlocks" : [
{
object ( CidrBlock )
}
]
}
Fields
enabled
boolean
Optional. Whether or not master authorized networks feature is enabled.
cidrBlocks[]
object ( CidrBlock )
Up to 50 external networks that could access Kubernetes master through HTTPS.
CidrBlock
CIDR block with an optional name.
JSON representation
{
"displayName" : string ,
"cidrBlock" : string
}
Fields
displayName
string
User-defined name that identifies the CIDR block.
cidrBlock
string
CIDR block that must be specified in CIDR notation.
RecoveryConfig
The Recovery settings of an environment.
JSON representation
{
"scheduledSnapshotsConfig" : {
object ( ScheduledSnapshotsConfig )
}
}
Fields
scheduledSnapshotsConfig
object ( ScheduledSnapshotsConfig )
Optional. The configuration for scheduled snapshot creation mechanism.
ScheduledSnapshotsConfig
The configuration for scheduled snapshot creation mechanism.
JSON representation
{
"enabled" : boolean ,
"snapshotLocation" : string ,
"snapshotCreationSchedule" : string ,
"timeZone" : string
}
Fields
enabled
boolean
Optional. Whether scheduled snapshots creation is enabled.
snapshotLocation
string
Optional. The Cloud Storage location for storing automatically created snapshots.
snapshotCreationSchedule
string
Optional. The cron expression representing the time when snapshots creation mechanism runs. This field is subject to additional validation around frequency of execution.
timeZone
string
Optional. Time zone that sets the context to interpret snapshotCreationSchedule.
ResilienceMode
Resilience mode of the Cloud Composer Environment.
Enums
RESILIENCE_MODE_UNSPECIFIED
Default mode doesn't change environment parameters.
HIGH_RESILIENCE
Enabled High Resilience mode, including Cloud SQL HA.
DataRetentionConfig
The configuration setting for Airflow database data retention mechanism.
JSON representation
{
"airflowMetadataRetentionConfig" : {
object ( AirflowMetadataRetentionPolicyConfig )
} ,
"taskLogsRetentionConfig" : {
object ( TaskLogsRetentionConfig )
}
}
Fields
airflowMetadataRetentionConfig
object ( AirflowMetadataRetentionPolicyConfig )
Optional. The retention policy for airflow metadata database.
taskLogsRetentionConfig
object ( TaskLogsRetentionConfig )
Optional. The configuration settings for task logs retention
AirflowMetadataRetentionPolicyConfig
The policy for airflow metadata database retention.
JSON representation
{
"retentionMode" : enum ( RetentionMode ) ,
"retentionDays" : integer
}
Fields
retentionMode
enum ( RetentionMode )
Optional. Retention can be either enabled or disabled.
retentionDays
integer
Optional. How many days data should be retained for.
RetentionMode
Describes retention policy.
Enums
RETENTION_MODE_UNSPECIFIED
Default mode doesn't change environment parameters.
RETENTION_MODE_ENABLED
Retention policy is enabled.
RETENTION_MODE_DISABLED
Retention policy is disabled.
TaskLogsRetentionConfig
The configuration setting for Task Logs.
JSON representation
{
"storageMode" : enum ( TaskLogsStorageMode )
}
Fields
storageMode
enum ( TaskLogsStorageMode )
Optional. The mode of storage for Airflow workers task logs.
TaskLogsStorageMode
The definition of taskLogsStorageMode.
Enums
TASK_LOGS_STORAGE_MODE_UNSPECIFIED
This configuration is not specified by the user.
CLOUD_LOGGING_AND_CLOUD_STORAGE
Store task logs in Cloud Logging and in the environment's Cloud Storage bucket.
CLOUD_LOGGING_ONLY
Store task logs in Cloud Logging only.
State
State of the environment.
Enums
STATE_UNSPECIFIED
The state of the environment is unknown.
CREATING
The environment is in the process of being created.
RUNNING
The environment is currently running and healthy. It is ready for use.
UPDATING
The environment is being updated. It remains usable but cannot receive additional update requests or be deleted at this time.
DELETING
The environment is undergoing deletion. It cannot be used.
ERROR
The environment has encountered an error and cannot be used.
StorageConfig
The configuration for data storage in the environment.
JSON representation
{
"bucket" : string
}
Fields
bucket
string
Optional. The name of the Cloud Storage bucket used by the environment. No gs:// prefix.
Methods
checkUpgrade
Check if an upgrade operation on the environment will succeed.
create
Create a new environment.
databaseFailover
Triggers database failover (only for highly resilient environments).
delete
Delete an environment.
executeAirflowCommand
Executes Airflow CLI command.
fetchDatabaseProperties
Fetches database properties.
get
Get an existing environment.
list
List environments.
loadSnapshot
Loads a snapshot of a Cloud Composer environment.
patch
Update an environment.
pollAirflowCommand
Polls Airflow CLI command execution and fetches logs.
restartWebServer
Restart Airflow web server.
saveSnapshot
Creates a snapshots of a Cloud Composer environment.
stopAirflowCommand
Stops Airflow CLI command execution.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-02 UTC."],[],[]]
