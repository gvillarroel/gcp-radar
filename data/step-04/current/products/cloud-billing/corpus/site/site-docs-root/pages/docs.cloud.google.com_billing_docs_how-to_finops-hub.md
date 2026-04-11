---
title: "Optimize costs with FinOps hub \_|\_ Cloud Billing \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/billing/docs/how-to/finops-hub
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/billing/docs
source_metadata:
  url: https://docs.cloud.google.com/billing/docs/how-to/finops-hub
  title: "Optimize costs with FinOps hub \_|\_ Cloud Billing \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Costs and usage management
Cloud Billing
Guides
Send feedback
Optimize costs with FinOps hub
Stay organized with collections
Save and categorize content based on your preferences.
With the FinOps hub, you can monitor and communicate your current savings,
explore new recommended opportunities to optimize costs, and plan your
optimization goals. The FinOps hub presents all of your active savings
and optimization opportunities in one dashboard. The FinOps hub automatically
generates the dashboard based on historical usage metrics gathered by
Cloud Billing and
Recommender ,
including recent usage and current commitments.
Permissions required to access the FinOps hub
The FinOps hub uses Cloud Billing to retrieve cost data, and various
Google Cloud cost recommenders
for optimization and utilization metrics.
To access the FinOps hub for a Cloud Billing account — to view
all available recommendations, the FinOps score, CUDs optimization metrics, and
utilization insights — you need Cloud Billing permissions.
Depending on the type of recommendation, you might also need project
permissions to view the details and apply a recommendation.
Access the FinOps hub
To access the FinOps hub for a Cloud Billing account, and view
all available recommendations, the FinOps score, CUDs optimization metrics,
and utilization insights, you need one of the following predefined
Cloud Billing IAM roles on your
Cloud Billing account:
Billing Account Viewer
Billing Account Administrator
If you prefer to use a custom role to access the FinOps hub, you need a
role with the following
permissions
on your Cloud Billing account:
billing.accounts.get
billing.accounts.getSpendingInformation
billing.finOpsBenchmarkInformation.get
billing.finOpsHealthInformation.get
recommender.costRecommendations.listAll
View details of a recommendation and apply the recommendation
To view the details and apply a recommendation, you need
recommender-specific permissions on the billing account or project.
Depending on the
type of recommendation , you might need the following permissions:
Project Viewer role for each of the projects that you want to see
recommendations for.
Recommender Viewer role on your Cloud Billing account.
See the
list of FinOps hub cost recommenders for the recommenders that
contribute to hub metrics.
To learn how to grant permissions to view recommendation updates, see
Recommender overview .
For more information about Cloud Billing permissions ,
see:
Overview of Cloud Billing access control
Create custom roles for Cloud Billing
Understanding predefined Identity and Access Management roles for Cloud Billing
For more information about Google Cloud project permissions ,
see:
Access control for projects with IAM
IAM basic and predefined roles reference
Explore the FinOps hub
To view the FinOps hub:
In the Google Cloud console, go to the FinOps hub.
Go to FinOps hub
At the prompt, choose the Cloud Billing account for which you want to
view the FinOps hub.
The FinOps hub dashboard
The FinOps hub dashboard summarizes your current cost optimizations and
introduces Google Cloud-recommended optimizations. Information on the
FinOps hub reflects historical data collected.
How potential savings are determined
The FinOps hub considers four optimization practices to create cost-saving
recommendations:
Turning off idle resources
Right-sizing instances
Other configuration changes for certain resources
Purchasing committed use discounts (CUDs)
Metrics throughout the hub reflect how well you're using those optimizations and
identify additional optimization opportunities to reduce costs and improve
FinOps practices.
In a recommendation, the estimated savings for a resource is calculated using
either a custom contract price or a list price. The pricing type used to
calculate the estimated cost savings
is based on the contract type you might have with Google Cloud and your
specific role and cost view permissions on the Cloud Billing account.
The estimated savings in a recommendation doesn't consider existing committed
use discounts that you have purchased that might apply to the resource.
Optimization summary
The Optimization summary is a snapshot of how much you're saving with
optimizations, current recommendations from Google Cloud, and how much
more you could save by adopting additional optimizations. The Optimization
summary includes:
Last month's realized savings - the total savings related to
CUDs, right-sizing instances, and removing idle resources.
Note: Realized savings don't calculate savings from turning off
idle resources. Additionally, you might see a negative total if you've
underutilized CUDs.
Active Recommendations - the total number of
Google Cloud-recommended optimizations available to you.
Recommendations include suggestions to turn off idle resources, right-size
instances or other configuration changes, and purchase CUDs.
Potential savings per month - the estimated amount of money you can save
by applying all available recommendations. If there are multiple potential
opportunities to save on the same Compute Engine resource, such as
purchasing a resource-based CUD and a Compute flexible CUD, the FinOps hub
de-duplicates the opportunities and only includes the recommendation that
brings you the higher savings.
CUD optimization rate - the percentage of how much of your CUD-eligible
usage is covered by committed use discounts. We determine your CUD
optimization rate by calculating how much of your usage across all products
over the last 30 days can be converted to CUDs. For example, in the past 30
days, you might have spent $10,000 on Google Cloud products eligible
for CUDs, and received $4,500 worth of CUDs. In this example, you are using
$4,500 out of $10,000 in CUDs opportunities, so your CUD optimization rate
is 45%.
Insights provided by Gemini Cloud Assist - If you enabled
Gemini Cloud Assist in Cloud Billing ,
then you will see Gemini-provided key optimization and
utilization insights in the Optimization summary widget:
FinOps score
The FinOps score can help you gauge how well you're using Google Cloud
tools to monitor and save costs, and how you can continue to optimize costs. The
score is a calculation based on how you follow optimization best practices,
including the following:
Monitoring spend by actively logging in and using Cloud Billing
tools.
Using tools such as tags and labels to allocate costs for your resources.
Optimizing resources by turning off idle resources and right-sizing
instances.
Purchasing CUDs, including CUDs opportunities recommended by
Google Cloud.
Creating and monitoring budgets frequently.
Automating your cost management by using tools such as the billing
BigQuery export and using the Budgets API.
Select Improve your score to review Google Cloud recommended
cost-saving actions based on three stages of the cloud FinOps journey: inform,
operate, and optimize.
The FinOps score also provides a peer benchmark score as a view of your
optimization performance in the context of industry verticals based on
aggregated usage data. All customers are automatically opted into peer
benchmarking aggregation, but you can choose to opt out at any time. If you
choose to opt out, you no longer see CUD recommendations, the FinOps score, or
the peer benchmark score in the FinOps hub.
The FinOps and peer benchmark scores are based on data collected two days prior,
and are updated daily. Your score might change depending on factors such as
new customers joining the peer benchmark score.
Opt in or out of participating in the peer benchmark score
To opt in or out of participating in peer benchmarking, you must have the
Billing Account Administrator role on your Cloud Billing account, and
the dataprocessing.groupcontrols.update permission on your
Cloud Billing account, which is part of the Data Processing Controls
Resource Admin role.
In the Google Cloud console, open the Identity and Access Management (IAM)
Transparency and Control Center for your Cloud Billing account.
Go to Transparency and Control Center
Select your Cloud Billing account from the menu.
To opt out of participating in peer benchmarking, in the Data processing
groups table, for the Billing group, click Disable .
If you want to opt in, select Enable .
Note: When you disable permissions, you're opted out from peer benchmark
participation, but you might still see the peer benchmark metric for several
days. If you re-enable participation, it might take two to four days to view the
peer benchmark metric again.
Potential savings/month
With the Potential savings/month chart, you can focus on savings by
service or by project . The chart shows the total potential monthly
savings from all cost optimization opportunities broken down by the associated
service or project.
Recommendations dashboard
From the Potential savings/month chart, you can access the Recommendations
dashboard, where you can review all of the FinOps
recommendations, view the recommendation details, send recommendations to
others to review, and apply recommendations to optimize your cloud costs.
To open the
Recommendations dashboard ,
select View all recommendations .
Top recommendations
The Top recommendations widget shows you the top 10 recommendations by
potential cost savings. Each recommendation displays the estimated monthly
savings, the associated services with the savings, and a brief description of the
recommendation.
If you have the
Recommender Viewer role
on your Cloud Billing account, you can select a recommendation to
get further details and to apply the recommendation. Depending on the type of
recommendation, you might also need project permissions to view the details
and apply a recommendation.
Potential wasted usage
(Preview)
Gain insights on resource utilization and the cost of potential waste. For
resources that provide utilization metrics (such as Compute Engine,
Google Kubernetes Engine, Cloud SQL, and Cloud Run), the chart shows the costs
of provisioned resources with potentially wasted usage.
To determine waste, utilization insights uses various recommenders to help you
identify idle resources, right-sizing opportunities of over- or underprovisioned
resources, and suboptimal configurations, and then summarizes the cost of the
potential wasted usage for each service that returns utilization metrics.
To view the details of the insights and access cost optimization
recommendations, click View utilization insights to open the
Utilization insights dashboard .
Last month's realized savings
For a high-level view of your savings from commitments, use the
Last month's realized savings widget, which breaks down your savings
by the services that you have purchased commitments for.
Carbon Footprint dashboard
Preview: This feature is subject to the "Pre-GA Offerings Terms" of the
Google Cloud
Service Specific Terms .
Pre-GA products and features are available "as is" and might have limited
support. For more information, see the
launch stage descriptions .
The Carbon Footprint dashboard presents the estimated greenhouse
gas emissions from your Google Cloud usage, helping you optimize cloud spend
while reducing carbon impact. For more information, visit the
Carbon Footprint documentation .
When you view the
Recommendations dashboard ,
in the list of recommendations, the Region column displays a green leaf
next to locations that have the lowest carbon impact.
For more information, see
Low CO 2 .
Apply recommendations
Continue to optimize costs by taking advantage of Google's cost-saving
recommendations. To access and apply recommendations, take any of the
following actions:
On the
FinOps score
widget, click Improve your score to access and apply recommended actions.
On the
Potential savings/month
widget, click View all recommendations to access the
Recommendations dashboard ,
then click any of the recommendations to view the details of the
recommendation and take action.
On the
Potential wasted usage
widget, click View utilization insights to access the
Utilization insights dashboard .
On the
Top recommendations
widget, click any of the recommendations to view the details of the
recommendation and take action.
FinOps hub cost recommenders
The FinOps hub dashboard receives metrics from various Google Cloud
cost recommenders. Use the following table to learn more about each recommender.
Name
Recommender ID
Short Description
Committed Use Discounts (CUDs) recommenders
Committed use discount
recommender
google.compute.commitment.UsageCommitmentRecommender
Reduce costs through purchasing resource-based commitments
Committed use discount
recommender
google.cloudbilling.commitment.SpendBasedCommitmentRecommender
Reduce costs through purchasing spend-based and Compute flexible
commitments
Compute Engine recommenders
Idle custom image recommender
google.compute.image.IdleResourceRecommender
Remove unused images
Idle IP address recommender
google.compute.address.IdleResourceRecommender
Remove unused IPs
Idle persistent disk recommender
google.compute.disk.IdleResourceRecommender
Backup and remove unused disks
Idle VM recommender
google.compute.instance.IdleResourceRecommender
Remove unused VMs
Idle reservations recommender
google.compute.IdleResourceRecommender
Remove unused reservations
Managed instance group machine type
recommender
google.compute.instanceGroupManager.MachineTypeRecommender
Right-size MIG machine types
Underutilized reservations recommender
google.compute.RightSizeResourceRecommender
Right-size underutilized reservations
VM machine type recommender
google.compute.instance.MachineTypeRecommender
Note: Recommendations of this type indicating an
underutilized VM (those with a negative costs savings or cost
increase) are shown on the
Utilization insights dashboard but not on the FinOps
Recommendations dashboard.
Right-size VM machine types
Google Kubernetes Engine (GKE) recommenders
GKE idle cluster
recommender
google.container.DiagnosisRecommender
subtype: CLUSTER_IDLE
Remove unused GKE clusters
GKE overprovisioned cluster
recommender
google.container.DiagnosisRecommender
subtype: CLUSTER_OVERPROVISIONED
Right-size overprovisioned GKE clusters
GKE underprovisioned cluster
recommender
google.container.DiagnosisRecommender
subtype: CLUSTER_UNDERPROVISIONED
Note: Underprovisionsed cluster recommendations are shown
on the
Utilization insights dashboard but aren't included on the FinOps
Recommendations dashboard.
Optimize underprovisioned GKE clusters
Cloud SQL recommenders
Cloud SQL idle instance
recommender
google.cloudsql.instance.IdleRecommender
Remove unused SQL instances
Cloud SQL overprovisioned instance
recommender
google.cloudsql.instance.OverprovisionedRecommender
Right-size overprovisioned SQL instances
Cloud SQL underprovisioned instance
recommender
google.cloudsql.instance.UnderprovisionedRecommender
Note: Underprovisionsed instance recommendations are shown
on the
Utilization insights dashboard but aren't included on the FinOps
Recommendations dashboard.
Optimize underprovisioned SQL instances
Cloud Run recommenders
Cloud Run CPU allocation
recommender
google.run.service.CostRecommender
Switch to CPU always-allocated
Project recommender - all services
Unattended project recommender
google.resourcemanager.projectUtilization.Recommender
Reclaim or remove unused projects
Resources
Google Cloud Well-Architected Framework: Cost optimization
Optimize costs with committed use discounts
Purchasing spend-based committed use discounts
Purchasing resource-based committed use discounts
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
