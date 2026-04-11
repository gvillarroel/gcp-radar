---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:16:01.491Z"
product_name: "Certificate Manager"
product_slug: "certificate-manager"
feature_name: "Certificate inventory and detail views"
feature_slug: "certificate-inventory-and-detail-views"
latest_feature_date: "2022-12-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.CertificateManagerAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.CertificateManagerClient"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-certificate-manager/latest/com.google.cloud.certificatemanager.v1.Certificate.ManagedCertificate.AuthorizationAttemptInfo"
keywords:
  - "inventory"
  - "enables"
  - "listing"
  - "detail"
  - "views"
  - "and"
  - "certificate"
  - "manager"
---

# Certificate inventory and detail views

Product: Certificate Manager
Coverage: LOW

## Step 02 Summary

Certificate Manager enables listing certificates in a project and viewing detailed information for each certificate in the Cloud Console.

## Extended Definition

Certificate Manager enables listing certificates in a project and viewing detailed information for each certificate in the Cloud Console.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.CertificateManagerAsyncClient](https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.CertificateManagerAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.CertificateManagerClient](https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.CertificateManagerClient)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-certificate-manager/latest/com.google.cloud.certificatemanager.v1.Certificate.ManagedCertificate.AuthorizationAttemptInfo](https://docs.cloud.google.com/java/docs/reference/google-cloud-certificate-manager/latest/com.google.cloud.certificatemanager.v1.Certificate.ManagedCertificate.AuthorizationAttemptInfo)

## Supporting Pages

### "Class CertificateManagerAsyncClient (1.12.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.CertificateManagerAsyncClient](https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.CertificateManagerAsyncClient)
- Source ID: `site-python-reference`
- Final score: 194
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- CreateCertificateIssuanceConfigRequest ( parent="parent value", certificate issuance config id="certificate issuance config id value", certificate issuance config=certificate issuance config, ) Make the request operation = client. create certificate issuance config (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.certificate manager v1.types.CreateCertificateIssuanceConfigRequest , dict]] The request object.
- CreateCertificateMapEntryRequest ( parent="parent value", certificate map entry id="certificate map entry id value", certificate map entry=certificate map entry, ) Make the request operation = client. create certificate map entry (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.certificate manager v1.types.CreateCertificateMapEntryRequest , dict]] The request object.
- CreateDnsAuthorizationRequest ( parent="parent value", dns authorization id="dns authorization id value", dns authorization=dns authorization, ) Make the request operation = client. create dns authorization (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.certificate manager v1.types.CreateDnsAuthorizationRequest , dict]] The request object.
- CreateCertificateMapRequest ( parent="parent value", certificate map id="certificate map id value", ) Make the request operation = client. create certificate map (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.certificate manager v1.types.CreateCertificateMapRequest , dict]] The request object.

### "Class CertificateManagerClient (1.12.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.CertificateManagerClient](https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.CertificateManagerClient)
- Source ID: `site-python-reference`
- Final score: 194
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- CreateCertificateIssuanceConfigRequest ( parent="parent value", certificate issuance config id="certificate issuance config id value", certificate issuance config=certificate issuance config, ) Make the request operation = client. create certificate issuance config (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.certificate manager v1.types.CreateCertificateIssuanceConfigRequest , dict] The request object.
- CreateCertificateMapEntryRequest ( parent="parent value", certificate map entry id="certificate map entry id value", certificate map entry=certificate map entry, ) Make the request operation = client. create certificate map entry (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.certificate manager v1.types.CreateCertificateMapEntryRequest , dict] The request object.
- CreateDnsAuthorizationRequest ( parent="parent value", dns authorization id="dns authorization id value", dns authorization=dns authorization, ) Make the request operation = client. create dns authorization (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.certificate manager v1.types.CreateDnsAuthorizationRequest , dict] The request object.
- CreateCertificateMapRequest ( parent="parent value", certificate map id="certificate map id value", ) Make the request operation = client. create certificate map (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.certificate manager v1.types.CreateCertificateMapRequest , dict] The request object.

