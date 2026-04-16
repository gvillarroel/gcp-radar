---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:47.284Z"
product_name: "Service Catalog"
product_slug: "service-catalog"
feature_name: "Private Catalog Terraform support"
feature_slug: "private-catalog-terraform-support"
latest_feature_date: "2021-07-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-catalog/docs/terraform-configuration"
  - "https://docs.cloud.google.com/service-catalog/docs/dm-based-solution"
  - "https://docs.cloud.google.com/service-catalog/docs/marketplace-solutions"
  - "https://docs.cloud.google.com/service-catalog/docs/view-and-launch"
keywords:
  - "private"
  - "catalog"
  - "terraform"
  - "improves"
  - "usage"
  - "by"
  - "adding"
  - "enhancements"
---

# Private Catalog Terraform support

Product: Service Catalog
Coverage: MEDIUM

## Step 02 Summary

Private Catalog improves Terraform usage by adding enhancements for updating solutions, surfacing version highlights, and updating deployments; Private Catalog introduces Terraform support so administrators can create and curate Terraform configurations as catalog solutions.

## Extended Definition

Private Catalog improves Terraform usage by adding enhancements for updating solutions, surfacing version highlights, and updating deployments; Private Catalog introduces Terraform support so administrators can create and curate Terraform configurations as catalog solutions.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-catalog/docs/terraform-configuration](https://docs.cloud.google.com/service-catalog/docs/terraform-configuration)
- [https://docs.cloud.google.com/service-catalog/docs/dm-based-solution](https://docs.cloud.google.com/service-catalog/docs/dm-based-solution)
- [https://docs.cloud.google.com/service-catalog/docs/marketplace-solutions](https://docs.cloud.google.com/service-catalog/docs/marketplace-solutions)
- [https://docs.cloud.google.com/service-catalog/docs/view-and-launch](https://docs.cloud.google.com/service-catalog/docs/view-and-launch)

## Supporting Pages

### "Creating a Terraform configuration \_|\_ Service Catalog \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/service-catalog/docs/terraform-configuration](https://docs.cloud.google.com/service-catalog/docs/terraform-configuration)
- Source ID: `site-docs-reference`
- Final score: 171
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following screenshot illustrates creating a Terraform configuration: Next steps Assign the Terraform configuration to a catalog, so that users in your organization can access and deploy the solution.
- Creating a Terraform configuration When curating Service Catalog solutions for your organization, you can create a Terraform configuration, or config , which your users deploy using Terraform.
- Creating the configuration in Service Catalog After setting up a Cloud Storage bucket with your Terraform module, you create a Service Catalog solution that includes the bucket.
- To create the Terraform configuration as a Service Catalog solution: Go to the Service Catalog Admin Solutions page in the Google Cloud console.

### "Creating a Deployment Manager-based solution \_|\_ Service Catalog \_|\_\

- URL: [https://docs.cloud.google.com/service-catalog/docs/dm-based-solution](https://docs.cloud.google.com/service-catalog/docs/dm-based-solution)
- Source ID: `site-docs-reference`
- Final score: 142
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- After you create a solution, you can share it with your users by adding it to catalogs .
- Before you begin You must have the Catalog Admin ( roles/cloudprivatecatalogproducer.admin ) OR Catalog Manager ( roles/cloudprivatecatalogproducer.manager ) role for the Google Cloud organization associated with the Google Cloud project which has Service Catalog enabled.
- For custom machine types, refer to https://cloud.google.com/compute/docs/instances/creating-instance-with-custom-machine-type machineType : https://www.googleapis.com/compute/v1/projects/{{ env["project"] }}/zones/{{ properties["zone"] }}/machineTypes/{{ properties["machinetype"] }} disks : - deviceName : boot type : PERSISTENT boot : true autoDelete : true initializeParams : diskName : disk-{{ env["deployment"] }} sourceImage : https://www.googleapis.com/compute/v1/projects/debian-cloud/global/images/family/debian-9 networkInterfaces : - network : https://www.googleapis.com/compute/v1/projects/{{ env["project"] }}/global/networks/default Access Config required to give the instance a public IP address accessConfigs : - name : External NAT type : ONE TO ONE NAT Creating the solution in Service Catalog To create a Deployment Manager template-based solution: Go to the Service Catalog Admin Solutions page in the Google Cloud console.
- Enable the APIs Preparing your deployment template To create a Deployment Manager solution in Service Catalog, you first prepare a Deployment Manager template zip file to upload, which must contain the following files: A Jinja template file ending in the .jinja extension or a Python template file ending in the .py extension.

### "Adding a solution from Cloud Marketplace \_|\_ Service Catalog \_|\_ Google\

- URL: [https://docs.cloud.google.com/service-catalog/docs/marketplace-solutions](https://docs.cloud.google.com/service-catalog/docs/marketplace-solutions)
- Source ID: `site-docs-reference`
- Final score: 139
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Adding SaaS solutions To add a SaaS solution in Service Catalog: Go to Cloud Marketplace and filter by APIs & services .
- Adding VMs To add a VM solution in Service Catalog: Go to Cloud Marketplace and filter by Virtual machines .
- Before you begin You must have the Catalog Admin ( roles/cloudprivatecatalogproducer.admin ) OR Catalog Manager ( roles/cloudprivatecatalogproducer.manager ) role for the Google Cloud organization associated with the Google Cloud project which has Service Catalog enabled.
- Adding solutions in Service Catalog allows you to approve and share a curated list of Google Cloud solutions with users in your organization.

### "Viewing and launching solutions \_|\_ Service Catalog \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/service-catalog/docs/view-and-launch](https://docs.cloud.google.com/service-catalog/docs/view-and-launch)
- Source ID: `site-docs-reference`
- Final score: 138
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Go to the Service Catalog page Under TYPE , filter by Terraform and click a solution.
- To manage all of your Terraform state files in Service Catalog, grant the Storage Admin role to your Cloud Build service account for the project where the configuration is shared and the project where you're deploying it.
- Launch a Terraform configuration To launch a Terraform configuration: Go to the Google Cloud console Service Catalog page.
- Go to the Service Catalog page Under TYPE , filter by DM Template and click a solution.

