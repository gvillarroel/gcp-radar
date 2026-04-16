---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:24.679Z"
product_name: "Cloud DNS"
product_slug: "cloud-dns"
feature_name: "DNS Armor internet-bound query monitoring"
feature_slug: "dns-armor-internet-bound-query-monitoring"
latest_feature_date: "2026-01-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dns/docs/troubleshooting"
  - "https://docs.cloud.google.com/dns/docs/overview"
  - "https://docs.cloud.google.com/dns/docs/key-terms"
  - "https://docs.cloud.google.com/dns/docs/best-practices"
keywords:
  - "dns"
  - "armor"
  - "internet"
  - "bound"
  - "query"
  - "monitoring"
  - "supports"
  - "queries"
---

# DNS Armor internet-bound query monitoring

Product: Cloud DNS
Coverage: MEDIUM

## Step 02 Summary

Cloud DNS supports monitoring internet-bound DNS queries with DNS Armor to detect malicious activity; DNS Armor advanced threat detection becomes available in Cloud DNS to monitor internet-bound DNS queries for malicious activity.

## Extended Definition

Cloud DNS supports monitoring internet-bound DNS queries with DNS Armor to detect malicious activity; DNS Armor advanced threat detection becomes available in Cloud DNS to monitor internet-bound DNS queries for malicious activity.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dns/docs/troubleshooting](https://docs.cloud.google.com/dns/docs/troubleshooting)
- [https://docs.cloud.google.com/dns/docs/overview](https://docs.cloud.google.com/dns/docs/overview)
- [https://docs.cloud.google.com/dns/docs/key-terms](https://docs.cloud.google.com/dns/docs/key-terms)
- [https://docs.cloud.google.com/dns/docs/best-practices](https://docs.cloud.google.com/dns/docs/best-practices)

## Supporting Pages

### Troubleshoot Cloud DNS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dns/docs/troubleshooting](https://docs.cloud.google.com/dns/docs/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Outbound forwarding to a name server that uses a non-RFC 1918 IP address fails By default, Cloud DNS uses standard routing, which routes queries through the public internet when the target name server has a non-RFC 1918 IP address.
- Alternatively, if you have enabled Cloud logging for DNS queries, use the Logs Explorer to verify that you have internet-bound queries.
- Verify that you have internet-bound queries Query logs are only sent when internet-bound queries or requests are made of your network.
- Go to Logs Explorer View your DNS logs and check for internet-bound queries.

### Cloud DNS overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dns/docs/overview](https://docs.cloud.google.com/dns/docs/overview)
- Source ID: `site-docs-root`
- Final score: 185
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Advanced threat detection Monitor your internet-bound DNS queries for malicious activity using DNS Armor, powered by Infoblox .
- Your internet-bound DNS query logs are analyzed by Infoblox for malicious patterns and other signs of compromise, providing visibility into threats without impacting your production traffic.
- Set up DNS64 and network address translation with Public NAT (NAT64) to enable your IPv6-only VM instances to communicate with IPv4 destinations on the internet.
- DNS forwarding Cloud DNS methods Inbound Create an inbound server policy to enable an on-premises DNS client or server to send DNS requests to Cloud DNS.

### Key terms \_|\_ Cloud DNS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dns/docs/key-terms](https://docs.cloud.google.com/dns/docs/key-terms)
- Source ID: `site-iam-reference`
- Final score: 182
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud DNS also supports outbound forwarding to non-RFC 1918 addresses by privately routing those addresses within Google Cloud.
- For example, in the following SOA record, you can change the serial number directly from the Google Cloud console by entering the desired value into the third space-delimited field of the record: ns-gcp-private.googledomains.com. cloud-dns-hostmaster.google.com. [serial number] 21600 3600 259200 300` DNS server policy A DNS server policy lets you access name resolution services provided by Google Cloud in a VPC network with inbound forwarding, or supersede the VPC name resolution order with an outbound server policy.
- For more information about how to register and set up your domain, see Setting up a domain using Cloud DNS . private zone Private zones enable you to manage custom domain names for your virtual machine (VM) instances, load balancers, and other Google Cloud resources without exposing the underlying DNS data to the public internet.
- For information about how you can use IDN with Cloud DNS, see Creating zones with Internationalized Domain Names . registrar A domain name registrar is an organization that manages the reservation of internet domain names.

### Best practices for Cloud DNS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dns/docs/best-practices](https://docs.cloud.google.com/dns/docs/best-practices)
- Source ID: `site-docs-root`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- Use DNS server policies to allow queries from on-premises To allow on-premises hosts to query DNS records that are hosted in Cloud DNS private zones (for example, gcp.example.com ), create a DNS server policy using inbound DNS forwarding .
- As described in DNS forwarding zones , Cloud DNS caches results of outbound-forwarded queries for up to 60 seconds, or for the duration of their TTL.
- Inbound DNS forwarding allows your system to query all private zones in the project as well as internal DNS IP addresses and peered zones.
- In Cloud Router instances, add a custom advertised route for the IP address range 35.199.192.0/19 in the hub VPC network to the on-premises environment. (Optional) If you also use the automatically generated internal DNS names, peer each spoke project zone (for example, spoke-project-x.internal ) with the hub project, and forward all queries for .internal from on-premises.

