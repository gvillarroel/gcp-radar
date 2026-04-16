---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.045Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "ValidatingWebhookConfigurationCustomization v1beta1"
feature_slug: "validatingwebhookconfigurationcustomization-v1beta1"
latest_feature_date: "2023-10-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/how-to/customizing-webhook-timeouts"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/install-alpha-crds"
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeter"
keywords:
  - "validatingwebhookconfigurationcustomization"
  - "graduated"
  - "v1beta1"
---

# ValidatingWebhookConfigurationCustomization v1beta1

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

The ValidatingWebhookConfigurationCustomization CRD graduated to v1beta1.

## Extended Definition

The ValidatingWebhookConfigurationCustomization CRD graduated to v1beta1.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-webhook-timeouts](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-webhook-timeouts)
- [https://docs.cloud.google.com/config-connector/docs/how-to/install-alpha-crds](https://docs.cloud.google.com/config-connector/docs/how-to/install-alpha-crds)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeter](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeter)

## Supporting Pages

### Installing Config Connector v1alpha1 CRDs \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/install-alpha-crds](https://docs.cloud.google.com/config-connector/docs/how-to/install-alpha-crds)
- Source ID: `site-docs-reference`
- Final score: 34
- Re-rank relevance: N/A

### Configure webhook timeout \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-webhook-timeouts](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-webhook-timeouts)
- Source ID: `site-docs-reference`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- Create a file named configure-validating-webhook-timeout.yaml and copy the following YAML into it: apiVersion : customize.core.cnrm.cloud.google.com/v1beta1 kind : ValidatingWebhookConfigurationCustomization metadata : name : validating-webhook spec : webhooks : - name : deny-immutable-field-updates timeoutSeconds : 12 - name : deny-unknown-fields timeoutSeconds : 15 Note: when specifying the name of webhook configuration and the names of webhooks in the YAML file, don't include the .cnrm.cloud.google.com suffix.
- Use kubectl apply to apply the webhook timeout customization to your cluster: kubectl apply -f configure-validating-webhook-timeout.yaml Verify the successful configuration by running the following command: kubectl get validatingwebhookconfigurationcustomizations validating-webhook -o jsonpath='{.status.healthy}{"\n"}' It should display status.healthy field set to true .
- Create a file named configure-mutating-webhook-timeout.yaml and copy the following YAML into it: apiVersion : customize.core.cnrm.cloud.google.com/v1beta1 kind : MutatingWebhookConfigurationCustomization metadata : name : mutating-webhook spec : webhooks : - name : container-annotation-handler timeoutSeconds : 20 Note: when specifying the name of webhook configuration and the names of webhooks in the YAML file, don't include the .cnrm.cloud.google.com suffix.

### "AccessContextManagerServicePerimeter \_|\_ Config Connector \_|\_ Google\

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeter](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeter)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- See the License for the specific language governing permissions and limitations under the License. apiVersion : accesscontextmanager.cnrm.cloud.google.com/v1beta1 kind : AccessContextManagerServicePerimeter metadata : name : serviceperimetersample spec : Config for DRY-RUN To use this 'useExplicitDryRunSpec' must be set to 'true' Replace "${ACCESS POLICY NUMBER}" with the numeric ID for your Access Policy Replace "${PROJECT NUMBER}" with the appropriate project number for the project to be protected by the perimeter spec : List of Access Levels to be applied for this perimeter accessLevels : - name : serviceperimeterdep2 List of projects to be included in this perimeter resources : - projectRef : external : "projects/${PROJECT NUMBER1}" - projectRef : external : "projects/${PROJECT NUMBER2}" List of restricted services restrictedServices : - "storage.googleapis.com" List of services that could be accessed from within the perimeter vpcAccessibleServices : allowedServices : - "storage.googleapis.com" - "pubsub.googleapis.com" enableRestriction : true egressPolicies : - egressFrom : identities : - name : serviceperimeterengressdep - egressTo : resources : - projectRef : external : "projects/${PROJECT NUMBER1}" ingressPolicies : - ingressFrom : identities : - name : serviceperimeteringressdep sources : - accessLevelRef : name : serviceperimeterdep2 ingressTo : resources : - projectRef : external : "projects/${PROJECT NUMBER2}" Config to ENFORCE Config items are repeated as above for DRY-RUN Replace "${ACCESS POLICY NUMBER}" with the numeric ID for your Access Policy Replace "${PROJECT NUMBERx}" with the appropriate project number for the project to be protected by the perimeter status : accessLevels : - name : serviceperimeterdep2 resources : - projectRef : external : "projects/${PROJECT NUMBER3}" - projectRef : external : "projects/${PROJECT NUMBER4}" restrictedServices : - "bigquery.googleapis.com" vpcAccessibleServices : allowedServices : - "bigquery.googleapis.com" - "logging.googleapis.com" enableRestriction : true title : Service Perimeter created by Config Connector useExplicitDryRunSpec : true accessPolicyRef : Using an already existing Access Policy.
- Set the appropriate ACCESS POLICY NUMBER external : accessPolicies/${ACCESS POLICY NUMBER} description : A Service Perimeter Created by Config Connector perimeterType : PERIMETER TYPE REGULAR --- apiVersion : accesscontextmanager.cnrm.cloud.google.com/v1beta1 kind : AccessContextManagerAccessLevel metadata : annotations : Replace "${ORG ID?}" with the numeric ID for your organization cnrm.cloud.google.com/organization-id : "${ORG ID}" name : serviceperimeterdep1 spec : accessPolicyRef : Replace "${ACCESS POLICY NUMBER}" with the numeric ID for your Access Policy external : "accessPolicies/${ACCESS POLICY NUMBER}" title : Service Perimeter Dependency ACL1 basic : conditions : - devicePolicy : requireCorpOwned : true --- apiVersion : accesscontextmanager.cnrm.cloud.google.com/v1beta1 kind : AccessContextManagerAccessLevel metadata : annotations : Replace "${ORG ID?}" with the numeric ID for your organization cnrm.cloud.google.com/organization-id : "${ORG ID}" name : serviceperimeterdep2 spec : accessPolicyRef : Replace "${ACCESS POLICY NUMBER}" with the numeric ID for your Access Policy external : "accessPolicies/${ACCESS POLICY NUMBER}" title : Service Perimeter Dependency ACL2 basic : conditions : - devicePolicy : requireCorpOwned : true --- apiVersion : iam.cnrm.cloud.google.com/v1beta1 kind : IAMServiceAccount metadata : annotations : Replace "${ORG ID?}" with the numeric ID for your organization cnrm.cloud.google.com/organization-id : "${ORG ID}" name : serviceperimeterengressdep --- apiVersion : iam.cnrm.cloud.google.com/v1beta1 kind : IAMServiceAccount metadata : annotations : Replace "${ORG ID?}" with the numeric ID for your organization cnrm.cloud.google.com/organization-id : "${ORG ID}" name : serviceperimeteringressdep Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .

