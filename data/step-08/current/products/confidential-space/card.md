# Confidential Space

Schema version: `step-08-product-feature-cards-v1`
Generated at: `2026-05-01T19:03:45.645Z`
Product status: `PASS`

## Summary

- Feature cards: 17
- Step 07 failed features: 0
- Step 07 warned features: 6
- Corpus health: healthy
- IAM mapping: 0 explicit, 0 derived, 17 unknown

## Service Card

- Service card ID: `confidential-space:service`
- Latest feature date: 2025-03-31
- Official source links: 13
- Security capabilities: 18

## Features

| Feature | Coverage | Gate | IAM | Sources |
| --- | --- | --- | --- | --- |
| Intel TDX support on C3 machines | LOW | WARN | unknown | [source](https://docs.cloud.google.com/confidential-computing/confidential-space/docs)<br>[source](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/confidential-space-overview)<br>[source](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/token-claims) |
| Linux capabilities configuration | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/confidential-space-overview)<br>[source](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-customize-workloads)<br>[source](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/deploy-workloads) |
| Namespaced cgroup read/write access | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/connect-external-resources)<br>[source](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-customize-workloads)<br>[source](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/deploy-workloads) |
| AWS token support | LOW | WARN | unknown | [source](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/connect-external-resources)<br>[source](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/token-claims)<br>[source](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/token-validation-endpoint-fields) |
| CPU metric monitoring | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-customize-workloads)<br>[source](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-grant-access-confidential-resources)<br>[source](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/deploy-workloads) |
| Configurable /dev/shm size | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-customize-workloads)<br>[source](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-grant-access-confidential-resources)<br>[source](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/deploy-workloads) |
| Container signature fetch retry | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/connect-external-resources)<br>[source](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-customize-workloads)<br>[source](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/token-claims) |
| IPv6 ingress traffic support | LOW | WARN | unknown | [source](https://docs.cloud.google.com/confidential-computing/confidential-space/docs)<br>[source](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/confidential-space-overview) |
| tmpfs mount support | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-customize-workloads)<br>[source](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/deploy-workloads)<br>[source](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/metadata-variables) |
| Automatic boot disk stateful partition resizing | LOW | WARN | unknown | [source](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/confidential-space-images)<br>[source](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-customize-workloads)<br>[source](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-grant-access-confidential-resources) |
| Memory monitoring status check | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-grant-access-confidential-resources)<br>[source](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/deploy-workloads)<br>[source](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/attestation-assertions) |
| Memory monitoring | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-customize-workloads)<br>[source](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/deploy-workloads)<br>[source](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/metadata-variables) |
| Custom attestation tokens | LOW | WARN | unknown | [source](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/confidential-space-overview)<br>[source](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-grant-access-confidential-resources)<br>[source](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/token-claims) |
| Split-Trust Encryption Tool integration | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/connect-external-resources)<br>[source](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-your-first-confidential-space-environment)<br>[source](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/token-claims) |
| VPC Service Controls support | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/confidential-computing/confidential-space/docs)<br>[source](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/confidential-space-overview)<br>[source](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/vpc-service-controls) |
| Ingress port configuration | LOW | WARN | unknown | [source](https://docs.cloud.google.com/confidential-computing/confidential-space/docs)<br>[source](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/confidential-space-overview)<br>[source](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/connect-external-resources) |
| Confidential Space image support status assertion | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-grant-access-confidential-resources)<br>[source](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-your-first-confidential-space-environment)<br>[source](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/attestation-assertions) |
