---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.192Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "Organization IAMPartialPolicy support"
feature_slug: "organization-iampartialpolicy-support"
latest_feature_date: "2022-02-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/organization-scoped-resources"
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/overview"
keywords:
  - "iampartialpolicy"
  - "organization"
  - "extends"
  - "resources"
---

# Organization IAMPartialPolicy support

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

IAMPartialPolicy support extends to Organization resources.

## Extended Definition

IAMPartialPolicy support extends to Organization resources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/organization-scoped-resources](https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/organization-scoped-resources)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy)
- [https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/overview](https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/overview)

## Supporting Pages

### "Organization-scoped resources \_|\_ Config Connector \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/organization-scoped-resources](https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/organization-scoped-resources)
- Source ID: `site-docs-reference`
- Final score: 127
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Here is an example of what a resource's YAML will look like with this annotation in it: apiVersion : foo.cnrm.cloud.google.com/v1beta1 kind : FooBar metadata : annotations : cnrm.cloud.google.com/organization-id : ORGANIZATION ID name : foobarname Annotate namespace configuration You can set a default organization ID for newly-created resources by annotating your Kubernetes namespace.
- Specify organizationRef field Most organization-scoped Config Connector resources support a field named organizationRef in its CRD spec.
- Organization-scoped resources Config Connector can manage your resources at the project, folder, or organization level.
- To annotate the namespace using command line, run the following command: kubectl annotate namespace NAMESPACE NAME cnrm.cloud.google.com/organization-id= ORGANIZATION ID Replace the following: NAMESPACE NAME : your namespace name ORGANIZATION ID : your Google Cloud organization ID Alternatively, you can apply a YAML manifest containing the annotation.

