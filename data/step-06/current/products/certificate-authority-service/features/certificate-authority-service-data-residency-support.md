---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:13:34.951Z"
product_name: "Certificate Authority Service"
product_slug: "certificate-authority-service"
feature_name: "Certificate Authority Service data residency support"
feature_slug: "certificate-authority-service-data-residency-support"
latest_feature_date: "2023-09-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/certificate-authority-service/docs/certificate-authority-settings"
  - "https://docs.cloud.google.com/certificate-authority-service/docs/using-terraform"
  - "https://docs.cloud.google.com/certificate-authority-service/docs/certificate-authority-states"
keywords:
  - "residency"
  - "added"
  - "for"
  - "certificate"
  - "authority"
---

# Certificate Authority Service data residency support

Product: Certificate Authority Service
Coverage: LOW

## Step 02 Summary

Certificate Authority Service added support for data residency.

## Extended Definition

Certificate Authority Service added support for data residency.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/certificate-authority-service/docs/certificate-authority-settings](https://docs.cloud.google.com/certificate-authority-service/docs/certificate-authority-settings)
- [https://docs.cloud.google.com/certificate-authority-service/docs/using-terraform](https://docs.cloud.google.com/certificate-authority-service/docs/using-terraform)
- [https://docs.cloud.google.com/certificate-authority-service/docs/certificate-authority-states](https://docs.cloud.google.com/certificate-authority-service/docs/certificate-authority-states)

## Supporting Pages

### "Determine certificate authority settings \_|\_ Certificate Authority Service\

- URL: [https://docs.cloud.google.com/certificate-authority-service/docs/certificate-authority-settings](https://docs.cloud.google.com/certificate-authority-service/docs/certificate-authority-settings)
- Source ID: `site-iam-reference`
- Final score: 154
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Determine certificate authority settings This page provides information about the various settings of a certificate authority (CA).
- Home Documentation Security Certificate Authority Service Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- The subordinate CA can be trusted only if the relying party is able to cryptographically validate the certificate chain that forms a path to the root CA certificate.
- If you want to specify a subject alternative name for your CA's certificate, you must use the Google Cloud CLI.

### "Quickstart: Issue a certificate using Terraform \_|\_ Certificate Authority\

- URL: [https://docs.cloud.google.com/certificate-authority-service/docs/using-terraform](https://docs.cloud.google.com/certificate-authority-service/docs/using-terraform)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you already have the Google Cloud CLI installed, update it by running the gcloud components update command : gcloud components update Terraform configuration sample provider "google" {} provider "tls" {} resource "google project service" "privateca api" { service = "privateca.googleapis.com" disable on destroy = false } Root CaPool & CA resource "google privateca ca pool" "root" { name = "root-pool" location = "us-central1" tier = "ENTERPRISE" publishing options { publish ca cert = true publish crl = true } } resource "google privateca certificate authority" "root-ca" { certificate authority id = "my-root-ca" location = "us-central1" pool = google privateca ca pool.root.name config { subject config { subject { organization = "google" common name = "my-certificate-authority" } } x509 config { ca options { is ca = true } key usage { base key usage { cert sign = true crl sign = true } extended key usage { server auth = true } } } } type = "SELF SIGNED" key spec { algorithm = "RSA PKCS1 4096 SHA256" } // Disable CA deletion related safe checks for easier cleanup. deletion protection = false skip grace period = true ignore active certificates on deletion = true } Sub CaPool & CA resource "google privateca ca pool" "subordinate" { name = "sub-pool" location = "us-central1" tier = "ENTERPRISE" publishing options { publish ca cert = true publish crl = true } issuance policy { baseline values { ca options { is ca = false } key usage { base key usage { digital signature = true key encipherment = true } extended key usage { server auth = true } } } } } resource "google privateca certificate authority" "sub-ca" { pool = google privateca ca pool.subordinate.name certificate authority id = "my-sub-ca" location = "us-central1" subordinate config { certificate authority = google privateca certificate authority.root-ca.name } config { subject config { subject { organization = "HashiCorp" common name = "my-subordinate-authority" } subject alt name { dns names = [ "hashicorp.com" ] } } x509 config { ca options { is ca = true Force the sub CA to only issue leaf certs max issuer path length = 0 } key usage { base key usage { cert sign = true crl sign = true } extended key usage { server auth = true } } } } lifetime = "31536000s" key spec { algorithm = "RSA PKCS1 4096 SHA256" } type = "SUBORDINATE" // Disable CA deletion related safe checks for easier cleanup. deletion protection = false skip grace period = true ignore active certificates on deletion = true } Leaf cert resource "tls private key" "example" { algorithm = "RSA" } resource "tls cert request" "example" { private key pem = tls private key.example.private key pem subject { common name = "example.com" organization = "ACME Examples, Inc" } } resource "google privateca certificate" "default" { pool = google privateca ca pool.subordinate.name Explicitly refer the sub-CA so that the certificate creation will wait for the CA creation. certificate authority = google privateca certificate authority.sub-ca.certificate authority id location = "us-central1" lifetime = "860s" name = "my-certificate" pem csr = tls cert request.example.cert request pem } Run the Terraform configuration file To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- Issue a certificate using Terraform Learn how to use Terraform with Certificate Authority Service to do the following: Create a CA pool and a root CA in the new CA pool.
- Home Documentation Security Certificate Authority Service Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

### "Certificate authority states \_|\_ Certificate Authority Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/certificate-authority-service/docs/certificate-authority-states](https://docs.cloud.google.com/certificate-authority-service/docs/certificate-authority-states)
- Source ID: `site-iam-reference`
- Final score: 150
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Once you have verified that the CA certificate has been published to all clients and tested certificate issuance from the CA, you can enable the CA to start issuing load-balanced certificates for the CA pool.
- Home Documentation Security Certificate Authority Service Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Certificate authority states This page describes the operational states that apply to certificate authorities (CAs).
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

