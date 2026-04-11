---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:50:06.936Z"
product_name: "Network Security Integration"
product_slug: "network-security-integration"
feature_name: "Out-of-band integration"
feature_slug: "out-of-band-integration"
latest_feature_date: "2025-03-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/network-security-integration/docs/out-of-band/out-of-band-integration-overview"
  - "https://docs.cloud.google.com/network-security-integration/docs/out-of-band/monitor-out-of-band-integration"
  - "https://docs.cloud.google.com/network-security-integration/docs/tutorial/out-of-band-integration-tutorial"
keywords:
  - "out"
  - "of"
  - "band"
  - "integration"
  - "analyzes"
  - "workload"
  - "network"
  - "traffic"
---

# Out-of-band integration

Product: Network Security Integration
Coverage: LOW

## Step 02 Summary

Out-of-band integration analyzes workload network traffic at scale without placing appliances directly in the traffic path.

## Extended Definition

Out-of-band integration analyzes workload network traffic at scale without placing appliances directly in the traffic path.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/network-security-integration/docs/out-of-band/out-of-band-integration-overview](https://docs.cloud.google.com/network-security-integration/docs/out-of-band/out-of-band-integration-overview)
- [https://docs.cloud.google.com/network-security-integration/docs/out-of-band/monitor-out-of-band-integration](https://docs.cloud.google.com/network-security-integration/docs/out-of-band/monitor-out-of-band-integration)
- [https://docs.cloud.google.com/network-security-integration/docs/tutorial/out-of-band-integration-tutorial](https://docs.cloud.google.com/network-security-integration/docs/tutorial/out-of-band-integration-tutorial)

## Supporting Pages

### "Out-of-band integration overview \_|\_ Network Security Integration \_|\_\

- URL: [https://docs.cloud.google.com/network-security-integration/docs/out-of-band/out-of-band-integration-overview](https://docs.cloud.google.com/network-security-integration/docs/out-of-band/out-of-band-integration-overview)
- Source ID: `site-docs-root`
- Final score: 356
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To analyze your workloads' network traffic at scale, you can use Packet Mirroring, an out-of-band Network Security Integration service.
- How out-of-band integration works Out-of-band integration uses Packet Mirroring technology to copy the traffic data from the consumer VPC network and send it to the producer VPC network through a mirroring endpoint group.
- What's next Set up producer services Set up consumer services Monitor out-of-band integration Network Security Integration overview Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Benefits of using out-of-band integration Out-of-band integration provides the following benefits: Granular traffic matching capabilities : with granular traffic matching capabilities, you can specify mirroring rules as part of your firewall policy.

### "Monitor out-of-band integration \_|\_ Network Security Integration \_|\_\

- URL: [https://docs.cloud.google.com/network-security-integration/docs/out-of-band/monitor-out-of-band-integration](https://docs.cloud.google.com/network-security-integration/docs/out-of-band/monitor-out-of-band-integration)
- Source ID: `site-docs-root`
- Final score: 290
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- What's next Network Security Integration overview Out-of-band integration overview Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Networking Network Security Integration Guides Send feedback Monitor out-of-band integration Stay organized with collections Save and categorize content based on your preferences.
- The Mirrored Network Packets chart shows the number of successful and dropped mirrored packets.
- Packet Mirroring exports monitoring data about mirrored traffic to Cloud Monitoring .

### "Set up out-of-band integration for a producer-consumer model \_|\_ Network\

- URL: [https://docs.cloud.google.com/network-security-integration/docs/tutorial/out-of-band-integration-tutorial](https://docs.cloud.google.com/network-security-integration/docs/tutorial/out-of-band-integration-tutorial)
- Source ID: `site-iam-reference`
- Final score: 286
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- It uses out-of-band integration with packet mirroring technology to mirror network traffic using user-managed virtual appliances.
- Home Documentation Networking Network Security Integration Guides Send feedback Set up out-of-band integration for a producer-consumer model Stay organized with collections Save and categorize content based on your preferences.
- This tutorial describes how to create and configure producer and consumer resources to set up out-of-band integration.
- Open the gcloud CLI and run the following command to increase the maximum transmission unit (MTU) of the Google Cloud console network. gcloud compute networks update producer-network \ --mtu=1856 In the command, specify an MTU of 1856 bytes, which is the sum of the default MTU of a Google Cloud console network (1460 bytes) and the Network Security Integration GENEVE encapsulation overhead (396 bytes). gcloud Create a VPC network. gcloud compute networks create producer-network \ --subnet-mode=custom \ --mtu=1856 \ --description="Producer VPC network" In the command, specify an MTU of 1856 bytes, which is the sum of the default MTU of a Google Cloud console network (1460 bytes) and the Network Security Integration GENEVE encapsulation overhead (396 bytes).

