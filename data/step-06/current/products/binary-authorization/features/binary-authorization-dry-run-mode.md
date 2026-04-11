---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:37:27.539Z"
product_name: "Binary Authorization"
product_slug: "binary-authorization"
feature_name: "Binary Authorization dry run mode"
feature_slug: "binary-authorization-dry-run-mode"
latest_feature_date: "2019-04-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/binary-authorization/docs/release-notes"
  - "https://docs.cloud.google.com/binary-authorization/docs/binary-authorization-custom-constraints"
  - "https://docs.cloud.google.com/binary-authorization/docs/getting-started-cli"
keywords:
  - "allowing"
  - "dry"
  - "run"
  - "mode"
  - "supports"
  - "authorization"
  - "now"
  - "binary"
---

# Binary Authorization dry run mode

Product: Binary Authorization
Coverage: LOW

## Step 02 Summary

Binary Authorization now supports dry run mode, allowing non-conformant image deployments while logging policy violations to audit logs for testing.

## Extended Definition

Binary Authorization now supports dry run mode, allowing non-conformant image deployments while logging policy violations to audit logs for testing.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/binary-authorization/docs/release-notes](https://docs.cloud.google.com/binary-authorization/docs/release-notes)
- [https://docs.cloud.google.com/binary-authorization/docs/binary-authorization-custom-constraints](https://docs.cloud.google.com/binary-authorization/docs/binary-authorization-custom-constraints)
- [https://docs.cloud.google.com/binary-authorization/docs/getting-started-cli](https://docs.cloud.google.com/binary-authorization/docs/getting-started-cli)

## Supporting Pages

### Binary Authorization release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/binary-authorization/docs/release-notes](https://docs.cloud.google.com/binary-authorization/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 188
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Feature Binary Authorization now supports dryrun mode.
- Feature Binary Authorization now supports global policy evaluation mode .
- September 29, 2021 Change Binary Authorization for Anthos clusters on VMware 0.2.2, which now supports Anthos clusters on VMware 0.1.9, is now available in Preview .
- April 03, 2019 Feature Binary Authorization now supports asymmetric PKIX key pairs to verify the identity of attestors.

### "Use custom organization policies \_|\_ Binary Authorization \_|\_ Google\

- URL: [https://docs.cloud.google.com/binary-authorization/docs/binary-authorization-custom-constraints](https://docs.cloud.google.com/binary-authorization/docs/binary-authorization-custom-constraints)
- Source ID: `site-iam-reference`
- Final score: 186
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Test the policy cat > binauthzPolicy.yaml << EOM globalPolicyEvaluationMode: DISABLE defaultAdmissionRule: evaluationMode: ALWAYS DENY enforcementMode: DRYRUN AUDIT LOG ONLY EOM gcloud container binauthz policy import binauthzPolicy.yaml '--format=json' The output is the following: Operation denied by org policy: ["customConstraints/custom.ensureBinaryAuthorizationEnforcementEnabled": "Pod deployment should be blocked when admission rule are not satisfied."].
- Resource Field binaryauthorization.googleapis.com/Attestor resource.description resource.name resource.userOwnedGrafeasNote.noteReference resource.userOwnedGrafeasNote.publicKeys.asciiArmoredPgpPublicKey resource.userOwnedGrafeasNote.publicKeys.comment resource.userOwnedGrafeasNote.publicKeys.pkixPublicKey.keyId resource.userOwnedGrafeasNote.publicKeys.pkixPublicKey.publicKeyPem resource.userOwnedGrafeasNote.publicKeys.pkixPublicKey.signatureAlgorithm binaryauthorization.googleapis.com/Policy resource.admissionWhitelistPatterns.namePattern resource.clusterAdmissionRules[ ].enforcementMode resource.clusterAdmissionRules[ ].evaluationMode resource.clusterAdmissionRules[ ].requireAttestationsBy resource.defaultAdmissionRule.enforcementMode resource.defaultAdmissionRule.evaluationMode resource.defaultAdmissionRule.requireAttestationsBy resource.description resource.globalPolicyEvaluationMode resource.istioServiceIdentityAdmissionRules[ ].enforcementMode resource.istioServiceIdentityAdmissionRules[ ].evaluationMode resource.istioServiceIdentityAdmissionRules[ ].requireAttestationsBy resource.kubernetesNamespaceAdmissionRules[ ].enforcementMode resource.kubernetesNamespaceAdmissionRules[ ].evaluationMode resource.kubernetesNamespaceAdmissionRules[ ].requireAttestationsBy resource.kubernetesServiceAccountAdmissionRules[ ].enforcementMode resource.kubernetesServiceAccountAdmissionRules[ ].evaluationMode resource.kubernetesServiceAccountAdmissionRules[ ].requireAttestationsBy What's next Learn more about Organization Policy Service .
- Create the constraint Save the following file as constraint.yaml : name : organizations/ ORGANIZATION ID /customConstraints/custom.ensureBinaryAuthorizationEnforcementEnabled resourceTypes : - binaryauthorization.googleapis.com/Policy methodTypes : - CREATE - UPDATE condition : "resource.defaultAdmissionRule.enforcementMode == 'ENFORCED BLOCK AND AUDIT LOG'" actionType : ALLOW displayName : Ensure Binary Authorization Enforcement is enabled description : Binary Authorization policy must have enforcement enabled to block deployments if one or more required attestations are missing.
- Description Constraint syntax Ensure that attestations are present in Binary Authorization policy name : organizations/ ORGANIZATION ID /customConstraints/custom.podCreationRequireAttestations resourceTypes : - binaryauthorization.googleapis.com/Policy methodTypes : - CREATE - UPDATE condition : "resource.defaultAdmissionRule.evaluationMode == 'REQUIRE ATTESTATION'" actionType : ALLOW displayName : Attestations are required in Binary Authorization Policy description : Binary Authorization Policy evaluation requires attestations.

### "Get started using the Google Cloud CLI (GKE) \_|\_ Binary Authorization\

- URL: [https://docs.cloud.google.com/binary-authorization/docs/getting-started-cli](https://docs.cloud.google.com/binary-authorization/docs/getting-started-cli)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- First, try to deploy the image: kubectl run hello-server --image us-docker.pkg.dev/google-samples/containers/gke/hello-app:1.0 --port 8080 Now, verify that the deployment was blocked by Binary Authorization: kubectl get pods The command prints the following message, which indicates that the image was not deployed: No resources found.
- Verify that the note was created: curl \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://containeranalysis.googleapis.com/v1/projects/${PROJECT ID}/notes/${NOTE ID}" Create the attestor Now, you can create the attestor: Create the attestor in Binary Authorization: gcloud container binauthz attestors create ${ATTESTOR NAME} \ --attestation-authority-note=${NOTE ID} \ --attestation-authority-note-project=${PROJECT ID} Verify that the attestor was created: gcloud container binauthz attestors list The attestor you created is not yet usable without an associated key pair, which you create later in this guide .
- To configure the policy, follow these steps: Create a new policy file that allows Google-maintained system images , sets the evaluationMode to REQUIRE ATTESTATION , and adds a node named requireAttestationsBy that references the attestor you created: cat > /tmp/policy.yaml Import the policy YAML file into Binary Authorization: gcloud container binauthz policy import /tmp/policy.yaml Note: It can take a few minutes for the policy to take effect.
- Now, add the public key you exported to the attestor so that it can be used by Binary Authorization for identity verification: gcloud --project="${PROJECT ID}" \ container binauthz attestors public-keys add \ --attestor="${ATTESTOR NAME}" \ --pkix-public-key-file=${PUBLIC KEY FILE} \ --pkix-public-key-algorithm=ecdsa-p256-sha256 Note: This command outputs the PUBLIC KEY ID you use when creating an attestation.

