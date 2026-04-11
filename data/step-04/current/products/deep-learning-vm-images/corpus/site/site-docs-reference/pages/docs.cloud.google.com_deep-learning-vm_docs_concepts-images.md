---
title: "Images, image families, and instances \_|\_ Deep Learning VM Images \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/deep-learning-vm/docs/concepts-images
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/deep-learning-vm/docs/concepts-images
source_metadata:
  url: https://docs.cloud.google.com/deep-learning-vm/docs/concepts-images
  title: "Images, image families, and instances \_|\_ Deep Learning VM Images \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
Deep Learning VM Images
Guides
Send feedback
Images, image families, and instances
Stay organized with collections
Save and categorize content based on your preferences.
Deep Learning VM Images is a set of prepackaged virtual machine images
with a deep learning framework that are ready to be run out of the box. The
Deep Learning VM images take the hassle out of setting up an
environment for training deep learning models by preconfiguring dependencies,
preinstalling essential tools, and optimizing performance.
It is important to distinguish between images , image families , and
instances .
Image families
An image family is a set of images that are preconfigured for a specific
purpose or using a specific architecture.
There are numerous Deep Learning VM image families. They are listed
here, according to each one's main installed framework:
TensorFlow Enterprise family, with or without GPU
TensorFlow family, with or without GPU
PyTorch family, with or without GPU
R experimental family
A base, or "common" image family to which you can add your preferred
framework, with or without GPU
TensorFlow Enterprise is a distribution of
TensorFlow
that has been optimized to run on Google Cloud and includes
Long Term Version
Support .
If you know what framework you want to use and whether you want to enable one
or more GPUs, you then choose whether to use the latest version of your
framework or, if available, an older version. You can use
Deep Learning VM images for some previous versions of frameworks.
To find out more, see Choosing an Image .
Images
An image is an individual virtual machine template. The Deep Learning VM
images are preconfigured public Compute Engine virtual machine
images .
For more information about VM images, see the Images
conceptual topic in Compute Engine documentation.
For information about choosing a Deep Learning VM image, see Choosing
an Image .
Instances
An instance is a single virtual machine hosted on Google's infrastructure. A
Deep Learning VM instance is based on one of the preconfigured
Deep Learning VM images. You create an instance from an image using the
Google Cloud console or the Google Cloud CLI.
For information about choosing a Deep Learning VM image, see Choosing
an Image .
For information about creating instances of a Deep Learning VM image,
see:
Launching a Deep Learning VM Instance from the Command
Line
Launching a Deep Learning VM Instance from the Cloud
Marketplace
For general information about creating instances in Compute Engine, see Virtual
Machine Instances .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
