---
title: "Dataflow shared responsibility \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataflow/docs/resources/shared-responsibility
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://docs.cloud.google.com/dataflow/docs/resources/locations
source_metadata:
  url: https://docs.cloud.google.com/dataflow/docs/resources/shared-responsibility
  title: "Dataflow shared responsibility \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Cloud Dataflow
Resources
Send feedback
Dataflow shared responsibility
Stay organized with collections
Save and categorize content based on your preferences.
Security is a shared responsibility. Dataflow secures the scalable
infrastructure that you use to run your Dataflow pipelines and
provides you tools and security controls to protect your data, code, and models.
While not an exhaustive list, this document lists the responsibilities for both
Google and the customer.
Google's responsibilities
Protect the infrastructure : Google is responsible for providing secure
infrastructure for its services, including physical security of data centers,
network security, and application security.
Secure the platform : Google is responsible for securing its platform,
including managing access controls, monitoring for security incidents, and
responding to security events. Google also provides customers with tools to
manage their own security settings and configurations.
Maintain compliance : Google maintains compliance with relevant data
protection laws and regulations. Learn more about
Google Cloud compliance .
Harden and patch images : Google hardens and patches the operating system
of base images used by the
Dataflow-owned images. Google promptly makes any patches to
these images available.
Security bulletins are provided
for known vulnerabilities.
For open source dependencies like Apache Beam, Dataflow provides
base images and updates the Apache Beam SDK on a best-effort basis as a
convenience. Because Dataflow relies on the open source community
for these fixes, Google doesn't have full control over fix prioritization or
timing. Fixes for Common Vulnerabilities and Exposures (CVEs) are typically
included in upcoming Apache Beam releases.
Customer's responsibilities
Use and update your environment to the latest versions of
Dataflow containers and VM images :
Dataflow provides prebuilt containers and VM images to simplify
the use of its services. Google will create new versions of these images when
vulnerabilities are identified. It is your responsibility to monitor for
security bulletins and update your
environment promptly when new versions are available.
You are responsible for ensuring
that you properly configured your services to use the latest version, or to
manually upgrade to the latest version. To use the latest VMs, restart
long-running jobs by
updating the job . For more
information, see
Upgrade and patch Dataflow VMs .
To manage security issues responsively, we recommend that you use
custom container images. If you have strict security Service Level Agreement (SLA)
requirements, such as those for FedRAMP compliance, using custom containers
lets you manage your own Apache Beam versions and patch cycles, rather than
relying on the Apache Beam open source release schedule.
If you're using a
custom container
or a
custom template ,
you're responsible for scanning and patching the custom images to mitigate
vulnerabilities.
If you're using a
Flex Template base image ,
to ensure security and reduce vulnerability risks, use Distroless base images
when possible.
Manage access controls : You are responsible for managing access
controls to your own data and services. This includes managing user access,
authentication, and authorization controls, and securing your own
applications and data. Learn more about
Dataflow security and permissions .
Secure applications : You are responsible for securing your own
applications running on Dataflow, including
implementing secure coding practices and regularly testing for
vulnerabilities.
Learn more about
Customer-managed encryption keys ,
networks and VPC Service Controls ,
and permissions best practices .
Monitor for security incidents : You are responsible for monitoring
your own applications for security incidents, and reporting any
incidents to Google as necessary.
Subscribe to the Dataflow security bulletins .
Follow the Dataflow release notes .
Follow the Apache Beam release notes .
Learn more about Monitoring
and Audit logging .
Note: When using the Monitoring agent, the
--experiments=enable_stackdriver_agent_metrics
option uses a deprecated container image that isn't maintained and might have
unpatched vulnerabilities. We recommend that you don't use this option.
What's next
Learn more about shared responsibilities on Google Cloud .
Learn about how to protect your software supply chain .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
