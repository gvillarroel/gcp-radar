---
title: "Community Visualizations Developer Preview \_|\_ Google for Developers"
url: https://developers.google.com/looker-studio/visualization/developer-preview
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/looker-studio/visualization
source_metadata:
  url: https://developers.google.com/looker-studio/visualization/developer-preview
  title: "Community Visualizations Developer Preview \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Looker Studio
Community Visualizations
Community Visualizations Developer Preview
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Looker Studio's Community Visualizations empower users to create and integrate custom visualizations into their reports.
This Developer Preview offers core functionalities and resources for building, sharing, and managing visualizations using the Looker Studio Community Component Library.
Users have control over enabling/disabling Community Visualizations within their data sources, ensuring data security and flexibility.
While external resource requests are currently restricted for security, future development plans include enhancements to developer workflow, distribution options, and new visualization capabilities.
Feedback is encouraged to shape the future of Community Visualizations; users can stay updated through the changelog and submit feedback via designated channels.
Community Visualizations allow you to build and use your own
visualizations in [Looker Studio]. The Developer Preview / Beta introduces the
core functionality, resources, and tools required for you to build and share
visualizations in Looker Studio.
Developer preview
The Developer preview launch includes the following:
The Community Visualization feature is enabled for all users. Anyone can
build and use visualizations. See
Getting started with community visualizations .
The [Looker Studio Community Component Library] is available. The helper
library makes it easier to develop community visualizations.
Community Visualizations can be published in the showcase. Find out how to
share your visualization .
A Data Source control is available to turn Community Visualizations on/off.
By default, Community Visualizations are turned on for a data source but
consent is required when adding a visualization to a report. Learn how to
Enable community visualizations in your data source .
Note: "Developer Preview" means the feature is stable and ready for developers
to build and use visualizations in reports. It's intended to give all developers
access to explore the feature and an opportunity to provide
feedback to make Community Visualizations even better.
Partner Visualizations
Partner visualizations go through a review process, and are featured as part of
the in-product gallery in Looker Studio. The Partner Visualization program
provides:
In-product visibility
Opportunities for promotion through communication + social channels
To participate and publish your visualization:
Build a visualization
Submit your visualization to the gallery.
What's next
The Developer Preview sets the foundation from which you can build and use
Community Visualizations. However, there is an extensive roadmap that will
improve the experience for developers.
Some of the features and improvements under consideration:
Development
Improving the developer workflow.
Supporting more advanced data and style configuration options.
Better control over deployments and pushing new changes.
Distribution
More options to publish your visualization/components for other Looker Studio
users to discover and use in their reports.
New capabilities
Performance improvements.
Additional controls for users and developers to manage visualizations and
to decide which visualization(s) can access external resources.
Note: This list is subject to change, depending on feedback.
Stay up-to-date and provide feedback
To stay up-to-date on changes such as fixes, improvements, and new features
follow the changelog .
We would like to hear from you! What's working well for you, what isn't,
and what features or improvements would you like to see? To provide feedback to
the team see Sending feedback .
FAQ
Do I have to make my community visualization code public?
Your code needs to be publicly readable/accessible. That doesn't mean you need
to promote or share it publicly, but you should assume that any
viewer of a report that uses your community visualization can view your
visualization code. The same is true if you share the component ID with anyone.
They will be able to load and add your community visualization to their reports.
There may be options in the future to allow for private or authenticated
community visualizations.
Where do I report an issue or request a feature?
If you've discovered an issue, first review the list of
Limitations / Known issues to determine if this is a known issue.
You can submit feature requests and issues by following the instructions for
Sending feedback .
Why can't my visualization make requests for external resources?
There is a Content Security Policy that restricts requests for external
resources. This is in place to mitigate the risk of a community visualization
sending data to an external server.
Why can Community Visualizations be disabled by the data source?
Even though a Content Security Policy restricts requests to external
resources, some users prefer to know that their data will never be rendered by a
third-party built community visualization. The data source setting
gives users the option and assurance their data will never be rendered by a
Community Visualization.
I created and trust my own visualization, why can't my code make requests for
external resources?
For now the Content Security Policy is enforced for all
community visualizations. However, there may be options in the future to relax
this for special circumstances.
Can I monetize my visualizations?
Yes. However, in order for your community visualization to work there is
currently a requirement that all resources are public. There are also no
authentication services in place to prevent anyone from using your
visualization. Monetization options are not a priority during developer preview,
but in the future there may be better options available to support this use
case.
Can I make my Community Visualization source code public?
Yes, it's up to you. If you are interested in open sourcing your visualization
see Sharing . There is no requirement for
you to publish your source code.
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-03 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-03 UTC."],[],[]]
