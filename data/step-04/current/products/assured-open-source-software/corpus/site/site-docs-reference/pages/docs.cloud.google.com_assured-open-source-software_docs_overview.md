---
title: "Overview of Assured Open Source Software \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/assured-open-source-software/docs/overview
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/assured-open-source-software/docs/download-go-packages
source_metadata:
  url: https://docs.cloud.google.com/assured-open-source-software/docs/overview
  title: "Overview of Assured Open Source Software \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Assured Open Source Software
Guides
Send feedback
Overview of Assured Open Source Software
Stay organized with collections
Save and categorize content based on your preferences.
Assured Open Source Software (Assured OSS) lets you take advantage of the
security and experience that Google applies to open source software (OSS) by
incorporating the same OSS packages that Google secures and uses into your own
developer workflows.
Assured OSS lets you do the following:
Obtain your OSS packages from a trusted and known supplier.
Learn more about package contents with Assured
SBOMs that are
provided in industry standard formats like SPDX .
Learn about threats and security of a package with VEX information in
an industry-standard format like CycloneDX .
Reduce security risk as Google is actively scanning, finding, and fixing new
vulnerabilities in curated packages.
Increase confidence in the integrity of the OSS that you are using through
signed, tamper-evident provenance .
Choose from more than one thousand of the most popular Java, Go, and Python
packages, including common machine learning and artificial intelligence
projects like TensorFlow, Pandas, and Scikit-learn.
The open-source packages are built by Google in a secure manner. These packages
meet Supply-chain Levels for Software Artifacts (SLSA) level 3
requirements and have a verifiable
provenance and SBOM.
Assured OSS tiers
Assured OSS has a Free tier and a Premium tier. The Premium tier is
available when you purchase Security Command Center Enterprise.
The Free tier includes the following:
Python, Go, and Java open-source packages in curated repositories.
Manual setup steps.
Curated repositories created in a Google-managed project.
Universal proxy endpoints for open-source packages. This proxy lets you
download open-source packages and their metadata from one source, whether the
packages were built by Google or not.
Support for Amazon Web Service (AWS) account access.
The Premium tier lets you integrate Assured OSS with Security Command Center
Enterprise . It includes
the following:
Python, Go, and Java open-source packages in curated repositories.
JavaScript open-source packages in a canonical repository.
Automated setup as part of Security Command Center Enterprise activation process.
Curated repositories created in a project that you specify.
Universal package metadata that's collected and signed by Google. This
metadata provides information about the package build, any vulnerabilities,
and package health. The package health information is only available for
packages that are built by Google.
For more information about Security Command Center Enterprise pricing, see Pricing for the
Enterprise tier .
Assured OSS repository options
Assured OSS packages are stored on a Google-managed Artifact Registry repository. You can access and download the open
source packages offered by Assured OSS using one of the
following methods:
Set up a remote (also called a mirror or a proxy ) repository in your
environment to act as a proxy for the Google-managed Artifact Registry repository.
Your developers can connect to the remote repository to download the packages.
Use this method if you are using a repository manager like Jfrog Artifactory
or Sonatype Nexus.
Connect to the Artifact Registry repository directly using a service account. Use
this method if developers are using build tools like Maven, Gradle, Go, or
pip.
Use a virtual upstream repository that acts as a single access point for your
developers so that they can download, install, or deploy packages. In the
Premium tier, two virtual repositories are created automatically: one for Java
packages and one for Python packages. In the Free tier, you must configure a
virtual repository yourself. You can use an Artifact Registry standard repository or
an Artifact Registry remote repository as your upstream virtual repository. You
can also use an Assured OSS type repository, which is a wrapper
over a virtual repository that has access to both Free tier and Premium tier
packages. Assured OSS type repository performs server-side
checks.
The following diagram shows Assured OSS connected to a remote
repository.
Software supply chain security
Assured Open Source Software is one of the Google Cloud components you
can use to protect your software supply chain. You can use
Assured Open Source Software together with other Google Cloud products and
features to improve the security posture of developer workflows and tools,
software dependencies, CI/CD systems used to build and deploy your software,
and runtime environments such as Google Kubernetes Engine and Cloud Run. To learn
more, see
Software supply chain security .
What's next
To use the Free tier, see Enable Assured OSS .
To integrate with Security Command Center Enterprise, see Integrate with Assured OSS for code security .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
