---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.431Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Static regional IPv6 address reservation"
feature_slug: "static-regional-ipv6-address-reservation"
latest_feature_date: "2025-10-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints"
  - "https://docs.cloud.google.com/vpc/docs/quota"
  - "https://docs.cloud.google.com/vpc/docs/access-apis-external-ip"
  - "https://docs.cloud.google.com/vpc/docs/bring-your-own-ip"
keywords:
  - "static"
  - "regional"
  - "ipv6"
  - "address"
  - "reservation"
  - "gcp"
  - "now"
  - "allows"
---

# Static regional IPv6 address reservation

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

GCP now allows reserving static regional IPv6 addresses with a /96 address range.

## Extended Definition

GCP now allows reserving static regional IPv6 addresses with a /96 address range.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints](https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints)
- [https://docs.cloud.google.com/vpc/docs/quota](https://docs.cloud.google.com/vpc/docs/quota)
- [https://docs.cloud.google.com/vpc/docs/access-apis-external-ip](https://docs.cloud.google.com/vpc/docs/access-apis-external-ip)
- [https://docs.cloud.google.com/vpc/docs/bring-your-own-ip](https://docs.cloud.google.com/vpc/docs/bring-your-own-ip)

## Supporting Pages

### "About accessing published services through endpoints \_|\_ Virtual Private\

- URL: [https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints](https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints)
- Source ID: `site-docs-root-2`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Target producer Consumer configuration (endpoint) Consumer global access Hybrid access Automatic DNS configuration (IPv4-only) VPC Network Peering access NCC connection propagation (IPv4 only) Supported target services for IPv4 endpoints Supported target services for IPv6 endpoints Cross-region internal Application Load Balancer IPv4 services IPv4 services Internal passthrough Network Load Balancer Only if global access is enabled on the load balancer ( known issue ) IPv4 services IPv4 services IPv6 services Internal protocol forwarding (target instance) Only if global access is enabled on the producer forwarding rule ( known issue ) IPv4 services IPv4 services IPv6 services Port mapping services Only if global access is enabled on the producer forwarding rule IPv4 services IPv4 services IPv6 services Regional internal Application Load Balancer Only if global access is enabled on the load balancer before the service attachment is created IPv4 services IPv4 services Regional internal proxy Network Load Balancer Only if global access is enabled on the load balancer before the service attachment is created IPv4 services IPv4 services Secure Web Proxy IPv4 services IPv4 services Producer configuration This table summarizes the supported configuration options and capabilities of published services that are accessed by endpoints .
- The IP address counts toward the project's quota for static internal IPv4 addresses or static internal IPv6 addresses .
- Producer type Producer configuration (published service) Supported producer backends PROXY protocol (TCP traffic only) IP version Cross-region internal Application Load Balancer GCE VM IP PORT zonal NEGs Hybrid NEGs Serverless NEGs Private Service Connect NEGs Instance groups IPv4 Internal passthrough Network Load Balancer GCE VM IP zonal NEGs Instance groups IPv4 IPv6 Internal protocol forwarding (target instance) Not applicable IPv4 IPv6 Port mapping services Port mapping NEG IPv4 IPv6 Regional internal Application Load Balancer GCE VM IP PORT zonal NEGs Hybrid NEGs Serverless NEGs Private Service Connect NEGs Instance groups Regional internet NEGs IPv4 Regional internal proxy Network Load Balancer GCE VM IP PORT zonal NEGs Hybrid NEGs Private Service Connect NEGs Instance groups IPv4 Secure Web Proxy Not applicable IPv4 Different load balancers support different port configurations; some load balancers support a single port, some support a range of ports, and some support all ports.
- Configuration Consumer support Producer support Regional Cloud Service Mesh Regional external Application Load Balancer Regional external proxy Network Load Balancer Regional internal Application Load Balancer Regional internal proxy Network Load Balancer Internal passthrough Network Load Balancer Internal protocol forwarding (target instance) Shared VPC Service Project Admins can create endpoints in Shared VPC service projects that use IP addresses from Shared VPC networks .

### Quotas and limits \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/quota](https://docs.cloud.google.com/vpc/docs/quota)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- Regional static internal IPv6 address ranges The number of static regional internal IPv6 address ranges that you can reserve in each region in your project.
- Regional static external IPv6 address ranges The number of static regional external IPv6 address ranges that you can reserve in each region in your project.
- Limit name: STATIC-BYOIP-ADDRESSES-per-project-region Metric: compute.googleapis.com/regional static byoip addresses Static BYOIP IP addresses global The number of bring your own IP global external IP addresses that you can create in your project.
- Bring your own IP (BYOIP) Static BYOIP IP addresses The number of bring your own IP regional external IP addresses that you can reserve in each region in your project.

### "Access APIs from VMs with external IP addresses \_|\_ Virtual Private Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/access-apis-external-ip](https://docs.cloud.google.com/vpc/docs/access-apis-external-ip)
- Source ID: `site-docs-root-2`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Domain names that match: accounts.google.com (only supports paths needed for OAuth authentication of service accounts; user account authentication is interactive and not supported) .aiplatform-notebook.cloud.google.com .aiplatform-notebook.googleusercontent.com appengine.google.com .appspot.com .backupdr.cloud.google.com backupdr.cloud.google.com .backupdr.googleusercontent.com backupdr.googleusercontent.com .cloudfunctions.net .cloudproxy.app .composer.cloud.google.com .composer.googleusercontent.com .datafusion.cloud.google.com .datafusion.googleusercontent.com .dataproc.cloud.google.com dataproc.cloud.google.com .dataproc.googleusercontent.com dataproc.googleusercontent.com .developerconnect.dev dl.google.com gcr.io or .gcr.io .googleapis.com .gke.goog gstatic.com or .gstatic.com .kernels.googleusercontent.com .ltsapis.goog .notebooks.byoid.googleusercontent.com .notebooks.cloud.google.com notebooks.cloud.google.com .notebooks.googleusercontent.com packages.cloud.google.com pkg.dev or .pkg.dev pki.goog or .pki.goog .run.app source.developers.google.com storage.cloud.google.com Use private.googleapis.com to access Google APIs and services by using a set of IP addresses only routable from within Google Cloud.
- IPSet () for e in data [ "prefixes" ]: if "ipv4Prefix" in e : cidrs . add ( e . get ( "ipv4Prefix" )) if "ipv6Prefix" in e : cidrs . add ( e . get ( "ipv6Prefix" )) return cidrs def main (): cidrs = { group : get data ( link ) for group , link in IPRANGE URLS . items ()} if len ( cidrs ) != 2 : raise ValueError ( "ERROR: Could process data from Google" ) print ( "IP ranges for Google APIs and services default domains:" ) for ip in ( cidrs [ "goog" ] - cidrs [ "cloud" ]) . iter cidrs (): print ( ip ) if name == " main " : main () Note: In the past, Google Cloud published a list of IP address ranges in the spf.google.com DNS TXT record (and the records it referenced).
- IPv6 support for private.googleapis.com and restricted.googleapis.com The following IPv6 address ranges can be used to direct traffic from IPv6 clients to Google APIs and services: private.googleapis.com : 2600:2d00:0002:2000::/56 restricted.googleapis.com : 2600:2d00:0002:1000::/56 Consider configuring the IPv6 addresses if you want to use the private.googleapis.com or restricted.googleapis.com domain, and you have clients that use IPv6 addresses.
- Look for a route whose destination is 0.0.0.0/0 for IPv4 traffic or ::/0 for IPv6 traffic and whose next hop is default internet gateway . gcloud Use the following gcloud command, replacing NETWORK NAME with the name of the network to inspect: gcloud compute routes list \ --filter="default-internet-gateway NETWORK NAME " If you need to create a replacement default IPv4 route, see Adding a static route .

### "Bring your own IP addresses \_|\_ Virtual Private Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/bring-your-own-ip](https://docs.cloud.google.com/vpc/docs/bring-your-own-ip)
- Source ID: `site-docs-root-2`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- Configuration Regional (v2) Regional internal (v2) Regional (v1) Global (v1) Availability Recommended regional configuration Used for internal IPv6 addresses Not recommended for new regional configurations Must request adding your project to an allowlist Public advertised prefix provisioning time Approximately 2 weeks Immediate Approximately 4 weeks Approximately 4 weeks Public delegated prefix provisioning time A few minutes Immediate 4 weeks Can overlap with public advertised prefix provisioning time 4 weeks Can overlap with public advertised prefix provisioning time Sub-prefix provisioning time A few minutes Immediate A few minutes A few minutes BGP announcement The public advertised prefix is not automatically announced when it is provisioned.
- IPv6 BYOIP prefixes only support regional addresses.
- Configuration Regional (v2) Regional (v1) Global (v1) Public advertised prefix /16 to /24 /16 to /24 /16 to /24 Public delegated prefix (top-level, not sub-prefix) /16 to /28 Can be the same size or smaller (have a longer prefix length) than the public advertised prefix /17 to /28 Must be smaller (have a longer prefix length) than the public advertised prefix /17 to /28 Must be smaller (have a longer prefix length) than the public advertised prefix Sub-prefix Can be the same size or smaller (have a longer prefix length) than the parent public delegated prefix Minimum size (maximum prefix length) is /28 Can be the same size or smaller (have a longer prefix length) than the parent public delegated prefix Minimum size (maximum prefix length) is /28 Can be the same size or smaller (have a longer prefix length) than the parent public delegated prefix Minimum size (maximum prefix length) is /28 IPv6 prefixes The following table summarizes the CIDR range requirements for IPv6 prefixes.
- Sub-prefix mode or setting Prefix length specifications IPv6 access type Sub-prefix for delegation (--mode=DELEGATION) Can be the same size or smaller (have a longer prefix length) than the parent public delegated prefix The difference between the prefix length of a sub-prefix and its parent public delegated prefix can't be greater than 24 Valid lengths: /32 , /40 , /48 , /56 External Internal Sub-prefix for external forwarding rules (--mode=EXTERNAL IPV6 FORWARDING RULE CREATION) Can be the same size or smaller (have a longer prefix length) than the parent public delegated prefix The difference between the prefix length of a sub-prefix and its parent public delegated prefix can't be greater than 24 Valid lengths: /32 , /40 , /48 , /56 , /64 , or /72 External Setting: External forwarding rule allocatable prefix length Determines the prefix length for IPv6 address ranges that are used by external forwarding rules.

