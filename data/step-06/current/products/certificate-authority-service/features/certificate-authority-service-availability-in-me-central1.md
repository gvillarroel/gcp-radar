---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:13:34.956Z"
product_name: "Certificate Authority Service"
product_slug: "certificate-authority-service"
feature_name: "Certificate Authority Service availability in me-central1"
feature_slug: "certificate-authority-service-availability-in-me-central1"
latest_feature_date: "2023-06-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/certificate-authority-service/docs/certificate-authority-settings"
  - "https://docs.cloud.google.com/certificate-authority-service/docs/create-subordinate-ca"
  - "https://docs.cloud.google.com/certificate-authority-service/docs/using-terraform"
keywords:
  - "central1"
  - "me"
  - "availability"
  - "available"
  - "certificate"
  - "became"
  - "authority"
  - "in"
---

# Certificate Authority Service availability in me-central1

Product: Certificate Authority Service
Coverage: LOW

## Step 02 Summary

Certificate Authority Service became available in the me-central1 region.

## Extended Definition

Certificate Authority Service became available in the me-central1 region.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/certificate-authority-service/docs/certificate-authority-settings](https://docs.cloud.google.com/certificate-authority-service/docs/certificate-authority-settings)
- [https://docs.cloud.google.com/certificate-authority-service/docs/create-subordinate-ca](https://docs.cloud.google.com/certificate-authority-service/docs/create-subordinate-ca)
- [https://docs.cloud.google.com/certificate-authority-service/docs/using-terraform](https://docs.cloud.google.com/certificate-authority-service/docs/using-terraform)

## Supporting Pages

### "Determine certificate authority settings \_|\_ Certificate Authority Service\

- URL: [https://docs.cloud.google.com/certificate-authority-service/docs/certificate-authority-settings](https://docs.cloud.google.com/certificate-authority-service/docs/certificate-authority-settings)
- Source ID: `site-iam-reference`
- Final score: 212
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Security Certificate Authority Service Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- CA certificate settings The following settings are directly reflected in the CA's own certificate: Setting Description Lifetime Specifies a CA's lifetime.
- Determine certificate authority settings This page provides information about the various settings of a certificate authority (CA).
- The subordinate CA can be trusted only if the relying party is able to cryptographically validate the certificate chain that forms a path to the root CA certificate.

### "Create a subordinate certificate authority \_|\_ Certificate Authority Service\

- URL: [https://docs.cloud.google.com/certificate-authority-service/docs/create-subordinate-ca](https://docs.cloud.google.com/certificate-authority-service/docs/create-subordinate-ca)
- Source ID: `site-docs-root`
- Final score: 194
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Terraform resource "google privateca certificate authority" "root ca" { // This example assumes this pool already exists. // Pools cannot be deleted in normal test circumstances, so we depend on static pools pool = "my-pool" certificate authority id = "my-certificate-authority-root" location = "us-central1" deletion protection = false # set to true to prevent destruction of the resource ignore active certificates on deletion = true config { subject config { subject { organization = "ACME" common name = "my-certificate-authority" } } x509 config { ca options { is ca MUST be true for certificate authorities is ca = true } key usage { base key usage { cert sign and crl sign MUST be true for certificate authorities cert sign = true crl sign = true } extended key usage { } } } } key spec { algorithm = "RSA PKCS1 4096 SHA256" } // valid for 10 years lifetime = "${10 365 24 3600}s" } resource "google privateca certificate authority" "sub ca" { // This example assumes this pool already exists. // Pools cannot be deleted in normal test circumstances, so we depend on static pools pool = "my-sub-pool" certificate authority id = "my-certificate-authority-sub" location = "us-central1" deletion protection = false # set to true to prevent destruction of the resource subordinate config { certificate authority = google privateca certificate authority.root ca.name } config { subject config { subject { organization = "ACME" common name = "my-subordinate-authority" } } x509 config { ca options { is ca = true Force the sub CA to only issue leaf certs.
- Duration ; import java.io.IOException ; import java.util.concurrent.ExecutionException ; public class CreateSubordinateCa { public static void main ( String [] args ) throws InterruptedException , ExecutionException , IOException { // TODO(developer): Replace these variables before running the sample. // location: For a list of locations, see: // https://cloud.google.com/certificate-authority-service/docs/locations // poolId: Set it to the CA Pool under which the CA should be created. // subordinateCaName: Unique name for the Subordinate CA.
- For a list of locations, see: https://cloud.google.com/certificate-authority-service/docs/locations. ca pool name: set it to the CA Pool under which the CA should be created. subordinate ca name: unique name for the Subordinate CA. common name: a title for your certificate authority. organization: the name of your company for your certificate authority. domain: the name of your company for your certificate authority. ca duration: the validity of the certificate authority in seconds. """ ca service client = privateca v1 .
- ApiFuture<Operation> futureCall = certificateAuthorityServiceClient . createCertificateAuthorityCallable () . futureCall ( subCertificateAuthorityRequest ); Operation response = futureCall . get (); if ( response . hasError ()) { System . out . println ( "Error while creating Subordinate CA !" + response . getError ()); return ; } System . out . println ( "Subordinate Certificate Authority created successfully : " + subordinateCaName ); } } } Python To authenticate to CA Service, set up Application Default Credentials.

### "Quickstart: Issue a certificate using Terraform \_|\_ Certificate Authority\

- URL: [https://docs.cloud.google.com/certificate-authority-service/docs/using-terraform](https://docs.cloud.google.com/certificate-authority-service/docs/using-terraform)
- Source ID: `site-docs-root`
- Final score: 192
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you already have the Google Cloud CLI installed, update it by running the gcloud components update command : gcloud components update Terraform configuration sample provider "google" {} provider "tls" {} resource "google project service" "privateca api" { service = "privateca.googleapis.com" disable on destroy = false } Root CaPool & CA resource "google privateca ca pool" "root" { name = "root-pool" location = "us-central1" tier = "ENTERPRISE" publishing options { publish ca cert = true publish crl = true } } resource "google privateca certificate authority" "root-ca" { certificate authority id = "my-root-ca" location = "us-central1" pool = google privateca ca pool.root.name config { subject config { subject { organization = "google" common name = "my-certificate-authority" } } x509 config { ca options { is ca = true } key usage { base key usage { cert sign = true crl sign = true } extended key usage { server auth = true } } } } type = "SELF SIGNED" key spec { algorithm = "RSA PKCS1 4096 SHA256" } // Disable CA deletion related safe checks for easier cleanup. deletion protection = false skip grace period = true ignore active certificates on deletion = true } Sub CaPool & CA resource "google privateca ca pool" "subordinate" { name = "sub-pool" location = "us-central1" tier = "ENTERPRISE" publishing options { publish ca cert = true publish crl = true } issuance policy { baseline values { ca options { is ca = false } key usage { base key usage { digital signature = true key encipherment = true } extended key usage { server auth = true } } } } } resource "google privateca certificate authority" "sub-ca" { pool = google privateca ca pool.subordinate.name certificate authority id = "my-sub-ca" location = "us-central1" subordinate config { certificate authority = google privateca certificate authority.root-ca.name } config { subject config { subject { organization = "HashiCorp" common name = "my-subordinate-authority" } subject alt name { dns names = [ "hashicorp.com" ] } } x509 config { ca options { is ca = true Force the sub CA to only issue leaf certs max issuer path length = 0 } key usage { base key usage { cert sign = true crl sign = true } extended key usage { server auth = true } } } } lifetime = "31536000s" key spec { algorithm = "RSA PKCS1 4096 SHA256" } type = "SUBORDINATE" // Disable CA deletion related safe checks for easier cleanup. deletion protection = false skip grace period = true ignore active certificates on deletion = true } Leaf cert resource "tls private key" "example" { algorithm = "RSA" } resource "tls cert request" "example" { private key pem = tls private key.example.private key pem subject { common name = "example.com" organization = "ACME Examples, Inc" } } resource "google privateca certificate" "default" { pool = google privateca ca pool.subordinate.name Explicitly refer the sub-CA so that the certificate creation will wait for the CA creation. certificate authority = google privateca certificate authority.sub-ca.certificate authority id location = "us-central1" lifetime = "860s" name = "my-certificate" pem csr = tls cert request.example.cert request pem } Run the Terraform configuration file To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- Issue a certificate using Terraform Learn how to use Terraform with Certificate Authority Service to do the following: Create a CA pool and a root CA in the new CA pool.
- Home Documentation Security Certificate Authority Service Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- You only need to run this command once per project, and you can run it in any directory. export GOOGLE CLOUD PROJECT= PROJECT ID Environment variables are overridden if you set explicit values in the Terraform configuration file.

