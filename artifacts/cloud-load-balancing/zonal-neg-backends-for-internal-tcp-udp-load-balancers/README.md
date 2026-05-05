# Zonal NEG backends for internal TCP/UDP load balancers

Product: Cloud Load Balancing
Feature slug: `zonal-neg-backends-for-internal-tcp-udp-load-balancers`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Internal TCP/UDP load balancers can use zonal network endpoint groups with GCE_VM_IP endpoints as backends.

## Lifecycle

- Latest feature date: 2021-05-04
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
