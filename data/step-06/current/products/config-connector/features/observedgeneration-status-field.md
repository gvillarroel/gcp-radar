---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.233Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "observedGeneration status field"
feature_slug: "observedgeneration-status-field"
latest_feature_date: "2021-04-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeterresource"
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder"
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/billingbudgets/billingbudgetsbudget"
keywords:
  - "observedgeneration"
  - "kstatus"
  - "exposes"
  - "resource"
  - "status"
  - "field"
---

# observedGeneration status field

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

Config Connector exposes the observedGeneration field in resource status for kstatus compatibility.

## Extended Definition

Config Connector exposes the observedGeneration field in resource status for kstatus compatibility.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeterresource](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeterresource)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/billingbudgets/billingbudgetsbudget](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/billingbudgets/billingbudgetsbudget)

## Supporting Pages

### "AccessContextManagerServicePerimeterResource \_|\_ Config Connector \_|\_\

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeterresource](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeterresource)
- Source ID: `site-docs-root`
- Final score: 153
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ Status Schema conditions : - lastTransitionTime : string message : string reason : string status : string type : string observedGeneration : integer Fields conditions list (object) Conditions represent the latest available observation of the resource's current state. conditions[] object conditions[].lastTransitionTime string Last time the condition transitioned from one status to another. conditions[].message string Human-readable message indicating details about last transition. conditions[].reason string Unique, one-word, CamelCase reason for the condition's last transition. conditions[].status string Status is the status of the condition.
- AccessContextManagerServicePerimeterResource Property Value Google Cloud Service Name AccessContextManager Google Cloud Service Documentation /vpc-service-controls/docs/ Google Cloud REST Resource Name accesscontextmanager.v1.accessPolicies.servicePerimeters Google Cloud REST Resource Documentation /access-context-manager/docs/reference/rest/v1/accessPolicies.servicePerimeters Config Connector Resource Short Names gcpaccesscontextmanagerserviceperimeterresource gcpaccesscontextmanagerserviceperimeterresources accesscontextmanagerserviceperimeterresource Config Connector Service Name accesscontextmanager.googleapis.com Config Connector Resource Fully Qualified Name accesscontextmanagerserviceperimeterresources.accesscontextmanager.cnrm.cloud.google.com Can Be Referenced by IAMPolicy/IAMPolicyMember No Config Connector Default Average Reconcile Interval In Seconds 600 Custom Resource Definition Properties Spec Schema perimeterNameRef : external : string name : string namespace : string resourceRef : external : string name : string namespace : string Fields perimeterNameRef Required object Only the external field is supported to configure the reference.
- More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ resourceRef Required object A GCP resource that is inside of the service perimeter. resourceRef.external Optional string Allowed value: string of the format projects/{{value}}, where {{value}} is the number field of a Project resource. resourceRef.name Optional string Name of the referent.
- Referencing a resource name leads to recursive reference and Config Connector does not support the feature for now. perimeterNameRef.external Optional string Allowed value: The name field of an AccessContextManagerServicePerimeter resource. perimeterNameRef.name Optional string Name of the referent.

### Folder \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder)
- Source ID: `site-docs-root-2`
- Final score: 133
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Status Schema conditions : - lastTransitionTime : string message : string reason : string status : string type : string createTime : string folderId : string lifecycleState : string name : string observedGeneration : integer Fields conditions list (object) Conditions represent the latest available observation of the resource's current state. conditions[] object conditions[].lastTransitionTime string Last time the condition transitioned from one status to another. conditions[].message string Human-readable message indicating details about last transition. conditions[].reason string Unique, one-word, CamelCase reason for the condition's last transition. conditions[].status string Status is the status of the condition.
- Property Value Google Cloud Service Name Cloud Resource Manager Google Cloud Service Documentation /resource-manager/docs/ Google Cloud REST Resource Name v2.folders Google Cloud REST Resource Documentation /resource-manager/reference/rest/v2/folders Config Connector Resource Short Names gcpfolder gcpfolders folder Config Connector Service Name cloudresourcemanager.googleapis.com Config Connector Resource Fully Qualified Name folders.resourcemanager.cnrm.cloud.google.com Can Be Referenced by IAMPolicy/IAMPolicyMember Yes Supports IAM Conditions Yes Supports IAM Audit Configs Yes IAM External Reference Format folders/{{folder id}} Config Connector Default Average Reconcile Interval In Seconds 600 Custom Resource Definition Properties Spec Schema displayName : string folderRef : external : string name : string namespace : string organizationRef : external : string name : string namespace : string resourceID : string Fields displayName Required string The folder's display name.
- Only one of folderRef or organizationRef may be specified. organizationRef.external Optional string Allowed value: The name field of an Organization resource. organizationRef.name Optional string Name of the referent.
- Only one of folderRef or organizationRef may be specified. folderRef.external Optional string Allowed value: The folderId field of a Folder resource. folderRef.name Optional string Name of the referent.

