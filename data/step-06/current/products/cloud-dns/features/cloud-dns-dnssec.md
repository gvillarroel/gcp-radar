---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:24.696Z"
product_name: "Cloud DNS"
product_slug: "cloud-dns"
feature_name: "Cloud DNS DNSSEC"
feature_slug: "cloud-dns-dnssec"
latest_feature_date: "2018-05-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dns/docs/dnssec"
  - "https://docs.cloud.google.com/dns/docs/dnssec-advanced"
  - "https://docs.cloud.google.com/dns/docs/dnssec-migrate"
  - "https://docs.cloud.google.com/dns/docs/tutorials/create-domain-tutorial"
keywords:
  - "dns"
  - "dnssec"
  - "adds"
  - "authentication"
  - "to"
  - "protect"
  - "domain"
  - "responses"
---

# Cloud DNS DNSSEC

Product: Cloud DNS
Coverage: MEDIUM

## Step 02 Summary

Cloud DNS DNSSEC adds DNS authentication support to protect domain responses from tampering; Cloud DNS DNSSEC adds DNS authentication support to protect domain responses from tampering.

## Extended Definition

Cloud DNS DNSSEC adds DNS authentication support to protect domain responses from tampering; Cloud DNS DNSSEC adds DNS authentication support to protect domain responses from tampering.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dns/docs/dnssec](https://docs.cloud.google.com/dns/docs/dnssec)
- [https://docs.cloud.google.com/dns/docs/dnssec-advanced](https://docs.cloud.google.com/dns/docs/dnssec-advanced)
- [https://docs.cloud.google.com/dns/docs/dnssec-migrate](https://docs.cloud.google.com/dns/docs/dnssec-migrate)
- [https://docs.cloud.google.com/dns/docs/tutorials/create-domain-tutorial](https://docs.cloud.google.com/dns/docs/tutorials/create-domain-tutorial)

## Supporting Pages

### DNS Security Extensions (DNSSEC) overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dns/docs/dnssec](https://docs.cloud.google.com/dns/docs/dnssec)
- Source ID: `site-docs-root`
- Final score: 235
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Domain Name System Security Extensions (DNSSEC) is a feature of the Domain Name System (DNS) that authenticates responses to domain name lookups.
- To protect domains from spoofing and poisoning attacks, enable and configure DNSSEC in the following places: The DNS zone.
- Before enabling DNSSEC, check the following resources: The DNSSEC documentation for both your domain registrar and TLD registry The Google Cloud community tutorial's domain registrar-specific instructions The ICANN list of domain registrar DNSSEC support to confirm DNSSEC support for your domain.
- Record set types enhanced by DNSSEC For more information about record set types and other record types, see the following resources: To control which public certificate authorities (CAs) can generate TLS or other certificates for your domain, see CAA records .

### Use advanced DNSSEC \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dns/docs/dnssec-advanced](https://docs.cloud.google.com/dns/docs/dnssec-advanced)
- Source ID: `site-iam-reference`
- Final score: 231
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use new DNS record types with DNSSEC-secured zones After your domain has been fully DNSSEC-secured, you can start by using several new DNS record types that use the authenticity and integrity guarantees of DNSSEC-signed zones to enhance the security of other services.
- Note: If you want your domain to resolve while DNSSEC is disabled, you must first deactivate DNSSEC for your zone at your domain registrar to ensure that DNSSEC-validating resolvers can still resolve names in the zone.
- To enable DNSSEC for delegated subdomains, first create a DS record within a Cloud DNS zone.
- Never configure SSH clients to use SSHFP for a domain that is not DNSSEC-secured.

### Migrate or transfer DNSSEC-enabled zones \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dns/docs/dnssec-migrate](https://docs.cloud.google.com/dns/docs/dnssec-migrate)
- Source ID: `site-iam-reference`
- Final score: 203
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This page describes how to migrate a DNSSEC-enabled zone that is activated at the domain registrar between Cloud DNS and other DNS hosting providers while maintaining the DNSSEC chain of trust.
- If your domain registrar also provides DNS hosting, you must coordinate with your domain registrar to migrate the DNSSEC chain of trust.
- Limitations Migrating a DNSSEC zone has the following limitations: You can only migrate a zone while maintaining the DNSSEC chain of trust if the new operator and registrar support DNSSEC migration, including importing DNSKEY records, setting multiple DS records, and preventing automatic key rotation during migration.
- Permissions dns.dnsKeys.create to create DNSKEYS dns.dnsKeys.delete to delete DNSKEYS dns.dnsKeys.list to list DNSKEYS dns.dnsKeys.update to update DNSKEYS Roles roles/dns.admin Before you begin DNSSEC migration is complex and requires coordination to migrate a zone between operators without incurring outages.

### Tutorial: Set up a domain by using Cloud DNS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dns/docs/tutorials/create-domain-tutorial](https://docs.cloud.google.com/dns/docs/tutorials/create-domain-tutorial)
- Source ID: `site-iam-reference`
- Final score: 197
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information about zones, see the DNS zones overview . to setup a web-server resource "random id" "rnd" { byte length = 4 } resource "google compute instance" "default" { name = "dns-compute-instance" machine type = "g1-small" zone = "us-central1-b" boot disk { initialize params { image = "debian-cloud/debian-11" } } network interface { network = "default" access config { // Ephemeral public IP } } metadata startup script = <<-EOF sudo apt-get update && \ sudo apt-get install apache2 -y && \ echo "<!doctype html><html><body><h1>Hello World!</h1></body></html>" > /var/www/html/index.html EOF } to allow http traffic resource "google compute firewall" "default" { name = "allow-http-traffic" network = "default" allow { ports = ["80"] protocol = "tcp" } source ranges = ["0.0.0.0/0"] } to create a DNS zone resource "google dns managed zone" "default" { name = "example-zone-googlecloudexample" dns name = "example-${random id.rnd.hex}.com." description = "Example DNS zone" force destroy = "true" } to register web-server's ip address in DNS resource "google dns record set" "default" { name = google dns managed zone.default.dns name managed zone = google dns managed zone.default.name type = "A" ttl = 300 rrdatas = [ google compute instance.default.network interface[0].access config[0].nat ip ] } Verify your setup To verify that your configuration is working, after the name servers are updated, navigate to your domain name (for example, example.com ).
- Objectives This tutorial demonstrates how to complete the following tasks: Register a domain name by using Cloud Domains Create a Compute Engine virtual machine (VM) instance Run a basic Apache web server Set up your domain using Cloud DNS Update name servers Verify your setup Costs There is a cost associated with registering a domain name.
- Home Documentation Networking Cloud DNS Guides Send feedback Tutorial: Set up a domain by using Cloud DNS Stay organized with collections Save and categorize content based on your preferences.
- Terraform You can use Terraform resources to create a virtual machine (VM) instance, run an Apache Web server, set up your domain using Cloud DNS, and update name servers.

