---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.192Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "BillingAccount IAMPolicy support"
feature_slug: "billingaccount-iampolicy-support"
latest_feature_date: "2022-02-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/billingbudgets/billingbudgetsbudget"
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources"
keywords:
  - "billingaccount"
  - "extends"
  - "iampolicy"
  - "resources"
---

# BillingAccount IAMPolicy support

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

IAMPolicy support extends to BillingAccount resources.

## Extended Definition

IAMPolicy support extends to BillingAccount resources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/billingbudgets/billingbudgetsbudget](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/billingbudgets/billingbudgetsbudget)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy)
- [https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources](https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources)

## Supporting Pages

### "Securing access to resources with IAM \_|\_ Config Connector \_|\_ Google\

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources](https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources)
- Source ID: `site-docs-reference`
- Final score: 88
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a file named iampolicymember.yaml with the following content, replacing EMAIL ADDRESS with your Google Cloud account's email address: apiVersion : iam.cnrm.cloud.google.com/v1beta1 kind : IAMPolicyMember metadata : name : iampolicymember-sample spec : resourceRef : apiVersion : pubsub.cnrm.cloud.google.com/v1beta1 kind : PubSubTopic name : pubsubtopic-sample role : roles/pubsub.admin member : "user: EMAIL ADDRESS " Apply the iampolicymember.yaml . kubectl apply -f iampolicymember.yaml --namespace CC NAMESPACE Replace CC NAMESPACE with the namespace Config Connector manages resources from.
- Cleaning up Use kubectl delete to remove the Pub/Sub topic and IAMPolicyMember from your Google Cloud Project. kubectl delete -f iampolicymember.yaml --namespace CC NAMESPACE kubectl delete -f pubsub-topic-sample.yaml --namespace CC NAMESPACE What's next Use Secrets to pass information securely to Google Cloud resources.
- Resources that can reference IAMPolicy and IAMPolicyMember are listed in the Resource reference .
- These resources have the property "Can Be Referenced by IAMPolicy/IAMPolicyMember".

