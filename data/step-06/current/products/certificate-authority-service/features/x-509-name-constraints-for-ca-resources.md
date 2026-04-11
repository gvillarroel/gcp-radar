---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:13:34.958Z"
product_name: "Certificate Authority Service"
product_slug: "certificate-authority-service"
feature_name: "X.509 name constraints for CA resources"
feature_slug: "x-509-name-constraints-for-ca-resources"
latest_feature_date: "2023-03-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/certificate-authority-service/docs/reference/rest/v1/projects.locations.caPools.certificateAuthorities.certificateRevocationLists"
  - "https://docs.cloud.google.com/certificate-authority-service/docs/reference/rest/v1/projects.locations.caPools.certificateAuthorities.certificateRevocationLists/patch"
  - "https://docs.cloud.google.com/certificate-authority-service/docs/custom-constraints"
keywords:
  - "constraints"
  - "resources"
  - "name"
  - "509"
  - "ca"
  - "for"
  - "certificate"
  - "authority"
---

# X.509 name constraints for CA resources

Product: Certificate Authority Service
Coverage: LOW

## Step 02 Summary

Certificate Authority Service introduced GA support for X.509 name constraints on certificate authorities and CA pools, enforced during certificate issuance.

## Extended Definition

Certificate Authority Service introduced GA support for X.509 name constraints on certificate authorities and CA pools, enforced during certificate issuance.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/certificate-authority-service/docs/reference/rest/v1/projects.locations.caPools.certificateAuthorities.certificateRevocationLists](https://docs.cloud.google.com/certificate-authority-service/docs/reference/rest/v1/projects.locations.caPools.certificateAuthorities.certificateRevocationLists)
- [https://docs.cloud.google.com/certificate-authority-service/docs/reference/rest/v1/projects.locations.caPools.certificateAuthorities.certificateRevocationLists/patch](https://docs.cloud.google.com/certificate-authority-service/docs/reference/rest/v1/projects.locations.caPools.certificateAuthorities.certificateRevocationLists/patch)
- [https://docs.cloud.google.com/certificate-authority-service/docs/custom-constraints](https://docs.cloud.google.com/certificate-authority-service/docs/custom-constraints)

## Supporting Pages

### "REST Resource: projects.locations.caPools.certificateAuthorities.certificateRevocationLists\

- URL: [https://docs.cloud.google.com/certificate-authority-service/docs/reference/rest/v1/projects.locations.caPools.certificateAuthorities.certificateRevocationLists](https://docs.cloud.google.com/certificate-authority-service/docs/reference/rest/v1/projects.locations.caPools.certificateAuthorities.certificateRevocationLists)
- Source ID: `site-api-reference`
- Final score: 300
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "certificate" : string , "hexSerialNumber" : string , "revocationReason" : enum ( RevocationReason ) } Fields certificate string The resource name for the Certificate in the format projects/ /locations/ /caPools/ /certificates/ . hexSerialNumber string The serial number of the Certificate . revocationReason enum ( RevocationReason ) The reason the Certificate was revoked.
- The resource name for this CertificateRevocationList in the format projects/ /locations/ /caPools/ certificateAuthorities/ / certificateRevocationLists/ . sequenceNumber string ( int64 format) Output only.
- Methods get Returns a CertificateRevocationList . getIamPolicy Gets the access control policy for a resource. list Lists CertificateRevocationLists . patch Update a CertificateRevocationList . setIamPolicy Sets the access control policy on the specified resource. testIamPermissions Returns permissions that a caller has on the specified resource.
- JSON representation { "name" : string , "sequenceNumber" : string , "revokedCertificates" : [ { object ( RevokedCertificate ) } ] , "pemCrl" : string , "accessUrl" : string , "state" : enum ( State ) , "createTime" : string , "updateTime" : string , "revisionId" : string , "labels" : { string : string , ... } } Fields name string Identifier.

### "Method: projects.locations.caPools.certificateAuthorities.certificateRevocationLists.patch\

- URL: [https://docs.cloud.google.com/certificate-authority-service/docs/reference/rest/v1/projects.locations.caPools.certificateAuthorities.certificateRevocationLists/patch](https://docs.cloud.google.com/certificate-authority-service/docs/reference/rest/v1/projects.locations.caPools.certificateAuthorities.certificateRevocationLists/patch)
- Source ID: `site-api-reference`
- Final score: 292
- Re-rank relevance: N/A

Evidence snippets:
- The resource name for this CertificateRevocationList in the format projects/ /locations/ /caPools/ certificateAuthorities/ / certificateRevocationLists/ .
- Home Documentation Security Certificate Authority Service Reference Send feedback Method: projects.locations.caPools.certificateAuthorities.certificateRevocationLists.patch Stay organized with collections Save and categorize content based on your preferences.
- HTTP request PATCH https://privateca.googleapis.com/v1/{certificateRevocationList.name=projects/ /locations/ /caPools/ /certificateAuthorities/ /certificateRevocationLists/ } The URL uses gRPC Transcoding syntax.
- Path parameters Parameters certificateRevocationList.name string Identifier.

### "Manage CA Service resources using custom constraints \_|\_ Certificate Authority\

- URL: [https://docs.cloud.google.com/certificate-authority-service/docs/custom-constraints](https://docs.cloud.google.com/certificate-authority-service/docs/custom-constraints)
- Source ID: `site-docs-root`
- Final score: 290
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Resource Field privateca.googleapis.com/CaPool resource.encryptionSpec.cloudKmsKey resource.issuancePolicy.allowedIssuanceModes.allowConfigBasedIssuance resource.issuancePolicy.allowedIssuanceModes.allowCsrBasedIssuance resource.issuancePolicy.allowedKeyTypes.ellipticCurve.signatureAlgorithm resource.issuancePolicy.allowedKeyTypes.rsa.maxModulusSize resource.issuancePolicy.allowedKeyTypes.rsa.minModulusSize resource.issuancePolicy.backdateDuration resource.issuancePolicy.baselineValues.additionalExtensions.critical resource.issuancePolicy.baselineValues.additionalExtensions.objectId.objectIdPath resource.issuancePolicy.baselineValues.additionalExtensions.value resource.issuancePolicy.baselineValues.aiaOcspServers resource.issuancePolicy.baselineValues.caOptions.isCa resource.issuancePolicy.baselineValues.caOptions.maxIssuerPathLength resource.issuancePolicy.baselineValues.keyUsage.baseKeyUsage.certSign resource.issuancePolicy.baselineValues.keyUsage.baseKeyUsage.contentCommitment resource.issuancePolicy.baselineValues.keyUsage.baseKeyUsage.crlSign resource.issuancePolicy.baselineValues.keyUsage.baseKeyUsage.dataEncipherment resource.issuancePolicy.baselineValues.keyUsage.baseKeyUsage.decipherOnly resource.issuancePolicy.baselineValues.keyUsage.baseKeyUsage.digitalSignature resource.issuancePolicy.baselineValues.keyUsage.baseKeyUsage.encipherOnly resource.issuancePolicy.baselineValues.keyUsage.baseKeyUsage.keyAgreement resource.issuancePolicy.baselineValues.keyUsage.baseKeyUsage.keyEncipherment resource.issuancePolicy.baselineValues.keyUsage.extendedKeyUsage.clientAuth resource.issuancePolicy.baselineValues.keyUsage.extendedKeyUsage.codeSigning resource.issuancePolicy.baselineValues.keyUsage.extendedKeyUsage.emailProtection resource.issuancePolicy.baselineValues.keyUsage.extendedKeyUsage.ocspSigning resource.issuancePolicy.baselineValues.keyUsage.extendedKeyUsage.serverAuth resource.issuancePolicy.baselineValues.keyUsage.extendedKeyUsage.timeStamping resource.issuancePolicy.baselineValues.keyUsage.unknownExtendedKeyUsages.objectIdPath resource.issuancePolicy.baselineValues.nameConstraints.critical resource.issuancePolicy.baselineValues.nameConstraints.excludedDnsNames resource.issuancePolicy.baselineValues.nameConstraints.excludedEmailAddresses resource.issuancePolicy.baselineValues.nameConstraints.excludedIpRanges resource.issuancePolicy.baselineValues.nameConstraints.excludedUris resource.issuancePolicy.baselineValues.nameConstraints.permittedDnsNames resource.issuancePolicy.baselineValues.nameConstraints.permittedEmailAddresses resource.issuancePolicy.baselineValues.nameConstraints.permittedIpRanges resource.issuancePolicy.baselineValues.nameConstraints.permittedUris resource.issuancePolicy.baselineValues.policyIds.objectIdPath resource.issuancePolicy.identityConstraints.allowSubjectAltNamesPassthrough resource.issuancePolicy.identityConstraints.allowSubjectPassthrough resource.issuancePolicy.identityConstraints.celExpression resource.issuancePolicy.maximumLifetime resource.issuancePolicy.passthroughExtensions.additionalExtensions.objectIdPath resource.issuancePolicy.passthroughExtensions.knownExtensions resource.name resource.publishingOptions.encodingFormat resource.publishingOptions.publishCaCert resource.publishingOptions.publishCrl resource.tier privateca.googleapis.com/CertificateAuthority resource.config.publicKey.format resource.config.publicKey.key resource.config.subjectConfig.subject.commonName resource.config.subjectConfig.subject.countryCode resource.config.subjectConfig.subject.locality resource.config.subjectConfig.subject.organization resource.config.subjectConfig.subject.organizationalUnit resource.config.subjectConfig.subject.postalCode resource.config.subjectConfig.subject.province resource.config.subjectConfig.subject.rdnSequence.attributes.objectId.objectIdPath resource.config.subjectConfig.subject.rdnSequence.attributes.type resource.config.subjectConfig.subject.rdnSequence.attributes.value resource.config.subjectConfig.subject.streetAddress resource.config.subjectConfig.subjectAltName.customSans.critical resource.config.subjectConfig.subjectAltName.customSans.objectId.objectIdPath resource.config.subjectConfig.subjectAltName.customSans.value resource.config.subjectConfig.subjectAltName.dnsNames resource.config.subjectConfig.subjectAltName.emailAddresses resource.config.subjectConfig.subjectAltName.ipAddresses resource.config.subjectConfig.subjectAltName.uris resource.config.subjectKeyId.keyId resource.config.x509Config.additionalExtensions.critical resource.config.x509Config.additionalExtensions.objectId.objectIdPath resource.config.x509Config.additionalExtensions.value resource.config.x509Config.aiaOcspServers resource.config.x509Config.caOptions.isCa resource.config.x509Config.caOptions.maxIssuerPathLength resource.config.x509Config.keyUsage.baseKeyUsage.certSign resource.config.x509Config.keyUsage.baseKeyUsage.contentCommitment resource.config.x509Config.keyUsage.baseKeyUsage.crlSign resource.config.x509Config.keyUsage.baseKeyUsage.dataEncipherment resource.config.x509Config.keyUsage.baseKeyUsage.decipherOnly resource.config.x509Config.keyUsage.baseKeyUsage.digitalSignature resource.config.x509Config.keyUsage.baseKeyUsage.encipherOnly resource.config.x509Config.keyUsage.baseKeyUsage.keyAgreement resource.config.x509Config.keyUsage.baseKeyUsage.keyEncipherment resource.config.x509Config.keyUsage.extendedKeyUsage.clientAuth resource.config.x509Config.keyUsage.extendedKeyUsage.codeSigning resource.config.x509Config.keyUsage.extendedKeyUsage.emailProtection resource.config.x509Config.keyUsage.extendedKeyUsage.ocspSigning resource.config.x509Config.keyUsage.extendedKeyUsage.serverAuth resource.config.x509Config.keyUsage.extendedKeyUsage.timeStamping resource.config.x509Config.keyUsage.unknownExtendedKeyUsages.objectIdPath resource.config.x509Config.nameConstraints.critical resource.config.x509Config.nameConstraints.excludedDnsNames resource.config.x509Config.nameConstraints.excludedEmailAddresses resource.config.x509Config.nameConstraints.excludedIpRanges resource.config.x509Config.nameConstraints.excludedUris resource.config.x509Config.nameConstraints.permittedDnsNames resource.config.x509Config.nameConstraints.permittedEmailAddresses resource.config.x509Config.nameConstraints.permittedIpRanges resource.config.x509Config.nameConstraints.permittedUris resource.config.x509Config.policyIds.objectIdPath resource.gcsBucket resource.keySpec.algorithm resource.keySpec.cloudKmsKeyVersion resource.lifetime resource.name resource.subordinateConfig.certificateAuthority resource.subordinateConfig.pemIssuerChain.pemCertificates resource.type resource.userDefinedAccessUrls.aiaIssuingCertificateUrls resource.userDefinedAccessUrls.crlAccessUrls privateca.googleapis.com/CertificateTemplate resource.description resource.identityConstraints.allowSubjectAltNamesPassthrough resource.identityConstraints.allowSubjectPassthrough resource.identityConstraints.celExpression resource.maximumLifetime resource.name resource.passthroughExtensions.additionalExtensions.objectIdPath resource.passthroughExtensions.knownExtensions resource.predefinedValues.additionalExtensions.critical resource.predefinedValues.additionalExtensions.objectId.objectIdPath resource.predefinedValues.additionalExtensions.value resource.predefinedValues.aiaOcspServers resource.predefinedValues.caOptions.isCa resource.predefinedValues.caOptions.maxIssuerPathLength resource.predefinedValues.keyUsage.baseKeyUsage.certSign resource.predefinedValues.keyUsage.baseKeyUsage.contentCommitment resource.predefinedValues.keyUsage.baseKeyUsage.crlSign resource.predefinedValues.keyUsage.baseKeyUsage.dataEncipherment resource.predefinedValues.keyUsage.baseKeyUsage.decipherOnly resource.predefinedValues.keyUsage.baseKeyUsage.digitalSignature resource.predefinedValues.keyUsage.baseKeyUsage.encipherOnly resource.predefinedValues.keyUsage.baseKeyUsage.keyAgreement resource.predefinedValues.keyUsage.baseKeyUsage.keyEncipherment resource.predefinedValues.keyUsage.extendedKeyUsage.clientAuth resource.predefinedValues.keyUsage.extendedKeyUsage.codeSigning resource.predefinedValues.keyUsage.extendedKeyUsage.emailProtection resource.predefinedValues.keyUsage.extendedKeyUsage.ocspSigning resource.predefinedValues.keyUsage.extendedKeyUsage.serverAuth resource.predefinedValues.keyUsage.extendedKeyUsage.timeStamping resource.predefinedValues.keyUsage.unknownExtendedKeyUsages.objectIdPath resource.predefinedValues.nameConstraints.critical resource.predefinedValues.nameConstraints.excludedDnsNames resource.predefinedValues.nameConstraints.excludedEmailAddresses resource.predefinedValues.nameConstraints.excludedIpRanges resource.predefinedValues.nameConstraints.excludedUris resource.predefinedValues.nameConstraints.permittedDnsNames resource.predefinedValues.nameConstraints.permittedEmailAddresses resource.predefinedValues.nameConstraints.permittedIpRanges resource.predefinedValues.nameConstraints.permittedUris resource.predefinedValues.policyIds.objectIdPath What's next Learn more about Organization Policy Service .
- Require a specific organization name in the CA subject Ensures all new CAs have a standardized organization field in their subject. name : organizations/ ORGANIZATION ID /customConstraints/custom.casRequireSubjectOrg resourceTypes : - privateca.googleapis.com/CertificateAuthority methodTypes : - CREATE - UPDATE condition : "resource.config.subjectConfig.subject.organization == 'Example Company Inc.'" actionType : ALLOW displayName : Enforce CA Subject Organization description : Requires new CAs to have the specified organization name.
- Description Constraint syntax Enforce specific key algorithms for all CAs Ensures any new Certificate Authority uses one of the allowed key algorithms. name : organizations/ ORGANIZATION ID /customConstraints/custom.casAllowedKeyAlgos resourceTypes : - privateca.googleapis.com/CertificateAuthority methodTypes : - CREATE - UPDATE condition : "resource.keySpec.algorithm in ['EC P256 SHA256', 'RSA PSS 3072 SHA256']" actionType : ALLOW displayName : Restrict CA Key Algorithms description : Only allows specific key algorithms for new CAs.
- Enforce Maximum Certificate Lifetime for CaPools Ensures that CaPools are configured to issue certificates with a maximum lifetime of no more than 30 days. name : organizations/ ORGANIZATION ID /customConstraints/custom.enforceCasMaxLifetime30d resourceTypes : - privateca.googleapis.com/CaPool methodTypes : - CREATE - UPDATE condition : "!has(resource.issuancePolicy.maximumLifetime) duration(resource.issuancePolicy.maximumLifetime) > duration('2592000s')" actionType : DENY displayName : Enforce Max Certificate Lifetime (30 Days) description : Only allows CaPools where the issuancePolicy.maximumLifetime field is set to 30 days (2592000 seconds) or less.

