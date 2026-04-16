---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:44:19.076Z"
product_name: "Cloud Healthcare API"
product_slug: "cloud-healthcare-api"
feature_name: "Cloud Healthcare API single-region support in me-west1"
feature_slug: "cloud-healthcare-api-single-region-support-in-me-west1"
latest_feature_date: "2023-03-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/healthcare-api/docs/concepts/regions"
  - "https://docs.cloud.google.com/healthcare-api/docs/how-tos/mllp-adapter"
  - "https://docs.cloud.google.com/healthcare-api/docs/best-practices-quota-management"
keywords:
  - "healthcare"
  - "single"
  - "region"
  - "me"
  - "west1"
  - "added"
  - "availability"
  - "tel"
---

# Cloud Healthcare API single-region support in me-west1

Product: Cloud Healthcare API
Coverage: MEDIUM

## Step 02 Summary

Cloud Healthcare API added single-region availability in the me-west1 (Tel Aviv) region; Cloud Healthcare API added single-region availability in the me-west1 (Tel Aviv) region.

## Extended Definition

Cloud Healthcare API added single-region availability in the me-west1 (Tel Aviv) region; Cloud Healthcare API added single-region availability in the me-west1 (Tel Aviv) region.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/healthcare-api/docs/concepts/regions](https://docs.cloud.google.com/healthcare-api/docs/concepts/regions)
- [https://docs.cloud.google.com/healthcare-api/docs/how-tos/mllp-adapter](https://docs.cloud.google.com/healthcare-api/docs/how-tos/mllp-adapter)
- [https://docs.cloud.google.com/healthcare-api/docs/best-practices-quota-management](https://docs.cloud.google.com/healthcare-api/docs/best-practices-quota-management)

## Supporting Pages

### Regions \_|\_ Cloud Healthcare API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/healthcare-api/docs/concepts/regions](https://docs.cloud.google.com/healthcare-api/docs/concepts/regions)
- Source ID: `site-docs-root-2`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- The Cloud Healthcare API is available in the following regions: Regional locations Region name Region description Americas northamerica-northeast1 Montréal northamerica-northeast2 Toronto us-central1 Iowa us-east1 South Carolina us-east4 North Virginia us-west1 Oregon us-west2 Los Angeles us-west3 Salt Lake City southamerica-east1 São Paulo Asia Pacific asia-east1 Taiwan asia-east2 Hong Kong asia-northeast1 Tokyo asia-northeast2 Osaka asia-northeast3 Seoul asia-south1 Mumbai asia-southeast1 Singapore asia-southeast2 Jakarta australia-southeast1 Sydney australia-southeast2 Melbourne Europe europe-north1 Finland europe-west2 London europe-west3 Frankfurt europe-west4 Netherlands europe-west6 Zurich Middle East me-west1 Tel Aviv me-central1 Doha me-central2 Dammam Multi-regional locations Multi-region name Multi-region description us Data centers in the United States eu Data centers within member states of the European Union Location quota requests You can request a quota increase for the Cloud Healthcare API in a specific region , or in a multi-region location .
- Home Documentation Industry solutions Cloud Healthcare API Guides Send feedback Regions Stay organized with collections Save and categorize content based on your preferences.
- Available regions The Cloud Healthcare API supports a subset of the full list of Google Cloud locations .
- To request a quota increase in a single region: In your quota increase request, specify the region.

### "Transmitting HL7v2 messages over TCP/IP connections \_|\_ Cloud Healthcare\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/mllp-adapter](https://docs.cloud.google.com/healthcare-api/docs/how-tos/mllp-adapter)
- Source ID: `site-docs-root`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- Replace ON PREM VPN IP with the value from the "On-premises" VPN IP address in the previous section. gcloud compute vpn-tunnels create vpn-us-central-tunnel-1 \ --project PROJECT ID \ --region us-central1 \ --peer-address ON PREM VPN IP \ --shared-secret SHARED SECRET \ --ike-version 2 \ --local-traffic-selector 0 .0.0.0/0 \ --target-vpn-gateway vpn-us-central To create a static route to 10.0.2.0/24 , run the following command: gcloud compute routes create "vpn-us-central-tunnel-1-route-1" \ --project PROJECT ID \ --network "cloud-vpn-network" \ --next-hop-vpn-tunnel "vpn-us-central-tunnel-1" \ --next-hop-vpn-tunnel-region "us-central1" \ --destination-range "10.0.2.0/24" Complete the following steps to create the VPN gateway, tunnel, and route for the "on-premises" VPN: To create the target VPN gateway object, run the following command: gcloud compute target-vpn-gateways create "vpn-europe-west" \ --project PROJECT ID \ --region "europe-west1" \ --network "on-prem-vpn-network" To create three forwarding rules , run the following commands, replacing the ON PREMISES VPN EXTERNAL ADDRESS variable with the value from the "On-premises" VPN IP address in the previous section: Send ESP (IPsec) traffic to the gateway : gcloud compute forwarding-rules create vpn-europe-west-rule-esp \ --project PROJECT ID \ --region europe-west1 \ --address ON PREMISES VPN EXTERNAL ADDRESS \ --ip-protocol ESP \ --target-vpn-gateway vpn-europe-west Send UDP 500 traffic to the gateway : gcloud compute forwarding-rules create vpn-europe-west-rule-udp500 \ --project PROJECT ID \ --region europe-west1 \ --address ON PREMISES VPN EXTERNAL ADDRESS \ --ip-protocol UDP \ --ports 500 \ --target-vpn-gateway vpn-europe-west Send UDP 4500 traffic to the gateway : gcloud compute forwarding-rules create vpn-europe-west-rule-udp4500 \ --project PROJECT ID \ --region europe-west1 \ --address ON PREMISES VPN EXTERNAL ADDRESS \ --ip-protocol UDP \ --ports 4500 \ --target-vpn-gateway vpn-europe-west To create a tunnel into the "on-premises" gateway, run the following command: gcloud compute vpn-tunnels create vpn-europe-west-tunnel-1 \ --project PROJECT ID \ --region europe-west1 \ --peer-address CLOUD VPN IP \ --shared-secret SHARED SECRET \ --ike-version 2 \ --local-traffic-selector 0 .0.0.0/0 \ --target-vpn-gateway vpn-europe-west To create a static route to 10.0.1.0/24 , run the following command: gcloud compute routes create "vpn-europe-west-tunnel-1-route-1" \ --project PROJECT ID \ --network "on-prem-vpn-network" \ --next-hop-vpn-tunnel "vpn-europe-west-tunnel-1" \ --next-hop-vpn-tunnel-region "europe-west1" \ --destination-range "10.0.1.0/24" You've created the Cloud VPN and "on-premises" gateways and initiated their tunnels.
- To view the message published to the Pub/Sub topic, run the gcloud pubsub subscriptions pull command: gcloud pubsub subscriptions pull --auto-ack PUBSUB SUBSCRIPTION The command returns the following output about the ingested HL7v2 message: ┌----------------------------------------------------------------------------------------------------------------- ----------------- ---------------┐ DATA MESSAGE ID ATTRIBUTES ├----------------------------------------------------------------------------------------------------------------- ----------------- --------------- projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /hl7V2Stores/ HL7V2 STORE ID /messages/ HL7V2 MESSAGE ID 123456789012345 msgType = ADT └----------------------------------------------------------------------------------------------------------------- ----------------- ---------------┘ You can also list the messages in your HL7v2 store to see if the message was added: curl curl -X GET \ -H "Authorization: Bearer $( gcloud auth application-default print-access-token ) " \ -H "Content-Type: application/json; charset=utf-8" \ "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /hl7V2Stores/ HL7V2 STORE ID /messages" If the request is successful, the server returns the message's ID in a resource path: { "hl7V2Messages": [ { "name": "projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /hl7V2Stores/ HL7V2 STORE ID /messages/ MESSAGE ID " } ] } PowerShell $cred = gcloud auth application-default print-access-token $headers = @ { Authorization = "Bearer $cred " } Invoke-WebRequest -Method Get -Headers $headers -ContentType: "application/json; charset=utf-8" ` -Uri "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /hl7V2Stores/ HL7V2 STORE ID /messages" Select-Object -Expand Content If the request is successful, the server returns the message's ID in a resource path: { "hl7V2Messages": [ { "name": "projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /hl7V2Stores/ HL7V2 STORE ID /messages/ MESSAGE ID " } ] } After completing this section, you have successfully deployed the MLLP adapter to GKE and, over a VPN, securely sent an HL7v2 message from an "on-premises" instance through the adapter and to the Cloud Healthcare API.
- To view the message published to the Pub/Sub topic, run the gcloud pubsub subscriptions pull command: gcloud pubsub subscriptions pull --auto-ack PUBSUB SUBSCRIPTION The command returns the following output about the ingested HL7v2 message: ┌----------------------------------------------------------------------------------------------------------------- ----------------- ---------------┐ DATA MESSAGE ID ATTRIBUTES ├----------------------------------------------------------------------------------------------------------------- ----------------- --------------- projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /hl7V2Stores/ HL7V2 STORE ID /messages/ HL7V2 MESSAGE ID 123456789012345 msgType = ADT └----------------------------------------------------------------------------------------------------------------- ----------------- ---------------┘ You can also list the messages in your HL7v2 store to see if the message was added: curl curl -X GET \ -H "Authorization: Bearer $( gcloud auth application-default print-access-token ) " \ -H "Content-Type: application/json; charset=utf-8" \ "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /hl7V2Stores/ HL7V2 STORE ID /messages" If the request is successful, the server returns the message's ID in a resource path: { "hl7V2Messages": [ { "name": "projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /hl7V2Stores/ HL7V2 STORE ID /messages/ MESSAGE ID " } ] } PowerShell $cred = gcloud auth application-default print-access-token $headers = @ { Authorization = "Bearer $cred " } Invoke-WebRequest -Method Get -Headers $headers -ContentType: "application/json; charset=utf-8" -Uri "https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /hl7V2Stores/ HL7V2 STORE ID /messages" Select-Object -Expand Content If the request is successful, the server returns the message's ID in a resource path: { "hl7V2Messages": [ { "name": "projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /hl7V2Stores/ HL7V2 STORE ID /messages/ MESSAGE ID " } ] } After completing this section, you have successfully deployed the MLLP adapter to GKE and sent an HL7v2 message from a remote instance through the adapter and to the Cloud Healthcare API.
- Create two custom VPC networks and their subnets by completing the following steps: To create the first VPC network, cloud-vpn-network , run the following command: gcloud compute networks create cloud-vpn-network \ --project = PROJECT ID \ --subnet-mode = custom To create the subnet-us-central-10-0-1 subnet for the cloud-vpn-network network, run the following command: gcloud compute networks subnets create subnet-us-central-10-0-1 \ --project = PROJECT ID \ --region = us-central1 \ --network = cloud-vpn-network \ --range = 10 .0.1.0/24 To create the on-prem-vpn-network VPC network, run the following command: gcloud compute networks create on-prem-vpn-network \ --project = PROJECT ID \ --subnet-mode = custom To create the subnet-europe-west-10-0-2 subnet for the on-prem-vpn-network VPC network, run the following command: gcloud compute networks subnets create subnet-europe-west-10-0-2 \ --project = PROJECT ID \ --region = europe-west1 \ --network = on-prem-vpn-network \ --range = 10 .0.2.0/24 Creating an external IP address Before creating the VPN gateways , reserve an external IP address for each gateway by completing the following steps: To reserve a regional external (static) IP address for the cloud-vpn-ip address, run the following command: gcloud compute addresses create cloud-vpn-ip \ --project = PROJECT ID \ --region = us-central1 To reserve a regional external (static) IP address for the on-prem-vpn-ip address, run the following command: gcloud compute addresses create on-prem-vpn-ip \ --project = PROJECT ID \ --region = europe-west1 Make note of the external IP addresses so that you can use them to configure the VPN gateways in the next section.

### "Quota management best practices \_|\_ Cloud Healthcare API \_|\_ Google\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/best-practices-quota-management](https://docs.cloud.google.com/healthcare-api/docs/best-practices-quota-management)
- Source ID: `site-docs-root-2`
- Final score: 79
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The us multi-regional location consists of the following subregions: us-central1 us-east1 us-west1 If you already have Cloud Healthcare API traffic using quota in any of the us- subregions, ensure that you take the existing traffic in those subregions into account when making a quota increase request for the us multi-region.
- If your Cloud Healthcare API dataset is in the us multi-regional location, and you want to request additional quota, state in your quota request that the quota is for the "US meta region".
- Anticipate per-region usage Cloud Healthcare API measures quotas at a per-Google Cloud-project and per-region basis.
- Anticipate total usage for all data stores and clients Understand your total usage across all Cloud Healthcare API data stores , and understand the total usage of all clients that make requests to your Google Cloud project.

