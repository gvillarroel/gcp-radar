---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:13.543Z"
product_name: "VPC Service Controls"
product_slug: "vpc-service-controls"
feature_name: "VPC Service Controls integration with Firestore in Datastore mode"
feature_slug: "vpc-service-controls-integration-with-firestore-in-datastore-mode"
latest_feature_date: "2022-06-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc-service-controls/docs/supported-products"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/dry-run-mode"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/protect-compute-engine-troubleshoot-denial"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/custom-constraints"
keywords:
  - "vpc"
  - "controls"
  - "integration"
  - "with"
  - "firestore"
  - "in"
  - "datastore"
  - "mode"
---

# VPC Service Controls integration with Firestore in Datastore mode

Product: VPC Service Controls
Coverage: MEDIUM

## Step 02 Summary

This integration lets VPC Service Controls protect Firestore in Datastore mode.

## Extended Definition

This integration lets VPC Service Controls protect Firestore in Datastore mode.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products)
- [https://docs.cloud.google.com/vpc-service-controls/docs/dry-run-mode](https://docs.cloud.google.com/vpc-service-controls/docs/dry-run-mode)
- [https://docs.cloud.google.com/vpc-service-controls/docs/protect-compute-engine-troubleshoot-denial](https://docs.cloud.google.com/vpc-service-controls/docs/protect-compute-engine-troubleshoot-denial)
- [https://docs.cloud.google.com/vpc-service-controls/docs/custom-constraints](https://docs.cloud.google.com/vpc-service-controls/docs/custom-constraints)

## Supporting Pages

### "Supported products and limitations \_|\_ VPC Service Controls \_|\_ Google\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products)
- Source ID: `site-docs-reference-2`
- Final score: 274
- Re-rank relevance: N/A

Evidence snippets:
- Service name contactcenterinsights.googleapis.com Details To use CX Insights with VPC Service Controls you must have the following additional APIs inside your perimeter, depending on your integration.
- Limitations Blockchain Node Engine integrations with VPC Service Controls have the following limitations: VPC Service Controls only protects the Blockchain Node Engine API.
- The integration of this product with VPC Service Controls is in Preview and is ready for broader testing and use, but is not fully supported for production environments.
- The integration of this product with VPC Service Controls is in Preview and is ready for broader testing and use, but is not fully supported for production environments.

### "Dry run mode for service perimeters \_|\_ VPC Service Controls \_|\_ Google\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/dry-run-mode](https://docs.cloud.google.com/vpc-service-controls/docs/dry-run-mode)
- Source ID: `site-docs-reference`
- Final score: 230
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Networking VPC Service Controls Guides Send feedback Dry run mode for service perimeters Stay organized with collections Save and categorize content based on your preferences.
- With dry run mode, you can better understand the effect of enabling VPC Service Controls and changes to perimeters in existing environments.
- Because the private VIP allows services that aren't supported by VPC Service Controls, it is possible for compromised code, malware, or a malicious user within your network to exfiltrate data using those unsecured services.
- However, if you use the private VIP, entities within your network will have access to unsecured services (services that are not supported by VPC Service Controls), such as the consumer versions of Gmail and Drive.

### "Protect Compute Engine using a VPC Service Controls perimeter \_|\_ Google\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/protect-compute-engine-troubleshoot-denial](https://docs.cloud.google.com/vpc-service-controls/docs/protect-compute-engine-troubleshoot-denial)
- Source ID: `site-docs-reference`
- Final score: 224
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Networking VPC Service Controls Guides Send feedback Protect Compute Engine using a VPC Service Controls perimeter Stay organized with collections Save and categorize content based on your preferences.
- Create a new perimeter with the following details: Title: MyFirstPerimeter Perimeter type: Regular Enforcement mode: Enforced Resources to protect: My-Project-2 project Restricted services: Compute Engine API Verify the perimeter In this section, you can make access requests to the resources in the projects to confirm whether the perimeter protects the intended resources.
- View audit logs Find the unique ID of the VPC Service Controls violation in the My-Project-2 project's audit logs: In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .
- If the caller IP address is missing or appears as an internal IP address in the log, then this violation can be due to a Google Cloud service that is not supported by VPC Service Controls .

### Create custom constraints for VPC Service Controls \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/custom-constraints](https://docs.cloud.google.com/vpc-service-controls/docs/custom-constraints)
- Source ID: `site-docs-reference`
- Final score: 222
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Networking VPC Service Controls Guides Send feedback Create custom constraints for VPC Service Controls Stay organized with collections Save and categorize content based on your preferences.
- After you verify that the organization policy in dry-run mode works as intended, set the live policy by clicking Set policy . gcloud To create an organization policy with boolean rules, create a policy YAML file that references the constraint: name : projects/ PROJECT ID /policies/ CONSTRAINT NAME spec : rules : - enforce : true dryRunSpec : rules : - enforce : true Replace the following: PROJECT ID : the project that you want to enforce your constraint on.
- After you verify that the organization policy in dry-run mode works as intended, set the live policy with the org-policies set-policy command and the spec flag: gcloud org-policies set-policy POLICY PATH --update-mask = spec Replace POLICY PATH with the full path to your organization policy YAML file.
- To enforce the organization policy in dry-run mode , run the following command with the dryRunSpec flag: gcloud org-policies set-policy POLICY PATH --update-mask = dryRunSpec Replace POLICY PATH with the full path to your organization policy YAML file.

