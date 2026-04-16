---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:33.002Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "Cloud KMS key encapsulation mechanisms"
feature_slug: "cloud-kms-key-encapsulation-mechanisms"
latest_feature_date: "2025-09-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/creating-keys"
  - "https://docs.cloud.google.com/kms/docs/create-key"
  - "https://docs.cloud.google.com/kms/docs/algorithms"
  - "https://docs.cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm"
keywords:
  - "kms"
  - "key"
  - "encapsulation"
  - "mechanisms"
  - "supports"
  - "post"
  - "quantum"
  - "resistant"
---

# Cloud KMS key encapsulation mechanisms

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

Cloud KMS supports post-quantum-resistant key encapsulation mechanisms for sharing secrets.

## Extended Definition

Cloud KMS supports post-quantum-resistant key encapsulation mechanisms for sharing secrets.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/creating-keys](https://docs.cloud.google.com/kms/docs/creating-keys)
- [https://docs.cloud.google.com/kms/docs/create-key](https://docs.cloud.google.com/kms/docs/create-key)
- [https://docs.cloud.google.com/kms/docs/algorithms](https://docs.cloud.google.com/kms/docs/algorithms)
- [https://docs.cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm](https://docs.cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm)

## Supporting Pages

### Create a key \_|\_ Cloud Key Management Service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kms/docs/creating-keys](https://docs.cloud.google.com/kms/docs/creating-keys)
- Source ID: `site-docs-root`
- Final score: 192
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a key with purpose KEY ENCAPSULATION by calling CryptoKey.create . curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /keyRings/ KEY RING /cryptoKeys?crypto key id= KEY NAME " \ --request "POST" \ --header "authorization: Bearer TOKEN " \ --header "content-type: application/json" \ --data '{"purpose": "KEY ENCAPSULATION", "versionTemplate": {"algorithm": " ALGORITHM "}}' Replace the following: PROJECT ID : the ID of the project that contains the key ring.
- To create a Single-tenant Cloud HSM key, set PROTECTION LEVEL to HSM SINGLE TENANT and add the --crypto-key-backend flag to the kms keys create command: curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /keyRings/ KEY RING /cryptoKeys?crypto key id= KEY NAME " \ --request "POST" \ --header "authorization: Bearer TOKEN " \ --header "content-type: application/json" \ --data '{"purpose": "ENCRYPT DECRYPT", "versionTemplate": { "protectionLevel": "HSM SINGLE TENANT", "algorithm": " ALGORITHM ", "crypto-key-backend": "projects/ INSTANCE PROJECT /locations/ LOCATION /singleTenantHsmInstances/ INSTANCE NAME " }}' Replace the following: INSTANCE PROJECT : the identifier of the project where your Single-tenant Cloud HSM instance exists.
- To create a Single-tenant Cloud HSM key, add the cryptoKeyBackend field to the CryptoKey.create request body: curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /keyRings/ KEY RING /cryptoKeys?crypto key id= KEY NAME " \ --request "POST" \ --header "authorization: Bearer TOKEN " \ --header "content-type: application/json" \ --data '{"purpose": "MAC", "versionTemplate": { "protectionLevel": " PROTECTION LEVEL ", "algorithm": " ALGORITHM ", "cryptoKeyBackend": "projects/ INSTANCE PROJECT /locations/ LOCATION /singleTenantHsmInstances/ INSTANCE NAME " }}' Replace the following: INSTANCE PROJECT : the identifier of the project where your Single-tenant Cloud HSM instance exists.
- To create a software or Multi-tenant Cloud HSM key, use the CryptoKey.create method: curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /keyRings/ KEY RING /cryptoKeys?crypto key id= KEY NAME " \ --request "POST" \ --header "authorization: Bearer TOKEN " \ --header "content-type: application/json" \ --data '{"purpose": "ENCRYPT DECRYPT", "versionTemplate": { "protectionLevel": " PROTECTION LEVEL ", "algorithm": " ALGORITHM " }}' Replace the following: PROJECT ID : the ID of the project that contains the key ring.

### Create a key \_|\_ Cloud Key Management Service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kms/docs/create-key](https://docs.cloud.google.com/kms/docs/create-key)
- Source ID: `site-iam-reference`
- Final score: 192
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a key with purpose KEY ENCAPSULATION by calling CryptoKey.create . curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /keyRings/ KEY RING /cryptoKeys?crypto key id= KEY NAME " \ --request "POST" \ --header "authorization: Bearer TOKEN " \ --header "content-type: application/json" \ --data '{"purpose": "KEY ENCAPSULATION", "versionTemplate": {"algorithm": " ALGORITHM "}}' Replace the following: PROJECT ID : the ID of the project that contains the key ring.
- To create a Single-tenant Cloud HSM key, set PROTECTION LEVEL to HSM SINGLE TENANT and add the --crypto-key-backend flag to the kms keys create command: curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /keyRings/ KEY RING /cryptoKeys?crypto key id= KEY NAME " \ --request "POST" \ --header "authorization: Bearer TOKEN " \ --header "content-type: application/json" \ --data '{"purpose": "ENCRYPT DECRYPT", "versionTemplate": { "protectionLevel": "HSM SINGLE TENANT", "algorithm": " ALGORITHM ", "crypto-key-backend": "projects/ INSTANCE PROJECT /locations/ LOCATION /singleTenantHsmInstances/ INSTANCE NAME " }}' Replace the following: INSTANCE PROJECT : the identifier of the project where your Single-tenant Cloud HSM instance exists.
- To create a Single-tenant Cloud HSM key, add the cryptoKeyBackend field to the CryptoKey.create request body: curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /keyRings/ KEY RING /cryptoKeys?crypto key id= KEY NAME " \ --request "POST" \ --header "authorization: Bearer TOKEN " \ --header "content-type: application/json" \ --data '{"purpose": "MAC", "versionTemplate": { "protectionLevel": " PROTECTION LEVEL ", "algorithm": " ALGORITHM ", "cryptoKeyBackend": "projects/ INSTANCE PROJECT /locations/ LOCATION /singleTenantHsmInstances/ INSTANCE NAME " }}' Replace the following: INSTANCE PROJECT : the identifier of the project where your Single-tenant Cloud HSM instance exists.
- To create a software or Multi-tenant Cloud HSM key, use the CryptoKey.create method: curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /keyRings/ KEY RING /cryptoKeys?crypto key id= KEY NAME " \ --request "POST" \ --header "authorization: Bearer TOKEN " \ --header "content-type: application/json" \ --data '{"purpose": "ENCRYPT DECRYPT", "versionTemplate": { "protectionLevel": " PROTECTION LEVEL ", "algorithm": " ALGORITHM " }}' Replace the following: PROJECT ID : the ID of the project that contains the key ring.

### "Key purposes and algorithms \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/algorithms](https://docs.cloud.google.com/kms/docs/algorithms)
- Source ID: `site-iam-reference`
- Final score: 191
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Key purposes Cloud KMS provides key purposes for the following scenarios: Scenario Key purpose (SDK) Key purpose (API) Supported methods Symmetric encryption encryption ENCRYPT DECRYPT cryptoKeys.encrypt , cryptoKeys.decrypt Raw symmetric encryption raw-encryption RAW ENCRYPT DECRYPT cryptoKeys.rawEncrypt , cryptoKeys.rawDecrypt Asymmetric signing asymmetric-signing ASYMMETRIC SIGN cryptoKeyVersions.asymmetricSign , cryptoKeyVersions.getPublicKey Asymmetric encryption asymmetric-encryption ASYMMETRIC DECRYPT cryptoKeyVersions.asymmetricDecrypt , cryptoKeyVersions.getPublicKey Key encapsulation mechanisms key-encapsulation KEY ENCAPSULATION cryptoKeyVersions.decapsulate , cryptoKeyVersions.getPublicKey MAC signing mac MAC cryptoKeyVersions.macSign , cryptoKeyVersions.macVerify When you create a key, you define the purpose and the algorithm of that key.
- For key encapsulation, we recommend using KEM XWING , which is a hybrid algorithm that can provide layered defense against both classical and potential quantum adversaries.
- Key encapsulation algorithms The KEY ENCAPSULATION key purpose is used to establish shared secrets using key encapsulation mechanisms .
- Algorithm (SDK) Algorithm (API) Description ml-kem-768 ML KEM 768 Module-lattice-based key-encapsulation mechanism with ML-KEM-768 parameter set (FIPS 203) ml-kem-1024 ML KEM 1024 Module-lattice-based key-encapsulation mechanism with ML-KEM-1024 parameter set (FIPS 203) kem-xwing KEM XWING X-Wing hybrid KEM combining ML-KEM-768 with X25519 MAC signing algorithms The MAC key purpose enables symmetric MAC signing.

### "CryptoKeyVersionAlgorithm \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm](https://docs.cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm)
- Source ID: `site-api-reference`
- Final score: 167
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Security Cloud KMS Reference Send feedback CryptoKeyVersionAlgorithm Stay organized with collections Save and categorize content based on your preferences.
- PQ SIGN HASH SLH DSA SHA2 128S SHA256 The post-quantum stateless hash-based digital signature algorithm, at security level 1.
- PQ SIGN ML DSA 44 EXTERNAL MU The post-quantum Module-Lattice-Based Digital Signature Algorithm, at security level 1.
- PQ SIGN ML DSA 65 EXTERNAL MU The post-quantum Module-Lattice-Based Digital Signature Algorithm, at security level 3.

