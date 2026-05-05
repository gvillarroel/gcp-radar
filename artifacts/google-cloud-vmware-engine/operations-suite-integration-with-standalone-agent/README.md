# Operations Suite integration with standalone agent

Product: Google Cloud VMware Engine
Feature slug: `operations-suite-integration-with-standalone-agent`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

A standalone metrics and logs agent sends vCenter and vSAN metrics and syslog messages to Google Cloud's operations suite.

## Lifecycle

- Latest feature date: 2021-08-20
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone](https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone), [https://docs.cloud.google.com/vmware-engine/docs/concepts-monitoring](https://docs.cloud.google.com/vmware-engine/docs/concepts-monitoring), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security))
- armor (evidence: [https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone](https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone), [https://docs.cloud.google.com/vmware-engine/docs/concepts-monitoring](https://docs.cloud.google.com/vmware-engine/docs/concepts-monitoring), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security))
- audit (evidence: [https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone](https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone), [https://docs.cloud.google.com/vmware-engine/docs/concepts-monitoring](https://docs.cloud.google.com/vmware-engine/docs/concepts-monitoring), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security))
- encrypt (evidence: [https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone](https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone), [https://docs.cloud.google.com/vmware-engine/docs/concepts-monitoring](https://docs.cloud.google.com/vmware-engine/docs/concepts-monitoring), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security))
- firewall (evidence: [https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone](https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone), [https://docs.cloud.google.com/vmware-engine/docs/concepts-monitoring](https://docs.cloud.google.com/vmware-engine/docs/concepts-monitoring), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security))
- iam (evidence: [https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone](https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone), [https://docs.cloud.google.com/vmware-engine/docs/concepts-monitoring](https://docs.cloud.google.com/vmware-engine/docs/concepts-monitoring), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security))
- identity (evidence: [https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone](https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone), [https://docs.cloud.google.com/vmware-engine/docs/concepts-monitoring](https://docs.cloud.google.com/vmware-engine/docs/concepts-monitoring), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security))
- key (evidence: [https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone](https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone), [https://docs.cloud.google.com/vmware-engine/docs/concepts-monitoring](https://docs.cloud.google.com/vmware-engine/docs/concepts-monitoring), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security))
- logging (evidence: [https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone](https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone), [https://docs.cloud.google.com/vmware-engine/docs/concepts-monitoring](https://docs.cloud.google.com/vmware-engine/docs/concepts-monitoring), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security))
- permission (evidence: [https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone](https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone), [https://docs.cloud.google.com/vmware-engine/docs/concepts-monitoring](https://docs.cloud.google.com/vmware-engine/docs/concepts-monitoring), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security))
- private (evidence: [https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone](https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone), [https://docs.cloud.google.com/vmware-engine/docs/concepts-monitoring](https://docs.cloud.google.com/vmware-engine/docs/concepts-monitoring), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security))
- role (evidence: [https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone](https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone), [https://docs.cloud.google.com/vmware-engine/docs/concepts-monitoring](https://docs.cloud.google.com/vmware-engine/docs/concepts-monitoring), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security))
- security (evidence: [https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone](https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone), [https://docs.cloud.google.com/vmware-engine/docs/concepts-monitoring](https://docs.cloud.google.com/vmware-engine/docs/concepts-monitoring), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security))

## Official Evidence

- [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security)
- [https://docs.cloud.google.com/vmware-engine/docs/concepts-monitoring](https://docs.cloud.google.com/vmware-engine/docs/concepts-monitoring)
- [https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone](https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone)
