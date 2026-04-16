---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:02.934Z"
product_name: "Network Connectivity Center"
product_slug: "network-connectivity-center"
feature_name: "Producer VPC spokes for Google Cloud NetApp Volumes"
feature_slug: "producer-vpc-spokes-for-google-cloud-netapp-volumes"
latest_feature_date: "2026-02-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-supported-services"
  - "https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-overview"
  - "https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes"
  - "https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/connect-vpc-networks"
keywords:
  - "producer"
  - "vpc"
  - "spokes"
  - "for"
  - "netapp"
  - "volumes"
---

# Producer VPC spokes for Google Cloud NetApp Volumes

Product: Network Connectivity Center
Coverage: MEDIUM

## Step 02 Summary

Producer VPC spokes support Google Cloud NetApp Volumes.

## Extended Definition

Producer VPC spokes support Google Cloud NetApp Volumes.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-supported-services](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-supported-services)
- [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-overview](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-overview)
- [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes)
- [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/connect-vpc-networks](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/connect-vpc-networks)

## Supporting Pages

### "Supported services for producer VPC spokes \_|\_ Network Connectivity Center\

- URL: [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-supported-services](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-supported-services)
- Source ID: `site-iam-reference`
- Final score: 254
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- AlloyDB for PostgreSQL Apigee Cloud Build Cloud SQL Google Cloud NetApp Volumes Looker (Google Cloud core) Memorystore for Memcached Memorystore for Redis Parallelstore Vertex AI You can check whether a service producer exports only subnet routes by listing peering routes and ensuring that the associated peering connection only has routes of type Peering subnet .
- Home Documentation Networking Network Connectivity Network Connectivity Center Guides Send feedback Supported services for producer VPC spokes Stay organized with collections Save and categorize content based on your preferences.
- For information about producer Virtual Private Cloud (VPC) spokes in Network Connectivity Center (NCC), see Producer VPC spokes .
- The following Google services consumed through private services access can be used with producer VPC spokes.

### "Producer VPC spokes \_|\_ Network Connectivity Center \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-overview](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-overview)
- Source ID: `site-iam-reference`
- Final score: 228
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Producer VPC spokes support the following services: Google services offered by private services access Google Cloud NetApp Volumes How it works When you create a producer VPC spoke, you provide the following: The existing VPC spoke of your consumer network that is peered with the producer network.
- Supported services For a list of supported services, see Supported services for producer VPC spokes .
- Considerations The following sections describe considerations for using producer VPC spokes.
- Properties unique to producer VPC spokes Producer VPC spokes have the following unique properties and requirements: Property Description Dependencies Creating a producer VPC spoke requires that you have the following existing resources and connections: A VPC network that consumes a supported service from a producer network through VPC Network Peering.

### "Route exchange with VPC spokes \_|\_ Network Connectivity Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes)
- Source ID: `site-iam-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- To establish connectivity between hybrid spokes and VPC spokes: Network administrators for the routing VPC networks must first review the Cloud Router path selection and dynamic routing mode: NCC hybrid spokes only support the Cloud Router legacy best path selection mode.
- For Private Service Connect connection propagation to work with hybrid spokes, the routing VPC network must also be added as a VPC spoke.
- Spoke administrators or network administrators for the routing VPC networks must configure advertisement of subnet routes in VPC spokes.
- A network administrator for the routing VPC network can advertise custom address ranges on the Cloud Routers for the hybrid spokes.

### "VPC-to-VPC topology that uses a third-party appliance \_|\_ Network Connectivity\

- URL: [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/connect-vpc-networks](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/connect-vpc-networks)
- Source ID: `site-iam-reference`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- Use a firewall appliance (click to enlarge) Note: This topology would also work for a scenario where you want to use an SD-WAN router, a load balancer, or some other type of appliance in two VPC networks.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Home Documentation Networking Network Connectivity Network Connectivity Center Guides Send feedback VPC-to-VPC topology that uses a third-party appliance Stay organized with collections Save and categorize content based on your preferences.
- The router appliance instance engages in a total of four Border Gateway Protocol (BGP) peering sessions: In VPC network A, Cloud Router A establishes two sessions with the router appliance instance.

