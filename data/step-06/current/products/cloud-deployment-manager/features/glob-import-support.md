---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T18:41:05.960Z"
product_name: "Cloud Deployment Manager"
product_slug: "cloud-deployment-manager"
feature_name: "Glob import support"
feature_slug: "glob-import-support"
latest_feature_date: "2018-08-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/import-python-libraries"
  - "https://docs.cloud.google.com/deployment-manager/docs/configuration/adding-templates"
  - "https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-basic-template"
keywords:
  - "glob"
  - "import"
  - "deployment"
  - "manager"
  - "supports"
  - "importing"
  - "templates"
  - "wildcard"
---

# Glob import support

Product: Cloud Deployment Manager
Coverage: MEDIUM

## Step 02 Summary

Deployment Manager supports importing templates with wildcard paths in gcloud.

## Extended Definition

Deployment Manager supports importing templates with wildcard paths in gcloud.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/import-python-libraries](https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/import-python-libraries)
- [https://docs.cloud.google.com/deployment-manager/docs/configuration/adding-templates](https://docs.cloud.google.com/deployment-manager/docs/configuration/adding-templates)
- [https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-basic-template](https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-basic-template)

## Supporting Pages

### "Importing Python Libraries \_|\_ Cloud Deployment Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/import-python-libraries](https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/import-python-libraries)
- Source ID: `site-docs-root-2`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Infrastructure as code Cloud Deployment Manager Guides Send feedback Importing Python Libraries Stay organized with collections Save and categorize content based on your preferences.
- Supported libraries Deployment Manager supports specific Python libraries that you can use in your templates.
- Deployment Manager uploads and runs the Python code in your templates in a secure environment.
- If you currently use Deployment Manager, please migrate to Infrastructure Manager or an alternative deployment technology by March 31, 2026 to ensure your services continue without interruption.

### "Creating a Basic Template \_|\_ Cloud Deployment Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-basic-template](https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-basic-template)
- Source ID: `site-docs-reference-2`
- Final score: 110
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, if you create a file named resource type.txt with the following string: compute.v1.instance Import it into your configuration and provide the content inline like so: imports : - path : resource type.txt resources : - name : my-vm type : {{ imports [ "resource type.txt" ] }} # Resolves to "compute.v1.instance" properties : zone : us-central1-a machineType : zones/us-central1-a/machineTypes/f1-micro disks : - deviceName : boot type : PERSISTENT boot : true autoDelete : true initializeParams : sourceImage : projects/debian-cloud/global/images/family/debian-9 networkInterfaces : - network : global/networks/default accessConfigs : - name : External NAT type : ONE TO ONE NAT Deploying templates Once you import a template, use it as a type in your configuration: Jinja imports : - path : vm-template.jinja resources : - name : my-vm type : vm-template.jinja Python imports : - path : vm-template.py resources : - name : my-vm type : vm-template.py If you did not provide a name for your template, call the template using the template path: imports : - path : path / to / my vm template . jinja resources : - name : my - first - virtual - machine type : path / to / my vm template . jinja Deploying templates directly with the command-line tool Instead of creating a top-level configuration file, Deployment Manager offers the ability to deploy a template directly in the Google Cloud CLI.
- See the License for the specific language governing permissions and limitations under the License. resources : - name : vm-created-by-deployment-manager type : compute.v1.instance properties : zone : us-central1-a machineType : zones/us-central1-a/machineTypes/n1-standard-1 disks : - deviceName : boot type : PERSISTENT boot : true autoDelete : true initializeParams : sourceImage : projects/debian-cloud/global/images/family/debian-11 networkInterfaces : - network : global/networks/default This configuration is valid, but you can further simplify the configuration by breaking different parts as individual template files that you can reuse.
- Example resources . append ({ 'name' : 'vm-template' , 'type' : 'compute.v1.instance' , 'properties' : { 'zone' : 'us-central1-a' , 'machineType' : 'zones/us-central1-a/machineTypes/n1-standard-1' , 'disks' : [{ 'deviceName' : 'boot' , 'type' : 'PERSISTENT' , 'boot' : True , 'autoDelete' : True , 'initializeParams' : { 'sourceImage' : 'projects/debian-cloud/global/images/family/debian-11' } }], 'networkInterfaces' : [{ 'network' : 'global/networks/default' }] } }) For the full Python example, see the Deployment Manager GitHub repository .
- For examples of templates that you can use in your own deployments, see the Deployment Manager GitHub repository .

### "Creating a Basic Template \_|\_ Cloud Deployment Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/deployment-manager/docs/configuration/adding-templates](https://docs.cloud.google.com/deployment-manager/docs/configuration/adding-templates)
- Source ID: `site-docs-reference-required-5`
- Final score: 110
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, if you create a file named resource type.txt with the following string: compute.v1.instance Import it into your configuration and provide the content inline like so: imports : - path : resource type.txt resources : - name : my-vm type : {{ imports [ "resource type.txt" ] }} # Resolves to "compute.v1.instance" properties : zone : us-central1-a machineType : zones/us-central1-a/machineTypes/f1-micro disks : - deviceName : boot type : PERSISTENT boot : true autoDelete : true initializeParams : sourceImage : projects/debian-cloud/global/images/family/debian-9 networkInterfaces : - network : global/networks/default accessConfigs : - name : External NAT type : ONE TO ONE NAT Deploying templates Once you import a template, use it as a type in your configuration: Jinja imports : - path : vm-template.jinja resources : - name : my-vm type : vm-template.jinja Python imports : - path : vm-template.py resources : - name : my-vm type : vm-template.py If you did not provide a name for your template, call the template using the template path: imports : - path : path / to / my vm template . jinja resources : - name : my - first - virtual - machine type : path / to / my vm template . jinja Deploying templates directly with the command-line tool Instead of creating a top-level configuration file, Deployment Manager offers the ability to deploy a template directly in the Google Cloud CLI.
- See the License for the specific language governing permissions and limitations under the License. resources : - name : vm-created-by-deployment-manager type : compute.v1.instance properties : zone : us-central1-a machineType : zones/us-central1-a/machineTypes/n1-standard-1 disks : - deviceName : boot type : PERSISTENT boot : true autoDelete : true initializeParams : sourceImage : projects/debian-cloud/global/images/family/debian-11 networkInterfaces : - network : global/networks/default This configuration is valid, but you can further simplify the configuration by breaking different parts as individual template files that you can reuse.
- Example resources . append ({ 'name' : 'vm-template' , 'type' : 'compute.v1.instance' , 'properties' : { 'zone' : 'us-central1-a' , 'machineType' : 'zones/us-central1-a/machineTypes/n1-standard-1' , 'disks' : [{ 'deviceName' : 'boot' , 'type' : 'PERSISTENT' , 'boot' : True , 'autoDelete' : True , 'initializeParams' : { 'sourceImage' : 'projects/debian-cloud/global/images/family/debian-11' } }], 'networkInterfaces' : [{ 'network' : 'global/networks/default' }] } }) For the full Python example, see the Deployment Manager GitHub repository .
- For examples of templates that you can use in your own deployments, see the Deployment Manager GitHub repository .

