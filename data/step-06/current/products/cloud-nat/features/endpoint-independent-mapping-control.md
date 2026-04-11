---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:57:06.737Z"
product_name: "Cloud NAT"
product_slug: "cloud-nat"
feature_name: "Endpoint-Independent Mapping control"
feature_slug: "endpoint-independent-mapping-control"
latest_feature_date: "2020-12-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/nat/docs/troubleshooting"
  - "https://docs.cloud.google.com/nat/docs/set-up-network-address-translation"
  - "https://docs.cloud.google.com/nat/docs/monitoring"
keywords:
  - "endpoint"
  - "independent"
  - "mapping"
  - "control"
  - "nat"
  - "gateways"
  - "can"
  - "enable"
---

# Endpoint-Independent Mapping control

Product: Cloud NAT
Coverage: LOW

## Step 02 Summary

Cloud NAT gateways can enable or disable Endpoint-Independent Mapping; Cloud NAT gateways can enable or disable Endpoint-Independent Mapping.

## Extended Definition

Cloud NAT gateways can enable or disable Endpoint-Independent Mapping; Cloud NAT gateways can enable or disable Endpoint-Independent Mapping.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/nat/docs/troubleshooting](https://docs.cloud.google.com/nat/docs/troubleshooting)
- [https://docs.cloud.google.com/nat/docs/set-up-network-address-translation](https://docs.cloud.google.com/nat/docs/set-up-network-address-translation)
- [https://docs.cloud.google.com/nat/docs/monitoring](https://docs.cloud.google.com/nat/docs/monitoring)

## Supporting Pages

### Troubleshoot configuration \_|\_ Cloud NAT \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/nat/docs/troubleshooting](https://docs.cloud.google.com/nat/docs/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you see packet loss from VMs that use Public NAT, and you have Endpoint-Independent Mapping turned on, the packet loss might be caused by an endpoint independent conflict .
- You can reduce the chances of endpoint independent conflicts by using the following techniques: Turn off Endpoint-Independent Mapping .
- Important: If you need Endpoint-Independent Mapping, the recommendations in this section don't apply.
- Disabling or enabling Endpoint-Independent Mapping does not interrupt established connections.

### "Quickstart: Set up and manage network address translation with Public NAT\

- URL: [https://docs.cloud.google.com/nat/docs/set-up-network-address-translation](https://docs.cloud.google.com/nat/docs/set-up-network-address-translation)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Terraform You can use a Terraform module to create a Cloud Router with a NAT gateway for IPv4 traffic. module "cloud router" { source = "../.." name = "my-cloud-router" project id = var.project id network = module.vpc.network name region = "us-central1" nats = [{ name = "my-nat-gateway" source subnetwork ip ranges to nat = "LIST OF SUBNETWORKS" subnetworks = [ { name = module.vpc.subnets["us-central1/test-subnet-01-1"].id source ip ranges to nat = ["PRIMARY IP RANGE", "LIST OF SECONDARY IP RANGES"] secondary ip range names = module.vpc.subnets["us-central1/test-subnet-01-1"].secondary ip range[ ].range name } ] }] } The resulting NAT gateway uses the following default values: enable endpoint independent mapping = true icmp idle timeout sec = 30 min ports per vm = 0 nat ip allocate option = "AUTO ONLY" source subnetwork ip ranges to nat = "ALL SUBNETWORKS ALL IP RANGES" tcp established idle timeout sec = 1200 tcp transitory idle timeout sec = 30 udp idle timeout sec = 30 log config { enable = true filter = "ALL" } View a Public NAT configuration Console In the Google Cloud console, go to the Cloud NAT page.
- You can't enable Endpoint-Independent Mapping if your Cloud NAT gateway uses NAT rules or dynamic port allocation.
- You can't enable Endpoint-Independent Mapping if your Cloud NAT gateway uses NAT rules or dynamic port allocation.
- If Endpoint-Independent Mapping is enabled, you can't configure dynamic port allocation or NAT rules .

### Logs and metrics \_|\_ Cloud NAT \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/nat/docs/monitoring](https://docs.cloud.google.com/nat/docs/monitoring)
- Source ID: `site-docs-root`
- Final score: 132
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In each command, replace the following: NAT GATEWAY : the name of the NAT gateway ROUTER NAME : the name of the Cloud Router that hosts the NAT gateway REGION : the region of the Cloud Router To log network address translation events and errors: gcloud compute routers nats update NAT GATEWAY \ --router= ROUTER NAME \ --region= REGION \ --enable-logging To log only network address translation events: gcloud compute routers nats update NAT GATEWAY \ --router= ROUTER NAME \ --region= REGION \ --enable-logging \ --log-filter=TRANSLATIONS ONLY To log only errors: gcloud compute routers nats update NAT GATEWAY \ --router= ROUTER NAME \ --region= REGION \ --enable-logging \ --log-filter=ERRORS ONLY Clear log filters If you have a filter set, you can clear it.
- Alternatively, enter the following expression into the query editor: resource.type="nat gateway" logName="projects/{#project id}/logs/compute.googleapis.com%2Fnat flows" gcloud gcloud logging read 'resource.type=nat gateway' \ --limit=10 \ --format=json Where: resource.type=nat gateway : limits the output to your NAT gateways --limit=10 : limits the output to 10 entries; you can input a different value to see more or fewer entries, or omit it entirely to see a continuous scroll of logs --format=json : displays the output in JSON format For more options, see Reading log entries .
- Can be TCP, UDP or ICMP. nat/port usage GA Port usage GAUGE , INT64 , {port} gce instance Maximum number of connections from a VM to a single destination endpoint (IP:port).
- Can be TCP, UDP or ICMP. nat/port usage GA Port usage GAUGE , INT64 , {port} nat gateway Maximum number of connections from a VM to a single destination endpoint (IP:port).

