# Zonal NEG backends for external passthrough Network Load Balancer

Product: Cloud Load Balancing
Feature slug: `zonal-neg-backends-for-external-passthrough-network-load-balancer`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

External passthrough Network Load Balancers support zonal network endpoint groups with GCE_VM_IP endpoints, including non-nic0 VM interfaces in the same subnetwork.

## Lifecycle

- Latest feature date: 2024-01-24
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow (evidence: [https://docs.cloud.google.com/load-balancing/docs/internal](https://docs.cloud.google.com/load-balancing/docs/internal), [https://docs.cloud.google.com/load-balancing/docs/internal/setting-up-internal-zonal-neg](https://docs.cloud.google.com/load-balancing/docs/internal/setting-up-internal-zonal-neg), [https://docs.cloud.google.com/load-balancing/docs/internal/internal-logging-monitoring](https://docs.cloud.google.com/load-balancing/docs/internal/internal-logging-monitoring))
- firewall (evidence: [https://docs.cloud.google.com/load-balancing/docs/internal](https://docs.cloud.google.com/load-balancing/docs/internal), [https://docs.cloud.google.com/load-balancing/docs/internal/setting-up-internal-zonal-neg](https://docs.cloud.google.com/load-balancing/docs/internal/setting-up-internal-zonal-neg), [https://docs.cloud.google.com/load-balancing/docs/internal/internal-logging-monitoring](https://docs.cloud.google.com/load-balancing/docs/internal/internal-logging-monitoring))
- iam (evidence: [https://docs.cloud.google.com/load-balancing/docs/internal](https://docs.cloud.google.com/load-balancing/docs/internal), [https://docs.cloud.google.com/load-balancing/docs/internal/setting-up-internal-zonal-neg](https://docs.cloud.google.com/load-balancing/docs/internal/setting-up-internal-zonal-neg), [https://docs.cloud.google.com/load-balancing/docs/internal/internal-logging-monitoring](https://docs.cloud.google.com/load-balancing/docs/internal/internal-logging-monitoring))
- logging (evidence: [https://docs.cloud.google.com/load-balancing/docs/internal](https://docs.cloud.google.com/load-balancing/docs/internal), [https://docs.cloud.google.com/load-balancing/docs/internal/setting-up-internal-zonal-neg](https://docs.cloud.google.com/load-balancing/docs/internal/setting-up-internal-zonal-neg), [https://docs.cloud.google.com/load-balancing/docs/internal/internal-logging-monitoring](https://docs.cloud.google.com/load-balancing/docs/internal/internal-logging-monitoring))
- role (evidence: [https://docs.cloud.google.com/load-balancing/docs/internal](https://docs.cloud.google.com/load-balancing/docs/internal), [https://docs.cloud.google.com/load-balancing/docs/internal/setting-up-internal-zonal-neg](https://docs.cloud.google.com/load-balancing/docs/internal/setting-up-internal-zonal-neg), [https://docs.cloud.google.com/load-balancing/docs/internal/internal-logging-monitoring](https://docs.cloud.google.com/load-balancing/docs/internal/internal-logging-monitoring))

## Official Evidence

- [https://docs.cloud.google.com/load-balancing/docs/internal](https://docs.cloud.google.com/load-balancing/docs/internal)
- [https://docs.cloud.google.com/load-balancing/docs/internal/internal-logging-monitoring](https://docs.cloud.google.com/load-balancing/docs/internal/internal-logging-monitoring)
- [https://docs.cloud.google.com/load-balancing/docs/internal/setting-up-internal-zonal-neg](https://docs.cloud.google.com/load-balancing/docs/internal/setting-up-internal-zonal-neg)
