---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.486Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Private Service Access connection cleanup"
feature_slug: "private-service-access-connection-cleanup"
latest_feature_date: "2021-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/private-services-access"
  - "https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer"
  - "https://docs.cloud.google.com/vpc/docs/configure-private-google-access-hybrid"
  - "https://docs.cloud.google.com/vpc/docs/about-private-service-connect-interfaces"
keywords:
  - "private"
  - "access"
  - "connection"
  - "cleanup"
  - "deleting"
  - "now"
  - "also"
  - "removes"
---

# Private Service Access connection cleanup

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Deleting a Private Service Access connection now also removes configurations created by the service producer, simplifying recreation after deletion.

## Extended Definition

Deleting a Private Service Access connection now also removes configurations created by the service producer, simplifying recreation after deletion.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/private-services-access](https://docs.cloud.google.com/vpc/docs/private-services-access)
- [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- [https://docs.cloud.google.com/vpc/docs/configure-private-google-access-hybrid](https://docs.cloud.google.com/vpc/docs/configure-private-google-access-hybrid)
- [https://docs.cloud.google.com/vpc/docs/about-private-service-connect-interfaces](https://docs.cloud.google.com/vpc/docs/about-private-service-connect-interfaces)

## Supporting Pages

### Private services access \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/private-services-access](https://docs.cloud.google.com/vpc/docs/private-services-access)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- Limitations The following limitations apply to private services access: Because a private connection is implemented as a VPC Network Peering connection, the behaviors and constraints of peering connections also apply to private connections.
- However, there are ways to make the private connection available to resources that are outside of that VPC network: To make the service instances available from other VPC networks, consider the following options: Accessing through NCC .
- Private services access and VPC Network Peering In a private connection, the service producer network and your network are connected through VPC Network Peering.
- Private services access lets you reach those services by creating a private connection between your VPC network and the service producer's VPC network.

### "Publish services by using Private Service Connect \_|\_ Virtual Private\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- Source ID: `site-docs-root-2`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- Health check failures with global access Private Service Connect NEGs There is a known issue with consumer Private Service Connect NEGs that are configured for global access.
- To create an IPv4-only Private Service Connect subnet, do the following: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /subnetworks { "ipCidrRange": " SUBNET RANGE ", "name": " SUBNET NAME ", "network": "projects/ PROJECT ID /global/networks/ NETWORK NAME ", "purpose": "PRIVATE SERVICE CONNECT" } To create a dual-stack Private Service Connect subnet, do the following: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /subnetworks { "ipCidrRange": " SUBNET RANGE ", "name": " SUBNET NAME ", "network": "projects/ PROJECT ID /global/networks/ NETWORK NAME ", "purpose": "PRIVATE SERVICE CONNECT", "stackType": "IPV4 IPV6", "ipv6AccessType": "INTERNAL" } To create an IPv6-only Private Service Connect subnet, do the following: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /subnetworks { "name": " SUBNET NAME ", "network": "projects/ PROJECT ID /global/networks/ NETWORK NAME ", "purpose": "PRIVATE SERVICE CONNECT", "stackType": "IPV6 ONLY", "ipv6AccessType": "INTERNAL" } Replace the following: PROJECT ID : the project for the subnet.
- To create an IPv4-only Private Service Connect subnet, do the following: gcloud compute networks subnets create SUBNET NAME \ --network= NETWORK NAME \ --region= REGION \ --range= SUBNET RANGE \ --purpose=PRIVATE SERVICE CONNECT To create a dual-stack Private Service Connect subnet, do the following: gcloud compute networks subnets create SUBNET NAME \ --network= NETWORK NAME \ --region= REGION \ --stack-type=IPV4 IPV6 \ --ipv6-access-type=INTERNAL \ --range= SUBNET RANGE \ --purpose=PRIVATE SERVICE CONNECT To create an IPv6-only Private Service Connect subnet, do the following: gcloud compute networks subnets create SUBNET NAME \ --network= NETWORK NAME \ --region= REGION \ --stack-type=IPV6 ONLY \ --ipv6-access-type=INTERNAL \ --purpose=PRIVATE SERVICE CONNECT Replace the following: SUBNET NAME : the name to assign to the subnet.
- For each endpoint in the list of connected endpoints, the endpointWithId field contains the endpoint's ID-based URI that you can use to accept or reject connections from individual Private Service Connect endpoints. gcloud compute service-attachments describe \ ATTACHMENT NAME --region= REGION Replace the following: ATTACHMENT NAME : the name of the service attachment.

### "Configure Private Google Access for on-premises hosts \_|\_ Virtual Private\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-google-access-hybrid](https://docs.cloud.google.com/vpc/docs/configure-private-google-access-hybrid)
- Source ID: `site-docs-root-2`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- To let IPv6 clients in your on-premises environment access Google APIs by using private.googleapis.com or restricted.googleapis.com , you must configure the connection to your VPC network to support IPv6.
- For private.googleapis.com : For IPv4 connectivity: 199.36.153.8/30 For both IPv4 and IPv6 connectivity: 199.36.153.8/30,2600:2d00:0002:2000::/56 For restricted.googleapis.com : For IPv4 connectivity: 199.36.153.4/30 For both IPv4 and IPv6 connectivity: 199.36.153.4/30,2600:2d00:0002:1000::/56 Firewall considerations Google Cloud firewall rules in the VPC network to which your on-premises network connects have no effect upon: Packets sent through a Cloud VPN tunnel connected to the VPC network Packets sent through a VLAN attachment connected to the VPC network Incoming packets to Cloud DNS inbound forwarder IP addresses in the VPC network You should ensure that the firewall configuration of on-premises systems allows outbound traffic to and established responses from the appropriate IP addresses: If you use private.googleapis.com : For IPv4 connectivity: 199.36.153.8/30 For IPv6 connectivity: 2600:2d00:0002:2000::/56 If you use restricted.googleapis.com : For IPv4 connectivity: 199.36.153.4/30 For IPv6 connectivity: 2600:2d00:0002:1000::/56 Any Cloud DNS inbound forwarder IP addresses, if you're using Cloud DNS for the DNS configuration What's next If you need VMs in your Google Cloud VPC network to access Google APIs and services, see Configure Private Google Access for VPC .
- Domain names that match: accounts.google.com (only supports paths needed for OAuth authentication of service accounts; user account authentication is interactive and not supported) .aiplatform-notebook.cloud.google.com .aiplatform-notebook.googleusercontent.com appengine.google.com .appspot.com .backupdr.cloud.google.com backupdr.cloud.google.com .backupdr.googleusercontent.com backupdr.googleusercontent.com .cloudfunctions.net .cloudproxy.app .composer.cloud.google.com .composer.googleusercontent.com .datafusion.cloud.google.com .datafusion.googleusercontent.com .dataproc.cloud.google.com dataproc.cloud.google.com .dataproc.googleusercontent.com dataproc.googleusercontent.com .developerconnect.dev dl.google.com gcr.io or .gcr.io .googleapis.com .gke.goog gstatic.com or .gstatic.com .kernels.googleusercontent.com .ltsapis.goog .notebooks.byoid.googleusercontent.com .notebooks.cloud.google.com notebooks.cloud.google.com .notebooks.googleusercontent.com packages.cloud.google.com pkg.dev or .pkg.dev pki.goog or .pki.goog .run.app source.developers.google.com storage.cloud.google.com Use private.googleapis.com to access Google APIs and services using a set of IP addresses only routable from within Google Cloud.
- Configure DNS for Cloud Storage custom domain names If you are using Cloud Storage buckets, and you send requests to a Cloud Storage custom domain name , configuring DNS records for the custom Cloud Storage domain name to point to the IP addresses for private.googleapis.com or restricted.googleapis.com is not sufficient to allow access to the Cloud Storage buckets.

### "About Private Service Connect interfaces \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/about-private-service-connect-interfaces](https://docs.cloud.google.com/vpc/docs/about-private-service-connect-interfaces)
- Source ID: `site-docs-root-2`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- The service might also need access to data or services that are available in a consumer's on-premises network, through a VPN or Cloud Interconnect connection, or from a third-party service.
- In a multi-tenant architecture, if one consumer terminates their Private Service Connect interface connection, other consumers that are connected to the same VM also lose connectivity.
- Example use cases An example use case for Private Service Connect interfaces is a managed service that needs to initiate connections to a consumer VPC network to access consumer data.
- A connection between a Private Service Connect interface and a network attachment is similar to the connection between a Private Service Connect endpoint and a service attachment , but it has two key differences: A Private Service Connect interface lets a producer VPC network initiate connections to a consumer VPC network (managed service egress).

