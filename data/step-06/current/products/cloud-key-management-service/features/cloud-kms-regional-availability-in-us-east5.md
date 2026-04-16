---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:33.018Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "Cloud KMS regional availability in us-east5"
feature_slug: "cloud-kms-regional-availability-in-us-east5"
latest_feature_date: "2022-05-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/cmek-best-practices"
  - "https://docs.cloud.google.com/kms/docs/ekm"
  - "https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory"
  - "https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx"
keywords:
  - "kms"
  - "regional"
  - "availability"
  - "in"
  - "us"
  - "east5"
  - "is"
  - "available"
---

# Cloud KMS regional availability in us-east5

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

Cloud KMS is available in the us-east5 region.

## Extended Definition

Cloud KMS is available in the us-east5 region.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/cmek-best-practices](https://docs.cloud.google.com/kms/docs/cmek-best-practices)
- [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm)
- [https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory](https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory)
- [https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx](https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx)

## Supporting Pages

### "Best practices for using CMEKs \_|\_ Cloud Key Management Service \_|\_\

- URL: [https://docs.cloud.google.com/kms/docs/cmek-best-practices](https://docs.cloud.google.com/kms/docs/cmek-best-practices)
- Source ID: `site-iam-reference`
- Final score: 220
- Re-rank relevance: N/A

Evidence snippets:
- For workloads that require high availability or disaster recovery capabilities across multiple locations, it's your responsibility to assess whether your workload is resilient in the event that Cloud KMS becomes unavailable in a certain region.
- Operational overhead: Using highly granular keys might require administrative effort or additional tooling for automation to provision a large number of Cloud KMS resources and to manage access controls for service agents so they can only use the appropriate keys.
- This key purpose always uses the GOOGLE SYMMETRIC ENCRYPTION algorithm, which uses 256-bit Advanced Encryption Standard (AES-256) keys in Galois Counter Mode (GCM), padded with Cloud KMS-internal metadata.
- For example, a Compute Engine persistent disk encrypted with a Cloud KMS key from region A can't be recreated in region B in a disaster recovery scenario where region A is unavailable.

### "Cloud External Key Manager \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm)
- Source ID: `site-docs-root`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- Cloud EKM over the internet: available in most Google Cloud locations where Cloud KMS is available, including regional and multi-regional locations.
- Cloud EKM over a VPC: available in most regional locations where Cloud KMS is available.
- Compatibility Supported key managers You can store external keys in the following external key management partner systems: Supported today: Fortanix Futurex Thales Services that support CMEK with Cloud EKM The following services support integration with Cloud KMS for external (Cloud EKM) keys: Agent Assist AlloyDB for PostgreSQL Apigee API hub Application Integration Artifact Registry Backup and DR Service: Backup Vault Container and Backups at rest Backup for GKE BigQuery Bigtable Cloud Composer Cloud Data Fusion Cloud Healthcare API Cloud Logging: Data in the Log Router and Data in Logging storage Cloud Run Cloud Run functions Cloud SQL Cloud Storage Cloud Tasks Cloud Workstations Compute Engine: Persistent disks , Snapshots , Custom images , and Machine images Customer Experience Insights Database Migration Service: MySQL migrations - data written to databases , PostgreSQL migrations - Data written to databases , PostgreSQL to AlloyDB migrations - Data written to databases , SQL Server migrations - Data written to databases , and Oracle to PostgreSQL data at rest Dataflow Dataform Dataplex Universal Catalog Dataproc Metastore Datastream Dialogflow CX Document AI Eventarc Advanced ( Preview ) Eventarc Standard Filestore Firestore Google Cloud Managed Lustre Google Cloud Managed Service for Apache Kafka Google Cloud NetApp Volumes Google Distributed Cloud Google Kubernetes Engine: Data on VM disks and Application-layer secrets Integration Connectors Looker (Google Cloud core) Managed Service for Apache Spark: Dataproc clusters data on VM disks and Dataproc serverless data on VM disks Memorystore for Redis Memorystore for Redis Cluster Memorystore for Valkey Migrate to Virtual Machines: Data migrated from VMware, AWS, and Azure VM sources and Data migrated from disk and machine image sources Parameter Manager Pub/Sub Secret Manager Secure Source Manager Security Command Center Spanner Speech-to-Text Vertex AI Vertex AI Workbench instances Workflows Workload Manager Important: All other services are not compatible with Cloud External Key Manager for CMEK.
- The following metrics can help you understand your EKM usage: cloudkms.googleapis.com/ekm/external/request latencies cloudkms.googleapis.com/ekm/external/request count For more information about these metrics, see cloudkms metrics .

### "Cloud KMS Inventory Service audit logging \_|\_ Cloud Key Management Service\

- URL: [https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory](https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory)
- Source ID: `site-iam-reference`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- For more information about Cloud Audit Logs, see the following: Types of audit logs Audit log entry structure Storing and routing audit logs Cloud Logging pricing summary Enable Data Access audit logs Service name Cloud KMS Inventory Service audit logs use the service name kmsinventory.googleapis.com .
- Permission type Methods OTHER google.cloud.kms.inventory.v1.KeyDashboardService.ListCryptoKeys : To enable this log, enable ADMIN READ under the service cloudkms.googleapis.com . google.cloud.kms.inventory.v1.KeyTrackingService.GetProtectedResourcesSummary : To enable this log, enable ADMIN READ under the service cloudkms.googleapis.com . google.cloud.kms.inventory.v1.KeyTrackingService.SearchProtectedResources : To enable this log, enable ADMIN READ under the service cloudkms.googleapis.com .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- Filter for this method : protoPayload.methodName="google.cloud.kms.inventory.v1.KeyTrackingService.GetProtectedResourcesSummary" SearchProtectedResources Method : google.cloud.kms.inventory.v1.KeyTrackingService.SearchProtectedResources Audit log type : Data access Permissions : cloudkms.cryptoKeys.get - ADMIN READ cloudkms.protectedResources.search - ADMIN READ Method is a long-running or streaming operation : No.

### "Use a Cloud HSM key for TLS offloading with NGINX \_|\_ Cloud Key Management\

- URL: [https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx](https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx)
- Source ID: `site-api-reference`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- The resulting change should look like the following example: server { listen 80 default server; listen [::]:80 default server; SSL configuration listen 443 ssl default server; listen [::]:443 ssl default server; ... ... } Provide environment variables to the NGINX service Run the following command: sudo systemctl edit nginx.service In the resulting editor, add the following lines and replace the LIBPATH with the value for the location where you installed libkmsp11.so : [ Service ] Environment = "GRPC ENABLE FORK SUPPORT=1" Environment = "KMS PKCS11 CONFIG=/etc/nginx/pkcs11-config.yaml" Environment = "PKCS11 MODULE PATH= LIBPATH /libkmsp11-1.0-linux-amd64/libkmsp11.so" After you configure these values, you will need to run the following command to make them available: sudo systemctl daemon-reload Restart NGINX with TLS Offloading Run the following command so that NGINX restarts and uses the updated configuration: sudo systemctl start nginx Note: If you see any errors upon restart, check your /var/log/nginx/error.log and /var/log/kmsp11/ for additional details.
- Prepare library configurations for NGINX Allow NGINX to log its PKCS #11 engine operations with the library with the following: sudo mkdir /var/log/kmsp11 sudo chown www-data /var/log/kmsp11 Create an empty library configuration file with the appropriate permissions for NGINX. sudo touch /etc/nginx/pkcs11-config.yaml sudo chmod 744 /etc/nginx/pkcs11-config.yaml Edit the empty config file and add the needed configuration as shown in the following snippet: cat /etc/nginx/pkcs11-config.yaml --- tokens: - key ring: "projects/ PROJECT ID /locations/ LOCATION /keyRings/ KEY RING " log directory: "/var/log/kmsp11" Test your OpenSSL configuration Run the following command: openssl engine -tt -c -v pkcs11 You should see output similar to the following: (pkcs11) pkcs11 engine [RSA, rsaEncryption, id-ecPublicKey] [ available ] SO PATH, MODULE PATH, PIN, VERBOSE, QUIET, INIT ARGS, FORCE LOGIN Configure NGINX to use Cloud HSM Allow TLS offloading by editing a few NGINX files.
- Create a Cloud HSM-hosted signing key Create a Cloud HSM EC-P256-SHA256 signing key in your Google Cloud project, in the key ring that you previously configured for OpenSSL: gcloud kms keys create NGINX KEY \ --keyring " KEY RING " --project " PROJECT ID " \ --location " LOCATION " --purpose "asymmetric-signing" \ --default-algorithm "ec-sign-p256-sha256" --protection-level "hsm" Note: Make sure that your Compute Engine service account has the correct Identity and Access Management (IAM) permissions on the key ring to be able to use it.
- To do so, OpenSSL lets you use PKCS #11 URIs instead of a regular path, identifying the key by its label (for Cloud KMS keys, the label is the CryptoKey name). openssl req -new -x509 -days 3650 -subj '/CN= CERTIFICATE NAME /' \ DIGEST FLAG -engine pkcs11 -keyform engine \ -key PKCS KEY TYPE = KEY IDENTIFIER > CA CERT Replace the following: CERTIFICATE NAME : a name for the certificate.

