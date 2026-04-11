---
title: "Resource attributes for IAM Conditions \_|\_ Identity and Access Management\
  \ (IAM) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/conditions-resource-attributes
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/roles-permissions/cloudlocationfinder
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/conditions-resource-attributes
  title: "Resource attributes for IAM Conditions \_|\_ Identity and Access Management\
    \ (IAM) \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
IAM
Reference
Send feedback
Resource attributes for IAM Conditions
Stay organized with collections
Save and categorize content based on your preferences.
This topic contains a list of values that can be used for
resource attributes in a
condition, including string values for resource service, resource type, and the
format for resource name strings.
You can use resource attributes to change the scope of the grant provided by a
role binding. When a role contains permissions that apply to different kinds of
resources, a condition can grant a subset of the role's permissions based on the
resource service, resource type, and resource name.
Resource attributes are available for the Google Cloud services and resource
types that are listed on this page. Other services and resource types do not
recognize resource attributes.
For more information about Identity and Access Management (IAM) Conditions, see the
following:
Conditions overview
Managing conditional role bindings
Resource service values
The following table lists the values that the resource service attribute can
contain.
Resource service value
REST reference
apigee.googleapis.com
API reference
apihub.googleapis.com
API reference
backupdr.googleapis.com
API reference
bigquery.googleapis.com
API reference
bigqueryreservation.googleapis.com
API reference
bigtableadmin.googleapis.com
API reference
binaryauthorization.googleapis.com
API reference
ces.googleapis.com
API reference
clouddeploy.googleapis.com
API reference
cloudkms.googleapis.com
API reference
cloudresourcemanager.googleapis.com
API reference
compute.googleapis.com
API reference
container.googleapis.com
API reference
connectors.googleapis.com
API reference
dataform.googleapis.com
API reference
firestore.googleapis.com
API reference
iap.googleapis.com
API reference
integrations.googleapis.com
API reference
logging.googleapis.com
API reference
managedkafka.googleapis.com
API reference
networksecurity.googleapis.com
API reference
parametermanager.googleapis.com
API reference
pubsublite.googleapis.com
API reference
secretmanager.googleapis.com
API reference
spanner.googleapis.com
API reference
sqladmin.googleapis.com
API reference
storage.googleapis.com
API reference
Resource type values
The following table lists the values that the resource type attribute can
contain.
Resource type value
Reference
apigee.googleapis.com/ApiProduct
Read more
apigee.googleapis.com/ApiProductAttribute
Read more
apigee.googleapis.com/Cache
Read more
apigee.googleapis.com/Developer
Read more
apigee.googleapis.com/DeveloperApp
Read more
apigee.googleapis.com/DeveloperAppAttribute
Read more
apigee.googleapis.com/DeveloperAttribute
Read more
apigee.googleapis.com/Export
Read more
apigee.googleapis.com/FlowHook
Read more
apigee.googleapis.com/KeyStore
Read more
apigee.googleapis.com/KeyStoreAlias
Read more
apigee.googleapis.com/KeyValueEntry
Read more
apigee.googleapis.com/KeyValueMap
Read more
apigee.googleapis.com/Proxy
Read more
apigee.googleapis.com/ProxyRevision
Read more
apigee.googleapis.com/Query
Read more
apigee.googleapis.com/RatePlan
Read more
apigee.googleapis.com/Reference
Read more
apigee.googleapis.com/SharedFlow
Read more
apigee.googleapis.com/SharedFlowRevision
Read more
apigee.googleapis.com/TargetServer
Read more
apigee.googleapis.com/TraceSession
Read more
apihub.googleapis.com/Api
Read more
apihub.googleapis.com/Deployment
Read more
apihub.googleapis.com/Version
Read more
apihub.googleapis.com/Spec
Read more
apihub.googleapis.com/ApiOperation
Read more
apihub.googleapis.com/Definition
Read more
backupdr.googleapis.com/BackupVaults
Read more
bigquery.googleapis.com/Dataset
Read more
bigquery.googleapis.com/Model
Read more
bigquery.googleapis.com/Routine
Read more
bigquery.googleapis.com/Table
Read more
bigqueryreservation.googleapis.com/Assignment
Read more
bigqueryreservation.googleapis.com/BiReservation
Read more
bigqueryreservation.googleapis.com/CapacityCommitment
Read more
bigqueryreservation.googleapis.com/Location
Read more
bigqueryreservation.googleapis.com/Reservation
Read more
bigtableadmin.googleapis.com/AppProfile
Read more
bigtableadmin.googleapis.com/Backup
Read more
bigtableadmin.googleapis.com/Cluster
Read more
bigtableadmin.googleapis.com/Instance
Read more
bigtableadmin.googleapis.com/Table
Read more
binaryauthorization.googleapis.com/Attestor
Read more
binaryauthorization.googleapis.com/ContinuousValidationConfig
Read more
binaryauthorization.googleapis.com/Policy
Read more
ces.googleapis.com/App
Read more
ces.googleapis.com/Operation
Read more
cloud.googleapis.com/Location 1
Read more
cloudkms.googleapis.com/CryptoKey
Read more
cloudkms.googleapis.com/CryptoKeyVersion
Read more
cloudkms.googleapis.com/KeyRing
Read more
cloudresourcemanager.googleapis.com/Project 2
Read more
compute.googleapis.com/BackendService
Read more
compute.googleapis.com/Disk
Read more
compute.googleapis.com/Firewall
Read more
compute.googleapis.com/ForwardingRule
Read more
compute.googleapis.com/GlobalForwardingRule
Read more
compute.googleapis.com/Image
Read more
compute.googleapis.com/Instance
Read more
compute.googleapis.com/InstanceTemplate
Read more
compute.googleapis.com/Snapshot
Read more
compute.googleapis.com/TargetHttpProxy
Read more
compute.googleapis.com/TargetHttpsProxy
Read more
compute.googleapis.com/TargetSslProxy
Read more
compute.googleapis.com/TargetTcpProxy
Read more
connectors.googleapis.com/Connection
Read more
connectors.googleapis.com/ConnectionSchemaMetadata
Read more
connectors.googleapis.com/EndpointAttachment
Read more
connectors.googleapis.com/EventSubscription
Read more
connectors.googleapis.com/ManagedZone
Read more
container.googleapis.com/Clusters
Read more
dataform.googleapis.com/CompilationResult
Read more
dataform.googleapis.com/Location
Read more
dataform.googleapis.com/ReleaseConfig
Read more
dataform.googleapis.com/Repository
Read more
dataform.googleapis.com/WorkflowConfig
Read more
dataform.googleapis.com/WorkflowInvocation
Read more
dataform.googleapis.com/Workspace
Read more
firestore.googleapis.com/Database
Read more
iap.googleapis.com/Tunnel
Read more
iap.googleapis.com/TunnelInstance
Read more
iap.googleapis.com/TunnelZone
Read more
iap.googleapis.com/Web
Read more
iap.googleapis.com/WebService
Read more
iap.googleapis.com/WebServiceVersion
Read more
iap.googleapis.com/WebType
Read more
integrations.googleapis.com/AuthConfig
Read more
integrations.googleapis.com/Execution
Read more
integrations.googleapis.com/Integration
Read more
integrations.googleapis.com/IntegrationVersion
Read more
integrations.googleapis.com/Location
n/a
integrations.googleapis.com/Suspension
Read more
logging.googleapis.com/LogBucket
Read more
logging.googleapis.com/LogView
Read more
managedkafka.googleapis.com/Cluster
Read more
managedkafka.googleapis.com/ConsumerGroup
Read more
managedkafka.googleapis.com/Operation
Read more
managedkafka.googleapis.com/Topic
Read more
networksecurity.googleapis.com/AddressGroup
Read more
networksecurity.googleapis.com/InterceptDeployment
Read more
networksecurity.googleapis.com/InterceptDeploymentGroup
Read more
networksecurity.googleapis.com/InterceptEndpointGroup
Read more
networksecurity.googleapis.com/InterceptEndpointGroupAssociation
Read more
networksecurity.googleapis.com/MirroringDeployment
Read more
networksecurity.googleapis.com/MirroringDeploymentGroup
Read more
networksecurity.googleapis.com/MirroringEndpointGroup
Read more
networksecurity.googleapis.com/MirroringEndpointGroupAssociation
Read more
parametermanager.googleapis.com/Parameter
Read more
parametermanager.googleapis.com/ParameterVersion
Read more
pubsublite.googleapis.com/Location
Read more
pubsublite.googleapis.com/Subscription
Read more
pubsublite.googleapis.com/Topic
Read more
secretmanager.googleapis.com/Secret
Read more
secretmanager.googleapis.com/SecretVersion
Read more
spanner.googleapis.com/Backup
Read more
spanner.googleapis.com/Database
Read more
spanner.googleapis.com/Instance
Read more
sqladmin.googleapis.com/BackupRun
Read more
sqladmin.googleapis.com/Instance
Read more
storage.googleapis.com/Bucket
Read more
storage.googleapis.com/ManagedFolder
Read more
storage.googleapis.com/Object
Read more
1 Cloud Key Management Service uses this resource type as the parent of
key ring resources.
2 Apigee uses this resource type as the parent of
any resource that belongs to an Apigee organization.
Resource name format
The following table lists the format of each type of resource name attribute.
Note: Ensure that you use the correct identifier for your project. Project IDs
are alphanumeric, and project numbers are numeric. You can't substitute the
project ID for the project number, or the project number for the project ID. For
more information, see Creating and managing
projects .
Resource reference
Resource name format template
Apigee API product attributes
organizations/ organization-name /apiproducts/ product-id /attributes/ attribute-id
Apigee API products
organizations/ organization-name /apiproducts/ product-id
Apigee API proxies
organizations/ organization-name /apis/ proxy-id
Apigee API proxy key-value map entries
organizations/ organization-name /api/ proxy-id /keyvaluemaps/ keyvaluemap-id /entries/ entry-id
Apigee API proxy key-value maps
organizations/ organization-name /apis/ proxy-id /keyvaluemaps/ key-value-map-id
Apigee API proxy revisions
organizations/ organization-name /apis/ proxy-id /revisions/ revision-id
Apigee caches
organizations/ organization-name /environments/ environment-id /caches/ cache-id
Apigee developer app attributes
organizations/ organization-name /developers/ developer-id /apps/ app-id /attributes/ attribute-id
Apigee developer apps
organizations/ organization-name /developers/ developer-id /apps/ app-id
Apigee developer attributes
organizations/ organization-name /developers/ developer-id /attributes/ attribute-id
Apigee developers
organizations/ organization-name /developers/ developer-id
Apigee environment key-value map entries
organizations/ organization-name /environments/ environment-id /keyvaluemaps/ keyvaluemap-id /entries/ entry-id
Apigee environment key-value maps
organizations/ organization-name /environments/ environment /keyvaluemaps/ key-value-map-id
Apigee exports
organizations/ organization-name /environments/ environment-id /analytics/exports/ export-id
Apigee flow hooks
organizations/ organization-name /environments/ environment-id /flowhooks/ flowhook-id
Apigee keystore aliases
organizations/ organization-name /environments/ environment-id /keystores/ keystore-id /aliases/ alias-id
Apigee keystores
organizations/ organization-name /environments/ environment-id /keystores/ keystore-id
Apigee queries
organizations/ organization-name /environments/ environment-id /queries/ query-id
Apigee rate plans
organizations/ organization-name /apiproducts/ product-id /rateplans/ rate-plan-id
Apigee references
organizations/ organization-name /environments/ environment-id /references/ reference-id
Apigee shared flow revisions
organizations/ organization-name /sharedflows/ shared-flow-id /revisions/ revision-id
Apigee shared flows
organizations/ organization-name /sharedflows/ shared-flow-id
Apigee target servers
organizations/ organization-name /environments/ environment-id /targetservers/ targetserver-id
Apigee trace (debug) sessions
organizations/ organization-name /environments/ environment-id /apis/ proxy-id /revisions/ revision-id /debugsessions/ session-id
Apigee API Hub apis
projects/ project-id /locations/ location-id /apis/ api-id
Apigee API Hub deployments
projects/ project-id /locations/ location-id /deployments/ deployment-id
Apigee API Hub versions
projects/ project-id /locations/ location-id /apis/ api-id /versions/ version-id
Apigee API Hub specs
projects/ project-id /locations/ location-id /apis/ api-id /versions/ version-id /specs/ spec-id
Apigee API Hub operations
projects/ project-id /locations/ location-id /apis/ api-id /versions/ version-id /operations/ operation-id
Apigee API Hub definitions
projects/ project-id /locations/ location-id /apis/ api-id /versions/ version-id /definitions/ definition-id
Backup and DR Service backupVaults
science
projects/ project-id /locations/ location-id /backupVaults/ backup-vault-id
BigQuery datasets
projects/ project-id /datasets/ dataset-id
BigQuery models
projects/ project-id /datasets/ dataset-id /models/ model-id
BigQuery routines
projects/ project-id /datasets/ dataset-id /routines/ routine-id
BigQuery tables
projects/ project-id /datasets/ dataset-id /tables/ table-id
BigQuery Reservation API assignments
projects/ project-id /locations/ location-id /reservations/ reservation-id /assignments/ assignment-id
BigQuery Reservation API BI reservations
projects/ project-id /locations/ location-id /biReservation
BigQuery Reservation API capacity commitments
projects/ project-id /locations/ location-id /capacityCommitments/ capacity-commitment-id
BigQuery Reservation API locations
projects/ project-id /locations/ location-id
BigQuery Reservation API reservations
projects/ project-id /locations/ location-id /reservations/ reservation-id
Binary Authorization attestors
projects/ project-number /attestors/ attestor-id
Binary Authorization continuous validation configs
projects/ project-number /continuousValidationConfig
Binary Authorization policies
projects/ project-number /policy
Customer Experience Agent Studio apps
projects/ project-id /locations/ location-id /apps/ app-id
Customer Experience Agent Studio operations
projects/ project-id /locations/ location-id /operations/ operation-id
Bigtable appProfiles
projects/ project-id /instances/ instance-id /appProfiles/ appProfile-id
Bigtable backups
projects/ project-id /instances/ instance-id /clusters/ cluster-id /backups/ backup-id
Bigtable clusters
projects/ project-id /instances/ instance-id /clusters/ cluster-id
Bigtable instances
projects/ project-id /instances/ instance-id
Bigtable tables
projects/ project-id /instances/ instance-id /tables/ table-id
Cloud Deploy automation runs
projects/ project-id /locations/ location-id /deliveryPipelines/ delivery-pipeline-id /automationRuns/ automation-run-id
Cloud Deploy automations
projects/ project-id /locations/ location-id /deliveryPipelines/ delivery-pipeline-id /automations/ automation-id
Cloud Deploy custom target types
projects/ project-id /locations/ location-id /customTargetTypes/ custom-target-type-id
Cloud Deploy delivery pipelines
projects/ project-id /locations/ location-id /deliveryPipelines/ delivery-pipeline-id
Cloud Deploy job runs
projects/ project-id /locations/ location-id /deliveryPipelines/ delivery-pipeline-id /releases/ release-id /rollouts/ rollout-id /jobRuns/ job-run-id
Cloud Deploy releases
projects/ project-id /locations/ location-id /deliveryPipelines/ delivery-pipeline-id /releases/ release-id
Cloud Deploy rollouts
projects/ project-id /locations/ location-id /deliveryPipelines/ delivery-pipeline-id /releases/ release-id /rollouts/ rollout-id
Cloud Deploy targets
projects/ project-id /locations/ location-id /targets/ target-id
Firestore databases
projects/ project-id /databases/ database-id
Cloud NGFW address groups
projects/ project-number /locations/ location /addressGroups/ address-group-name
organizations/ organization-id /locations/ location /addressGroups/ address-group-name
Network Security Integration intercept deployment groups
projects/ project-number /locations/ location /interceptDeploymentGroups/ intercept-deployment-group-id
Network Security Integration intercept deployments
projects/ project-number /locations/ location /interceptDeployments/ intercept-deployment-id
Network Security Integration intercept endpoint group associations
projects/ project-number /locations/ location /interceptEndpointGroupAssociations/ intercept-endpoint-group-association-id
Network Security Integration intercept endpoint groups
projects/ project-number /locations/ location /interceptEndpoints/ intercept-endpoint-group-id
Network Security Integration mirroring deployment groups
projects/ project-number /locations/ location /mirroringDeploymentGroups/ mirroring-deployment-group-id
Network Security Integration mirroring deployments
projects/ project-number /locations/ location /mirroringDeployments/ mirroring-deployment-id
Network Security Integration mirroring endpoint group associations
projects/ project-number /locations/ location /mirroringEndpointGroupAssociations/ mirroring-endpoint-group-association-id
Network Security Integration mirroring endpoint groups
projects/ project-number /locations/ location /mirroringEndpoints/ mirroring-endpoint-group-id
Cloud Key Management Service crypto keys
projects/ project-id /locations/ location-id /keyRings/ keyring-id /cryptoKeys/ cryptokey-id
Cloud Key Management Service crypto key versions
projects/ project-id /locations/ location-id /keyRings/ keyring-id /cryptoKeys/ cryptokey-id /cryptoKeyVersions/ cryptokeyversion-id
Cloud Key Management Service key rings
projects/ project-id /locations/ location-id /keyRings/ keyring-id
Cloud Logging log buckets
projects/ project-id /locations/ location-id /buckets/ bucket-id
Cloud Logging log views
projects/ project-id /locations/ location-id /buckets/ bucket-id /views/ view-id
Spanner backups
projects/ project-id /instances/ instance-id /backups/ backup-id
Spanner databases
projects/ project-id /instances/ instance-id /databases/ database-id
Spanner instances
projects/ project-id /instances/ instance-id
Cloud SQL backup runs
projects/ project-id /instances/ instance-id /backupRuns/ backup-id
Cloud SQL instances
projects/ project-id /instances/ instance-id
Cloud Storage buckets 1
projects/_/buckets/ bucket-name
Cloud Storage managed folders 1, 2
projects/_/buckets/ bucket-name /managedFolders/ managed-folder-name
Cloud Storage objects 1, 3
projects/_/buckets/ bucket-name /objects/ object-name
Compute Engine global backend services
projects/ project-id /global/backendServices/ backend-service-id
Compute Engine regional backend services
projects/ project-id /regions/ region-id /backendServices/ backend-service-id
Compute Engine firewalls
projects/ project-id /global/firewalls/ firewall-id
Compute Engine global forwarding rules
projects/ project-id /global/forwardingRules/ forwarding-rule-id
Compute Engine regional forwarding rules
projects/ project-id /regions/ region-id /forwardingRules/ forwarding-rule-id
Compute Engine images
projects/ project-id /global/images/ image-id
Compute Engine instance templates
projects/ project-id /global/instanceTemplates/ instance-template-id
Compute Engine instances
projects/ project-id /zones/ zone-id /instances/ instance-id
Compute Engine regional persistent disks
projects/ project-id /regions/ region-id /disks/ disk-id
Compute Engine zonal persistent disks
projects/ project-id /zones/ zone-id /disks/ disk-id
Compute Engine snapshots
projects/ project-id /global/snapshots/ snapshot-id
Compute Engine global target HTTP proxies
projects/ project-id /global/targetHttpProxies/ target-http-proxy-id
Compute Engine regional target HTTP proxies
projects/ project-id /regions/ region-id /targetHttpProxies/ target-http-proxy-id
Compute Engine global target HTTPS proxies
projects/ project-id /global/targetHttpsProxies/ target-https-proxy-id
Compute Engine regional target HTTPS proxies
projects/ project-id /regions/ region-id /targetHttpsProxies/ target-https-proxy-id
Compute Engine target SSL proxies
projects/ project-id /global/targetSslProxies/ target-ssl-proxy-id
Compute Engine target TCP proxies
projects/ project-id /global/targetTcpProxies/ target-tcp-proxy-id
Google Kubernetes Engine zonal clusters
projects/ project-id /zones/ zone /clusters/ cluster-id
Google Kubernetes Engine regional clusters
projects/ project-id /locations/ location /clusters/ cluster-id
Dataform compilation results
projects/ project-id /locations/ location /repositories/ repository /compilationResults/ compilation-result
Dataform locations
projects/ project-id /locations/ location
Dataform release configs
projects/ project-id /locations/ location /repositories/ repository /releaseConfigs/ release-config
Dataform repositories
projects/ project-id /locations/ location /repositories/ repository
Dataform workflow configs
projects/ project-id /locations/ location /repositories/ repository /workflowConfigs/ workflow-config
Dataform workflow invocations
projects/ project-id /locations/ location /repositories/ repository /workflowInvocations/ workflow-invocation
Dataform workspaces
projects/ project-id /locations/ location /repositories/ repository /workspaces/ workspace
Integration Connectors connections
projects/ project-id /locations/ location /connections/ connection-name
Integration Connectors connection schema metadata
projects/ project-id /locations/ location /connections/ connection-name /connectionSchemaMetadata
Integration Connectors endpoint attachments
projects/ project-id /locations/ location /endpointAttachments/ endpoint-attachment-name
Integration Connectors event subscriptions
projects/ project-id /locations/ location /eventSubscriptions/ event-subscription-name
Integration Connectors managed zones
projects/ project-id /locations/global/managedZones/ managed-zone-name
Google Cloud Managed Service for Apache Kafka clusters
projects/ project-number /locations/ location /clusters/ cluster-name
Google Cloud Managed Service for Apache Kafka consumer groups
projects/ project-number /locations/ location /clusters/ cluster-name /consumerGroups/ consumer-group
Google Cloud Managed Service for Apache Kafka operations
projects/ project-number /locations/ location /operations/ operation
Google Cloud Managed Service for Apache Kafka topics
projects/ project-number /locations/ location /clusters/ cluster-name /topics/ topic-name
Parameter Manager parameters
projects/ project-number /locations/ location /parameters/ parameter-id
Parameter Manager parameter versions
projects/ project-number /locations/ location /parameters/ parameter-id /versions/ version-id
Pub/Sub Lite locations
projects/ project-number /locations/ location
Pub/Sub Lite subscriptions
projects/ project-number /locations/ location /subscriptions/ subscription-id
Pub/Sub Lite topics
projects/ project-number /locations/ location /topics/ topic-id
Resource Manager organizations 4
organizations/ organization-name
Secret Manager secrets
projects/ project-number /secrets/ secret-id
Secret Manager secret versions 5
projects/ project-number /secrets/ secret-id /versions/ secret-version
1 For Cloud Storage, resource names contain an underscore ( _ )
rather than a project ID. You cannot replace the underscore with a project ID,
project name, or project number.
2 Use the entire managed folder name, including forward
slashes. In Cloud Storage, these characters are part of the managed folder
name , not path separators.
3 Use the entire object name, including forward slashes. In
Cloud Storage, these characters are part of the object name ,
not path separators.
4 Apigee uses this format when you list any type of
resource that belongs to an Apigee organization.
5 If a condition evaluates the resource name for a secret version,
the secret version in the request must exactly match the secret version in the
condition for the condition to be satisfied. For example, if the version in the
condition is latest , only a request with the version latest satisfies the
condition; a request with the version 3 does not satisfy the condition, even
if 3 is the latest version.
Resource tags
You can attach tags to organizations, projects, and
folders. Any Google Cloud resource can inherit tags from these higher-level
resources.
You can use a few different types of identifiers to refer to tag keys and
values:
A permanent ID , which is globally unique and can never be reused. For example, a tag
key could have the permanent ID tagKeys/123456789012 , and a tag value could have
the permanent ID tagValues/567890123456 .
A short name . The short name for each key must be unique within the project or
organization under which the key is defined, and the short name for each value must be unique
for its associated key. For example, a tag key could have the short name env , and
a tag value could have the short name prod .
A namespaced name , which adds your organization's numeric ID or project's ID to the
short name of a tag key. For example, a tag key created for an organization could have the
namespaced name 123456789012/env . To learn how to get your organization ID, see
Getting
your organization resource ID . A tag key created for a project could have the namespaced
name myproject/env . To learn how to get your project ID, see
Identifying
projects .
The specific identifiers depend on the tag keys and values that you have created
for your organization. To learn how to list the tag keys and values that are
available to you, see Listing tag keys and
Listing tag values .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
