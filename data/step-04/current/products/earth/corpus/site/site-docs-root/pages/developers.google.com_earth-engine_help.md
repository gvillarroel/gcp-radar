---
title: "Get help \_|\_ Google Earth Engine \_|\_ Google for Developers"
url: https://developers.google.com/earth-engine/help
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/earth-engine
source_metadata:
  url: https://developers.google.com/earth-engine/help
  title: "Get help \_|\_ Google Earth Engine \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Earth Engine is introducing noncommercial quota tiers to safeguard shared compute resources and ensure reliable performance for everyone. All noncommercial projects will need to select a quota tier by April 27, 2026 or will use the Community Tier by default. Tier quotas will take effect for all projects (regardless of tier selection date) on April 27, 2026 . Learn more.
Home
Products
Google Earth Engine
Support
Send feedback
Get help
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Before asking for help, search existing resources like the Developer Guide, GIS Stack Exchange, Developer Forum, and Code Editor examples.
When asking for help, provide a meaningful title, enough information about what you are trying to do, simplify your code, remove unnecessary comments, add a script link, and ensure assets are publicly accessible.
Technical questions should be posted on GIS Stack Exchange, while discussion questions belong in the Earth Engine Developer Forum.
Bug reports can be filed for API issues, Code Editor interface problems, or dataset bugs, but do not expect a direct response to these reports.
Additional quota for non-commercial/research use can be requested through an application form focusing on environmental and social impact use cases, while commercial users should contact sales.
Note: If you're a Google Cloud customer with a support contract for Google Earth
Engine, create an issue in the
Cloud support console .
What do you need help with? (click link)
I have a question .
I found a bug .
I need help with registration or access .
I have an issue with payments and billing .
I received an error message .
I have a question about computational tiers .
I want to request a new dataset .
I want to request a new feature .
I have noticed a
change in script behavior .
I want to report a missing catalog asset .
I want to help others .
Tips for getting help
"How can I help others help me?"
Before creating a help request, first search for similar requests that have
already been made from other users. The answer might already be there and
easily findable! This is often the fastest way to get unblocked. Try the
following:
Open the
Earth Engine Developer Guide
and use the search box to find relevant pages.
Search posts within
GIS Stack Exchange .
Search conversations in the
Earth Engine Developers Forum .
Browse the Code Editor example
scripts found under Scripts > Examples .
If you still need help after searching, you may want to compose a help request
to the Earth Engine community. To maximize the chances of having your request
answered and helping to create useful information that benefits the entire
community, here is a checklist for composing a request:
Best practices for composing a request for help:
Create a meaningful title
Make it easy for others to quickly identify if they can potentially help.
("Urgent help needed!" is not a meaningful title.)
Provide enough information
Briefly describe what you are trying to do, and why. Often others may
suggest alternative approaches if they understand what you are trying
to do.
Make it as simple as possible
The Earth Engine community includes many people who willingly spend their
time helping others. Consider that 10s or 100s of people may read your
post, and any time that you spend improving your post will save others
from duplicating the same work.
Remove irrelevant code
Remove any extra code that is not relevant to the question you are asking.
If you are reporting a bug/error, keep simplifying until it is the minimum
needed to trigger the bug.
Remove unnecessary comments
If the comment is not needed to explain the question or bug, remove it.
Add a script link
If your post includes code, include a link to reproduce your code in a
development environment. If using the Code Editor, create a
snapshot script link
using the Get Link button at the top of the Code Editor. If
using Colab, share access to anyone with a link, and save it to Google
Drive or as a GitHub Gist.
Make sure your assets are publicly accessible
If others cannot run your code and reproduce your results, it will be
harder for them to help. Make sure that others have access to any code
share any private assets
that are being used.
Ask a question
What kind of question do you have? (click links to learn more or expand for
examples)
A technical question :
API how-to and why, represented by code, reproducible
How do I remove features with null computed values from my feature
collection?
How do I join a feature collection to an image collection by
location and date?
Why is my feature collection empty?
A discussion question :
matters of opinion, debate, remote sensing, methodology
What is the best way to deal with Landsat 7 SLC-off gaps?
How can I exclude water pixels from my analysis?
Why does ArcGIS analysis give a different result than Earth
Engine?
I'm wondering if I found a bug - are others having the same
issue?
GIS Stack Exchange
Post technical questions to
Geographic Information Systems Stack Exchange
(GIS SE), a community-based question and answer site for geospatial
applications.
See tips for composing a good question
You should NOT post your complete
analysis and ask the developer community to debug your code.
You SHOULD isolate the problem and
present it in one complete sentence and no more than a few lines of
code.
You SHOULD Use the Stack Exchange
tag `google-earth-engine`.
The text in your question is interpreted as Markdown (a styling syntax).
Take advantage of bold, italics, and code styling to make your question
easier to read and quickly skim. Use the buttons at the top of the
question editor or refer to this
Markdown syntax
guide to apply styling. Browse GIS SE's
help page for more
information on asking questions.
Use this example as a guide for how to frame and markup your
question:
Title :
Why are the results of ee.Reducer.fixedHistogram() fractional?
(Earth Engine)
Body :
Markdown
I am calculating a histogram for an area of interest using
`ee.Reducer.fixedHistogram()`. The pixel count per bin is often a fraction,
but not always. I was expecting integer results only, why are the results
fractions of a pixel?
Here is my code; inspect the histogram table to see the results.
```js
// Define an image.
var img = ee.Image('LANDSAT/LC08/C02/T1_TOA/LC08_038029_20180810');
// Define an area of interest.
var aoi = ee.Geometry.Rectangle(-110.5, 44.6, -110.1, 44.8);
// Calculate a histogram for the pixels in the API.
var reflHistDict = img.select('B[1-7]').multiply(1e4).reduceRegion({
reducer: ee.Reducer.fixedHistogram(0, 5000, 250),
geometry: aoi,
scale: 30
});
// A dictionary was returned, get the ee.Array results for SWIR1 band.
var swir1HistArray = ee.Array(reflHistDict.get('B6'));
print(swir1HistArray);
```
[Code Editor
script](https://code.earthengine.google.com/d5c15787d1e468c5668836399fa8652f?as_external)
Rendered
I am calculating a histogram for an area of interest using
ee.Reducer.fixedHistogram() . The pixel count per bin is
often a fraction, but not always. I was expecting integer results
only, why are the results fractions of a pixel?
Here is my code; inspect the histogram table to see the results.
// Define an image.
var img = ee.Image('LANDSAT/LC08/C02/T1_TOA/LC08_038029_20180810');
// Define an area of interest.
var aoi = ee.Geometry.Rectangle(-110.5, 44.6, -110.1, 44.8);
// Calculate a histogram for the pixels in the API.
var reflHistDict = img.select('B[1-7]').multiply(1e4).reduceRegion({
reducer: ee.Reducer.fixedHistogram(0, 5000, 250),
geometry: aoi,
scale: 30
});
// A dictionary was returned, get the ee.Array results for SWIR1 band.
var swir1HistArray = ee.Array(reflHistDict.get('B6'));
print(swir1HistArray);
Code Editor script
Make the code in your question reproducible . If
your script includes imports, share the
assets . Always include your code as a formatted code block in the question
(optionally include a Code Editor script
link ).
Earth Engine Developer Forum
Post discussion questions and general Earth Engine
topics to the Earth Engine Developer
Forum ,
a Google Group. Keep posts focused on Earth Engine. Use other forums for
more general Earth Observation, Remote Sensing, and GIS topics. You can post
about job positions that require Earth Engine skills, but ask respondents
to reply directly to you rather than to the list.
Report a bug
What kind of bug did you find? (click links to learn more or expand for
examples)
An API bug :
script errors or incorrect results
Unexpected or incorrect function result
Unfamiliar error
Internal error messages
Errors not resolved by common
debugging methods
An unchanged, working script from some time ago, now does NOT
work
API documentation is missing critical information
Issues regarding Data Catalog assets
A Code Editor interface
bug : UI display and functionality issues
Scripts not loading
Buttons not working
Strange layout
Missing page elements
Map interaction not working
Data Catalog search not working
A dataset
bug
Missing assets
Projection issues
Unclear dataset descriptions
Don't expect any response to bug reports . If you
need a response or are unsure whether the behavior you are experiencing is a
bug, discuss the issue on the
Developer
Forum .
API
Follow these instructions to file a bug:
Search the
list of existing bugs .
If you find a relevant bug issue, star the issue and optionally add a
comment to describe how the bug affects your workflow.
If a relevant issue does not exist, add a new issue using this
bug report template .
Note: you can report API bugs from the Code Editor. Click the
button, then Create a new issue , then File a bug .
Code Editor
Report a bug related to the Code Editor interface by opening the
Code Editor, clicking the button, then Send Code Editor
feedback . A window will appear allowing you to describe the issue; you are
also given the opportunity to markup a screenshot to highlight the location of
the problem.
Dataset problem
Report a bug here .
If possible, provide a Code Editor link showing the problem.
Registration issues
Visit the Earth Engine registration page
to configure your access.
If you are having registration or access issues for Earth Engine, you may
request help from Earth Engine Registration
Support .
Payments and billing
If you have an issue with your Earth Engine payments or billing, Google provides
billing
support for all
users. This is the right place to raise issues about incorrect or unexpected
charges, clarify payment questions, or request refunds.
For best results, we recommend the following steps:
File a billing support
case as soon as
possible. This maximizes the chances that there are relevant debugging logs and
information available. Provide as much information as you can about the issue.
If your issue is related to ongoing charges (e.g., subscription charges,
storage fees), see the documentation for terminating commercial Earth Engine
access .
Let the Earth Engine team know that you have an open case. Reach out to the
team and include
your Support case number .
Error messages
There are many ways to produce an error in Earth Engine. Follow these steps to
identify the source of the problem and work toward a resolution:
Use the debugging guide as an initial resource to understand
what type of error you are receiving and how you might resolve it.
Do a Google search for your error message;
results are often returned from
GIS Stack Exchange .
Search on the
Developer Forum
for your error message to see if others have had the same issue.
If after consulting all available resources, you are still not clear what is
causing the error, post a question .
Finally, if the error remains unresolved and you suspect that it is a bug,
report it .
Computational tiers
Your computational resources are set by either your
commercial plan or
noncommercial tier .
Commercial use
If you're using Earth Engine for commercial purposes, or want to pay for more
compute resources, learn about commercial plans
or select an Earth Engine commercial plan on the Cloud Console .
Note that using Earth Engine commercially can incur charges to your Cloud
account .
Noncommercial or research use
For
noncommercial or research use of Earth Engine ,
you can request a temporary increase for
asset storage quota, which controls
how much asset data you can store in the EE asset store.
By switching to the partner tier ,
you can get a temporary increase in EECU
quota, which controls how much compute (in Earth Engine Compute Units)
you can consume over time.
Before you apply
In many cases, you can modify your code to run more efficiently and avoid
the need for uplift. Review the Scaling
errors , Debugging
methods and Coding Best
Practices
sections of the Earth Engine documentation for suggestions. You may also benefit
from discussing your approach with others on the Earth Engine Developer
Forum . There are many best
practices for efficiently processing large and complex imagery using Earth
Engine. Experts on the forum may be able to help. Before posting, read
these best practices for composing a request for
help .
Note: Not all requests will be approved. Applications that clearly connect
increased quota with demonstrable on-the-ground impact are prioritized.
We'll get back to you as soon as possible, but there may be times when the
process will take longer or we may ask you for additional information.
Apply for more asset storage or noncommercial partner tier
Yes, show the application form
Application
form
If you have questions about your request for uplift, contact
Earth Engine Uplift Support
with a description of the problem.
Dataset requests
Follow these instructions to request a new dataset or to file a bug for an
existing dataset:
Search the
new
or
existing
dataset requests.
If you find a relevant dataset request, star the issue and optionally add a
comment to describe how the dataset would be useful in your work.
If a relevant data request does not exist, submit a new request for a
new
or
existing
dataset.
Note: links to existing requests and request form can be accessed from the Code
Editor by clicking the button.
Do not expect any response to new dataset requests .
Feature requests
Follow these instructions to request a new API or Code Editor feature:
Search the
list of existing feature requests .
If you find a relevant feature request, star the issue and optionally add a
comment to describe how the feature would be useful in your work.
If a relevant feature request does not exist, submit a new request using
this
template .
Note: links to existing requests and request form can be accessed from the Code
Editor by clicking the button.
Do not expect any response to feature requests .
Change in script behavior or output
Earth Engine API code, architecture, and policies can change, resulting in
different behavior or errors that appear now but did not some time ago for the
same script. Submit an API bug for these types of issues, but first
verify a few things:
Confirm that nothing about your script has changed - check the
script history .
Confirm that nothing about your input collection has changed (e.g., are you
filtering image dates to the present and now there are new images in a
collection?).
Are you relying on imported script modules or
shared assets
that are no longer available or have changed?
Is it the same script but running on a different region of interest or
dataset?
After checking to see that a similar bug has not already been posted, submit
your bug and provide information regarding these points in the bug report.
Missing catalog assets
See this guide to learn how to confirm and report a
missing asset from the Earth Engine Data Catalog.
Help others
There are a number of ways you can help others:
Answer and edit questions on
GIS Stack Exchange .
Answer questions on the
Earth Engine Developer Forum .
Write tutorials .
Present lectures on how to use Earth Engine at your university or place of
work. Here are some resources to help get you started:
Lectures
Workshops
Tutorials
Script library
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-20 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-20 UTC."],[],["Earth Engine users can access support through various channels, including the Cloud Support Console, Developer Guide, GIS Stack Exchange, and the Developer Forum. Users can post technical or discussion questions, report bugs (API, Code Editor, Dataset), request registration help, extra quota, new datasets/features, or report script behavior changes. Before seeking help, search for solutions. When composing requests, provide a concise, meaningful title and relevant information with a script link. Users can also assist others by answering questions or creating tutorials.\n"]]
