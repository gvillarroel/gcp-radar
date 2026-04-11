---
title: "Use VPC Service Controls with Cloud Data Fusion \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/data-fusion/docs/how-to/using-vpc-sc
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/data-fusion/docs
source_metadata:
  url: https://docs.cloud.google.com/data-fusion/docs/how-to/using-vpc-sc
  title: "Use VPC Service Controls with Cloud Data Fusion \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Cloud Data Fusion
Guides
Send feedback
Use VPC Service Controls with Cloud Data Fusion
Stay organized with collections
Save and categorize content based on your preferences.
If you plan to create a Cloud Data Fusion instance with a private IP address ,
you can provide additional security by first establishing a security perimeter
for the instance using VPC Service Controls (VPC-SC) .
The VPC-SC security perimeter around the private
Cloud Data Fusion instance and other Google Cloud resources helps
mitigate the risk of data exfiltration. For example, with
VPC Service Controls, if a Cloud Data Fusion pipeline reads data
from a supported resource ,
such as a BigQuery dataset, located within the perimeter,
then tries to write the output to a resource outside the perimeter, the pipeline
will fail.
Cloud Data Fusion resources are exposed on two API surfaces:
The datafusion.googleapis.com control plane API surface, which
allows you to perform instance-level operations, such as the creation and
deletion of instances.
The datafusion.googleusercontent.com data plane API surface (the
Cloud Data Fusion Web UI
in the Google Cloud console), which executes on a Cloud Data Fusion
instance to create and execute data pipelines.
You set up VPC Service Controls with Cloud Data Fusion by
restricting connectivity to both of these API surfaces.
Strategies:
Cloud Data Fusion pipelines are executed on Dataproc clusters.
To protect a Dataproc cluster with a service perimeter,
follow the instructions for
setting up private connectivity
to allow the cluster to function inside the perimeter.
Don't use plugins that use Google Cloud APIs that are not supported by
VPC Service Controls .
If you use unsupported plugins, Cloud Data Fusion will block the API calls,
resulting in pipeline preview and execution failure.
To use Cloud Data Fusion within a VPC Service Controls service
perimeter, add or configure several DNS entries to point the
following domains to the restricted VIP (Virtual IP address):
datafusion.googleapis.com
*.datafusion.googleusercontent.com
*.datafusion.cloud.google.com
Limitations:
Establish the VPC Service Controls security perimeter before creating your
Cloud Data Fusion private instance. Perimeter protection for
instances created prior to setting up VPC Service Controls is not
supported.
Currently, the Cloud Data Fusion data plane UI does not support
specifying access levels using identity based access .
Restricting Cloud Data Fusion API surfaces
Restricting the control plane surface
See Setting up private connectivity to Google APIs and services
to restrict connectivity to the datafusion.googleapis.com API control plane
surface.
Restricting the data plane surface
To set up private connectivity to the API data plane,
configure DNS by completing the following steps for both the *.datafusion.googleusercontent.com and *.datafusion.cloud.google.com domains.
Create a new private zone using Cloud DNS :
Zone type: Check private
Zone name: datafusiongoogleusercontentcom
DNS name: datafusion.googleusercontent.com
Network: Select the private IP network you chose when you created your
Cloud Data Fusion instance.
From the Cloud DNS page, click your
datafusiongoogleusercontent DNS zone name to open the
Zone details page. Two records are listed: an NS and an SOA record.
Use Add Standard to add the following two record sets to your
datafusiongoogleusercontent DNS zone.
Add a CNAME record: In the Create record set dialog, fill
in the following fields to map DNS name *.datafusion.googleusercontent.com.
to the canonical name datafusion.googleusercontent.com :
DNS name: "*.datafusion.googleusercontent.com"
Canonical name: "datafusion.googleusercontent.com"
Add an A record: In a new Create record set dialog, fill
in the following fields to map DNS name datafusion.googleusercontent.com.
to IP addresses 199.36.153.4 - 199.36.153.7 :
DNS name: ".datafusion.googleusercontent.com"
IPv4 address:
199.36.153.4
199.36.153.5
199.36.153.6
199.36.153.7
The datafusiongoogleusercontent Zone details page shows the
following record sets:
Follow the above steps to create a private DNS zone and add a record set
for the *.datafusion.cloud.google.com domain.
What's next
Learn about Creating a private instance .
Learn more about VPC Service Controls .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
