---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:10:07.205Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Cloud Billing Anomaly Detection"
feature_slug: "cloud-billing-anomaly-detection"
latest_feature_date: "2025-10-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/disable-billing-with-notifications"
  - "https://docs.cloud.google.com/billing/docs/how-to/reports"
  - "https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.services.cloud_billing.pagers.ListProjectBillingInfoAsyncPager"
keywords:
  - "billing"
  - "anomaly"
  - "detection"
  - "is"
  - "generally"
  - "available"
  - "with"
  - "expanded"
---

# Cloud Billing Anomaly Detection

Product: Cloud Billing
Coverage: LOW

## Step 02 Summary

Cloud Billing Anomaly Detection is generally available with expanded capabilities including auto-generated thresholds, configurable deviation-percentage thresholds, and email alerts for billing administrators; Cloud Billing adds Anomaly Detection in the Anomalies dashboard to surface unexpected cost spikes and provide root cause analysis by service, region, and SKU.

## Extended Definition

Cloud Billing Anomaly Detection is generally available with expanded capabilities including auto-generated thresholds, configurable deviation-percentage thresholds, and email alerts for billing administrators; Cloud Billing adds Anomaly Detection in the Anomalies dashboard to surface unexpected cost spikes and provide root cause analysis by service, region, and SKU.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/disable-billing-with-notifications](https://docs.cloud.google.com/billing/docs/how-to/disable-billing-with-notifications)
- [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- [https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.services.cloud_billing.pagers.ListProjectBillingInfoAsyncPager](https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.services.cloud_billing.pagers.ListProjectBillingInfoAsyncPager)

## Supporting Pages

### "Disable billing usage with notifications \_|\_ Cloud Billing \_|\_ Google\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/disable-billing-with-notifications](https://docs.cloud.google.com/billing/docs/how-to/disable-billing-with-notifications)
- Source ID: `site-docs-root-2`
- Final score: 166
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Add the following dependencies: Node.js Copy the following to your package.json file: { "name" : "cloud-functions-billing" , "private" : "true" , "version" : "0.0.1" , "description" : "Examples of integrating Cloud Functions with billing" , "main" : "index.js" , "engines" : { "node" : ">=16.0.0" }, "scripts" : { "compute-test" : "c8 mocha -p -j 2 test/periodic.test.js --timeout=600000" , "test" : "c8 mocha -p -j 2 test/index.test.js --timeout=5000 --exit" }, "author" : "Ace Nassri <anassri@google.com>" , "license" : "Apache-2.0" , "dependencies" : { "@google-cloud/billing" : "^4.0.0" , "@google-cloud/compute" : "^4.0.0" , "google-auth-library" : "^9.0.0" , "googleapis" : "^143.0.0" , "slack" : "^11.0.1" }, "devDependencies" : { "@google-cloud/functions-framework" : "^3.0.0" , "c8" : "^10.0.0" , "gaxios" : "^6.0.0" , "mocha" : "^10.0.0" , "promise-retry" : "^2.0.0" , "proxyquire" : "^2.1.0" , "sinon" : "^18.0.0" , "wait-port" : "^1.0.4" } } Python Copy the following to your requirements.txt file: functions - framework == 3. google - cloud - billing == 1.16.2 google - cloud - logging == 3.12.1 Copy the following code into your Cloud Run function: Node.js const { CloudBillingClient } = require ( ' @google-cloud/billing ' ); const { InstancesClient } = require ( ' @google-cloud/compute ' ); const PROJECT ID = process . env .
- Request ( url ) req . add header ( "Metadata-Flavor" , "Google" ) project id = urllib . request . urlopen ( req ) . read () . decode () if project id is None : raise ValueError ( "project-id metadata not found." ) return project id @functions framework . cloud event def stop billing ( cloud event : CloudEvent ) - > None : TODO(developer): As stoping billing is a destructive action for your project, change the following constant to False after you validate with a test budget.
- What's next Re-enable Cloud Billing for your project Review other programmatic notification examples to learn how to do the following: Listen to your notifications Control resource usage with notifications Send notifications to Slack Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Current cost is within budget." ) return print ( f "Disabling billing for project ' { PROJECT NAME } '..." ) is billing enabled = is billing enabled ( PROJECT NAME ) if is billing enabled : disable billing for project ( PROJECT NAME , SIMULATE DEACTIVATION ) else : print ( "Billing is already disabled." ) def is billing enabled ( project name : str ) - > bool : """Determine whether billing is enabled for a project.

### "Analyze billing data and cost trends with Reports \_|\_ Cloud Billing \_\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- As of May 2021, the following data is available in the Cloud Billing reports: Negotiated savings : Viewable for Cloud Billing accounts that are associated with a custom pricing contract, Negotiated savings shows the difference in cost between your contract price compared to the current list price.
- When viewing costs by Invoice month , the following data is available in the Cloud Billing reports: Invoices generally include all costs incurred during a given calendar month, but the cost for some services' usage at the very end of a calendar month might roll over to the next month's invoice.
- The Share feature is available to customers with Cloud Billing account-level access, as well as to Project Owners, Project Editors, and Project Viewers who can view Cloud Billing reports for their specific Google Cloud projects.
- For more information about Google Cloud project permissions, see: Access control for projects with IAM IAM basic and predefined roles reference Access the reports page To view the cost reports for your Cloud Billing account or project: Using the procedure that fits your level of access to Cloud Billing accounts , go to your Cloud Billing account in the Billing section of the Google Cloud console: Users with Cloud Billing account permissions Users with project-level permissions only If you have Cloud Billing account permissions, you can select from a list of billing accounts that you have permissions to access.

### "Class ListProjectBillingInfoAsyncPager (1.18.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.services.cloud_billing.pagers.ListProjectBillingInfoAsyncPager](https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.services.cloud_billing.pagers.ListProjectBillingInfoAsyncPager)
- Source ID: `site-python-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.billing v1.types.ListProjectBillingInfoRequest The initial request object. response google.cloud.billing v1.types.ListProjectBillingInfoResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Home Documentation Developer tools Python Client libraries Send feedback Class ListProjectBillingInfoAsyncPager (1.18.0) Stay organized with collections Save and categorize content based on your preferences.
- All the usual ListProjectBillingInfoResponse attributes are available on the pager.
- Version latest keyboard arrow down 1.18.0 (latest) 1.17.0 1.16.3 1.15.0 1.14.1 1.13.6 1.12.1 1.11.5 1.10.1 1.9.1 1.8.0 1.7.3 1.6.1 1.5.1 1.4.1 1.3.4 1.2.1 1.1.1 1.0.0 0.1.0 ListProjectBillingInfoAsyncPager ( method : typing .

