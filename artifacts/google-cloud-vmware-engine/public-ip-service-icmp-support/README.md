# Public IP service ICMP support

Product: Google Cloud VMware Engine
Feature slug: `public-ip-service-icmp-support`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The public IP service now supports the ICMP protocol.

## Lifecycle

- Latest feature date: 2022-03-25
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-networking](https://docs.cloud.google.com/vmware-engine/docs/best-practices-networking), [https://docs.cloud.google.com/vmware-engine/docs/concepts-security](https://docs.cloud.google.com/vmware-engine/docs/concepts-security))
- armor (evidence: [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-networking](https://docs.cloud.google.com/vmware-engine/docs/best-practices-networking), [https://docs.cloud.google.com/vmware-engine/docs/concepts-security](https://docs.cloud.google.com/vmware-engine/docs/concepts-security))
- audit (evidence: [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-networking](https://docs.cloud.google.com/vmware-engine/docs/best-practices-networking), [https://docs.cloud.google.com/vmware-engine/docs/concepts-security](https://docs.cloud.google.com/vmware-engine/docs/concepts-security))
- auth (evidence: [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-networking](https://docs.cloud.google.com/vmware-engine/docs/best-practices-networking), [https://docs.cloud.google.com/vmware-engine/docs/concepts-security](https://docs.cloud.google.com/vmware-engine/docs/concepts-security))
- encrypt (evidence: [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-networking](https://docs.cloud.google.com/vmware-engine/docs/best-practices-networking), [https://docs.cloud.google.com/vmware-engine/docs/concepts-security](https://docs.cloud.google.com/vmware-engine/docs/concepts-security))
- firewall (evidence: [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-networking](https://docs.cloud.google.com/vmware-engine/docs/best-practices-networking), [https://docs.cloud.google.com/vmware-engine/docs/concepts-security](https://docs.cloud.google.com/vmware-engine/docs/concepts-security))
- iam (evidence: [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-networking](https://docs.cloud.google.com/vmware-engine/docs/best-practices-networking), [https://docs.cloud.google.com/vmware-engine/docs/concepts-security](https://docs.cloud.google.com/vmware-engine/docs/concepts-security))
- identity (evidence: [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-networking](https://docs.cloud.google.com/vmware-engine/docs/best-practices-networking), [https://docs.cloud.google.com/vmware-engine/docs/concepts-security](https://docs.cloud.google.com/vmware-engine/docs/concepts-security))
- key (evidence: [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-networking](https://docs.cloud.google.com/vmware-engine/docs/best-practices-networking), [https://docs.cloud.google.com/vmware-engine/docs/concepts-security](https://docs.cloud.google.com/vmware-engine/docs/concepts-security))
- logging (evidence: [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-networking](https://docs.cloud.google.com/vmware-engine/docs/best-practices-networking), [https://docs.cloud.google.com/vmware-engine/docs/concepts-security](https://docs.cloud.google.com/vmware-engine/docs/concepts-security))
- permission (evidence: [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-networking](https://docs.cloud.google.com/vmware-engine/docs/best-practices-networking), [https://docs.cloud.google.com/vmware-engine/docs/concepts-security](https://docs.cloud.google.com/vmware-engine/docs/concepts-security))
- private (evidence: [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-networking](https://docs.cloud.google.com/vmware-engine/docs/best-practices-networking), [https://docs.cloud.google.com/vmware-engine/docs/concepts-security](https://docs.cloud.google.com/vmware-engine/docs/concepts-security))
- role (evidence: [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-networking](https://docs.cloud.google.com/vmware-engine/docs/best-practices-networking), [https://docs.cloud.google.com/vmware-engine/docs/concepts-security](https://docs.cloud.google.com/vmware-engine/docs/concepts-security))
- security (evidence: [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-networking](https://docs.cloud.google.com/vmware-engine/docs/best-practices-networking), [https://docs.cloud.google.com/vmware-engine/docs/concepts-security](https://docs.cloud.google.com/vmware-engine/docs/concepts-security))

## Official Evidence

- [https://docs.cloud.google.com/vmware-engine/docs/best-practices-networking](https://docs.cloud.google.com/vmware-engine/docs/best-practices-networking)
- [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security)
- [https://docs.cloud.google.com/vmware-engine/docs/concepts-security](https://docs.cloud.google.com/vmware-engine/docs/concepts-security)
