---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:33.062Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "RSA_SIGN_PKCS1_4096_SHA512 algorithm"
feature_slug: "rsa-sign-pkcs1-4096-sha512-algorithm"
latest_feature_date: "2018-10-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/algorithms"
  - "https://docs.cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm"
  - "https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys"
  - "https://docs.cloud.google.com/kms/docs/create-validate-signatures"
keywords:
  - "rsa"
  - "sign"
  - "pkcs1"
  - "4096"
  - "sha512"
  - "algorithm"
  - "kms"
  - "supports"
---

# RSA_SIGN_PKCS1_4096_SHA512 algorithm

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

Cloud KMS supports the RSA_SIGN_PKCS1_4096_SHA512 algorithm.

## Extended Definition

Cloud KMS supports the RSA_SIGN_PKCS1_4096_SHA512 algorithm.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/algorithms](https://docs.cloud.google.com/kms/docs/algorithms)
- [https://docs.cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm](https://docs.cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm)
- [https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys](https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys)
- [https://docs.cloud.google.com/kms/docs/create-validate-signatures](https://docs.cloud.google.com/kms/docs/create-validate-signatures)

## Supporting Pages

### "Key purposes and algorithms \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/algorithms](https://docs.cloud.google.com/kms/docs/algorithms)
- Source ID: `site-iam-reference`
- Final score: 242
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Algorithm (SDK) Algorithm (API) Description rsa-sign-pss-2048-sha256 RSA SIGN PSS 2048 SHA256 RSASSA-PSS 2048 bit key with a SHA-256 digest rsa-sign-pss-3072-sha256 (recommended) RSA SIGN PSS 3072 SHA256 RSASSA-PSS 3072 bit key with a SHA-256 digest rsa-sign-pss-4096-sha256 RSA SIGN PSS 4096 SHA256 RSASSA-PSS 4096 bit key with a SHA-256 digest rsa-sign-pss-4096-sha512 RSA SIGN PSS 4096 SHA512 RSASSA-PSS 4096 bit key with a SHA-512 digest rsa-sign-pkcs1-2048-sha256 RSA SIGN PKCS1 2048 SHA256 RSASSA-PKCS1 v1 5 with a 2048 bit key and a SHA-256 digest rsa-sign-pkcs1-3072-sha256 RSA SIGN PKCS1 3072 SHA256 RSASSA-PKCS1 v1 5 with a 3072 bit key and a SHA-256 digest rsa-sign-pkcs1-4096-sha256 RSA SIGN PKCS1 4096 SHA256 RSASSA-PKCS1 v1 5 with a 4096 bit key and a SHA-256 digest rsa-sign-pkcs1-4096-sha512 RSA SIGN PKCS1 4096 SHA512 RSASSA-PKCS1 v1 5 with a 4096 bit key and a SHA-512 digest rsa-sign-raw-pkcs1-2048 RSA SIGN RAW PKCS1 2048 RSASSA-PKCS1-v1 5 signing without encoding, with a 2048 bit key rsa-sign-raw-pkcs1-3072 RSA SIGN RAW PKCS1 3072 RSASSA-PKCS1-v1 5 signing without encoding, with a 3072 bit key rsa-sign-raw-pkcs1-4096 RSA SIGN RAW PKCS1 4096 RSASSA-PKCS1-v1 5 signing without encoding, with a 4096 bit key For Probabilistic Signature Scheme (PSS), the salt length used is equal to the length of the digest algorithm.
- Algorithm (SDK) Algorithm (API) Description rsa-decrypt-oaep-2048-sha1 RSA DECRYPT OAEP 2048 SHA1 RSAES-OAEP 2048 bit key with a SHA-1 digest rsa-decrypt-oaep-2048-sha256 RSA DECRYPT OAEP 2048 SHA256 RSAES-OAEP 2048 bit key with a SHA-256 digest rsa-decrypt-oaep-3072-sha1 RSA DECRYPT OAEP 3072 SHA1 RSAES-OAEP 3072 bit key with a SHA-1 digest rsa-decrypt-oaep-3072-sha256 (recommended) RSA DECRYPT OAEP 3072 SHA256 RSAES-OAEP 3072 bit key with a SHA-256 digest rsa-decrypt-oaep-4096-sha1 RSA DECRYPT OAEP 4096 SHA1 RSAES-OAEP 4096 bit key with a SHA-1 digest rsa-decrypt-oaep-4096-sha256 RSA DECRYPT OAEP 4096 SHA256 RSAES-OAEP 4096 bit key with a SHA-256 digest rsa-decrypt-oaep-4096-sha512 RSA DECRYPT OAEP 4096 SHA512 RSAES-OAEP 4096 bit key with a SHA-512 digest All of these algorithms use Optimal Asymmetric Encryption Padding (OAEP) with the mask generation function MGF1.
- For example, if you are using RSA SIGN PSS 2048 SHA256, you will submit a SHA-256 hash of the data to be signed, and Cloud KMS will internally use SHA-256 as the hash algorithm for MGF1 when computing the signature.
- Keys with key purpose ASYMMETRIC SIGN use different algorithms, depending on whether the key supports elliptic curve signing or RSA signing .

### "CryptoKeyVersionAlgorithm \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm](https://docs.cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm)
- Source ID: `site-api-reference`
- Final score: 230
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- RSA SIGN PKCS1 4096 SHA512 RSASSA-PKCS1-v1 5 with a 4096 bit key and a SHA512 digest.
- RSA SIGN RAW PKCS1 4096 RSASSA-PKCS1-v1 5 signing without encoding, with a 4096 bit key.
- RSA SIGN PKCS1 4096 SHA256 RSASSA-PKCS1-v1 5 with a 4096 bit key and a SHA256 digest.
- RSA SIGN PSS 4096 SHA512 RSASSA-PSS 4096 bit key with a SHA512 digest.

### "REST Resource: projects.cryptoKeys \_|\_ Cloud Key Management Service \_\

- URL: [https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys](https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys)
- Source ID: `site-api-reference`
- Final score: 214
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- RSA SIGN PKCS1 4096 SHA512 RSASSA-PKCS1-v1 5 with a 4096 bit key and a SHA512 digest.
- RSA SIGN RAW PKCS1 4096 RSASSA-PKCS1-v1 5 signing without encoding, with a 4096 bit key.
- RSA SIGN PKCS1 4096 SHA256 RSASSA-PKCS1-v1 5 with a 4096 bit key and a SHA256 digest.
- RSA SIGN PSS 4096 SHA512 RSASSA-PSS 4096 bit key with a SHA512 digest.

### "Creating and validating digital signatures \_|\_ Cloud Key Management Service\

- URL: [https://docs.cloud.google.com/kms/docs/create-validate-signatures](https://docs.cloud.google.com/kms/docs/create-validate-signatures)
- Source ID: `site-iam-reference`
- Final score: 201
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- PublicKey rsaKey = KeyFactory . getInstance ( "RSA" ). generatePublic ( keySpec ); // Verify the 'RSA SIGN PKCS1 2048 SHA256' signature. // For other key algorithms: // http://docs.oracle.com/javase/7/docs/technotes/guides/security/StandardNames.html#Signature Signature rsaVerify = Signature . getInstance ( "SHA256withRSA" ); rsaVerify . initVerify ( rsaKey ); rsaVerify . update ( plaintext ); // Verify the signature. boolean verified = rsaVerify . verify ( signature ); System . out . printf ( "Signature verified: %s" , verified ); } } // Converts a base64-encoded PEM certificate like the one returned from Cloud // KMS into a DER formatted certificate for use with the Java APIs. private byte [] convertPemToDer ( String pem ) { BufferedReader bufferedReader = new BufferedReader ( new StringReader ( pem )); String encoded = bufferedReader . lines () . filter ( line - > ! line . startsWith ( "-----BEGIN" ) && ! line . startsWith ( "-----END" )) . collect ( Collectors . joining ()); return Base64 . getDecoder (). decode ( encoded ); } } Node.js To run this code, first set up a Node.js development environment and install the Cloud KMS Node.js SDK . // // TODO(developer): Uncomment these variables before running the sample. // // const projectId = 'your-project-id'; // const locationId = 'us-east1'; // const keyRingId = 'my-key-ring'; // const keyId = 'my-key'; // const versionId = '1'; // const message = 'my message to verify'; // const signatureBuffer = Buffer.from('...'); // Imports the Cloud KMS library const { KeyManagementServiceClient } = require ( ' @google-cloud/kms ' ); // Instantiates a client const client = new KeyManagementServiceClient (); // Build the key name const versionName = client . cryptoKeyVersionPath ( projectId , locationId , keyRingId , keyId , versionId ); async function verifyAsymmetricSignatureRsa () { // Get public key const [ publicKey ] = await client . getPublicKey ({ name : versionName , }); // Create the verifier.
- PublicKey ecKey = KeyFactory . getInstance ( "EC" ). generatePublic ( keySpec ); // Verify the 'RSA SIGN PKCS1 2048 SHA256' signature. // For other key algorithms: // http://docs.oracle.com/javase/7/docs/technotes/guides/security/StandardNames.html#Signature Signature ecVerify = Signature . getInstance ( "SHA256withECDSA" ); ecVerify . initVerify ( ecKey ); ecVerify . update ( plaintext ); // Verify the signature. boolean verified = ecVerify . verify ( signature ); System . out . printf ( "Signature verified: %s" , verified ); } } // Converts a base64-encoded PEM certificate like the one returned from Cloud // KMS into a DER formatted certificate for use with the Java APIs. private byte [] convertPemToDer ( String pem ) { BufferedReader bufferedReader = new BufferedReader ( new StringReader ( pem )); String encoded = bufferedReader . lines () . filter ( line - > ! line . startsWith ( "-----BEGIN" ) && ! line . startsWith ( "-----END" )) . collect ( Collectors . joining ()); return Base64 . getDecoder (). decode ( encoded ); } } Node.js To run this code, first set up a Node.js development environment and install the Cloud KMS Node.js SDK . // // TODO(developer): Uncomment these variables before running the sample. // // const projectId = 'your-project-id'; // const locationId = 'us-east1'; // const keyRingId = 'my-key-ring'; // const keyId = 'my-key'; // const versionId = '1'; // const message = 'my message to verify'; // const signatureBuffer = Buffer.from('...'); // Imports the Cloud KMS library const { KeyManagementServiceClient } = require ( ' @google-cloud/kms ' ); // Instantiates a client const client = new KeyManagementServiceClient (); // Build the key name const versionName = client . cryptoKeyVersionPath ( projectId , locationId , keyRingId , keyId , versionId ); async function verifyAsymmetricSignatureEc () { // Get public key const [ publicKey ] = await client . getPublicKey ({ name : versionName , }); // Create the verifier.
- RSA PKCS1 PSS PADDING , }; // Verify the signature using the public key const verified = verify . verify ( key , signatureBuffer ); return verified ; } return verifyAsymmetricSignatureRsa (); PHP To run this code, first learn about using PHP on Google Cloud and install the Cloud KMS PHP SDK . function verify asymmetric rsa( string $projectId = 'my-project', string $locationId = 'us-east1', string $keyRingId = 'my-key-ring', string $keyId = 'my-key', string $versionId = '123', string $message = '...', string $signature = '...' ): void { // PHP has limited support for asymmetric encryption operations. // Specifically, openssl public encrypt() does not allow customizing // algorithms or padding.
- This process creates the same results as a standard RSA SIGN PKCS1 2048 SHA512 algorithm.

