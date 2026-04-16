---
title: "App Hub supported resources \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/app-hub/docs/supported-resources
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/app-hub/docs/manage-applications
source_metadata:
  url: https://docs.cloud.google.com/app-hub/docs/supported-resources
  title: "App Hub supported resources \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
App Hub
Guides
Send feedback
App Hub supported resources
Stay organized with collections
Save and categorize content based on your preferences.
App Hub supports the global and regional Google Cloud resources listed
on this page that you can register as services or workloads in App Hub
applications. To programmatically register these underlying Google Cloud
resources, you must use the correct Uniform Resource Identifier (URI) format as
defined in the Cloud Asset Inventory documentation .
You can monitor your applications, services, and workloads. For more information
on this telemetry data, see
View application telemetry .
Important: When infrastructure resources with App Hub support are
created or destroyed, the resource's Service metadata, specifically the
resource URIs , are
automatically ingested into App Hub. This process lets
App Hub maintain up-to-date information and improves the application
creation and management experience. This metadata ingestion is an always-on
process, and the ingested metadata is only accessible when you explicitly
enable App Hub.
Services
This section lists all the Google Cloud resources that App Hub supports
as application components and that you can register as
services in your applications.
Google Cloud product
Infrastructure resource
Registration type
URI format
Client App Manager
clientappmanager.googleapis.com/ClientApp
( Preview )
Exclusive
Firebase
firebaseapphosting.googleapis.com/Backend
( Preview )
Exclusive
Mesh Configuration
networking.istio.io/VirtualService
Exclusive
Vertex AI
API reference
aiplatform.googleapis.com/Dataset
Exclusive
//aiplatform.googleapis.com/projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET
aiplatform.googleapis.com/Endpoint
Exclusive
//aiplatform.googleapis.com/projects/ PROJECT_ID /locations/ LOCATION /endpoints/ ENDPOINT
aiplatform.googleapis.com/FeatureOnlineStore
( Preview )
Exclusive
//aiplatform.googleapis.com/projects/ PROJECT_ID /locations/ LOCATION /featureOnlineStores/ FeatureOnlineStore
aiplatform.googleapis.com/Featurestore
Exclusive
//aiplatform.googleapis.com/projects/ PROJECT_ID /locations/ LOCATION /featurestores/ FEATURESTORE
aiplatform.googleapis.com/MetadataStore
Exclusive
//aiplatform.googleapis.com/projects/ PROJECT_ID /locations/ LOCATION /metadataStores/ METADATA_STORE
aiplatform.googleapis.com/Model
Exclusive
//aiplatform.googleapis.com/projects/ PROJECT_ID /locations/ LOCATION /models/ MODEL
aiplatform.googleapis.com/NotebookExecutionJob
Exclusive
//aiplatform.googleapis.com/projects/ PROJECT_ID /locations/ LOCATION /notebookExecutionJobs/ NOTEBOOK_EXECUTION_JOB
aiplatform.googleapis.com/NotebookRuntime
Exclusive
//aiplatform.googleapis.com/projects/ PROJECT_ID /locations/ LOCATION /notebookRuntimes/ NOTEBOOK_RUNTIME
aiplatform.googleapis.com/PersistentResource
( Preview )
Exclusive
aiplatform.googleapis.com/Tensorboard
( Preview )
Exclusive
//aiplatform.googleapis.com/projects/ PROJECT_ID /locations/ LOCATION /tensorboards/ TENSORBOARD
AlloyDB for PostgreSQL
API reference
alloydb.googleapis.com/Cluster
Exclusive
//alloydb.googleapis.com/projects/ PROJECT_ID /locations/ LOCATION /clusters/ CLUSTER
alloydb.googleapis.com/Instance
Exclusive
//alloydb.googleapis.com/projects/ PROJECT_ID /locations/ LOCATION /clusters/ CLUSTER /instances/ INSTANCE
API Gateway
API reference
apigateway.googleapis.com/Api
( Preview )
Exclusive
//apigateway.googleapis.com/projects/ PROJECT_NUMBER /locations/ LOCATION /apis/ API
apigateway.googleapis.com/Gateway
( Preview )
Exclusive
//apigateway.googleapis.com/projects/ PROJECT_NUMBER /locations/ LOCATION /gateways/ GATEWAY
Bigtable
bigtableadmin.googleapis.com/AuthorizedView
( Preview )
Exclusive
bigtableadmin.googleapis.com/Cluster
Exclusive
//bigtable.googleapis.com/projects/ PROJECT_ID /instances/ INSTANCE /clusters/ CLUSTER
bigtableadmin.googleapis.com/Instance
Exclusive
//bigtable.googleapis.com/projects/ PROJECT_ID /instances/ INSTANCE
bigtableadmin.googleapis.com/LogicalView
( Preview )
Exclusive
bigtableadmin.googleapis.com/Table
( Preview )
Exclusive
//bigtable.googleapis.com/projects/ PROJECT_ID /instances/ INSTANCE /tables/ TABLE
Cloud Build
API reference
cloudbuild.googleapis.com/Connection
Exclusive
//cloudbuild.googleapis.com/projects/ PROJECT_ID /locations/ LOCATION /connections/ CONNECTION
cloudbuild.googleapis.com/Installation
( Preview )
Exclusive
Certificate Manager
API reference
certificatemanager.googleapis.com/Certificate
( Preview )
Exclusive
//certificatemanager.googleapis.com/projects/ PROJECT_ID /locations/ REGION /certificates/ CERTIFICATE_NAME
certificatemanager.googleapis.com/CertificateMap
( Preview )
Exclusive
//certificatemanager.googleapis.com/projects/ PROJECT_ID /locations/global/certificateMaps/ CERTIFICATE_MAP_NAME
Cloud Run
API reference
run.googleapis.com/Service
Exclusive
//run.googleapis.com/projects/ PROJECT_ID /locations/ LOCATION /services/ SERVICE
Cloud Tasks
API reference
cloudtasks.googleapis.com/Queue
( Preview )
Exclusive
//cloudtasks.googleapis.com/projects/ PROJECT_NUMBER /locations/ LOCATION /queues/ QUEUE
Cloud Data Fusion
API reference
datafusion.googleapis.com/Instance
Exclusive
//datafusion.googleapis.com/projects/ PROJECT_ID /locations/ LOCATION /instances/ INSTANCE
Dataform
API reference
dataform.googleapis.com/Repository
( Preview )
Exclusive
//dataform.googleapis.com/projects/ PROJECT_ID /locations/ LOCATION /repositories/ REPOSITORY
Dataproc Metastore
API reference
metastore.googleapis.com/Service
Exclusive
//metastore.googleapis.com/projects/ PROJECT_ID /locations/ LOCATION /services/ SERVICE
Datastream
API reference
datastream.googleapis.com/Stream
( Preview )
Exclusive
//datastream.googleapis.com/projects/ PROJECT_ID /locations/ LOCATION /streams/ STREAM
Cloud Deploy
API reference
clouddeploy.googleapis.com/CustomTargetType
Exclusive
//clouddeploy.googleapis.com/projects/ PROJECT_ID /locations/ LOCATION /customTargetTypes/ CUSTOM_TARGET_TYPE
clouddeploy.googleapis.com/DeliveryPipeline
Exclusive
//clouddeploy.googleapis.com/projects/ PROJECT_ID /locations/ LOCATION /deliveryPipelines/ DELIVERY_PIPELINE
clouddeploy.googleapis.com/Release
Exclusive
//clouddeploy.googleapis.com/projects/ PROJECT_ID /locations/ LOCATION /deliveryPipelines/ DELIVERY_PIPELINE /releases/ RELEASE
Eventarc
API reference
eventarc.googleapis.com/Channel
( Preview )
Exclusive
//eventarc.googleapis.com/projects/ PROJECT_ID /locations/ LOCATION /channels/ CHANNEL
eventarc.googleapis.com/Trigger
( Preview )
Exclusive
//eventarc.googleapis.com/projects/ PROJECT_ID /locations/ LOCATION /triggers/ TRIGGER
Financial Services
API reference
financialservices.googleapis.com/Dataset
( Preview )
Exclusive
//financialservices.googleapis.com/projects/ PROJECT_ID /locations/ LOCATION /instances/ INSTANCE /datasets/ DATASET
financialservices.googleapis.com/Instance
Exclusive
//financialservices.googleapis.com/projects/ PROJECT_ID /locations/ LOCATION /instances/ INSTANCE
financialservices.googleapis.com/Model
( Preview )
Exclusive
//financialservices.googleapis.com/projects/ PROJECT_ID /locations/ LOCATION /instances/ INSTANCE /models/ MODEL
Firestore
API reference
firestore.googleapis.com/Database
Exclusive
//firestore.googleapis.com/projects/ PROJECT_ID /databases/ DATABASE
Cloud Run functions (1st gen)
API reference
cloudfunctions.googleapis.com/CloudFunction
( Preview )
Exclusive
//cloudfunctions.googleapis.com/projects/ PROJECT_ID /locations/ LOCATION /functions/ CLOUD_FUNCTION
cloudfunctions.googleapis.com/Function
Exclusive
//cloudfunctions.googleapis.com/projects/ PROJECT_ID /locations/ LOCATION /functions/ FUNCTION
Compute Engine
API reference
compute.googleapis.com/BackendService
Exclusive
//compute.googleapis.com/projects/ PROJECT_ID /global/backendServices/ BACKEND_SERVICE
compute.googleapis.com/ForwardingRule
Exclusive
//compute.googleapis.com/projects/ PROJECT_ID /regions/ REGION /forwardingRules/ FORWARDING_RULE
//compute.googleapis.com/projects/ PROJECT_ID /global/forwardingRules/ FORWARDING_RULE
GKE Hub
API reference
gkehub.googleapis.com/Fleet
( Preview )
Exclusive
//gkehub.googleapis.com/projects/ PROJECT_ID /locations/ LOCATION /fleets/ FLEET
Google Kubernetes Engine
API reference
container.googleapis.com/Cluster
( Preview )
Shared
//container.googleapis.com/projects/ PROJECT_ID /zones/ ZONE /clusters/ CLUSTER
//container.googleapis.com/projects/ PROJECT_ID /locations/ LOCATION /clusters/ CLUSTER
gateway.networking.k8s.io/Gateway
Exclusive
//container.googleapis.com/projects/ PROJECT_ID /zones/ ZONE /clusters/ CLUSTER /k8s/namespaces/ NAMESPACE /apis/gateway.networking.k8s.io/gateways/ GATEWAY
//container.googleapis.com/projects/ PROJECT_ID /locations/ LOCATION /clusters/ CLUSTER /k8s/namespaces/ NAMESPACE /apis/gateway.networking.k8s.io/gateways/ GATEWAY
k8s.io/Service
Exclusive
//container.googleapis.com/projects/ PROJECT_ID /zones/ ZONE /clusters/ CLUSTER /k8s/namespaces/ NAMESPACE /services/ SERVICE
//container.googleapis.com/projects/ PROJECT_ID /locations/ LOCATION /clusters/ CLUSTER /k8s/namespaces/ NAMESPACE /services/ SERVICE
networking.k8s.io/Ingress
( Preview )
Exclusive
//container.googleapis.com/projects/ PROJECT_ID /zones/ ZONE /clusters/ CLUSTER /k8s/namespaces/ NAMESPACE /networking.k8s.io/ingresses/ INGRESS
//container.googleapis.com/projects/ PROJECT_ID /locations/ LOCATION /clusters/ CLUSTER /k8s/namespaces/ NAMESPACE /networking.k8s.io/ingresses/ INGRESS
GKE On-Prem API
API reference
gkeonprem.googleapis.com/VmwareAdminCluster
( Preview )
Exclusive
//gkeonprem.googleapis.com/projects/ PROJECT_ID /locations/ LOCATION /vmwareAdminClusters/ VMWARE_ADMIN_CLUSTER
gkeonprem.googleapis.com/VmwareCluster
( Preview )
Exclusive
//gkeonprem.googleapis.com/projects/ PROJECT_ID /locations/ LOCATION /vmwareClusters/ VMWARE_CLUSTER
Integration Connectors
API reference
connectors.googleapis.com/Connection
( Preview )
Exclusive
//connectors.googleapis.com/projects/ PROJECT_ID /locations/ LOCATION /connections/ CONNECTION
Live Stream API
API reference
livestream.googleapis.com/Asset
( Preview )
Exclusive
//livestream.googleapis.com/projects/ PROJECT_ID /locations/ LOCATION /assets/ ASSET
Cloud Logging
API reference
logging.googleapis.com/LogBucket
Exclusive
//logging.googleapis.com/projects/ PROJECT_NUMBER /locations/ LOCATION /buckets/ BUCKET
//logging.googleapis.com/organizations/ ORGANIZATION_ID /locations/ LOCATION /buckets/ BUCKET
//logging.googleapis.com/folders/ FOLDER_ID /locations/ LOCATION /buckets/ BUCKET
//logging.googleapis.com/billingAccounts/ BILLING_ACCOUNT_ID /locations/ LOCATION /buckets/ BUCKET
//logging.googleapis.com/accessPolicies/ ACCESS_POLICY_ID /locations/ LOCATION /buckets/ BUCKET
Managed Service for Microsoft Active Directory
API reference
managedidentities.googleapis.com/Domain
Exclusive
//managedidentities.googleapis.com/projects/ PROJECT_ID /locations/global/domains/ DOMAIN
Memorystore
memorystore.googleapis.com/Instance
( Preview )
Exclusive
//memorystore.googleapis.com/projects/ PROJECT_ID /locations/ LOCATION /instances/ INSTANCE
Memorystore for Memcached
API reference
memcache.googleapis.com/Instance
( Preview )
Exclusive
//memcache.googleapis.com/projects/ PROJECT_NUMBER /locations/ LOCATION /instances/ INSTANCE
Memorystore for Redis
API reference
redis.googleapis.com/Cluster
Exclusive
//redis.googleapis.com/projects/ PROJECT_ID /locations/ LOCATION /clusters/ CLUSTER
redis.googleapis.com/Instance
Exclusive
//redis.googleapis.com/projects/ PROJECT_ID /locations/ LOCATION /instances/ INSTANCE
Network Connectivity
API reference
networkconnectivity.googleapis.com/Group
( Preview )
Exclusive
//networkconnectivity.googleapis.com/projects/ PROJECT_ID /locations/global/hubs/ HUB /groups/ GROUP
networkconnectivity.googleapis.com/Hub
( Preview )
Exclusive
//networkconnectivity.googleapis.com/projects/ PROJECT_ID /locations/global/hubs/ HUB
networkconnectivity.googleapis.com/InternalRange
Exclusive
//networkconnectivity.googleapis.com/projects/ PROJECT_ID /locations/ LOCATION /internalRanges/ INTERNAL_RANGE
networkconnectivity.googleapis.com/PolicyBasedRoute
Exclusive
networkconnectivity.googleapis.com/Spoke
( Preview )
Exclusive
//networkconnectivity.googleapis.com/projects/ PROJECT_ID /locations/ LOCATION /spokes/ SPOKE
Pub/Sub
API reference
pubsub.googleapis.com/Subscription
Exclusive
//pubsub.googleapis.com/projects/ PROJECT_ID /subscriptions/ SUBSCRIPTION
pubsub.googleapis.com/Topic
Exclusive
//pubsub.googleapis.com/projects/ PROJECT_ID /topics/ TOPIC
//pubsub.googleapis.com/ deleted-topic
Secret Manager
API reference
secretmanager.googleapis.com/Secret
Exclusive
//secretmanager.googleapis.com/projects/ PROJECT_NUMBER /secrets/ SECRET
//secretmanager.googleapis.com/projects/ PROJECT_NUMBER /locations/ LOCATION /secrets/ SECRET
Spanner
API reference
spanner.googleapis.com/Database
Exclusive
//spanner.googleapis.com/projects/ PROJECT_ID /instances/ INSTANCE /databases/ DATABASE
spanner.googleapis.com/Instance
Exclusive
//spanner.googleapis.com/projects/ PROJECT_ID /instances/ INSTANCE
Cloud SQL
API reference
sqladmin.googleapis.com/Instance
Exclusive
//cloudsql.googleapis.com/projects/ PROJECT_ID /instances/ INSTANCE
Cloud Storage
API reference
storage.googleapis.com/Bucket
Exclusive
//storage.googleapis.com/ BUCKET
Workflows
API reference
workflows.googleapis.com/Workflow
( Preview )
Exclusive
//workflows.googleapis.com/projects/ PROJECT_ID /locations/ LOCATION /workflows/ WORKFLOW
Workloads
This section lists all the Google Cloud resources that App Hub supports
as application components and that you can register as
workloads in your applications.
Google Cloud product
Infrastructure resource
URI format
Vertex AI
API reference
aiplatform.googleapis.com/BatchPredictionJob
( Preview )
//aiplatform.googleapis.com/projects/ PROJECT_ID /locations/ LOCATION /batchPredictionJobs/ BATCH_PREDICTION_JOB
aiplatform.googleapis.com/ReasoningEngine
//aiplatform.googleapis.com/projects/ PROJECT_NUMBER /locations/ LOCATION /reasoningEngines/ REASONING_ENGINE
aiplatform.googleapis.com/TuningJob
( Preview )
//aiplatform.googleapis.com/projects/ PROJECT_ID /locations/ LOCATION /tuningJobs/ TUNING_JOB
Cloud Build
API reference
cloudbuild.googleapis.com/WorkerPool
//cloudbuild.googleapis.com/projects/ PROJECT_NUMBER /locations/ LOCATION /workerPools/ WORKER_POOL
Cloud Run
API reference
run.googleapis.com/Job
//run.googleapis.com/projects/ PROJECT_ID /locations/ LOCATION /jobs/ JOB
Cloud Config Manager API
API reference
config.googleapis.com/Deployment
( Preview )
//config.googleapis.com/projects/ PROJECT_ID /locations/ LOCATION /deployments/ DEPLOYMENT
Compute Engine
API reference
compute.googleapis.com/InstanceGroup
//compute.googleapis.com/projects/ PROJECT_ID /zones/ ZONE /instanceGroups/ INSTANCE_GROUP
//compute.googleapis.com/projects/ PROJECT_ID /regions/ REGION /instanceGroups/ INSTANCE_GROUP
Google Kubernetes Engine
API reference
apps.k8s.io/DaemonSet
//container.googleapis.com/projects/ PROJECT_ID /zones/ ZONE /clusters/ CLUSTER /k8s/namespaces/ NAMESPACE /apps/daemonsets/ DAEMONSET
//container.googleapis.com/projects/ PROJECT_ID /locations/ LOCATION /clusters/ CLUSTER /k8s/namespaces/ NAMESPACE /apps/daemonsets/ DAEMONSET
apps.k8s.io/Deployment
//container.googleapis.com/projects/ PROJECT_ID /zones/ ZONE /clusters/ CLUSTER /k8s/namespaces/ NAMESPACE /apps/deployments/ DEPLOYMENT
//container.googleapis.com/projects/ PROJECT_ID /locations/ LOCATION /clusters/ CLUSTER /k8s/namespaces/ NAMESPACE /apps/deployments/ DEPLOYMENT
apps.k8s.io/StatefulSet
//container.googleapis.com/projects/ PROJECT_ID /zones/ ZONE /clusters/ CLUSTER /k8s/namespaces/ NAMESPACE /apps/statefulsets/ STATEFULSET
//container.googleapis.com/projects/ PROJECT_ID /locations/ LOCATION /clusters/ CLUSTER /k8s/namespaces/ NAMESPACE /apps/statefulsets/ STATEFULSET
batch.k8s.io/CronJob
//container.googleapis.com/projects/ PROJECT_ID /zones/ ZONE /clusters/ CLUSTER /k8s/namespaces/ NAMESPACE /batch/cronjobs/ CRONJOB
//container.googleapis.com/projects/ PROJECT_ID /locations/ LOCATION /clusters/ CLUSTER /k8s/namespaces/ NAMESPACE /batch/cronjobs/ CRONJOB
Cloud Scheduler
cloudscheduler.googleapis.com/Job
( Preview )
What's next
Choose your application setup model
Learn more about App Hub
Identify App Hub roles and permissions
Learn more about Cloud Asset Inventory asset names
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
