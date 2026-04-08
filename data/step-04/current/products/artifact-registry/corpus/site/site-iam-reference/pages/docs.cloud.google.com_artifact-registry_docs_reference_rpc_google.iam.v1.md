---
title: "Package google.iam.v1 | Artifact Registry | Google Cloud Documentation"
url: "https://docs.cloud.google.com/artifact-registry/docs/reference/rpc/google.iam.v1"
knowledge_key: "corpus"
source_id: "site-iam-reference"
source_type: "site"
content_origin: "bx_web_fallback"
---
# Package google.iam.v1 | Artifact Registry | Google Cloud Documentation

Source URL: https://docs.cloud.google.com/artifact-registry/docs/reference/rpc/google.iam.v1

bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time &lt; timestamp(&#x27;2020-10-01T00:00:00.000Z&#x27;) etag: BwWWja0YfJA= version: 3 · For a description of IAM and its features, see the IAM documentation.
