---
title: "ClusterConfig \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig
  title: "ClusterConfig \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

"Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
Home
Documentation
Data analytics
Managed Service for Apache Spark
Reference
Send feedback
ClusterConfig
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
ClusterType
ClusterTier
GceClusterConfig
JSON representation
PrivateIpv6GoogleAccess
ReservationAffinity
JSON representation
Type
NodeGroupAffinity
JSON representation
ShieldedInstanceConfig
JSON representation
ConfidentialInstanceConfig
JSON representation
SoftwareConfig
JSON representation
Component
NodeInitializationAction
JSON representation
EncryptionConfig
JSON representation
AutoscalingConfig
JSON representation
SecurityConfig
JSON representation
KerberosConfig
JSON representation
IdentityConfig
JSON representation
LifecycleConfig
JSON representation
EndpointConfig
JSON representation
DataprocMetricConfig
JSON representation
Metric
JSON representation
MetricSource
AuxiliaryNodeGroup
JSON representation
The cluster config.
JSON representation
{
"clusterType" : enum ( ClusterType ) ,
"clusterTier" : enum ( ClusterTier ) ,
"configBucket" : string ,
"tempBucket" : string ,
"gceClusterConfig" : {
object ( GceClusterConfig )
} ,
"masterConfig" : {
object ( InstanceGroupConfig )
} ,
"workerConfig" : {
object ( InstanceGroupConfig )
} ,
"secondaryWorkerConfig" : {
object ( InstanceGroupConfig )
} ,
"softwareConfig" : {
object ( SoftwareConfig )
} ,
"initializationActions" : [
{
object ( NodeInitializationAction )
}
] ,
"encryptionConfig" : {
object ( EncryptionConfig )
} ,
"autoscalingConfig" : {
object ( AutoscalingConfig )
} ,
"securityConfig" : {
object ( SecurityConfig )
} ,
"lifecycleConfig" : {
object ( LifecycleConfig )
} ,
"endpointConfig" : {
object ( EndpointConfig )
} ,
"metastoreConfig" : {
object ( MetastoreConfig )
} ,
"dataprocMetricConfig" : {
object ( DataprocMetricConfig )
} ,
"auxiliaryNodeGroups" : [
{
object ( AuxiliaryNodeGroup )
}
]
}
Fields
clusterType
enum ( ClusterType )
Optional. The type of the cluster.
clusterTier
enum ( ClusterTier )
Optional. The cluster tier.
configBucket
string
Optional. A Cloud Storage bucket used to stage job dependencies, config files, and job driver console output. If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket (see Dataproc staging and temp buckets ). This field requires a Cloud Storage bucket name, not a gs://... URI to a Cloud Storage bucket.
tempBucket
string
Optional. A Cloud Storage bucket used to store ephemeral cluster and jobs data, such as Spark and MapReduce history files. If you do not specify a temp bucket, Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's temp bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket. The default bucket has a TTL of 90 days, but you can use any TTL (or none) if you specify a bucket (see Dataproc staging and temp buckets ). This field requires a Cloud Storage bucket name, not a gs://... URI to a Cloud Storage bucket.
gceClusterConfig
object ( GceClusterConfig )
Optional. The shared Compute Engine config settings for all instances in a cluster.
masterConfig
object ( InstanceGroupConfig )
Optional. The Compute Engine config settings for the cluster's master instance.
workerConfig
object ( InstanceGroupConfig )
Optional. The Compute Engine config settings for the cluster's worker instances.
secondaryWorkerConfig
object ( InstanceGroupConfig )
Optional. The Compute Engine config settings for a cluster's secondary worker instances
softwareConfig
object ( SoftwareConfig )
Optional. The config settings for cluster software.
initializationActions[]
object ( NodeInitializationAction )
Optional. Commands to execute on each node after config is completed. By default, executables are run on master and all worker nodes. You can test a node's role metadata to run an executable on a master or worker node, as shown below using curl (you can also use wget ):
ROLE=$(curl -H Metadata-Flavor:Google
http://metadata/computeMetadata/v1/instance/attributes/dataproc-role)
if [[ "${ROLE}" == 'Master' ]]; then
... master specific actions ...
else
... worker specific actions ...
fi
encryptionConfig
object ( EncryptionConfig )
Optional. Encryption settings for the cluster.
autoscalingConfig
object ( AutoscalingConfig )
Optional. Autoscaling config for the policy associated with the cluster. Cluster does not autoscale if this field is unset.
securityConfig
object ( SecurityConfig )
Optional. Security settings for the cluster.
lifecycleConfig
object ( LifecycleConfig )
Optional. Lifecycle setting for the cluster.
endpointConfig
object ( EndpointConfig )
Optional. Port/endpoint configuration for this cluster
metastoreConfig
object ( MetastoreConfig )
Optional. Metastore configuration.
dataprocMetricConfig
object ( DataprocMetricConfig )
Optional. The config for Dataproc metrics.
auxiliaryNodeGroups[]
object ( AuxiliaryNodeGroup )
Optional. The node group settings.
ClusterType
The type of the cluster.
Enums
CLUSTER_TYPE_UNSPECIFIED
Not set.
STANDARD
Standard dataproc cluster with a minimum of two primary workers.
SINGLE_NODE
https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/single-node-clusters
ZERO_SCALE
Clusters that can use only secondary workers and be scaled down to zero secondary worker nodes.
ClusterTier
The cluster tier.
Enums
CLUSTER_TIER_UNSPECIFIED
Not set. Works the same as CLUSTER_TIER_STANDARD.
CLUSTER_TIER_STANDARD
Standard Dataproc cluster.
CLUSTER_TIER_PREMIUM
Premium Dataproc cluster.
GceClusterConfig
Common config settings for resources of Compute Engine cluster instances, applicable to all instances in the cluster.
JSON representation
{
"zoneUri" : string ,
"autoZoneExcludeZoneUris" : [
string
] ,
"networkUri" : string ,
"subnetworkUri" : string ,
"privateIpv6GoogleAccess" : enum ( PrivateIpv6GoogleAccess ) ,
"serviceAccount" : string ,
"serviceAccountScopes" : [
string
] ,
"tags" : [
string
] ,
"metadata" : {
string : string ,
...
} ,
"reservationAffinity" : {
object ( ReservationAffinity )
} ,
"nodeGroupAffinity" : {
object ( NodeGroupAffinity )
} ,
"shieldedInstanceConfig" : {
object ( ShieldedInstanceConfig )
} ,
"confidentialInstanceConfig" : {
object ( ConfidentialInstanceConfig )
} ,
"resourceManagerTags" : {
string : string ,
...
} ,
"internalIpOnly" : boolean
}
Fields
zoneUri
string
Optional. The Compute Engine zone where the Dataproc cluster will be located. If omitted, the service will pick a zone in the cluster's Compute Engine region. On a get request, zone will always be present.
A full URL, partial URI, or short name are valid. Examples:
https://www.googleapis.com/compute/v1/projects/[projectId]/zones/[zone]
projects/[projectId]/zones/[zone]
[zone]
autoZoneExcludeZoneUris[]
string
Optional. An optional list of Compute Engine zones where the Dataproc cluster will not be located when Auto Zone is enabled. Only one of zoneUri or autoZoneExcludeZoneUris can be set. If both are omitted, the service will pick a zone in the cluster Compute Engine region. If autoZoneExcludeZoneUris is set and there is more than one non-excluded zone, the service will pick one of the non-excluded zones. Otherwise, cluster creation will fail with INVALID_ARGUMENT error.
A full URL, partial URI, or short name are valid. Examples:
https://www.googleapis.com/compute/v1/projects/[projectId]/zones/[zone]
projects/[projectId]/zones/[zone]
[zone]
networkUri
string
Optional. The Compute Engine network to be used for machine communications. Cannot be specified with subnetworkUri. If neither networkUri nor subnetworkUri is specified, the "default" network of the project is used, if it exists. Cannot be a "Custom Subnet Network" (see Using Subnetworks for more information).
A full URL, partial URI, or short name are valid. Examples:
https://www.googleapis.com/compute/v1/projects/[projectId]/global/networks/default
projects/[projectId]/global/networks/default
default
subnetworkUri
string
Optional. The Compute Engine subnetwork to be used for machine communications. Cannot be specified with networkUri.
A full URL, partial URI, or short name are valid. Examples:
https://www.googleapis.com/compute/v1/projects/[projectId]/regions/[region]/subnetworks/sub0
projects/[projectId]/regions/[region]/subnetworks/sub0
sub0
privateIpv6GoogleAccess
enum ( PrivateIpv6GoogleAccess )
Optional. The type of IPv6 access for a cluster.
serviceAccount
string
Optional. The Dataproc service account (also see VM Data Plane identity ) used by Dataproc cluster VM instances to access Google Cloud Platform services.
If not specified, the Compute Engine default service account is used.
serviceAccountScopes[]
string
Optional. The URIs of service account scopes to be included in Compute Engine instances. The following base set of scopes is always included:
https://www.googleapis.com/auth/cloud.useraccounts.readonly
https://www.googleapis.com/auth/devstorage.read_write
https://www.googleapis.com/auth/logging.write
If no scopes are specified, the following defaults are also provided:
https://www.googleapis.com/auth/bigquery
https://www.googleapis.com/auth/bigtable.admin.table
https://www.googleapis.com/auth/bigtable.data
https://www.googleapis.com/auth/devstorage.full_control
tags[]
string
The Compute Engine network tags to add to all instances (see Tagging instances ).
metadata
map (key: string, value: string)
Optional. The Compute Engine metadata entries to add to all instances (see Project and instance metadata ).
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
reservationAffinity
object ( ReservationAffinity )
Optional. Reservation Affinity for consuming Zonal reservation.
nodeGroupAffinity
object ( NodeGroupAffinity )
Optional. Node Group Affinity for sole-tenant clusters.
shieldedInstanceConfig
object ( ShieldedInstanceConfig )
Optional. Shielded Instance Config for clusters using Compute Engine Shielded VMs .
confidentialInstanceConfig
object ( ConfidentialInstanceConfig )
Optional. Confidential Instance Config for clusters using Confidential VMs .
resourceManagerTags
map (key: string, value: string)
Optional. Resource manager tags to add to all instances (see Use secure tags in Dataproc ).
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
internalIpOnly
boolean
Optional. This setting applies to subnetwork-enabled networks. It is set to true by default in clusters created with image versions 2.2.x.
When set to true :
All cluster VMs have internal IP addresses.
Google Private Access must be enabled to access Dataproc and other Google Cloud APIs.
Off-cluster dependencies must be configured to be accessible without external IP addresses.
When set to false :
Cluster VMs are not restricted to internal IP addresses.
Ephemeral external IP addresses are assigned to each cluster VM.
PrivateIpv6GoogleAccess
PrivateIpv6GoogleAccess controls whether and how Dataproc cluster nodes can communicate with Google Services through gRPC over IPv6. These values are directly mapped to corresponding values in the Compute Engine Instance fields .
Enums
PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED
If unspecified, Compute Engine default behavior will apply, which is the same as INHERIT_FROM_SUBNETWORK .
INHERIT_FROM_SUBNETWORK
Private access to and from Google Services configuration inherited from the subnetwork configuration. This is the default Compute Engine behavior.
OUTBOUND
Enables outbound private IPv6 access to Google Services from the Dataproc cluster.
BIDIRECTIONAL
Enables bidirectional private IPv6 access between Google Services and the Dataproc cluster.
ReservationAffinity
Reservation Affinity for consuming Zonal reservation.
JSON representation
{
"consumeReservationType" : enum ( Type ) ,
"key" : string ,
"values" : [
string
]
}
Fields
consumeReservationType
enum ( Type )
Optional. Type of reservation to consume
key
string
Optional. Corresponds to the label key of reservation resource.
values[]
string
Optional. Corresponds to the label values of reservation resource.
Type
Indicates whether to consume capacity from an reservation or not.
Enums
TYPE_UNSPECIFIED
NO_RESERVATION
Do not consume from any allocated capacity.
ANY_RESERVATION
Consume any reservation available.
SPECIFIC_RESERVATION
Must consume from a specific reservation. Must specify key value fields for specifying the reservations.
NodeGroupAffinity
Node Group Affinity for clusters using sole-tenant node groups. The Dataproc NodeGroupAffinity resource is not related to the Dataproc NodeGroup resource.
JSON representation
{
"nodeGroupUri" : string
}
Fields
nodeGroupUri
string
Required. The URI of a sole-tenant node group resource that the cluster will be created on.
A full URL, partial URI, or node group name are valid. Examples:
https://www.googleapis.com/compute/v1/projects/[projectId]/zones/[zone]/nodeGroups/node-group-1
projects/[projectId]/zones/[zone]/nodeGroups/node-group-1
node-group-1
ShieldedInstanceConfig
Shielded Instance Config for clusters using Compute Engine Shielded VMs .
JSON representation
{
"enableSecureBoot" : boolean ,
"enableVtpm" : boolean ,
"enableIntegrityMonitoring" : boolean
}
Fields
enableSecureBoot
boolean
Optional. Defines whether instances have Secure Boot enabled.
enableVtpm
boolean
Optional. Defines whether instances have the vTPM enabled.
enableIntegrityMonitoring
boolean
Optional. Defines whether instances have integrity monitoring enabled.
ConfidentialInstanceConfig
Confidential Instance Config for clusters using Confidential VMs
JSON representation
{
"enableConfidentialCompute" : boolean
}
Fields
enableConfidentialCompute
boolean
Optional. Defines whether the instance should have confidential compute enabled.
SoftwareConfig
Specifies the selection and config of software inside the cluster.
JSON representation
{
"imageVersion" : string ,
"properties" : {
string : string ,
...
} ,
"optionalComponents" : [
enum ( Component )
]
}
Fields
imageVersion
string
Optional. The version of software inside the cluster. It must be one of the supported Dataproc Versions , such as "1.2" (including a subminor version, such as "1.2.29"), or the "preview" version . If unspecified, it defaults to the latest Debian version.
properties
map (key: string, value: string)
Optional. The properties to set on daemon config files.
Property keys are specified in prefix:property format, for example core:hadoop.tmp.dir . The following are supported prefixes and their mappings:
capacity-scheduler: capacity-scheduler.xml
core: core-site.xml
distcp: distcp-default.xml
hdfs: hdfs-site.xml
hive: hive-site.xml
mapred: mapred-site.xml
pig: pig.properties
spark: spark-defaults.conf
yarn: yarn-site.xml
For more information, see Cluster properties .
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
optionalComponents[]
enum ( Component )
Optional. The set of components to activate on the cluster.
Component
Cluster components that can be activated.
Enums
COMPONENT_UNSPECIFIED
Unspecified component. Specifying this will cause Cluster creation to fail.
ANACONDA
The Anaconda component is no longer supported or applicable to supported Dataproc on Compute Engine image versions . It cannot be activated on clusters created with supported Dataproc on Compute Engine image versions.
DELTA
Delta Lake.
DOCKER
Docker
DRUID
The Druid query engine. (alpha)
FLINK
Flink
HBASE
HBase. (beta)
HIVE_WEBHCAT
The Hive Web HCatalog (the REST service for accessing HCatalog).
HUDI
Hudi.
ICEBERG
Iceberg.
JUPYTER
The Jupyter Notebook.
PRESTO
The Presto query engine.
TRINO
The Trino query engine.
RANGER
The Ranger service.
SOLR
The Solr service.
ZEPPELIN
The Zeppelin notebook.
ZOOKEEPER
The Zookeeper service.
JUPYTER_KERNEL_GATEWAY
The Jupyter Kernel Gateway.
NodeInitializationAction
Specifies an executable to run on a fully configured node and a timeout period for executable completion.
JSON representation
{
"executableFile" : string ,
"executionTimeout" : string
}
Fields
executableFile
string
Required. Cloud Storage URI of executable file.
executionTimeout
string ( Duration format)
Optional. Amount of time executable has to complete. Default is 10 minutes (see JSON representation of Duration ).
Cluster creation fails with an explanatory error message (the name of the executable that caused the error and the exceeded timeout period) if the executable is not completed at end of the timeout period.
EncryptionConfig
Encryption settings for the cluster.
JSON representation
{
"gcePdKmsKeyName" : string ,
"kmsKey" : string
}
Fields
gcePdKmsKeyName
string
Optional. The Cloud KMS key resource name to use for persistent disk encryption for all instances in the cluster. See Use CMEK with cluster data for more information.
kmsKey
string
Optional. The Cloud KMS key resource name to use for cluster persistent disk and job argument encryption. See Use CMEK with cluster data for more information.
When this key resource name is provided, the following job arguments of the following job types submitted to the cluster are encrypted using CMEK:
FlinkJob args
HadoopJob args
SparkJob args
SparkRJob args
PySparkJob args
SparkSqlJob scriptVariables and queryList.queries
HiveJob scriptVariables and queryList.queries
PigJob scriptVariables and queryList.queries
PrestoJob scriptVariables and queryList.queries
AutoscalingConfig
Autoscaling Policy config associated with the cluster.
JSON representation
{
"policyUri" : string
}
Fields
policyUri
string
Optional. The autoscaling policy used by the cluster.
Only resource names including projectid and location (region) are valid. Examples:
https://www.googleapis.com/compute/v1/projects/[projectId]/locations/[dataproc_region]/autoscalingPolicies/[policyId]
projects/[projectId]/locations/[dataproc_region]/autoscalingPolicies/[policyId]
Note that the policy must be in the same project and Dataproc region.
SecurityConfig
Security related configuration, including encryption, Kerberos, etc.
JSON representation
{
"kerberosConfig" : {
object ( KerberosConfig )
} ,
"identityConfig" : {
object ( IdentityConfig )
}
}
Fields
kerberosConfig
object ( KerberosConfig )
Optional. Kerberos related configuration.
identityConfig
object ( IdentityConfig )
Optional. Identity related configuration, including service account based secure multi-tenancy user mappings.
KerberosConfig
Specifies Kerberos related configuration.
JSON representation
{
"enableKerberos" : boolean ,
"rootPrincipalPasswordUri" : string ,
"kmsKeyUri" : string ,
"keystoreUri" : string ,
"truststoreUri" : string ,
"keystorePasswordUri" : string ,
"keyPasswordUri" : string ,
"truststorePasswordUri" : string ,
"crossRealmTrustRealm" : string ,
"crossRealmTrustKdc" : string ,
"crossRealmTrustAdminServer" : string ,
"crossRealmTrustSharedPasswordUri" : string ,
"kdcDbKeyUri" : string ,
"tgtLifetimeHours" : integer ,
"realm" : string
}
Fields
enableKerberos
boolean
Optional. Flag to indicate whether to Kerberize the cluster (default: false). Set this field to true to enable Kerberos on a cluster.
rootPrincipalPasswordUri
string
Optional. The Cloud Storage URI of a KMS encrypted file containing the root principal password.
kmsKeyUri
string
Optional. The URI of the KMS key used to encrypt sensitive files.
keystoreUri
string
Optional. The Cloud Storage URI of the keystore file used for SSL encryption. If not provided, Dataproc will provide a self-signed certificate.
truststoreUri
string
Optional. The Cloud Storage URI of the truststore file used for SSL encryption. If not provided, Dataproc will provide a self-signed certificate.
keystorePasswordUri
string
Optional. The Cloud Storage URI of a KMS encrypted file containing the password to the user provided keystore. For the self-signed certificate, this password is generated by Dataproc.
keyPasswordUri
string
Optional. The Cloud Storage URI of a KMS encrypted file containing the password to the user provided key. For the self-signed certificate, this password is generated by Dataproc.
truststorePasswordUri
string
Optional. The Cloud Storage URI of a KMS encrypted file containing the password to the user provided truststore. For the self-signed certificate, this password is generated by Dataproc.
crossRealmTrustRealm
string
Optional. The remote realm the Dataproc on-cluster KDC will trust, should the user enable cross realm trust.
crossRealmTrustKdc
string
Optional. The KDC (IP or hostname) for the remote trusted realm in a cross realm trust relationship.
crossRealmTrustAdminServer
string
Optional. The admin server (IP or hostname) for the remote trusted realm in a cross realm trust relationship.
crossRealmTrustSharedPasswordUri
string
Optional. The Cloud Storage URI of a KMS encrypted file containing the shared password between the on-cluster Kerberos realm and the remote trusted realm, in a cross realm trust relationship.
kdcDbKeyUri
string
Optional. The Cloud Storage URI of a KMS encrypted file containing the master key of the KDC database.
tgtLifetimeHours
integer
Optional. The lifetime of the ticket granting ticket, in hours. If not specified, or user specifies 0, then default value 10 will be used.
realm
string
Optional. The name of the on-cluster Kerberos realm. If not specified, the uppercased domain of hostnames will be the realm.
IdentityConfig
Identity related configuration, including service account based secure multi-tenancy user mappings.
JSON representation
{
"userServiceAccountMapping" : {
string : string ,
...
}
}
Fields
userServiceAccountMapping
map (key: string, value: string)
Required. Map of user to service account.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
LifecycleConfig
Specifies the cluster auto-delete schedule configuration.
JSON representation
{
"idleDeleteTtl" : string ,
"idleStopTtl" : string ,
"idleStartTime" : string ,
// Union field ttl can be only one of the following:
"autoDeleteTime" : string ,
"autoDeleteTtl" : string
// End of list of possible types for union field ttl .
// Union field stop_ttl can be only one of the following:
"autoStopTime" : string ,
"autoStopTtl" : string
// End of list of possible types for union field stop_ttl .
}
Fields
idleDeleteTtl
string ( Duration format)
Optional. The duration to keep the cluster alive while idling (when no jobs are running). Passing this threshold will cause the cluster to be deleted. Minimum value is 5 minutes; maximum value is 14 days (see JSON representation of Duration ).
idleStopTtl
string ( Duration format)
Optional. The duration to keep the cluster started while idling (when no jobs are running). Passing this threshold will cause the cluster to be stopped. Minimum value is 5 minutes; maximum value is 14 days (see JSON representation of Duration ).
idleStartTime
string ( Timestamp format)
Output only. The time when cluster became idle (most recent job finished) and became eligible for deletion due to idleness (see JSON representation of Timestamp ).
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
Union field ttl . Either the exact time the cluster should be deleted at or the cluster maximum age. ttl can be only one of the following:
autoDeleteTime
string ( Timestamp format)
Optional. The time when cluster will be auto-deleted (see JSON representation of Timestamp ).
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
autoDeleteTtl
string ( Duration format)
Optional. The lifetime duration of cluster. The cluster will be auto-deleted at the end of this period. Minimum value is 10 minutes; maximum value is 14 days (see JSON representation of Duration ).
Union field stop_ttl . Either the exact time the cluster should be stopped at or the cluster maximum age. stop_ttl can be only one of the following:
autoStopTime
string ( Timestamp format)
Optional. The time when cluster will be auto-stopped (see JSON representation of Timestamp ).
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
autoStopTtl
string ( Duration format)
Optional. The lifetime duration of the cluster. The cluster will be auto-stopped at the end of this period, calculated from the time of submission of the create or update cluster request. Minimum value is 10 minutes; maximum value is 14 days (see JSON representation of Duration ).
EndpointConfig
Endpoint config for this cluster
JSON representation
{
"httpPorts" : {
string : string ,
...
} ,
"enableHttpPortAccess" : boolean
}
Fields
httpPorts
map (key: string, value: string)
Output only. The map of port descriptions to URLs. Will only be populated if enableHttpPortAccess is true.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
enableHttpPortAccess
boolean
Optional. If true, enable http access to specific ports on the cluster from external sources. Defaults to false.
DataprocMetricConfig
Dataproc metric config.
JSON representation
{
"metrics" : [
{
object ( Metric )
}
]
}
Fields
metrics[]
object ( Metric )
Required. Metrics sources to enable.
Metric
A Dataproc custom metric.
JSON representation
{
"metricSource" : enum ( MetricSource ) ,
"metricOverrides" : [
string
]
}
Fields
metricSource
enum ( MetricSource )
Required. A standard set of metrics is collected unless metricOverrides are specified for the metric source (see Custom metrics for more information).
metricOverrides[]
string
Optional. Specify one or more Custom metrics to collect for the metric course (for the SPARK metric source (any Spark metric can be specified).
Provide metrics in the following format:
METRIC_SOURCE : INSTANCE : GROUP : METRIC
Use camelcase as appropriate.
Examples:
yarn:ResourceManager:QueueMetrics:AppsCompleted
spark:driver:DAGScheduler:job.allJobs
sparkHistoryServer:JVM:Memory:NonHeapMemoryUsage.committed
hiveserver2:JVM:Memory:NonHeapMemoryUsage.used
Notes:
Only the specified overridden metrics are collected for the metric source. For example, if one or more spark:executive metrics are listed as metric overrides, other SPARK metrics are not collected. The collection of the metrics for other enabled custom metric sources is unaffected. For example, if both SPARK and YARN metric sources are enabled, and overrides are provided for Spark metrics only, all YARN metrics are collected.
MetricSource
A source for the collection of Dataproc custom metrics (see Custom metrics ).
Enums
METRIC_SOURCE_UNSPECIFIED
Required unspecified metric source.
MONITORING_AGENT_DEFAULTS
Monitoring agent metrics. If this source is enabled, Dataproc enables the monitoring agent in Compute Engine, and collects monitoring agent metrics, which are published with an agent.googleapis.com prefix.
HDFS
HDFS metric source.
SPARK
Spark metric source.
YARN
YARN metric source.
SPARK_HISTORY_SERVER
Spark History Server metric source.
HIVESERVER2
Hiveserver2 metric source.
HIVEMETASTORE
hivemetastore metric source
FLINK
flink metric source
AuxiliaryNodeGroup
Node group identification and configuration information.
JSON representation
{
"nodeGroup" : {
object ( NodeGroup )
} ,
"nodeGroupId" : string
}
Fields
nodeGroup
object ( NodeGroup )
Required. Node group configuration.
nodeGroupId
string
Optional. A node group ID. Generated if not specified.
The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of from 3 to 33 characters.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-11-21 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-11-21 UTC."],[],[]]
