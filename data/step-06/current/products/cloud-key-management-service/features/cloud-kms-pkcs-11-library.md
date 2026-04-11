---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:26:39.834Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "Cloud KMS PKCS #11 library"
feature_slug: "cloud-kms-pkcs-11-library"
latest_feature_date: "2021-09-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/reference/pkcs11-library"
  - "https://docs.cloud.google.com/kms/docs/reference/pkcs11-tool"
  - "https://docs.cloud.google.com/kms/docs/reference/pkcs11-jsign"
keywords:
  - "kms"
  - "pkcs"
  - "11"
  - "library"
  - "provides"
  - "conforming"
  - "to"
  - "the"
---

# Cloud KMS PKCS #11 library

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

Cloud KMS provides a library conforming to the PKCS #11 standard for use with existing PKCS #11 applications.

## Extended Definition

Cloud KMS provides a library conforming to the PKCS #11 standard for use with existing PKCS #11 applications.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/reference/pkcs11-library](https://docs.cloud.google.com/kms/docs/reference/pkcs11-library)
- [https://docs.cloud.google.com/kms/docs/reference/pkcs11-tool](https://docs.cloud.google.com/kms/docs/reference/pkcs11-tool)
- [https://docs.cloud.google.com/kms/docs/reference/pkcs11-jsign](https://docs.cloud.google.com/kms/docs/reference/pkcs11-jsign)

## Supporting Pages

### "Library for PKCS #11 \_|\_ Cloud Key Management Service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kms/docs/reference/pkcs11-library](https://docs.cloud.google.com/kms/docs/reference/pkcs11-library)
- Source ID: `site-api-reference`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- Cloud KMS provides a library that conforms to this standard, in order to interoperate with existing applications that consume the PKCS #11 API.
- Cloud KMS Start free Overview Guides Reference Samples Resources More Technology areas More Overview Guides Reference Samples Resources Cross-product tools More Console Cloud KMS All APIs & references API client libraries PKCS #11 library Overview Use Open SSL Apache TLS termination NGINX TLS offload Use pkcs11-tool Sign Windows artifacts with Jsign Windows CNG Provider Overview Signing Windows artifacts Permissions and roles Cloud EKM error reference Overview KMS REST reference Overview v1 REST Resources folders Overview getAutokeyConfig getKajPolicyConfig updateAutokeyConfig updateKajPolicyConfig organizations Overview getKajPolicyConfig updateKajPolicyConfig projects Overview getAutokeyConfig getKajPolicyConfig showEffectiveAutokeyConfig showEffectiveKeyAccessJustificationsEnrollmentConfig showEffectiveKeyAccessJustificationsPolicyConfig updateAutokeyConfig updateKajPolicyConfig projects.locations Overview generateRandomBytes get getEkmConfig list updateEkmConfig projects.locations.ekmConfig Overview getIamPolicy setIamPolicy testIamPermissions projects.locations.ekmConnections Overview create get getIamPolicy list patch setIamPolicy testIamPermissions verifyConnectivity projects.locations.keyHandles Overview create get list projects.locations.keyRings Overview create get getIamPolicy list setIamPolicy testIamPermissions projects.locations.keyRings.cryptoKeys Overview create decrypt delete encrypt get getIamPolicy list patch setIamPolicy testIamPermissions updatePrimaryVersion projects.locations.keyRings.cryptoKeys.cryptoKeyVersions Overview asymmetricDecrypt asymmetricSign create decapsulate delete destroy get getPublicKey import list macSign macVerify patch rawDecrypt rawEncrypt restore projects.locations.keyRings.importJobs Overview create get getIamPolicy list setIamPolicy testIamPermissions projects.locations.operations Overview get projects.locations.retiredResources Overview get list projects.locations.singleTenantHsmInstances Overview create get list projects.locations.singleTenantHsmInstances.proposals Overview approve create delete execute get list Types AutokeyConfig CryptoKeyVersionAlgorithm CryptoKeyVersionView EkmConfig GetPolicyOptions KeyAccessJustificationsPolicyConfig KeyOperationAttestation Location Policy ProtectionLevel TestIamPermissionsResponse KMS Inventory REST reference Overview v1 REST Resources organizations.protectedResources Overview search projects.cryptoKeys Overview list projects.locations.keyRings.cryptoKeys Overview getProtectedResourcesSummary KMS RPC reference Overview google.cloud.kms.v1 google.cloud.location google.iam.v1 google.longrunning google.rpc google.type AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools On this page What's next Home Documentation Security Cloud KMS Reference Was this helpful?
- Library for PKCS #11 Cloud Key Management Service Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools More / Console English Deutsch Español Español – América Latina Français Indonesia Italiano Português Português – Brasil 中文 – 简体 中文 – 繁體 日本語 한국어 Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
- On this page What's next PKCS #11 is a standard that specifies an API for managing cryptographic keys, and performing operations with them.

### "Use a Cloud HSM key with pkcs11-tool \_|\_ Cloud Key Management Service\

- URL: [https://docs.cloud.google.com/kms/docs/reference/pkcs11-tool](https://docs.cloud.google.com/kms/docs/reference/pkcs11-tool)
- Source ID: `site-api-reference`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- On this page Before you begin Use symmetric encryption and decryption Prerequisites Encrypt Decrypt Use asymmetric encryption and decryption Prerequisites Encrypt Decrypt Sign and Verify Prerequisites Sign Verify This guide provides sample pkcs11-tool commands to use a Cloud HSM key on Debian 11 (Bullseye) using the PKCS #11 library.
- Cloud KMS Start free Overview Guides Reference Samples Resources More Technology areas More Overview Guides Reference Samples Resources Cross-product tools More Console Cloud KMS All APIs & references API client libraries PKCS #11 library Overview Use Open SSL Apache TLS termination NGINX TLS offload Use pkcs11-tool Sign Windows artifacts with Jsign Windows CNG Provider Overview Signing Windows artifacts Permissions and roles Cloud EKM error reference Overview KMS REST reference Overview v1 REST Resources folders Overview getAutokeyConfig getKajPolicyConfig updateAutokeyConfig updateKajPolicyConfig organizations Overview getKajPolicyConfig updateKajPolicyConfig projects Overview getAutokeyConfig getKajPolicyConfig showEffectiveAutokeyConfig showEffectiveKeyAccessJustificationsEnrollmentConfig showEffectiveKeyAccessJustificationsPolicyConfig updateAutokeyConfig updateKajPolicyConfig projects.locations Overview generateRandomBytes get getEkmConfig list updateEkmConfig projects.locations.ekmConfig Overview getIamPolicy setIamPolicy testIamPermissions projects.locations.ekmConnections Overview create get getIamPolicy list patch setIamPolicy testIamPermissions verifyConnectivity projects.locations.keyHandles Overview create get list projects.locations.keyRings Overview create get getIamPolicy list setIamPolicy testIamPermissions projects.locations.keyRings.cryptoKeys Overview create decrypt delete encrypt get getIamPolicy list patch setIamPolicy testIamPermissions updatePrimaryVersion projects.locations.keyRings.cryptoKeys.cryptoKeyVersions Overview asymmetricDecrypt asymmetricSign create decapsulate delete destroy get getPublicKey import list macSign macVerify patch rawDecrypt rawEncrypt restore projects.locations.keyRings.importJobs Overview create get getIamPolicy list setIamPolicy testIamPermissions projects.locations.operations Overview get projects.locations.retiredResources Overview get list projects.locations.singleTenantHsmInstances Overview create get list projects.locations.singleTenantHsmInstances.proposals Overview approve create delete execute get list Types AutokeyConfig CryptoKeyVersionAlgorithm CryptoKeyVersionView EkmConfig GetPolicyOptions KeyAccessJustificationsPolicyConfig KeyOperationAttestation Location Policy ProtectionLevel TestIamPermissionsResponse KMS Inventory REST reference Overview v1 REST Resources organizations.protectedResources Overview search projects.cryptoKeys Overview list projects.locations.keyRings.cryptoKeys Overview getProtectedResourcesSummary KMS RPC reference Overview google.cloud.kms.v1 google.cloud.location google.iam.v1 google.longrunning google.rpc google.type AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools On this page Before you begin Use symmetric encryption and decryption Prerequisites Encrypt Decrypt Use asymmetric encryption and decryption Prerequisites Encrypt Decrypt Sign and Verify Prerequisites Sign Verify Home Documentation Security Cloud KMS Reference Was this helpful?
- Decrypt To decrypt a text file, run the following command: pkcs11 - tool -- module PATH TO LIBKMSP11 SO \ -- decrypt -- mechanism RSA - PKCS - OAEP -- slot 0 -- hash - algorithm = sha256 \ -- mgf MGF1 - SHA256 -- label HSM KEY NAME -- type privkey \ - i ENCRYPTED TEXT FILE PATH \ - o OUTPUT TEXT FILE PATH Replace the following: PATH TO LIBKMSP11 SO : the path to the PKCS#11 module (path/to/libkmsp11.so).
- Decrypt To decrypt a text file, run the following command: pkcs11-tool --module PATH TO LIBKMSP11 SO --decrypt \ --mechanism MECHANISM \ --slot 0 \ --label HSM KEY NAME \ --iv INITIALIZATION VECTOR \ --input-file ENCRYPTED TEXT FILE PATH \ --output-file DECRYPTED TEXT FILE PATH Replace the following: PATH TO LIBKMSP11 SO : the path to the PKCS#11 module—for example, /usr/local/lib/libkmsp11.so .

### "Use Jsign and PKCS#11 to sign Windows artifacts \_|\_ Cloud Key Management\

- URL: [https://docs.cloud.google.com/kms/docs/reference/pkcs11-jsign](https://docs.cloud.google.com/kms/docs/reference/pkcs11-jsign)
- Source ID: `site-api-reference`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- Cloud KMS Start free Overview Guides Reference Samples Resources More Technology areas More Overview Guides Reference Samples Resources Cross-product tools More Console Cloud KMS All APIs & references API client libraries PKCS #11 library Overview Use Open SSL Apache TLS termination NGINX TLS offload Use pkcs11-tool Sign Windows artifacts with Jsign Windows CNG Provider Overview Signing Windows artifacts Permissions and roles Cloud EKM error reference Overview KMS REST reference Overview v1 REST Resources folders Overview getAutokeyConfig getKajPolicyConfig updateAutokeyConfig updateKajPolicyConfig organizations Overview getKajPolicyConfig updateKajPolicyConfig projects Overview getAutokeyConfig getKajPolicyConfig showEffectiveAutokeyConfig showEffectiveKeyAccessJustificationsEnrollmentConfig showEffectiveKeyAccessJustificationsPolicyConfig updateAutokeyConfig updateKajPolicyConfig projects.locations Overview generateRandomBytes get getEkmConfig list updateEkmConfig projects.locations.ekmConfig Overview getIamPolicy setIamPolicy testIamPermissions projects.locations.ekmConnections Overview create get getIamPolicy list patch setIamPolicy testIamPermissions verifyConnectivity projects.locations.keyHandles Overview create get list projects.locations.keyRings Overview create get getIamPolicy list setIamPolicy testIamPermissions projects.locations.keyRings.cryptoKeys Overview create decrypt delete encrypt get getIamPolicy list patch setIamPolicy testIamPermissions updatePrimaryVersion projects.locations.keyRings.cryptoKeys.cryptoKeyVersions Overview asymmetricDecrypt asymmetricSign create decapsulate delete destroy get getPublicKey import list macSign macVerify patch rawDecrypt rawEncrypt restore projects.locations.keyRings.importJobs Overview create get getIamPolicy list setIamPolicy testIamPermissions projects.locations.operations Overview get projects.locations.retiredResources Overview get list projects.locations.singleTenantHsmInstances Overview create get list projects.locations.singleTenantHsmInstances.proposals Overview approve create delete execute get list Types AutokeyConfig CryptoKeyVersionAlgorithm CryptoKeyVersionView EkmConfig GetPolicyOptions KeyAccessJustificationsPolicyConfig KeyOperationAttestation Location Policy ProtectionLevel TestIamPermissionsResponse KMS Inventory REST reference Overview v1 REST Resources organizations.protectedResources Overview search projects.cryptoKeys Overview list projects.locations.keyRings.cryptoKeys Overview getProtectedResourcesSummary KMS RPC reference Overview google.cloud.kms.v1 google.cloud.location google.iam.v1 google.longrunning google.rpc google.type AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools On this page Use cases Before you begin Configuration Create a Cloud KMS-hosted signing key Download the HSM attestation Create a self-signed certificate with OpenSSL Create a new certificate signing request Sign an artifact with Jsign Home Documentation Security Cloud KMS Reference Was this helpful?
- In the Cloud KMS PKCS #11 library, the key label is equivalent to the CryptoKey name. openssl req -new -x509 -days 3650 -subj '/CN=test/' -sha256 -engine pkcs11 \ -keyform engine -key pkcs11:object= KEY NAME > ca.cert If this command fails, PKCS11 MODULE PATH may have been set incorrectly, or you might not have the right permissions to use the Cloud KMS signing key.
- On this page Use cases Before you begin Configuration Create a Cloud KMS-hosted signing key Download the HSM attestation Create a self-signed certificate with OpenSSL Create a new certificate signing request Sign an artifact with Jsign This guide provides instructions for creating a Cloud HSM key for Microsoft Authenticode signing through PKCS#11 and Jsign .
- Using Cloud Shell or your own machine, run the following command: openssl req -new -subj '/CN= CERTIFICATE NAME /' DIGEST FLAG \ -engine pkcs11 -keyform engine \ -key pkcs11:id= KEY ID > REQUEST NAME .csr Replace the following: CERTIFICATE NAME : a name for the certificate that you want to generate.

