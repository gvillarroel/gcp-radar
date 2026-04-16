---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:04:10.354Z"
product_name: "Apigee Monetization"
product_slug: "apigee-monetization"
feature_name: "Apigee Monetization Setup Fees"
feature_slug: "apigee-monetization-setup-fees"
latest_feature_date: "2022-11-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/monetization/manage-rate-plans"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/monetization/overview"
  - "https://docs.cloud.google.com/apigee/docs/apihub/quickstart-settings"
keywords:
  - "setup"
  - "optional"
  - "fees"
  - "supports"
---

# Apigee Monetization Setup Fees

Product: Apigee Monetization
Coverage: MEDIUM

## Step 02 Summary

Monetization now supports an optional setup fee that can be charged to new API developers.

## Extended Definition

Monetization now supports an optional setup fee that can be charged to new API developers.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/monetization/manage-rate-plans](https://docs.cloud.google.com/apigee/docs/api-platform/monetization/manage-rate-plans)
- [https://docs.cloud.google.com/apigee/docs/api-platform/monetization/overview](https://docs.cloud.google.com/apigee/docs/api-platform/monetization/overview)
- [https://docs.cloud.google.com/apigee/docs/apihub/quickstart-settings](https://docs.cloud.google.com/apigee/docs/apihub/quickstart-settings)

## Supporting Pages

### Managing rate plans for API products \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/monetization/manage-rate-plans](https://docs.cloud.google.com/apigee/docs/api-platform/monetization/manage-rate-plans)
- Source ID: `site-docs-reference`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- Using rate plans, API product owners can monetize their API products by configuring the following: Billing account model Currency used for billing Frequency at which customers are billed (monthly only) Initial setup fees for using an API product Consumption-based charges for using an API product Any recurring fees not based on consumption, such as monthly fees for access to your API product Time interval during which the rate plan is in effect for an API product (rate plan activation and expiration times) Revenue sharing with developer partners Note: You can associate multiple rate plans with the same API product but only one rate plan can be active at any point of time.
- The following provides an example of the response output, including the two rate plans, myrateplan1 and myrateplan2 associated with HelloworldProduct API product: { "ratePlans": [ { "name": "6b51b501-ac15-41b7-bb3e-621edb849e13", "apiproduct": "HelloworldProduct", "displayName": "myrateplan2", "billingPeriod": "MONTHLY", "currencyCode": "USD", "setupFee": { "currencyCode": "USD", "units": "20" }, "fixedRecurringFee": { "currencyCode": "USD", "units": "25" }, "fixedFeeFrequency": 1, "consumptionPricingType": "FIXED PER UNIT", "consumptionPricingRates": [ { "fee": { "currencyCode": "USD", "nanos": 500000000 } } ], "revenueShareType": "FIXED", "revenueShareRates": [ { "sharePercentage": 2 } ], "state": "DRAFT" }, { "name": "8c0b527c-ba2f-45f1-ac1c-b9e891546fc2", "apiproduct": "HelloworldProduct", "displayName": "myrateplan1", "billingPeriod": "MONTHLY", "currencyCode": "USD", "consumptionPricingType": "FIXED PER UNIT", "consumptionPricingRates": [ { "fee": { "currencyCode": "USD", "units": "3" } } ], "state": "PUBLISHED", "startTime": "1617302588000" } ] } For more information about the API and its response payload, see the List rate plans API Viewing details for a rate plan using the API To view details for a rate plan, issue a GET request to the following API: https://apigee.googleapis.com/v1/organizations/ $ORG /apiproducts/ $APIPRODUCT /rateplans/ $RATEPLAN NAME To determine the name of the rate plan to pass in the resource path, see Listing the rate plans in an organization .
- Required fields for draft rate plan Required fields for published rate plan apiproduct displayName state apiproduct billingPeriod currencyCode displayName startTime state Note: To publish a rate plan, see Publishing a rate plan For example, the following API call creates a draft rate plan named myrateplan5 associated with the HelloworldProduct API product: curl "https://apigee.googleapis.com/v1/organizations/ $ORG /apiproducts/HelloworldProduct/rateplans" \ -X POST \ -H "Authorization: Bearer $TOKEN" \ -H "Content-type: application/json" \ -d '{ "apiproduct":"HelloworldProduct", "billingPeriod":"MONTHLY", "consumptionPricingType":"FIXED PER UNIT", "consumptionPricingRates":[{ "fee":{ "units":"3", "nanos":0 } }], "currencyCode":"USD", "displayName":"myrateplan5", "revenueShareType":"FIXED", "revenueShareRates":[{ "sharePercentage":"1" }], "setupFee":{ "units":"10", "nanos":0 }, "state":"DRAFT" }' Where $TOKEN is set to your OAuth 2.0 access token, as described in Obtaining an OAuth 2.0 access token .
- The following provides an example of the response output for the rate plan with the name 6b51b501-ac15-41b7-bb3e-621edb849e13 and display name myrateplan2 : { "name": "6b51b501-ac15-41b7-bb3e-621edb849e13", "apiproduct": "HelloworldProduct", "displayName": "myrateplan2", "billingPeriod": "MONTHLY", "currencyCode": "USD", "setupFee": { "currencyCode": "USD", "units": "20" }, "fixedRecurringFee": { "currencyCode": "USD", "units": "25" }, "fixedFeeFrequency": 1, "consumptionPricingType": "FIXED PER UNIT", "consumptionPricingRates": [ { "fee": { "currencyCode": "USD", "nanos": 500000000 } } ], "revenueShareType": "FIXED", "revenueShareRates": [ { "sharePercentage": 2 } ], "state": "DRAFT" } For more information about the API and its response payload, see the Get rate plan API .

### Overview of Apigee monetization | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/monetization/overview](https://docs.cloud.google.com/apigee/docs/api-platform/monetization/overview)
- Source ID: `feature-recovery-direct-http`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- When creating a rate plan , you configure the billing currency and frequency, any setup and recurring fees, and the consumption-based fees.
- The setup fee (if any), per-transaction cost, and any recurring fees are deducted from the wallet.
- Obfuscating user data for analytics Logging Logging overview View logs Logging with HTTP proxy forwarding enabled Cassandra logs MART logs Runtime logs Synchronizer logs Audit logging information Metrics collection Metrics collection overview Cluster monitoring guidelines Configuring metrics collection OpenTelemetry collector with HTTP proxy forwarding enabled Viewing metrics Other data collection Pod metrics annotations details Runtime services Runtime service configuration overview Managing runtime plane components Cassandra admin Managing Cassandra persistent volume size Scaling Cassandra pods Storing Cassandra secrets in Hashicorp Vault Rotating Cassandra credentials in Hashicorp Vault Rotating Cassandra credentials in Kubernetes secrets Environments About environments Managing environments Creating environments Deleting environments Configuring virtual hosts Configuring proxy forwarding Generating self-signed TLS certificates Configuring TLS and mTLS on the ingress gateway DNS setup quickstart Synchronizer Apigee connect Configure the MART service account Service accounts About service accounts Service account validation Storing service account keys in Hashicorp Vault Storing service account keys in Kubernetes secrets Ingress gateway Managing Apigee Ingress Migrating to Apigee Ingress Enabling non-SNI clients Obtain TLS credentials: An example Running cert-manager in a custom namespace Enhanced per-environment proxy limits Configure large message payload support Configure target timeout limit Cluster management Configuring Kubernetes network policies Securing the runtime installation Configure Seccomp profiles for pod security Data encryption Enabling Workload Identity for GKE Enabling Workload Identity Federation on AKS and EKS Storing data in a Kubernetes secret Storing data in an external secret manager Multi-region deployments Adding multiple hybrid orgs to a cluster Migrating an org to another cluster Scale and autoscale services Decommission a hybrid region Decommission a hybrid org Use a private image repository with Apigee hybrid Apigee deployment services Rolling updates Using Kubernetes Tolerations Manage process ID limits Cassandra backup and restore Backup overview CSI backup and restore Non-CSI backup and restore Scheduling backups in Cloud Storage Scheduling backups in a remote server Monitoring backups Restoring Cassandra backups Restore overview Restoring in a single region Restoring in multiple regions Viewing restore logs Monetization Enable monetization for Apigee hybrid Reference Configuration property reference Apigee hybrid Helm charts reference apigee-pull-push.sh apigeectl common.sh create-service-account dump_kubernetes.sh Upgrading hybrid v1.15 What is Apigee hybrid?
- Configure hybrid to use the new data pipeline Obfuscating user data for analytics Logging Logging overview View logs Logging with HTTP proxy forwarding enabled Cassandra logs MART logs Runtime logs Synchronizer logs UDCA logs Audit logging information Metrics collection Metrics collection overview Cluster monitoring guidelines Configuring metrics collection OpenTelemetry collector with HTTP proxy forwarding enabled Viewing metrics Other data collection Pod metrics annotations details Runtime services Runtime service configuration overview Managing runtime plane components Cassandra admin Managing Cassandra persistent volume size Scaling Cassandra pods Storing Cassandra secrets in Hashicorp Vault Rotating Cassandra credentials in Hashicorp Vault Rotating Cassandra credentials in Kubernetes secrets Environments About environments Managing environments Creating environments Deleting environments Configuring virtual hosts Configuring proxy forwarding Generating self-signed TLS certificates Configuring TLS and mTLS on the ingress gateway DNS setup quickstart Synchronizer Apigee connect Configure the MART service account Service accounts About service accounts Service account validation Storing service account keys in Hashicorp Vault Ingress gateway Managing Apigee Ingress Migrating to Apigee Ingress Enabling non-SNI clients Obtain TLS credentials: An example Running cert-manager in a custom namespace Enhanced per-environment proxy limits Configure large message payload support Configure target timeout limit Cluster management Configuring Kubernetes network policies Securing the runtime installation Data encryption Enabling Workload Identity on GKE Enabling Workload Identity Federation on AKS and EKS Storing data in a Kubernetes secret Storing data in an external secret manager Multi-region deployments Adding multiple hybrid orgs to a cluster Migrating an org to another cluster Scale and autoscale services Decommission a hybrid region Decommission a hybrid org Use a private image repository with Apigee hybrid Apigee deployment services Rolling updates Using Kubernetes Tolerations Manage process ID limits Cassandra backup and restore Backup overview CSI backup and restore Non-CSI backup and restore Scheduling backups in Cloud Storage Scheduling backups in a remote server Monitoring backups Restoring Cassandra backups Restore overview Restoring in a single region Restoring in multiple regions Viewing restore logs Monetization Enable monetization for Apigee hybrid Reference Configuration property reference Apigee hybrid Helm charts reference apigee-pull-push.sh apigeectl common.sh create-service-account dump_kubernetes.sh Upgrading hybrid Unsupported versions v1.13 What is Apigee hybrid?

### Create and edit attributes \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/quickstart-settings](https://docs.cloud.google.com/apigee/docs/apihub/quickstart-settings)
- Source ID: `site-docs-root`
- Final score: 46
- Re-rank relevance: N/A

