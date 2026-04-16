---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:30.393Z"
product_name: "Infrastructure Manager"
product_slug: "infrastructure-manager"
feature_name: "Terraform blueprint catalog"
feature_slug: "terraform-blueprint-catalog"
latest_feature_date: "2024-12-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/infrastructure-manager/docs/reference/rest/v1/TerraformBlueprint"
  - "https://docs.cloud.google.com/infrastructure-manager/docs/terraform"
  - "https://docs.cloud.google.com/infrastructure-manager/docs/deploy-vpc-with-terraform"
  - "https://docs.cloud.google.com/infrastructure-manager/docs/reference/rest/v1/TerraformError"
keywords:
  - "terraform"
  - "blueprint"
  - "catalog"
  - "the"
  - "provides"
  - "sample"
  - "blueprints"
  - "for"
---

# Terraform blueprint catalog

Product: Infrastructure Manager
Coverage: MEDIUM

## Step 02 Summary

The Terraform blueprint catalog provides sample blueprints for Infrastructure Manager deployments.

## Extended Definition

The Terraform blueprint catalog provides sample blueprints for Infrastructure Manager deployments.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/infrastructure-manager/docs/reference/rest/v1/TerraformBlueprint](https://docs.cloud.google.com/infrastructure-manager/docs/reference/rest/v1/TerraformBlueprint)
- [https://docs.cloud.google.com/infrastructure-manager/docs/terraform](https://docs.cloud.google.com/infrastructure-manager/docs/terraform)
- [https://docs.cloud.google.com/infrastructure-manager/docs/deploy-vpc-with-terraform](https://docs.cloud.google.com/infrastructure-manager/docs/deploy-vpc-with-terraform)
- [https://docs.cloud.google.com/infrastructure-manager/docs/reference/rest/v1/TerraformError](https://docs.cloud.google.com/infrastructure-manager/docs/reference/rest/v1/TerraformError)

## Supporting Pages

### TerraformBlueprint \_|\_ Infrastructure Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/infrastructure-manager/docs/reference/rest/v1/TerraformBlueprint](https://docs.cloud.google.com/infrastructure-manager/docs/reference/rest/v1/TerraformBlueprint)
- Source ID: `site-api-reference`
- Final score: 218
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation GitSource JSON representation TerraformVariable JSON representation ExternalValueSource JSON representation DeploymentSource JSON representation TerraformBlueprint describes the source of a Terraform root module which describes the resources and configs to be deployed.
- Input variable values for the Terraform blueprint.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- JSON representation { "inputValues" : { string : { object ( TerraformVariable ) } , ... } , "externalValues" : { string : { object ( ExternalValueSource ) } , ... } , // Union field source can be only one of the following: "gcsSource" : string , "gitSource" : { object ( GitSource ) } // End of list of possible types for union field source . } Fields inputValues map (key: string, value: object ( TerraformVariable )) Optional.

### Terraform and Infrastructure Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/infrastructure-manager/docs/terraform](https://docs.cloud.google.com/infrastructure-manager/docs/terraform)
- Source ID: `site-docs-root`
- Final score: 192
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Terraform modules for Google Cloud For a set of modules to provision Google Cloud resources, see Terraform blueprints and modules for Google Cloud .
- Infra Manager uses the term blueprint to refer to a Terraform configuration.
- Check supported versions of the provider To check the versions of a Terraform provider for Google Cloud that Infra Manager supports, you'll need to view the manifest.json in the Infra Manager maintained Cloud Storage bucket associated with the region of your deployment in the format: https://storage.googleapis.com/ LOCATION -im-providers/hashicorp/ PROVIDER VERSION /manifest.json You can find a complete list of supported versions within the versions field of the manifest.json file.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

### "Quickstart: Deploy a VPC with Infrastructure Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/infrastructure-manager/docs/deploy-vpc-with-terraform](https://docs.cloud.google.com/infrastructure-manager/docs/deploy-vpc-with-terraform)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For a set of configurations and modules ready to use with Google Cloud, see Terraform blueprints and modules for Google Cloud .
- The following command adds these values: your project ID, the service account name, the location us-central1 , and the name quickstart-vpc for the network you're creating. gcloud infra-manager deployments apply projects/ PROJECT ID /locations/us-central 1 /deployments/quickstart-deployment \ --service-account = projects/ PROJECT ID /serviceAccounts/ SERVICE ACCOUNT NAME @ PROJECT ID . iam.gserviceaccount.com \ --git-source-repo = https : //github.com/terraform-google-modules/terraform-google-network \ --git-source-directory = modules/vpc \ --git-source-ref = main \ --input-values = project id = PROJECT ID , network name = quickstart-vpc When the deployment is done, you see: Creating the deployment...done The VPC is now created and configured as described in the configuration.
- To create a preview, use the following command: gcloud infra-manager previews create projects/ PROJECT ID /locations/us-central 1 /previews/quickstart-preview \ --service-account projects/ PROJECT ID /serviceAccounts/ SERVICE ACCOUNT NAME @ PROJECT ID . iam.gserviceaccount.com \ --git-source-repo = https : //github.com/terraform-google-modules/terraform-google-network \ --git-source-directory = modules/vpc \ --git-source-ref = main \ --input-values = project id = PROJECT ID , network name = quickstart-vpc After you create a preview, you can review the preview results.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

### TerraformError \_|\_ Infrastructure Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/infrastructure-manager/docs/reference/rest/v1/TerraformError](https://docs.cloud.google.com/infrastructure-manager/docs/reference/rest/v1/TerraformError)
- Source ID: `site-api-reference`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation Errors encountered during actuation using Terraform JSON representation { "resourceAddress" : string , "httpResponseCode" : integer , "errorDescription" : string , "error" : { object ( Status ) } } Fields resourceAddress string Address of the resource associated with the error, e.g. google compute network.vpc network . httpResponseCode integer HTTP response code returned from Google Cloud Platform APIs when Terraform fails to provision the resource.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-14 UTC."],[],[]]
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Technology areas Infrastructure Manager Reference Send feedback TerraformError Stay organized with collections Save and categorize content based on your preferences.

