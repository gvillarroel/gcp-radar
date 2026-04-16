---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:03.644Z"
product_name: "Network Security Integration"
product_slug: "network-security-integration"
feature_name: "In-band integration"
feature_slug: "in-band-integration"
latest_feature_date: "2026-01-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-security-integration/docs/in-band/in-band-integration-overview"
  - "https://docs.cloud.google.com/network-security-integration/docs/in-band/monitor-in-band-integration"
  - "https://docs.cloud.google.com/network-security-integration/docs/in-band/in-band-integration-tutorial"
  - "https://docs.cloud.google.com/network-security-integration/docs/out-of-band/out-of-band-integration-overview"
keywords:
  - "in"
  - "band"
  - "integration"
  - "places"
  - "network"
  - "security"
  - "appliances"
  - "directly"
---

# In-band integration

Product: Network Security Integration
Coverage: MEDIUM

## Step 02 Summary

In-band integration places network security appliances directly in the traffic path to inspect traffic before it reaches its destination.

## Extended Definition

In-band integration places network security appliances directly in the traffic path to inspect traffic before it reaches its destination.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-security-integration/docs/in-band/in-band-integration-overview](https://docs.cloud.google.com/network-security-integration/docs/in-band/in-band-integration-overview)
- [https://docs.cloud.google.com/network-security-integration/docs/in-band/monitor-in-band-integration](https://docs.cloud.google.com/network-security-integration/docs/in-band/monitor-in-band-integration)
- [https://docs.cloud.google.com/network-security-integration/docs/in-band/in-band-integration-tutorial](https://docs.cloud.google.com/network-security-integration/docs/in-band/in-band-integration-tutorial)
- [https://docs.cloud.google.com/network-security-integration/docs/out-of-band/out-of-band-integration-overview](https://docs.cloud.google.com/network-security-integration/docs/out-of-band/out-of-band-integration-overview)

## Supporting Pages

### "In-band integration overview \_|\_ Network Security Integration \_|\_ Google\

- URL: [https://docs.cloud.google.com/network-security-integration/docs/in-band/in-band-integration-overview](https://docs.cloud.google.com/network-security-integration/docs/in-band/in-band-integration-overview)
- Source ID: `site-docs-root`
- Final score: 463
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Network Security Integration in-band integration lets you insert your own network security appliances, such as firewalls or intrusion detection systems, directly in the network traffic path for inspection.
- In-band integration uses Generic Network Virtualization Encapsulation (GENEVE) encapsulation to securely transport packets between the sending or receiving virtual machines (VMs), and the packet processing VMs (your network appliances).
- Benefits of in-band integration In-band integration provides the following benefits: Scalability : deploys packet processing VMs that function as VM-based firewalls, intrusion detection systems, or network appliances.
- Network Security Integration offers in-band integration using Cloud Next Generation Firewall and Packet Intercept technologies, providing a service-centric approach to packet processing pipelines.

### "Monitor in-band integration \_|\_ Network Security Integration \_|\_ Google\

- URL: [https://docs.cloud.google.com/network-security-integration/docs/in-band/monitor-in-band-integration](https://docs.cloud.google.com/network-security-integration/docs/in-band/monitor-in-band-integration)
- Source ID: `site-docs-root`
- Final score: 409
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- What's next Network Security Integration overview In-band integration overview Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Networking Network Security Integration Guides Send feedback Monitor in-band integration Stay organized with collections Save and categorize content based on your preferences.
- Network Security Integration in-band integration exports monitoring data about intercepted traffic to Cloud Monitoring .
- In-band integration provides the following consumer metrics for intercepted packets: /intercept/intercepted packets count /intercept/intercepted bytes count For more information, see the metrics list for Compute Engine in the Monitoring documentation.

### "Set up in-band integration for a producer-consumer model \_|\_ Network Security\

- URL: [https://docs.cloud.google.com/network-security-integration/docs/in-band/in-band-integration-tutorial](https://docs.cloud.google.com/network-security-integration/docs/in-band/in-band-integration-tutorial)
- Source ID: `site-iam-reference`
- Final score: 389
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Networking Network Security Integration Guides Send feedback Set up in-band integration for a producer-consumer model Stay organized with collections Save and categorize content based on your preferences.
- Open the Google Cloud CLI and run the following command to increase the maximum transmission unit (MTU) of the VPC network. gcloud compute networks update producer-network \ --mtu=1856 In the command, you specify MTU of 1856 bytes, which is the sum of the default MTU of a VPC network (1460 bytes) and the Network Security Integration GENEVE encapsulation overhead (396 bytes). gcloud Create a VPC network. gcloud compute networks create producer-network \ --subnet-mode=custom \ --mtu=1856 \ --description="Producer VPC network" In the command, you specify maximum transmission unit (MTU) of 1856 bytes, which is the sum of the default MTU of a VPC network (1460 bytes) and the Network Security Integration GENEVE encapsulation overhead (396 bytes).
- It uses in-band integration with packet intercept technology to insert third-party network devices into the network traffic flow and perform deep packet inspection.
- Network Security Integration uses the producer-consumer model to inspect and monitor data.

### "Out-of-band integration overview \_|\_ Network Security Integration \_|\_\

- URL: [https://docs.cloud.google.com/network-security-integration/docs/out-of-band/out-of-band-integration-overview](https://docs.cloud.google.com/network-security-integration/docs/out-of-band/out-of-band-integration-overview)
- Source ID: `site-docs-root`
- Final score: 373
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Third-party appliances support Supported by hierarchical firewall policies Supported by regional network firewall policies Supported by global network firewall policies VPC and Network Security Integration Packet Mirroring interoperability On the workload level, the Network Security Integration Packet Mirroring takes precedence over VPC Packet Mirroring.
- What's next Set up producer services Set up consumer services Monitor out-of-band integration Network Security Integration overview Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Networking Network Security Integration Guides Send feedback Out-of-band integration overview Stay organized with collections Save and categorize content based on your preferences.
- To analyze your workloads' network traffic at scale, you can use Packet Mirroring, an out-of-band Network Security Integration service.

