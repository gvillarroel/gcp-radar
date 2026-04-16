---
title: "Troubleshoot CRDs with an invalid CA bundle \_|\_ Google Kubernetes Engine\
  \ (GKE) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/how-to/crd-with-invalid-caBundle
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/concepts/access-control
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/how-to/crd-with-invalid-caBundle
  title: "Troubleshoot CRDs with an invalid CA bundle \_|\_ Google Kubernetes Engine\
    \ (GKE) \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
Send feedback
Troubleshoot CRDs with an invalid CA bundle
Stay organized with collections
Save and categorize content based on your preferences.
Autopilot
Standard
Custom Resource Definitions (CRDs)
are powerful tools for extending Kubernetes
capabilities .
However, if a CRD contains an invalid or malformed Certificate Authority (CA)
bundle within its conversion webhook configuration
spec.conversion.webhook.clientConfig.caBundle , it can disrupt cluster
operations. This issue can manifest as errors during resource creation, updates,
or deletions, affecting the stability and performance of your cluster.
To prevent this issue, Google Kubernetes Engine (GKE) automatically detects CRDs
with invalid CA bundles and generates a
recommendation . Use
this document to find the recommendation, identify your misconfigured CRDs, and
update them.
This information is important for
Platform admins and operators
and other users who manage CRDs and custom resources in GKE.
Identify impacted clusters
To get insights identifying clusters that are affected by CRDs with invalid CA bundles, follow
the instructions to view insights and recommendations for subtype K8S_CRD_WITH_INVALID_CA_BUNDLE . You can get insights in
the following ways:
Use the Google Cloud console.
Use the Google Cloud CLI, or the Recommender API, filtering with the subtype
K8S_CRD_WITH_INVALID_CA_BUNDLE .
After you identify the CRDs using the insights, follow the instructions to
troubleshoot the misconfigured CA bundle .
When GKE detects misconfigured CRDs
GKE generates an insight and recommendation with the
K8S_CRD_WITH_INVALID_CA_BUNDLE subtype if the GKE cluster has
one or more CRDs reporting a misconfigured caBundle for the webhook client
configuration in spec.conversion.webhook.clientConfig .
Follow the instructions to check CRDs with misconfigured CA bundle .
Troubleshoot the detected CRDs
The following sections have instructions for you to troubleshoot the CRDs that
GKE detected as potentially misconfigured.
After you implement the instructions and the CRDs are correctly configured, the
recommendation is resolved within 24 hours and no longer appears in the console.
If it has been less than 24 hours since you've implemented the guidance of the
recommendation, you can mark the recommendation as
resolved .
If you don't want to implement the recommendation, you can dismiss
it .
Identify affected CRDs in a cluster
View insights and
recommendations for subtype K8S_CRD_WITH_INVALID_CA_BUNDLE ,
choosing one insight at a time to troubleshoot. GKE generates
one insight per cluster which has a broken CRD.
Run the following command to describe the Service to find CRDs with
potentially problematic CA bundles:
kubectl get crd -o custom-columns = NAME:.metadata.name,CABUNDLE:.spec.conversion.webhook.clientConfig.caBundle
The output includes the following:
Name : The name of the CRD.
CaBundle : The CA bundle associated with the CRD's conversion
webhook, if present. Examine the output. If the caBundle column is empty
for a CRD that you know utilizes a conversion webhook, this signals a
potential issue with the caBundle.
Recreate the CRD
To resolve this error, recreate the affected CRD with a valid CA bundle:
Back up existing custom resources associated with this problematic
CRD, if you have any. Run the following command to export the existing
resources:
kubectl get <crd-name> -o yaml > backup.yaml
Delete the existing CRD:
kubectl delete crd <crd-name>
Ensure that the caBundle field of the CRD contains a well-formed,
base-64-encoded PEM certificate. You can do this either by editing the
CRD directly or by reaching out to its authors.
Modify the CRD YAML definition, updating the
spec.conversion.webhook.clientConfig.caBundle field with the valid
CA bundle data. The result should look something like the following:
spec :
conversion :
webhook :
clientConfig :
caBundle : < base64-encoded-ca-bundle >
Apply the corrected CRD:
kubectl apply -f <corrected-crd-file.yaml>
Restore your custom resources:
kubectl apply -f backup.yaml
What's next
Optimize your usage of GKE with insights and
recommendations
Troubleshooting common issues
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
