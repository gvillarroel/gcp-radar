---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:28:55.742Z"
product_name: "Cloud Router"
product_slug: "cloud-router"
feature_name: "VPC dynamic routing mode"
feature_slug: "vpc-dynamic-routing-mode"
latest_feature_date: "2017-10-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/router/how-to/create-router-vpc-network"
  - "https://docs.cloud.google.com/network-connectivity/docs/router/how-to/create-network-set-modes"
  - "https://docs.cloud.google.com/network-connectivity/docs/router/concepts/advertised-routes"
keywords:
  - "vpc"
  - "dynamic"
  - "routing"
  - "mode"
  - "determines"
  - "whether"
  - "router"
  - "advertises"
---

# VPC dynamic routing mode

Product: Cloud Router
Coverage: LOW

## Step 02 Summary

VPC dynamic routing mode determines whether Cloud Router advertises and propagates routes globally or regionally; VPC dynamic routing mode determines whether Cloud Router advertises and propagates routes globally or regionally.

## Extended Definition

VPC dynamic routing mode determines whether Cloud Router advertises and propagates routes globally or regionally; VPC dynamic routing mode determines whether Cloud Router advertises and propagates routes globally or regionally.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/router/how-to/create-router-vpc-network](https://docs.cloud.google.com/network-connectivity/docs/router/how-to/create-router-vpc-network)
- [https://docs.cloud.google.com/network-connectivity/docs/router/how-to/create-network-set-modes](https://docs.cloud.google.com/network-connectivity/docs/router/how-to/create-network-set-modes)
- [https://docs.cloud.google.com/network-connectivity/docs/router/concepts/advertised-routes](https://docs.cloud.google.com/network-connectivity/docs/router/concepts/advertised-routes)

## Supporting Pages

### "Create a Cloud Router to connect a VPC network to a peer network \_|\_ Google\

- URL: [https://docs.cloud.google.com/network-connectivity/docs/router/how-to/create-router-vpc-network](https://docs.cloud.google.com/network-connectivity/docs/router/how-to/create-router-vpc-network)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The "advertisedGroups": [ALL SUBNETS] flag is valid only when bgp.advertiseMode: CUSTOM , when bgp.advertisedGroups: [ALL SUBNETS] , the router-level advertisements include local subnet ranges according to the dynamic routing mode of the VPC network.
- When this flag and value are specified, the router-level advertisements include local subnet ranges according to the dynamic routing mode of the VPC network.
- To create a Cloud Router that's associated with a region of a VPC network, use the following request: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /routers { "name": " ROUTER NAME ", "network": " NETWORK ", "encryptedInterconnectRouter": True False, "bgp": { "asn": " ASN NUMBER ", "advertiseMode": " ADVERTISEMENT MODE ", "advertisedGroups": [ALL SUBNETS], "advertisedIpRanges": [ { "range": CUSTOM ADVERTISED RANGE , "description": CUSTOM ADVERTISED RANGE DESCRIPTION }, ... ], "identifierRange": ROUTER IDENTIFIER RANGE , "keepaliveInterval": KEEPALIVE TIMER } } Replace the following: ROUTER NAME : the name of the Cloud Router PROJECT ID : the project ID for the project that contains the Cloud Router NETWORK : the VPC network that contains the Cloud Router REGION : the region that contains the Cloud Router ASN NUMBER : any private ASN ( 64512 - 65534 , 4200000000 - 4294967294 ) that you aren't already using in the on-premises network Cloud Router requires you to use a private ASN, but your on-premises ASN can be public or private.
- To create a Cloud Router that's associated with a region of a VPC network, use the following command: gcloud compute routers create ROUTER NAME \ --project= PROJECT ID \ --network= NETWORK \ --region= REGION \ --asn= ASN NUMBER \ [--advertisement-mode= ADVERTISEMENT MODE ] \ [--set-advertisement-groups=ALL SUBNETS] \ [--set-advertisement-ranges= CUSTOM ADVERTISED RANGES ] \ [--bgp-identifier-range= ROUTER IDENTIFIER RANGE ] \ [--keepalive-interval= KEEPALIVE TIMER ] \ [--encrypted-interconnect-router] Replace the following: ROUTER NAME : the name of the Cloud Router PROJECT ID : the project ID for the project that contains the Cloud Router NETWORK : the VPC network that contains the Cloud Router REGION : the region that contains the Cloud Router ASN NUMBER : any private ASN ( 64512 - 65534 , 4200000000 - 4294967294 ) that you aren't already using in the on-premises network Cloud Router requires you to use a private ASN, but your on-premises ASN can be public or private.

### "Set routing and best path selection modes \_|\_ Cloud Router \_|\_ Google\

- URL: [https://docs.cloud.google.com/network-connectivity/docs/router/how-to/create-network-set-modes](https://docs.cloud.google.com/network-connectivity/docs/router/how-to/create-network-set-modes)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Dynamic routing mode effects on learned routes Create a Cloud Router to connect a VPC network to a peer network Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Set routing and best path selection modes The following Virtual Private Cloud (VPC) network settings control how all Cloud Routers work within the network: Advertised routes are controlled by the dynamic routing mode of the VPC network.
- API To set the dynamic routing and best path selection modes when creating a new VPC network, use the networks.insert method : POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/networks/ NETWORK NAME { "routingConfig": { "routingMode": " DYNAMIC ROUTING MODE " "bgpBestPathSelectionMode": " BEST PATH SELECTION MODE " "bgpAlwaysCompareMed": True False "bgpInterRegionCost": " COST " } } To change the dynamic routing and best path selection modes for an existing VPC network, use the networks.patch method : PATCH https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/networks/ NETWORK NAME { "routingConfig": { "routingMode": " DYNAMIC ROUTING MODE " "bgpBestPathSelectionMode": " BEST PATH SELECTION MODE " "bgpAlwaysCompareMed": True False "bgpInterRegionCost": " COST " } } Replace the following: PROJECT ID : the ID of the project that contains the VPC network to modify NETWORK NAME : the name of the VPC network to modify DYNAMIC ROUTING MODE : the dynamic routing mode to use—specify REGIONAL or GLOBAL .
- To confirm, click Save . gcloud To set the dynamic routing and best path selection modes when creating a new VPC network, use the gcloud compute networks create command : gcloud compute networks create NETWORK NAME \ --bgp-routing-mode = DYNAMIC ROUTING MODE \ --bgp-best-path-selection-mode = BEST PATH SELECTION MODE \ --project = PROJECT ID To change the dynamic routing and best path selection modes for an existing VPC network, use the gcloud compute networks update command : gcloud compute networks update NETWORK NAME \ --bgp-routing-mode = DYNAMIC ROUTING MODE \ --bgp-best-path-selection-mode = BEST PATH SELECTION MODE \ --project = PROJECT ID If you set --bgp-best-path-selection-mode=STANDARD , you can also use the --bgp-bps-always-compare-med , --no-bgp-bps-always-compare-med , or --bgp-bps-inter-region-cost flag.

### Advertised routes \_|\_ Cloud Router \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/router/concepts/advertised-routes](https://docs.cloud.google.com/network-connectivity/docs/router/concepts/advertised-routes)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- A custom IP address range is ignored if it exactly matches a subnet route that a Cloud Router advertises according to the dynamic routing mode of its VPC network.
- Cloud Router uses the configured base advertised priority plus an inter-regional cost to advertise subnet ranges that come from regions that don't match the region of the Cloud Router when both of the following conditions are met: The dynamic routing mode of VPC network that contains the Cloud Router is global dynamic routing mode.
- Cloud Router can advertise the following routes: Local subnet ranges NCC-imported subnet ranges NCC-imported transit dynamic routes Custom IPv4 and IPv6 prefixes Advertisement modes The advertisement mode of a Cloud Router controls whether it advertises subnet routes, custom prefixes, or both.
- With this option, note the following: Which subnet ranges are advertised and their advertised MEDs depends on the dynamic routing mode of the VPC network that contains the Cloud Router, as described in Subnet range advertisement .

