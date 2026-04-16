---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:24.681Z"
product_name: "Cloud DNS"
product_slug: "cloud-dns"
feature_name: "Cloud DNS outbound FQDN forwarding target"
feature_slug: "cloud-dns-outbound-fqdn-forwarding-target"
latest_feature_date: "2025-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dns/docs/troubleshooting"
  - "https://docs.cloud.google.com/dns/docs/overview"
  - "https://docs.cloud.google.com/dns/docs/policies"
  - "https://docs.cloud.google.com/dns/docs/key-terms"
keywords:
  - "dns"
  - "outbound"
  - "fqdn"
  - "forwarding"
  - "target"
  - "now"
  - "supports"
  - "fully"
---

# Cloud DNS outbound FQDN forwarding target

Product: Cloud DNS
Coverage: MEDIUM

## Step 02 Summary

Cloud DNS outbound DNS forwarding now supports a fully qualified domain name (FQDN) forwarding target; Cloud DNS introduces outbound DNS forwarding support for fully qualified domain name (FQDN) forwarding targets.

## Extended Definition

Cloud DNS outbound DNS forwarding now supports a fully qualified domain name (FQDN) forwarding target; Cloud DNS introduces outbound DNS forwarding support for fully qualified domain name (FQDN) forwarding targets.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dns/docs/troubleshooting](https://docs.cloud.google.com/dns/docs/troubleshooting)
- [https://docs.cloud.google.com/dns/docs/overview](https://docs.cloud.google.com/dns/docs/overview)
- [https://docs.cloud.google.com/dns/docs/policies](https://docs.cloud.google.com/dns/docs/policies)
- [https://docs.cloud.google.com/dns/docs/key-terms](https://docs.cloud.google.com/dns/docs/key-terms)

## Supporting Pages

### Troubleshoot Cloud DNS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dns/docs/troubleshooting](https://docs.cloud.google.com/dns/docs/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Outbound forwarding to a name server that uses a non-RFC 1918 IP address fails By default, Cloud DNS uses standard routing, which routes queries through the public internet when the target name server has a non-RFC 1918 IP address.
- This limitation applies even if there is a VPC route for the target name server; routes for non-RFC 1918 addresses have no effect on Cloud DNS's outbound forwarding behavior when standard routing is configured.
- Forwarding zones (outbound forwarding) not working First make sure that you can successfully query and resolve the DNS name from within an authorized VPC network .
- Additionally, if the forwarding target is an on-premises system, be aware that the routes configured for that path can be custom dynamic routes or custom static routes, with the important exception that custom static routes with network tags are not valid for forwarding DNS queries .

### Cloud DNS overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dns/docs/overview](https://docs.cloud.google.com/dns/docs/overview)
- Source ID: `site-docs-root`
- Final score: 171
- Re-rank relevance: N/A

Evidence snippets:
- Outbound forwarded queries might sometimes result in SERVFAIL errors if the forwarding targets are not reachable or if they don't respond quickly enough.
- The Cloud DNS control plane uses the forwarding target selection order to select a forwarding target.
- DNS forwarding methods Google Cloud offers inbound and outbound DNS forwarding for private zones.
- You can simultaneously configure inbound and outbound DNS forwarding for a VPC network.

### Configure DNS server policies \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dns/docs/policies](https://docs.cloud.google.com/dns/docs/policies)
- Source ID: `site-docs-root`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- Click Create . gcloud To create an outbound DNS server policy, run the dns policies create command: gcloud dns policies create NAME \ --description=" DESCRIPTION " \ --networks=" VPC NETWORK LIST " \ --alternative-name-servers=" ALTERNATIVE NAMESERVER LIST " \ --private-alternative-name-servers=" PRIVATE ALTERNATIVE NAMESERVER LIST " Replace the following: NAME : a name for the policy DESCRIPTION : a description for the policy VPC NETWORK LIST : a comma-delimited list of VPC networks that query the alternative name servers ALTERNATIVE NAMESERVER LIST : a comma-delimited list of IP addresses that you can use as alternative name servers PRIVATE ALTERNATIVE NAMESERVER LIST : a comma-delimited list of IP addresses that you can use as alternative name servers, accessed by using private routing Terraform resource "google dns policy" "default" { name = "example-outbound-policy" alternative name server config { target name servers { ipv4 address = "172.16.1.10" forwarding path = "private" } target name servers { ipv4 address = "172.16.1.20" } } networks { network url = google compute network.default.id } } resource "google compute network" "default" { name = "network" auto create subnetworks = false } Create a DNS server policy for both inbound and outbound forwarding Console In the Google Cloud console, open the Cloud DNS server policies page.
- Click Create . gcloud To create a DNS server policy for both inbound and outbound forwarding, run the dns policies create command: gcloud dns policies create NAME \ --description=" DESCRIPTION " \ --networks=" VPC NETWORK LIST " \ --alternative-name-servers=" ALTERNATIVE NAMESERVER LIST " \ --private-alternative-name-servers=" PRIVATE ALTERNATIVE NAMESERVER LIST " \ --enable-inbound-forwarding Replace the following: NAME : a name for the policy DESCRIPTION : a description for the policy VPC NETWORK LIST : a comma-delimited list of VPC networks where inbound forwarding addresses must be created and that must query the alternative name servers ALTERNATIVE NAMESERVER LIST : a comma-delimited list of IP addresses that you can use as alternative name servers PRIVATE ALTERNATIVE NAMESERVER LIST : a comma-delimited list of IP addresses that you can use as alternative name servers, accessed by using private routing.
- Terraform resource "google dns policy" "example policy" { name = "example-policy" enable inbound forwarding = true enable logging = true alternative name server config { target name servers { ipv4 address = "172.16.1.10" forwarding path = "private" } target name servers { ipv4 address = "172.16.1.20" } } networks { network url = google compute network.network 1.id } networks { network url = google compute network.network 2.id } } resource "google compute network" "network 1" { name = "network-1" auto create subnetworks = false } resource "google compute network" "network 2" { name = "network-2" auto create subnetworks = false } List inbound forwarder entry points When an inbound DNS server policy applies to a VPC network, Cloud DNS creates a set of regional internal IP addresses that serve as destinations to which your on-premises systems or name resolvers can send DNS queries.
- Click Create . gcloud To create an inbound DNS server policy, run the dns policies create command: gcloud dns policies create NAME \ --description=" DESCRIPTION " \ --networks=" VPC NETWORK LIST " \ --enable-inbound-forwarding Replace the following: NAME : a name for the policy DESCRIPTION : a description for the policy VPC NETWORK LIST : a comma-delimited list of VPC networks that the DNS server policy must bind to Terraform resource "google dns policy" "default" { name = "example-inbound-policy" enable inbound forwarding = true networks { network url = google compute network.default.id } } resource "google compute network" "default" { name = "network" auto create subnetworks = false } Create an outbound DNS server policy To specify a list of alternative name servers for a VPC network, you can create an outbound DNS server policy.

### Key terms \_|\_ Cloud DNS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dns/docs/key-terms](https://docs.cloud.google.com/dns/docs/key-terms)
- Source ID: `site-iam-reference`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- Cloud DNS also supports outbound forwarding to non-RFC 1918 addresses by privately routing those addresses within Google Cloud.
- For example, in the following SOA record, you can change the serial number directly from the Google Cloud console by entering the desired value into the third space-delimited field of the record: ns-gcp-private.googledomains.com. cloud-dns-hostmaster.google.com. [serial number] 21600 3600 259200 300` DNS server policy A DNS server policy lets you access name resolution services provided by Google Cloud in a VPC network with inbound forwarding, or supersede the VPC name resolution order with an outbound server policy.
- When you create a forwarding zone , you cannot add records to the forwarding zone directly; the data comes from one or more configured target name servers or resolvers. peering zone A peering zone is a type of Cloud DNS managed private zone that follows the name resolution order of another VPC network.
- For details, see Forwarding targets and routing methods . forwarding zone A forwarding zone is a type of Cloud DNS managed private zone that forwards requests for that zone to the IP addresses of its forwarding targets.

