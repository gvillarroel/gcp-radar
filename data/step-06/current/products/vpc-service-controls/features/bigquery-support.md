---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:13.573Z"
product_name: "VPC Service Controls"
product_slug: "vpc-service-controls"
feature_name: "BigQuery support"
feature_slug: "bigquery-support"
latest_feature_date: "2018-12-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc-service-controls/docs/supported-products"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/resources"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/vpc-perimeters-management"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/vpc-accessible-services"
keywords:
  - "vpc"
  - "controls"
  - "supports"
  - "protecting"
  - "resources"
---

# BigQuery support

Product: VPC Service Controls
Coverage: MEDIUM

## Step 02 Summary

VPC Service Controls supports protecting BigQuery resources.

## Extended Definition

VPC Service Controls supports protecting BigQuery resources.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products)
- [https://docs.cloud.google.com/vpc-service-controls/docs/resources](https://docs.cloud.google.com/vpc-service-controls/docs/resources)
- [https://docs.cloud.google.com/vpc-service-controls/docs/vpc-perimeters-management](https://docs.cloud.google.com/vpc-service-controls/docs/vpc-perimeters-management)
- [https://docs.cloud.google.com/vpc-service-controls/docs/vpc-accessible-services](https://docs.cloud.google.com/vpc-service-controls/docs/vpc-accessible-services)

## Supporting Pages

### "Supported products and limitations \_|\_ VPC Service Controls \_|\_ Google\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products)
- Source ID: `site-docs-reference-2`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Service name krmapihosting.googleapis.com Details To use Config Controller with VPC Service Controls, you must enable the following APIs inside your perimeter: Cloud Monitoring API ( monitoring.googleapis.com ) Container Registry API ( containerregistry.googleapis.com ) Google Cloud Observability API ( logging.googleapis.com ) Security Token Service API ( sts.googleapis.com ) Cloud Storage API ( storage.googleapis.com ) If you provision resources with Config Controller, you must enable the API for those resources in your service perimeter.
- You get a response with a list of methods and permissions. availableOnRestrictedVip: RESTRICTED VIP STATUS knownLimitations: LIMITATIONS STATUS name: SERVICE ADDRESS serviceSupportStage: SERVICE STATUS supportedMethods: METHODS LIST . . . title: SERVICE NAME In this response, METHODS LIST lists all the methods and permissions supported by VPC Service Controls for the specified service.
- Limitations VPC Service Controls supports Cloud Scheduler jobs only with the following targets: Cloud Run run.app endpoints Cloud Run functions functions.net endpoints Google Cloud APIs that are VPC Service Controls-compliant (either in Preview or GA)—can be in a different Google Cloud project from your Cloud Scheduler job.
- Limitations Resources such as procurement request and access request, which the Commerce Org Governance API creates at the project level, surface up to the organization level and are reviewed by the Organization Administrator without enforcing VPC Service Controls policies.

### Resources \_|\_ VPC Service Controls \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/resources](https://docs.cloud.google.com/vpc-service-controls/docs/resources)
- Source ID: `site-docs-reference`
- Final score: 155
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Networking VPC Service Controls Resources Send feedback Resources Stay organized with collections Save and categorize content based on your preferences.
- Quotas and limits Usage policies for your VPC Service Controls resources.
- Known service limitations Known service limitations for VPC Service Controls.
- Support How to get additional help with VPC Service Controls.

### "VPC networks management in service perimeters \_|\_ VPC Service Controls\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/vpc-perimeters-management](https://docs.cloud.google.com/vpc-service-controls/docs/vpc-perimeters-management)
- Source ID: `site-docs-reference-2`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Networking VPC Service Controls Guides Send feedback VPC networks management in service perimeters Stay organized with collections Save and categorize content based on your preferences.
- You can also allow access from a VPC network that is not inside your perimeter to resources inside your perimeter by specifying an ingress rule.
- If a VPC network has a custom subnet mode but if no subnets exist, then that VPC network cannot be added independently to VPC Service Controls.
- As VPC network 1 is added to perimeter SP1, VPC network 1 can access resources in perimeter SP1 but cannot access resources in perimeter SP2.

### VPC accessible services \_|\_ VPC Service Controls \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/vpc-accessible-services](https://docs.cloud.google.com/vpc-service-controls/docs/vpc-accessible-services)
- Source ID: `site-docs-reference-2`
- Final score: 147
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Because the two projects share a perimeter, the VPC network in my-authorized-compute-project has access to the resources of services in my-authorized-gcs-project , regardless of whether the perimeter protects those services.
- Home Documentation Networking VPC Service Controls Guides Send feedback VPC accessible services Stay organized with collections Save and categorize content based on your preferences.
- You have already configured your VPC network to use the restricted VIP, which limits access from your VPC network only to APIs that are supported by VPC Service Controls.
- Unfortunately, that doesn't prevent your VPC network from accessing supported services, such as the Bigtable resources in my-authorized-gcs-project .

