# Mixed zonal and hybrid NEG backends for global external HTTP(S) load balancers

Product: Cloud Load Balancing
Feature slug: `mixed-zonal-and-hybrid-neg-backends-for-global-external-http-s-load-balancers`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Global external HTTP(S) load balancers can use a combination of zonal GCE_VM_IP_PORT NEGs and hybrid NON_GCP_PRIVATE_IP_PORT NEGs as backends.

## Lifecycle

- Latest feature date: 2022-03-03
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow
- armor
- encrypt
- firewall
- policy
- private

## Official Evidence

- [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- [https://docs.cloud.google.com/load-balancing/docs/https/applb-custom-metrics](https://docs.cloud.google.com/load-balancing/docs/https/applb-custom-metrics)
