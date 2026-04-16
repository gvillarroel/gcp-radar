---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:52.329Z"
product_name: "Cloud NAT"
product_slug: "cloud-nat"
feature_name: "Cloud NAT rules"
feature_slug: "cloud-nat-rules"
latest_feature_date: "2021-11-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/nat/docs/set-up-network-address-translation"
  - "https://docs.cloud.google.com/nat/docs/overview"
  - "https://docs.cloud.google.com/nat/docs/apis"
  - "https://docs.cloud.google.com/nat/docs/monitoring"
keywords:
  - "nat"
  - "rules"
  - "define"
  - "how"
  - "traffic"
  - "is"
  - "translated"
  - "and"
---

# Cloud NAT rules

Product: Cloud NAT
Coverage: MEDIUM

## Step 02 Summary

Cloud NAT rules define how Cloud NAT traffic is translated and used for internet connectivity; Cloud NAT rules define how Cloud NAT traffic is translated and support source NAT based on destination address.

## Extended Definition

Cloud NAT rules define how Cloud NAT traffic is translated and used for internet connectivity; Cloud NAT rules define how Cloud NAT traffic is translated and support source NAT based on destination address.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/nat/docs/set-up-network-address-translation](https://docs.cloud.google.com/nat/docs/set-up-network-address-translation)
- [https://docs.cloud.google.com/nat/docs/overview](https://docs.cloud.google.com/nat/docs/overview)
- [https://docs.cloud.google.com/nat/docs/apis](https://docs.cloud.google.com/nat/docs/apis)
- [https://docs.cloud.google.com/nat/docs/monitoring](https://docs.cloud.google.com/nat/docs/monitoring)

## Supporting Pages

### "Quickstart: Set up and manage network address translation with Public NAT\

- URL: [https://docs.cloud.google.com/nat/docs/set-up-network-address-translation](https://docs.cloud.google.com/nat/docs/set-up-network-address-translation)
- Source ID: `site-docs-root`
- Final score: 241
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- However, if the selected network tier isn't the same as the tier of the draining IP address, you can't disable draining. gcloud Use the gcloud compute routers nats update command .
- Set up and manage network address translation with Public NAT This page describes how to set up and manage network address translation (NAT) by using Public NAT.
- To create a Cloud NAT gateway that restricts which subnets and subnet ranges can use NAT, run one of the following commands: Restrict which IPv4 subnet ranges can use NAT: gcloud compute routers nats create NAT CONFIG \ --router= NAT ROUTER \ --region= REGION \ --nat-custom-subnet-ip-ranges= IPV4 SUBNET RANGES \ --auto-allocate-nat-external-ips Restrict which IPv6 subnet ranges can use NAT: gcloud compute routers nats create NAT CONFIG \ --router= NAT ROUTER \ --region= REGION \ --nat64-custom-v6-subnet-ip-ranges= IPV6 SUBNET RANGES \ --auto-allocate-nat-external-ips Restrict both IPv4 and IPv6 subnet ranges: gcloud compute routers nats create NAT CONFIG \ --router= NAT ROUTER \ --region= REGION \ --nat-custom-subnet-ip-ranges= IPV4 SUBNET RANGES \ --nat64-custom-v6-subnet-ip-ranges= IPV6 SUBNET RANGES \ --auto-allocate-nat-external-ips Replace the following: NAT CONFIG : a name for your NAT configuration NAT ROUTER : the name of the Cloud Router that you created in the previous step REGION : the region where you want to use the Cloud NAT gateway IPV4 SUBNET RANGES : a comma-separated list of subnet names—for example: SUBNET NAME 1:ALL,SUBNET NAME 2:ALL : includes both the primary and all secondary ranges of subnets SUBNET NAME 1 and SUBNET NAME 2 .
- Terraform You can use a Terraform module to create a Cloud Router with a NAT gateway for IPv4 traffic. module "cloud router" { source = "../.." name = "my-cloud-router" project id = var.project id network = module.vpc.network name region = "us-central1" nats = [{ name = "my-nat-gateway" source subnetwork ip ranges to nat = "LIST OF SUBNETWORKS" subnetworks = [ { name = module.vpc.subnets["us-central1/test-subnet-01-1"].id source ip ranges to nat = ["PRIMARY IP RANGE", "LIST OF SECONDARY IP RANGES"] secondary ip range names = module.vpc.subnets["us-central1/test-subnet-01-1"].secondary ip range[ ].range name } ] }] } The resulting NAT gateway uses the following default values: enable endpoint independent mapping = true icmp idle timeout sec = 30 min ports per vm = 0 nat ip allocate option = "AUTO ONLY" source subnetwork ip ranges to nat = "ALL SUBNETWORKS ALL IP RANGES" tcp established idle timeout sec = 1200 tcp transitory idle timeout sec = 30 udp idle timeout sec = 30 log config { enable = true filter = "ALL" } View a Public NAT configuration Console In the Google Cloud console, go to the Cloud NAT page.

### Cloud NAT overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/nat/docs/overview](https://docs.cloud.google.com/nat/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 223
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Resource Public NAT Private NAT Compute Engine VM instances GKE clusters Cloud Run, Cloud Run functions, and App Engine 1 Regional internet NEGs Not applicable 1 The following serverless endpoints are supported: Cloud Run instances (services and jobs) and Cloud Run functions instances through Direct VPC egress (recommended) or Serverless VPC Access App Engine standard environment instances through Serverless VPC Access Architecture Cloud NAT is a distributed, software-defined managed service.
- From a VPC network to a network outside of Google Cloud Private NAT supports the following options for traffic between VPC networks and on-premises or other cloud provider networks: Private-to-private NAT for networks connected through NCC hybrid spokes.
- Cloud NAT overview Cloud NAT provides network address translation (NAT) for outbound traffic to the internet, Virtual Private Cloud (VPC) networks, on-premises networks, and other cloud provider networks.
- In this scenario, you create a Cloud NAT gateway for Private NAT that translates traffic between the subnets in your source VPC network and the nonoverlapping subnets of the other network.

### APIs and reference \_|\_ Cloud NAT \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/nat/docs/apis](https://docs.cloud.google.com/nat/docs/apis)
- Source ID: `site-docs-reference`
- Final score: 209
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table lists the commonly used Cloud NAT commands: Command Description gcloud compute routers nats create Adds a NAT configuration to a router. gcloud compute routers nats update Updates a NAT configuration on a router. gcloud compute routers nats delete Removes a NAT configuration from a router. gcloud compute routers nats list Lists NAT configurations on a router. gcloud compute routers nats describe Shows a NAT configuration on a router. gcloud compute routers get-status Gets runtime information on the specified Cloud Router, including the status of the NAT. gcloud compute routers get-nat-mapping-info Shows NAT IP:port-ranges. gcloud compute routers get-nat-ip-info Shows NAT IP address usage. gcloud compute routers nats rules create Adds a NAT rule to an existing NAT gateway. gcloud compute routers nats rules update Updates a single NAT rule. gcloud compute routers nats rules delete Deletes a NAT rule from a NAT gateway. gcloud compute routers nats rules describe Describes a NAT rule. gcloud compute routers nats rules list Lists all NAT rules in a NAT gateway.
- Cloud NAT is configured using new Cloud Router commands and parameters. gcloud CLI commands Existing Cloud Router commands can be found in the Google Cloud CLI interface documentation .
- APIs and reference This page describes individual resources that can be used with Cloud NAT.
- The Cloud NAT APIs and gcloud commands are part of Compute Engine.

### Logs and metrics \_|\_ Cloud NAT \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/nat/docs/monitoring](https://docs.cloud.google.com/nat/docs/monitoring)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- What is logged Cloud NAT log entries contain information useful for monitoring and debugging your NAT traffic.
- API example Getting allocated ports of a VM, with 1m aggregates, timeSeries.list parameters: name: projects/ PROJECT ID Filter: resource.type = "gce instance" AND metric.name="compute.googleapis.com/nat/allocated ports" AND metric.labels.nat gateway name="nat-1-237227-1569344091-5" interval.start time: 2019-09-24T16:58:53Z interval.end time: 2019-09-24T16:58:53Z aggregation.alignmentPeriod: 60s aggregation.crossSeriesReducer: REDUCE SUM aggregation.perSeriesAligner: ALIGN SUM "timeSeries": [ { "resource": { "labels": { "instance id": "1406292833167995938", "project id": " PROJECT ID ", "zone": "us-west1-c" }, "type": "gce instance" }, "metric": { "labels": { "nat ip": "70.32.157.11", "nat gateway name": "nat-1-237227-1569344091-5", "nat project number": " PROJECT NUMBER ", "router id": "1380055590921303155" }, "type": "compute.googleapis.com/nat/allocated ports" }, "metricKind": "GAUGE", "points": [ { "interval": { "endTime": "2019-09-24T16:58:53.699Z", "startTime": "2019-09-24T16:58:53.699Z" }, "value": { "int64Value": "64" } } ], "valueType": "INT64" } ] Pricing for Cloud NAT monitoring There is no cost for Cloud NAT monitoring.
- The --log-filter=ALL flag in the following command sets the log filter to accept all logs. gcloud compute routers nats update NAT GATEWAY \ --router= ROUTER NAME \ --region= REGION \ --log-filter=ALL Replace the following: NAT GATEWAY : the name of the NAT gateway ROUTER NAME : the name of the Cloud Router that hosts the NAT gateway REGION : the region of the Cloud Router Disable logging To disable logging, do the following: Console In the Google Cloud console, go to the Cloud NAT page.
- View predefined dashboards Cloud NAT provides a set of predefined dashboards that display activity across your gateway: Open connections Egress data processed by NAT (rate) Ingress data processed by NAT (rate) Port usage NAT allocation errors Dropped sent packets rate Dropped received packets rate To view predefined dashboards from the details page of a particular gateway, follow these steps: Console In the Google Cloud console, go to the Cloud NAT page.

