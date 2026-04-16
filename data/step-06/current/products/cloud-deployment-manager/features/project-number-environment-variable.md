---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T18:41:05.968Z"
product_name: "Cloud Deployment Manager"
product_slug: "cloud-deployment-manager"
feature_name: "project_number environment variable"
feature_slug: "project-number-environment-variable"
latest_feature_date: "2017-04-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/use-environment-variables"
  - "https://docs.cloud.google.com/deployment-manager/docs/step-by-step-guide/using-template-and-environment-variables"
  - "https://docs.cloud.google.com/deployment-manager/docs/best-practices"
keywords:
  - "project"
  - "number"
  - "environment"
  - "variable"
  - "deployment"
  - "manager"
  - "templates"
  - "can"
---

# project_number environment variable

Product: Cloud Deployment Manager
Coverage: MEDIUM

## Step 02 Summary

Deployment Manager templates can access a project_number environment variable.

## Extended Definition

Deployment Manager templates can access a project_number environment variable.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/use-environment-variables](https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/use-environment-variables)
- [https://docs.cloud.google.com/deployment-manager/docs/step-by-step-guide/using-template-and-environment-variables](https://docs.cloud.google.com/deployment-manager/docs/step-by-step-guide/using-template-and-environment-variables)
- [https://docs.cloud.google.com/deployment-manager/docs/best-practices](https://docs.cloud.google.com/deployment-manager/docs/best-practices)

## Supporting Pages

### "Using deployment-specific environment variables \_|\_ Cloud Deployment Manager\

- URL: [https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/use-environment-variables](https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/use-environment-variables)
- Source ID: `site-docs-reference-required-5`
- Final score: 214
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
- Final score: 173
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Deploying the configuration To view the configuration file for this deployment, run the following command: nano config-with-many-templates.yaml Save your changes and redeploy your configuration to confirm the variables work. gcloud deployment-manager deployments create deployment-with-template-properties --config config-with-many-templates.yaml Deleting your deployment We recommend that you delete the deployment to avoid charges.
- Open vm-template.py : cd deploymentmanager-samples/examples/v2/step by step guide/step7 use environment variables/python nano vm-template.py # use your preferred text editor Various parts of the template have been replaced with template properties and environment variables.
- Home Documentation Infrastructure as code Cloud Deployment Manager Guides Send feedback Setting template properties and using environment variables Stay organized with collections Save and categorize content based on your preferences.
- You call an environment variable by using this syntax: context . env [ 'variable-name' ] Valid environment variables include the deployment name, the project ID, the name property of your resource, and the type of your configuration.

### Best practices for using Deployment Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deployment-manager/docs/best-practices](https://docs.cloud.google.com/deployment-manager/docs/best-practices)
- Source ID: `site-docs-reference`
- Final score: 130
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Not a valid instance configuration, used solely for demonstration resources : - name : example-resource type : gcp-types/compute-v1:instances properties : zone : us-central1-a disks : - autoDelete : true boot : true Will not be redacted password : hunter2 Building templates ❑ To speed up defining your templates, consider starting with the production-ready sample templates from the Cloud Foundation Toolkit Project . ❑ If you have complex infrastructure requirements, such as the need to create multiple environments, read the tutorial and samples for using Deployment Manager at scale . ❑ Use Python to build your templates .
- With the ability to incorporate resource provisioning as part of a CI/CD pipeline, Deployment Manager allows you to treat your project configuration as code that you can easily test, and reproduce consistent copies of the current production environment or the current environment with changes applied to test in confidence. ❑ Use version control.
- There are a number of predefined IAM roles you can use to determine how much access a user has to call Deployment Manager. ❑ Use IAM roles to restrict what permissions are granted to users to use Deployment Manager. ❑ If you want users to be able to access resources created by Deployment Manager, grant users the roles they require to use resources, but do not grant them permissions to deploy resources directly. ❑ Granting the owner role to a principal will allow them to modify the IAM policy.
- Jinja is easier to get started with, but Python is more flexible for complex deployments where you might have many resources split across multiple environments. ❑ Structure your configuration file (the YAML file) so it only uses one type, and use a top-level template as that type to call all of the other templates.

