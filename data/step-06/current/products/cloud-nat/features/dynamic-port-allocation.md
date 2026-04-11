---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:57:06.736Z"
product_name: "Cloud NAT"
product_slug: "cloud-nat"
feature_name: "Dynamic port allocation"
feature_slug: "dynamic-port-allocation"
latest_feature_date: "2022-02-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/nat/docs/set-up-network-address-translation"
  - "https://docs.cloud.google.com/nat/docs/troubleshooting"
  - "https://docs.cloud.google.com/nat/docs/monitoring"
keywords:
  - "dynamic"
  - "port"
  - "allocation"
  - "nat"
  - "can"
  - "dynamically"
  - "allocate"
  - "ports"
---

# Dynamic port allocation

Product: Cloud NAT
Coverage: LOW

## Step 02 Summary

Cloud NAT can dynamically allocate ports for translations; Cloud NAT can dynamically allocate ports for translations.

## Extended Definition

Cloud NAT can dynamically allocate ports for translations; Cloud NAT can dynamically allocate ports for translations.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/nat/docs/set-up-network-address-translation](https://docs.cloud.google.com/nat/docs/set-up-network-address-translation)
- [https://docs.cloud.google.com/nat/docs/troubleshooting](https://docs.cloud.google.com/nat/docs/troubleshooting)
- [https://docs.cloud.google.com/nat/docs/monitoring](https://docs.cloud.google.com/nat/docs/monitoring)

## Supporting Pages

### "Quickstart: Set up and manage network address translation with Public NAT\

- URL: [https://docs.cloud.google.com/nat/docs/set-up-network-address-translation](https://docs.cloud.google.com/nat/docs/set-up-network-address-translation)
- Source ID: `site-docs-root`
- Final score: 188
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To create a Cloud NAT gateway with dynamic port allocation, run one the following commands: For IPv4 subnet ranges: gcloud compute routers nats create NAT CONFIG \ --router= NAT ROUTER \ --region= REGION \ --nat-all-subnet-ip-ranges \ --auto-allocate-nat-external-ips \ --enable-dynamic-port-allocation \ [--min-ports-per-vm= MIN PORTS ] \ [--max-ports-per-vm= MAX PORTS ] For IPv6 subnet ranges: gcloud compute routers nats create NAT CONFIG \ --router= NAT ROUTER \ --region= REGION \ --nat64-all-v6-subnet-ip-ranges \ --auto-allocate-nat-external-ips \ --enable-dynamic-port-allocation \ [--min-ports-per-vm= MIN PORTS ] \ [--max-ports-per-vm= MAX PORTS ] If you are creating the gateway for IPv4 and IPv6 subnet ranges, specify both the --nat-all-subnet-ip-ranges and --nat64-all-v6-subnet-ip-ranges flags in this command.
- Advanced configurations Dynamic port allocation Endpoint-Independent Mapping Logging NAT timeouts By default, Public NAT uses static port allocation, which means that each VM is allocated the same number of ports.
- Using dynamic port allocation lets the Cloud NAT gateway allocate different numbers of ports to each VM based on usage.
- Terraform You can use a Terraform module to create a Cloud Router with a NAT gateway for IPv4 traffic. module "cloud router" { source = "../.." name = "my-cloud-router" project id = var.project id network = module.vpc.network name region = "us-central1" nats = [{ name = "my-nat-gateway" source subnetwork ip ranges to nat = "LIST OF SUBNETWORKS" subnetworks = [ { name = module.vpc.subnets["us-central1/test-subnet-01-1"].id source ip ranges to nat = ["PRIMARY IP RANGE", "LIST OF SECONDARY IP RANGES"] secondary ip range names = module.vpc.subnets["us-central1/test-subnet-01-1"].secondary ip range[ ].range name } ] }] } The resulting NAT gateway uses the following default values: enable endpoint independent mapping = true icmp idle timeout sec = 30 min ports per vm = 0 nat ip allocate option = "AUTO ONLY" source subnetwork ip ranges to nat = "ALL SUBNETWORKS ALL IP RANGES" tcp established idle timeout sec = 1200 tcp transitory idle timeout sec = 30 udp idle timeout sec = 30 log config { enable = true filter = "ALL" } View a Public NAT configuration Console In the Google Cloud console, go to the Cloud NAT page.

### Troubleshoot configuration \_|\_ Cloud NAT \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/nat/docs/troubleshooting](https://docs.cloud.google.com/nat/docs/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 188
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Packets dropped when dynamic port allocation is configured Dynamic port allocation detects when a VM is close to being out of ports, and doubles the number of ports that are allocated to the VM.
- To reduce the number of dropped packets, consider the following: If you can ramp up connections more slowly, Cloud NAT has more time to allocate more ports.
- If you encounter connection timeouts while ports are being allocated, see Reduce packet drops with dynamic port allocation .
- Check how many ephemeral source ports are being used: For Linux VMs: netstat -an egrep 'ESTABLISHED TIME WAIT CLOSE WAIT' wc -l For Windows VMs: netstat -tan findstr "ESTABLISHED TIME WAIT CLOSE WAIT" find /c /v "" Configure your VM instances to use a larger set of ephemeral source ports: For Linux VMs: You can view what port range is configured with this command: cat /proc/sys/net/ipv4/ip local port range You can set the ip local port range to the maximum number of ephemeral source ports (64,512) with this command: echo 1024 65535 > /proc/sys/net/ipv4/ip local port range For Windows VMs: You can view what port ranges are configured with these commands: netsh int ipv4 show dynamicport tcp netsh int ipv4 show dynamicport udp You can set the number of ephemeral source TCP and UDP ports to the maximum possible (64,512) with these commands: netsh int ipv4 set dynamicport tcp start=1024 num=64512 netsh int ipv4 set dynamicport udp start=1024 num=64512 On Google Kubernetes Engine nodes, you can automate this configuration by using a privileged DaemonSet .

### Logs and metrics \_|\_ Cloud NAT \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/nat/docs/monitoring](https://docs.cloud.google.com/nat/docs/monitoring)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Examples Example 1: NAT-ed TCP connection record from a VM instance in a Shared VPC network going to an external server in France. { insertId: "1the8juf6vab1t" jsonPayload: { allocation status: "OK" connection: { dest ip : "198.51.100.142" dest port: 80 nat ip: "203.0.113.17" nat port: 34889 protocol: "tcp" src ip: "10.0.0.1" src port: 45047 } destination: { geo location: { city: "Bordeaux" continent: "Europe" country: "France" region: "Nouvelle-Aquitaine" } } endpoint: { project id: "service-project-1" region: "europe-west1" vm name: "vm-1" zone: "europe-west1-b" } gateway identifiers: { gateway name: "my-nat-1" region: "europe-west1" router name: "my-router-1" } vpc: { project id: "host-project" subnetwork name: "subnetwork-1" vpc name: "network-1" } } labels: { nat.googleapis.com/instance name: "vm-1" nat.googleapis.com/instance zone: "europe-west1-b" nat.googleapis.com/nat ip: "203.0.113.17" nat.googleapis.com/network name: "network-1" nat.googleapis.com/router name: "my-router-1" nat.googleapis.com/subnetwork name: "subnetwork-1" } logName: "projects/host-project/logs/compute.googleapis.com%2Fnat flows" receiveTimestamp: "2018-06-28T10:46:08.123456789Z" resource: { labels: { gateway name: "my-nat-1" project id: "host-project" region: "europe-west1-d" router id: "987654321123456" } type: "nat gateway" } timestamp: "2018-06-28T10:46:00.602240572Z" } Example 2: Record for a packet dropped because there were no available ports.
- API example Getting allocated ports of a VM, with 1m aggregates, timeSeries.list parameters: name: projects/ PROJECT ID Filter: resource.type = "gce instance" AND metric.name="compute.googleapis.com/nat/allocated ports" AND metric.labels.nat gateway name="nat-1-237227-1569344091-5" interval.start time: 2019-09-24T16:58:53Z interval.end time: 2019-09-24T16:58:53Z aggregation.alignmentPeriod: 60s aggregation.crossSeriesReducer: REDUCE SUM aggregation.perSeriesAligner: ALIGN SUM "timeSeries": [ { "resource": { "labels": { "instance id": "1406292833167995938", "project id": " PROJECT ID ", "zone": "us-west1-c" }, "type": "gce instance" }, "metric": { "labels": { "nat ip": "70.32.157.11", "nat gateway name": "nat-1-237227-1569344091-5", "nat project number": " PROJECT NUMBER ", "router id": "1380055590921303155" }, "type": "compute.googleapis.com/nat/allocated ports" }, "metricKind": "GAUGE", "points": [ { "interval": { "endTime": "2019-09-24T16:58:53.699Z", "startTime": "2019-09-24T16:58:53.699Z" }, "value": { "int64Value": "64" } } ], "valueType": "INT64" } ] Pricing for Cloud NAT monitoring There is no cost for Cloud NAT monitoring.
- Log fields Field Value Meaning connection object( NatIpConnection ) 7-tuple describing the source VM IP address and port, NAT source IP address and port, destination IP address and port, and IP address protocol of this connection. allocation status enum Indicates whether this connection was successfully allocated or dropped.
- Metric type Launch stage Display name Kind, Type, Unit Monitored resources Description Labels nat/allocated ports GA Allocated ports GAUGE , INT64 , {port} nat gateway Number of ports allocated to all VMs by the NAT gateway.

