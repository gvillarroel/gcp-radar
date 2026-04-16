---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:13.536Z"
product_name: "VPC Service Controls"
product_slug: "vpc-service-controls"
feature_name: "Duet AI in Google Cloud integration"
feature_slug: "duet-ai-in-google-cloud-integration"
latest_feature_date: "2023-11-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc-service-controls/docs/custom-constraints"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/supported-products"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/audit-logging"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/protect-compute-engine-troubleshoot-denial"
keywords:
  - "duet"
  - "ai"
  - "in"
  - "integration"
  - "vpc"
  - "controls"
  - "supports"
  - "with"
---

# Duet AI in Google Cloud integration

Product: VPC Service Controls
Coverage: MEDIUM

## Step 02 Summary

VPC Service Controls supports integration with Duet AI in Google Cloud.

## Extended Definition

VPC Service Controls supports integration with Duet AI in Google Cloud.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc-service-controls/docs/custom-constraints](https://docs.cloud.google.com/vpc-service-controls/docs/custom-constraints)
- [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products)
- [https://docs.cloud.google.com/vpc-service-controls/docs/audit-logging](https://docs.cloud.google.com/vpc-service-controls/docs/audit-logging)
- [https://docs.cloud.google.com/vpc-service-controls/docs/protect-compute-engine-troubleshoot-denial](https://docs.cloud.google.com/vpc-service-controls/docs/protect-compute-engine-troubleshoot-denial)

## Supporting Pages

### Create custom constraints for VPC Service Controls \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/custom-constraints](https://docs.cloud.google.com/vpc-service-controls/docs/custom-constraints)
- Source ID: `site-docs-reference`
- Final score: 248
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Networking VPC Service Controls Guides Send feedback Create custom constraints for VPC Service Controls Stay organized with collections Save and categorize content based on your preferences.
- VPC Service Controls supported resources The following table lists the VPC Service Controls resources that you can reference in custom constraints.
- Resource Field accesscontextmanager.googleapis.com/AccessLevel resource.basic.combiningFunction resource.basic.conditions.devicePolicy.allowedDeviceManagementLevels resource.basic.conditions.devicePolicy.allowedEncryptionStatuses resource.basic.conditions.devicePolicy.osConstraints.minimumVersion resource.basic.conditions.devicePolicy.osConstraints.osType resource.basic.conditions.devicePolicy.osConstraints.requireVerifiedChromeOs resource.basic.conditions.devicePolicy.requireAdminApproval resource.basic.conditions.devicePolicy.requireCorpOwned resource.basic.conditions.devicePolicy.requireScreenlock resource.basic.conditions.ipSubnetworks resource.basic.conditions.members resource.basic.conditions.negate resource.basic.conditions.regions resource.basic.conditions.requiredAccessLevels resource.custom.expr resource.description resource.title accesscontextmanager.googleapis.com/AccessPolicy resource.parent resource.scopes resource.title accesscontextmanager.googleapis.com/AuthorizedOrgsDesc resource.assetType resource.authorizationDirection resource.authorizationType resource.orgs accesscontextmanager.googleapis.com/ServicePerimeter resource.description resource.perimeterType resource.spec.accessLevels resource.spec.egressPolicies.egressFrom.identities resource.spec.egressPolicies.egressFrom.identityType resource.spec.egressPolicies.egressFrom.sourceRestriction resource.spec.egressPolicies.egressTo.externalResources resource.spec.egressPolicies.egressTo.operations.methodSelectors.method resource.spec.egressPolicies.egressTo.operations.methodSelectors.permission resource.spec.egressPolicies.egressTo.operations.serviceName resource.spec.egressPolicies.egressTo.resources resource.spec.ingressPolicies.ingressFrom.identities resource.spec.ingressPolicies.ingressFrom.identityType resource.spec.ingressPolicies.ingressFrom.sources.accessLevel resource.spec.ingressPolicies.ingressFrom.sources.resource resource.spec.ingressPolicies.ingressTo.operations.methodSelectors.method resource.spec.ingressPolicies.ingressTo.operations.methodSelectors.permission resource.spec.ingressPolicies.ingressTo.operations.serviceName resource.spec.ingressPolicies.ingressTo.resources resource.spec.resources resource.spec.restrictedServices resource.spec.vpcAccessibleServices.allowedServices resource.spec.vpcAccessibleServices.enableRestriction resource.status.accessLevels resource.status.egressPolicies.egressFrom.identities resource.status.egressPolicies.egressFrom.identityType resource.status.egressPolicies.egressFrom.sourceRestriction resource.status.egressPolicies.egressTo.externalResources resource.status.egressPolicies.egressTo.operations.methodSelectors.method resource.status.egressPolicies.egressTo.operations.methodSelectors.permission resource.status.egressPolicies.egressTo.operations.serviceName resource.status.egressPolicies.egressTo.resources resource.status.ingressPolicies.ingressFrom.identities resource.status.ingressPolicies.ingressFrom.identityType resource.status.ingressPolicies.ingressFrom.sources.accessLevel resource.status.ingressPolicies.ingressFrom.sources.resource resource.status.ingressPolicies.ingressTo.operations.methodSelectors.method resource.status.ingressPolicies.ingressTo.operations.methodSelectors.permission resource.status.ingressPolicies.ingressTo.operations.serviceName resource.status.ingressPolicies.ingressTo.resources resource.status.resources resource.status.restrictedServices resource.status.vpcAccessibleServices.allowedServices resource.status.vpcAccessibleServices.enableRestriction resource.title resource.useExplicitDryRunSpec What's next Learn more about Organization Policy Service .
- After you verify that the organization policy in dry-run mode works as intended, set the live policy by clicking Set policy . gcloud To create an organization policy with boolean rules, create a policy YAML file that references the constraint: name : projects/ PROJECT ID /policies/ CONSTRAINT NAME spec : rules : - enforce : true dryRunSpec : rules : - enforce : true Replace the following: PROJECT ID : the project that you want to enforce your constraint on.

### "Supported products and limitations \_|\_ VPC Service Controls \_|\_ Google\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products)
- Source ID: `site-docs-reference-2`
- Final score: 243
- Re-rank relevance: N/A

Evidence snippets:
- You get a response with a list of methods and permissions. availableOnRestrictedVip: RESTRICTED VIP STATUS knownLimitations: LIMITATIONS STATUS name: SERVICE ADDRESS serviceSupportStage: SERVICE STATUS supportedMethods: METHODS LIST . . . title: SERVICE NAME In this response, METHODS LIST lists all the methods and permissions supported by VPC Service Controls for the specified service.
- Service name contactcenterinsights.googleapis.com Details To use CX Insights with VPC Service Controls you must have the following additional APIs inside your perimeter, depending on your integration.
- Limitations Blockchain Node Engine integrations with VPC Service Controls have the following limitations: VPC Service Controls only protects the Blockchain Node Engine API.
- Limitations The Anti Money Laundering AI integration with VPC Service Controls has no known limitations.

### VPC Service Controls audit logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/audit-logging](https://docs.cloud.google.com/vpc-service-controls/docs/audit-logging)
- Source ID: `site-docs-reference`
- Final score: 243
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To find audit logs for VPC Service Controls, use the following queries in the Logs Explorer: Query description Expression Violation details based on a denial ID log id ( "cloudaudit.googleapis.com/policy" ) severity = ERROR resource . type = "audited resource" protoPayload . metadata . "@type" = "type.googleapis.com/google.cloud.audit.VpcServiceControlAuditMetadata" protoPayload . metadata . vpcServiceControlsUniqueId = " UNIQUE ID " Replace UNIQUE ID with the unique ID of the denial.
- Audited operations The following table summarizes which API operations correspond to each audit log type in VPC Service Controls: Audit logs category VPC Service Controls methods Policy Denied audit logs The methods of the services that integrate with VPC Service Controls are supported.
- Available audit logs The following types of audit logs are available for VPC Service Controls: Policy Denied audit logs Identifies when a user or service account is denied access because of a security policy violation.
- Home Documentation Networking VPC Service Controls Guides Send feedback VPC Service Controls audit logging Stay organized with collections Save and categorize content based on your preferences.

### "Protect Compute Engine using a VPC Service Controls perimeter \_|\_ Google\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/protect-compute-engine-troubleshoot-denial](https://docs.cloud.google.com/vpc-service-controls/docs/protect-compute-engine-troubleshoot-denial)
- Source ID: `site-docs-reference`
- Final score: 238
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Networking VPC Service Controls Guides Send feedback Protect Compute Engine using a VPC Service Controls perimeter Stay organized with collections Save and categorize content based on your preferences.
- Troubleshoot a violation VPC Service Controls audit logs include details about requests to protected resources and the reason why VPC Service Controls denied the request.
- Create a new perimeter with the following details: Title: MyFirstPerimeter Perimeter type: Regular Enforcement mode: Enforced Resources to protect: My-Project-2 project Restricted services: Compute Engine API Verify the perimeter In this section, you can make access requests to the resources in the projects to confirm whether the perimeter protects the intended resources.
- View audit logs Find the unique ID of the VPC Service Controls violation in the My-Project-2 project's audit logs: In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .

