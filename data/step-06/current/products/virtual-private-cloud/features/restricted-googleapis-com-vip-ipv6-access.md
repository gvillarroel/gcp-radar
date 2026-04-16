---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.467Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "restricted.googleapis.com VIP IPv6 access"
feature_slug: "restricted-googleapis-com-vip-ipv6-access"
latest_feature_date: "2023-05-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/access-apis-external-ip"
  - "https://docs.cloud.google.com/vpc/docs/configure-private-google-access"
  - "https://docs.cloud.google.com/vpc/docs/configure-private-google-access-hybrid"
  - "https://docs.cloud.google.com/vpc/docs/about-accessing-google-apis-endpoints"
keywords:
  - "restricted"
  - "googleapis"
  - "com"
  - "vip"
  - "ipv6"
  - "access"
  - "provides"
  - "to"
---

# restricted.googleapis.com VIP IPv6 access

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Provides access to Google APIs and services through the restricted.googleapis.com virtual IP (VIP) endpoint using IPv6.

## Extended Definition

Provides access to Google APIs and services through the restricted.googleapis.com virtual IP (VIP) endpoint using IPv6.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/access-apis-external-ip](https://docs.cloud.google.com/vpc/docs/access-apis-external-ip)
- [https://docs.cloud.google.com/vpc/docs/configure-private-google-access](https://docs.cloud.google.com/vpc/docs/configure-private-google-access)
- [https://docs.cloud.google.com/vpc/docs/configure-private-google-access-hybrid](https://docs.cloud.google.com/vpc/docs/configure-private-google-access-hybrid)
- [https://docs.cloud.google.com/vpc/docs/about-accessing-google-apis-endpoints](https://docs.cloud.google.com/vpc/docs/about-accessing-google-apis-endpoints)

## Supporting Pages

### "Access APIs from VMs with external IP addresses \_|\_ Virtual Private Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/access-apis-external-ip](https://docs.cloud.google.com/vpc/docs/access-apis-external-ip)
- Source ID: `site-docs-root-2`
- Final score: 242
- Re-rank relevance: N/A

Evidence snippets:
- IPv6 support for private.googleapis.com and restricted.googleapis.com The following IPv6 address ranges can be used to direct traffic from IPv6 clients to Google APIs and services: private.googleapis.com : 2600:2d00:0002:2000::/56 restricted.googleapis.com : 2600:2d00:0002:1000::/56 Consider configuring the IPv6 addresses if you want to use the private.googleapis.com or restricted.googleapis.com domain, and you have clients that use IPv6 addresses.
- Configure DNS for Cloud Storage custom domain names If you are using Cloud Storage buckets, and you send requests to a Cloud Storage custom domain name , configuring DNS records for the custom Cloud Storage domain name to point to the IP addresses for private.googleapis.com or restricted.googleapis.com is not sufficient to allow access to the Cloud Storage buckets.
- The default domains are used when you don't configure DNS records for private.googleapis.com and restricted.googleapis.com . private.googleapis.com 199.36.153.8/30 2600:2d00:0002:2000::/56 Enables API access to most Google APIs and services regardless of whether they are supported by VPC Service Controls.
- The default routes provides a path to the IP addresses for the following destinations: The default domains. private.googleapis.com : 199.36.153.8/30 and 2600:2d00:0002:2000::/56 . restricted.googleapis.com : 199.36.153.4/30 and 2600:2d00:0002:1000::/56 .

### "Configure Private Google Access \_|\_ Virtual Private Cloud \_|\_ Google\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-google-access](https://docs.cloud.google.com/vpc/docs/configure-private-google-access)
- Source ID: `site-docs-root-2`
- Final score: 240
- Re-rank relevance: N/A

Evidence snippets:
- IPv6 support for private.googleapis.com and restricted.googleapis.com The following IPv6 address ranges can be used to direct traffic from IPv6 clients to Google APIs and services: private.googleapis.com : 2600:2d00:0002:2000::/56 restricted.googleapis.com : 2600:2d00:0002:1000::/56 Consider configuring the IPv6 addresses if you want to use the private.googleapis.com or restricted.googleapis.com domain, and you have clients that use IPv6 addresses.
- Configure DNS for Cloud Storage custom domain names If you are using Cloud Storage buckets, and you send requests to a Cloud Storage custom domain name , configuring DNS records for the custom Cloud Storage domain name to point to the IP addresses for private.googleapis.com or restricted.googleapis.com is not sufficient to allow access to the Cloud Storage buckets.
- The default domains are used when you don't configure DNS records for private.googleapis.com and restricted.googleapis.com . private.googleapis.com 199.36.153.8/30 2600:2d00:0002:2000::/56 Enables API access to most Google APIs and services regardless of whether they are supported by VPC Service Controls.
- The default routes provides a path to the IP addresses for the following destinations: The default domains. private.googleapis.com : 199.36.153.8/30 and 2600:2d00:0002:2000::/56 . restricted.googleapis.com : 199.36.153.4/30 and 2600:2d00:0002:1000::/56 .

### "Configure Private Google Access for on-premises hosts \_|\_ Virtual Private\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-google-access-hybrid](https://docs.cloud.google.com/vpc/docs/configure-private-google-access-hybrid)
- Source ID: `site-docs-root-2`
- Final score: 236
- Re-rank relevance: N/A

Evidence snippets:
- For private.googleapis.com : For IPv4 connectivity: 199.36.153.8/30 For both IPv4 and IPv6 connectivity: 199.36.153.8/30,2600:2d00:0002:2000::/56 For restricted.googleapis.com : For IPv4 connectivity: 199.36.153.4/30 For both IPv4 and IPv6 connectivity: 199.36.153.4/30,2600:2d00:0002:1000::/56 Firewall considerations Google Cloud firewall rules in the VPC network to which your on-premises network connects have no effect upon: Packets sent through a Cloud VPN tunnel connected to the VPC network Packets sent through a VLAN attachment connected to the VPC network Incoming packets to Cloud DNS inbound forwarder IP addresses in the VPC network You should ensure that the firewall configuration of on-premises systems allows outbound traffic to and established responses from the appropriate IP addresses: If you use private.googleapis.com : For IPv4 connectivity: 199.36.153.8/30 For IPv6 connectivity: 2600:2d00:0002:2000::/56 If you use restricted.googleapis.com : For IPv4 connectivity: 199.36.153.4/30 For IPv6 connectivity: 2600:2d00:0002:1000::/56 Any Cloud DNS inbound forwarder IP addresses, if you're using Cloud DNS for the DNS configuration What's next If you need VMs in your Google Cloud VPC network to access Google APIs and services, see Configure Private Google Access for VPC .
- To let IPv6 clients in your on-premises environment access Google APIs by using private.googleapis.com or restricted.googleapis.com , you must configure the connection to your VPC network to support IPv6.
- IPv6 support for private.googleapis.com and restricted.googleapis.com The following IPv6 address ranges can be used to direct traffic from IPv6 clients to Google APIs and services: private.googleapis.com : 2600:2d00:0002:2000::/56 restricted.googleapis.com : 2600:2d00:0002:1000::/56 Consider configuring the IPv6 addresses if you want to use the private.googleapis.com or restricted.googleapis.com domain, and you have clients that use IPv6 addresses.
- Configure DNS for Cloud Storage custom domain names If you are using Cloud Storage buckets, and you send requests to a Cloud Storage custom domain name , configuring DNS records for the custom Cloud Storage domain name to point to the IP addresses for private.googleapis.com or restricted.googleapis.com is not sufficient to allow access to the Cloud Storage buckets.

### "About accessing Google APIs through endpoints \_|\_ Virtual Private Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/about-accessing-google-apis-endpoints](https://docs.cloud.google.com/vpc/docs/about-accessing-google-apis-endpoints)
- Source ID: `site-docs-root-2`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- Note: Note: These bundles provide access to the same APIs that are available through the Private Google Access VIPs — all-apis is equivalent to private.googleapis.com and vpc-sc is equivalent to restricted.googleapis.com .
- Supported APIs When you create an endpoint to access Google APIs and services, you choose which bundle of APIs you need access to— All APIs ( all-apis ) or VPC-SC ( vpc-sc ): The all-apis bundle provides access to most Google APIs and services, including all .googleapis.com service endpoints.
- Domain names that match: accounts.google.com (only supports paths needed for OAuth authentication of service accounts; user account authentication is interactive and not supported) .aiplatform-notebook.cloud.google.com .aiplatform-notebook.googleusercontent.com appengine.google.com .appspot.com .backupdr.cloud.google.com backupdr.cloud.google.com .backupdr.googleusercontent.com backupdr.googleusercontent.com .cloudfunctions.net .cloudproxy.app .composer.cloud.google.com .composer.googleusercontent.com .datafusion.cloud.google.com .datafusion.googleusercontent.com .dataproc.cloud.google.com dataproc.cloud.google.com .dataproc.googleusercontent.com dataproc.googleusercontent.com .developerconnect.dev dl.google.com gcr.io or .gcr.io .googleapis.com .gke.goog gstatic.com or .gstatic.com .kernels.googleusercontent.com .ltsapis.goog .notebooks.byoid.googleusercontent.com .notebooks.cloud.google.com notebooks.cloud.google.com .notebooks.googleusercontent.com packages.cloud.google.com pkg.dev or .pkg.dev pki.goog or .pki.goog .run.app source.developers.google.com storage.cloud.google.com Choose all-apis under these circumstances: You don't use VPC Service Controls.
- When you create an endpoint, the following DNS configurations are created: A Service Directory private DNS zone is created for p.googleapis.com DNS records are created in p.googleapis.com for some commonly used Google APIs and services that are available using Private Service Connect and have default DNS names that end in googleapis.com .

