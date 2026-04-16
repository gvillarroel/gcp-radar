---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.505Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Private Google Access"
feature_slug: "private-google-access"
latest_feature_date: "2017-05-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/configure-private-google-access"
  - "https://docs.cloud.google.com/vpc/docs/private-google-access"
  - "https://docs.cloud.google.com/vpc/docs/configure-private-google-access-hybrid"
  - "https://docs.cloud.google.com/vpc/docs/quota"
keywords:
  - "private"
  - "access"
  - "allows"
  - "compute"
  - "engine"
  - "vm"
  - "instances"
  - "to"
---

# Private Google Access

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Private Google Access allows Compute Engine VM instances to access Google APIs using internal IP addresses only; Private Google Access allows Compute Engine VM instances to access Google APIs using internal IP addresses only.

## Extended Definition

Private Google Access allows Compute Engine VM instances to access Google APIs using internal IP addresses only; Private Google Access allows Compute Engine VM instances to access Google APIs using internal IP addresses only.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/configure-private-google-access](https://docs.cloud.google.com/vpc/docs/configure-private-google-access)
- [https://docs.cloud.google.com/vpc/docs/private-google-access](https://docs.cloud.google.com/vpc/docs/private-google-access)
- [https://docs.cloud.google.com/vpc/docs/configure-private-google-access-hybrid](https://docs.cloud.google.com/vpc/docs/configure-private-google-access-hybrid)
- [https://docs.cloud.google.com/vpc/docs/quota](https://docs.cloud.google.com/vpc/docs/quota)

## Supporting Pages

### "Configure Private Google Access \_|\_ Virtual Private Cloud \_|\_ Google\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-google-access](https://docs.cloud.google.com/vpc/docs/configure-private-google-access)
- Source ID: `site-docs-root-2`
- Final score: 331
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Private Google Access also allows access to the external IP addresses used by App Engine, including third-party App Engine-based services.
- To list the subnets for a particular network, use the following command: gcloud compute networks subnets list --filter= NETWORK NAME Run the following command to enable Private Google Access: gcloud compute networks subnets update SUBNET NAME \ --region= REGION \ --enable-private-ip-google-access Verify that Private Google Access is enabled by running this command: gcloud compute networks subnets describe SUBNET NAME \ --region= REGION \ --format="get(privateIpGoogleAccess)" In all above commands, replace the following with valid values: SUBNET NAME : the name of the subnet REGION : the region for the subnet NETWORK NAME : the name of the VPC network that contains the subnet When creating a new subnet , use the --enable-private-ip-google-access flag to enable Private Google Access: gcloud compute networks subnets create SUBNET NAME \ --region= REGION \ --network= NETWORK NAME \ --range= PRIMARY IPV4 RANGE \ [ --stack-type= STACK TYPE ] \ [ --ipv6-access-type= IPv6 ACCESS TYPE ] \ --enable-private-ip-google-access Replace the following with valid values: SUBNET NAME : the name of the subnet REGION : the region for the subnet NETWORK NAME : the name of the VPC network that contains the subnet PRIMARY IPV4 RANGE : the subnet's primary IPv4 address range.
- Domain names that match: accounts.google.com (only supports paths needed for OAuth authentication of service accounts; user account authentication is interactive and not supported) .aiplatform-notebook.cloud.google.com .aiplatform-notebook.googleusercontent.com appengine.google.com .appspot.com .backupdr.cloud.google.com backupdr.cloud.google.com .backupdr.googleusercontent.com backupdr.googleusercontent.com .cloudfunctions.net .cloudproxy.app .composer.cloud.google.com .composer.googleusercontent.com .datafusion.cloud.google.com .datafusion.googleusercontent.com .dataproc.cloud.google.com dataproc.cloud.google.com .dataproc.googleusercontent.com dataproc.googleusercontent.com .developerconnect.dev dl.google.com gcr.io or .gcr.io .googleapis.com .gke.goog gstatic.com or .gstatic.com .kernels.googleusercontent.com .ltsapis.goog .notebooks.byoid.googleusercontent.com .notebooks.cloud.google.com notebooks.cloud.google.com .notebooks.googleusercontent.com packages.cloud.google.com pkg.dev or .pkg.dev pki.goog or .pki.goog .run.app source.developers.google.com storage.cloud.google.com Use private.googleapis.com to access Google APIs and services by using a set of IP addresses only routable from within Google Cloud.
- To list the subnets for a particular network, use the following command: gcloud compute networks subnets list \ --filter= NETWORK NAME Run the following command to disable Private Google Access: gcloud compute networks subnets update SUBNET NAME \ --region= REGION \ --no-enable-private-ip-google-access Run the following command to verify that Private Google Access is disabled: gcloud compute networks subnets describe SUBNET NAME \ --region= REGION \ --format="get(privateIpGoogleAccess)" In all above commands, replace the following with valid values: SUBNET NAME : the name of the subnet REGION : the region for the subnet NETWORK NAME : the name of the VPC network that contains the subnet What's next Configure Private Google Access for on-premises hosts Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Private Google Access \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/private-google-access](https://docs.cloud.google.com/vpc/docs/private-google-access)
- Source ID: `site-docs-root`
- Final score: 275
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- VM A1 can access Google APIs and services, including Cloud Storage, because its network interface is located in subnet-a , which has Private Google Access enabled.
- If you disable Private Google Access, the VM instances can no longer reach Google APIs and services; they can only send traffic within the VPC network.
- Private Google Access VM instances that only have internal IP addresses (no external IP addresses) can use Private Google Access.
- Other Google services are hosted in VPC networks and can be accessed by using the following methods: To connect to services that are published using the Service Networking API , see private services access .

### "Configure Private Google Access for on-premises hosts \_|\_ Virtual Private\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-google-access-hybrid](https://docs.cloud.google.com/vpc/docs/configure-private-google-access-hybrid)
- Source ID: `site-docs-root-2`
- Final score: 271
- Re-rank relevance: N/A

Evidence snippets:
- For private.googleapis.com : For IPv4 connectivity: 199.36.153.8/30 For both IPv4 and IPv6 connectivity: 199.36.153.8/30,2600:2d00:0002:2000::/56 For restricted.googleapis.com : For IPv4 connectivity: 199.36.153.4/30 For both IPv4 and IPv6 connectivity: 199.36.153.4/30,2600:2d00:0002:1000::/56 Firewall considerations Google Cloud firewall rules in the VPC network to which your on-premises network connects have no effect upon: Packets sent through a Cloud VPN tunnel connected to the VPC network Packets sent through a VLAN attachment connected to the VPC network Incoming packets to Cloud DNS inbound forwarder IP addresses in the VPC network You should ensure that the firewall configuration of on-premises systems allows outbound traffic to and established responses from the appropriate IP addresses: If you use private.googleapis.com : For IPv4 connectivity: 199.36.153.8/30 For IPv6 connectivity: 2600:2d00:0002:2000::/56 If you use restricted.googleapis.com : For IPv4 connectivity: 199.36.153.4/30 For IPv6 connectivity: 2600:2d00:0002:1000::/56 Any Cloud DNS inbound forwarder IP addresses, if you're using Cloud DNS for the DNS configuration What's next If you need VMs in your Google Cloud VPC network to access Google APIs and services, see Configure Private Google Access for VPC .
- Domain names that match: accounts.google.com (only supports paths needed for OAuth authentication of service accounts; user account authentication is interactive and not supported) .aiplatform-notebook.cloud.google.com .aiplatform-notebook.googleusercontent.com appengine.google.com .appspot.com .backupdr.cloud.google.com backupdr.cloud.google.com .backupdr.googleusercontent.com backupdr.googleusercontent.com .cloudfunctions.net .cloudproxy.app .composer.cloud.google.com .composer.googleusercontent.com .datafusion.cloud.google.com .datafusion.googleusercontent.com .dataproc.cloud.google.com dataproc.cloud.google.com .dataproc.googleusercontent.com dataproc.googleusercontent.com .developerconnect.dev dl.google.com gcr.io or .gcr.io .googleapis.com .gke.goog gstatic.com or .gstatic.com .kernels.googleusercontent.com .ltsapis.goog .notebooks.byoid.googleusercontent.com .notebooks.cloud.google.com notebooks.cloud.google.com .notebooks.googleusercontent.com packages.cloud.google.com pkg.dev or .pkg.dev pki.goog or .pki.goog .run.app source.developers.google.com storage.cloud.google.com Use private.googleapis.com to access Google APIs and services using a set of IP addresses only routable from within Google Cloud.
- Look for a route whose destination range matches: 199.36.153.8/30 if you chose private.googleapis.com 199.36.153.4/30 if you chose restricted.googleapis.com gcloud Use the following gcloud command, replacing NETWORK NAME with the name of the VPC network to which your on-premises network connects: gcloud compute routes list \ --filter="default-internet-gateway NETWORK NAME " Routes are listed in table format unless you customize the command with the --format flag.
- Configure DNS for Cloud Storage custom domain names If you are using Cloud Storage buckets, and you send requests to a Cloud Storage custom domain name , configuring DNS records for the custom Cloud Storage domain name to point to the IP addresses for private.googleapis.com or restricted.googleapis.com is not sufficient to allow access to the Cloud Storage buckets.

### Quotas and limits \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/quota](https://docs.cloud.google.com/vpc/docs/quota)
- Source ID: `site-docs-root`
- Final score: 249
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Quota name: INSTANCES PER NETWORK GLOBAL Available metrics: compute.googleapis.com/quota/instances per vpc network/limit compute.googleapis.com/quota/instances per vpc network/usage compute.googleapis.com/quota/instances per vpc network/exceeded IP aliases per VPC network The total number of alias IP ranges used by VM network interfaces (NICs) in the VPC network.
- Maximum egress data rate to an external IP address destination all flows: about 7 Gbps (gigabits per second) sustained or 25 Gbps with per VM Tier 1 networking performance single flow: 3 Gbps sustained See Egress to external IP address destinations in the Compute Engine documentation.
- Inter-region network egress bandwidth (Mbps) from Compute instances Total egress bandwidth from Google Cloud VMs in one region to destinations that are routable within a VPC network (using next hops that are not the default internet gateway).
- Maximum egress data rate to an internal IP address destination Depends on the machine type of the VM See Egress to internal IP address destinations and machine types in the Compute Engine documentation.

