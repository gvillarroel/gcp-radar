---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:28.830Z"
product_name: "Google Cloud Marketplace"
product_slug: "google-cloud-marketplace"
feature_name: "VM solution trials"
feature_slug: "vm-solution-trials"
latest_feature_date: "2018-07-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/marketplace/docs/billing"
  - "https://docs.cloud.google.com/marketplace/docs/manage-deployments"
  - "https://docs.cloud.google.com/marketplace/docs/deploy-through-CLI"
  - "https://docs.cloud.google.com/marketplace/docs/deploy-security-software-agents"
keywords:
  - "vm"
  - "solution"
  - "trials"
  - "vendors"
  - "of"
  - "solutions"
  - "can"
  - "offer"
---

# VM solution trials

Product: Google Cloud Marketplace
Coverage: MEDIUM

## Step 02 Summary

Vendors of VM solutions can offer software trials without charging the software license during the trial.

## Extended Definition

Vendors of VM solutions can offer software trials without charging the software license during the trial.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/marketplace/docs/billing](https://docs.cloud.google.com/marketplace/docs/billing)
- [https://docs.cloud.google.com/marketplace/docs/manage-deployments](https://docs.cloud.google.com/marketplace/docs/manage-deployments)
- [https://docs.cloud.google.com/marketplace/docs/deploy-through-CLI](https://docs.cloud.google.com/marketplace/docs/deploy-through-CLI)
- [https://docs.cloud.google.com/marketplace/docs/deploy-security-software-agents](https://docs.cloud.google.com/marketplace/docs/deploy-security-software-agents)

## Supporting Pages

### Billing for Google Cloud Marketplace products \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/marketplace/docs/billing](https://docs.cloud.google.com/marketplace/docs/billing)
- Source ID: `site-iam-reference`
- Final score: 116
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Vendors can create private offers that let you purchase their products at a discount.
- How you're charged for software Vendors offering Cloud Marketplace products choose how they set up their products' pricing plans.
- For more information about accepting private offers for Cloud Marketplace products, see Accept a private offer from a vendor .
- When you get a product from a private offer, you see the pricing in the offer before you accept it.

### Managing deployments \_|\_ Google Cloud Marketplace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/marketplace/docs/manage-deployments](https://docs.cloud.google.com/marketplace/docs/manage-deployments)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- One of the labels is marketplace-suppress-benign-warnings , which blocks warnings that are typically not relevant for Cloud Marketplace solutions.
- If you want to disable Monitoring and Logging, do the following: For each VM instance in your deployment, run the following gcloud command to disable Cloud Monitoring: gcloud compute instances add - metadata [ YOUR INSTANCE NAME ] \ --metadata google-monitoring-enable=0,google-logging-enable=0 Sign in to each of your VMs using SSH, and restart the agents using the following commands: sudo service stackdriver-agent restart sudo service google-fluentd restart For tips on controlling your costs, see the pricing information .
- From either of those pages you can connect to the individual instances to manually install additional software or modify the software packages. (You cannot deploy multiple products to a single instance.) Use Cloud Monitoring to track the performance and availability of your cloud-powered apps.
- It displays a tree view of all the Google Cloud resources that comprise your deployment, as well as letting you SSH directly into your VM instance or manage the instance from the VM Instances page .

### "Deploy virtual machine (VM) products using the command-line interface (CLI)\

- URL: [https://docs.cloud.google.com/marketplace/docs/deploy-through-CLI](https://docs.cloud.google.com/marketplace/docs/deploy-through-CLI)
- Source ID: `site-docs-root`
- Final score: 115
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Virtual machine (VM) products offered through Google Cloud Marketplace are custom VM instances that you can run on Compute Engine.
- If you use impersonation, instead of creating service account keys that anyone can use to access your deployment, you manage access by granting or revoking the Service Account Token Creator ( roles/iam.serviceAccountTokenCreator ) IAM role to specific principals.
- To download the included module or generated code snippet, complete the following steps: Included Terraform module From the Command-line deployment tab of the VM product's Cloud Marketplace listing, click the Download button.
- To select or create your service account: From the Command-line deployment tab of the VM product's Google Cloud Marketplace listing, under Configure a service account (optional) , click the Configure button.

### "Deploying security software agents \_|\_ Google Cloud Marketplace \_|\_\

- URL: [https://docs.cloud.google.com/marketplace/docs/deploy-security-software-agents](https://docs.cloud.google.com/marketplace/docs/deploy-security-software-agents)
- Source ID: `site-iam-reference`
- Final score: 115
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before you begin Enable OS Configuration Management: Enable the OS Configuration Management API Install the OS Configuration agent on your VMs Configure the project metadata You must have the following permissions: osconfig.guestPolicies.create osconfig.guestPolicies.delete osconfig.guestPolicies.get osconfig.guestPolicies.list storage.buckets.create storage.buckets.get storage.objects.create storage.objects.delete We recommend creating an Identity and Access Management custom role with these permissions, and assigning the role to users who can deploy security software agents from Cloud Marketplace.
- You can deploy security software agents from Cloud Marketplace to the VM instances in your project.
- For example, if you want to create an Identity and Access Management custom role called Security Agent Deployer, you first create a SecurityAgentDeployer.yaml file: title: SecurityAgentDeployer description: Role for Users who deploy Security Agents in a project stage: GA includedPermissions: - osconfig.guestPolicies.create - osconfig.guestPolicies.delete - osconfig.guestPolicies.get - osconfig.guestPolicies.list - storage.buckets.create - storage.buckets.get - storage.objects.create - storage.objects.delete After you create your YAML file, to create the {iam name} custom role, run the following command: gcloud iam roles create role-id --project=project-id \ --file=SecurityAgentDeployer.yaml After you create the {iam name} custom role Security Agent Deployer, grant it to your users who you expect to deploy security agents: gcloud projects add - iam - policy - binding < project - id > \ --member=user:my-user@example.com \ --role=projects/<project-id>/roles/SecurityAgentDeployer Configure the project metadata You can use the Google Cloud console or Google Cloud CLI to configure the project metadata for the OS Configuration agent installed in the VM instances.
- Select the guest policies for the security agent, and then click Delete . gcloud Use this command to list all your guest policies: gcloud beta compute os-config guest-policies list From the list of guest policies, copy the IDs of the guest policies for the security product, and then run this command to delete each of the guest policies: gcloud beta compute os-config guest-policies delete POLICY ID Create a guest policy to remove the agent After you delete the guest policies for security agent, you must create a new policy that removes the security agent from your VMs, using the desiredState: REMOVED property.

