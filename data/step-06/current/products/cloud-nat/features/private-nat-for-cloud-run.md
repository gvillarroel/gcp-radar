---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:57:06.733Z"
product_name: "Cloud NAT"
product_slug: "cloud-nat"
feature_name: "Private NAT for Cloud Run"
feature_slug: "private-nat-for-cloud-run"
latest_feature_date: "2025-10-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/nat/docs/set-up-network-address-translation"
  - "https://docs.cloud.google.com/nat/docs/overview"
  - "https://docs.cloud.google.com/nat/docs/gke-example"
keywords:
  - "private"
  - "nat"
  - "for"
  - "run"
  - "lets"
  - "use"
  - "supported"
  - "network"
---

# Private NAT for Cloud Run

Product: Cloud NAT
Coverage: LOW

## Step 02 Summary

Private NAT lets Cloud Run use supported private network address translation resources; Private NAT lets Cloud Run use supported private network address translation resources.

## Extended Definition

Private NAT lets Cloud Run use supported private network address translation resources; Private NAT lets Cloud Run use supported private network address translation resources.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/nat/docs/set-up-network-address-translation](https://docs.cloud.google.com/nat/docs/set-up-network-address-translation)
- [https://docs.cloud.google.com/nat/docs/overview](https://docs.cloud.google.com/nat/docs/overview)
- [https://docs.cloud.google.com/nat/docs/gke-example](https://docs.cloud.google.com/nat/docs/gke-example)

## Supporting Pages

### "Quickstart: Set up and manage network address translation with Public NAT\

- URL: [https://docs.cloud.google.com/nat/docs/set-up-network-address-translation](https://docs.cloud.google.com/nat/docs/set-up-network-address-translation)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To create a Cloud NAT gateway that restricts which subnets and subnet ranges can use NAT, run one of the following commands: Restrict which IPv4 subnet ranges can use NAT: gcloud compute routers nats create NAT CONFIG \ --router= NAT ROUTER \ --region= REGION \ --nat-custom-subnet-ip-ranges= IPV4 SUBNET RANGES \ --auto-allocate-nat-external-ips Restrict which IPv6 subnet ranges can use NAT: gcloud compute routers nats create NAT CONFIG \ --router= NAT ROUTER \ --region= REGION \ --nat64-custom-v6-subnet-ip-ranges= IPV6 SUBNET RANGES \ --auto-allocate-nat-external-ips Restrict both IPv4 and IPv6 subnet ranges: gcloud compute routers nats create NAT CONFIG \ --router= NAT ROUTER \ --region= REGION \ --nat-custom-subnet-ip-ranges= IPV4 SUBNET RANGES \ --nat64-custom-v6-subnet-ip-ranges= IPV6 SUBNET RANGES \ --auto-allocate-nat-external-ips Replace the following: NAT CONFIG : a name for your NAT configuration NAT ROUTER : the name of the Cloud Router that you created in the previous step REGION : the region where you want to use the Cloud NAT gateway IPV4 SUBNET RANGES : a comma-separated list of subnet names—for example: SUBNET NAME 1:ALL,SUBNET NAME 2:ALL : includes both the primary and all secondary ranges of subnets SUBNET NAME 1 and SUBNET NAME 2 .
- Terraform You can use a Terraform module to create a Cloud Router with a NAT gateway for IPv4 traffic. module "cloud router" { source = "../.." name = "my-cloud-router" project id = var.project id network = module.vpc.network name region = "us-central1" nats = [{ name = "my-nat-gateway" source subnetwork ip ranges to nat = "LIST OF SUBNETWORKS" subnetworks = [ { name = module.vpc.subnets["us-central1/test-subnet-01-1"].id source ip ranges to nat = ["PRIMARY IP RANGE", "LIST OF SECONDARY IP RANGES"] secondary ip range names = module.vpc.subnets["us-central1/test-subnet-01-1"].secondary ip range[ ].range name } ] }] } The resulting NAT gateway uses the following default values: enable endpoint independent mapping = true icmp idle timeout sec = 30 min ports per vm = 0 nat ip allocate option = "AUTO ONLY" source subnetwork ip ranges to nat = "ALL SUBNETWORKS ALL IP RANGES" tcp established idle timeout sec = 1200 tcp transitory idle timeout sec = 30 udp idle timeout sec = 30 log config { enable = true filter = "ALL" } View a Public NAT configuration Console In the Google Cloud console, go to the Cloud NAT page.
- To view NAT status, see the Status column for your NAT gateway. gcloud You can view the NAT configuration details by running the following commands: View the Public NAT gateway configuration. gcloud compute routers nats describe NAT CONFIG \ --router= ROUTER NAME \ --region= REGION Replace the following: NAT CONFIG : the name of your NAT configuration ROUTER NAME : the name of your Cloud Router REGION : the region of the NAT to describe; if not specified, you might be prompted to select a region (interactive mode only) View the mapping of the IP:port-ranges allocated to each VM's interface. gcloud compute routers get-nat-mapping-info ROUTER NAME \ --region= REGION View the status of the Public NAT gateway. gcloud compute routers get-status ROUTER NAME \ --region= REGION View external IP addresses assigned to a Cloud NAT gateway By default, Cloud NAT gateways for Public NAT use automatic IP address allocation.
- To specify the network tier from which the Cloud NAT gateway allocates external IP addresses, run one of the following commands: For IPv4 subnet ranges: gcloud compute routers nats create NAT CONFIG \ --router= NAT ROUTER \ --region= REGION \ --nat-all-subnet-ip-ranges \ --auto-allocate-nat-external-ips \ --auto-network-tier= AUTO NETWORK TIER For IPv6 subnet ranges: gcloud compute routers nats create NAT CONFIG \ --router= NAT ROUTER \ --region= REGION \ --nat64-all-v6-subnet-ip-ranges \ --auto-allocate-nat-external-ips \ --auto-network-tier= AUTO NETWORK TIER If you are creating the gateway for IPv4 and IPv6 subnet ranges, specify both the --nat-all-subnet-ip-ranges and --nat64-all-v6-subnet-ip-ranges flags in this command.

### Cloud NAT overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/nat/docs/overview](https://docs.cloud.google.com/nat/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 170
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Resource Public NAT Private NAT Compute Engine VM instances GKE clusters Cloud Run, Cloud Run functions, and App Engine 1 Regional internet NEGs Not applicable 1 The following serverless endpoints are supported: Cloud Run instances (services and jobs) and Cloud Run functions instances through Direct VPC egress (recommended) or Serverless VPC Access App Engine standard environment instances through Serverless VPC Access Architecture Cloud NAT is a distributed, software-defined managed service.
- Cloud NAT translates addresses for the following resources: Compute Engine virtual machine (VM) instances Google Kubernetes Engine (GKE) clusters Cloud Run instances Cloud Run functions instances App Engine standard environment instances Regional internet network endpoint groups (NEGs) NAT is automatically applied to the resources that match your Cloud NAT configuration after you create a Cloud NAT gateway and configure it to serve the subnets where those resources run.
- From a VPC network to a network outside of Google Cloud Private NAT supports the following options for traffic between VPC networks and on-premises or other cloud provider networks: Private-to-private NAT for networks connected through NCC hybrid spokes.
- Cloud NAT overview Cloud NAT provides network address translation (NAT) for outbound traffic to the internet, Virtual Private Cloud (VPC) networks, on-premises networks, and other cloud provider networks.

### Use Public NAT with GKE \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/nat/docs/gke-example](https://docs.cloud.google.com/nat/docs/gke-example)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To create and start the cluster, click Create . gcloud gcloud container clusters create "nat-test-cluster" \ --zone "us-east4-c" \ --cluster-version "latest" \ --machine-type "e2-medium" \ --disk-type "pd-standard" \ --disk-size "100" \ --scopes "https://www.googleapis.com/auth/compute","https://www.googleapis.com/auth/devstorage.read only","https://www.googleapis.com/auth/logging.write","https://www.googleapis.com/auth/monitoring","https://www.googleapis.com/auth/servicecontrol","https://www.googleapis.com/auth/service.management.readonly","https://www.googleapis.com/auth/trace.append" \ --num-nodes "3" \ --enable-private-nodes \ --enable-private-endpoint \ --master-ipv4-cidr "172.16.0.0/28" \ --enable-ip-alias \ --network "projects/ PROJECT ID /global/networks/custom-network1" \ --subnetwork "projects/ PROJECT ID /regions/us-east4/subnetworks/subnet-us-east-192" \ --max-nodes-per-pool "110" \ --enable-master-authorized-networks \ --addons HorizontalPodAutoscaling,HttpLoadBalancing \ --enable-autoupgrade \ --enable-autorepair Terraform You can use a Terraform resource to create a private cluster. resource "google container cluster" "primary" { project = var.project id name = "nat-test-cluster" location = "us-east4-c" initial node count = 3 network = var.network # Replace with a reference or self link to your network, in quotes subnetwork = var.subnet # Replace with a reference or self link to your subnet, in quotes private cluster config { master ipv4 cidr block = "172.16.0.0/28" enable private endpoint = true enable private nodes = true } ip allocation policy { } master authorized networks config { } } Step 3: Create a firewall rule that allows SSH connections Console In the Google Cloud console, go to the Firewall policies page.
- Click Create . gcloud Create a Cloud Router: gcloud compute routers create nat-router \ --network custom-network1 \ --region us-east4 Add a configuration to the router: gcloud compute routers nats create nat-config \ --router-region us-east4 \ --router nat-router \ --nat-all-subnet-ip-ranges \ --auto-allocate-nat-external-ips Terraform You can use a Terraform resource to create a Cloud Router. resource "google compute router" "router" { project = var.project id name = "nat-router" network = var.network region = "us-east4" } You can use a Terraform module to create a NAT configuration. module "cloud-nat" { source = "terraform-google-modules/cloud-nat/google" version = " > 5.0" project id = var.project id region = "us-east4" router = google compute router.router.name name = "nat-config" source subnetwork ip ranges to nat = "ALL SUBNETWORKS ALL IP RANGES" } Step 7: Attempt to connect to the internet again It might take up to three minutes for the NAT configuration to propagate, so wait at least a minute before trying to access the internet again.
- In this example, we assign 192.168.1.0/24 to region us-east4 . gcloud compute networks subnets create subnet-us-east-192 \ --network custom-network1 \ --region us-east4 \ --range 192.168.1.0/24 Output: NAME REGION NETWORK RANGE subnet-us-east-192 us-east4 custom-network1 192.168.1.0/24 Terraform You can use a Terraform module to create a custom Virtual Private Cloud network and subnet. module "test-vpc-module" { source = "terraform-google-modules/network/google" version = " > 13.0" project id = var.project id # Replace this with your project ID in quotes network name = "custom-network1" mtu = 1460 subnets = [ { subnet name = "subnet-us-east-192" subnet ip = "192.168.1.0/24" subnet region = "us-east4" } ] } Step 2: Create a private cluster Console In the Google Cloud console, go to the Kubernetes clusters page.
- Click Create . gcloud gcloud compute firewall-rules create allow-ssh \ --network custom-network1 \ --source-ranges 35.235.240.0/20 \ --allow tcp:22 Terraform You can use a Terraform resource to create a firewall rule. resource "google compute firewall" "rules" { project = var.project id name = "allow-ssh" network = var.network allow { protocol = "tcp" ports = ["22"] } source ranges = ["35.235.240.0/20"] } Step 4: Create IAP SSH permissions for one of your nodes In a later step, use IAP to connect to your node.

