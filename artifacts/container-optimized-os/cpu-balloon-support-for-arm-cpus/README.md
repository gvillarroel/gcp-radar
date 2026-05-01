# CPU balloon support for ARM CPUs

Product: Container Optimized OS
Feature slug: `cpu-balloon-support-for-arm-cpus`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Container-Optimized OS supports CPU ballooning on ARM CPUs; Container-Optimized OS supports CPU ballooning on ARM CPUs.

## Lifecycle

- Latest feature date: 2026-02-20
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- armor
- security

## Official Evidence

- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/arm](https://docs.cloud.google.com/container-optimized-os/docs/how-to/arm)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/secure-apparmor](https://docs.cloud.google.com/container-optimized-os/docs/how-to/secure-apparmor)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/sosreport](https://docs.cloud.google.com/container-optimized-os/docs/how-to/sosreport)

## Validation Findings

- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
