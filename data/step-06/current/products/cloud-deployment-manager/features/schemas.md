---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T18:41:05.990Z"
product_name: "Cloud Deployment Manager"
product_slug: "cloud-deployment-manager"
feature_name: "Schemas"
feature_slug: "schemas"
latest_feature_date: "2015-11-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deployment-manager/docs/configuration/using-schemas"
  - "https://docs.cloud.google.com/deployment-manager/docs/best-practices"
  - "https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/hosting-templates-externally"
keywords:
  - "schemas"
  - "deployment"
  - "manager"
  - "supports"
  - "define"
  - "rules"
  - "templates"
---

# Schemas

Product: Cloud Deployment Manager
Coverage: MEDIUM

## Step 02 Summary

Deployment Manager supports schemas to define rules for using templates.

## Extended Definition

Deployment Manager supports schemas to define rules for using templates.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deployment-manager/docs/configuration/using-schemas](https://docs.cloud.google.com/deployment-manager/docs/configuration/using-schemas)
- [https://docs.cloud.google.com/deployment-manager/docs/best-practices](https://docs.cloud.google.com/deployment-manager/docs/best-practices)
- [https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/hosting-templates-externally](https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/hosting-templates-externally)

## Supporting Pages

### Using Schemas \_|\_ Cloud Deployment Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deployment-manager/docs/configuration/using-schemas](https://docs.cloud.google.com/deployment-manager/docs/configuration/using-schemas)
- Source ID: `site-docs-reference-required-5`
- Final score: 145
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Deployment Manager accepts schemas written according to draft 4 of the JSON schema specifications . < mongodb . py . schema > info : title : MongoDB Template author : Jane description : Creates a MongoDB cluster version : 1.0 imports : - path : helper . py name : mongodb helper . py required : - name properties : name : type : string description : Name of your Mongo Cluster size : type : integer default : 2 description : Number of Mongo Slaves zone : type : string default : us - central1 - a description : Zone to run metadata : gce - zone A valid schema file is a JSON schema file with the addition of two top level fields, info and imports .
- Home Documentation Infrastructure as code Cloud Deployment Manager Guides Send feedback Using Schemas Stay organized with collections Save and categorize content based on your preferences.
- In addition to defining the rules of a template, schemas also allow your users to interface with the templates you write, without needing to review and learn about each layer of templates.
- Use a schema gcloud When you create a deployment using the Google Cloud CLI, Deployment Manager automatically uploads all of the relevant templates for the configuration for you.

### Best practices for using Deployment Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deployment-manager/docs/best-practices](https://docs.cloud.google.com/deployment-manager/docs/best-practices)
- Source ID: `site-docs-reference`
- Final score: 111
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Not a valid instance configuration, used solely for demonstration resources : - name : example-resource type : gcp-types/compute-v1:instances properties : zone : us-central1-a disks : - autoDelete : true boot : true Will not be redacted password : hunter2 Building templates ❑ To speed up defining your templates, consider starting with the production-ready sample templates from the Cloud Foundation Toolkit Project . ❑ If you have complex infrastructure requirements, such as the need to create multiple environments, read the tutorial and samples for using Deployment Manager at scale . ❑ Use Python to build your templates .
- There are a number of predefined IAM roles you can use to determine how much access a user has to call Deployment Manager. ❑ Use IAM roles to restrict what permissions are granted to users to use Deployment Manager. ❑ If you want users to be able to access resources created by Deployment Manager, grant users the roles they require to use resources, but do not grant them permissions to deploy resources directly. ❑ Granting the owner role to a principal will allow them to modify the IAM policy.
- Schemas define a set of rules that a configuration file must follow to use a particular template.
- To attach the disk, the configuration has a reference to the disk: resources : instance - name : example-instance type : compute.v1.instance properties : disks : - type : PERSISTENT source:$(ref.example-disk.selfLink) disk - name : example-disk type : compute.v1.disk properties : zone : us-central1-a sizeGb : 10 type : ... ❑ If you want to create and manage private Google Kubernetes Engine (GKE) clusters with Deployment Manager, set the following privateClusterConfig and ipAllocationPolicy options in your deployment. privateClusterConfig : enablePrivateNodes : true enablePrivateEndpoint : true Configure the IP range for the hosted master network masterIpv4CidrBlock : IP RANGE ipAllocationPolicy : useIpAliases : true createSubnetwork : true For requirements and additional considerations when you are creating a private cluster with GKE, read Setting up a private cluster .

### "Storing Templates on an External Host \_|\_ Cloud Deployment Manager \_\

- URL: [https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/hosting-templates-externally](https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/hosting-templates-externally)
- Source ID: `site-docs-root-2`
- Final score: 105
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Hosting templates externally has certain advantages over storing your templates locally: Easily share templates with others Ensure that configurations are always using the most up-to-date template Automatically manage relevant imports and schemas Deployment Manager always fetches the latest version of external templates each time you redeploy your configuration.
- For example: resources : - name : my - salt - cluster type : gs : //v2/saltstack/salt cluster.jinja For a GitHub URL: resources : - name : my - salt - cluster type : https : //raw.githubusercontent.com/GoogleCloudPlatform/deploymentmanager-samples/master/examples/v2/single vm/vm template.jinja If an external template imports other templates or if there is an accompanying schema, you can store the related files in the same directory or relative subdirectory and include these other templates with a relative URL.
- Home Documentation Infrastructure as code Cloud Deployment Manager Guides Send feedback Storing Templates on an External Host Stay organized with collections Save and categorize content based on your preferences.
- Deployment Manager will also handle importing other dependent templates for you if they are referenced in the external template.

