---
title: "Optimize resource costs and utilization \_|\_ Cloud Hub \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/hub/docs/optimize
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/hub/docs/home
source_metadata:
  url: https://docs.cloud.google.com/hub/docs/optimize
  title: "Optimize resource costs and utilization \_|\_ Cloud Hub \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Cloud Hub
Guides
Send feedback
Optimize resource costs and utilization
Stay organized with collections
Save and categorize content based on your preferences.
You can view summary cost data, utilization data, and cost optimization
recommendations for Google Cloud services on the Optimization page to help you
to optimize costs in your projects and App Hub applications.
You can also use Gemini for Google Cloud, an AI-powered
collaborator, to help you to optimize costs.
Cost data and utilization metrics can help developers and platform
administrators in your organization to make informed decisions about
optimization opportunities.
This document is for developers and platform administrators who have permissions
to view resource cost and utilization data provided by the
App Optimize API .
If you manage billing accounts or budgets in Cloud Billing, refer to the
following information to help you with cost optimization:
Cloud Billing cost optimization documentation ,
provides information about using FinOps Hub and
Gemini Cloud Assist in Cloud Billing.
Cloud Billing export to BigQuery lets you
perform a more detailed cost analysis in BigQuery or visualize
cost data in tools such as Looker Studio .
About resource costs
This section describes information about costs that the App Optimize API
provides to the Optimization page and Gemini Cloud Assist.
Costs organized by product
Cloud Billing and the App Optimize API categorize product-related costs
differently. Cost data that the API provides to the Optimization page and
Gemini Cloud Assist is organized logically by product.
Cloud Billing groups SKUs for resource usage into services .
A service in Cloud Billing might be a subset of a Google Cloud
product or might include SKUs from multiple Google Cloud products. These
Cloud Billing services are unrelated to
App Hub services .
For example, the costs for Compute Engine and GKE products
are equivalent to multiple Cloud Billing services.
Product on the Optimization page
Service in Cloud Billing
Compute Engine
Compute Engine and VM Manager
GKE
Compute Engine and GKE
Persistent Disk
Compute Engine
The Networking service includes SKUs for many networking
products such as Cloud Load Balancing, Cloud NAT, Cloud VPN,
Private Service Connect, and Performance Dashboard. The
Optimization page categorizes these costs by product, but Cloud Billing
only provides a single Networking service and doesn't have defined services
for each networking product.
You can search the list of Google Cloud SKUs to learn more about
how SKUs are categorized in Cloud Billing.
Cost values
Costs are based on your contract prices, before any
committed-use discounts (CUDs) or other credits are applied. For
an application, costs include all resources that are fully
used by the application and doesn't include costs for resources that are
shared across applications.
Cost data availability
Google Cloud products report usage and cost data to
Cloud Billing processes at varying intervals. As a result, you
might see a delay between your use of Google Cloud services and the
usage and costs displayed on the Optimization page or returned by
Gemini Cloud Assist. Typically, your costs are available within
a day, but can sometimes take more than 24 hours.
Limitations and known issues
Costs for Compute Engine VMs, Compute Engine MIGs, and
GKE clusters don't include network charges for data egress or
Persistent Disk usage. These costs are reported separately.
Only some products support
resource-level costs .
On the Optimization page, you can't view or filter resources by location when
you are viewing data for an application.
Costs for an application are only available if all application resource costs
are in the same currency. If an application has resources associated with
different billing accounts, the billing accounts must all be configured for
the same currency .
Before you begin
The App Optimize API uses Cloud Billing to retrieve cost data and
Cloud Monitoring for utilization metrics. To get cost and utilization
data, you need access to Monitoring data and configuration
information, as well as the ability to view Cloud Billing data.
To view data on the Optimization page,
Ensure that Cloud Hub is set up .
To use Gemini Cloud Assist,
Ensure that Gemini Cloud Assist is set up .
Note: Cloud Hub only supports applications in a folder configured for
application management. It doesn't support applications in a
host project or a single-project boundary .
Required roles
To get the permissions that
you need to view data in Cloud Hub,
ask your administrator to grant you the
following IAM roles on the project ( project view ) or management
project for a folder ( application view ):
View most application and project data:
Cloud Hub Operator ( roles/cloudhub.operator )
View resource cost data:
( roles/viewer ) or a custom role with the billing.resourceCosts.get permission
View recommendations:
Recommender Viewer (roles/recommender.viewer)
Use Gemini Cloud Assist:
Gemini Cloud Assist User ( roles/geminicloudassist.user )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Making changes based on your analysis of costs, such as applying a
recommendation from Active Assist or changing the billing option for
Cloud Run, requires additional permissions or coordination with a
member of your organization who has the required permissions.
View costs and utilization
The Optimization page displays the following information:
The total cost and cost trend for a selected project or application.
The top five resources or application workloads with the highest cost
along with their cost change.
The five most expensive resources or workloads with lowest utilization.
When you view data for a selected project or application, you can filter the
page to display specific products.
For information about which costs are included in displayed cost data, see
About costs .
To view costs and utilization:
In the Google Cloud console, go to the Optimization page:
Go to Optimization
Select the project or application that you want to
view:
To view data for applications, choose the folder that is configured for
application management. Folders configured for application management
have an special icon ( ). The management
project for the folder also has a special icon
( ) and the project name is in the
format FOLDER-NAME -mp . If you choose the
management project instead of the folder, then the project picker
automatically changes the selection to the folder.
To view data for an individual project, choose the project
that contains the resources you want to view.
To filter data for a specific product, location, or historical time range,
select an option from the Product , Location , or time range filters.
You can view up to 30 days of data.
The Optimization page shows the following information:
Cost trend : Total costs for the selected filters.
Figure 1 : Cost summary for a project
Figure 2 : Cost summary for an application
Total gross cost : displays the total cost of usage for the selected
filters.
Cost change : displays the change in gross cost. The change is
calculated based on the time period you selected. For example, if
you select 7 days and the current date is April 30, 2025, the
change percentage is a comparison between data from April 23 to April
29 and data from April 16 to April 22. The start of the billing day
is at midnight in the US and Canadian Pacific Standard Time (UTC-8)
time zone when Pacific Standard Time is in effect. When Pacific Daylight
Time is in effect, the start of the billing day is at midnight in the
US and Canadian Pacific Daylight Time (UTC-7) time zone.
Resources by cost and utilization : This section lists top resources
to consider for further investigation. Costs associated with products that
aren't supported are classified as Other .
For a project : displays the top five resources with the highest cost
and cost change and the top five resources with high cost and lowest
utilization. Resources for a product that aren't supported are classified
as Other .
Figure 3 : Cost summary for a project
To further explore costs, click a specific resource name to view details
for that resource.
To view more detailed cost information, click
View details in Cost Explorer . The view in Cost Explorer is
filtered to show the same project, product, location, and time range as
the Optimization page.
For an application : displays the top five workloads and services with
the highest cost and cost change and the top five workloads and services
with high cost and lowest utilization.
Figure 4 : Cost summary for an application
To further explore costs, click a specific workload or service name to
view details for that workload or service.
To view more detailed cost information, click
View details in Cost Explorer . The view in Cost Explorer is filtered
to show the same application, product, location, and time range as the
Optimization page.
For more information about using Cost Explorer, see
Optimize costs with Cost Explorer .
Since utilization is only one aspect of cost for Google Cloud
services, we recommend that you use data on the Optimization page in the
context of other cost-optimization features and best practices that are
available for the services you use. For example, Compute Engine,
Google Kubernetes Engine (GKE), and Cloud Run provides
committed use discounts . Cloud Run also lets you choose from
different billing options based on how you use your instances.
View recommendations
Active Assist generates recommendations and insights to help you
optimize your Google Cloud resources. The Optimization page in
Cloud Hub displays the top 5 cost optimization recommendations
for the selected project or application.
For information about cost recommenders and how they work, see the
Recommenders page. The Optimization page displays
cost recommendations from all cost recommenders except for the
committed use discounts recommender .
To view recommendations:
In the Google Cloud console, go to the Optimization page:
Go to Optimization
Select the project or application that you want to
view:
To view data for applications, choose the folder that is configured for
application management. Folders configured for application management
have an special icon ( ). The management
project for the folder also has a special icon
( ) and the project name is in the
format FOLDER-NAME -mp . If you choose the
management project instead of the folder, then the project picker
automatically changes the selection to the folder.
To view data for an individual project, choose the project
that contains the resources you want to view.
The Top 5 optimization recommendations table displays the following
information:
Resource (for projects) or Workload (for applications) - The
resource or workload that the recommendation applies to.
Cost - The cost for the selected time period in the filter bar.
The default is 7 days. Consider choosing 30 days as the time period so that
it's easier to compare costs with the Monthly savings column.
Monthly savings : The highest amount of money you can potentially save
if you apply the cost savings recommendations.
Cost savings are an estimate that is calculated using data from the
last month, regardless of the time period selected in the filter bar.
Cost savings are based on your contract prices, before any committed use
discounts or other credits are applied
Actual cost savings can vary.
To view additional recommendations, click
View all recommendations in Active Assist Recommendations .
If a project is selected in the project picker, Active Assist
displays all recommendations for the project.
Active Assist does not support displaying data for a
folder or an App Hub application. If you know which project
contains the resource that you are interested in optimizing, select the
project from the project picker.
Optimize costs with Gemini assistance
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
This section describes how to use Gemini Cloud Assist to help
you optimize costs. If Gemini Cloud Assist is set up for your
project or folder, you can access its chat capabilities from any page in the
Google Cloud console.
As an early-stage technology, Gemini for Google Cloud
products can generate output that seems plausible but is factually incorrect. We recommend that you
validate all output from Gemini for Google Cloud products before you use it.
For more information, see
Gemini for Google Cloud and responsible AI .
For information about which costs are included in responses to your prompts,
see About costs .
Learn how and when Gemini
for Google Cloud uses your data .
Open Gemini Cloud Assist chat
In the Google Cloud console, go to any page—for example, the Optimization
page.
Go to Optimization
Select the project or application that you want to
view:
To view data for applications, choose the folder that is configured for
application management. Folders configured for application management
have an special icon ( ). The management
project for the folder also has a special icon
( ) and the project name is in the
format FOLDER-NAME -mp . If you choose the
management project instead of the folder, then the project picker
automatically changes the selection to the folder.
To view data for an individual project, choose the project
that contains the resources you want to view.
In the Google Cloud console toolbar, click
spark Open or close Gemini Cloud Assist chat .
The Cloud Assist panel opens.
Enter a prompt
In Gemini Cloud Assist chat, you can get assistance by using
natural language prompts (questions or statements).
Use the following information to help you write your prompts:
You can only ask a question about one project or application at a time.
You can specify date ranges, such as 2025-10-1 to 2025-10-31 .
If you don't specify a date range, the default date range is the previous 7
days.
Prompts for data from the previous week set the date range to the last
Monday to Sunday period.
Prompts for data from the previous month set the date range to the last
calendar month.
For applications, you must specify the application name in your prompt,
even if you are viewing a page in Google Cloud console that is showing data
for a selected application. The application name is the unique identifier
for the application, such as web-store . If you use the display name for the
application, such as "Web store", Gemini Cloud Assist might
parse your prompt incorrectly.
Gemini Cloud Assist uses data from the App Optimize API for
cost-related questions about utilization, the same API that provides data for
the Cloud Hub Optimization page.
Gemini Cloud Assist can answer general questions about
utilization and performance using the Cloud Monitoring
API.
The following table lists some example prompts.
Prompt
Type of response
"How much did I spend on this project last month?"
A summary of costs in the last calendar month for the selected project.
"How much did my GKE cluster my-cluster-id cost me last
month?"
A summary of costs for the cluster my-cluster-id in the last
calendar month.
"Show me my costs in us-central1."
A summary of resource costs in the selected project in the region
us-central1 over the last 7 days.
"What were the least cost efficient resources last month for my app
my-favourite-app ?"
A list of the least cost efficient resources in the application
my-favourite-app in the last month.
"What are my most overprovisioned resources that are costing me the most?"
A list of the most overprovisioned resources in the selected project in
the last 7 days.
What's next
Explore opportunities for cost savings and optimization in
FinOps hub .
Perform in-depth cost analysis with
Cloud Billing reports .
Learn cost optimization best practices in the document
Google Cloud Architecture Framework: Cost optimization .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
