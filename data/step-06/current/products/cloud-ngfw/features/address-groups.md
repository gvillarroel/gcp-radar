---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T23:03:42.254Z"
product_name: "Cloud NGFW"
product_slug: "cloud-ngfw"
feature_name: "Address groups"
feature_slug: "address-groups"
latest_feature_date: "2023-06-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/firewall/docs/tutorials/configure-address-groups"
  - "https://docs.cloud.google.com/firewall/docs/address-groups-firewall-policies"
  - "https://docs.cloud.google.com/firewall/docs/reference/network-security/rest/v1/organizations.locations.addressGroups"
keywords:
  - "address"
  - "groups"
  - "are"
  - "reusable"
  - "collections"
  - "of"
  - "ipv4"
  - "or"
---

# Address groups

Product: Cloud NGFW
Coverage: LOW

## Step 02 Summary

Address groups are reusable collections of IPv4 or IPv6 CIDR ranges that can be referenced across firewall policy rules.

## Extended Definition

Address groups are reusable collections of IPv4 or IPv6 CIDR ranges that can be referenced across firewall policy rules.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/firewall/docs/tutorials/configure-address-groups](https://docs.cloud.google.com/firewall/docs/tutorials/configure-address-groups)
- [https://docs.cloud.google.com/firewall/docs/address-groups-firewall-policies](https://docs.cloud.google.com/firewall/docs/address-groups-firewall-policies)
- [https://docs.cloud.google.com/firewall/docs/reference/network-security/rest/v1/organizations.locations.addressGroups](https://docs.cloud.google.com/firewall/docs/reference/network-security/rest/v1/organizations.locations.addressGroups)

## Supporting Pages

### "Configure address groups for firewall policies \_|\_ Cloud Next Generation\

- URL: [https://docs.cloud.google.com/firewall/docs/tutorials/configure-address-groups](https://docs.cloud.google.com/firewall/docs/tutorials/configure-address-groups)
- Source ID: `site-docs-root`
- Final score: 236
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To add an item to an address group, run the following command: gcloud network-security address-groups add-items address-group-pc \ --items 192.168.10.0/29 \ --location global Remember, the IP range 192.168.10.0/29 is assigned to the subnet-consumer-allowed subnet of the vpc-consumer VPC network.
- To create an address group, run the following command: gcloud network-security address-groups create address-group-pc \ --type IPv4 \ --capacity 1000 \ --location global In the Authorize cloud shell dialog, click Authorize .
- Home Documentation Networking Cloud NGFW Guides Send feedback Configure address groups for firewall policies Stay organized with collections Save and categorize content based on your preferences.
- Click Create . gcloud To let IAP access the VM instances in the vpc-producer network, run the following command: To create a firewall policy, run the following command: gcloud compute network-firewall-policies create fw-policy-addressgrp \ --global To create a firewall rule that allows traffic to all destinations and enables logs, run the following command: gcloud compute network-firewall-policies rules create 100 \ --firewall-policy=fw-policy-addressgrp \ --direction=INGRESS \ --action=ALLOW \ --layer4-configs=tcp:22 \ --src-ip-ranges=35.235.240.0/20 \ --global-firewall-policy To associate the firewall policy with the producer VPC network, run the following command: gcloud compute network-firewall-policies associations create \ --firewall-policy=fw-policy-addressgrp \ --network=vpc-producer \ --name=pol-association-vpc-producer \ --global-firewall-policy To associate the firewall policy with the consumer VPC network, run the following command: gcloud compute network-firewall-policies associations create \ --firewall-policy=fw-policy-addressgrp \ --network=vpc-consumer \ --name=pol-association-vpc-consumer \ --global-firewall-policy Create a project-scoped address group Create a project-scoped address group that uses the IP address assigned to the subnet-consumer-allowed subnet of the vpc-consumer VPC network.

### "Address groups for firewall policies \_|\_ Cloud Next Generation Firewall\

- URL: [https://docs.cloud.google.com/firewall/docs/address-groups-firewall-policies](https://docs.cloud.google.com/firewall/docs/address-groups-firewall-policies)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- What's next Use address groups Firewall policy rule components Google Threat Intelligence for firewall policy rules Fully qualified domain name objects Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Name: The address group name with the following format: A string 1-63 characters long Includes only alphanumeric characters Must not start with a number You can construct a unique URL identifier for an address group in the following format: <containerType>/<containerId>/locations/<location>/addressGroups/<address-group-name> For example, a global address group example-address-group in project myproject has the following unique 4-tuple identifier: projects/myproject/locations/global/addressGroups/example-address-group Each address group has an associated type that can be either IPv4 or IPv6, but not both.
- Organization-scoped address groups Use organization-scoped address groups when you want to define a central list of IP addresses that can be used in high-level rules to provide consistent control for the entire organization and reduce the overhead for individual network and project owners to maintain common lists, such as trusted services and internal IP addresses.
- Project-scoped address groups Use project-scoped address groups when you want to define your own list of IP addresses to be used within a project or a network to block or allow a list of changing IP addresses.

### "REST Resource: organizations.locations.addressGroups \_|\_ Cloud Next Generation\

- URL: [https://docs.cloud.google.com/firewall/docs/reference/network-security/rest/v1/organizations.locations.addressGroups](https://docs.cloud.google.com/firewall/docs/reference/network-security/rest/v1/organizations.locations.addressGroups)
- Source ID: `site-docs-reference`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Networking Cloud NGFW Reference Send feedback REST Resource: organizations.locations.addressGroups Stay organized with collections Save and categorize content based on your preferences.
- Methods addItems Adds items to an address group. cloneItems Clones items from one address group to another. create Creates a new address group in a given project and location. delete Deletes an address group. get Gets details of a single address group. list Lists address groups in a given project and location. listReferences Lists references of an address group. patch Updates parameters of an address group. removeItems Removes items from an address group.
- Possible values are "IPv4" or "IPV6". items[] string Optional.
- List of supported purposes of the Address Group.

