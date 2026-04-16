---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T18:41:05.964Z"
product_name: "Cloud Deployment Manager"
product_slug: "cloud-deployment-manager"
feature_name: "gcloud --template deployment creation"
feature_slug: "gcloud-template-deployment-creation"
latest_feature_date: "2018-04-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-basic-template"
  - "https://docs.cloud.google.com/deployment-manager/docs/configuration/adding-templates"
  - "https://docs.cloud.google.com/deployment-manager/docs/configuration/composite-types/creating-composite-types"
keywords:
  - "gcloud"
  - "template"
  - "deployment"
  - "creation"
  - "tool"
  - "provides"
  - "flag"
  - "creating"
---

# gcloud --template deployment creation

Product: Cloud Deployment Manager
Coverage: MEDIUM

## Step 02 Summary

The gcloud tool provides a --template flag for creating deployments from templates.

## Extended Definition

The gcloud tool provides a --template flag for creating deployments from templates.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-basic-template](https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-basic-template)
- [https://docs.cloud.google.com/deployment-manager/docs/configuration/adding-templates](https://docs.cloud.google.com/deployment-manager/docs/configuration/adding-templates)
- [https://docs.cloud.google.com/deployment-manager/docs/configuration/composite-types/creating-composite-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/composite-types/creating-composite-types)

## Supporting Pages

### "Creating a Basic Template \_|\_ Cloud Deployment Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-basic-template](https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-basic-template)
- Source ID: `site-docs-reference-2`
- Final score: 166
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, if you create a file named resource type.txt with the following string: compute.v1.instance Import it into your configuration and provide the content inline like so: imports : - path : resource type.txt resources : - name : my-vm type : {{ imports [ "resource type.txt" ] }} # Resolves to "compute.v1.instance" properties : zone : us-central1-a machineType : zones/us-central1-a/machineTypes/f1-micro disks : - deviceName : boot type : PERSISTENT boot : true autoDelete : true initializeParams : sourceImage : projects/debian-cloud/global/images/family/debian-9 networkInterfaces : - network : global/networks/default accessConfigs : - name : External NAT type : ONE TO ONE NAT Deploying templates Once you import a template, use it as a type in your configuration: Jinja imports : - path : vm-template.jinja resources : - name : my-vm type : vm-template.jinja Python imports : - path : vm-template.py resources : - name : my-vm type : vm-template.py If you did not provide a name for your template, call the template using the template path: imports : - path : path / to / my vm template . jinja resources : - name : my - first - virtual - machine type : path / to / my vm template . jinja Deploying templates directly with the command-line tool Instead of creating a top-level configuration file, Deployment Manager offers the ability to deploy a template directly in the Google Cloud CLI.
- For example, the following request deploys a template called vm-template.jinja : gcloud deployment-manager deployments create a-single-vm --template vm-template.jinja If your template has template properties , you can also set these properties on the command-line using the --properties flag: gcloud deployment-manager deployments create my-igm \ --template vm-template.jinja \ --properties zone:us-central1-a Keep in mind that: All values are parsed as YAML values.
- For example: gcloud deployment-manager deployments create my-igm --template vm-template.jinja --properties zone:us-central1-a,machineType:n1-standard-1,image:debian-9 After running this command, Deployment Manager creates a deployment using the template you provided.
- Home Documentation Infrastructure as code Cloud Deployment Manager Guides Send feedback Creating a Basic Template Stay organized with collections Save and categorize content based on your preferences.

### "Creating a Basic Template \_|\_ Cloud Deployment Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/deployment-manager/docs/configuration/adding-templates](https://docs.cloud.google.com/deployment-manager/docs/configuration/adding-templates)
- Source ID: `site-docs-reference-required-5`
- Final score: 156
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, if you create a file named resource type.txt with the following string: compute.v1.instance Import it into your configuration and provide the content inline like so: imports : - path : resource type.txt resources : - name : my-vm type : {{ imports [ "resource type.txt" ] }} # Resolves to "compute.v1.instance" properties : zone : us-central1-a machineType : zones/us-central1-a/machineTypes/f1-micro disks : - deviceName : boot type : PERSISTENT boot : true autoDelete : true initializeParams : sourceImage : projects/debian-cloud/global/images/family/debian-9 networkInterfaces : - network : global/networks/default accessConfigs : - name : External NAT type : ONE TO ONE NAT Deploying templates Once you import a template, use it as a type in your configuration: Jinja imports : - path : vm-template.jinja resources : - name : my-vm type : vm-template.jinja Python imports : - path : vm-template.py resources : - name : my-vm type : vm-template.py If you did not provide a name for your template, call the template using the template path: imports : - path : path / to / my vm template . jinja resources : - name : my - first - virtual - machine type : path / to / my vm template . jinja Deploying templates directly with the command-line tool Instead of creating a top-level configuration file, Deployment Manager offers the ability to deploy a template directly in the Google Cloud CLI.
- For example, the following request deploys a template called vm-template.jinja : gcloud deployment-manager deployments create a-single-vm --template vm-template.jinja If your template has template properties , you can also set these properties on the command-line using the --properties flag: gcloud deployment-manager deployments create my-igm \ --template vm-template.jinja \ --properties zone:us-central1-a Keep in mind that: All values are parsed as YAML values.
- For example: gcloud deployment-manager deployments create my-igm --template vm-template.jinja --properties zone:us-central1-a,machineType:n1-standard-1,image:debian-9 After running this command, Deployment Manager creates a deployment using the template you provided.
- Home Documentation Infrastructure as code Cloud Deployment Manager Guides Send feedback Creating a Basic Template Stay organized with collections Save and categorize content based on your preferences.

### "Adding a template as a composite type \_|\_ Cloud Deployment Manager \_\

- URL: [https://docs.cloud.google.com/deployment-manager/docs/configuration/composite-types/creating-composite-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/composite-types/creating-composite-types)
- Source ID: `site-docs-root-2`
- Final score: 140
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the composite field, define: The top-level schema The contents of your imported templates The contents of your top-level template The API request body has the following structure: POST https : // www . googleapis . com / deploymentmanager / v2beta / projects /[ PROJECT ID ]/ global / compositeTypes { "composite" : { "files" : { "schema" : "[CONTENTS OF SCHEMA]" , "imports" : [ { "name": "[TEMPLATE FILE ] ", " content ": " [ CONTENTS OF TEMPLATE FILE ] " }, { " name ": " [ ANOTHER TEMPLATE IF NECESSARY ] ", " content ": " [ CONTENTS OF TEMPLATES ] " } ], " template ": " [ TOP-LEVEL TEMPLATE CONTENTS ] ", " templateFileType ": " [ FILE TYPE ] " } }, " name ": " [ TYPE NAME ] " } For an example on how to construct these requests, see Creating an autoscaled managed instance group composite type .
- In the local directory where you downloaded all the files, run the following command to create a new composite type called ha-service-example : gcloud beta deployment - manager types create ha - service - example -- template = ha - service . py Get a list of types to confirm that the type was successfully created: gcloud beta deployment - manager types list -- provider composite Describe your new type: gcloud beta deployment - manager types describe ha - service - example -- provider composite Create a new configuration that deploys your type.
- For example, the following command deploys a composite type called autoscaled-igm : gcloud deployment - manager deployments create my - igm \ -- composite - type example - project / composite : autoscaled - igm You can also set properties of your composite type using the --properties flag: gcloud deployment - manager deployments create my - igm \ -- composite - type example - project / composite : autoscaled - igm \ -- properties zone : us - central1 - a Keep in mind that: All values are parsed as YAML values.
- Run this command in the local directory where you have your template files. $ gcloud beta deployment - manager types create [ TYPE NAME ] --template=[TOP LEVEL TEMPLATE] where: [TYPE NAME] is the name you want to call this type [TOP LEVEL TEMPLATE] is the relative path to the top-level template describing this type.