### BillingBudgetsBudget | Config Connector | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/billingbudgets/billingbudgetsbudget](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/billingbudgets/billingbudgetsbudget)
- Source ID: `feature-recovery-http`
- Final score: 88
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Sample YAML(s) Calendar Budget # Copyright 2021 Google LLC # # Licensed under the Apache License, Version 2.0 (the "License"); # you may not use this file except in compliance with the License. # You may obtain a copy of the License at # # http://www.apache.org/licenses/LICENSE-2.0 # # Unless required by applicable law or agreed to in writing, software # distributed under the License is distributed on an "AS IS" BASIS, # WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. # See the License for the specific language governing permissions and # limitations under the License. apiVersion : billingbudgets.cnrm.cloud.google.com/v1beta1 kind : BillingBudgetsBudget metadata : name : billingbudgetsbudget-sample-calendarbudget spec : billingAccountRef : # Replace "${BILLING_ACCOUNT_ID_FOR_BILLING_RESOURCES?}" with the numeric ID for your billing account external : "${BILLING_ACCOUNT_ID_FOR_BILLING_RESOURCES?}" displayName : "sample-budget" budgetFilter : projects : - name : "billingbudgetsbudget-dep-calb" creditTypes : - "DISCOUNT" creditTypesTreatment : "INCLUDE_SPECIFIED_CREDITS" services : # This is the service name for the Geolocation API. - "services/0245-C3C9-3864" labels : label-one : values : - "value-one" calendarPeriod : "MONTH" amount : specifiedAmount : currencyCode : "USD" units : 9000000 nanos : 0 thresholdRules : - thresholdPercent : 0.5 spendBasis : "CURRENT_SPEND" allUpdatesRule : pubsubTopicRef : name : "billingbudgetsbudget-dep-calendarbudget" schemaVersion : "1.0" monitoringNotificationChannels : - name : "billingbudgetsbudget-dep-calendarbudget" disableDefaultIamRecipients : false --- apiVersion : monitoring.cnrm.cloud.google.com/v1beta1 kind : MonitoringNotificationChannel metadata : name : billingbudgetsbudget-dep-calendarbudget spec : labels : email_address : test@example.com type : "email" --- apiVersion : pubsub.cnrm.cloud.google.com/v1beta1 kind : PubSubTopic metadata : name : billingbudgetsbudget-dep-calendarbudget --- apiVersion : resourcemanager.cnrm.cloud.google.com/v1beta1 kind : Project metadata : name : billingbudgetsbudget-dep-calb spec : organizationRef : # Replace "${ORG_ID?}" with the numeric ID for your organization external : "${ORG_ID?}" name : "billingbudgetsbudget-dep-calb" billingAccountRef : # Replace "${BILLING_ACCOUNT_ID_FOR_BILLING_RESOURCES?}" with the numeric ID for your billing account external : "${BILLING_ACCOUNT_ID_FOR_BILLING_RESOURCES?}" Custom Budget # Copyright 2021 Google LLC # # Licensed under the Apache License, Version 2.0 (the "License"); # you may not use this file except in compliance with the License. # You may obtain a copy of the License at # # http://www.apache.org/licenses/LICENSE-2.0 # # Unless required by applicable law or agreed to in writing, software # distributed under the License is distributed on an "AS IS" BASIS, # WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. # See the License for the specific language governing permissions and # limitations under the License. apiVersion : billingbudgets.cnrm.cloud.google.com/v1beta1 kind : BillingBudgetsBudget metadata : name : billingbudgetsbudget-sample-custombudget spec : billingAccountRef : # Replace "${BILLING_ACCOUNT_ID_FOR_BILLING_RESOURCES?}" with the numeric ID for your billing account external : "${BILLING_ACCOUNT_ID_FOR_BILLING_RESOURCES?}" budgetFilter : creditTypes : - "DISCOUNT" creditTypesTreatment : "INCLUDE_SPECIFIED_CREDITS" customPeriod : startDate : year : 2140 month : 1 day : 1 endDate : year : 2312 month : 3 day : 14 amount : specifiedAmount : currencyCode : "USD" units : 9000000 nanos : 0 Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
- BillingBudgetsBudget Property Value Google Cloud Service Name Billing Budgets Google Cloud Service Documentation /billing/docs/ Google Cloud REST Resource Name billingAccounts.budgets Google Cloud REST Resource Documentation /billing/docs/reference/budget/rest/v1beta1/billingAccounts.budgets Config Connector Resource Short Names gcpbillingbudgetsbudget gcpbillingbudgetsbudgets billingbudgetsbudget Config Connector Service Name billingbudgets.googleapis.com Config Connector Resource Fully Qualified Name billingbudgetsbudgets.billingbudgets.cnrm.cloud.google.com Can Be Referenced by IAMPolicy/IAMPolicyMember No Config Connector Default Average Reconcile Interval In Seconds 600 Custom Resource Definition Properties Spec Schema allUpdatesRule : disableDefaultIamRecipients : boolean monitoringNotificationChannels : - external : string name : string namespace : string pubsubTopicRef : external : string name : string namespace : string schemaVersion : string amount : lastPeriodAmount : {} specifiedAmount : currencyCode : string nanos : integer units : integer billingAccountRef : external : string name : string namespace : string budgetFilter : calendarPeriod : string creditTypes : - string creditTypesTreatment : string customPeriod : endDate : day : integer month : integer year : integer startDate : day : integer month : integer year : integer labels : string : object projects : - external : string name : string namespace : string services : - string subaccounts : - external : string name : string namespace : string displayName : string resourceID : string thresholdRules : - spendBasis : string thresholdPercent : float Fields allUpdatesRule Optional object Optional.
- The service names are available through the Catalog API: https://cloud.google.com/billing/v1/how-tos/catalog-api. budgetFilter.services[] Optional string budgetFilter.subaccounts Optional list (object) budgetFilter.subaccounts[] Optional object budgetFilter.subaccounts[].external Optional string budgetFilter.subaccounts[].name Optional string [WARNING] CloudBillingBillingAccount not yet supported in Config Connector, use 'external' field to reference existing resources.
- For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar. billingAccountRef Required object Immutable. billingAccountRef.external Optional string The billing account of the resource Allowed value: The Google Cloud resource name of a Google Cloud Billing Account (format: `billingAccounts/{{name}}`). billingAccountRef.name Optional string [WARNING] BillingAccount not yet supported in Config Connector, use 'external' field to reference existing resources.

