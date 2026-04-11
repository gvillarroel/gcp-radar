---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:28:55.737Z"
product_name: "Cloud Router"
product_slug: "cloud-router"
feature_name: "Standard best path selection mode"
feature_slug: "standard-best-path-selection-mode"
latest_feature_date: "2024-12-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/router/how-to/create-network-set-modes"
  - "https://docs.cloud.google.com/network-connectivity/docs/router/release-notes"
  - "https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes"
keywords:
  - "standard"
  - "best"
  - "path"
  - "selection"
  - "mode"
  - "provides"
  - "as"
  - "based"
---

# Standard best path selection mode

Product: Cloud Router
Coverage: LOW

## Step 02 Summary

Standard best path selection mode provides AS path-based route ranking behavior and greater control over BGP prefix selection; Standard best path selection mode provides AS path-based route ranking behavior and greater control over BGP prefix selection.

## Extended Definition

Standard best path selection mode provides AS path-based route ranking behavior and greater control over BGP prefix selection; Standard best path selection mode provides AS path-based route ranking behavior and greater control over BGP prefix selection.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/router/how-to/create-network-set-modes](https://docs.cloud.google.com/network-connectivity/docs/router/how-to/create-network-set-modes)
- [https://docs.cloud.google.com/network-connectivity/docs/router/release-notes](https://docs.cloud.google.com/network-connectivity/docs/router/release-notes)
- [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes)

## Supporting Pages

### "Set routing and best path selection modes \_|\_ Cloud Router \_|\_ Google\

- URL: [https://docs.cloud.google.com/network-connectivity/docs/router/how-to/create-network-set-modes](https://docs.cloud.google.com/network-connectivity/docs/router/how-to/create-network-set-modes)
- Source ID: `site-docs-root`
- Final score: 204
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you select standard best path selection mode, then you can do the following: Choose if Always compare MED is enabled: If selected, always compares MED values without considering ASN values.
- To confirm, click Save . gcloud To set the dynamic routing and best path selection modes when creating a new VPC network, use the gcloud compute networks create command : gcloud compute networks create NETWORK NAME \ --bgp-routing-mode = DYNAMIC ROUTING MODE \ --bgp-best-path-selection-mode = BEST PATH SELECTION MODE \ --project = PROJECT ID To change the dynamic routing and best path selection modes for an existing VPC network, use the gcloud compute networks update command : gcloud compute networks update NETWORK NAME \ --bgp-routing-mode = DYNAMIC ROUTING MODE \ --bgp-best-path-selection-mode = BEST PATH SELECTION MODE \ --project = PROJECT ID If you set --bgp-best-path-selection-mode=STANDARD , you can also use the --bgp-bps-always-compare-med , --no-bgp-bps-always-compare-med , or --bgp-bps-inter-region-cost flag.
- In the Best path selection mode section, the value indicates the type of best path selection mode, either Standard or Legacy . gcloud Run the gcloud compute networks describe command : gcloud compute networks describe NETWORK NAME \ --format = "get(routingConfig)" \ --project = PROJECT ID Replace the following: NETWORK NAME : the name of the VPC network PROJECT ID : the ID of the project that contains the VPC network In the output, see the following: The routingMode is the dynamic routing mode of the VPC network.
- In the following example, you specify either create or update : gcloud compute networks { create update } NETWORK NAME \ --bgp-routing-mode = DYNAMIC ROUTING MODE \ --bgp-best-path-selection-mode = STANDARD \ -- [ no- ] bgp-bps-always-compare-med \ --bgp-bps-inter-region-cost = COST MODE \ --project = PROJECT ID Replace the following: NETWORK NAME : the name of the VPC network to modify DYNAMIC ROUTING MODE : the dynamic routing mode to use—specify REGIONAL or GLOBAL .

### Cloud Router release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/router/release-notes](https://docs.cloud.google.com/network-connectivity/docs/router/release-notes)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- August 27, 2024 Feature Cloud Router supports standard best path selection mode in Preview , which offers support for consistent AS path-based routing and more control over how BGP prefixes are ranked in your VPC networks.
- December 17, 2024 Feature Standard best path selection mode is now generally available .
- For more information, see Best path selection modes .
- For more information, see Best path selection modes .

### "Route exchange with VPC spokes \_|\_ Network Connectivity Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes)
- Source ID: `site-iam-reference`
- Final score: 112
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To establish connectivity between hybrid spokes and VPC spokes: Network administrators for the routing VPC networks must first review the Cloud Router path selection and dynamic routing mode: NCC hybrid spokes only support the Cloud Router legacy best path selection mode.
- The dynamic routing mode and best path selection mode of the workload VPC network aren't relevant because the workload VPC network doesn't contain the Cloud Router resources that manage the BGP sessions for the VLAN attachments.
- This example shows how the multi-exit discriminator (MED) value, dynamic routing mode, and Cloud Router best path selection algorithm control the creation of dynamic routes in both the routing VPC network and in VPC spokes.
- For detailed information about Cloud Router path selection, see Best path selection modes in the Cloud Router documentation.

