const projectData={
  geoinsights:{
    eyebrow:'PROJECT 01 • POWER BI',
    title:'GeoInsights',
    subtitle:'Regional Sales Analytics & BI Dashboard',
    description:'A multi-page business intelligence dashboard designed to explore revenue, profitability, seasonality, transactions, product and channel performance, and geographic patterns.',
    kpis:[['$1.19bn','Total Revenue'],['61,626','Transactions'],['37.37%','Profit Margin']],
    problem:'Bring multiple dimensions of regional sales performance into one decision-support experience so revenue, profitability, product, channel and geographic patterns can be explored together.',
    insights:['May recorded the highest monthly revenue in the executive overview, while February was the lowest month.','Profit contribution remained comparatively stable across the year, with December among the strongest months.','Product and channel analysis highlights differences between revenue contribution and profit margin.','Geographic analysis adds customer, state and regional context to the overall performance picture.'],
    gallery:[
      ['https://raw.githubusercontent.com/Rahul-kumar9990/GeoInsights-Regional-Sales-Analytics-and-BI-Dashboard/main/All%20Dashboard/GeoInsights_Dashboard_Page_1.pdf#view=FitH','Executive Overview & Trends','pdf'],
      ['https://raw.githubusercontent.com/Rahul-kumar9990/GeoInsights-Regional-Sales-Analytics-and-BI-Dashboard/main/All%20Dashboard/GeoInsights_Dashboard_Page_2.pdf#view=FitH','Product & Channel Performance','pdf'],
      ['https://raw.githubusercontent.com/Rahul-kumar9990/GeoInsights-Regional-Sales-Analytics-and-BI-Dashboard/main/All%20Dashboard/GeoInsights_Dashboard_Page_3.pdf#view=FitH','Geographic & Customer Insights','pdf']
    ],
    tools:'Power BI, DAX, data modeling, KPI reporting and interactive dashboarding.',
    repo:'https://github.com/Rahul-kumar9990/GeoInsights-Regional-Sales-Analytics-and-BI-Dashboard'
  },
  marketlens:{
    eyebrow:'PROJECT 02 • MYSQL • TABLEAU',
    title:'MarketLens',
    subtitle:'Consumer Spending & Engagement Analytics',
    description:'A consumer analytics project examining high-level business performance, spending behavior, customer composition, product engagement and coupon patterns.',
    kpis:[['238K','Total Units Sold'],['$4.67M','Total Product Value'],['48.9%','Coupon Usage Rate']],
    problem:'Understand how consumer spending varies across products, locations, tenure groups, purchase channels and engagement behavior.',
    insights:['The executive dashboard provides a consolidated view of units sold, product value, average value and top product performance.','Consumer spending analysis compares online and offline behavior, tenure groups, gender and regional differences.','Engagement analysis examines discount levels, coupon usage and product value by promotional engagement.'],
    gallery:[
      ['https://raw.githubusercontent.com/Rahul-kumar9990/MarketLens-Consumer-Spending-and-Engagement-Dashboard/main/05_Dashboard%20Part%201%20Executive_Overview.png','Executive Overview','image'],
      ['https://raw.githubusercontent.com/Rahul-kumar9990/MarketLens-Consumer-Spending-and-Engagement-Dashboard/main/06_Dashboard%20Part%202%20%20Consumer_Spending_Insights.png','Consumer Spending Insights','image'],
      ['https://raw.githubusercontent.com/Rahul-kumar9990/MarketLens-Consumer-Spending-and-Engagement-Dashboard/main/07_Dashboard%20Part%203%20Engagement_Product_Insights.png','Engagement & Product Insights','image']
    ],
    tools:'MySQL, Tableau, Excel and dashboard storytelling.',
    repo:'https://github.com/Rahul-kumar9990/MarketLens-Consumer-Spending-and-Engagement-Dashboard'
  },
  retailpulse:{
    eyebrow:'PROJECT 03 • PYTHON • SQL',
    title:'RetailPulse',
    subtitle:'Customer Analytics & Relational SQL Pipeline',
    description:'An end-to-end customer analytics project combining Python and Pandas data wrangling with SQL-based analysis to identify revenue patterns, customer behavior and actionable business insights.',
    kpis:[['5,000+','Records Analyzed'],['20.8%','APV Increase Insight'],['SQL + Python','End-to-End Workflow']],
    problem:'Investigate customer transactions and purchasing behavior, moving from data preparation and exploratory analysis to SQL queries, segmentation and strategic recommendations.',
    insights:['The project includes ranked category analysis to identify the strongest revenue contributors.','Purchase behavior is compared between subscribers and non-subscribers.','Payment-method analysis provides another view of average transaction value and customer behavior.','Seasonal analysis highlights changes in transaction frequency across the year.'],
    gallery:[],
    tools:'Python, Pandas, data wrangling, SQL, CTEs, window functions and business analysis.',
    repo:'https://github.com/Rahul-kumar9990/RetailPulse-Customer-Analytics-Relational-SQL-Pipeline',
    notebook:'https://github.com/Rahul-kumar9990/RetailPulse-Customer-Analytics-Relational-SQL-Pipeline/blob/main/RetailPulse_EDA_Analysis/RetailPulse_EDA_Analysis.ipynb'
  },
  dining:{
    eyebrow:'PROJECT 04 • MICROSOFT EXCEL',
    title:'Dining Demand & Revenue Optimizer',
    subtitle:'Restaurant Analytics & Decision-Support Dashboard',
    description:'An Excel-based restaurant analytics project transforming a full year of pizza-order data into an interactive decision-support dashboard for demand, product and revenue analysis.',
    kpis:[['$817,860.05','Total Revenue'],['21,350','Total Orders'],['49,574','Pizzas Sold']],
    problem:'Understand when demand peaks, which products drive revenue and order volume, how category and size mix affect performance, and which menu items may need attention.',
    insights:['12:00 PM was the busiest single hour with 2,520 orders, while Friday was the busiest weekday with 3,538 orders.','The Thai Chicken Pizza generated the highest revenue at $43,434.25.','The Classic Deluxe Pizza led quantity sold with 2,453 pizzas and had the strongest order presence.','The Brie Carre Pizza was the weakest overall performer.','Large pizzas contributed 45.89% of total revenue; July was the strongest monthly revenue period and October the weakest.'],
    gallery:[
      ['https://raw.githubusercontent.com/Rahul-kumar9990/Dining-Demand-Revenue-Optimizer/main/Performance_Snapshot_Primary.pdf#view=FitH','Demand, Revenue & Category Overview','pdf'],
      ['https://raw.githubusercontent.com/Rahul-kumar9990/Dining-Demand-Revenue-Optimizer/main/Performance_Snapshot_Secondary.pdf#view=FitH','Top & Bottom Product Performance','pdf']
    ],
    tools:'Microsoft Excel, VLOOKUP, PivotTables, PivotCharts, KPI analysis and interactive timeline filtering.',
    repo:'https://github.com/Rahul-kumar9990/Dining-Demand-Revenue-Optimizer',
    live:'https://1drv.ms/x/c/2ae15551ffdb3de7/IQCF5QjVtWTRQanyTRe_DKINAeGcRKfQcDoIL-cqgI9unp0?e=Fex8a0'
  }
};

