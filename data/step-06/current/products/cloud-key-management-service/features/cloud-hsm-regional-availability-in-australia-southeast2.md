---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:33.026Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "Cloud HSM regional availability in australia-southeast2"
feature_slug: "cloud-hsm-regional-availability-in-australia-southeast2"
latest_feature_date: "2022-01-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/cmek-best-practices"
  - "https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm"
  - "https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx"
  - "https://docs.cloud.google.com/kms/docs/ekm"
keywords:
  - "hsm"
  - "regional"
  - "availability"
  - "in"
  - "australia"
  - "southeast2"
  - "is"
  - "available"
---

# Cloud HSM regional availability in australia-southeast2

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

Cloud HSM is available in the australia-southeast2 region.

## Extended Definition

Cloud HSM is available in the australia-southeast2 region.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/cmek-best-practices](https://docs.cloud.google.com/kms/docs/cmek-best-practices)
- [https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm](https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm)
- [https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx](https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx)
- [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm)

## Supporting Pages

### "Best practices for using CMEKs \_|\_ Cloud Key Management Service \_|\_\

- URL: [https://docs.cloud.google.com/kms/docs/cmek-best-practices](https://docs.cloud.google.com/kms/docs/cmek-best-practices)
- Source ID: `site-iam-reference`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- For workloads that require high availability or disaster recovery capabilities across multiple locations, it's your responsibility to assess whether your workload is resilient in the event that Cloud KMS becomes unavailable in a certain region.
- If you need to create CMEK-protected resources in locations where Cloud HSM is not available, you must create your CMEK manually.
- For example, a Compute Engine persistent disk encrypted with a Cloud KMS key from region A can't be recreated in region B in a disaster recovery scenario where region A is unavailable.
- This dashboard can be used to monitor the state, usage, and availability of your key versions and corresponding resources they protect.

### "Create and manage a Single-tenant Cloud HSM instance \_|\_ Cloud Key Management\

- URL: [https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm](https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm)
- Source ID: `site-iam-reference`
- Final score: 159
- Re-rank relevance: N/A

Evidence snippets:
- This step requires the Cloud KMS single-tenant HSM Quorum Member role. gcloud kms single-tenant-hsm proposal approve PROPOSAL ID \ --location LOCATION \ --single tenant hsm instance INSTANCE ID \ --quorum-challenge-replies = " SIGNED QUORUM CHALLENGE LIST " \ --required-challenge-replies = " SIGNED REQUIRED CHALLENGE LIST " Replace the following: SIGNED QUORUM CHALLENGE LIST : a JSON-formatted array of challenges signed using private keys that are already registered, where each list item is a tuple that contains the path to the signed challenge and the path to the corresponding the public key—for example, [('signed-challenge-1.txt','rsapub1.pem'), ('signed-challenge-2.txt','rsapub2.pem')] to submit the first two signed challenges in one command.
- To get the permissions that you need to create, manage, and use Single-tenant Cloud HSM instances, ask your administrator to grant you the following IAM roles on the project or a parent resource: Create proposals: Cloud KMS single-tenant HSM Proposer ( cloudkms.hsmSingleTenantProposer ) Approve proposals: Cloud KMS single-tenant HSM Quorum Member ( cloudkms.hsmSingleTenantQuorumMember ) Execute proposals: Cloud KMS single-tenant HSM Executor ( cloudkms.hsmSingleTenantExecutor ) Create keys: Cloud KMS single-tenant HSM Key Creator ( roles/cloudkms.hsmSingleTenantKeyCreator ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- This step requires the Cloud KMS single-tenant HSM Quorum Member role. gcloud kms single-tenant-hsm proposal approve PROPOSAL ID \ --location LOCATION \ --single tenant hsm instance INSTANCE ID \ --quorum-challenge-replies = " SIGNED QUORUM CHALLENGE LIST " Replace SIGNED QUORUM CHALLENGE LIST with a JSON-formatted array of challenges, where each list item is a tuple that contains the path to the signed challenge and the path to the corresponding the public key—for example, [('signed-challenge-1.txt','rsapub1.pem'), ('signed-challenge-2.txt','rsapub2.pem')] to submit the first two signed challenges in one command.
- This step requires the Cloud KMS single-tenant HSM Quorum Member role. gcloud kms single-tenant-hsm proposal approve PROPOSAL ID \ --location LOCATION \ --single tenant hsm instance INSTANCE ID \ --quorum-challenge-replies = " SIGNED QUORUM CHALLENGE LIST " Replace SIGNED QUORUM CHALLENGE LIST with a JSON-formatted array of challenges, where each list item is a tuple that contains the path to the signed challenge and the path to the corresponding the public key—for example, [('signed-challenge-1.txt','rsapub1.pem'), ('signed-challenge-2.txt','rsapub2.pem')] to submit the first two signed challenges in one command.

### "Use a Cloud HSM key for TLS offloading with NGINX \_|\_ Cloud Key Management\

- URL: [https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx](https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx)
- Source ID: `site-api-reference`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- Prepare library configurations for NGINX Allow NGINX to log its PKCS #11 engine operations with the library with the following: sudo mkdir /var/log/kmsp11 sudo chown www-data /var/log/kmsp11 Create an empty library configuration file with the appropriate permissions for NGINX. sudo touch /etc/nginx/pkcs11-config.yaml sudo chmod 744 /etc/nginx/pkcs11-config.yaml Edit the empty config file and add the needed configuration as shown in the following snippet: cat /etc/nginx/pkcs11-config.yaml --- tokens: - key ring: "projects/ PROJECT ID /locations/ LOCATION /keyRings/ KEY RING " log directory: "/var/log/kmsp11" Test your OpenSSL configuration Run the following command: openssl engine -tt -c -v pkcs11 You should see output similar to the following: (pkcs11) pkcs11 engine [RSA, rsaEncryption, id-ecPublicKey] [ available ] SO PATH, MODULE PATH, PIN, VERBOSE, QUIET, INIT ARGS, FORCE LOGIN Configure NGINX to use Cloud HSM Allow TLS offloading by editing a few NGINX files.
- The resulting change should look like the following example: server { listen 80 default server; listen [::]:80 default server; SSL configuration listen 443 ssl default server; listen [::]:443 ssl default server; ... ... } Provide environment variables to the NGINX service Run the following command: sudo systemctl edit nginx.service In the resulting editor, add the following lines and replace the LIBPATH with the value for the location where you installed libkmsp11.so : [ Service ] Environment = "GRPC ENABLE FORK SUPPORT=1" Environment = "KMS PKCS11 CONFIG=/etc/nginx/pkcs11-config.yaml" Environment = "PKCS11 MODULE PATH= LIBPATH /libkmsp11-1.0-linux-amd64/libkmsp11.so" After you configure these values, you will need to run the following command to make them available: sudo systemctl daemon-reload Restart NGINX with TLS Offloading Run the following command so that NGINX restarts and uses the updated configuration: sudo systemctl start nginx Note: If you see any errors upon restart, check your /var/log/nginx/error.log and /var/log/kmsp11/ for additional details.
- Create a Cloud HSM-hosted signing key Create a Cloud HSM EC-P256-SHA256 signing key in your Google Cloud project, in the key ring that you previously configured for OpenSSL: gcloud kms keys create NGINX KEY \ --keyring " KEY RING " --project " PROJECT ID " \ --location " LOCATION " --purpose "asymmetric-signing" \ --default-algorithm "ec-sign-p256-sha256" --protection-level "hsm" Note: Make sure that your Compute Engine service account has the correct Identity and Access Management (IAM) permissions on the key ring to be able to use it.
- Use cases Using a Cloud HSM key with NGINX for TLS offloading helps address the following enterprise security needs: You want your NGINX web server to offload TLS cryptographic operations to Cloud HSM.

### "Cloud External Key Manager \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm)
- Source ID: `site-docs-root`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- Cloud EKM over the internet: available in most Google Cloud locations where Cloud KMS is available, including regional and multi-regional locations.
- Cloud EKM over a VPC: available in most regional locations where Cloud KMS is available.
- Cloud EKM over a VPC isn't available in multi-regional locations.
- Multi-region use When you use an externally managed key with a multi-region, the metadata of the key is available in multiple data centers within the multi-region.

