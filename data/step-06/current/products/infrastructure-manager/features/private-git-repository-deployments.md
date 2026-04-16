---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:30.394Z"
product_name: "Infrastructure Manager"
product_slug: "infrastructure-manager"
feature_name: "Private Git repository deployments"
feature_slug: "private-git-repository-deployments"
latest_feature_date: "2024-03-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/infrastructure-manager/docs/deploy-resources"
  - "https://docs.cloud.google.com/infrastructure-manager/docs/preview-deployment"
  - "https://docs.cloud.google.com/infrastructure-manager/docs/automate-git"
  - "https://docs.cloud.google.com/infrastructure-manager/docs/deploy-vpc-with-terraform"
keywords:
  - "private"
  - "git"
  - "repository"
  - "deployments"
  - "deploy"
  - "infrastructure"
  - "from"
  - "terraform"
---

# Private Git repository deployments

Product: Infrastructure Manager
Coverage: MEDIUM

## Step 02 Summary

Deploy infrastructure from Terraform configurations stored in a private Git repository.

## Extended Definition

Deploy infrastructure from Terraform configurations stored in a private Git repository.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/infrastructure-manager/docs/deploy-resources](https://docs.cloud.google.com/infrastructure-manager/docs/deploy-resources)
- [https://docs.cloud.google.com/infrastructure-manager/docs/preview-deployment](https://docs.cloud.google.com/infrastructure-manager/docs/preview-deployment)
- [https://docs.cloud.google.com/infrastructure-manager/docs/automate-git](https://docs.cloud.google.com/infrastructure-manager/docs/automate-git)
- [https://docs.cloud.google.com/infrastructure-manager/docs/deploy-vpc-with-terraform](https://docs.cloud.google.com/infrastructure-manager/docs/deploy-vpc-with-terraform)

## Supporting Pages

### Deploy infrastructure using Infrastructure Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/infrastructure-manager/docs/deploy-resources](https://docs.cloud.google.com/infrastructure-manager/docs/deploy-resources)
- Source ID: `site-docs-root`
- Final score: 286
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Connect your private Git repository and host to Cloud Build If you are deploying a Terraform configuration from a private Git repository , you need to connect your Git host and repository to Cloud Build.
- Deploy the Terraform configuration: gcloud infra-manager deployments apply projects/ PROJECT ID /locations/ LOCATION /deployments/ DEPLOYMENT ID \ --service-account projects/ SERVICE ACCOUNT PROJECT ID /serviceAccounts/ SERVICE ACCOUNT \ --git-source-repo = " GIT REPO " \ --git-source-directory = " DIRECTORY " \ --git-source-ref = " REF " \ --quota-validation = QUOTA VALIDATION \ --input-values = INPUT 1 NAME = VALUE , INPUT 2 NAME = VALUE \ --tf-version-constraint = TERRAFORM VERSION \ --annotations = " ANNOTATION KEY = ANNOTATION VALUE " --provider-source = SERVICE MAINTAINED Replace: PROJECT ID : the project ID where Infra Manager runs.
- Use Infra Manager in Google Cloud CLI to deploy Terraform configurations from: Cloud Storage buckets Git repositories Local directories See Terraform modules and blueprints for Google Cloud for examples and template Terraform configurations you can use with Infra Manager.
- If your Terraform configuration is stored in a private Git repository , ensure your Git host and repository are connected to Cloud Build .

### Preview a deployment \_|\_ Infrastructure Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/infrastructure-manager/docs/preview-deployment](https://docs.cloud.google.com/infrastructure-manager/docs/preview-deployment)
- Source ID: `site-iam-reference`
- Final score: 236
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To preview the deployment: gcloud infra - manager previews create projects / PROJECT ID / locations / LOCATION / previews / PREVIEW ID \ -- service - account projects / SERVICE ACCOUNT PROJECT ID / serviceAccounts / SERVICE ACCOUNT \ -- git - source - repo = " GIT REPO " \ -- git - source - directory = " DIRECTORY " \ -- git - source - ref = " REF " \ -- input - values = INPUT 1 NAME = VALUE , INPUT 2 NAME = VALUE \ -- tf - version - constraint = TERRAFORM VERSION \ -- annotations = " ANNOTATION KEY = ANNOTATION VALUE " -- provider - source = SERVICE MAINTAINED Replace: PROJECT ID is the project ID where Infrastructure Manager runs.
- To update a deployment stored in a Git repository: If you are using a private Git repository, ensure that you have connected to your GitHub host and GitHub repository using Cloud Build to provide Infra Manager access to your repository.
- Preview using a Terraform configuration stored in a Git repository When you update a deployment, some of the existing resources might not change.
- Preview a new deployment The Terraform configuration that you preview can be in a storage bucket or in a Git repository.

### "Automate the deployment of Google Cloud resources \_|\_ Infrastructure Manager\

- URL: [https://docs.cloud.google.com/infrastructure-manager/docs/automate-git](https://docs.cloud.google.com/infrastructure-manager/docs/automate-git)
- Source ID: `site-iam-reference`
- Final score: 227
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Copy the im cloudbuild workspace module into the main.tf file within your Git repository: module "im-workspace" { source = "terraform-google-modules/bootstrap/google//modules/im cloudbuild workspace" version = " > 7.0" project id = " PROJECT ID " deployment id = " DEPLOYMENT ID " im deployment repo uri = " GIT REPO " im deployment ref = " REF " github app installation id = " GIT APP ID " github personal access token = " TOKEN " } Replace: PROJECT ID : the project ID where Infrastructure Manager runs.
- To automate Terraform configuration deployments when the repository is updated: Install the Cloud Build GitHub App on your GitHub account or in an organization you own.
- Create a deployment (or update your existing deployment) with the im cloudbuild workspace module: gcloud infra-manager deployments apply projects/ PROJECT ID /locations/ LOCATION /deployments/ DEPLOYMENT ID \ --service-account projects/ SERVICE ACCOUNT PROJECT ID /serviceAccounts/ SERVICE ACCOUNT \ --git-source-repo = GIT REPO \ --git-source-directory = DIRECTORY \ --git-source-ref = REF Replace: PROJECT ID : the project ID where Infrastructure Manager runs.
- Now that this automation is set up, the Cloud Build triggers cause the following: When a pull request is made to the repository, Infra Manager creates a preview deployment using the forked Terraform configuration stored in the Git repository.

### "Quickstart: Deploy a VPC with Infrastructure Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/infrastructure-manager/docs/deploy-vpc-with-terraform](https://docs.cloud.google.com/infrastructure-manager/docs/deploy-vpc-with-terraform)
- Source ID: `site-docs-root`
- Final score: 226
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following command adds these values: your project ID, the service account name, the location us-central1 , and the name quickstart-vpc for the network you're creating. gcloud infra-manager deployments apply projects/ PROJECT ID /locations/us-central 1 /deployments/quickstart-deployment \ --service-account = projects/ PROJECT ID /serviceAccounts/ SERVICE ACCOUNT NAME @ PROJECT ID . iam.gserviceaccount.com \ --git-source-repo = https : //github.com/terraform-google-modules/terraform-google-network \ --git-source-directory = modules/vpc \ --git-source-ref = main \ --input-values = project id = PROJECT ID , network name = quickstart-vpc When the deployment is done, you see: Creating the deployment...done The VPC is now created and configured as described in the configuration.
- Deploy a VPC with Terraform Learn how to use Infrastructure Manager to deploy a Virtual Private Cloud (VPC).
- This quickstart uses a Terraform configuration that is stored in a public GitHub repository.
- To create a preview, use the following command: gcloud infra-manager previews create projects/ PROJECT ID /locations/us-central 1 /previews/quickstart-preview \ --service-account projects/ PROJECT ID /serviceAccounts/ SERVICE ACCOUNT NAME @ PROJECT ID . iam.gserviceaccount.com \ --git-source-repo = https : //github.com/terraform-google-modules/terraform-google-network \ --git-source-directory = modules/vpc \ --git-source-ref = main \ --input-values = project id = PROJECT ID , network name = quickstart-vpc After you create a preview, you can review the preview results.

