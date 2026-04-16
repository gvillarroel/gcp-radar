---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.442Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Internal ranges with IPv6 reservations"
feature_slug: "internal-ranges-with-ipv6-reservations"
latest_feature_date: "2025-05-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/routes"
  - "https://docs.cloud.google.com/vpc/docs/add-dynamic-nics"
  - "https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges"
  - "https://docs.cloud.google.com/vpc/docs/bring-your-own-ip"
keywords:
  - "internal"
  - "ranges"
  - "with"
  - "ipv6"
  - "reservations"
  - "adds"
  - "for"
  - "reserving"
---

# Internal ranges with IPv6 reservations

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Adds support for reserving internal IP ranges using IPv6 addresses.

## Extended Definition

Adds support for reserving internal IP ranges using IPv6 addresses.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/routes](https://docs.cloud.google.com/vpc/docs/routes)
- [https://docs.cloud.google.com/vpc/docs/add-dynamic-nics](https://docs.cloud.google.com/vpc/docs/add-dynamic-nics)
- [https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges](https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges)
- [https://docs.cloud.google.com/vpc/docs/bring-your-own-ip](https://docs.cloud.google.com/vpc/docs/bring-your-own-ip)

## Supporting Pages

### Routes \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/routes](https://docs.cloud.google.com/vpc/docs/routes)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Local static route Supports various destinations Forwards packets to a static route next hop For details about each static route next hop , see considerations for: Instances and internal passthrough Network Load Balancers Next hop instances Internal passthrough Network Load Balancer next hops Classic VPN tunnel next hops Local dynamic route Destinations that don't conflict with subnet routes or static routes Peer of a BGP session on a Cloud Router Routes are added and removed automatically based on learned routes from Cloud Routers in your VPC network.
- If you access global Google APIs and services by sending packets to IPv4 or IPv6 addresses for the default domains, the IPv4 or IPv6 addresses for private.googleapis.com , or the IPv4 or IPv6 addresses for restricted.googleapis.com , you can either use default IPv4 and IPv6 routes that have default internet gateway next hops, or you can create and use IPv4 and IPv6 static routes that have more specific destinations and default internet gateway next hops: If your VMs have only internal IP addresses, see Routing options for Private Google Access.
- Accessing global Google APIs sometimes depends on a local IPv4 or IPv6 default route with default internet gateway next hop: If you access global Google APIs and services by sending packets to a Private Service Connect endpoint for global Google APIs , your VPC network doesn't require a default route with default internet gateway next hop.
- Second layer GFEs open TCP connections to your backend VMs and send packets from the following sources: 35.191.0.0/16 and 130.211.0.0/22 for IPv4 2600:2d00:1:1::/64 for IPv6 Google Cloud uses routes in Google's network to deliver packets from those source ranges to backend VMs in your VPC network.

### "Add Dynamic Network Interfaces to an instance \_|\_ Virtual Private Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/add-dynamic-nics](https://docs.cloud.google.com/vpc/docs/add-dynamic-nics)
- Source ID: `site-docs-root-2`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- Select one of the following options for the IP stack type for the Dynamic NIC: IPv4 (single-stack) IPv4 and IPv6 (dual-stack) IPv6 (single-stack) For Dynamic NICs with IPv4 addresses, do the following: For Primary internal IPv4 address , select one of the following: Ephemeral (Automatic) to automatically assign a new ephemeral IPv4 address Ephemeral (Custom) to manually specify a new ephemeral IPv4 address A reserved static internal IPv4 address from the list Reserve static internal IPv4 address to reserve and assign a new static internal IPv4 address For External IPv4 address , select one of the following: Ephemeral to assign a new ephemeral IPv4 address None to not assign an external IPv4 address A reserved static IPv4 address from the list Reserve static external IP address to reserve and assign a new static external IPv4 address You can optionally assign one or more alias IP ranges to the network interface.
- Select one of the following options for the IP stack type for the Dynamic NIC: IPv4 (single-stack) IPv4 and IPv6 (dual-stack) IPv6 (single-stack) For Dynamic NICs with IPv4 addresses, do the following: For Primary internal IPv4 address , select one of the following: Ephemeral (Automatic) to automatically assign a new ephemeral IPv4 address Ephemeral (Custom) to manually specify a new ephemeral IPv4 address A reserved static internal IPv4 address from the list Reserve static internal IPv4 address to reserve and assign a new static internal IPv4 address For External IPv4 address , select one of the following: Ephemeral to assign a new ephemeral IPv4 address None to not assign an external IPv4 address A reserved static IPv4 address from the list Reserve static external IP address to reserve and assign a new static external IPv4 address You can optionally assign one or more alias IP ranges to the network interface.
- For Dynamic NICs with IPv6 addresses, configure an internal or external IPv6 address range, depending on the access type of the connected subnet.
- For Dynamic NICs with IPv6 addresses, configure an internal or external IPv6 address range, depending on the access type of the connected subnet.

### "Configure alias IP ranges \_|\_ Virtual Private Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges](https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges)
- Source ID: `site-docs-root-2`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- The Terraform arguments have example values that you can change. resource "google compute subnetwork" "network-with-private-secondary-ip-ranges" { project = var.project id # Replace this with your project ID in quotes name = "test-subnetwork" ip cidr range = "10.2.0.0/16" region = "us-central1" network = "test-vpc-network" secondary ip range { range name = "tf-test-secondary-range-update1" ip cidr range = "192.168.10.0/24" } } To learn how to apply or remove a Terraform configuration, see Basic Terraform commands .
- Terraform You can use the Terraform resource to create a subnet with one or more secondary ranges.
- The command fails because the secondary range is in a different subnet from the instance. gcloud compute instances network-interfaces update instance-1 \ --zone us-central1-a \ --aliases secondaryrange1:172.16.0.10/32 The output is similar to the following: ERROR: (gcloud.compute.instances.network-interfaces.update) HTTPError 400: Invalid value for field 'resource.aliasIpRanges[0].subnetworkRangeName': 'secondaryrange'.
- Then edit the local route table to remove any entries for the alias IP address ranges—for example: sudo ip route del local ALIAS IP RANGE dev DEVICE IDENTIFIER Replace the following: ALIAS IP RANGE : the alias IP address range.

### "Bring your own IP addresses \_|\_ Virtual Private Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/bring-your-own-ip](https://docs.cloud.google.com/vpc/docs/bring-your-own-ip)
- Source ID: `site-docs-root-2`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Must be smaller than the associated sub-prefix—the difference between the allocatable prefix length and the sub-prefix length must be at least 8, and can't be greater than 32 Valid lengths: /48 , /56 , /64 , /72 , /80 , /88 , /96 Default lengths: If the parent sub-prefix's length is /64 or /72 , the default allocatable prefix length is /96 Otherwise, the default allocatable prefix length is /64 Sub-prefix for external subnet ranges (--mode=EXTERNAL IPV6 SUBNETWORK CREATION) Can be the same size or smaller (have a longer prefix length) than the parent public delegated prefix The difference between the prefix length of a sub-prefix and its parent public delegated prefix can't be greater than 24 Valid lengths: /32 , /40 , /48 , /56 External Sub-prefix for internal subnet ranges (--mode=INTERNAL IPV6 SUBNETWORK CREATION) Can be the same size or smaller (have a longer prefix length) than the parent public delegated prefix The difference between the prefix length of a sub-prefix and its parent public delegated prefix can't be greater than 24 Valid lengths: /32 , /40 , /48 , /56 Internal Limitations Provisioning time takes multiple weeks and cannot be accelerated.
- Sub-prefix mode or setting Prefix length specifications IPv6 access type Sub-prefix for delegation (--mode=DELEGATION) Can be the same size or smaller (have a longer prefix length) than the parent public delegated prefix The difference between the prefix length of a sub-prefix and its parent public delegated prefix can't be greater than 24 Valid lengths: /32 , /40 , /48 , /56 External Internal Sub-prefix for external forwarding rules (--mode=EXTERNAL IPV6 FORWARDING RULE CREATION) Can be the same size or smaller (have a longer prefix length) than the parent public delegated prefix The difference between the prefix length of a sub-prefix and its parent public delegated prefix can't be greater than 24 Valid lengths: /32 , /40 , /48 , /56 , /64 , or /72 External Setting: External forwarding rule allocatable prefix length Determines the prefix length for IPv6 address ranges that are used by external forwarding rules.
- Configuration Regional (v2) Regional internal (v2) Regional (v1) Global (v1) Availability Recommended regional configuration Used for internal IPv6 addresses Not recommended for new regional configurations Must request adding your project to an allowlist Public advertised prefix provisioning time Approximately 2 weeks Immediate Approximately 4 weeks Approximately 4 weeks Public delegated prefix provisioning time A few minutes Immediate 4 weeks Can overlap with public advertised prefix provisioning time 4 weeks Can overlap with public advertised prefix provisioning time Sub-prefix provisioning time A few minutes Immediate A few minutes A few minutes BGP announcement The public advertised prefix is not automatically announced when it is provisioned.
- For information about using addresses in an internal IPv6 range, see Internal IPv6 specifications When you create IP addresses from a public delegated prefix or sub-prefix, the IP addresses can be used only within the project and scope that they are allocated to.

