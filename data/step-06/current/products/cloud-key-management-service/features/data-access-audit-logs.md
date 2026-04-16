---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:33.075Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "Data Access audit logs"
feature_slug: "data-access-audit-logs"
latest_feature_date: "2017-05-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory"
  - "https://docs.cloud.google.com/kms/docs/audit-logging"
  - "https://docs.cloud.google.com/kms/docs/cmek-best-practices"
  - "https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx"
keywords:
  - "access"
  - "audit"
  - "logs"
  - "kms"
  - "supports"
  - "self"
  - "enabling"
---

# Data Access audit logs

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

Cloud KMS supports self-enabling Data Access audit logs.

## Extended Definition

Cloud KMS supports self-enabling Data Access audit logs.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory](https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory)
- [https://docs.cloud.google.com/kms/docs/audit-logging](https://docs.cloud.google.com/kms/docs/audit-logging)
- [https://docs.cloud.google.com/kms/docs/cmek-best-practices](https://docs.cloud.google.com/kms/docs/cmek-best-practices)
- [https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx](https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx)

## Supporting Pages

### "Cloud KMS Inventory Service audit logging \_|\_ Cloud Key Management Service\

- URL: [https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory](https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory)
- Source ID: `site-iam-reference`
- Final score: 218
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Cloud KMS Inventory Service. google.cloud.kms.inventory.v1.KeyDashboardService The following audit logs are associated with methods belonging to google.cloud.kms.inventory.v1.KeyDashboardService .
- For more information about Cloud Audit Logs, see the following: Types of audit logs Audit log entry structure Storing and routing audit logs Cloud Logging pricing summary Enable Data Access audit logs Service name Cloud KMS Inventory Service audit logs use the service name kmsinventory.googleapis.com .
- Filter for this method : protoPayload.methodName="google.cloud.kms.inventory.v1.KeyTrackingService.GetProtectedResourcesSummary" SearchProtectedResources Method : google.cloud.kms.inventory.v1.KeyTrackingService.SearchProtectedResources Audit log type : Data access Permissions : cloudkms.cryptoKeys.get - ADMIN READ cloudkms.protectedResources.search - ADMIN READ Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="google.cloud.kms.inventory.v1.KeyDashboardService.ListCryptoKeys" google.cloud.kms.inventory.v1.KeyTrackingService The following audit logs are associated with methods belonging to google.cloud.kms.inventory.v1.KeyTrackingService .

### Cloud Key Management Service audit logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kms/docs/audit-logging](https://docs.cloud.google.com/kms/docs/audit-logging)
- Source ID: `site-iam-reference`
- Final score: 192
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Permission type Methods ADMIN READ google.cloud.kms.v1.Autokey.GetKeyHandle google.cloud.kms.v1.Autokey.ListKeyHandles google.cloud.kms.v1.AutokeyAdmin.GetAutokeyConfig google.cloud.kms.v1.AutokeyAdmin.ShowEffectiveAutokeyConfig GetEkmConfig GetEkmConnection ListEkmConnections VerifyConnectivity GetCryptoKey GetCryptoKeyVersion GetImportJob GetKeyRing ListCryptoKeyVersions ListCryptoKeys ListImportJobs ListKeyRings GetIamPolicy GetOperation ADMIN WRITE google.cloud.kms.v1.Autokey.CreateKeyHandle (LRO) google.cloud.kms.v1.AutokeyAdmin.UpdateAutokeyConfig CreateEkmConnection UpdateEkmConfig UpdateEkmConnection CreateCryptoKey CreateCryptoKeyVersion CreateImportJob CreateKeyRing DestroyCryptoKeyVersion ImportCryptoKeyVersion RestoreCryptoKeyVersion UpdateCryptoKey UpdateCryptoKeyPrimaryVersion UpdateCryptoKeyVersion SetIamPolicy DATA READ AsymmetricDecrypt AsymmetricSign Decrypt Encrypt GetPublicKey MacSign MacVerify RawDecrypt RawEncrypt API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Cloud Key Management Service. google.cloud.kms.v1.Autokey The following audit logs are associated with methods belonging to google.cloud.kms.v1.Autokey .
- For more information about Cloud Audit Logs, see the following: Types of audit logs Audit log entry structure Storing and routing audit logs Cloud Logging pricing summary Enable Data Access audit logs Service name Cloud Key Management Service audit logs use the service name cloudkms.googleapis.com .
- CreateKeyHandle Method : google.cloud.kms.v1.Autokey.CreateKeyHandle Audit log type : Admin activity Permissions : cloudkms.keyHandles.create - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.kms.v1.Autokey.CreateKeyHandle" GetKeyHandle Method : google.cloud.kms.v1.Autokey.GetKeyHandle Audit log type : Data access Permissions : cloudkms.keyHandles.get - ADMIN READ Method is a long-running or streaming operation : No.
- The following methods don't produce audit logs: google.cloud.kms.v1.KeyManagementService.GenerateRandomBytes google.cloud.location.Locations.GetLocation google.cloud.location.Locations.ListLocations Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Best practices for using CMEKs \_|\_ Cloud Key Management Service \_|\_\

- URL: [https://docs.cloud.google.com/kms/docs/cmek-best-practices](https://docs.cloud.google.com/kms/docs/cmek-best-practices)
- Source ID: `site-iam-reference`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Enable and aggregate audit logging We recommend that you aggregate Cloud KMS Admin Activity audit logs (along with Admin Activity logs for all services) in a centralized location for all resources in your organization.
- Before enabling data access logs, we recommend that you define a clear use case for the additional logs and assess how your logging costs will increase.
- The following table lists which IAM roles are typically associated with which job function: IAM role Description NIST SP 800-152 designation roles/cloudkms.admin Provides access to Cloud KMS resources, except for access to restricted resource types and cryptographic operations.
- Operational overhead: Using highly granular keys might require administrative effort or additional tooling for automation to provision a large number of Cloud KMS resources and to manage access controls for service agents so they can only use the appropriate keys.

### "Use a Cloud HSM key for TLS offloading with NGINX \_|\_ Cloud Key Management\

- URL: [https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx](https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx)
- Source ID: `site-api-reference`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- Create a Cloud HSM-hosted signing key Create a Cloud HSM EC-P256-SHA256 signing key in your Google Cloud project, in the key ring that you previously configured for OpenSSL: gcloud kms keys create NGINX KEY \ --keyring " KEY RING " --project " PROJECT ID " \ --location " LOCATION " --purpose "asymmetric-signing" \ --default-algorithm "ec-sign-p256-sha256" --protection-level "hsm" Note: Make sure that your Compute Engine service account has the correct Identity and Access Management (IAM) permissions on the key ring to be able to use it.
- Assign the following roles: roles/cloudkms.signerVerifier roles/cloudkms.viewer Configure organization policies as follows to limit external IPs and creation of service account keys. constraints/compute.vmExternalIpAccess constraints/iam.disableServiceAccountKeyCreation Create a custom subnet that enables private Google access .
- Your audit logs should now show operations to your NGINX KEY key.
- The resulting change should look like the following example: server { listen 80 default server; listen [::]:80 default server; SSL configuration listen 443 ssl default server; listen [::]:443 ssl default server; ... ... } Provide environment variables to the NGINX service Run the following command: sudo systemctl edit nginx.service In the resulting editor, add the following lines and replace the LIBPATH with the value for the location where you installed libkmsp11.so : [ Service ] Environment = "GRPC ENABLE FORK SUPPORT=1" Environment = "KMS PKCS11 CONFIG=/etc/nginx/pkcs11-config.yaml" Environment = "PKCS11 MODULE PATH= LIBPATH /libkmsp11-1.0-linux-amd64/libkmsp11.so" After you configure these values, you will need to run the following command to make them available: sudo systemctl daemon-reload Restart NGINX with TLS Offloading Run the following command so that NGINX restarts and uses the updated configuration: sudo systemctl start nginx Note: If you see any errors upon restart, check your /var/log/nginx/error.log and /var/log/kmsp11/ for additional details.

