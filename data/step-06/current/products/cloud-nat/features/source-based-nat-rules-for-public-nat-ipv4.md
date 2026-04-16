---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:52.325Z"
product_name: "Cloud NAT"
product_slug: "cloud-nat"
feature_name: "Source-based NAT rules for Public NAT IPv4"
feature_slug: "source-based-nat-rules-for-public-nat-ipv4"
latest_feature_date: "2025-09-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/nat/docs/set-up-network-address-translation"
  - "https://docs.cloud.google.com/nat/docs/troubleshooting"
  - "https://docs.cloud.google.com/nat/docs/overview"
  - "https://docs.cloud.google.com/nat/docs/gke-example"
keywords:
  - "source"
  - "based"
  - "nat"
  - "rules"
  - "for"
  - "public"
  - "ipv4"
  - "gateways"
---

# Source-based NAT rules for Public NAT IPv4

Product: Cloud NAT
Coverage: MEDIUM

## Step 02 Summary

Public NAT gateways support source-based NAT rules for IPv4 addresses.

## Extended Definition

Public NAT gateways support source-based NAT rules for IPv4 addresses.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/nat/docs/set-up-network-address-translation](https://docs.cloud.google.com/nat/docs/set-up-network-address-translation)
- [https://docs.cloud.google.com/nat/docs/troubleshooting](https://docs.cloud.google.com/nat/docs/troubleshooting)
- [https://docs.cloud.google.com/nat/docs/overview](https://docs.cloud.google.com/nat/docs/overview)
- [https://docs.cloud.google.com/nat/docs/gke-example](https://docs.cloud.google.com/nat/docs/gke-example)

## Supporting Pages

### "Quickstart: Set up and manage network address translation with Public NAT\

- URL: [https://docs.cloud.google.com/nat/docs/set-up-network-address-translation](https://docs.cloud.google.com/nat/docs/set-up-network-address-translation)
- Source ID: `site-docs-root`
- Final score: 252
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Terraform You can use a Terraform module to create a Cloud Router with a NAT gateway for IPv4 traffic. module "cloud router" { source = "../.." name = "my-cloud-router" project id = var.project id network = module.vpc.network name region = "us-central1" nats = [{ name = "my-nat-gateway" source subnetwork ip ranges to nat = "LIST OF SUBNETWORKS" subnetworks = [ { name = module.vpc.subnets["us-central1/test-subnet-01-1"].id source ip ranges to nat = ["PRIMARY IP RANGE", "LIST OF SECONDARY IP RANGES"] secondary ip range names = module.vpc.subnets["us-central1/test-subnet-01-1"].secondary ip range[ ].range name } ] }] } The resulting NAT gateway uses the following default values: enable endpoint independent mapping = true icmp idle timeout sec = 30 min ports per vm = 0 nat ip allocate option = "AUTO ONLY" source subnetwork ip ranges to nat = "ALL SUBNETWORKS ALL IP RANGES" tcp established idle timeout sec = 1200 tcp transitory idle timeout sec = 30 udp idle timeout sec = 30 log config { enable = true filter = "ALL" } View a Public NAT configuration Console In the Google Cloud console, go to the Cloud NAT page.
- Source subnets For IPv4 traffic: Primary and secondary ranges for all subnets Primary ranges for all subnets Custom For IPv6 traffic: All subnets Custom Public NAT supports the following subnet ranges in the region for the VPC network that you specify: For IPv4 traffic: primary and secondary ranges.
- To update the source subnet ranges for an existing Cloud NAT gateway, run one of the following commands, depending on the IP version of the subnet ranges that you want to update: Update IPv4 subnet ranges: gcloud compute routers nats update NAT CONFIG \ --router= NAT ROUTER \ --region= REGION \ --nat-custom-subnet-ip-ranges= IPV4 SUBNET RANGES Update IPv6 subnet ranges: gcloud compute routers nats update NAT CONFIG \ --router= NAT ROUTER \ --region= REGION \ --nat64-custom-v6-subnet-ip-ranges= IPV6 SUBNET RANGES Update both IPv4 and IPv6 subnet ranges: gcloud compute routers nats update NAT CONFIG \ --router= NAT ROUTER \ --region= REGION \ --nat-custom-subnet-ip-ranges= IPV4 SUBNET RANGES \ --nat64-custom-v6-subnet-ip-ranges= IPV6 SUBNET RANGES Replace the following: NAT CONFIG : the name of your NAT configuration NAT ROUTER : the name of your Cloud Router REGION : the region of the NAT gateway IPV4 SUBNET RANGES : a comma-separated list of subnet names—for example: SUBNET NAME 1:ALL,SUBNET NAME 2:ALL : includes both the primary and all secondary ranges of subnets SUBNET NAME 1 and SUBNET NAME 2 .
- To view NAT status, see the Status column for your NAT gateway. gcloud You can view the NAT configuration details by running the following commands: View the Public NAT gateway configuration. gcloud compute routers nats describe NAT CONFIG \ --router= ROUTER NAME \ --region= REGION Replace the following: NAT CONFIG : the name of your NAT configuration ROUTER NAME : the name of your Cloud Router REGION : the region of the NAT to describe; if not specified, you might be prompted to select a region (interactive mode only) View the mapping of the IP:port-ranges allocated to each VM's interface. gcloud compute routers get-nat-mapping-info ROUTER NAME \ --region= REGION View the status of the Public NAT gateway. gcloud compute routers get-status ROUTER NAME \ --region= REGION View external IP addresses assigned to a Cloud NAT gateway By default, Cloud NAT gateways for Public NAT use automatic IP address allocation.

### Troubleshoot configuration \_|\_ Cloud NAT \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/nat/docs/troubleshooting](https://docs.cloud.google.com/nat/docs/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 234
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When the source VM sends a packet to the destination, Public NAT performs source NAT (SNAT) before delivering the packet to the second instance.
- Check how many ephemeral source ports are being used: For Linux VMs: netstat -an egrep 'ESTABLISHED TIME WAIT CLOSE WAIT' wc -l For Windows VMs: netstat -tan findstr "ESTABLISHED TIME WAIT CLOSE WAIT" find /c /v "" Configure your VM instances to use a larger set of ephemeral source ports: For Linux VMs: You can view what port range is configured with this command: cat /proc/sys/net/ipv4/ip local port range You can set the ip local port range to the maximum number of ephemeral source ports (64,512) with this command: echo 1024 65535 > /proc/sys/net/ipv4/ip local port range For Windows VMs: You can view what port ranges are configured with these commands: netsh int ipv4 show dynamicport tcp netsh int ipv4 show dynamicport udp You can set the number of ephemeral source TCP and UDP ports to the maximum possible (64,512) with these commands: netsh int ipv4 set dynamicport tcp start=1024 num=64512 netsh int ipv4 set dynamicport udp start=1024 num=64512 On Google Kubernetes Engine nodes, you can automate this configuration by using a privileged DaemonSet .
- Packets dropped with reason: out of resources If you see packet loss from VMs that use Cloud NAT, this might be because there are not enough available NAT source IP address and source port tuples for the VM to use at the time of the packet loss (port exhaustion).
- Increase the value for TCP Transitory Connection Idle Timeout, so that external endpoints that receive traffic (initiated by Google Cloud resources) through a Cloud NAT gateway get more time to respond and to establish the connection.

### Cloud NAT overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/nat/docs/overview](https://docs.cloud.google.com/nat/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 220
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you use manual NAT IP address assignment to configure a Cloud NAT gateway for Public NAT, you can confidently share a set of common external source IP addresses with a destination party.
- Public NAT Public NAT lets Google Cloud resources that don't have external IPv4 addresses communicate with IPv4 destinations on the internet.
- Resource Public NAT Private NAT Compute Engine VM instances GKE clusters Cloud Run, Cloud Run functions, and App Engine 1 Regional internet NEGs Not applicable 1 The following serverless endpoints are supported: Cloud Run instances (services and jobs) and Cloud Run functions instances through Direct VPC egress (recommended) or Serverless VPC Access App Engine standard environment instances through Serverless VPC Access Architecture Cloud NAT is a distributed, software-defined managed service.
- Cloud NAT translates addresses for the following resources: Compute Engine virtual machine (VM) instances Google Kubernetes Engine (GKE) clusters Cloud Run instances Cloud Run functions instances App Engine standard environment instances Regional internet network endpoint groups (NEGs) NAT is automatically applied to the resources that match your Cloud NAT configuration after you create a Cloud NAT gateway and configure it to serve the subnets where those resources run.

### Use Public NAT with GKE \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/nat/docs/gke-example](https://docs.cloud.google.com/nat/docs/gke-example)
- Source ID: `site-docs-root`
- Final score: 220
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To create and start the cluster, click Create . gcloud gcloud container clusters create "nat-test-cluster" \ --zone "us-east4-c" \ --cluster-version "latest" \ --machine-type "e2-medium" \ --disk-type "pd-standard" \ --disk-size "100" \ --scopes "https://www.googleapis.com/auth/compute","https://www.googleapis.com/auth/devstorage.read only","https://www.googleapis.com/auth/logging.write","https://www.googleapis.com/auth/monitoring","https://www.googleapis.com/auth/servicecontrol","https://www.googleapis.com/auth/service.management.readonly","https://www.googleapis.com/auth/trace.append" \ --num-nodes "3" \ --enable-private-nodes \ --enable-private-endpoint \ --master-ipv4-cidr "172.16.0.0/28" \ --enable-ip-alias \ --network "projects/ PROJECT ID /global/networks/custom-network1" \ --subnetwork "projects/ PROJECT ID /regions/us-east4/subnetworks/subnet-us-east-192" \ --max-nodes-per-pool "110" \ --enable-master-authorized-networks \ --addons HorizontalPodAutoscaling,HttpLoadBalancing \ --enable-autoupgrade \ --enable-autorepair Terraform You can use a Terraform resource to create a private cluster. resource "google container cluster" "primary" { project = var.project id name = "nat-test-cluster" location = "us-east4-c" initial node count = 3 network = var.network # Replace with a reference or self link to your network, in quotes subnetwork = var.subnet # Replace with a reference or self link to your subnet, in quotes private cluster config { master ipv4 cidr block = "172.16.0.0/28" enable private endpoint = true enable private nodes = true } ip allocation policy { } master authorized networks config { } } Step 3: Create a firewall rule that allows SSH connections Console In the Google Cloud console, go to the Firewall policies page.
- Click Create . gcloud Create a Cloud Router: gcloud compute routers create nat-router \ --network custom-network1 \ --region us-east4 Add a configuration to the router: gcloud compute routers nats create nat-config \ --router-region us-east4 \ --router nat-router \ --nat-all-subnet-ip-ranges \ --auto-allocate-nat-external-ips Terraform You can use a Terraform resource to create a Cloud Router. resource "google compute router" "router" { project = var.project id name = "nat-router" network = var.network region = "us-east4" } You can use a Terraform module to create a NAT configuration. module "cloud-nat" { source = "terraform-google-modules/cloud-nat/google" version = " > 5.0" project id = var.project id region = "us-east4" router = google compute router.router.name name = "nat-config" source subnetwork ip ranges to nat = "ALL SUBNETWORKS ALL IP RANGES" } Step 7: Attempt to connect to the internet again It might take up to three minutes for the NAT configuration to propagate, so wait at least a minute before trying to access the internet again.
- Click Create . gcloud gcloud compute firewall-rules create allow-ssh \ --network custom-network1 \ --source-ranges 35.235.240.0/20 \ --allow tcp:22 Terraform You can use a Terraform resource to create a firewall rule. resource "google compute firewall" "rules" { project = var.project id name = "allow-ssh" network = var.network allow { protocol = "tcp" ports = ["22"] } source ranges = ["35.235.240.0/20"] } Step 4: Create IAP SSH permissions for one of your nodes In a later step, use IAP to connect to your node.
- You can set a project ID with the following command: gcloud config set project PROJECT ID You can also view a project ID that is already set: gcloud config list --format='text(core.project)' Setting up the GKE example Use this example if you want to see a simple Public NAT configuration working with GKE.

