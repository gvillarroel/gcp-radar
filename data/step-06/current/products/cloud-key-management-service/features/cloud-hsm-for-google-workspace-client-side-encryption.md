---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:33.003Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "Cloud HSM for Google Workspace client-side encryption"
feature_slug: "cloud-hsm-for-google-workspace-client-side-encryption"
latest_feature_date: "2025-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/client-side-encryption"
  - "https://docs.cloud.google.com/kms/docs/key-management-service"
  - "https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx"
  - "https://docs.cloud.google.com/kms/docs/cmek-best-practices"
keywords:
  - "hsm"
  - "for"
  - "workspace"
  - "client"
  - "side"
  - "encryption"
  - "lets"
  - "you"
---

# Cloud HSM for Google Workspace client-side encryption

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

Cloud HSM for Google Workspace lets you use Cloud HSM keys for client-side encryption in Google Workspace.

## Extended Definition

Cloud HSM for Google Workspace lets you use Cloud HSM keys for client-side encryption in Google Workspace.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/client-side-encryption](https://docs.cloud.google.com/kms/docs/client-side-encryption)
- [https://docs.cloud.google.com/kms/docs/key-management-service](https://docs.cloud.google.com/kms/docs/key-management-service)
- [https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx](https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx)
- [https://docs.cloud.google.com/kms/docs/cmek-best-practices](https://docs.cloud.google.com/kms/docs/cmek-best-practices)

## Supporting Pages

### "Client-side encryption with Tink and Cloud KMS \_|\_ Cloud Key Management\

- URL: [https://docs.cloud.google.com/kms/docs/client-side-encryption](https://docs.cloud.google.com/kms/docs/client-side-encryption)
- Source ID: `site-iam-reference`
- Final score: 230
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When using client-side encryption, you're responsible for creating and managing your encryption keys and encrypting your data before sending it to the cloud.
- Overview Client-side encryption is any encryption performed prior to sending your data to the cloud.
- StorageOptions ; import com.google.crypto.tink.Aead ; import com.google.crypto.tink.KmsClient ; import com.google.crypto.tink.aead.AeadConfig ; import com.google.crypto.tink.aead.KmsEnvelopeAead ; import com.google.crypto.tink.aead.PredefinedAeadParameters ; import com.google.crypto.tink.integration.gcpkms.GcpKmsClient ; import java.io.File ; import java.io.FileInputStream ; import java.io.FileOutputStream ; import java.nio.file.Files ; import java.nio.file.Paths ; import java.security.GeneralSecurityException ; import java.util.Arrays ; / A command-line utility for encrypting small files with envelope encryption and uploading the results to GCS. <p>The CLI takes the following required arguments: <ul> <li>mode: "encrypt" or "decrypt" to indicate if you want to encrypt or decrypt. <li>kek-uri: The URI for the Cloud KMS key to be used for envelope encryption. <li>gcp-credential-file: Name of the file with the GCP credentials (in JSON format) that can access the Cloud KMS key and the GCS input/output blobs. <li>gcp-project-id: The ID of the GCP project hosting the GCS blobs that you want to encrypt or decrypt. </ul> <p>When mode is "encrypt", it takes the following additional arguments: <ul> <li>local-input-file: Read the plaintext from this local file. <li>gcs-output-blob: Write the encryption result to this blob in GCS.
- Home Documentation Security Cloud KMS Guides Send feedback Client-side encryption with Tink and Cloud KMS Stay organized with collections Save and categorize content based on your preferences.

### Cloud Key Management Service overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kms/docs/key-management-service](https://docs.cloud.google.com/kms/docs/key-management-service)
- Source ID: `site-api-reference`
- Final score: 216
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Multi-tenant Cloud HSM for Google Workspace You can use your Multi-tenant Cloud HSM keys in Cloud HSM for Google Workspace to manage the keys used for client-side encryption (CSE) in Google Workspace.
- Use Multi-tenant Cloud HSM keys for client-side encryption in Google Workspace You control automatic key rotation schedule; IAM roles and permissions; enable, disable, or destroy key versions.
- Generate Multi-tenant Cloud HSM keys and use them with Cloud HSM for Google Workspace to enable client-side encryption (CSE) in Google Workspace.
- For example, you can use the Cloud KMS API or client libraries to use your Cloud KMS keys for client-side encryption .

### "Use a Cloud HSM key for TLS offloading with NGINX \_|\_ Cloud Key Management\

- URL: [https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx](https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx)
- Source ID: `site-api-reference`
- Final score: 197
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Prepare library configurations for NGINX Allow NGINX to log its PKCS #11 engine operations with the library with the following: sudo mkdir /var/log/kmsp11 sudo chown www-data /var/log/kmsp11 Create an empty library configuration file with the appropriate permissions for NGINX. sudo touch /etc/nginx/pkcs11-config.yaml sudo chmod 744 /etc/nginx/pkcs11-config.yaml Edit the empty config file and add the needed configuration as shown in the following snippet: cat /etc/nginx/pkcs11-config.yaml --- tokens: - key ring: "projects/ PROJECT ID /locations/ LOCATION /keyRings/ KEY RING " log directory: "/var/log/kmsp11" Test your OpenSSL configuration Run the following command: openssl engine -tt -c -v pkcs11 You should see output similar to the following: (pkcs11) pkcs11 engine [RSA, rsaEncryption, id-ecPublicKey] [ available ] SO PATH, MODULE PATH, PIN, VERBOSE, QUIET, INIT ARGS, FORCE LOGIN Configure NGINX to use Cloud HSM Allow TLS offloading by editing a few NGINX files.
- Test NGINX uses TLS offloading to your Cloud HSM Use the openssl s client to test connection to your NGINX server by running the following command: openssl s client -connect localhost:443 The client completes the SSL handshake and waits for your input: completes SSL handshake ... ... ...
- Create a Cloud HSM-hosted signing key Create a Cloud HSM EC-P256-SHA256 signing key in your Google Cloud project, in the key ring that you previously configured for OpenSSL: gcloud kms keys create NGINX KEY \ --keyring " KEY RING " --project " PROJECT ID " \ --location " LOCATION " --purpose "asymmetric-signing" \ --default-algorithm "ec-sign-p256-sha256" --protection-level "hsm" Note: Make sure that your Compute Engine service account has the correct Identity and Access Management (IAM) permissions on the key ring to be able to use it.
- In the http block add the following attributes: ssl certificate "/etc/ssl/nginx/ CA CERT " ; ssl certificate key "engine:pkcs11: PKCS KEY TYPE = KEY IDENTIFIER " ; ssl protocols TLSv1.2 TLSv1.3 ; # Consider changing the default to only TLS1.2 or newer Consider defining the ssl ciphers to use ciphers approved by your security teams and handle appropriate client compatibility requirements.

### "Best practices for using CMEKs \_|\_ Cloud Key Management Service \_|\_\

- URL: [https://docs.cloud.google.com/kms/docs/cmek-best-practices](https://docs.cloud.google.com/kms/docs/cmek-best-practices)
- Source ID: `site-iam-reference`
- Final score: 181
- Re-rank relevance: N/A

Evidence snippets:
- For other use cases such as client-side encryption, review the available key purposes and algorithms to choose the option most appropriate to your use case.
- If you want to follow a different granularity strategy, consider the following trade-offs of different patterns: High granularity keys —for example, one key for each individual resource More control to safely disable key versions: Disabling or destroying a key version that is used for a narrow scope has lower risk of affecting other resources than disabling or destroying a shared key.
- When you create a key, you must either allow Cloud KMS to generate the key material for you or manually import key material generated outside of Google Cloud.
- If you don't require these capabilities, evaluate whether default encryption at rest with Google-owned and managed keys is appropriate for your use case.

