---
title: "Access control with IAM | Config Connector | Google Cloud Documentation"
url: "https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions"
knowledge_key: "corpus"
source_id: "site-iam-reference"
source_type: "site"
content_origin: "bx_web_fallback"
---
# Access control with IAM | Config Connector | Google Cloud Documentation

Source URL: https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions

To install Config Connector, you authenticate by creating an IAM service account and then using Workload Identity Federation for GKE for GKE to bind the IAM service accounts with the Kubernetes service accounts. IAM lets Config Connector take action on specific resources. By limiting the permissions assigned to your service accounts, you have greater control over what kinds of resources Config Connector can create.
