---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T06:18:40.385Z"
product_name: "Dataform"
product_slug: "dataform"
feature_name: "Public repository access"
feature_slug: "public-repository-access"
latest_feature_date: "2024-03-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataform/docs/access-control"
  - "https://docs.cloud.google.com/dataform/docs/connect-repository"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataform/latest/com.google.cloud.dataform.v1.CommitRepositoryChangesRequest.Builder"
keywords:
  - "public"
  - "repository"
  - "access"
  - "lets"
  - "all"
  - "authenticated"
  - "users"
  - "dataform"
---

# Public repository access

Product: Dataform
Coverage: LOW

## Step 02 Summary

Public repository access lets all authenticated users access a Dataform repository.

## Extended Definition

Public repository access lets all authenticated users access a Dataform repository.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control)
- [https://docs.cloud.google.com/dataform/docs/connect-repository](https://docs.cloud.google.com/dataform/docs/connect-repository)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataform/latest/com.google.cloud.dataform.v1.CommitRepositoryChangesRequest.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataform/latest/com.google.cloud.dataform.v1.CommitRepositoryChangesRequest.Builder)

## Supporting Pages

### Control access with IAM \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control)
- Source ID: `site-docs-root-2`
- Final score: 214
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following command passes the repositories.setIamPolicy Dataform API request that grants the Dataform Viewer role on the sales repository to allAuthenticatedUsers : curl -H "Content-Type: application/json" -X POST -d '{ "policy": { "bindings": [{ "role": "roles/dataform.viewer", "members": ["allAuthenticatedUsers"]}] }}' "https://dataform.googleapis.com/v1/projects/examplepetstore/locations/us-central1/repositories/sales:setIamPolicy" Prevent public access to repositories To ensure that no access is granted to the public on any Dataform repository, you can restrict the allAuthenticatedUsers principal in your project.
- The following command passes the repositories.setIamPolicy Dataform API request that grants the Dataform Editor role on the sales repository to a single user: curl -H "Content-Type: application/json" -X POST -d '{ "policy": { "bindings": [{ "role": "roles/dataform.editor", "members": ["user:sasha@examplepetstore.com"]}] }}' "https://dataform.googleapis.com/v1/projects/examplepetstore/locations/us-central1/repositories/sales:setIamPolicy" Grant public access to a repository You can grant public access to a Dataform repository by granting IAM roles on the repository to the allAuthenticatedUsers principal.
- For example, when you grant the Dataform Viewer role to allAuthenticatedUsers on the sales repository, all service agents, service accounts, and users on the internet who have authenticated with a Google Account have read-only access to all sales code resources.
- When you restrict allAuthenticatedUsers in the iam.allowedPolicyMemberDomains policy, the allAuthenticatedUsers principal can't be used in any IAM policy in your project, which prevents granting public access to all resources, including Dataform repositories.

### "Connect to a third-party Git repository \_|\_ Dataform \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataform/docs/connect-repository](https://docs.cloud.google.com/dataform/docs/connect-repository)
- Source ID: `site-docs-root-2`
- Final score: 174
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Connecting a remote Git repository to a Dataform repository can fail if the remote repository isn't open to the public internet, for example, if it's behind a firewall.
- Warning: The access token is shared among all Dataform users who use the corresponding service agent or service account.
- The following table lists supported Git providers and connection methods that are available for their repositories: Git provider Connection method Azure DevOps Services SSH Bitbucket SSH GitHub SSH or HTTPS GitLab SSH or HTTPS Important: To connect your remote Git repository to Dataform, verify that your Git host has a public IP address .
- Before you begin If your organization or project restricts remote Git repositories with the dataform.restrictGitRemotes Organization Policy, ensure that the remote Git repository is added to the allowlist in the policy before you create the Dataform repository that you want to connect to a remote repository.

### "Class CommitRepositoryChangesRequest.Builder (0.87.0) \_|\_ Java client\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataform/latest/com.google.cloud.dataform.v1.CommitRepositoryChangesRequest.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataform/latest/com.google.cloud.dataform.v1.CommitRepositoryChangesRequest.Builder)
- Source ID: `site-java-reference`
- Final score: 148
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Protobuf type google.cloud.dataform.v1.CommitRepositoryChangesRequest Inheritance java.lang.Object > AbstractMessageLite.Builder<MessageType,BuilderType> > AbstractMessage.Builder<BuilderType> > GeneratedMessage.Builder > CommitRepositoryChangesRequest.Builder Implements CommitRepositoryChangesRequestOrBuilder Inherited Members AbstractMessage.Builder.findInitializationErrors() AbstractMessage.Builder.getInitializationErrorString() AbstractMessage.Builder.internalMergeFrom(AbstractMessageLite) AbstractMessage.Builder.mergeFrom(byte[]) AbstractMessage.Builder.mergeFrom(byte[],ExtensionRegistryLite) AbstractMessage.Builder.mergeFrom(byte[],int,int) AbstractMessage.Builder.mergeFrom(byte[],int,int,ExtensionRegistryLite) AbstractMessage.Builder.mergeFrom(ByteString) AbstractMessage.Builder.mergeFrom(ByteString,ExtensionRegistryLite) AbstractMessage.Builder.mergeFrom(CodedInputStream) AbstractMessage.Builder.mergeFrom(CodedInputStream,ExtensionRegistryLite) AbstractMessage.Builder.mergeFrom(Message) AbstractMessage.Builder.mergeFrom(InputStream) AbstractMessage.Builder.mergeFrom(InputStream,ExtensionRegistryLite) AbstractMessage.Builder.newUninitializedMessageException(Message) AbstractMessage.Builder.toString() AbstractMessageLite.Builder.<T>addAll(Iterable<T>,Collection<? super T>) AbstractMessageLite.Builder.<T>addAll(Iterable<T>,List<? super T>) AbstractMessageLite.Builder.internalMergeFrom(MessageType) AbstractMessageLite.Builder.mergeDelimitedFrom(InputStream) AbstractMessageLite.Builder.mergeDelimitedFrom(InputStream,ExtensionRegistryLite) AbstractMessageLite.Builder.mergeFrom(MessageLite) AbstractMessageLite.Builder.newUninitializedMessageException(MessageLite) GeneratedMessage.Builder.addRepeatedField(Descriptors.FieldDescriptor,Object) GeneratedMessage.Builder.clear() GeneratedMessage.Builder.clearField(Descriptors.FieldDescriptor) GeneratedMessage.Builder.clearOneof(Descriptors.OneofDescriptor) GeneratedMessage.Builder.clone() GeneratedMessage.Builder.getAllFields() GeneratedMessage.Builder.getDescriptorForType() GeneratedMessage.Builder.getField(Descriptors.FieldDescriptor) GeneratedMessage.Builder.getFieldBuilder(Descriptors.FieldDescriptor) GeneratedMessage.Builder.getOneofFieldDescriptor(Descriptors.OneofDescriptor) GeneratedMessage.Builder.getParentForChildren() GeneratedMessage.Builder.getRepeatedField(Descriptors.FieldDescriptor,int) GeneratedMessage.Builder.getRepeatedFieldBuilder(Descriptors.FieldDescriptor,int) GeneratedMessage.Builder.getRepeatedFieldCount(Descriptors.FieldDescriptor) com.google.protobuf.GeneratedMessage.Builder.getUnknownFieldSetBuilder() GeneratedMessage.Builder.getUnknownFields() GeneratedMessage.Builder.hasField(Descriptors.FieldDescriptor) GeneratedMessage.Builder.hasOneof(Descriptors.OneofDescriptor) GeneratedMessage.Builder.internalGetFieldAccessorTable() GeneratedMessage.Builder.internalGetMapField(int) com.google.protobuf.GeneratedMessage.Builder.internalGetMapFieldReflection(int) GeneratedMessage.Builder.internalGetMutableMapField(int) com.google.protobuf.GeneratedMessage.Builder.internalGetMutableMapFieldReflection(int) GeneratedMessage.Builder.isClean() GeneratedMessage.Builder.isInitialized() GeneratedMessage.Builder.markClean() GeneratedMessage.Builder.mergeUnknownFields(UnknownFieldSet) com.google.protobuf.GeneratedMessage.Builder.mergeUnknownLengthDelimitedField(int,com.google.protobuf.ByteString) com.google.protobuf.GeneratedMessage.Builder.mergeUnknownVarintField(int,int) GeneratedMessage.Builder.newBuilderForField(Descriptors.FieldDescriptor) GeneratedMessage.Builder.onBuilt() GeneratedMessage.Builder.onChanged() com.google.protobuf.GeneratedMessage.Builder.parseUnknownField(com.google.protobuf.CodedInputStream,com.google.protobuf.ExtensionRegistryLite,int) GeneratedMessage.Builder.setField(Descriptors.FieldDescriptor,Object) GeneratedMessage.Builder.setRepeatedField(Descriptors.FieldDescriptor,int,Object) com.google.protobuf.GeneratedMessage.Builder.setUnknownFieldSetBuilder(com.google.protobuf.UnknownFieldSet.Builder) GeneratedMessage.Builder.setUnknownFields(UnknownFieldSet) com.google.protobuf.GeneratedMessage.Builder.setUnknownFieldsProto3(com.google.protobuf.UnknownFieldSet) Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.wait() Object.wait(long) Object.wait(long,int) Static Methods getDescriptor() public static final Descriptors .
- FieldAccessorTable internalGetFieldAccessorTable () Returns Type Description FieldAccessorTable Overrides GeneratedMessage.Builder<BuilderType>.internalGetFieldAccessorTable() internalGetMapFieldReflection(int number) protected MapFieldReflectionAccessor internalGetMapFieldReflection ( int number ) Parameter Name Description number int Returns Type Description com.google.protobuf.MapFieldReflectionAccessor Overrides com.google.protobuf.GeneratedMessage.Builder.internalGetMapFieldReflection(int) internalGetMutableMapFieldReflection(int number) protected MapFieldReflectionAccessor internalGetMutableMapFieldReflection ( int number ) Parameter Name Description number int Returns Type Description com.google.protobuf.MapFieldReflectionAccessor Overrides com.google.protobuf.GeneratedMessage.Builder.internalGetMutableMapFieldReflection(int) isInitialized() public final boolean isInitialized () Returns Type Description boolean Overrides GeneratedMessage.Builder<BuilderType>.isInitialized() mergeCommitMetadata(CommitMetadata value) public CommitRepositoryChangesRequest .
- The path is the full file path including filename, from repository root. map<string, .google.cloud.dataform.v1.CommitRepositoryChangesRequest.FileOperation> file operations = 3 [(.google.api.field behavior) = OPTIONAL]; Parameter Name Description values Map < String , FileOperation > Returns Type Description CommitRepositoryChangesRequest.Builder putFileOperations(String key, CommitRepositoryChangesRequest.FileOperation value) public CommitRepositoryChangesRequest .
- The path is the full file path including filename, from repository root. map<string, .google.cloud.dataform.v1.CommitRepositoryChangesRequest.FileOperation> file operations = 3 [(.google.api.field behavior) = OPTIONAL]; Parameters Name Description key String defaultValue CommitRepositoryChangesRequest.FileOperation Returns Type Description CommitRepositoryChangesRequest.FileOperation getFileOperationsOrThrow(String key) public CommitRepositoryChangesRequest .

