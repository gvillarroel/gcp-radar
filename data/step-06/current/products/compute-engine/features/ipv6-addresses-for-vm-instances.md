---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:03.199Z"
product_name: "Compute Engine"
product_slug: "compute-engine"
feature_name: "IPv6 addresses for VM instances"
feature_slug: "ipv6-addresses-for-vm-instances"
latest_feature_date: "2022-08-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/how-to/working-with-hubs-spokes"
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/tutorials/configure-vpn-between-onprem-cloud"
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/connect-ha-vpn-vm"
keywords:
  - "ipv6"
  - "addresses"
  - "vm"
  - "instances"
  - "compute"
  - "engine"
  - "internal"
  - "external"
---

# IPv6 addresses for VM instances

Product: Compute Engine
Coverage: MEDIUM

## Step 02 Summary

Compute Engine instances support internal and external IPv6 addresses in all regions; Compute Engine instances support internal and external IPv6 addresses in all regions.

## Extended Definition

Compute Engine instances support internal and external IPv6 addresses in all regions; Compute Engine instances support internal and external IPv6 addresses in all regions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/how-to/working-with-hubs-spokes](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/how-to/working-with-hubs-spokes)
- [https://docs.cloud.google.com/network-connectivity/docs/vpn/tutorials/configure-vpn-between-onprem-cloud](https://docs.cloud.google.com/network-connectivity/docs/vpn/tutorials/configure-vpn-between-onprem-cloud)
- [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/connect-ha-vpn-vm](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/connect-ha-vpn-vm)

## Supporting Pages

### Connect HA VPN to Compute Engine VMs \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/connect-ha-vpn-vm](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/connect-ha-vpn-vm)
- Source ID: `site-docs-reference-3`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This page describes how to connect an HA VPN gateway to Compute Engine virtual machine (VM) instances with external IP addresses hosted in Google Cloud.
- To create the first peer VPN gateway, run the following command: gcloud compute external-vpn-gateways create PEER GW NAME1 \ --interfaces 0= PEER GW IP 0 ,1= PEER GW IP 1 To create the second peer VPN gateway, run the following command: gcloud compute external-vpn-gateways create PEER GW NAME2 \ --interfaces 0= PEER GW IP 1 ,1= PEER GW IP 0 Replace the following: PEER GW NAME1 : a name representing the first peer VPN gateway PEER GW NAME2 : a name representing the second peer VPN gateway PEER GW IP 1 : the external IP address for the first Compute Engine virtual machine PEER GW IP 0 : the external IP address for the second Compute Engine virtual machine The peer VPN gateway resource that you created looks like the following example, and PEER GW IP 0 and PEER GW IP 1 show the external IP addresses of the Compute Engine virtual machines: Created [https://www.googleapis.com/compute/v1/projects/ PROJECT ID /global/externalVpnGateways/peer-gw].
- In the Peer VPN gateway list, select Compute Engine VMs with external IP addresses .
- Ensure that you have one or two Compute Engine VMs with external IP addresses.

### "Work with hubs and spokes \_|\_ Network Connectivity Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/how-to/working-with-hubs-spokes](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/how-to/working-with-hubs-spokes)
- Source ID: `site-docs-reference-2`
- Final score: 150
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can configure the spoke to export only subnet ranges that use private IPv4 addresses, only IPv6 subnet ranges (internal and external), or both subnet ranges that use private IPv4 addresses and internal and external IPv6 subnet ranges.
- For example, to create a spoke that contains two router appliance instances, use the following request: POST https://networkconnectivity.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /spokes/ SPOKE NAME { "hub": " HUB NAME ", "labels": {" KEY ": " VALUE "}, "linkedRouterApplianceInstances": { "instances": [ { "virtualMachine": " ROUTER APPLIANCE URI ", "ipAddress": " IP ADDRESS ", }, { "virtualMachine": " ROUTER APPLIANCE URI 2 , "ipAddress": " IP ADDRESS 2 ", } ], "siteToSiteDataTransfer": BOOLEAN "includeExportRanges": [INCLUDE EXPORT RANGES,...] "excludeExportRanges": [EXCLUDE EXPORT RANGES,...] "includeImportRanges": [INCLUDE IMPORT RANGES,...] "excludeImportRanges": [EXCLUDE IMPORT RANGES,...] } } Replace the following values: PROJECT ID : the project ID of your project REGION : the Google Cloud region where you want to locate the spoke—for example, us-west1 SPOKE NAME : the name for the spoke HUB NAME : the name of the hub that you are attaching the spoke to KEY : the key in the key-value pair for the optional label text VALUE : the value in the key-value pair for the optional label text ROUTER APPLIANCE URI : the URI of the first router appliance instance—for example, https://www.googleapis.com/compute/projects/ PROJECT ID /zones/ ZONE /instances/ INSTANCE NAME IP ADDRESS : the internal IP address of the first router appliance instance ROUTER APPLIANCE URI 2 : the URI of the second router appliance instance IP ADDRESS 2 : the internal IP address of the second router appliance instance BOOLEAN : a value that determines whether site-to-site data transfer is enabled for this spoke; for more information about this use case, see Site-to-site data transfer overview INCLUDE EXPORT RANGES : a comma-delimited list of keywords, IP address ranges, or a combination of keywords and IP address ranges that define which dynamic routes can be exported to the hub.
- For more information about this use case, see Site-to-site data transfer overview . gcloud network-connectivity spokes linked-router-appliances create NAME \ --hub= HUB NAME \ --description=" DESCRIPTION " \ --router-appliance=instance=" ROUTER APPLIANCE URI ",ip= IP ADDRESS \ --router-appliance=instance=" ROUTER APPLIANCE URI 2 ",ip= IP ADDRESS 2 \ --region= REGION \ --labels=" KEY "=" VALUE " \ --include-export-ranges= [INCLUDE EXPORT RANGES,...] \ --exclude-export-ranges= [EXCLUDE EXPORT RANGES,...] \ --include-import-ranges= [INCLUDE IMPORT RANGES,...] \ --exclude-import-ranges= [EXCLUDE IMPORT RANGES,...] Replace the following values: NAME : the name of the spoke HUB NAME : the name of the hub DESCRIPTION : an optional description of the spoke ROUTER APPLIANCE URI : the URI of the first router appliance instance—for example, https://www.googleapis.com/compute/projects/ PROJECT ID /zones/ ZONE /instances/ INSTANCE NAME IP ADDRESS : the internal IP address of the first router appliance instance ROUTER APPLIANCE URI 2 : the URI of the second router appliance instance IP ADDRESS 2 : the internal IP address of the second router appliance instance REGION : the Google Cloud region where the spoke is located—for example, us-west1 KEY : the key in the key-value pair for the optional label text VALUE : the value in the key-value pair for the optional label text INCLUDE EXPORT RANGES : a comma-delimited list of keywords, IP address ranges, or a combination of keywords and IP address ranges that define which dynamic routes can be exported to the hub.
- To replace the existing resource with a new one, use the following request: PATCH https://networkconnectivity.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /spokes/ SPOKE { "linkedRouterApplianceInstances": { "instances": [ { "virtualMachine": " ROUTER APPLIANCE URI ", "ipAddress": " IP ADDRESS ", } ] } } Replace the following values: PROJECT ID : the project ID of the project that contains the spoke REGION : the region where the spoke is located—for example, us-west1 SPOKE : the name of the spoke ROUTER APPLIANCE URI : the URI of the new router appliance instance to associate with the spoke—for example, "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /zones/ ZONE /instances/ INSTANCE NAME " IP ADDRESS : the internal IP address of the new router appliance instance Delete a spoke When you delete a spoke, you also detach the resources from that spoke.

### Create a Classic VPN connection to a remote site \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/tutorials/configure-vpn-between-onprem-cloud](https://docs.cloud.google.com/network-connectivity/docs/vpn/tutorials/configure-vpn-between-onprem-cloud)
- Source ID: `site-docs-reference-3`
- Final score: 146
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The example creates three regional external IPv4 addresses. module "address" { source = "terraform-google-modules/address/google" version = " > 4.0" project id = var.project id # Replace this with your service project ID in quotes region = "europe-west1" address type = "EXTERNAL" names = [ "regional-external-ip-address-1", "regional-external-ip-address-2", "regional-external-ip-address-3" ] } The following example creates a global external IPv6 address: resource "google compute global address" "default" { project = var.project id # Replace this with your service project ID in quotes name = "ipv6-address" address type = "EXTERNAL" ip version = "IPV6" } Enable IP forwarding You can enable IP forwarding when you create a VM , or by updating the canIpForward instance property on an existing VM.
- Configure the gateway resources Create the target VPN gateway object: gcloud compute target-vpn-gateways create GW NAME \ --network= NETWORK \ --region= REGION \ --project= PROJECT ID Reserve a regional external (static) IP address: gcloud compute addresses create GW IP NAME \ --region= REGION \ --project= PROJECT ID Note the IP address (so you can use it when you configure your peer VPN gateway): gcloud compute addresses describe GW IP NAME \ --region= REGION \ --project= PROJECT ID \ --format='flattened(address)' Create three forwarding rules; these rules instruct Google Cloud to send ESP (IPsec), UDP 500, and UDP 4500 traffic to the gateway: gcloud compute forwarding-rules create fr- GW NAME -esp \ --load-balancing-scheme=EXTERNAL \ --network-tier=PREMIUM \ --ip-protocol=ESP \ --address= GW IP NAME \ --target-vpn-gateway= GW NAME \ --region= REGION \ --project= PROJECT ID gcloud compute forwarding-rules create fr- GW NAME -udp500 \ --load-balancing-scheme=EXTERNAL \ --network-tier=PREMIUM \ --ip-protocol=UDP \ --ports=500 \ --address= GW IP NAME \ --target-vpn-gateway= GW NAME \ --region= REGION \ --project= PROJECT ID gcloud compute forwarding-rules create fr- GW NAME -udp4500 \ --load-balancing-scheme=EXTERNAL \ --network-tier=PREMIUM \ --ip-protocol=UDP \ --ports=4500 \ --address= GW IP NAME \ --target-vpn-gateway= GW NAME \ --region= REGION \ --project= PROJECT ID Create the Cloud VPN tunnel In the commands, replace the following: TUNNEL NAME : a name for the tunnel ON PREM IP : the external IP address of the peer VPN gateway IKE VERS : 1 for IKEv1 or 2 for IKEv2 Known issue: When configuring VPN tunnels to AWS, use the IKEv2 encryption protocol and select fewer transform sets on the AWS side; otherwise, the Cloud VPN tunnel can fail to rekey.
- Use the compute addresses describe command to view the result: gcloud compute addresses describe ADDRESS NAME API To create a regional IPv4 address, call the regional addresses.insert method : POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /addresses Your request body should contain the following: { "name": " ADDRESS NAME " } Replace the following: ADDRESS NAME : the name of the address REGION : the name of the region for this request PROJECT ID : the project ID for this request For global static IPv4 addresses, call the globalAddresses.insert method : POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/addresses Your request body should contain the following: { "name": " ADDRESS NAME " } For global static IPv6 addresses, call the globalAddresses.insert method : POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/addresses Your request body should contain the following: { "name": " ADDRESS NAME ", "ipVersion": "IPV6" } Use the addresses.get method to see the result.
- You can reserve two types of external IP addresses: A regional IP address that is used by VM instances with one or more network interfaces or by regional load balancers A global IP address that is used for global load balancers For a list of regional and global load balancers, see the summary of Google Cloud load balancers .

