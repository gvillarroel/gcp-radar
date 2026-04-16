---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:13.571Z"
product_name: "VPC Service Controls"
product_slug: "vpc-service-controls"
feature_name: "Cloud Key Management Service support"
feature_slug: "cloud-key-management-service-support"
latest_feature_date: "2019-05-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc-service-controls/docs/supported-products"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/configure-iam-roles"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/vpc-perimeters-management"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/architect-perimeters"
keywords:
  - "key"
  - "management"
  - "vpc"
  - "controls"
  - "supports"
  - "protecting"
  - "resources"
---

# Cloud Key Management Service support

Product: VPC Service Controls
Coverage: MEDIUM

## Step 02 Summary

VPC Service Controls supports protecting Cloud Key Management Service resources.

## Extended Definition

VPC Service Controls supports protecting Cloud Key Management Service resources.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products)
- [https://docs.cloud.google.com/vpc-service-controls/docs/configure-iam-roles](https://docs.cloud.google.com/vpc-service-controls/docs/configure-iam-roles)
- [https://docs.cloud.google.com/vpc-service-controls/docs/vpc-perimeters-management](https://docs.cloud.google.com/vpc-service-controls/docs/vpc-perimeters-management)
- [https://docs.cloud.google.com/vpc-service-controls/docs/architect-perimeters](https://docs.cloud.google.com/vpc-service-controls/docs/architect-perimeters)

## Supporting Pages

### "Supported products and limitations \_|\_ VPC Service Controls \_|\_ Google\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products)
- Source ID: `site-docs-reference-2`
- Final score: 237
- Re-rank relevance: N/A

Evidence snippets:
- If you have VPC Service Controls configured, before you create a Google Security Operations instance, move the Google Cloud project and Cloud Key Management Service (Cloud KMS) for customer-managed encryption keys (CMEK) project outside the VPC Service Controls perimeter.
- When a project is added to a VPC Service Controls perimeter, all tag keys and corresponding tag values under the project are considered to be resources within the perimeter.
- Limitations The Cloud Key Management Service integration with VPC Service Controls has no known limitations.
- Service name krmapihosting.googleapis.com Details To use Config Controller with VPC Service Controls, you must enable the following APIs inside your perimeter: Cloud Monitoring API ( monitoring.googleapis.com ) Container Registry API ( containerregistry.googleapis.com ) Google Cloud Observability API ( logging.googleapis.com ) Security Token Service API ( sts.googleapis.com ) Cloud Storage API ( storage.googleapis.com ) If you provision resources with Config Controller, you must enable the API for those resources in your service perimeter.

### "Configure IAM roles in ingress and egress rules \_|\_ VPC Service Controls\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/configure-iam-roles](https://docs.cloud.google.com/vpc-service-controls/docs/configure-iam-roles)
- Source ID: `site-docs-reference`
- Final score: 199
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Key Management Service cloudkms.googleapis.com When you use customer-managed encryption keys (CMEK) , VPC Service Controls doesn't support the use of Cloud KMS roles in the ingress and egress rules.
- Cloud Storage storage.googleapis.com VPC Service Controls supports custom roles for Cloud Storage in the ingress and egress rules, but not the predefined Cloud Storage roles .
- VPC Service Controls uses ingress and egress rules to allow access to and from the resources and clients protected by service perimeters.
- Cloud Storage roles/storage.objectUser storage.objects.move Identity and Access Management roles/iam.serviceAccountTokenCreator iam.serviceAccounts.signBlob iam.serviceAccounts.signJwt Resource Manager roles/resourcemanager.tagAdmin resourcemanager.tagKeys.get resourcemanager.tagValues.get roles/resourcemanager.tagUser resourcemanager.tagKeys.get resourcemanager.tagValues.get alloydb. certificatemanager. clouddeploy. roles/resourcemanager.tagViewer resourcemanager.tagKeys.get resourcemanager.tagValues.get alloydb. certificatemanager. clouddeploy.

### "VPC networks management in service perimeters \_|\_ VPC Service Controls\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/vpc-perimeters-management](https://docs.cloud.google.com/vpc-service-controls/docs/vpc-perimeters-management)
- Source ID: `site-docs-reference-2`
- Final score: 199
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Networking VPC Service Controls Guides Send feedback VPC networks management in service perimeters Stay organized with collections Save and categorize content based on your preferences.
- You can also allow access from a VPC network that is not inside your perimeter to resources inside your perimeter by specifying an ingress rule.
- If a VPC network has a custom subnet mode but if no subnets exist, then that VPC network cannot be added independently to VPC Service Controls.
- As VPC network 1 is added to perimeter SP1, VPC network 1 can access resources in perimeter SP1 but cannot access resources in perimeter SP2.

### "Design and architect service perimeters \_|\_ VPC Service Controls \_|\_\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/architect-perimeters](https://docs.cloud.google.com/vpc-service-controls/docs/architect-perimeters)
- Source ID: `site-docs-reference`
- Final score: 174
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Since services and network resources within a perimeter can communicate freely with the necessary IAM and network controls permissions, the teams responsible for perimeter management will primarily be concerned with north-south access, which is access from the internet to resources inside the perimeter.
- We recommend that you layer your perimeter with additional security controls and best practices, such as ensuring that resources within the VPC network don't have direct internet egress.
- When an organization uses multiple smaller perimeters, perimeter management teams must devote resources to managing east-west traffic between an organization's perimeters in addition to north-south traffic from outside the organization.
- Because VPC Service Controls protection affects cloud services functionality, we recommend that you plan the enablement of VPC Service Controls in advance, and consider VPC Service Controls during architecture design.

