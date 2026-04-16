---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.468Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Static regional external IPv6 address reservation"
feature_slug: "static-regional-external-ipv6-address-reservation"
latest_feature_date: "2023-05-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/access-apis-external-ip"
  - "https://docs.cloud.google.com/vpc/docs/vpc-peering"
  - "https://docs.cloud.google.com/vpc/docs/vpc"
  - "https://docs.cloud.google.com/vpc/docs/bring-your-own-ip"
keywords:
  - "static"
  - "regional"
  - "external"
  - "ipv6"
  - "address"
  - "reservation"
  - "vpc"
  - "supports"
---

# Static regional external IPv6 address reservation

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

VPC supports reserving static regional external IPv6 addresses, indicating GA availability of this capability; VPC introduced limited-preview support for reserving static regional external IPv6 addresses.

## Extended Definition

VPC supports reserving static regional external IPv6 addresses, indicating GA availability of this capability; VPC introduced limited-preview support for reserving static regional external IPv6 addresses.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/access-apis-external-ip](https://docs.cloud.google.com/vpc/docs/access-apis-external-ip)
- [https://docs.cloud.google.com/vpc/docs/vpc-peering](https://docs.cloud.google.com/vpc/docs/vpc-peering)
- [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- [https://docs.cloud.google.com/vpc/docs/bring-your-own-ip](https://docs.cloud.google.com/vpc/docs/bring-your-own-ip)

## Supporting Pages

### "Access APIs from VMs with external IP addresses \_|\_ Virtual Private Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/access-apis-external-ip](https://docs.cloud.google.com/vpc/docs/access-apis-external-ip)
- Source ID: `site-docs-root-2`
- Final score: 213
- Re-rank relevance: N/A

Evidence snippets:
- If you enable external IPv6 addresses on a subnet, a system-generated IPv6 default route ( ::/0 ) is added to that VPC network.
- Domain names that match: accounts.google.com (only supports paths needed for OAuth authentication of service accounts; user account authentication is interactive and not supported) .aiplatform-notebook.cloud.google.com .aiplatform-notebook.googleusercontent.com appengine.google.com .appspot.com .backupdr.cloud.google.com backupdr.cloud.google.com .backupdr.googleusercontent.com backupdr.googleusercontent.com .cloudfunctions.net .cloudproxy.app .composer.cloud.google.com .composer.googleusercontent.com .datafusion.cloud.google.com .datafusion.googleusercontent.com .dataproc.cloud.google.com dataproc.cloud.google.com .dataproc.googleusercontent.com dataproc.googleusercontent.com .developerconnect.dev dl.google.com gcr.io or .gcr.io .googleapis.com .gke.goog gstatic.com or .gstatic.com .kernels.googleusercontent.com .ltsapis.goog .notebooks.byoid.googleusercontent.com .notebooks.cloud.google.com notebooks.cloud.google.com .notebooks.googleusercontent.com packages.cloud.google.com pkg.dev or .pkg.dev pki.goog or .pki.goog .run.app source.developers.google.com storage.cloud.google.com Use private.googleapis.com to access Google APIs and services by using a set of IP addresses only routable from within Google Cloud.
- If you want to connect to Google APIs and services using IPv6, you must meet both of these requirements: Your VM must be configured with an external /96 IPv6 address range .
- Google also publishes a list of global and regional external IP addresses ranges available for customers' Google Cloud resources in cloud.json .

### VPC Network Peering \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc-peering](https://docs.cloud.google.com/vpc/docs/vpc-peering)
- Source ID: `site-docs-root`
- Final score: 209
- Re-rank relevance: N/A

Evidence snippets:
- VPC Network Peering also provides certain external IPv6 connectivity to the destination external IPv6 address ranges of the following resources when the routes to those destination external IPv6 addresses are exchanged by VPC Network Peering: Dual-stack and IPv6-only virtual machine (VM) instance network interfaces Forwarding rules for external protocol forwarding Forwarding rules for external passthrough Network Load Balancers VPC Network Peering supports both IPv4 and IPv6 connectivity.
- Options for exchanging subnet routes The following table describes the route exchange options for subnet routes : Route type Route export conditions Route import conditions IPv4 subnet routes (primary and secondary IPv4 subnet ranges) using private IPv4 address ranges Always exported Can't be disabled Always imported Can't be disabled IPv4 subnet routes (primary and secondary IPv4 subnet ranges) using privately used public IPv4 address ranges Exported by default Export is controlled using the --export-subnet-routes-with-public-ip flag Not imported by default Import is controlled using the --import-subnet-routes-with-public-ip flag Internal IPv6 subnet ranges ( ipv6-access-type=INTERNAL ) Not exported by default Export is enabled by setting --stack-type=IPV4 IPV6 Not imported by default Import is enabled by setting --stack-type=IPV4 IPV6 External IPv6 subnet ranges ( ipv6-access-type=EXTERNAL ) Not exported by default Export is enabled by setting --stack-type=IPV4 IPV6 Not imported by default Import is enabled by setting --stack-type=IPV4 IPV6 Options for exchanging static routes The following table describes the route exchange options for static routes .
- Route type Route export conditions Route import conditions Dynamic IPv4 routes Not exported by default Export is controlled by using the --export-custom-routes flag Not imported by default Import is controlled by using the --import-custom-routes flag Dynamic IPv6 routes Not exported by default Export is controlled by using the --export-custom-routes flag when the stack type of the peering is set to --stack-type=IPV4 IPV6 Not imported by default Import is controlled by using the --import-custom-routes flag when the stack type of the peering is set to --stack-type=IPV4 IPV6 Benefits of exchanging static and dynamic routes When one VPC network exports static and dynamic routes and the other VPC network imports those routes, the importing network can send packets directly to the next hop for each imported static or dynamic route whose next hop is in the peer VPC network.
- When the intended peering stack type is IPV4 IPV6 , if a local subnet route for 2001:0db8:0a0b:0c0d::/64 exists, you can't establish a peering connection to a VPC network with a static route whose destination exactly matches 2001:0db8:0a0b:0c0d::/64 or fits within 2001:0db8:0a0b:0c0d::/64 (for example, 2001:0db8:0a0b:0c0d::/96 ).

### VPC networks \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
- Source ID: `site-docs-root`
- Final score: 193
- Re-rank relevance: N/A

Evidence snippets:
- Route advertisements and internal IP addresses The following IP addresses are advertised within a VPC network: Regional internal IPv4 addresses Used for primary and secondary IPv4 subnet address ranges Regional internal and external IPv6 addresses Used for internal and external IPv6 subnet address ranges Global internal IPv4 addresses Used for Private Service Connect endpoints for Google APIs If you connect VPC networks using VPC Network Peering, subnet ranges using private IPv4 addresses are always exchanged.
- Resources within a VPC network can communicate with one another by using internal IPv4 addresses, internal IPv6 addresses, or external IPv6 addresses, subject to applicable network firewall rules.
- Subnets with IPv6 address ranges aren't supported in the following: Auto mode VPC networks, including the default network Legacy networks If you have an auto mode VPC network that you would like to add subnets with IPv6 address ranges to, you can do the following: Convert the auto mode network to custom mode .
- You can control the following IPv6 configurations using organization policies : Disable VPC External IPv6 usage : If set to true, the constraints/compute.disableVpcExternalIpv6 constraint prevents you from configuring subnets with external IPv6 ranges.

### "Bring your own IP addresses \_|\_ Virtual Private Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/bring-your-own-ip](https://docs.cloud.google.com/vpc/docs/bring-your-own-ip)
- Source ID: `site-docs-root-2`
- Final score: 185
- Re-rank relevance: N/A

Evidence snippets:
- Sub-prefix mode or setting Prefix length specifications IPv6 access type Sub-prefix for delegation (--mode=DELEGATION) Can be the same size or smaller (have a longer prefix length) than the parent public delegated prefix The difference between the prefix length of a sub-prefix and its parent public delegated prefix can't be greater than 24 Valid lengths: /32 , /40 , /48 , /56 External Internal Sub-prefix for external forwarding rules (--mode=EXTERNAL IPV6 FORWARDING RULE CREATION) Can be the same size or smaller (have a longer prefix length) than the parent public delegated prefix The difference between the prefix length of a sub-prefix and its parent public delegated prefix can't be greater than 24 Valid lengths: /32 , /40 , /48 , /56 , /64 , or /72 External Setting: External forwarding rule allocatable prefix length Determines the prefix length for IPv6 address ranges that are used by external forwarding rules.
- Configuration Regional (v2) Regional internal (v2) Regional (v1) Global (v1) Availability Recommended regional configuration Used for internal IPv6 addresses Not recommended for new regional configurations Must request adding your project to an allowlist Public advertised prefix provisioning time Approximately 2 weeks Immediate Approximately 4 weeks Approximately 4 weeks Public delegated prefix provisioning time A few minutes Immediate 4 weeks Can overlap with public advertised prefix provisioning time 4 weeks Can overlap with public advertised prefix provisioning time Sub-prefix provisioning time A few minutes Immediate A few minutes A few minutes BGP announcement The public advertised prefix is not automatically announced when it is provisioned.
- You can use IPv6 BYOIP addresses in the following ways, depending on the sub-prefix: For external access sub-prefixes, you must choose one of the following mutually exclusive modes: Forwarding rules for external passthrough Network Load Balancers or external protocol forwarding.
- An IPv6 prefix's access type determines if the addresses are advertised to the internet: External access prefixes (the default) are advertised to the internet.

