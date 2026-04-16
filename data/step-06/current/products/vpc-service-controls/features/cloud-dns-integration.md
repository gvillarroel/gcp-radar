---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:13.550Z"
product_name: "VPC Service Controls"
product_slug: "vpc-service-controls"
feature_name: "Cloud DNS integration"
feature_slug: "cloud-dns-integration"
latest_feature_date: "2021-08-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc-service-controls/docs/supported-products"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/restricted-vip-services"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/private-connectivity"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/set-up-service-perimeter-verify-access"
keywords:
  - "dns"
  - "integration"
  - "vpc"
  - "controls"
  - "supports"
  - "with"
---

# Cloud DNS integration

Product: VPC Service Controls
Coverage: MEDIUM

## Step 02 Summary

VPC Service Controls supports integration with Cloud DNS.

## Extended Definition

VPC Service Controls supports integration with Cloud DNS.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products)
- [https://docs.cloud.google.com/vpc-service-controls/docs/restricted-vip-services](https://docs.cloud.google.com/vpc-service-controls/docs/restricted-vip-services)
- [https://docs.cloud.google.com/vpc-service-controls/docs/private-connectivity](https://docs.cloud.google.com/vpc-service-controls/docs/private-connectivity)
- [https://docs.cloud.google.com/vpc-service-controls/docs/set-up-service-perimeter-verify-access](https://docs.cloud.google.com/vpc-service-controls/docs/set-up-service-perimeter-verify-access)

## Supporting Pages

### "Supported products and limitations \_|\_ VPC Service Controls \_|\_ Google\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products)
- Source ID: `site-docs-reference-2`
- Final score: 215
- Re-rank relevance: N/A

Evidence snippets:
- You get a response with a list of methods and permissions. availableOnRestrictedVip: RESTRICTED VIP STATUS knownLimitations: LIMITATIONS STATUS name: SERVICE ADDRESS serviceSupportStage: SERVICE STATUS supportedMethods: METHODS LIST . . . title: SERVICE NAME In this response, METHODS LIST lists all the methods and permissions supported by VPC Service Controls for the specified service.
- Limitations VPC Service Controls supports Cloud Scheduler jobs only with the following targets: Cloud Run run.app endpoints Cloud Run functions functions.net endpoints Google Cloud APIs that are VPC Service Controls-compliant (either in Preview or GA)—can be in a different Google Cloud project from your Cloud Scheduler job.
- To use IAP for TCP within a VPC Service Controls service perimeter, you must add or configure some DNS entries to point the following domains to the restricted VIP: tunnel.cloudproxy.app .tunnel.cloudproxy.app Cloud Life Sciences Status Preview .
- Service name contactcenterinsights.googleapis.com Details To use CX Insights with VPC Service Controls you must have the following additional APIs inside your perimeter, depending on your integration.

### "Services supported by the restricted VIP \_|\_ VPC Service Controls \_|\_\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/restricted-vip-services](https://docs.cloud.google.com/vpc-service-controls/docs/restricted-vip-services)
- Source ID: `site-docs-reference`
- Final score: 199
- Re-rank relevance: N/A

Evidence snippets:
- Services Support stage discovery.googleapis.com Restricted VIP only oauth2.googleapis.com Restricted VIP only openidconnect.googleapis.com Restricted VIP only reauth.googleapis.com Restricted VIP only accessapproval.googleapis.com GA accesscontextintelligence.googleapis.com GA addressvalidation.googleapis.com GA aiplatform.googleapis.com GA alloydb.googleapis.com GA analyticshub.googleapis.com GA apigee.googleapis.com GA apigeeconnect.googleapis.com GA apihub.googleapis.com GA apikeys.googleapis.com GA apphub.googleapis.com GA artifactregistry.googleapis.com GA assuredoss.googleapis.com GA automl.googleapis.com GA autoscaling.googleapis.com GA backupdr.googleapis.com GA baremetalsolution.googleapis.com GA batch.googleapis.com GA beyondcorp.googleapis.com GA biglake.googleapis.com GA bigquery.googleapis.com GA bigquerydatapolicy.googleapis.com GA bigquerydatatransfer.googleapis.com GA bigquerymigration.googleapis.com GA bigtable.googleapis.com GA binaryauthorization.googleapis.com GA blockchainnodeengine.googleapis.com GA certificatemanager.googleapis.com GA ces.googleapis.com GA cloud.googleapis.com GA cloudaicompanion.googleapis.com GA cloudasset.googleapis.com GA cloudbuild.googleapis.com GA cloudcontrolspartner.googleapis.com GA clouddeploy.googleapis.com GA clouderrorreporting.googleapis.com GA cloudfunctions.googleapis.com GA cloudkms.googleapis.com GA cloudprofiler.googleapis.com GA cloudquotas.googleapis.com GA cloudscheduler.googleapis.com GA cloudsearch.googleapis.com GA cloudtasks.googleapis.com GA cloudtrace.googleapis.com GA composer.googleapis.com GA compute.googleapis.com GA confidentialcomputing.googleapis.com GA config.googleapis.com GA configdelivery.googleapis.com GA connectgateway.googleapis.com GA connectors.googleapis.com GA contactcenteraiplatform.googleapis.com GA contactcenterinsights.googleapis.com GA container.googleapis.com GA containeranalysis.googleapis.com GA containerfilesystem.googleapis.com GA containerregistry.googleapis.com GA containersecurity.googleapis.com GA containerthreatdetection.googleapis.com GA contentwarehouse.googleapis.com GA databasecenter.googleapis.com GA databaseinsights.googleapis.com GA datacatalog.googleapis.com GA dataflow.googleapis.com GA dataform.googleapis.com GA datafusion.googleapis.com GA datalineage.googleapis.com GA datamigration.googleapis.com GA datapipelines.googleapis.com GA dataplex.googleapis.com GA dataproc.googleapis.com GA datastream.googleapis.com GA developerconnect.googleapis.com GA discoveryengine.googleapis.com GA dlp.googleapis.com GA dns.googleapis.com GA documentai.googleapis.com GA earthengine.googleapis.com GA edgecontainer.googleapis.com GA edgenetwork.googleapis.com GA essentialcontacts.googleapis.com GA eventarc.googleapis.com GA eventarcpublishing.googleapis.com GA file.googleapis.com GA financialservices.googleapis.com GA firebaseappcheck.googleapis.com GA firebaseapphosting.googleapis.com GA firebasedataconnect.googleapis.com GA firebaserules.googleapis.com GA firebasevertexai.googleapis.com GA firestore.googleapis.com GA fpnv.googleapis.com GA gameservices.googleapis.com GA gkebackup.googleapis.com GA gkeconnect.googleapis.com GA gkehub.googleapis.com GA gkemulticloud.googleapis.com GA gkeonprem.googleapis.com GA healthcare.googleapis.com GA hypercomputecluster.googleapis.com GA iamcredentials.googleapis.com GA iap.googleapis.com GA iaptunnel.googleapis.com GA identitytoolkit.googleapis.com GA ids.googleapis.com GA integrations.googleapis.com GA kmsinventory.googleapis.com GA krmapihosting.googleapis.com GA kubernetesmetadata.googleapis.com GA language.googleapis.com GA licensemanager.googleapis.com GA livestream.googleapis.com GA logging.googleapis.com GA looker.googleapis.com GA lustre.googleapis.com GA maintenance.googleapis.com GA managedidentities.googleapis.com GA managedkafka.googleapis.com GA memcache.googleapis.com GA memorystore.googleapis.com GA meshca.googleapis.com GA meshconfig.googleapis.com GA metastore.googleapis.com GA microservices.googleapis.com GA migrationcenter.googleapis.com GA ml.googleapis.com GA modelarmor.googleapis.com GA monitoring.googleapis.com GA netapp.googleapis.com GA networkconnectivity.googleapis.com GA networkmanagement.googleapis.com GA networksecurity.googleapis.com GA networkservices.googleapis.com GA notebooks.googleapis.com GA ondemandscanning.googleapis.com GA opsconfigmonitoring.googleapis.com GA oracledatabase.googleapis.com GA orgpolicy.googleapis.com GA osconfig.googleapis.com GA oslogin.googleapis.com GA parallelstore.googleapis.com GA parametermanager.googleapis.com GA policysimulator.googleapis.com GA policytroubleshooter.googleapis.com GA privateca.googleapis.com GA privilegedaccessmanager.googleapis.com GA publicca.googleapis.com GA pubsub.googleapis.com GA pubsublite.googleapis.com GA rapidmigrationassessment.googleapis.com GA recaptchaenterprise.googleapis.com GA recommender.googleapis.com GA redis.googleapis.com GA run.googleapis.com GA secretmanager.googleapis.com GA securesourcemanager.googleapis.com GA securetoken.googleapis.com GA securitycenter.googleapis.com GA securitycentermanagement.googleapis.com GA servicecontrol.googleapis.com GA servicedirectory.googleapis.com GA servicehealth.googleapis.com GA servicenetworking.googleapis.com GA serviceusage.googleapis.com GA spanner.googleapis.com GA speakerid.googleapis.com GA speech.googleapis.com GA sqladmin.googleapis.com GA ssh-serialport.googleapis.com GA storage.googleapis.com GA storagebatchoperations.googleapis.com GA storageinsights.googleapis.com GA storagetransfer.googleapis.com GA sts.googleapis.com GA telemetry.googleapis.com GA texttospeech.googleapis.com GA timeseriesinsights.googleapis.com GA tpu.googleapis.com GA trafficdirector.googleapis.com GA transcoder.googleapis.com GA translate.googleapis.com GA videointelligence.googleapis.com GA videostitcher.googleapis.com GA vision.googleapis.com GA visualinspection.googleapis.com GA vmmigration.googleapis.com GA vmwareengine.googleapis.com GA vpcaccess.googleapis.com GA webrisk.googleapis.com GA websecurityscanner.googleapis.com GA workflows.googleapis.com GA workloadmanager.googleapis.com GA workstations.googleapis.com GA adsdatahub.googleapis.com Beta support agentregistry.googleapis.com Beta support apptopology.googleapis.com Beta support assuredworkloads.googleapis.com Beta support auditmanager.googleapis.com Beta support businessaicode.googleapis.com Beta support chronicle.googleapis.com Beta support chronicleservicemanager.googleapis.com Beta support cloudcode.googleapis.com Beta support cloudlocationfinder.googleapis.com Beta support cloudresourcemanager.googleapis.com Beta support cloudsecuritycompliance.googleapis.com Beta support cloudsupport.googleapis.com Beta support commerceorggovernance.googleapis.com Beta support dataprocgdc.googleapis.com Beta support dataprocrm.googleapis.com Beta support designcenter.googleapis.com Beta support dialogflow.googleapis.com Beta support domains.googleapis.com Beta support firebasecrashlytics.googleapis.com Beta support geminicloudassist.googleapis.com Beta support geminidataanalytics.googleapis.com Beta support geocoding-backend.googleapis.com Beta support iam.googleapis.com Beta support lifesciences.googleapis.com Beta support places.googleapis.com Beta support retail.googleapis.com Beta support saasservicemgmt.googleapis.com Beta support seclm.googleapis.com Beta support vectorsearch.googleapis.com Beta support visionai.googleapis.com Beta support What's next To configure private connectivity, see Set up private connectivity to Google APIs and services .
- Home Documentation Networking VPC Service Controls Guides Send feedback Services supported by the restricted VIP Stay organized with collections Save and categorize content based on your preferences.
- The table includes the following stages of support: GA: This integration is fully supported by the restricted VIP and can be protected by VPC Service Controls perimeters.
- Alpha: This integration receives an alpha-stage level of support for the restricted VIP and can be protected by VPC Service Controls perimeters for testing purposes only.

### Private Google Access with VPC Service Controls \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/private-connectivity](https://docs.cloud.google.com/vpc-service-controls/docs/private-connectivity)
- Source ID: `site-docs-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Private Google Access with VPC Service Controls (click to enlarge) DNS was configured in the VPC network to map .googleapis.com requests to restricted.googleapis.com , which resolves to 199.36.153.4/30 .
- Home Documentation Networking VPC Service Controls Guides Send feedback Private Google Access with VPC Service Controls Stay organized with collections Save and categorize content based on your preferences.
- However, private VIP can allow access to services that are not compliant with VPC Service Controls that might have data exfiltration risks.
- We recommend that you use restricted.googleapis.com , which integrates with VPC Service Controls and mitigates data exfiltration risks.

### "Set up a VPC Service Controls perimeter for a Virtual Private Cloud network\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/set-up-service-perimeter-verify-access](https://docs.cloud.google.com/vpc-service-controls/docs/set-up-service-perimeter-verify-access)
- Source ID: `site-docs-root-2`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- In Cloud Shell, set variables: gcloud config set project PROJECT ID gcloud config set compute/region REGION gcloud config set compute/zone ZONE Replace the following: PROJECT ID : the project ID for the project where you will create resources REGION : a region that's close to your location—for example, us-central1 ZONE : a zone that's close to your location—for example, us-central1-a Create a VPC network and a subnet with Private Google Access enabled: gcloud compute networks create restricted-vpc --subnet-mode = custom gcloud compute networks subnets create restricted-subnet \ --range = 10 .0.0.0/24 \ --network = restricted-vpc \ --enable-private-ip-google-access Create a Private Service Connect endpoint and a forwarding rule configured to use the vpc-sc bundle : gcloud compute addresses create restricted-psc-endpoint \ --global \ --purpose = PRIVATE SERVICE CONNECT \ --addresses = 10 .0.1.1 \ --network = restricted-vpc gcloud compute forwarding-rules create restrictedpsc \ --global \ --network = restricted-vpc \ --address = restricted-psc-endpoint \ --target-google-apis-bundle = vpc-sc Configure the Cloud DNS server policy to redirect queries for Google Cloud APIs to your Private Service Connect endpoint: gcloud dns managed-zones create restricted-dns-zone \ --description = "Private DNS Zone to map Google API queries to the Private Service Connect endpoint for Google APIs" \ --dns-name = "googleapis.com." \ --networks = restricted-vpc \ --visibility = private gcloud dns record-sets create googleapis.com \ --rrdatas = 10 .0.1.1 \ --type = A \ --ttl = 300 \ --zone = restricted-dns-zone gcloud dns record-sets create .googleapis.com \ --rrdatas = "googleapis.com." \ --type = CNAME \ --ttl = 300 \ --zone = restricted-dns-zone Configure a firewall rule at a low priority to deny all egress traffic: gcloud compute firewall-rules create deny-all-egress \ --priority = 65534 \ --direction = egress \ --network = restricted-vpc \ --action = DENY \ --rules = all \ --destination-ranges = 0 .0.0.0/0 Configure a firewall rule at a higher priority to allow traffic to reach the IP address used by your Private Service Connect endpoint: gcloud compute firewall-rules create allow-psc-for-google-apis \ --priority = 1000 \ --direction = egress \ --network = restricted-vpc \ --action = ALLOW \ --rules = tcp:443 \ --destination-ranges = 10 .0.1.1 These firewall rules deny egress broadly, before selectively allowing egress to the Private Service Connect endpoint.
- From the Cloud Shell tab, run the following command to remove the access level. gcloud access-context-manager perimeters update demo perimeter \ --policy = $POLICY ID \ --clear-access-levels From the Cloud Shell tab, create an ingress policy that allows your user identity to ingress to the Compute Engine service only, and apply the policy to your perimeter. cat <<EOF > ingress spec.yaml - ingressFrom: identities: - user: $USERNAME sources: - accessLevel: ' ' ingressTo: operations: - methodSelectors: - method: ' ' serviceName: compute.googleapis.com resources: - ' ' EOF gcloud access-context-manager perimeters update demo perimeter \ --set-ingress-policies = ingress spec.yaml \ --policy = $POLICY ID From the Cloud Shell tab, run the following command to create a Cloud Storage bucket inside the perimeter. gcloud storage buckets create gs:// PROJECT ID -01 The output is similar to the following: "ERROR: (gcloud.storage.buckets.create) HTTPError 403: Request is prohibited by organization's policy." Cloud Shell is a client outside the perimeter, so the VPC Service Controls perimeter blocks Cloud Shell from communicating with restricted services inside the perimeter.
- Home Documentation Networking VPC Service Controls Guides Send feedback Set up a VPC Service Controls perimeter for a Virtual Private Cloud network Stay organized with collections Save and categorize content based on your preferences.
- To deny communication with Cloud Storage or other Google services outside the perimeter, the Restricted Service Resource Usage Organization Policy Service alone is not sufficient, you must configure a VPC Service Controls perimeter.

