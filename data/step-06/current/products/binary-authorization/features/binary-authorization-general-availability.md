---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:37:27.539Z"
product_name: "Binary Authorization"
product_slug: "binary-authorization"
feature_name: "Binary Authorization General Availability"
feature_slug: "binary-authorization-general-availability"
latest_feature_date: "2019-09-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/binary-authorization/docs/binary-authorization-custom-constraints"
  - "https://docs.cloud.google.com/binary-authorization/docs/release-notes"
  - "https://docs.cloud.google.com/python/docs/reference/binaryauthorization/latest/google.cloud.binaryauthorization_v1.services.binauthz_management_service_v1.BinauthzManagementServiceV1AsyncClient"
keywords:
  - "availability"
  - "general"
  - "reached"
  - "part"
  - "as"
  - "of"
  - "authorization"
  - "binary"
---

# Binary Authorization General Availability

Product: Binary Authorization
Coverage: LOW

## Step 02 Summary

Binary Authorization reached General Availability as part of the Anthos platform, with usage included in an Anthos subscription.

## Extended Definition

Binary Authorization reached General Availability as part of the Anthos platform, with usage included in an Anthos subscription.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/binary-authorization/docs/binary-authorization-custom-constraints](https://docs.cloud.google.com/binary-authorization/docs/binary-authorization-custom-constraints)
- [https://docs.cloud.google.com/binary-authorization/docs/release-notes](https://docs.cloud.google.com/binary-authorization/docs/release-notes)
- [https://docs.cloud.google.com/python/docs/reference/binaryauthorization/latest/google.cloud.binaryauthorization_v1.services.binauthz_management_service_v1.BinauthzManagementServiceV1AsyncClient](https://docs.cloud.google.com/python/docs/reference/binaryauthorization/latest/google.cloud.binaryauthorization_v1.services.binauthz_management_service_v1.BinauthzManagementServiceV1AsyncClient)

## Supporting Pages

### "Use custom organization policies \_|\_ Binary Authorization \_|\_ Google\

- URL: [https://docs.cloud.google.com/binary-authorization/docs/binary-authorization-custom-constraints](https://docs.cloud.google.com/binary-authorization/docs/binary-authorization-custom-constraints)
- Source ID: `site-iam-reference`
- Final score: 174
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Allow only Particular Signature Algorithm for a key name : organizations/ ORGANIZATION ID /customConstraints/custom.allowParticularKeySignatureAlgorithm resourceTypes : - binaryauthorization.googleapis.com/Attestor methodTypes : - CREATE - UPDATE condition : "resource.userOwnedGrafeasNote.publicKeys.all(publicKey, publicKey.pkixPublicKey.signatureAlgorithm == 'ECDSA P256 SHA256')" actionType : ALLOW displayName : Allow particular signature algorithm description : Only particular signature Algorithm is allowed.
- Don't allow creation of Attestor if description is absent name : organizations/ ORGANIZATION ID /customConstraints/custom.enforceAttestorDescription resourceTypes : - binaryauthorization.googleapis.com/Attestor methodTypes : - CREATE - UPDATE condition : "resource.description == ''" actionType : DENY displayName : Deny Attestor creation that have no description. description : Binary Authorization Attestor should have description associated with it.
- Resource Field binaryauthorization.googleapis.com/Attestor resource.description resource.name resource.userOwnedGrafeasNote.noteReference resource.userOwnedGrafeasNote.publicKeys.asciiArmoredPgpPublicKey resource.userOwnedGrafeasNote.publicKeys.comment resource.userOwnedGrafeasNote.publicKeys.pkixPublicKey.keyId resource.userOwnedGrafeasNote.publicKeys.pkixPublicKey.publicKeyPem resource.userOwnedGrafeasNote.publicKeys.pkixPublicKey.signatureAlgorithm binaryauthorization.googleapis.com/Policy resource.admissionWhitelistPatterns.namePattern resource.clusterAdmissionRules[ ].enforcementMode resource.clusterAdmissionRules[ ].evaluationMode resource.clusterAdmissionRules[ ].requireAttestationsBy resource.defaultAdmissionRule.enforcementMode resource.defaultAdmissionRule.evaluationMode resource.defaultAdmissionRule.requireAttestationsBy resource.description resource.globalPolicyEvaluationMode resource.istioServiceIdentityAdmissionRules[ ].enforcementMode resource.istioServiceIdentityAdmissionRules[ ].evaluationMode resource.istioServiceIdentityAdmissionRules[ ].requireAttestationsBy resource.kubernetesNamespaceAdmissionRules[ ].enforcementMode resource.kubernetesNamespaceAdmissionRules[ ].evaluationMode resource.kubernetesNamespaceAdmissionRules[ ].requireAttestationsBy resource.kubernetesServiceAccountAdmissionRules[ ].enforcementMode resource.kubernetesServiceAccountAdmissionRules[ ].evaluationMode resource.kubernetesServiceAccountAdmissionRules[ ].requireAttestationsBy What's next Learn more about Organization Policy Service .
- Apply the constraint: gcloud org-policies set-custom-constraint /constraint.yaml Verify that the constraint exists: gcloud org-policies list-custom-constraints --organization = ORGANIZATION ID The output is similar to the following: CUSTOM CONSTRAINT: custom.ensureBinaryAuthorizationEnforcementEnabled ACTION TYPE: DENY METHOD TYPES: CREATE,UPDATE RESOURCE TYPES: binaryauthorization.googleapis.com/Policy DISPLAY NAME: Ensure Binary Authorization Enforcement is enabled Create the policy Save the following file as policy.yaml : name : projects/ PROJECT ID /policies/custom.ensureBinaryAuthorizationEnforcementEnabled spec : rules : - enforce : true Replace PROJECT ID with your project ID.

### Binary Authorization release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/binary-authorization/docs/release-notes](https://docs.cloud.google.com/binary-authorization/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- August 19, 2024 Feature Setting specific rules in Binary Authorization policies is generally available (GA) as of September 28, 2023.
- September 16, 2019 Feature The General Availability (GA) version of Binary Authorization is a feature of the Anthos platform .
- April 03, 2019 Feature Binary Authorization now supports asymmetric PKIX key pairs to verify the identity of attestors.
- Home Documentation Security Binary Authorization Resources Send feedback Binary Authorization release notes Stay organized with collections Save and categorize content based on your preferences.

### "Class BinauthzManagementServiceV1AsyncClient (1.15.0) \_|\_ Python client\

- URL: [https://docs.cloud.google.com/python/docs/reference/binaryauthorization/latest/google.cloud.binaryauthorization_v1.services.binauthz_management_service_v1.BinauthzManagementServiceV1AsyncClient](https://docs.cloud.google.com/python/docs/reference/binaryauthorization/latest/google.cloud.binaryauthorization_v1.services.binauthz_management_service_v1.BinauthzManagementServiceV1AsyncClient)
- Source ID: `site-python-reference`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import binaryauthorization v1 async def sample create attestor(): Create a client client = binaryauthorization v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import binaryauthorization v1 async def sample delete attestor(): Create a client client = binaryauthorization v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import binaryauthorization v1 async def sample update attestor(): Create a client client = binaryauthorization v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import binaryauthorization v1 async def sample list attestors(): Create a client client = binaryauthorization v1 .

