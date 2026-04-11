---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:57:06.734Z"
product_name: "Cloud NAT"
product_slug: "cloud-nat"
feature_name: "Hybrid NAT"
feature_slug: "hybrid-nat"
latest_feature_date: "2024-09-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/nat/docs/set-up-network-address-translation"
  - "https://docs.cloud.google.com/nat/docs/overview"
  - "https://docs.cloud.google.com/nat/docs/monitoring"
keywords:
  - "hybrid"
  - "nat"
  - "provides"
  - "network"
  - "address"
  - "translation"
  - "for"
  - "connectivity"
---

# Hybrid NAT

Product: Cloud NAT
Coverage: LOW

## Step 02 Summary

Hybrid NAT provides network address translation for hybrid connectivity scenarios; Hybrid NAT provides network address translation for hybrid connectivity scenarios.

## Extended Definition

Hybrid NAT provides network address translation for hybrid connectivity scenarios; Hybrid NAT provides network address translation for hybrid connectivity scenarios.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/nat/docs/set-up-network-address-translation](https://docs.cloud.google.com/nat/docs/set-up-network-address-translation)
- [https://docs.cloud.google.com/nat/docs/overview](https://docs.cloud.google.com/nat/docs/overview)
- [https://docs.cloud.google.com/nat/docs/monitoring](https://docs.cloud.google.com/nat/docs/monitoring)

## Supporting Pages

### "Quickstart: Set up and manage network address translation with Public NAT\

- URL: [https://docs.cloud.google.com/nat/docs/set-up-network-address-translation](https://docs.cloud.google.com/nat/docs/set-up-network-address-translation)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To specify the network tier from which the Cloud NAT gateway allocates external IP addresses, run one of the following commands: For IPv4 subnet ranges: gcloud compute routers nats create NAT CONFIG \ --router= NAT ROUTER \ --region= REGION \ --nat-all-subnet-ip-ranges \ --auto-allocate-nat-external-ips \ --auto-network-tier= AUTO NETWORK TIER For IPv6 subnet ranges: gcloud compute routers nats create NAT CONFIG \ --router= NAT ROUTER \ --region= REGION \ --nat64-all-v6-subnet-ip-ranges \ --auto-allocate-nat-external-ips \ --auto-network-tier= AUTO NETWORK TIER If you are creating the gateway for IPv4 and IPv6 subnet ranges, specify both the --nat-all-subnet-ip-ranges and --nat64-all-v6-subnet-ip-ranges flags in this command.
- Click Save . gcloud Use the gcloud compute routers nats update command . gcloud compute routers nats update NAT CONFIG \ --router= NAT ROUTER \ --region= REGION \ --auto-allocate-nat-external-ips --auto-network-tier= AUTO NETWORK TIER Replace the following: NAT CONFIG : the name of your NAT configuration NAT ROUTER : the name of your Cloud Router REGION : the region of the NAT to create; if not specified, you might be prompted to select a region (interactive mode only) AUTO NETWORK TIER : the network tier to use when automatically allocating IP addresses for the Cloud NAT gateway.
- Replace the following: NAT CONFIG : a name for your NAT configuration NAT ROUTER : the name of the Cloud Router that you created in the previous step REGION : the region where you want to use the Cloud NAT gateway AUTO NETWORK TIER : the network tier to use when automatically allocating IP addresses for the Cloud NAT gateway.
- Limitations If you change the network tier of the automatically allocated IP addresses for a Cloud NAT gateway, all connections on the previously allocated IP addresses immediately close.

### Cloud NAT overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/nat/docs/overview](https://docs.cloud.google.com/nat/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 170
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cloud NAT overview Cloud NAT provides network address translation (NAT) for outbound traffic to the internet, Virtual Private Cloud (VPC) networks, on-premises networks, and other cloud provider networks.
- Cloud NAT configures the Andromeda software that powers your Virtual Private Cloud (VPC) network so that it provides source network address translation (source NAT or SNAT) for resources.
- Cloud NAT also provides destination network address translation (destination NAT or DNAT) for established inbound response packets.
- Cloud NAT translates addresses for the following resources: Compute Engine virtual machine (VM) instances Google Kubernetes Engine (GKE) clusters Cloud Run instances Cloud Run functions instances App Engine standard environment instances Regional internet network endpoint groups (NEGs) NAT is automatically applied to the resources that match your Cloud NAT configuration after you create a Cloud NAT gateway and configure it to serve the subnets where those resources run.

### Logs and metrics \_|\_ Cloud NAT \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/nat/docs/monitoring](https://docs.cloud.google.com/nat/docs/monitoring)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Sending VM was trying to reach the external IP address of another VM in the same project. { insertId: "1the8juf6vab1l" jsonPayload: { allocation status: "DROPPED" connection: { dest ip : "192.0.2.87" dest port: 80 protocol: "tcp" src ip: "10.0.128.1" src port: 45047 } destination: { instance: { project id: "service-project-1" region: "asia-east1" vm name: "vm-2" zone: "asia-east1-b" } } endpoint: { project id: "service-project-1" region: "europe-west1" vm name: "vm-1" zone: "europe-west1-b" } gateway identifiers: { cloud router: "my-router-1" gateway name: "my-nat-2" region: "europe-west1" } vpc: { project id: "host-project" subnetwork name: "subnetwork-1" vpc name: "network-1" } } logName: "projects/host-project/logs/compute.googleapis.com%2Fnat flows" receiveTimestamp: "2018-06-28T10:46:09.123456789Z" resource: { labels: { gateway name: "my-nat-2" project id: "host-project" region: "europe-west1-d" router id: "987654321123456" } type: "nat gateway" } timestamp: "2018-06-28T10:46:01.602240572Z" } Pricing for Cloud NAT logging See Logging pricing .
- In each command, replace the following: NAT GATEWAY : the name of the NAT gateway ROUTER NAME : the name of the Cloud Router that hosts the NAT gateway REGION : the region of the Cloud Router To log network address translation events and errors: gcloud compute routers nats update NAT GATEWAY \ --router= ROUTER NAME \ --region= REGION \ --enable-logging To log only network address translation events: gcloud compute routers nats update NAT GATEWAY \ --router= ROUTER NAME \ --region= REGION \ --enable-logging \ --log-filter=TRANSLATIONS ONLY To log only errors: gcloud compute routers nats update NAT GATEWAY \ --router= ROUTER NAME \ --region= REGION \ --enable-logging \ --log-filter=ERRORS ONLY Clear log filters If you have a filter set, you can clear it.
- Examples Example 1: NAT-ed TCP connection record from a VM instance in a Shared VPC network going to an external server in France. { insertId: "1the8juf6vab1t" jsonPayload: { allocation status: "OK" connection: { dest ip : "198.51.100.142" dest port: 80 nat ip: "203.0.113.17" nat port: 34889 protocol: "tcp" src ip: "10.0.0.1" src port: 45047 } destination: { geo location: { city: "Bordeaux" continent: "Europe" country: "France" region: "Nouvelle-Aquitaine" } } endpoint: { project id: "service-project-1" region: "europe-west1" vm name: "vm-1" zone: "europe-west1-b" } gateway identifiers: { gateway name: "my-nat-1" region: "europe-west1" router name: "my-router-1" } vpc: { project id: "host-project" subnetwork name: "subnetwork-1" vpc name: "network-1" } } labels: { nat.googleapis.com/instance name: "vm-1" nat.googleapis.com/instance zone: "europe-west1-b" nat.googleapis.com/nat ip: "203.0.113.17" nat.googleapis.com/network name: "network-1" nat.googleapis.com/router name: "my-router-1" nat.googleapis.com/subnetwork name: "subnetwork-1" } logName: "projects/host-project/logs/compute.googleapis.com%2Fnat flows" receiveTimestamp: "2018-06-28T10:46:08.123456789Z" resource: { labels: { gateway name: "my-nat-1" project id: "host-project" region: "europe-west1-d" router id: "987654321123456" } type: "nat gateway" } timestamp: "2018-06-28T10:46:00.602240572Z" } Example 2: Record for a packet dropped because there were no available ports.
- NatGateway field format Field Type Description gateway name string Name of the NAT gateway router name string Cloud Router associated with the NAT gateway region string Region of the Cloud Router InstanceDetails field format Field Type Description project id string ID of the project containing the VM vm name string Instance name of the VM region string Region of the VM zone string Zone of the VM VpcDetails field format Field Type Description project id string ID of the project containing the network vpc name string Network on which the VM is operating subnetwork name string Subnet on which the VM is operating DestinationDetails field format Field Type Description geo location object( GeographicDetails ) If the destination of the connection was external to Google Cloud, this field is populated with available location metadata. instance object( InstanceDetails ) If the destination of the connection is an instance within the same project as the source, this field is populated with VM instance details. vpc object( VpcDetails ) If the destination of the connection is within the same project as the source, this field is populated with the destination VPC network details.

