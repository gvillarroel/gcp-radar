---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T18:41:05.954Z"
product_name: "Cloud Deployment Manager"
product_slug: "cloud-deployment-manager"
feature_name: "Private Catalog template integration"
feature_slug: "private-catalog-template-integration"
latest_feature_date: "2019-02-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/hosting-templates-externally"
  - "https://docs.cloud.google.com/deployment-manager/docs/step-by-step-guide/using-multiple-templates"
  - "https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-basic-template"
keywords:
  - "private"
  - "catalog"
  - "template"
  - "integration"
  - "deployment"
  - "manager"
  - "templates"
  - "can"
---

# Private Catalog template integration

Product: Cloud Deployment Manager
Coverage: MEDIUM

## Step 02 Summary

Deployment Manager templates can be used in Private Catalog.

## Extended Definition

Deployment Manager templates can be used in Private Catalog.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/hosting-templates-externally](https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/hosting-templates-externally)
- [https://docs.cloud.google.com/deployment-manager/docs/step-by-step-guide/using-multiple-templates](https://docs.cloud.google.com/deployment-manager/docs/step-by-step-guide/using-multiple-templates)
- [https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-basic-template](https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-basic-template)

## Supporting Pages

### "Storing Templates on an External Host \_|\_ Cloud Deployment Manager \_\

- URL: [https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/hosting-templates-externally](https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/hosting-templates-externally)
- Source ID: `site-docs-root-2`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: resources : - name : my - salt - cluster type : gs : //v2/saltstack/salt cluster.jinja For a GitHub URL: resources : - name : my - salt - cluster type : https : //raw.githubusercontent.com/GoogleCloudPlatform/deploymentmanager-samples/master/examples/v2/single vm/vm template.jinja If an external template imports other templates or if there is an accompanying schema, you can store the related files in the same directory or relative subdirectory and include these other templates with a relative URL.
- Hosting templates externally has certain advantages over storing your templates locally: Easily share templates with others Ensure that configurations are always using the most up-to-date template Automatically manage relevant imports and schemas Deployment Manager always fetches the latest version of external templates each time you redeploy your configuration.
- Home Documentation Infrastructure as code Cloud Deployment Manager Guides Send feedback Storing Templates on an External Host Stay organized with collections Save and categorize content based on your preferences.
- Deployment Manager will also handle importing other dependent templates for you if they are referenced in the external template.

### "Using multiple templates \_|\_ Cloud Deployment Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/deployment-manager/docs/step-by-step-guide/using-multiple-templates](https://docs.cloud.google.com/deployment-manager/docs/step-by-step-guide/using-multiple-templates)
- Source ID: `site-docs-reference`
- Final score: 117
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- See the License for the specific language governing permissions and limitations under the License. imports : - path : vm-template.py - path : vm-template-2.py - path : network-template.py - path : firewall-template.py - path : compute-engine-template.py resources : - name : compute-engine-setup type : compute-engine-template.py Saving the configuration and deploying it Run this command to deploy the configuration: gcloud deployment-manager deployments create deployment-with-many-templates \ --config config-with-many-templates.yaml To view the deployment, run: gcloud deployment-manager deployments describe deployment-with-many-templates Looking ahead: template properties and environment variables Next, you will replace some hard-coded parts of templates with reusable patterns such as custom template and environment variables.
- See the License for the specific language governing permissions and limitations under the License. """Creates the Compute Engine.""" def GenerateConfig ( context ): """Creates the Compute Engine with network and firewall.""" resources = [{ 'name' : 'vm-1' , 'type' : 'vm-template.py' }, { 'name' : 'vm-2' , 'type' : 'vm-template-2.py' }, { 'name' : 'network-1' , 'type' : 'network-template.py' }, { 'name' : 'firewall-1' , 'type' : 'firewall-template.py' }] return { 'resources' : resources } Viewing the configuration Open the configuration file for the deployment: cd deploymentmanager-samples/examples/v2/step by step guide/step6 use multiple templates/python nano config-with-many-templates.yaml # use your preferred text editor Notice that the configuration did not directly call the other templates.
- Opening the template for a network Open the template named compute-engine-template.py : cd deploymentmanager-samples/examples/v2/step by step guide/step6 use multiple templates/python nano compute-engine-template.py # use your preferred text editor This template imports other templates, for all the resources in the deployment: vm-template.py , vm-template-2.py for virtual machines (VMs), network-template.py for a network, and firewall-template.py for a firewall rule.
- Run the following command to delete the deployment: gcloud deployment-manager deployments delete deployment-with-many-templates Previous arrow back Understanding reusable templates Next Understanding template properties and using environment variables arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Creating a Basic Template \_|\_ Cloud Deployment Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-basic-template](https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-basic-template)
- Source ID: `site-docs-reference-2`
- Final score: 113
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, if you create a file named resource type.txt with the following string: compute.v1.instance Import it into your configuration and provide the content inline like so: imports : - path : resource type.txt resources : - name : my-vm type : {{ imports [ "resource type.txt" ] }} # Resolves to "compute.v1.instance" properties : zone : us-central1-a machineType : zones/us-central1-a/machineTypes/f1-micro disks : - deviceName : boot type : PERSISTENT boot : true autoDelete : true initializeParams : sourceImage : projects/debian-cloud/global/images/family/debian-9 networkInterfaces : - network : global/networks/default accessConfigs : - name : External NAT type : ONE TO ONE NAT Deploying templates Once you import a template, use it as a type in your configuration: Jinja imports : - path : vm-template.jinja resources : - name : my-vm type : vm-template.jinja Python imports : - path : vm-template.py resources : - name : my-vm type : vm-template.py If you did not provide a name for your template, call the template using the template path: imports : - path : path / to / my vm template . jinja resources : - name : my - first - virtual - machine type : path / to / my vm template . jinja Deploying templates directly with the command-line tool Instead of creating a top-level configuration file, Deployment Manager offers the ability to deploy a template directly in the Google Cloud CLI.
- For examples of templates that you can use in your own deployments, see the Deployment Manager GitHub repository .
- Deployment Manager accepts both Jinja and Python templates.
- See the License for the specific language governing permissions and limitations under the License. resources : - name : vm-created-by-deployment-manager type : compute.v1.instance properties : zone : us-central1-a machineType : zones/us-central1-a/machineTypes/n1-standard-1 disks : - deviceName : boot type : PERSISTENT boot : true autoDelete : true initializeParams : sourceImage : projects/debian-cloud/global/images/family/debian-11 networkInterfaces : - network : global/networks/default This configuration is valid, but you can further simplify the configuration by breaking different parts as individual template files that you can reuse.

