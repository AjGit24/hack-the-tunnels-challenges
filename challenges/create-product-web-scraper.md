---
title: "Create Product Web Scraper"
points: 8
tags: 
- backend
- web-scraper
dependencies:
---

## Description:

Create a web scraper for a site of your choosing (ex: [an amazon product page](https://www.amazon.ca/Torin-ATRJH-3430T-Plastic-Multi-Function-Dividers/dp/B08DVFLT5P?pd_rd_w=qJMsk&content-id=amzn1.sym.455d47f8-77ff-46ae-8198-52ca1f6b4b00&pf_rd_p=455d47f8-77ff-46ae-8198-52ca1f6b4b00&pf_rd_r=S1TBSH9ZJTKWZ1XM5KVN&pd_rd_wg=MgIO4&pd_rd_r=d1749ae3-abaa-4e1d-87df-a0f7f6c01c84&pd_rd_i=B08DVFLT5P&psc=1&ref_=pd_bap_d_grid_rp_0_1_ec_nped_i_), [a product page from the carleton book store](https://www.bkstr.com/carletonstore/product/panda-sst-1c-fsn-black-sm---248135-1), etc) that scrapes and stores the information pertaining to a product within the service's database.

Add a new `scraper` folder within the `service/src/infrastructure` folder that contains any code you write relating to web scraping.

Your scraper should use the `createProduct` function on `service/src/services/Product.ts` to save the product to the database.

## Acceptance Criteria:

Participant has created a web scraper for a site of there choosing that can scrape and add the scraped product data into the database.
