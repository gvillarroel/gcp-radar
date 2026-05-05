# High-accuracy time synchronization for Compute Engine VMs

Product: Compute Engine
Feature slug: `high-accuracy-time-synchronization-for-compute-engine-vms`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Compute Engine VMs can synchronize with the host clock using chrony and ptp_kvm to achieve supported accuracy within 1 ms.

## Lifecycle

- Latest feature date: 2025-11-02
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/compute/docs/tutorials/high-availability-autohealing](https://docs.cloud.google.com/compute/docs/tutorials/high-availability-autohealing), [https://docs.cloud.google.com/compute/docs/tutorials/high-availability-load-balancing](https://docs.cloud.google.com/compute/docs/tutorials/high-availability-load-balancing), [https://docs.cloud.google.com/compute/docs/tutorials/high-scalability-autoscaling](https://docs.cloud.google.com/compute/docs/tutorials/high-scalability-autoscaling))
- allow (evidence: [https://docs.cloud.google.com/compute/docs/tutorials/high-availability-autohealing](https://docs.cloud.google.com/compute/docs/tutorials/high-availability-autohealing), [https://docs.cloud.google.com/compute/docs/tutorials/high-availability-load-balancing](https://docs.cloud.google.com/compute/docs/tutorials/high-availability-load-balancing), [https://docs.cloud.google.com/compute/docs/tutorials/high-scalability-autoscaling](https://docs.cloud.google.com/compute/docs/tutorials/high-scalability-autoscaling))
- firewall (evidence: [https://docs.cloud.google.com/compute/docs/tutorials/high-availability-autohealing](https://docs.cloud.google.com/compute/docs/tutorials/high-availability-autohealing), [https://docs.cloud.google.com/compute/docs/tutorials/high-availability-load-balancing](https://docs.cloud.google.com/compute/docs/tutorials/high-availability-load-balancing), [https://docs.cloud.google.com/compute/docs/tutorials/high-scalability-autoscaling](https://docs.cloud.google.com/compute/docs/tutorials/high-scalability-autoscaling))

## Official Evidence

- [https://docs.cloud.google.com/compute/docs/tutorials/high-availability-autohealing](https://docs.cloud.google.com/compute/docs/tutorials/high-availability-autohealing)
- [https://docs.cloud.google.com/compute/docs/tutorials/high-availability-load-balancing](https://docs.cloud.google.com/compute/docs/tutorials/high-availability-load-balancing)
- [https://docs.cloud.google.com/compute/docs/tutorials/high-scalability-autoscaling](https://docs.cloud.google.com/compute/docs/tutorials/high-scalability-autoscaling)
