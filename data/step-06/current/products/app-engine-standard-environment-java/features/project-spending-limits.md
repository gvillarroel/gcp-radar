---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:50:21.223Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "Project spending limits"
feature_slug: "project-spending-limits"
latest_feature_date: "2020-02-06"
deprecation_date: "2020-02-06"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/quotas"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/shared-vpc-host-project"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/building-app/creating-project"
keywords:
  - "spending"
  - "limits"
  - "projects"
  - "allowed"
  - "project"
---

# Project spending limits

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

Project spending limits allowed App Engine projects to cap spending; deprecated on 2020-02-06.

## Extended Definition

Project spending limits allowed App Engine projects to cap spending; deprecated on 2020-02-06.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/shared-vpc-host-project](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/shared-vpc-host-project)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/building-app/creating-project](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/building-app/creating-project)

## Supporting Pages

### "Quotas and limits \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- Source ID: `site-docs-reference-4`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- For example, quotas can restrict the number of API calls to a service, the number of load balancers used concurrently by your project, or the number of projects that you can create.
- Resource Daily limit Maximum rate UrlFetch API calls 860,000,000 calls 660,000 calls/minute UrlFetch data sent 4.5 TB 3,600 MB/minute UrlFetch data received 4.5 TB 3,600 MB/minute Networking limits The following networking limits apply to App Engine: Outbound connections per second per instance: 500 (cannot be increased) Outbound DNS resolutions per second per instance: 100 (cannot be increased) Maximum packets per second per instance: 80,000 Maximum bits per second per instance: 100,000,000 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The following example illustrates how to catch the OverQuotaError , which may be raised by the SendMessage() method if an email-related quota has been exceeded: try: mail.SendMessage ( to = 'test@example.com' , from = 'admin@example.com' , subject = 'Test Email' , body = 'Testing' ) except apiproxy errors.OverQuotaError, message: Log the error. logging.error(message) Display an informative message to the user. self.response.out.write ( 'The email could not be sent. ' 'Please try again later.' ) Is your app exceeding the default limits?
- The following limits apply to task queues according to their type: Push Queue Limits Maximum task size 100KB Queue execution rate 500 task invocations per second per queue Maximum countdown/ETA for a task 30 days from the current date and time Maximum number of tasks that can be added in a batch 100 tasks Maximum number of tasks that can be added in a transaction 5 tasks Default maximum number of task queues 100 queues.

### "Configure connectors in the Shared VPC host project \_|\_ App Engine standard\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/shared-vpc-host-project](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/shared-vpc-host-project)
- Source ID: `site-docs-reference-4`
- Final score: 81
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Add the vpc access connector to your service's app.yaml file: vpc access connector: name: projects/ HOST PROJECT ID /locations/ REGION /connectors/ CONNECTOR NAME Replace the following: HOST PROJECT ID : the ID of the Shared VPC host project REGION : the region of your connector CONNECTOR NAME : the name of your connector Deploy the service: gcloud app deploy After deploying, your service is able to send requests to your Shared VPC network and receive the corresponding responses.
- Click Save . gcloud Run the following in your terminal: gcloud projects add-iam-policy-binding HOST PROJECT ID \ --member= PRINCIPAL \ --role=roles/vpcaccess.user Replace the following: HOST PROJECT ID : the ID of the Shared VPC host project PRINCIPAL : the principal that deploys your App Engine service.
- Click Save . gcloud Run the following in your terminal: gcloud projects add-iam-policy-binding SERVICE PROJECT ID \ --member= PRINCIPAL \ --role=roles/compute.networkViewer Replace the following: SERVICE PROJECT ID : the ID of the service project PRINCIPAL : the principal who deploys App Engine services.
- Click Save . gcloud Run the following in your terminal: gcloud projects add-iam-policy-binding HOST PROJECT ID \ --member= PRINCIPAL \ --role=roles/vpcaccess.viewer Replace the following: HOST PROJECT ID : the ID of the Shared VPC host project PRINCIPAL : the principal who deploys App Engine services.

### "Create your project \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/building-app/creating-project](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/building-app/creating-project)
- Source ID: `site-docs-reference`
- Final score: 73
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Due to changes in the default behavior for how Cloud Build uses service accounts in new projects, and secure-by-default organization policy changes , you might need to grant additional roles to your deploying service account.
- Create a project : To create a project, you need the Project Creator role ( roles/resourcemanager.projectCreator ), which contains the resourcemanager.projects.create permission.
- Create a project : To create a project, you need the Project Creator role ( roles/resourcemanager.projectCreator ), which contains the resourcemanager.projects.create permission.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Create your project Stay organized with collections Save and categorize content based on your preferences.

