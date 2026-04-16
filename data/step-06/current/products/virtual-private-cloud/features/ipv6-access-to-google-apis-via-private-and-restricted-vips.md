---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.473Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "IPv6 access to Google APIs via private and restricted VIPs"
feature_slug: "ipv6-access-to-google-apis-via-private-and-restricted-vips"
latest_feature_date: "2022-11-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/access-apis-external-ip"
  - "https://docs.cloud.google.com/vpc/docs/configure-private-google-access"
  - "https://docs.cloud.google.com/vpc/docs/configure-private-google-access-hybrid"
  - "https://docs.cloud.google.com/vpc/docs/access-regional-google-apis-endpoints"
keywords:
  - "ipv6"
  - "access"
  - "to"
  - "apis"
  - "via"
  - "private"
  - "and"
  - "restricted"
---

# IPv6 access to Google APIs via private and restricted VIPs

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Enables clients to reach Google APIs and services over IPv6 using the private.googleapis.com and restricted.googleapis.com VIPs from VMs with internal or external IPv6 connectivity and on-premises hosts.

## Extended Definition

Enables clients to reach Google APIs and services over IPv6 using the private.googleapis.com and restricted.googleapis.com VIPs from VMs with internal or external IPv6 connectivity and on-premises hosts.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/access-apis-external-ip](https://docs.cloud.google.com/vpc/docs/access-apis-external-ip)
- [https://docs.cloud.google.com/vpc/docs/configure-private-google-access](https://docs.cloud.google.com/vpc/docs/configure-private-google-access)
- [https://docs.cloud.google.com/vpc/docs/configure-private-google-access-hybrid](https://docs.cloud.google.com/vpc/docs/configure-private-google-access-hybrid)
- [https://docs.cloud.google.com/vpc/docs/access-regional-google-apis-endpoints](https://docs.cloud.google.com/vpc/docs/access-regional-google-apis-endpoints)

## Supporting Pages

### "Access APIs from VMs with external IP addresses \_|\_ Virtual Private Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/access-apis-external-ip](https://docs.cloud.google.com/vpc/docs/access-apis-external-ip)
- Source ID: `site-docs-root-2`
- Final score: 272
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- IPv6 support for private.googleapis.com and restricted.googleapis.com The following IPv6 address ranges can be used to direct traffic from IPv6 clients to Google APIs and services: private.googleapis.com : 2600:2d00:0002:2000::/56 restricted.googleapis.com : 2600:2d00:0002:1000::/56 Consider configuring the IPv6 addresses if you want to use the private.googleapis.com or restricted.googleapis.com domain, and you have clients that use IPv6 addresses.
- Configure DNS for Cloud Storage custom domain names If you are using Cloud Storage buckets, and you send requests to a Cloud Storage custom domain name , configuring DNS records for the custom Cloud Storage domain name to point to the IP addresses for private.googleapis.com or restricted.googleapis.com is not sufficient to allow access to the Cloud Storage buckets.
- The default domains are used when you don't configure DNS records for private.googleapis.com and restricted.googleapis.com . private.googleapis.com 199.36.153.8/30 2600:2d00:0002:2000::/56 Enables API access to most Google APIs and services regardless of whether they are supported by VPC Service Controls.
- Refer to the domain and IP address ranges table in Domain options to determine if the additional domain's services can be accessed using private.googleapis.com or restricted.googleapis.com .

### "Configure Private Google Access \_|\_ Virtual Private Cloud \_|\_ Google\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-google-access](https://docs.cloud.google.com/vpc/docs/configure-private-google-access)
- Source ID: `site-docs-root-2`
- Final score: 270
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- IPv6 support for private.googleapis.com and restricted.googleapis.com The following IPv6 address ranges can be used to direct traffic from IPv6 clients to Google APIs and services: private.googleapis.com : 2600:2d00:0002:2000::/56 restricted.googleapis.com : 2600:2d00:0002:1000::/56 Consider configuring the IPv6 addresses if you want to use the private.googleapis.com or restricted.googleapis.com domain, and you have clients that use IPv6 addresses.
- Configure DNS for Cloud Storage custom domain names If you are using Cloud Storage buckets, and you send requests to a Cloud Storage custom domain name , configuring DNS records for the custom Cloud Storage domain name to point to the IP addresses for private.googleapis.com or restricted.googleapis.com is not sufficient to allow access to the Cloud Storage buckets.
- The default domains are used when you don't configure DNS records for private.googleapis.com and restricted.googleapis.com . private.googleapis.com 199.36.153.8/30 2600:2d00:0002:2000::/56 Enables API access to most Google APIs and services regardless of whether they are supported by VPC Service Controls.
- The VM interface's primary internal IPv4 address The VM interface's internal IPv6 address An internal IPv4 address from an alias IP range A VM with an external IPv4 or IPv6 address assigned to its network interface doesn't need Private Google Access to connect to Google APIs and services.

### "Configure Private Google Access for on-premises hosts \_|\_ Virtual Private\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-google-access-hybrid](https://docs.cloud.google.com/vpc/docs/configure-private-google-access-hybrid)
- Source ID: `site-docs-root-2`
- Final score: 264
- Re-rank relevance: N/A

Evidence snippets:
- For private.googleapis.com : For IPv4 connectivity: 199.36.153.8/30 For both IPv4 and IPv6 connectivity: 199.36.153.8/30,2600:2d00:0002:2000::/56 For restricted.googleapis.com : For IPv4 connectivity: 199.36.153.4/30 For both IPv4 and IPv6 connectivity: 199.36.153.4/30,2600:2d00:0002:1000::/56 Firewall considerations Google Cloud firewall rules in the VPC network to which your on-premises network connects have no effect upon: Packets sent through a Cloud VPN tunnel connected to the VPC network Packets sent through a VLAN attachment connected to the VPC network Incoming packets to Cloud DNS inbound forwarder IP addresses in the VPC network You should ensure that the firewall configuration of on-premises systems allows outbound traffic to and established responses from the appropriate IP addresses: If you use private.googleapis.com : For IPv4 connectivity: 199.36.153.8/30 For IPv6 connectivity: 2600:2d00:0002:2000::/56 If you use restricted.googleapis.com : For IPv4 connectivity: 199.36.153.4/30 For IPv6 connectivity: 2600:2d00:0002:1000::/56 Any Cloud DNS inbound forwarder IP addresses, if you're using Cloud DNS for the DNS configuration What's next If you need VMs in your Google Cloud VPC network to access Google APIs and services, see Configure Private Google Access for VPC .
- IPv6 support for private.googleapis.com and restricted.googleapis.com The following IPv6 address ranges can be used to direct traffic from IPv6 clients to Google APIs and services: private.googleapis.com : 2600:2d00:0002:2000::/56 restricted.googleapis.com : 2600:2d00:0002:1000::/56 Consider configuring the IPv6 addresses if you want to use the private.googleapis.com or restricted.googleapis.com domain, and you have clients that use IPv6 addresses.
- Configure DNS for Cloud Storage custom domain names If you are using Cloud Storage buckets, and you send requests to a Cloud Storage custom domain name , configuring DNS records for the custom Cloud Storage domain name to point to the IP addresses for private.googleapis.com or restricted.googleapis.com is not sufficient to allow access to the Cloud Storage buckets.
- Specifications and requirements Private Google Access for on-premises hosts has the following requirements: You must direct Google APIs and services traffic sent by on-premises systems to the IP addresses associated with either the private.googleapis.com or the restricted.googleapis.com special domain names.

### "Access regional Google APIs through endpoints \_|\_ Virtual Private Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/access-regional-google-apis-endpoints](https://docs.cloud.google.com/vpc/docs/access-regional-google-apis-endpoints)
- Source ID: `site-docs-root-2`
- Final score: 245
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- DESCRIPTION : a description for your zone REP DNS NAME : the DNS suffix for your zone; use the target regional endpoint hostname—for example, spanner.me-central2.rep.googleapis.com VPC NETWORK LIST : a comma-delimited list of VPC networks that are authorized to query the zone API Send a POST request using the managedZones.create method: HTTP method and URL: POST https://dns.googleapis.com/dns/v1/projects/ PROJECT ID /managedZones Request JSON body: { "name": " ZONE NAME ", "dnsName": " REP DNS NAME .", "description": " DESCRIPTION ", "visibility": "private", "privateVisibilityConfig": { "kind": "dns#managedZonePrivateVisibilityConfig", "networks": [ { "kind": "dns#managedZonePrivateVisibilityConfigNetwork", "networkUrl": " NETWORK 1 URL " }, { "kind": "dns#managedZonePrivateVisibilityConfigNetwork", "networkUrl": " NETWORK 2 URL " } ] } } Replace the following: PROJECT ID : the project ID of the DNS zone.
- Roles To get the permissions that you need to create a regional Private Service Connect endpoint, ask your administrator to grant you the following IAM roles on your VPC network: Compute Network Admin role ( roles/compute.networkAdmin ) DNS Administrator role ( roles/dns.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Access regional Google APIs through endpoints This document explains how to use Private Service Connect endpoints to connect to regional endpoints of supported Google APIs .
- Enable the APIs Additionally, enable the API for the target service that you want to access through the Private Service Connect endpoint.

