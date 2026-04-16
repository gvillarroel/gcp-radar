---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.062Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "WorkstationsWorkstationCluster allowed projects"
feature_slug: "workstationsworkstationcluster-allowed-projects"
latest_feature_date: "2023-09-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources"
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/billingbudgets/billingbudgetsbudget"
keywords:
  - "workstationsworkstationcluster"
  - "projects"
  - "allowed"
  - "configuring"
  - "private"
  - "supports"
---

# WorkstationsWorkstationCluster allowed projects

Product: Config Connector
Coverage: LOW

## Step 02 Summary

Config Connector supports configuring allowed projects in WorkstationsWorkstationCluster private cluster settings.

## Extended Definition

Config Connector supports configuring allowed projects in WorkstationsWorkstationCluster private cluster settings.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance)
- [https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources](https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/billingbudgets/billingbudgetsbudget](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/billingbudgets/billingbudgetsbudget)

## Supporting Pages

### "Securing access to resources with IAM \_|\_ Config Connector \_|\_ Google\

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources](https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources)
- Source ID: `site-docs-reference`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- Confirm the pubsub-topic-service-account is allowed to create PubSubTopic resources by confirming the output of the following command is yes : kubectl auth can-i get pubsubtopics \ --as=system:serviceaccount:default:pubsub-topic-service-account Cleaning up Use kubectl delete to remove the Service Account, IAM Role and Rolebinding. kubectl delete -f pubsub-topic-editor-rolebinding.yaml --namespace CC NAMESPACE kubectl delete -f pubsub-topic-editor-role.yaml --namespace CC NAMESPACE kubectl delete -f pubsub-topic-service-account.yaml --namespace CC NAMESPACE Replace CC NAMESPACE with the namespace Config Connector manages resources from.
- Confirm the policy has been applied to Google Cloud by running this command and looking for your email address in the output, replacing PROJECT ID with your project ID: gcloud beta pubsub topics get-iam-policy projects/ PROJECT ID /topics/pubsubtopic-sample Access to your Pub/Sub topics is now protected with an IAMPolicyMember .

### AlloyDBInstance \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance)
- Source ID: `site-docs-root`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- Property Value Google Cloud Service Name AlloyDB for PostgreSQL Google Cloud Service Documentation /alloydb/docs/ Google Cloud REST Resource Name v1.projects.locations.clusters.instances Google Cloud REST Resource Documentation /alloydb/docs/reference/rest/v1/projects.locations.clusters.instances Config Connector Resource Short Names gcpalloydbinstance gcpalloydbinstances alloydbinstance Config Connector Service Name alloydb.googleapis.com Config Connector Resource Fully Qualified Name alloydbinstances.alloydb.cnrm.cloud.google.com Can Be Referenced by IAMPolicy/IAMPolicyMember No Config Connector Default Average Reconcile Interval In Seconds 600 Custom Resource Definition Properties Spec Schema annotations : string : string availabilityType : string clusterRef : external : string name : string namespace : string connectionPoolConfig : enabled : boolean flags : string : string databaseFlags : string : string displayName : string gceZone : string instanceType : string instanceTypeRef : external : string name : string namespace : string machineConfig : cpuCount : integer machineType : string networkConfig : authorizedExternalNetworks : - cidrRange : string enableOutboundPublicIp : boolean enablePublicIp : boolean observabilityConfig : assistiveExperiencesEnabled : boolean enabled : boolean maxQueryStringLength : integer preserveComments : boolean queryPlansPerMinute : integer recordApplicationTags : boolean trackActiveQueries : boolean trackClientAddress : boolean trackWaitEvents : boolean queryInsightsConfig : queryPlansPerMinute : integer queryStringLength : integer recordApplicationTags : boolean recordClientAddress : boolean readPoolConfig : nodeCount : integer resourceID : string Fields annotations Optional map (key: string, value: string) Annotations to allow client tools to store small amount of arbitrary data.
- Possible values: ["AVAILABILITY TYPE UNSPECIFIED", "ZONAL", "REGIONAL"]. clusterRef Required object The AlloyDBInstance cluster that this resource belongs to. clusterRef.external Optional string If provided must be in the format projects/[projectId]/locations/[location]/clusters/[clusterId]. clusterRef.name Optional string The metadata.name field of a AlloyDBCluster resource. clusterRef.namespace Optional string The metadata.namespace field of a AlloyDBCluster resource. connectionPoolConfig Optional object Configuration for Managed Connection Pool. connectionPoolConfig.enabled Optional boolean Optional.
- This field is only allowed to be set when 'enablePublicIp' is set to true. networkConfig.authorizedExternalNetworks[] Optional object networkConfig.authorizedExternalNetworks[].cidrRange Optional string CIDR range for one authorzied network of the instance. networkConfig.enableOutboundPublicIp Optional boolean Optional.

