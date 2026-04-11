---
title: "Access control \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/access-control
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/generative-ai/docs
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/access-control
  title: "Access control \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI
Generative AI on Vertex AI
Guides
Send feedback
Access control
Stay organized with collections
Save and categorize content based on your preferences.
To use the generative AI features on Vertex AI, the principals (for
example, users, groups, and
service accounts )
in your project need to be granted the appropriate IAM role. You
can also create custom roles to grant a user-defined set of permissions to a
principal. This page shows you the applicable IAM roles to grant
and the specific permissions needed for each operation so you can create custom
roles.
Predefined roles
You can grant the users or groups in your project one of the following
predefined roles to give them access to the generative AI features on
Vertex AI:
Vertex AI Administrator ( roles/aiplatform.admin )
Vertex AI User ( roles/aiplatform.user )
To learn more about Vertex AI IAM roles, see
Vertex AI access control with IAM .
Permissions
The following table maps generative AI operations to the permissions required
for the operation. If you need fine-grained access control, you can refer to
these mappings to create custom roles.
Operation
Permissions needed
Make prompt requests
aiplatform.endpoints.predict
Save, view, update, and delete prompts in Vertex AI Studio
aiplatform.datasets.create
aiplatform.datasets.update
aiplatform.datasets.delete
aiplatform.datasets.list
aiplatform.datasets.get
Model tuning
aiplatform.pipelineJobs.*
aiplatform.customJobs.*
aiplatform.datasets.export
aiplatform.datasets.get
aiplatform.models.upload
aiplatform.models.get
aiplatform.endpoints.create
aiplatform.endpoints.get
aiplatform.endpoints.deploy
aiplatform.metadataStores.get
storage.objects.create
storage.objects.update
storage.objects.get
storage.objects.list
To learn more about Vertex AI IAM permissions, see
IAM permissions .
What's next
Guide
Enable Data Access audit logs
Enable Data Access audit logs in Vertex AI so that you can monitor usage of your model endpoints.
Guide
Control access with IAM
Learn how to use Identity and Access Management (IAM) to manage access to Vertex AI resources.
Overview
Introduction to tuning
Learn how to tune a model by providing a training dataset that contains a set of examples of specific downstream tasks.
Overview
Responsible AI
Learn about some of the limitations to generative AI and recommended practices for using generative AI.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
