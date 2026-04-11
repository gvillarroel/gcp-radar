---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:13:34.946Z"
product_name: "Certificate Authority Service"
product_slug: "certificate-authority-service"
feature_name: "Certificate Authority Service availability in africa-south1"
feature_slug: "certificate-authority-service-availability-in-africa-south1"
latest_feature_date: "2024-06-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/certificate-authority-service/docs/certificate-authority-settings"
  - "https://docs.cloud.google.com/certificate-authority-service/docs/create-subordinate-ca"
  - "https://docs.cloud.google.com/certificate-authority-service/docs/custom-constraints"
keywords:
  - "africa"
  - "south1"
  - "availability"
  - "available"
  - "certificate"
  - "became"
  - "authority"
  - "in"
---

# Certificate Authority Service availability in africa-south1

Product: Certificate Authority Service
Coverage: LOW

## Step 02 Summary

Certificate Authority Service became available in the africa-south1 region.

## Extended Definition

Certificate Authority Service became available in the africa-south1 region.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/certificate-authority-service/docs/certificate-authority-settings](https://docs.cloud.google.com/certificate-authority-service/docs/certificate-authority-settings)
- [https://docs.cloud.google.com/certificate-authority-service/docs/create-subordinate-ca](https://docs.cloud.google.com/certificate-authority-service/docs/create-subordinate-ca)
- [https://docs.cloud.google.com/certificate-authority-service/docs/custom-constraints](https://docs.cloud.google.com/certificate-authority-service/docs/custom-constraints)

## Supporting Pages

### "Determine certificate authority settings \_|\_ Certificate Authority Service\

- URL: [https://docs.cloud.google.com/certificate-authority-service/docs/certificate-authority-settings](https://docs.cloud.google.com/certificate-authority-service/docs/certificate-authority-settings)
- Source ID: `site-iam-reference`
- Final score: 192
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Determine certificate authority settings This page provides information about the various settings of a certificate authority (CA).
- Home Documentation Security Certificate Authority Service Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- The subordinate CA can be trusted only if the relying party is able to cryptographically validate the certificate chain that forms a path to the root CA certificate.
- CA certificate settings The following settings are directly reflected in the CA's own certificate: Setting Description Lifetime Specifies a CA's lifetime.

### "Create a subordinate certificate authority \_|\_ Certificate Authority Service\

- URL: [https://docs.cloud.google.com/certificate-authority-service/docs/create-subordinate-ca](https://docs.cloud.google.com/certificate-authority-service/docs/create-subordinate-ca)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Terraform resource "google privateca certificate authority" "root ca" { // This example assumes this pool already exists. // Pools cannot be deleted in normal test circumstances, so we depend on static pools pool = "my-pool" certificate authority id = "my-certificate-authority-root" location = "us-central1" deletion protection = false # set to true to prevent destruction of the resource ignore active certificates on deletion = true config { subject config { subject { organization = "ACME" common name = "my-certificate-authority" } } x509 config { ca options { is ca MUST be true for certificate authorities is ca = true } key usage { base key usage { cert sign and crl sign MUST be true for certificate authorities cert sign = true crl sign = true } extended key usage { } } } } key spec { algorithm = "RSA PKCS1 4096 SHA256" } // valid for 10 years lifetime = "${10 365 24 3600}s" } resource "google privateca certificate authority" "sub ca" { // This example assumes this pool already exists. // Pools cannot be deleted in normal test circumstances, so we depend on static pools pool = "my-sub-pool" certificate authority id = "my-certificate-authority-sub" location = "us-central1" deletion protection = false # set to true to prevent destruction of the resource subordinate config { certificate authority = google privateca certificate authority.root ca.name } config { subject config { subject { organization = "ACME" common name = "my-subordinate-authority" } } x509 config { ca options { is ca = true Force the sub CA to only issue leaf certs.
- Duration ; import java.io.IOException ; import java.util.concurrent.ExecutionException ; public class CreateSubordinateCa { public static void main ( String [] args ) throws InterruptedException , ExecutionException , IOException { // TODO(developer): Replace these variables before running the sample. // location: For a list of locations, see: // https://cloud.google.com/certificate-authority-service/docs/locations // poolId: Set it to the CA Pool under which the CA should be created. // subordinateCaName: Unique name for the Subordinate CA.
- For a list of locations, see: https://cloud.google.com/certificate-authority-service/docs/locations. ca pool name: set it to the CA Pool under which the CA should be created. subordinate ca name: unique name for the Subordinate CA. common name: a title for your certificate authority. organization: the name of your company for your certificate authority. domain: the name of your company for your certificate authority. ca duration: the validity of the certificate authority in seconds. """ ca service client = privateca v1 .
- ApiFuture<Operation> futureCall = certificateAuthorityServiceClient . createCertificateAuthorityCallable () . futureCall ( subCertificateAuthorityRequest ); Operation response = futureCall . get (); if ( response . hasError ()) { System . out . println ( "Error while creating Subordinate CA !" + response . getError ()); return ; } System . out . println ( "Subordinate Certificate Authority created successfully : " + subordinateCaName ); } } } Python To authenticate to CA Service, set up Application Default Credentials.

### "Manage CA Service resources using custom constraints \_|\_ Certificate Authority\

- URL: [https://docs.cloud.google.com/certificate-authority-service/docs/custom-constraints](https://docs.cloud.google.com/certificate-authority-service/docs/custom-constraints)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Resource Field privateca.googleapis.com/CaPool resource.encryptionSpec.cloudKmsKey resource.issuancePolicy.allowedIssuanceModes.allowConfigBasedIssuance resource.issuancePolicy.allowedIssuanceModes.allowCsrBasedIssuance resource.issuancePolicy.allowedKeyTypes.ellipticCurve.signatureAlgorithm resource.issuancePolicy.allowedKeyTypes.rsa.maxModulusSize resource.issuancePolicy.allowedKeyTypes.rsa.minModulusSize resource.issuancePolicy.backdateDuration resource.issuancePolicy.baselineValues.additionalExtensions.critical resource.issuancePolicy.baselineValues.additionalExtensions.objectId.objectIdPath resource.issuancePolicy.baselineValues.additionalExtensions.value resource.issuancePolicy.baselineValues.aiaOcspServers resource.issuancePolicy.baselineValues.caOptions.isCa resource.issuancePolicy.baselineValues.caOptions.maxIssuerPathLength resource.issuancePolicy.baselineValues.keyUsage.baseKeyUsage.certSign resource.issuancePolicy.baselineValues.keyUsage.baseKeyUsage.contentCommitment resource.issuancePolicy.baselineValues.keyUsage.baseKeyUsage.crlSign resource.issuancePolicy.baselineValues.keyUsage.baseKeyUsage.dataEncipherment resource.issuancePolicy.baselineValues.keyUsage.baseKeyUsage.decipherOnly resource.issuancePolicy.baselineValues.keyUsage.baseKeyUsage.digitalSignature resource.issuancePolicy.baselineValues.keyUsage.baseKeyUsage.encipherOnly resource.issuancePolicy.baselineValues.keyUsage.baseKeyUsage.keyAgreement resource.issuancePolicy.baselineValues.keyUsage.baseKeyUsage.keyEncipherment resource.issuancePolicy.baselineValues.keyUsage.extendedKeyUsage.clientAuth resource.issuancePolicy.baselineValues.keyUsage.extendedKeyUsage.codeSigning resource.issuancePolicy.baselineValues.keyUsage.extendedKeyUsage.emailProtection resource.issuancePolicy.baselineValues.keyUsage.extendedKeyUsage.ocspSigning resource.issuancePolicy.baselineValues.keyUsage.extendedKeyUsage.serverAuth resource.issuancePolicy.baselineValues.keyUsage.extendedKeyUsage.timeStamping resource.issuancePolicy.baselineValues.keyUsage.unknownExtendedKeyUsages.objectIdPath resource.issuancePolicy.baselineValues.nameConstraints.critical resource.issuancePolicy.baselineValues.nameConstraints.excludedDnsNames resource.issuancePolicy.baselineValues.nameConstraints.excludedEmailAddresses resource.issuancePolicy.baselineValues.nameConstraints.excludedIpRanges resource.issuancePolicy.baselineValues.nameConstraints.excludedUris resource.issuancePolicy.baselineValues.nameConstraints.permittedDnsNames resource.issuancePolicy.baselineValues.nameConstraints.permittedEmailAddresses resource.issuancePolicy.baselineValues.nameConstraints.permittedIpRanges resource.issuancePolicy.baselineValues.nameConstraints.permittedUris resource.issuancePolicy.baselineValues.policyIds.objectIdPath resource.issuancePolicy.identityConstraints.allowSubjectAltNamesPassthrough resource.issuancePolicy.identityConstraints.allowSubjectPassthrough resource.issuancePolicy.identityConstraints.celExpression resource.issuancePolicy.maximumLifetime resource.issuancePolicy.passthroughExtensions.additionalExtensions.objectIdPath resource.issuancePolicy.passthroughExtensions.knownExtensions resource.name resource.publishingOptions.encodingFormat resource.publishingOptions.publishCaCert resource.publishingOptions.publishCrl resource.tier privateca.googleapis.com/CertificateAuthority resource.config.publicKey.format resource.config.publicKey.key resource.config.subjectConfig.subject.commonName resource.config.subjectConfig.subject.countryCode resource.config.subjectConfig.subject.locality resource.config.subjectConfig.subject.organization resource.config.subjectConfig.subject.organizationalUnit resource.config.subjectConfig.subject.postalCode resource.config.subjectConfig.subject.province resource.config.subjectConfig.subject.rdnSequence.attributes.objectId.objectIdPath resource.config.subjectConfig.subject.rdnSequence.attributes.type resource.config.subjectConfig.subject.rdnSequence.attributes.value resource.config.subjectConfig.subject.streetAddress resource.config.subjectConfig.subjectAltName.customSans.critical resource.config.subjectConfig.subjectAltName.customSans.objectId.objectIdPath resource.config.subjectConfig.subjectAltName.customSans.value resource.config.subjectConfig.subjectAltName.dnsNames resource.config.subjectConfig.subjectAltName.emailAddresses resource.config.subjectConfig.subjectAltName.ipAddresses resource.config.subjectConfig.subjectAltName.uris resource.config.subjectKeyId.keyId resource.config.x509Config.additionalExtensions.critical resource.config.x509Config.additionalExtensions.objectId.objectIdPath resource.config.x509Config.additionalExtensions.value resource.config.x509Config.aiaOcspServers resource.config.x509Config.caOptions.isCa resource.config.x509Config.caOptions.maxIssuerPathLength resource.config.x509Config.keyUsage.baseKeyUsage.certSign resource.config.x509Config.keyUsage.baseKeyUsage.contentCommitment resource.config.x509Config.keyUsage.baseKeyUsage.crlSign resource.config.x509Config.keyUsage.baseKeyUsage.dataEncipherment resource.config.x509Config.keyUsage.baseKeyUsage.decipherOnly resource.config.x509Config.keyUsage.baseKeyUsage.digitalSignature resource.config.x509Config.keyUsage.baseKeyUsage.encipherOnly resource.config.x509Config.keyUsage.baseKeyUsage.keyAgreement resource.config.x509Config.keyUsage.baseKeyUsage.keyEncipherment resource.config.x509Config.keyUsage.extendedKeyUsage.clientAuth resource.config.x509Config.keyUsage.extendedKeyUsage.codeSigning resource.config.x509Config.keyUsage.extendedKeyUsage.emailProtection resource.config.x509Config.keyUsage.extendedKeyUsage.ocspSigning resource.config.x509Config.keyUsage.extendedKeyUsage.serverAuth resource.config.x509Config.keyUsage.extendedKeyUsage.timeStamping resource.config.x509Config.keyUsage.unknownExtendedKeyUsages.objectIdPath resource.config.x509Config.nameConstraints.critical resource.config.x509Config.nameConstraints.excludedDnsNames resource.config.x509Config.nameConstraints.excludedEmailAddresses resource.config.x509Config.nameConstraints.excludedIpRanges resource.config.x509Config.nameConstraints.excludedUris resource.config.x509Config.nameConstraints.permittedDnsNames resource.config.x509Config.nameConstraints.permittedEmailAddresses resource.config.x509Config.nameConstraints.permittedIpRanges resource.config.x509Config.nameConstraints.permittedUris resource.config.x509Config.policyIds.objectIdPath resource.gcsBucket resource.keySpec.algorithm resource.keySpec.cloudKmsKeyVersion resource.lifetime resource.name resource.subordinateConfig.certificateAuthority resource.subordinateConfig.pemIssuerChain.pemCertificates resource.type resource.userDefinedAccessUrls.aiaIssuingCertificateUrls resource.userDefinedAccessUrls.crlAccessUrls privateca.googleapis.com/CertificateTemplate resource.description resource.identityConstraints.allowSubjectAltNamesPassthrough resource.identityConstraints.allowSubjectPassthrough resource.identityConstraints.celExpression resource.maximumLifetime resource.name resource.passthroughExtensions.additionalExtensions.objectIdPath resource.passthroughExtensions.knownExtensions resource.predefinedValues.additionalExtensions.critical resource.predefinedValues.additionalExtensions.objectId.objectIdPath resource.predefinedValues.additionalExtensions.value resource.predefinedValues.aiaOcspServers resource.predefinedValues.caOptions.isCa resource.predefinedValues.caOptions.maxIssuerPathLength resource.predefinedValues.keyUsage.baseKeyUsage.certSign resource.predefinedValues.keyUsage.baseKeyUsage.contentCommitment resource.predefinedValues.keyUsage.baseKeyUsage.crlSign resource.predefinedValues.keyUsage.baseKeyUsage.dataEncipherment resource.predefinedValues.keyUsage.baseKeyUsage.decipherOnly resource.predefinedValues.keyUsage.baseKeyUsage.digitalSignature resource.predefinedValues.keyUsage.baseKeyUsage.encipherOnly resource.predefinedValues.keyUsage.baseKeyUsage.keyAgreement resource.predefinedValues.keyUsage.baseKeyUsage.keyEncipherment resource.predefinedValues.keyUsage.extendedKeyUsage.clientAuth resource.predefinedValues.keyUsage.extendedKeyUsage.codeSigning resource.predefinedValues.keyUsage.extendedKeyUsage.emailProtection resource.predefinedValues.keyUsage.extendedKeyUsage.ocspSigning resource.predefinedValues.keyUsage.extendedKeyUsage.serverAuth resource.predefinedValues.keyUsage.extendedKeyUsage.timeStamping resource.predefinedValues.keyUsage.unknownExtendedKeyUsages.objectIdPath resource.predefinedValues.nameConstraints.critical resource.predefinedValues.nameConstraints.excludedDnsNames resource.predefinedValues.nameConstraints.excludedEmailAddresses resource.predefinedValues.nameConstraints.excludedIpRanges resource.predefinedValues.nameConstraints.excludedUris resource.predefinedValues.nameConstraints.permittedDnsNames resource.predefinedValues.nameConstraints.permittedEmailAddresses resource.predefinedValues.nameConstraints.permittedIpRanges resource.predefinedValues.nameConstraints.permittedUris resource.predefinedValues.policyIds.objectIdPath What's next Learn more about Organization Policy Service .
- Require a specific organization name in the CA subject Ensures all new CAs have a standardized organization field in their subject. name : organizations/ ORGANIZATION ID /customConstraints/custom.casRequireSubjectOrg resourceTypes : - privateca.googleapis.com/CertificateAuthority methodTypes : - CREATE - UPDATE condition : "resource.config.subjectConfig.subject.organization == 'Example Company Inc.'" actionType : ALLOW displayName : Enforce CA Subject Organization description : Requires new CAs to have the specified organization name.
- Description Constraint syntax Enforce specific key algorithms for all CAs Ensures any new Certificate Authority uses one of the allowed key algorithms. name : organizations/ ORGANIZATION ID /customConstraints/custom.casAllowedKeyAlgos resourceTypes : - privateca.googleapis.com/CertificateAuthority methodTypes : - CREATE - UPDATE condition : "resource.keySpec.algorithm in ['EC P256 SHA256', 'RSA PSS 3072 SHA256']" actionType : ALLOW displayName : Restrict CA Key Algorithms description : Only allows specific key algorithms for new CAs.
- Manage CA Service resources using custom constraints This page shows you how to use Organization Policy Service custom constraints to restrict specific operations on the following Google Cloud resources: privateca.googleapis.com/CaPool privateca.googleapis.com/CertificateAuthority privateca.googleapis.com/CertificateTemplate To learn more about Organization Policy, see Custom organization policies .

