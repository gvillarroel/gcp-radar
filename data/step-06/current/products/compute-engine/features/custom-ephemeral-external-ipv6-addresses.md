---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:03.134Z"
product_name: "Compute Engine"
product_slug: "compute-engine"
feature_name: "Custom ephemeral external IPv6 addresses"
feature_slug: "custom-ephemeral-external-ipv6-addresses"
latest_feature_date: "2025-06-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/tutorials/configure-vpn-between-onprem-cloud"
  - "https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/how-to/creating-router-appliances"
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/connect-ha-vpn-vm"
keywords:
  - "custom"
  - "ephemeral"
  - "external"
  - "ipv6"
  - "addresses"
  - "instances"
  - "can"
  - "created"
---

# Custom ephemeral external IPv6 addresses

Product: Compute Engine
Coverage: MEDIUM

## Step 02 Summary

Instances can be created with a user-specified custom ephemeral external IPv6 address.

## Extended Definition

Instances can be created with a user-specified custom ephemeral external IPv6 address.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/vpn/tutorials/configure-vpn-between-onprem-cloud](https://docs.cloud.google.com/network-connectivity/docs/vpn/tutorials/configure-vpn-between-onprem-cloud)
- [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/how-to/creating-router-appliances](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/how-to/creating-router-appliances)
- [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/connect-ha-vpn-vm](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/connect-ha-vpn-vm)

## Supporting Pages

### Create a Classic VPN connection to a remote site \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/tutorials/configure-vpn-between-onprem-cloud](https://docs.cloud.google.com/network-connectivity/docs/vpn/tutorials/configure-vpn-between-onprem-cloud)
- Source ID: `site-docs-reference-3`
- Final score: 171
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The example creates three regional external IPv4 addresses. module "address" { source = "terraform-google-modules/address/google" version = " > 4.0" project id = var.project id # Replace this with your service project ID in quotes region = "europe-west1" address type = "EXTERNAL" names = [ "regional-external-ip-address-1", "regional-external-ip-address-2", "regional-external-ip-address-3" ] } The following example creates a global external IPv6 address: resource "google compute global address" "default" { project = var.project id # Replace this with your service project ID in quotes name = "ipv6-address" address type = "EXTERNAL" ip version = "IPV6" } Enable IP forwarding You can enable IP forwarding when you create a VM , or by updating the canIpForward instance property on an existing VM.
- You can reserve two types of external IP addresses: A regional IP address that is used by VM instances with one or more network interfaces or by regional load balancers A global IP address that is used for global load balancers For a list of regional and global load balancers, see the summary of Google Cloud load balancers .
- Configure the gateway resources Create the target VPN gateway object: gcloud compute target-vpn-gateways create GW NAME \ --network= NETWORK \ --region= REGION \ --project= PROJECT ID Reserve a regional external (static) IP address: gcloud compute addresses create GW IP NAME \ --region= REGION \ --project= PROJECT ID Note the IP address (so you can use it when you configure your peer VPN gateway): gcloud compute addresses describe GW IP NAME \ --region= REGION \ --project= PROJECT ID \ --format='flattened(address)' Create three forwarding rules; these rules instruct Google Cloud to send ESP (IPsec), UDP 500, and UDP 4500 traffic to the gateway: gcloud compute forwarding-rules create fr- GW NAME -esp \ --load-balancing-scheme=EXTERNAL \ --network-tier=PREMIUM \ --ip-protocol=ESP \ --address= GW IP NAME \ --target-vpn-gateway= GW NAME \ --region= REGION \ --project= PROJECT ID gcloud compute forwarding-rules create fr- GW NAME -udp500 \ --load-balancing-scheme=EXTERNAL \ --network-tier=PREMIUM \ --ip-protocol=UDP \ --ports=500 \ --address= GW IP NAME \ --target-vpn-gateway= GW NAME \ --region= REGION \ --project= PROJECT ID gcloud compute forwarding-rules create fr- GW NAME -udp4500 \ --load-balancing-scheme=EXTERNAL \ --network-tier=PREMIUM \ --ip-protocol=UDP \ --ports=4500 \ --address= GW IP NAME \ --target-vpn-gateway= GW NAME \ --region= REGION \ --project= PROJECT ID Create the Cloud VPN tunnel In the commands, replace the following: TUNNEL NAME : a name for the tunnel ON PREM IP : the external IP address of the peer VPN gateway IKE VERS : 1 for IKEv1 or 2 for IKEv2 Known issue: When configuring VPN tunnels to AWS, use the IKEv2 encryption protocol and select fewer transform sets on the AWS side; otherwise, the Cloud VPN tunnel can fail to rekey.
- Use the compute addresses describe command to view the result: gcloud compute addresses describe ADDRESS NAME API To create a regional IPv4 address, call the regional addresses.insert method : POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /addresses Your request body should contain the following: { "name": " ADDRESS NAME " } Replace the following: ADDRESS NAME : the name of the address REGION : the name of the region for this request PROJECT ID : the project ID for this request For global static IPv4 addresses, call the globalAddresses.insert method : POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/addresses Your request body should contain the following: { "name": " ADDRESS NAME " } For global static IPv6 addresses, call the globalAddresses.insert method : POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/addresses Your request body should contain the following: { "name": " ADDRESS NAME ", "ipVersion": "IPV6" } Use the addresses.get method to see the result.

### "Create router appliance instances \_|\_ Network Connectivity Center \_|\_\

- URL: [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/how-to/creating-router-appliances](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/how-to/creating-router-appliances)
- Source ID: `site-docs-reference-2`
- Final score: 170
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- POST https://networkconnectivity.googleapis.com/v1/projects/ PROJECT ID /locations/global/hubs { "name":" HUB NAME ", "description":" DESCRIPTION ", "labels": { " KEY ": " VALUE " } } Replace the following values: PROJECT ID : the project ID of the project that contains the new hub HUB NAME : the name of the new hub DESCRIPTION : optional text that describes the hub KEY : the key in the key-value pair for the optional label text VALUE : the value in the key-value pair for the optional label text Create a Router appliance spoke Create a Router appliance spoke that uses the two router appliance instances that you just created.
- This image can be any of the following: A solution provided by a supported NCC partner A custom image, such as an image that you created Note: If you are using an image from a vendor, see your vendor's documentation.
- IP addresses and router appliance instances To set up a router appliance instance, you must establish peering between the instance and the Cloud Router.
- For each custom learned route that you want to specify, configure a static route for that IP prefix with the next hop set to the external network.

### Connect HA VPN to Compute Engine VMs \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/connect-ha-vpn-vm](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/connect-ha-vpn-vm)
- Source ID: `site-docs-reference-3`
- Final score: 170
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To create the first peer VPN gateway, run the following command: gcloud compute external-vpn-gateways create PEER GW NAME1 \ --interfaces 0= PEER GW IP 0 ,1= PEER GW IP 1 To create the second peer VPN gateway, run the following command: gcloud compute external-vpn-gateways create PEER GW NAME2 \ --interfaces 0= PEER GW IP 1 ,1= PEER GW IP 0 Replace the following: PEER GW NAME1 : a name representing the first peer VPN gateway PEER GW NAME2 : a name representing the second peer VPN gateway PEER GW IP 1 : the external IP address for the first Compute Engine virtual machine PEER GW IP 0 : the external IP address for the second Compute Engine virtual machine The peer VPN gateway resource that you created looks like the following example, and PEER GW IP 0 and PEER GW IP 1 show the external IP addresses of the Compute Engine virtual machines: Created [https://www.googleapis.com/compute/v1/projects/ PROJECT ID /global/externalVpnGateways/peer-gw].
- When the gateway is created, two external IPv4 addresses are automatically allocated, one for each gateway interface. gcloud compute vpn-gateways create GW NAME \ --network= NETWORK \ --region= REGION \ [--stack-type= IP STACK ] Replace the following: GW NAME : the name of the gateway NETWORK : the name of your Google Cloud network REGION : the Google Cloud region where you create the gateway and tunnel IP STACK : Optional: the IP stack to use.
- This page describes how to connect an HA VPN gateway to Compute Engine virtual machine (VM) instances with external IP addresses hosted in Google Cloud.
- Cloud Router does not dynamically advertise routes for subnets that are configured to use external IPv6 addresses ( --ipv6-access-type=EXTERNAL ).

