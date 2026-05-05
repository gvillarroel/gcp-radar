# Cloud DNS alias records

Product: Cloud DNS
Feature slug: `cloud-dns-alias-records`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud DNS introduces alias records, a CNAME-like custom record type that maps a zone apex domain to a canonical target; Cloud DNS now supports alias records that map an apex alias name to a canonical name.

## Lifecycle

- Latest feature date: 2025-09-30
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- dnssec (evidence: [https://docs.cloud.google.com/dns/docs/set-up-dns-records-domain-name](https://docs.cloud.google.com/dns/docs/set-up-dns-records-domain-name), [https://docs.cloud.google.com/dns/docs/records](https://docs.cloud.google.com/dns/docs/records), [https://docs.cloud.google.com/java/docs/reference/google-cloud-dns/latest/com.google.cloud.dns.Dns.RecordSetListOption](https://docs.cloud.google.com/java/docs/reference/google-cloud-dns/latest/com.google.cloud.dns.Dns.RecordSetListOption), [https://docs.cloud.google.com/dns/docs/reference/json-record](https://docs.cloud.google.com/dns/docs/reference/json-record))

## Official Evidence

- [https://docs.cloud.google.com/dns/docs/records](https://docs.cloud.google.com/dns/docs/records)
- [https://docs.cloud.google.com/dns/docs/reference/json-record](https://docs.cloud.google.com/dns/docs/reference/json-record)
- [https://docs.cloud.google.com/dns/docs/set-up-dns-records-domain-name](https://docs.cloud.google.com/dns/docs/set-up-dns-records-domain-name)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dns/latest/com.google.cloud.dns.Dns.RecordSetListOption](https://docs.cloud.google.com/java/docs/reference/google-cloud-dns/latest/com.google.cloud.dns.Dns.RecordSetListOption)
