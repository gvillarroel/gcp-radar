---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T18:41:05.987Z"
product_name: "Cloud Deployment Manager"
product_slug: "cloud-deployment-manager"
feature_name: "External template hosting"
feature_slug: "external-template-hosting"
latest_feature_date: "2016-05-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/hosting-templates-externally"
  - "https://docs.cloud.google.com/deployment-manager/docs/reference/cloud-foundation-toolkit"
  - "https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-basic-template"
keywords:
  - "external"
  - "template"
  - "hosting"
  - "deployment"
  - "manager"
  - "supports"
  - "templates"
  - "storage"
---

# External template hosting

Product: Cloud Deployment Manager
Coverage: MEDIUM

## Step 02 Summary

Deployment Manager supports hosting templates on Google Cloud Storage or other publicly accessible URLs.

## Extended Definition

Deployment Manager supports hosting templates on Google Cloud Storage or other publicly accessible URLs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/hosting-templates-externally](https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/hosting-templates-externally)
- [https://docs.cloud.google.com/deployment-manager/docs/reference/cloud-foundation-toolkit](https://docs.cloud.google.com/deployment-manager/docs/reference/cloud-foundation-toolkit)
- [https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-basic-template](https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-basic-template)

## Supporting Pages

### "Storing Templates on an External Host \_|\_ Cloud Deployment Manager \_\

- URL: [https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/hosting-templates-externally](https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/hosting-templates-externally)
- Source ID: `site-docs-root-2`
- Final score: 253
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Hosting templates externally has certain advantages over storing your templates locally: Easily share templates with others Ensure that configurations are always using the most up-to-date template Automatically manage relevant imports and schemas Deployment Manager always fetches the latest version of external templates each time you redeploy your configuration.
- For example: resources : - name : my - salt - cluster type : gs : //v2/saltstack/salt cluster.jinja For a GitHub URL: resources : - name : my - salt - cluster type : https : //raw.githubusercontent.com/GoogleCloudPlatform/deploymentmanager-samples/master/examples/v2/single vm/vm template.jinja If an external template imports other templates or if there is an accompanying schema, you can store the related files in the same directory or relative subdirectory and include these other templates with a relative URL.
- Home Documentation Infrastructure as code Cloud Deployment Manager Guides Send feedback Storing Templates on an External Host Stay organized with collections Save and categorize content based on your preferences.
- Hosting external templates You can host external templates in Google Cloud Storage or in a publicly-accessible location, such as GitHub.

### "Example templates from the Cloud Foundation Toolkit \_|\_ Cloud Deployment\

- URL: [https://docs.cloud.google.com/deployment-manager/docs/reference/cloud-foundation-toolkit](https://docs.cloud.google.com/deployment-manager/docs/reference/cloud-foundation-toolkit)
- Source ID: `site-api-reference`
- Final score: 132
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Infrastructure as code Cloud Deployment Manager Reference Send feedback Example templates from the Cloud Foundation Toolkit Stay organized with collections Save and categorize content based on your preferences.
- The Cloud Foundation Toolkit provides reference templates for Deployment Manager that follow Google Cloud's best practices.
- To speed up creating your deployments, use these production-ready templates from the Cloud Foundation Toolkit Project .
- You can use these templates to quickly build a repeatable, enterprise-ready deployment in Google Cloud.

### "Creating a Basic Template \_|\_ Cloud Deployment Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-basic-template](https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-basic-template)
- Source ID: `site-docs-reference-2`
- Final score: 126
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, if you create a file named resource type.txt with the following string: compute.v1.instance Import it into your configuration and provide the content inline like so: imports : - path : resource type.txt resources : - name : my-vm type : {{ imports [ "resource type.txt" ] }} # Resolves to "compute.v1.instance" properties : zone : us-central1-a machineType : zones/us-central1-a/machineTypes/f1-micro disks : - deviceName : boot type : PERSISTENT boot : true autoDelete : true initializeParams : sourceImage : projects/debian-cloud/global/images/family/debian-9 networkInterfaces : - network : global/networks/default accessConfigs : - name : External NAT type : ONE TO ONE NAT Deploying templates Once you import a template, use it as a type in your configuration: Jinja imports : - path : vm-template.jinja resources : - name : my-vm type : vm-template.jinja Python imports : - path : vm-template.py resources : - name : my-vm type : vm-template.py If you did not provide a name for your template, call the template using the template path: imports : - path : path / to / my vm template . jinja resources : - name : my - first - virtual - machine type : path / to / my vm template . jinja Deploying templates directly with the command-line tool Instead of creating a top-level configuration file, Deployment Manager offers the ability to deploy a template directly in the Google Cloud CLI.
- For examples of templates that you can use in your own deployments, see the Deployment Manager GitHub repository .
- Deployment Manager accepts both Jinja and Python templates.
- See the License for the specific language governing permissions and limitations under the License. resources : - name : vm-created-by-deployment-manager type : compute.v1.instance properties : zone : us-central1-a machineType : zones/us-central1-a/machineTypes/n1-standard-1 disks : - deviceName : boot type : PERSISTENT boot : true autoDelete : true initializeParams : sourceImage : projects/debian-cloud/global/images/family/debian-11 networkInterfaces : - network : global/networks/default This configuration is valid, but you can further simplify the configuration by breaking different parts as individual template files that you can reuse.

