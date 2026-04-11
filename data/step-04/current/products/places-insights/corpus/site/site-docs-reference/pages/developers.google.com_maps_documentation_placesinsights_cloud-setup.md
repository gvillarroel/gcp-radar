---
title: "Set up Places Insights \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/placesinsights/cloud-setup
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/placesinsights/about-data
source_metadata:
  url: https://developers.google.com/maps/documentation/placesinsights/cloud-setup
  title: "Set up Places Insights \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Google Maps Platform
Documentation
Web Services
Places Insights
Send feedback
Set up Places Insights
Stay organized with collections
Save and categorize content based on your preferences.
Places Insights lets you enhance your own data with statistical
insights about points of interest data to make more informed business decisions.
Before you can query Places Insights data, you must first sign
up
to get access to the Places Insights product. Once your account has been
onboarded, you will be able to subscribe to the Places Insights dataset for
your target country.
Prerequisites
To access the Places Insights data, you must:
Sign up
to request access to Places Insights.
Have a Google Cloud account.
If you don't have an account, click the Get Started button that links to
an interactive setup experience in the Cloud console for new
users:
Get Started
Enable the BigQuery API. For instructions on enabling BigQuery and for a
tutorial on using BigQuery, see Query a public dataset with the Google Cloud console .
Enable the Analytics Hub API .
Ensure that your account has the Analytics Hub Subscription Owner
( roles/analyticshub.subscriptionOwner ) role to perform subscriber tasks.
Ensure that your account has the BigQuery User
( roles/bigquery.user ) role to create datasets.
For more information, see View and subscribe to
listings .
Subscribe to the Places Insights dataset
Places Insights data is available for the cities and countries listed in the
table below . Each city and country has its own data
listing that you must subscribe to individually.
To subscribe to a listing:
Select the subscribe link for the city of interest from the table
below .
A dialog opens for that country in the Google Cloud console. For example
for the New York City, United States (US) listing:
Select the Subscribe button in the dialog.
Confirm or edit the Project , Linked dataset name , Primary
region , and Replica regions in the dialog. You can choose to use the
default listing name or you can optionally set the name to use your own
naming convention.
Select Save .
When complete, the table subscription appears in the BigQuery Explorer
panel in the Google Cloud console. In your SQL queries, use the table name
shown below to access the data.
Available listings
The following tables list the supported cities and countries and provide links
to subscribe. You can subscribe to sample
data and full
data for each city
and country.
Once you have subscribed to one or more listings, run the following notebook to
see the data in action within an interactive environment.
Run in Google Colab
View source on GitHub
Note: If you changed the linked dataset name when setting up Places Insights,
use your custom name instead of these default table names.
Sample data
City, Country
Subscribe link
Table names
Buenos Aires, Argentina AR
places_insights___ar___sample.places_sample
Sydney, Australia AU
places_insights___au___sample.places_sample
Bad Gastein, Austria AT
places_insights___at___sample.places_sample
Riffa, Bahrain BH
places_insights___bh___sample.places_sample
Brussels, Belgium BE
places_insights___be___sample.places_sample
Sao Paulo, Brazil BR
places_insights___br___sample.places_sample
Plovdiv, Bulgaria BG
places_insights___bg___sample.places_sample
Toronto, Canada CA
places_insights___ca___sample.places_sample
Santiago, Chile CL
places_insights___cl___sample.places_sample
Medellín, Colombia CO
places_insights___co___sample.places_sample
Brno, Czechia CZ
places_insights___cz___sample.places_sample
Copenhagen, Denmark DK
places_insights___dk___sample.places_sample
Cairo, Egypt EG
places_insights___eg___sample.places_sample
Helsinki, Finland FI
places_insights___fi___sample.places_sample
Paris, France FR
places_insights___fr___sample.places_sample
Berlin, Germany DE
places_insights___de___sample.places_sample
Athens, Greece GR
places_insights___gr___sample.places_sample
Hong Kong, Hong Kong HK
places_insights___hk___sample.places_sample
Debrecen, Hungary HU
places_insights___hu___sample.places_sample
Mumbai, India IN
places_insights___in___sample.places_sample
Jakarta, Indonesia ID
places_insights___id___sample.places_sample
Cork, Ireland IE
places_insights___ie___sample.places_sample
Tel Aviv-Yafo, Israel IL
places_insights___il___sample.places_sample
Rome, Italy IT
places_insights___it___sample.places_sample
Tokyo, Japan JP
places_insights___jp___sample.places_sample
Busan, South Korea KR
places_insights___kr___sample.places_sample
Kuala Lumpur, Malaysia MY
places_insights___my___sample.places_sample
Mexico City, Mexico MX
places_insights___mx___sample.places_sample
Amsterdam, Netherlands NL
places_insights___nl___sample.places_sample
Wellington, New Zealand NZ
places_insights___nz___sample.places_sample
Oslo, Norway NO
places_insights___no___sample.places_sample
Arequipa, Peru PE
places_insights___pe___sample.places_sample
Manila, Philippines PH
places_insights___ph___sample.places_sample
Warsaw, Poland PL
places_insights___pl___sample.places_sample
Lisbon, Portugal PT
places_insights___pt___sample.places_sample
Lusail, Qatar QA
places_insights___qa___sample.places_sample
Bucharest, Romania RO
places_insights___ro___sample.places_sample
Jeddah, Saudi Arabia SA
places_insights___sa___sample.places_sample
Singapore, Singapore SG
places_insights___sg___sample.places_sample
Johannesburg, South Africa ZA
places_insights___za___sample.places_sample
Madrid, Spain ES
places_insights___es___sample.places_sample
Stockholm, Sweden SE
places_insights___se___sample.places_sample
Zurich, Switzerland CH
places_insights___ch___sample.places_sample
Taipei, Taiwan TW
places_insights___tw___sample.places_sample
Chiang Mai, Thailand TH
places_insights___th___sample.places_sample
Ankara, Turkey TR
places_insights___tr___sample.places_sample
Sharjah, United Arab Emirates AE
places_insights___ae___sample.places_sample
London, United Kingdom GB
places_insights___gb___sample.places_sample
New York City, United States US
places_insights___us___sample.places_sample
places_insights___us___sample.brands
Hanoi, Vietnam VN
places_insights___vn___sample.places_sample
Full data
Country
Subscribe link
Table names
Argentina AR
places_insights___ar.places
Australia AU
places_insights___au.places
Austria AT
places_insights___at.places
Bahrain BH
places_insights___bh.places
Belgium BE
places_insights___be.places
Brazil BR
places_insights___br.places
Bulgaria BG
places_insights___bg.places
Canada CA
places_insights___ca.places
Chile CL
places_insights___cl.places
Colombia CO
places_insights___co.places
Czechia CZ
places_insights___cz.places
Denmark DK
places_insights___dk.places
Egypt EG
places_insights___eg.places
Finland FI
places_insights___fi.places
France FR
places_insights___fr.places
Germany DE
places_insights___de.places
Greece GR
places_insights___gr.places
Hong Kong HK
places_insights___hk.places
Hungary HU
places_insights___hu.places
India IN
places_insights___in.places
Indonesia ID
places_insights___id.places
Ireland IE
places_insights___ie.places
Israel IL
places_insights___il.places
Italy IT
places_insights___it.places
Japan JP
places_insights___jp.places
Malaysia MY
places_insights___my.places
Mexico MX
places_insights___mx.places
Netherlands NL
places_insights___nl.places
New Zealand NZ
places_insights___nz.places
Norway NO
places_insights___no.places
Peru PE
places_insights___pe.places
Philippines PH
places_insights___ph.places
Poland PL
places_insights___pl.places
Portugal PT
places_insights___pt.places
Qatar QA
places_insights___qa.places
Romania RO
places_insights___ro.places
Saudi Arabia SA
places_insights___sa.places
Singapore SG
places_insights___sg.places
South Africa ZA
places_insights___za.places
South Korea KR
places_insights___kr.places
Spain ES
places_insights___es.places
Sweden SE
places_insights___se.places
Switzerland CH
places_insights___ch.places
Taiwan TW
places_insights___tw.places
Thailand TH
places_insights___th.places
Turkey TR
places_insights___tr.places
United Arab Emirates AE
places_insights___ae.places
United Kingdom GB
places_insights___gb.places
United States US
places_insights___us.places
places_insights___us.brands
Vietnam VN
places_insights___vn.places
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
