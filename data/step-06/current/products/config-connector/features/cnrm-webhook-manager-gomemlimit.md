---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.089Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "cnrm-webhook-manager GOMEMLIMIT"
feature_slug: "cnrm-webhook-manager-gomemlimit"
latest_feature_date: "2023-08-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources"
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanageraccesslevel"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/install-manually"
keywords:
  - "gomemlimit"
  - "runtime"
  - "adds"
  - "webhook"
  - "manager"
  - "cnrm"
---

# cnrm-webhook-manager GOMEMLIMIT

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

Config Connector adds a GOMEMLIMIT runtime memory limit to the cnrm-webhook-manager webhook container.

## Extended Definition

Config Connector adds a GOMEMLIMIT runtime memory limit to the cnrm-webhook-manager webhook container.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanageraccesslevel](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanageraccesslevel)
- [https://docs.cloud.google.com/config-connector/docs/how-to/install-manually](https://docs.cloud.google.com/config-connector/docs/how-to/install-manually)

## Supporting Pages

### "AccessContextManagerAccessLevel \_|\_ Config Connector \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanageraccesslevel](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanageraccesslevel)
- Source ID: `site-docs-root`
- Final score: 104
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- AccessContextManagerAccessLevel Property Value Google Cloud Service Name AccessContextManager Google Cloud Service Documentation /access-context-manager/docs/ Google Cloud REST Resource Name accesscontextmanager/v1/accessLevels Google Cloud REST Resource Documentation /access-context-manager/docs/reference/rest/v1/accessPolicies.accessLevels Config Connector Resource Short Names gcpaccesscontextmanageraccesslevel gcpaccesscontextmanageraccesslevels accesscontextmanageraccesslevel Config Connector Service Name accesscontextmanager.googleapis.com Config Connector Resource Fully Qualified Name accesscontextmanageraccesslevels.accesscontextmanager.cnrm.cloud.google.com Can Be Referenced by IAMPolicy/IAMPolicyMember No Config Connector Default Average Reconcile Interval In Seconds 600 Custom Resource Definition Properties Spec Schema accessPolicyRef : external : string name : string namespace : string basic : combiningFunction : string conditions : - devicePolicy : allowedDeviceManagementLevels : - string allowedEncryptionStatuses : - string osConstraints : - minimumVersion : string osType : string requireVerifiedChromeOs : boolean requireAdminApproval : boolean requireCorpOwned : boolean requireScreenLock : boolean ipSubnetworks : - string members : - serviceAccountRef : external : string name : string namespace : string user : string negate : boolean regions : - string requiredAccessLevels : - external : string name : string namespace : string custom : expr : description : string expression : string location : string title : string description : string resourceID : string title : string Fields accessPolicyRef Required object The AccessContextManagerAccessPolicy this AccessContextManagerAccessLevel lives in. accessPolicyRef.external Optional string Allowed value: string of the format accessPolicies/{{value}}, where {{value}} is the name field of an AccessContextManagerAccessPolicy resource. accessPolicyRef.name Optional string Name of the referent.
- See the License for the specific language governing permissions and limitations under the License. apiVersion : accesscontextmanager.cnrm.cloud.google.com/v1beta1 kind : AccessContextManagerAccessLevel metadata : annotations : Replace "${ORG ID?}" with the numeric ID for your organization cnrm.cloud.google.com/organization-id : "${ORG ID}" name : accesslevelsample spec : accessPolicyRef : name : accessleveldep title : Config Connector Sample Access Level basic : conditions : - devicePolicy : requireCorpOwned : true - devicePolicy : osConstraints : - osType : DESKTOP CHROME OS combiningFunction : OR --- apiVersion : accesscontextmanager.cnrm.cloud.google.com/v1beta1 kind : AccessContextManagerAccessPolicy metadata : annotations : Replace "${ORG ID?}" with the numeric ID for your organization cnrm.cloud.google.com/organization-id : "${ORG ID}" name : accessleveldep spec : title : Config Connector Access Level Dependency Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
- This page details the objects and attributes that are used to the build the CEL expressions for custom access levels - https://cloud.google.com/access-context-manager/docs/custom-access-level-spec. custom.expr.description Optional string Description of the expression. custom.expr.expression Required string Textual representation of an expression in Common Expression Language syntax. custom.expr.location Optional string String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. custom.expr.title Optional string Title for the expression, i.e. a short string describing its purpose. description Optional string Description of the AccessLevel and its use.
- All access levels listed must be granted for the condition to be true. basic.conditions[].requiredAccessLevels[].external Optional string Allowed value: The name field of an AccessContextManagerAccessLevel resource. basic.conditions[].requiredAccessLevels[].name Optional string Name of the referent.

### "Configure container resources and replicas \_|\_ Config Connector \_|\_\

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources)
- Source ID: `site-docs-reference`
- Final score: 99
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a file named configure-webhook-manager.yaml and copy the following YAML into it: apiVersion : customize.core.cnrm.cloud.google.com/v1beta1 kind : ControllerResource metadata : name : cnrm-webhook-manager spec : replicas : 3 containers : - name : webhook resources : limits : memory : 512Mi requests : memory : 256Mi Use kubectl apply to apply the modified configuration to your cluster: kubectl apply -f configure-webhook-manager.yaml Verify the successful configuration by running the following command. kubectl get controllerresource cnrm-webhook-manager -o jsonpath='{.status.healthy}' It should display status.healthy field set to true .
- For example, to configure the memory request and limit of the webhook container of the cnrm-webhook-manager controller, create and apply the following YAML file: apiVersion : customize.core.cnrm.cloud.google.com/v1beta1 kind : ControllerResource metadata : name : cnrm-webhook-manager spec : containers : - name : webhook resources : limits : memory : 512Mi requests : memory : 256Mi Use NamespacedControllerResource for the namespaced controller manager Use the NamespacedControllerResource custom resource only to configure resources for the cnrm-controller-manager when Config Connector is running in namespaced mode.
- You can configure the following controllers: cnrm-webhook-manager cnrm-controller-manager cnrm-deletiondefender cnrm-resource-stats-recorder cnrm-unmanaged-detector (Config Connector version 1.108 and later) There are two types of custom resources used for configuration: ControllerResource and NamespacedControllerResource .
- The following components are always cluster-scoped, even when Config Connector is installed in namespaced mode: cnrm-webhook-manager cnrm-deletiondefender cnrm-resource-stats-recorder cnrm-unmanaged-detector The cnrm-controller-manager is also cluster-scoped when Config Connector is installed in cluster mode.

