---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:13:34.944Z"
product_name: "Certificate Authority Service"
product_slug: "certificate-authority-service"
feature_name: "Custom AIA and CDP certificate extensions"
feature_slug: "custom-aia-and-cdp-certificate-extensions"
latest_feature_date: "2025-02-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/certificate-authority-service/docs/custom-constraints"
  - "https://docs.cloud.google.com/certificate-authority-service/docs/creating-ca-pool"
  - "https://docs.cloud.google.com/certificate-authority-service/docs/creating-certificate-template"
keywords:
  - "extensions"
  - "custom"
  - "aia"
  - "cdp"
  - "authorities"
  - "can"
  - "and"
  - "certificate"
---

# Custom AIA and CDP certificate extensions

Product: Certificate Authority Service
Coverage: LOW

## Step 02 Summary

Certificate authorities can now be configured with custom Authority Information Access (AIA) and CRL Distribution Point (CDP) extensions embedded in issued certificates.

## Extended Definition

Certificate authorities can now be configured with custom Authority Information Access (AIA) and CRL Distribution Point (CDP) extensions embedded in issued certificates.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/certificate-authority-service/docs/custom-constraints](https://docs.cloud.google.com/certificate-authority-service/docs/custom-constraints)
- [https://docs.cloud.google.com/certificate-authority-service/docs/creating-ca-pool](https://docs.cloud.google.com/certificate-authority-service/docs/creating-ca-pool)
- [https://docs.cloud.google.com/certificate-authority-service/docs/creating-certificate-template](https://docs.cloud.google.com/certificate-authority-service/docs/creating-certificate-template)

## Supporting Pages

### "Manage CA Service resources using custom constraints \_|\_ Certificate Authority\

- URL: [https://docs.cloud.google.com/certificate-authority-service/docs/custom-constraints](https://docs.cloud.google.com/certificate-authority-service/docs/custom-constraints)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Resource Field privateca.googleapis.com/CaPool resource.encryptionSpec.cloudKmsKey resource.issuancePolicy.allowedIssuanceModes.allowConfigBasedIssuance resource.issuancePolicy.allowedIssuanceModes.allowCsrBasedIssuance resource.issuancePolicy.allowedKeyTypes.ellipticCurve.signatureAlgorithm resource.issuancePolicy.allowedKeyTypes.rsa.maxModulusSize resource.issuancePolicy.allowedKeyTypes.rsa.minModulusSize resource.issuancePolicy.backdateDuration resource.issuancePolicy.baselineValues.additionalExtensions.critical resource.issuancePolicy.baselineValues.additionalExtensions.objectId.objectIdPath resource.issuancePolicy.baselineValues.additionalExtensions.value resource.issuancePolicy.baselineValues.aiaOcspServers resource.issuancePolicy.baselineValues.caOptions.isCa resource.issuancePolicy.baselineValues.caOptions.maxIssuerPathLength resource.issuancePolicy.baselineValues.keyUsage.baseKeyUsage.certSign resource.issuancePolicy.baselineValues.keyUsage.baseKeyUsage.contentCommitment resource.issuancePolicy.baselineValues.keyUsage.baseKeyUsage.crlSign resource.issuancePolicy.baselineValues.keyUsage.baseKeyUsage.dataEncipherment resource.issuancePolicy.baselineValues.keyUsage.baseKeyUsage.decipherOnly resource.issuancePolicy.baselineValues.keyUsage.baseKeyUsage.digitalSignature resource.issuancePolicy.baselineValues.keyUsage.baseKeyUsage.encipherOnly resource.issuancePolicy.baselineValues.keyUsage.baseKeyUsage.keyAgreement resource.issuancePolicy.baselineValues.keyUsage.baseKeyUsage.keyEncipherment resource.issuancePolicy.baselineValues.keyUsage.extendedKeyUsage.clientAuth resource.issuancePolicy.baselineValues.keyUsage.extendedKeyUsage.codeSigning resource.issuancePolicy.baselineValues.keyUsage.extendedKeyUsage.emailProtection resource.issuancePolicy.baselineValues.keyUsage.extendedKeyUsage.ocspSigning resource.issuancePolicy.baselineValues.keyUsage.extendedKeyUsage.serverAuth resource.issuancePolicy.baselineValues.keyUsage.extendedKeyUsage.timeStamping resource.issuancePolicy.baselineValues.keyUsage.unknownExtendedKeyUsages.objectIdPath resource.issuancePolicy.baselineValues.nameConstraints.critical resource.issuancePolicy.baselineValues.nameConstraints.excludedDnsNames resource.issuancePolicy.baselineValues.nameConstraints.excludedEmailAddresses resource.issuancePolicy.baselineValues.nameConstraints.excludedIpRanges resource.issuancePolicy.baselineValues.nameConstraints.excludedUris resource.issuancePolicy.baselineValues.nameConstraints.permittedDnsNames resource.issuancePolicy.baselineValues.nameConstraints.permittedEmailAddresses resource.issuancePolicy.baselineValues.nameConstraints.permittedIpRanges resource.issuancePolicy.baselineValues.nameConstraints.permittedUris resource.issuancePolicy.baselineValues.policyIds.objectIdPath resource.issuancePolicy.identityConstraints.allowSubjectAltNamesPassthrough resource.issuancePolicy.identityConstraints.allowSubjectPassthrough resource.issuancePolicy.identityConstraints.celExpression resource.issuancePolicy.maximumLifetime resource.issuancePolicy.passthroughExtensions.additionalExtensions.objectIdPath resource.issuancePolicy.passthroughExtensions.knownExtensions resource.name resource.publishingOptions.encodingFormat resource.publishingOptions.publishCaCert resource.publishingOptions.publishCrl resource.tier privateca.googleapis.com/CertificateAuthority resource.config.publicKey.format resource.config.publicKey.key resource.config.subjectConfig.subject.commonName resource.config.subjectConfig.subject.countryCode resource.config.subjectConfig.subject.locality resource.config.subjectConfig.subject.organization resource.config.subjectConfig.subject.organizationalUnit resource.config.subjectConfig.subject.postalCode resource.config.subjectConfig.subject.province resource.config.subjectConfig.subject.rdnSequence.attributes.objectId.objectIdPath resource.config.subjectConfig.subject.rdnSequence.attributes.type resource.config.subjectConfig.subject.rdnSequence.attributes.value resource.config.subjectConfig.subject.streetAddress resource.config.subjectConfig.subjectAltName.customSans.critical resource.config.subjectConfig.subjectAltName.customSans.objectId.objectIdPath resource.config.subjectConfig.subjectAltName.customSans.value resource.config.subjectConfig.subjectAltName.dnsNames resource.config.subjectConfig.subjectAltName.emailAddresses resource.config.subjectConfig.subjectAltName.ipAddresses resource.config.subjectConfig.subjectAltName.uris resource.config.subjectKeyId.keyId resource.config.x509Config.additionalExtensions.critical resource.config.x509Config.additionalExtensions.objectId.objectIdPath resource.config.x509Config.additionalExtensions.value resource.config.x509Config.aiaOcspServers resource.config.x509Config.caOptions.isCa resource.config.x509Config.caOptions.maxIssuerPathLength resource.config.x509Config.keyUsage.baseKeyUsage.certSign resource.config.x509Config.keyUsage.baseKeyUsage.contentCommitment resource.config.x509Config.keyUsage.baseKeyUsage.crlSign resource.config.x509Config.keyUsage.baseKeyUsage.dataEncipherment resource.config.x509Config.keyUsage.baseKeyUsage.decipherOnly resource.config.x509Config.keyUsage.baseKeyUsage.digitalSignature resource.config.x509Config.keyUsage.baseKeyUsage.encipherOnly resource.config.x509Config.keyUsage.baseKeyUsage.keyAgreement resource.config.x509Config.keyUsage.baseKeyUsage.keyEncipherment resource.config.x509Config.keyUsage.extendedKeyUsage.clientAuth resource.config.x509Config.keyUsage.extendedKeyUsage.codeSigning resource.config.x509Config.keyUsage.extendedKeyUsage.emailProtection resource.config.x509Config.keyUsage.extendedKeyUsage.ocspSigning resource.config.x509Config.keyUsage.extendedKeyUsage.serverAuth resource.config.x509Config.keyUsage.extendedKeyUsage.timeStamping resource.config.x509Config.keyUsage.unknownExtendedKeyUsages.objectIdPath resource.config.x509Config.nameConstraints.critical resource.config.x509Config.nameConstraints.excludedDnsNames resource.config.x509Config.nameConstraints.excludedEmailAddresses resource.config.x509Config.nameConstraints.excludedIpRanges resource.config.x509Config.nameConstraints.excludedUris resource.config.x509Config.nameConstraints.permittedDnsNames resource.config.x509Config.nameConstraints.permittedEmailAddresses resource.config.x509Config.nameConstraints.permittedIpRanges resource.config.x509Config.nameConstraints.permittedUris resource.config.x509Config.policyIds.objectIdPath resource.gcsBucket resource.keySpec.algorithm resource.keySpec.cloudKmsKeyVersion resource.lifetime resource.name resource.subordinateConfig.certificateAuthority resource.subordinateConfig.pemIssuerChain.pemCertificates resource.type resource.userDefinedAccessUrls.aiaIssuingCertificateUrls resource.userDefinedAccessUrls.crlAccessUrls privateca.googleapis.com/CertificateTemplate resource.description resource.identityConstraints.allowSubjectAltNamesPassthrough resource.identityConstraints.allowSubjectPassthrough resource.identityConstraints.celExpression resource.maximumLifetime resource.name resource.passthroughExtensions.additionalExtensions.objectIdPath resource.passthroughExtensions.knownExtensions resource.predefinedValues.additionalExtensions.critical resource.predefinedValues.additionalExtensions.objectId.objectIdPath resource.predefinedValues.additionalExtensions.value resource.predefinedValues.aiaOcspServers resource.predefinedValues.caOptions.isCa resource.predefinedValues.caOptions.maxIssuerPathLength resource.predefinedValues.keyUsage.baseKeyUsage.certSign resource.predefinedValues.keyUsage.baseKeyUsage.contentCommitment resource.predefinedValues.keyUsage.baseKeyUsage.crlSign resource.predefinedValues.keyUsage.baseKeyUsage.dataEncipherment resource.predefinedValues.keyUsage.baseKeyUsage.decipherOnly resource.predefinedValues.keyUsage.baseKeyUsage.digitalSignature resource.predefinedValues.keyUsage.baseKeyUsage.encipherOnly resource.predefinedValues.keyUsage.baseKeyUsage.keyAgreement resource.predefinedValues.keyUsage.baseKeyUsage.keyEncipherment resource.predefinedValues.keyUsage.extendedKeyUsage.clientAuth resource.predefinedValues.keyUsage.extendedKeyUsage.codeSigning resource.predefinedValues.keyUsage.extendedKeyUsage.emailProtection resource.predefinedValues.keyUsage.extendedKeyUsage.ocspSigning resource.predefinedValues.keyUsage.extendedKeyUsage.serverAuth resource.predefinedValues.keyUsage.extendedKeyUsage.timeStamping resource.predefinedValues.keyUsage.unknownExtendedKeyUsages.objectIdPath resource.predefinedValues.nameConstraints.critical resource.predefinedValues.nameConstraints.excludedDnsNames resource.predefinedValues.nameConstraints.excludedEmailAddresses resource.predefinedValues.nameConstraints.excludedIpRanges resource.predefinedValues.nameConstraints.excludedUris resource.predefinedValues.nameConstraints.permittedDnsNames resource.predefinedValues.nameConstraints.permittedEmailAddresses resource.predefinedValues.nameConstraints.permittedIpRanges resource.predefinedValues.nameConstraints.permittedUris resource.predefinedValues.policyIds.objectIdPath What's next Learn more about Organization Policy Service .
- Require a specific organization name in the CA subject Ensures all new CAs have a standardized organization field in their subject. name : organizations/ ORGANIZATION ID /customConstraints/custom.casRequireSubjectOrg resourceTypes : - privateca.googleapis.com/CertificateAuthority methodTypes : - CREATE - UPDATE condition : "resource.config.subjectConfig.subject.organization == 'Example Company Inc.'" actionType : ALLOW displayName : Enforce CA Subject Organization description : Requires new CAs to have the specified organization name.
- Test the custom organization policy The following example creates a custom constraint and policy that require all Certificate Authority Pool (CaPool) resources in a specific project to issue certificates with a maximum certificate lifetime of no more than 30 days.
- However, if you want more granular, customizable control over the specific fields that are restricted in your organization policies, you can also create custom constraints and use those custom constraints in an organization policy.

### "Create a CA pool \_|\_ Certificate Authority Service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/certificate-authority-service/docs/creating-ca-pool](https://docs.cloud.google.com/certificate-authority-service/docs/creating-ca-pool)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can also specify custom AIA and CRL Distribution Point (CDP) URLs if you want to point to your own OCSP servers or CRL locations.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://privateca.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /operations/operation- UUID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT ID /locations/ LOCATION /operations/operation- UUID ", "metadata": {...}, "done": true, "response": { "@type": "type.googleapis.com/google.cloud.security.privateca.v1.CaPool", "name": "...", "tier": "ENTERPRISE" } } Note: If you delete resources such as CA pools, certificate authorities, and certificate templates, you will not be able to create a new resource of that type with the same name in the same project and location.
- Add Authority information access (AIA) OCSP servers The AIA extension in a certificate provides the following information: Address of the OCSP servers from where you can check the revocation status of the certificate.
- This choice affects whether CA Service persists the created certificates, whether created certificates can later be revoked, and the maximum rate at which you can create certificates from the CAs in the CA pool.

### "Create a certificate template \_|\_ Certificate Authority Service \_|\_\

- URL: [https://docs.cloud.google.com/certificate-authority-service/docs/creating-certificate-template](https://docs.cloud.google.com/certificate-authority-service/docs/creating-certificate-template)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Select any one of the following options: Copy all the extensions from certificate requests to the certificate Drop all extensions from certificate requests Copy specific extensions from certificate requests to the certificate If you choose to copy specific extensions, you can do the following: Click the Known certificate extensions field, and clear the unrequired extensions from the list.
- Configure additional extensions Optional: You can configure additional custom extensions to include in the certificates issued by the CA pool.
- The following extensions are omitted if a value isn't specified: keyUsage policyIds additionalExtensions maxIssuerPathLength field in the caOptions extension The following extensions default to false if a value isn't specified: isCa field in the caOptions extension Create a certificate template for common scenarios This section provides gcloud commands for creating a certificate template for common use cases.
- Click Next , and then click, Done . gcloud gcloud privateca templates create TEMPLATE ID \ --copy-subject \ --copy-sans \ --identity-cel-expression <expr> \ --predefined-values-file FILE PATH \ --copy-all-requested-extensions \ --copy-extensions-by-oid <1.2.3.4,5.6.7.8> \ --copy-known-extensions <ext1,ext2> Replace the following: TEMPLATE ID : the unique identifier of the certificate template.

