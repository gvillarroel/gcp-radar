# ESXi syslog forwarding

Product: Google Cloud VMware Engine
Feature slug: `esxi-syslog-forwarding`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

ESXi syslog forwarding sends ESXi and distributed firewall logs to improve visibility into VMware Engine security events.

## Lifecycle

- Latest feature date: 2023-06-28
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/vmware-engine/docs/environment/howto-forward-syslog](https://docs.cloud.google.com/vmware-engine/docs/environment/howto-forward-syslog), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone](https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone))
- armor (evidence: [https://docs.cloud.google.com/vmware-engine/docs/environment/howto-forward-syslog](https://docs.cloud.google.com/vmware-engine/docs/environment/howto-forward-syslog), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone](https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone))
- audit (evidence: [https://docs.cloud.google.com/vmware-engine/docs/environment/howto-forward-syslog](https://docs.cloud.google.com/vmware-engine/docs/environment/howto-forward-syslog), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone](https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone))
- encrypt (evidence: [https://docs.cloud.google.com/vmware-engine/docs/environment/howto-forward-syslog](https://docs.cloud.google.com/vmware-engine/docs/environment/howto-forward-syslog), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone](https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone))
- firewall (evidence: [https://docs.cloud.google.com/vmware-engine/docs/environment/howto-forward-syslog](https://docs.cloud.google.com/vmware-engine/docs/environment/howto-forward-syslog), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone](https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone))
- iam (evidence: [https://docs.cloud.google.com/vmware-engine/docs/environment/howto-forward-syslog](https://docs.cloud.google.com/vmware-engine/docs/environment/howto-forward-syslog), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone](https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone))
- identity (evidence: [https://docs.cloud.google.com/vmware-engine/docs/environment/howto-forward-syslog](https://docs.cloud.google.com/vmware-engine/docs/environment/howto-forward-syslog), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone](https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone))
- key (evidence: [https://docs.cloud.google.com/vmware-engine/docs/environment/howto-forward-syslog](https://docs.cloud.google.com/vmware-engine/docs/environment/howto-forward-syslog), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone](https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone))
- logging (evidence: [https://docs.cloud.google.com/vmware-engine/docs/environment/howto-forward-syslog](https://docs.cloud.google.com/vmware-engine/docs/environment/howto-forward-syslog), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone](https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone))
- permission (evidence: [https://docs.cloud.google.com/vmware-engine/docs/environment/howto-forward-syslog](https://docs.cloud.google.com/vmware-engine/docs/environment/howto-forward-syslog), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone](https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone))
- private (evidence: [https://docs.cloud.google.com/vmware-engine/docs/environment/howto-forward-syslog](https://docs.cloud.google.com/vmware-engine/docs/environment/howto-forward-syslog), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone](https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone))
- role (evidence: [https://docs.cloud.google.com/vmware-engine/docs/environment/howto-forward-syslog](https://docs.cloud.google.com/vmware-engine/docs/environment/howto-forward-syslog), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone](https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone))
- security (evidence: [https://docs.cloud.google.com/vmware-engine/docs/environment/howto-forward-syslog](https://docs.cloud.google.com/vmware-engine/docs/environment/howto-forward-syslog), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone](https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone))

## Official Evidence

- [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security)
- [https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone](https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone)
- [https://docs.cloud.google.com/vmware-engine/docs/environment/howto-forward-syslog](https://docs.cloud.google.com/vmware-engine/docs/environment/howto-forward-syslog)
