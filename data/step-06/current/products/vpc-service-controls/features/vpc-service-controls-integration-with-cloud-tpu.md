---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:13.547Z"
product_name: "VPC Service Controls"
product_slug: "vpc-service-controls"
feature_name: "VPC Service Controls integration with Cloud TPU"
feature_slug: "vpc-service-controls-integration-with-cloud-tpu"
latest_feature_date: "2022-02-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc-service-controls/docs/supported-products"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooting"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/restricted-vip-services"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/protect-compute-engine-troubleshoot-denial"
keywords:
  - "vpc"
  - "controls"
  - "integration"
  - "with"
  - "tpu"
  - "this"
  - "lets"
  - "protect"
---

# VPC Service Controls integration with Cloud TPU

Product: VPC Service Controls
Coverage: MEDIUM

## Step 02 Summary

This integration lets VPC Service Controls protect Cloud TPU.

## Extended Definition

This integration lets VPC Service Controls protect Cloud TPU.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products)
- [https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooting](https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooting)
- [https://docs.cloud.google.com/vpc-service-controls/docs/restricted-vip-services](https://docs.cloud.google.com/vpc-service-controls/docs/restricted-vip-services)
- [https://docs.cloud.google.com/vpc-service-controls/docs/protect-compute-engine-troubleshoot-denial](https://docs.cloud.google.com/vpc-service-controls/docs/protect-compute-engine-troubleshoot-denial)

## Supporting Pages

### "Supported products and limitations \_|\_ VPC Service Controls \_|\_ Google\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products)
- Source ID: `site-docs-reference-2`
- Final score: 261
- Re-rank relevance: N/A

Evidence snippets:
- Service name migrationcenter.googleapis.com rapidmigrationassessment.googleapis.com Details VPC Service Controls lets you protect the infrastructure data that you collect with Migration Center with a service perimeter.
- Limitations Blockchain Node Engine integrations with VPC Service Controls have the following limitations: VPC Service Controls only protects the Blockchain Node Engine API.
- The integration of this product with VPC Service Controls is in Preview and is ready for broader testing and use, but is not fully supported for production environments.
- The integration of this product with VPC Service Controls is in Preview and is ready for broader testing and use, but is not fully supported for production environments.

### "Troubleshoot common issues \_|\_ VPC Service Controls \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooting](https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooting)
- Source ID: `site-docs-reference-2`
- Final score: 251
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, suppose the following command is used to list all App Engine services within a service perimeter: gcloud app services list The command returns the following output: ERROR: (gcloud.app.services.list) User [ ] does not have permission to access apps instance [ ] (or it may not exist): <!DOCTYPE html> <html lang=en> <meta charset=utf-8> <meta name=viewport content="initial-scale=1, minimum-scale=1, width=device-width"> <title>Error 403 (Forbidden)!!1</title> <style> {margin:0;padding:0}html,code{font:15px/22px arial,sans-serif}html{background:#fff;color:#222;padding:15px}body{margin:7% auto 0;max-width:390px;min-height:180px;padding:30px 0 15px} > body{background:url(//www.google.com/images/errors/robot.png) 100% 5px no-repeat;padding-right:205px}p{margin:11px 0 22px;overflow:hidden}ins{color:#777;text-decoration:none}a img{border:0}@media screen and (max-width:772px){body{background:none;margin-top:0;max-width:none;padding-right:0}}#logo{background:url(//www.google.com/images/branding/googlelogo/1x/googlelogo color 150x54dp.png) no-repeat;margin-left:-5px}@media only screen and (min-resolution:192dpi){ #logo{background:url(//www.google.com/images/branding/googlelogo/2x/googlelogo color 150x54dp.png) no-repeat 0% 0%/100% 100%;-moz-border-image:url(//www.google.com/images/branding/googlelogo/2x/googlelogo color 150x54dp.png) 0}}@media only screen and (-webkit-min-device-pixel-ratio:2){ #logo{background:url(//www.google.com/images/branding/googlelogo/2x/googlelogo color 150x54dp.png) no-repeat;-webkit-background-size:100% 100%}}#logo{display:inline-block;height:54px;width:150px} </style> <a href=//www.google.com/><span id=logo aria-label=Google></span></a> <p><b>403.</b> <ins>That's an error.</ins> <p>Your client does not have permission to get URL <code>/v1/apps/ /services</code> from this server. <ins>That's all we know.</ins> This type of error is expected for services that are not supported by VPC Service Controls and not available on the restricted VIP.
- Operation ID: 33643962-6a0f-4091-9283-bcdf7e9271f0 The following audit log record is generated: { insertId : "1ei551d2pdq" logName : "projects/corp-resources-protected/logs/cloudaudit.googleapis.com%2Fpolicy" protoPayload : { @ type : "type.googleapis.com/google.cloud.audit.AuditLog" authenticationInfo : { principalEmail : "714877721106-compute@developer.gserviceaccount.com" } metadata : { @ type : "type.googleapis.com/google.cloud.audit.VpcServiceControlAuditMetadata" resourceNames : [ 0 : "projects/1004338142803" ] violationReason : "NETWORK NOT IN SAME SERVICE PERIMETER" } methodName : "bigquery.googleapis.com/bigquery.jobs.create" requestMetadata : { callerIp : "10.105.0.2" callerNetwork : "//compute.googleapis.com/projects/ameet-dataflow/global/networks/ unknown " destinationAttributes : { } requestAttributes : { } } resourceName : "projects/1004338142803" serviceName : "bigquery.googleapis.com" status : { code : 7 details : [ 0 : { @ type : "type.googleapis.com/google.rpc.PreconditionFailure" violations : [ 0 : { type : "VPC SERVICE CONTROLS" } ] } ] message : "Request is prohibited by organization's policy" } } receiveTimestamp : "2018-11-28T23:06:13.579882505Z" resource : { labels : { method : "bigquery.googleapis.com/bigquery.jobs.create" project id : "corp-resources-protected" service : "bigquery.googleapis.com" } type : "audited resource" } severity : "ERROR" timestamp : "2018-11-28T23:06:12.799656975Z" } In this example, the violationReason is NETWORK NOT IN SAME SERVICE PERIMETER . callerNetwork is included in addition to callerIp .
- Cloud Storage access from on-premises BigQuery access from VM outside of project Cross-project BigQuery query Move Cloud Storage file inside perimeter Move Cloud Storage file outside perimeter BigQuery dataset copy from VM inside perimeter Managed Service for Apache Spark job reading from project Unsupported service with restricted VIP Log export to project outside perimeter BigQuery extract to Cloud Storage Cloud Storage access from on-premises In this example, VPC Service Controls blocks a request from an employee workstation (identified by callerIp ) to a Cloud Storage bucket in project corp-storage .
- The VM uses the following command: bq query --use legacy sql = false \ 'select count(priv.name),count(pub.name) from \ corp-resources-protected.babynames.yob2000 as priv, \ corp-resources-public.babynames.yob2000 as pub' The query returns the following output: BigQuery error in query operation: Error processing job 'example:bqjob r211e6f6eec928ffb 000001675c996aa8 1': VPC Service Controls: Request is prohibited by organization's policy.

### "Services supported by the restricted VIP \_|\_ VPC Service Controls \_|\_\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/restricted-vip-services](https://docs.cloud.google.com/vpc-service-controls/docs/restricted-vip-services)
- Source ID: `site-docs-reference`
- Final score: 233
- Re-rank relevance: N/A

Evidence snippets:
- The table includes the following stages of support: GA: This integration is fully supported by the restricted VIP and can be protected by VPC Service Controls perimeters.
- Alpha: This integration receives an alpha-stage level of support for the restricted VIP and can be protected by VPC Service Controls perimeters for testing purposes only.
- Beta: This integration receives a beta-stage level of support for the restricted VIP and can be protected by VPC Service Controls perimeters.
- Services Support stage discovery.googleapis.com Restricted VIP only oauth2.googleapis.com Restricted VIP only openidconnect.googleapis.com Restricted VIP only reauth.googleapis.com Restricted VIP only accessapproval.googleapis.com GA accesscontextintelligence.googleapis.com GA addressvalidation.googleapis.com GA aiplatform.googleapis.com GA alloydb.googleapis.com GA analyticshub.googleapis.com GA apigee.googleapis.com GA apigeeconnect.googleapis.com GA apihub.googleapis.com GA apikeys.googleapis.com GA apphub.googleapis.com GA artifactregistry.googleapis.com GA assuredoss.googleapis.com GA automl.googleapis.com GA autoscaling.googleapis.com GA backupdr.googleapis.com GA baremetalsolution.googleapis.com GA batch.googleapis.com GA beyondcorp.googleapis.com GA biglake.googleapis.com GA bigquery.googleapis.com GA bigquerydatapolicy.googleapis.com GA bigquerydatatransfer.googleapis.com GA bigquerymigration.googleapis.com GA bigtable.googleapis.com GA binaryauthorization.googleapis.com GA blockchainnodeengine.googleapis.com GA certificatemanager.googleapis.com GA ces.googleapis.com GA cloud.googleapis.com GA cloudaicompanion.googleapis.com GA cloudasset.googleapis.com GA cloudbuild.googleapis.com GA cloudcontrolspartner.googleapis.com GA clouddeploy.googleapis.com GA clouderrorreporting.googleapis.com GA cloudfunctions.googleapis.com GA cloudkms.googleapis.com GA cloudprofiler.googleapis.com GA cloudquotas.googleapis.com GA cloudscheduler.googleapis.com GA cloudsearch.googleapis.com GA cloudtasks.googleapis.com GA cloudtrace.googleapis.com GA composer.googleapis.com GA compute.googleapis.com GA confidentialcomputing.googleapis.com GA config.googleapis.com GA configdelivery.googleapis.com GA connectgateway.googleapis.com GA connectors.googleapis.com GA contactcenteraiplatform.googleapis.com GA contactcenterinsights.googleapis.com GA container.googleapis.com GA containeranalysis.googleapis.com GA containerfilesystem.googleapis.com GA containerregistry.googleapis.com GA containersecurity.googleapis.com GA containerthreatdetection.googleapis.com GA contentwarehouse.googleapis.com GA databasecenter.googleapis.com GA databaseinsights.googleapis.com GA datacatalog.googleapis.com GA dataflow.googleapis.com GA dataform.googleapis.com GA datafusion.googleapis.com GA datalineage.googleapis.com GA datamigration.googleapis.com GA datapipelines.googleapis.com GA dataplex.googleapis.com GA dataproc.googleapis.com GA datastream.googleapis.com GA developerconnect.googleapis.com GA discoveryengine.googleapis.com GA dlp.googleapis.com GA dns.googleapis.com GA documentai.googleapis.com GA earthengine.googleapis.com GA edgecontainer.googleapis.com GA edgenetwork.googleapis.com GA essentialcontacts.googleapis.com GA eventarc.googleapis.com GA eventarcpublishing.googleapis.com GA file.googleapis.com GA financialservices.googleapis.com GA firebaseappcheck.googleapis.com GA firebaseapphosting.googleapis.com GA firebasedataconnect.googleapis.com GA firebaserules.googleapis.com GA firebasevertexai.googleapis.com GA firestore.googleapis.com GA fpnv.googleapis.com GA gameservices.googleapis.com GA gkebackup.googleapis.com GA gkeconnect.googleapis.com GA gkehub.googleapis.com GA gkemulticloud.googleapis.com GA gkeonprem.googleapis.com GA healthcare.googleapis.com GA hypercomputecluster.googleapis.com GA iamcredentials.googleapis.com GA iap.googleapis.com GA iaptunnel.googleapis.com GA identitytoolkit.googleapis.com GA ids.googleapis.com GA integrations.googleapis.com GA kmsinventory.googleapis.com GA krmapihosting.googleapis.com GA kubernetesmetadata.googleapis.com GA language.googleapis.com GA licensemanager.googleapis.com GA livestream.googleapis.com GA logging.googleapis.com GA looker.googleapis.com GA lustre.googleapis.com GA maintenance.googleapis.com GA managedidentities.googleapis.com GA managedkafka.googleapis.com GA memcache.googleapis.com GA memorystore.googleapis.com GA meshca.googleapis.com GA meshconfig.googleapis.com GA metastore.googleapis.com GA microservices.googleapis.com GA migrationcenter.googleapis.com GA ml.googleapis.com GA modelarmor.googleapis.com GA monitoring.googleapis.com GA netapp.googleapis.com GA networkconnectivity.googleapis.com GA networkmanagement.googleapis.com GA networksecurity.googleapis.com GA networkservices.googleapis.com GA notebooks.googleapis.com GA ondemandscanning.googleapis.com GA opsconfigmonitoring.googleapis.com GA oracledatabase.googleapis.com GA orgpolicy.googleapis.com GA osconfig.googleapis.com GA oslogin.googleapis.com GA parallelstore.googleapis.com GA parametermanager.googleapis.com GA policysimulator.googleapis.com GA policytroubleshooter.googleapis.com GA privateca.googleapis.com GA privilegedaccessmanager.googleapis.com GA publicca.googleapis.com GA pubsub.googleapis.com GA pubsublite.googleapis.com GA rapidmigrationassessment.googleapis.com GA recaptchaenterprise.googleapis.com GA recommender.googleapis.com GA redis.googleapis.com GA run.googleapis.com GA secretmanager.googleapis.com GA securesourcemanager.googleapis.com GA securetoken.googleapis.com GA securitycenter.googleapis.com GA securitycentermanagement.googleapis.com GA servicecontrol.googleapis.com GA servicedirectory.googleapis.com GA servicehealth.googleapis.com GA servicenetworking.googleapis.com GA serviceusage.googleapis.com GA spanner.googleapis.com GA speakerid.googleapis.com GA speech.googleapis.com GA sqladmin.googleapis.com GA ssh-serialport.googleapis.com GA storage.googleapis.com GA storagebatchoperations.googleapis.com GA storageinsights.googleapis.com GA storagetransfer.googleapis.com GA sts.googleapis.com GA telemetry.googleapis.com GA texttospeech.googleapis.com GA timeseriesinsights.googleapis.com GA tpu.googleapis.com GA trafficdirector.googleapis.com GA transcoder.googleapis.com GA translate.googleapis.com GA videointelligence.googleapis.com GA videostitcher.googleapis.com GA vision.googleapis.com GA visualinspection.googleapis.com GA vmmigration.googleapis.com GA vmwareengine.googleapis.com GA vpcaccess.googleapis.com GA webrisk.googleapis.com GA websecurityscanner.googleapis.com GA workflows.googleapis.com GA workloadmanager.googleapis.com GA workstations.googleapis.com GA adsdatahub.googleapis.com Beta support agentregistry.googleapis.com Beta support apptopology.googleapis.com Beta support assuredworkloads.googleapis.com Beta support auditmanager.googleapis.com Beta support businessaicode.googleapis.com Beta support chronicle.googleapis.com Beta support chronicleservicemanager.googleapis.com Beta support cloudcode.googleapis.com Beta support cloudlocationfinder.googleapis.com Beta support cloudresourcemanager.googleapis.com Beta support cloudsecuritycompliance.googleapis.com Beta support cloudsupport.googleapis.com Beta support commerceorggovernance.googleapis.com Beta support dataprocgdc.googleapis.com Beta support dataprocrm.googleapis.com Beta support designcenter.googleapis.com Beta support dialogflow.googleapis.com Beta support domains.googleapis.com Beta support firebasecrashlytics.googleapis.com Beta support geminicloudassist.googleapis.com Beta support geminidataanalytics.googleapis.com Beta support geocoding-backend.googleapis.com Beta support iam.googleapis.com Beta support lifesciences.googleapis.com Beta support places.googleapis.com Beta support retail.googleapis.com Beta support saasservicemgmt.googleapis.com Beta support seclm.googleapis.com Beta support vectorsearch.googleapis.com Beta support visionai.googleapis.com Beta support What's next To configure private connectivity, see Set up private connectivity to Google APIs and services .

### "Protect Compute Engine using a VPC Service Controls perimeter \_|\_ Google\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/protect-compute-engine-troubleshoot-denial](https://docs.cloud.google.com/vpc-service-controls/docs/protect-compute-engine-troubleshoot-denial)
- Source ID: `site-docs-reference`
- Final score: 227
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Networking VPC Service Controls Guides Send feedback Protect Compute Engine using a VPC Service Controls perimeter Stay organized with collections Save and categorize content based on your preferences.
- Create a new perimeter with the following details: Title: MyFirstPerimeter Perimeter type: Regular Enforcement mode: Enforced Resources to protect: My-Project-2 project Restricted services: Compute Engine API Verify the perimeter In this section, you can make access requests to the resources in the projects to confirm whether the perimeter protects the intended resources.
- View audit logs Find the unique ID of the VPC Service Controls violation in the My-Project-2 project's audit logs: In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .
- If the caller IP address is missing or appears as an internal IP address in the log, then this violation can be due to a Google Cloud service that is not supported by VPC Service Controls .

