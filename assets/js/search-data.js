// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-contributions",
          title: "Contributions",
          description: "A growing collection of intellectual contributions.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/plotly/";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/photo-gallery/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/tabs/";
          
        },
      },{id: "post-a-post-with-typograms",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/typograms/";
          
        },
      },{id: "post-a-post-that-can-be-cited",
        
          title: "a post that can be cited",
        
        description: "this is what a post that can be cited looks like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post-citation/";
          
        },
      },{id: "post-a-post-with-pseudo-code",
        
          title: "a post with pseudo code",
        
        description: "this is what included pseudo code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/pseudocode/";
          
        },
      },{id: "post-a-post-with-code-diff",
        
          title: "a post with code diff",
        
        description: "this is how you can display code diffs",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/code-diff/";
          
        },
      },{id: "post-a-post-with-advanced-image-components",
        
          title: "a post with advanced image components",
        
        description: "this is what advanced image components could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/advanced-images/";
          
        },
      },{id: "post-a-post-with-vega-lite",
        
          title: "a post with vega lite",
        
        description: "this is what included vega lite code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/vega-lite/";
          
        },
      },{id: "post-a-post-with-geojson",
        
          title: "a post with geojson",
        
        description: "this is what included geojson code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/geojson-map/";
          
        },
      },{id: "post-a-post-with-echarts",
        
          title: "a post with echarts",
        
        description: "this is what included echarts code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/echarts/";
          
        },
      },{id: "post-a-post-with-chart-js",
        
          title: "a post with chart.js",
        
        description: "this is what included chart.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/chartjs/";
          
        },
      },{id: "post-a-post-with-tikzjax",
        
          title: "a post with TikZJax",
        
        description: "this is what included TikZ code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tikzjax/";
          
        },
      },{id: "post-a-post-with-bibliography",
        
          title: "a post with bibliography",
        
        description: "an example of a blog post with bibliography",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/post-bibliography/";
          
        },
      },{id: "post-a-post-with-jupyter-notebook",
        
          title: "a post with jupyter notebook",
        
        description: "an example of a blog post with jupyter notebook",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/jupyter-notebook/";
          
        },
      },{id: "post-a-post-with-custom-blockquotes",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/custom-blockquotes/";
          
        },
      },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
        
          title: "a post with table of contents on a sidebar",
        
        description: "an example of a blog post with table of contents on a sidebar",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/sidebar-table-of-contents/";
          
        },
      },{id: "post-a-post-with-audios",
        
          title: "a post with audios",
        
        description: "this is what included audios could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/audios/";
          
        },
      },{id: "post-a-post-with-videos",
        
          title: "a post with videos",
        
        description: "this is what included videos could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/videos/";
          
        },
      },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
        
          title: "displaying beautiful tables with Bootstrap Tables",
        
        description: "an example of how to use Bootstrap Tables",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tables/";
          
        },
      },{id: "post-a-post-with-table-of-contents",
        
          title: "a post with table of contents",
        
        description: "an example of a blog post with table of contents",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/table-of-contents/";
          
        },
      },{id: "post-a-post-with-giscus-comments",
        
          title: "a post with giscus comments",
        
        description: "an example of a blog post with giscus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/giscus-comments/";
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "post-a-post-with-redirect",
        
          title: "a post with redirect",
        
        description: "you can also redirect to assets like pdf",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/assets/pdf/example_pdf.pdf";
          
        },
      },{id: "post-a-post-with-diagrams",
        
          title: "a post with diagrams",
        
        description: "an example of a blog post with diagrams",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/diagrams/";
          
        },
      },{id: "post-a-distill-style-blog-post",
        
          title: "a distill-style blog post",
        
        description: "an example of a distill-style blog post and main elements",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/distill/";
          
        },
      },{id: "post-a-post-with-twitter",
        
          title: "a post with twitter",
        
        description: "an example of a blog post with twitter",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/twitter/";
          
        },
      },{id: "post-a-post-with-disqus-comments",
        
          title: "a post with disqus comments",
        
        description: "an example of a blog post with disqus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/disqus-comments/";
          
        },
      },{id: "post-a-post-with-math",
        
          title: "a post with math",
        
        description: "an example of a blog post with some math",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/math/";
          
        },
      },{id: "post-a-post-with-code",
        
          title: "a post with code",
        
        description: "an example of a blog post with some code",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/code/";
          
        },
      },{id: "post-a-post-with-images",
        
          title: "a post with images",
        
        description: "this is what included images could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/images/";
          
        },
      },{id: "post-a-post-with-formatting-and-links",
        
          title: "a post with formatting and links",
        
        description: "march &amp; april, looking forward to summer",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/formatting-and-links/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "projects-زلزلہ-اسباب-اقسام-اسکیل",
          title: 'زلزلہ ۔۔۔ اسباب،اقسام،اسکیل',
          description: "An educational urdu article about earthquakes.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/article_eq/";
            },},{id: "projects-زمینی-مقناطیسیت",
          title: 'زمینی مقناطیسیت',
          description: "An urdu article about geomagnetism.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/article_geomag/";
            },},{id: "projects-جاپان-زلزلوں-کی-سرزمین",
          title: 'جاپان۔۔۔زلزلوں کی سرزمین',
          description: "An urdu article about Japan and its earthquakes.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/article_japaneq/";
            },},{id: "projects-جاپان-کا-کثیرجہتی-زلزلہ-اور-سونامی-2011-ء",
          title: 'جاپان کا کثیرجہتی زلزلہ اور سونامی 2011 ء',
          description: "An urdu article about Japan&#39;s 2011 earthquake and tsunami.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/article_japantsunami/";
            },},{id: "projects-زلزلہء-کشمیروسرحد",
          title: 'زلزلہء کشمیروسرحد',
          description: "An urdu article about Kashmir earthquake.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/article_kashmirosarhad/";
            },},{id: "projects-براعظموں-کا-کھسکاؤ",
          title: 'براعظموں کا کھسکاؤ',
          description: "An urdu article about continental drift.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/article_khiskao/";
            },},{id: "projects-نیفلین-سائنائیٹ-ایک-حیرت-انگیز-صنعتی-چٹان",
          title: 'نیفلین سائنائیٹ ۔۔۔ ایک حیرت انگیز صنعتی چٹان',
          description: "An urdu article about Nepheline Syenite.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/article_nepheline/";
            },},{id: "projects-سونامی-کا-خطرہ-پاکستان-کی-دہلیز-پر",
          title: 'سونامی کا خطرہ ۔۔۔پاکستان کی دہلیز پر',
          description: "An urdu article about tsunami threat to Pakistan.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/article_paktsunami/";
            },},{id: "projects-پٹرولیم-جدید-زمانے-کی-طرف-پیش-رفت",
          title: 'پٹرولیم۔۔۔جدید زمانے کی طرف پیش رفت',
          description: "An urdu article about petroleum in modern era.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/article_petroleumjadeed/";
            },},{id: "projects-پٹرولیم-تاریخی-تناظرمیں",
          title: 'پٹرولیم۔۔۔تاریخی تناظرمیں',
          description: "An urdu article about the historic perspective of petroleum.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/article_petroleumtareekh/";
            },},{id: "projects-زمین-کے-رواں-دواں-مقناطیسی-قطبین",
          title: 'زمین کے رواں دواں مقناطیسی قطبین',
          description: "An urdu article about polar wandering.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/article_polar/";
            },},{id: "projects-پھیلتے-ہوئے-سمندری-فرش",
          title: 'پھیلتے ہوئے سمندری فرش',
          description: "An urdu article about see floor spreading.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/article_sumandrifarsh/";
            },},{id: "projects-تعلیمی-اداروں-کی-نجکاری-قطعا-نہیں",
          title: 'تعلیمی اداروں کی نجکاری ۔۔۔قطعا نہیں',
          description: "An urdu article about the impacts of privatization of educational institutes in Pakistan.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/article_urdu_taleemi1/";
            },},{id: "projects-موجودہ-نظام-تعلیم-کرنے-والے-کام",
          title: 'موجودہ نظام تعلیم ۔۔۔کرنے والے کام',
          description: "An urdu article suggesting reforms in current educational system of Pakistan.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/article_urdu_taleemi2/";
            },},{id: "projects-اساتذہ-کا-مقام-اور-ذمہ-داریاں",
          title: 'اساتذہ کا مقام اور ذمہ داریاں',
          description: "An urdu article about the responsibilities of a teacher.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/article_urdu_taleemi3/";
            },},{id: "projects-زمین-کی-اندرونی-ساخت",
          title: 'زمین کی اندرونی ساخت',
          description: "An urdu article about Earth&#39;s inner structure.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/article_zaminkisaakht/";
            },},{id: "projects-زلزلہ-وادئ-زیارت-2008ء",
          title: 'زلزلہ وادئ زیارت 2008ء',
          description: "An urdu article about Ziyarat&#39;s 2008 earthquake.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/article_ziarateq/";
            },},{id: "projects-جیوٹیکٹانکس",
          title: 'جیوٹیکٹانکس',
          description: "A book on geotectonics in Urdu language.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/book_geotectonics/";
            },},{id: "projects-قیمتی-دھاتیں-اور-ان-کی-کچدھاتیں",
          title: 'قیمتی دھاتیں اور ان کی کچدھاتیں',
          description: "A book on precious metals and theit ores in Urdu language.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/book_qeemti/";
            },},{id: "projects-قرآن-اور-جیالوجی",
          title: 'قرآن اور جیالوجی',
          description: "A book titled Quran and Geology in Urdu language.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/book_qurangeo/";
            },},{id: "projects-سفالیات",
          title: 'سفالیات',
          description: "A book on ceramics in Urdu language.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/book_safalyat/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
