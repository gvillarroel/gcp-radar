---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.014Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "disable-dependent-services annotation"
feature_slug: "disable-dependent-services-annotation"
latest_feature_date: "2026-01-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember"
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy"
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamauditconfig"
keywords:
  - "disable"
  - "dependent"
  - "annotation"
  - "cnrm"
  - "added"
---

# disable-dependent-services annotation

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

Config Connector added support for the iam.cnrm.cloud.google.com/disable-dependent-services annotation.

## Extended Definition

Config Connector added support for the iam.cnrm.cloud.google.com/disable-dependent-services annotation.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamauditconfig](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamauditconfig)

## Supporting Pages

### IAMPolicyMember \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember)
- Source ID: `site-docs-root-2`
- Final score: 242
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Replace ${PROJECT ID?} and ${ORG ID?} below with your desired project and organization IDs respectively. apiVersion : iam.cnrm.cloud.google.com/v1beta1 kind : IAMPolicyMember metadata : name : iampolicymember-sample-orgrole spec : member : serviceAccount:iampolicymember-dep-orgrole@${PROJECT ID?}.iam.gserviceaccount.com role : organizations/${ORG ID?}/roles/iampolicymemberdeporgrole resourceRef : kind : Project external : projects/${PROJECT ID?} --- apiVersion : iam.cnrm.cloud.google.com/v1beta1 kind : IAMCustomRole metadata : annotations : Replace "${ORG ID?}" with your organization ID cnrm.cloud.google.com/organization-id : "${ORG ID?}" name : iampolicymemberdeporgrole spec : title : Example Organization-Level Custom Role description : This role only contains two permissions - publish and update permissions : - pubsub.topics.publish - pubsub.topics.update stage : GA --- Replace ${PROJECT ID?} below with your desired project ID. apiVersion : iam.cnrm.cloud.google.com/v1beta1 kind : IAMServiceAccount metadata : annotations : cnrm.cloud.google.com/project-id : ${PROJECT ID?} name : iampolicymember-dep-orgrole Policy Member With BigQueryConnectionConnection Reference Copyright 2024 Google LLC Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
- Replace ${PROJECT ID?} below with your desired project ID. apiVersion : iam.cnrm.cloud.google.com/v1beta1 kind : IAMPolicyMember metadata : name : iampolicymember-sample-condition spec : member : serviceAccount:iampolicymember-dep-condition@${PROJECT ID?}.iam.gserviceaccount.com role : roles/cloudkms.admin condition : title : expires after 2019 12 31 description : Expires at midnight of 2019-12-31 expression : request.time < timestamp("2020-01-01T00:00:00Z") resourceRef : kind : KMSKeyRing name : iampolicymember-dep-condition --- Replace ${PROJECT ID?} below with your desired project ID. apiVersion : iam.cnrm.cloud.google.com/v1beta1 kind : IAMServiceAccount metadata : annotations : cnrm.cloud.google.com/project-id : ${PROJECT ID?} name : iampolicymember-dep-condition --- apiVersion : kms.cnrm.cloud.google.com/v1beta1 kind : KMSKeyRing metadata : name : iampolicymember-dep-condition spec : location : us-central1 Org Level IAM Custom Role Policy Member Copyright 2020 Google LLC Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
- Replace ${PROJECT ID?} and ${ORG ID?} below with your desired project and organization IDs respectively. apiVersion : iam.cnrm.cloud.google.com/v1beta1 kind : IAMPolicyMember metadata : name : iampolicymember-sample-orglevel spec : member : serviceAccount:iampolicymember-dep-orglevel@${PROJECT ID?}.iam.gserviceaccount.com role : roles/storage.admin resourceRef : kind : Organization external : "${ORG ID?}" --- Replace ${PROJECT ID?} below with your desired project ID. apiVersion : iam.cnrm.cloud.google.com/v1beta1 kind : IAMServiceAccount metadata : annotations : cnrm.cloud.google.com/project-id : ${PROJECT ID?} name : iampolicymember-dep-orglevel External Project Level Policy Member Copyright 2020 Google LLC Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
- Replace ${PROJECT ID?} below with your desired project ID. apiVersion : iam.cnrm.cloud.google.com/v1beta1 kind : IAMPolicyMember metadata : name : iampolicymember-sample-pubsubadmin spec : member : serviceAccount:iampolicymember-dep-pubsub@${PROJECT ID?}.iam.gserviceaccount.com role : roles/editor resourceRef : kind : PubSubTopic name : iampolicymember-dep-pubsubadmin --- Replace ${PROJECT ID?} below with your desired project ID. apiVersion : iam.cnrm.cloud.google.com/v1beta1 kind : IAMServiceAccount metadata : annotations : cnrm.cloud.google.com/project-id : ${PROJECT ID?} name : iampolicymember-dep-pubsub --- apiVersion : pubsub.cnrm.cloud.google.com/v1beta1 kind : PubSubTopic metadata : name : iampolicymember-dep-pubsubadmin Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .

