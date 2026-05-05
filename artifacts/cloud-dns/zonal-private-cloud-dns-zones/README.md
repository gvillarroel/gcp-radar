# Zonal private Cloud DNS zones

Product: Cloud DNS
Feature slug: `zonal-private-cloud-dns-zones`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud DNS now supports private DNS zones that are scoped to a specific Google Cloud zone; Cloud DNS now supports private DNS zones scoped to an individual Google Cloud zone.

## Lifecycle

- Latest feature date: 2022-12-14
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/dns/docs/troubleshooting](https://docs.cloud.google.com/dns/docs/troubleshooting), [https://docs.cloud.google.com/dns/docs/zones](https://docs.cloud.google.com/dns/docs/zones), [https://docs.cloud.google.com/dns/docs/dnssec-migrate](https://docs.cloud.google.com/dns/docs/dnssec-migrate), [https://docs.cloud.google.com/dns/docs/overview](https://docs.cloud.google.com/dns/docs/overview))
- auth (evidence: [https://docs.cloud.google.com/dns/docs/troubleshooting](https://docs.cloud.google.com/dns/docs/troubleshooting), [https://docs.cloud.google.com/dns/docs/zones](https://docs.cloud.google.com/dns/docs/zones), [https://docs.cloud.google.com/dns/docs/dnssec-migrate](https://docs.cloud.google.com/dns/docs/dnssec-migrate), [https://docs.cloud.google.com/dns/docs/overview](https://docs.cloud.google.com/dns/docs/overview))
- dnssec (evidence: [https://docs.cloud.google.com/dns/docs/troubleshooting](https://docs.cloud.google.com/dns/docs/troubleshooting), [https://docs.cloud.google.com/dns/docs/zones](https://docs.cloud.google.com/dns/docs/zones), [https://docs.cloud.google.com/dns/docs/dnssec-migrate](https://docs.cloud.google.com/dns/docs/dnssec-migrate), [https://docs.cloud.google.com/dns/docs/overview](https://docs.cloud.google.com/dns/docs/overview))
- key (evidence: [https://docs.cloud.google.com/dns/docs/troubleshooting](https://docs.cloud.google.com/dns/docs/troubleshooting), [https://docs.cloud.google.com/dns/docs/zones](https://docs.cloud.google.com/dns/docs/zones), [https://docs.cloud.google.com/dns/docs/dnssec-migrate](https://docs.cloud.google.com/dns/docs/dnssec-migrate), [https://docs.cloud.google.com/dns/docs/overview](https://docs.cloud.google.com/dns/docs/overview))
- permission (evidence: [https://docs.cloud.google.com/dns/docs/troubleshooting](https://docs.cloud.google.com/dns/docs/troubleshooting), [https://docs.cloud.google.com/dns/docs/zones](https://docs.cloud.google.com/dns/docs/zones), [https://docs.cloud.google.com/dns/docs/dnssec-migrate](https://docs.cloud.google.com/dns/docs/dnssec-migrate), [https://docs.cloud.google.com/dns/docs/overview](https://docs.cloud.google.com/dns/docs/overview))
- private (evidence: [https://docs.cloud.google.com/dns/docs/troubleshooting](https://docs.cloud.google.com/dns/docs/troubleshooting), [https://docs.cloud.google.com/dns/docs/zones](https://docs.cloud.google.com/dns/docs/zones), [https://docs.cloud.google.com/dns/docs/dnssec-migrate](https://docs.cloud.google.com/dns/docs/dnssec-migrate), [https://docs.cloud.google.com/dns/docs/overview](https://docs.cloud.google.com/dns/docs/overview))
- role (evidence: [https://docs.cloud.google.com/dns/docs/troubleshooting](https://docs.cloud.google.com/dns/docs/troubleshooting), [https://docs.cloud.google.com/dns/docs/zones](https://docs.cloud.google.com/dns/docs/zones), [https://docs.cloud.google.com/dns/docs/dnssec-migrate](https://docs.cloud.google.com/dns/docs/dnssec-migrate), [https://docs.cloud.google.com/dns/docs/overview](https://docs.cloud.google.com/dns/docs/overview))

## Official Evidence

- [https://docs.cloud.google.com/dns/docs/dnssec-migrate](https://docs.cloud.google.com/dns/docs/dnssec-migrate)
- [https://docs.cloud.google.com/dns/docs/overview](https://docs.cloud.google.com/dns/docs/overview)
- [https://docs.cloud.google.com/dns/docs/troubleshooting](https://docs.cloud.google.com/dns/docs/troubleshooting)
- [https://docs.cloud.google.com/dns/docs/zones](https://docs.cloud.google.com/dns/docs/zones)
