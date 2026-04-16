---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T18:41:05.958Z"
product_name: "Cloud Deployment Manager"
product_slug: "cloud-deployment-manager"
feature_name: "username template environment variable"
feature_slug: "username-template-environment-variable"
latest_feature_date: "2018-11-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/use-environment-variables"
  - "https://docs.cloud.google.com/deployment-manager/docs/step-by-step-guide/using-template-and-environment-variables"
  - "https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-basic-template"
keywords:
  - "username"
  - "template"
  - "environment"
  - "variable"
  - "deployment"
  - "manager"
  - "templates"
  - "can"
---

# username template environment variable

Product: Cloud Deployment Manager
Coverage: MEDIUM

## Step 02 Summary

Deployment Manager templates can access a username environment variable in Python and Jinja templates.

## Extended Definition

Deployment Manager templates can access a username environment variable in Python and Jinja templates.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/use-environment-variables](https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/use-environment-variables)
- [https://docs.cloud.google.com/deployment-manager/docs/step-by-step-guide/using-template-and-environment-variables](https://docs.cloud.google.com/deployment-manager/docs/step-by-step-guide/using-template-and-environment-variables)
- [https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-basic-template](https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-basic-template)

## Supporting Pages

### "Using deployment-specific environment variables \_|\_ Cloud Deployment Manager\

- URL: [https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/use-environment-variables](https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/use-environment-variables)
- Source ID: `site-docs-reference-required-5`
- Final score: 208
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Using an environment variable Use the following syntax to add an environment variable to your templates: {{ env [ "deployment" ] }} # Jinja context.env["deployment"] # Python In your template, use the variables as in these examples: Jinja - type: compute.v1.instance name: vm- {{ env [ "deployment" ] }} properties: machineType: zones/us-central1-a/machineTypes/f1-micro serviceAccounts: - email: {{ env [ 'project number' ] }} -compute@ developer.gserviceaccount.com scopes: - ...
- This can be useful if you want the name you declare in the configuration to be the name of the resource in the underlying templates. project The project ID for this deployment. project number The project number for this deployment. current time The UTC timestamp when expansion started for the deployment. type The resource type declared in the top-level configuration. username The current Deployment Manager user.
- Use these environment variables in your Python or Jinja2 templates to get information about your project or deployment.
- Home Documentation Infrastructure as code Cloud Deployment Manager Guides Send feedback Using deployment-specific environment variables Stay organized with collections Save and categorize content based on your preferences.

### "Setting template properties and using environment variables \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/deployment-manager/docs/step-by-step-guide/using-template-and-environment-variables](https://docs.cloud.google.com/deployment-manager/docs/step-by-step-guide/using-template-and-environment-variables)
- Source ID: `site-docs-reference`
- Final score: 201
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Deploying the configuration To view the configuration file for this deployment, run the following command: nano config-with-many-templates.yaml Save your changes and redeploy your configuration to confirm the variables work. gcloud deployment-manager deployments create deployment-with-template-properties --config config-with-many-templates.yaml Deleting your deployment We recommend that you delete the deployment to avoid charges.
- Open vm-template.py : cd deploymentmanager-samples/examples/v2/step by step guide/step7 use environment variables/python nano vm-template.py # use your preferred text editor Various parts of the template have been replaced with template properties and environment variables.
- Home Documentation Infrastructure as code Cloud Deployment Manager Guides Send feedback Setting template properties and using environment variables Stay organized with collections Save and categorize content based on your preferences.
- You can use environment variables in templates to get unique information about your deployment.

### "Creating a Basic Template \_|\_ Cloud Deployment Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-basic-template](https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-basic-template)
- Source ID: `site-docs-reference-2`
- Final score: 157
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, if you create a file named resource type.txt with the following string: compute.v1.instance Import it into your configuration and provide the content inline like so: imports : - path : resource type.txt resources : - name : my-vm type : {{ imports [ "resource type.txt" ] }} # Resolves to "compute.v1.instance" properties : zone : us-central1-a machineType : zones/us-central1-a/machineTypes/f1-micro disks : - deviceName : boot type : PERSISTENT boot : true autoDelete : true initializeParams : sourceImage : projects/debian-cloud/global/images/family/debian-9 networkInterfaces : - network : global/networks/default accessConfigs : - name : External NAT type : ONE TO ONE NAT Deploying templates Once you import a template, use it as a type in your configuration: Jinja imports : - path : vm-template.jinja resources : - name : my-vm type : vm-template.jinja Python imports : - path : vm-template.py resources : - name : my-vm type : vm-template.py If you did not provide a name for your template, call the template using the template path: imports : - path : path / to / my vm template . jinja resources : - name : my - first - virtual - machine type : path / to / my vm template . jinja Deploying templates directly with the command-line tool Instead of creating a top-level configuration file, Deployment Manager offers the ability to deploy a template directly in the Google Cloud CLI.
- With templates, you can also take advantage of features like template properties, environment variables, modules, and other template functionality to create dynamic configuration and template files.
- For examples of templates that you can use in your own deployments, see the Deployment Manager GitHub repository .
- Deployment Manager accepts both Jinja and Python templates.

