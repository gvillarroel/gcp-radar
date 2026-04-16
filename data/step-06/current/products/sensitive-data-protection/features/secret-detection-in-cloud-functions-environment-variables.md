---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T12:39:34.355Z"
product_name: "Sensitive Data Protection"
product_slug: "sensitive-data-protection"
feature_name: "Secret detection in Cloud Functions environment variables"
feature_slug: "secret-detection-in-cloud-functions-environment-variables"
latest_feature_date: "2023-11-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/secrets-discovery"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-event-threat-detection-overview"
keywords:
  - "functions"
  - "environment"
  - "variables"
  - "secret"
  - "detection"
  - "detects"
---

# Secret detection in Cloud Functions environment variables

Product: Sensitive Data Protection
Coverage: MEDIUM

## Step 02 Summary

Sensitive Data Protection detects secrets in Cloud Functions environment variables and sends findings to Security Command Center.

## Extended Definition

Sensitive Data Protection detects secrets in Cloud Functions environment variables and sends findings to Security Command Center.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sensitive-data-protection/docs/secrets-discovery](https://docs.cloud.google.com/sensitive-data-protection/docs/secrets-discovery)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-event-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-event-threat-detection-overview)

## Supporting Pages

### "Report secrets in environment variables to Security Command Center \_|\_\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/secrets-discovery](https://docs.cloud.google.com/sensitive-data-protection/docs/secrets-discovery)
- Source ID: `site-docs-reference-required-16`
- Final score: 194
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If Sensitive Data Protection detects secrets in environment variables, the findings are sent to Security Command Center and are subject to its data handling processes.
- This is a security vulnerability because environment variables are stored unencrypted, and accessible to all users who have access to the code." , "eventTime" : " DATE TIME " , "findingClass" : "VULNERABILITY" , "findingProviderId" : "organizations/ ORGANIZATION ID /firstPartyFindingProviders/dlp" , "mute" : " MUTE STATUS " , "name" : "organizations/ ORGANIZATION ID /sources/ SOURCE ID /findings/ FINDING ID " , "parent" : "organizations/ ORGANIZATION ID /sources/ SOURCE ID " , "parentDisplayName" : "Sensitive Data Protection" , "resourceName" : "//cloudfunctions.googleapis.com/projects/ PROJECT ID /locations/ REGION /functions/ FUNCTION ID " , }, "resource" : { "name" : "//cloudfunctions.googleapis.com/projects/ PROJECT ID /locations/ REGION /functions/ FUNCTION ID " , "display name" : "projects/ PROJECT ID /locations/ REGION /functions/ FUNCTION ID " , "type" : "google.cloudfunctions.CloudFunction" , "project name" : "//cloudresourcemanager.googleapis.com/projects/ PROJECT NUMBER " , "project display name" : " PROJECT DISPLAY NAME " , "parent name" : "//cloudresourcemanager.googleapis.com/projects/ PROJECT NUMBER " , "parent display name" : " PARENT DISPLAY NAME " } } Finding generation latency Depending on the size of your organization, Sensitive Data Protection findings can start appearing in Security Command Center within a few minutes after you enable sensitive data discovery.
- List all Secrets in environment variables findings state = "ACTIVE" AND NOT mute = "MUTED" AND category = "SECRETS IN ENVIRONMENT VARIABLES" List all Secrets in environment variables findings for a particular project state = "ACTIVE" AND NOT mute = "MUTED" AND category = "SECRETS IN ENVIRONMENT VARIABLES" AND resource . project name = "//cloudresourcemanager.googleapis.com/projects/ PROJECT NUMBER " Replace the following: PROJECT NUMBER : the numerical ID of the project that you want to query for Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Secrets in environment variables { "finding" : { "canonicalName" : "projects/ PROJECT NUMBER /sources/ SOURCE ID /findings/ FINDING ID " , "category" : "SECRETS IN ENVIRONMENT VARIABLES" , "compliances" : [ { "standard" : "cis" , "version" : "1.3" , "ids" : [ "1.18" ] } ], "createTime" : " DATE TIME " , "description" : "The affected resource is storing credentials or other secret information in its environment variables.

### Detection services \_|\_ Security Command Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)
- Source ID: `site-docs-reference-2`
- Final score: 189
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported assets : cloudfunctions. googleapis. com/ CloudFunction run. googleapis. com/ Revision Remediation : For Cloud Run functions environment variables, remove the secret from the environment variable and store it in Secret Manager instead.
- Compliance standards : Not mapped Secrets in environment variables Category name in the API: SECRETS IN ENVIRONMENT VARIABLES Finding description : There are secrets —such as passwords, authentication tokens, and Google Cloud credentials—in environment variables.
- To enable this detector, see Report secrets in environment variables to Security Command Center in the Sensitive Data Protection documentation.
- Event Threat Detection finding types Data destruction Event Threat Detection detects data destruction by examining audit logs from the Backup and DR Service Management Server for the following scenarios: Deletion of a backup image Deletion of all backup images associated with an application Deletion of a backup/recovery appliance Data exfiltration Event Threat Detection detects data exfiltration from BigQuery and Cloud SQL by examining audit logs for the following scenarios: An identity associated with an AI agent deployed to Vertex AI Agent Engine initiated a BigQuery data exfiltration by saving resources outside of your organization.

### "Overview of Event Threat Detection \_|\_ Security Command Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-event-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-event-threat-detection-overview)
- Source ID: `site-docs-reference-2`
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Expand the node in the last row of the table to see All medium-sensitivity roles Data storage roles : IAM roles that include permissions to view and execute data storage services Examples: roles/cloudsql.viewer roles/cloudsql.client roles/bigquery.dataViewer roles/bigquery.user roles/spanner.databaseReader roles/spanner.databaseUser Expand the node in the last row of the table to see All medium-sensitivity roles All medium-sensitivity roles Access Approval roles/accessapproval.approver roles/accessapproval.configEditor Access Context Manager roles/accesscontextmanager.gcpAccessAdmin roles/accesscontextmanager.policyAdmin roles/accesscontextmanager.policyEditor Actions roles/actions.Admin AI Platform roles/ml.admin roles/ml.developer roles/ml.jobOwner roles/ml.modelOwner roles/ml.modelUser API Gateway roles/apigateway.admin App Engine roles/appengine.appAdmin roles/appengine.appCreator roles/appengine.serviceAdmin Artifact Analysis roles/containeranalysis.admin roles/containeranalysis.notes.attacher roles/containeranalysis.notes.editor roles/containeranalysis.occurrences.editor AutoML roles/automl.admin roles/automl.editor BigQuery roles/bigquery.admin roles/bigquery.dataEditor roles/bigquery.dataOwner roles/bigquery.dataViewer roles/bigquery.resourceAdmin roles/bigquery.resourceEditor roles/bigquery.resourceViewer roles/bigquery.user Bigtable roles/bigtable.admin roles/bigtable.reader roles/bigtable.user Binary Authorization roles/binaryauthorization.attestorsAdmin roles/binaryauthorization.attestorsEditor roles/binaryauthorization.policyAdmin roles/binaryauthorization.policyEditor Cloud Autoscaling roles/autoscaling.metricsWriter roles/autoscaling.sitesAdmin roles/autoscaling.stateWriter Cloud Build roles/cloudbuild.builds.builder roles/cloudbuild.builds.editor Cloud Deployment Manager roles/deploymentmanager.editor roles/deploymentmanager.typeEditor Cloud Endpoints roles/endpoints.portalAdmin Beta Cloud Monitoring roles/monitoring.admin roles/monitoring.alertPolicyEditor roles/monitoring.dashboardEditor roles/monitoring.editor roles/monitoring.metricWriter roles/monitoring.notificationChannelEditor roles/monitoring.servicesEditor roles/monitoring.uptimeCheckConfigEditor Cloud Run roles/run.admin roles/run.developer Cloud Run functions roles/cloudfunctions.admin roles/cloudfunctions.developer roles/cloudfunctions.invoker Cloud Runtime Configuration API roles/runtimeconfig.admin Cloud Scheduler roles/cloudscheduler.admin Cloud Source Repositories roles/source.admin roles/source.writer Cloud SQL roles/cloudsql.admin roles/cloudsql.editor roles/cloudsql.client roles/cloudsql.instanceUser roles/cloudsql.viewer Cloud Storage roles/storage.admin roles/storage.hmacKeyAdmin roles/storage.objectAdmin roles/storage.objectCreator roles/storage.objectViewer roles/storage.legacyBucketOwner roles/storage.legacyBucketWriter roles/storage.legacyBucketReader roles/storage.legacyObjectOwner roles/storage.legacyObjectReader Cloud Tasks roles/cloudtasks.admin roles/cloudtasks.enqueuer roles/cloudtasks.queueAdmin roles/cloudtasks.taskDeleter Cloud TPU tpu.admin Cloud Trace roles/cloudtrace.admin roles/cloudtrace.agent Compute Engine roles/compute.imageUser roles/compute.osLoginExternalUser roles/osconfig.guestPolicyAdmin roles/osconfig.guestPolicyEditor roles/osconfig.osPolicyAssignmentAdmin roles/osconfig.osPolicyAssignmentEditor roles/osconfig.patchDeploymentAdmin Customer Usage Data Processing roles/dataprocessing.admin Data Catalog roles/datacatalog.admin roles/datacatalog.categoryAdmin roles/datacatalog.entryGroupCreator roles/datacatalog.entryGroupOwner roles/datacatalog.entryOwner Dataflow roles/dataflow.admin roles/dataflow.developer Managed Service for Apache Spark roles/dataproc.admin roles/dataproc.editor Dataproc Metastore roles/metastore.admin roles/metastore.editor Datastore roles/datastore.importExportAdmin roles/datastore.indexAdmin roles/datastore.owner roles/datastore.user Eventarc roles/eventarc.admin roles/eventarc.developer roles/eventarc.eventReceiver Filestore roles/file.editor Firebase roles/firebase.admin roles/firebase.analyticsAdmin roles/firebase.developAdmin roles/firebase.growthAdmin roles/firebase.qualityAdmin roles/firebaseabt.admin roles/firebaseappcheck.admin roles/firebaseappdistro.admin roles/firebaseauth.admin roles/firebasecrash.symbolMappingsAdmin roles/firebasecrashlytics.admin roles/firebasedatabase.admin roles/firebasedynamiclinks.admin roles/firebasehosting.admin roles/firebaseinappmessaging.admin roles/firebaseml.admin roles/firebasenotifications.admin roles/firebaseperformance.admin roles/firebasepredictions.admin roles/firebaserules.admin roles/firebasestorage.admin roles/cloudconfig.admin roles/cloudtestservice.testAdmin Google Cloud VMware Engine vmwareengine.vmwareengineAdmin Google Kubernetes Engine roles/container.admin roles/container.clusterAdmin roles/container.developer Google Kubernetes Engine Hub roles/gkehub.admin roles/gkehub.gatewayAdmin roles/gkehub.connect Google Security Operations Service Management roles/chroniclesm.admin Google Workspace roles/gsuiteaddons.developer Identity-Aware Proxy roles/iap.admin roles/iap.settingsAdmin Identity Platform roles/identityplatform.admin Identity Toolkit roles/identitytoolkit.admin Managed Service for Microsoft Active Directory roles/managedidentities.admin roles/managedidentities.domainAdmin roles/managedidentities.viewer Memorystore for Redis roles/redis.admin roles/redis.editor OAuthConfig roles/oauthconfig.editor On-Demand Scanning API roles/ondemandscanning.admin Ops Config Monitoring roles/opsconfigmonitoring.resourceMetadata.writer Organization Policy Service roles/axt.admin roles/orgpolicy.policyAdmin Proximity Beacon roles/proximitybeacon.attachmentEditor roles/proximitybeacon.beaconEditor Pub/Sub roles/pubsub.admin roles/pubsub.editor Pub/Sub Lite roles/pubsublite.admin roles/pubsublite.editor roles/pubsublite.publisher reCAPTCHA roles/recaptchaenterprise.admin roles/recaptchaenterprise.agent Recommendations roles/automlrecommendations.admin roles/automlrecommendations.editor Recommender roles/recommender.billingAccountCudAdmin roles/recommender.cloudAssetInsightsAdmin roles/recommender.cloudsqlAdmin roles/recommender.computeAdmin roles/recommender.firewallAdmin roles/recommender.iamAdmin roles/recommender.productSuggestionAdmin roles/recommender.projectCudAdmin Resource Manager roles/resourcemanager.folderAdmin roles/resourcemanager.folderCreator roles/resourcemanager.folderEditor roles/resourcemanager.folderIamAdmin roles/resourcemanager.folderMover roles/resourcemanager.lienModifier roles/resourcemanager.organizationAdmin roles/resourcemanager.projectCreator roles/resourcemanager.projectDeleter roles/resourcemanager.projectIamAdmin roles/resourcemanager.projectMover roles/resourcemanager.tagAdmin Resource Settings roles/resourcesettings.admin Retail API roles/retail.admin roles/retail.editor Serverless VPC Access roles/vpcaccess.admin Service Consumer Management roles/serviceconsumermanagement.tenancyUnitsAdmin Spanner roles/spanner.admin roles/spanner.backupAdmin roles/spanner.backupWriter roles/spanner.databaseAdmin roles/spanner.restoreAdmin roles/spanner.databaseReader roles/spanner.databaseUser Storage Transfer Service roles/storagetransfer.admin roles/storagetransfer.user Vertex AI roles/aiplatform.admin roles/aiplatform.featurestoreAdmin roles/aiplatform.migrator roles/aiplatform.user Vertex AI Workbench user-managed notebooks roles/notebooks.admin roles/notebooks.legacyAdmin Workflows roles/workflows.admin roles/workflows.editor Log types and activation requirements This section lists the logs that Event Threat Detection uses, along with the threats that Event Threat Detection looks for in each log, and what, if anything, you need to do to turn on each log.
- This could allow an untrusted or compromised container to escalate privileges by accessing and controlling environment variables, memory, and other sensitive data from processes running in other containers.
- Specifically, the rule detects whether the actor checked for API access on the following objects: (all) cluster-admin ClusterRole Secret Findings are classified as Low severity by default.
- Event Threat Detection rules Rules define the type of threats that Event Threat Detection detects and the types of logs that must be enabled for detectors to work.