### BillingBudgetsBudget \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/billingbudgets/billingbudgetsbudget](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/billingbudgets/billingbudgetsbudget)
- Source ID: `site-docs-root-2`
- Final score: 129
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Field is required when parent field is specified Status Schema conditions : - lastTransitionTime : string message : string reason : string status : string type : string etag : string observedGeneration : integer Fields conditions list (object) Conditions represent the latest available observation of the resource's current state. conditions[] object conditions[].lastTransitionTime string Last time the condition transitioned from one status to another. conditions[].message string Human-readable message indicating details about last transition. conditions[].reason string Unique, one-word, CamelCase reason for the condition's last transition. conditions[].status string Status is the status of the condition.
- BillingBudgetsBudget Property Value Google Cloud Service Name Billing Budgets Google Cloud Service Documentation /billing/docs/ Google Cloud REST Resource Name billingAccounts.budgets Google Cloud REST Resource Documentation /billing/docs/reference/budget/rest/v1beta1/billingAccounts.budgets Config Connector Resource Short Names gcpbillingbudgetsbudget gcpbillingbudgetsbudgets billingbudgetsbudget Config Connector Service Name billingbudgets.googleapis.com Config Connector Resource Fully Qualified Name billingbudgetsbudgets.billingbudgets.cnrm.cloud.google.com Can Be Referenced by IAMPolicy/IAMPolicyMember No Config Connector Default Average Reconcile Interval In Seconds 600 Custom Resource Definition Properties Spec Schema allUpdatesRule : disableDefaultIamRecipients : boolean monitoringNotificationChannels : - external : string name : string namespace : string pubsubTopicRef : external : string name : string namespace : string schemaVersion : string amount : lastPeriodAmount : {} specifiedAmount : currencyCode : string nanos : integer units : integer billingAccountRef : external : string name : string namespace : string budgetFilter : calendarPeriod : string creditTypes : - string creditTypesTreatment : string customPeriod : endDate : day : integer month : integer year : integer startDate : day : integer month : integer year : integer labels : string : object projects : - external : string name : string namespace : string services : - string subaccounts : - external : string name : string namespace : string displayName : string resourceID : string thresholdRules : - spendBasis : string thresholdPercent : float Fields allUpdatesRule Optional object Optional.
- The service names are available through the Catalog API: https://cloud.google.com/billing/v1/how-tos/catalog-api. budgetFilter.services[] Optional string budgetFilter.subaccounts Optional list (object) budgetFilter.subaccounts[] Optional object budgetFilter.subaccounts[].external Optional string budgetFilter.subaccounts[].name Optional string [WARNING] CloudBillingBillingAccount not yet supported in Config Connector, use 'external' field to reference existing resources.
- For example if currencyCode is "USD", then 1 unit is one US dollar. billingAccountRef Required object Immutable. billingAccountRef.external Optional string The billing account of the resource Allowed value: The Google Cloud resource name of a Google Cloud Billing Account (format: billingAccounts/{{name}}). billingAccountRef.name Optional string [WARNING] BillingAccount not yet supported in Config Connector, use 'external' field to reference existing resources.

