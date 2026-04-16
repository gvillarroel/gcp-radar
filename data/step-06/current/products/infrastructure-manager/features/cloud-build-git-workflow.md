---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:30.393Z"
product_name: "Infrastructure Manager"
product_slug: "infrastructure-manager"
feature_name: "Cloud Build Git workflow"
feature_slug: "cloud-build-git-workflow"
latest_feature_date: "2024-03-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/infrastructure-manager/docs/automate-git"
  - "https://docs.cloud.google.com/infrastructure-manager/docs/deploy-resources"
  - "https://docs.cloud.google.com/infrastructure-manager/docs/deploy-vpc-with-terraform"
  - "https://docs.cloud.google.com/infrastructure-manager/docs/custom-constraints"
keywords:
  - "build"
  - "git"
  - "workflow"
  - "automate"
  - "infrastructure"
  - "manager"
  - "deployments"
  - "from"
---

# Cloud Build Git workflow

Product: Infrastructure Manager
Coverage: MEDIUM

## Step 02 Summary

Automate Infrastructure Manager deployments from Git repositories with Cloud Build.

## Extended Definition

Automate Infrastructure Manager deployments from Git repositories with Cloud Build.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/infrastructure-manager/docs/automate-git](https://docs.cloud.google.com/infrastructure-manager/docs/automate-git)
- [https://docs.cloud.google.com/infrastructure-manager/docs/deploy-resources](https://docs.cloud.google.com/infrastructure-manager/docs/deploy-resources)
- [https://docs.cloud.google.com/infrastructure-manager/docs/deploy-vpc-with-terraform](https://docs.cloud.google.com/infrastructure-manager/docs/deploy-vpc-with-terraform)
- [https://docs.cloud.google.com/infrastructure-manager/docs/custom-constraints](https://docs.cloud.google.com/infrastructure-manager/docs/custom-constraints)

## Supporting Pages

### "Automate the deployment of Google Cloud resources \_|\_ Infrastructure Manager\

- URL: [https://docs.cloud.google.com/infrastructure-manager/docs/automate-git](https://docs.cloud.google.com/infrastructure-manager/docs/automate-git)
- Source ID: `site-iam-reference`
- Final score: 263
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a deployment (or update your existing deployment) with the im cloudbuild workspace module: gcloud infra-manager deployments apply projects/ PROJECT ID /locations/ LOCATION /deployments/ DEPLOYMENT ID \ --service-account projects/ SERVICE ACCOUNT PROJECT ID /serviceAccounts/ SERVICE ACCOUNT \ --git-source-repo = GIT REPO \ --git-source-directory = DIRECTORY \ --git-source-ref = REF Replace: PROJECT ID : the project ID where Infrastructure Manager runs.
- This page describes the process to set up Cloud Build triggers to automate deployments of Google Cloud resources using your existing repositories and Infrastructure Manager.
- Copy the im cloudbuild workspace module into the main.tf file within your Git repository: module "im-workspace" { source = "terraform-google-modules/bootstrap/google//modules/im cloudbuild workspace" version = " > 7.0" project id = " PROJECT ID " deployment id = " DEPLOYMENT ID " im deployment repo uri = " GIT REPO " im deployment ref = " REF " github app installation id = " GIT APP ID " github personal access token = " TOKEN " } Replace: PROJECT ID : the project ID where Infrastructure Manager runs.
- To automate Terraform configuration deployments when the repository is updated: Install the Cloud Build GitHub App on your GitHub account or in an organization you own.

### Deploy infrastructure using Infrastructure Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/infrastructure-manager/docs/deploy-resources](https://docs.cloud.google.com/infrastructure-manager/docs/deploy-resources)
- Source ID: `site-docs-root`
- Final score: 254
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Deploy the Terraform configuration: gcloud infra-manager deployments apply projects/ PROJECT ID /locations/ LOCATION /deployments/ DEPLOYMENT ID \ --service-account projects/ SERVICE ACCOUNT PROJECT ID /serviceAccounts/ SERVICE ACCOUNT \ --git-source-repo = " GIT REPO " \ --git-source-directory = " DIRECTORY " \ --git-source-ref = " REF " \ --quota-validation = QUOTA VALIDATION \ --input-values = INPUT 1 NAME = VALUE , INPUT 2 NAME = VALUE \ --tf-version-constraint = TERRAFORM VERSION \ --annotations = " ANNOTATION KEY = ANNOTATION VALUE " --provider-source = SERVICE MAINTAINED Replace: PROJECT ID : the project ID where Infra Manager runs.
- Use Infra Manager in Google Cloud CLI to deploy Terraform configurations from: Cloud Storage buckets Git repositories Local directories See Terraform modules and blueprints for Google Cloud for examples and template Terraform configurations you can use with Infra Manager.
- Connect your private Git repository and host to Cloud Build If you are deploying a Terraform configuration from a private Git repository , you need to connect your Git host and repository to Cloud Build.
- You can use Infra Manager from Google Cloud console to deploy from Cloud Storage buckets and Git repositories.

### "Quickstart: Deploy a VPC with Infrastructure Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/infrastructure-manager/docs/deploy-vpc-with-terraform](https://docs.cloud.google.com/infrastructure-manager/docs/deploy-vpc-with-terraform)
- Source ID: `site-docs-root`
- Final score: 205
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following command adds these values: your project ID, the service account name, the location us-central1 , and the name quickstart-vpc for the network you're creating. gcloud infra-manager deployments apply projects/ PROJECT ID /locations/us-central 1 /deployments/quickstart-deployment \ --service-account = projects/ PROJECT ID /serviceAccounts/ SERVICE ACCOUNT NAME @ PROJECT ID . iam.gserviceaccount.com \ --git-source-repo = https : //github.com/terraform-google-modules/terraform-google-network \ --git-source-directory = modules/vpc \ --git-source-ref = main \ --input-values = project id = PROJECT ID , network name = quickstart-vpc When the deployment is done, you see: Creating the deployment...done The VPC is now created and configured as described in the configuration.
- To create a preview, use the following command: gcloud infra-manager previews create projects/ PROJECT ID /locations/us-central 1 /previews/quickstart-preview \ --service-account projects/ PROJECT ID /serviceAccounts/ SERVICE ACCOUNT NAME @ PROJECT ID . iam.gserviceaccount.com \ --git-source-repo = https : //github.com/terraform-google-modules/terraform-google-network \ --git-source-directory = modules/vpc \ --git-source-ref = main \ --input-values = project id = PROJECT ID , network name = quickstart-vpc After you create a preview, you can review the preview results.
- Delete the VPC Delete the VPC and the metadata about the deployment: gcloud infra-manager deployments delete projects/ PROJECT ID /locations/us-central 1 /deployments/quickstart-deployment Optional: Delete the project If you deployed the solution in a new Google Cloud project, and if you no longer the project, then delete it by completing the following steps: Caution: If you delete a project, all the resources in the project are permanently deleted.
- View the build results in Cloud Build To view the Cloud Build job that Infra Manager used to create the deployment, open the Build History page in the Google Cloud console: Open the Build History page View the status of the deployment Now that the deployment is done, you can view its description to review information about it, including the state.

### "Manage Infrastructure Manager resources using custom constraints \_|\_ Google\

- URL: [https://docs.cloud.google.com/infrastructure-manager/docs/custom-constraints](https://docs.cloud.google.com/infrastructure-manager/docs/custom-constraints)
- Source ID: `site-iam-reference`
- Final score: 201
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Test the policy Try to create a Infra Manager deployment that imports existing resources in the project: gcloud infra-manager deployments apply projects/ PROJECT ID /locations/us-central1/deployments/quickstart-deployment \ --service-account = projects/ PROJECT ID /serviceAccounts/ SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com \ --git-source-repo = https://github.com/terraform-google-modules/terraform-google-network \ --git-source-directory = modules/vpc \ --git-source-ref = main \ --input-values = project id = PROJECT ID ,network name = quickstart-vpc The output is the following: Operation denied by custom org policies: ["customConstraints/custom.disallowImportExistingResources": "New deployments disallow the import of existing resources."] Example custom organization policies for common use cases This table provides syntax examples for some common custom constraints.
- Description Constraint syntax Disable importing existing resources for new deployments name : organizations/ ORGANIZATION ID /customConstraints/custom.disallowImportExistingResources resourceTypes : ‐ config.googleapis.com/Deployment methodTypes : ‐ CREATE condition : "resource.importExistingResources == true" actionType : DENY displayName : Reject existing resources description : New deployments disallow the import of existing resources Infrastructure Manager supported resources The following table lists the Infrastructure Manager resources that you can reference in custom constraints.
- Home Documentation Infrastructure as code Infrastructure Manager Guides Send feedback Manage Infrastructure Manager resources using custom constraints Stay organized with collections Save and categorize content based on your preferences.
- Test the custom organization policy The following example creates a custom constraint and policy that forbids all new deployments from importing existing resources.

