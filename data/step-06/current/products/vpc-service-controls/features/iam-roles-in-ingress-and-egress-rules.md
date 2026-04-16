---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:13.518Z"
product_name: "VPC Service Controls"
product_slug: "vpc-service-controls"
feature_name: "IAM roles in ingress and egress rules"
feature_slug: "iam-roles-in-ingress-and-egress-rules"
latest_feature_date: "2025-03-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc-service-controls/docs/configure-iam-roles"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/ingress-egress-rules"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/configuring-ingress-egress-policies"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/supported-identities"
keywords:
  - "iam"
  - "roles"
  - "in"
  - "ingress"
  - "and"
  - "egress"
  - "rules"
  - "vpc"
---

# IAM roles in ingress and egress rules

Product: VPC Service Controls
Coverage: MEDIUM

## Step 02 Summary

VPC Service Controls lets you use IAM roles in ingress and egress rules to allow access to resources protected by service perimeters.

## Extended Definition

VPC Service Controls lets you use IAM roles in ingress and egress rules to allow access to resources protected by service perimeters.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc-service-controls/docs/configure-iam-roles](https://docs.cloud.google.com/vpc-service-controls/docs/configure-iam-roles)
- [https://docs.cloud.google.com/vpc-service-controls/docs/ingress-egress-rules](https://docs.cloud.google.com/vpc-service-controls/docs/ingress-egress-rules)
- [https://docs.cloud.google.com/vpc-service-controls/docs/configuring-ingress-egress-policies](https://docs.cloud.google.com/vpc-service-controls/docs/configuring-ingress-egress-policies)
- [https://docs.cloud.google.com/vpc-service-controls/docs/supported-identities](https://docs.cloud.google.com/vpc-service-controls/docs/supported-identities)

## Supporting Pages

### "Configure IAM roles in ingress and egress rules \_|\_ VPC Service Controls\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/configure-iam-roles](https://docs.cloud.google.com/vpc-service-controls/docs/configure-iam-roles)
- Source ID: `site-docs-reference`
- Final score: 459
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Networking VPC Service Controls Guides Send feedback Configure IAM roles in ingress and egress rules Stay organized with collections Save and categorize content based on your preferences.
- However, there are a few IAM roles in these services that are either partially supported or not supported for use in the ingress and egress rules, because some or all of the underlying permissions are not supported: Using a partially supported IAM role in an ingress or egress rule makes the rule ineffective for requests or actions specific to the underlying unsupported permissions .
- Supported products You can use the IAM roles of the following Google Cloud services in the ingress and egress rules: Product Limitations Artifact Registry artifactregistry.googleapis.com No known limitations.
- Cloud Key Management Service cloudkms.googleapis.com When you use customer-managed encryption keys (CMEK) , VPC Service Controls doesn't support the use of Cloud KMS roles in the ingress and egress rules.

### Ingress and egress rules \_|\_ VPC Service Controls \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/ingress-egress-rules](https://docs.cloud.google.com/vpc-service-controls/docs/ingress-egress-rules)
- Source ID: `site-docs-reference`
- Final score: 361
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can configure identity groups and third-party identities and IAM roles ( Preview ) in ingress and egress rules.
- Home Documentation Networking VPC Service Controls Guides Send feedback Ingress and egress rules Stay organized with collections Save and categorize content based on your preferences.
- VPC Service Controls uses ingress and egress rules to allow access to and from the resources and clients protected by service perimeters.
- This page explains ingress and egress rules for VPC Service Controls.

### "Configuring ingress and egress policies \_|\_ VPC Service Controls \_|\_\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/configuring-ingress-egress-policies](https://docs.cloud.google.com/vpc-service-controls/docs/configuring-ingress-egress-policies)
- Source ID: `site-docs-reference`
- Final score: 315
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more details, see Get the name and etag of an access policy Run the following command during the creation of a perimeter to create an ingress/egress policy: gcloud access-context-manager perimeters create PERIMETER NAME --title= TITLE --ingress-policies= INGRESS-FILENAME .yaml --restricted-services= SERVICE --resources="projects/ PROJECT " gcloud access-context-manager perimeters create PERIMETER NAME --title= TITLE --egress-policies= -EGRESS-FILENAME .yaml --restricted-services= SERVICE --resources="projects/ PROJECT " For example: gcloud access-context-manager perimeters create my-perimeter --title=perimeter-for-project-1 --ingress-policies=my-ingress-rule.yaml --restricted-services=storage.googelapis.com --resources="projects/myproject" For information about configuring ingress and egress rules as YAML files, see Ingress rules reference and Egress rules reference .
- For more details, see Get the name and etag of an access policy To update a perimeter policy, run one of the following commands replacing variables with appropriate values: gcloud access-context-manager perimeters update PERIMETER NAME --set-ingress-policies= INGRESS-FILENAME .yaml gcloud access-context-manager perimeters update PERIMETER NAME --set-egress-policies= EGRESS-FILENAME .yaml For example: gcloud access-context-manager perimeters update my-perimeter --set-ingress-policies=my-ingress-rule.yaml For information about configuring ingress and egress rules as YAML files, see Ingress rules reference and Egress rules reference .
- Home Documentation Networking VPC Service Controls Guides Send feedback Configuring ingress and egress policies Stay organized with collections Save and categorize content based on your preferences.
- Setting ingress and egress policies during perimeter creation Console In the Google Cloud console navigation menu, click Security , and then click VPC Service Controls .

### "Supported identities for ingress and egress rules \_|\_ VPC Service Controls\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/supported-identities](https://docs.cloud.google.com/vpc-service-controls/docs/supported-identities)
- Source ID: `site-docs-reference-2`
- Final score: 292
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Networking VPC Service Controls Guides Send feedback Supported identities for ingress and egress rules Stay organized with collections Save and categorize content based on your preferences.
- VPC Service Controls uses ingress and egress rules to control access to and from resources and clients within service perimeters.
- ORGANIZATION ID .workload.id.goog/ What's next Configure identity groups and third-party identities in ingress and egress rules Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To refine access further, you can specify supported identities in ingress and egress rules.