### BillingBudgetsBudget \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/billingbudgets/billingbudgetsbudget](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/billingbudgets/billingbudgetsbudget)
- Source ID: `site-docs-root-2`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- Default notifications are sent to those with Billing Account Administrator and Billing Account User IAM roles for the target account. allUpdatesRule.monitoringNotificationChannels Optional list (object) allUpdatesRule.monitoringNotificationChannels[] Optional object allUpdatesRule.monitoringNotificationChannels[].external Optional string Allowed value: The Google Cloud resource name of a MonitoringNotificationChannel resource (format: projects/{{project}}/notificationChannels/{{name}}). allUpdatesRule.monitoringNotificationChannels[].name Optional string Name of the referent.
- If omitted, the report will include all labeled and unlabeled usage. budgetFilter.projects Optional list (object) budgetFilter.projects[] Optional object budgetFilter.projects[].external Optional string Allowed value: The Google Cloud resource name of a Project resource (format: projects/{{name}}). budgetFilter.projects[].name Optional string Name of the referent.
- Allowed value: The Google Cloud resource name of a PubSubTopic resource (format: projects/{{project}}/topics/{{name}}). allUpdatesRule.pubsubTopicRef.name Optional string Name of the referent.
- See the License for the specific language governing permissions and limitations under the License. apiVersion : billingbudgets.cnrm.cloud.google.com/v1beta1 kind : BillingBudgetsBudget metadata : name : billingbudgetsbudget-sample-calendarbudget spec : billingAccountRef : Replace "${BILLING ACCOUNT ID FOR BILLING RESOURCES?}" with the numeric ID for your billing account external : "${BILLING ACCOUNT ID FOR BILLING RESOURCES?}" displayName : "sample-budget" budgetFilter : projects : - name : "billingbudgetsbudget-dep-calb" creditTypes : - "DISCOUNT" creditTypesTreatment : "INCLUDE SPECIFIED CREDITS" services : This is the service name for the Geolocation API. - "services/0245-C3C9-3864" labels : label-one : values : - "value-one" calendarPeriod : "MONTH" amount : specifiedAmount : currencyCode : "USD" units : 9000000 nanos : 0 thresholdRules : - thresholdPercent : 0.5 spendBasis : "CURRENT SPEND" allUpdatesRule : pubsubTopicRef : name : "billingbudgetsbudget-dep-calendarbudget" schemaVersion : "1.0" monitoringNotificationChannels : - name : "billingbudgetsbudget-dep-calendarbudget" disableDefaultIamRecipients : false --- apiVersion : monitoring.cnrm.cloud.google.com/v1beta1 kind : MonitoringNotificationChannel metadata : name : billingbudgetsbudget-dep-calendarbudget spec : labels : email address : test@example.com type : "email" --- apiVersion : pubsub.cnrm.cloud.google.com/v1beta1 kind : PubSubTopic metadata : name : billingbudgetsbudget-dep-calendarbudget --- apiVersion : resourcemanager.cnrm.cloud.google.com/v1beta1 kind : Project metadata : name : billingbudgetsbudget-dep-calb spec : organizationRef : Replace "${ORG ID?}" with the numeric ID for your organization external : "${ORG ID?}" name : "billingbudgetsbudget-dep-calb" billingAccountRef : Replace "${BILLING ACCOUNT ID FOR BILLING RESOURCES?}" with the numeric ID for your billing account external : "${BILLING ACCOUNT ID FOR BILLING RESOURCES?}" Custom Budget Copyright 2021 Google LLC Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.

