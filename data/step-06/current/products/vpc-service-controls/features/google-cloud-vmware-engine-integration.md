---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:13.524Z"
product_name: "VPC Service Controls"
product_slug: "vpc-service-controls"
feature_name: "Google Cloud VMware Engine integration"
feature_slug: "google-cloud-vmware-engine-integration"
latest_feature_date: "2024-08-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc-service-controls/docs/supported-products"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/restricted-vip-services"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/protect-compute-engine-troubleshoot-denial"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooting"
keywords:
  - "vmware"
  - "engine"
  - "integration"
  - "provides"
  - "vpc"
  - "controls"
  - "for"
---

# Google Cloud VMware Engine integration

Product: VPC Service Controls
Coverage: MEDIUM

## Step 02 Summary

Provides VPC Service Controls integration support for Google Cloud VMware Engine.

## Extended Definition

Provides VPC Service Controls integration support for Google Cloud VMware Engine.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products)
- [https://docs.cloud.google.com/vpc-service-controls/docs/restricted-vip-services](https://docs.cloud.google.com/vpc-service-controls/docs/restricted-vip-services)
- [https://docs.cloud.google.com/vpc-service-controls/docs/protect-compute-engine-troubleshoot-denial](https://docs.cloud.google.com/vpc-service-controls/docs/protect-compute-engine-troubleshoot-denial)
- [https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooting](https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooting)

## Supporting Pages

### "Supported products and limitations \_|\_ VPC Service Controls \_|\_ Google\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products)
- Source ID: `site-docs-reference-2`
- Final score: 243
- Re-rank relevance: N/A

Evidence snippets:
- Service name vmwareengine.googleapis.com Details For more information about VMware Engine Service Controls, refer to VPC Service Controls with VMware Engine .
- Limitations To fully protect your AI Platform Training training jobs, add all of the following APIs to the service perimeter: AI Platform Training and Prediction API ( ml.googleapis.com ) Pub/Sub API ( pubsub.googleapis.com ) Cloud Storage API ( storage.googleapis.com ) Google Kubernetes Engine API ( container.googleapis.com ) Container Registry API ( containerregistry.googleapis.com ) Cloud Logging API ( logging.googleapis.com ) Read more about setting up VPC Service Controls for AI Platform Training .
- Limitations To fully protect AI Platform Prediction, add all of the following APIs to the service perimeter: AI Platform Training and Prediction API ( ml.googleapis.com ) Pub/Sub API ( pubsub.googleapis.com ) Cloud Storage API ( storage.googleapis.com ) Google Kubernetes Engine API ( container.googleapis.com ) Container Registry API ( containerregistry.googleapis.com ) Cloud Logging API ( logging.googleapis.com ) Read more about setting up VPC Service Controls for AI Platform Prediction .
- Service name compute.googleapis.com Details VPC Service Controls support for Compute Engine offers the following security benefits: Restricts access to sensitive API operations Restricts persistent disk snapshots and custom images to a perimeter Restricts access to instance metadata VPC Service Controls support for Compute Engine also enables you to utilize Virtual Private Cloud networks and Google Kubernetes Engine private clusters inside service perimeters.

### "Services supported by the restricted VIP \_|\_ VPC Service Controls \_|\_\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/restricted-vip-services](https://docs.cloud.google.com/vpc-service-controls/docs/restricted-vip-services)
- Source ID: `site-docs-reference`
- Final score: 213
- Re-rank relevance: N/A

Evidence snippets:
- Services Support stage discovery.googleapis.com Restricted VIP only oauth2.googleapis.com Restricted VIP only openidconnect.googleapis.com Restricted VIP only reauth.googleapis.com Restricted VIP only accessapproval.googleapis.com GA accesscontextintelligence.googleapis.com GA addressvalidation.googleapis.com GA aiplatform.googleapis.com GA alloydb.googleapis.com GA analyticshub.googleapis.com GA apigee.googleapis.com GA apigeeconnect.googleapis.com GA apihub.googleapis.com GA apikeys.googleapis.com GA apphub.googleapis.com GA artifactregistry.googleapis.com GA assuredoss.googleapis.com GA automl.googleapis.com GA autoscaling.googleapis.com GA backupdr.googleapis.com GA baremetalsolution.googleapis.com GA batch.googleapis.com GA beyondcorp.googleapis.com GA biglake.googleapis.com GA bigquery.googleapis.com GA bigquerydatapolicy.googleapis.com GA bigquerydatatransfer.googleapis.com GA bigquerymigration.googleapis.com GA bigtable.googleapis.com GA binaryauthorization.googleapis.com GA blockchainnodeengine.googleapis.com GA certificatemanager.googleapis.com GA ces.googleapis.com GA cloud.googleapis.com GA cloudaicompanion.googleapis.com GA cloudasset.googleapis.com GA cloudbuild.googleapis.com GA cloudcontrolspartner.googleapis.com GA clouddeploy.googleapis.com GA clouderrorreporting.googleapis.com GA cloudfunctions.googleapis.com GA cloudkms.googleapis.com GA cloudprofiler.googleapis.com GA cloudquotas.googleapis.com GA cloudscheduler.googleapis.com GA cloudsearch.googleapis.com GA cloudtasks.googleapis.com GA cloudtrace.googleapis.com GA composer.googleapis.com GA compute.googleapis.com GA confidentialcomputing.googleapis.com GA config.googleapis.com GA configdelivery.googleapis.com GA connectgateway.googleapis.com GA connectors.googleapis.com GA contactcenteraiplatform.googleapis.com GA contactcenterinsights.googleapis.com GA container.googleapis.com GA containeranalysis.googleapis.com GA containerfilesystem.googleapis.com GA containerregistry.googleapis.com GA containersecurity.googleapis.com GA containerthreatdetection.googleapis.com GA contentwarehouse.googleapis.com GA databasecenter.googleapis.com GA databaseinsights.googleapis.com GA datacatalog.googleapis.com GA dataflow.googleapis.com GA dataform.googleapis.com GA datafusion.googleapis.com GA datalineage.googleapis.com GA datamigration.googleapis.com GA datapipelines.googleapis.com GA dataplex.googleapis.com GA dataproc.googleapis.com GA datastream.googleapis.com GA developerconnect.googleapis.com GA discoveryengine.googleapis.com GA dlp.googleapis.com GA dns.googleapis.com GA documentai.googleapis.com GA earthengine.googleapis.com GA edgecontainer.googleapis.com GA edgenetwork.googleapis.com GA essentialcontacts.googleapis.com GA eventarc.googleapis.com GA eventarcpublishing.googleapis.com GA file.googleapis.com GA financialservices.googleapis.com GA firebaseappcheck.googleapis.com GA firebaseapphosting.googleapis.com GA firebasedataconnect.googleapis.com GA firebaserules.googleapis.com GA firebasevertexai.googleapis.com GA firestore.googleapis.com GA fpnv.googleapis.com GA gameservices.googleapis.com GA gkebackup.googleapis.com GA gkeconnect.googleapis.com GA gkehub.googleapis.com GA gkemulticloud.googleapis.com GA gkeonprem.googleapis.com GA healthcare.googleapis.com GA hypercomputecluster.googleapis.com GA iamcredentials.googleapis.com GA iap.googleapis.com GA iaptunnel.googleapis.com GA identitytoolkit.googleapis.com GA ids.googleapis.com GA integrations.googleapis.com GA kmsinventory.googleapis.com GA krmapihosting.googleapis.com GA kubernetesmetadata.googleapis.com GA language.googleapis.com GA licensemanager.googleapis.com GA livestream.googleapis.com GA logging.googleapis.com GA looker.googleapis.com GA lustre.googleapis.com GA maintenance.googleapis.com GA managedidentities.googleapis.com GA managedkafka.googleapis.com GA memcache.googleapis.com GA memorystore.googleapis.com GA meshca.googleapis.com GA meshconfig.googleapis.com GA metastore.googleapis.com GA microservices.googleapis.com GA migrationcenter.googleapis.com GA ml.googleapis.com GA modelarmor.googleapis.com GA monitoring.googleapis.com GA netapp.googleapis.com GA networkconnectivity.googleapis.com GA networkmanagement.googleapis.com GA networksecurity.googleapis.com GA networkservices.googleapis.com GA notebooks.googleapis.com GA ondemandscanning.googleapis.com GA opsconfigmonitoring.googleapis.com GA oracledatabase.googleapis.com GA orgpolicy.googleapis.com GA osconfig.googleapis.com GA oslogin.googleapis.com GA parallelstore.googleapis.com GA parametermanager.googleapis.com GA policysimulator.googleapis.com GA policytroubleshooter.googleapis.com GA privateca.googleapis.com GA privilegedaccessmanager.googleapis.com GA publicca.googleapis.com GA pubsub.googleapis.com GA pubsublite.googleapis.com GA rapidmigrationassessment.googleapis.com GA recaptchaenterprise.googleapis.com GA recommender.googleapis.com GA redis.googleapis.com GA run.googleapis.com GA secretmanager.googleapis.com GA securesourcemanager.googleapis.com GA securetoken.googleapis.com GA securitycenter.googleapis.com GA securitycentermanagement.googleapis.com GA servicecontrol.googleapis.com GA servicedirectory.googleapis.com GA servicehealth.googleapis.com GA servicenetworking.googleapis.com GA serviceusage.googleapis.com GA spanner.googleapis.com GA speakerid.googleapis.com GA speech.googleapis.com GA sqladmin.googleapis.com GA ssh-serialport.googleapis.com GA storage.googleapis.com GA storagebatchoperations.googleapis.com GA storageinsights.googleapis.com GA storagetransfer.googleapis.com GA sts.googleapis.com GA telemetry.googleapis.com GA texttospeech.googleapis.com GA timeseriesinsights.googleapis.com GA tpu.googleapis.com GA trafficdirector.googleapis.com GA transcoder.googleapis.com GA translate.googleapis.com GA videointelligence.googleapis.com GA videostitcher.googleapis.com GA vision.googleapis.com GA visualinspection.googleapis.com GA vmmigration.googleapis.com GA vmwareengine.googleapis.com GA vpcaccess.googleapis.com GA webrisk.googleapis.com GA websecurityscanner.googleapis.com GA workflows.googleapis.com GA workloadmanager.googleapis.com GA workstations.googleapis.com GA adsdatahub.googleapis.com Beta support agentregistry.googleapis.com Beta support apptopology.googleapis.com Beta support assuredworkloads.googleapis.com Beta support auditmanager.googleapis.com Beta support businessaicode.googleapis.com Beta support chronicle.googleapis.com Beta support chronicleservicemanager.googleapis.com Beta support cloudcode.googleapis.com Beta support cloudlocationfinder.googleapis.com Beta support cloudresourcemanager.googleapis.com Beta support cloudsecuritycompliance.googleapis.com Beta support cloudsupport.googleapis.com Beta support commerceorggovernance.googleapis.com Beta support dataprocgdc.googleapis.com Beta support dataprocrm.googleapis.com Beta support designcenter.googleapis.com Beta support dialogflow.googleapis.com Beta support domains.googleapis.com Beta support firebasecrashlytics.googleapis.com Beta support geminicloudassist.googleapis.com Beta support geminidataanalytics.googleapis.com Beta support geocoding-backend.googleapis.com Beta support iam.googleapis.com Beta support lifesciences.googleapis.com Beta support places.googleapis.com Beta support retail.googleapis.com Beta support saasservicemgmt.googleapis.com Beta support seclm.googleapis.com Beta support vectorsearch.googleapis.com Beta support visionai.googleapis.com Beta support What's next To configure private connectivity, see Set up private connectivity to Google APIs and services .
- Alpha: This integration receives an alpha-stage level of support for the restricted VIP and can be protected by VPC Service Controls perimeters for testing purposes only.
- Beta: This integration receives a beta-stage level of support for the restricted VIP and can be protected by VPC Service Controls perimeters.
- The table includes the following stages of support: GA: This integration is fully supported by the restricted VIP and can be protected by VPC Service Controls perimeters.

### "Protect Compute Engine using a VPC Service Controls perimeter \_|\_ Google\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/protect-compute-engine-troubleshoot-denial](https://docs.cloud.google.com/vpc-service-controls/docs/protect-compute-engine-troubleshoot-denial)
- Source ID: `site-docs-reference`
- Final score: 191
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Networking VPC Service Controls Guides Send feedback Protect Compute Engine using a VPC Service Controls perimeter Stay organized with collections Save and categorize content based on your preferences.
- Create a service perimeter Create a service perimeter that protects the Compute Engine API in the My-Project-2 project: In the Google Cloud console, go to the VPC Service Controls page.
- You should see that VPC Service Controls denies your request to access Compute Engine because the MyFirstPerimeter perimeter protects My-Project-2 and the Compute Engine API.
- This tutorial is intended for Google Cloud organization administrators who want to learn the basic VPC Service Controls concepts.

### "Troubleshoot common issues \_|\_ VPC Service Controls \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooting](https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooting)
- Source ID: `site-docs-reference-2`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- For example, suppose the following command is used to list all App Engine services within a service perimeter: gcloud app services list The command returns the following output: ERROR: (gcloud.app.services.list) User [ ] does not have permission to access apps instance [ ] (or it may not exist): <!DOCTYPE html> <html lang=en> <meta charset=utf-8> <meta name=viewport content="initial-scale=1, minimum-scale=1, width=device-width"> <title>Error 403 (Forbidden)!!1</title> <style> {margin:0;padding:0}html,code{font:15px/22px arial,sans-serif}html{background:#fff;color:#222;padding:15px}body{margin:7% auto 0;max-width:390px;min-height:180px;padding:30px 0 15px} > body{background:url(//www.google.com/images/errors/robot.png) 100% 5px no-repeat;padding-right:205px}p{margin:11px 0 22px;overflow:hidden}ins{color:#777;text-decoration:none}a img{border:0}@media screen and (max-width:772px){body{background:none;margin-top:0;max-width:none;padding-right:0}}#logo{background:url(//www.google.com/images/branding/googlelogo/1x/googlelogo color 150x54dp.png) no-repeat;margin-left:-5px}@media only screen and (min-resolution:192dpi){ #logo{background:url(//www.google.com/images/branding/googlelogo/2x/googlelogo color 150x54dp.png) no-repeat 0% 0%/100% 100%;-moz-border-image:url(//www.google.com/images/branding/googlelogo/2x/googlelogo color 150x54dp.png) 0}}@media only screen and (-webkit-min-device-pixel-ratio:2){ #logo{background:url(//www.google.com/images/branding/googlelogo/2x/googlelogo color 150x54dp.png) no-repeat;-webkit-background-size:100% 100%}}#logo{display:inline-block;height:54px;width:150px} </style> <a href=//www.google.com/><span id=logo aria-label=Google></span></a> <p><b>403.</b> <ins>That's an error.</ins> <p>Your client does not have permission to get URL <code>/v1/apps/ /services</code> from this server. <ins>That's all we know.</ins> This type of error is expected for services that are not supported by VPC Service Controls and not available on the restricted VIP.
- For example, VPC Service Controls does not support App Engine, so the App Engine Admin API is not available when using the restricted VIP.
- A VM that belongs to project A (which can be a Google Kubernetes Engine node) attempts to access a protected resource in project B but the connection fails, and the following audit log record is generated in project B: { "protoPayload": { "@type": "type.googleapis.com/google.cloud.audit.AuditLog", "status": { "code": 7, "message": "Request is prohibited by organization's policy. vpcServiceControlsUniqueIdentifier: kmpY9Fgfuhgi2NE90lURjFWuiS1nGRqxCw4L12HdW8h46Un - LZw", "details": [ { "@type": "type.googleapis.com/google.rpc.PreconditionFailure", "violations": [ { "type": "VPC SERVICE CONTROLS", "description": "kmpY9Fgfuhgi2NE90lURjFWuiS1nGRqxCw4L12HdW8h46Un - LZw" } ] } ] }, "authenticationInfo": { "principalEmail": "my-user@example.iam.gserviceaccount.com", "serviceAccountKeyName": "//iam.googleapis.com/projects/my-project/serviceAccounts/my-user@example.iam.gserviceaccount.com/keys/<code><var>ACCOUNT KEY</var></code>" }, "requestMetadata": { "callerIp": "gce-internal-ip", "requestAttributes": {}, "destinationAttributes": {} }, "serviceName": "cloudfunctions.googleapis.com", "methodName": "google.cloud.functions.v1.CloudFunctionsService.ListFunctions", "resourceName": "<code><var>PROJECT ID 1</var></code>", "metadata": { "violationReason": "NETWORK NOT IN SAME SERVICE PERIMETER", "resourceNames": [ "projects/<code><var>PROJECT ID 2</var></code>/locations/-" ], "securityPolicyInfo": { "servicePerimeterName": "accessPolicies/<code><var>ACCESS POLICY</var></code>/servicePerimeters/us sandbox", "organizationId": "<code><var>ORGANIZATION ID</var></code>" }, "deviceState": "Unknown", "vpcServiceControlsUniqueId": "kmpY9Fgfuhgi2NE90lURjFWuiS1nGRqxCw4L12HdW8h46Un - LZw", "ingressViolations": [ { "targetResource": "projects/<code><var>PROJECT ID 1</var></code>", "servicePerimeter": "accessPolicies/<code><var>ACCESS POLICY</var></code>/servicePerimeters/<code><var>PERIMETER NAME</var></code>", "source": "<code><var>PROJECT ID 2</var></code>" } ], "@type": "type.googleapis.com/google.cloud.audit.VpcServiceControlAuditMetadata" } }, "insertId": "tzf7fd103i", "resource": { "type": "audited resource", "labels": { "service": "cloudfunctions.googleapis.com", "method": "google.cloud.functions.v1.CloudFunctionsService.ListFunctions", "project id": "<code><var>PROJECT ID 2</var></code>" } }, "timestamp": "2024-04-02T19:56:10.770681816Z", "severity": "ERROR", "logName": "projects/<code><var>PROJECT ID 2</var></code>/logs/cloudaudit.googleapis.com%2Fpolicy", "receiveTimestamp": "2024-04-02T19:56:11.463811603Z" } The callerIp resource does not record an external IP address.
- For example, suppose the following command is used: gcloud logging sinks describe example-sink The command returns the following output: destination : bigquery . googleapis . com / projects / corp - resources - public / datasets / logs filter : - resource . type = "audited resource" resource . labels . service = "bigquery.googleapis.com" name : example - sink outputVersionFormat : V2 writerIdentity : serviceAccount : p927005422713 - 439672 @ gcp - sa - logging . iam.gserviceaccount.com The following audit log record is generated: { insertId : "e5i2i8cbqw" logName : "projects/perimeter-network/logs/cloudaudit.googleapis.com %2F policy" protoPayload : { @ type : "type.googleapis.com/google.cloud.audit.AuditLog" authenticationInfo : { principalEmail : "p927005422713-439672@gcp-sa-logging.iam.gserviceaccount.com" } metadata : { @ type : "type.googleapis.com/google.cloud.audit.VpcServiceControlAuditMetadata" resourceNames : [ 0 : "corp-resources-public" ] violationReason : "RESOURCES NOT IN SAME SERVICE PERIMETER" } methodName : "google.cloud.bigquery.v2.TableDataService.InsertAll" requestMetadata : { callerIp : "2002:a49:8c51::" destinationAttributes : { } requestAttributes : { } } resourceName : "projects/927005422713" serviceName : "bigquery.googleapis.com" status : { code : 7 details : [ 0 : { @ type : "type.googleapis.com/google.rpc.PreconditionFailure" violations : [ 0 : { type : "VPC SERVICE CONTROLS" } ] } ] message : "Request is prohibited by organization's policy" } } receiveTimestamp : "2018-11-29T17:32:19.287138882Z" resource : { labels : { method : "google.cloud.bigquery.v2.TableDataService.InsertAll" project id : "perimeter-network" service : "bigquery.googleapis.com" } type : "audited resource" } severity : "ERROR" timestamp : "2018-11-29T17:32:19.054662413Z" } The audit log record is generated for BigQuery, not for Logging.

