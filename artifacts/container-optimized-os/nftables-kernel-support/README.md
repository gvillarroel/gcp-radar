# nftables kernel support

Product: Container Optimized OS
Feature slug: `nftables-kernel-support`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Container-Optimized OS adds kernel support for nftables; Container-Optimized OS adds kernel support for nftables.

## Lifecycle

- Latest feature date: 2023-08-14
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow (evidence: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/security](https://docs.cloud.google.com/container-optimized-os/docs/concepts/security), [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus), [https://docs.cloud.google.com/container-optimized-os/docs/how-to/using-debugging-tools](https://docs.cloud.google.com/container-optimized-os/docs/how-to/using-debugging-tools))
- armor (evidence: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/security](https://docs.cloud.google.com/container-optimized-os/docs/concepts/security), [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus), [https://docs.cloud.google.com/container-optimized-os/docs/how-to/using-debugging-tools](https://docs.cloud.google.com/container-optimized-os/docs/how-to/using-debugging-tools))
- audit (evidence: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/security](https://docs.cloud.google.com/container-optimized-os/docs/concepts/security), [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus), [https://docs.cloud.google.com/container-optimized-os/docs/how-to/using-debugging-tools](https://docs.cloud.google.com/container-optimized-os/docs/how-to/using-debugging-tools))
- key (evidence: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/security](https://docs.cloud.google.com/container-optimized-os/docs/concepts/security), [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus), [https://docs.cloud.google.com/container-optimized-os/docs/how-to/using-debugging-tools](https://docs.cloud.google.com/container-optimized-os/docs/how-to/using-debugging-tools))
- security (evidence: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/security](https://docs.cloud.google.com/container-optimized-os/docs/concepts/security), [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus), [https://docs.cloud.google.com/container-optimized-os/docs/how-to/using-debugging-tools](https://docs.cloud.google.com/container-optimized-os/docs/how-to/using-debugging-tools))

## Official Evidence

- [https://docs.cloud.google.com/container-optimized-os/docs/concepts/security](https://docs.cloud.google.com/container-optimized-os/docs/concepts/security)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/using-debugging-tools](https://docs.cloud.google.com/container-optimized-os/docs/how-to/using-debugging-tools)

## Validation Findings

- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