### IAMPartialPolicy \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy)
- Source ID: `site-docs-root-2`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- It will merge with the existing bindings on the project. apiVersion : iam.cnrm.cloud.google.com/v1beta1 kind : IAMPartialPolicy metadata : name : iampartialpolicy-sample-project spec : resourceRef : kind : Project name : iampartialpolicy-dep-project bindings : - role : roles/storage.admin members : - member : serviceAccount:iampartialpolicy-dep-project@iampartialpolicy-dep-project.iam.gserviceaccount.com - role : roles/editor members : - memberFrom : serviceAccountRef : name : iampartialpolicy-dep-project --- apiVersion : iam.cnrm.cloud.google.com/v1beta1 kind : IAMServiceAccount metadata : annotations : cnrm.cloud.google.com/project-id : iampartialpolicy-dep-project name : iampartialpolicy-dep-project --- apiVersion : resourcemanager.cnrm.cloud.google.com/v1beta1 kind : Project metadata : annotations : cnrm.cloud.google.com/auto-create-network : "false" name : iampartialpolicy-dep-project spec : name : Config Connector Sample organizationRef : Replace "${ORG ID?}" with the numeric ID for your organization external : "${ORG ID?}" PubSub Admin IAMPartialPolicy Copyright 2020 Google LLC Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
- Kind Supports Conditions AccessContextManagerAccessPolicy ApigeeEnvironment ArtifactRegistryRepository BigQueryTable Y BigtableInstance Y BigtableTable Y BillingAccount Y BinaryAuthorizationPolicy Y CloudFunctionsFunction Y ComputeBackendBucket ComputeDisk ComputeImage Y ComputeInstance Y ComputeSnapshot ComputeSubnetwork Y DNSManagedZone DataprocCluster Y Folder Y IAMServiceAccount Y IAMWorkforcePool Y KMSCryptoKey Y KMSKeyRing Y NetworkSecurityAuthorizationPolicy Y NetworkSecurityClientTLSPolicy Y NetworkSecurityServerTLSPolicy Y Organization Y Project Y PubSubSubscription PubSubTopic RunJob RunService SecretManagerSecret ServiceDirectoryNamespace ServiceDirectoryService SourceRepoRepository SpannerDatabase Y SpannerInstance StorageBucket Y Kind External Reference Formats AccessContextManagerAccessPolicy {{name}} ApigeeEnvironment organizations/{{apigee organization}}/environments/{{name}} ArtifactRegistryRepository projects/{{project}}/locations/{{location}}/repositories/{{repository id}} BigQueryTable projects/{{project}}/datasets/{{dataset id}}/tables/{{table id}} BigtableInstance projects/{{project}}/instances/{{name}} BigtableTable projects/{{project}}/instances/{{instance name}}/tables/{{name}} BillingAccount {{billing account id}} BinaryAuthorizationPolicy projects/{{project}}/policy CloudFunctionsFunction projects/{{project}}/locations/{{region}}/functions/{{name}} ComputeBackendBucket projects/{{project}}/global/backendBuckets/{{name}} ComputeDisk projects/{{project}}/regions/{{region}}/disks/{{name}} projects/{{project}}/zones/{{zone}}/disks/{{name}} ComputeImage projects/{{project}}/global/images/{{name}} ComputeInstance projects/{{project}}/zones/{{zone}}/instances/{{name}} ComputeSnapshot projects/{{project}}/global/snapshots/{{name}} ComputeSubnetwork projects/{{project}}/regions/{{region}}/subnetworks/{{name}} DNSManagedZone projects/{{project}}/managedZones/{{name}} DataprocCluster projects/{{project}}/regions/{{location}}/clusters/{{name}} Folder folders/{{folder id}} IAMServiceAccount projects/{{project}}/serviceAccounts/{{account id}}@{{project}}.iam.gserviceaccount.com IAMWorkforcePool locations/{{location}}/workforcePools/{{name}} KMSCryptoKey projects/{{project}}/locations/{{location}}/keyRings/{{key ring id}}/cryptoKeys/{{name}} KMSKeyRing projects/{{project}}/locations/{{location}}/keyRings/{{name}} NetworkSecurityAuthorizationPolicy projects/{{project}}/locations/{{location}}/authorizationPolicies/{{name}} NetworkSecurityClientTLSPolicy projects/{{project}}/locations/{{location}}/clientTlsPolicies/{{name}} NetworkSecurityServerTLSPolicy projects/{{project}}/locations/{{location}}/serverTlsPolicies/{{name}} Organization {{org id}} Project projects/{{project id}} PubSubSubscription projects/{{project}}/subscriptions/{{name}} PubSubTopic projects/{{project}}/topics/{{name}} RunJob projects/{{project}}/locations/{{location}}/jobs/{{name}} RunService projects/{{project}}/locations/{{location}}/services/{{name}} SecretManagerSecret projects/{{project}}/secrets/{{secret id}} ServiceDirectoryNamespace projects/{{project}}/locations/{{location}}/namespaces/{{namespace id}} ServiceDirectoryService {{namespace}}/services/{{service id}} SourceRepoRepository projects/{{project}}/repos/{{name}} SpannerDatabase projects/{{project}}/instances/{{instance}}/databases/{{name}} SpannerInstance projects/{{project}}/instances/{{name}} StorageBucket {{name}} Custom Resource Definition Properties Spec Schema bindings : - condition : description : string expression : string title : string members : - member : string memberFrom : bigQueryConnectionConnectionRef : name : string namespace : string type : string logSinkRef : name : string namespace : string serviceAccountRef : name : string namespace : string serviceIdentityRef : name : string namespace : string sqlInstanceRef : name : string namespace : string role : string resourceRef : apiVersion : string external : string kind : string name : string namespace : string Fields bindings Optional list (object) Optional.
- The Google Cloud resource to set the IAM policy on for example organization or project, etc. resourceRef.apiVersion Optional string APIVersion of the referenced resource resourceRef.external Optional string The external name of the referenced resource resourceRef.kind Required string Kind of the referenced resource resourceRef.name Optional string resourceRef.namespace Optional string Field is required when parent field is specified Status Schema allBindings : - condition : description : string expression : string title : string members : - string role : string conditions : - lastTransitionTime : string message : string reason : string status : string type : string lastAppliedBindings : - condition : description : string expression : string title : string members : - string role : string observedGeneration : integer Fields allBindings list (object) AllBindings surfaces all IAM bindings for the referenced resource. allBindings[] object Specifies the members to bind to an IAM role. allBindings[].condition object Optional.
- Property Value Google Cloud Service Name IAM Google Cloud Service Documentation /iam/docs/ Google Cloud REST Resource Name v1.iamPolicies Google Cloud REST Resource Documentation /iam/reference/rest/v1/iamPolicies Config Connector Resource Short Names gcpiampartialpolicy gcpiampartialpolicies iampartialpolicy Config Connector Service Name iam.googleapis.com Config Connector Resource Fully Qualified Name iampartialpolicies.iam.cnrm.cloud.google.com Can Be Referenced by IAMPolicy/IAMPolicyMember No Config Connector Default Average Reconcile Interval In Seconds 600 Supported Resources You can use IAMPartialPolicy to configure IAM for the following resources.

### Organizing your resources \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/overview](https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/overview)
- Source ID: `site-docs-reference`
- Final score: 98
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- What's next See how to apply the following types of scopes: Project-scoped resources Folder-scoped resources Organization-scoped resources Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- There are three types of scope-defining annotations depending on the resource type: cnrm.cloud.google.com/project-id cnrm.cloud.google.com/folder-id cnrm.cloud.google.com/organization-id Most Config Connector resources support scope-defining fields.
- Organizing your resources Overview Config Connector can create and manage Google Cloud resources at the project-level, folder-level, or organization-level scope.
- Depending on the resource type, the schema of the spec may contain at least one of the following fields: projectRef folderRef organizationRef Scope-defining annotation You can define a scope-defining annotation in the resource's configuration or in the Kubernetes namespace which contains the resource.