### IAMPolicy \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy)
- Source ID: `site-docs-root-2`
- Final score: 232
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This ensures that the Config Connector service account can continue to manage the referenced project. - "serviceAccount:${GSA EMAIL?}" role : roles/owner - members : - serviceAccount:iampolicy-dep-project@iampolicy-dep-project.iam.gserviceaccount.com role : roles/storage.admin auditConfigs : - service : allServices auditLogConfigs : - logType : DATA WRITE - logType : DATA READ exemptedMembers : - serviceAccount:iampolicy-dep-project@iampolicy-dep-project.iam.gserviceaccount.com - service : compute.googleapis.com auditLogConfigs : - logType : ADMIN READ --- apiVersion : iam.cnrm.cloud.google.com/v1beta1 kind : IAMServiceAccount metadata : annotations : cnrm.cloud.google.com/project-id : iampolicy-dep-project name : iampolicy-dep-project --- apiVersion : resourcemanager.cnrm.cloud.google.com/v1beta1 kind : Project metadata : annotations : cnrm.cloud.google.com/auto-create-network : "false" name : iampolicy-dep-project spec : name : Config Connector Sample organizationRef : Replace "${ORG ID?}" with the numeric ID for your organization external : "${ORG ID?}" PubSub Admin Policy Copyright 2020 Google LLC Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
- This ensures that the Config Connector service account can continue to manage the referenced project. - "serviceAccount:${GSA EMAIL?}" role : roles/owner - members : - serviceAccount:iampolicy-dep-external-project@iampolicy-dep-external-project.iam.gserviceaccount.com role : roles/storage.admin --- apiVersion : iam.cnrm.cloud.google.com/v1beta1 kind : IAMServiceAccount metadata : annotations : cnrm.cloud.google.com/project-id : iampolicy-dep-external-project name : iampolicy-dep-external-project --- Creates a Project resource to demonstrate how an IAMPolicy can reference a Project using external. apiVersion : resourcemanager.cnrm.cloud.google.com/v1beta1 kind : Project metadata : annotations : cnrm.cloud.google.com/auto-create-network : "false" name : iampolicy-dep-external-project spec : name : Config Connector Sample organizationRef : Replace "${ORG ID?}" with the numeric ID for your organization external : "${ORG ID?}" KMS Policy With Condition Copyright 2020 Google LLC Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
- See the License for the specific language governing permissions and limitations under the License. apiVersion : iam.cnrm.cloud.google.com/v1beta1 kind : IAMPolicy metadata : name : iampolicy-sample-workloadidentity spec : resourceRef : kind : IAMServiceAccount name : iampolicy-dep-workloadidentity bindings : - role : roles/iam.workloadIdentityUser members : replace ${PROJECT ID} with your project name - serviceAccount:${PROJECT ID?}.svc.id.goog[default/iampolicy-dep-workloadidentity] --- apiVersion : iam.cnrm.cloud.google.com/v1beta1 kind : IAMServiceAccount metadata : name : iampolicy-dep-workloadidentity spec : displayName : Example Service Account --- apiVersion : v1 kind : ServiceAccount metadata : name : iampolicy-dep-workloadidentity annotations : replace ${PROJECT ID?} with your project name iam.gke.io/gcp-service-account : iampolicy-dep-workloadidentity@${PROJECT ID?}.iam.gserviceaccount.com Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
- See the License for the specific language governing permissions and limitations under the License. apiVersion : iam.cnrm.cloud.google.com/v1beta1 kind : IAMPolicy metadata : labels : label-one : value-one name : iampolicy-sample-condition spec : resourceRef : kind : KMSKeyRing name : iampolicy-dep-condition bindings : - role : roles/cloudkms.admin condition : title : expires after 2019 12 31 description : Expires at midnight of 2019-12-31 expression : request.time < timestamp("2020-01-01T00:00:00Z") members : replace ${PROJECT ID?} with your project name - serviceAccount:iampolicy-dep-condition@${PROJECT ID?}.iam.gserviceaccount.com --- apiVersion : iam.cnrm.cloud.google.com/v1beta1 kind : IAMServiceAccount metadata : name : iampolicy-dep-condition --- apiVersion : kms.cnrm.cloud.google.com/v1beta1 kind : KMSKeyRing metadata : name : iampolicy-dep-condition spec : location : us-central1 Project Level Policy Copyright 2020 Google LLC Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.

