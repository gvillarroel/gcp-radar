---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:33.041Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "Hosted Private HSM"
feature_slug: "hosted-private-hsm"
latest_feature_date: "2020-04-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm"
  - "https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx"
  - "https://docs.cloud.google.com/kms/docs/hsm"
  - "https://docs.cloud.google.com/kms/docs/reference/pkcs11-apache"
keywords:
  - "hosted"
  - "private"
  - "hsm"
  - "is"
  - "generally"
  - "available"
---

# Hosted Private HSM

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

Hosted Private HSM is generally available.

## Extended Definition

Hosted Private HSM is generally available.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm](https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm)
- [https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx](https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx)
- [https://docs.cloud.google.com/kms/docs/hsm](https://docs.cloud.google.com/kms/docs/hsm)
- [https://docs.cloud.google.com/kms/docs/reference/pkcs11-apache](https://docs.cloud.google.com/kms/docs/reference/pkcs11-apache)

## Supporting Pages

### "Create and manage a Single-tenant Cloud HSM instance \_|\_ Cloud Key Management\

- URL: [https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm](https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm)
- Source ID: `site-iam-reference`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- This step requires the Cloud KMS single-tenant HSM Quorum Member role. gcloud kms single-tenant-hsm proposal approve PROPOSAL ID \ --location LOCATION \ --single tenant hsm instance INSTANCE ID \ --quorum-challenge-replies = " SIGNED QUORUM CHALLENGE LIST " \ --required-challenge-replies = " SIGNED REQUIRED CHALLENGE LIST " Replace the following: SIGNED QUORUM CHALLENGE LIST : a JSON-formatted array of challenges signed using private keys that are already registered, where each list item is a tuple that contains the path to the signed challenge and the path to the corresponding the public key—for example, [('signed-challenge-1.txt','rsapub1.pem'), ('signed-challenge-2.txt','rsapub2.pem')] to submit the first two signed challenges in one command.
- You can compare the public keys with your private 2FA keys to verify which control keys are active. gcloud View a list of existing instances using the kms single-tenant-hsm list method. gcloud kms single-tenant-hsm list projects/ PROJECT ID /locations/ LOCATION Replace the following: PROJECT ID : the identifier of the project where you want to view Single-tenant Cloud HSM instances.
- To get the permissions that you need to create, manage, and use Single-tenant Cloud HSM instances, ask your administrator to grant you the following IAM roles on the project or a parent resource: Create proposals: Cloud KMS single-tenant HSM Proposer ( cloudkms.hsmSingleTenantProposer ) Approve proposals: Cloud KMS single-tenant HSM Quorum Member ( cloudkms.hsmSingleTenantQuorumMember ) Execute proposals: Cloud KMS single-tenant HSM Executor ( cloudkms.hsmSingleTenantExecutor ) Create keys: Cloud KMS single-tenant HSM Key Creator ( roles/cloudkms.hsmSingleTenantKeyCreator ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- This step requires the Cloud KMS single-tenant HSM Quorum Member role. gcloud kms single-tenant-hsm proposal approve PROPOSAL ID \ --location LOCATION \ --single tenant hsm instance INSTANCE ID \ --quorum-challenge-replies = " SIGNED QUORUM CHALLENGE LIST " Replace SIGNED QUORUM CHALLENGE LIST with a JSON-formatted array of challenges, where each list item is a tuple that contains the path to the signed challenge and the path to the corresponding the public key—for example, [('signed-challenge-1.txt','rsapub1.pem'), ('signed-challenge-2.txt','rsapub2.pem')] to submit the first two signed challenges in one command.

### "Use a Cloud HSM key for TLS offloading with NGINX \_|\_ Cloud Key Management\

- URL: [https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx](https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx)
- Source ID: `site-api-reference`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- Prepare library configurations for NGINX Allow NGINX to log its PKCS #11 engine operations with the library with the following: sudo mkdir /var/log/kmsp11 sudo chown www-data /var/log/kmsp11 Create an empty library configuration file with the appropriate permissions for NGINX. sudo touch /etc/nginx/pkcs11-config.yaml sudo chmod 744 /etc/nginx/pkcs11-config.yaml Edit the empty config file and add the needed configuration as shown in the following snippet: cat /etc/nginx/pkcs11-config.yaml --- tokens: - key ring: "projects/ PROJECT ID /locations/ LOCATION /keyRings/ KEY RING " log directory: "/var/log/kmsp11" Test your OpenSSL configuration Run the following command: openssl engine -tt -c -v pkcs11 You should see output similar to the following: (pkcs11) pkcs11 engine [RSA, rsaEncryption, id-ecPublicKey] [ available ] SO PATH, MODULE PATH, PIN, VERBOSE, QUIET, INIT ARGS, FORCE LOGIN Configure NGINX to use Cloud HSM Allow TLS offloading by editing a few NGINX files.
- Create a Cloud HSM-hosted signing key Create a Cloud HSM EC-P256-SHA256 signing key in your Google Cloud project, in the key ring that you previously configured for OpenSSL: gcloud kms keys create NGINX KEY \ --keyring " KEY RING " --project " PROJECT ID " \ --location " LOCATION " --purpose "asymmetric-signing" \ --default-algorithm "ec-sign-p256-sha256" --protection-level "hsm" Note: Make sure that your Compute Engine service account has the correct Identity and Access Management (IAM) permissions on the key ring to be able to use it.
- The resulting change should look like the following example: server { listen 80 default server; listen [::]:80 default server; SSL configuration listen 443 ssl default server; listen [::]:443 ssl default server; ... ... } Provide environment variables to the NGINX service Run the following command: sudo systemctl edit nginx.service In the resulting editor, add the following lines and replace the LIBPATH with the value for the location where you installed libkmsp11.so : [ Service ] Environment = "GRPC ENABLE FORK SUPPORT=1" Environment = "KMS PKCS11 CONFIG=/etc/nginx/pkcs11-config.yaml" Environment = "PKCS11 MODULE PATH= LIBPATH /libkmsp11-1.0-linux-amd64/libkmsp11.so" After you configure these values, you will need to run the following command to make them available: sudo systemctl daemon-reload Restart NGINX with TLS Offloading Run the following command so that NGINX restarts and uses the updated configuration: sudo systemctl start nginx Note: If you see any errors upon restart, check your /var/log/nginx/error.log and /var/log/kmsp11/ for additional details.
- Assign the following roles: roles/cloudkms.signerVerifier roles/cloudkms.viewer Configure organization policies as follows to limit external IPs and creation of service account keys. constraints/compute.vmExternalIpAccess constraints/iam.disableServiceAccountKeyCreation Create a custom subnet that enables private Google access .

### Cloud HSM \_|\_ Cloud Key Management Service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kms/docs/hsm](https://docs.cloud.google.com/kms/docs/hsm)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- Cloud HSM is a cloud-hosted Hardware Security Module (HSM) service that lets you host encryption keys and perform cryptographic operations in a cluster of FIPS 140-2 Level 3 certified HSMs.
- Single-tenant Cloud HSM is available in a subset of locations where Multi-tenant Cloud HSM is available.
- Bare Metal Rack HSM is available for customers to host their own HSMs in Google-provided space.
- Cloud HSM is not available in all multi-regions.

### "Use a Cloud HSM key to serve Apache traffic \_|\_ Cloud Key Management Service\

- URL: [https://docs.cloud.google.com/kms/docs/reference/pkcs11-apache](https://docs.cloud.google.com/kms/docs/reference/pkcs11-apache)
- Source ID: `site-api-reference`
- Final score: 102
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For Debian Buster: sudo apt install -t buster-backports apache2 Configuration Create a Cloud KMS-hosted signing key Create a Cloud KMS EC-P256-SHA256 signing key in your Google Cloud project, in the key ring that you previously configured for OpenSSL: gcloud kms keys create " KEY NAME " --keyring " KEY RING " \ --project " PROJECT ID " --location " LOCATION " \ --purpose "asymmetric-signing" --default-algorithm "ec-sign-p256-sha256" \ --protection-level "hsm" Note: Make sure that your Compute Engine service account has the right Identity and Access Management (IAM) permissions on the key ring to be able to use it.
- You should now have a certificate that looks like this: -----BEGIN CERTIFICATE----- ... ... ... -----END CERTIFICATE----- Set up the Apache server Create a directory in /etc/apache2 to store your self-signed certificate in: sudo mkdir /etc/apache2/ssl sudo mv ca.cert /etc/apache2/ssl Edit the 000-default.conf virtual host configuration files located in /etc/apache2/sites-available to provide the certificate file path and ensure that the SSLEngine is on.
- Once OpenSSL setup is complete, ensure that a recent version of Apache is installed: sudo apt-get update sudo apt-get install apache2 Note: PKCS #11 URIs are only available in apache2-2.4.42 and later.
- This guide provides instructions for setting up an Apache server to use a Cloud HSM key for TLS signing on Debian 11 (Bullseye).

