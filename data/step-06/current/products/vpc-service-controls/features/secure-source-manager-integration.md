---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:13.528Z"
product_name: "VPC Service Controls"
product_slug: "vpc-service-controls"
feature_name: "Secure Source Manager integration"
feature_slug: "secure-source-manager-integration"
latest_feature_date: "2024-04-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc-service-controls/docs/supported-products"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/secure-data-exchange"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/restricted-vip-services"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/service-perimeters"
keywords:
  - "secure"
  - "source"
  - "manager"
  - "integration"
  - "vpc"
  - "controls"
  - "supports"
  - "with"
---

# Secure Source Manager integration

Product: VPC Service Controls
Coverage: MEDIUM

## Step 02 Summary

VPC Service Controls supports integration with Secure Source Manager.

## Extended Definition

VPC Service Controls supports integration with Secure Source Manager.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products)
- [https://docs.cloud.google.com/vpc-service-controls/docs/secure-data-exchange](https://docs.cloud.google.com/vpc-service-controls/docs/secure-data-exchange)
- [https://docs.cloud.google.com/vpc-service-controls/docs/restricted-vip-services](https://docs.cloud.google.com/vpc-service-controls/docs/restricted-vip-services)
- [https://docs.cloud.google.com/vpc-service-controls/docs/service-perimeters](https://docs.cloud.google.com/vpc-service-controls/docs/service-perimeters)

## Supporting Pages

### "Supported products and limitations \_|\_ VPC Service Controls \_|\_ Google\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products)
- Source ID: `site-docs-reference-2`
- Final score: 264
- Re-rank relevance: N/A

Evidence snippets:
- To open the VPC Service Controls web interface with a browser, the browser needs access to the following URLs: https://accounts.google.com https:// LOCATION OF INSTANCE -sourcemanagerredirector-pa.client6.google.com For example, https://us-central1-sourcemanagerredirector-pa.client6.google.com https://lh3.googleusercontent.com Secure Web Proxy Status GA .
- Service name securesourcemanager.googleapis.com Details You need to configure Certificate Authority Service with a working certificate authority before creating Secure Source Manager VPC Service Controls instances.
- You need to configure Private Service Connect before accessing the Secure Source Manager VPC Service Controls instance.
- Limitations The Certificate Manager integration with VPC Service Controls has no known limitations.

### "Secure data exchange with ingress and egress rules \_|\_ VPC Service Controls\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/secure-data-exchange](https://docs.cloud.google.com/vpc-service-controls/docs/secure-data-exchange)
- Source ID: `site-docs-root`
- Final score: 255
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Access a Google Cloud resource outside the perimeter Share data by using Pub/Sub between two organizations that use VPC Service Controls Share anonymized PHI data with partner organization Grant access to a third-party Compute Engine disk image Read a BigQuery dataset by allowing private access from a VPC network outside the perimeter Load into a Cloud Storage bucket (write) by allowing private access from a VPC network outside the perimeter Share logs in a separate perimeter by allowing projects from multiple perimeters to share logs Access a Google Cloud resource outside the perimeter The following diagram shows a Compute Engine resource inside a service perimeter that requires access to a Cloud Storage resource, which is outside the perimeter: Assume that you have defined the following perimeter: name: accessPolicies/222/servicePerimeters/Example status: resources: - projects/111 restrictedServices: - bigquery.googleapis.com - containerregistry.googleapis.com - storage.googleapis.com title: Example You need to grant read access to a Cloud Storage bucket in project 999 , which is in a different organization.
- Home Documentation Networking VPC Service Controls Guides Send feedback Secure data exchange with ingress and egress rules Stay organized with collections Save and categorize content based on your preferences.
- Assume that you have defined the following three perimeters: Sensitive 1 name: accessPolicies/222/servicePerimeters/Sensitive1 status: resources: - projects/111 restrictedServices: - bigquery.googleapis.com - containerregistry.googleapis.com - logging.googleapis.com vpcAccessibleServices: enableRestriction: true allowedServices: - RESTRICTED SERVICES title: Sensitive Data 1 Sensitive 2 name: accessPolicies/222/servicePerimeters/Sensitive2 status: resources: - projects/222 restrictedServices: - bigquery.googleapis.com - containerregistry.googleapis.com - logging.googleapis.com vpcAccessibleServices: enableRestriction: true allowedServices: - RESTRICTED SERVICES title: Sensitive Data 2 #Logs name: accessPolicies/222/servicePerimeters/Logs status: resources: - projects/777 restrictedServices: - logging.googleapis.com vpcAccessibleServices: enableRestriction: true allowedServices: - RESTRICTED SERVICES title: Logs Perimeter To allow Sensitive1 and Sensitive2 to write logs to Logs perimeter, define the following egress rule in a file and save the file as logsegress.yaml : echo """ - egressTo: operations: - serviceName: logging.googleapis.com methodSelectors: - method: LoggingServiceV2.WriteLogEntries - method: LoggingService.WriteLogEntries resources: - projects/777 egressFrom: identityType: ANY IDENTITY """ > logsegress.yaml Apply the egress rules by running the following commands: gcloud beta access-context-manager perimeters update Sensitive1 --set-egress-policies=logsegress.yaml gcloud beta access-context-manager perimeters update Sensitive2 --set-egress-policies=logsegress.yaml A similar configuration can be specified for any other sensitive data perimeter that needs to write to the logs perimeter.
- Share data by using Pub/Sub between two organizations that use VPC Service Controls The following diagram shows two organizations, Org1 and Org2 , which use VPC Service Controls and share data by using a Pub/Sub topic: Assume that you have defined the following perimeters: Org 1 Perimeter Definition name: accessPolicies/222/servicePerimeters/Example1 status: resources: - projects/111 restrictedServices: - pubsub.googleapis.com title: Example1 Org 2 Perimeter Definition name: accessPolicies/333/servicePerimeters/Example2 status: resources: - projects/222 restrictedServices: - pubsub.googleapis.com title: Example2 To enable data exchange, Org1 must define the following egress rule that allows the subscription and save the file as org1egress.yaml : Org1: Org1's perimeter must allow a Pub/Sub subscription to project 222. echo """ - egressTo: operations: - serviceName: pubsub.googleapis.com methodSelectors: - method: Subscriber.CreateSubscription resources: - projects/222 egressFrom: identityType: ANY IDENTITY """ > org1egress.yaml Org2 must define a corresponding ingress rule allowing the subscription and save the file as org2ingress.yaml .

### "Services supported by the restricted VIP \_|\_ VPC Service Controls \_|\_\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/restricted-vip-services](https://docs.cloud.google.com/vpc-service-controls/docs/restricted-vip-services)
- Source ID: `site-docs-reference`
- Final score: 240
- Re-rank relevance: N/A

Evidence snippets:
- Services Support stage discovery.googleapis.com Restricted VIP only oauth2.googleapis.com Restricted VIP only openidconnect.googleapis.com Restricted VIP only reauth.googleapis.com Restricted VIP only accessapproval.googleapis.com GA accesscontextintelligence.googleapis.com GA addressvalidation.googleapis.com GA aiplatform.googleapis.com GA alloydb.googleapis.com GA analyticshub.googleapis.com GA apigee.googleapis.com GA apigeeconnect.googleapis.com GA apihub.googleapis.com GA apikeys.googleapis.com GA apphub.googleapis.com GA artifactregistry.googleapis.com GA assuredoss.googleapis.com GA automl.googleapis.com GA autoscaling.googleapis.com GA backupdr.googleapis.com GA baremetalsolution.googleapis.com GA batch.googleapis.com GA beyondcorp.googleapis.com GA biglake.googleapis.com GA bigquery.googleapis.com GA bigquerydatapolicy.googleapis.com GA bigquerydatatransfer.googleapis.com GA bigquerymigration.googleapis.com GA bigtable.googleapis.com GA binaryauthorization.googleapis.com GA blockchainnodeengine.googleapis.com GA certificatemanager.googleapis.com GA ces.googleapis.com GA cloud.googleapis.com GA cloudaicompanion.googleapis.com GA cloudasset.googleapis.com GA cloudbuild.googleapis.com GA cloudcontrolspartner.googleapis.com GA clouddeploy.googleapis.com GA clouderrorreporting.googleapis.com GA cloudfunctions.googleapis.com GA cloudkms.googleapis.com GA cloudprofiler.googleapis.com GA cloudquotas.googleapis.com GA cloudscheduler.googleapis.com GA cloudsearch.googleapis.com GA cloudtasks.googleapis.com GA cloudtrace.googleapis.com GA composer.googleapis.com GA compute.googleapis.com GA confidentialcomputing.googleapis.com GA config.googleapis.com GA configdelivery.googleapis.com GA connectgateway.googleapis.com GA connectors.googleapis.com GA contactcenteraiplatform.googleapis.com GA contactcenterinsights.googleapis.com GA container.googleapis.com GA containeranalysis.googleapis.com GA containerfilesystem.googleapis.com GA containerregistry.googleapis.com GA containersecurity.googleapis.com GA containerthreatdetection.googleapis.com GA contentwarehouse.googleapis.com GA databasecenter.googleapis.com GA databaseinsights.googleapis.com GA datacatalog.googleapis.com GA dataflow.googleapis.com GA dataform.googleapis.com GA datafusion.googleapis.com GA datalineage.googleapis.com GA datamigration.googleapis.com GA datapipelines.googleapis.com GA dataplex.googleapis.com GA dataproc.googleapis.com GA datastream.googleapis.com GA developerconnect.googleapis.com GA discoveryengine.googleapis.com GA dlp.googleapis.com GA dns.googleapis.com GA documentai.googleapis.com GA earthengine.googleapis.com GA edgecontainer.googleapis.com GA edgenetwork.googleapis.com GA essentialcontacts.googleapis.com GA eventarc.googleapis.com GA eventarcpublishing.googleapis.com GA file.googleapis.com GA financialservices.googleapis.com GA firebaseappcheck.googleapis.com GA firebaseapphosting.googleapis.com GA firebasedataconnect.googleapis.com GA firebaserules.googleapis.com GA firebasevertexai.googleapis.com GA firestore.googleapis.com GA fpnv.googleapis.com GA gameservices.googleapis.com GA gkebackup.googleapis.com GA gkeconnect.googleapis.com GA gkehub.googleapis.com GA gkemulticloud.googleapis.com GA gkeonprem.googleapis.com GA healthcare.googleapis.com GA hypercomputecluster.googleapis.com GA iamcredentials.googleapis.com GA iap.googleapis.com GA iaptunnel.googleapis.com GA identitytoolkit.googleapis.com GA ids.googleapis.com GA integrations.googleapis.com GA kmsinventory.googleapis.com GA krmapihosting.googleapis.com GA kubernetesmetadata.googleapis.com GA language.googleapis.com GA licensemanager.googleapis.com GA livestream.googleapis.com GA logging.googleapis.com GA looker.googleapis.com GA lustre.googleapis.com GA maintenance.googleapis.com GA managedidentities.googleapis.com GA managedkafka.googleapis.com GA memcache.googleapis.com GA memorystore.googleapis.com GA meshca.googleapis.com GA meshconfig.googleapis.com GA metastore.googleapis.com GA microservices.googleapis.com GA migrationcenter.googleapis.com GA ml.googleapis.com GA modelarmor.googleapis.com GA monitoring.googleapis.com GA netapp.googleapis.com GA networkconnectivity.googleapis.com GA networkmanagement.googleapis.com GA networksecurity.googleapis.com GA networkservices.googleapis.com GA notebooks.googleapis.com GA ondemandscanning.googleapis.com GA opsconfigmonitoring.googleapis.com GA oracledatabase.googleapis.com GA orgpolicy.googleapis.com GA osconfig.googleapis.com GA oslogin.googleapis.com GA parallelstore.googleapis.com GA parametermanager.googleapis.com GA policysimulator.googleapis.com GA policytroubleshooter.googleapis.com GA privateca.googleapis.com GA privilegedaccessmanager.googleapis.com GA publicca.googleapis.com GA pubsub.googleapis.com GA pubsublite.googleapis.com GA rapidmigrationassessment.googleapis.com GA recaptchaenterprise.googleapis.com GA recommender.googleapis.com GA redis.googleapis.com GA run.googleapis.com GA secretmanager.googleapis.com GA securesourcemanager.googleapis.com GA securetoken.googleapis.com GA securitycenter.googleapis.com GA securitycentermanagement.googleapis.com GA servicecontrol.googleapis.com GA servicedirectory.googleapis.com GA servicehealth.googleapis.com GA servicenetworking.googleapis.com GA serviceusage.googleapis.com GA spanner.googleapis.com GA speakerid.googleapis.com GA speech.googleapis.com GA sqladmin.googleapis.com GA ssh-serialport.googleapis.com GA storage.googleapis.com GA storagebatchoperations.googleapis.com GA storageinsights.googleapis.com GA storagetransfer.googleapis.com GA sts.googleapis.com GA telemetry.googleapis.com GA texttospeech.googleapis.com GA timeseriesinsights.googleapis.com GA tpu.googleapis.com GA trafficdirector.googleapis.com GA transcoder.googleapis.com GA translate.googleapis.com GA videointelligence.googleapis.com GA videostitcher.googleapis.com GA vision.googleapis.com GA visualinspection.googleapis.com GA vmmigration.googleapis.com GA vmwareengine.googleapis.com GA vpcaccess.googleapis.com GA webrisk.googleapis.com GA websecurityscanner.googleapis.com GA workflows.googleapis.com GA workloadmanager.googleapis.com GA workstations.googleapis.com GA adsdatahub.googleapis.com Beta support agentregistry.googleapis.com Beta support apptopology.googleapis.com Beta support assuredworkloads.googleapis.com Beta support auditmanager.googleapis.com Beta support businessaicode.googleapis.com Beta support chronicle.googleapis.com Beta support chronicleservicemanager.googleapis.com Beta support cloudcode.googleapis.com Beta support cloudlocationfinder.googleapis.com Beta support cloudresourcemanager.googleapis.com Beta support cloudsecuritycompliance.googleapis.com Beta support cloudsupport.googleapis.com Beta support commerceorggovernance.googleapis.com Beta support dataprocgdc.googleapis.com Beta support dataprocrm.googleapis.com Beta support designcenter.googleapis.com Beta support dialogflow.googleapis.com Beta support domains.googleapis.com Beta support firebasecrashlytics.googleapis.com Beta support geminicloudassist.googleapis.com Beta support geminidataanalytics.googleapis.com Beta support geocoding-backend.googleapis.com Beta support iam.googleapis.com Beta support lifesciences.googleapis.com Beta support places.googleapis.com Beta support retail.googleapis.com Beta support saasservicemgmt.googleapis.com Beta support seclm.googleapis.com Beta support vectorsearch.googleapis.com Beta support visionai.googleapis.com Beta support What's next To configure private connectivity, see Set up private connectivity to Google APIs and services .
- Home Documentation Networking VPC Service Controls Guides Send feedback Services supported by the restricted VIP Stay organized with collections Save and categorize content based on your preferences.
- The table includes the following stages of support: GA: This integration is fully supported by the restricted VIP and can be protected by VPC Service Controls perimeters.
- Alpha: This integration receives an alpha-stage level of support for the restricted VIP and can be protected by VPC Service Controls perimeters for testing purposes only.

### "Service perimeter details and configuration \_|\_ VPC Service Controls \_\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/service-perimeters](https://docs.cloud.google.com/vpc-service-controls/docs/service-perimeters)
- Source ID: `site-docs-reference`
- Final score: 215
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Networking VPC Service Controls Guides Send feedback Service perimeter details and configuration Stay organized with collections Save and categorize content based on your preferences.
- Service perimeter configuration stages To configure VPC Service Controls, you can use the Google Cloud console, the gcloud command-line tool , and the Access Context Manager APIs .
- You can continue to use the gcloud command-line tool or API clients from VPC networks that share a service perimeter or perimeter bridge with the restricted resources.
- To learn more about how service perimeters work and what services VPC Service Controls can be used to secure, read the Overview of VPC Service Controls .

