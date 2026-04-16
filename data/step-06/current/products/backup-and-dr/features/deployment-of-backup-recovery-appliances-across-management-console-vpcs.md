---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:35:01.926Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Deployment of backup/recovery appliances across management console VPCs"
feature_slug: "deployment-of-backup-recovery-appliances-across-management-console-vpcs"
latest_feature_date: "2024-10-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/deployment/deployment-plan"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/deployment/deployment-guide"
keywords:
  - "vpcs"
  - "deployment"
  - "across"
  - "appliances"
  - "management"
  - "console"
  - "recovery"
---

# Deployment of backup/recovery appliances across management console VPCs

Product: Backup and DR
Coverage: MEDIUM

## Step 02 Summary

Administrators can now deploy backup/recovery appliances in any VPC available within the management console project.

## Extended Definition

Administrators can now deploy backup/recovery appliances in any VPC available within the management console project.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/deployment/deployment-plan](https://docs.cloud.google.com/backup-disaster-recovery/docs/deployment/deployment-plan)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/deployment/deployment-guide](https://docs.cloud.google.com/backup-disaster-recovery/docs/deployment/deployment-guide)

## Supporting Pages

### "Set up and plan a backup/recovery appliance deployment \_|\_ Backup and\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/deployment/deployment-plan](https://docs.cloud.google.com/backup-disaster-recovery/docs/deployment/deployment-plan)
- Source ID: `site-docs-reference`
- Final score: 199
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Each Backup and DR deployment includes a single appliance management console managing any number of backup/recovery appliances.
- Supported regions The following section lists the appliance management console and backup/recovery appliances supported regions.
- Appliance management console : The management console serves as the management plane for your backup/recovery appliances.
- These backups require a Backup and DR management console and one or more backup/recovery appliances.

### "Set up and plan a backup/recovery appliance deployment \_|\_ Backup and\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan)
- Source ID: `site-docs-root`
- Final score: 189
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Each Backup and DR deployment includes a single appliance management console managing any number of backup/recovery appliances.
- Supported regions The following section lists the appliance management console and backup/recovery appliances supported regions.
- Appliance management console : The management console serves as the management plane for your backup/recovery appliances.
- These backups require a Backup and DR management console and one or more backup/recovery appliances.

### "Deploy a backup/recovery appliance \_|\_ Backup and DR \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/deployment/deployment-guide](https://docs.cloud.google.com/backup-disaster-recovery/docs/deployment/deployment-guide)
- Source ID: `site-docs-reference`
- Final score: 179
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- It is in this format: projects/test-project/locations/us-central1/operations/operationID The output is displayed as: Terraform You can use the following Terraform resource links to deploy an appliance management console and a backup/recovery appliance: Deploy a appliance management console using Terraform resource Deploy a backup/recovery appliance using Terraform resource Caution: When deploying multiple backup/recovery appliances using Terraform, each appliance must be associated with a unique Service Account.
- Resizing the appliance or changing its machine configuration—changing the series, CPU, memory—can make the backup/recovery appliance unusable. gcloud You can use gcloud CLI to create an appliance management console.
- If you need to add more than 30 appliances, create a new project, deploy a new appliance management console, and then deploy the appliances.
- When the deployment is complete, click Log in to the management console and the appliance management console will open in a new window.

