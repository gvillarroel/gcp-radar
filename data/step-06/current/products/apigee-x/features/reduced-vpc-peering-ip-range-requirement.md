---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.193Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Reduced VPC peering IP range requirement"
feature_slug: "reduced-vpc-peering-ip-range-requirement"
latest_feature_date: "2022-01-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/locations"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/basic-authentication-policy"
keywords:
  - "requirement"
  - "reduced"
  - "range"
  - "peering"
  - "provisioning"
---

# Reduced VPC peering IP range requirement

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Apigee provisioning reduces the required non-overlapping CIDR range for VPC peering to /22.

## Extended Definition

Apigee provisioning reduces the required non-overlapping CIDR range for VPC peering to /22.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/locations](https://docs.cloud.google.com/apigee/docs/locations)
- [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/basic-authentication-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/basic-authentication-policy)

## Supporting Pages

### Apigee locations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/locations](https://docs.cloud.google.com/apigee/docs/locations)
- Source ID: `site-docs-root`
- Final score: 67
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following resources outline the steps required to select a control plane hosting jurisdiction, based on your organization type: Organization type Provisioning method Documentation Subscription organization Apigee UI in Cloud console Command line interface Step 3: Configure hosting and encryption Provision a paid org with VPC peering Provision a paid org without VPC peering science Pay-as-you-go organization Apigee UI in Cloud console Command line interface Step 3: Configure hosting and encryption Provision a paid org with VPC peering Provision a paid org without VPC peering science Available Apigee API control plane hosting jurisdictions The Apigee control plane directly binds to the API host name. apigee.googleapis.com has a global control plane; if you want to use a regionalized control plane, the API host name is CONTROL PLANE LOCATION -apigee.googleapis.com .
- The following resources outline the steps required to select a runtime hosting region, based on your organization type: Organization type Provisioning method Documentation Evaluation organization Apigee UI in Cloud console Command line interface Provisioning an eval org Provision an eval org with VPC peering Provision an eval org without VPC peering Subscription organization Apigee UI in Cloud console Command line interface Step 3: Configure hosting and encryption Provision a paid org with VPC peering Provision a paid org without VPC peering Pay-as-you-go organization Apigee UI in Cloud console Command line interface Step 3: Configure hosting and encryption Provision a paid org with VPC peering Provision a paid org without VPC peering Available Apigee runtime regions The following table lists available regions for the Apigee runtime.
- The following resources outline the steps required to select an Apigee API Analytics region, based on your organization type: Organization type Provisioning method Documentation Evaluation Apigee UI in Cloud console Command line interface Provisioning an eval org Provision an eval org with VPC peering Provision an eval org without VPC peering Subscription Apigee UI in Cloud console Command line interface Step 3: Configure hosting and encryption Provision a paid org with VPC peering Provision a paid org without VPC peering Pay-as-you-go Apigee UI in Cloud console Command line interface Step 3: Configure hosting and encryption Provision a paid org with VPC peering Provision a paid org without VPC peering Available Apigee API Analytics regions The following table lists available regions for Apigee API Analytics.
- Meeting your latency, availability, or durability requirements are primary factors for selecting the region where your Apigee resources are located.

### Introduction to data residency \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts)
- Source ID: `site-docs-root-2`
- Final score: 43
- Re-rank relevance: N/A

Evidence snippets:
- If you have a Google Cloud organization policy that uses a resource location constraint ( constraints/gcp.resourceLocations ), the constraint will apply to the following Apigee resources that are created when Apigee is provisioned: Control plane Consumer data Runtime Endpoints attachment Analytics If you are provisioning a new Apigee organization within a Google Cloud project with a resource location constraint applied, you must ensure that the location constraint is compatible with the control plane location specified for your Apigee organization: If you provision an Apigee organization without data residency, the resource location constraint in your Google Cloud organization policy must be set to global .
- If you choose to enable data residency when provisioning an Apigee Subscription or Pay-as-you-go organization, the following services are in scope under Apigee's FedRAMP Authority To Operate (ATO): The regionalized Apigee organization's control plane, runtime plane, and analytics .
- Data residency for Apigee meets compliance and regulatory requirements by allowing you to specify the geographic locations (regions) where Apigee data is stored.
- Where CONTROL PLANE LOCATION is the is the physical location, specified during provisioning, at which Apigee control plane data will be stored.

### BasicAuthentication policy \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/basic-authentication-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/basic-authentication-policy)
- Source ID: `site-api-reference`
- Final score: 42
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

