---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.470Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Auto mode VPC subnet range for me-central1"
feature_slug: "auto-mode-vpc-subnet-range-for-me-central1"
latest_feature_date: "2023-03-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/subnets"
  - "https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges"
  - "https://docs.cloud.google.com/vpc/docs/alias-ip"
  - "https://docs.cloud.google.com/vpc/docs/shared-vpc"
keywords:
  - "auto"
  - "mode"
  - "vpc"
  - "subnet"
  - "range"
  - "for"
  - "me"
  - "central1"
---

# Auto mode VPC subnet range for me-central1

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

A new auto mode VPC subnet was added for the Doha (me-central1) region with CIDR block 10.212.0.0/20.

## Extended Definition

A new auto mode VPC subnet was added for the Doha (me-central1) region with CIDR block 10.212.0.0/20.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/subnets](https://docs.cloud.google.com/vpc/docs/subnets)
- [https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges](https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges)
- [https://docs.cloud.google.com/vpc/docs/alias-ip](https://docs.cloud.google.com/vpc/docs/alias-ip)
- [https://docs.cloud.google.com/vpc/docs/shared-vpc](https://docs.cloud.google.com/vpc/docs/shared-vpc)

## Supporting Pages

### Subnets \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/subnets](https://docs.cloud.google.com/vpc/docs/subnets)
- Source ID: `site-docs-root`
- Final score: 266
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Auto mode IPv4 ranges This table lists the IPv4 ranges for the automatically created subnets in an auto mode VPC network.
- For example, auto mode VPC networks do create subnets that fit within a predefined auto mode IP range.
- Internal subnet /64 IPv6 ranges can be used by the following, regardless of the type of addresses: Internal /96 IPv6 address ranges of VM network interfaces Internal /96 IPv6 address ranges of forwarding rules for the following: Internal protocol forwarding Internal passthrough Network Load Balancers Private Service Connect endpoints Internal /96 IPv6 address ranges can be assigned in the following ways: If not specified, Google Cloud automatically assigns an ephemeral internal IPv6 /96 address range.
- When you create an IPv4 subnet range, you provide the following information: Subnet setting Valid values Details IPv4 range A valid range that you choose Required Secondary IPv4 range A valid range that you choose Optional When you create an IPv6 subnet range, you specify the access type and the source of the IP addresses: Access type Address type and source Internal (not internet routable) ULAs : Automatically assigned from the VPC network's /48 ULA range .

### "Configure alias IP ranges \_|\_ Virtual Private Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges](https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges)
- Source ID: `site-docs-root-2`
- Final score: 258
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Terraform arguments have example values that you can change. resource "google compute subnetwork" "network-with-private-secondary-ip-ranges" { project = var.project id # Replace this with your project ID in quotes name = "test-subnetwork" ip cidr range = "10.2.0.0/16" region = "us-central1" network = "test-vpc-network" secondary ip range { range name = "tf-test-secondary-range-update1" ip cidr range = "192.168.10.0/24" } } To learn how to apply or remove a Terraform configuration, see Basic Terraform commands .
- The first network interface listed, the one in my-subnet1 , is the primary interface: gcloud compute instances create multi-nic-alias-vm \ --machine-type f1-micro \ --network-interface "subnet=my-subnet1,aliases=/32;range1:/24" \ --network-interface "subnet=my-subnet2,aliases=/32;range2:/24" Use the display command to see the interfaces and their addresses: gcloud compute instances describe multi-nic-alias-vm ... networkInterfaces: - ... aliasIpRanges: - ipCidrRange: 172.16.1.2/32 - ipCidrRange: 10.1.0.0/24 subnetworkRangeName: range1 name: nic0 network: .../networks/my-network1 networkIP: 172.16.1.3 subnetwork: .../subnetworks/my-subnet1 ... - ... aliasIpRanges: - ipCidrRange: 172.16.2.2/32 - ipCidrRange: 10.2.0.0/24 subnetworkRangeName: range2 name: nic1 network: .../networks/my-network2 networkIP: 172.16.2.3 subnetwork: .../subnetworks/my-subnet2 API Create two custom mode VPC networks named my-network1 and my-network2 .
- The command fails because the secondary range is in a different subnet from the instance. gcloud compute instances network-interfaces update instance-1 \ --zone us-central1-a \ --aliases secondaryrange1:172.16.0.10/32 The output is similar to the following: ERROR: (gcloud.compute.instances.network-interfaces.update) HTTPError 400: Invalid value for field 'resource.aliasIpRanges[0].subnetworkRangeName': 'secondaryrange'.
- Auto mode Virtual Private Cloud (VPC) networks can't be deleted if secondary subnet ranges are present.

### Alias IP ranges \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/alias-ip](https://docs.cloud.google.com/vpc/docs/alias-ip)
- Source ID: `site-docs-root-2`
- Final score: 258
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In order to configure this example, use the following gcloud commands: gcloud compute networks create vpc1 --subnet-mode custom gcloud compute networks subnets create subnet1 --region us-central1 --network vpc1 --range 10.128.0.0/16 --secondary-range secondaryrange1=172.16.0.0/20 gcloud compute instances create vm1 --zone us-central1-a --network-interface "subnet=subnet1,aliases=secondaryrange1:172.16.0.0/27;secondaryrange1:172.16.1.0/32" gcloud compute instances create vm2 --zone us-central1-a --network-interface "subnet=subnet1,aliases=secondaryrange1:172.16.0.32/27;secondaryrange1:172.16.1.1/32" Alias IP addresses in auto mode VPC networks and subnets The automatically-created subnets in auto mode VPC networks each have a primary CIDR range, but no secondary range.
- To use alias IP with an auto mode VPC network, you can allocate alias IP ranges from the automatically created subnet's primary CIDR range or add a secondary range to the automatically created subnet and allocate alias IP ranges from the new secondary range.
- Key benefits of alias IP ranges When alias IP ranges are configured, Google Cloud automatically installs Virtual Private Cloud (VPC) network routes for primary and alias IP ranges for the subnet of the primary network interface.
- Alternatively, you can create a new subnet with secondary ranges in the auto mode VPC network as long as none of its ranges overlap with 10.128.0.0/9 .

### Shared VPC \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/shared-vpc](https://docs.cloud.google.com/vpc/docs/shared-vpc)
- Source ID: `site-docs-root`
- Final score: 245
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Service Project Admins When defining each Service Project Admin, a Shared VPC Admin can grant permission to use the whole host project or just some subnets: Project-level permissions : A Service Project Admin can be defined to have permission to use all subnets in the host project if the Shared VPC Admin grants the role of compute.networkUser for the whole host project to the Service Project Admin.
- Subnet-level permissions : Alternatively, a Service Project Admin can be granted a more restrictive set of permissions to use only some subnets if the Shared VPC Admin grants the role of compute.networkUser for those selected subnets to the Service Project Admin.
- They perform various tasks necessary to set up Shared VPC , such as enabling host projects, attaching service projects to host projects, and delegating access to some or all of the subnets in Shared VPC networks to Service Project Admins.
- A Shared VPC Admin for the organization has created a host project and attached two service projects to it: Service Project Admins in Service project A can be configured to access all or some of the subnets in the Shared VPC network.

