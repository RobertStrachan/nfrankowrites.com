module.exports = {
    blogPostDir: "posts", // The name of directory that contains your posts.
    lessonsDir: "lessons", // The name of the directory that contains lessons or docs.
    siteTitle: "N. Franko | Romantic Word Slinger", // Site title.
    siteTitleAlt: "N. Franko | Romantic stories. Happily Ever After Is Just A Page Turn Away", // Alternative site title for SEO.
    siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
    siteUrl: "https://nfrankowrites.com", // Domain of your website without pathPrefix.
    pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
    siteDescription: "N. Franko writes romantic comedies and lives in Canada.", // Website description used for RSS feeds/meta description tag.
    siteRss: "/rss.xml", // Path to the RSS file.
    siteFBAppID: "1825356251115265", // FB Application ID for using app insights
    googleAnalyticsID: "UA-82450300-1 ", // GA tracking ID.
    disqusShortname: "", // Disqus shortname.
    postDefaultCategoryID: "Romance", // Default category for posts.
    userName: "N. Franko", // Username to display in the author segment.
    userTwitter: "nfrankowrites", // Optionally renders "Follow Me" in the UserInfo segment.
    userLocation: "Canada", // User location to display in the author segment.
    userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
    userDescription: "All about me!", // User description to display in the author segment.
    // Links to social profiles/projects you want to display in the author segment/navigation bar.
    userLinks: [
      {
        label: "Facebook",
        url: "https://github.com/ericwindmill",
        iconClassName: "fa fa-github"
      },
      {
        label: "Twitter",
        url: "https://twitter.com/ericwindmill",
        iconClassName: "fa fa-twitter"
      },
      {
        label: "GoodReads",
        url: "https://www.messenger.com/t/eric.windmill",
        iconClassName: "fa fa-message"
      },
      {
        label: "Pinterest",
        url: "mailto:eric@ericwindmill.com",
        iconClassName: "fa fa-envelope"
      },
      {
        label: "Instagram",
        url: "https://instagram.com/ericwindmill",
        iconClassName: "fa fa-envelope"
      }
    ],
    retailLinks: [
        {
          book: "Technically Scripted",
          stores: [
              {
                store: "Amazon",
                url: "https://www.amazon.ca/gp/product/B074YZTBZR?tag="
              },
              {
                store: "iBooks",
                url: "https://itunes.apple.com/ca/book/technically-scripted/id1397071995?mt=11&ign-mpt=uo%3D4"
               

              },
              {
                 store: "Nook",
                 url: "https://www.barnesandnoble.com/w/technically-scripted-n-franko/1127017082?ean=2940155588801&st=AFF&2sid=Draft2Digital_7968444_NA&sourceId=AFFDraft2Digital"
                 
              },
              {
                store: "Kobo",
                url: "https://www.kobo.com/ca/en/ebook/technically-scripted-2"
              },
              {
                store: "Google Play Books",
                url: "https://play.google.com/store/books/details?id=OH1fDwAAQBAJ"
              }
          ]
        },
        {
          book: "Technically Speaking",
          stores: [
              {
                store: "Amazon",
                url: "https://www.amazon.ca/gp/product/B07B9VHSV3?tag="
              },
              {
                store: "iBooks",
                url: "https://itunes.apple.com/ca/book/technically-speaking/id1387913699?mt=11&ign-mpt=uo%3D4"              
              },
              {
                 store: "Nook",
                 url: "https://www.barnesandnoble.com/w/technically-speaking-n-franko/1128760949?ean=2940155645986&st=AFF&2sid=Draft2Digital_7968444_NA&sourceId=AFFDraft2Digital"
                 
              },
              {
                store: "Kobo",
                url: "https://www.kobo.com/ca/en/ebook/technically-speaking"
              },
              {
                store: "Google Play Books",
                url: "https://play.google.com/store/books/details?id=iohcDwAAQBAJ"
              }
          ]
        },
        {
          book: "Technically Married",
          stores: [
              {
                store: "Amazon",
                url: "https://www.amazon.ca/gp/product/B07D6XDD6N?tag="
              },
              {
                store: "iBooks",
                url: "https://itunes.apple.com/ca/book/technically-married/id1387938821?mt=11&ign-mpt=uo%3D4"
               

              },
              {
                 store: "Nook",
                 url: "https://www.barnesandnoble.com/w/technically-married-n-franko/1128762363?ean=2940155569565&st=AFF&2sid=Draft2Digital_7968444_NA&sourceId=AFFDraft2Digital"
                 
              },
              {
                store: "Kobo",
                url: "https://www.kobo.com/ca/en/ebook/technically-married"
              },
              {
                store: "Google Play Books",
                url: "https://play.google.com/store/books/details?id=3IhcDwAAQBAJ"
              }
          ]
        },
        {
          book: "The Runaway",
          stores: [
              {
                store: "Amazon",
                url: "https://www.amazon.ca/gp/product/B077SC86CX?tag="
              },
              {
                store: "iBooks",
                url: "https://itunes.apple.com/ca/book/the-runaway/id1365337171?mt=11&ign-mpt=uo%3D4"
               

              },
              {
                 store: "Nook",
                 url: "https://www.barnesandnoble.com/w/the-runaway-n-franko/1128317045?ean=2940155517795&st=AFF&2sid=Draft2Digital_7968444_NA&sourceId=AFFDraft2Digital"
                 
              },
              {
                store: "Kobo",
                url: "https://www.kobo.com/ca/en/ebook/the-runaway-51"
              },
              {
                store: "Google Play Books",
                url: "https://play.google.com/store/books/details?id=BYJTDwAAQBAJ"
              }
          ]
        },        
      ],
    copyright: "Copyright © 2018. N. Franko", // Copyright string for the footer of the website and RSS feed.
    themeColor: "#c62828", // Used for setting manifest and progress theme colors.
    backgroundColor: "#e0e0e0", // Used for setting manifest background color.
    // TODO: Move this literally anywhere better.
    toCChapters: ["", "Chapter 1", "Chapter 2"] // Used to generate the Table Of Contents. Index 0 should be blank.
  };
  