### Install Config Connector manually \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/install-manually](https://docs.cloud.google.com/config-connector/docs/how-to/install-manually)
- Source ID: `site-docs-reference`
- Final score: 99
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To create a ConfigConnectorContext , complete the following steps: Create a manifest named configconnectorcontext.yaml with the following content: apiVersion : core.cnrm.cloud.google.com/v1beta1 kind : ConfigConnectorContext metadata : you need one ConfigConnectorContext per namespace name : configconnectorcontext.core.cnrm.cloud.google.com namespace : NAMESPACE spec : googleServiceAccount : " NAMESPACE GSA @ HOST PROJECT ID .iam.gserviceaccount.com" stateIntoSpec : Absent Apply the manifest to your cluster: kubectl apply -f configconnectorcontext.yaml Verify that the Config Connector operator created a Kubernetes service account for your namespace by running the following command: kubectl get serviceaccount/cnrm-controller-manager- NAMESPACE -n cnrm-system Verify that the Config Connector controller Pod is running for your namespace: kubectl wait -n cnrm-system \ --for = condition = Ready pod \ -l cnrm.cloud.google.com/component = cnrm-controller-manager \ -l cnrm.cloud.google.com/scoped-namespace = NAMESPACE If the Config Connector controller is running, the output is similar to: cnrm-controller-manager-abcdefghijk-0 condition met.
- Create an IAM policy binding between the IAM service account and the Config Connector Kubernetes service account: gcloud iam service-accounts add-iam-policy-binding \ NAMESPACE GSA @ HOST PROJECT ID .iam.gserviceaccount.com \ --member = "serviceAccount: HOST PROJECT ID .svc.id.goog[cnrm-system/cnrm-controller-manager- NAMESPACE ]" \ --role = "roles/iam.workloadIdentityUser" Give the IAM service account permissions to publish Prometheus metrics to Google Cloud Observability on your host project: gcloud projects add-iam-policy-binding HOST PROJECT ID \ --member = "serviceAccount: NAMESPACE GSA @ HOST PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/monitoring.metricWriter" Create a ConfigConnectorContext To create Google Cloud resources, configure Config Connector to watch your namespace by adding a ConfigConnectorContext object in that namespace.
- Run the following commands to remove Config Connector system non-CRD components: kubectl delete sts,deploy,po,svc,roles,clusterroles,clusterrolebindings --all-namespaces -l cnrm.cloud.google.com/system = true --wait = true kubectl delete validatingwebhookconfiguration abandon-on-uninstall.cnrm.cloud.google.com --ignore-not-found --wait = true kubectl delete validatingwebhookconfiguration validating-webhook.cnrm.cloud.google.com --ignore-not-found --wait = true kubectl delete mutatingwebhookconfiguration mutating-webhook.cnrm.cloud.google.com --ignore-not-found --wait = true Install Config Connector with the GKE add-on , or the operator .
- Create an IAM policy binding between the IAM service account and the predefined Kubernetes service account that Config Connector runs: gcloud iam service-accounts add-iam-policy-binding \ SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com \ --member = "serviceAccount: PROJECT ID .svc.id.goog[cnrm-system/cnrm-controller-manager]" \ --role = "roles/iam.workloadIdentityUser" Configure Config Connector To complete the installation, create a configuration file for the ConfigConnector CustomResource , then apply it using the kubectl apply command.

