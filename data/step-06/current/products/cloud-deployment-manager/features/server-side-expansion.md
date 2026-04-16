---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T18:41:06.038Z"
product_name: "Cloud Deployment Manager"
product_slug: "cloud-deployment-manager"
feature_name: "Server-side expansion"
feature_slug: "server-side-expansion"
latest_feature_date: "2015-04-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deployment-manager/docs/configuration"
  - "https://docs.cloud.google.com/deployment-manager/docs/deprecations"
  - "https://docs.cloud.google.com/deployment-manager/docs/best-practices"
keywords:
  - "server"
  - "side"
  - "expansion"
  - "deployment"
  - "manager"
  - "supports"
  - "configurations"
---

# Server-side expansion

Product: Cloud Deployment Manager
Coverage: MEDIUM

## Step 02 Summary

Deployment Manager supports server-side expansion of configurations.

## Extended Definition

Deployment Manager supports server-side expansion of configurations.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deployment-manager/docs/configuration](https://docs.cloud.google.com/deployment-manager/docs/configuration)
- [https://docs.cloud.google.com/deployment-manager/docs/deprecations](https://docs.cloud.google.com/deployment-manager/docs/deprecations)
- [https://docs.cloud.google.com/deployment-manager/docs/best-practices](https://docs.cloud.google.com/deployment-manager/docs/best-practices)

## Supporting Pages

### "Configurations Overview \_|\_ Cloud Deployment Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/deployment-manager/docs/configuration](https://docs.cloud.google.com/deployment-manager/docs/configuration)
- Source ID: `site-docs-reference`
- Final score: 95
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Configuration limits All configurations are expanded on the server side within a controlled environment that Deployment Manager maintains.
- Any configurations uploaded to Deployment Manager are limited in the amount of time the configuration can take to run and the amount of processing power the configuration consumes during expansion.
- Home Documentation Infrastructure as code Cloud Deployment Manager Guides Send feedback Configurations Overview Stay organized with collections Save and categorize content based on your preferences.
- In order to prevent abuse, this environment is closely managed by the Deployment Manager team and has some limitations: Neither your original configuration nor your expanded configuration can exceed 1 MB.

### Deployment Manager deprecation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deployment-manager/docs/deprecations](https://docs.cloud.google.com/deployment-manager/docs/deprecations)
- Source ID: `site-api-reference`
- Final score: 81
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Configuration and templating Feature Deployment Manager Infra Manager Considerations Configuration language YAML with Jinja/Python templates Terraform HCL Learn Terraform's HCL language and convert existing DM configurations.
- Deployment updates and rollbacks Feature Deployment Manager Infra Manager Considerations Deployment update mechanism Supports in-place updates and rolling updates.
- Convert your configurations and templates to Infrastructure Manager To convert your Deployment Manager configurations and templates into a Terraform configuration: Convert your Deployment Manager configurations and templates into a Terraform configuration and state file.
- Integration with Google Cloud services Feature Deployment Manager Infra Manager Considerations Integration with Google Cloud services Integrates with various Google Cloud services.

### Best practices for using Deployment Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deployment-manager/docs/best-practices](https://docs.cloud.google.com/deployment-manager/docs/best-practices)
- Source ID: `site-docs-reference`
- Final score: 65
- Re-rank relevance: N/A

Evidence snippets:
- To attach the disk, the configuration has a reference to the disk: resources : instance - name : example-instance type : compute.v1.instance properties : disks : - type : PERSISTENT source:$(ref.example-disk.selfLink) disk - name : example-disk type : compute.v1.disk properties : zone : us-central1-a sizeGb : 10 type : ... ❑ If you want to create and manage private Google Kubernetes Engine (GKE) clusters with Deployment Manager, set the following privateClusterConfig and ipAllocationPolicy options in your deployment. privateClusterConfig : enablePrivateNodes : true enablePrivateEndpoint : true Configure the IP range for the hosted master network masterIpv4CidrBlock : IP RANGE ipAllocationPolicy : useIpAliases : true createSubnetwork : true For requirements and additional considerations when you are creating a private cluster with GKE, read Setting up a private cluster .
- Not a valid instance configuration, used solely for demonstration resources : - name : example-resource type : gcp-types/compute-v1:instances properties : zone : us-central1-a disks : - autoDelete : true boot : true Will not be redacted password : hunter2 Building templates ❑ To speed up defining your templates, consider starting with the production-ready sample templates from the Cloud Foundation Toolkit Project . ❑ If you have complex infrastructure requirements, such as the need to create multiple environments, read the tutorial and samples for using Deployment Manager at scale . ❑ Use Python to build your templates .
- Using Deployment Manager allows you to easily delete resources from a project so that you do not hit your resource quotas. ❑ Use Deployment Manager to create the stateful parts of the project and network configuration and deploy these outside of the CI/CD process as part of the initial setup.
- Including credentials in your deployment ❑ Deployment Manager redacts some fields related to credentials from properties in your YAML configurations.

