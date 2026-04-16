---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:13.496Z"
product_name: "VPC Service Controls"
product_slug: "vpc-service-controls"
feature_name: "SPIFFE agent identities support in ingress and egress rules"
feature_slug: "spiffe-agent-identities-support-in-ingress-and-egress-rules"
latest_feature_date: "2026-03-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc-service-controls/docs/ingress-egress-rules"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/supported-identities"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/configure-identity-groups"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/identity-groups-examples"
keywords:
  - "spiffe"
  - "agent"
  - "identities"
  - "in"
  - "ingress"
  - "and"
  - "egress"
  - "rules"
---

# SPIFFE agent identities support in ingress and egress rules

Product: VPC Service Controls
Coverage: MEDIUM

## Step 02 Summary

VPC Service Controls supports SPIFFE-format agent identities for third-party workforce and workload identities in ingress and egress rules.

## Extended Definition

VPC Service Controls supports SPIFFE-format agent identities for third-party workforce and workload identities in ingress and egress rules.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc-service-controls/docs/ingress-egress-rules](https://docs.cloud.google.com/vpc-service-controls/docs/ingress-egress-rules)
- [https://docs.cloud.google.com/vpc-service-controls/docs/supported-identities](https://docs.cloud.google.com/vpc-service-controls/docs/supported-identities)
- [https://docs.cloud.google.com/vpc-service-controls/docs/configure-identity-groups](https://docs.cloud.google.com/vpc-service-controls/docs/configure-identity-groups)
- [https://docs.cloud.google.com/vpc-service-controls/docs/identity-groups-examples](https://docs.cloud.google.com/vpc-service-controls/docs/identity-groups-examples)

## Supporting Pages

### Ingress and egress rules \_|\_ VPC Service Controls \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/ingress-egress-rules](https://docs.cloud.google.com/vpc-service-controls/docs/ingress-egress-rules)
- Source ID: `site-docs-reference`
- Final score: 318
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Ingress and egress rules allow you to grant access to Google Cloud resources in a perimeter based on the context of the API request: Constrain identity types or identities that can be used given a source network, IP address, or device.
- For information about supported identities and their identifier formats, see Supported identities for ingress and egress rules . sources: - (Required) This attribute refers to a list of network origins.
- For information about supported identities and their identifier formats, see Supported identities for ingress and egress rules . sources: - This attribute specifies a list of network origins.
- You can configure identity groups and third-party identities and IAM roles ( Preview ) in ingress and egress rules.

### "Supported identities for ingress and egress rules \_|\_ VPC Service Controls\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/supported-identities](https://docs.cloud.google.com/vpc-service-controls/docs/supported-identities)
- Source ID: `site-docs-reference-2`
- Final score: 310
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ORGANIZATION ID .workload.id.goog/ What's next Configure identity groups and third-party identities in ingress and egress rules Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Networking VPC Service Controls Guides Send feedback Supported identities for ingress and egress rules Stay organized with collections Save and categorize content based on your preferences.
- To refine access further, you can specify supported identities in ingress and egress rules.
- VPC Service Controls uses ingress and egress rules to control access to and from resources and clients within service perimeters.

### "Configure identity groups and third-party identities in ingress and egress\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/configure-identity-groups](https://docs.cloud.google.com/vpc-service-controls/docs/configure-identity-groups)
- Source ID: `site-docs-reference`
- Final score: 281
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- What's next Example of using identity groups and third-party identities in ingress and egress rules Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Networking VPC Service Controls Guides Send feedback Configure identity groups and third-party identities in ingress and egress rules Stay organized with collections Save and categorize content based on your preferences.
- To configure identity groups in the ingress or egress rules, you can use the following supported identity groups in the identities attribute: Google group Third-party identities such as workforce pool users and workload identities .
- However, you can use the ANY IDENTITY identity type in ingress and egress rules to allow access to all identities, including workload identities.

### "Example of using identity groups and third-party identities in ingress and\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/identity-groups-examples](https://docs.cloud.google.com/vpc-service-controls/docs/identity-groups-examples)
- Source ID: `site-docs-reference`
- Final score: 272
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following ingress policy, ingress.yaml , allows Cloud Run access to specific human accounts, who are part of the allowed-users@example.com group, and specific service accounts, that are limited to the allowlisted IP address range: - ingressFrom: identities: - serviceAccount:my-sa@my-project.iam.gserviceaccount.com sources: - accessLevel: accessPolicies/222/accessLevels/CorpDatacenters ingressTo: operations: - serviceName: run.googleapis.com methodSelectors: - method: " " resources: - " " - ingressFrom: identities: - group:allowed-users@example.com sources: - accessLevel: " " ingressTo: operations: - serviceName: run.googleapis.com methodSelectors: - method: " " resources: - " " To apply the ingress rule, run the following command: gcloud access-context-manager perimeters update Example --set-ingress-policies=ingress.yaml What's next Configure identity groups and third-party identities in ingress and egress rules Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Networking VPC Service Controls Guides Send feedback Example of using identity groups and third-party identities in ingress and egress rules Stay organized with collections Save and categorize content based on your preferences.
- This page shows how to use identity groups and third-party identities in ingress and egress rules .
- This page contains the following example of using identity groups in ingress and egress rules: Allow Cloud Run access to an identity group's members through the internet and to specific service accounts from an allowlisted IP address range.

