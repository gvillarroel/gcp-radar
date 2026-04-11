---
title: "Service agents \_|\_ Identity and Access Management (IAM) \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/iam/docs/service-agents
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/service-agents
  title: "Service agents \_|\_ Identity and Access Management (IAM) \_|\_ Google Cloud\
    \ Documentation"
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
Service agents
Stay organized with collections
Save and categorize content based on your preferences.
Some Google Cloud services have service agents that allow
the service to access your resources. If an API requires a service agent, then
Google Cloud creates the service agent at some point after you activate
and use the API. You might see evidence of these service agents in several
different places, including a project's allow policy and
audit log entries for various services. For more information
about when Google Cloud creates service agents, see Service agent
creation .
If you manage your allow policies with a declarative framework or a
policies-as-code system, you might want to create and grant roles to a service
agent before you use the service it belongs to. In these cases, after you
identify the service agent you need to create, you can
trigger service agent creation yourself without using the
service.
This page provides details about the service agents for all services that are
publicly available, including the following:
The domain name used in the service agent's email address.
The role that the service agent is granted on the project.
When the service agent is created, Google Cloud grants this role
automatically.
Warning:
Do not grant service agent roles to any principals except service agents.
Some service agent roles contain very powerful permissions, and the permissions within these roles
can change without notice. Instead, choose a different
predefined role , or create a
custom role with the permissions you need.
Google Cloud can introduce new service agents at any time, both for
existing services and for new services. Both the creation time and the email address format for service agents are subject to change.
Service agent
Role
AI Platform Custom Code Service Agent
Service agent for aiplatform.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-aiplatform-cc.iam.gserviceaccount.com
Vertex AI Custom Code Service Agent
( roles/aiplatform.customCodeServiceAgent )
Granted on the project.
AI Platform Example Store Service Agent
Service agent for aiplatform.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-vertex-es.iam.gserviceaccount.com
None
AI Platform Fine Tuning Service Agent
Service agent for aiplatform.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-aiplatform-ft.iam.gserviceaccount.com
Vertex AI Service Agent
( roles/aiplatform.serviceAgent )
Granted on the project.
AI Platform Infra Spanner Service Agent
Service agent for aiplatform.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-aiplatform-is.iam.gserviceaccount.com
None
AI Platform Private Instance (PIE) Service Agent
Service agent for aiplatform.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-aiplatform-pie.iam.gserviceaccount.com
Vertex AI Service Agent
( roles/aiplatform.serviceAgent )
Granted on the project.
AI Platform Rapid Eval Service Agent
Service agent for aiplatform.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-vertex-eval.iam.gserviceaccount.com
Vertex AI Rapid Eval Service Agent
( roles/aiplatform.rapidevalServiceAgent )
Granted on the project.
AI Platform Reasoning Engine Service Agent
Service agent for aiplatform.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-aiplatform-re.iam.gserviceaccount.com
Vertex AI Reasoning Engine Service Agent
( roles/aiplatform.reasoningEngineServiceAgent )
Granted on the project.
AI Platform Resource Identity
Service agent for aiplatform.googleapis.com .
service- PROJECT_NUMBER @gcp-ri-aiplatform.iam.gserviceaccount.com
None
AI Platform Service Agent
Primary service agent for aiplatform.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-aiplatform.iam.gserviceaccount.com
Vertex AI Service Agent
( roles/aiplatform.serviceAgent )
Granted on the project.
API Hub Service Account
Primary service agent for apihub.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-apihub.iam.gserviceaccount.com
API-Hub Runtime Project Service Agent
( roles/apihub.runtimeProjectServiceAgent )
Granted on the project.
API Keys Service Account
Primary service agent for apikeys.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-apikeys.iam.gserviceaccount.com
None
APIM Service Account
Primary service agent for apim.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-apim.iam.gserviceaccount.com
APIM API Discovery Service Agent
( roles/apim.apiDiscoveryServiceAgent )
Granted on the project.
ASM Mesh Control Plane Service Account
Service agent for meshconfig.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-meshcontrolplane.iam.gserviceaccount.com
Mesh Managed Control Plane Service Agent
( roles/meshcontrolplane.serviceAgent )
Granted on the project.
ASM Mesh Data Plane Service Account
Service agent for meshconfig.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-meshdataplane.iam.gserviceaccount.com
Mesh Data Plane Service Agent
( roles/meshdataplane.serviceAgent )
Granted on the project.
Access Approval Service Agent
Service agent for accessapproval.googleapis.com .
For the project:
service-p PROJECT_NUMBER @gcp-sa-accessapproval.iam.gserviceaccount.com
For the folder:
service-f FOLDER_NUMBER @gcp-sa-accessapproval.iam.gserviceaccount.com
For the organization:
service-o ORGANIZATION_NUMBER @gcp-sa-accessapproval.iam.gserviceaccount.com
None
Ads Data Hub Service Account
Primary service agent for adsdatahub.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-adsdatahub.iam.gserviceaccount.com
None
Agent Gateway Service Account
Service agent for networkservices.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-agentgateway.iam.gserviceaccount.com
Agent Gateway Service Agent
( roles/agentgateway.serviceAgent )
Granted on the project.
AlloyDB Service Account
Primary service agent for alloydb.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-alloydb.iam.gserviceaccount.com
AlloyDB Service Agent
( roles/alloydb.serviceAgent )
Granted on the project.
AlloyDB Service Agent
Service agent for alloydb.googleapis.com .
c- PROJECT_NUMBER - IDENTIFIER @gcp-sa-alloydb.iam.gserviceaccount.com
None
Anthos Audit Service Account
Primary service agent for anthosaudit.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-anthosaudit.iam.gserviceaccount.com
Anthos Audit Service Agent
( roles/anthosaudit.serviceAgent )
Granted on the project.
Anthos Config Management Service Account
Primary service agent for anthosconfigmanagement.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-anthosconfigmanagement.iam.gserviceaccount.com
Anthos Config Management Service Agent
( roles/anthosconfigmanagement.serviceAgent )
Granted on the project.
Anthos Identity Service Account
Primary service agent for anthosidentityservice.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-anthosidentityservice.iam.gserviceaccount.com
Anthos Identity Service Agent
( roles/anthosidentityservice.serviceAgent )
Granted on the project.
Anthos Multi-Cloud Container Service Agent
Service agent for gkemulticloud.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-gkemulticloudcontainer.iam.gserviceaccount.com
Anthos Multi-Cloud Container Service Agent
( roles/gkemulticloud.containerServiceAgent )
Granted on the project.
Anthos Multi-Cloud Control Plane Machine Service Agent
Service agent for gkemulticloud.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-gkemulticloudcpmachine.iam.gserviceaccount.com
Anthos Multi-Cloud Control Plane Machine Service Agent
( roles/gkemulticloud.controlPlaneMachineServiceAgent )
Granted on the project.
Anthos Multi-Cloud Node Pool Machine Service Agent
Service agent for gkemulticloud.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-gkemulticloudnpmachine.iam.gserviceaccount.com
Anthos Multi-Cloud Node Pool Machine Service Agent
( roles/gkemulticloud.nodePoolMachineServiceAgent )
Granted on the project.
Anthos Multi-Cloud Service Agent
Primary service agent for gkemulticloud.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-gkemulticloud.iam.gserviceaccount.com
Anthos Multi-Cloud Service Agent
( roles/gkemulticloud.serviceAgent )
Granted on the project.
Anthos Policy Controller Service Account
Primary service agent for anthospolicycontroller.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-anthospolicycontroller.iam.gserviceaccount.com
Anthos Policy Controller Service Agent
( roles/anthospolicycontroller.serviceAgent )
Granted on the project.
Anthos Service Account
Primary service agent for anthos.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-anthos.iam.gserviceaccount.com
Anthos Service Agent
( roles/anthos.serviceAgent )
Granted on the project.
Anthos Service Mesh Service Account
Service agent for meshconfig.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-servicemesh.iam.gserviceaccount.com
Anthos Service Mesh Service Agent
( roles/anthosservicemesh.serviceAgent )
Granted on the project.
Anthos Support Service Account
Primary service agent for connectgateway.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-anthossupport.iam.gserviceaccount.com
Anthos Support Service Agent
( roles/anthossupport.serviceAgent )
Granted on the project.
Apigee Registry Service Account
Primary service agent for apigeeregistry.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-apigeeregistry.iam.gserviceaccount.com
None
Apigee Service Agent
Primary service agent for apigee.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-apigee.iam.gserviceaccount.com
Apigee Service Agent
( roles/apigee.serviceAgent )
Granted on the project.
Apigee Service Agent
Service agent for apigee.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-apigee.iam.gserviceaccount.com
Apigee Core Service Agent
( roles/apigee.coreServiceAgent )
Granted on the project.
App Development Experience Service Account
Primary service agent for appdevelopmentexperience.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-appdevexperience.iam.gserviceaccount.com
App Development Experience Service Agent
( roles/appdevelopmentexperience.serviceAgent )
Granted on the project.
App Engine Flexible Environment Service Agent
Primary service agent for appengineflex.googleapis.com .
service- PROJECT_NUMBER @gae-api-prod.iam.gserviceaccount.com
App Engine flexible environment Service Agent
( roles/appengineflex.serviceAgent )
Granted on the project.
App Engine Standard Environment Service Agent
Primary service agent for appenginestandard.googleapis.com .
service- PROJECT_NUMBER @gcp-gae-service.iam.gserviceaccount.com
App Engine Standard Environment Service Agent
( roles/appengine.serviceAgent )
Granted on the project.
App Hub Service Account
Primary service agent for apphub.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-apphub.iam.gserviceaccount.com
None
App Optimize Service Agent
Primary service agent for appoptimize.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-appoptimize.iam.gserviceaccount.com
None
Application Integration Service Agent
Primary service agent for integrations.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-integrations.iam.gserviceaccount.com
Application Integration Service Agent
( roles/integrations.serviceAgent )
Granted on the project.
Artifact Registry Service Agent
Primary service agent for artifactregistry.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-artifactregistry.iam.gserviceaccount.com
Artifact Registry Service Agent
( roles/artifactregistry.serviceAgent )
Granted on the project.
Assured OSS Service Agent
Service agent for assuredoss.googleapis.com .
service-org- ORGANIZATION_NUMBER @gcp-sa-assuredoss.iam.gserviceaccount.com
None
Assured Workloads Service Agent
Service agent for assuredworkloads.googleapis.com .
service-folder- FOLDER_NUMBER @gcp-sa-assuredworkloads.iam.gserviceaccount.com
None
AssuredWorkloads Service Account
Primary service agent for assuredworkloads.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-assuredworkloads.iam.gserviceaccount.com
Assured Workloads Service Agent
( roles/assuredworkloads.serviceAgent )
Granted on the project.
Attack Surface Management Service Agent
Service agent for securitycenter.googleapis.com .
service-org- ORGANIZATION_NUMBER @gcp-sa-asm-hpsa.iam.gserviceaccount.com
None
Audit Manager Service Agent
Primary service agent for auditmanager.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-audit-manager.iam.gserviceaccount.com
Audit Manager Auditing Service Agent
( roles/auditmanager.serviceAgent )
Granted on the project.
Audit Manager Service Agent
Service agent for auditmanager.googleapis.com .
For the folder:
service-folder- FOLDER_NUMBER @gcp-sa-audit-manager.iam.gserviceaccount.com
For the organization:
service-org- ORGANIZATION_NUMBER @gcp-sa-audit-manager.iam.gserviceaccount.com
None
Auto Annotate Service Account
Service agent for storage.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-autoannotate.iam.gserviceaccount.com
None
AutoML Recommendations Service Account
Primary service agent for recommendationengine.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-recommendationengine.iam.gserviceaccount.com
Recommendations AI Service Agent
( roles/automlrecommendations.serviceAgent )
Granted on the project.
AutoML Service Agent
Primary service agent for automl.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-automl.iam.gserviceaccount.com
AutoML Service Agent
( roles/automl.serviceAgent )
Granted on the project.
Backup and DR Runner Service Agent
Service agent for backupdr.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-backupdr-run.iam.gserviceaccount.com
None
Backup and DR Service Agent
Primary service agent for backupdr.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-backupdr.iam.gserviceaccount.com
Backup and DR Service Agent
( roles/backupdr.serviceAgent )
Granted on the project.
Backup and DR Vault Service Agent
Service agent for backupdr.googleapis.com .
vault- PROJECT_NUMBER - IDENTIFIER @gcp-sa-backupdr-pr.iam.gserviceaccount.com
None
Backup for GKE Service Account
Primary service agent for gkebackup.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-gkebackup.iam.gserviceaccount.com
Backup for GKE Service Agent
( roles/gkebackup.serviceAgent )
Granted on the project.
Bare Metal Solution Service Account
Primary service agent for baremetalsolution.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-bms.iam.gserviceaccount.com
Bare Metal Solution Service Agent
( roles/baremetalsolution.serviceAgent )
Granted on the project.
Batch Service Account
Primary service agent for batch.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-cloudbatch.iam.gserviceaccount.com
Google Batch Service Agent
( roles/batch.serviceAgent )
Granted on the project.
Big Query Service Agent
Service agent for bigquery.googleapis.com .
bq- PROJECT_NUMBER @bigquery-encryption.iam.gserviceaccount.com
None
BigLake Iceberg Rest Catalog API Service Agent
Service agent for biglake.googleapis.com .
blirc- PROJECT_NUMBER - IDENTIFIER @gcp-sa-biglakerestcatalog.iam.gserviceaccount.com
None
BigQuery Connected Sheets Service Agent
Service agent for bigquery.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-connectedsheets.iam.gserviceaccount.com
Connected Sheets Service Agent
( roles/bigquery.connectedSheetsServiceAgent )
Granted on the project.
BigQuery Connection Delegation Service Agent
Service agent for bigqueryconnection.googleapis.com .
bqcx- PROJECT_NUMBER - IDENTIFIER @gcp-sa-bigquery-condel.iam.gserviceaccount.com
connection- PROJECT_NUMBER - IDENTIFIER @gcp-sa-bigquery-condel.iam.gserviceaccount.com
None
BigQuery Connection Service Agent
Primary service agent for bigqueryconnection.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-bigqueryconnection.iam.gserviceaccount.com
BigQuery Connection Service Agent
( roles/bigqueryconnection.serviceAgent )
Granted on the project.
BigQuery Continuous Query Service Agent
Service agent for bigquery.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-bigquerytardis.iam.gserviceaccount.com
BigQuery Continuous Query Service Agent
( roles/bigquerycontinuousquery.serviceAgent )
Granted on the project.
BigQuery Data Transfer Service Agent
Primary service agent for bigquerydatatransfer.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-bigquerydatatransfer.iam.gserviceaccount.com
BigQuery Data Transfer Service Agent
( roles/bigquerydatatransfer.serviceAgent )
Granted on the project.
BigQuery Migration Service Agent
Primary service agent for bigquerymigration.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-bqms.iam.gserviceaccount.com
None
BigQuery Omni Service Agent
Service agent for bigquery.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-prod-bigqueryomni.iam.gserviceaccount.com
BigQuery Omni Service Agent
( roles/bigqueryomni.serviceAgent )
Granted on the project.
BigQuery Resource Identity Service Account
Service agent for bigquery.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-bigqueryri.iam.gserviceaccount.com
None
BigQuery Spark Connection Delegate Service Agent
Service agent for bigqueryconnection.googleapis.com .
bqcx- PROJECT_NUMBER - IDENTIFIER @gcp-sa-bigquery-consp.iam.gserviceaccount.com
None
BigQuery Spark Service Agent
Service agent for bigquery.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-bigqueryspark.iam.gserviceaccount.com
BigQuery Spark Service Agent
( roles/bigqueryspark.serviceAgent )
Granted on the project.
Binary Authorization Service Agent
Primary service agent for binaryauthorization.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-binaryauthorization.iam.gserviceaccount.com
Binary Authorization Service Agent
( roles/binaryauthorization.serviceAgent )
Granted on the project.
Blockchain Node Engine Service Account
Primary service agent for blockchainnodeengine.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-bne.iam.gserviceaccount.com
Blockchain Node Engine Service Agent
( roles/blockchainnodeengine.serviceAgent )
Granted on the project.
Bundles Service Agent
Service agent for integrations.googleapis.com .
b PROJECT_NUMBER - IDENTIFIER @gcp-sa-bundles.iam.gserviceaccount.com
None
Chronicle Service Account
Primary service agent for chronicle.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-chronicle.iam.gserviceaccount.com
Chronicle Service Agent
( roles/chronicle.serviceAgent )
Granted on the project.
Chronicle Soar Service Agent
Service agent for chronicle.googleapis.com .
service-org- ORGANIZATION_NUMBER @gcp-sa-chronicle-soar.iam.gserviceaccount.com
None
Cloud AI Platform Notebooks Service Account
Primary service agent for notebooks.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-notebooks.iam.gserviceaccount.com
AI Platform Notebooks Service Agent
( roles/notebooks.serviceAgent )
Granted on the project.
Cloud AI Platform Notebooks VM Service Account
Service agent for notebooks.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-notebooks-vm.iam.gserviceaccount.com
Vertex AI Notebook Service Agent
( roles/aiplatform.notebookServiceAgent )
Granted on the project.
Cloud API Gateway Management Plane Service Account
Service agent for apigateway.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-apigateway-mgmt.iam.gserviceaccount.com
Cloud API Gateway Management Service Agent
( roles/apigateway_management.serviceAgent )
Granted on the project.
Cloud API Gateway Service Account
Service agent for apigateway.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-apigateway.iam.gserviceaccount.com
Cloud API Gateway Service Agent
( roles/apigateway.serviceAgent )
Granted on the project.
Cloud Asset Effective Policy Service Agent
Service agent for cloudasset.googleapis.com .
service-org- ORGANIZATION_NUMBER @gcp-sa-effectivepolicy.iam.gserviceaccount.com
None
Cloud Asset Other Cloud Config Service Agent
Service agent for cloudasset.googleapis.com .
service-org- ORGANIZATION_NUMBER @gcp-sa-othercloudcfg.iam.gserviceaccount.com
None
Cloud Asset Service Agent
Primary service agent for cloudasset.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-cloudasset.iam.gserviceaccount.com
Cloud Asset Service Agent
( roles/cloudasset.serviceAgent )
Granted on the project.
Cloud Bigtable Service Agent
Primary service agent for bigtableadmin.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-bigtable.iam.gserviceaccount.com
None
Cloud Build Service Agent
Service agent for cloudbuild.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-cloudbuild.iam.gserviceaccount.com
Cloud Build Service Agent
( roles/cloudbuild.serviceAgent )
Granted on the project.
Cloud Certificate Manager Service Account
Primary service agent for certificatemanager.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-certificatemanager.iam.gserviceaccount.com
Certificate Manager Service Agent
( roles/certificatemanager.serviceAgent )
Granted on the project.
Cloud Composer Service Agent
Primary service agent for composer.googleapis.com .
service- PROJECT_NUMBER @cloudcomposer-accounts.iam.gserviceaccount.com
Cloud Composer API Service Agent
( roles/composer.serviceAgent )
Granted on the project.
Cloud Controls Partner Service Agent
Service agent for cloudcontrolspartner.googleapis.com .
service-folder- FOLDER_NUMBER @gcp-sa-cloudcontrolspartner.iam.gserviceaccount.com
None
Cloud DNS Service Account
Primary service agent for dns.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-dns.iam.gserviceaccount.com
Cloud DNS Service Agent
( roles/dns.serviceAgent )
Granted on the project.
Cloud Data Fusion Service Account
Primary service agent for datafusion.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-datafusion.iam.gserviceaccount.com
Cloud Data Fusion API Service Agent
( roles/datafusion.serviceAgent )
Granted on the project.
Cloud Data Loss Prevention Service Agent
Primary service agent for dlp.googleapis.com .
service- PROJECT_NUMBER @dlp-api.iam.gserviceaccount.com
DLP API Service Agent
( roles/dlp.serviceAgent )
Granted on the project.
Cloud Database Migration Service Account
Primary service agent for datamigration.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-datamigration.iam.gserviceaccount.com
Database Migration Service Agent
( roles/datamigration.serviceAgent )
Granted on the project.
Cloud Dataflow Service Account
Primary service agent for dataflow.googleapis.com .
service- PROJECT_NUMBER @dataflow-service-producer-prod.iam.gserviceaccount.com
Cloud Dataflow Service Agent
( roles/dataflow.serviceAgent )
Granted on the project.
Cloud Dataplex Service Account
Primary service agent for dataplex.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-dataplex.iam.gserviceaccount.com
Cloud Dataplex Service Agent
( roles/dataplex.serviceAgent )
Granted on the project.
Cloud Datastream Service Account
Primary service agent for datastream.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-datastream.iam.gserviceaccount.com
Datastream Service Agent
( roles/datastream.serviceAgent )
Granted on the project.
Cloud Deploy Service Account
Primary service agent for clouddeploy.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-clouddeploy.iam.gserviceaccount.com
Cloud Deploy Service Agent
( roles/clouddeploy.serviceAgent )
Granted on the project.
Cloud Endpoints Service Agent
Primary service agent for endpoints.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-endpoints.iam.gserviceaccount.com
Cloud Endpoints Service Agent
( roles/endpoints.serviceAgent )
Granted on the project.
Cloud File Storage Service Account
Primary service agent for file.googleapis.com .
service- PROJECT_NUMBER @cloud-filer.iam.gserviceaccount.com
Cloud Filestore Service Agent
( roles/file.serviceAgent )
Granted on the project.
Cloud Firestore Service Agent
Primary service agent for firestore.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-firestore.iam.gserviceaccount.com
Firestore Service Agent
( roles/firestore.serviceAgent )
Granted on the project.
Cloud Healthcare Service Agent
Primary service agent for healthcare.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-healthcare.iam.gserviceaccount.com
Healthcare Service Agent
( roles/healthcare.serviceAgent )
Granted on the project.
Cloud Identity Platform Service Agent
Primary service agent for identitytoolkit.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-identitytoolkit.iam.gserviceaccount.com
Identity Platform Service Agent
( roles/identitytoolkit.serviceAgent )
Granted on the project.
Cloud KMS Organization Service Agent
Service agent for cloudkms.googleapis.com .
service-org- ORGANIZATION_NUMBER @gcp-sa-cloudkms.iam.gserviceaccount.com
None
Cloud KMS Service Agent
Service agent for cloudkms.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-cloudkms.iam.gserviceaccount.com
Cloud KMS Service Agent
( roles/cloudkms.serviceAgent )
Granted on the project.
Cloud Logging Service Account
Service agent for logging.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-logging.iam.gserviceaccount.com
Cloud Logging Service Agent
( roles/logging.serviceAgent )
Granted on the project.
Cloud Logging Service Agent
Service agent for logging.googleapis.com .
For the folder:
service-folder- FOLDER_NUMBER @gcp-sa-logging.iam.gserviceaccount.com
For the organization:
service-org- ORGANIZATION_NUMBER @gcp-sa-logging.iam.gserviceaccount.com
None
Cloud Managed Identities Service Agent
Primary service agent for managedidentities.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-mi.iam.gserviceaccount.com
Cloud Managed Identities Service Agent
( roles/managedidentities.serviceAgent )
Granted on the project.
Cloud Memorystore Memcache Service Agent
Primary service agent for memcache.googleapis.com .
service- PROJECT_NUMBER @cloud-memcache-sa.iam.gserviceaccount.com
Cloud Memorystore Memcached Service Agent
( roles/memcache.serviceAgent )
Granted on the project.
Cloud Memorystore Redis Service Agent
Primary service agent for redis.googleapis.com .
service- PROJECT_NUMBER @cloud-redis.iam.gserviceaccount.com
Cloud Memorystore Redis Service Agent
( roles/redis.serviceAgent )
Granted on the project.
Cloud Migration Center Service Account
Primary service agent for migrationcenter.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-migcenter.iam.gserviceaccount.com
Migration Center Service Agent
( roles/migrationcenter.serviceAgent )
Granted on the project.
Cloud Network Management Service Account
Primary service agent for networkmanagement.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-networkmanagement.iam.gserviceaccount.com
GCP Network Management Service Agent
( roles/networkmanagement.serviceAgent )
Granted on the project.
Cloud Notebook Security Scanner Service Agent
Primary service agent for notebooksecurityscanner.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-notebooksecurityscanner.iam.gserviceaccount.com
None
Cloud Notebook Security Scanner Service Agent
Service agent for notebooksecurityscanner.googleapis.com .
For the project:
service- PROJECT_NUMBER @gcp-sa-nss-hpsa.iam.gserviceaccount.com
For the organization:
service-org- ORGANIZATION_NUMBER @gcp-sa-nss-hpsa.iam.gserviceaccount.com
None
Cloud Observability Service Account
Primary service agent for observability.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-observability.iam.gserviceaccount.com
Observability Service Agent
( roles/observability.serviceAgent )
Granted on the project.
Cloud Observability Service Account
Service agent for observability.googleapis.com .
For the folder:
service-folder- FOLDER_NUMBER @gcp-sa-observability.iam.gserviceaccount.com
For the organization:
service-org- ORGANIZATION_NUMBER @gcp-sa-observability.iam.gserviceaccount.com
None
Cloud Optimization Service Agent
Primary service agent for cloudoptimization.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-cloudoptim.iam.gserviceaccount.com
Cloud Optimization Service Agent
( roles/cloudoptimization.serviceAgent )
Granted on the project.
Cloud Optimization Service Agent
Primary service agent for routeoptimization.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-routeoptim.iam.gserviceaccount.com
Route Optimization Service Agent
( roles/routeoptimization.serviceAgent )
Granted on the project.
Cloud Pub/Sub Service Account
Primary service agent for pubsub.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-pubsub.iam.gserviceaccount.com
Cloud Pub/Sub Service Agent
( roles/pubsub.serviceAgent )
Granted on the project.
Cloud Resource Manager Service Agent
Service agent for cloudresourcemanager.googleapis.com .
service-org- ORGANIZATION_NUMBER @gcp-sa-cloudresourcemanager.iam.gserviceaccount.com
None
Cloud Risk Manager Service Agent
Service agent for dlp.googleapis.com .
organizations- ORGANIZATION_NUMBER @gcp-sa-riskmanager.iam.gserviceaccount.com
None
Cloud SQL Service Account
Primary service agent for sqladmin.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-cloud-sql.iam.gserviceaccount.com
Cloud SQL Service Agent
( roles/cloudsql.serviceAgent )
Granted on the project.
Cloud SQL Service Agent
Service agent for sqladmin.googleapis.com .
For the project:
p PROJECT_NUMBER - IDENTIFIER @gcp-sa-cloud-sql.iam.gserviceaccount.com
For the folder:
f FOLDER_NUMBER - IDENTIFIER @gcp-sa-cloud-sql.iam.gserviceaccount.com
For the organization:
o ORGANIZATION_NUMBER - IDENTIFIER @gcp-sa-cloud-sql.iam.gserviceaccount.com
None
Cloud Scheduler Service Account
Primary service agent for cloudscheduler.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-cloudscheduler.iam.gserviceaccount.com
Cloud Scheduler Service Agent
( roles/cloudscheduler.serviceAgent )
Granted on the project.
Cloud Security Command Center Bulk Export Service Account
Service agent for securitycenter.googleapis.com .
service-org- ORGANIZATION_NUMBER @gcp-sa-scc-bulk-export.iam.gserviceaccount.com
None
Cloud Security Command Center Notification Service Account
Service agent for securitycenter.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-scc-notification.iam.gserviceaccount.com
Security Center Notification Service Agent
( roles/securitycenter.notificationServiceAgent )
Granted on the project.
Cloud Security Command Center Notification Service Account
Service agent for securitycenter.googleapis.com .
service-org- ORGANIZATION_NUMBER @gcp-sa-scc-notification.iam.gserviceaccount.com
None
Cloud Security Command Center Service Account
Service agent for securitycenter.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-securitycenter.iam.gserviceaccount.com
Security Center Service Agent
( roles/securitycenter.serviceAgent )
Granted on the project.
Cloud Security Command Center Service Agent
Service agent for securitycenter.googleapis.com .
service-org- ORGANIZATION_NUMBER @security-center-api.iam.gserviceaccount.com
None
Cloud Security Compliance Service Agent
Primary service agent for cloudsecuritycompliance.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-csc-hpsa.iam.gserviceaccount.com
Cloud Security Compliance Service Agent
( roles/cloudsecuritycompliance.serviceAgent )
Granted on the project.
Cloud Security Compliance Service Agent
Service agent for cloudsecuritycompliance.googleapis.com .
service-org- ORGANIZATION_NUMBER @gcp-sa-csc-hpsa.iam.gserviceaccount.com
None
Cloud Spanner Production Service Account
Primary service agent for spanner.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-spanner.iam.gserviceaccount.com
Cloud Spanner API Service Agent
( roles/spanner.serviceAgent )
Granted on the project.
Cloud Storage for Firebase Service Agent
Primary service agent for firebasestorage.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-firebasestorage.iam.gserviceaccount.com
Cloud Storage for Firebase Service Agent
( roles/firebasestorage.serviceAgent )
Granted on the project.
Cloud Tasks Service Account
Primary service agent for cloudtasks.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-cloudtasks.iam.gserviceaccount.com
Cloud Tasks Service Agent
( roles/cloudtasks.serviceAgent )
Granted on the project.
Cloud Trace Service Account
Primary service agent for cloudtrace.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-cloud-trace.iam.gserviceaccount.com
None
Cloud Translation Service Agent
Primary service agent for translate.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-translation.iam.gserviceaccount.com
Cloud Translation API Service Agent
( roles/cloudtranslate.serviceAgent )
Granted on the project.
Cloud VM Migration Service Account
Primary service agent for vmmigration.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-vmmigration.iam.gserviceaccount.com
VM Migration Service Agent
( roles/vmmigration.serviceAgent )
Granted on the project.
Cloud Web Security Scanner Service Agent
Primary service agent for websecurityscanner.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-websecurityscanner.iam.gserviceaccount.com
Cloud Web Security Scanner Service Agent
( roles/websecurityscanner.serviceAgent )
Granted on the project.
Cloud Workflows Service Agent
Primary service agent for workflows.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-workflows.iam.gserviceaccount.com
Cloud Workflows Service Agent
( roles/workflows.serviceAgent )
Granted on the project.
Cloud Workstations Service Agent
Primary service agent for workstations.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-workstations.iam.gserviceaccount.com
Workstations Service Agent
( roles/workstations.serviceAgent )
Granted on the project.
Cluster Director Service Agent
Primary service agent for hypercomputecluster.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-hypercomputecluster.iam.gserviceaccount.com
Cluster Director Service Agent
( roles/hypercomputecluster.serviceAgent )
Granted on the project.
Compute Engine Service Agent
Service agent for compute.googleapis.com .
service- PROJECT_NUMBER @compute-system.iam.gserviceaccount.com
Compute Engine Service Agent
( roles/compute.serviceAgent )
Granted on the project.
Compute Usage Export Service Agent
Service agent for compute.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-compute-usage.iam.gserviceaccount.com
None
Config Delivery Service Account
Primary service agent for configdelivery.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-configdelivery.iam.gserviceaccount.com
Config Delivery Service Agent
( roles/configdelivery.serviceAgent )
Granted on the project.
Connectors Service Account
Primary service agent for connectors.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-connectors.iam.gserviceaccount.com
Connectors Platform Service Agent
( roles/connectors.serviceAgent )
Granted on the project.
Contact Center AI Insights Service Account
Primary service agent for contactcenterinsights.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-contactcenterinsights.iam.gserviceaccount.com
Contact Center AI Insights Service Agent
( roles/contactcenterinsights.serviceAgent )
Granted on the project.
Contact Center AI Insights Service Account for CMEK (prod)
Service agent for contactcenterinsights.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-ccinsights-cmek.iam.gserviceaccount.com
None
Contact Center AI Platform Service Account
Primary service agent for contactcenteraiplatform.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-ccaip.iam.gserviceaccount.com
None
Contact Center AI shared Service Account for CMEK (prod)
Service agent for contactcenterinsights.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-ccai-cmek.iam.gserviceaccount.com
None
Contact Center Insights Resource Identity (prod)
Service agent for contactcenterinsights.googleapis.com .
service- PROJECT_NUMBER @gcp-ri-contactcenterinsights.iam.gserviceaccount.com
None
Container Analysis Service Agent
Primary service agent for containeranalysis.googleapis.com .
service- PROJECT_NUMBER @container-analysis.iam.gserviceaccount.com
Container Analysis Service Agent
( roles/containeranalysis.ServiceAgent )
Granted on the project.
Container Scanning Service Agent
Primary service agent for containerscanning.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-containerscanning.iam.gserviceaccount.com
Container Scanner Service Agent
( roles/containerscanning.ServiceAgent )
Granted on the project.
Container Security Service Agent
Primary service agent for containersecurity.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-containersec.iam.gserviceaccount.com
None
Container Threat Detection Service Agent
Primary service agent for containerthreatdetection.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-ktd-control.iam.gserviceaccount.com
Container Threat Detection Service Agent
( roles/containerthreatdetection.serviceAgent )
Granted on the project.
Container Threat Detection Service Agent
Service agent for containerthreatdetection.googleapis.com .
For the project:
service- PROJECT_NUMBER @gcp-sa-ktd-hpsa.iam.gserviceaccount.com
For the organization:
service-org- ORGANIZATION_NUMBER @gcp-sa-ktd-hpsa.iam.gserviceaccount.com
None
Content Warehouse Service Account
Primary service agent for contentwarehouse.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-cloud-cw.iam.gserviceaccount.com
Content Warehouse Service Agent
( roles/contentwarehouse.serviceAgent )
Granted on the project.
Customer Engagement Suite Service Account
Primary service agent for ces.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-ces.iam.gserviceaccount.com
Customer Engagement Suite Service Agent
( roles/ces.serviceAgent )
Granted on the project.
Data Connectors Service Account
Primary service agent for dataconnectors.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-dataconnectors.iam.gserviceaccount.com
Data Connectors Service Agent
( roles/dataconnectors.serviceAgent )
Granted on the project.
Data Labeling Service Account
Primary service agent for datalabeling.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-datalabeling.iam.gserviceaccount.com
Data Labeling Service Agent
( roles/datalabeling.serviceAgent )
Granted on the project.
Data Pipelines Service Agent
Primary service agent for datapipelines.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-datapipelines.iam.gserviceaccount.com
Datapipelines Service Agent
( roles/datapipelines.serviceAgent )
Granted on the project.
Data Studio CMEK Service Account
Service agent for datastudio.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-datastudio-cmek.iam.gserviceaccount.com
None
Data Studio Service Account
Primary service agent for datastudio.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-datastudio.iam.gserviceaccount.com
Data Studio Service Agent
( roles/datastudio.serviceAgent )
Granted on the project.
Dataform Service Account
Primary service agent for dataform.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-dataform.iam.gserviceaccount.com
Dataform Service Agent
( roles/dataform.serviceAgent )
Granted on the project.
Dataplex Cmek Service Agent
Service agent for dataplex.googleapis.com .
service-org- ORGANIZATION_NUMBER @gcp-sa-dataplex-cmek.iam.gserviceaccount.com
None
Dataplex Service Agent
Service agent for dataplex.googleapis.com .
service-org- ORGANIZATION_NUMBER @gcp-sa-dataplex.iam.gserviceaccount.com
None
Dataproc Metastore Service Account
Primary service agent for metastore.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-metastore.iam.gserviceaccount.com
Dataproc Metastore Service Agent
( roles/metastore.serviceAgent )
Granted on the project.
Deprecated Monitoring Service Account
Service agent for monitoring.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-monitoring.iam.gserviceaccount.com
None
Design Center Service Account
Primary service agent for designcenter.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-designcenter.iam.gserviceaccount.com
DesignCenter Service Agent
( roles/designcenter.serviceAgent )
Granted on the project.
Developer Connect Service Account
Primary service agent for developerconnect.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-devconnect.iam.gserviceaccount.com
Developer Connect Service Agent
( roles/developerconnect.serviceAgent )
Granted on the project.
Dialogflow Service Account for CMEK (prod)
Service agent for dialogflow.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-dialogflow-cmek.iam.gserviceaccount.com
None
Dialogflow Service Agent
Primary service agent for dialogflow.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-dialogflow.iam.gserviceaccount.com
Dialogflow Service Agent
( roles/dialogflow.serviceAgent )
Granted on the project.
Discovery Engine Service Account
Primary service agent for discoveryengine.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-discoveryengine.iam.gserviceaccount.com
Discovery Engine Service Agent
( roles/discoveryengine.serviceAgent )
Granted on the project.
Document AI Warehouse CMEK Infra Spanner Service Account
Service agent for contentwarehouse.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-cloud-cw-cmek.iam.gserviceaccount.com
None
DocumentAI Core Service Agent
Primary service agent for documentai.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-prod-dai-core.iam.gserviceaccount.com
DocumentAI Core Service Agent
( roles/documentaicore.serviceAgent )
Granted on the project.
Edge Container Cluster Service Agent
Service agent for edgecontainer.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-edgecontainercluster.iam.gserviceaccount.com
Edge Container Cluster Service Agent
( roles/edgecontainer.clusterServiceAgent )
Granted on the project.
Edge Container GCR Service Agent
Service agent for edgecontainer.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-edgecontainergcr.iam.gserviceaccount.com
None
Edge Container Service Agent
Primary service agent for edgecontainer.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-edgecontainer.iam.gserviceaccount.com
Edge Container Service Agent
( roles/edgecontainer.serviceAgent )
Granted on the project.
Enterprise Knowledge Graph Service Agent
Primary service agent for enterpriseknowledgegraph.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-cloud-ekg.iam.gserviceaccount.com
Enterprise Knowledge Graph Service Agent
( roles/enterpriseknowledgegraph.serviceAgent )
Granted on the project.
Eventarc Service Agent
Primary service agent for eventarc.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-eventarc.iam.gserviceaccount.com
Eventarc Service Agent
( roles/eventarc.serviceAgent )
Granted on the project.
External Key Management Service Service Account
Primary service agent for cloudkms.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-ekms.iam.gserviceaccount.com
None
Firebase AI Logic Service Account
Primary service agent for firebasevertexai.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-firebasevertexai.iam.gserviceaccount.com
Firebase Machine Learning Service Agent
( roles/firebaseml.serviceAgent )
Granted on the project.
Firebase App Check Service Account
Primary service agent for firebaseappcheck.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-firebaseappcheck.iam.gserviceaccount.com
Firebase App Check Service Agent
( roles/firebaseappcheck.serviceAgent )
Granted on the project.
Firebase App Hosting Service Account
Primary service agent for firebaseapphosting.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-firebaseapphosting.iam.gserviceaccount.com
Firebase App Hosting Service Agent
( roles/firebaseapphosting.serviceAgent )
Granted on the project.
Firebase Crashlytics Service Agent
Primary service agent for firebasecrashlytics.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-crashlytics.iam.gserviceaccount.com
Firebase Crashlytics Service Agent
( roles/firebasecrashlytics.serviceAgent )
Granted on the project.
Firebase Data Connect Service Account
Primary service agent for firebasedataconnect.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-firebasedataconnect.iam.gserviceaccount.com
Firebase Data Connect Service Agent
( roles/firebasedataconnect.serviceAgent )
Granted on the project.
Firebase Extensions Service Agent
Primary service agent for firebaseextensions.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-firebasemods.iam.gserviceaccount.com
Firebase Extensions API Service Agent
( roles/firebasemods.serviceAgent )
Granted on the project.
Firebase Machine Learning Service Account
Primary service agent for firebaseml.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-firebaseml.iam.gserviceaccount.com
Firebase Machine Learning Service Agent
( roles/firebaseml.serviceAgent )
Granted on the project.
Firebase Management Service Agent
Service agent for firebase.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-firebase.iam.gserviceaccount.com
Firebase Service Management Service Agent
( roles/firebase.managementServiceAgent )
Granted on the project.
Firebase Realtime Database Service Agent
Primary service agent for firebasedatabase.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-firebasedatabase.iam.gserviceaccount.com
Firebase Realtime Database Service Agent
( roles/firebasedatabase.serviceAgent )
Granted on the project.
Firebase Rules Service Agent
Primary service agent for firebaserules.googleapis.com .
service- PROJECT_NUMBER @firebase-rules.iam.gserviceaccount.com
Firebase Rules System
( roles/firebaserules.system )
Granted on the project.
Firewall Insights Service Account
Primary service agent for firewallinsights.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-firewallinsights.iam.gserviceaccount.com
Cloud Firewall Insights Service Agent
( roles/firewallinsights.serviceAgent )
Granted on the project.
G Suite Add-ons Service Account
Primary service agent for gsuiteaddons.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-gsuiteaddons.iam.gserviceaccount.com
None
GCS Search Service Account
Service agent for storage.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-storage-search.iam.gserviceaccount.com
None
GKE Dataplane V2 Service Account
Primary service agent for gkedataplanev2.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-gkedataplanev2.iam.gserviceaccount.com
None
GKE Hub API Service Account
Primary service agent for gkehub.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-gkehub.iam.gserviceaccount.com
GKE Hub Service Agent
( roles/gkehub.serviceAgent )
Granted on the project.
Gemini Code Assist Management Service Agent
Primary service agent for geminicodeassistmanagement.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-geminicodeassistmp.iam.gserviceaccount.com
Gemini Code Assist Management Service Agent
( roles/geminicodeassistmanagement.serviceAgent )
Granted on the project.
Gemini Data Analytics Service Account
Primary service agent for geminidataanalytics.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-geminidataanalytics.iam.gserviceaccount.com
None
Gemini for Google Cloud Service Agent
Primary service agent for cloudaicompanion.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-cloudaicompanion.iam.gserviceaccount.com
Gemini for Google Cloud Service Agent
( roles/cloudaicompanion.serviceAgent )
Granted on the project.
Generative Language Service Agent
Primary service agent for generativelanguage.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-generativelanguage.iam.gserviceaccount.com
None
Generative Language Service Agent
Service agent for generativelanguage.googleapis.com .
p- PROJECT_NUMBER - IDENTIFIER @gcp-sa-generativelanguage.iam.gserviceaccount.com
None
Gke On-Prem Service Account
Primary service agent for gkeonprem.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-gkeonprem.iam.gserviceaccount.com
GKE On-Prem Service Agent
( roles/gkeonprem.serviceAgent )
Granted on the project.
Google APIs Service Agent
Service agent used internally by Google Cloud.
PROJECT_NUMBER @cloudservices.gserviceaccount.com
Editor
( roles/editor )
Granted on the project.
Google Cloud Dataproc Resource Manager Node Service Agent
Primary service agent for dataprocrm.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-dataprocrmnode.iam.gserviceaccount.com
Dataproc Resource Manager Node Service Agent
( roles/dataprocrm.nodeServiceAgent )
Granted on the project.
Google Cloud Dataproc Service Agent
Primary service agent for dataproc.googleapis.com .
service- PROJECT_NUMBER @dataproc-accounts.iam.gserviceaccount.com
Dataproc Service Agent
( roles/dataproc.serviceAgent )
Granted on the project.
Google Cloud Functions Service Agent
Primary service agent for cloudfunctions.googleapis.com .
service- PROJECT_NUMBER @gcf-admin-robot.iam.gserviceaccount.com
Cloud Functions Service Agent
( roles/cloudfunctions.serviceAgent )
Granted on the project.
Google Cloud ML Engine Service Agent
Primary service agent for ml.googleapis.com .
service- PROJECT_NUMBER @cloud-ml.iam.gserviceaccount.com
AI Platform Service Agent
( roles/ml.serviceAgent )
Granted on the project.
Google Cloud NetApp Volumes Service Account
Primary service agent for netapp.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-netapp.iam.gserviceaccount.com
None
Google Cloud Network Security Authz Service Account
Service agent for networksecurity.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-ns-authz.iam.gserviceaccount.com
Network Security Authz Service Agent
( roles/networksecurity.authzServiceAgent )
Granted on the project.
Google Cloud OS Config Rollout Service Agent
Service agent for osconfig.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-osconfig-rollout.iam.gserviceaccount.com
Cloud OS Config Rollout Service Agent
( roles/osconfig.rolloutServiceAgent )
Granted on the project.
Google Cloud OS Config Rollout Service Agent
Service agent for osconfig.googleapis.com .
For the folder:
service-folder- FOLDER_NUMBER @gcp-sa-osconfig-rollout.iam.gserviceaccount.com
For the organization:
service-org- ORGANIZATION_NUMBER @gcp-sa-osconfig-rollout.iam.gserviceaccount.com
None
Google Cloud OS Config Service Agent
Primary service agent for osconfig.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-osconfig.iam.gserviceaccount.com
Cloud OS Config Service Agent
( roles/osconfig.serviceAgent )
Granted on the project.
Google Cloud OS Config Service Agent
Service agent for osconfig.googleapis.com .
For the folder:
service-folder- FOLDER_NUMBER @gcp-sa-osconfig.iam.gserviceaccount.com
For the organization:
service-org- ORGANIZATION_NUMBER @gcp-sa-osconfig.iam.gserviceaccount.com
None
Google Cloud Run Service Agent
Primary service agent for run.googleapis.com .
service- PROJECT_NUMBER @serverless-robot-prod.iam.gserviceaccount.com
Cloud Run Service Agent
( roles/run.serviceAgent )
Granted on the project.
Google Cloud Service Extensions Service Account
Service agent for networkservices.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-dep.iam.gserviceaccount.com
None
Google Container Registry Service Agent
Primary service agent for containerregistry.googleapis.com .
service- PROJECT_NUMBER @containerregistry.iam.gserviceaccount.com
Container Registry Service Agent
( roles/containerregistry.ServiceAgent )
Granted on the project.
Google Storage Service Agent
Service agent for storage.googleapis.com .
service- PROJECT_NUMBER @gs-project-accounts.iam.gserviceaccount.com
None
Hypercompute Diagon Service Account
Service agent for hypercomputecluster.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-diagon.iam.gserviceaccount.com
None
IAP Service Account
Primary service agent for iap.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-iap.iam.gserviceaccount.com
None
Identity Pool Resource Identity
Service agent for iam.googleapis.com .
service- PROJECT_NUMBER @gcp-ri-identitypool.iam.gserviceaccount.com
None
Infra Spanner Production Service Account
Service agent for spanner.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-global-spanner.iam.gserviceaccount.com
None
Infrastructure Manager Service Account
Primary service agent for config.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-config.iam.gserviceaccount.com
Infrastructure Manager Service Agent
( roles/cloudconfig.serviceAgent )
Granted on the project.
Integrated Vulnerability Scanner Service Account
Service agent for securitycenter.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-ivs.iam.gserviceaccount.com
None
Internal Cloud Firestore Spanner Service Agent
Service agent for firestore.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-fs-spanner.iam.gserviceaccount.com
None
KRM API Hosting Service Account
Service agent for krmapihosting.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-krmapihosting.iam.gserviceaccount.com
KRM API Hosting Service Agent
( roles/krmapihosting.serviceAgent )
Granted on the project.
KRM API Hosting Service Account
Service agent for krmapihosting.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-krmapihosting-dataplane.iam.gserviceaccount.com
KRM API Hosting AnthosApiEndpoint Service Agent
( roles/krmapihosting.anthosApiEndpointServiceAgent )
Granted on the project.
Kubernetes Engine Node Service Agent
Service agent for container.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-gkenode.iam.gserviceaccount.com
Kubernetes Engine Default Node Service Agent
( roles/container.defaultNodeServiceAgent )
Granted on the project.
Kubernetes Engine Service Agent
Primary service agent for container.googleapis.com .
service- PROJECT_NUMBER @container-engine-robot.iam.gserviceaccount.com
Kubernetes Engine Service Agent
( roles/container.serviceAgent )
Granted on the project.
Legacy Cloud Build service account
Service agent for cloudbuild.googleapis.com .
PROJECT_NUMBER @cloudbuild.gserviceaccount.com
Cloud Build Service Account
( roles/cloudbuild.builds.builder )
Granted on the project.
Livestream Service Account
Primary service agent for livestream.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-livestream.iam.gserviceaccount.com
Live Stream Service Agent
( roles/livestream.serviceAgent )
Granted on the project.
Logging Service Agent
Service agent for logging.googleapis.com .
For the project:
p PROJECT_NUMBER - IDENTIFIER @gcp-sa-logging.iam.gserviceaccount.com
For the folder:
f FOLDER_NUMBER - IDENTIFIER @gcp-sa-logging.iam.gserviceaccount.com
For the organization:
o ORGANIZATION_NUMBER - IDENTIFIER @gcp-sa-logging.iam.gserviceaccount.com
None
Looker Service Account
Primary service agent for looker.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-looker.iam.gserviceaccount.com
Looker Service Agent
( roles/looker.restrictedServiceAgent )
Granted on the project.
Lustre Service Agent
Primary service agent for lustre.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-lustre.iam.gserviceaccount.com
None
Managed Flink Service Agent
Primary service agent for managedflink.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-managedflink.iam.gserviceaccount.com
Managed Flink Service Agent
( roles/managedflink.serviceAgent )
Granted on the project.
Managed Kafka Service Account
Primary service agent for managedkafka.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-managedkafka.iam.gserviceaccount.com
Managed Kafka Service Agent
( roles/managedkafka.serviceAgent )
Granted on the project.
Memorystore Service Agent
Primary service agent for memorystore.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-memorystore.iam.gserviceaccount.com
Cloud Memorystore Service Agent
( roles/memorystore.serviceAgent )
Granted on the project.
Mesh Config Service Account
Primary service agent for meshconfig.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-meshconfig.iam.gserviceaccount.com
Mesh Config Service Agent
( roles/meshconfig.serviceAgent )
Granted on the project.
Model Armor Service Account
Primary service agent for modelarmor.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-modelarmor.iam.gserviceaccount.com
Model Armor Service Agent
( roles/modelarmor.serviceAgent )
Granted on the project.
Monitoring Service Account
Primary service agent for monitoring.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-monitoring-notification.iam.gserviceaccount.com
Monitoring Service Agent
( roles/monitoring.notificationServiceAgent )
Granted on the project.
Multi Cluster Ingress Service Account
Primary service agent for multiclusteringress.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-multiclusteringress.iam.gserviceaccount.com
Multi Cluster Ingress Service Agent
( roles/multiclusteringress.serviceAgent )
Granted on the project.
Multi cluster metering Service Account
Primary service agent for multiclustermetering.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-mcmetering.iam.gserviceaccount.com
Multi-cluster metering Service Agent
( roles/multiclustermetering.serviceAgent )
Granted on the project.
Multi-cluster Service Discovery Service Account
Primary service agent for multiclusterservicediscovery.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-mcsd.iam.gserviceaccount.com
Multi-Cluster Service Discovery Service Agent
( roles/multiclusterservicediscovery.serviceAgent )
Granted on the project.
Network Actions Service Account
Service agent for networkservices.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-networkactions.iam.gserviceaccount.com
Network Actions Service Agent
( roles/networkactions.serviceAgent )
Granted on the project.
Network Connectivity Service Account
Primary service agent for networkconnectivity.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-networkconnectivity.iam.gserviceaccount.com
Network Connectivity Service Agent
( roles/networkconnectivity.serviceAgent )
Granted on the project.
Network Security Service Account
Primary service agent for networksecurity.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-networksecurity.iam.gserviceaccount.com
None
On-Demand Scanning Service Account
Primary service agent for ondemandscanning.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-ondemandscanning.iam.gserviceaccount.com
None
Oracle Database@Google Cloud Service Account
Primary service agent for oracledatabase.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-oci.iam.gserviceaccount.com
Oracle Database@Google Cloud Service Agent
( roles/oci.serviceAgent )
Granted on the project.
Parallelstore Service Agent
Primary service agent for parallelstore.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-parallelstore.iam.gserviceaccount.com
Parallelstore Service Agent
( roles/parallelstore.serviceAgent )
Granted on the project.
Parameter Manager Service Account
Primary service agent for parametermanager.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-pm.iam.gserviceaccount.com
None
Playbook Runner Service Agent
Service agent for integrations.googleapis.com .
For the project:
p PROJECT_NUMBER - IDENTIFIER @gcp-sa-playbooks.iam.gserviceaccount.com
For the folder:
f FOLDER_NUMBER - IDENTIFIER @gcp-sa-playbooks.iam.gserviceaccount.com
For the organization:
o ORGANIZATION_NUMBER - IDENTIFIER @gcp-sa-playbooks.iam.gserviceaccount.com
None
Policy Remediator Service Agent (prod)
Service agent for policyremediator.googleapis.com .
service-org- ORGANIZATION_NUMBER @gcp-sa-v1-remediator.iam.gserviceaccount.com
None
Private CA Service Account
Primary service agent for privateca.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-privateca.iam.gserviceaccount.com
None
Privileged Access Manager Service Agent
Service agent for privilegedaccessmanager.googleapis.com .
For the project:
service- PROJECT_NUMBER @gcp-sa-pam.iam.gserviceaccount.com
For the folder:
service-folder- FOLDER_NUMBER @gcp-sa-pam.iam.gserviceaccount.com
For the organization:
service-org- ORGANIZATION_NUMBER @gcp-sa-pam.iam.gserviceaccount.com
None
Progressive Rollout Service Agent
Primary service agent for progressiverollout.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-progrollout.iam.gserviceaccount.com
Progressive Rollout Service Agent
( roles/progressiverollout.serviceAgent )
Granted on the project.
Progressive Rollout Service Agent
Service agent for progressiverollout.googleapis.com .
For the folder:
service-folder- FOLDER_NUMBER @gcp-sa-progrollout.iam.gserviceaccount.com
For the organization:
service-org- ORGANIZATION_NUMBER @gcp-sa-progrollout.iam.gserviceaccount.com
None
Pub/Sub Lite Service Account
Primary service agent for pubsublite.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-pubsublite.iam.gserviceaccount.com
Pub/Sub Lite Service Agent
( roles/pubsublite.serviceAgent )
Granted on the project.
Rapid Migration Assessment Service Account
Primary service agent for rapidmigrationassessment.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-rma.iam.gserviceaccount.com
RMA Service Agent
( roles/rapidmigrationassessment.serviceAgent )
Granted on the project.
Remote Build Execution Service Agent
Primary service agent for remotebuildexecution.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-rbe.iam.gserviceaccount.com
None
Remote Build Execution Service Agent
Service agent for remotebuildexecution.googleapis.com .
service- PROJECT_NUMBER @remotebuildexecution.iam.gserviceaccount.com
Remote Build Execution Service Agent
( roles/remotebuildexecution.serviceAgent )
Granted on the project.
Remote Build Execution Service Agent
Service agent for remotebuildexecution.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-remotebuild.iam.gserviceaccount.com
Remote Build Execution Service Agent
( roles/remotebuildexecution.serviceAgent )
Granted on the project.
Retail Service Account
Primary service agent for retail.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-retail.iam.gserviceaccount.com
Retail Service Agent
( roles/retail.serviceAgent )
Granted on the project.
SCC CMEK Spanner Service Agent (PROD)
Service agent for securitycenter.googleapis.com .
service-org- ORGANIZATION_NUMBER @gcp-sa-sccspanner.iam.gserviceaccount.com
None
SaaS Service Management Service Account
Primary service agent for saasservicemgmt.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-saasservicemgmt.iam.gserviceaccount.com
SaaS Service Management Service Agent
( roles/saasservicemgmt.serviceAgent )
Granted on the project.
Secret Manager Service Account
Primary service agent for secretmanager.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-secretmanager.iam.gserviceaccount.com
None
Secure Source Manager Service Account
Primary service agent for securesourcemanager.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-sourcemanager.iam.gserviceaccount.com
Secure Source Manager Service Agent
( roles/securesourcemanager.serviceAgent )
Granted on the project.
Secure Web Proxy Service Account
Service agent for networkservices.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-securewebproxy.iam.gserviceaccount.com
None
Serverless Integrations Service Account
Primary service agent for runapps.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-runapps.iam.gserviceaccount.com
Serverless Integrations Service Agent
( roles/runapps.serviceAgent )
Granted on the project.
Serverless VPC Access Service Agent
Primary service agent for vpcaccess.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-vpcaccess.iam.gserviceaccount.com
Serverless VPC Access Service Agent
( roles/vpcaccess.serviceAgent )
Granted on the project.
Service Agent Manager
Service agent used internally by Google Cloud.
service-agent-manager@system.gserviceaccount.com
None
Service Consumer Management Service Agent
Primary service agent for serviceconsumermanagement.googleapis.com .
service- PROJECT_NUMBER @service-consumer-management.iam.gserviceaccount.com
None
Service Directory Service Account
Primary service agent for servicedirectory.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-servicedirectory.iam.gserviceaccount.com
Service Directory Service Agent
( roles/servicedirectory.serviceAgent )
Granted on the project.
Service Networking Service Agent
Primary service agent for servicenetworking.googleapis.com .
service- PROJECT_NUMBER @service-networking.iam.gserviceaccount.com
Service Networking Service Agent
( roles/servicenetworking.serviceAgent )
Granted on the project.
Spectrum SAS Service Account
Primary service agent for sasportal.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-spectrumsas.iam.gserviceaccount.com
Spectrum SAS Service Agent
( roles/spectrumsas.serviceAgent )
Granted on the project.
Speech-to-Text Service Account
Primary service agent for speech.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-speech.iam.gserviceaccount.com
Cloud Speech-to-Text Service Agent
( roles/speech.serviceAgent )
Granted on the project.
Storage Insights Service Account
Primary service agent for storageinsights.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-storageinsights.iam.gserviceaccount.com
StorageInsights Service Agent
( roles/storageinsights.serviceAgent )
Granted on the project.
Storage Transfer Service Service Agent
Service agent for storagetransfer.googleapis.com .
project- PROJECT_NUMBER @storage-transfer-service.iam.gserviceaccount.com
None
Stream Service Account
Primary service agent for stream.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-stream.iam.gserviceaccount.com
Stream Service Agent
( roles/stream.serviceAgent )
Granted on the project.
TPU Service Agent
Primary service agent for tpu.googleapis.com .
service- PROJECT_NUMBER @cloud-tpu.iam.gserviceaccount.com
Cloud TPU API Service Agent
( roles/tpu.serviceAgent )
Granted on the project.
TPU Service Agent (v2)
Service agent for tpu.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-tpu.iam.gserviceaccount.com
Cloud TPU V2 API Service Agent
( roles/cloudtpu.serviceAgent )
Granted on the project.
Transcoder Service Account
Primary service agent for transcoder.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-transcoder.iam.gserviceaccount.com
Transcoder Service Agent
( roles/transcoder.serviceAgent )
Granted on the project.
Transfer Appliance Service Account
Primary service agent for transferappliance.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-transferappliance.iam.gserviceaccount.com
None
VMwareEngine Service Account
Primary service agent for vmwareengine.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-vmwareengine.iam.gserviceaccount.com
VMware Engine Service Agent
( roles/vmwareengine.serviceAgent )
Granted on the project.
Vector Search Cmek Service Account
Service agent for vectorsearch.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-vs-cmek.iam.gserviceaccount.com
None
Vector Search Service Account
Primary service agent for vectorsearch.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-vectorsearch.iam.gserviceaccount.com
Vector Search Service Agent
( roles/vectorsearch.serviceAgent )
Granted on the project.
Vertex AI Agent Sandbox Service Agent
Service agent for aiplatform.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-vertex-sandbox.iam.gserviceaccount.com
Vertex AI Agent Sandbox Service Agent
( roles/aiplatform.agentSandboxServiceAgent )
Granted on the project.
Vertex AI Ancillary Secure Fine Tuning Service Agent
Service agent for aiplatform.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-vertex-shtune.iam.gserviceaccount.com
Vertex AI User
( roles/aiplatform.user )
Granted on the project.
Vertex AI Batch Prediction Service Agent
Service agent for aiplatform.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-vertex-bp.iam.gserviceaccount.com
Vertex AI Batch Prediction Service Agent
( roles/aiplatform.batchPredictionServiceAgent )
Granted on the project.
Vertex AI Colab Service Account
Service agent for aiplatform.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-vertex-nb.iam.gserviceaccount.com
Vertex AI Colab Service Agent
( roles/aiplatform.colabServiceAgent )
Granted on the project.
Vertex AI Extension Service Agent
Service agent for aiplatform.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-vertex-ex.iam.gserviceaccount.com
Vertex AI Extension Service Agent
( roles/aiplatform.extensionServiceAgent )
Granted on the project.
Vertex AI Extension Service Agent for Custom Code
Service agent for aiplatform.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-vertex-ex-cc.iam.gserviceaccount.com
Vertex AI Extension Custom Code Service Agent
( roles/aiplatform.extensionCustomCodeServiceAgent )
Granted on the project.
Vertex AI Logging Service Agent
Service agent for aiplatform.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-vertex-logging.iam.gserviceaccount.com
None
Vertex AI Managed OSS Fine Tuning Service Agent
Service agent for aiplatform.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-vertex-moss-ft.iam.gserviceaccount.com
Vertex AI Tuning Service Agent
( roles/aiplatform.tuningServiceAgent )
Granted on the project.
Vertex AI Model Monitoring Service Agent
Service agent for aiplatform.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-vertex-mm.iam.gserviceaccount.com
Vertex AI Model Monitoring Service Agent
( roles/aiplatform.modelMonitoringServiceAgent )
Granted on the project.
Vertex AI Notebook Service Account
Service agent for aiplatform.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-aiplatform-vm.iam.gserviceaccount.com
Vertex AI Notebook Service Agent
( roles/aiplatform.notebookServiceAgent )
Granted on the project.
Vertex AI Online Prediction Service Agent
Service agent for aiplatform.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-vertex-op.iam.gserviceaccount.com
Vertex AI Online Prediction Service Agent
( roles/aiplatform.onlinePredictionServiceAgent )
Granted on the project.
Vertex AI Secure Fine Tuning Service Agent
Service agent for aiplatform.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-vertex-tune.iam.gserviceaccount.com
Vertex AI Tuning Service Agent
( roles/aiplatform.tuningServiceAgent )
Granted on the project.
Vertex AI Telemetry Service Agent
Service agent for aiplatform.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-vertex-telemetry.iam.gserviceaccount.com
Vertex AI Telemetry Service Agent
( roles/aiplatform.telemetryServiceAgent )
Granted on the project.
Vertex AI Training Cluster Service Agent
Service agent for aiplatform.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-vertex-vtc.iam.gserviceaccount.com
None
Vertex Agent Service Agent
Service agent for aiplatform.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-vertex-agent.iam.gserviceaccount.com
None
Vertex RAG Data Service Agent
Service agent for aiplatform.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-vertex-rag.iam.gserviceaccount.com
Vertex AI RAG Data Service Agent
( roles/aiplatform.ragServiceAgent )
Granted on the project.
Virtual Machine Threat Detection Service Account
Service agent for securitycenter.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-scc-vmtd.iam.gserviceaccount.com
None
Vision AI Service Account
Primary service agent for visionai.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-visionai.iam.gserviceaccount.com
Cloud Vision AI Service Agent
( roles/visionai.serviceAgent )
Granted on the project.
Workload Manager Service Account
Primary service agent for workloadmanager.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-workloadmanager.iam.gserviceaccount.com
Workload Manager Service Agent
( roles/workloadmanager.serviceAgent )
Granted on the project.
Workstations VM Default Service Account
Service agent for workstations.googleapis.com .
service- PROJECT_NUMBER @gcp-sa-workstationsvm.iam.gserviceaccount.com
None
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
