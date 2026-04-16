---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.493Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Private Google Access for on-premises hosts"
feature_slug: "private-google-access-for-on-premises-hosts"
latest_feature_date: "2020-04-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/configure-private-google-access-hybrid"
  - "https://docs.cloud.google.com/vpc/docs/configure-private-google-access"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/states/reasons-dropped-packets"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/state-tables"
keywords:
  - "private"
  - "access"
  - "for"
  - "on"
  - "premises"
  - "hosts"
  - "now"
  - "allows"
---

# Private Google Access for on-premises hosts

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Private Google Access for on-premises hosts now allows traffic from any internal IP address, including non-RFC 1918 addresses; Private Google Access for on-premises hosts was updated to allow traffic from any internal IP address range, rather than only RFC 1918 addresses.

## Extended Definition

Private Google Access for on-premises hosts now allows traffic from any internal IP address, including non-RFC 1918 addresses; Private Google Access for on-premises hosts was updated to allow traffic from any internal IP address range, rather than only RFC 1918 addresses.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/configure-private-google-access-hybrid](https://docs.cloud.google.com/vpc/docs/configure-private-google-access-hybrid)
- [https://docs.cloud.google.com/vpc/docs/configure-private-google-access](https://docs.cloud.google.com/vpc/docs/configure-private-google-access)
- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/states/reasons-dropped-packets](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/states/reasons-dropped-packets)
- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/state-tables](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/state-tables)

## Supporting Pages

### "Configure Private Google Access for on-premises hosts \_|\_ Virtual Private\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-google-access-hybrid](https://docs.cloud.google.com/vpc/docs/configure-private-google-access-hybrid)
- Source ID: `site-docs-root-2`
- Final score: 413
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For private.googleapis.com : For IPv4 connectivity: 199.36.153.8/30 For both IPv4 and IPv6 connectivity: 199.36.153.8/30,2600:2d00:0002:2000::/56 For restricted.googleapis.com : For IPv4 connectivity: 199.36.153.4/30 For both IPv4 and IPv6 connectivity: 199.36.153.4/30,2600:2d00:0002:1000::/56 Firewall considerations Google Cloud firewall rules in the VPC network to which your on-premises network connects have no effect upon: Packets sent through a Cloud VPN tunnel connected to the VPC network Packets sent through a VLAN attachment connected to the VPC network Incoming packets to Cloud DNS inbound forwarder IP addresses in the VPC network You should ensure that the firewall configuration of on-premises systems allows outbound traffic to and established responses from the appropriate IP addresses: If you use private.googleapis.com : For IPv4 connectivity: 199.36.153.8/30 For IPv6 connectivity: 2600:2d00:0002:2000::/56 If you use restricted.googleapis.com : For IPv4 connectivity: 199.36.153.4/30 For IPv6 connectivity: 2600:2d00:0002:1000::/56 Any Cloud DNS inbound forwarder IP addresses, if you're using Cloud DNS for the DNS configuration What's next If you need VMs in your Google Cloud VPC network to access Google APIs and services, see Configure Private Google Access for VPC .
- Specifications and requirements Private Google Access for on-premises hosts has the following requirements: You must direct Google APIs and services traffic sent by on-premises systems to the IP addresses associated with either the private.googleapis.com or the restricted.googleapis.com special domain names.
- Configure Private Google Access for on-premises hosts Private Google Access for on-premises hosts provides a way for on-premises systems to connect to Google APIs and services by routing traffic through a Cloud VPN tunnel or a VLAN attachment for Cloud Interconnect .
- Network configuration Private Google Access for on-premises hosts has specific network requirements for on-premises systems and for the VPC network through which the on-premises systems send traffic to Google APIs and services.

