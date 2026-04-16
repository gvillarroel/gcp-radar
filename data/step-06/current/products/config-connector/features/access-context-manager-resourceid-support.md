---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.245Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "Access Context Manager resourceID support"
feature_slug: "access-context-manager-resourceid-support"
latest_feature_date: "2021-02-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeter"
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanageraccesslevel"
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanageraccesspolicy"
keywords:
  - "context"
  - "resourceid"
  - "manager"
  - "resources"
  - "access"
  - "field"
---

# Access Context Manager resourceID support

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

Access Context Manager resources support the resourceID field.

## Extended Definition

Access Context Manager resources support the resourceID field.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeter](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeter)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanageraccesslevel](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanageraccesslevel)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanageraccesspolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanageraccesspolicy)

## Supporting Pages

### "AccessContextManagerAccessLevel \_|\_ Config Connector \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanageraccesslevel](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanageraccesslevel)
- Source ID: `site-docs-root`
- Final score: 362
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- AccessContextManagerAccessLevel Property Value Google Cloud Service Name AccessContextManager Google Cloud Service Documentation /access-context-manager/docs/ Google Cloud REST Resource Name accesscontextmanager/v1/accessLevels Google Cloud REST Resource Documentation /access-context-manager/docs/reference/rest/v1/accessPolicies.accessLevels Config Connector Resource Short Names gcpaccesscontextmanageraccesslevel gcpaccesscontextmanageraccesslevels accesscontextmanageraccesslevel Config Connector Service Name accesscontextmanager.googleapis.com Config Connector Resource Fully Qualified Name accesscontextmanageraccesslevels.accesscontextmanager.cnrm.cloud.google.com Can Be Referenced by IAMPolicy/IAMPolicyMember No Config Connector Default Average Reconcile Interval In Seconds 600 Custom Resource Definition Properties Spec Schema accessPolicyRef : external : string name : string namespace : string basic : combiningFunction : string conditions : - devicePolicy : allowedDeviceManagementLevels : - string allowedEncryptionStatuses : - string osConstraints : - minimumVersion : string osType : string requireVerifiedChromeOs : boolean requireAdminApproval : boolean requireCorpOwned : boolean requireScreenLock : boolean ipSubnetworks : - string members : - serviceAccountRef : external : string name : string namespace : string user : string negate : boolean regions : - string requiredAccessLevels : - external : string name : string namespace : string custom : expr : description : string expression : string location : string title : string description : string resourceID : string title : string Fields accessPolicyRef Required object The AccessContextManagerAccessPolicy this AccessContextManagerAccessLevel lives in. accessPolicyRef.external Optional string Allowed value: string of the format accessPolicies/{{value}}, where {{value}} is the name field of an AccessContextManagerAccessPolicy resource. accessPolicyRef.name Optional string Name of the referent.
- All access levels listed must be granted for the condition to be true. basic.conditions[].requiredAccessLevels[].external Optional string Allowed value: The name field of an AccessContextManagerAccessLevel resource. basic.conditions[].requiredAccessLevels[].name Optional string Name of the referent.
- See the License for the specific language governing permissions and limitations under the License. apiVersion : accesscontextmanager.cnrm.cloud.google.com/v1beta1 kind : AccessContextManagerAccessLevel metadata : annotations : Replace "${ORG ID?}" with the numeric ID for your organization cnrm.cloud.google.com/organization-id : "${ORG ID}" name : accesslevelsample spec : accessPolicyRef : name : accessleveldep title : Config Connector Sample Access Level basic : conditions : - devicePolicy : requireCorpOwned : true - devicePolicy : osConstraints : - osType : DESKTOP CHROME OS combiningFunction : OR --- apiVersion : accesscontextmanager.cnrm.cloud.google.com/v1beta1 kind : AccessContextManagerAccessPolicy metadata : annotations : Replace "${ORG ID?}" with the numeric ID for your organization cnrm.cloud.google.com/organization-id : "${ORG ID}" name : accessleveldep spec : title : Config Connector Access Level Dependency Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
- This page details the objects and attributes that are used to the build the CEL expressions for custom access levels - https://cloud.google.com/access-context-manager/docs/custom-access-level-spec. custom.expr.description Optional string Description of the expression. custom.expr.expression Required string Textual representation of an expression in Common Expression Language syntax. custom.expr.location Optional string String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. custom.expr.title Optional string Title for the expression, i.e. a short string describing its purpose. description Optional string Description of the AccessLevel and its use.

