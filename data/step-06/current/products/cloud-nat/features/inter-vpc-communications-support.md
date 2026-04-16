---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:52.328Z"
product_name: "Cloud NAT"
product_slug: "cloud-nat"
feature_name: "Inter-VPC communications support"
feature_slug: "inter-vpc-communications-support"
latest_feature_date: "2024-01-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/nat/docs/overview"
  - "https://docs.cloud.google.com/nat/docs/set-up-network-address-translation"
  - "https://docs.cloud.google.com/nat/docs/troubleshooting"
  - "https://docs.cloud.google.com/nat/docs/monitoring"
keywords:
  - "inter"
  - "vpc"
  - "communications"
  - "nat"
  - "supports"
---

# Inter-VPC communications support

Product: Cloud NAT
Coverage: MEDIUM

## Step 02 Summary

Cloud NAT supports inter-VPC communications; Cloud NAT supports inter-VPC communications.

## Extended Definition

Cloud NAT supports inter-VPC communications; Cloud NAT supports inter-VPC communications.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/nat/docs/overview](https://docs.cloud.google.com/nat/docs/overview)
- [https://docs.cloud.google.com/nat/docs/set-up-network-address-translation](https://docs.cloud.google.com/nat/docs/set-up-network-address-translation)
- [https://docs.cloud.google.com/nat/docs/troubleshooting](https://docs.cloud.google.com/nat/docs/troubleshooting)
- [https://docs.cloud.google.com/nat/docs/monitoring](https://docs.cloud.google.com/nat/docs/monitoring)

## Supporting Pages

### Cloud NAT overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/nat/docs/overview](https://docs.cloud.google.com/nat/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- Resource Public NAT Private NAT Compute Engine VM instances GKE clusters Cloud Run, Cloud Run functions, and App Engine 1 Regional internet NEGs Not applicable 1 The following serverless endpoints are supported: Cloud Run instances (services and jobs) and Cloud Run functions instances through Direct VPC egress (recommended) or Serverless VPC Access App Engine standard environment instances through Serverless VPC Access Architecture Cloud NAT is a distributed, software-defined managed service.
- From a VPC network to a network outside of Google Cloud Private NAT supports the following options for traffic between VPC networks and on-premises or other cloud provider networks: Private-to-private NAT for networks connected through NCC hybrid spokes.
- Cloud NAT overview Cloud NAT provides network address translation (NAT) for outbound traffic to the internet, Virtual Private Cloud (VPC) networks, on-premises networks, and other cloud provider networks.
- Traffic Description From a VPC network to another VPC network Private NAT supports private-to-private NAT for VPC networks attached as VPC spokes to a Network Connectivity Center hub.

### "Quickstart: Set up and manage network address translation with Public NAT\

- URL: [https://docs.cloud.google.com/nat/docs/set-up-network-address-translation](https://docs.cloud.google.com/nat/docs/set-up-network-address-translation)
- Source ID: `site-docs-root`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- To create a Cloud NAT gateway for a regional internet NEG, see "Set up a Cloud NAT gateway" for the following: Regional external Application Load Balancer Regional internal Application Load Balancer Regional external proxy Network Load Balancer Regional internal proxy Network Load Balancer For a full list of Google Cloud resources that Cloud NAT supports, see Cloud NAT overview .
- Source subnets For IPv4 traffic: Primary and secondary ranges for all subnets Primary ranges for all subnets Custom For IPv6 traffic: All subnets Custom Public NAT supports the following subnet ranges in the region for the VPC network that you specify: For IPv4 traffic: primary and secondary ranges.
- Terraform You can use a Terraform module to create a Cloud Router with a NAT gateway for IPv4 traffic. module "cloud router" { source = "../.." name = "my-cloud-router" project id = var.project id network = module.vpc.network name region = "us-central1" nats = [{ name = "my-nat-gateway" source subnetwork ip ranges to nat = "LIST OF SUBNETWORKS" subnetworks = [ { name = module.vpc.subnets["us-central1/test-subnet-01-1"].id source ip ranges to nat = ["PRIMARY IP RANGE", "LIST OF SECONDARY IP RANGES"] secondary ip range names = module.vpc.subnets["us-central1/test-subnet-01-1"].secondary ip range[ ].range name } ] }] } The resulting NAT gateway uses the following default values: enable endpoint independent mapping = true icmp idle timeout sec = 30 min ports per vm = 0 nat ip allocate option = "AUTO ONLY" source subnetwork ip ranges to nat = "ALL SUBNETWORKS ALL IP RANGES" tcp established idle timeout sec = 1200 tcp transitory idle timeout sec = 30 udp idle timeout sec = 30 log config { enable = true filter = "ALL" } View a Public NAT configuration Console In the Google Cloud console, go to the Cloud NAT page.
- To view NAT status, see the Status column for your NAT gateway. gcloud You can view the NAT configuration details by running the following commands: View the Public NAT gateway configuration. gcloud compute routers nats describe NAT CONFIG \ --router= ROUTER NAME \ --region= REGION Replace the following: NAT CONFIG : the name of your NAT configuration ROUTER NAME : the name of your Cloud Router REGION : the region of the NAT to describe; if not specified, you might be prompted to select a region (interactive mode only) View the mapping of the IP:port-ranges allocated to each VM's interface. gcloud compute routers get-nat-mapping-info ROUTER NAME \ --region= REGION View the status of the Public NAT gateway. gcloud compute routers get-status ROUTER NAME \ --region= REGION View external IP addresses assigned to a Cloud NAT gateway By default, Cloud NAT gateways for Public NAT use automatic IP address allocation.

### Troubleshoot configuration \_|\_ Cloud NAT \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/nat/docs/troubleshooting](https://docs.cloud.google.com/nat/docs/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- Does Public NAT let a source VM whose network interface lacks an external IP address send traffic to a destination VM or load balancer that has an external IP address, even when the source and destination are in the same VPC network?
- Each node VM in a non-private cluster has an external IP address, so each node can use routes in your Virtual Private Cloud (VPC) network whose next hop is the default internet gateway without relying on Cloud NAT.
- Common issues VMs can reach the internet unexpectedly, without Cloud NAT If your virtual machine (VM) instances or container instances can reach the internet without Cloud NAT, but you don't want them to, check for the following issues: Determine if the VM's network interface has an external IP address.
- If the network interface of a VM has an external IP address, Google Cloud always performs 1-to-1 NAT for packets sent from the primary internal IP address of the network interface without using Cloud NAT.

### Logs and metrics \_|\_ Cloud NAT \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/nat/docs/monitoring](https://docs.cloud.google.com/nat/docs/monitoring)
- Source ID: `site-docs-root`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- Examples Example 1: NAT-ed TCP connection record from a VM instance in a Shared VPC network going to an external server in France. { insertId: "1the8juf6vab1t" jsonPayload: { allocation status: "OK" connection: { dest ip : "198.51.100.142" dest port: 80 nat ip: "203.0.113.17" nat port: 34889 protocol: "tcp" src ip: "10.0.0.1" src port: 45047 } destination: { geo location: { city: "Bordeaux" continent: "Europe" country: "France" region: "Nouvelle-Aquitaine" } } endpoint: { project id: "service-project-1" region: "europe-west1" vm name: "vm-1" zone: "europe-west1-b" } gateway identifiers: { gateway name: "my-nat-1" region: "europe-west1" router name: "my-router-1" } vpc: { project id: "host-project" subnetwork name: "subnetwork-1" vpc name: "network-1" } } labels: { nat.googleapis.com/instance name: "vm-1" nat.googleapis.com/instance zone: "europe-west1-b" nat.googleapis.com/nat ip: "203.0.113.17" nat.googleapis.com/network name: "network-1" nat.googleapis.com/router name: "my-router-1" nat.googleapis.com/subnetwork name: "subnetwork-1" } logName: "projects/host-project/logs/compute.googleapis.com%2Fnat flows" receiveTimestamp: "2018-06-28T10:46:08.123456789Z" resource: { labels: { gateway name: "my-nat-1" project id: "host-project" region: "europe-west1-d" router id: "987654321123456" } type: "nat gateway" } timestamp: "2018-06-28T10:46:00.602240572Z" } Example 2: Record for a packet dropped because there were no available ports.
- NatGateway field format Field Type Description gateway name string Name of the NAT gateway router name string Cloud Router associated with the NAT gateway region string Region of the Cloud Router InstanceDetails field format Field Type Description project id string ID of the project containing the VM vm name string Instance name of the VM region string Region of the VM zone string Zone of the VM VpcDetails field format Field Type Description project id string ID of the project containing the network vpc name string Network on which the VM is operating subnetwork name string Subnet on which the VM is operating DestinationDetails field format Field Type Description geo location object( GeographicDetails ) If the destination of the connection was external to Google Cloud, this field is populated with available location metadata. instance object( InstanceDetails ) If the destination of the connection is an instance within the same project as the source, this field is populated with VM instance details. vpc object( VpcDetails ) If the destination of the connection is within the same project as the source, this field is populated with the destination VPC network details.
- API example Getting allocated ports of a VM, with 1m aggregates, timeSeries.list parameters: name: projects/ PROJECT ID Filter: resource.type = "gce instance" AND metric.name="compute.googleapis.com/nat/allocated ports" AND metric.labels.nat gateway name="nat-1-237227-1569344091-5" interval.start time: 2019-09-24T16:58:53Z interval.end time: 2019-09-24T16:58:53Z aggregation.alignmentPeriod: 60s aggregation.crossSeriesReducer: REDUCE SUM aggregation.perSeriesAligner: ALIGN SUM "timeSeries": [ { "resource": { "labels": { "instance id": "1406292833167995938", "project id": " PROJECT ID ", "zone": "us-west1-c" }, "type": "gce instance" }, "metric": { "labels": { "nat ip": "70.32.157.11", "nat gateway name": "nat-1-237227-1569344091-5", "nat project number": " PROJECT NUMBER ", "router id": "1380055590921303155" }, "type": "compute.googleapis.com/nat/allocated ports" }, "metricKind": "GAUGE", "points": [ { "interval": { "endTime": "2019-09-24T16:58:53.699Z", "startTime": "2019-09-24T16:58:53.699Z" }, "value": { "int64Value": "64" } } ], "valueType": "INT64" } ] Pricing for Cloud NAT monitoring There is no cost for Cloud NAT monitoring.
- Sending VM was trying to reach the external IP address of another VM in the same project. { insertId: "1the8juf6vab1l" jsonPayload: { allocation status: "DROPPED" connection: { dest ip : "192.0.2.87" dest port: 80 protocol: "tcp" src ip: "10.0.128.1" src port: 45047 } destination: { instance: { project id: "service-project-1" region: "asia-east1" vm name: "vm-2" zone: "asia-east1-b" } } endpoint: { project id: "service-project-1" region: "europe-west1" vm name: "vm-1" zone: "europe-west1-b" } gateway identifiers: { cloud router: "my-router-1" gateway name: "my-nat-2" region: "europe-west1" } vpc: { project id: "host-project" subnetwork name: "subnetwork-1" vpc name: "network-1" } } logName: "projects/host-project/logs/compute.googleapis.com%2Fnat flows" receiveTimestamp: "2018-06-28T10:46:09.123456789Z" resource: { labels: { gateway name: "my-nat-2" project id: "host-project" region: "europe-west1-d" router id: "987654321123456" } type: "nat gateway" } timestamp: "2018-06-28T10:46:01.602240572Z" } Pricing for Cloud NAT logging See Logging pricing .

