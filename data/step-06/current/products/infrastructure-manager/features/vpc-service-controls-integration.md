---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:30.394Z"
product_name: "Infrastructure Manager"
product_slug: "infrastructure-manager"
feature_name: "VPC Service Controls integration"
feature_slug: "vpc-service-controls-integration"
latest_feature_date: "2023-09-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/infrastructure-manager/docs/deploy-vpc-with-terraform"
  - "https://docs.cloud.google.com/infrastructure-manager/docs/import-resources"
  - "https://docs.cloud.google.com/infrastructure-manager/docs/authentication"
  - "https://docs.cloud.google.com/infrastructure-manager/docs/access-control"
keywords:
  - "vpc"
  - "controls"
  - "integration"
  - "infrastructure"
  - "manager"
  - "integrates"
  - "with"
---

# VPC Service Controls integration

Product: Infrastructure Manager
Coverage: MEDIUM

## Step 02 Summary

Infrastructure Manager integrates with VPC Service Controls.

## Extended Definition

Infrastructure Manager integrates with VPC Service Controls.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/infrastructure-manager/docs/deploy-vpc-with-terraform](https://docs.cloud.google.com/infrastructure-manager/docs/deploy-vpc-with-terraform)
- [https://docs.cloud.google.com/infrastructure-manager/docs/import-resources](https://docs.cloud.google.com/infrastructure-manager/docs/import-resources)
- [https://docs.cloud.google.com/infrastructure-manager/docs/authentication](https://docs.cloud.google.com/infrastructure-manager/docs/authentication)
- [https://docs.cloud.google.com/infrastructure-manager/docs/access-control](https://docs.cloud.google.com/infrastructure-manager/docs/access-control)

## Supporting Pages

### "Quickstart: Deploy a VPC with Infrastructure Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/infrastructure-manager/docs/deploy-vpc-with-terraform](https://docs.cloud.google.com/infrastructure-manager/docs/deploy-vpc-with-terraform)
- Source ID: `site-docs-root`
- Final score: 214
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Deploy a VPC with Terraform Learn how to use Infrastructure Manager to deploy a Virtual Private Cloud (VPC).
- View details about the provisioned VPC View details about the provisioned VPC: gcloud infra-manager resources list --revision = projects/ PROJECT ID /locations/us-central 1 /deployments/quickstart-deployment/revisions/ REVISION ID Replace REVISION ID with the ID of the latest revision.
- Home Documentation Infrastructure as code Infrastructure Manager Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- The following command adds these values: your project ID, the service account name, the location us-central1 , and the name quickstart-vpc for the network you're creating. gcloud infra-manager deployments apply projects/ PROJECT ID /locations/us-central 1 /deployments/quickstart-deployment \ --service-account = projects/ PROJECT ID /serviceAccounts/ SERVICE ACCOUNT NAME @ PROJECT ID . iam.gserviceaccount.com \ --git-source-repo = https : //github.com/terraform-google-modules/terraform-google-network \ --git-source-directory = modules/vpc \ --git-source-ref = main \ --input-values = project id = PROJECT ID , network name = quickstart-vpc When the deployment is done, you see: Creating the deployment...done The VPC is now created and configured as described in the configuration.

### "Import deployed resources into Infrastructure Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/infrastructure-manager/docs/import-resources](https://docs.cloud.google.com/infrastructure-manager/docs/import-resources)
- Source ID: `site-iam-reference`
- Final score: 162
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SIGNED BIN PLAN URL =$ ( gcloud infra - manager previews export projects / PROJECT ID / locations / us - central1 / previews / IMPORT DEPLOYMENT PREVIEW NAME -- format "get(result.binarySignedUri)" ) curl - X GET -- output tfplan . out $ SIGNED BIN PLAN URL Ensure the configuration is present locally and initialized with the following command: terraform init Run Terraform show to review changes between Infrastructure Manager deployment state and the configuration. terraform show tfplan.out If the VPC resource on Google Cloud and the state file are in sync, then terraform show outputs the following validating that Infrastructure Manager does not see any changes between deployment state and the configuration.
- Costs This tutorial uses the following billable components of Google Cloud: Infrastructure Manager Virtual Private Cloud (VPC) Before you begin Note: If you're using this tutorial to understand how to import other deployments into Infra Manager, ensure that the Terraform configuration you used to provision the resources the complies with the constraints , and that the resources were provisioned using a supported Terraform version .
- Delete a Google Cloud project: gcloud projects delete PROJECT ID Delete individual resources Delete the VPC and the metadata about the deployment: gcloud infra-manager deployments delete projects/ PROJECT ID /locations/us-central1/deployments/quickstart-deployment What's next Learn more about Terraform with Google Cloud .
- Home Documentation Infrastructure as code Infrastructure Manager Guides Send feedback Import deployed resources into Infrastructure Manager Stay organized with collections Save and categorize content based on your preferences.

### "Authenticate to Infra Manager \_|\_ Infrastructure Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/infrastructure-manager/docs/authentication](https://docs.cloud.google.com/infrastructure-manager/docs/authentication)
- Source ID: `site-api-reference`
- Final score: 151
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Infrastructure as code Infrastructure Manager Reference Send feedback Authenticate to Infra Manager Stay organized with collections Save and categorize content based on your preferences.
- You can access the API in the following ways: Google Cloud CLI REST Google Cloud CLI When you use the gcloud CLI to access Infra Manager, you log in to the gcloud CLI with a user account, which provides the credentials used by the gcloud CLI commands.
- How you authenticate to Infrastructure Manager depends on the interface you use to access the API and the environment where your code is running.
- Before you complete these instructions, you must complete the basic setup for Infra Manager, as described in Enable Infrastructure Manager .

### "Access control with IAM \_|\_ Infrastructure Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/infrastructure-manager/docs/access-control](https://docs.cloud.google.com/infrastructure-manager/docs/access-control)
- Source ID: `site-iam-reference`
- Final score: 145
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Infrastructure as code Infrastructure Manager Guides Send feedback Access control with IAM Stay organized with collections Save and categorize content based on your preferences.
- The following table lists the Infra Manager IAM roles and the permissions that they include: Role Description Permissions Infra Manager Admin ( roles/config.admin ) For a user, full control to Infra Manager resources config.deployments.create config.deployments.delete config.deployments.deleteState config.deployments.get config.deployments.getIamPolicy config.deployments.getLock config.deployments.getState config.deployments.list config.deployments.lock config.deployments.setIamPolicy config.deployments.unlock config.deployments.update config.deployments.updateState config.automigrationconfig.get config.automigrationconfig.update config.previews.create config.previews.delete config.previews.get config.previews.list config.previews.export config.previews.upload config.locations.get config.locations.list config.operations.cancel config.operations.delete config.operations.get config.operations.list config.resources.get config.resources.list config.resourcechanges.get config.resourcechanges.list config.resourcedrifts.get config.resourcedrifts.list config.revisions.get config.revisions.getState config.revisions.list config.artifacts.import config.terraformversions.get config.terraformversions.list resourcemanager.projects.get resourcemanager.projects.list Infra Manager Service Agent ( roles/config.agent ) Provide access to a service account to work with Infra Manager, including deployments, revisions, logging, and Terraform state files. storage.buckets.get storage.buckets.list storage.buckets.create storage.buckets.update storage.buckets.delete storage.objects.get storage.objects.list storage.objects.create storage.objects.update storage.objects.delete logging.logEntries.create config.deployments.getState config.deployments.updateState config.deployments.deleteState config.deployments.getLock config.previews.upload config.artifacts.import config.revisions.getState cloudbuild.connections.list cloudbuild.repositories.accessReadToken cloudbuild.repositories.list cloudquotas.quotas.get monitoring.timeSeries.list Infra Manager Service Account ( roles/cloudconfig.serviceAgent ) When you enable the Infra Manager API, the Infra Manager service account is automatically created in the project and is granted this role for the resources in the project.
- To grant access to deploy resources with Infra Manager, assign the needed Infra Manager IAM roles to the service account that you use to call Infra Manager.
- This page describes Infrastructure Manager roles and permissions.