### "AccessContextManagerServicePerimeter \_|\_ Config Connector \_|\_ Google\

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeter](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeter)
- Source ID: `site-docs-root`
- Final score: 362
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- AccessContextManagerServicePerimeter Property Value Google Cloud Service Name AccessContextManager Google Cloud Service Documentation /vpc-service-controls/docs/ Google Cloud REST Resource Name accesscontextmanager.v1.accessPolicies.servicePerimeters Google Cloud REST Resource Documentation /access-context-manager/docs/reference/rest/v1/accessPolicies.servicePerimeters Config Connector Resource Short Names gcpaccesscontextmanagerserviceperimeter gcpaccesscontextmanagerserviceperimeters accesscontextmanagerserviceperimeter Config Connector Service Name accesscontextmanager.googleapis.com Config Connector Resource Fully Qualified Name accesscontextmanagerserviceperimeters.accesscontextmanager.cnrm.cloud.google.com Can Be Referenced by IAMPolicy/IAMPolicyMember No Config Connector Default Average Reconcile Interval In Seconds 600 Custom Resource Definition Properties Spec Schema accessPolicyRef : external : string name : string namespace : string description : string perimeterType : string resourceID : string spec : accessLevels : - external : string name : string namespace : string egressPolicies : - egressFrom : identities : - serviceAccountRef : external : string name : string namespace : string user : string identityType : string egressTo : externalResources : - string operations : - methodSelectors : - method : string permission : string serviceName : string resources : - projectRef : external : string name : string namespace : string ingressPolicies : - ingressFrom : identities : - serviceAccountRef : external : string name : string namespace : string user : string identityType : string sources : - accessLevelRef : external : string name : string namespace : string projectRef : external : string name : string namespace : string ingressTo : operations : - methodSelectors : - method : string permission : string serviceName : string resources : - projectRef : external : string name : string namespace : string resources : - projectRef : external : string name : string namespace : string restrictedServices : - string vpcAccessibleServices : allowedServices : - string enableRestriction : boolean status : accessLevels : - external : string name : string namespace : string egressPolicies : - egressFrom : identities : - serviceAccountRef : external : string name : string namespace : string user : string identityType : string egressTo : externalResources : - string operations : - methodSelectors : - method : string permission : string serviceName : string resources : - projectRef : external : string name : string namespace : string ingressPolicies : - ingressFrom : identities : - serviceAccountRef : external : string name : string namespace : string user : string identityType : string sources : - accessLevelRef : external : string name : string namespace : string projectRef : external : string name : string namespace : string ingressTo : operations : - methodSelectors : - method : string permission : string serviceName : string resources : - projectRef : external : string name : string namespace : string resources : - projectRef : external : string name : string namespace : string restrictedServices : - string vpcAccessibleServices : allowedServices : - string enableRestriction : boolean title : string useExplicitDryRunSpec : boolean Fields accessPolicyRef Required object The AccessContextManagerAccessPolicy this AccessContextManagerServicePerimeter lives in. accessPolicyRef.external Optional string Allowed value: string of the format accessPolicies/{{value}}, where {{value}} is the name field of an AccessContextManagerAccessPolicy resource. accessPolicyRef.name Optional string Name of the referent.
- If no AccessLevel names are listed, resources within the perimeter can only be accessed via Google Cloud calls with request origins within the perimeter. spec.ingressPolicies[].ingressFrom.sources[].accessLevelRef.external Optional string Allowed value: string of the format {{parent}}/accessLevels/{{value}}, where {{value}} is the name field of an AccessContextManagerAccessLevel resource. spec.ingressPolicies[].ingressFrom.sources[].accessLevelRef.name Optional string Name of the referent.
- If no AccessLevel names are listed, resources within the perimeter can only be accessed via Google Cloud calls with request origins within the perimeter. ingressPolicies[].ingressFrom.sources[].accessLevelRef.external Optional string Allowed value: string of the format {{parent}}/accessLevels/{{value}}, where {{value}} is the name field of an AccessContextManagerAccessLevel resource. ingressPolicies[].ingressFrom.sources[].accessLevelRef.name Optional string Name of the referent.
- See the License for the specific language governing permissions and limitations under the License. apiVersion : accesscontextmanager.cnrm.cloud.google.com/v1beta1 kind : AccessContextManagerServicePerimeter metadata : name : serviceperimetersample spec : Config for DRY-RUN To use this 'useExplicitDryRunSpec' must be set to 'true' Replace "${ACCESS POLICY NUMBER}" with the numeric ID for your Access Policy Replace "${PROJECT NUMBER}" with the appropriate project number for the project to be protected by the perimeter spec : List of Access Levels to be applied for this perimeter accessLevels : - name : serviceperimeterdep2 List of projects to be included in this perimeter resources : - projectRef : external : "projects/${PROJECT NUMBER1}" - projectRef : external : "projects/${PROJECT NUMBER2}" List of restricted services restrictedServices : - "storage.googleapis.com" List of services that could be accessed from within the perimeter vpcAccessibleServices : allowedServices : - "storage.googleapis.com" - "pubsub.googleapis.com" enableRestriction : true egressPolicies : - egressFrom : identities : - name : serviceperimeterengressdep - egressTo : resources : - projectRef : external : "projects/${PROJECT NUMBER1}" ingressPolicies : - ingressFrom : identities : - name : serviceperimeteringressdep sources : - accessLevelRef : name : serviceperimeterdep2 ingressTo : resources : - projectRef : external : "projects/${PROJECT NUMBER2}" Config to ENFORCE Config items are repeated as above for DRY-RUN Replace "${ACCESS POLICY NUMBER}" with the numeric ID for your Access Policy Replace "${PROJECT NUMBERx}" with the appropriate project number for the project to be protected by the perimeter status : accessLevels : - name : serviceperimeterdep2 resources : - projectRef : external : "projects/${PROJECT NUMBER3}" - projectRef : external : "projects/${PROJECT NUMBER4}" restrictedServices : - "bigquery.googleapis.com" vpcAccessibleServices : allowedServices : - "bigquery.googleapis.com" - "logging.googleapis.com" enableRestriction : true title : Service Perimeter created by Config Connector useExplicitDryRunSpec : true accessPolicyRef : Using an already existing Access Policy.

