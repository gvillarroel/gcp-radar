---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.821Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build custom organization policies"
feature_slug: "cloud-build-custom-organization-policies"
latest_feature_date: "2024-08-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
  - "https://docs.cloud.google.com/docs/buildpacks/python"
  - "https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers"
keywords:
  - "policies"
  - "grained"
  - "fine"
  - "organization"
  - "custom"
  - "supports"
---

# Cloud Build custom organization policies

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

Cloud Build now supports custom organization policies for fine-grained organizational constraints at org, folder, and project levels.

## Extended Definition

Cloud Build now supports custom organization policies for fine-grained organizational constraints at org, folder, and project levels.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- [https://docs.cloud.google.com/docs/buildpacks/python](https://docs.cloud.google.com/docs/buildpacks/python)
- [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)

## Supporting Pages

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference-2`
- Final score: 153
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Test the custom constraint To test the example that restricts ingress settings, deploy a connector in the project with network set to default : gcloud compute networks vpc-access connectors create org-policy-test \ --project = PROJECT ID \ --region = REGION ID \ --network = default The output is the following: Operation denied by custom org policies: ["customConstraints/custom.defaultNetworkConstraint": "Require network to not be set to default."] Example custom organization policies for common use cases The following table provides examples of custom constraints that you might find useful with Serverless VPC Access connectors: Description Constraint syntax Require that Serverless VPC Access connectors can only use a specific network. name : organizations/ ORGANIZATION ID /customConstraints/custom.allowlistNetworks resourceTypes : - vpcaccess.googleapis.com/Connector methodTypes : - CREATE condition : "resource.network == 'allowlisted-network'" actionType : ALLOW displayName : allowlistNetworks description : Require connectors to use a specific network.
- To verify that the custom constraint exists, use the gcloud org-policies list-custom-constraints command: gcloud org-policies list-custom-constraints --organization = ORGANIZATION ID Replace ORGANIZATION ID with the ID of your organization resource.
- Create a custom constraint A custom constraint is defined in a YAML file by the resources, methods, conditions, and actions that are supported by the service that you are enforcing the organization policy on.
- However, if you want more granular, customizable control over the specific fields that are restricted in your organization policies, you can also create custom organization policies.

### Build a Python application \_|\_ Buildpacks \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/docs/buildpacks/python](https://docs.cloud.google.com/docs/buildpacks/python)
- Source ID: `site-docs-reference`
- Final score: 100
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example: pack build sample-python \ --builder gcr.io/buildpacks/builder --env "GOOGLE ENTRYPOINT='gunicorn --bind :$PORT main:app'" Environment Variables The Python buildpack supports the following environment variables to customize your container PIP <key> See pip documentation .
- The Python buildpack sets the default entrypoint based on the following order of precedence, as defined in the requirements.txt file: gunicorn uvicorn fastapi[standard] gradio streamlit google-adk Configure the web server or framework For each common Python configurations in the requirements.txt file, the following table shows the default entrypoints when deploying to Cloud Run from source: Primary configuration Default entrypoint Environment variables gunicorn gunicorn -b :8080 main:app numpy gunicorn -b :8080 main:app fastapi uvicorn uvicorn main:app --host 0.0.0.0 --port 8080 fastapi[standard] uvicorn main:app --host 0.0.0.0 --port 8080 uvicorn gunicorn gunicorn -b :8080 main:app gradio python main.py GRADIO SERVER NAME=0.0.0.0 GRADIO SERVER PORT=8080 streamlit streamlit run main.py --server.address 0.0.0.0 --server.port 8080 google-adk adk api server --host 0.0.0.0 --port 8080 To avoid deployment failures, use a supported Python version in your source files, and specify a web server in your requirements.txt file.
- Supported buildpacks configurations Python buildpacks supports the following configurations: pip buildpack : Installs dependencies directly from pyproject.toml if it detects all the following conditions: A pyproject.toml file is present in the root directory and you don't configure high-precedence tools such as a poetry.lock file, a [tool.poetry] section, or a uv.lock file.
- Apps built with the Python buildpack start the gunicorn process with default settings, similar to running: gunicorn --bind :8080 main:app Customize the application entrypoint You can customize the applications start command by using a Procfile or an environment variable.

### Create and manage build triggers \_|\_ Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)
- Source ID: `site-docs-root-2`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- To only allow builds from specific sources, set an organization policy for allowed integrations ( constraints/cloudbuild.allowedIntegrations ) to deny interaction with the source defined in your trigger.
- Your administrator might also be able to give the required permissions through custom roles or other predefined roles .
- You can specify that your app is deployed to an environment in your build config file and then use this field to define substitution variables specifying which environment this trigger should deploy to.
- Substitution variables (optional): If you selected the Cloud Build config file as your build config option, you can choose to define trigger-specific substitution variables using this field.

