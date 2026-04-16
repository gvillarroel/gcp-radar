---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:13.545Z"
product_name: "VPC Service Controls"
product_slug: "vpc-service-controls"
feature_name: "Scoped policies"
feature_slug: "scoped-policies"
latest_feature_date: "2022-03-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc-service-controls/docs/manage-policies"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/scoped-policies-overview"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/overview"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/custom-constraints"
keywords:
  - "scoped"
  - "policies"
  - "this"
  - "lets"
  - "administrators"
  - "create"
  - "vpc"
  - "controls"
---

# Scoped policies

Product: VPC Service Controls
Coverage: MEDIUM

## Step 02 Summary

This feature lets administrators create VPC Service Controls access policies scoped to specific folders or projects.

## Extended Definition

This feature lets administrators create VPC Service Controls access policies scoped to specific folders or projects.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc-service-controls/docs/manage-policies](https://docs.cloud.google.com/vpc-service-controls/docs/manage-policies)
- [https://docs.cloud.google.com/vpc-service-controls/docs/scoped-policies-overview](https://docs.cloud.google.com/vpc-service-controls/docs/scoped-policies-overview)
- [https://docs.cloud.google.com/vpc-service-controls/docs/overview](https://docs.cloud.google.com/vpc-service-controls/docs/overview)
- [https://docs.cloud.google.com/vpc-service-controls/docs/custom-constraints](https://docs.cloud.google.com/vpc-service-controls/docs/custom-constraints)

## Supporting Pages

### "Create a scoped access policy \_|\_ VPC Service Controls \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/manage-policies](https://docs.cloud.google.com/vpc-service-controls/docs/manage-policies)
- Source ID: `site-docs-reference`
- Final score: 284
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Networking VPC Service Controls Guides Send feedback Create a scoped access policy Stay organized with collections Save and categorize content based on your preferences.
- This page describes how to create and delegate scoped access policies.
- On the Create access policy page, click Create access policy . gcloud To create a scoped access policy, use the gcloud access-context-manager policies create command. gcloud access-context-manager policies create \ --organization ORGANIZATION ID [ --scopes = SCOPE ] --title POLICY TITLE Where: ORGANIZATION ID is the numeric ID of your organization.
- On the VPC Service Controls page, select the access policy that is the parent of the scoped policy.

### "Overview of scoped policies \_|\_ VPC Service Controls \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/scoped-policies-overview](https://docs.cloud.google.com/vpc-service-controls/docs/scoped-policies-overview)
- Source ID: `site-docs-reference`
- Final score: 260
- Re-rank relevance: N/A

Evidence snippets:
- You can use scoped policies to delegate administration of VPC Service Controls perimeters and access levels to folder-level and project-level administrators.
- Home Documentation Networking VPC Service Controls Guides Send feedback Overview of scoped policies Stay organized with collections Save and categorize content based on your preferences.
- Scoped policies are access policies that are scoped to specific folders or projects alongside an access policy that you can apply to the entire Google Cloud organization.
- What's next Learn how to create a scoped access policy .

### Overview of VPC Service Controls \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/overview](https://docs.cloud.google.com/vpc-service-controls/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 258
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Overview of scoped policies . restricted VIP The restricted VIP provides a private network route for products and APIs supported by VPC Service Controls in order to make data and resources used by those products inaccessible from the internet. restricted.googleapis.com resolves to 199.36.153.4/30 .
- VPC Service Controls configurations are managed at the organization level by default, but scoped access policies for folders or projects can be used to delegate administration of service perimeters further down the resource hierarchy.
- Capabilities VPC Service Controls lets you define security policies that prevent access to Google-managed services outside of a trusted perimeter, block access to data from untrusted locations, and mitigate data exfiltration risks.
- You can use an organization access policy and configure VPC Service Controls for your entire Google Cloud organization, or use scoped policies and configure VPC Service Controls for a folder or project in the organization.

### Create custom constraints for VPC Service Controls \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/custom-constraints](https://docs.cloud.google.com/vpc-service-controls/docs/custom-constraints)
- Source ID: `site-docs-reference`
- Final score: 250
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Description Constraint syntax Disable scoped policies name : organizations/ ORGANIZATION ID /customConstraints/custom.disableScopedPolicies resourceTypes : - accesscontextmanager.googleapis.com/AccessPolicy methodTypes : - CREATE - UPDATE condition : "size(resource.scopes) == 0" actionType : DENY displayName : Disable scoped policies description : Disables the creation of scoped policies.
- Home Documentation Networking VPC Service Controls Guides Send feedback Create custom constraints for VPC Service Controls Stay organized with collections Save and categorize content based on your preferences.
- Resource Field accesscontextmanager.googleapis.com/AccessLevel resource.basic.combiningFunction resource.basic.conditions.devicePolicy.allowedDeviceManagementLevels resource.basic.conditions.devicePolicy.allowedEncryptionStatuses resource.basic.conditions.devicePolicy.osConstraints.minimumVersion resource.basic.conditions.devicePolicy.osConstraints.osType resource.basic.conditions.devicePolicy.osConstraints.requireVerifiedChromeOs resource.basic.conditions.devicePolicy.requireAdminApproval resource.basic.conditions.devicePolicy.requireCorpOwned resource.basic.conditions.devicePolicy.requireScreenlock resource.basic.conditions.ipSubnetworks resource.basic.conditions.members resource.basic.conditions.negate resource.basic.conditions.regions resource.basic.conditions.requiredAccessLevels resource.custom.expr resource.description resource.title accesscontextmanager.googleapis.com/AccessPolicy resource.parent resource.scopes resource.title accesscontextmanager.googleapis.com/AuthorizedOrgsDesc resource.assetType resource.authorizationDirection resource.authorizationType resource.orgs accesscontextmanager.googleapis.com/ServicePerimeter resource.description resource.perimeterType resource.spec.accessLevels resource.spec.egressPolicies.egressFrom.identities resource.spec.egressPolicies.egressFrom.identityType resource.spec.egressPolicies.egressFrom.sourceRestriction resource.spec.egressPolicies.egressTo.externalResources resource.spec.egressPolicies.egressTo.operations.methodSelectors.method resource.spec.egressPolicies.egressTo.operations.methodSelectors.permission resource.spec.egressPolicies.egressTo.operations.serviceName resource.spec.egressPolicies.egressTo.resources resource.spec.ingressPolicies.ingressFrom.identities resource.spec.ingressPolicies.ingressFrom.identityType resource.spec.ingressPolicies.ingressFrom.sources.accessLevel resource.spec.ingressPolicies.ingressFrom.sources.resource resource.spec.ingressPolicies.ingressTo.operations.methodSelectors.method resource.spec.ingressPolicies.ingressTo.operations.methodSelectors.permission resource.spec.ingressPolicies.ingressTo.operations.serviceName resource.spec.ingressPolicies.ingressTo.resources resource.spec.resources resource.spec.restrictedServices resource.spec.vpcAccessibleServices.allowedServices resource.spec.vpcAccessibleServices.enableRestriction resource.status.accessLevels resource.status.egressPolicies.egressFrom.identities resource.status.egressPolicies.egressFrom.identityType resource.status.egressPolicies.egressFrom.sourceRestriction resource.status.egressPolicies.egressTo.externalResources resource.status.egressPolicies.egressTo.operations.methodSelectors.method resource.status.egressPolicies.egressTo.operations.methodSelectors.permission resource.status.egressPolicies.egressTo.operations.serviceName resource.status.egressPolicies.egressTo.resources resource.status.ingressPolicies.ingressFrom.identities resource.status.ingressPolicies.ingressFrom.identityType resource.status.ingressPolicies.ingressFrom.sources.accessLevel resource.status.ingressPolicies.ingressFrom.sources.resource resource.status.ingressPolicies.ingressTo.operations.methodSelectors.method resource.status.ingressPolicies.ingressTo.operations.methodSelectors.permission resource.status.ingressPolicies.ingressTo.operations.serviceName resource.status.ingressPolicies.ingressTo.resources resource.status.resources resource.status.restrictedServices resource.status.vpcAccessibleServices.allowedServices resource.status.vpcAccessibleServices.enableRestriction resource.title resource.useExplicitDryRunSpec What's next Learn more about Organization Policy Service .
- When you have entered a value into each field, the equivalent YAML configuration for this custom constraint appears on the right. gcloud To create a custom constraint, create a YAML file using the following format: name : organizations/ ORGANIZATION ID /customConstraints/ CONSTRAINT NAME resourceTypes : RESOURCE NAME methodTypes : - CREATE - UPDATE condition : " CONDITION " actionType : ACTION displayName : DISPLAY NAME description : DESCRIPTION Replace the following: ORGANIZATION ID : your organization ID, such as 123456789 .

