# nomos bugreport timeout flag

Product: Anthos Config Management
Feature slug: `nomos-bugreport-timeout-flag`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The nomos bugreport command supports a --timeout flag for configuring cluster connection timeout.

## Lifecycle

- Latest feature date: 2022-04-21
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth (evidence: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/nomos-bugreport](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/nomos-bugreport), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl))
- authorization (evidence: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/nomos-bugreport](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/nomos-bugreport), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl))
- key (evidence: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/nomos-bugreport](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/nomos-bugreport), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl))
- role (evidence: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/nomos-bugreport](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/nomos-bugreport), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl))

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/nomos-bugreport](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/nomos-bugreport)
