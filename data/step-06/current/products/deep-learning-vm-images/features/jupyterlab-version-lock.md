---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:52:27.208Z"
product_name: "Deep Learning VM Images"
product_slug: "deep-learning-vm-images"
feature_name: "JupyterLab version lock"
feature_slug: "jupyterlab-version-lock"
latest_feature_date: "2021-11-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deep-learning-vm/docs/jupyter"
  - "https://docs.cloud.google.com/deep-learning-vm/docs/introduction"
  - "https://docs.cloud.google.com/deep-learning-vm/docs/framework-support-policy"
keywords:
  - "jupyterlab"
  - "version"
  - "lock"
  - "deep"
  - "learning"
  - "vm"
  - "images"
  - "locked"
---

# JupyterLab version lock

Product: Deep Learning VM Images
Coverage: MEDIUM

## Step 02 Summary

Deep Learning VM Images locked JupyterLab to version 3.2.

## Extended Definition

Deep Learning VM Images locked JupyterLab to version 3.2.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deep-learning-vm/docs/jupyter](https://docs.cloud.google.com/deep-learning-vm/docs/jupyter)
- [https://docs.cloud.google.com/deep-learning-vm/docs/introduction](https://docs.cloud.google.com/deep-learning-vm/docs/introduction)
- [https://docs.cloud.google.com/deep-learning-vm/docs/framework-support-policy](https://docs.cloud.google.com/deep-learning-vm/docs/framework-support-policy)

## Supporting Pages

### Connect to JupyterLab \_|\_ Deep Learning VM Images \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/jupyter](https://docs.cloud.google.com/deep-learning-vm/docs/jupyter)
- Source ID: `site-docs-reference`
- Final score: 51
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Compute Compute Engine Deep Learning VM Images Guides Send feedback Connect to JupyterLab Stay organized with collections Save and categorize content based on your preferences.
- When you start a Deep Learning VM Images instance, a JupyterLab session is initialized.
- To set up SSH port forwarding , complete the following steps, and then access your JupyterLab session through a local browser: Run the following command by using the Google Cloud CLI in your preferred terminal or in Cloud Shell : gcloud compute ssh \ --project PROJECT ID \ --zone ZONE \ INSTANCE NAME \ -- -L 8080 :localhost:8080 Replace the following: PROJECT ID : your Google Cloud project ID ZONE : the zone where your instance is located INSTANCE NAME : the name of your instance Note: If using Cloud Shell to run the command, add a -4 to the SSH flags to use IPv4 to connect.
- Example: -- -4 -L LOCAL PORT :localhost: REMOTE PORT Access your JupyterLab session through a local browser: If you ran the command on your local machine, visit https://localhost:8080 to access JupyterLab.

### "Deep Learning VM framework support policy \_|\_ Deep Learning VM Images\

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/framework-support-policy](https://docs.cloud.google.com/deep-learning-vm/docs/framework-support-policy)
- Source ID: `site-docs-reference`
- Final score: 50
- Re-rank relevance: N/A

Evidence snippets:
- While Deep Learning VM regularly publishes new versions of images to address security vulnerabilities, you are responsible for tasks such as the following: Manually upgrading to the latest version.
- Subscribe to the Deep Learning VM release notes page for announcements about deprecations and new version releases for your images and frameworks.
- Home Documentation Compute Compute Engine Deep Learning VM Images Resources Send feedback Deep Learning VM framework support policy Stay organized with collections Save and categorize content based on your preferences.
- For Deep Learning VM, the support policy revolves around two key dates: End-of-patch and support date: After this date, Deep Learning VM will no longer publish new image versions for that specific framework version.

### "Introduction to Deep Learning VM \_|\_ Deep Learning VM Images \_|\_ Google\

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/introduction](https://docs.cloud.google.com/deep-learning-vm/docs/introduction)
- Source ID: `site-docs-reference`
- Final score: 48
- Re-rank relevance: N/A

Evidence snippets:
- Python 3.10 with the following packages: numpy scipy matplotlib pandas nltk pillow scikit-image opencv-python scikit-learn many more JupyterLab notebook environments for quick prototyping Nvidia packages with the latest Nvidia driver for GPU-enabled instances: CUDA 11. x and 12. x (the version depends on the framework) CuDNN 7. x and NCCL 2. x (the version depends on the CUDA version) Updates Deep Learning VM images are updated regularly with bug fixes and package updates.
- Home Documentation Compute Compute Engine Deep Learning VM Images Guides Send feedback Introduction to Deep Learning VM Stay organized with collections Save and categorize content based on your preferences.
- Deep Learning VM Images is a set of virtual machine images optimized for data science and machine learning tasks.
- Deep Learning VM images are available to support many combinations of framework and processor.