const modal=document.getElementById('caseModal');
const modalContent=document.getElementById('modalContent');

function renderGalleryItem([src,caption,type]){
  if(type==='pdf') return `<figure class="case-pdf"><iframe loading="lazy" src="${src}" title="${caption}"></iframe><figcaption>${caption}</figcaption></figure>`;
  return `<figure><img loading="lazy" src="${src}" alt="${caption}"><figcaption>${caption}</figcaption></figure>`;
}

function renderCaseStudy(project){
  const p=projectData[project];
  const gallery=p.gallery.length?p.gallery.map(renderGalleryItem).join(''):`<div class="analysis-notebook"><span>PYTHON • PANDAS • SQL</span><h4>Interactive analysis available in the project notebook</h4><p>Explore the complete EDA workflow, data preparation and analysis outputs directly in the project repository.</p></div>`;
  const insights=p.insights.map(item=>`<li>${item}</li>`).join('');
  const kpis=p.kpis.map(([value,label])=>`<div><strong>${value}</strong><span>${label}</span></div>`).join('');
  const liveButton=p.live?`<a class="button button-primary" href="${p.live}" target="_blank" rel="noreferrer">Open Live Dashboard ↗</a>`:'';
  const notebookButton=p.notebook?`<a class="button button-secondary" href="${p.notebook}" target="_blank" rel="noreferrer">Open Analysis Notebook ↗</a>`:'';
  modalContent.innerHTML=`
    <div class="case-header"><p class="eyebrow">${p.eyebrow}</p><h2 id="modalTitle">${p.title}</h2><p>${p.subtitle}</p><p>${p.description}</p></div>
    <div class="case-kpis">${kpis}</div>
    <section class="case-section"><h3>Business Focus</h3><p>${p.problem}</p></section>
    <section class="case-section"><h3>Featured Evidence & Analysis Views</h3><div class="case-gallery">${gallery}</div></section>
    <section class="case-section"><h3>Key Insights</h3><ul>${insights}</ul></section>
    <section class="case-section"><h3>Technical Approach</h3><p>${p.tools}</p></section>
    <div class="case-actions"><a class="button button-secondary" href="${p.repo}" target="_blank" rel="noreferrer">View Project Repository ↗</a>${notebookButton}${liveButton}</div>`;
}

function openModal(project){renderCaseStudy(project);modal.classList.add('is-open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';}
function closeModal(){modal.classList.remove('is-open');modal.setAttribute('aria-hidden','true');document.body.style.overflow='';}
document.querySelectorAll('.open-case').forEach(button=>button.addEventListener('click',()=>openModal(button.dataset.project)));
document.querySelectorAll('[data-close-modal]').forEach(button=>button.addEventListener('click',closeModal));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('is-open'))closeModal();});

const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
menuButton.addEventListener('click',()=>{const isOpen=nav.classList.toggle('is-open');menuButton.setAttribute('aria-expanded',isOpen);});
document.querySelectorAll('.nav a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('is-open');menuButton.setAttribute('aria-expanded','false');}));

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('in-view');}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.getElementById('year').textContent=new Date().getFullYear();