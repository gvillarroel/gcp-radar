---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:44:19.089Z"
product_name: "Cloud Healthcare API"
product_slug: "cloud-healthcare-api"
feature_name: "Single-region availability in us-west1 (Oregon)"
feature_slug: "single-region-availability-in-us-west1-oregon"
latest_feature_date: "2022-03-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/healthcare-api/docs/concepts/regions"
  - "https://docs.cloud.google.com/healthcare-api/docs/how-tos/mllp-adapter"
  - "https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb"
keywords:
  - "single"
  - "region"
  - "availability"
  - "us"
  - "west1"
  - "oregon"
  - "healthcare"
  - "adds"
---

# Single-region availability in us-west1 (Oregon)

Product: Cloud Healthcare API
Coverage: MEDIUM

## Step 02 Summary

Cloud Healthcare API adds single-region support in the us-west1 (Oregon) region.

## Extended Definition

Cloud Healthcare API adds single-region support in the us-west1 (Oregon) region.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/healthcare-api/docs/concepts/regions](https://docs.cloud.google.com/healthcare-api/docs/concepts/regions)
- [https://docs.cloud.google.com/healthcare-api/docs/how-tos/mllp-adapter](https://docs.cloud.google.com/healthcare-api/docs/how-tos/mllp-adapter)
- [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb)

## Supporting Pages

### Regions \_|\_ Cloud Healthcare API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/healthcare-api/docs/concepts/regions](https://docs.cloud.google.com/healthcare-api/docs/concepts/regions)
- Source ID: `site-docs-root-2`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- The Cloud Healthcare API is available in the following regions: Regional locations Region name Region description Americas northamerica-northeast1 Montréal northamerica-northeast2 Toronto us-central1 Iowa us-east1 South Carolina us-east4 North Virginia us-west1 Oregon us-west2 Los Angeles us-west3 Salt Lake City southamerica-east1 São Paulo Asia Pacific asia-east1 Taiwan asia-east2 Hong Kong asia-northeast1 Tokyo asia-northeast2 Osaka asia-northeast3 Seoul asia-south1 Mumbai asia-southeast1 Singapore asia-southeast2 Jakarta australia-southeast1 Sydney australia-southeast2 Melbourne Europe europe-north1 Finland europe-west2 London europe-west3 Frankfurt europe-west4 Netherlands europe-west6 Zurich Middle East me-west1 Tel Aviv me-central1 Doha me-central2 Dammam Multi-regional locations Multi-region name Multi-region description us Data centers in the United States eu Data centers within member states of the European Union Location quota requests You can request a quota increase for the Cloud Healthcare API in a specific region , or in a multi-region location .
- Home Documentation Industry solutions Cloud Healthcare API Guides Send feedback Regions Stay organized with collections Save and categorize content based on your preferences.
- Available regions The Cloud Healthcare API supports a subset of the full list of Google Cloud locations .
- To request a quota increase in a single region: In your quota increase request, specify the region.

### "Transmitting HL7v2 messages over TCP/IP connections \_|\_ Cloud Healthcare\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/mllp-adapter](https://docs.cloud.google.com/healthcare-api/docs/how-tos/mllp-adapter)
- Source ID: `site-docs-root`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- Replace ON PREM VPN IP with the value from the "On-premises" VPN IP address in the previous section. gcloud compute vpn-tunnels create vpn-us-central-tunnel-1 \ --project PROJECT ID \ --region us-central1 \ --peer-address ON PREM VPN IP \ --shared-secret SHARED SECRET \ --ike-version 2 \ --local-traffic-selector 0 .0.0.0/0 \ --target-vpn-gateway vpn-us-central To create a static route to 10.0.2.0/24 , run the following command: gcloud compute routes create "vpn-us-central-tunnel-1-route-1" \ --project PROJECT ID \ --network "cloud-vpn-network" \ --next-hop-vpn-tunnel "vpn-us-central-tunnel-1" \ --next-hop-vpn-tunnel-region "us-central1" \ --destination-range "10.0.2.0/24" Complete the following steps to create the VPN gateway, tunnel, and route for the "on-premises" VPN: To create the target VPN gateway object, run the following command: gcloud compute target-vpn-gateways create "vpn-europe-west" \ --project PROJECT ID \ --region "europe-west1" \ --network "on-prem-vpn-network" To create three forwarding rules , run the following commands, replacing the ON PREMISES VPN EXTERNAL ADDRESS variable with the value from the "On-premises" VPN IP address in the previous section: Send ESP (IPsec) traffic to the gateway : gcloud compute forwarding-rules create vpn-europe-west-rule-esp \ --project PROJECT ID \ --region europe-west1 \ --address ON PREMISES VPN EXTERNAL ADDRESS \ --ip-protocol ESP \ --target-vpn-gateway vpn-europe-west Send UDP 500 traffic to the gateway : gcloud compute forwarding-rules create vpn-europe-west-rule-udp500 \ --project PROJECT ID \ --region europe-west1 \ --address ON PREMISES VPN EXTERNAL ADDRESS \ --ip-protocol UDP \ --ports 500 \ --target-vpn-gateway vpn-europe-west Send UDP 4500 traffic to the gateway : gcloud compute forwarding-rules create vpn-europe-west-rule-udp4500 \ --project PROJECT ID \ --region europe-west1 \ --address ON PREMISES VPN EXTERNAL ADDRESS \ --ip-protocol UDP \ --ports 4500 \ --target-vpn-gateway vpn-europe-west To create a tunnel into the "on-premises" gateway, run the following command: gcloud compute vpn-tunnels create vpn-europe-west-tunnel-1 \ --project PROJECT ID \ --region europe-west1 \ --peer-address CLOUD VPN IP \ --shared-secret SHARED SECRET \ --ike-version 2 \ --local-traffic-selector 0 .0.0.0/0 \ --target-vpn-gateway vpn-europe-west To create a static route to 10.0.1.0/24 , run the following command: gcloud compute routes create "vpn-europe-west-tunnel-1-route-1" \ --project PROJECT ID \ --network "on-prem-vpn-network" \ --next-hop-vpn-tunnel "vpn-europe-west-tunnel-1" \ --next-hop-vpn-tunnel-region "europe-west1" \ --destination-range "10.0.1.0/24" You've created the Cloud VPN and "on-premises" gateways and initiated their tunnels.
- Create two custom VPC networks and their subnets by completing the following steps: To create the first VPC network, cloud-vpn-network , run the following command: gcloud compute networks create cloud-vpn-network \ --project = PROJECT ID \ --subnet-mode = custom To create the subnet-us-central-10-0-1 subnet for the cloud-vpn-network network, run the following command: gcloud compute networks subnets create subnet-us-central-10-0-1 \ --project = PROJECT ID \ --region = us-central1 \ --network = cloud-vpn-network \ --range = 10 .0.1.0/24 To create the on-prem-vpn-network VPC network, run the following command: gcloud compute networks create on-prem-vpn-network \ --project = PROJECT ID \ --subnet-mode = custom To create the subnet-europe-west-10-0-2 subnet for the on-prem-vpn-network VPC network, run the following command: gcloud compute networks subnets create subnet-europe-west-10-0-2 \ --project = PROJECT ID \ --region = europe-west1 \ --network = on-prem-vpn-network \ --range = 10 .0.2.0/24 Creating an external IP address Before creating the VPN gateways , reserve an external IP address for each gateway by completing the following steps: To reserve a regional external (static) IP address for the cloud-vpn-ip address, run the following command: gcloud compute addresses create cloud-vpn-ip \ --project = PROJECT ID \ --region = us-central1 To reserve a regional external (static) IP address for the on-prem-vpn-ip address, run the following command: gcloud compute addresses create on-prem-vpn-ip \ --project = PROJECT ID \ --region = europe-west1 Make note of the external IP addresses so that you can use them to configure the VPN gateways in the next section.
- To retrieve the external IP addresses, run the following command: Cloud VPN IP address : gcloud compute addresses describe cloud-vpn-ip \ --project PROJECT ID \ --region us-central1 \ --format = 'flattened(address)' "On-premises" VPN IP address : gcloud compute addresses describe on-prem-vpn-ip \ --project PROJECT ID \ --region europe-west1 \ --format = 'flattened(address)' The commands return output similar to the following: address: 203 .0.113.1 Creating the VPN gateways, tunnels, and routes Complete the following steps to create the VPN gateway, tunnel, and route for the Cloud VPN: Create a cryptographically strong pre-shared key (shared secret) by following the instructions in Generating a strong pre-shared key .
- Naming and addressing reference For reference, this tutorial uses the following naming and IP addressing: Google Cloud side Network name: cloud-vpn-network Subnet name: subnet-us-central-10-0-1 Region: us-central1 Subnet range: 10.0.1.0/24 External IP address name: cloud-vpn-ip VPN gateway name: vpn-us-central VPN tunnel name: vpn-us-central-tunnel-1 "On-premises" side Network name: on-prem-vpn-network Subnet name: subnet-europe-west-10-0-2 Region: europe-west1 Subnet range: 10.0.2.0/24 External IP address name: on-prem-vpn-ip VPN gateway name: vpn-europe-west VPN tunnel name: vpn-europe-west-tunnel-1 Creating custom VPC networks and subnets The first step in configuring Cloud VPN is to create two VPC networks.

### "Using the DICOMweb standard \_|\_ Cloud Healthcare API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb)
- Source ID: `site-docs-root`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- GoogleAuth ({ scopes : [ 'https://www.googleapis.com/auth/cloud-platform' ], }), }); const fs = require ( 'fs' ); const util = require ( 'util' ); const writeFile = util . promisify ( fs . writeFile ); const fileName = 'instance file.dcm' ; const dicomWebRetrieveInstance = async () = > { // TODO(developer): uncomment these lines before running the sample // const cloudRegion = 'us-central1'; // const projectId = 'adjective-noun-123'; // const datasetId = 'my-dataset'; // const dicomStoreId = 'my-dicom-store'; // const studyUid = '1.3.6.1.4.1.5062.55.1.2270943358.716200484.1363785608958.61.0'; // const seriesUid = '2.24.52329571877967561426579904912379710633'; // const instanceUid = '1.3.6.2.4.2.14619.5.2.1.6280.6001.129311971280445372188125744148'; const parent = projects/ ${ projectId } /locations/ ${ cloudRegion } /datasets/ ${ datasetId } /dicomStores/ ${ dicomStoreId } ; const dicomWebPath = studies/ ${ studyUid } /series/ ${ seriesUid } /instances/ ${ instanceUid } ; const request = { parent , dicomWebPath }; const instance = await healthcare . projects . locations . datasets . dicomStores . studies . series . instances . retrieveInstance ( request , { headers : { Accept : 'application/dicom; transfer-syntax= ' }, responseType : 'arraybuffer' , } ); const fileBytes = Buffer . from ( instance . data ); await writeFile ( fileName , fileBytes ); console . log ( Retrieved DICOM instance and saved to ${ fileName } in current directory ); }; dicomWebRetrieveInstance (); Python def dicomweb retrieve instance ( project id , location , dataset id , dicom store id , study uid , series uid , instance uid , ): """Handles the GET requests specified in the DICOMweb standard.
- GoogleAuth ({ scopes : [ 'https://www.googleapis.com/auth/cloud-platform' ], }), }); const fs = require ( 'fs' ); const util = require ( 'util' ); const writeFile = util . promisify ( fs . writeFile ); const fileName = 'rendered image.png' ; const dicomWebRetrieveRendered = async () = > { // TODO(developer): uncomment these lines before running the sample // const cloudRegion = 'us-central1'; // const projectId = 'adjective-noun-123'; // const datasetId = 'my-dataset'; // const dicomStoreId = 'my-dicom-store'; // const studyUid = '1.3.6.1.4.1.5062.55.1.2270943358.716200484.1363785608958.61.0'; // const seriesUid = '2.24.52329571877967561426579904912379710633'; // const instanceUid = '1.3.6.2.4.2.14619.5.2.1.6280.6001.129311971280445372188125744148'; const parent = projects/ ${ projectId } /locations/ ${ cloudRegion } /datasets/ ${ datasetId } /dicomStores/ ${ dicomStoreId } ; const dicomWebPath = studies/ ${ studyUid } /series/ ${ seriesUid } /instances/ ${ instanceUid } /rendered ; const request = { parent , dicomWebPath }; const rendered = await healthcare . projects . locations . datasets . dicomStores . studies . series . instances . retrieveRendered ( request , { headers : { Accept : 'image/png' }, responseType : 'arraybuffer' , } ); const fileBytes = Buffer . from ( rendered . data ); await writeFile ( fileName , fileBytes ); console . log ( Retrieved rendered image and saved to ${ fileName } in current directory ); }; dicomWebRetrieveRendered (); Python def dicomweb retrieve rendered ( project id , location , dataset id , dicom store id , study uid , series uid , instance uid , ): """Handles the GET requests specified in the DICOMweb standard.
- GoogleAuth ({ scopes : [ 'https://www.googleapis.com/auth/cloud-platform' ], }), }); const fs = require ( 'fs' ); const util = require ( 'util' ); const writeFile = util . promisify ( fs . writeFile ); // When specifying the output file, use an extension like ".multipart." // Then, parse the downloaded multipart file to get each individual // DICOM file. const fileName = 'study file.multipart' ; const dicomWebRetrieveStudy = async () = > { // TODO(developer): uncomment these lines before running the sample // const cloudRegion = 'us-central1'; // const projectId = 'adjective-noun-123'; // const datasetId = 'my-dataset'; // const dicomStoreId = 'my-dicom-store'; // const studyUid = '1.3.6.1.4.1.5062.55.1.2270943358.716200484.1363785608958.61.0'; const parent = projects/ ${ projectId } /locations/ ${ cloudRegion } /datasets/ ${ datasetId } /dicomStores/ ${ dicomStoreId } ; const dicomWebPath = studies/ ${ studyUid } ; const request = { parent , dicomWebPath }; const study = await healthcare . projects . locations . datasets . dicomStores . studies . retrieveStudy ( request , { headers : { Accept : 'multipart/related; type=application/dicom; transfer-syntax= ' , }, responseType : 'arraybuffer' , } ); const fileBytes = Buffer . from ( study . data ); await writeFile ( fileName , fileBytes ); console . log ( Retrieved study and saved to ${ fileName } in current directory ); }; dicomWebRetrieveStudy (); Python def dicomweb retrieve study ( project id , location , dataset id , dicom store id , study uid ): """Handles the GET requests specified in the DICOMweb standard.
- GoogleAuth ({ scopes : [ 'https://www.googleapis.com/auth/cloud-platform' ], }), }); const fs = require ( 'fs' ); const dicomWebStoreInstance = async () = > { // TODO(developer): uncomment these lines before running the sample // const cloudRegion = 'us-central1'; // const projectId = 'adjective-noun-123'; // const datasetId = 'my-dataset'; // const dicomStoreId = 'my-dicom-store'; // const dcmFile = 'file.dcm'; const parent = projects/ ${ projectId } /locations/ ${ cloudRegion } /datasets/ ${ datasetId } /dicomStores/ ${ dicomStoreId } ; const dicomWebPath = 'studies' ; // Use a stream because other types of reads overwrite the client's HTTP // headers and cause storeInstances to fail. const binaryData = fs . createReadStream ( dcmFile ); const request = { parent , dicomWebPath , requestBody : binaryData , }; const instance = await healthcare . projects . locations . datasets . dicomStores . storeInstances ( request , { headers : { 'Content-Type' : 'application/dicom' , Accept : 'application/dicom+json' , }, } ); console . log ( 'Stored DICOM instance:\n' , JSON . stringify ( instance . data )); }; dicomWebStoreInstance (); Python def dicomweb store instance ( project id , location , dataset id , dicom store id , dcm file ): """Handles the POST requests specified in the DICOMweb standard.

