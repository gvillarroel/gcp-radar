---
title: "Explore your cluster and workload \_|\_ Google Kubernetes Engine (GKE) \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/quickstarts/tour-cluster
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/quickstarts/tour-cluster
  title: "Explore your cluster and workload \_|\_ Google Kubernetes Engine (GKE) \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Explore your cluster and workload
Autopilot
View and learn about the some of the workload settings and resources that
you deployed in one of our quickstarts.
This follow-up tutorial delves deeper into some Kubernetes concepts such as Pods and Services, though doesn't assume that you have previous Kubernetes experience.
To follow step-by-step guidance for this task directly in the
Google Cloud console, click Guide me :
Guide me
Before you begin
Ensure that you've followed the steps in one of these quickstarts to create a cluster and deploy a sample app:
Create a cluster and deploy a workload in the Google Cloud console .
Create a cluster and deploy a workload using Terraform
Required roles
To get the permissions that
you need to interact with clusters and workloads,
ask your administrator to grant you the
Kubernetes Engine Viewer ( roles/container.viewer )
IAM role on your project.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
View Pod details
In Kubernetes, a Pod is the smallest deployable unit of computing that you can create and manage. Like all Kubernetes workloads, the sample application deployment consists of Pods (in this case, one Pod with no additional replicas) wrapping containerized applications (in this case, one container). In this section, we'll take a look at what you can learn in the Google Cloud console about the sample app's Pod.
First, ensure that you're on the sample app's Deployment details
page (you might still be there if you've just finished the previous tutorial). If you're not on that page:
In the Google Cloud console, go to the GKE Workloads page.
Go to Workloads
In the Name column, click the name of the app you deployed,
hello-world-app (if you deployed with the Google Cloud console) or example-hello-app-deployment (for the Terraform deployment).
In the Overview tab, you can view more details about the sample app workload, including:
Replicas : The number of Pod replicas that are currently
running in your workload.
Pod specification : The version of this Deployment, and the sample app's container.
The Managed pods table links to configuration data and performance metrics for each running Pod replica.
View Services
A Kubernetes Service is how you provide networking endpoints for a Pod or Pods. When you deployed your workload, you created a load balancing Service
that directs external traffic to your workload. This Service is what let you access the sample app's web interface after you deployed the application.
To view your workload's Service:
Go to the Exposing services
table in the Deployment details page. This shows you any Services that your workload exposes.
In the Name column of the Exposing services table, click the name
of the example app's Service. The name is hello-world-app-service if you deployed the app in the Google Cloud console or example-hello-app-loadbalancer if you deployed with Terraform.
In the Service details page, you can learn more about the Service, including:
The Service's external endpoints : the IP address or addresses that you can use to access the Service. You used this IP address to visit the app's web interface in the previous quickstart.
The ports the Service uses.
More details about the service's load balancer , including the cluster IP address that the load balancer sends traffic to. You can click the load balancer name to find even more information, such as its frontend and backend details.
Where's the YAML? The desired state of all Kubernetes objects is specified declaratively, typically using YAML — GKE is no different. To view the YAML specifications for the example deployment, click the YAML tab in the Deployment details or Service details page. Any changes you make to the deployment using the Google Cloud console are automatically reflected in the YAML. You can even edit the YAML in this view to make real-time changes, or download it if you want to adapt it for your own projects.
What's next
Try our more in-depth Learning path: Scalable apps .
Learn how to get started with real life cluster administration in our Cluster administration overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
