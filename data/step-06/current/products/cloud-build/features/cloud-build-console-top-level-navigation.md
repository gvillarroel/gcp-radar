---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.915Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build console top-level navigation"
feature_slug: "cloud-build-console-top-level-navigation"
latest_feature_date: "2018-07-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/build/docs/automate-builds"
  - "https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers"
  - "https://docs.cloud.google.com/appengine/docs/quotas"
keywords:
  - "navigation"
  - "menu"
  - "level"
  - "console"
  - "added"
---

# Cloud Build console top-level navigation

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

A new top-level Cloud Build menu was added to the Google Cloud console.

## Extended Definition

A new top-level Cloud Build menu was added to the Google Cloud console.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/build/docs/automate-builds](https://docs.cloud.google.com/build/docs/automate-builds)
- [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)
- [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)

## Supporting Pages

### Quickstart: Automate builds by using Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automate-builds](https://docs.cloud.google.com/build/docs/automate-builds)
- Source ID: `site-docs-root`
- Final score: 89
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the Google Cloud console navigation menu, click Cloud Build > Triggers .
- In the Google Cloud console navigation menu, click Cloud Build > Triggers .
- In the Google Cloud console navigation menu, click Cloud Build > History .
- Create a trigger Open the Triggers page in the Google Cloud console: Open Triggers page Select your project from the project selector drop-down menu at the top of the page.

### Create and manage build triggers \_|\_ Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)
- Source ID: `site-docs-root-2`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- Resubmit a build for approval If your build has been rejected, you can resubmit your build for approval by following these steps in the Google Cloud console: Open the Cloud Build History page in the Google Cloud console.
- If you are connecting an external repository, such as one hosted on GitHub or Bitbucket, you will need admin-level permissions on the repository to initially connect your repository to Cloud Build.
- For external repositories, such as GitHub and Bitbucket, you must have owner-level permissions for the Google Cloud project with which you're working.
- Note: You can update all fields associated with your trigger using the Google Cloud console except showing build logs.

### "Quotas and limits \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- Source ID: `site-docs-reference-2`
- Final score: 70
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following limits apply to task queues according to their type: Push Queue Limits Maximum task size 100KB Queue execution rate 500 task invocations per second per queue Maximum countdown/ETA for a task 30 days from the current date and time Maximum number of tasks that can be added in a batch 100 tasks Maximum number of tasks that can be added in a transaction 5 tasks Default maximum number of task queues 100 queues.
- Task Queue When a task executes, its associated requests count toward the application request quotas These limits apply to all task queues: Resource Daily limit Maximum rate Task Queue management calls (using the Google Cloud console) 10,000 n/a Resource Default limit Maximum number of queues (includes both push and pull queues but not the default queue) 100 queues.
- If you're expecting extremely high traffic levels, or for some reason your app requires particularly high quotas (for example, because of a significant product launch or large load tests), we recommend that you sign up for a support package .
- Resource or API call Free Quota Total storage (documents and indexes) 0.25 GB Queries 1000 queries per day Adding documents to indexes 0.01 GB per day The application console quota section displays a raw count of API requests.

