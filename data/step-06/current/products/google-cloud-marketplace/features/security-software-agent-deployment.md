---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:28.829Z"
product_name: "Google Cloud Marketplace"
product_slug: "google-cloud-marketplace"
feature_name: "Security software agent deployment"
feature_slug: "security-software-agent-deployment"
latest_feature_date: "2020-02-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/marketplace/docs/deploy-security-software-agents"
  - "https://docs.cloud.google.com/marketplace/docs/manage-deployments"
  - "https://docs.cloud.google.com/marketplace/docs/troubleshooting"
  - "https://docs.cloud.google.com/marketplace/docs/maintain-deployments"
keywords:
  - "security"
  - "software"
  - "agent"
  - "deployment"
  - "marketplace"
  - "lets"
  - "you"
  - "deploy"
---

# Security software agent deployment

Product: Google Cloud Marketplace
Coverage: MEDIUM

## Step 02 Summary

Marketplace lets you deploy security software agents to VM instances in your projects.

## Extended Definition

Marketplace lets you deploy security software agents to VM instances in your projects.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/marketplace/docs/deploy-security-software-agents](https://docs.cloud.google.com/marketplace/docs/deploy-security-software-agents)
- [https://docs.cloud.google.com/marketplace/docs/manage-deployments](https://docs.cloud.google.com/marketplace/docs/manage-deployments)
- [https://docs.cloud.google.com/marketplace/docs/troubleshooting](https://docs.cloud.google.com/marketplace/docs/troubleshooting)
- [https://docs.cloud.google.com/marketplace/docs/maintain-deployments](https://docs.cloud.google.com/marketplace/docs/maintain-deployments)

## Supporting Pages

### "Deploying security software agents \_|\_ Google Cloud Marketplace \_|\_\

- URL: [https://docs.cloud.google.com/marketplace/docs/deploy-security-software-agents](https://docs.cloud.google.com/marketplace/docs/deploy-security-software-agents)
- Source ID: `site-iam-reference`
- Final score: 326
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before you begin Enable OS Configuration Management: Enable the OS Configuration Management API Install the OS Configuration agent on your VMs Configure the project metadata You must have the following permissions: osconfig.guestPolicies.create osconfig.guestPolicies.delete osconfig.guestPolicies.get osconfig.guestPolicies.list storage.buckets.create storage.buckets.get storage.objects.create storage.objects.delete We recommend creating an Identity and Access Management custom role with these permissions, and assigning the role to users who can deploy security software agents from Cloud Marketplace.
- Home Documentation Access and resource management Google Cloud Marketplace Guides Send feedback Deploying security software agents Stay organized with collections Save and categorize content based on your preferences.
- You can deploy security software agents from Cloud Marketplace to the VM instances in your project.
- This will facilitate the task of troubleshooting future deployments. gcloud compute project-info add-metadata --metadata=osconfig-log-level=debug To verify that the metadata has been set up properly, use this command: gcloud compute project-info describe --flatten="commonInstanceMetadata[]" Deploying a security agent To see the security agents available on Cloud Marketplace, use the Security filter.

### Managing deployments \_|\_ Google Cloud Marketplace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/marketplace/docs/manage-deployments](https://docs.cloud.google.com/marketplace/docs/manage-deployments)
- Source ID: `site-docs-root`
- Final score: 241
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create additional instances Connect Cloud Storage to instances Add persistent disks to your instances Managing logging and monitoring for your deployment Some Cloud Marketplace apps include the Cloud Logging and Cloud Monitoring agents, which collect metrics, events, and metadata from your deployment.
- Updating your deployments To update a software package included in a deployment, deploy a newer version of the product from the Product Details page in Cloud Marketplace .
- If you want to disable Monitoring and Logging, do the following: For each VM instance in your deployment, run the following gcloud command to disable Cloud Monitoring: gcloud compute instances add - metadata [ YOUR INSTANCE NAME ] \ --metadata google-monitoring-enable=0,google-logging-enable=0 Sign in to each of your VMs using SSH, and restart the agents using the following commands: sudo service stackdriver-agent restart sudo service google-fluentd restart For tips on controlling your costs, see the pricing information .
- Modifying and scaling your deployments After your software package is deployed, you might need to add additional storage, create additional instances, or include additional software on your existing instances.

### "Troubleshooting deployments \_|\_ Google Cloud Marketplace \_|\_ Google\

- URL: [https://docs.cloud.google.com/marketplace/docs/troubleshooting](https://docs.cloud.google.com/marketplace/docs/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Contents Accessing your deployment Deployment Manager failure Missing permissions Software installation failure Network and firewall issues Sending email from software deployments Accessing your deployment You can return to your solutions by revisiting the Cloud Marketplace .
- Home Documentation Access and resource management Google Cloud Marketplace Guides Send feedback Troubleshooting deployments Stay organized with collections Save and categorize content based on your preferences.
- Network and firewall issues If your software deployment hosts content on an external IP address , the software deployment automatically configures firewall rules on the network where your deployment runs.
- If your deployment creates all of the requested resources but you see a deployment error message in Deployment Manager , it's possible that the software failed to install or configure successfully.

### "Maintain your deployed products \_|\_ Google Cloud Marketplace \_|\_ Google\

- URL: [https://docs.cloud.google.com/marketplace/docs/maintain-deployments](https://docs.cloud.google.com/marketplace/docs/maintain-deployments)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- Update your existing deployment To ensure that your existing deployment of a software package is up to date, you must redeploy the software package from Cloud Marketplace.
- Google Cloud Marketplace updates the images of the software packages that you can deploy on an ongoing basis, to fix critical issues and vulnerabilities.
- Home Documentation Access and resource management Google Cloud Marketplace Send feedback Maintain your deployed products Stay organized with collections Save and categorize content based on your preferences.
- However, it doesn't update software that you've already deployed.

