---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.797Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Automatic server certificate rotation"
feature_slug: "automatic-server-certificate-rotation"
latest_feature_date: "2026-03-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances"
  - "https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
keywords:
  - "automatic"
  - "server"
  - "certificate"
  - "rotation"
  - "this"
  - "automatically"
  - "rotates"
  - "certificates"
---

# Automatic server certificate rotation

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

This feature automatically rotates server certificates for Cloud SQL instances that use Certificate Authority Service.

## Extended Definition

This feature automatically rotates server certificates for Cloud SQL instances that use Certificate Authority Service.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances)
- [https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl](https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)

## Supporting Pages

### REST Resource: instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances)
- Source ID: `site-iam-reference`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- RotateServerCertificate Rotates the server certificate version to one previously added with the addServerCertificate method. addServerCa Adds a new trusted Certificate Authority (CA) version for the specified instance. addServerCertificate Add a new trusted server certificate version for the specified instance using Certificate Authority Service (CAS) server CA. clone Creates a Cloud SQL instance as a clone of the source instance. delete Deletes a Cloud SQL instance. demote Demotes an existing standalone instance to be a Cloud SQL read replica for an external database server. demoteMaster Demotes the stand-alone instance to be a Cloud SQL read replica for an external database server. export Exports data from a Cloud SQL instance to a Cloud Storage bucket as a SQL dump or CSV file. failover Initiates a manual failover of a high availability (HA) primary instance to a standby instance, which becomes the primary instance. get Retrieves a resource containing information about a Cloud SQL instance. import Imports data into a Cloud SQL instance from a SQL dump or CSV file in Cloud Storage. insert Creates a new Cloud SQL instance. list Lists instances under a given project. listServerCas Lists all of the trusted Certificate Authorities (CAs) for the specified instance. patch Partially updates settings of a Cloud SQL instance by merging the request with the current configuration. pointInTimeRestore Point in time restore for an instance managed by Google Cloud Backup and Disaster Recovery. promoteReplica Promotes the read replica instance to be an independent Cloud SQL primary instance. reencrypt Reencrypt CMEK instance with latest key version. resetSslConfig Deletes all client certificates and generates a new server SSL certificate for the instance. restart Restarts a Cloud SQL instance. restoreBackup Restores a backup of a Cloud SQL instance. rotateServerCa Rotates the server certificate to one signed by the Certificate Authority (CA) version previously added with the addServerCA method. startReplica Starts the replication in the read replica instance. stopReplica Stops the replication in the read replica instance. switchover Switches over from the primary instance to the DR replica instance. truncateLog Truncate MySQL general and slow query log tables MySQL only. update Updates settings of a Cloud SQL instance.
- When enabled, the server certificate will be automatically rotated during Cloud SQL scheduled maintenance or self-service maintenance updates up to six months before it expires.
- AUTOMATIC ROTATION DURING MAINTENANCE Automatic server certificate rotation during Cloud SQL scheduled maintenance or self-service maintenance updates.
- Enums SERVER CERTIFICATE ROTATION MODE UNSPECIFIED Unspecified: no automatic server certificate rotation.

### "Authorize with SSL/TLS certificates \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl](https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl)
- Source ID: `site-iam-reference`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Server certificates When you create an instance, Cloud SQL automatically creates and installs a server certificate that is signed by a certificate authority (CA).
- For connections that use Cloud SQL Auth Proxy or Cloud SQL Language Connectors, the connections are automatically encrypted with SSL/TLS along with client and server identity verification without requiring you to download a server CA certificate and client certificate.
- A shorter validity period for the CA might require more frequent CA rotations and a validity period shorter than one year might affect the validity period of your server certificates.
- Instances using the shared CA or customer-managed CA hierarchy can enable automatic server certificate rotation to run during maintenance updates up to 180 days before expiry.

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- This option lets you establish your own CA hierarchy and manage the rotation of CA certificates for your Cloud SQL instances to help you meet your regulatory compliance needs.
- This option lets you establish your own CA hierarchy and manage the rotation of CA certificates for your Cloud SQL instances to help you meet your regulatory compliance needs.
- This option lets you establish your own CA hierarchy and manage the rotation of CA certificates for your Cloud SQL instances to help you meet your regulatory compliance needs.
- For more information about enabling automatic server certificate rotation for your instance, see Enable automatic server certificate rotation .

