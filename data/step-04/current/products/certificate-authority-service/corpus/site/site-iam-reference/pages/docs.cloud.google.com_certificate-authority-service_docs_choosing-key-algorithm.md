---
title: "Configure a CA signing key \_|\_ Certificate Authority Service \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/certificate-authority-service/docs/choosing-key-algorithm
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/certificate-authority-service/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/certificate-authority-service/docs/choosing-key-algorithm
  title: "Configure a CA signing key \_|\_ Certificate Authority Service \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Certificate Authority Service
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Configure a CA signing key
A certificate authority (CA) in Certificate Authority Service (CA Service) requires a cryptographic key to sign the certificates that it issues. This signing key establishes trust for your Public Key Infrastructure (PKI).
This document describes the key management strategies that you can choose for your CA signing key, and how to configure it. You can choose a Google-owned and managed key for simplified management with minimal setup, or you can choose a customer-managed key for more direct control over the key's lifecycle and properties.
Use a Google-owned and managed key
When using a Google-owned and managed key, you choose the cryptographic algorithm and key size. CA Service creates and manages the lifecycle of a dedicated Cloud Key Management Service key in a Google-managed project.
Review supported signing key algorithms
Cloud KMS supports two families of algorithms for asymmetric signing
operations suitable for CAs: RSA and ECDSA.
Note: CA Service doesn't support Ed25519 algorithms for CA signing
keys.
RSA
RSA-based signature schemes offer broad compatibility. Use RSA if you need to support legacy systems. Cloud KMS offers RSA_SIGN_PSS and RSA_SIGN_PKCS1 variants. For more information, see RFC 8017 .
RSA-PSS is the newer, more verifiably secure signature scheme and is recommended for most new implementations. RSA_SIGN_PKCS1 is provided for compatibility with earlier systems that don't yet support PSS.
ECDSA
Elliptic Curve keys provide similar security to RSA with smaller key sizes. Cloud KMS supports EC_SIGN_P256 and EC_SIGN_P384 . ECDSA is often preferred for performance and efficiency on modern systems.
Mixed chains
Using different algorithm families within the same certificate chain can cause issues for some systems. To mitigate potential issues, we recommend having separate chains for RSA and ECDSA.
Note: Unlike algorithm families, using different key sizes within a chain is
a common practice.
Review supported key sizes
Even though larger key sizes within the same family provide greater security
strength, these keys also cause more data being stored and transmitted over the
wire. In addition, encryption and signing operations can sometimes take longer
with larger key sizes, though the difference might be imperceptible.
For longer lasting keys, such as those associated with
root or long-lived subordinate CAs, you can use key sizes with greater security
strength than other keys. For example, you can use a 4096-bit RSA key for a root CA, and 2048-bit RSA keys
for subordinate CAs with shorter lifetimes.
Note: Plan for key rotation regardless of the chosen key size.
Choose a signing algorithm for your CA key
Consider the following steps when choosing a signing algorithm for your CA key:
Choose an algorithm family.
If you're creating a subordinate CA that chains up to an existing root CA, use
the same family as the root.
If you're creating a new root CA but you need to work with legacy systems
that don't support ECDSA, use one of the
RSA signing algorithms .
Otherwise, if none of these conditions apply to you, we recommend that you use one of the
Elliptic curve signing algorithms .
RSA only: Choose a signature algorithm.
If you expect to work with legacy libraries or frameworks that don't support
PSS, use one of the RSA_SIGN_PKCS1 algorithms.
Otherwise, use one of the RSA_SIGN_PSS algorithms.
Choose a key size.
For a new root CA or a subordinate CA that's expected to have a lifetime in
the order of years, we recommend that you use the largest key size that's available
for that algorithm family.
For RSA, the largest supported key size is 4096 bits.
For ECDSA, the largest supported key size is 384 bits.
For subordinate CAs with a shorter lifetime, you can use smaller
key sizes, such as 2048 bits for RSA or 256 bits for ECDSA.
Use a customer-managed key
You can configure your CA to use a new or existing asymmetric signing key
managed in your own Cloud KMS project. This option provides direct
control over the key's lifecycle, permissions, and properties.
Cloud KMS defines the key's algorithm and size. When you configure and
create your CA, you select the existing key version, rather than the algorithm
parameters.
Differentiate signing keys from an encryption key
Using a Cloud Key Management Service key as a CA signing key is different from using one or more
Cloud KMS keys for data-at-rest encryption. The primary distinction
between these two key types is their configured CryptoKeyPurpose in
Cloud KMS:
CA signing keys: Require a key with the CryptoKeyPurpose of
ASYMMETRIC_SIGN . These keys perform digital signature operations for
issuing certificates.
Data-at-rest encryption keys: Require a key with the CryptoKeyPurpose
of ENCRYPT_DECRYPT . These keys encrypt and decrypt data. Data-at-rest
encryption keys are also known as customer-managed encryption keys (CMEK).
You can't use a single Cloud KMS key for both signing and
data-at-rest encryption. These purposes are mutually exclusive, and you set them
at key creation.
CA Service also supports data-at-rest encryption for resources like
CA pools, which you configure separately using keys with the ENCRYPT_DECRYPT
purpose. For more information, see Create a CA
pool .
Before you begin
Ensure the following requirements are met:
The key must be in your Cloud KMS project. See Creating keys .
The key's purpose must be ASYMMETRIC_SIGN .
Caution: Keys with the ENCRYPT_DECRYPT purpose (used for data-at-rest encryption like customer-managed encryption keys) can't be used as a CA signing key. A single Cloud KMS key can't have both purposes. See Key purposes and algorithms .
The key's algorithm must be a supported asymmetric signing algorithm .
The key must be in the same location as your CA pool. For example, if your CA pool is in us-central1 , the Cloud KMS key must also be in us-central1 . For information about Cloud KMS locations, see Cloud KMS locations .
The key version that you plan to use must be enabled.
Required roles
To ensure that the service account has the necessary
permissions to use the customer-managed key for signing operations,
ask your administrator to grant the
Cloud Key Management Service CryptoKey Signer/Verifier ( roles/cloudkms.signerVerifier )
IAM role to the service account on the Cloud Key Management Service key.
Important: You must grant this role
to the service account, not to your user account. Failure to grant the role to the correct principal might result in permission errors.
For more information about granting roles, see Manage access to projects, folders, and organizations .
Your administrator might also be able to give the service account
the required permissions through custom
roles or other predefined
roles .
Get the key version resource ID
When you create the CA, you must provide the full resource ID of the specific Cloud KMS CryptoKeyVersion . Copy this string for use in the CA creation process.
The required resource ID format is as follows:
projects/ KMS_PROJECT_ID /locations/ LOCATION /keyRings/ KEY_RING /cryptoKeys/ KMS_KEY /cryptoKeyVersions/ VERSION
Replace the following:
KMS_PROJECT_ID : the ID of the project that contains your KMS key.
LOCATION : the location of the KMS key. This must be the same location as your CA pool.
KEY_RING : the name of the KMS key ring.
KMS_KEY : the name of the KMS key.
VERSION : the KMS key version.
To learn more, see Get a Cloud KMS resource ID . Use this ID when you Create a Certificate
Authority .
What's next
Learn how to Create a root
CA .
Learn how to Create a subordinate
CA .
Learn about Cloud KMS: Key purposes and
algorithms .
Learn about Cloud KMS: Digital
signatures .
Learn how to Configure storage
buckets .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
