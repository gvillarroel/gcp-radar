---
title: "Manage autoscale \_|\_ Google Cloud VMware Engine \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vmware-engine/docs/howto-autoscale
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vmware-engine/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/vmware-engine/docs/howto-autoscale
  title: "Manage autoscale \_|\_ Google Cloud VMware Engine \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
VMware Engine
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Manage autoscale
Autoscale automatically expands or shrinks a cluster in a private cloud based on
CPU, memory, and storage utilization thresholds. Google Cloud VMware Engine
monitors the cluster based on defined metrics and adds or removes nodes from the
cluster automatically. Autoscale is not available on clusters containing a
single node and clusters which contain storage-only nodes.
Important: Adjustments to clusters based on autoscale count toward
VMware Engine node quota corresponding to your Google Cloud project. To
increase your quota and allow autoscale to add more nodes, see Quotas and limits .
For each cluster in your private cloud, you can choose to apply autoscale. When
metrics specified in autoscale are sustained for a period of 30 minutes,
VMware Engine triggers an action based on the specified policy.
Because compute, memory, and storage usage are often independent, autoscale that
monitors multiple metrics use OR logic for scale out and AND logic for scale
in.
Autoscale doesn't consider prepaid nodes. If you purchase prepaid nodes, you
must edit the minimum node count to the count of prepaid nodes.
Enable autoscale
To enable autoscale on a cluster, do the following:
In the Google Cloud console, go to the Private clouds page.
Go to Private clouds
Click Select a project and then select the organization, folder, or project where
the private cloud is located.
Select the private cloud you want to access.
On the private cloud details page, click the Clusters tab.
Click the name of the cluster to enable autoscale for.
On the cluster details page, click Edit .
Select the metrics to use for autoscale and provide the Scale out and
Scale in threshold.
Scale out: Add nodes to the cluster to increase resources to meet
the resource demands.
Scale in: Remove nodes from the cluster to reduce resources to meet
the resource demands.
Enter the values for Minimum nodes , Maximum nodes , Nodes per scale
out and Duration for Cool-off period under Additional
settings .
Minimum nodes: Minimum number of nodes (3) in a cluster with
autoscale enabled. If you purchased prepaid nodes, you must set the
minimum node count to the number of prepaid nodes.
Maximum nodes: Maximum number of nodes (32) in a cluster with
autoscale enabled.
Nodes per scale out: Number of nodes per scale out.
Duration: Sustained resource use for a time period beyond which
autoscale takes action.
Cool off period: Minimum amount of time between actions taken due to
autoscale.
Click Save .
Note: The storage utilization metric can't be disabled, and the maximum
utilization can't exceed 80%.
View cluster autoscale settings
To view the autoscale settings of a cluster, do the following:
In the Google Cloud console, go to the Private clouds page.
Go to Private clouds
Click Select a project and then select the organization, folder, or project where
the private cloud is located.
Select the private cloud you want to access.
On the private cloud details page, click the Clusters tab.
Click the name of the cluster. Autoscale settings are displayed in the
details section of the cluster. If autoscale isn't enabled on the cluster,
no autoscale information is displayed.
Edit autoscale
To edit autoscale on a cluster, do the following:
In the Google Cloud console, go to the Private clouds page.
Go to Private clouds
Click Select a project and then select the organization, folder, or project where
the private cloud is located.
Select the private cloud you want to access.
On the private cloud details page, click the Clusters tab.
Click the name of the cluster.
On the cluster details page, click Edit .
Update the chosen fields and click Save .
Disable autoscale
To disable autoscale on a cluster, do the following:
In the Google Cloud console, go to the Private clouds page.
Go to Private clouds
Click Select a project and then select the organization, folder, or project where
the private cloud is located.
Select the private cloud you want to access.
On the private cloud details page, click the Clusters tab.
Click the name of the cluster.
On the cluster details page, click Edit .
Toggle Select to turn on autoscaling and click Save .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
