---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:13.521Z"
product_name: "VPC Service Controls"
product_slug: "vpc-service-controls"
feature_name: "Titles in ingress and egress rules"
feature_slug: "titles-in-ingress-and-egress-rules"
latest_feature_date: "2025-02-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc-service-controls/docs/ingress-egress-rules"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/configuring-ingress-egress-policies"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/configure-identity-groups"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/configure-iam-roles"
keywords:
  - "titles"
  - "in"
  - "ingress"
  - "and"
  - "egress"
  - "rules"
  - "lets"
  - "perimeter"
---

# Titles in ingress and egress rules

Product: VPC Service Controls
Coverage: MEDIUM

## Step 02 Summary

Lets service perimeter ingress and egress rules include titles.

## Extended Definition

Lets service perimeter ingress and egress rules include titles.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc-service-controls/docs/ingress-egress-rules](https://docs.cloud.google.com/vpc-service-controls/docs/ingress-egress-rules)
- [https://docs.cloud.google.com/vpc-service-controls/docs/configuring-ingress-egress-policies](https://docs.cloud.google.com/vpc-service-controls/docs/configuring-ingress-egress-policies)
- [https://docs.cloud.google.com/vpc-service-controls/docs/configure-identity-groups](https://docs.cloud.google.com/vpc-service-controls/docs/configure-identity-groups)
- [https://docs.cloud.google.com/vpc-service-controls/docs/configure-iam-roles](https://docs.cloud.google.com/vpc-service-controls/docs/configure-iam-roles)

## Supporting Pages

### Ingress and egress rules \_|\_ VPC Service Controls \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/ingress-egress-rules](https://docs.cloud.google.com/vpc-service-controls/docs/ingress-egress-rules)
- Source ID: `site-docs-reference`
- Final score: 316
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In this example, for the Cloud Storage client to copy objects from the bucket a to bucket b and from the bucket b to bucket a , the following ingress and egress rules are required: an egress rule in perimeter A to allow access to the Cloud Storage bucket b , an egress rule in perimeter B to allow access to the Cloud Storage bucket a , an ingress rule in perimeter B to allow access for the Cloud Storage client that is outside the perimeter B .
- Examples of API requests allowed by combination of ingress and egress rules A Cloud Storage client outside the perimeter copying objects between a Cloud Storage bucket outside the perimeter and a bucket inside the perimeter (for example using the gcloud storage cp command).
- Ingress and egress rules allow you to grant access to Google Cloud resources in a perimeter based on the context of the API request: Constrain identity types or identities that can be used given a source network, IP address, or device.
- VPC Service Controls uses ingress and egress rules to allow access to and from the resources and clients protected by service perimeters.

### "Configuring ingress and egress policies \_|\_ VPC Service Controls \_|\_\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/configuring-ingress-egress-policies](https://docs.cloud.google.com/vpc-service-controls/docs/configuring-ingress-egress-policies)
- Source ID: `site-docs-reference`
- Final score: 295
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more details, see Get the name and etag of an access policy Run the following command during the creation of a perimeter to create an ingress/egress policy: gcloud access-context-manager perimeters create PERIMETER NAME --title= TITLE --ingress-policies= INGRESS-FILENAME .yaml --restricted-services= SERVICE --resources="projects/ PROJECT " gcloud access-context-manager perimeters create PERIMETER NAME --title= TITLE --egress-policies= -EGRESS-FILENAME .yaml --restricted-services= SERVICE --resources="projects/ PROJECT " For example: gcloud access-context-manager perimeters create my-perimeter --title=perimeter-for-project-1 --ingress-policies=my-ingress-rule.yaml --restricted-services=storage.googelapis.com --resources="projects/myproject" For information about configuring ingress and egress rules as YAML files, see Ingress rules reference and Egress rules reference .
- For more details, see Get the name and etag of an access policy To update a perimeter policy, run one of the following commands replacing variables with appropriate values: gcloud access-context-manager perimeters update PERIMETER NAME --set-ingress-policies= INGRESS-FILENAME .yaml gcloud access-context-manager perimeters update PERIMETER NAME --set-egress-policies= EGRESS-FILENAME .yaml For example: gcloud access-context-manager perimeters update my-perimeter --set-ingress-policies=my-ingress-rule.yaml For information about configuring ingress and egress rules as YAML files, see Ingress rules reference and Egress rules reference .
- Setting ingress and egress policies during perimeter creation Console In the Google Cloud console navigation menu, click Security , and then click VPC Service Controls .
- Updating ingress and egress policies for a service perimeter Console In the Google Cloud console navigation menu, click Security , and then click VPC Service Controls .

### "Configure identity groups and third-party identities in ingress and egress\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/configure-identity-groups](https://docs.cloud.google.com/vpc-service-controls/docs/configure-identity-groups)
- Source ID: `site-docs-reference`
- Final score: 277
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- VPC Service Controls uses ingress and egress rules to allow access to and from the resources and clients protected by service perimeters.
- This page describes how to use identity groups in ingress and egress rules to allow access to resources protected by service perimeters.
- What's next Example of using identity groups and third-party identities in ingress and egress rules Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Networking VPC Service Controls Guides Send feedback Configure identity groups and third-party identities in ingress and egress rules Stay organized with collections Save and categorize content based on your preferences.

### "Configure IAM roles in ingress and egress rules \_|\_ VPC Service Controls\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/configure-iam-roles](https://docs.cloud.google.com/vpc-service-controls/docs/configure-iam-roles)
- Source ID: `site-docs-reference`
- Final score: 269
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you delete a custom role after you reference the role in the ingress or egress rule of two or more perimeters of an access policy, all perimeters under this access policy become uneditable, and you might encounter a Custom role in Ingress/Egress rules does not exist: CUSTOM ROLE NAME error.
- This page describes how to use Identity and Access Management (IAM) roles in ingress and egress rules to allow access to resources protected by service perimeters.
- VPC Service Controls uses ingress and egress rules to allow access to and from the resources and clients protected by service perimeters.
- Unsupported IAM roles The following table lists the unsupported IAM roles from specific services: Product Unsupported roles Identity and Access Management roles/iam.denyReviewer roles/iam.oauthClientViewer roles/iam.operationViewer roles/iam.workforcePoolEditor roles/iam.workforcePoolViewer roles/iam.workloadIdentityPoolViewer roles/iam.workforcePoolEditor roles/iam.workforcePoolViewer Limitations You can't use a role-based ingress or egress rule to allow requests to set the IAM allow policy of a project across the perimeter boundary.

