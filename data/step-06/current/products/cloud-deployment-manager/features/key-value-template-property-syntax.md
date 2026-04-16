---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T18:41:05.976Z"
product_name: "Cloud Deployment Manager"
product_slug: "cloud-deployment-manager"
feature_name: "Key:value template property syntax"
feature_slug: "key-value-template-property-syntax"
latest_feature_date: "2017-01-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/define-template-properties"
  - "https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-basic-template"
  - "https://docs.cloud.google.com/deployment-manager/docs/configuration/adding-templates"
keywords:
  - "key"
  - "value"
  - "template"
  - "property"
  - "syntax"
  - "gcloud"
  - "properties"
  - "flag"
---

# Key:value template property syntax

Product: Cloud Deployment Manager
Coverage: MEDIUM

## Step 02 Summary

The gcloud --properties flag supports key:value pairs for specifying template properties.

## Extended Definition

The gcloud --properties flag supports key:value pairs for specifying template properties.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/define-template-properties](https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/define-template-properties)
- [https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-basic-template](https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-basic-template)
- [https://docs.cloud.google.com/deployment-manager/docs/configuration/adding-templates](https://docs.cloud.google.com/deployment-manager/docs/configuration/adding-templates)

## Supporting Pages

### "Defining Template Properties \_|\_ Cloud Deployment Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/define-template-properties](https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/define-template-properties)
- Source ID: `site-docs-root-2`
- Final score: 225
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, the following request passes in the template and specifies the zone property directly on the command-line: gcloud deployment-manager deployments create a-single-vm --template vm template.jinja \ --properties zone:us-central1-a Keep in mind that: All values are parsed as YAML values.
- Understand how to create a configuration Creating a template property To create a template property: Jinja In Jinja, define a property using the following syntax: {{ properties [ "PROJECT NAME" ] }} For example: - name: vm-{{ env["deployment"] }} type: compute.v1.instance properties: zone: us-central1-a machineType: zones/{{ properties["zone"] }}/machineTypes/n1-standard-1 disks: - deviceName: boot type: PERSISTENT boot: true autoDelete: true initializeParams: sourceImage: projects/debian-cloud/global/images/family/debian-11 networkInterfaces: - network: global/networks/default Python In Python, define a property using the following syntax: context . properties [ "PROPERTY NAME" ] For example: resources . append ({ 'name' : 'vm-' + context . env [ 'deployment' ], 'type' : 'compute.v1.instance' , 'properties' : { 'zone' : 'us-central1-a' , 'machineType' : '' . join ([ 'zones/' , context . properties [ 'zone' ], '/machineTypes/n1-standard-1' ]), 'disks' : [{ 'deviceName' : 'boot' , 'type' : 'PERSISTENT' , 'boot' : True , 'autoDelete' : True , 'initializeParams' : { 'sourceImage' : 'projects/debian-cloud/global/images/family/debian-11' } }], 'networkInterfaces' : [{ 'network' : 'global/networks/default' }] } }) For the full Python example, see the Deployment Manager GitHub repository .
- For example, assume you have the following template which has a template property called zone : - name : vm - {{ env["deployment"] } } type : compute . v1 . instance properties : zone : us - central1 - a machineType : zones / {{ properties["zone"] } } / machineTypes / n1 - standard - 1 disks : - deviceName : boot type : PERSISTENT boot : true autoDelete : true initializeParams : sourceImage : projects / debian - cloud / global / images / family / debian - 11 networkInterfaces : - network : global / networks / default With the Google Cloud CLI, you can pass in this template file directly and provide the values for your template properties on the command-line.
- For example, the following line specifies a template property in the machine type's URL: machineType: zones/ {{ properties [ "zone" ] }} /machineTypes/n1-standard-1 In a configuration that uses this template, you can set the value of zone in the properties section of the template: imports : - path : vm template . jinja resources : - name : my - vm type : vm template . jinja properties : zone : us - central1 - a Deployment Manager will know to pass in the value of zone to the underlying template.

### "Creating a Basic Template \_|\_ Cloud Deployment Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-basic-template](https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-basic-template)
- Source ID: `site-docs-reference-2`
- Final score: 193
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, the following request deploys a template called vm-template.jinja : gcloud deployment-manager deployments create a-single-vm --template vm-template.jinja If your template has template properties , you can also set these properties on the command-line using the --properties flag: gcloud deployment-manager deployments create my-igm \ --template vm-template.jinja \ --properties zone:us-central1-a Keep in mind that: All values are parsed as YAML values.
- For example: gcloud deployment-manager deployments create my-igm --template vm-template.jinja --properties zone:us-central1-a,machineType:n1-standard-1,image:debian-9 After running this command, Deployment Manager creates a deployment using the template you provided.
- If certain properties have default values, you can omit the property from the command-line.
- For example, if you create a file named resource type.txt with the following string: compute.v1.instance Import it into your configuration and provide the content inline like so: imports : - path : resource type.txt resources : - name : my-vm type : {{ imports [ "resource type.txt" ] }} # Resolves to "compute.v1.instance" properties : zone : us-central1-a machineType : zones/us-central1-a/machineTypes/f1-micro disks : - deviceName : boot type : PERSISTENT boot : true autoDelete : true initializeParams : sourceImage : projects/debian-cloud/global/images/family/debian-9 networkInterfaces : - network : global/networks/default accessConfigs : - name : External NAT type : ONE TO ONE NAT Deploying templates Once you import a template, use it as a type in your configuration: Jinja imports : - path : vm-template.jinja resources : - name : my-vm type : vm-template.jinja Python imports : - path : vm-template.py resources : - name : my-vm type : vm-template.py If you did not provide a name for your template, call the template using the template path: imports : - path : path / to / my vm template . jinja resources : - name : my - first - virtual - machine type : path / to / my vm template . jinja Deploying templates directly with the command-line tool Instead of creating a top-level configuration file, Deployment Manager offers the ability to deploy a template directly in the Google Cloud CLI.

### "Creating a Basic Template \_|\_ Cloud Deployment Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/deployment-manager/docs/configuration/adding-templates](https://docs.cloud.google.com/deployment-manager/docs/configuration/adding-templates)
- Source ID: `site-docs-reference-required-5`
- Final score: 183
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, the following request deploys a template called vm-template.jinja : gcloud deployment-manager deployments create a-single-vm --template vm-template.jinja If your template has template properties , you can also set these properties on the command-line using the --properties flag: gcloud deployment-manager deployments create my-igm \ --template vm-template.jinja \ --properties zone:us-central1-a Keep in mind that: All values are parsed as YAML values.
- For example: gcloud deployment-manager deployments create my-igm --template vm-template.jinja --properties zone:us-central1-a,machineType:n1-standard-1,image:debian-9 After running this command, Deployment Manager creates a deployment using the template you provided.
- If certain properties have default values, you can omit the property from the command-line.
- For example, if you create a file named resource type.txt with the following string: compute.v1.instance Import it into your configuration and provide the content inline like so: imports : - path : resource type.txt resources : - name : my-vm type : {{ imports [ "resource type.txt" ] }} # Resolves to "compute.v1.instance" properties : zone : us-central1-a machineType : zones/us-central1-a/machineTypes/f1-micro disks : - deviceName : boot type : PERSISTENT boot : true autoDelete : true initializeParams : sourceImage : projects/debian-cloud/global/images/family/debian-9 networkInterfaces : - network : global/networks/default accessConfigs : - name : External NAT type : ONE TO ONE NAT Deploying templates Once you import a template, use it as a type in your configuration: Jinja imports : - path : vm-template.jinja resources : - name : my-vm type : vm-template.jinja Python imports : - path : vm-template.py resources : - name : my-vm type : vm-template.py If you did not provide a name for your template, call the template using the template path: imports : - path : path / to / my vm template . jinja resources : - name : my - first - virtual - machine type : path / to / my vm template . jinja Deploying templates directly with the command-line tool Instead of creating a top-level configuration file, Deployment Manager offers the ability to deploy a template directly in the Google Cloud CLI.

