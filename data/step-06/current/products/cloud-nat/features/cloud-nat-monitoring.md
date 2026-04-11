---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:57:06.737Z"
product_name: "Cloud NAT"
product_slug: "cloud-nat"
feature_name: "Cloud NAT monitoring"
feature_slug: "cloud-nat-monitoring"
latest_feature_date: "2020-03-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/nat/docs/monitoring"
  - "https://docs.cloud.google.com/nat/docs/overview"
  - "https://docs.cloud.google.com/nat/docs/set-up-network-address-translation"
keywords:
  - "nat"
  - "monitoring"
  - "provides"
  - "capabilities"
  - "for"
  - "observing"
  - "behavior"
  - "and"
---

# Cloud NAT monitoring

Product: Cloud NAT
Coverage: LOW

## Step 02 Summary

Cloud NAT provides monitoring capabilities for observing service behavior and usage; Cloud NAT provides monitoring capabilities for observing service behavior and usage.

## Extended Definition

Cloud NAT provides monitoring capabilities for observing service behavior and usage; Cloud NAT provides monitoring capabilities for observing service behavior and usage.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/nat/docs/monitoring](https://docs.cloud.google.com/nat/docs/monitoring)
- [https://docs.cloud.google.com/nat/docs/overview](https://docs.cloud.google.com/nat/docs/overview)
- [https://docs.cloud.google.com/nat/docs/set-up-network-address-translation](https://docs.cloud.google.com/nat/docs/set-up-network-address-translation)

## Supporting Pages

### Logs and metrics \_|\_ Cloud NAT \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/nat/docs/monitoring](https://docs.cloud.google.com/nat/docs/monitoring)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- API example Getting allocated ports of a VM, with 1m aggregates, timeSeries.list parameters: name: projects/ PROJECT ID Filter: resource.type = "gce instance" AND metric.name="compute.googleapis.com/nat/allocated ports" AND metric.labels.nat gateway name="nat-1-237227-1569344091-5" interval.start time: 2019-09-24T16:58:53Z interval.end time: 2019-09-24T16:58:53Z aggregation.alignmentPeriod: 60s aggregation.crossSeriesReducer: REDUCE SUM aggregation.perSeriesAligner: ALIGN SUM "timeSeries": [ { "resource": { "labels": { "instance id": "1406292833167995938", "project id": " PROJECT ID ", "zone": "us-west1-c" }, "type": "gce instance" }, "metric": { "labels": { "nat ip": "70.32.157.11", "nat gateway name": "nat-1-237227-1569344091-5", "nat project number": " PROJECT NUMBER ", "router id": "1380055590921303155" }, "type": "compute.googleapis.com/nat/allocated ports" }, "metricKind": "GAUGE", "points": [ { "interval": { "endTime": "2019-09-24T16:58:53.699Z", "startTime": "2019-09-24T16:58:53.699Z" }, "value": { "int64Value": "64" } } ], "valueType": "INT64" } ] Pricing for Cloud NAT monitoring There is no cost for Cloud NAT monitoring.
- Following are the required Identity and Access Management (IAM) roles: For Shared VPC users with VMs and NAT gateways defined in different projects, access to the VM level metrics requires the roles/monitoring.viewer IAM role for the project of each VM.
- Metric reporting frequency and retention Metrics for Cloud NAT are batched and exported to Monitoring every one minute.
- What is logged Cloud NAT log entries contain information useful for monitoring and debugging your NAT traffic.

### Cloud NAT overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/nat/docs/overview](https://docs.cloud.google.com/nat/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- Cloud NAT overview Cloud NAT provides network address translation (NAT) for outbound traffic to the internet, Virtual Private Cloud (VPC) networks, on-premises networks, and other cloud provider networks.
- Cloud NAT configures the Andromeda software that powers your Virtual Private Cloud (VPC) network so that it provides source network address translation (source NAT or SNAT) for resources.
- Cloud NAT translates addresses for the following resources: Compute Engine virtual machine (VM) instances Google Kubernetes Engine (GKE) clusters Cloud Run instances Cloud Run functions instances App Engine standard environment instances Regional internet network endpoint groups (NEGs) NAT is automatically applied to the resources that match your Cloud NAT configuration after you create a Cloud NAT gateway and configure it to serve the subnets where those resources run.
- From a VPC network to a network outside of Google Cloud Private NAT supports the following options for traffic between VPC networks and on-premises or other cloud provider networks: Private-to-private NAT for networks connected through NCC hybrid spokes.

### "Quickstart: Set up and manage network address translation with Public NAT\

- URL: [https://docs.cloud.google.com/nat/docs/set-up-network-address-translation](https://docs.cloud.google.com/nat/docs/set-up-network-address-translation)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- Example setups Use Public NAT with Compute Engine Use Public NAT with GKE Configure IPv6-only subnets and instances with DNS64 and NAT64 What's next Configure logging and monitoring for Cloud NAT.
- To create a Cloud NAT gateway that restricts which subnets and subnet ranges can use NAT, run one of the following commands: Restrict which IPv4 subnet ranges can use NAT: gcloud compute routers nats create NAT CONFIG \ --router= NAT ROUTER \ --region= REGION \ --nat-custom-subnet-ip-ranges= IPV4 SUBNET RANGES \ --auto-allocate-nat-external-ips Restrict which IPv6 subnet ranges can use NAT: gcloud compute routers nats create NAT CONFIG \ --router= NAT ROUTER \ --region= REGION \ --nat64-custom-v6-subnet-ip-ranges= IPV6 SUBNET RANGES \ --auto-allocate-nat-external-ips Restrict both IPv4 and IPv6 subnet ranges: gcloud compute routers nats create NAT CONFIG \ --router= NAT ROUTER \ --region= REGION \ --nat-custom-subnet-ip-ranges= IPV4 SUBNET RANGES \ --nat64-custom-v6-subnet-ip-ranges= IPV6 SUBNET RANGES \ --auto-allocate-nat-external-ips Replace the following: NAT CONFIG : a name for your NAT configuration NAT ROUTER : the name of the Cloud Router that you created in the previous step REGION : the region where you want to use the Cloud NAT gateway IPV4 SUBNET RANGES : a comma-separated list of subnet names—for example: SUBNET NAME 1:ALL,SUBNET NAME 2:ALL : includes both the primary and all secondary ranges of subnets SUBNET NAME 1 and SUBNET NAME 2 .
- To update the source subnet ranges for an existing Cloud NAT gateway, run one of the following commands, depending on the IP version of the subnet ranges that you want to update: Update IPv4 subnet ranges: gcloud compute routers nats update NAT CONFIG \ --router= NAT ROUTER \ --region= REGION \ --nat-custom-subnet-ip-ranges= IPV4 SUBNET RANGES Update IPv6 subnet ranges: gcloud compute routers nats update NAT CONFIG \ --router= NAT ROUTER \ --region= REGION \ --nat64-custom-v6-subnet-ip-ranges= IPV6 SUBNET RANGES Update both IPv4 and IPv6 subnet ranges: gcloud compute routers nats update NAT CONFIG \ --router= NAT ROUTER \ --region= REGION \ --nat-custom-subnet-ip-ranges= IPV4 SUBNET RANGES \ --nat64-custom-v6-subnet-ip-ranges= IPV6 SUBNET RANGES Replace the following: NAT CONFIG : the name of your NAT configuration NAT ROUTER : the name of your Cloud Router REGION : the region of the NAT gateway IPV4 SUBNET RANGES : a comma-separated list of subnet names—for example: SUBNET NAME 1:ALL,SUBNET NAME 2:ALL : includes both the primary and all secondary ranges of subnets SUBNET NAME 1 and SUBNET NAME 2 .
- To view NAT status, see the Status column for your NAT gateway. gcloud You can view the NAT configuration details by running the following commands: View the Public NAT gateway configuration. gcloud compute routers nats describe NAT CONFIG \ --router= ROUTER NAME \ --region= REGION Replace the following: NAT CONFIG : the name of your NAT configuration ROUTER NAME : the name of your Cloud Router REGION : the region of the NAT to describe; if not specified, you might be prompted to select a region (interactive mode only) View the mapping of the IP:port-ranges allocated to each VM's interface. gcloud compute routers get-nat-mapping-info ROUTER NAME \ --region= REGION View the status of the Public NAT gateway. gcloud compute routers get-status ROUTER NAME \ --region= REGION View external IP addresses assigned to a Cloud NAT gateway By default, Cloud NAT gateways for Public NAT use automatic IP address allocation.

