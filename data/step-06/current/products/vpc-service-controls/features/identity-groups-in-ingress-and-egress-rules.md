---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:13.522Z"
product_name: "VPC Service Controls"
product_slug: "vpc-service-controls"
feature_name: "Identity groups in ingress and egress rules"
feature_slug: "identity-groups-in-ingress-and-egress-rules"
latest_feature_date: "2024-12-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc-service-controls/docs/configure-identity-groups"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/identity-groups-examples"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/ingress-egress-rules"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/configure-iam-roles"
keywords:
  - "identity"
  - "groups"
  - "in"
  - "ingress"
  - "and"
  - "egress"
  - "rules"
  - "lets"
---

# Identity groups in ingress and egress rules

Product: VPC Service Controls
Coverage: MEDIUM

## Step 02 Summary

Lets service perimeter ingress and egress rules use identity groups to allow access to protected resources.

## Extended Definition

Lets service perimeter ingress and egress rules use identity groups to allow access to protected resources.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc-service-controls/docs/configure-identity-groups](https://docs.cloud.google.com/vpc-service-controls/docs/configure-identity-groups)
- [https://docs.cloud.google.com/vpc-service-controls/docs/identity-groups-examples](https://docs.cloud.google.com/vpc-service-controls/docs/identity-groups-examples)
- [https://docs.cloud.google.com/vpc-service-controls/docs/ingress-egress-rules](https://docs.cloud.google.com/vpc-service-controls/docs/ingress-egress-rules)
- [https://docs.cloud.google.com/vpc-service-controls/docs/configure-iam-roles](https://docs.cloud.google.com/vpc-service-controls/docs/configure-iam-roles)

## Supporting Pages

### "Configure identity groups and third-party identities in ingress and egress\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/configure-identity-groups](https://docs.cloud.google.com/vpc-service-controls/docs/configure-identity-groups)
- Source ID: `site-docs-reference`
- Final score: 397
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- What's next Example of using identity groups and third-party identities in ingress and egress rules Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Networking VPC Service Controls Guides Send feedback Configure identity groups and third-party identities in ingress and egress rules Stay organized with collections Save and categorize content based on your preferences.
- To configure identity groups in the ingress or egress rules, you can use the following supported identity groups in the identities attribute: Google group Third-party identities such as workforce pool users and workload identities .
- This page describes how to use identity groups in ingress and egress rules to allow access to resources protected by service perimeters.

### "Example of using identity groups and third-party identities in ingress and\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/identity-groups-examples](https://docs.cloud.google.com/vpc-service-controls/docs/identity-groups-examples)
- Source ID: `site-docs-reference`
- Final score: 377
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following ingress policy, ingress.yaml , allows Cloud Run access to specific human accounts, who are part of the allowed-users@example.com group, and specific service accounts, that are limited to the allowlisted IP address range: - ingressFrom: identities: - serviceAccount:my-sa@my-project.iam.gserviceaccount.com sources: - accessLevel: accessPolicies/222/accessLevels/CorpDatacenters ingressTo: operations: - serviceName: run.googleapis.com methodSelectors: - method: " " resources: - " " - ingressFrom: identities: - group:allowed-users@example.com sources: - accessLevel: " " ingressTo: operations: - serviceName: run.googleapis.com methodSelectors: - method: " " resources: - " " To apply the ingress rule, run the following command: gcloud access-context-manager perimeters update Example --set-ingress-policies=ingress.yaml What's next Configure identity groups and third-party identities in ingress and egress rules Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Networking VPC Service Controls Guides Send feedback Example of using identity groups and third-party identities in ingress and egress rules Stay organized with collections Save and categorize content based on your preferences.
- This page contains the following example of using identity groups in ingress and egress rules: Allow Cloud Run access to an identity group's members through the internet and to specific service accounts from an allowlisted IP address range.
- This page shows how to use identity groups and third-party identities in ingress and egress rules .

### Ingress and egress rules \_|\_ VPC Service Controls \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/ingress-egress-rules](https://docs.cloud.google.com/vpc-service-controls/docs/ingress-egress-rules)
- Source ID: `site-docs-reference`
- Final score: 371
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can configure identity groups and third-party identities and IAM roles ( Preview ) in ingress and egress rules.
- Understand the limitations of using identity groups in ingress and egress rules.
- Ingress and egress rules allow you to grant access to Google Cloud resources in a perimeter based on the context of the API request: Constrain identity types or identities that can be used given a source network, IP address, or device.
- In this example, for the Cloud Storage client to copy objects from the bucket a to bucket b and from the bucket b to bucket a , the following ingress and egress rules are required: an egress rule in perimeter A to allow access to the Cloud Storage bucket b , an egress rule in perimeter B to allow access to the Cloud Storage bucket a , an ingress rule in perimeter B to allow access for the Cloud Storage client that is outside the perimeter B .

### "Configure IAM roles in ingress and egress rules \_|\_ VPC Service Controls\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/configure-iam-roles](https://docs.cloud.google.com/vpc-service-controls/docs/configure-iam-roles)
- Source ID: `site-docs-reference`
- Final score: 270
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This page describes how to use Identity and Access Management (IAM) roles in ingress and egress rules to allow access to resources protected by service perimeters.
- Unsupported IAM roles The following table lists the unsupported IAM roles from specific services: Product Unsupported roles Identity and Access Management roles/iam.denyReviewer roles/iam.oauthClientViewer roles/iam.operationViewer roles/iam.workforcePoolEditor roles/iam.workforcePoolViewer roles/iam.workloadIdentityPoolViewer roles/iam.workforcePoolEditor roles/iam.workforcePoolViewer Limitations You can't use a role-based ingress or egress rule to allow requests to set the IAM allow policy of a project across the perimeter boundary.
- However, there are a few IAM roles in these services that are either partially supported or not supported for use in the ingress and egress rules, because some or all of the underlying permissions are not supported: Using a partially supported IAM role in an ingress or egress rule makes the rule ineffective for requests or actions specific to the underlying unsupported permissions .
- If you delete a custom role after you reference the role in the ingress or egress rule of two or more perimeters of an access policy, all perimeters under this access policy become uneditable, and you might encounter a Custom role in Ingress/Egress rules does not exist: CUSTOM ROLE NAME error.

