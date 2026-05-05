# HA VPN over Cloud Interconnect

Product: Cloud VPN
Feature slug: `ha-vpn-over-cloud-interconnect`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud VPN can encrypt Cloud Interconnect traffic by deploying HA VPN tunnels over VLAN attachments.

## Lifecycle

- Latest feature date: 2023-02-22
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn), [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview), [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies), [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/key-terms](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/key-terms))
- constraint (evidence: [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn), [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview), [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies), [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/key-terms](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/key-terms))
- encrypt (evidence: [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn), [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview), [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies), [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/key-terms](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/key-terms))
- key (evidence: [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn), [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview), [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies), [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/key-terms](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/key-terms))
- policy (evidence: [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn), [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview), [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies), [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/key-terms](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/key-terms))
- private (evidence: [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn), [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview), [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies), [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/key-terms](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/key-terms))
- secret (evidence: [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn), [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview), [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies), [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/key-terms](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/key-terms))
- security (evidence: [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn), [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview), [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies), [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/key-terms](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/key-terms))

## Official Evidence

- [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/key-terms](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/key-terms)
- [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview)
- [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/topologies)
- [https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn](https://docs.cloud.google.com/network-connectivity/docs/vpn/how-to/creating-ha-vpn)
