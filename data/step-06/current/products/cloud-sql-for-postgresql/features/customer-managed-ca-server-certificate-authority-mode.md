---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.753Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Customer-managed CA server certificate authority mode"
feature_slug: "customer-managed-ca-server-certificate-authority-mode"
latest_feature_date: "2025-05-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/authorize-ssl"
  - "https://docs.cloud.google.com/sql/docs/postgres/create-instance"
  - "https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances"
keywords:
  - "certificate"
  - "authority"
  - "customer"
  - "mode"
  - "managed"
  - "server"
  - "lets"
---

# Customer-managed CA server certificate authority mode

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

Customer-managed CA mode lets you use your own CA hierarchy in Certificate Authority Service for Cloud SQL server certificates; Customer-managed CA mode lets you configure your own CA pool and CA in Certificate Authority Service for Cloud SQL server certificates.

## Extended Definition

Customer-managed CA mode lets you use your own CA hierarchy in Certificate Authority Service for Cloud SQL server certificates; Customer-managed CA mode lets you configure your own CA pool and CA in Certificate Authority Service for Cloud SQL server certificates.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/authorize-ssl](https://docs.cloud.google.com/sql/docs/postgres/authorize-ssl)
- [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances)

## Supporting Pages

### "Authorize with SSL/TLS certificates \_|\_ Cloud SQL for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/authorize-ssl](https://docs.cloud.google.com/sql/docs/postgres/authorize-ssl)
- Source ID: `site-iam-reference`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To choose per-instance CA, select Google managed internal certificate authority (Google Cloud console) or specify GOOGLE MANAGED INTERNAL CA for the serverCaMode setting (Cloud SQL Admin API) or the --server-ca-mode flag ( gcloud CLI ) when you create the instance .
- If you're using a customer-managed CA ( serverCaMode is set to CUSTOMER MANAGED CAS CA ), then you can perform CA certificate rotation by rotating the CAs in the CA pool that you created.
- Customer-managed CAs This server CA mode lets you set up your own CA hierarchy in CA Service.
- Feature Per-instance CA Shared CA Customer-managed CA CA structure Separate CA for each instance Root CA and subordinate CAs shared across instances in the same region CA hierarchy that you create and manage Cryptographic attributes RSA 2048-bit key with SHA256 algorithm Elliptic Curve Digital Signature Algorithm (ECDSA) with 384-bit key with SHA384 algorithm Elliptic Curve Digital Signature Algorithm (ECDSA) with 384-bit key with SHA384 algorithm CA validity period 10 years 25 years for root CA and 10 years for subordinate CAs Configurable Server certificate validity period 10 years 1 year 1 year User-initiated rotation of CA?

### Create instances \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)
- Source ID: `site-docs-root`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- GOOGLE MANAGED CAS CA : with this option, a CA hierarchy consisting of a root CA and subordinate server CAs managed by Cloud SQL and hosted on Google Cloud Certificate Authority Service (CA Service) is used.
- Security Server certificate authority mode Choose the type of certificate authority (CA) that signs the server certificate for this Cloud SQL instance.
- Server CA mode --server-ca-mode The --server-ca-mode flag configures the type of server certificate authority (CA) for an instance.
- CA MODE : specify a certificate authority hierarchy for the instance, either GOOGLE MANAGED INTERNAL CA or GOOGLE MANAGED CAS CA .

### "REST Resource: instances \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances)
- Source ID: `site-api-reference`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- RotateServerCertificate Rotates the server certificate version to one previously added with the addServerCertificate method. addServerCa Adds a new trusted Certificate Authority (CA) version for the specified instance. addServerCertificate Add a new trusted server certificate version for the specified instance using Certificate Authority Service (CAS) server CA. clone Creates a Cloud SQL instance as a clone of the source instance. delete Deletes a Cloud SQL instance. demote Demotes an existing standalone instance to be a Cloud SQL read replica for an external database server. demoteMaster Demotes the stand-alone instance to be a Cloud SQL read replica for an external database server. export Exports data from a Cloud SQL instance to a Cloud Storage bucket as a SQL dump or CSV file. failover Initiates a manual failover of a high availability (HA) primary instance to a standby instance, which becomes the primary instance. get Retrieves a resource containing information about a Cloud SQL instance. import Imports data into a Cloud SQL instance from a SQL dump or CSV file in Cloud Storage. insert Creates a new Cloud SQL instance. list Lists instances under a given project. listServerCas Lists all of the trusted Certificate Authorities (CAs) for the specified instance. patch Partially updates settings of a Cloud SQL instance by merging the request with the current configuration. pointInTimeRestore Point in time restore for an instance managed by Google Cloud Backup and Disaster Recovery. preCheckMajorVersionUpgrade Execute MVU Pre-checks promoteReplica Promotes the read replica instance to be an independent Cloud SQL primary instance. reencrypt Reencrypt CMEK instance with latest key version. resetSslConfig Deletes all client certificates and generates a new server SSL certificate for the instance. restart Restarts a Cloud SQL instance. restoreBackup Restores a backup of a Cloud SQL instance. rotateServerCa Rotates the server certificate to one signed by the Certificate Authority (CA) version previously added with the addServerCA method. startReplica Starts the replication in the read replica instance. stopReplica Stops the replication in the read replica instance. switchover Switches over from the primary instance to the DR replica instance. truncateLog Truncate MySQL general and slow query log tables MySQL only. update Updates settings of a Cloud SQL instance.
- The resource name of the server CA pool for an instance with CUSTOMER MANAGED CAS CA as the serverCaMode .
- CUSTOMER MANAGED CAS CA Customer-managed CA hosted on Google Cloud's Certificate Authority Service (CAS).
- This setting can only be set if serverCaMode is either GOOGLE MANAGED CAS CA or CUSTOMER MANAGED CAS CA.

