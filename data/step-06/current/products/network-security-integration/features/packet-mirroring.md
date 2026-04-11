---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:50:06.936Z"
product_name: "Network Security Integration"
product_slug: "network-security-integration"
feature_name: "Packet Mirroring"
feature_slug: "packet-mirroring"
latest_feature_date: "2024-10-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/network-security-integration/docs/out-of-band/out-of-band-integration-overview"
  - "https://docs.cloud.google.com/network-security-integration/docs/out-of-band/monitor-out-of-band-integration"
  - "https://docs.cloud.google.com/network-security-integration/docs/tutorial/out-of-band-integration-tutorial"
keywords:
  - "packet"
  - "mirroring"
  - "is"
  - "an"
  - "out"
  - "of"
  - "band"
  - "network"
---

# Packet Mirroring

Product: Network Security Integration
Coverage: LOW

## Step 02 Summary

Packet Mirroring is an out-of-band Network Security Integration capability for analyzing workload network traffic at scale.

## Extended Definition

Packet Mirroring is an out-of-band Network Security Integration capability for analyzing workload network traffic at scale.

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
- Final score: 348
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- How out-of-band integration works Out-of-band integration uses Packet Mirroring technology to copy the traffic data from the consumer VPC network and send it to the producer VPC network through a mirroring endpoint group.
- Enabling mirroring is not recommended for 3rd generation machine families and later because the rate of the slower route cancels out their high-bandwidth networking benefits.
- To analyze your workloads' network traffic at scale, you can use Packet Mirroring, an out-of-band Network Security Integration service.
- What's next Set up producer services Set up consumer services Monitor out-of-band integration Network Security Integration overview Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Monitor out-of-band integration \_|\_ Network Security Integration \_|\_\

- URL: [https://docs.cloud.google.com/network-security-integration/docs/out-of-band/monitor-out-of-band-integration](https://docs.cloud.google.com/network-security-integration/docs/out-of-band/monitor-out-of-band-integration)
- Source ID: `site-docs-root`
- Final score: 330
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- What's next Network Security Integration overview Out-of-band integration overview Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Networking Network Security Integration Guides Send feedback Monitor out-of-band integration Stay organized with collections Save and categorize content based on your preferences.
- The Mirrored Network Packets chart shows the number of successful and dropped mirrored packets.
- The dashboard provides data analysis in the following default intervals: 1H (one hour) 6H (six hours) 1D (one day) 1W (one week) 6W (six weeks) Using the controls in the upper-right hand corner of the Cloud Monitoring page, you can manually request analysis in any interval from 6W to 1 minute.

### "Set up out-of-band integration for a producer-consumer model \_|\_ Network\

- URL: [https://docs.cloud.google.com/network-security-integration/docs/tutorial/out-of-band-integration-tutorial](https://docs.cloud.google.com/network-security-integration/docs/tutorial/out-of-band-integration-tutorial)
- Source ID: `site-iam-reference`
- Final score: 298
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- It uses out-of-band integration with packet mirroring technology to mirror network traffic using user-managed virtual appliances.
- GW IP=$(gcloud compute networks subnets describe producer-subnet \ --region= us-west1 \ --format="get(gatewayAddress)") Create a VM instance. gcloud compute instances create producer-instance \ --image-project=debian-cloud \ --image-family=debian-11 \ --machine-type=e2-micro \ --zone= us-west1-b \ --network-interface="subnet= producer-subnet ,no-address" \ --metadata=startup-script='#!/bin/bash Log incoming packets from the gateway IP and the GENEVE 6081 port. iptables -A INPUT -p udp -s '"$GW IP"'/32 --dport 6081 -j LOG --log-prefix "[NSI MIRRORING] " Spin up a simple server for health checks on port 80. nohup python3 -u -m http.server 80 &' Add the VM instance to the instance group. gcloud compute instance-groups unmanaged add-instances producer-instance-group \ --instances= producer-instance \ --zone= us-west1-b Add the instance group to the backend service. gcloud compute backend-services add-backend producer-backend-service \ --region= us-west1 \ --instance-group= producer-instance-group \ --instance-group-zone= us-west1-b Create a firewall policy and add firewall rules In this section, you create a firewall policy and add firewall rules to allow UDP traffic, Google Cloud health checks, and SSH connections to the producer VM instance through Identity-Aware Proxy (IAP).
- Click Create . gcloud Create a regional health check. gcloud compute health-checks create tcp producer-health-check \ --region= us-west1 \ --port=80 Create the backend service. gcloud compute backend-services create producer-backend-service \ --protocol=UDP \ --region= us-west1 \ --health-checks= producer-health-check \ --health-checks-region= us-west1 \ --load-balancing-scheme=INTERNAL Create a forwarding rule for the backend service. gcloud compute forwarding-rules create producer-ilb-fr \ --backend-service= producer-backend-service \ --region= us-west1 \ --network= producer-network \ --subnet= producer-subnet \ --ip-protocol=UDP \ --load-balancing-scheme=INTERNAL \ --is-mirroring-collector \ --ports=6081 Create a VM instance and add it to the instance group In this section, you create a VM instance with a startup script that sets up a logging server for GENEVE encapsulated packets.
- Create a mirroring deployment. gcloud network-security mirroring-deployments create producer-deployment \ --location= us-west1-b \ --forwarding-rule= producer-ilb-fr \ --forwarding-rule-location= us-west1 \ --mirroring-deployment-group=projects/ PROJECT ID /locations/global/mirroringDeploymentGroups/ producer-deployment-group \ --no-async Create consumer resources In this section, you create the following resources for the consumer: A custom VPC network with a subnet A server and a client VM A firewall policy and a rule to mirror traffic A mirroring endpoint group and a mirroring endpoint group association A security profile and a security profile group Create a custom VPC network In this section, you create a VPC network with a subnet.

