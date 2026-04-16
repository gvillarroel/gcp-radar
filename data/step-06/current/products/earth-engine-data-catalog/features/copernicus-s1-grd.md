---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:20.325Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "COPERNICUS/S1_GRD"
feature_slug: "copernicus-s1-grd"
latest_feature_date: "2016-02-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S1_GRD"
  - "https://developers.google.com/earth-engine/guides/sentinel1"
keywords:
  - "copernicus"
  - "s1"
  - "grd"
  - "sentinel"
  - "sar"
  - "ground"
  - "range"
  - "detected"
---

# COPERNICUS/S1_GRD

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

Sentinel-1 SAR ground range detected imagery with log scaling.

## Extended Definition

Sentinel-1 SAR ground range detected imagery with log scaling.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S1_GRD](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S1_GRD)
- [https://developers.google.com/earth-engine/guides/sentinel1](https://developers.google.com/earth-engine/guides/sentinel1)

## Supporting Pages

### Sentinel-1 SAR GRD: C-band Synthetic Aperture Radar Ground Range Detected, log scaling | Earth Engine Data Catalog | Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S1_GRD](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S1_GRD)
- Source ID: `feature-recovery-direct-http`
- Final score: 394
- Re-rank relevance: N/A

Evidence snippets:
- Sentinel-1 SAR GRD: C-band Synthetic Aperture Radar Ground Range Detected, log scaling | Earth Engine Data Catalog | Google for Developers رد شدن و رفتن به محتوای اصلی Earth Engine Data Catalog / English Deutsch Español Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어 ورود به برنامه صفحه اصلی دسته بندی ها همه مجموعه داده ها همه برچسب‌ها لندست MODIS نگهبان ناشر انجمن API Docs وضعیت مجموعه داده‌ها تغییرات Earth Engine Data Catalog صفحه اصلی دسته بندی ها همه مجموعه داده ها همه برچسب‌ها لندست MODIS نگهبان ناشر انجمن API Docs وضعیت مجموعه داده‌ها تغییرات این صفحه به‌وسیله ‏Cloud Translation API‏ ترجمه شده است. صفحه اصلی Earth Engine Data Catalog همه مجموعه داده ها ارسال بازخورد Sentinel-1 SAR GRD: C-band Synthetic Aperture Radar Ground Range Detected, log scaling با مجموعه‌ها، منظم بمانید ذخیره و طبقه‌بندی محتوا براساس اولویت‌های شما. در دسترس بودن مجموعه داده‌ها ‎۲۰۱۴-۱۰-۰۳T۰۰:۰۰:۰۰Z–۲۰۲۶-۰۴-۱۴T۰۷:۲۹:۴۸Z‎ تولیدکننده مجموعه داده اتحادیه اروپا/آژانس فضایی اروپا/کوپرنیکوس قطعه کد موتور زمین ee.ImageCollection("COPERNICUS/S1_GRD") open_in_new فاصله زمانی بازدید مجدد ۶ روز برچسب‌ها پراکندگی برگشتی کوپرنیک، آژانس فضایی اروپا ، رادار قطبش، تصاویر ماهواره‌ای SAR ، سنتینل توضیحات ماموریت Sentinel-1 داده‌هایی را از یک ابزار رادار دهانه مصنوعی (SAR) باند C با قطبش دوگانه در فرکانس ۵.۴۰۵ گیگاهرتز (باند C) ارائه می‌دهد. این مجموعه شامل صحنه‌های S1 Ground Range Detected (GRD) است که با استفاده از جعبه ابزار Sentinel-1 برای تولید یک محصول کالیبره شده و تصحیح شده با ارتو پردازش می‌شوند. این مجموعه روزانه به‌روزرسانی می‌شود. داده‌های جدید ظرف دو روز پس از در دسترس قرار گرفتن، دریافت می‌شوند. این مجموعه شامل تمام صحنه‌های GRD است. هر صحنه یکی از ۳ وضوح (۱۰، ۲۵ یا ۴۰ متر)، ۴ ترکیب باند (مطابق با قطبش صحنه) و ۳ حالت دستگاه را دارد. استفاده از این مجموعه در یک زمینه موزاییکی احتمالاً نیاز به فیلتر کردن به مجموعه‌ای همگن از باندها و پارامترها دارد. برای جزئیات استفاده از مجموعه و پیش‌پردازش به این مقاله مراجعه کنید. هر صحنه بسته به تنظیمات قطبش دستگاه، شامل ۱ یا ۲ باند از ۴ باند قطبش ممکن است. ترکیبات ممکن عبارتند از VV تک باند، HH تک باند، VV+VH دو باند و HH+HV دو باند: VV: کوپلاریزاسیون تکی، ارسال عمودی/دریافت عمودی HH: کوپلاریزاسیون تکی، ارسال افقی/دریافت افقی VV + VH: قطبش متقاطع دو بانده، ارسال عمودی/دریافت افقی HH + HV: قطبش متقاطع دو بانده، ارسال افقی/دریافت عمودی هر صحنه همچنین شامل یک نوار «زاویه» اضافی است که شامل زاویه تقریبی تابش از بیضوی بر حسب درجه در هر نقطه است. این نوار با درونیابی ویژگی «زاویه تابش» از فیلد شبکه‌ای «geolocationGridPoint» که با هر تصویر ارائه می‌شود، ایجاد می‌شود. هر صحنه با استفاده از مراحل زیر با جعبه ابزار Sentinel-1 پیش‌پردازش شد: حذف نویز حرارتی کالیبراسیون رادیومتری تصحیح عوارض زمین با استفاده از SRTM 30 یا ASTER DEM برای مناطقی با عرض جغرافیایی بزرگتر از 60 درجه، که SRTM در دسترس نیست. مقادیر نهایی تصحیح شده عوارض زمین از طریق مقیاس لگاریتمی (10*log10(x)) به دسی‌بل تبدیل می‌شوند. برای اطلاعات بیشتر در مورد این مراحل پیش‌پردازش، لطفاً به مقاله پیش‌پردازش Sentinel-1 مراجعه کنید. برای راهنمایی بیشتر در مورد کار با تصاویر Sentinel-1، به آموزش Guido Lemoine در مورد اصول اولیه SAR و آموزش Mort Canty در مورد تشخیص تغییرات SAR مراجعه کنید. این مجموعه به صورت آنی محاسبه می‌شود. اگر می‌خواهید از مجموعه اصلی با مقادیر خام توان (که سریع‌تر به‌روزرسانی می‌شوند) استفاده کنید، به COPERNICUS/S1_GRD_FLOAT مراجعه کنید. باندها باندها اندازه پیکسل: متغیر نام واحدها حداقل مکس اندازه پیکسل توضیحات HH دسی‌بل -50* ۱* ۱۰ متر کوپلاریزاسیون تکی، ارسال افقی/دریافت افقی HV دسی‌بل -50* ۱* ۱۰ متر قطبش متقاطع دو بانده، ارسال افقی/دریافت عمودی VV دسی‌بل -50* ۱* ۱۰ متر کوپلاریزاسیون تکی، ارسال عمودی/دریافت عمودی VH دسی‌بل -50* ۱* ۱۰ متر قطبش متقاطع دو بانده، ارسال عمودی/دریافت افقی angle درجه 0* ۹۰* ۲۰۰۰۰ متر زاویه تابش تقریبی از بیضی * حداقل یا حداکثر مقدار تخمینی ویژگی‌های تصویر ویژگی‌های تصویر نام نوع توضیحات کشور_مرکز_پس_پردازش_GRD رشته نام کشوری که تأسیسات در آن واقع شده است. این عنصر در IPF قابل تنظیم است. نام مرکز پس‌پردازش GRD رشته نام مرکزی که مرحله پردازش در آن انجام شده است. این عنصر در IPF قابل تنظیم است. سازماندهی مرکز پس‌پردازش GRD رشته نام سازمان مسئول تأسیسات. این عنصر در IPF قابل تنظیم است. سایت_مرکز_پس_پردازش_GRD رشته موقعیت جغرافیایی تأسیسات. این عنصر در چارچوب IPF قابل تنظیم است. نام نرم‌افزار پس‌پردازش GRD رشته نام نرم‌افزار. نسخه نرم‌افزار پس‌پردازش GRD رشته شناسایی نسخه نرم‌افزار شروع پردازش پس از GRD دو برابر زمان شروع پردازش. توقف پس‌پردازش GRD دو برابر زمان توقف پردازش. کشور_مرکز_پردازش_SLC رشته نام کشوری که تأسیسات در آن واقع شده است. این عنصر در IPF قابل تنظیم است. نام مرکز پردازش SLC رشته نام مرکزی که مرحله پردازش در آن انجام شده است. این عنصر در IPF قابل تنظیم است. سازمان_تجهیزات_پردازش_SLC رشته نام سازمان مسئول تأسیسات. این عنصر در IPF قابل تنظیم است. سایت_مرکز_پردازش_SLC رشته موقعیت جغرافیایی تأسیسات. این عنصر در چارچوب IPF قابل تنظیم است. نام نرم‌افزار پردازش SLC رشته نام نرم‌افزار. نسخه نرم‌افزار پردازش SLC رشته شناسایی نسخه نرم‌افزار شروع پردازش SLC دو برابر زمان شروع پردازش. توقف پردازش SLC دو برابر زمان توقف پردازش. نسخه اپراتور کالیبراسیون S1TBX رشته نسخه ابزار کالیبراسیون جعبه ابزار Sentinel-1. نسخه پردازش S1TBX_SAR رشته نسخه ابزار پردازش SAR جعبه ابزار Sentinel-1. چارچوب پردازش گراف SNAP_نسخه GPF رشته نسخه پلتفرم برنامه Sentinel (SNAP). startTimeANX دو برابر زمان شروع حسگری داده‌های ورودی نسبت به عبور از گره صعودی. این شمارش زمان سپری شده از عبور از گره صعودی مدار (میلی‌ثانیه) است. stopTimeANX دو برابر زمان توقف حسگری داده‌های ورودی نسبت به عبور از گره صعودی. این شمارش زمان سپری شده از عبور از گره صعودی مدار (میلی‌ثانیه) است. شناسه nssdc رشته این ماموریت را به طور منحصر به فرد و مطابق با استانداردهای تعریف شده توسط مرکز جهانی داده‌های اطلاعات ماهواره‌ای (WDC-SI) شناسایی می‌کند، که اینجا موجود است. نام خانوادگی رشته نام کامل ماموریت. مثلاً "SENTINEL-1" شماره_پلتفرم رشته شناسه الفبایی-عددی پلتفرم در چارچوب ماموریت. عنوان پلتفرم دو برابر جهت سکو نسبت به شمال، درجه ساز رشته اطلاعات مربوط به ابزار روی پلتفرمی که داده‌ها را از طریق آن دریافت کرده است. حالت ابزار رشته IW (تراکم تداخلی گسترده)، SM (نقشه نواری) یا EW (تراکم بسیار گسترده). جزئیات محصول را ببینید. ابزار Swath رشته فهرست نوارهای موجود در یک محصول. اکثر محصولات فقط شامل یک نوار هستند، به جز محصولات TOPS SLC که شامل ۳ یا ۵ نوار هستند. orbitNumber_start دو برابر عدد مدار مطلق قدیمی‌ترین خط در داده‌های تصویر. orbitNumber_stop دو برابر عدد مدار مطلق جدیدترین خط در داده‌های تصویر. شروع نسبی OrbitNumber دو برابر شماره مدار نسبی قدیمی‌ترین خط در داده‌های تصویر. ‎relativeOrbitNumber_stop‎‏ (ایستگاه نسبی مدار) دو برابر شماره مدار نسبی جدیدترین خط در داده‌های تصویر. شماره چرخه دو برابر شماره توالی مطلق چرخه ماموریتی که قدیمی‌ترین داده‌های تصویر به آن مربوط می‌شود. شناسه فاز دو برابر شناسه مرحله ماموریتی که قدیمی‌ترین داده‌های تصویر به آن مربوط می‌شود. orbitProperties_pass رشته جهت مدار («صعودی» یا «نزولی») برای قدیمی‌ترین داده‌های تصویر در محصول (شروع محصول). orbitProperties_ascendingNodeTime دو برابر زمان UTC گره صعودی مدار. این عنصر برای همه محصولات به جز محصولات ASAR L2 OCN که از ورودی ASAR L1 تولید می‌شوند، وجود دارد. وضوح تصویر رشته H برای زیاد یا M برای متوسط. رزولوشن_متر دو برابر وضوح تصویر بر حسب متر. شناسه پیکربندی ابزار دو برابر شناسه پیکربندی دستگاه (شناسه پایگاه داده رادار) برای این داده‌ها. شناسه ماموریتداده‌ها را بردار دو برابر شناسه منحصر به فرد داده‌های جمع‌آوری‌شده در طول ماموریت. فرستنده/گیرندهقطبش لیست رشته‌ای قطبش ارسال/دریافت برای داده‌ها. برای هر ترکیب Tx/Rx یک عنصر وجود دارد: ['VV']، ['HH']، ['VV'، 'VH']، یا ['HH'، 'HV']. کلاس محصول رشته کلاس محصول خروجی "A" برای Annotation یا "S" برای Standard است. توضیحات کلاس محصول رشته شرح متنی کلاس محصول خروجی. ترکیب محصول رشته نوع ترکیب این محصول: «تکی»، «برشی» یا «مونتاژ شده». نوع محصول رشته نوع محصول (سطح اصلاح) این محصول. محصولبه‌موقعیتدسته‌بندی رشته زمان‌بندی مورد نیاز برای پردازش را شرح می‌دهد. یکی از موارد زیر: NRT-10m، NRT-1h، NRT-3h، Fast-24h، Off-line یا Reprocessing پرچم محصول برش رشته اگر این یک برش از یک محصول بزرگتر باشد، درست و اگر یک محصول کامل باشد، نادرست است. زمان شروع قطعه دو برابر تشخیص زمان شروع بخشی که این برش به آن تعلق دارد. این فیلد فقط در صورتی وجود دارد که sliceProductFlag = true باشد. شماره برش دو برابر شماره مطلق برش این برش از ۱ شروع می‌شود. این فیلد فقط در صورتی وجود دارد که sliceProductFlag = true باشد. برش‌های کامل دو برابر تعداد کل برش‌ها در کل داده‌ها. این فیلد فقط در صورتی وجود دارد که sliceProductFlag = true باشد. شرایط استفاده شرایط استفاده استفاده از داده‌های سنتینل تابع شرایط و ضوابط داده‌های سنتینل کوپرنیک است. ) با موتور زمین کاوش کنید مهم: Earth Engine بستری برای تجزیه و تحلیل علمی در مقیاس پتابایت و تجسم مجموعه داده‌های مکانی است، هم برای منافع عمومی و هم برای کاربران تجاری و دولتی. استفاده از Earth Engine برای تحقیقات، آموزش و کاربردهای غیرانتفاعی رایگان است. برای شروع، لطفاً برای دسترسی به Earth Engine ثبت نام کنید. ویرایشگر کد (جاوااسکریپت) var imgVV = ee .
- COPERNICUS/S1_GRD، پراکندگی بازگشتی، کوپرنیک، ESA، EU، قطبش، رادار، sar، تصاویر ماهواره‌ای، سنتینل ‎۲۰۱۴-۱۰-۰۳T۰۰:۰۰:۰۰Z/۲۰۲۶-۰۴-۱۴T۰۷:۲۹:۴۸Z‎ ۹۰- ۱۸۰ ۹۰ ۱۸۰ موتور گوگل ارث https://developers.google.com/earth-engine/datasets می‌خواهید موارد بیشتری را با ما درمیان بگذارید؟ [[["درک آسان","easyToUnderstand","thumb-up"],["مشکلم را برطرف کرد","solvedMyProblem","thumb-up"],["غیره","otherUp","thumb-up"]],[["اطلاعاتی که نیاز دارم وجود ندارد","missingTheInformationINeed","thumb-down"],["بیش‌ازحد پیچیده/ مراحل بسیار زیاد","tooComplicatedTooManySteps","thumb-down"],["قدیمی","outOfDate","thumb-down"],["مشکل ترجمه","translationIssue","thumb-down"],["مشکل کد / نمونه‌ها","samplesCodeIssue","thumb-down"],["غیره","otherDown","thumb-down"]],[],[],[]] GitHub Earth Engine on GitHub Medium Follow our blog on Medium GIS Stack Exchange Ask questions using the google-earth-engine tag Twitter Follow @googleearth on Twitter Videos Earth Engine on YouTube متصل کردن وبلاگ Bluesky Instagram LinkedIn ‫X (توییتر) YouTube برنامه‌ها Google Developer Program Google Developer Groups Google Developer Experts Accelerators Google Cloud & NVIDIA کنسول‌های برنامه‌نویس Google API Console Google Cloud Platform Console کنسول Google Play Firebase Console Actions on Google Console Cast SDK Developer Console Chrome Web Store Dashboard Google Home Developer Console Android Chrome Firebase Google Cloud Platform Google AI همه محصولات شرایط حریم خصوصی Manage cookies English Deutsch Español Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어
- ImageCollection ( 'COPERNICUS/S1_GRD' ) . filter ( ee .
- ImageCollection ( 'COPERNICUS/S1_GRD' ) . filter ( ee .

### Sentinel-1 Algorithms \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/sentinel1](https://developers.google.com/earth-engine/guides/sentinel1)
- Source ID: `site-docs-reference`
- Final score: 76
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Map () m . add layer ( vv iw asc desc mean , { 'min' : - 12 , 'max' : - 4 }, 'vv iw asc desc mean' ) m . add layer ( vh iw asc desc mean , { 'min' : - 18 , 'max' : - 10 }, 'vh iw asc desc mean' ) m . add layer ( vh iw asc mean , { 'min' : - 18 , 'max' : - 10 }, 'vh iw asc mean' ) m . add layer ( vh iw desc mean , { 'min' : - 18 , 'max' : - 10 }, 'vh iw desc mean' ) m . set center ( - 73.8719 , 4.512 , 9 ) # Bogota, Colombia m Sentinel-1 Preprocessing Imagery in the Earth Engine 'COPERNICUS/S1 GRD' Sentinel-1 ImageCollection is consists of Level-1 Ground Range Detected (GRD) scenes processed to backscatter coefficient (σ°) in decibels (dB).
- ImageCollection ( 'COPERNICUS/S1 GRD' ) . filterDate ( '2020-06-01' , '2020-10-01' ); // Filter the Sentinel-1 collection by metadata properties. var vvVhIw = sentinel1 // Filter to get images with VV and VH dual polarization. . filter ( ee .
- ImageCollection ( 'COPERNICUS/S1 GRD' ) . filterDate ( '2020-06-01' , '2020-10-01' ) Filter the Sentinel-1 collection by metadata properties. vv vh iw = ( sentinel 1 . filter ( Filter to get images with VV and VH dual polarization. ee .
- Terrain correction (orthorectification) Converts data from ground range geometry, which does not take terrain into account, to σ° using the SRTM 30 meter DEM or the ASTER DEM for high latitudes (greater than 60° or less than -60°).

### "Datasets tagged satellite-imagery in Earth Engine \_|\_ Earth Engine Data\

- URL: [https://developers.google.com/earth-engine/datasets/tags/satellite-imagery](https://developers.google.com/earth-engine/datasets/tags/satellite-imagery)
- Source ID: `site-docs-root-3`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- Each 10-meter pixel in this dataset is a 64-dimensional representation, or "embedding vector," that encodes temporal trajectories of surface conditions at and around that pixel as measured by various Earth observation … annual global google landsat-derived satellite-imagery sentinel1-derived Sentinel-1 SAR GRD: C-band Synthetic Aperture Radar Ground Range Detected, log scaling The Sentinel-1 mission provides data from a dual-polarization C-band Synthetic Aperture Radar (SAR) instrument at 5.405GHz (C band).
- This collection includes the S1 Ground Range Detected (GRD) scenes, processed using the Sentinel-1 Toolbox to generate a calibrated, ortho-corrected product.
- Sentinel-2 is a wide-swath, high-resolution, multi-spectral imaging mission supporting Copernicus … copernicus esa eu msi radiance satellite-imagery Harmonized Sentinel-2 MSI: MultiSpectral Instrument, Level-2A (SR) After 2022-01-25, Sentinel-2 scenes with PROCESSING BASELINE '04.00' or above have their DN (value) range shifted by 1000.
- The Operational Land Imager (OLI) is housed aboard the joint NASA/USGS Landsat 8 and Landsat 9 satellites, while the Multi-Spectral … landsat nasa satellite-imagery sentinel usgs HLSS30: HLS Sentinel-2 Multi-spectral Instrument Surface Reflectance Daily Global 30m The Harmonized Landsat Sentinel-2 (HLS) project provides consistent surface reflectance data from the Operational Land Imager (OLI) aboard the joint NASA/USGS Landsat 8 satellite and the Multi-Spectral Instrument (MSI) aboard Europe's Copernicus Sentinel-2A satellites.

