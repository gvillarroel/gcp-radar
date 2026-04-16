---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T18:41:06.040Z"
product_name: "Cloud Deployment Manager"
product_slug: "cloud-deployment-manager"
feature_name: "External references"
feature_slug: "external-references"
latest_feature_date: "2015-02-06"
deprecation_date: "2015-02-20"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/hosting-templates-externally"
  - "https://docs.cloud.google.com/deployment-manager/docs/configuration/expose-information-outputs"
  - "https://docs.cloud.google.com/deployment-manager/docs/configuration/use-references"
keywords:
  - "external"
  - "references"
  - "deployment"
  - "manager"
  - "disabled"
  - "due"
  - "known"
  - "bug"
---

# External references

Product: Cloud Deployment Manager
Coverage: MEDIUM

## Step 02 Summary

Deployment Manager disabled support for external references due to a known bug; Deployment Manager supports external references; deprecated on 2015-02-20.

## Extended Definition

Deployment Manager disabled support for external references due to a known bug; Deployment Manager supports external references; deprecated on 2015-02-20.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/hosting-templates-externally](https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/hosting-templates-externally)
- [https://docs.cloud.google.com/deployment-manager/docs/configuration/expose-information-outputs](https://docs.cloud.google.com/deployment-manager/docs/configuration/expose-information-outputs)
- [https://docs.cloud.google.com/deployment-manager/docs/configuration/use-references](https://docs.cloud.google.com/deployment-manager/docs/configuration/use-references)

## Supporting Pages

### Using references \_|\_ Cloud Deployment Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deployment-manager/docs/configuration/use-references](https://docs.cloud.google.com/deployment-manager/docs/configuration/use-references)
- Source ID: `site-docs-reference-required-5`
- Final score: 86
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Infrastructure as code Cloud Deployment Manager Guides Send feedback Using references Stay organized with collections Save and categorize content based on your preferences.
- When you deploy your configuration, the VM is created first, and Deployment Manager gets the external IP address when it is available.
- Here are some examples of declaring references in your templates: Jinja Reference that includes an environment variable network : $(ref.{{ env["deployment"] }}-network.selfLink) Reference to a value in an array subnetwork : $(ref.{{ env["deployment"] }}-vm.networkInterfaces[2].subnetwork) Reference that includes a template property network : $(ref.{{ properties["network"] }}.selfLink) Reference using a Jinja parameter network : $(ref.{{ NETWORK NAME }}.selfLink) Reference in outputs outputs : - name : UrlToService value : http://$(ref.{{ env["deployment"] }}-network.networkInterfaces[0].accessConfigs[0].natIp):8080/ Python Reference that includes an environment variable 'network' : '$(ref.' + context . env [ 'deployment' ] + '-network.selfLink)' Reference to a value in an array 'subnetwork' : '$(ref.' + context . env [ 'deployment' ] + '-vm.networkInterfaces[2].subnetwork)' Reference that includes a template property 'network' : '$(ref.' + context . properties [ 'network' ] + '.selfLink)' Reference using a Python parameter 'value' : '$(ref.' + base name + '.networkInterfaces[0].networkIP)' Reference in outputs outputs = [{ 'name' : 'UrlToService' , 'value' : '$(ref.' + context . env [ 'deployment' ] + '-network.networkInterfaces[0].accessConfigs[0].natIP):8080' }] What's next Preview your configuration before you commit to deploying it.
- For example, if you want to create an instance group manager that uses an instance template from the same deployment, instead of explicitly typing the full link for the instance template, you can use a reference with the syntax $(ref.instance-template.selfLink) .

### "Storing Templates on an External Host \_|\_ Cloud Deployment Manager \_\

- URL: [https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/hosting-templates-externally](https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/hosting-templates-externally)
- Source ID: `site-docs-root-2`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Infrastructure as code Cloud Deployment Manager Guides Send feedback Storing Templates on an External Host Stay organized with collections Save and categorize content based on your preferences.
- For example: resources : - name : my - salt - cluster type : gs : //v2/saltstack/salt cluster.jinja For a GitHub URL: resources : - name : my - salt - cluster type : https : //raw.githubusercontent.com/GoogleCloudPlatform/deploymentmanager-samples/master/examples/v2/single vm/vm template.jinja If an external template imports other templates or if there is an accompanying schema, you can store the related files in the same directory or relative subdirectory and include these other templates with a relative URL.
- Hosting templates externally has certain advantages over storing your templates locally: Easily share templates with others Ensure that configurations are always using the most up-to-date template Automatically manage relevant imports and schemas Deployment Manager always fetches the latest version of external templates each time you redeploy your configuration.
- For example, a raw URL looks like this: https://raw.githubusercontent.com/GoogleCloudPlatform/deploymentmanager-samples/master/examples/v2/single vm/jinja/vm template.jinja Calling an external template Call an external template like you would a local template, but provide the full URL to the template file as the type.

### "Exposing Information Using Outputs \_|\_ Cloud Deployment Manager \_|\_\

- URL: [https://docs.cloud.google.com/deployment-manager/docs/configuration/expose-information-outputs](https://docs.cloud.google.com/deployment-manager/docs/configuration/expose-information-outputs)
- Source ID: `site-docs-reference`
- Final score: 64
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, the following snippet is accepted by Deployment Manager but if the contents of the templates causes a circular dependency, the deployment would fail: resources : - name : frontend type : frontend . jinja properties : ip : $ ( ref . backend . ip ) - name : backend type : backend . jinja properties : ip : $ ( ref . frontend . ip ) As an example of a circular dependency where the deployment fails, assume both frontend.jinja and backend.jinja looked like this: resources : - name : {{ env [ 'name' ] }} type : compute . v1 . instance properties : zone : us - central1 - f ... networkInterfaces : - network : global / networks / default accessConfigs : - name : External NAT type : ONE TO ONE NAT metadata : items : - key : startup - script value : #!/bin/bash export IP = {{ properties [ "ip" ] }} ... outputs : - name : ip value : $ ( ref . {{ env [ 'name' ] }} . networkInterfaces [ 0 ] . accessConfigs [ 0 ] . natIP ) Recall that both resources used the IP output property from the opposing resource: resources : - name : frontend type : frontend . jinja properties : ip : $ ( ref . backend . ip ) - name : backend type : backend . jinja properties : ip : $ ( ref . frontend . ip ) But neither IP values can be populated because both properties rely on the existence of the other resource, creating a circular dependency.
- Here is the same template, fully expanded: resources : - name : frontend type : compute . v1 . instance properties : zone : us - central1 - f ... networkInterfaces : - network : global / networks / default accessConfigs : - name : External NAT type : ONE TO ONE NAT metadata : items : - key : startup - script value : #!/bin/bash export IP =$ ( ref . backend . networkInterfaces [ 0 ] . accessConfigs [ 0 ] . natIP ) - name : backend type : compute . v1 . instance properties : zone : us - central1 - f ... networkInterfaces : - network : global / networks / default accessConfigs : - name : External NAT type : ONE TO ONE NAT metadata : items : - key : startup - script value : #!/bin/bash export IP =$ ( ref . frontend . networkInterfaces [ 0 ] . accessConfigs [ 0 ] . natIP ) Deployment Manager returns an error if you try to run configuration: code: u'CONDITION NOT MET' message: u'A dependency cycle was found amongst backend, frontend.'>]> However, this template would work if: frontend.jinja created two virtual machine instances, vm-1 and vm-2. backend.jinja created vm-3 and vm-4. vm-1 exposed it's external IP as an output and vm-4 used that output. vm-3 exposed an external IP as an output, vm-2 used that output.
- Home Documentation Infrastructure as code Cloud Deployment Manager Guides Send feedback Exposing Information Using Outputs Stay organized with collections Save and categorize content based on your preferences.
- When you deploy the configuration, Deployment Manager expands the configuration, and then replaces references to outputs with the output values.

