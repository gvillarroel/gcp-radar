---
title: "Delete resources \_|\_ Cloud Workstations \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/workstations/docs/delete-resources
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/workstations/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/workstations/docs/delete-resources
  title: "Delete resources \_|\_ Cloud Workstations \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Workstations
Guides
Send feedback
Delete resources
Stay organized with collections
Save and categorize content based on your preferences.
To avoid incurring charges to your Google Cloud account for the resources
used, make sure that you remember to delete resources that you no longer need.
Note: Disabling the Cloud Workstations API doesn't delete Cloud Workstations resources.
To avoid being billed, you must delete the underlying Cloud Workstations
resources.
Delete a workstation
To delete a workstation from the Google Cloud console:
In the Google Cloud console, go to
Cloud Workstations > Workstations .
Select the checkbox beside the workstation that you want to delete.
Click the more_vert More options menu and
select Delete to delete the selected workstation.
If your workstation configuration uses persistent disks and the
reclaim policy
is set to retain persistent disks after you delete the workstation, be sure to
remind your Cloud Workstations Admin to manually delete the
persistent disk for you.
Delete a workstation configuration
If you created a new workstation configuration to learn about Cloud Workstations
and you no longer need the configuration, you can delete it from
the Google Cloud console:
In the Google Cloud console, go to
Cloud Workstations > Workstation configurations .
Select the checkbox beside the workstation configuration that you
want to delete.
Click the more_vert More options menu and
select Delete to delete the selected workstation configuration.
Delete a workstation cluster
To delete a workstation cluster from the Google Cloud console:
In the Google Cloud console, go to
Cloud Workstations > Clusters .
Select the checkbox beside the cluster that you want to delete.
Click the more_vert More options
menu and select Delete to delete the selected workstation cluster.
Delete a Google Cloud project
To delete a Google Cloud project from the Google Cloud console or from the
gcloud CLI:
Console
Caution : Deleting a project has the following effects:
Everything in the project is deleted. If you used an existing project for
the tasks in this document, when you delete it, you also delete any other work you've
done in the project.
Custom project IDs are lost.
When you created this project, you might have created a custom project ID that you want to use in
the future. To preserve the URLs that use the project ID, such as an appspot.com
URL, delete selected resources inside the project instead of deleting the whole project.
If you plan to explore multiple architectures, tutorials, or quickstarts, reusing projects
can help you avoid exceeding project quota limits.
In the Google Cloud console, go to the Manage resources page.
Go to Manage resources
In the project list, select the project that you
want to delete, and then click Delete .
In the dialog, type the project ID, and then click
Shut down to delete the project.
gcloud
Caution : Deleting a project has the following effects:
Everything in the project is deleted. If you used an existing project for
the tasks in this document, when you delete it, you also delete any other work you've
done in the project.
Custom project IDs are lost.
When you created this project, you might have created a custom project ID that you want to use in
the future. To preserve the URLs that use the project ID, such as an appspot.com
URL, delete selected resources inside the project instead of deleting the whole project.
If you plan to explore multiple architectures, tutorials, or quickstarts, reusing projects
can help you avoid exceeding project quota limits.
Delete a Google Cloud project:
gcloud projects delete PROJECT_ID
What's next
Create a workstation using your newly
created workstation configuration.
Learn more about configuring additional options in your
workstation configuration .
Use the
Cloud Workstations base editor .
Customize your
workstation configuration .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
