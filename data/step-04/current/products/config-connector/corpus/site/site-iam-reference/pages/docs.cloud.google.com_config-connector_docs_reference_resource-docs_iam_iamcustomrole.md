---
title: "IAMCustomRole | Config Connector | Google Cloud Documentation"
url: "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamcustomrole"
knowledge_key: "corpus"
source_id: "site-iam-reference"
source_type: "site"
content_origin: "bx_web_fallback"
---
# IAMCustomRole | Config Connector | Google Cloud Documentation

Source URL: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamcustomrole

apiVersion: iam.cnrm.cloud.google.com/v1beta1 kind: IAMPolicyMember metadata: name: iampolicymember-sample-projectrole spec: member: serviceAccount:iamcustomrole-dep-project@${PROJECT_ID?}.iam.gserviceaccount.com role: projects/${PROJECT_ID?}/roles/iamcustomrolesampleproject resourceRef: kind: PubSubTopic name: iamcustomrole-dep-project --- # Replace ${PROJECT_ID?} below with your desired project ID. apiVersion: iam.cnrm.cloud.google.com/v1beta1 kind: IAMServiceAccount metadata: annotations: cnrm.cloud.google.com/project-id: ${PROJECT_ID?} name: iamcustomrole-dep-project --- apiVersion: pubsub.cnrm.cloud.google.com/v1beta1 kind: PubSubTopic metadata: name: iamcustomrole-dep-project · Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector.
