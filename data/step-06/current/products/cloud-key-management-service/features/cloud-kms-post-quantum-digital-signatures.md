---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:33.004Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "Cloud KMS post-quantum digital signatures"
feature_slug: "cloud-kms-post-quantum-digital-signatures"
latest_feature_date: "2025-02-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/create-validate-signatures"
  - "https://docs.cloud.google.com/kms/docs/algorithms"
  - "https://docs.cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm"
  - "https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures"
keywords:
  - "kms"
  - "post"
  - "quantum"
  - "digital"
  - "signatures"
  - "supports"
  - "cryptography"
  - "algorithms"
---

# Cloud KMS post-quantum digital signatures

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

Cloud KMS supports post-quantum cryptography algorithms for digital signatures.

## Extended Definition

Cloud KMS supports post-quantum cryptography algorithms for digital signatures.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/create-validate-signatures](https://docs.cloud.google.com/kms/docs/create-validate-signatures)
- [https://docs.cloud.google.com/kms/docs/algorithms](https://docs.cloud.google.com/kms/docs/algorithms)
- [https://docs.cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm](https://docs.cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm)
- [https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures](https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures)

## Supporting Pages

### "Creating and validating digital signatures \_|\_ Cloud Key Management Service\

- URL: [https://docs.cloud.google.com/kms/docs/create-validate-signatures](https://docs.cloud.google.com/kms/docs/create-validate-signatures)
- Source ID: `site-iam-reference`
- Final score: 196
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Security Cloud KMS Guides Send feedback Creating and validating digital signatures Stay organized with collections Save and categorize content based on your preferences.
- PublicKey rsaKey = KeyFactory . getInstance ( "RSA" ). generatePublic ( keySpec ); // Verify the 'RSA SIGN PKCS1 2048 SHA256' signature. // For other key algorithms: // http://docs.oracle.com/javase/7/docs/technotes/guides/security/StandardNames.html#Signature Signature rsaVerify = Signature . getInstance ( "SHA256withRSA" ); rsaVerify . initVerify ( rsaKey ); rsaVerify . update ( plaintext ); // Verify the signature. boolean verified = rsaVerify . verify ( signature ); System . out . printf ( "Signature verified: %s" , verified ); } } // Converts a base64-encoded PEM certificate like the one returned from Cloud // KMS into a DER formatted certificate for use with the Java APIs. private byte [] convertPemToDer ( String pem ) { BufferedReader bufferedReader = new BufferedReader ( new StringReader ( pem )); String encoded = bufferedReader . lines () . filter ( line - > ! line . startsWith ( "-----BEGIN" ) && ! line . startsWith ( "-----END" )) . collect ( Collectors . joining ()); return Base64 . getDecoder (). decode ( encoded ); } } Node.js To run this code, first set up a Node.js development environment and install the Cloud KMS Node.js SDK . // // TODO(developer): Uncomment these variables before running the sample. // // const projectId = 'your-project-id'; // const locationId = 'us-east1'; // const keyRingId = 'my-key-ring'; // const keyId = 'my-key'; // const versionId = '1'; // const message = 'my message to verify'; // const signatureBuffer = Buffer.from('...'); // Imports the Cloud KMS library const { KeyManagementServiceClient } = require ( ' @google-cloud/kms ' ); // Instantiates a client const client = new KeyManagementServiceClient (); // Build the key name const versionName = client . cryptoKeyVersionPath ( projectId , locationId , keyRingId , keyId , versionId ); async function verifyAsymmetricSignatureRsa () { // Get public key const [ publicKey ] = await client . getPublicKey ({ name : versionName , }); // Create the verifier.
- PublicKey ecKey = KeyFactory . getInstance ( "EC" ). generatePublic ( keySpec ); // Verify the 'RSA SIGN PKCS1 2048 SHA256' signature. // For other key algorithms: // http://docs.oracle.com/javase/7/docs/technotes/guides/security/StandardNames.html#Signature Signature ecVerify = Signature . getInstance ( "SHA256withECDSA" ); ecVerify . initVerify ( ecKey ); ecVerify . update ( plaintext ); // Verify the signature. boolean verified = ecVerify . verify ( signature ); System . out . printf ( "Signature verified: %s" , verified ); } } // Converts a base64-encoded PEM certificate like the one returned from Cloud // KMS into a DER formatted certificate for use with the Java APIs. private byte [] convertPemToDer ( String pem ) { BufferedReader bufferedReader = new BufferedReader ( new StringReader ( pem )); String encoded = bufferedReader . lines () . filter ( line - > ! line . startsWith ( "-----BEGIN" ) && ! line . startsWith ( "-----END" )) . collect ( Collectors . joining ()); return Base64 . getDecoder (). decode ( encoded ); } } Node.js To run this code, first set up a Node.js development environment and install the Cloud KMS Node.js SDK . // // TODO(developer): Uncomment these variables before running the sample. // // const projectId = 'your-project-id'; // const locationId = 'us-east1'; // const keyRingId = 'my-key-ring'; // const keyId = 'my-key'; // const versionId = '1'; // const message = 'my message to verify'; // const signatureBuffer = Buffer.from('...'); // Imports the Cloud KMS library const { KeyManagementServiceClient } = require ( ' @google-cloud/kms ' ); // Instantiates a client const client = new KeyManagementServiceClient (); // Build the key name const versionName = client . cryptoKeyVersionPath ( projectId , locationId , keyRingId , keyId , versionId ); async function verifyAsymmetricSignatureEc () { // Get public key const [ publicKey ] = await client . getPublicKey ({ name : versionName , }); // Create the verifier.
- Because the signature is in a binary // format, you need to encode the output before printing it to a console or // displaying it on a screen. const encoded = signResponse . signature . toString ( 'base64' ); console . log ( Signature: ${ encoded } ); return signResponse . signature ; } return signAsymmetric (); PHP To run this code, first learn about using PHP on Google Cloud and install the Cloud KMS PHP SDK . use Google\Cloud\Kms\V1\AsymmetricSignRequest; use Google\Cloud\Kms\V1\Client\KeyManagementServiceClient; use Google\Cloud\Kms\V1\Digest; function sign asymmetric( string $projectId = 'my-project', string $locationId = 'us-east1', string $keyRingId = 'my-key-ring', string $keyId = 'my-key', string $versionId = '123', string $message = '...' ) { // Create the Cloud KMS client. $client = new KeyManagementServiceClient(); // Build the key version name. $keyVersionName = $client->cryptoKeyVersionName($projectId, $locationId, $keyRingId, $keyId, $versionId); // Calculate the hash. $hash = hash('sha256', $message, true); // Build the digest. // // Note: Key algorithms will require a varying hash function.

### "Key purposes and algorithms \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/algorithms](https://docs.cloud.google.com/kms/docs/algorithms)
- Source ID: `site-iam-reference`
- Final score: 190
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Post-quantum cryptography (PQC) signing algorithms start with the prefix PQ SIGN .
- All of these algorithms are designed to be post-quantum secure.
- For additional cryptographic details about these signatures, see DER encoding RSA signing algorithms The format of an RSA signing algorithm is RSA SIGN [PADDING ALGORITHM] [MODULUS BIT LENGTH] [DIGEST ALGORITHM] where [PADDING ALGORITHM] is the padding algorithm [MODULUS BIT LENGTH] is the bit length of the key [DIGEST ALGORITHM] is the digest algorithm Note that some algorithms are formatted as RSA SIGN RAW [PADDING ALGORITHM] [MODULUS BIT LENGTH] and omit the digest algorithm.
- Algorithm (SDK) Algorithm (API) Description hmac-sha1 HMAC SHA1 HMAC with a SHA-1 digest hmac-sha224 HMAC SHA224 HMAC with a SHA-224 digest hmac-sha256 (recommended) HMAC SHA256 HMAC with a SHA-256 digest hmac-sha384 HMAC SHA384 HMAC with a SHA-384 digest hmac-sha512 HMAC SHA512 HMAC with a SHA-512 digest Algorithm recommendations For digital signing, the recommendation is to use elliptic curve signing algorithms.

### "CryptoKeyVersionAlgorithm \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm](https://docs.cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm)
- Source ID: `site-api-reference`
- Final score: 172
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Other hash functions can also be used: https://cloud.google.com/kms/docs/create-validate-signatures#ecdsa support for other hash algorithms EC SIGN ED25519 EdDSA on the Curve25519 in pure mode (taking data as input).
- Other hash functions can also be used: https://cloud.google.com/kms/docs/create-validate-signatures#ecdsa support for other hash algorithms EC SIGN P384 SHA384 ECDSA on the NIST P-384 curve with a SHA384 digest.
- Other hash functions can also be used: https://cloud.google.com/kms/docs/create-validate-signatures#ecdsa support for other hash algorithms EC SIGN SECP256K1 SHA256 ECDSA on the non-NIST secp256k1 curve.
- PQ SIGN HASH SLH DSA SHA2 128S SHA256 The post-quantum stateless hash-based digital signature algorithm, at security level 1.

### "Creating and validating MAC digital signatures \_|\_ Cloud Key Management\

- URL: [https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures](https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures)
- Source ID: `site-iam-reference`
- Final score: 148
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Security Cloud KMS Guides Send feedback Creating and validating MAC digital signatures Stay organized with collections Save and categorize content based on your preferences.
- Required roles To get the permissions that you need to create and verify signatures, ask your administrator to grant you the following IAM roles on the key: To create signatures: Cloud KMS CryptoKey Signer ( roles/cloudkms.signer ) To verify signatures: Cloud KMS CryptoKey Verifier ( roles/cloudkms.verifier ) To create and verify signatures: Cloud KMS CryptoKey Signer/Verifier ( roles/cloudkms.signerVerifier ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Before you begin When creating MAC digital signatures, you must use a key that has the key purpose of MAC .
- This page shows you how to create and validate digital signatures based on MAC keys.

