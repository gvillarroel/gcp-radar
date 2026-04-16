---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.503Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Disable firewall rules"
feature_slug: "disable-firewall-rules"
latest_feature_date: "2018-05-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/configure-private-google-access"
  - "https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer"
  - "https://docs.cloud.google.com/vpc/docs/vpc"
  - "https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks"
keywords:
  - "disable"
  - "firewall"
  - "rules"
  - "virtual"
  - "private"
  - "added"
  - "for"
  - "disabling"
---

# Disable firewall rules

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Virtual Private Cloud added support for disabling firewall rules, allowing rules to be turned off without deletion.

## Extended Definition

Virtual Private Cloud added support for disabling firewall rules, allowing rules to be turned off without deletion.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/configure-private-google-access](https://docs.cloud.google.com/vpc/docs/configure-private-google-access)
- [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)

## Supporting Pages

### "Configure Private Google Access \_|\_ Virtual Private Cloud \_|\_ Google\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-google-access](https://docs.cloud.google.com/vpc/docs/configure-private-google-access)
- Source ID: `site-docs-root-2`
- Final score: 217
- Re-rank relevance: N/A

Evidence snippets:
- To list the subnets for a particular network, use the following command: gcloud compute networks subnets list \ --filter= NETWORK NAME Run the following command to disable Private Google Access: gcloud compute networks subnets update SUBNET NAME \ --region= REGION \ --no-enable-private-ip-google-access Run the following command to verify that Private Google Access is disabled: gcloud compute networks subnets describe SUBNET NAME \ --region= REGION \ --format="get(privateIpGoogleAccess)" In all above commands, replace the following with valid values: SUBNET NAME : the name of the subnet REGION : the region for the subnet NETWORK NAME : the name of the VPC network that contains the subnet What's next Configure Private Google Access for on-premises hosts Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Default domains: all IP address ranges for Google APIs and services . private.googleapis.com : 199.36.153.8/30 and 2600:2d00:0002:2000::/56 restricted.googleapis.com : 199.36.153.4/30 and 2600:2d00:0002:1000::/56 Additionally, we recommend that you include 34.126.0.0/18 and 2001:4860:8040::/42 in your egress allow firewall rule.
- The default allow egress firewall rule allows this traffic, if there is no higher priority rule that blocks it. private.googleapis.com Configure DNS records in a private DNS zone to send requests to the following IP addresses: For IPv4 traffic: 199.36.
- 0.0/18 For IPv6 traffic: 2600:2d00: 0002: 2000::/56 2001:4860: 8040::/42 Ensure that your firewall rules allow egress to the following IP ranges: For IPv4 traffic: 199.36.

### "Publish services by using Private Service Connect \_|\_ Virtual Private\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- Source ID: `site-docs-root-2`
- Final score: 201
- Re-rank relevance: N/A

Evidence snippets:
- When you configure ingress firewall rules for backend services, the source of traffic depends on the type of load balancer that your service uses: Category Source of traffic to backends Passthrough load balancers: Internal passthrough Network Load Balancer Internal protocol forwarding Port mapping service The IP address ranges of the Private Service Connect (NAT) subnets associated with the service Proxy load balancers: Cross-region internal Application Load Balancer Regional internal Application Load Balancer Regional internal proxy Network Load Balancer Secure Web Proxy The IP address ranges of the associated proxy-only subnets Services with health checks The probe IP address ranges of your load balancer type Publish a service To publish a service, you create a service attachment.
- If a consumer connects a Private Service Connect NEG that is configured for global access to a producer load balancer, and the service producer disables global access for that load balancer, health checks don't work correctly.
- Configure firewall rules Your network configuration must allow traffic from appropriate source IP address ranges to the instances or network endpoints that are configured as backends for your backend services.
- To create an IPv4-only Private Service Connect subnet, do the following: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /subnetworks { "ipCidrRange": " SUBNET RANGE ", "name": " SUBNET NAME ", "network": "projects/ PROJECT ID /global/networks/ NETWORK NAME ", "purpose": "PRIVATE SERVICE CONNECT" } To create a dual-stack Private Service Connect subnet, do the following: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /subnetworks { "ipCidrRange": " SUBNET RANGE ", "name": " SUBNET NAME ", "network": "projects/ PROJECT ID /global/networks/ NETWORK NAME ", "purpose": "PRIVATE SERVICE CONNECT", "stackType": "IPV4 IPV6", "ipv6AccessType": "INTERNAL" } To create an IPv6-only Private Service Connect subnet, do the following: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /subnetworks { "name": " SUBNET NAME ", "network": "projects/ PROJECT ID /global/networks/ NETWORK NAME ", "purpose": "PRIVATE SERVICE CONNECT", "stackType": "IPV6 ONLY", "ipv6AccessType": "INTERNAL" } Replace the following: PROJECT ID : the project for the subnet.

### VPC networks \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- Source ID: `site-docs-root`
- Final score: 201
- Re-rank relevance: N/A

Evidence snippets:
- Protocol forwarding: the AH, ESP, GRE, ICMP, ICMPv6, SCTP, TCP, and UDP protocols To allow data packets of the supported protocols, you need to configure firewall rules or protocol forwarding rules based on your requirements.
- For one instance to be able to communicate with another, appropriate firewall rules must also be configured because every network has an implied deny firewall rule for ingress traffic.
- Except for the default network, you must explicitly create higher priority ingress firewall rules to allow instances to communicate with one another.
- For App Engine instances, firewall rules work as follows: App Engine standard environment : Only App Engine firewall rules apply to ingress traffic.

### "Quickstart: Create and manage VPC networks \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- Source ID: `site-docs-root`
- Final score: 193
- Re-rank relevance: N/A

Evidence snippets:
- Before setting the MTU to a value higher than 1460 , review Maximum transmission unit . module "test-vpc-module" { source = "terraform-google-modules/network/google" version = " > 16.0" project id = var.project id # Replace this with your project ID in quotes network name = "my-custom-mode-network" mtu = 1460 subnets = [ { subnet name = "subnet-01" subnet ip = "10.10.10.0/24" subnet region = "us-west1" }, { subnet name = "subnet-02" subnet ip = "10.10.20.0/24" subnet region = "us-west1" subnet private access = "true" subnet flow logs = "true" }, { subnet name = "subnet-03" subnet ip = "10.10.30.0/24" subnet region = "us-west1" subnet flow logs = "true" subnet flow logs interval = "INTERVAL 10 MIN" subnet flow logs sampling = 0.7 subnet flow logs metadata = "INCLUDE ALL METADATA" subnet flow logs filter = "false" } ] } Next, create firewall rules .
- For information about this error and its solution, see Resource not found error in the VPC firewall rules documentation.
- If you need firewall rules for the new subnets, you must update the firewall configuration to add the rules.
- If you need firewall rules for the new subnets, you must update the firewall configuration to add the rules.