### "Configure Private Google Access \_|\_ Virtual Private Cloud \_|\_ Google\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-google-access](https://docs.cloud.google.com/vpc/docs/configure-private-google-access)
- Source ID: `site-docs-root-2`
- Final score: 303
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To list the subnets for a particular network, use the following command: gcloud compute networks subnets list \ --filter= NETWORK NAME Run the following command to disable Private Google Access: gcloud compute networks subnets update SUBNET NAME \ --region= REGION \ --no-enable-private-ip-google-access Run the following command to verify that Private Google Access is disabled: gcloud compute networks subnets describe SUBNET NAME \ --region= REGION \ --format="get(privateIpGoogleAccess)" In all above commands, replace the following with valid values: SUBNET NAME : the name of the subnet REGION : the region for the subnet NETWORK NAME : the name of the VPC network that contains the subnet What's next Configure Private Google Access for on-premises hosts Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To list the subnets for a particular network, use the following command: gcloud compute networks subnets list --filter= NETWORK NAME Run the following command to enable Private Google Access: gcloud compute networks subnets update SUBNET NAME \ --region= REGION \ --enable-private-ip-google-access Verify that Private Google Access is enabled by running this command: gcloud compute networks subnets describe SUBNET NAME \ --region= REGION \ --format="get(privateIpGoogleAccess)" In all above commands, replace the following with valid values: SUBNET NAME : the name of the subnet REGION : the region for the subnet NETWORK NAME : the name of the VPC network that contains the subnet When creating a new subnet , use the --enable-private-ip-google-access flag to enable Private Google Access: gcloud compute networks subnets create SUBNET NAME \ --region= REGION \ --network= NETWORK NAME \ --range= PRIMARY IPV4 RANGE \ [ --stack-type= STACK TYPE ] \ [ --ipv6-access-type= IPv6 ACCESS TYPE ] \ --enable-private-ip-google-access Replace the following with valid values: SUBNET NAME : the name of the subnet REGION : the region for the subnet NETWORK NAME : the name of the VPC network that contains the subnet PRIMARY IPV4 RANGE : the subnet's primary IPv4 address range.
- Domain names that match: accounts.google.com (only supports paths needed for OAuth authentication of service accounts; user account authentication is interactive and not supported) .aiplatform-notebook.cloud.google.com .aiplatform-notebook.googleusercontent.com appengine.google.com .appspot.com .backupdr.cloud.google.com backupdr.cloud.google.com .backupdr.googleusercontent.com backupdr.googleusercontent.com .cloudfunctions.net .cloudproxy.app .composer.cloud.google.com .composer.googleusercontent.com .datafusion.cloud.google.com .datafusion.googleusercontent.com .dataproc.cloud.google.com dataproc.cloud.google.com .dataproc.googleusercontent.com dataproc.googleusercontent.com .developerconnect.dev dl.google.com gcr.io or .gcr.io .googleapis.com .gke.goog gstatic.com or .gstatic.com .kernels.googleusercontent.com .ltsapis.goog .notebooks.byoid.googleusercontent.com .notebooks.cloud.google.com notebooks.cloud.google.com .notebooks.googleusercontent.com packages.cloud.google.com pkg.dev or .pkg.dev pki.goog or .pki.goog .run.app source.developers.google.com storage.cloud.google.com Use private.googleapis.com to access Google APIs and services by using a set of IP addresses only routable from within Google Cloud.
- Configure DNS for Cloud Storage custom domain names If you are using Cloud Storage buckets, and you send requests to a Cloud Storage custom domain name , configuring DNS records for the custom Cloud Storage domain name to point to the IP addresses for private.googleapis.com or restricted.googleapis.com is not sufficient to allow access to the Cloud Storage buckets.

### "Reasons for dropped test packets \_|\_ Network Intelligence Center - Connectivity\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/states/reasons-dropped-packets](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/states/reasons-dropped-packets)
- Source ID: `site-iam-reference`
- Final score: 299
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If the source endpoint is an on-premises endpoint, refer to the Private Google Access for on-premises hosts for detailed instructions.
- Recommendations If you try to access the destination endpoint by using its private IP address, make sure that you have configured a Serverless VPC Access connector for the App Engine standard environment version, the Cloud Run function, or the Cloud Run revision.
- Recommendations You can allow the Compute Engine VM instance to reach the external IP address of Google APIs and services in any of the following ways: Enable Private Google Access for the instance's subnet.
- Recommendations If you'd like to access the destination through the internet, make sure that the source Compute Engine instance has internet connectivity—for example, it has an external IP address or uses Cloud NAT — and use the destination endpoint's external IP address in the test.

### "Configuration analysis states \_|\_ Network Intelligence Center - Connectivity\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/state-tables](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/state-tables)
- Source ID: `site-iam-reference`
- Final score: 249
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Message Target INSTANCE A Compute Engine VM instance INTERNET The internet GOOGLE API A Google API GKE MASTER A GKE control plane CLOUD SQL INSTANCE A Cloud SQL instance PSC GOOGLE API All Google APIs and services that use Private Service Connect PSC VPC SC VPC Service Controls that use Private Service Connect PSC PUBLISHED SERVICE A published service that uses Private Service Connect Metadata The configuration analysis shows the following metadata for the final state.
- PRIVATE GOOGLE ACCESS DISALLOWED A VM instance with only an internal IP address tried to access a Google API or Google service, but Private Google Access was not enabled.
- The test target has not been dropped according to the known configuration, and the test packet has been forwarded to a network where Connectivity Tests has no visibility.
- NO EXTERNAL ADDRESS A VM instance with only an internal IP address tried to access external hosts through a route whose next hop is the default internet gateway.

