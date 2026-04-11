---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:16:01.489Z"
product_name: "Certificate Manager"
product_slug: "certificate-manager"
feature_name: "Regional managed certificate issuance"
feature_slug: "regional-managed-certificate-issuance"
latest_feature_date: "2024-02-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-cas-regional"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-certificate-manager/latest/com.google.cloud.certificatemanager.v1.Certificate.ManagedCertificate.Builder"
  - "https://docs.cloud.google.com/certificate-manager/docs/certificate-manager-best-practices"
keywords:
  - "managed"
  - "issuing"
  - "regional"
  - "issuance"
  - "adds"
  - "certificate"
  - "manager"
  - "for"
---

# Regional managed certificate issuance

Product: Certificate Manager
Coverage: LOW

## Step 02 Summary

Certificate Manager adds support for issuing regional managed certificates.

## Extended Definition

Certificate Manager adds support for issuing regional managed certificates.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-cas-regional](https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-cas-regional)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-certificate-manager/latest/com.google.cloud.certificatemanager.v1.Certificate.ManagedCertificate.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-certificate-manager/latest/com.google.cloud.certificatemanager.v1.Certificate.ManagedCertificate.Builder)
- [https://docs.cloud.google.com/certificate-manager/docs/certificate-manager-best-practices](https://docs.cloud.google.com/certificate-manager/docs/certificate-manager-best-practices)

## Supporting Pages

### "Deploy a regional Google-managed certificate with Certificate Authority\

- URL: [https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-cas-regional](https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-cas-regional)
- Source ID: `site-iam-reference`
- Final score: 222
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The output is similar to the following: createTime: '2021-10-20T12:19:53.370778666Z' expireTime: '2022-05-07T05:03:49Z' managed: domains: - myorg.example.com issuanceConfig: projects/myproject/locations/ LOCATION /issuanceConfigs/myissuanceConfig state: ACTIVE name: projects/myproject/locations/ LOCATION /certificates/mycertificate pemCertificate: -----BEGIN CERTIFICATE----- [...] -----END CERTIFICATE----- sanDnsnames: - myorg.example.com updateTime: '2021-10-20T12:19:55.083385630Z' For more troubleshooting steps, see Troubleshoot Certificate Manager .
- The new certificate appears in the list of certificates. gcloud To create a regional Google-managed certificate with Certificate Authority Service, use the certificate-manager certificates create command with the issuance-config flag: gcloud certificate-manager certificates create CERTIFICATE NAME \ --domains=" DOMAIN NAMES " \ --issuance-config=" ISSUANCE CONFIG NAME " \ --location=" LOCATION " Replace the following: CERTIFICATE NAME : the name of the certificate.
- This tutorial shows you how to use Certificate Manager to deploy a regional Google-managed certificate with Certificate Authority Service to a regional external Application Load Balancer or to a regional internal Application Load Balancer.
- Home Documentation Security Certificate Manager Guides Send feedback Deploy a regional Google-managed certificate with Certificate Authority Service Stay organized with collections Save and categorize content based on your preferences.

### "Class Certificate.ManagedCertificate.Builder (0.91.0) \_|\_ Java client\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-certificate-manager/latest/com.google.cloud.certificatemanager.v1.Certificate.ManagedCertificate.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-certificate-manager/latest/com.google.cloud.certificatemanager.v1.Certificate.ManagedCertificate.Builder)
- Source ID: `site-java-reference`
- Final score: 220
- Re-rank relevance: N/A

Evidence snippets:
- Protobuf type google.cloud.certificatemanager.v1.Certificate.ManagedCertificate Inheritance java.lang.Object > AbstractMessageLite.Builder<MessageType,BuilderType> > AbstractMessage.Builder<BuilderType> > GeneratedMessage.Builder > Certificate.ManagedCertificate.Builder Implements Certificate.ManagedCertificateOrBuilder Inherited Members AbstractMessage.Builder.findInitializationErrors() AbstractMessage.Builder.getInitializationErrorString() AbstractMessage.Builder.internalMergeFrom(AbstractMessageLite) AbstractMessage.Builder.mergeFrom(byte[]) AbstractMessage.Builder.mergeFrom(byte[],ExtensionRegistryLite) AbstractMessage.Builder.mergeFrom(byte[],int,int) AbstractMessage.Builder.mergeFrom(byte[],int,int,ExtensionRegistryLite) AbstractMessage.Builder.mergeFrom(ByteString) AbstractMessage.Builder.mergeFrom(ByteString,ExtensionRegistryLite) AbstractMessage.Builder.mergeFrom(CodedInputStream) AbstractMessage.Builder.mergeFrom(CodedInputStream,ExtensionRegistryLite) AbstractMessage.Builder.mergeFrom(Message) AbstractMessage.Builder.mergeFrom(InputStream) AbstractMessage.Builder.mergeFrom(InputStream,ExtensionRegistryLite) AbstractMessage.Builder.newUninitializedMessageException(Message) AbstractMessage.Builder.toString() AbstractMessageLite.Builder.<T>addAll(Iterable<T>,Collection<? super T>) AbstractMessageLite.Builder.<T>addAll(Iterable<T>,List<? super T>) AbstractMessageLite.Builder.internalMergeFrom(MessageType) AbstractMessageLite.Builder.mergeDelimitedFrom(InputStream) AbstractMessageLite.Builder.mergeDelimitedFrom(InputStream,ExtensionRegistryLite) AbstractMessageLite.Builder.mergeFrom(MessageLite) AbstractMessageLite.Builder.newUninitializedMessageException(MessageLite) GeneratedMessage.Builder.addRepeatedField(Descriptors.FieldDescriptor,Object) GeneratedMessage.Builder.clear() GeneratedMessage.Builder.clearField(Descriptors.FieldDescriptor) GeneratedMessage.Builder.clearOneof(Descriptors.OneofDescriptor) GeneratedMessage.Builder.clone() GeneratedMessage.Builder.getAllFields() GeneratedMessage.Builder.getDescriptorForType() GeneratedMessage.Builder.getField(Descriptors.FieldDescriptor) GeneratedMessage.Builder.getFieldBuilder(Descriptors.FieldDescriptor) GeneratedMessage.Builder.getOneofFieldDescriptor(Descriptors.OneofDescriptor) GeneratedMessage.Builder.getParentForChildren() GeneratedMessage.Builder.getRepeatedField(Descriptors.FieldDescriptor,int) GeneratedMessage.Builder.getRepeatedFieldBuilder(Descriptors.FieldDescriptor,int) GeneratedMessage.Builder.getRepeatedFieldCount(Descriptors.FieldDescriptor) com.google.protobuf.GeneratedMessage.Builder.getUnknownFieldSetBuilder() GeneratedMessage.Builder.getUnknownFields() GeneratedMessage.Builder.hasField(Descriptors.FieldDescriptor) GeneratedMessage.Builder.hasOneof(Descriptors.OneofDescriptor) GeneratedMessage.Builder.internalGetFieldAccessorTable() GeneratedMessage.Builder.internalGetMapField(int) com.google.protobuf.GeneratedMessage.Builder.internalGetMapFieldReflection(int) GeneratedMessage.Builder.internalGetMutableMapField(int) com.google.protobuf.GeneratedMessage.Builder.internalGetMutableMapFieldReflection(int) GeneratedMessage.Builder.isClean() GeneratedMessage.Builder.isInitialized() GeneratedMessage.Builder.markClean() GeneratedMessage.Builder.mergeUnknownFields(UnknownFieldSet) com.google.protobuf.GeneratedMessage.Builder.mergeUnknownLengthDelimitedField(int,com.google.protobuf.ByteString) com.google.protobuf.GeneratedMessage.Builder.mergeUnknownVarintField(int,int) GeneratedMessage.Builder.newBuilderForField(Descriptors.FieldDescriptor) GeneratedMessage.Builder.onBuilt() GeneratedMessage.Builder.onChanged() com.google.protobuf.GeneratedMessage.Builder.parseUnknownField(com.google.protobuf.CodedInputStream,com.google.protobuf.ExtensionRegistryLite,int) GeneratedMessage.Builder.setField(Descriptors.FieldDescriptor,Object) GeneratedMessage.Builder.setRepeatedField(Descriptors.FieldDescriptor,int,Object) com.google.protobuf.GeneratedMessage.Builder.setUnknownFieldSetBuilder(com.google.protobuf.UnknownFieldSet.Builder) GeneratedMessage.Builder.setUnknownFields(UnknownFieldSet) com.google.protobuf.GeneratedMessage.Builder.setUnknownFieldsProto3(com.google.protobuf.UnknownFieldSet) Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.wait() Object.wait(long) Object.wait(long,int) Static Methods getDescriptor() public static final Descriptors .
- Detailed state of the latest authorization attempt for each domain specified for managed certificate resource. repeated .google.cloud.certificatemanager.v1.Certificate.ManagedCertificate.AuthorizationAttemptInfo authorization attempt info = 5 [(.google.api.field behavior) = OUTPUT ONLY]; Parameters Name Description index int value Certificate.ManagedCertificate.AuthorizationAttemptInfo Returns Type Description Certificate.ManagedCertificate.Builder addAuthorizationAttemptInfo(int index, Certificate.ManagedCertificate.AuthorizationAttemptInfo.Builder builderForValue) public Certificate .
- Detailed state of the latest authorization attempt for each domain specified for managed certificate resource. repeated .google.cloud.certificatemanager.v1.Certificate.ManagedCertificate.AuthorizationAttemptInfo authorization attempt info = 5 [(.google.api.field behavior) = OUTPUT ONLY]; Parameters Name Description index int value Certificate.ManagedCertificate.AuthorizationAttemptInfo Returns Type Description Certificate.ManagedCertificate.Builder setAuthorizationAttemptInfo(int index, Certificate.ManagedCertificate.AuthorizationAttemptInfo.Builder builderForValue) public Certificate .
- Detailed state of the latest authorization attempt for each domain specified for managed certificate resource. repeated .google.cloud.certificatemanager.v1.Certificate.ManagedCertificate.AuthorizationAttemptInfo authorization attempt info = 5 [(.google.api.field behavior) = OUTPUT ONLY]; Parameter Name Description builderForValue Certificate.ManagedCertificate.AuthorizationAttemptInfo.Builder Returns Type Description Certificate.ManagedCertificate.Builder addAuthorizationAttemptInfo(int index, Certificate.ManagedCertificate.AuthorizationAttemptInfo value) public Certificate .

### Best practices for Certificate Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/certificate-manager/docs/certificate-manager-best-practices](https://docs.cloud.google.com/certificate-manager/docs/certificate-manager-best-practices)
- Source ID: `site-iam-reference`
- Final score: 220
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This is applicable only for Google-managed certificates from CA Service (private trust-managed certificates), not for self-managed certificates and public-trust Google-managed certificates. name: organizations/ORGANIZATION ID/customConstraints/custom.restrictAlgorithm \ resourceTypes: \ - certificatemanager.googleapis.com/CertificateIssuanceConfig \ methodTypes: \ - CREATE \ - UPDATE \ condition: "resource.keyAlgorithm == 'ECDSA P256'" \ actionType: ALLOW \ displayName: Allow only ECDSA P256 in Certificate Issuance configs \ description: Only ECDSA P256 certificates are allowed from CA Service.
- For Google-managed certificates, we recommend that you manually authorize the following for the best reliability of your certificate issuance and renewal requests: pki.goog letsencrypt.org Cloud Logging, Cloud Monitoring, and visibility The following sections describe the best practices for audit logging and for monitoring certificate usage and expiration.
- Important: Even if you use a regional CA pool that's integrated with Certificate Manager, you can use the CA pool to issue a global Google-managed TLS certificate in any region.
- Configure Certificate Manager to use an issuing CA pool that can issue privately trusted certificates for supported resources.

