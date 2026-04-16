---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.459Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Private Service Connect access to supported global Google APIs via backends"
feature_slug: "private-service-connect-access-to-supported-global-google-apis-via-backends"
latest_feature_date: "2023-12-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/access-global-google-apis-backends"
  - "https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-apis"
  - "https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends"
  - "https://docs.cloud.google.com/vpc/docs/about-accessing-google-apis-endpoints"
keywords:
  - "private"
  - "connect"
  - "access"
  - "to"
  - "supported"
  - "global"
  - "apis"
  - "via"
---

# Private Service Connect access to supported global Google APIs via backends

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Private Service Connect supports accessing supported global Google APIs through backends.

## Extended Definition

Private Service Connect supports accessing supported global Google APIs through backends.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/access-global-google-apis-backends](https://docs.cloud.google.com/vpc/docs/access-global-google-apis-backends)
- [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-apis](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-apis)
- [https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends](https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends)
- [https://docs.cloud.google.com/vpc/docs/about-accessing-google-apis-endpoints](https://docs.cloud.google.com/vpc/docs/about-accessing-google-apis-endpoints)

## Supporting Pages

### "Access global Google APIs through backends \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/access-global-google-apis-backends](https://docs.cloud.google.com/vpc/docs/access-global-google-apis-backends)
- Source ID: `site-docs-root-2`
- Final score: 286
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Access global Google APIs through backends This page describes how to access global Google APIs by using Private Service Connect backends that are based on cross-region internal Application Load Balancers .
- You can configure custom hostnames, local to your Virtual Private Cloud (VPC) and connected on-premises networks, that route traffic to your chosen global Google APIs.
- Create a Private Service Connect NEG For each global Google API that you want to access, create a Private Service Connect NEG .
- Private Service Connect NEGs are regional, even when they are used to connect to global Google APIs.

### "Access Google APIs through endpoints \_|\_ Virtual Private Cloud \_|\_ Google\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-apis](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-apis)
- Source ID: `site-docs-root-2`
- Final score: 284
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Terraform You can use the following Terraform resources to create an endpoint: Global address Global forwarding rule resource "google compute global address" "default" { project = google compute network.network.project name = "global-psconnect-ip" address type = "INTERNAL" purpose = "PRIVATE SERVICE CONNECT" network = google compute network.network.id address = "10.3.0.5" } resource "google compute global forwarding rule" "default" { project = google compute network.network.project name = "globalrule" target = "all-apis" network = google compute network.network.id ip address = google compute global address.default.id load balancing scheme = "" } Verify that the endpoint is working Create a VM instance in the VPC network where Private Service Connect is configured.
- Task Roles Create an endpoint All of the following roles: Compute Network Admin ( roles/compute.networkAdmin ), Service Directory Editor ( roles/servicedirectory.editor ), and DNS Administrator ( roles/dns.admin ) Configure Private Google Access (optional) Compute Network Admin ( roles/compute.networkAdmin ) Before you begin Read About connecting to Google APIs by using endpoints for more information, including DNS configuration and limitations.
- Access the endpoint from on-premises hosts If your on-premises network is connected to a VPC network, you can use Private Service Connect to access Google APIs and services from on-premises hosts by using the internal IP address of the endpoint.
- Enable Private Google Access for a subnet VMs without an external IP address assigned must be connected to a subnet with Private Google Access enabled to access Google APIs and services using an endpoint.

### "Create a Private Service Connect backend \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends](https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends)
- Source ID: `site-docs-root-2`
- Final score: 284
- Re-rank relevance: N/A

Evidence snippets:
- For instructions that include creating a load balancer with a Private Service Connect backend, see the following: Create an internal Application Load Balancer to access Google APIs Create a global external Application Load Balancer to access a published service Roles The Compute Load Balancer Admin role ( roles/compute.loadBalancerAdmin ) contains the permission required to perform the tasks described in this guide.
- For complete instructions about creating a cross-region internal Application Load Balancer and a Private Service Connect NEG to access global Google APIs, see Access global Google APIs .
- This guide shows you how to add a Private Service Connect NEG to a load balancer to access either Google APIs or a published service.
- Create a Private Service Connect NEG When you create a NEG, you choose which type of target it connects to: A published service A regional Google API A global Google API Create a NEG to connect to a published service When you create a Private Service Connect NEG that points to a published service, you need the service attachment URI for the service.

### "About accessing Google APIs through endpoints \_|\_ Virtual Private Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/about-accessing-google-apis-endpoints](https://docs.cloud.google.com/vpc/docs/about-accessing-google-apis-endpoints)
- Source ID: `site-docs-root-2`
- Final score: 282
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Configuration Details Consumer configuration (endpoint) Global reachability Uses an internal global IP address Cloud Interconnect traffic Cloud VPN traffic Access through VPC Network Peering Connection propagation through NCC Automatic DNS configuration IP version IPv4 Producer Supported services Supported global Google APIs On-premises access Private Service Connect endpoints that you use to access Google APIs can be accessed from supported connected on-premises hosts.
- What's next Configure Private Service Connect to access Google APIs and services Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- About accessing Google APIs through endpoints This document provides an overview of Private Service Connect endpoints that are used to access Google APIs.
- Domain names that match: accounts.google.com (only supports paths needed for OAuth authentication of service accounts; user account authentication is interactive and not supported) .aiplatform-notebook.cloud.google.com .aiplatform-notebook.googleusercontent.com appengine.google.com .appspot.com .backupdr.cloud.google.com backupdr.cloud.google.com .backupdr.googleusercontent.com backupdr.googleusercontent.com .cloudfunctions.net .cloudproxy.app .composer.cloud.google.com .composer.googleusercontent.com .datafusion.cloud.google.com .datafusion.googleusercontent.com .dataproc.cloud.google.com dataproc.cloud.google.com .dataproc.googleusercontent.com dataproc.googleusercontent.com .developerconnect.dev dl.google.com gcr.io or .gcr.io .googleapis.com .gke.goog gstatic.com or .gstatic.com .kernels.googleusercontent.com .ltsapis.goog .notebooks.byoid.googleusercontent.com .notebooks.cloud.google.com notebooks.cloud.google.com .notebooks.googleusercontent.com packages.cloud.google.com pkg.dev or .pkg.dev pki.goog or .pki.goog .run.app source.developers.google.com storage.cloud.google.com Choose all-apis under these circumstances: You don't use VPC Service Controls.

