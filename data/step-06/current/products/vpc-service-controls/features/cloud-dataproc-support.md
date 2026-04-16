---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:13.573Z"
product_name: "VPC Service Controls"
product_slug: "vpc-service-controls"
feature_name: "Cloud Dataproc support"
feature_slug: "cloud-dataproc-support"
latest_feature_date: "2018-12-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc-service-controls/docs/supported-products"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/restricted-vip-services"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooting"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/resources"
keywords:
  - "dataproc"
  - "vpc"
  - "controls"
  - "supports"
  - "protecting"
  - "resources"
---

# Cloud Dataproc support

Product: VPC Service Controls
Coverage: MEDIUM

## Step 02 Summary

VPC Service Controls supports protecting Cloud Dataproc resources.

## Extended Definition

VPC Service Controls supports protecting Cloud Dataproc resources.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products)
- [https://docs.cloud.google.com/vpc-service-controls/docs/restricted-vip-services](https://docs.cloud.google.com/vpc-service-controls/docs/restricted-vip-services)
- [https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooting](https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooting)
- [https://docs.cloud.google.com/vpc-service-controls/docs/resources](https://docs.cloud.google.com/vpc-service-controls/docs/resources)

## Supporting Pages

### "Supported products and limitations \_|\_ VPC Service Controls \_|\_ Google\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products)
- Source ID: `site-docs-reference-2`
- Final score: 209
- Re-rank relevance: N/A

Evidence snippets:
- Service name krmapihosting.googleapis.com Details To use Config Controller with VPC Service Controls, you must enable the following APIs inside your perimeter: Cloud Monitoring API ( monitoring.googleapis.com ) Container Registry API ( containerregistry.googleapis.com ) Google Cloud Observability API ( logging.googleapis.com ) Security Token Service API ( sts.googleapis.com ) Cloud Storage API ( storage.googleapis.com ) If you provision resources with Config Controller, you must enable the API for those resources in your service perimeter.
- You get a response with a list of methods and permissions. availableOnRestrictedVip: RESTRICTED VIP STATUS knownLimitations: LIMITATIONS STATUS name: SERVICE ADDRESS serviceSupportStage: SERVICE STATUS supportedMethods: METHODS LIST . . . title: SERVICE NAME In this response, METHODS LIST lists all the methods and permissions supported by VPC Service Controls for the specified service.
- Limitations VPC Service Controls supports Cloud Scheduler jobs only with the following targets: Cloud Run run.app endpoints Cloud Run functions functions.net endpoints Google Cloud APIs that are VPC Service Controls-compliant (either in Preview or GA)—can be in a different Google Cloud project from your Cloud Scheduler job.
- Limitations Resources such as procurement request and access request, which the Commerce Org Governance API creates at the project level, surface up to the organization level and are reviewed by the Organization Administrator without enforcing VPC Service Controls policies.

### "Services supported by the restricted VIP \_|\_ VPC Service Controls \_|\_\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/restricted-vip-services](https://docs.cloud.google.com/vpc-service-controls/docs/restricted-vip-services)
- Source ID: `site-docs-reference`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- Services Support stage discovery.googleapis.com Restricted VIP only oauth2.googleapis.com Restricted VIP only openidconnect.googleapis.com Restricted VIP only reauth.googleapis.com Restricted VIP only accessapproval.googleapis.com GA accesscontextintelligence.googleapis.com GA addressvalidation.googleapis.com GA aiplatform.googleapis.com GA alloydb.googleapis.com GA analyticshub.googleapis.com GA apigee.googleapis.com GA apigeeconnect.googleapis.com GA apihub.googleapis.com GA apikeys.googleapis.com GA apphub.googleapis.com GA artifactregistry.googleapis.com GA assuredoss.googleapis.com GA automl.googleapis.com GA autoscaling.googleapis.com GA backupdr.googleapis.com GA baremetalsolution.googleapis.com GA batch.googleapis.com GA beyondcorp.googleapis.com GA biglake.googleapis.com GA bigquery.googleapis.com GA bigquerydatapolicy.googleapis.com GA bigquerydatatransfer.googleapis.com GA bigquerymigration.googleapis.com GA bigtable.googleapis.com GA binaryauthorization.googleapis.com GA blockchainnodeengine.googleapis.com GA certificatemanager.googleapis.com GA ces.googleapis.com GA cloud.googleapis.com GA cloudaicompanion.googleapis.com GA cloudasset.googleapis.com GA cloudbuild.googleapis.com GA cloudcontrolspartner.googleapis.com GA clouddeploy.googleapis.com GA clouderrorreporting.googleapis.com GA cloudfunctions.googleapis.com GA cloudkms.googleapis.com GA cloudprofiler.googleapis.com GA cloudquotas.googleapis.com GA cloudscheduler.googleapis.com GA cloudsearch.googleapis.com GA cloudtasks.googleapis.com GA cloudtrace.googleapis.com GA composer.googleapis.com GA compute.googleapis.com GA confidentialcomputing.googleapis.com GA config.googleapis.com GA configdelivery.googleapis.com GA connectgateway.googleapis.com GA connectors.googleapis.com GA contactcenteraiplatform.googleapis.com GA contactcenterinsights.googleapis.com GA container.googleapis.com GA containeranalysis.googleapis.com GA containerfilesystem.googleapis.com GA containerregistry.googleapis.com GA containersecurity.googleapis.com GA containerthreatdetection.googleapis.com GA contentwarehouse.googleapis.com GA databasecenter.googleapis.com GA databaseinsights.googleapis.com GA datacatalog.googleapis.com GA dataflow.googleapis.com GA dataform.googleapis.com GA datafusion.googleapis.com GA datalineage.googleapis.com GA datamigration.googleapis.com GA datapipelines.googleapis.com GA dataplex.googleapis.com GA dataproc.googleapis.com GA datastream.googleapis.com GA developerconnect.googleapis.com GA discoveryengine.googleapis.com GA dlp.googleapis.com GA dns.googleapis.com GA documentai.googleapis.com GA earthengine.googleapis.com GA edgecontainer.googleapis.com GA edgenetwork.googleapis.com GA essentialcontacts.googleapis.com GA eventarc.googleapis.com GA eventarcpublishing.googleapis.com GA file.googleapis.com GA financialservices.googleapis.com GA firebaseappcheck.googleapis.com GA firebaseapphosting.googleapis.com GA firebasedataconnect.googleapis.com GA firebaserules.googleapis.com GA firebasevertexai.googleapis.com GA firestore.googleapis.com GA fpnv.googleapis.com GA gameservices.googleapis.com GA gkebackup.googleapis.com GA gkeconnect.googleapis.com GA gkehub.googleapis.com GA gkemulticloud.googleapis.com GA gkeonprem.googleapis.com GA healthcare.googleapis.com GA hypercomputecluster.googleapis.com GA iamcredentials.googleapis.com GA iap.googleapis.com GA iaptunnel.googleapis.com GA identitytoolkit.googleapis.com GA ids.googleapis.com GA integrations.googleapis.com GA kmsinventory.googleapis.com GA krmapihosting.googleapis.com GA kubernetesmetadata.googleapis.com GA language.googleapis.com GA licensemanager.googleapis.com GA livestream.googleapis.com GA logging.googleapis.com GA looker.googleapis.com GA lustre.googleapis.com GA maintenance.googleapis.com GA managedidentities.googleapis.com GA managedkafka.googleapis.com GA memcache.googleapis.com GA memorystore.googleapis.com GA meshca.googleapis.com GA meshconfig.googleapis.com GA metastore.googleapis.com GA microservices.googleapis.com GA migrationcenter.googleapis.com GA ml.googleapis.com GA modelarmor.googleapis.com GA monitoring.googleapis.com GA netapp.googleapis.com GA networkconnectivity.googleapis.com GA networkmanagement.googleapis.com GA networksecurity.googleapis.com GA networkservices.googleapis.com GA notebooks.googleapis.com GA ondemandscanning.googleapis.com GA opsconfigmonitoring.googleapis.com GA oracledatabase.googleapis.com GA orgpolicy.googleapis.com GA osconfig.googleapis.com GA oslogin.googleapis.com GA parallelstore.googleapis.com GA parametermanager.googleapis.com GA policysimulator.googleapis.com GA policytroubleshooter.googleapis.com GA privateca.googleapis.com GA privilegedaccessmanager.googleapis.com GA publicca.googleapis.com GA pubsub.googleapis.com GA pubsublite.googleapis.com GA rapidmigrationassessment.googleapis.com GA recaptchaenterprise.googleapis.com GA recommender.googleapis.com GA redis.googleapis.com GA run.googleapis.com GA secretmanager.googleapis.com GA securesourcemanager.googleapis.com GA securetoken.googleapis.com GA securitycenter.googleapis.com GA securitycentermanagement.googleapis.com GA servicecontrol.googleapis.com GA servicedirectory.googleapis.com GA servicehealth.googleapis.com GA servicenetworking.googleapis.com GA serviceusage.googleapis.com GA spanner.googleapis.com GA speakerid.googleapis.com GA speech.googleapis.com GA sqladmin.googleapis.com GA ssh-serialport.googleapis.com GA storage.googleapis.com GA storagebatchoperations.googleapis.com GA storageinsights.googleapis.com GA storagetransfer.googleapis.com GA sts.googleapis.com GA telemetry.googleapis.com GA texttospeech.googleapis.com GA timeseriesinsights.googleapis.com GA tpu.googleapis.com GA trafficdirector.googleapis.com GA transcoder.googleapis.com GA translate.googleapis.com GA videointelligence.googleapis.com GA videostitcher.googleapis.com GA vision.googleapis.com GA visualinspection.googleapis.com GA vmmigration.googleapis.com GA vmwareengine.googleapis.com GA vpcaccess.googleapis.com GA webrisk.googleapis.com GA websecurityscanner.googleapis.com GA workflows.googleapis.com GA workloadmanager.googleapis.com GA workstations.googleapis.com GA adsdatahub.googleapis.com Beta support agentregistry.googleapis.com Beta support apptopology.googleapis.com Beta support assuredworkloads.googleapis.com Beta support auditmanager.googleapis.com Beta support businessaicode.googleapis.com Beta support chronicle.googleapis.com Beta support chronicleservicemanager.googleapis.com Beta support cloudcode.googleapis.com Beta support cloudlocationfinder.googleapis.com Beta support cloudresourcemanager.googleapis.com Beta support cloudsecuritycompliance.googleapis.com Beta support cloudsupport.googleapis.com Beta support commerceorggovernance.googleapis.com Beta support dataprocgdc.googleapis.com Beta support dataprocrm.googleapis.com Beta support designcenter.googleapis.com Beta support dialogflow.googleapis.com Beta support domains.googleapis.com Beta support firebasecrashlytics.googleapis.com Beta support geminicloudassist.googleapis.com Beta support geminidataanalytics.googleapis.com Beta support geocoding-backend.googleapis.com Beta support iam.googleapis.com Beta support lifesciences.googleapis.com Beta support places.googleapis.com Beta support retail.googleapis.com Beta support saasservicemgmt.googleapis.com Beta support seclm.googleapis.com Beta support vectorsearch.googleapis.com Beta support visionai.googleapis.com Beta support What's next To configure private connectivity, see Set up private connectivity to Google APIs and services .
- In addition to the services that VPC Service Controls supports, the restricted VIP supports several additional services as dependencies.
- The restricted VIP supports all of the APIs that a VPC Service Controls can protect.
- Home Documentation Networking VPC Service Controls Guides Send feedback Services supported by the restricted VIP Stay organized with collections Save and categorize content based on your preferences.

### "Troubleshoot common issues \_|\_ VPC Service Controls \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooting](https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooting)
- Source ID: `site-docs-reference-2`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- For example, suppose the following command is used: gcloud logging sinks describe example-sink The command returns the following output: destination : bigquery . googleapis . com / projects / corp - resources - public / datasets / logs filter : - resource . type = "audited resource" resource . labels . service = "bigquery.googleapis.com" name : example - sink outputVersionFormat : V2 writerIdentity : serviceAccount : p927005422713 - 439672 @ gcp - sa - logging . iam.gserviceaccount.com The following audit log record is generated: { insertId : "e5i2i8cbqw" logName : "projects/perimeter-network/logs/cloudaudit.googleapis.com %2F policy" protoPayload : { @ type : "type.googleapis.com/google.cloud.audit.AuditLog" authenticationInfo : { principalEmail : "p927005422713-439672@gcp-sa-logging.iam.gserviceaccount.com" } metadata : { @ type : "type.googleapis.com/google.cloud.audit.VpcServiceControlAuditMetadata" resourceNames : [ 0 : "corp-resources-public" ] violationReason : "RESOURCES NOT IN SAME SERVICE PERIMETER" } methodName : "google.cloud.bigquery.v2.TableDataService.InsertAll" requestMetadata : { callerIp : "2002:a49:8c51::" destinationAttributes : { } requestAttributes : { } } resourceName : "projects/927005422713" serviceName : "bigquery.googleapis.com" status : { code : 7 details : [ 0 : { @ type : "type.googleapis.com/google.rpc.PreconditionFailure" violations : [ 0 : { type : "VPC SERVICE CONTROLS" } ] } ] message : "Request is prohibited by organization's policy" } } receiveTimestamp : "2018-11-29T17:32:19.287138882Z" resource : { labels : { method : "google.cloud.bigquery.v2.TableDataService.InsertAll" project id : "perimeter-network" service : "bigquery.googleapis.com" } type : "audited resource" } severity : "ERROR" timestamp : "2018-11-29T17:32:19.054662413Z" } The audit log record is generated for BigQuery, not for Logging.
- The audit log record for the destination service (Cloud Storage) contains detailed reasons for the failure: { insertId : "1bq397kcfj1" logName : "projects/corp-resources-private/logs/cloudaudit.googleapis.com %2F policy" protoPayload : { @ type : "type.googleapis.com/google.cloud.audit.AuditLog" authenticationInfo : { principalEmail : "storage-accessing@example.iam.gserviceaccount.com" } metadata : { @ type : "type.googleapis.com/google.cloud.audit.VpcServiceControlAuditMetadata" resourceNames : [ 0 : "projects/1004338142803" 1 : "projects/ /buckets/corp-resources-public-1" ] violationReason : "RESOURCES NOT IN SAME SERVICE PERIMETER" } methodName : "google.storage.BillingRequiredRead" requestMetadata : { callerIp : "10.5.0.4" callerNetwork : "//compute.googleapis.com/projects/perimeter-network/global/networks/ unknown " destinationAttributes : { } requestAttributes : { } } resourceName : "projects/1004338142803" serviceName : "storage.googleapis.com" status : { code : 7 details : [ 0 : { @ type : "type.googleapis.com/google.rpc.PreconditionFailure" violations : [ 0 : { type : "VPC SERVICE CONTROLS" } ] } ] message : "Request is prohibited by organization's policy" } } receiveTimestamp : "2018-12-01T19:03:05.617451586Z" resource : { labels : { method : "google.storage.BillingRequiredRead" project id : "corp-resources-private" service : "storage.googleapis.com" } type : "audited resource" } severity : "ERROR" timestamp : "2018-12-01T19:03:05.420005215Z" } From this log, it is clear that the two projects 1004338142803 ( corp-resources-private-1 ) and corp-resources-public are both being used to complete the command.
- In the audit logs for the perimeter-network project, where the command was executed, there is an audit log record for the saveAsTextFile operation: { insertId : "qdj1o9d1run" logName : "projects/corp-resources-private/logs/cloudaudit.googleapis.com%2Fpolicy" protoPayload : { @ type : "type.googleapis.com/google.cloud.audit.AuditLog" authenticationInfo : { principalEmail : "1004338142803-compute@developer.gserviceaccount.com" } metadata : { @ type : "type.googleapis.com/google.cloud.audit.VpcServiceControlAuditMetadata" resourceNames : [ 0 : "projects/ /buckets/corp-resources-public-1/objects/out.txt" ] violationReason : "RESOURCES NOT IN SAME SERVICE PERIMETER" } methodName : "google.storage.BillingRequiredRead" requestMetadata : { callerIp : "10.246.0.3" callerNetwork : "//compute.googleapis.com/projects/corp-resources-private/global/networks/ unknown " destinationAttributes : { } requestAttributes : { } } resourceName : "projects/1004338142803" serviceName : "storage.googleapis.com" status : { code : 7 details : [ 0 : { @ type : "type.googleapis.com/google.rpc.PreconditionFailure" violations : [ 0 : { type : "VPC SERVICE CONTROLS" } ] } ] message : "Request is prohibited by organization's policy" } } receiveTimestamp : "2018-11-29T00:31:43.666227930Z" resource : { labels : { method : "google.storage.BillingRequiredRead" project id : "corp-resources-private" service : "storage.googleapis.com" } type : "audited resource" } severity : "ERROR" timestamp : "2018-11-29T00:31:43.608250320Z" } Due to audit log limitations, the methodName for Cloud Storage is listed as Read even though it is actually a write operation.
- Operation ID: dc4fc177-4850-4fc5-b2e7-8c33f302149a The following audit log record is generated: { insertId : "17kg4exd24ag" logName : "projects/perimeter-network/logs/cloudaudit.googleapis.com %2F policy" protoPayload : { @ type : "type.googleapis.com/google.cloud.audit.AuditLog" authenticationInfo : { } metadata : { @ type : "type.googleapis.com/google.cloud.audit.VpcServiceControlAuditMetadata" resourceNames : [ 0 : "projects/117961063178" 1 : "projects/690885588241" ] violationReason : "RESOURCES NOT IN SAME SERVICE PERIMETER" } methodName : "bigquery.googleapis.com/bigquery.tables.getData" requestMetadata : { callerIp : "130.211.225.66" callerNetwork : "//compute.googleapis.com/projects/perimeter-network/global/networks/ unknown " destinationAttributes : { } requestAttributes : { } } resourceName : "projects/927005422713" serviceName : "bigquery.googleapis.com" status : { code : 7 details : [ 0 : { @ type : "type.googleapis.com/google.rpc.PreconditionFailure" violations : [ 0 : { type : "VPC SERVICE CONTROLS" } ] } ] message : "Request is prohibited by organization's policy" } } receiveTimestamp : "2018-11-28T20:48:51.384237810Z" resource : { labels : { method : "bigquery.googleapis.com/bigquery.tables.getData" project id : "perimeter-network" service : "bigquery.googleapis.com" } type : "audited resource" } severity : "ERROR" timestamp : "2018-11-28T20:48:50.561884949Z" } Looking at callerNetwork and VpcServiceControlAuditMetadata.resourceNames , we can see three projects: perimeter-network , 117961063178 ( corp-resources-public ), and 690885588241 ( corp-resources-protected ).

### Resources \_|\_ VPC Service Controls \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/resources](https://docs.cloud.google.com/vpc-service-controls/docs/resources)
- Source ID: `site-docs-reference`
- Final score: 157
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Networking VPC Service Controls Resources Send feedback Resources Stay organized with collections Save and categorize content based on your preferences.
- Quotas and limits Usage policies for your VPC Service Controls resources.
- Known service limitations Known service limitations for VPC Service Controls.
- Support How to get additional help with VPC Service Controls.