### "Class Certificate.ManagedCertificate.AuthorizationAttemptInfo (0.91.0) \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-certificate-manager/latest/com.google.cloud.certificatemanager.v1.Certificate.ManagedCertificate.AuthorizationAttemptInfo](https://docs.cloud.google.com/java/docs/reference/google-cloud-certificate-manager/latest/com.google.cloud.certificatemanager.v1.Certificate.ManagedCertificate.AuthorizationAttemptInfo)
- Source ID: `site-java-reference`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- Protobuf type google.cloud.certificatemanager.v1.Certificate.ManagedCertificate.AuthorizationAttemptInfo Inheritance Object > AbstractMessageLite<MessageType,BuilderType> > AbstractMessage > GeneratedMessage > Certificate.ManagedCertificate.AuthorizationAttemptInfo Implements Certificate.ManagedCertificate.AuthorizationAttemptInfoOrBuilder Inherited Members AbstractMessage.equals(Object) AbstractMessage.findInitializationErrors() AbstractMessage.getInitializationErrorString() AbstractMessage.hashCode() AbstractMessage.hashFields(int,Map<Descriptors.FieldDescriptor,Object>) AbstractMessage.newBuilderForType(AbstractMessage.BuilderParent) AbstractMessage.toString() AbstractMessageLite.<T>addAll(Iterable<T>,List<? super T>) AbstractMessageLite.checkByteStringIsUtf8(ByteString) AbstractMessageLite.toByteArray() AbstractMessageLite.toByteString() AbstractMessageLite.writeDelimitedTo(OutputStream) AbstractMessageLite.writeTo(OutputStream) com.google.protobuf.GeneratedMessage.<ContainingT,T>newFileScopedGeneratedExtension(java.lang.Class<?>,com.google.protobuf.Message) com.google.protobuf.GeneratedMessage.<ContainingT,T>newMessageScopedGeneratedExtension(com.google.protobuf.Message,int,java.lang.Class<?>,com.google.protobuf.Message) com.google.protobuf.GeneratedMessage.<ListT>makeMutableCopy(ListT) com.google.protobuf.GeneratedMessage.<ListT>makeMutableCopy(ListT,int) GeneratedMessage.<M>parseDelimitedWithIOException(Parser<M>,InputStream) GeneratedMessage.<M>parseDelimitedWithIOException(Parser<M>,InputStream,ExtensionRegistryLite) GeneratedMessage.<M>parseWithIOException(Parser<M>,CodedInputStream) GeneratedMessage.<M>parseWithIOException(Parser<M>,CodedInputStream,ExtensionRegistryLite) GeneratedMessage.<M>parseWithIOException(Parser<M>,InputStream) GeneratedMessage.<M>parseWithIOException(Parser<M>,InputStream,ExtensionRegistryLite) com.google.protobuf.GeneratedMessage.<T>emptyList(java.lang.Class<T>) com.google.protobuf.GeneratedMessage.<V>serializeBooleanMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.Boolean,V>,com.google.protobuf.MapEntry<java.lang.Boolean,V>,int) com.google.protobuf.GeneratedMessage.<V>serializeIntegerMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.Integer,V>,com.google.protobuf.MapEntry<java.lang.Integer,V>,int) com.google.protobuf.GeneratedMessage.<V>serializeLongMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.Long,V>,com.google.protobuf.MapEntry<java.lang.Long,V>,int) com.google.protobuf.GeneratedMessage.<V>serializeStringMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.String,V>,com.google.protobuf.MapEntry<java.lang.String,V>,int) com.google.protobuf.GeneratedMessage.canUseUnsafe() GeneratedMessage.computeStringSize(int,Object) GeneratedMessage.computeStringSizeNoTag(Object) com.google.protobuf.GeneratedMessage.emptyBooleanList() com.google.protobuf.GeneratedMessage.emptyDoubleList() com.google.protobuf.GeneratedMessage.emptyFloatList() com.google.protobuf.GeneratedMessage.emptyIntList() com.google.protobuf.GeneratedMessage.emptyLongList() GeneratedMessage.getAllFields() GeneratedMessage.getDescriptorForType() GeneratedMessage.getField(Descriptors.FieldDescriptor) GeneratedMessage.getOneofFieldDescriptor(Descriptors.OneofDescriptor) GeneratedMessage.getParserForType() GeneratedMessage.getRepeatedField(Descriptors.FieldDescriptor,int) GeneratedMessage.getRepeatedFieldCount(Descriptors.FieldDescriptor) GeneratedMessage.getSerializedSize() GeneratedMessage.getUnknownFields() GeneratedMessage.hasField(Descriptors.FieldDescriptor) GeneratedMessage.hasOneof(Descriptors.OneofDescriptor) GeneratedMessage.internalGetFieldAccessorTable() GeneratedMessage.internalGetMapField(int) com.google.protobuf.GeneratedMessage.internalGetMapFieldReflection(int) GeneratedMessage.isInitialized() com.google.protobuf.GeneratedMessage.isStringEmpty(java.lang.Object) GeneratedMessage.makeExtensionsImmutable() com.google.protobuf.GeneratedMessage.mergeFromAndMakeImmutableInternal(com.google.protobuf.CodedInputStream,com.google.protobuf.ExtensionRegistryLite) com.google.protobuf.GeneratedMessage.newInstance(com.google.protobuf.GeneratedMessage.UnusedPrivateParameter) GeneratedMessage.parseUnknownField(CodedInputStream,UnknownFieldSet.Builder,ExtensionRegistryLite,int) com.google.protobuf.GeneratedMessage.parseUnknownFieldProto3(com.google.protobuf.CodedInputStream,com.google.protobuf.UnknownFieldSet.Builder,com.google.protobuf.ExtensionRegistryLite,int) GeneratedMessage.writeReplace() GeneratedMessage.writeString(CodedOutputStream,int,Object) GeneratedMessage.writeStringNoTag(CodedOutputStream,Object) GeneratedMessage.writeTo(CodedOutputStream) Object.clone() Object.finalize() Object.getClass() Object.notify() Object.notifyAll() Object.wait() Object.wait(long) Object.wait(long,int) Static Fields DETAILS FIELD NUMBER public static final int DETAILS FIELD NUMBER Field Value Type Description int DOMAIN FIELD NUMBER public static final int DOMAIN FIELD NUMBER Field Value Type Description int FAILURE REASON FIELD NUMBER public static final int FAILURE REASON FIELD NUMBER Field Value Type Description int STATE FIELD NUMBER public static final int STATE FIELD NUMBER Field Value Type Description int Static Methods getDefaultInstance() public static Certificate .
- Builder toBuilder () Returns Type Description Certificate.ManagedCertificate.AuthorizationAttemptInfo.Builder writeTo(CodedOutputStream output) public void writeTo ( CodedOutputStream output ) Parameter Name Description output CodedOutputStream Overrides GeneratedMessage.writeTo(CodedOutputStream output) Exceptions Type Description IOException Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For programmatic access use FailureReason enum. string details = 4 [(.google.api.field behavior) = OUTPUT ONLY]; Returns Type Description ByteString The bytes for details. getDomain() public String getDomain () Domain name of the authorization attempt. string domain = 1; Returns Type Description String The domain. getDomainBytes() public ByteString getDomainBytes () Domain name of the authorization attempt. string domain = 1; Returns Type Description ByteString The bytes for domain. getFailureReason() public Certificate .
- State of the domain for managed certificate issuance. .google.cloud.certificatemanager.v1.Certificate.ManagedCertificate.AuthorizationAttemptInfo.State state = 2 [(.google.api.field behavior) = OUTPUT ONLY]; Returns Type Description int The enum numeric value on the wire for state. hashCode() public int hashCode () Returns Type Description int Overrides AbstractMessage.hashCode() internalGetFieldAccessorTable() protected GeneratedMessage .

