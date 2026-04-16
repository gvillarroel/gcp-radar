---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:13.519Z"
product_name: "VPC Service Controls"
product_slug: "vpc-service-controls"
feature_name: "Custom organization policies"
feature_slug: "custom-organization-policies"
latest_feature_date: "2025-03-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc-service-controls/docs/custom-constraints"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/supported-products"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/manage-policies"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/set-up-service-perimeter-verify-access"
keywords:
  - "custom"
  - "organization"
  - "policies"
  - "vpc"
  - "controls"
  - "supports"
  - "through"
  - "constraints"
---

# Custom organization policies

Product: VPC Service Controls
Coverage: MEDIUM

## Step 02 Summary

VPC Service Controls supports custom organization policies through custom constraints.

## Extended Definition

VPC Service Controls supports custom organization policies through custom constraints.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc-service-controls/docs/custom-constraints](https://docs.cloud.google.com/vpc-service-controls/docs/custom-constraints)
- [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products)
- [https://docs.cloud.google.com/vpc-service-controls/docs/manage-policies](https://docs.cloud.google.com/vpc-service-controls/docs/manage-policies)
- [https://docs.cloud.google.com/vpc-service-controls/docs/set-up-service-perimeter-verify-access](https://docs.cloud.google.com/vpc-service-controls/docs/set-up-service-perimeter-verify-access)

## Supporting Pages

### Create custom constraints for VPC Service Controls \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/custom-constraints](https://docs.cloud.google.com/vpc-service-controls/docs/custom-constraints)
- Source ID: `site-docs-reference`
- Final score: 311
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Resource Field accesscontextmanager.googleapis.com/AccessLevel resource.basic.combiningFunction resource.basic.conditions.devicePolicy.allowedDeviceManagementLevels resource.basic.conditions.devicePolicy.allowedEncryptionStatuses resource.basic.conditions.devicePolicy.osConstraints.minimumVersion resource.basic.conditions.devicePolicy.osConstraints.osType resource.basic.conditions.devicePolicy.osConstraints.requireVerifiedChromeOs resource.basic.conditions.devicePolicy.requireAdminApproval resource.basic.conditions.devicePolicy.requireCorpOwned resource.basic.conditions.devicePolicy.requireScreenlock resource.basic.conditions.ipSubnetworks resource.basic.conditions.members resource.basic.conditions.negate resource.basic.conditions.regions resource.basic.conditions.requiredAccessLevels resource.custom.expr resource.description resource.title accesscontextmanager.googleapis.com/AccessPolicy resource.parent resource.scopes resource.title accesscontextmanager.googleapis.com/AuthorizedOrgsDesc resource.assetType resource.authorizationDirection resource.authorizationType resource.orgs accesscontextmanager.googleapis.com/ServicePerimeter resource.description resource.perimeterType resource.spec.accessLevels resource.spec.egressPolicies.egressFrom.identities resource.spec.egressPolicies.egressFrom.identityType resource.spec.egressPolicies.egressFrom.sourceRestriction resource.spec.egressPolicies.egressTo.externalResources resource.spec.egressPolicies.egressTo.operations.methodSelectors.method resource.spec.egressPolicies.egressTo.operations.methodSelectors.permission resource.spec.egressPolicies.egressTo.operations.serviceName resource.spec.egressPolicies.egressTo.resources resource.spec.ingressPolicies.ingressFrom.identities resource.spec.ingressPolicies.ingressFrom.identityType resource.spec.ingressPolicies.ingressFrom.sources.accessLevel resource.spec.ingressPolicies.ingressFrom.sources.resource resource.spec.ingressPolicies.ingressTo.operations.methodSelectors.method resource.spec.ingressPolicies.ingressTo.operations.methodSelectors.permission resource.spec.ingressPolicies.ingressTo.operations.serviceName resource.spec.ingressPolicies.ingressTo.resources resource.spec.resources resource.spec.restrictedServices resource.spec.vpcAccessibleServices.allowedServices resource.spec.vpcAccessibleServices.enableRestriction resource.status.accessLevels resource.status.egressPolicies.egressFrom.identities resource.status.egressPolicies.egressFrom.identityType resource.status.egressPolicies.egressFrom.sourceRestriction resource.status.egressPolicies.egressTo.externalResources resource.status.egressPolicies.egressTo.operations.methodSelectors.method resource.status.egressPolicies.egressTo.operations.methodSelectors.permission resource.status.egressPolicies.egressTo.operations.serviceName resource.status.egressPolicies.egressTo.resources resource.status.ingressPolicies.ingressFrom.identities resource.status.ingressPolicies.ingressFrom.identityType resource.status.ingressPolicies.ingressFrom.sources.accessLevel resource.status.ingressPolicies.ingressFrom.sources.resource resource.status.ingressPolicies.ingressTo.operations.methodSelectors.method resource.status.ingressPolicies.ingressTo.operations.methodSelectors.permission resource.status.ingressPolicies.ingressTo.operations.serviceName resource.status.ingressPolicies.ingressTo.resources resource.status.resources resource.status.restrictedServices resource.status.vpcAccessibleServices.allowedServices resource.status.vpcAccessibleServices.enableRestriction resource.title resource.useExplicitDryRunSpec What's next Learn more about Organization Policy Service .
- Apply the constraint: gcloud org-policies set-custom-constraint /constraint-disable custom access level.yaml Verify that the constraint exists: gcloud org-policies list-custom-constraints --organization = ORGANIZATION ID The output is similar to the following: CUSTOM CONSTRAINT ACTION TYPE METHOD TYPES RESOURCE TYPES DISPLAY NAME custom.disableCustomAccessLevels DENY CREATE accesscontextmanager.googleapis.com/AccessLevel Deny basic access levels using devicePolicy ...
- This page shows you how to use Organization Policy Service custom constraints to restrict specific operations on the following Google Cloud resources: accesscontextmanager.googleapis.com/AccessPolicy accesscontextmanager.googleapis.com/AccessLevel accesscontextmanager.googleapis.com/AuthorizedOrgsDesc accesscontextmanager.googleapis.com/ServicePerimeter To learn more about Organization Policy, see Custom organization policies .
- This command is authenticated as USER which is the active account specified by the [core/account] property '@type': type.googleapis.com/google.rpc.DebugInfo detail: '[ORIGINAL ERROR] generic::permission denied: com.google.apps.framework.request.ForbiddenException: The user is not authorized!' Example custom organization policies for common use cases This table provides syntax examples for some common custom constraints.

### "Supported products and limitations \_|\_ VPC Service Controls \_|\_ Google\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products)
- Source ID: `site-docs-reference-2`
- Final score: 285
- Re-rank relevance: N/A

Evidence snippets:
- Limitations Resources such as procurement request and access request, which the Commerce Org Governance API creates at the project level, surface up to the organization level and are reviewed by the Organization Administrator without enforcing VPC Service Controls policies.
- Limitations VPC Service Controls doesn't support access restrictions to folder-level or organization-level organization policies that are inherited by the project.
- Therefore, you cannot use VPC Service Controls to protect folder-level and organization-level simulations of deny policies.
- Service name compute.googleapis.com Details VPC Service Controls support for Compute Engine offers the following security benefits: Restricts access to sensitive API operations Restricts persistent disk snapshots and custom images to a perimeter Restricts access to instance metadata VPC Service Controls support for Compute Engine also enables you to utilize Virtual Private Cloud networks and Google Kubernetes Engine private clusters inside service perimeters.

### "Create a scoped access policy \_|\_ VPC Service Controls \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/manage-policies](https://docs.cloud.google.com/vpc-service-controls/docs/manage-policies)
- Source ID: `site-docs-reference`
- Final score: 197
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Go to VPC Service Controls If you are prompted, select your organization, folder, or project.
- On the Create access policy page, click Create access policy . gcloud To create a scoped access policy, use the gcloud access-context-manager policies create command. gcloud access-context-manager policies create \ --organization ORGANIZATION ID [ --scopes = SCOPE ] --title POLICY TITLE Where: ORGANIZATION ID is the numeric ID of your organization.
- The role name is the complete path of a predefined role, such as roles/accesscontextmanager.policyEditor , or the role ID for a custom role, such as organizations/{ORGANIZATION ID}/roles/accesscontextmanager.policyEditor .
- Any Access Context Manager permissions granted on folders or projects have no effect on scoped policies as permissions can only be granted at the organization-level or on individual policies.

### "Set up a VPC Service Controls perimeter for a Virtual Private Cloud network\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/set-up-service-perimeter-verify-access](https://docs.cloud.google.com/vpc-service-controls/docs/set-up-service-perimeter-verify-access)
- Source ID: `site-docs-root-2`
- Final score: 195
- Re-rank relevance: N/A

Evidence snippets:
- From the Cloud Shell tab, run the following command to remove the access level. gcloud access-context-manager perimeters update demo perimeter \ --policy = $POLICY ID \ --clear-access-levels From the Cloud Shell tab, create an ingress policy that allows your user identity to ingress to the Compute Engine service only, and apply the policy to your perimeter. cat <<EOF > ingress spec.yaml - ingressFrom: identities: - user: $USERNAME sources: - accessLevel: ' ' ingressTo: operations: - methodSelectors: - method: ' ' serviceName: compute.googleapis.com resources: - ' ' EOF gcloud access-context-manager perimeters update demo perimeter \ --set-ingress-policies = ingress spec.yaml \ --policy = $POLICY ID From the Cloud Shell tab, run the following command to create a Cloud Storage bucket inside the perimeter. gcloud storage buckets create gs:// PROJECT ID -01 The output is similar to the following: "ERROR: (gcloud.storage.buckets.create) HTTPError 403: Request is prohibited by organization's policy." Cloud Shell is a client outside the perimeter, so the VPC Service Controls perimeter blocks Cloud Shell from communicating with restricted services inside the perimeter.
- Create a VPC Service Controls perimeter that restricts the Cloud Storage and Compute Engine services. export POLICY ID = $( gcloud access-context-manager policies list \ --organization = ORGANIZATION ID \ --format = "value(name)" ) gcloud access-context-manager perimeters create demo perimeter \ --title = "demo perimeter" \ --resources = projects/ $( gcloud projects describe PROJECT ID --format = "value(projectNumber)" ) \ --restricted-services = "storage.googleapis.com,compute.googleapis.com" \ --enable-vpc-accessible-services \ --policy = $POLICY ID \ --vpc-allowed-services = "RESTRICTED-SERVICES" Caution: In this tutorial, you restrict only the Compute Engine and Cloud Storage services.
- In Cloud Shell, create an access policy as a prerequisite to create a VPC Service Controls perimeter: gcloud access-context-manager policies create \ --organization = ORGANIZATION ID --title "Access policy at organization node" The output is similar to the following: "Create request issued Waiting for operation [operations/accessPolicies/123456789/create/123456789] to complete...done." There can only be one access policy container at the organization node.
- From the Cloud Shell tab, create a YAML file describing the Organization Policy Service that will only allow usage of the Compute Engine service and deny all other services, and then apply it to your project. cat <<EOF > allowed services policy.yaml constraint: constraints/gcp.restrictServiceUsage listPolicy: allowedValues: - compute.googleapis.com inheritFromParent: true EOF gcloud resource-manager org-policies set-policy allowed services policy.yaml \ --project = PROJECT ID Return to the tab with the SSH session to the VM inside your perimeter, where the command-line prompt begins with username@demo-vm .

