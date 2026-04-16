---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.429Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Dynamic Private Service Connect interfaces"
feature_slug: "dynamic-private-service-connect-interfaces"
latest_feature_date: "2025-11-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/about-private-service-connect-interfaces"
  - "https://docs.cloud.google.com/vpc/docs/add-dynamic-nics"
  - "https://docs.cloud.google.com/vpc/docs/private-service-connect"
  - "https://docs.cloud.google.com/vpc/docs/about-network-attachments"
keywords:
  - "dynamic"
  - "private"
  - "connect"
  - "interfaces"
  - "let"
  - "producers"
  - "add"
  - "and"
---

# Dynamic Private Service Connect interfaces

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Dynamic Private Service Connect interfaces let service producers add and remove PSC interfaces on a VM instance without restarting or recreating the instance; Dynamic Private Service Connect interfaces allow VM instances to add or remove interfaces without restarting or recreating the instance.

## Extended Definition

Dynamic Private Service Connect interfaces let service producers add and remove PSC interfaces on a VM instance without restarting or recreating the instance; Dynamic Private Service Connect interfaces allow VM instances to add or remove interfaces without restarting or recreating the instance.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/about-private-service-connect-interfaces](https://docs.cloud.google.com/vpc/docs/about-private-service-connect-interfaces)
- [https://docs.cloud.google.com/vpc/docs/add-dynamic-nics](https://docs.cloud.google.com/vpc/docs/add-dynamic-nics)
- [https://docs.cloud.google.com/vpc/docs/private-service-connect](https://docs.cloud.google.com/vpc/docs/private-service-connect)
- [https://docs.cloud.google.com/vpc/docs/about-network-attachments](https://docs.cloud.google.com/vpc/docs/about-network-attachments)

## Supporting Pages

### "About Private Service Connect interfaces \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/about-private-service-connect-interfaces](https://docs.cloud.google.com/vpc/docs/about-private-service-connect-interfaces)
- Source ID: `site-docs-root-2`
- Final score: 357
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The main differences between virtual and dynamic Private Service Connect interfaces are described in the following table: Type Max Private Service Connect interfaces per VM Interface management Supported guest OS Virtual Private Service Connect interface Up to 9 ( depends on number of vCPUs ) Added at VM creation time; removed with VM deletion Linux, Windows Dynamic Private Service Connect interface Up to 15 ( depends on number of vCPUs ) Added at any time; can be removed independently of VM Linux only Consider using virtual Private Service Connect interfaces when you expect your interface configuration to remain unchanged throughout the VM's lifecycle.
- If a network attachment doesn't have enough IP addresses to allocate for Private Service Connect interfaces, the creation of the interface fails and returns an error: If the failure happens when creating a VM, the VM isn't created.
- Private Service Connect endpoints let service consumers initiate connections to service producers, while Private Service Connect interfaces let service producers initiate connections to service consumers (click to enlarge).
- This Private Service Connect interface connection lets producer and consumer organizations configure their VPC networks so that the two networks are connected and can communicate by using internal IP addresses.

### "Add Dynamic Network Interfaces to an instance \_|\_ Virtual Private Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/add-dynamic-nics](https://docs.cloud.google.com/vpc/docs/add-dynamic-nics)
- Source ID: `site-docs-root-2`
- Final score: 263
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- VLAN ID Replace the following: VNIC NAME : the name of the parent vNIC assigned by the operating system, such as eth1 or ens4 IP ADDRESS : the IP address of the Dynamic NIC that you created VLAN ID : the VLAN ID that you assigned to the Dynamic NIC MAC ADDRESS : the MAC address that you got in the previous step What's next Configure routing for an additional interface View network interfaces for an instance Update the network interfaces for an instance Delete Dynamic NICs from an instance Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To save your configuration, click Save . gcloud To add a Dynamic NIC to an existing instance, use the gcloud compute instances network-interfaces add command . gcloud compute instances network-interfaces add INSTANCE NAME \ --zone= ZONE \ --vlan= VLAN ID \ --parent-nic-name= PARENT VNIC NAME \ --network= NETWORK \ --subnetwork= SUBNET Replace the following: INSTANCE NAME : the name of the instance to add the Dynamic NIC to ZONE : the zone of the instance VLAN ID : the VLAN ID of the Dynamic NIC PARENT VNIC NAME : the name of the parent vNIC, such as nic0 NETWORK : the network where the Dynamic NIC attaches SUBNET : the subnet where the Dynamic NIC attaches Alternatively, you can add a Dynamic NIC to an instance when updating instance properties.
- Configure the guest agent to manage Dynamic NICs: Open or create your guest environment configuration file. edit /etc/default/instance configs.cfg Add the following to the configuration file, then save your changes and exit the editor. [NetworkInterfaces] vlan setup enabled = true manage primary nic = true For information about these settings, see the following: vlan setup enabled = true : configures the guest agent to install and manage Dynamic NICs manage primary nic = true : an additional setting required for the guest agent to manage Dynamic NICs created under nic0 For more information about editing the guest agent configuration file, see Configuration in the guest agent documentation.
- To disable the automatic management of Dynamic NICs: Open or create your guest environment configuration file. edit /etc/default/instance configs.cfg Add the following to the configuration file, then save your changes and exit the editor. [NetworkInterfaces] vlan setup enabled = false manage primary nic = false For more information about editing the guest agent configuration file, see Configuration in the guest agent documentation.

### Private Service Connect \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/private-service-connect](https://docs.cloud.google.com/vpc/docs/private-service-connect)
- Source ID: `site-docs-root`
- Final score: 260
- Re-rank relevance: N/A

Evidence snippets:
- Private Service Connect endpoints and published services let two independent companies communicate with each other by using internal IP addresses.
- Private Service Connect interfaces let service producers initiate connections to service consumers.
- Backends let you create configurations such as the following: Customer-owned domains and certificates in front of managed services Consumer-controlled failover between managed services in different regions Centralized security configuration and access control for managed services The following diagram shows an internal Application Load Balancer deployed with Private Service Connect backends that reference a published service.
- A connection between a Private Service Connect interface and a network attachment is similar to the connection between a Private Service Connect endpoint and a service attachment , but it has two key differences: A Private Service Connect interface lets a producer VPC network initiate connections to a consumer VPC network (managed service egress).

### "About network attachments \_|\_ Virtual Private Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/about-network-attachments](https://docs.cloud.google.com/vpc/docs/about-network-attachments)
- Source ID: `site-docs-root-2`
- Final score: 235
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This Private Service Connect interface connection lets producer and consumer organizations configure their VPC networks so that the two networks are connected and can communicate by using internal IP addresses.
- A network attachment can connect to both virtual and dynamic Private Service Connect interfaces.
- A connection between a network attachment and a Private Service Connect interface is similar to the connection between a Private Service Connect endpoint and a service attachment , but it has two key differences: A network attachment lets a producer VPC network initiate connections to a consumer VPC network (managed service egress).
- Network attachments let you explicitly or automatically accept connections from Private Service Connect interfaces.

