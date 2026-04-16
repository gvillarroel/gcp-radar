---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:13.562Z"
product_name: "VPC Service Controls"
product_slug: "vpc-service-controls"
feature_name: "VPC accessible services"
feature_slug: "vpc-accessible-services"
latest_feature_date: "2020-06-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc-service-controls/docs/vpc-accessible-services"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/supported-products"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/set-up-service-perimeter-verify-access"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/service-perimeters"
keywords:
  - "vpc"
  - "accessible"
  - "services"
  - "limits"
  - "network"
  - "endpoints"
  - "and"
  - "vms"
---

# VPC accessible services

Product: VPC Service Controls
Coverage: MEDIUM

## Step 02 Summary

VPC accessible services limits network endpoints and VMs in a perimeter to only services protected by that perimeter.

## Extended Definition

VPC accessible services limits network endpoints and VMs in a perimeter to only services protected by that perimeter.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc-service-controls/docs/vpc-accessible-services](https://docs.cloud.google.com/vpc-service-controls/docs/vpc-accessible-services)
- [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products)
- [https://docs.cloud.google.com/vpc-service-controls/docs/set-up-service-perimeter-verify-access](https://docs.cloud.google.com/vpc-service-controls/docs/set-up-service-perimeter-verify-access)
- [https://docs.cloud.google.com/vpc-service-controls/docs/service-perimeters](https://docs.cloud.google.com/vpc-service-controls/docs/service-perimeters)

## Supporting Pages

### VPC accessible services \_|\_ VPC Service Controls \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/vpc-accessible-services](https://docs.cloud.google.com/vpc-service-controls/docs/vpc-accessible-services)
- Source ID: `site-docs-reference-2`
- Final score: 333
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The VPC accessible services feature limits the set of services that are accessible from network endpoints inside your service perimeter.
- To limit the VPC network's access to only the storage service, you enable VPC accessible services and set storage.googleapis.com as an allowed service: gcloud access-context-manager perimeters update my-authorized-perimeter \ --enable-vpc-accessible-services \ --add-vpc-allowed-services = storage.googleapis.com Success!
- Home Documentation Networking VPC Service Controls Guides Send feedback VPC accessible services Stay organized with collections Save and categorize content based on your preferences.
- The VPC accessible services feature applies only to traffic from your VPC network endpoints to Google APIs.

### "Supported products and limitations \_|\_ VPC Service Controls \_|\_ Google\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products)
- Source ID: `site-docs-reference-2`
- Final score: 275
- Re-rank relevance: N/A

Evidence snippets:
- When placing or creating a Looker (Google Cloud core) instance inside a VPC Service Controls service perimeter, you must remove the default route to the internet by calling the services.enableVpcServiceControls method or by running the following gcloud command: gcloud services vpc-peerings enable-vpc-service-controls --network=your-network service=servicenetworking.googleapis.com Removing the default route restricts outgoing traffic to only VPC Service Controls compliant services .
- Service name meshca.googleapis.com, meshconfig.googleapis.com, trafficdirector.googleapis.com, networkservices.googleapis.com, networksecurity.googleapis.com Details The API for Cloud Service Mesh can be protected by VPC Service Controls, and the product can be used normally inside service perimeters.
- Service name networkservices.googleapis.com, networksecurity.googleapis.com Details The APIs for Secure Web Proxy can be protected by VPC Service Controls and the product can be used normally inside service perimeters.
- To resolve this violation, add the BigQuery API to both the restricted services list and the VPC accessible services list of the same perimeter.

### "Set up a VPC Service Controls perimeter for a Virtual Private Cloud network\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/set-up-service-perimeter-verify-access](https://docs.cloud.google.com/vpc-service-controls/docs/set-up-service-perimeter-verify-access)
- Source ID: `site-docs-root-2`
- Final score: 261
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, the following command uses the Resource Manager service, which is not configured in the VPC accessible services allowlist. gcloud projects describe PROJECT ID The output is similar to the following: "ERROR: (gcloud.projects.list) PERMISSION DENIED: Request is prohibited by organization's policy." Your Compute Engine instance and other network endpoints can only request services that are configured in the VPC accessible services allowlist.
- Verify that the perimeter allows internal traffic to restricted services inside the perimeter In this section, you verify that the perimeter allows traffic from network endpoints inside your perimeter if the service is also configured in VPC accessible services .
- The previous diagram illustrates how a perimeter allows traffic from network endpoints inside the perimeter to reach restricted services that you also configured as VPC accessible services.
- Services that you did not configure as VPC accessible services cannot be reached from network endpoints inside the perimeter.

### "Service perimeter details and configuration \_|\_ VPC Service Controls \_\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/service-perimeters](https://docs.cloud.google.com/vpc-service-controls/docs/service-perimeters)
- Source ID: `site-docs-reference`
- Final score: 249
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Set up VPC accessible services When you enable VPC accessible services for a perimeter, access from network endpoints inside your perimeter is limited to a set of services that you specify.
- Also, the services that are accessible inside a perimeter, such as from VMs in a VPC network that is hosted inside a perimeter, can be restricted using the VPC accessible services feature.
- To protect Google Cloud services in your projects and mitigate the risk of data exfiltration, you can specify service perimeters at the project or VPC network level.
- Home Documentation Networking VPC Service Controls Guides Send feedback Service perimeter details and configuration Stay organized with collections Save and categorize content based on your preferences.

