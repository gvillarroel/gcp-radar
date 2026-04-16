---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T18:41:05.989Z"
product_name: "Cloud Deployment Manager"
product_slug: "cloud-deployment-manager"
feature_name: "Outputs"
feature_slug: "outputs"
latest_feature_date: "2016-02-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deployment-manager/docs/configuration/expose-information-outputs"
  - "https://docs.cloud.google.com/deployment-manager/docs/configuration/outputs"
  - "https://docs.cloud.google.com/deployment-manager/docs/configuration/create-basic-configuration"
keywords:
  - "outputs"
  - "deployment"
  - "manager"
  - "supports"
  - "expose"
  - "key"
  - "configuration"
  - "properties"
---

# Outputs

Product: Cloud Deployment Manager
Coverage: MEDIUM

## Step 02 Summary

Deployment Manager supports outputs to expose key configuration properties for reuse.

## Extended Definition

Deployment Manager supports outputs to expose key configuration properties for reuse.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deployment-manager/docs/configuration/expose-information-outputs](https://docs.cloud.google.com/deployment-manager/docs/configuration/expose-information-outputs)
- [https://docs.cloud.google.com/deployment-manager/docs/configuration/outputs](https://docs.cloud.google.com/deployment-manager/docs/configuration/outputs)
- [https://docs.cloud.google.com/deployment-manager/docs/configuration/create-basic-configuration](https://docs.cloud.google.com/deployment-manager/docs/configuration/create-basic-configuration)

## Supporting Pages

### "Exposing Information Using Outputs \_|\_ Cloud Deployment Manager \_|\_\

- URL: [https://docs.cloud.google.com/deployment-manager/docs/configuration/expose-information-outputs](https://docs.cloud.google.com/deployment-manager/docs/configuration/expose-information-outputs)
- Source ID: `site-docs-reference`
- Final score: 173
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Here is the same template, fully expanded: resources : - name : frontend type : compute . v1 . instance properties : zone : us - central1 - f ... networkInterfaces : - network : global / networks / default accessConfigs : - name : External NAT type : ONE TO ONE NAT metadata : items : - key : startup - script value : #!/bin/bash export IP =$ ( ref . backend . networkInterfaces [ 0 ] . accessConfigs [ 0 ] . natIP ) - name : backend type : compute . v1 . instance properties : zone : us - central1 - f ... networkInterfaces : - network : global / networks / default accessConfigs : - name : External NAT type : ONE TO ONE NAT metadata : items : - key : startup - script value : #!/bin/bash export IP =$ ( ref . frontend . networkInterfaces [ 0 ] . accessConfigs [ 0 ] . natIP ) Deployment Manager returns an error if you try to run configuration: code: u'CONDITION NOT MET' message: u'A dependency cycle was found amongst backend, frontend.'>]> However, this template would work if: frontend.jinja created two virtual machine instances, vm-1 and vm-2. backend.jinja created vm-3 and vm-4. vm-1 exposed it's external IP as an output and vm-4 used that output. vm-3 exposed an external IP as an output, vm-2 used that output.
- For example, the following snippet is accepted by Deployment Manager but if the contents of the templates causes a circular dependency, the deployment would fail: resources : - name : frontend type : frontend . jinja properties : ip : $ ( ref . backend . ip ) - name : backend type : backend . jinja properties : ip : $ ( ref . frontend . ip ) As an example of a circular dependency where the deployment fails, assume both frontend.jinja and backend.jinja looked like this: resources : - name : {{ env [ 'name' ] }} type : compute . v1 . instance properties : zone : us - central1 - f ... networkInterfaces : - network : global / networks / default accessConfigs : - name : External NAT type : ONE TO ONE NAT metadata : items : - key : startup - script value : #!/bin/bash export IP = {{ properties [ "ip" ] }} ... outputs : - name : ip value : $ ( ref . {{ env [ 'name' ] }} . networkInterfaces [ 0 ] . accessConfigs [ 0 ] . natIP ) Recall that both resources used the IP output property from the opposing resource: resources : - name : frontend type : frontend . jinja properties : ip : $ ( ref . backend . ip ) - name : backend type : backend . jinja properties : ip : $ ( ref . frontend . ip ) But neither IP values can be populated because both properties rely on the existence of the other resource, creating a circular dependency.
- When you create a deployment, you might want to expose key properties of your configurations or templates for other templates or users to consume.
- When you deploy the configuration, Deployment Manager expands the configuration, and then replaces references to outputs with the output values.

### "Exposing Information Using Outputs \_|\_ Cloud Deployment Manager \_|\_\

- URL: [https://docs.cloud.google.com/deployment-manager/docs/configuration/outputs](https://docs.cloud.google.com/deployment-manager/docs/configuration/outputs)
- Source ID: `site-docs-reference-required-5`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Here is the same template, fully expanded: resources : - name : frontend type : compute . v1 . instance properties : zone : us - central1 - f ... networkInterfaces : - network : global / networks / default accessConfigs : - name : External NAT type : ONE TO ONE NAT metadata : items : - key : startup - script value : #!/bin/bash export IP =$ ( ref . backend . networkInterfaces [ 0 ] . accessConfigs [ 0 ] . natIP ) - name : backend type : compute . v1 . instance properties : zone : us - central1 - f ... networkInterfaces : - network : global / networks / default accessConfigs : - name : External NAT type : ONE TO ONE NAT metadata : items : - key : startup - script value : #!/bin/bash export IP =$ ( ref . frontend . networkInterfaces [ 0 ] . accessConfigs [ 0 ] . natIP ) Deployment Manager returns an error if you try to run configuration: code: u'CONDITION NOT MET' message: u'A dependency cycle was found amongst backend, frontend.'>]> However, this template would work if: frontend.jinja created two virtual machine instances, vm-1 and vm-2. backend.jinja created vm-3 and vm-4. vm-1 exposed it's external IP as an output and vm-4 used that output. vm-3 exposed an external IP as an output, vm-2 used that output.
- For example, the following snippet is accepted by Deployment Manager but if the contents of the templates causes a circular dependency, the deployment would fail: resources : - name : frontend type : frontend . jinja properties : ip : $ ( ref . backend . ip ) - name : backend type : backend . jinja properties : ip : $ ( ref . frontend . ip ) As an example of a circular dependency where the deployment fails, assume both frontend.jinja and backend.jinja looked like this: resources : - name : {{ env [ 'name' ] }} type : compute . v1 . instance properties : zone : us - central1 - f ... networkInterfaces : - network : global / networks / default accessConfigs : - name : External NAT type : ONE TO ONE NAT metadata : items : - key : startup - script value : #!/bin/bash export IP = {{ properties [ "ip" ] }} ... outputs : - name : ip value : $ ( ref . {{ env [ 'name' ] }} . networkInterfaces [ 0 ] . accessConfigs [ 0 ] . natIP ) Recall that both resources used the IP output property from the opposing resource: resources : - name : frontend type : frontend . jinja properties : ip : $ ( ref . backend . ip ) - name : backend type : backend . jinja properties : ip : $ ( ref . frontend . ip ) But neither IP values can be populated because both properties rely on the existence of the other resource, creating a circular dependency.
- When you create a deployment, you might want to expose key properties of your configurations or templates for other templates or users to consume.
- When you deploy the configuration, Deployment Manager expands the configuration, and then replaces references to outputs with the output values.

### "Creating a Basic Configuration \_|\_ Cloud Deployment Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/deployment-manager/docs/configuration/create-basic-configuration](https://docs.cloud.google.com/deployment-manager/docs/configuration/create-basic-configuration)
- Source ID: `site-docs-reference`
- Final score: 145
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The outputs section allows you to expose data from your templates and configurations as outputs for other templates in the same deployment to consume or as outputs for your end users, while the metadata section lets you use other features, like setting explicit dependencies between resources.
- For example, the following configuration file defines a virtual machine instance called vm-created-by-deployment-manager and its desired properties.
- See the License for the specific language governing permissions and limitations under the License. resources : - name : vm-created-by-deployment-manager type : compute.v1.instance properties : zone : us-central1-a machineType : zones/us-central1-a/machineTypes/n1-standard-1 disks : - deviceName : boot type : PERSISTENT boot : true autoDelete : true initializeParams : sourceImage : projects/debian-cloud/global/images/family/debian-11 networkInterfaces : - network : global/networks/default - name : big-query-dataset type : bigquery.v2.dataset properties : datasetReference : datasetId : example id Supported resource types and properties See the full list of supported Google-managed resources in the Supported Resource Types documentation.
- Configuration file structure A configuration file is written in YAML format and has the following structure: imported templates, if applicable imports : path relative to the configuration file - path : path/to/template.jinja name : my-template - path : path/to/another/template.py name : another-template resources : - name : NAME OF RESOURCE type : TYPE OF RESOURCE properties : property-a : value property-b : value ... property-z : value - name : NAME OF RESOURCE type : TYPE OF RESOURCE properties : property-a : value property-b : value ... property-z : value Each of the sections define a different part of the deployment: The imports sections is a list of template files that will be used by the configuration.

