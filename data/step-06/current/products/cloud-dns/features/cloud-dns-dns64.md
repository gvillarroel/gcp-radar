---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:24.680Z"
product_name: "Cloud DNS"
product_slug: "cloud-dns"
feature_name: "Cloud DNS DNS64"
feature_slug: "cloud-dns-dns64"
latest_feature_date: "2025-08-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dns/docs/overview"
  - "https://docs.cloud.google.com/dns/docs/configure-dns64"
  - "https://docs.cloud.google.com/dns/docs/policies"
  - "https://docs.cloud.google.com/dns/docs/set-up-dns-records-domain-name"
keywords:
  - "dns"
  - "dns64"
  - "provides"
  - "synthesized"
  - "ipv6"
  - "addresses"
  - "for"
  - "ipv4"
---

# Cloud DNS DNS64

Product: Cloud DNS
Coverage: MEDIUM

## Step 02 Summary

Cloud DNS DNS64 provides synthesized IPv6 addresses for IPv4 destinations and supports DNS64 server policies; Cloud DNS adds a DNS64 preview feature that synthesizes IPv6 addresses for IPv4 destinations.

## Extended Definition

Cloud DNS DNS64 provides synthesized IPv6 addresses for IPv4 destinations and supports DNS64 server policies; Cloud DNS adds a DNS64 preview feature that synthesizes IPv6 addresses for IPv4 destinations.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dns/docs/overview](https://docs.cloud.google.com/dns/docs/overview)
- [https://docs.cloud.google.com/dns/docs/configure-dns64](https://docs.cloud.google.com/dns/docs/configure-dns64)
- [https://docs.cloud.google.com/dns/docs/policies](https://docs.cloud.google.com/dns/docs/policies)
- [https://docs.cloud.google.com/dns/docs/set-up-dns-records-domain-name](https://docs.cloud.google.com/dns/docs/set-up-dns-records-domain-name)

## Supporting Pages

### Cloud DNS overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dns/docs/overview](https://docs.cloud.google.com/dns/docs/overview)
- Source ID: `site-docs-root`
- Final score: 265
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- DNS64 provides a synthesized IPv6 address for each IPv4 destination.
- You can use DNS64 in the following scenarios: Adhere to mandates requiring a shift to IPv6 addresses without allocating IPv4 addresses.
- DNS64 translates an IPv4 address to a synthesized IPv6 address (click to enlarge).
- For example, if the IPv4 address is 32.34.50.60 , the resulting synthesized IPv6 address is 64:ff9b::2022:323c , where 2022:323c is the hexadecimal equivalent of the IPv4 address.

### Configure DNS64 \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dns/docs/configure-dns64](https://docs.cloud.google.com/dns/docs/configure-dns64)
- Source ID: `site-iam-reference`
- Final score: 231
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud DNS then creates IPv6 addresses for the IPv4 addresses in the A record, by using the 64:ff9b::/96 IPv6 prefix.
- To create a DNS64 server policy, follow these steps. gcloud To create a DNS64 server policy, run the gcloud dns policies create command : gcloud dns policies create NAME \ --description= DESCRIPTION \ --networks= VPC NETWORK LIST \ --enable-dns64-all-queries Replace the following: NAME : a name for the policy DESCRIPTION : a description for the policy VPC NETWORK LIST : a comma-delimited list of VPC networks that the DNS server policy binds to Terraform resource "google dns policy" "default" { name = " NAME " dns64 config { scope { all queries = true } } alternative name server config { target name servers { ipv4 address = " PRIVATE IP ADDRESS " forwarding path = "private" } target name servers { ipv4 address = " PUBLIC IP ADDRESS " } } networks { network url = google compute network.default.id } } resource "google compute network" "default" { name = "network" auto create subnetworks = false } Replace the following: NAME : a name for the outbound DNS64 policy PRIVATE IP ADDRESS : the IP address of an alternative name server using a private forwarding path PUBLIC IP ADDRESS : the IP address of a different alternative name server API To create a DNS64 server policy, use the policies.create method : POST https://dns.googleapis.com/dns/v1/projects/ PROJECT ID /policies { "kind": "dns#policy", "networks": [ { "kind": "dns#policyNetwork", "networkUrl": " NETWORK URL " } ], "dns64Config": { "scope": { allQueries: true, } } } Replace the following: PROJECT ID : your project ID.
- Permissions dns.policies.create to create a DNS64 server policy dns.policies.delete to delete a DNS64 server policy dns.policies.get to fetch the current configuration of a DNS64 server policy dns.policies.list to list all DNS server policies associated with a project dns.policies.update to update a DNS64 server policy dns.managedZones.list to list managed zones Roles DNS Administrator ( roles/dns.admin ) Create a DNS64 server policy Create a DNS64 server policy to enable communication between IPv6-only workloads and IPv4-only destinations.
- Before you begin DNS64 server policies don't apply to dual-stack virtual machine (VM) instances, IPv4-only VM instances, serverless workloads, or requests sent to endpoints created by an inbound DNS server policy .

### Configure DNS server policies \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dns/docs/policies](https://docs.cloud.google.com/dns/docs/policies)
- Source ID: `site-docs-root`
- Final score: 183
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Click Create . gcloud To create an outbound DNS server policy, run the dns policies create command: gcloud dns policies create NAME \ --description=" DESCRIPTION " \ --networks=" VPC NETWORK LIST " \ --alternative-name-servers=" ALTERNATIVE NAMESERVER LIST " \ --private-alternative-name-servers=" PRIVATE ALTERNATIVE NAMESERVER LIST " Replace the following: NAME : a name for the policy DESCRIPTION : a description for the policy VPC NETWORK LIST : a comma-delimited list of VPC networks that query the alternative name servers ALTERNATIVE NAMESERVER LIST : a comma-delimited list of IP addresses that you can use as alternative name servers PRIVATE ALTERNATIVE NAMESERVER LIST : a comma-delimited list of IP addresses that you can use as alternative name servers, accessed by using private routing Terraform resource "google dns policy" "default" { name = "example-outbound-policy" alternative name server config { target name servers { ipv4 address = "172.16.1.10" forwarding path = "private" } target name servers { ipv4 address = "172.16.1.20" } } networks { network url = google compute network.default.id } } resource "google compute network" "default" { name = "network" auto create subnetworks = false } Create a DNS server policy for both inbound and outbound forwarding Console In the Google Cloud console, open the Cloud DNS server policies page.
- Terraform resource "google dns policy" "example policy" { name = "example-policy" enable inbound forwarding = true enable logging = true alternative name server config { target name servers { ipv4 address = "172.16.1.10" forwarding path = "private" } target name servers { ipv4 address = "172.16.1.20" } } networks { network url = google compute network.network 1.id } networks { network url = google compute network.network 2.id } } resource "google compute network" "network 1" { name = "network-1" auto create subnetworks = false } resource "google compute network" "network 2" { name = "network-2" auto create subnetworks = false } List inbound forwarder entry points When an inbound DNS server policy applies to a VPC network, Cloud DNS creates a set of regional internal IP addresses that serve as destinations to which your on-premises systems or name resolvers can send DNS queries.
- Cloud DNS creates a set of inbound forwarder IP addresses from the primary IPv4 address ranges of subnets in each VPC network to which the policy applies.
- You can optionally enable DNS64 to enable communication between IPv6-only workloads and IPv4-only destinations.

### "Quickstart: Set up DNS records for a domain name with Cloud DNS \_|\_ Google\

- URL: [https://docs.cloud.google.com/dns/docs/set-up-dns-records-domain-name](https://docs.cloud.google.com/dns/docs/set-up-dns-records-domain-name)
- Source ID: `site-docs-reference`
- Final score: 164
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For IPv4 Address or IPv6 Address , enter the IP address that you want to use with this domain.
- To follow step-by-step guidance for this task directly in the Google Cloud console, click Guide me : Guide me For more information, see the following resources: For Cloud DNS concepts, see the Cloud DNS overview .
- Make sure that you have the following role or roles on the project: Service Usage Admin, DNS Administrator Check for the roles In the Google Cloud console, go to the IAM page.
- Make sure that you have the following role or roles on the project: Service Usage Admin, DNS Administrator Check for the roles In the Google Cloud console, go to the IAM page.

