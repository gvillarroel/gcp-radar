---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:10:13.950Z"
product_name: "Capacity Planner"
product_slug: "capacity-planner"
feature_name: "Capacity Planner organization-level gcloud command generation for future reservation requests"
feature_slug: "capacity-planner-organization-level-gcloud-command-generation-for-future-reservation-requests"
latest_feature_date: "2024-03-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/capacity-planner/docs/view-data"
  - "https://docs.cloud.google.com/capacity-planner/docs/choose-request-method"
  - "https://docs.cloud.google.com/capacity-planner/docs/reference/libraries"
keywords:
  - "organization"
  - "generation"
  - "command"
  - "gcloud"
  - "level"
  - "capacity"
  - "planner"
  - "for"
---

# Capacity Planner organization-level gcloud command generation for future reservation requests

Product: Capacity Planner
Coverage: LOW

## Step 02 Summary

Capacity Planner preview can generate gcloud CLI commands to create future reservation requests from organization-level VM usage data.

## Extended Definition

Capacity Planner preview can generate gcloud CLI commands to create future reservation requests from organization-level VM usage data.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)
- [https://docs.cloud.google.com/capacity-planner/docs/choose-request-method](https://docs.cloud.google.com/capacity-planner/docs/choose-request-method)
- [https://docs.cloud.google.com/capacity-planner/docs/reference/libraries](https://docs.cloud.google.com/capacity-planner/docs/reference/libraries)

## Supporting Pages

### View usage and forecast data \_|\_ Capacity Planner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- REST methods Query historical usage timeseries project-level query: v1beta projects.locations.usageHistories.query method folder-level query: v1beta folders.locations.usageHistories.query method organization-level query: v1beta organizations.locations.usageHistories.query method Query forecast timeseries project-level query: v1beta projects.locations.forecasts.query method folder-level query: v1beta folders.locations.forecasts.query method organization-level query: v1beta organizations.locations.forecasts.query method Query reservations timeseries project-level query: v1beta projects.locations.reservations.query method folder-level query: v1beta folders.locations.reservations.query method organization-level query: v1beta organizations.locations.reservations.query method What's next Export usage and forecast data Enable the quota adjuster Request capacity from actual or forecasted usage Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to view the usage and forecast data of your resources: To view forecast data: capacityplanner.forecasts.list on the project, folder, or organization To view historical usage data: capacityplanner.usageHistories.list on the project, folder, or organization To summarize the historical usage data: capacityplanner.usageHistories.summarize on the project, folder, or organization You might also be able to get these permissions with custom roles or other predefined roles .
- View the forecast and usage of your resources View the usage and forecast data about the compute instances, Persistent Disk volumes, GPUs, and TPUs in your project, folder, or organization by using the following methods: View the forecast and usage of your resources using the Google Cloud console (Recommended) View the forecast and usage of your resources using the Capacity Planner API View the forecast and usage of your resources using the Google Cloud console To view the forecast and usage of your resources using the Google Cloud console, complete the following steps.
- Required roles To get the permissions that you need to view the usage and forecast data of your resources, ask your administrator to grant you the Capacity Planner Usage Viewer ( roles/capacityplanner.viewer ) IAM role on your project, folder, or organization.

### "Create future reservation requests \_|\_ Capacity Planner \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/capacity-planner/docs/choose-request-method](https://docs.cloud.google.com/capacity-planner/docs/choose-request-method)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create future reservation requests: To create future reservation requests: compute.futureReservations.create on the owner project To let Compute Engine auto-create reservations: compute.reservations.create on the owner project To view the forecasted usage of your instances or GPUs: capacityplanner.forecasts.list on the project, folder, or organization To view the actual usage of your instances or GPUs: capacityplanner.usageHistories.list on the project, folder, or organization To summarize the actual usage of your instances or GPUs: capacityplanner.usageHistories.summarize on the project, folder, or organization You might also be able to get these permissions with custom roles or other predefined roles .
- Required roles To get the permissions that you need to create future reservation requests, ask your administrator to grant you the following IAM roles: To access and view Capacity Planner: Capacity Planner Viewer ( roles/capacityplanner.viewer ) on the project, folder, or organization To create future reservation requests: Compute Future Reservation User ( roles/compute.futureReservationUser ) on the owner project For more information about granting roles, see Manage access to projects, folders, and organizations .
- Choose one of the following methods based on how many machine types you want to reserve capacity for at once, and whether you want to edit a future reservation request before creating it: Recommended: Generate gcloud CLI commands This method is useful for creating one or more future reservation requests at once for various machine types.
- Create future reservation requests After you select a Compute Engine resource and its usage data in the previous section using the Google Cloud console, you can create future reservation requests for one or more machine types by completing the following steps: Specify the request name, name prefix, and auto-delete option Specify the number of instances to reserve Specify the share type Create draft requests and submit them Specify the request name, name prefix, and auto-delete option If you're creating multiple future reservation requests at once by generating gcloud CLI commands, then the following properties will have matching values across all requests: Auto-delete option Name prefix Reservation period You can optionally customize these values for individual requests by editing the generated gcloud CLI commands.

### Capacity Planner client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/capacity-planner/docs/reference/libraries](https://docs.cloud.google.com/capacity-planner/docs/reference/libraries)
- Source ID: `site-api-reference`
- Final score: 170
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Install the client library C# Run the following Install-Package command : Install-Package Google.Cloud.CapacityPlanner.V1Beta -Pre For more information, see Setting Up a C# Development Environment .
- PHP Run the following Composer command: composer require google/cloud-capacityplanner For more information, see Using PHP on Google Cloud .
- To set request fields, pass in keyword arguments. request = Google :: Cloud :: CapacityPlanner :: V1beta :: QueryUsageHistoriesRequest . new Call the query usage histories method. result = client . query usage histories request The returned object is of type Google::Cloud::CapacityPlanner::V1beta::QueryUsageHistoriesResponse. p result end Additional resources C# The following list contains links to more resources related to the client library for C#: API reference Client libraries best practices Issue tracker google-cloud-capacity-planner on Stack Overflow Source code Go The following list contains links to more resources related to the client library for Go: API reference Client libraries best practices Issue tracker google-cloud-capacity-planner on Stack Overflow Source code Java The following list contains links to more resources related to the client library for Java: API reference Client libraries best practices Issue tracker google-cloud-capacity-planner on Stack Overflow Source code Node.js The following list contains links to more resources related to the client library for Node.js: API reference Client libraries best practices Issue tracker google-cloud-capacity-planner on Stack Overflow Source code PHP The following list contains links to more resources related to the client library for PHP: API reference Client libraries best practices Issue tracker google-cloud-capacity-planner on Stack Overflow Source code Python The following list contains links to more resources related to the client library for Python: API reference Client libraries best practices Issue tracker google-cloud-capacity-planner on Stack Overflow Source code Ruby The following list contains links to more resources related to the client library for Ruby: API reference Client libraries best practices Issue tracker google-cloud-capacity-planner on Stack Overflow Source code Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Java Select one of the following options: If you are using Maven with BOM , add the following to your pom.xml file: <dependencyManagement> <dependencies> <dependency> <groupId>com.google.cloud</groupId> <artifactId>libraries-bom</artifactId> <version>26.71.0</version> <type>pom</type> <scope>import</scope> </dependency> </dependencies> </dependencyManagement> <dependencies> <dependency> <groupId>com.google.cloud</groupId> <artifactId>google-cloud-capacityplanner</artifactId> </dependency> </dependencies> If you are using Maven without BOM, add the following to your dependencies: <dependency> <groupId>com.google.cloud</groupId> <artifactId>google-cloud-capacityplanner</artifactId> <version>0.1.0</version> </dependency> If you are using Gradle with BOM, add the following to your dependencies: implementation platform('com.google.cloud:libraries-bom:26.71.0') implementation 'com.google.cloud:google-cloud-capacityplanner' If you are using Gradle without BOM, add the following to your dependencies: implementation 'com.google.cloud:google-cloud-capacityplanner:0.1.0' If you are using SBT , add the following to your dependencies: libraryDependencies += "com.google.cloud" % "google-cloud-capacityplanner" % "0.1.0" For more information, see Setting Up a Java Development Environment .

