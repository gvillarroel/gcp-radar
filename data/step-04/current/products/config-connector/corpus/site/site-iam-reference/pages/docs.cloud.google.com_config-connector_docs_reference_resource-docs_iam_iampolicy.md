---
title: "IAMPolicy | Config Connector | Google Cloud Documentation"
url: "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy"
knowledge_key: "corpus"
source_id: "site-iam-reference"
source_type: "site"
content_origin: "bx_web_fallback"
---
# IAMPolicy | Config Connector | Google Cloud Documentation

Source URL: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy

If you want finer-grained control over audit configs, use # IAMAuditConfig. apiVersion: iam.cnrm.cloud.google.com/v1beta1 kind: IAMPolicy metadata: name: iampolicy-sample-project spec: resourceRef: kind: Project name: iampolicy-dep-project bindings: - members: # Replace ${GSA_EMAIL?} with the Config Connector service account&#x27;s # email address. This ensures that the Config Connector service account # can continue to manage the referenced project. - &quot;serviceAccount:${GSA_EMAIL?}&quot; role: roles/owner - members: - serviceAccount:iampolicy-dep-project@iampolicy-dep-project.iam.gserviceaccount.com rol
