---
title: "ComposerEnvironment \_|\_ Config Connector \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/composer/composerenvironment
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/composer/composerenvironment
  title: "ComposerEnvironment \_|\_ Config Connector \_|\_ Google Cloud Documentation"
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
ComposerEnvironment
Property
Value
Google Cloud Service Name
Cloud Composer
Google Cloud Service Documentation
/composer/docs/
Google Cloud REST Resource Name
projects.locations.environments
Google Cloud REST Resource Documentation
/composer/docs/reference/rest/v1/projects.locations.environments
Config Connector Resource Short Names
gcpcomposerenvironment gcpcomposerenvironments composerenvironment
Config Connector Service Name
composer.googleapis.com
Config Connector Resource Fully Qualified Name
composerenvironments.composer.cnrm.cloud.google.com
Can Be Referenced by IAMPolicy/IAMPolicyMember
No
Config Connector Default Average Reconcile Interval In Seconds
600
Custom Resource Definition Properties
Spec
Schema
config :
dataRetentionConfig :
airflowMetadataRetentionConfig :
retentionDays : integer
retentionMode : string
taskLogsRetentionConfig :
storageMode : string
databaseConfig :
machineType : string
zone : string
encryptionConfig :
kmsKeyRef :
external : string
name : string
namespace : string
environmentSize : string
maintenanceWindow :
endTime : string
recurrence : string
startTime : string
masterAuthorizedNetworksConfig :
cidrBlocks :
- cidrBlock : string
displayName : string
enabled : boolean
nodeConfig :
composerInternalIPv4CIDRBlock : string
composerNetworkAttachmentRef :
external : string
name : string
namespace : string
diskSizeGB : integer
enableIPMasqAgent : boolean
ipAllocationPolicy :
clusterIPV4CIDRBlock : string
clusterSecondaryRangeName : string
servicesIPV4CIDRBlock : string
servicesSecondaryRangeName : string
useIPAliases : boolean
location : string
machineType : string
networkRef :
external : string
name : string
namespace : string
oauthScopes :
- string
serviceAccountRef :
external : string
name : string
namespace : string
subnetworkRef :
external : string
name : string
namespace : string
tags :
- string
nodeCount : integer
privateEnvironmentConfig :
cloudComposerConnectionSubnetworkRef :
external : string
name : string
namespace : string
cloudComposerNetworkIPv4CIDRBlock : string
cloudSQLIPv4CIDRBlock : string
enablePrivateBuildsOnly : boolean
enablePrivateEnvironment : boolean
enablePrivatelyUsedPublicIPs : boolean
networkingConfig :
connectionType : string
privateClusterConfig :
enablePrivateEndpoint : boolean
masterIPV4CIDRBlock : string
webServerIPv4CIDRBlock : string
recoveryConfig :
scheduledSnapshotsConfig :
enabled : boolean
snapshotCreationSchedule : string
snapshotLocation : string
timeZone : string
resilienceMode : string
softwareConfig :
airflowConfigOverrides :
string : string
cloudDataLineageIntegration :
enabled : boolean
envVariables :
string : string
imageVersion : string
pypiPackages :
string : string
pythonVersion : string
schedulerCount : integer
webServerPluginsMode : string
webServerConfig :
machineType : string
webServerNetworkAccessControl :
allowedIPRanges :
- description : string
value : string
workloadsConfig :
dagProcessor :
count : integer
cpu : string
memoryGB : string
storageGB : string
scheduler :
count : integer
cpu : string
memoryGB : string
storageGB : string
triggerer :
count : integer
cpu : string
memoryGB : string
webServer :
cpu : string
memoryGB : string
storageGB : string
worker :
cpu : string
maxCount : integer
memoryGB : string
minCount : integer
storageGB : string
labels :
string : string
location : string
projectRef :
external : string
kind : string
name : string
namespace : string
resourceID : string
storageConfig :
bucketRef :
external : string
name : string
namespace : string
Fields
config
Optional
object
Optional. Configuration parameters for this environment.
config.dataRetentionConfig
Optional
object
Optional. The configuration setting for Airflow database data retention mechanism.
config.dataRetentionConfig.airflowMetadataRetentionConfig
Optional
object
Optional. The retention policy for Airflow metadata database.
config.dataRetentionConfig.airflowMetadataRetentionConfig.retentionDays
Optional
integer
Optional. How many days data should be retained for.
config.dataRetentionConfig.airflowMetadataRetentionConfig.retentionMode
Optional
string
Optional. Retention can be either enabled or disabled.
config.dataRetentionConfig.taskLogsRetentionConfig
Optional
object
Optional. The configuration settings for task logs retention
config.dataRetentionConfig.taskLogsRetentionConfig.storageMode
Optional
string
Optional. The mode of storage for Airflow workers task logs.
config.databaseConfig
Optional
object
Optional. The configuration settings for Cloud SQL instance used internally by Apache Airflow software.
config.databaseConfig.machineType
Optional
string
Optional. Cloud SQL machine type used by Airflow database. It has to be one of: db-n1-standard-2, db-n1-standard-4, db-n1-standard-8 or db-n1-standard-16. If not specified, db-n1-standard-2 will be used. Supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.
config.databaseConfig.zone
Optional
string
Optional. The Compute Engine zone where the Airflow database is created. If zone is provided, it must be in the region selected for the environment. If zone is not provided, a zone is automatically selected. The zone can only be set during environment creation. Supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.*.
config.encryptionConfig
Optional
object
Optional. The encryption options for the Cloud Composer environment and its dependencies. Cannot be updated.
config.encryptionConfig.kmsKeyRef
Optional
object
Optional. Customer-managed Encryption Key available through Google's Key Management Service. Cannot be updated. If not specified, Google-managed key will be used.
config.encryptionConfig.kmsKeyRef.external
Optional
string
A reference to an externally managed KMSCryptoKey. Should be in the format `projects/[kms_project_id]/locations/[region]/keyRings/[key_ring_id]/cryptoKeys/[key]`.
config.encryptionConfig.kmsKeyRef.name
Optional
string
The `name` of a `KMSCryptoKey` resource.
config.encryptionConfig.kmsKeyRef.namespace
Optional
string
The `namespace` of a `KMSCryptoKey` resource.
config.environmentSize
Optional
string
Optional. The size of the Cloud Composer environment.
This field is supported for Cloud Composer environments in versions
composer-2.*.*-airflow-*.*.* and newer.
config.maintenanceWindow
Optional
object
Optional. The maintenance window is the period when Cloud Composer
components may undergo maintenance. It is defined so that maintenance is
not executed during peak hours or critical time periods.
The system will not be under maintenance for every occurrence of this
window, but when maintenance is planned, it will be scheduled
during the window.
The maintenance window period must encompass at least 12 hours per week.
This may be split into multiple chunks, each with a size of
at least 4 hours.
If this value is omitted, the default value for maintenance window is
applied. By default, maintenance windows are from 00:00:00 to 04:00:00
(GMT) on Friday, Saturday, and Sunday every week.
config.maintenanceWindow.endTime
Optional
string
Required. Maintenance window end time. It is used only to calculate the duration of the maintenance window. The value for end-time must be in the future, relative to `start_time`.
config.maintenanceWindow.recurrence
Optional
string
Required. Maintenance window recurrence. Format is a subset of RFC-5545 `RRULE`. The only allowed values for `FREQ` field are `FREQ=DAILY` and `FREQ=WEEKLY;BYDAY=...` Example values: `FREQ=WEEKLY;BYDAY=TU,WE`, `FREQ=DAILY`.
config.maintenanceWindow.startTime
Optional
string
Required. Start time of the first recurrence of the maintenance window.
config.masterAuthorizedNetworksConfig
Optional
object
Optional. The configuration options for GKE cluster authorized networks. By default, authorized networks are, for private environments, enabled with no external networks allowlisted, and for public environments, disabled.
config.masterAuthorizedNetworksConfig.cidrBlocks
Optional
list (object)
Up to 50 external networks that could access Kubernetes control plane through HTTPS.
config.masterAuthorizedNetworksConfig.cidrBlocks[]
Optional
object
config.masterAuthorizedNetworksConfig.cidrBlocks[].cidrBlock
Optional
string
CIDR block that must be specified in CIDR notation.
config.masterAuthorizedNetworksConfig.cidrBlocks[].displayName
Optional
string
User-defined name that identifies the CIDR block.
config.masterAuthorizedNetworksConfig.enabled
Optional
boolean
Optional. Whether or not master authorized networks feature is enabled.
config.nodeConfig
Optional
object
Optional. The configuration used for the Kubernetes Engine cluster.
config.nodeConfig.composerInternalIPv4CIDRBlock
Optional
string
Optional. The IP range in CIDR notation to use internally by Cloud
Composer. IP addresses are not reserved - and the same range can be used by
multiple Cloud Composer environments. In case of overlap, IPs from this
range will not be accessible in the user's VPC network. Cannot be updated.
If not specified, the default value of '100.64.128.0/20' is used.
This field is supported for Cloud Composer environments in versions
composer-3.*.*-airflow-*.*.* and newer.
config.nodeConfig.composerNetworkAttachmentRef
Optional
object
Optional. Network Attachment that Cloud Composer environment is connected
to, which provides connectivity with a user's VPC network. Takes precedence
over network and subnetwork settings. If not provided, but network and
subnetwork are defined during environment, it will be provisioned. If not
provided and network and subnetwork are also empty, then connectivity to
user's VPC network is disabled. Network attachment must be provided in
format
projects/{project}/regions/{region}/networkAttachments/{networkAttachment}.
This field is supported for Cloud Composer environments in versions
composer-3.*.*-airflow-*.*.* and newer.
config.nodeConfig.composerNetworkAttachmentRef.external
Optional
string
The value of an externally managed ComputeNetworkAttachment resource in the form "projects/{{project}}/regions/{{region}}/networkAttachments/{{name}}".
config.nodeConfig.composerNetworkAttachmentRef.name
Optional
string
The name of a ComputeNetworkAttachment resource.
config.nodeConfig.composerNetworkAttachmentRef.namespace
Optional
string
The namespace of a ComputeNetworkAttachment resource.
config.nodeConfig.diskSizeGB
Optional
integer
Optional. The disk size in GB used for node VMs. Minimum size is 30GB.
If unspecified, defaults to 100GB. Cannot be updated.
This field is supported for Cloud Composer environments in versions
composer-1.*.*-airflow-*.*.*.
config.nodeConfig.enableIPMasqAgent
Optional
boolean
Optional. Deploys 'ip-masq-agent' daemon set in the GKE cluster and defines
nonMasqueradeCIDRs equals to Pod IP range so IP masquerading is used for
all destination addresses, except between Pods traffic.
See:
https://cloud.google.com/kubernetes-engine/docs/how-to/ip-masquerade-agent
config.nodeConfig.ipAllocationPolicy
Optional
object
Optional. The configuration for controlling how IPs are allocated in the GKE cluster.
config.nodeConfig.ipAllocationPolicy.clusterIPV4CIDRBlock
Optional
string
Optional. The IP address range used to allocate IP addresses to Pods in
the GKE cluster.
For Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*,
this field is applicable only when `use_ip_aliases` is true.
Set to blank to have GKE choose a range with the default size.
Set to /netmask (e.g. `/14`) to have GKE choose a range with a specific
netmask.
Set to a
CIDR
notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g.
`10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range
to use.
config.nodeConfig.ipAllocationPolicy.clusterSecondaryRangeName
Optional
string
Optional. The name of the GKE cluster's secondary range used to allocate
IP addresses to Pods.
For Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*,
this field is applicable only when `use_ip_aliases` is true.
config.nodeConfig.ipAllocationPolicy.servicesIPV4CIDRBlock
Optional
string
Optional. The IP address range of the services IP addresses in this
GKE cluster.
For Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*,
this field is applicable only when `use_ip_aliases` is true.
Set to blank to have GKE choose a range with the default size.
Set to /netmask (e.g. `/14`) to have GKE choose a range with a specific
netmask.
Set to a
CIDR
notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g.
`10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range
to use.
config.nodeConfig.ipAllocationPolicy.servicesSecondaryRangeName
Optional
string
Optional. The name of the services' secondary range used to allocate
IP addresses to the GKE cluster.
For Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*,
this field is applicable only when `use_ip_aliases` is true.
config.nodeConfig.ipAllocationPolicy.useIPAliases
Optional
boolean
Optional. Whether or not to enable Alias IPs in the GKE cluster.
If `true`, a VPC-native cluster is created.
This field is only supported for Cloud Composer environments in versions
composer-1.*.*-airflow-*.*.*. Environments in newer versions always use
VPC-native GKE clusters.
config.nodeConfig.location
Optional
string
Optional. The Compute Engine zone in which
to deploy the VMs used to run the Apache Airflow software, specified as a
relative resource
name . For example:
"projects/{projectId}/zones/{zoneId}".
This `location` must belong to the enclosing environment's project and
location. If both this field and `nodeConfig.machineType` are specified,
`nodeConfig.machineType` must belong to this `location`; if both are
unspecified, the service will pick a zone in the Compute Engine region
corresponding to the Cloud Composer location, and propagate that choice to
both fields. If only one field (`location` or `nodeConfig.machineType`) is
specified, the location information from the specified field will be
propagated to the unspecified field.
This field is supported for Cloud Composer environments in versions
composer-1.*.*-airflow-*.*.*.
config.nodeConfig.machineType
Optional
string
Optional. The Compute Engine
machine type used for cluster instances,
specified as a
relative resource
name . For example:
"projects/{projectId}/zones/{zoneId}/machineTypes/{machineTypeId}".
The `machineType` must belong to the enclosing environment's project and
location. If both this field and `nodeConfig.location` are specified,
this `machineType` must belong to the `nodeConfig.location`; if both are
unspecified, the service will pick a zone in the Compute Engine region
corresponding to the Cloud Composer location, and propagate that choice to
both fields. If exactly one of this field and `nodeConfig.location` is
specified, the location information from the specified field will be
propagated to the unspecified field.
The `machineTypeId` must not be a shared-core machine
type .
If this field is unspecified, the `machineTypeId` defaults
to "n1-standard-1".
This field is supported for Cloud Composer environments in versions
composer-1.*.*-airflow-*.*.*.
config.nodeConfig.networkRef
Optional
object
Optional. The Compute Engine network to be used for machine
communications, specified as a
relative resource
name . For example:
"projects/{projectId}/global/networks/{networkId}".
If unspecified, the "default" network ID in the environment's project is
used. If a Custom Subnet Network
is provided, `nodeConfig.subnetwork` must also be provided. For
Shared VPC subnetwork requirements, see
`nodeConfig.subnetwork`.
config.nodeConfig.networkRef.external
Optional
string
The value of an externally managed ComputeNetwork resource. Should be in the format "https://www.googleapis.com/compute/{{version}}/projects/{{projectId}}/global/networks/{{networkId}}" or "projects/{{projectId}}/global/networks/{{networkId}}"
config.nodeConfig.networkRef.name
Optional
string
The name of a ComputeNetwork resource.
config.nodeConfig.networkRef.namespace
Optional
string
The namespace of a ComputeNetwork resource.
config.nodeConfig.oauthScopes
Optional
list (string)
Optional. The set of Google API scopes to be made available on all
node VMs. If `oauth_scopes` is empty, defaults to
["https://www.googleapis.com/auth/cloud-platform"]. Cannot be updated.
This field is supported for Cloud Composer environments in versions
composer-1.*.*-airflow-*.*.*.
config.nodeConfig.oauthScopes[]
Optional
string
config.nodeConfig.serviceAccountRef
Optional
object
Optional. The Google Cloud Platform Service Account to be used by the node VMs. If a service account is not specified, the default Compute Engine service account is used. Cannot be updated.
config.nodeConfig.serviceAccountRef.external
Optional
string
The `email` field of an `IAMServiceAccount` resource.
config.nodeConfig.serviceAccountRef.name
Optional
string
Name of the referent. More information: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
config.nodeConfig.serviceAccountRef.namespace
Optional
string
Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
config.nodeConfig.subnetworkRef
Optional
object
Optional. The Compute Engine subnetwork to be used for machine
communications, specified as a
relative resource
name . For example:
"projects/{projectId}/regions/{regionId}/subnetworks/{subnetworkId}"
If a subnetwork is provided, `nodeConfig.network` must also be provided,
and the subnetwork must belong to the enclosing environment's project and
location.
config.nodeConfig.subnetworkRef.external
Optional
string
The ComputeSubnetwork selflink of form "projects/{{project}}/regions/{{region}}/subnetworks/{{name}}", when not managed by Config Connector.
config.nodeConfig.subnetworkRef.name
Optional
string
The `name` field of a `ComputeSubnetwork` resource.
config.nodeConfig.subnetworkRef.namespace
Optional
string
The `namespace` field of a `ComputeSubnetwork` resource.
config.nodeConfig.tags
Optional
list (string)
Optional. The list of instance tags applied to all node VMs. Tags are used to identify valid sources or targets for network firewalls. Each tag within the list must comply with RFC1035 . Cannot be updated.
config.nodeConfig.tags[]
Optional
string
config.nodeCount
Optional
integer
The number of nodes in the Kubernetes Engine cluster that will be
used to run this environment.
This field is supported for Cloud Composer environments in versions
composer-1.*.*-airflow-*.*.*.
config.privateEnvironmentConfig
Optional
object
Optional. The configuration used for the Private IP Cloud Composer environment.
config.privateEnvironmentConfig.cloudComposerConnectionSubnetworkRef
Optional
object
Optional. When specified, the environment will use Private Service Connect instead of VPC peerings to connect to Cloud SQL in the Tenant Project, and the PSC endpoint in the Customer Project will use an IP address from this subnetwork.
config.privateEnvironmentConfig.cloudComposerConnectionSubnetworkRef.external
Optional
string
The ComputeSubnetwork selflink of form "projects/{{project}}/regions/{{region}}/subnetworks/{{name}}", when not managed by Config Connector.
config.privateEnvironmentConfig.cloudComposerConnectionSubnetworkRef.name
Optional
string
The `name` field of a `ComputeSubnetwork` resource.
config.privateEnvironmentConfig.cloudComposerConnectionSubnetworkRef.namespace
Optional
string
The `namespace` field of a `ComputeSubnetwork` resource.
config.privateEnvironmentConfig.cloudComposerNetworkIPv4CIDRBlock
Optional
string
Optional. The CIDR block from which IP range for Cloud Composer Network in
tenant project will be reserved. Must not overlap with
private_cluster_config.master_ipv4_cidr_block and
cloud_sql_ipv4_cidr_block.
This field is supported for Cloud Composer environments in versions
composer-2.*.*-airflow-*.*.* and newer.
config.privateEnvironmentConfig.cloudSQLIPv4CIDRBlock
Optional
string
Optional. The CIDR block from which IP range in tenant project will be reserved for Cloud SQL. Must not overlap with `web_server_ipv4_cidr_block`.
config.privateEnvironmentConfig.enablePrivateBuildsOnly
Optional
boolean
Optional. If `true`, builds performed during operations that install Python
packages have only private connectivity to Google services (including
Artifact Registry) and VPC network (if either `NodeConfig.network` and
`NodeConfig.subnetwork` fields or `NodeConfig.composer_network_attachment`
field are specified). If `false`, the builds also have access to the
internet.
This field is supported for Cloud Composer environments in versions
composer-3.*.*-airflow-*.*.* and newer.
config.privateEnvironmentConfig.enablePrivateEnvironment
Optional
boolean
Optional. If `true`, a Private IP Cloud Composer environment is created. If this field is set to true, `IPAllocationPolicy.use_ip_aliases` must be set to true for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.
config.privateEnvironmentConfig.enablePrivatelyUsedPublicIPs
Optional
boolean
Optional. When enabled, IPs from public (non-RFC1918) ranges can be used for `IPAllocationPolicy.cluster_ipv4_cidr_block` and `IPAllocationPolicy.service_ipv4_cidr_block`.
config.privateEnvironmentConfig.networkingConfig
Optional
object
Optional. Configuration for the network connections configuration in the environment.
config.privateEnvironmentConfig.networkingConfig.connectionType
Optional
string
Optional. Indicates the user requested specific connection type between Tenant and Customer projects. You cannot set networking connection type in public IP environment.
config.privateEnvironmentConfig.privateClusterConfig
Optional
object
Optional. Configuration for the private GKE cluster for a Private IP Cloud Composer environment.
config.privateEnvironmentConfig.privateClusterConfig.enablePrivateEndpoint
Optional
boolean
Optional. If `true`, access to the public endpoint of the GKE cluster is denied.
config.privateEnvironmentConfig.privateClusterConfig.masterIPV4CIDRBlock
Optional
string
Optional. The CIDR block from which IPv4 range for GKE control plane will be reserved. If left blank, the default value of '172.16.0.0/23' is used.
config.privateEnvironmentConfig.webServerIPv4CIDRBlock
Optional
string
Optional. The CIDR block from which IP range for web server will be
reserved. Must not overlap with
`private_cluster_config.master_ipv4_cidr_block` and
`cloud_sql_ipv4_cidr_block`.
This field is supported for Cloud Composer environments in versions
composer-1.*.*-airflow-*.*.*.
config.recoveryConfig
Optional
object
Optional. The Recovery settings configuration of an environment.
This field is supported for Cloud Composer environments in versions
composer-2.*.*-airflow-*.*.* and newer.
config.recoveryConfig.scheduledSnapshotsConfig
Optional
object
Optional. The configuration for scheduled snapshot creation mechanism.
config.recoveryConfig.scheduledSnapshotsConfig.enabled
Optional
boolean
Optional. Whether scheduled snapshots creation is enabled.
config.recoveryConfig.scheduledSnapshotsConfig.snapshotCreationSchedule
Optional
string
Optional. The cron expression representing the time when snapshots creation mechanism runs. This field is subject to additional validation around frequency of execution.
config.recoveryConfig.scheduledSnapshotsConfig.snapshotLocation
Optional
string
Optional. The Cloud Storage location for storing automatically created snapshots.
config.recoveryConfig.scheduledSnapshotsConfig.timeZone
Optional
string
Optional. Time zone that sets the context to interpret snapshot_creation_schedule.
config.resilienceMode
Optional
string
Optional. Resilience mode of the Cloud Composer Environment.
This field is supported for Cloud Composer environments in versions
composer-2.2.0-airflow-*.*.* and newer.
config.softwareConfig
Optional
object
Optional. The configuration settings for software inside the environment.
config.softwareConfig.airflowConfigOverrides
Optional
map (key: string, value: string)
Optional. Apache Airflow configuration properties to override.
Property keys contain the section and property names, separated by a
hyphen, for example "core-dags_are_paused_at_creation". Section names must
not contain hyphens ("-"), opening square brackets ("["), or closing
square brackets ("]"). The property name must not be empty and must not
contain an equals sign ("=") or semicolon (";"). Section and property names
must not contain a period ("."). Apache Airflow configuration property
names must be written in
snake_case . Property values can
contain any character, and can be written in any lower/upper case format.
Certain Apache Airflow configuration property values are
blocked ,
and cannot be overridden.
config.softwareConfig.cloudDataLineageIntegration
Optional
object
Optional. The configuration for Cloud Data Lineage integration.
config.softwareConfig.cloudDataLineageIntegration.enabled
Optional
boolean
Optional. Whether or not Cloud Data Lineage integration is enabled.
config.softwareConfig.envVariables
Optional
map (key: string, value: string)
Optional. Additional environment variables to provide to the Apache Airflow
scheduler, worker, and webserver processes.
Environment variable names must match the regular expression
`[a-zA-Z_][a-zA-Z0-9_]*`. They cannot specify Apache Airflow
software configuration overrides (they cannot match the regular expression
`AIRFLOW__[A-Z0-9_]+__[A-Z0-9_]+`), and they cannot match any of the
following reserved names:
`AIRFLOW_HOME`
`C_FORCE_ROOT`
`CONTAINER_NAME`
`DAGS_FOLDER`
`GCP_PROJECT`
`GCS_BUCKET`
`GKE_CLUSTER_NAME`
`SQL_DATABASE`
`SQL_INSTANCE`
`SQL_PASSWORD`
`SQL_PROJECT`
`SQL_REGION`
`SQL_USER`
config.softwareConfig.imageVersion
Optional
string
Optional. The version of the software running in the environment.
This encapsulates both the version of Cloud Composer functionality and the
version of Apache Airflow. It must match the regular expression
`composer-([0-9]+(\.[0-9]+\.[0-9]+(-preview\.[0-9]+)?)?|latest)-airflow-([0-9]+(\.[0-9]+(\.[0-9]+)?)?)`.
When used as input, the server also checks if the provided version is
supported and denies the request for an unsupported version.
The Cloud Composer portion of the image version is a full
semantic version , or an alias in the form of major
version number or `latest`. When an alias is provided, the server replaces
it with the current Cloud Composer version that satisfies the alias.
The Apache Airflow portion of the image version is a full semantic version
that points to one of the supported Apache Airflow versions, or an alias in
the form of only major or major.minor versions specified. When an alias is
provided, the server replaces it with the latest Apache Airflow version
that satisfies the alias and is supported in the given Cloud Composer
version.
In all cases, the resolved image version is stored in the same field.
See also version
list and versioning
overview .
config.softwareConfig.pypiPackages
Optional
map (key: string, value: string)
Optional. Custom Python Package Index (PyPI) packages to be installed in
the environment.
Keys refer to the lowercase package name such as "numpy"
and values are the lowercase extras and version specifier such as
"==1.12.0", "[devel,gcp_api]", or "[devel]>=1.8.2,
config.softwareConfig.pythonVersion
Optional
string
Optional. The major version of Python used to run the Apache Airflow
scheduler, worker, and webserver processes.
Can be set to '2' or '3'. If not specified, the default is '3'. Cannot be
updated.
This field is only supported for Cloud Composer environments in versions
composer-1.*.*-airflow-*.*.*. Environments in newer versions always use
Python major version 3.
config.softwareConfig.schedulerCount
Optional
integer
Optional. The number of schedulers for Airflow.
This field is supported for Cloud Composer environments in versions
composer-1.*.*-airflow-2.*.*.
config.softwareConfig.webServerPluginsMode
Optional
string
Optional. Whether or not the web server uses custom plugins.
If unspecified, the field defaults to `PLUGINS_ENABLED`.
This field is supported for Cloud Composer environments in versions
composer-3-airflow-*.*.*-build.* and newer.
config.webServerConfig
Optional
object
Optional. The configuration settings for the Airflow web server App Engine instance.
config.webServerConfig.machineType
Optional
string
Optional. Machine type on which Airflow web server is running. It has to be one of: composer-n1-webserver-2, composer-n1-webserver-4 or composer-n1-webserver-8. If not specified, composer-n1-webserver-2 will be used. Value custom is returned only in response, if Airflow web server parameters were manually changed to a non-standard values.
config.webServerNetworkAccessControl
Optional
object
Optional. The network-level access control policy for the Airflow web server. If unspecified, no network-level access restrictions will be applied.
config.webServerNetworkAccessControl.allowedIPRanges
Optional
list (object)
A collection of allowed IP ranges with descriptions.
config.webServerNetworkAccessControl.allowedIPRanges[]
Optional
object
config.webServerNetworkAccessControl.allowedIPRanges[].description
Optional
string
Optional. User-provided description. It must contain at most 300 characters.
config.webServerNetworkAccessControl.allowedIPRanges[].value
Optional
string
IP address or range, defined using CIDR notation, of requests that this
rule applies to.
Examples: `192.168.1.1` or `192.168.0.0/16` or `2001:db8::/32`
or `2001:0db8:0000:0042:0000:8a2e:0370:7334`.
IP range prefixes should be properly truncated. For example,
`1.2.3.4/24` should be truncated to `1.2.3.0/24`. Similarly, for IPv6,
`2001:db8::1/32` should be truncated to `2001:db8::/32`.
config.workloadsConfig
Optional
object
Optional. The workloads configuration settings for the GKE cluster
associated with the Cloud Composer environment. The GKE cluster runs
Airflow scheduler, web server and workers workloads.
This field is supported for Cloud Composer environments in versions
composer-2.*.*-airflow-*.*.* and newer.
config.workloadsConfig.dagProcessor
Optional
object
Optional. Resources used by Airflow DAG processors.
This field is supported for Cloud Composer environments in versions
composer-3-airflow-*.*.*-build.* and newer.
config.workloadsConfig.dagProcessor.count
Optional
integer
Optional. The number of DAG processors. If not provided or set to 0, a single DAG processor instance will be created.
config.workloadsConfig.dagProcessor.cpu
Optional
string
Optional. CPU request and limit for a single Airflow DAG processor replica.
config.workloadsConfig.dagProcessor.memoryGB
Optional
string
Optional. Memory (GB) request and limit for a single Airflow DAG processor replica.
config.workloadsConfig.dagProcessor.storageGB
Optional
string
Optional. Storage (GB) request and limit for a single Airflow DAG processor replica.
config.workloadsConfig.scheduler
Optional
object
Optional. Resources used by Airflow schedulers.
config.workloadsConfig.scheduler.count
Optional
integer
Optional. The number of schedulers.
config.workloadsConfig.scheduler.cpu
Optional
string
Optional. CPU request and limit for a single Airflow scheduler replica.
config.workloadsConfig.scheduler.memoryGB
Optional
string
Optional. Memory (GB) request and limit for a single Airflow scheduler replica.
config.workloadsConfig.scheduler.storageGB
Optional
string
Optional. Storage (GB) request and limit for a single Airflow scheduler replica.
config.workloadsConfig.triggerer
Optional
object
Optional. Resources used by Airflow triggerers.
config.workloadsConfig.triggerer.count
Optional
integer
Optional. The number of triggerers.
config.workloadsConfig.triggerer.cpu
Optional
string
Optional. CPU request and limit for a single Airflow triggerer replica.
config.workloadsConfig.triggerer.memoryGB
Optional
string
Optional. Memory (GB) request and limit for a single Airflow triggerer replica.
config.workloadsConfig.webServer
Optional
object
Optional. Resources used by Airflow web server.
config.workloadsConfig.webServer.cpu
Optional
string
Optional. CPU request and limit for Airflow web server.
config.workloadsConfig.webServer.memoryGB
Optional
string
Optional. Memory (GB) request and limit for Airflow web server.
config.workloadsConfig.webServer.storageGB
Optional
string
Optional. Storage (GB) request and limit for Airflow web server.
config.workloadsConfig.worker
Optional
object
Optional. Resources used by Airflow workers.
config.workloadsConfig.worker.cpu
Optional
string
Optional. CPU request and limit for a single Airflow worker replica.
config.workloadsConfig.worker.maxCount
Optional
integer
Optional. Maximum number of workers for autoscaling.
config.workloadsConfig.worker.memoryGB
Optional
string
Optional. Memory (GB) request and limit for a single Airflow worker replica.
config.workloadsConfig.worker.minCount
Optional
integer
Optional. Minimum number of workers for autoscaling.
config.workloadsConfig.worker.storageGB
Optional
string
Optional. Storage (GB) request and limit for a single Airflow worker replica.
labels
Optional
map (key: string, value: string)
Optional. User-defined labels for this environment.
The labels map can contain no more than 64 entries. Entries of the labels
map are UTF8 strings that comply with the following restrictions:
Keys must conform to regexp: [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}
Values must conform to regexp: [\p{Ll}\p{Lo}\p{N}_-]{0,63}
Both keys and values are additionally constrained to be
location
Required
string
The geographical location that this resource belongs to.
projectRef
Required
object
The Project that this resource belongs to.
projectRef.external
Optional
string
The `projectID` field of a project, when not managed by Config Connector.
projectRef.kind
Optional
string
The kind of the Project resource; optional but must be `Project` if provided.
projectRef.name
Optional
string
The `name` field of a `Project` resource.
projectRef.namespace
Optional
string
The `namespace` field of a `Project` resource.
resourceID
Optional
string
The ComposerEnvironment name. If not given, the metadata.name will be used.
storageConfig
Optional
object
Optional. Storage configuration for this environment.
storageConfig.bucketRef
Optional
object
Optional. The name of the Cloud Storage bucket used by the environment. No `gs://` prefix.
storageConfig.bucketRef.external
Optional
string
A reference to an externally-managed StorageBucket resource.
storageConfig.bucketRef.name
Optional
string
The name of a StorageBucket resource.
storageConfig.bucketRef.namespace
Optional
string
The namespace of a StorageBucket resource.
Status
Schema
conditions :
- lastTransitionTime : string
message : string
reason : string
status : string
type : string
externalRef : string
observedGeneration : integer
observedState :
config :
airflowBYOIDURI : string
airflowURI : string
dagGCSPrefix : string
gkeCluster : string
privateEnvironmentConfig :
cloudComposerNetworkIPv4ReservedRange : string
privateClusterConfig :
masterIPV4ReservedRange : string
webServerIPv4ReservedRange : string
createTime : string
state : string
updateTime : string
uuid : string
Fields
conditions
list (object)
Conditions represent the latest available observations of the object's current state.
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
externalRef
string
A unique specifier for the ComposerEnvironment resource in Google Cloud.
observedGeneration
integer
ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
observedState
object
ObservedState is the state of the resource as most recently observed in Google Cloud.
observedState.config
object
Optional. Configuration parameters for this environment.
observedState.config.airflowBYOIDURI
string
Output only. The 'bring your own identity' variant of the URI of the Apache Airflow Web UI hosted within this environment, to be accessed with external identities using workforce identity federation (see Access environments with workforce identity federation ).
observedState.config.airflowURI
string
Output only. The URI of the Apache Airflow Web UI hosted within this environment (see Airflow web interface ).
observedState.config.dagGCSPrefix
string
Output only. The Cloud Storage prefix of the DAGs for this environment. Although Cloud Storage objects reside in a flat namespace, a hierarchical file tree can be simulated using "/"-delimited object name prefixes. DAG objects for this environment reside in a simulated directory with the given prefix.
observedState.config.gkeCluster
string
Output only. The Kubernetes Engine cluster used to run this environment.
observedState.config.privateEnvironmentConfig
object
Optional. The configuration used for the Private IP Cloud Composer environment.
observedState.config.privateEnvironmentConfig.cloudComposerNetworkIPv4ReservedRange
string
Output only. The IP range reserved for the tenant project's Cloud Composer
network.
This field is supported for Cloud Composer environments in versions
composer-2.*.*-airflow-*.*.* and newer.
observedState.config.privateEnvironmentConfig.privateClusterConfig
object
Optional. Configuration for the private GKE cluster for a Private IP Cloud Composer environment.
observedState.config.privateEnvironmentConfig.privateClusterConfig.masterIPV4ReservedRange
string
Output only. The IP range in CIDR notation to use for the hosted network. This range is used for assigning internal IP addresses to the GKE control plane IP range or set of ranges and to the internal load balancer virtual IP. This range must not overlap with any other ranges in use within the cluster's network.
observedState.config.privateEnvironmentConfig.webServerIPv4ReservedRange
string
Output only. The IP range reserved for the tenant project's App Engine VMs.
This field is supported for Cloud Composer environments in versions
composer-1.*.*-airflow-*.*.*.
observedState.createTime
string
Output only. The time at which this environment was created.
observedState.state
string
The current state of the environment.
observedState.updateTime
string
Output only. The time at which this environment was last modified.
observedState.uuid
string
Output only. The UUID (Universally Unique IDentifier) associated with this environment. This value is generated when the environment is created.
Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
