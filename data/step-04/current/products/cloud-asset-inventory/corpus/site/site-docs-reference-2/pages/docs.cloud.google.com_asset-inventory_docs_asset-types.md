---
title: "Asset types \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/asset-inventory/docs/asset-types
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/asset-inventory/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/asset-inventory/docs/asset-types
  title: "Asset types \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Cloud Asset Inventory
Reference
Send feedback
Asset types
Stay organized with collections
Save and categorize content based on your preferences.
This document lists the supported asset types in Cloud Asset Inventory. These
include resource types , policy types ,
and runtime information types .
You can use these asset types with the following Cloud Asset Inventory operations:
Export to BigQuery
Export to Cloud Storage
List assets
Monitor asset changes with Pub/Sub
Query assets with SQL
Search for resources
Search resources for IAM allow policies
You might also need to make use of asset names
associated with these asset types when working with Cloud Asset Inventory.
Unless otherwise specified, all resource types are available in the export,
list, monitor,
search, and analysis APIs.
Effective tags are supported only in the search APIs.
Resource types
Cloud Asset Inventory provides eventual consistency on current data and best-effort
consistency on historical data. While rare, it's possible that Cloud Asset Inventory can
miss some data updates.
Unless noted in the
following
table, almost all asset updates are available in minutes.
Cloud Asset Inventory uses the following asset types for the RESOURCE
content type .
Service
Asset type
Access Approval
API reference
accessapproval. googleapis. com/ AccessApprovalSettings
Not available in the analysis APIs.
Access Policy (Access Context Manager)
To retrieve all access policies in the export, list, and monitor APIs:
REST : Set the contentType to ACCESS_POLICY .
gcloud CLI : Set the --content-type flag to access-policy .
accesscontextmanager. googleapis. com/ AuthorizedOrgsDesc
Not available in the analysis APIs.
identity. accesscontextmanager. googleapis. com/ AccessLevel
identity. accesscontextmanager. googleapis. com/ AccessPolicy
identity. accesscontextmanager. googleapis. com/ ServicePerimeter
AlloyDB for PostgreSQL
API reference
alloydb.googleapis.com/Backup
Not available in the analysis APIs.
alloydb.googleapis.com/Cluster
Not available in the analysis APIs.
alloydb. googleapis. com/ Instance
Not available in the analysis APIs.
API Gateway
API reference
apigateway.googleapis.com/Api
apigateway. googleapis. com/ ApiConfig
apigateway. googleapis. com/ Gateway
API keys
The location field might not be populated for API keys assets.
API reference
apikeys.googleapis.com/Key
Apigee
API reference
apigee.googleapis.com/ApiProxy
Effective tags aren't supported.
Not available in the analysis APIs.
apigee. googleapis. com/ ApiProxyRevision
Effective tags aren't supported.
Not available in the analysis APIs.
apigee. googleapis. com/ Environment
Effective tags aren't supported.
Not available in the analysis APIs.
apigee.googleapis.com/Instance
Effective tags aren't supported.
apigee. googleapis. com/ Organization
Effective tags aren't supported.
Apigee API hub
API reference
apihub. googleapis. com/ ApiHubInstance
App Design Center
API reference
designcenter. googleapis. com/ Application
Effective tags aren't supported.
designcenter. googleapis. com/ ApplicationTemplateRevision
Effective tags aren't supported.
designcenter. googleapis. com/ Component
Effective tags aren't supported.
designcenter. googleapis. com/ Connection
Effective tags aren't supported.
designcenter. googleapis. com/ SharedTemplate
Effective tags aren't supported.
designcenter. googleapis. com/ SharedTemplateRevision
Effective tags aren't supported.
App Engine
The location field might not be populated for App Engine assets.
API reference
appengine. googleapis. com/ Application
Searchable attributes:
defaultBucket
defaultHostname
appengine. googleapis. com/ Service
appengine. googleapis. com/ Version
Searchable attributes:
versionUrl
App Hub
API reference
apphub. googleapis. com/ Application
Effective tags aren't supported.
Not available in the analysis APIs.
apphub.googleapis.com/Service
Effective tags aren't supported.
Not available in the analysis APIs.
apphub. googleapis. com/ ServiceProjectAttachment
Effective tags aren't supported.
Not available in the analysis APIs.
apphub.googleapis.com/Workload
Effective tags aren't supported.
Not available in the analysis APIs.
Application Integration
API reference
integrations. googleapis. com/ AuthConfig
Not available in the analysis APIs.
integrations. googleapis. com/ Certificate
Not available in the analysis APIs.
integrations. googleapis. com/ Execution
Not available in the analysis APIs.
integrations. googleapis. com/ Integration
Not available in the analysis APIs.
integrations. googleapis. com/ IntegrationVersion
Not available in the analysis APIs.
integrations. googleapis. com/ SfdcChannel
Not available in the analysis APIs.
integrations. googleapis. com/ SfdcInstance
Not available in the analysis APIs.
integrations. googleapis. com/ Suspension
Not available in the analysis APIs.
Artifact Registry
API reference
artifactregistry. googleapis. com/ DockerImage
artifactregistry. googleapis. com/ MavenArtifact
Not available in the analysis APIs.
artifactregistry. googleapis. com/ NpmPackage
Not available in the analysis APIs.
artifactregistry. googleapis. com/ PythonPackage
Not available in the analysis APIs.
artifactregistry. googleapis. com/ Repository
artifactregistry. googleapis. com/ Rule
Not available in the analysis APIs.
Assured Workloads
API reference
assuredworkloads. googleapis. com/ Workload
Backup and DR Service
API reference
backupdr.googleapis.com/Backup
Not available in the analysis APIs.
backupdr. googleapis. com/ BackupPlan
Effective tags aren't supported.
Not available in the analysis APIs.
backupdr. googleapis. com/ BackupPlanAssociation
Effective tags aren't supported.
Not available in the analysis APIs.
backupdr. googleapis. com/ BackupVault
Not available in the analysis APIs.
backupdr. googleapis. com/ DataSource
Not available in the analysis APIs.
backupdr. googleapis. com/ DataSourceReference
Not available in the analysis APIs.
backupdr. googleapis. com/ ManagementServer
Effective tags aren't supported.
Backup for GKE
API reference
gkebackup. googleapis. com/ Backup
gkebackup. googleapis. com/ BackupPlan
gkebackup. googleapis. com/ Restore
gkebackup. googleapis. com/ RestorePlan
gkebackup. googleapis. com/ VolumeBackup
gkebackup. googleapis. com/ VolumeRestore
Batch
API reference
batch.googleapis.com/Job
Not available in the analysis APIs.
BigQuery
API reference
bigquery. googleapis. com/ Dataset
Effective tags aren't supported.
bigquery.googleapis.com/Model
Effective tags aren't supported.
bigquery. googleapis. com/ Routine
Effective tags aren't supported.
bigquery. googleapis. com/ RowAccessPolicy
Effective tags aren't supported.
bigquery.googleapis.com/Table
Effective tags aren't supported.
BigQuery Data Transfer Service
BigQuery Data Transfer Service asset change history might be incomplete. Data freshness is synchronized every 7 hours. If a sync fails, freshness is delayed until the next successful sync.
API reference
bigquerydatatransfer. googleapis. com/ TransferConfig
BigQuery Migration Service
API reference
bigquerymigration. googleapis. com/ MigrationWorkflow
BigQuery Reservation API
API reference
bigqueryreservation. googleapis. com/ BiReservation
Not available in the analysis APIs.
bigqueryreservation. googleapis. com/ CapacityCommitment
Not available in the analysis APIs.
bigqueryreservation. googleapis. com/ Reservation
Not available in the analysis APIs.
bigqueryreservation. googleapis. com/ ReservationAssignment
Not available in the analysis APIs.
bigqueryreservation. googleapis. com/ ReservationGroup
Not available in the analysis APIs.
BigQuery sharing
API reference
analyticshub. googleapis. com/ DataExchange
Not available in the analysis APIs.
analyticshub. googleapis. com/ Listing
Not available in the analysis APIs.
Bigtable
API reference
bigtableadmin. googleapis. com/ AppProfile
bigtableadmin. googleapis. com/ AuthorizedView
Not available in the analysis APIs.
bigtableadmin. googleapis. com/ Backup
bigtableadmin. googleapis. com/ Cluster
bigtableadmin. googleapis. com/ Instance
bigtableadmin. googleapis. com/ LogicalView
Not available in the analysis APIs.
bigtableadmin. googleapis. com/ Table
Binary Authorization
API reference
binaryauthorization. googleapis. com/ Attestor
Not available in the analysis APIs.
binaryauthorization. googleapis. com/ PlatformPolicy
Not available in the analysis APIs.
binaryauthorization. googleapis. com/ Policy
Not available in the analysis APIs.
Blockchain Node Engine
API reference
blockchainnodeengine. googleapis. com/ BlockchainNode
Certificate Authority Service
API reference
privateca. googleapis. com/ CaPool
privateca. googleapis. com/ Certificate
privateca. googleapis. com/ CertificateAuthority
privateca. googleapis. com/ CertificateRevocationList
IAM policies might be missing for this asset type.
privateca. googleapis. com/ CertificateTemplate
Certificate Manager
API reference
certificatemanager. googleapis. com/ Certificate
Not available in the analysis APIs.
certificatemanager. googleapis. com/ CertificateIssuanceConfig
Not available in the analysis APIs.
certificatemanager. googleapis. com/ CertificateMap
Not available in the analysis APIs.
certificatemanager. googleapis. com/ CertificateMapEntry
Not available in the analysis APIs.
certificatemanager. googleapis. com/ DnsAuthorization
Not available in the analysis APIs.
certificatemanager. googleapis. com/ TrustConfig
Not available in the analysis APIs.
Chrome Enterprise Premium
API reference
beyondcorp. googleapis. com/ AppConnection
beyondcorp. googleapis. com/ AppConnector
beyondcorp. googleapis. com/ AppGateway
beyondcorp. googleapis. com/ ClientConnectorService
beyondcorp. googleapis. com/ ClientGateway
Cloud Asset Inventory
API reference
cloudasset.googleapis.com/Feed
Effective tags aren't supported.
Not available in the analysis APIs.
Cloud Billing
API reference
cloudbilling. googleapis. com/ BillingAccount
cloudbilling. googleapis. com/ ProjectBillingInfo
Not available in the analysis APIs.
Cloud Build
API reference
cloudbuild. googleapis. com/ BitbucketServerConfig
Not available in the analysis APIs.
cloudbuild. googleapis. com/ Build
Effective tags aren't supported.
Not available in the analysis and search APIs.
cloudbuild. googleapis. com/ BuildTrigger
Not available in the analysis APIs.
cloudbuild. googleapis. com/ Connection
Not available in the analysis APIs.
cloudbuild. googleapis. com/ GithubEnterpriseConfig
Not available in the analysis APIs.
cloudbuild. googleapis. com/ GlobalTriggerSettings
Not available in the analysis APIs.
cloudbuild. googleapis. com/ Repository
Not available in the analysis APIs.
cloudbuild. googleapis. com/ WorkerPool
Not available in the analysis APIs.
Cloud Composer
Cloud Composer v1beta1 is supported. The resources in v1beta1 are a superset of those in v1.
API reference
composer. googleapis. com/ Environment
In beta for the export, list, and monitor APIs.
Cloud Config Manager API
API reference
config. googleapis. com/ Deployment
config.googleapis.com/Preview
Not available in the analysis APIs.
Cloud Controls Partner API
API reference
cloudcontrolspartner. googleapis. com/ Customer
cloudcontrolspartner. googleapis. com/ Partner
cloudcontrolspartner. googleapis. com/ Workload
Cloud Data Fusion
API reference
datafusion. googleapis. com/ DnsPeering
datafusion. googleapis. com/ Instance
Cloud Deploy
API reference
clouddeploy. googleapis. com/ Automation
clouddeploy. googleapis. com/ AutomationRun
clouddeploy. googleapis. com/ CustomTargetType
clouddeploy. googleapis. com/ DeliveryPipeline
clouddeploy. googleapis. com/ DeployPolicy
clouddeploy. googleapis. com/ JobRun
clouddeploy. googleapis. com/ Release
clouddeploy. googleapis. com/ Rollout
clouddeploy. googleapis. com/ Target
Cloud DNS
API reference
dns.googleapis.com/ManagedZone
Searchable attributes:
dnsName
peeringConfig. targetNetwork. networkUrl
dns.googleapis.com/Policy
dns. googleapis. com/ ResourceRecordSet
Not available in the analysis APIs.
dns. googleapis. com/ ResponsePolicy
Not available in the analysis APIs.
dns. googleapis. com/ ResponsePolicyRule
Not available in the analysis APIs.
Cloud Domains
API reference
domains. googleapis. com/ Registration
Cloud Healthcare API
Cloud Healthcare API asset change history might be incomplete. Data freshness is synchronized every 7 hours. If a sync fails, freshness is delayed until the next successful sync.
API reference
healthcare. googleapis. com/ ConsentStore
healthcare. googleapis. com/ Dataset
healthcare. googleapis. com/ DicomStore
healthcare. googleapis. com/ FhirStore
healthcare. googleapis. com/ Hl7V2Store
Cloud Intrusion Detection System
API reference
ids.googleapis.com/Endpoint
Cloud Key Management Service
API reference
cloudkms. googleapis. com/ AutokeyConfig
cloudkms. googleapis. com/ CryptoKey
cloudkms. googleapis. com/ CryptoKeyVersion
cloudkms. googleapis. com/ EkmConfig
cloudkms. googleapis. com/ EkmConnection
cloudkms. googleapis. com/ ImportJob
cloudkms. googleapis. com/ KeyHandle
cloudkms. googleapis. com/ KeyRing
Cloud Load Balancing
API reference
networksecurity. googleapis. com/ AuthzPolicy
Not available in the analysis APIs.
Cloud Logging
Cloud Logging asset change history might be incomplete. Data freshness is synchronized every 7 hours. If a sync fails, freshness is delayed until the next successful sync.
API reference
logging.googleapis.com/Link
Effective tags aren't supported.
Not available in the analysis APIs.
logging. googleapis. com/ LogBucket
logging. googleapis. com/ LogMetric
logging.googleapis.com/LogSink
logging.googleapis.com/LogView
Effective tags aren't supported.
Not available in the analysis APIs.
logging. googleapis. com/ RecentQuery
Effective tags aren't supported.
Not available in the analysis APIs.
logging. googleapis. com/ SavedQuery
Effective tags aren't supported.
Not available in the analysis APIs.
logging. googleapis. com/ Settings
Effective tags aren't supported.
Not available in the analysis APIs.
The resource is served only when the Logging update API is called.
Cloud Monitoring
API reference
monitoring. googleapis. com/ AlertPolicy
monitoring. googleapis. com/ Dashboard
Not available in the analysis APIs.
monitoring. googleapis. com/ NotificationChannel
monitoring. googleapis. com/ Snooze
monitoring. googleapis. com/ UptimeCheckConfig
Not available in the analysis APIs.
Cloud Next Generation Firewall Enterprise
Cloud Next Generation Firewall Enterprise asset change history might be incomplete. Data freshness is synchronized every 7 hours. If a sync fails, freshness is delayed until the next successful sync.
API reference
networksecurity. googleapis. com/ AddressGroup
networksecurity. googleapis. com/ FirewallEndpoint
Not available in the analysis APIs.
networksecurity. googleapis. com/ FirewallEndpointAssociation
Not available in the analysis APIs.
networksecurity. googleapis. com/ SecurityProfile
Not available in the analysis APIs.
networksecurity. googleapis. com/ SecurityProfileGroup
Not available in the analysis APIs.
networksecurity. googleapis. com/ TlsInspectionPolicy
Not available in the analysis APIs.
Cloud OS Config
Cloud OS Config asset change history might be incomplete. Data freshness is synchronized every 7 hours. If a sync fails, freshness is delayed until the next successful sync.
API reference
osconfig. googleapis. com/ OSPolicyAssignment
Effective tags aren't supported.
osconfig. googleapis. com/ OSPolicyAssignmentReport
Effective tags aren't supported.
osconfig. googleapis. com/ PatchDeployment
Effective tags aren't supported.
osconfig. googleapis. com/ VulnerabilityReport
Effective tags aren't supported.
Not available in the analysis APIs.
Cloud Quotas
API reference
cloudquotas. googleapis. com/ QuotaPreference
Effective tags aren't supported.
Not available in the analysis APIs.
Cloud Run
API reference
run. googleapis. com/ DomainMapping
Not available in the analysis APIs.
run.googleapis.com/Execution
Effective tags aren't supported.
run.googleapis.com/Job
run.googleapis.com/Revision
Effective tags aren't supported.
run.googleapis.com/Service
run.googleapis.com/WorkerPool
Not available in the analysis APIs.
Cloud Run functions (1st and 2nd gen)
This includes both 1st and 2nd gen Cloud Run functions. The asset change history might be incomplete. Data freshness is synchronized every 7 hours. If a sync fails, freshness is delayed until the next successful sync.
API reference
cloudfunctions. googleapis. com/ Function
Searchable attributes:
environment
Cloud Run functions (1st gen)
This only includes 1st gen Cloud Run functions. The asset change history might be incomplete. Data freshness is synchronized every 7 hours. If a sync fails, freshness is delayed until the next successful sync.
API reference
cloudfunctions. googleapis. com/ CloudFunction
Cloud Service Mesh
API reference
networksecurity. googleapis. com/ AuthorizationPolicy
Not available in the analysis APIs.
networksecurity. googleapis. com/ ClientTlsPolicy
Not available in the analysis APIs.
networksecurity. googleapis. com/ ServerTlsPolicy
Not available in the analysis APIs.
Cloud SQL
Cloud SQL asset change history might be incomplete. Data freshness is synchronized every 7 hours. If a sync fails, freshness is delayed until the next successful sync.
API reference
sqladmin.googleapis.com/Backup
Not available in the analysis APIs.
sqladmin. googleapis. com/ BackupRun
sqladmin. googleapis. com/ Instance
Cloud Storage
API reference
storage.googleapis.com/Bucket
Cloud Tasks
API reference
cloudtasks. googleapis. com/ Queue
Cloud TPU
API reference
tpu.googleapis.com/Node
Cloud Workstations
API reference
workstations. googleapis. com/ Workstation
Not available in the analysis APIs.
workstations. googleapis. com/ WorkstationCluster
Not available in the analysis APIs.
workstations. googleapis. com/ WorkstationConfig
Not available in the analysis APIs.
Compute Engine
API reference
compute.googleapis.com/Address
Returns global and regional addresses in the search and analysis APIs, and only regional addresses in the list, export, query, and monitor APIs.
compute. googleapis. com/ Autoscaler
compute. googleapis. com/ BackendBucket
compute. googleapis. com/ BackendService
Returns global and regional backend services in the search and analysis APIs, and only regional backend services in the list, export, query, and monitor APIs.
compute. googleapis. com/ Commitment
compute.googleapis.com/Disk
Returns zonal and regional disks in the search and analysis APIs, and only zonal disks in the list, export, query, and monitor APIs.
compute. googleapis. com/ ExternalVpnGateway
compute. googleapis. com/ Firewall
compute. googleapis. com/ FirewallPolicy
Not available in the analysis APIs.
compute. googleapis. com/ ForwardingRule
Returns global and regional forwarding rules in the search and analysis APIs, and only regional forwarding rules in the list, export, query, and monitor APIs.
compute. googleapis. com/ GlobalAddress
Not available in the analysis and search APIs.
Use compute.googleapis.com/Address instead in the search and analysis APIs.
compute. googleapis. com/ GlobalForwardingRule
Not available in the analysis and search APIs.
Use compute.googleapis.com/ForwardingRule instead in the search and analysis APIs.
compute. googleapis. com/ HealthCheck
compute. googleapis. com/ HttpHealthCheck
compute. googleapis. com/ HttpsHealthCheck
compute.googleapis.com/Image
compute. googleapis. com/ Instance
Searchable attributes:
deletionProtection
externalIPs
internalIPs
machineType
networkInterfaceNetworks
networkInterfaceNames
The following attributes are from the
OS Inventory ,
which is attached on this Compute Engine Instance to
provide information on operating system and packages.
Learn more about
OS inventory management .
osLongName
osShortName
Supported metadata fields:
block-project-ssh-keys
enable-oslogin
enable-osconfig
serial-port-enable
compute. googleapis. com/ InstanceGroup
compute. googleapis. com/ InstanceGroupManager
compute. googleapis. com/ InstanceSettings
Not available in the analysis APIs.
compute. googleapis. com/ InstanceTemplate
compute. googleapis. com/ InstantSnapshot
compute. googleapis. com/ Interconnect
compute. googleapis. com/ InterconnectAttachment
compute.googleapis.com/License
compute. googleapis. com/ MachineImage
compute.googleapis.com/Network
Searchable attributes:
gatewayIPv4
compute. googleapis. com/ NetworkAttachment
Searchable attributes:
connectionEndpointsIpAddresses
connectionEndpointsIpv6Addresses
compute. googleapis. com/ NetworkEdgeSecurityService
compute. googleapis. com/ NetworkEndpointGroup
compute. googleapis. com/ NodeGroup
compute. googleapis. com/ NodeTemplate
compute. googleapis. com/ PacketMirroring
compute.googleapis.com/Project
Supported metadata fields:
block-project-ssh-keys
enable-osconfig
enable-oslogin
serial-port-enable
compute. googleapis. com/ PublicAdvertisedPrefix
Not available in the analysis APIs.
compute. googleapis. com/ PublicDelegatedPrefix
compute. googleapis. com/ RegionBackendService
Not available in the analysis and search APIs.
Use compute.googleapis.com/BackendService instead in the search and analysis APIs.
compute. googleapis. com/ RegionDisk
Not available in the analysis and search APIs.
Use compute.googleapis.com/Disk instead in the search and analysis APIs.
compute. googleapis. com/ Reservation
compute. googleapis. com/ ResourcePolicy
compute.googleapis.com/Route
compute.googleapis.com/Router
compute. googleapis. com/ SecurityPolicy
compute. googleapis. com/ ServiceAttachment
compute. googleapis. com/ Snapshot
compute. googleapis. com/ SslCertificate
compute. googleapis. com/ SslPolicy
compute. googleapis. com/ StoragePool
compute. googleapis. com/ Subnetwork
Searchable attributes:
gatewayAddress
compute. googleapis. com/ TargetGrpcProxy
compute. googleapis. com/ TargetHttpProxy
compute. googleapis. com/ TargetHttpsProxy
compute. googleapis. com/ TargetInstance
compute. googleapis. com/ TargetPool
compute. googleapis. com/ TargetSslProxy
compute. googleapis. com/ TargetTcpProxy
compute. googleapis. com/ TargetVpnGateway
compute.googleapis.com/UrlMap
compute. googleapis. com/ VpnGateway
compute. googleapis. com/ VpnTunnel
Container Registry
Container Registry implements Docker HTTP API V2 and does not provide a public API.
containerregistry. googleapis. com/ Image
Effective tags aren't supported.
Not available in the analysis APIs.
Customer Experience Insights
API reference
contactcenterinsights. googleapis. com/ EncryptionSpec
contactcenterinsights. googleapis. com/ IssueModel
contactcenterinsights. googleapis. com/ PhraseMatcher
contactcenterinsights. googleapis. com/ View
Data Lineage
API reference
datalineage. googleapis. com/ Process
Database Migration Service
API reference
datamigration. googleapis. com/ ConnectionProfile
datamigration. googleapis. com/ ConversionWorkspace
datamigration. googleapis. com/ MigrationJob
datamigration. googleapis. com/ PrivateConnection
Dataflow
Dataflow asset change history might be incomplete. Data freshness is synchronized every 7 hours. If a sync fails, freshness is delayed until the next successful sync.
API reference
dataflow.googleapis.com/Job
Dataform
API reference
dataform. googleapis. com/ CompilationResult
dataform.googleapis.com/Folder
Not available in the analysis APIs.
dataform. googleapis. com/ ReleaseConfig
dataform. googleapis. com/ Repository
dataform. googleapis. com/ TeamFolder
Not available in the analysis APIs.
dataform. googleapis. com/ WorkflowConfig
dataform. googleapis. com/ WorkflowInvocation
dataform. googleapis. com/ Workspace
Dataproc Metastore
API reference
metastore. googleapis. com/ Backup
Not available in the analysis APIs.
metastore. googleapis. com/ Federation
Not available in the analysis APIs.
metastore. googleapis. com/ MetadataImport
Not available in the analysis APIs.
metastore. googleapis. com/ Service
Not available in the analysis APIs.
Datastream
API reference
datastream. googleapis. com/ ConnectionProfile
datastream. googleapis. com/ PrivateConnection
datastream. googleapis. com/ Stream
Developer Connect
API reference
developerconnect. googleapis. com/ Connection
Effective tags aren't supported.
developerconnect. googleapis. com/ GitRepositoryLink
Effective tags aren't supported.
Dialogflow CX
API reference
dialogflow. googleapis. com/ Agent
dialogflow. googleapis. com/ LocationSettings
Dialogflow ES
API reference
dialogflow. googleapis. com/ ConversationProfile
dialogflow. googleapis. com/ KnowledgeBase
Discovery Engine
API reference
discoveryengine. googleapis. com/ Assistant
Not available in the analysis APIs.
discoveryengine. googleapis. com/ Collection
discoveryengine. googleapis. com/ DataStore
discoveryengine. googleapis. com/ Engine
discoveryengine. googleapis. com/ Notebook
Not available in the analysis APIs.
Document AI
API reference
documentai. googleapis. com/ HumanReviewConfig
documentai. googleapis. com/ LabelerPool
documentai. googleapis. com/ Processor
documentai. googleapis. com/ ProcessorVersion
Essential Contacts
API reference
essentialcontacts. googleapis. com/ Contact
Not available in the analysis APIs.
Eventarc
API reference
eventarc. googleapis. com/ Channel
Not available in the analysis APIs.
eventarc. googleapis. com/ ChannelConnection
Not available in the analysis APIs.
eventarc. googleapis. com/ Enrollment
Not available in the analysis APIs.
eventarc. googleapis. com/ GoogleApiSource
Not available in the analysis APIs.
eventarc. googleapis. com/ GoogleChannelConfig
Not available in the analysis APIs.
eventarc. googleapis. com/ MessageBus
Not available in the analysis APIs.
eventarc. googleapis. com/ Pipeline
Not available in the analysis APIs.
eventarc. googleapis. com/ Trigger
Filestore
API reference
file.googleapis.com/Backup
In beta for the export, list, and monitor APIs.
file.googleapis.com/Instance
file.googleapis.com/Snapshot
Not available in the analysis APIs.
Financial Services
API reference
financialservices. googleapis. com/ BacktestResult
Not available in the analysis APIs.
financialservices. googleapis. com/ Dataset
Not available in the analysis APIs.
financialservices. googleapis. com/ EngineConfig
Not available in the analysis APIs.
financialservices. googleapis. com/ Instance
financialservices. googleapis. com/ Model
Not available in the analysis APIs.
financialservices. googleapis. com/ PredictionResult
Not available in the analysis APIs.
Firebase
firebase. googleapis. com/ FirebaseAppInfo
firebase. googleapis. com/ FirebaseProject
firebaserules. googleapis. com/ Release
Effective tags aren't supported.
Not available in the analysis APIs.
firebaserules. googleapis. com/ Ruleset
Not available in the analysis APIs.
Firebase Data Connect
API reference
firebasedataconnect. googleapis. com/ Connector
firebasedataconnect. googleapis. com/ Schema
firebasedataconnect. googleapis. com/ Service
Firestore
API reference
firestore. googleapis. com/ Backup
Not available in the analysis APIs.
firestore. googleapis. com/ Database
Gemini for Google Cloud API
API reference
cloudaicompanion. googleapis. com/ CodeRepositoryIndex
cloudaicompanion. googleapis. com/ RepositoryGroup
GKE Multi-Cloud
API reference
gkemulticloud. googleapis. com/ AttachedCluster
gkemulticloud. googleapis. com/ AwsCluster
gkemulticloud. googleapis. com/ AwsNodePool
gkemulticloud. googleapis. com/ AzureClient
gkemulticloud. googleapis. com/ AzureCluster
gkemulticloud. googleapis. com/ AzureNodePool
GKE on GDC
GKE on GDC metadata has no public API source.
anthos. googleapis. com/ ConnectedCluster
Effective tags aren't supported.
Not available in the analysis APIs.
In beta for the export, list, and monitor APIs.
GKE On-Prem API
API reference
gkeonprem. googleapis. com/ BareMetalAdminCluster
Not available in the analysis APIs.
gkeonprem. googleapis. com/ BareMetalCluster
gkeonprem. googleapis. com/ BareMetalNodePool
gkeonprem. googleapis. com/ VmwareAdminCluster
Not available in the analysis APIs.
gkeonprem. googleapis. com/ VmwareCluster
gkeonprem. googleapis. com/ VmwareNodePool
Google Cloud Managed Lustre
API reference
lustre.googleapis.com/Instance
Not available in the analysis APIs.
Google Cloud Managed Service for Apache Kafka
API reference
managedkafka. googleapis. com/ Cluster
Not available in the analysis APIs.
managedkafka. googleapis. com/ ConnectCluster
Not available in the analysis and search APIs.
Google Cloud NetApp Volumes
API reference
netapp. googleapis. com/ ActiveDirectory
Effective tags aren't supported.
Not available in the analysis APIs.
netapp.googleapis.com/Backup
Effective tags aren't supported.
netapp. googleapis. com/ BackupPolicy
Effective tags aren't supported.
netapp. googleapis. com/ BackupVault
Effective tags aren't supported.
netapp. googleapis. com/ KmsConfig
Effective tags aren't supported.
Not available in the analysis APIs.
netapp. googleapis. com/ Replication
Effective tags aren't supported.
Not available in the analysis APIs.
netapp.googleapis.com/Snapshot
Effective tags aren't supported.
Not available in the analysis APIs.
netapp. googleapis. com/ StoragePool
Effective tags aren't supported.
Not available in the analysis APIs.
netapp.googleapis.com/Volume
Effective tags aren't supported.
Not available in the analysis APIs.
Google Cloud VMware Engine
API reference
vmwareengine. googleapis. com/ Cluster
vmwareengine. googleapis. com/ ExternalAccessRule
vmwareengine. googleapis. com/ ExternalAddress
vmwareengine. googleapis. com/ NetworkPeering
vmwareengine. googleapis. com/ NetworkPolicy
vmwareengine. googleapis. com/ PrivateCloud
vmwareengine. googleapis. com/ PrivateConnection
vmwareengine. googleapis. com/ VmwareEngineNetwork
Google Kubernetes Engine
API reference
admissionregistration. k8s. io/ MutatingWebhookConfiguration
admissionregistration. k8s. io/ ValidatingWebhookConfiguration
apps.k8s.io/DaemonSet
apps.k8s.io/Deployment
apps.k8s.io/ReplicaSet
apps.k8s.io/StatefulSet
autoscaling. k8s. io/ HorizontalPodAutoscaler
Not available in the analysis APIs.
The asset change history might be incomplete. Data freshness is synchronized every 7 hours. If a sync fails, freshness is delayed until the next successful sync.
batch.k8s.io/CronJob
batch.k8s.io/Job
container. googleapis. com/ Cluster
Searchable attributes:
endpoint
container. googleapis. com/ NodePool
Searchable attributes:
locations
extensions.k8s.io/DaemonSet
Not available in the analysis APIs.
extensions.k8s.io/Ingress
Not available in the analysis APIs.
In beta for the export, list, and monitor APIs.
gateway. networking. k8s. io/ Gateway
Not available in the analysis APIs.
gateway. networking. k8s. io/ GatewayClass
Not available in the analysis APIs.
gateway. networking. k8s. io/ HTTPRoute
Not available in the analysis APIs.
gateway. networking. k8s. io/ ReferenceGrant
Not available in the analysis APIs.
k8s.io/Endpoints
k8s.io/Namespace
k8s.io/Node
k8s.io/PersistentVolume
k8s.io/PersistentVolumeClaim
k8s.io/Pod
k8s.io/PodTemplate
k8s.io/ReplicationController
k8s.io/ResourceQuota
k8s.io/Secret
Not available in the analysis and search APIs.
k8s.io/Service
k8s.io/ServiceAccount
Not available in the analysis APIs.
networking.k8s.io/Ingress
Not available in the analysis APIs.
In beta for the export, list, and monitor APIs.
networking. k8s. io/ NetworkPolicy
policy. k8s. io/ PodDisruptionBudget
rbac. authorization. k8s. io/ ClusterRole
rbac. authorization. k8s. io/ ClusterRoleBinding
rbac.authorization.k8s.io/Role
rbac. authorization. k8s. io/ RoleBinding
storage.k8s.io/StorageClass
Hub
API reference
gkehub.googleapis.com/Feature
gkehub.googleapis.com/Fleet
Not available in the analysis APIs.
gkehub. googleapis. com/ Membership
gkehub. googleapis. com/ MembershipBinding
Not available in the analysis APIs.
gkehub. googleapis. com/ MembershipFeature
Not available in the analysis APIs.
gkehub. googleapis. com/ Namespace
Not available in the analysis APIs.
gkehub. googleapis. com/ RBACRoleBinding
Not available in the analysis APIs.
gkehub.googleapis.com/Scope
Not available in the analysis APIs.
Identity and Access Management v1
IAM data can be stale by up to 7 days.
API reference
iam.googleapis.com/OauthClient
Not available in the analysis APIs.
iam. googleapis. com/ OauthClientCredential
Not available in the analysis APIs.
iam.googleapis.com/Role
Searchable attributes:
includedPermissions
iam. googleapis. com/ ServiceAccount
Searchable attributes:
email
uniqueId
iam. googleapis. com/ ServiceAccountKey
Not available in the analysis APIs.
iam. googleapis. com/ WorkforcePool
Not available in the analysis APIs.
iam. googleapis. com/ WorkforcePoolProvider
Not available in the analysis APIs.
iam. googleapis. com/ WorkforcePoolProviderKey
Not available in the analysis APIs.
iam. googleapis. com/ WorkloadIdentityPool
Not available in the analysis APIs.
iam. googleapis. com/ WorkloadIdentityPoolProvider
Not available in the analysis APIs.
iam. googleapis. com/ WorkloadIdentityPoolProviderKey
Not available in the analysis APIs.
Identity and Access Management v2
API reference
iam.googleapis.com/PolicyV2
Identity and Access Management v3
API reference
iam. googleapis. com/ PolicyBinding
Not available in the analysis APIs.
iam. googleapis. com/ PrincipalAccessBoundaryPolicy
Not available in the analysis APIs.
Identity Platform
API reference
identitytoolkit. googleapis. com/ Config
identitytoolkit. googleapis. com/ DefaultSupportedIdpConfig
Not available in the analysis APIs.
identitytoolkit. googleapis. com/ InboundSamlConfig
Not available in the analysis APIs.
identitytoolkit. googleapis. com/ OauthIdpConfig
Not available in the analysis APIs.
identitytoolkit. googleapis. com/ Tenant
Not available in the analysis APIs.
Identity-Aware Proxy
iap. googleapis. com/ TunnelDestGroup
Effective tags aren't supported.
Not available in the analysis APIs.
Integration Connectors
API reference
connectors. googleapis. com/ Connection
connectors. googleapis. com/ EndpointAttachment
connectors. googleapis. com/ EventSubscription
connectors. googleapis. com/ ManagedZone
connectors. googleapis. com/ RegionalSettings
connectors. googleapis. com/ Settings
Knowledge Catalog
API reference
dataplex. googleapis. com/ AspectType
Not available in the analysis APIs.
dataplex.googleapis.com/Asset
dataplex. googleapis. com/ DataScan
dataplex. googleapis. com/ EncryptionConfig
Not available in the analysis APIs.
dataplex. googleapis. com/ EntryGroup
Not available in the analysis APIs.
dataplex. googleapis. com/ EntryType
Not available in the analysis APIs.
dataplex. googleapis. com/ Environment
dataplex. googleapis. com/ Glossary
Not available in the analysis APIs.
dataplex.googleapis.com/Lake
dataplex. googleapis. com/ MetadataJob
Not available in the analysis APIs.
dataplex.googleapis.com/Task
dataplex.googleapis.com/Zone
KRM API Hosting
krmapihosting. googleapis. com/ KrmApiHost
Live Stream API
API reference
livestream. googleapis. com/ Asset
livestream. googleapis. com/ Channel
livestream. googleapis. com/ Input
livestream.googleapis.com/Pool
Looker
API reference
looker.googleapis.com/Backup
Not available in the analysis APIs.
looker.googleapis.com/Instance
Not available in the analysis APIs.
Managed Service for Apache Spark
API reference
dataproc. googleapis. com/ AutoscalingPolicy
dataproc.googleapis.com/Batch
dataproc. googleapis. com/ Cluster
dataproc.googleapis.com/Job
dataproc. googleapis. com/ Session
Not available in the analysis APIs.
dataproc. googleapis. com/ WorkflowTemplate
Managed Service for Microsoft Active Directory
API reference
managedidentities. googleapis. com/ Domain
Memorystore
memorystore. googleapis. com/ Instance
Not available in the analysis APIs.
Memorystore for Memcached
API reference
memcache. googleapis. com/ Instance
Memorystore for Redis
API reference
redis.googleapis.com/Cluster
redis.googleapis.com/Instance
Migrate to Virtual Machines
API reference
vmmigration. googleapis. com/ CloneJob
Effective tags aren't supported.
Not available in the analysis APIs.
vmmigration. googleapis. com/ CutoverJob
Effective tags aren't supported.
Not available in the analysis APIs.
vmmigration. googleapis. com/ DatacenterConnector
Effective tags aren't supported.
Not available in the analysis APIs.
vmmigration. googleapis. com/ Group
Effective tags aren't supported.
Not available in the analysis APIs.
vmmigration. googleapis. com/ ImageImport
Not available in the analysis APIs.
vmmigration. googleapis. com/ MigratingVm
Effective tags aren't supported.
Not available in the analysis APIs.
vmmigration. googleapis. com/ Source
Effective tags aren't supported.
Not available in the analysis APIs.
vmmigration. googleapis. com/ TargetProject
Effective tags aren't supported.
Not available in the analysis APIs.
vmmigration. googleapis. com/ UtilizationReport
Effective tags aren't supported.
Not available in the analysis APIs.
Network Connectivity
API reference
networkconnectivity. googleapis. com/ Group
Effective tags aren't supported.
Not available in the analysis and search APIs.
networkconnectivity. googleapis. com/ Hub
networkconnectivity. googleapis. com/ HubRoute
networkconnectivity. googleapis. com/ InternalRange
Not available in the analysis APIs.
networkconnectivity. googleapis. com/ PolicyBasedRoute
networkconnectivity. googleapis. com/ RouteTable
networkconnectivity. googleapis. com/ Spoke
Network Management API
API reference
networkmanagement. googleapis. com/ ConnectivityTest
Network Security Integration
Network Security Integration asset change history might be incomplete. Data freshness is synchronized every 7 hours. If a sync fails, freshness is delayed until the next successful sync.
API reference
networksecurity. googleapis. com/ InterceptDeployment
Not available in the analysis APIs.
networksecurity. googleapis. com/ InterceptDeploymentGroup
Not available in the analysis APIs.
networksecurity. googleapis. com/ InterceptEndpointGroup
Not available in the analysis APIs.
networksecurity. googleapis. com/ InterceptEndpointGroupAssociation
Not available in the analysis APIs.
networksecurity. googleapis. com/ MirroringDeployment
Not available in the analysis APIs.
networksecurity. googleapis. com/ MirroringDeploymentGroup
networksecurity. googleapis. com/ MirroringEndpointGroup
Not available in the analysis APIs.
networksecurity. googleapis. com/ MirroringEndpointGroupAssociation
Not available in the analysis APIs.
Network Services API
API reference
networkservices. googleapis. com/ AuthzExtension
Not available in the analysis APIs.
networkservices. googleapis. com/ EdgeCacheKeyset
Not available in the analysis APIs.
networkservices. googleapis. com/ EdgeCacheOrigin
Not available in the analysis APIs.
networkservices. googleapis. com/ EdgeCacheService
Not available in the analysis APIs.
networkservices. googleapis. com/ EndpointPolicy
networkservices. googleapis. com/ Gateway
networkservices. googleapis. com/ GrpcRoute
networkservices. googleapis. com/ HttpRoute
networkservices. googleapis. com/ LbRouteExtension
Not available in the analysis APIs.
networkservices. googleapis. com/ LbTrafficExtension
Not available in the analysis APIs.
networkservices. googleapis. com/ Mesh
networkservices. googleapis. com/ ServiceBinding
networkservices. googleapis. com/ ServiceLbPolicy
Not available in the analysis APIs.
networkservices. googleapis. com/ TcpRoute
networkservices. googleapis. com/ TlsRoute
networkservices. googleapis. com/ WasmPlugin
Not available in the analysis APIs.
networkservices. googleapis. com/ WasmPluginVersion
Not available in the analysis APIs.
Oracle Database@Google Cloud
API reference
oracledatabase. googleapis. com/ AutonomousDatabase
Not available in the analysis APIs.
oracledatabase. googleapis. com/ CloudExadataInfrastructure
Not available in the analysis APIs.
oracledatabase. googleapis. com/ CloudVmCluster
Not available in the analysis APIs.
Organization Policy Service
API reference
orgpolicy. googleapis. com/ Policy
Not available in the analysis APIs.
Organization Policy Service v2
orgpolicy. googleapis. com/ CustomConstraint
orgpolicy. googleapis. com/ Policy
Parameter Manager
API reference
parametermanager. googleapis. com/ Parameter
Effective tags aren't supported.
Not available in the analysis and search APIs.
parametermanager. googleapis. com/ ParameterVersion
Effective tags aren't supported.
Not available in the analysis and search APIs.
Privileged Access Manager
API reference
privilegedaccessmanager. googleapis. com/ Grant
Pub/Sub
API reference
pubsub.googleapis.com/Schema
pubsub.googleapis.com/Snapshot
pubsub. googleapis. com/ Subscription
pubsub.googleapis.com/Topic
reCAPTCHA
API reference
recaptchaenterprise. googleapis. com/ FirewallPolicy
Not available in the analysis APIs.
recaptchaenterprise. googleapis. com/ Key
Not available in the analysis APIs.
Resource Manager
API reference
cloudresourcemanager. googleapis. com/ Folder
cloudresourcemanager. googleapis. com/ Lien
Not available in the analysis, export, list, and monitor APIs.
cloudresourcemanager. googleapis. com/ Organization
cloudresourcemanager. googleapis. com/ Project
Searchable attributes:
projectId
cloudresourcemanager. googleapis. com/ TagBinding
Not available in the analysis and search APIs.
In search, directly attached and effective tags can be queried and/or returned along with resources. For details, see Search for resources .
cloudresourcemanager. googleapis. com/ TagKey
cloudresourcemanager. googleapis. com/ TagValue
Retail API
API reference
retail.googleapis.com/Catalog
Secret Manager
The location field in the Secret Manager asset does not reflect the replication policy of the secret. Instead, use the replication field to get that information.
API reference
secretmanager. googleapis. com/ Secret
secretmanager. googleapis. com/ SecretVersion
Secure Source Manager
Secure Source Manager asset change history might be incomplete. Data freshness is synchronized every 7 hours. If a sync fails, freshness is delayed until the next successful sync.
API reference
securesourcemanager. googleapis. com/ Instance
Not available in the analysis APIs.
Secure Web Proxy
Secure Web Proxy asset change history might be incomplete. Data freshness is synchronized every 7 hours. If a sync fails, freshness is delayed until the next successful sync.
API reference
networksecurity. googleapis. com/ GatewaySecurityPolicy
Not available in the analysis APIs.
networksecurity. googleapis. com/ GatewaySecurityPolicyRule
Not available in the analysis APIs.
networksecurity. googleapis. com/ TlsInspectionPolicy
Not available in the analysis APIs.
networksecurity. googleapis. com/ UrlList
Not available in the analysis APIs.
Security Center Management API
API reference
securitycentermanagement. googleapis. com/ EventThreatDetectionCustomModule
securitycentermanagement. googleapis. com/ SecurityCenterService
securitycentermanagement. googleapis. com/ SecurityHealthAnalyticsCustomModule
Security Command Center
API reference
securitycenter. googleapis. com/ BigQueryExport
Not available in the analysis APIs.
securitycenter. googleapis. com/ ContainerThreatDetectionSettings
Not available in the analysis APIs.
securitycenter. googleapis. com/ EventThreatDetectionSettings
Not available in the analysis APIs.
securitycenter. googleapis. com/ MuteConfig
Not available in the analysis APIs.
securitycenter. googleapis. com/ NotificationConfig
Not available in the analysis APIs.
securitycenter. googleapis. com/ ResourceValueConfig
Not available in the analysis APIs.
securitycenter. googleapis. com/ SecurityHealthAnalyticsSettings
Not available in the analysis APIs.
securitycenter. googleapis. com/ VirtualMachineThreatDetectionSettings
Not available in the analysis APIs.
securitycenter. googleapis. com/ WebSecurityScannerSettings
Not available in the analysis APIs.
Security Posture API
API reference
securityposture. googleapis. com/ Posture
securityposture. googleapis. com/ PostureDeployment
Sensitive Data Protection
API reference
dlp. googleapis. com/ DeidentifyTemplate
dlp. googleapis. com/ DiscoveryConfig
dlp.googleapis.com/DlpJob
dlp. googleapis. com/ InspectTemplate
dlp.googleapis.com/JobTrigger
dlp. googleapis. com/ StoredInfoType
Serverless VPC Access
API reference
vpcaccess. googleapis. com/ Connector
Service Directory
API reference
servicedirectory. googleapis. com/ Endpoint
servicedirectory. googleapis. com/ Namespace
servicedirectory. googleapis. com/ Service
Service Management
Service Management asset change history might be incomplete. Data freshness is synchronized every 7 hours. If a sync fails, freshness is delayed until the next successful sync.
API reference
servicemanagement. googleapis. com/ ManagedService
servicemanagement. googleapis. com/ Service
Effective tags aren't supported.
Not available in the analysis APIs.
Service Networking
API reference
servicenetworking. googleapis. com/ Connection
Service Usage
Service Usage asset change history might be incomplete. The config field in the metadata is not supported yet.
API reference
serviceusage. googleapis. com/ Service
Spanner
API reference
spanner.googleapis.com/Backup
spanner. googleapis. com/ Database
spanner. googleapis. com/ Instance
spanner. googleapis. com/ InstanceConfig
spanner. googleapis. com/ InstancePartition
Speech-to-Text
API reference
speech.googleapis.com/Config
speech. googleapis. com/ CustomClass
speech.googleapis.com/Endpoint
Not available in the analysis APIs.
speech.googleapis.com/Model
Not available in the analysis APIs.
speech. googleapis. com/ PhraseSet
speech. googleapis. com/ Recognizer
Storage Insights
API reference
storageinsights. googleapis. com/ ReportConfig
storageinsights. googleapis. com/ ReportDetail
Storage Transfer Service
API reference
storagetransfer. googleapis. com/ TransferJob
Not available in the analysis APIs.
Transcoder API
API reference
transcoder.googleapis.com/Job
transcoder. googleapis. com/ JobTemplate
Vertex AI
Vertex AI asset change history might be incomplete. Data freshness is synchronized every 7 hours. If a sync fails, freshness is delayed until the next successful sync. Some datasets' metadata (for example, the TABLE data type) could be stale due to an ongoing data issue.
API reference
aiplatform. googleapis. com/ BatchPredictionJob
aiplatform. googleapis. com/ CachedContent
aiplatform. googleapis. com/ CustomJob
aiplatform. googleapis. com/ DataLabelingJob
aiplatform. googleapis. com/ Dataset
aiplatform. googleapis. com/ Endpoint
The deployedModels field is not populated.
aiplatform. googleapis. com/ FeatureGroup
Not available in the analysis APIs.
aiplatform. googleapis. com/ FeatureOnlineStore
Not available in the analysis APIs.
aiplatform. googleapis. com/ Featurestore
aiplatform. googleapis. com/ HyperparameterTuningJob
aiplatform. googleapis. com/ Index
aiplatform. googleapis. com/ IndexEndpoint
aiplatform. googleapis. com/ MetadataStore
aiplatform. googleapis. com/ Model
The deployedModels field is not populated.
aiplatform. googleapis. com/ ModelDeploymentMonitoringJob
aiplatform. googleapis. com/ NasJob
aiplatform. googleapis. com/ NotebookExecutionJob
aiplatform. googleapis. com/ NotebookRuntime
Effective tags aren't supported.
aiplatform. googleapis. com/ NotebookRuntimeTemplate
Effective tags aren't supported.
aiplatform. googleapis. com/ PipelineJob
aiplatform. googleapis. com/ ReasoningEngine
Not available in the analysis APIs.
aiplatform. googleapis. com/ SpecialistPool
aiplatform. googleapis. com/ Tensorboard
aiplatform. googleapis. com/ TrainingPipeline
aiplatform. googleapis. com/ TuningJob
Not available in the analysis APIs.
Vertex AI Workbench
API reference
notebooks. googleapis. com/ Instance
Not available in the analysis APIs.
Video Stitcher API
API reference
videostitcher. googleapis. com/ CdnKey
Not available in the analysis APIs.
videostitcher. googleapis. com/ LiveConfig
Not available in the analysis APIs.
videostitcher. googleapis. com/ Slate
Not available in the analysis APIs.
videostitcher. googleapis. com/ VodConfig
Not available in the analysis APIs.
Web Security Scanner
API reference
websecurityscanner. googleapis. com/ ScanConfig
Not available in the analysis APIs.
Workflows
Workflows asset change history might be incomplete. Data freshness is synchronized every 7 hours. If a sync fails, freshness is delayed until the next successful sync.
API reference
workflows. googleapis. com/ Workflow
Policy types
Cloud Asset Inventory uses the following asset types for the ACCESS_POLICY ,
IAM_POLICY , and ORG_POLICY
content types .
Service
Asset type
Access policy (VPC Service Controls policy)
API reference
Supported policy parent
cloudresourcemanager. googleapis. com/ Organization
Not available in the analysis APIs.
Supported policy scope
cloudresourcemanager. googleapis. com/ Folder
Not available in the analysis APIs.
cloudresourcemanager. googleapis. com/ Organization
Not available in the analysis APIs.
cloudresourcemanager. googleapis. com/ Project
Not available in the analysis APIs.
IAM policy
Data can be delayed by approximately 36 hours.
API reference
Supported resource types that IAM policies can be
attached to:
All asset types in
supported resource types .
All policy types in this table except for IAM
policy itself.
The following IAP resource types:
iap.googleapis.com/Tunnel
Not available in the analysis and search APIs.
iap. googleapis. com/ TunnelInstance
Not available in the analysis and search APIs.
iap.googleapis.com/TunnelZone
Not available in the analysis and search APIs.
iap.googleapis.com/Web
Not available in the analysis and search APIs.
iap.googleapis.com/WebService
Not available in the analysis and search APIs.
iap. googleapis. com/ WebServiceVersion
Not available in the analysis and search APIs.
iap.googleapis.com/WebType
Not available in the analysis and search APIs.
Organization policy
API reference
Supported resource types that organization policies can be
attached to:
cloudresourcemanager. googleapis. com/ Folder
cloudresourcemanager. googleapis. com/ Organization
cloudresourcemanager. googleapis. com/ Project
Runtime information types
Cloud Asset Inventory uses the following asset types for the OS_INVENTORY
content type .
Service
Asset type
OS inventory
Provides information on the operating system, installed packages, and
available package updates for an instance. Learn more about
OS inventory management .
compute. googleapis. com/ Instance
Only available in analysis, list, and search APIs.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
