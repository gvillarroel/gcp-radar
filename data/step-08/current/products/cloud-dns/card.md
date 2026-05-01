# Cloud DNS

Schema version: `step-08-product-feature-cards-v1`
Generated at: `2026-05-01T09:08:24.776Z`
Product status: `PASS`

## Summary

- Feature cards: 29
- Step 07 failed features: 0
- Step 07 warned features: 1
- Corpus health: healthy
- IAM mapping: 4 explicit, 0 derived, 25 unknown

## Service Card

- Service card ID: `cloud-dns:service`
- Latest feature date: 2026-03-15
- Official source links: 29
- Security capabilities: 21

## Features

| Feature | Coverage | Gate | IAM | Sources |
| --- | --- | --- | --- | --- |
| Cloud DNS resourceRecordSets.list filter | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1/projects.locations.dnsThreatDetectors/list)<br>[source](https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1beta1/projects.locations.dnsThreatDetectors/list)<br>[source](https://docs.cloud.google.com/java/docs/reference/google-cloud-dns/latest/com.google.cloud.dns.Dns.ChangeRequestListOption) |
| DNS Armor internet-bound query monitoring | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/dns/docs/best-practices)<br>[source](https://docs.cloud.google.com/dns/docs/key-terms)<br>[source](https://docs.cloud.google.com/dns/docs/overview) |
| Cloud DNS alias records | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/dns/docs/records)<br>[source](https://docs.cloud.google.com/dns/docs/reference/json-record)<br>[source](https://docs.cloud.google.com/dns/docs/set-up-dns-records-domain-name) |
| Cloud DNS DNS64 | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/dns/docs/configure-dns64)<br>[source](https://docs.cloud.google.com/dns/docs/overview)<br>[source](https://docs.cloud.google.com/dns/docs/policies) |
| Cloud DNS outbound FQDN forwarding target | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/dns/docs/key-terms)<br>[source](https://docs.cloud.google.com/dns/docs/overview)<br>[source](https://docs.cloud.google.com/dns/docs/policies) |
| External endpoint health checks in DNS routing policies | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/dns/docs/audit-logging)<br>[source](https://docs.cloud.google.com/dns/docs/configure-routing-policies)<br>[source](https://docs.cloud.google.com/dns/docs/create-custom-constraints) |
| Cloud DNS routing policy health checks for internal proxy Network Load Balancer targets | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/dns/docs/best-practices)<br>[source](https://docs.cloud.google.com/dns/docs/configure-routing-policies)<br>[source](https://docs.cloud.google.com/dns/docs/create-custom-constraints) |
| Cloud DNS routing policy health checks for cross-region internal Application Load Balancers | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/dns/docs/best-practices)<br>[source](https://docs.cloud.google.com/dns/docs/configure-routing-policies)<br>[source](https://docs.cloud.google.com/dns/docs/create-custom-constraints) |
| Cloud DNS routing policy internal Application Load Balancer health-check targets | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/dns/docs/best-practices)<br>[source](https://docs.cloud.google.com/dns/docs/configure-routing-policies)<br>[source](https://docs.cloud.google.com/dns/docs/create-custom-constraints) |
| Cloud DNS internal load balancer health checks in routing policies | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/dns/docs/audit-logging)<br>[source](https://docs.cloud.google.com/dns/docs/configure-routing-policies)<br>[source](https://docs.cloud.google.com/dns/docs/create-custom-constraints) |
| Cloud DNS routing policy automatic failover | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/dns/docs/configure-routing-policies)<br>[source](https://docs.cloud.google.com/dns/docs/create-custom-constraints)<br>[source](https://docs.cloud.google.com/dns/docs/key-terms) |
| Cloud DNS scope configuration | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/dns/docs/configure-routing-policies)<br>[source](https://docs.cloud.google.com/dns/docs/dnssec-config)<br>[source](https://docs.cloud.google.com/dns/docs/dnssec-migrate) |
| Zonal private Cloud DNS zones | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/dns/docs/dnssec-migrate)<br>[source](https://docs.cloud.google.com/dns/docs/overview)<br>[source](https://docs.cloud.google.com/dns/docs/troubleshooting) |
| Cloud DNS per-resource IAM permissions | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/dns/docs/access-control)<br>[source](https://docs.cloud.google.com/dns/docs/audit-logging)<br>[source](https://docs.cloud.google.com/dns/docs/overview) |
| Cloud DNS routing policy management | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/dns/docs/configure-routing-policies)<br>[source](https://docs.cloud.google.com/dns/docs/create-custom-constraints)<br>[source](https://docs.cloud.google.com/dns/docs/overview) |
| Cloud Logging for managed public zones | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/dns/docs/audit-logging)<br>[source](https://docs.cloud.google.com/dns/docs/best-practices)<br>[source](https://docs.cloud.google.com/dns/docs/dnssec-migrate) |
| Cloud DNS response policy and rules management | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/dns/docs/access-control)<br>[source](https://docs.cloud.google.com/dns/docs/configure-routing-policies)<br>[source](https://docs.cloud.google.com/dns/docs/create-custom-constraints) |
| Cloud DNS routing policies | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/dns/docs/configure-routing-policies)<br>[source](https://docs.cloud.google.com/dns/docs/create-custom-constraints)<br>[source](https://docs.cloud.google.com/dns/docs/dnssec) |
| Cloud DNS monitoring dashboard | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/dns/docs/best-practices)<br>[source](https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1/projects.locations.dnsThreatDetectors/create)<br>[source](https://docs.cloud.google.com/dns/docs/troubleshooting) |
| Cloud DNS scopes | MEDIUM | WARN | unknown | [source](https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1/projects.locations.dnsThreatDetectors/create)<br>[source](https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1/projects.locations.dnsThreatDetectors/delete)<br>[source](https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1beta1/projects.locations.dnsThreatDetectors/create) |
| Cloud DNS ResourceRecordSets update API | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/dns/docs/access-control)<br>[source](https://docs.cloud.google.com/dns/docs/audit-logging)<br>[source](https://docs.cloud.google.com/dns/docs/configure-routing-policies) |
| Cloud DNS response policies and rules | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/dns/docs/access-control)<br>[source](https://docs.cloud.google.com/dns/docs/audit-logging)<br>[source](https://docs.cloud.google.com/dns/docs/configure-routing-policies) |
| Cloud DNS forwarding to non-RFC 1918 addresses | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/dns/docs/configure-routing-policies)<br>[source](https://docs.cloud.google.com/dns/docs/key-terms)<br>[source](https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1/projects.locations.dnsThreatDetectors) |
| Cloud DNS peering | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/dns/docs/best-practices)<br>[source](https://docs.cloud.google.com/dns/docs/configure-routing-policies)<br>[source](https://docs.cloud.google.com/dns/docs/dnssec-migrate) |
| Cloud DNS private query logging and monitoring | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/dns/docs/best-practices)<br>[source](https://docs.cloud.google.com/dns/docs/policies)<br>[source](https://docs.cloud.google.com/dns/docs/troubleshooting) |
| Cloud DNS forwarding | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/dns/docs/cnamechasing)<br>[source](https://docs.cloud.google.com/dns/docs/key-terms)<br>[source](https://docs.cloud.google.com/dns/docs/overview) |
| Cloud DNS private DNS logging and monitoring | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/dns/docs/best-practices)<br>[source](https://docs.cloud.google.com/dns/docs/create-custom-constraints)<br>[source](https://docs.cloud.google.com/dns/docs/troubleshooting) |
| Cloud DNS private zones | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/dns/docs/key-terms)<br>[source](https://docs.cloud.google.com/dns/docs/overview)<br>[source](https://docs.cloud.google.com/dns/docs/troubleshooting) |
| Cloud DNS DNSSEC | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/dns/docs/dnssec)<br>[source](https://docs.cloud.google.com/dns/docs/dnssec-advanced)<br>[source](https://docs.cloud.google.com/dns/docs/dnssec-migrate) |