### IAMPolicy \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy)
- Source ID: `site-docs-root-2`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- Kind Supports Conditions Supports Audit Configs AccessContextManagerAccessPolicy ApigeeEnvironment ArtifactRegistryRepository BigQueryTable Y BigtableInstance Y BigtableTable Y BillingAccount Y BinaryAuthorizationPolicy Y CloudFunctionsFunction Y ComputeBackendBucket ComputeDisk ComputeImage Y ComputeInstance Y ComputeSnapshot ComputeSubnetwork Y DNSManagedZone DataprocCluster Y Folder Y Y IAMServiceAccount Y IAMWorkforcePool Y KMSCryptoKey Y KMSKeyRing Y NetworkSecurityAuthorizationPolicy Y NetworkSecurityClientTLSPolicy Y NetworkSecurityServerTLSPolicy Y Organization Y Y Project Y Y PubSubSubscription PubSubTopic RunJob RunService SecretManagerSecret ServiceDirectoryNamespace ServiceDirectoryService SourceRepoRepository SpannerDatabase Y SpannerInstance StorageBucket Y Kind External Reference Formats AccessContextManagerAccessPolicy {{name}} ApigeeEnvironment organizations/{{apigee organization}}/environments/{{name}} ArtifactRegistryRepository projects/{{project}}/locations/{{location}}/repositories/{{repository id}} BigQueryTable projects/{{project}}/datasets/{{dataset id}}/tables/{{table id}} BigtableInstance projects/{{project}}/instances/{{name}} BigtableTable projects/{{project}}/instances/{{instance name}}/tables/{{name}} BillingAccount {{billing account id}} BinaryAuthorizationPolicy projects/{{project}}/policy CloudFunctionsFunction projects/{{project}}/locations/{{region}}/functions/{{name}} ComputeBackendBucket projects/{{project}}/global/backendBuckets/{{name}} ComputeDisk projects/{{project}}/regions/{{region}}/disks/{{name}} projects/{{project}}/zones/{{zone}}/disks/{{name}} ComputeImage projects/{{project}}/global/images/{{name}} ComputeInstance projects/{{project}}/zones/{{zone}}/instances/{{name}} ComputeSnapshot projects/{{project}}/global/snapshots/{{name}} ComputeSubnetwork projects/{{project}}/regions/{{region}}/subnetworks/{{name}} DNSManagedZone projects/{{project}}/managedZones/{{name}} DataprocCluster projects/{{project}}/regions/{{location}}/clusters/{{name}} Folder folders/{{folder id}} IAMServiceAccount projects/{{project}}/serviceAccounts/{{account id}}@{{project}}.iam.gserviceaccount.com IAMWorkforcePool locations/{{location}}/workforcePools/{{name}} KMSCryptoKey projects/{{project}}/locations/{{location}}/keyRings/{{key ring id}}/cryptoKeys/{{name}} KMSKeyRing projects/{{project}}/locations/{{location}}/keyRings/{{name}} NetworkSecurityAuthorizationPolicy projects/{{project}}/locations/{{location}}/authorizationPolicies/{{name}} NetworkSecurityClientTLSPolicy projects/{{project}}/locations/{{location}}/clientTlsPolicies/{{name}} NetworkSecurityServerTLSPolicy projects/{{project}}/locations/{{location}}/serverTlsPolicies/{{name}} Organization {{org id}} Project projects/{{project id}} PubSubSubscription projects/{{project}}/subscriptions/{{name}} PubSubTopic projects/{{project}}/topics/{{name}} RunJob projects/{{project}}/locations/{{location}}/jobs/{{name}} RunService projects/{{project}}/locations/{{location}}/services/{{name}} SecretManagerSecret projects/{{project}}/secrets/{{secret id}} ServiceDirectoryNamespace projects/{{project}}/locations/{{location}}/namespaces/{{namespace id}} ServiceDirectoryService {{namespace}}/services/{{service id}} SourceRepoRepository projects/{{project}}/repos/{{name}} SpannerDatabase projects/{{project}}/instances/{{instance}}/databases/{{name}} SpannerInstance projects/{{project}}/instances/{{name}} StorageBucket {{name}} Custom Resource Definition Properties Spec Schema auditConfigs : - auditLogConfigs : - exemptedMembers : - string logType : string service : string bindings : - condition : description : string expression : string title : string members : - string role : string resourceRef : apiVersion : string external : string kind : string name : string namespace : string Fields auditConfigs Optional list (object) Optional.
- Property Value Google Cloud Service Name IAM Google Cloud Service Documentation /iam/docs/ Google Cloud REST Resource Name v1.iamPolicies Google Cloud REST Resource Documentation /iam/reference/rest/v1/iamPolicies Config Connector Resource Short Names gcpiampolicy gcpiampolicies iampolicy Config Connector Service Name iam.googleapis.com Config Connector Resource Fully Qualified Name iampolicies.iam.cnrm.cloud.google.com Can Be Referenced by IAMPolicy/IAMPolicyMember No Config Connector Default Average Reconcile Interval In Seconds 600 Supported Resources You can use IAMPolicy to configure IAM for the following resources.
- You cannot reference BigQueryDataset resources using IAMPolicy , IAMPartialPolicy , and IAMPolicyMember since BigQueryDataset does not support IAM.
- This ensures that the Config Connector service account can continue to manage the referenced project. - "serviceAccount:${GSA EMAIL?}" role : roles/owner - members : - serviceAccount:iampolicy-dep-project@iampolicy-dep-project.iam.gserviceaccount.com role : roles/storage.admin auditConfigs : - service : allServices auditLogConfigs : - logType : DATA WRITE - logType : DATA READ exemptedMembers : - serviceAccount:iampolicy-dep-project@iampolicy-dep-project.iam.gserviceaccount.com - service : compute.googleapis.com auditLogConfigs : - logType : ADMIN READ --- apiVersion : iam.cnrm.cloud.google.com/v1beta1 kind : IAMServiceAccount metadata : annotations : cnrm.cloud.google.com/project-id : iampolicy-dep-project name : iampolicy-dep-project --- apiVersion : resourcemanager.cnrm.cloud.google.com/v1beta1 kind : Project metadata : annotations : cnrm.cloud.google.com/auto-create-network : "false" name : iampolicy-dep-project spec : name : Config Connector Sample organizationRef : Replace "${ORG ID?}" with the numeric ID for your organization external : "${ORG ID?}" PubSub Admin Policy Copyright 2020 Google LLC Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.

