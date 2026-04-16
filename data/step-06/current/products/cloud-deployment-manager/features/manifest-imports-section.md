---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T18:41:06.023Z"
product_name: "Cloud Deployment Manager"
product_slug: "cloud-deployment-manager"
feature_name: "Manifest imports section"
feature_slug: "manifest-imports-section"
latest_feature_date: "2015-07-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deployment-manager/docs/configuration/syntax-reference"
  - "https://docs.cloud.google.com/deployment-manager/docs/configuration/create-basic-configuration"
  - "https://docs.cloud.google.com/deployment-manager/docs/configuration/create-configuration-file"
keywords:
  - "manifest"
  - "imports"
  - "section"
  - "deployment"
  - "manager"
  - "manifests"
  - "include"
  - "explicit"
---

# Manifest imports section

Product: Cloud Deployment Manager
Coverage: MEDIUM

## Step 02 Summary

Deployment Manager manifests include an explicit imports section that lists templates.

## Extended Definition

Deployment Manager manifests include an explicit imports section that lists templates.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deployment-manager/docs/configuration/syntax-reference](https://docs.cloud.google.com/deployment-manager/docs/configuration/syntax-reference)
- [https://docs.cloud.google.com/deployment-manager/docs/configuration/create-basic-configuration](https://docs.cloud.google.com/deployment-manager/docs/configuration/create-basic-configuration)
- [https://docs.cloud.google.com/deployment-manager/docs/configuration/create-configuration-file](https://docs.cloud.google.com/deployment-manager/docs/configuration/create-configuration-file)

## Supporting Pages

### Syntax Reference \_|\_ Cloud Deployment Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deployment-manager/docs/configuration/syntax-reference](https://docs.cloud.google.com/deployment-manager/docs/configuration/syntax-reference)
- Source ID: `site-api-reference`
- Final score: 110
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, if you want to create an instance group manager that uses an instance template from the same deployment, instead of explicitly typing the full link for the instance template, you can use a reference with the syntax $(ref.instance-template.selfLink) .
- When you upload a template with a schema that has a list of imports, Deployment Manager checks that all of the files in the imports property were uploaded along with the template.
- ITEM ) Examples $(ref.exampleInstance.networkInterfaces[0].natIp) $(ref.exampleInstance.serviceAccounts[0].email) Deployment-specific environment variables When you create a deployment, Deployment Manager creates environment variables that contain pieces of information about your deployment, such as the current project name, the deployment's name, and so on.
- If you currently use Deployment Manager, please migrate to Infrastructure Manager or an alternative deployment technology by March 31, 2026 to ensure your services continue without interruption.

### "Creating a Basic Configuration \_|\_ Cloud Deployment Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/deployment-manager/docs/configuration/create-basic-configuration](https://docs.cloud.google.com/deployment-manager/docs/configuration/create-basic-configuration)
- Source ID: `site-docs-reference`
- Final score: 86
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Configuration file structure A configuration file is written in YAML format and has the following structure: imported templates, if applicable imports : path relative to the configuration file - path : path/to/template.jinja name : my-template - path : path/to/another/template.py name : another-template resources : - name : NAME OF RESOURCE type : TYPE OF RESOURCE properties : property-a : value property-b : value ... property-z : value - name : NAME OF RESOURCE type : TYPE OF RESOURCE properties : property-a : value property-b : value ... property-z : value Each of the sections define a different part of the deployment: The imports sections is a list of template files that will be used by the configuration.
- The outputs section allows you to expose data from your templates and configurations as outputs for other templates in the same deployment to consume or as outputs for your end users, while the metadata section lets you use other features, like setting explicit dependencies between resources.
- See the License for the specific language governing permissions and limitations under the License. resources : - name : vm-created-by-deployment-manager type : compute.v1.instance properties : zone : us-central1-a machineType : zones/us-central1-a/machineTypes/n1-standard-1 disks : - deviceName : boot type : PERSISTENT boot : true autoDelete : true initializeParams : sourceImage : projects/debian-cloud/global/images/family/debian-11 networkInterfaces : - network : global/networks/default - name : big-query-dataset type : bigquery.v2.dataset properties : datasetReference : datasetId : example id Supported resource types and properties See the full list of supported Google-managed resources in the Supported Resource Types documentation.
- See the License for the specific language governing permissions and limitations under the License. resources : - name : vm-created-by-deployment-manager type : compute.v1.instance properties : zone : us-central1-a machineType : zones/us-central1-a/machineTypes/n1-standard-1 disks : - deviceName : boot type : PERSISTENT boot : true autoDelete : true initializeParams : sourceImage : projects/debian-cloud/global/images/family/debian-11 networkInterfaces : - network : global/networks/default To determine the properties of a resource, you use the API documentation for the resource: See the request format in the insert or create method for the resource.

### "Creating a Basic Configuration \_|\_ Cloud Deployment Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/deployment-manager/docs/configuration/create-configuration-file](https://docs.cloud.google.com/deployment-manager/docs/configuration/create-configuration-file)
- Source ID: `site-docs-reference-required-4`
- Final score: 86
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Configuration file structure A configuration file is written in YAML format and has the following structure: imported templates, if applicable imports : path relative to the configuration file - path : path/to/template.jinja name : my-template - path : path/to/another/template.py name : another-template resources : - name : NAME OF RESOURCE type : TYPE OF RESOURCE properties : property-a : value property-b : value ... property-z : value - name : NAME OF RESOURCE type : TYPE OF RESOURCE properties : property-a : value property-b : value ... property-z : value Each of the sections define a different part of the deployment: The imports sections is a list of template files that will be used by the configuration.
- The outputs section allows you to expose data from your templates and configurations as outputs for other templates in the same deployment to consume or as outputs for your end users, while the metadata section lets you use other features, like setting explicit dependencies between resources.
- See the License for the specific language governing permissions and limitations under the License. resources : - name : vm-created-by-deployment-manager type : compute.v1.instance properties : zone : us-central1-a machineType : zones/us-central1-a/machineTypes/n1-standard-1 disks : - deviceName : boot type : PERSISTENT boot : true autoDelete : true initializeParams : sourceImage : projects/debian-cloud/global/images/family/debian-11 networkInterfaces : - network : global/networks/default - name : big-query-dataset type : bigquery.v2.dataset properties : datasetReference : datasetId : example id Supported resource types and properties See the full list of supported Google-managed resources in the Supported Resource Types documentation.
- See the License for the specific language governing permissions and limitations under the License. resources : - name : vm-created-by-deployment-manager type : compute.v1.instance properties : zone : us-central1-a machineType : zones/us-central1-a/machineTypes/n1-standard-1 disks : - deviceName : boot type : PERSISTENT boot : true autoDelete : true initializeParams : sourceImage : projects/debian-cloud/global/images/family/debian-11 networkInterfaces : - network : global/networks/default To determine the properties of a resource, you use the API documentation for the resource: See the request format in the insert or create method for the resource.

