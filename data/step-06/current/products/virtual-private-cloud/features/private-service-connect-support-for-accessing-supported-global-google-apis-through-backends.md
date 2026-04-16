---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.445Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Private Service Connect support for accessing supported global Google APIs through backends"
feature_slug: "private-service-connect-support-for-accessing-supported-global-google-apis-through-backends"
latest_feature_date: "2025-02-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/about-accessing-google-apis-endpoints"
  - "https://docs.cloud.google.com/vpc/docs/about-accessing-regional-google-apis-endpoints"
  - "https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-apis"
  - "https://docs.cloud.google.com/vpc/docs/access-global-google-apis-backends"
keywords:
  - "private"
  - "connect"
  - "for"
  - "accessing"
  - "supported"
  - "global"
  - "apis"
  - "through"
---

# Private Service Connect support for accessing supported global Google APIs through backends

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Private Service Connect now supports accessing supported global Google APIs via private backends in generally available service.

## Extended Definition

Private Service Connect now supports accessing supported global Google APIs via private backends in generally available service.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/about-accessing-google-apis-endpoints](https://docs.cloud.google.com/vpc/docs/about-accessing-google-apis-endpoints)
- [https://docs.cloud.google.com/vpc/docs/about-accessing-regional-google-apis-endpoints](https://docs.cloud.google.com/vpc/docs/about-accessing-regional-google-apis-endpoints)
- [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-apis](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-apis)
- [https://docs.cloud.google.com/vpc/docs/access-global-google-apis-backends](https://docs.cloud.google.com/vpc/docs/access-global-google-apis-backends)

## Supporting Pages

### "About accessing Google APIs through endpoints \_|\_ Virtual Private Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/about-accessing-google-apis-endpoints](https://docs.cloud.google.com/vpc/docs/about-accessing-google-apis-endpoints)
- Source ID: `site-docs-root-2`
- Final score: 304
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Configuration Details Consumer configuration (endpoint) Global reachability Uses an internal global IP address Cloud Interconnect traffic Cloud VPN traffic Access through VPC Network Peering Connection propagation through NCC Automatic DNS configuration IP version IPv4 Producer Supported services Supported global Google APIs On-premises access Private Service Connect endpoints that you use to access Google APIs can be accessed from supported connected on-premises hosts.
- Quotas The number of Private Service Connect endpoints that you can create for accessing Google APIs is controlled by the PSC Google APIs Forwarding Rules per VPC Network quota.
- About accessing Google APIs through endpoints This document provides an overview of Private Service Connect endpoints that are used to access Google APIs.
- Domain names that match: accounts.google.com (only supports paths needed for OAuth authentication of service accounts; user account authentication is interactive and not supported) .aiplatform-notebook.cloud.google.com .aiplatform-notebook.googleusercontent.com appengine.google.com .appspot.com .backupdr.cloud.google.com backupdr.cloud.google.com .backupdr.googleusercontent.com backupdr.googleusercontent.com .cloudfunctions.net .cloudproxy.app .composer.cloud.google.com .composer.googleusercontent.com .datafusion.cloud.google.com .datafusion.googleusercontent.com .dataproc.cloud.google.com dataproc.cloud.google.com .dataproc.googleusercontent.com dataproc.googleusercontent.com .developerconnect.dev dl.google.com gcr.io or .gcr.io .googleapis.com .gke.goog gstatic.com or .gstatic.com .kernels.googleusercontent.com .ltsapis.goog .notebooks.byoid.googleusercontent.com .notebooks.cloud.google.com notebooks.cloud.google.com .notebooks.googleusercontent.com packages.cloud.google.com pkg.dev or .pkg.dev pki.goog or .pki.goog .run.app source.developers.google.com storage.cloud.google.com Choose all-apis under these circumstances: You don't use VPC Service Controls.

### "About accessing regional endpoints through Private Service Connect endpoints\

- URL: [https://docs.cloud.google.com/vpc/docs/about-accessing-regional-google-apis-endpoints](https://docs.cloud.google.com/vpc/docs/about-accessing-regional-google-apis-endpoints)
- Source ID: `site-docs-root-2`
- Final score: 292
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- About accessing regional endpoints through Private Service Connect endpoints This page provides an overview of using Private Service Connect endpoints to access regional endpoints for supported Google APIs in supported regions .
- Configuration Details Consumer configuration (endpoint) Global reachability If global access is enabled Cloud Interconnect traffic Cloud VPN traffic Access through VPC Network Peering Connection propagation through NCC DNS configuration Manual DNS configuration IP version IPv4 or IPv6 Producer Supported services Supported regional Google APIs Specifications Public hostnames for regional endpoints have the following format: SERVICE .
- An endpoint lets service consumers send traffic from the consumer's VPC network to regional service endpoints for supported Google APIs through a service attachment that is managed by Google (click to enlarge).
- Features and compatibility This table summarizes the features that are supported by endpoints that are used to access regional endpoints for Google APIs.

### "Access Google APIs through endpoints \_|\_ Virtual Private Cloud \_|\_ Google\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-apis](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-apis)
- Source ID: `site-docs-root-2`
- Final score: 272
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Terraform You can use the following Terraform resources to create an endpoint: Global address Global forwarding rule resource "google compute global address" "default" { project = google compute network.network.project name = "global-psconnect-ip" address type = "INTERNAL" purpose = "PRIVATE SERVICE CONNECT" network = google compute network.network.id address = "10.3.0.5" } resource "google compute global forwarding rule" "default" { project = google compute network.network.project name = "globalrule" target = "all-apis" network = google compute network.network.id ip address = google compute global address.default.id load balancing scheme = "" } Verify that the endpoint is working Create a VM instance in the VPC network where Private Service Connect is configured.
- Task Roles Create an endpoint All of the following roles: Compute Network Admin ( roles/compute.networkAdmin ), Service Directory Editor ( roles/servicedirectory.editor ), and DNS Administrator ( roles/dns.admin ) Configure Private Google Access (optional) Compute Network Admin ( roles/compute.networkAdmin ) Before you begin Read About connecting to Google APIs by using endpoints for more information, including DNS configuration and limitations.
- Create a forwarding rule to connect the endpoint to Google APIs and services. gcloud compute forwarding-rules create ENDPOINT NAME \ --global \ --network= NETWORK NAME \ --address= ADDRESS NAME \ --target-google-apis-bundle= API BUNDLE \ [ --service-directory-registration= REGION NAMESPACE URI ] Replace the following: ENDPOINT NAME : the name to assign to the endpoint.
- POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/addresses { "name": ADDRESS NAME , "address": ENDPOINT IP , "addressType": "INTERNAL", "purpose": PRIVATE SERVICE CONNECT, "network": NETWORK URL } Replace the following: PROJECT ID : your project ID.

### "Access global Google APIs through backends \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/access-global-google-apis-backends](https://docs.cloud.google.com/vpc/docs/access-global-google-apis-backends)
- Source ID: `site-docs-root-2`
- Final score: 268
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Access global Google APIs through backends This page describes how to access global Google APIs by using Private Service Connect backends that are based on cross-region internal Application Load Balancers .
- You can configure custom hostnames, local to your Virtual Private Cloud (VPC) and connected on-premises networks, that route traffic to your chosen global Google APIs.
- This configuration lets you target one or more individual global Google APIs while applying the visibility and control that Private Service Connect backends provide.
- For example, say you have created the following configurations: A Private Service Connect NEG that uses target service pubsub.googleapis.com .