### "AccessContextManagerAccessPolicy \_|\_ Config Connector \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanageraccesspolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanageraccesspolicy)
- Source ID: `site-docs-root`
- Final score: 354
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- AccessContextManagerAccessPolicy Property Value Google Cloud Service Name AccessContextManager Google Cloud Service Documentation /access-context-manager/docs/ Google Cloud REST Resource Name accesscontextmanager/v1/accessPolicies Google Cloud REST Resource Documentation /access-context-manager/docs/reference/rest/v1/accessPolicies Config Connector Resource Short Names gcpaccesscontextmanageraccesspolicy gcpaccesscontextmanageraccesspolicies accesscontextmanageraccesspolicy Config Connector Service Name accesscontextmanager.googleapis.com Config Connector Resource Fully Qualified Name accesscontextmanageraccesspolicies.accesscontextmanager.cnrm.cloud.google.com Can Be Referenced by IAMPolicy/IAMPolicyMember Yes Supports IAM Conditions No Supports IAM Audit Configs No IAM External Reference Format {{name}} Config Connector Default Average Reconcile Interval In Seconds 600 Custom Resource Definition Properties Annotations Fields cnrm.cloud.google.com/organization-id Spec Schema resourceID : string title : string Fields resourceID Optional string Immutable.
- See the License for the specific language governing permissions and limitations under the License. apiVersion : accesscontextmanager.cnrm.cloud.google.com/v1beta1 kind : AccessContextManagerAccessPolicy metadata : annotations : Replace "${ORG ID?}" with the numeric ID for your organization cnrm.cloud.google.com/organization-id : "${ORG ID}" name : accesspolicysample spec : title : Config Connector Sample Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
- Home Documentation Access and resource management Config Connector API and reference Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Time the AccessPolicy was created in UTC. name string Resource name of the AccessPolicy.

