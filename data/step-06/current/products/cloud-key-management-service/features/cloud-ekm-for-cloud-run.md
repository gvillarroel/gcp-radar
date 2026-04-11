---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:26:39.832Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "Cloud EKM for Cloud Run"
feature_slug: "cloud-ekm-for-cloud-run"
latest_feature_date: "2022-01-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/formatting-keys-for-import"
  - "https://docs.cloud.google.com/kms/docs/create-ekm-connection"
  - "https://docs.cloud.google.com/kms/docs/ekm-architectures"
keywords:
  - "ekm"
  - "for"
  - "run"
  - "supports"
---

# Cloud EKM for Cloud Run

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

Cloud EKM supports Cloud Run.

## Extended Definition

Cloud EKM supports Cloud Run.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/formatting-keys-for-import](https://docs.cloud.google.com/kms/docs/formatting-keys-for-import)
- [https://docs.cloud.google.com/kms/docs/create-ekm-connection](https://docs.cloud.google.com/kms/docs/create-ekm-connection)
- [https://docs.cloud.google.com/kms/docs/ekm-architectures](https://docs.cloud.google.com/kms/docs/ekm-architectures)

## Supporting Pages

### "Formatting keys for import \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/formatting-keys-for-import](https://docs.cloud.google.com/kms/docs/formatting-keys-for-import)
- Source ID: `site-iam-reference`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- Cloud KMS Start free Overview Guides Reference Samples Resources More Technology areas More Overview Guides Reference Samples Resources Cross-product tools More Console Discover Product overview Protection levels Overview Cloud HSM overview Single-tenant Cloud HSM overview Cloud EKM overview Reference architectures for Cloud EKM CMEK overview Cloud KMS with Autokey Compatible services Cloud HSM for Google Workspace Locations Get started Cloud KMS resources Key purposes and algorithms Separation of duties Create and use encryption keys CMEK best practices Create and manage Single-tenant Cloud HSM instances Create keys Automate key creation Autokey overview Enable Autokey Create a resource with Autokey Create a key ring Create a key Import keys About key import Key wrapping Format a key for import Manually wrap a key for import Configure OpenSSL for manual key wrapping Wrap a key using OpenSSL Set up automatic key wrapping Import a key version Verify an imported key version Create external keys Set up Cloud EKM over the internet Create an EKM connection Create an external Key Control access Manage IAM roles Use Organization Policy Contraints Create custom organization policy constraints for Cloud KMS CMEK organization policies Control key destruction Secure data using keys Key APIs Use gRPC Access the API Sort and filter API list results Generate random bytes Use Cloud KMS keys in Google Cloud Encrypt and decrypt data Envelope encryption Additional authenticated data Asymmetric encryption Encrypt and decrypt data with a symmetric key Encrypt and decrypt data with a raw symmetric key Encrypt and decrypt data with an asymmetric key Verify end-to-end data integrity Encrypt application data Set up client-side encryption with Tink Onboard to Cloud HSM for Google Workspace Sign and validate data Digital signatures Create and validate signatures MAC signatures Create and validate MAC signatures Share secrets using key encapsulation mechanisms Key encapsulation mechanisms Encapsulate and decapsulate using KEMs Manage keys Resource consistency Key version states View keys and key details View keys by project View encryption metrics View key usage Get a Cloud KMS resource ID Retrieve a public key Attest a Cloud HSM key Label a key Create and manage tags Enable and disable a key version Destroy and restore a key version Delete Cloud KMS resources Rotate keys About key rotation Rotate a key Re-encrypt data Update external key reference Monitor Using Cloud Audit Logging Cloud KMS Inventory Service audit logging Monitor state changes Monitor and adjust quotas Use Cloud Monitoring Monitor EKM usage Troubleshoot Troubleshoot failed imports Troubleshoot EKM via VPC errors AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools On this page Supported key formats Checking a symmetric key Formatting asymmetric keys Troubleshooting What's next Home Documentation Security Cloud KMS Guides Was this helpful?
- In that case, you can use the diff command to verify that the input and output file are identical. openssl pkcs8 -topk8 -nocrypt -inform DER -outform DER \ -in /path/to/asymmetric-key-der \ -out /path/to/formatted-key Troubleshooting If you run the commands above and you believe the key is in an appropriate format, but the import still fails, check for errors in Google Cloud console, and then see Troubleshooting failed imports .
- In either case, run the following command to convert it to PCKS#8 DER format: openssl pkcs8 -topk8 -nocrypt -inform PEM -outform DER \ -in /path/to/asymmetric-key-pem \ -out /path/to/formatted-key If the output is data , the key is likely to be in DER format, but it may not be in PKCS #8 format.
- For that reason, we recommend that you run the following commands on each asymmetric key before attempting to import it into Cloud KMS.

### "Create an EKM connection \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/create-ekm-connection](https://docs.cloud.google.com/kms/docs/create-ekm-connection)
- Source ID: `site-iam-reference`
- Final score: 96
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To create an EKM connection for coordinated external keys, run the following command: curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /ekmConnections" \ --request "POST" \ --header "authorization: Bearer TOKEN " \ --header "content-type: application/json" \ --header "x-goog-user-project: PROJECT ID " \ --data '{ "name": " EKM CONNECTION ", "serviceResolvers": [ { "serviceDirectoryService": " SERVICE DIRECTORY SERVICE ", "hostname": " HOSTNAME ", "serverCertificates": [ { SERVER CERTIFICATES } ] } ] "keyManagementMode": "CLOUD KMS", "cryptoSpacePath": " CRYPTO SPACE PATH " }' Replace the following: PROJECT ID : the ID of the project where you want to create the EKM connection.
- To create an EKM connection for manually managed external keys, run the following command: curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /ekmConnections" \ --request "POST" \ --header "authorization: Bearer TOKEN " \ --header "content-type: application/json" \ --header "x-goog-user-project: PROJECT ID " \ --data '{ "name": " EKM CONNECTION ", "serviceResolvers": [ { "serviceDirectoryService": " SERVICE DIRECTORY SERVICE ", "hostname": " HOSTNAME ", "serverCertificates": [ { SERVER CERTIFICATES } ] } ] }' Replace the following: PROJECT ID : the ID of the project where you want to create the EKM connection.
- To create an EKM connection for coordinated external keys, run the following command: gcloud beta kms ekm-connections create EKM CONNECTION \ --location LOCATION \ --service-directory-service SERVICE DIRECTORY SERVICE \ --hostname HOSTNAME \ --server-certificates-files SERVER CERTIFICATE FILES \ --key-management-mode cloud-kms \ --crypto-space-path CRYPTO SPACE PATH Replace the following: EKM CONNECTION : a name for the EKM connection.
- To create an EKM connection for manually managed external keys, run the following command: gcloud beta kms ekm-connections create EKM CONNECTION \ --location LOCATION \ --service-directory-service SERVICE DIRECTORY SERVICE \ --hostname HOSTNAME \ --server-certificates-files SERVER CERTIFICATE FILES \ --key-management-mode manual Replace the following: EKM CONNECTION : a name for the EKM connection.

### "Reference architectures for Cloud External Key Manager \_|\_ Cloud Key Management\

- URL: [https://docs.cloud.google.com/kms/docs/ekm-architectures](https://docs.cloud.google.com/kms/docs/ekm-architectures)
- Source ID: `site-iam-reference`
- Final score: 95
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Option Direct connection Load balanced from internet Load balanced in a VPC network Fully-managed EKM provided by partner Internet or VPC network VPC Internet VPC Internet Load balancer in Google Cloud No Yes Yes No On-premises load balancer required Yes No No Yes (managed by partner) Supports multi-regional Cloud KMS locations No Yes No Yes Recommended for High throughput applications where the EKM service runs in a single site.
- Cloud KMS Start free Overview Guides Reference Samples Resources More Technology areas More Overview Guides Reference Samples Resources Cross-product tools More Console Discover Product overview Protection levels Overview Cloud HSM overview Single-tenant Cloud HSM overview Cloud EKM overview Reference architectures for Cloud EKM CMEK overview Cloud KMS with Autokey Compatible services Cloud HSM for Google Workspace Locations Get started Cloud KMS resources Key purposes and algorithms Separation of duties Create and use encryption keys CMEK best practices Create and manage Single-tenant Cloud HSM instances Create keys Automate key creation Autokey overview Enable Autokey Create a resource with Autokey Create a key ring Create a key Import keys About key import Key wrapping Format a key for import Manually wrap a key for import Configure OpenSSL for manual key wrapping Wrap a key using OpenSSL Set up automatic key wrapping Import a key version Verify an imported key version Create external keys Set up Cloud EKM over the internet Create an EKM connection Create an external Key Control access Manage IAM roles Use Organization Policy Contraints Create custom organization policy constraints for Cloud KMS CMEK organization policies Control key destruction Secure data using keys Key APIs Use gRPC Access the API Sort and filter API list results Generate random bytes Use Cloud KMS keys in Google Cloud Encrypt and decrypt data Envelope encryption Additional authenticated data Asymmetric encryption Encrypt and decrypt data with a symmetric key Encrypt and decrypt data with a raw symmetric key Encrypt and decrypt data with an asymmetric key Verify end-to-end data integrity Encrypt application data Set up client-side encryption with Tink Onboard to Cloud HSM for Google Workspace Sign and validate data Digital signatures Create and validate signatures MAC signatures Create and validate MAC signatures Share secrets using key encapsulation mechanisms Key encapsulation mechanisms Encapsulate and decapsulate using KEMs Manage keys Resource consistency Key version states View keys and key details View keys by project View encryption metrics View key usage Get a Cloud KMS resource ID Retrieve a public key Attest a Cloud HSM key Label a key Create and manage tags Enable and disable a key version Destroy and restore a key version Delete Cloud KMS resources Rotate keys About key rotation Rotate a key Re-encrypt data Update external key reference Monitor Using Cloud Audit Logging Cloud KMS Inventory Service audit logging Monitor state changes Monitor and adjust quotas Use Cloud Monitoring Monitor EKM usage Troubleshoot Troubleshoot failed imports Troubleshoot EKM via VPC errors AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools On this page Overview Best practices for Cloud EKM architectures Configure low-latency, reliable network connectivity Enable high availability Detect and mitigate failures quickly Reference architectures for Cloud EKM Direct connection over Cloud VPN or Cloud Interconnect Load balanced from internet in Google Cloud Load balanced in a VPC network in Google Cloud Reference architecture comparison What's next Home Documentation Security Cloud KMS Guides Was this helpful?
- On this page Overview Best practices for Cloud EKM architectures Configure low-latency, reliable network connectivity Enable high availability Detect and mitigate failures quickly Reference architectures for Cloud EKM Direct connection over Cloud VPN or Cloud Interconnect Load balanced from internet in Google Cloud Load balanced in a VPC network in Google Cloud Reference architecture comparison What's next When you enable Cloud Key Management Service (Cloud KMS) with Cloud External Key Manager (Cloud EKM) , you can use keys that you manage with an external key management partner to help protect data in Google Cloud.
- Detect and mitigate failures quickly For every minute the EKM service suffers an outage, dependent Google Cloud resources might be inaccessible, which can further increase the likelihood of a cascading failure of other dependent components of your infrastructure.

