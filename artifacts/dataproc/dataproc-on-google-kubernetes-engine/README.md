# Dataproc on Google Kubernetes Engine

Product: Dataproc
Feature slug: `dataproc-on-google-kubernetes-engine`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Dataproc on Google Kubernetes Engine lets users create Dataproc clusters to run Spark jobs on Kubernetes through the Dataproc jobs API.

## Lifecycle

- Latest feature date: 2020-04-17
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster), [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-recreate-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-recreate-cluster), [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images))
- auth (evidence: [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster), [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-recreate-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-recreate-cluster), [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images))
- authorization (evidence: [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster), [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-recreate-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-recreate-cluster), [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images))
- iam (evidence: [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster), [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-recreate-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-recreate-cluster), [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images))
- identity (evidence: [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster), [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-recreate-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-recreate-cluster), [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images))
- permission (evidence: [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster), [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-recreate-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-recreate-cluster), [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images))
- role (evidence: [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster), [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-recreate-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-recreate-cluster), [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images))
- token (evidence: [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster), [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-recreate-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-recreate-cluster), [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images))

## Official Evidence

- [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images)
- [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-recreate-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-recreate-cluster)
- [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster)
