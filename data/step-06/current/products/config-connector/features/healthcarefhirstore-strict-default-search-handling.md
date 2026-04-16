---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.060Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "HealthcareFHIRStore strict default search handling"
feature_slug: "healthcarefhirstore-strict-default-search-handling"
latest_feature_date: "2023-09-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-your-resources"
  - "https://docs.cloud.google.com/config-connector/docs/resources"
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanageraccesslevel"
keywords:
  - "handling"
  - "strict"
  - "search"
  - "healthcarefhirstore"
  - "default"
  - "supports"
---

# HealthcareFHIRStore strict default search handling

Product: Config Connector
Coverage: LOW

## Step 02 Summary

Config Connector supports strict default search handling on HealthcareFHIRStore resources.

## Extended Definition

Config Connector supports strict default search handling on HealthcareFHIRStore resources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-your-resources](https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-your-resources)
- [https://docs.cloud.google.com/config-connector/docs/resources](https://docs.cloud.google.com/config-connector/docs/resources)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanageraccesslevel](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanageraccesslevel)

## Supporting Pages

### Monitoring your resources \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-your-resources](https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-your-resources)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

### Resources \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/resources](https://docs.cloud.google.com/config-connector/docs/resources)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

### "AccessContextManagerAccessLevel \_|\_ Config Connector \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanageraccesslevel](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanageraccesslevel)
- Source ID: `site-docs-root`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- Default value: "AND" Possible values: ["AND", "OR"]. basic.conditions Required list (object) A set of requirements for the AccessLevel to be granted. basic.conditions[] Required object basic.conditions[].devicePolicy Optional object Device specific restrictions, all restrictions must hold for the Condition to be true.
- AccessContextManagerAccessLevel Property Value Google Cloud Service Name AccessContextManager Google Cloud Service Documentation /access-context-manager/docs/ Google Cloud REST Resource Name accesscontextmanager/v1/accessLevels Google Cloud REST Resource Documentation /access-context-manager/docs/reference/rest/v1/accessPolicies.accessLevels Config Connector Resource Short Names gcpaccesscontextmanageraccesslevel gcpaccesscontextmanageraccesslevels accesscontextmanageraccesslevel Config Connector Service Name accesscontextmanager.googleapis.com Config Connector Resource Fully Qualified Name accesscontextmanageraccesslevels.accesscontextmanager.cnrm.cloud.google.com Can Be Referenced by IAMPolicy/IAMPolicyMember No Config Connector Default Average Reconcile Interval In Seconds 600 Custom Resource Definition Properties Spec Schema accessPolicyRef : external : string name : string namespace : string basic : combiningFunction : string conditions : - devicePolicy : allowedDeviceManagementLevels : - string allowedEncryptionStatuses : - string osConstraints : - minimumVersion : string osType : string requireVerifiedChromeOs : boolean requireAdminApproval : boolean requireCorpOwned : boolean requireScreenLock : boolean ipSubnetworks : - string members : - serviceAccountRef : external : string name : string namespace : string user : string negate : boolean regions : - string requiredAccessLevels : - external : string name : string namespace : string custom : expr : description : string expression : string location : string title : string description : string resourceID : string title : string Fields accessPolicyRef Required object The AccessContextManagerAccessPolicy this AccessContextManagerAccessLevel lives in. accessPolicyRef.external Optional string Allowed value: string of the format accessPolicies/{{value}}, where {{value}} is the name field of an AccessContextManagerAccessPolicy resource. accessPolicyRef.name Optional string Name of the referent.
- Defaults to false. basic.conditions[].regions Optional list (string) The request must originate from one of the provided countries/regions.
- Defaults to false. basic.conditions[].ipSubnetworks Optional list (string) A list of CIDR block IP subnetwork specification.

