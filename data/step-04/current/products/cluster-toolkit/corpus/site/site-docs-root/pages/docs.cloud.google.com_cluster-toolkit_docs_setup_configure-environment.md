---
title: "Set up Cluster Toolkit | Google Cloud Documentation"
url: "https://docs.cloud.google.com/cluster-toolkit/docs/setup/configure-environment"
knowledge_key: "corpus"
source_id: "site-docs-root"
source_type: "site"
content_origin: "bx_web_fallback"
---
# Set up Cluster Toolkit | Google Cloud Documentation

Source URL: https://docs.cloud.google.com/cluster-toolkit/docs/setup/configure-environment

Before you can deploy your cluster, you need to configure your Google Cloud project. The following sections show you how to set a default project, enable the required service accounts and roles, grant credentials to Terraform, and enable OS Login for virtual machine (VM) access. To set a default project, run the following command: Replace PROJECT_ID with your project ID. ... Cluster Toolkit requires that the default Compute Engine service account is enabled in your project and the Compute Instance Admin (v1) role (roles/compute.instanceAdmin.v1) and the Service Account User (roles/iam.serviceAccountUser) role are granted to the service account.
