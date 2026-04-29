# Cloud DNS resourceRecordSets.list filter

Product: Cloud DNS
Feature slug: `cloud-dns-resourcerecordsets-list-filter`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud DNS adds a filter query parameter to the resourceRecordSets.list API to return records that match a specified domain.

## Lifecycle

- Latest feature date: 2026-03-15
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- armor
- iam
- permission
- security
- threat
- token

## Official Evidence

- [https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1/projects.locations.dnsThreatDetectors/list](https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1/projects.locations.dnsThreatDetectors/list)
- [https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1beta1/projects.locations.dnsThreatDetectors/list](https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1beta1/projects.locations.dnsThreatDetectors/list)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dns/latest/com.google.cloud.dns.Dns.ChangeRequestListOption](https://docs.cloud.google.com/java/docs/reference/google-cloud-dns/latest/com.google.cloud.dns.Dns.ChangeRequestListOption)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dns/latest/com.google.cloud.dns.Dns.RecordSetListOption](https://docs.cloud.google.com/java/docs/reference/google-cloud-dns/latest/com.google.cloud.dns.Dns.RecordSetListOption)