### IAMAuditConfig \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamauditconfig](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamauditconfig)
- Source ID: `site-docs-root-2`
- Final score: 148
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Replace ${PROJECT ID?} and ${ORG ID?} below with your desired project and organization IDs respectively. apiVersion : iam.cnrm.cloud.google.com/v1beta1 kind : IAMAuditConfig metadata : name : iamauditconfig-sample-orglevel spec : service : allServices auditLogConfigs : - logType : DATA WRITE - logType : DATA READ exemptedMembers : - serviceAccount:iamauditconfig-dep-orglevel@${PROJECT ID?}.iam.gserviceaccount.com resourceRef : kind : Organization external : "${ORG ID?}" --- Replace ${PROJECT ID?} below with your desired project ID. apiVersion : iam.cnrm.cloud.google.com/v1beta1 kind : IAMServiceAccount metadata : annotations : cnrm.cloud.google.com/project-id : ${PROJECT ID?} name : iamauditconfig-dep-orglevel Project Level Audit Config Copyright 2020 Google LLC Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
- Replace ${PROJECT ID?} below with your desired project ID. apiVersion : iam.cnrm.cloud.google.com/v1beta1 kind : IAMAuditConfig metadata : name : iamauditconfig-sample-projlevel spec : service : allServices auditLogConfigs : - logType : DATA WRITE - logType : DATA READ exemptedMembers : - serviceAccount:iamauditconfig-dep-projlevel@${PROJECT ID?}.iam.gserviceaccount.com resourceRef : kind : Project external : projects/${PROJECT ID?} --- Replace ${PROJECT ID?} below with your desired project ID. apiVersion : iam.cnrm.cloud.google.com/v1beta1 kind : IAMServiceAccount metadata : annotations : cnrm.cloud.google.com/project-id : ${PROJECT ID?} name : iamauditconfig-dep-projlevel Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
- Property Value Google Cloud Service Name IAM Google Cloud Service Documentation /iam/docs/ Google Cloud REST Resource Name v1.iamPolicies Google Cloud REST Resource Documentation /iam/reference/rest/v1/iamPolicies Config Connector Resource Short Names gcpiamauditconfig gcpiamauditconfigs iamauditconfig Config Connector Service Name iam.googleapis.com Config Connector Resource Fully Qualified Name iamauditconfigs.iam.cnrm.cloud.google.com Can Be Referenced by IAMPolicy/IAMPolicyMember No Config Connector Default Average Reconcile Interval In Seconds 600 Supported Resources You can use IAMAuditConfig to configure Data Access audit logging for the following resources.
- Sample YAML(s) External Organization Level Audit Config Copyright 2020 Google LLC Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.

