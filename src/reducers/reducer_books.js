import {GOOGLE_API_SEARCH, FETCH_BOOKS} from '../actions/index';

const initialState = {
  "kind": "books#volumes",
  "totalItems": 246,
  "items": [
    {
      "kind": "books#volume",
      "id": "PW4dDAAAQBAJ",
      "etag": "OHmFBqeZG2s",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/PW4dDAAAQBAJ",
      "volumeInfo": {
        "title": "Docker High Performance",
        "authors": [
          "Allan Espinosa"
        ],
        "publisher": "Packt Publishing Ltd",
        "publishedDate": "2016-01-28",
        "description": "Master performance enhancement practices for Docker, and unlock faster and more efficient container deployment that will improve your development workflow About This Book Implement a scalable Docker infrastructure that has been optimized for greater efficiency Tackle the challenges of large-scale container deployment with this fast-paced guide Extend your capabilities as a developer to take full advantage of Docker and containerization Who This Book Is For If you are a software developer with a good understanding of managing Docker services and the Linux file system and are looking for ways to optimize working with Docker containers, then this is the book for you. What You Will Learn Tune your Dockerfiles and optimize the performance and size of your Docker containers Configure and tune your Docker hosts at scale with Chef Deploy containers without downtime using load balancers Listen to your Docker container and host logs with an ELK stack Monitor the performance of your Docker containers with collectd Benchmark the performance of your web application containers with Apache JMeter Troubleshoot and diagnose containers using standard Linux diagnostic tools Prepare for production with the most effective DevOps practices In Detail Docker is a portable container format that allows you to run code anywhere from your desktop to the cloud. The workflow around Docker makes development, testing, and deployment much easier and much faster. However, it's essential that you know the best practices most techniques for optimization so Docker can help you deploy your application most effectively. This comprehensive guide will improve your Docker workflows and will ensure your application's production environment runs smoothly. It starts with a short refresher on working with Docker, then you will learn how to take this basic knowledge to the next level by optimizing your Docker infrastructure and applications at scale. At the end of the book, we will put the concepts and everything you have learned about Docker's features into practice by rolling out supplementary monitoring and troubleshooting instrumentation to your infrastructure. All of these things will ensure your application succeeds using Docker. Style and approach This is a comprehensive guide on real-world Docker workflows, and each topic is explained in an easy step-by-step format, accompanied by screenshots where required.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781785888328"
          },
          {
            "type": "ISBN_10",
            "identifier": "1785888323"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 160,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "1.1.1.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=PW4dDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=PW4dDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.es/books?id=PW4dDAAAQBAJ&printsec=frontcover&dq=%22docker%22+subject:Computers&hl=&cd=1&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=PW4dDAAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://market.android.com/details?id=book-PW4dDAAAQBAJ"
      },
      "saleInfo": {
        "country": "ES",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 31.45,
          "currencyCode": "EUR"
        },
        "retailPrice": {
          "amount": 29.88,
          "currencyCode": "EUR"
        },
        "buyLink": "https://play.google.com/store/books/details?id=PW4dDAAAQBAJ&rdid=book-PW4dDAAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 3.145E7,
              "currencyCode": "EUR"
            },
            "retailPrice": {
              "amountInMicros": 2.988E7,
              "currencyCode": "EUR"
            },
            "giftable": true
          }
        ]
      },
      "accessInfo": {
        "country": "ES",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true
        },
        "pdf": {
          "isAvailable": true
        },
        "webReaderLink": "http://books.google.es/books/reader?id=PW4dDAAAQBAJ&hl=&printsec=frontcover&output=reader&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Master performance enhancement practices for Docker, and unlock faster and more efficient container deployment that will improve your development workflow About This Book Implement a scalable Docker infrastructure that has been optimized ..."
      }
    },
    {
      "kind": "books#volume",
      "id": "55YpCwAAQBAJ",
      "etag": "AdZ3sEebiuM",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/55YpCwAAQBAJ",
      "volumeInfo": {
        "title": "Using Docker",
        "subtitle": "Developing and Deploying Software with Containers",
        "authors": [
          "Adrian Mouat"
        ],
        "publisher": "\"O'Reilly Media, Inc.\"",
        "publishedDate": "2015-12-09",
        "description": "Docker containers offer simpler, faster, and more robust methods for developing, distributing, and running software than previously available. With this hands-on guide, you’ll learn why containers are so important, what you’ll gain by adopting Docker, and how to make it part of your development process. Ideal for developers, operations engineers, and system administrators—especially those keen to embrace a DevOps approach—Using Docker will take you from Docker and container basics to running dozens of containers on a multi-host system with networking and scheduling. The core of the book walks you through the steps needed to develop, test, and deploy a web application with Docker. Get started with Docker by building and deploying a simple web application Use Continuous Deployment techniques to push your application to production multiple times a day Learn various options and techniques for logging and monitoring multiple containers Examine networking and service discovery: how do containers find each other and how do you connect them? Orchestrate and cluster containers to address load-balancing, scaling, failover, and scheduling Secure your system by following the principles of defense-in-depth and least privilege",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781491915912"
          },
          {
            "type": "ISBN_10",
            "identifier": "1491915919"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 354,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "1.8.7.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=55YpCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=55YpCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.es/books?id=55YpCwAAQBAJ&printsec=frontcover&dq=%22docker%22+subject:Computers&hl=&cd=2&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=55YpCwAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://market.android.com/details?id=book-55YpCwAAQBAJ"
      },
      "saleInfo": {
        "country": "ES",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 55.66,
          "currencyCode": "EUR"
        },
        "retailPrice": {
          "amount": 52.88,
          "currencyCode": "EUR"
        },
        "buyLink": "https://play.google.com/store/books/details?id=55YpCwAAQBAJ&rdid=book-55YpCwAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 5.566E7,
              "currencyCode": "EUR"
            },
            "retailPrice": {
              "amountInMicros": 5.288E7,
              "currencyCode": "EUR"
            },
            "giftable": true
          }
        ]
      },
      "accessInfo": {
        "country": "ES",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true
        },
        "pdf": {
          "isAvailable": true
        },
        "webReaderLink": "http://books.google.es/books/reader?id=55YpCwAAQBAJ&hl=&printsec=frontcover&output=reader&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "With this hands-on guide, you’ll learn why containers are so important, what you’ll gain by adopting Docker, and how to make it part of your development process."
      }
    },
    {
      "kind": "books#volume",
      "id": "JiHlCwAAQBAJ",
      "etag": "5mFdliBs8Go",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/JiHlCwAAQBAJ",
      "volumeInfo": {
        "title": "Mastering Docker",
        "authors": [
          "Scott Gallagher"
        ],
        "publisher": "Packt Publishing Ltd",
        "publishedDate": "2015-12-16",
        "description": "Rethink what's possible with Docker – become an expert in the innovative containerization tool to unlock new opportunities in the way you use and deploy software About This Book Create highly scalable applications and services using the Linux container virtualization paradigm Extend Docker with external platforms, including Heroku and OpenStack Integrate with some of the most innovative and exciting orchestration tools such as Kubernetes for larger and more controlled deployments Who This Book Is For If you recognize Docker's importance for innovation in everything from system administration to web development, but aren't sure how to use it to its full potential, this book is for you. What You Will Learn Become fluent with the basic components of Docker Learn best practices for storing and managing Docker files Secure your containers and files with Docker's security features Learn how to use Docker machine to build new servers from scratch Find out how to set up and manage multiple environments with Docker compose Utilize Docker Swarm to orchestrate containers across different servers Integrate Docker with a wide range of cloud and configuration tools to fully realize its potential In Detail Docker has been a game-changer when it comes to virtualization – it has now grown to become a key driver of innovation beyond system administration, having an impact on the world of web development and more. But how can you make sure you're keeping up with the innovations that it's driving? How can you be sure you're using it to its full potential? Mastering Docker shows you how – it not only demonstrates how to use Docker more effectively, it also helps you rethink and reimagine what's possible with Docker. Covering best practices to make sure you're confident with and the basics, such as building, managing and storing containers, before diving deeper into Docker security, you'll find everything you need to help you extend and integrate Docker in new and innovative ways. You'll learn how to take greater control over your containers using some of Docker's most sophisticated and useful tools, such as Docker compose and Docker swarm, before bringing together everything you already know and have learned to put your containers into production and monitor them for safety and performance. Beyond this, you'll also explore even more advanced strategies, as you learn how to extend and integrate Docker with cloud platforms such as Heroku and OpenStack, and how tools such as Kubernetes can improve the way you manage large-scale container orchestration. With further guidance on how you can use configuration management tools such as Puppet, Chef and PowerShell, by the end of the book you'll have a broad and detailed sense of exactly what's possible with Docker – and how seamlessly it fits with a range of other platforms and tools. Style and approach This book takes you through some of the most sophisticated Docker tools in a way that's accessible and practical. It has been created to help you put new ideas in practice – and to demonstrate precisely what's possible with Docker.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781785289248"
          },
          {
            "type": "ISBN_10",
            "identifier": "1785289241"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 284,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "1.1.1.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=JiHlCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=JiHlCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.es/books?id=JiHlCwAAQBAJ&printsec=frontcover&dq=%22docker%22+subject:Computers&hl=&cd=3&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=JiHlCwAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://market.android.com/details?id=book-JiHlCwAAQBAJ"
      },
      "saleInfo": {
        "country": "ES",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 43.55,
          "currencyCode": "EUR"
        },
        "retailPrice": {
          "amount": 41.37,
          "currencyCode": "EUR"
        },
        "buyLink": "https://play.google.com/store/books/details?id=JiHlCwAAQBAJ&rdid=book-JiHlCwAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 4.355E7,
              "currencyCode": "EUR"
            },
            "retailPrice": {
              "amountInMicros": 4.137E7,
              "currencyCode": "EUR"
            },
            "giftable": true
          }
        ]
      },
      "accessInfo": {
        "country": "ES",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true
        },
        "pdf": {
          "isAvailable": true
        },
        "webReaderLink": "http://books.google.es/books/reader?id=JiHlCwAAQBAJ&hl=&printsec=frontcover&output=reader&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Rethink what&#39;s possible with Docker – become an expert in the innovative containerization tool to unlock new opportunities in the way you use and deploy software About This Book Create highly scalable applications and services using the ..."
      }
    },
    {
      "kind": "books#volume",
      "id": "5sTeCgAAQBAJ",
      "etag": "vhraskfnV/E",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/5sTeCgAAQBAJ",
      "volumeInfo": {
        "title": "Docker Cookbook",
        "subtitle": "Solutions and Examples for Building Distributed Applications",
        "authors": [
          "Sébastien Goasguen"
        ],
        "publisher": "\"O'Reilly Media, Inc.\"",
        "publishedDate": "2015-11-04",
        "description": "Whether you’re deploying applications on premise or in the cloud, this cookbook provides developers, operators, and IT professionals with more than 130 proven recipes for working with Docker. With these practical solutions, experienced developers with no previous knowledge of Docker will be able to package and deploy distributed applications within a couple of chapters. IT professionals will be able to solve everyday problems, as well as create, run, share, and deploy Docker images. Operators will quickly be able to adopt the tools that will change the way they work. The recipes in this book will help you: Manage containers, mount data volumes, and link containers Create and share container images Network containers across single or multiple hosts Tackle advanced topics such as Docker configuration and development Deploy multi-container applications on a distributed cluster with Kubernetes Use a new generation of operating systems optimized for Docker Learn tools for application deployment, continuous integration, service discovery, and orchestration Access a Docker host on Amazon AWS, Google GCE, and Microsoft Azure Monitor containers and explore different application use cases",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781491919767"
          },
          {
            "type": "ISBN_10",
            "identifier": "1491919760"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 366,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "1.4.5.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=5sTeCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=5sTeCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.es/books?id=5sTeCgAAQBAJ&printsec=frontcover&dq=%22docker%22+subject:Computers&hl=&cd=4&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=5sTeCgAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://market.android.com/details?id=book-5sTeCgAAQBAJ"
      },
      "saleInfo": {
        "country": "ES",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 42.35,
          "currencyCode": "EUR"
        },
        "retailPrice": {
          "amount": 40.23,
          "currencyCode": "EUR"
        },
        "buyLink": "https://play.google.com/store/books/details?id=5sTeCgAAQBAJ&rdid=book-5sTeCgAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 4.235E7,
              "currencyCode": "EUR"
            },
            "retailPrice": {
              "amountInMicros": 4.023E7,
              "currencyCode": "EUR"
            },
            "giftable": true
          }
        ]
      },
      "accessInfo": {
        "country": "ES",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true
        },
        "pdf": {
          "isAvailable": true
        },
        "webReaderLink": "http://books.google.es/books/reader?id=5sTeCgAAQBAJ&hl=&printsec=frontcover&output=reader&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "The recipes in this book will help you: Manage containers, mount data volumes, and link containers Create and share container images Network containers across single or multiple hosts Tackle advanced topics such as Docker configuration and ..."
      }
    },
    {
      "kind": "books#volume",
      "id": "RRdYBgAAQBAJ",
      "etag": "jizivRCs8ms",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/RRdYBgAAQBAJ",
      "volumeInfo": {
        "title": "Orchestrating Docker",
        "authors": [
          "Shrikrishna Holla"
        ],
        "publisher": "Packt Publishing Ltd",
        "publishedDate": "2015-01-22",
        "description": "If you are a competent developer or DevOps with a good understanding of Linux filesystems but want to manage and orchestrate Docker services, images, and products using a multitude of techniques, then this book is for you. No prior knowledge of Docker or container virtualization is required.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781783984794"
          },
          {
            "type": "ISBN_10",
            "identifier": "1783984791"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 154,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "2.2.2.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=RRdYBgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=RRdYBgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.es/books?id=RRdYBgAAQBAJ&printsec=frontcover&dq=%22docker%22+subject:Computers&hl=&cd=5&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=RRdYBgAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://market.android.com/details?id=book-RRdYBgAAQBAJ"
      },
      "saleInfo": {
        "country": "ES",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 14.51,
          "currencyCode": "EUR"
        },
        "retailPrice": {
          "amount": 13.78,
          "currencyCode": "EUR"
        },
        "buyLink": "https://play.google.com/store/books/details?id=RRdYBgAAQBAJ&rdid=book-RRdYBgAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 1.451E7,
              "currencyCode": "EUR"
            },
            "retailPrice": {
              "amountInMicros": 1.378E7,
              "currencyCode": "EUR"
            },
            "giftable": true
          }
        ]
      },
      "accessInfo": {
        "country": "ES",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true
        },
        "pdf": {
          "isAvailable": true
        },
        "webReaderLink": "http://books.google.es/books/reader?id=RRdYBgAAQBAJ&hl=&printsec=frontcover&output=reader&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "If you are a competent developer or DevOps with a good understanding of Linux filesystems but want to manage and orchestrate Docker services, images, and products using a multitude of techniques, then this book is for you."
      }
    },
    {
      "kind": "books#volume",
      "id": "CzfdCQAAQBAJ",
      "etag": "fu2V1ROlZRo",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/CzfdCQAAQBAJ",
      "volumeInfo": {
        "title": "Docker Cookbook",
        "authors": [
          "Neependra Khare"
        ],
        "publisher": "Packt Publishing Ltd",
        "publishedDate": "2015-06-11",
        "description": "Docker Cookbook is for developers, system administrators, and DevOps engineers who want to use Docker in his/her development, QA, or production environments. It is expected that the reader has basic Linux/Unix skills such as installing packages, editing files, managing services, and so on. Any experience in virtualization technologies such as KVM, XEN, and VMware will help the reader to relate with container technologies better, but it is not required.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781783984879"
          },
          {
            "type": "ISBN_10",
            "identifier": "1783984872"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 248,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "1.1.1.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=CzfdCQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=CzfdCQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.es/books?id=CzfdCQAAQBAJ&printsec=frontcover&dq=%22docker%22+subject:Computers&hl=&cd=6&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=CzfdCQAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://market.android.com/details?id=book-CzfdCQAAQBAJ"
      },
      "saleInfo": {
        "country": "ES",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 36.29,
          "currencyCode": "EUR"
        },
        "retailPrice": {
          "amount": 34.48,
          "currencyCode": "EUR"
        },
        "buyLink": "https://play.google.com/store/books/details?id=CzfdCQAAQBAJ&rdid=book-CzfdCQAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 3.629E7,
              "currencyCode": "EUR"
            },
            "retailPrice": {
              "amountInMicros": 3.448E7,
              "currencyCode": "EUR"
            },
            "giftable": true
          }
        ]
      },
      "accessInfo": {
        "country": "ES",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true
        },
        "pdf": {
          "isAvailable": true
        },
        "webReaderLink": "http://books.google.es/books/reader?id=CzfdCQAAQBAJ&hl=&printsec=frontcover&output=reader&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Docker Cookbook is for developers, system administrators, and DevOps engineers who want to use Docker in his/her development, QA, or production environments."
      }
    },
    {
      "kind": "books#volume",
      "id": "S69PCwAAQBAJ",
      "etag": "4p/ii1r9RD0",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/S69PCwAAQBAJ",
      "volumeInfo": {
        "title": "Pro Docker",
        "authors": [
          "Deepak Vohra"
        ],
        "publisher": "Apress",
        "publishedDate": "2015-12-30",
        "description": "In this fast-paced book on the Docker open standards platform for developing, packaging and running portable distributed applications, Deepak Vorhadiscusses how to build, ship and run applications on any platform such as a PC, the cloud, data center or a virtual machine. He describes how to install and create Docker images. and the advantages off Docker containers.The remainder of the book is devoted to discussing using Docker with important software solutions. He begins by discussing using Docker with a traditional RDBMS using Oracle and MySQL. Next he moves on to NoSQL with chapter on MongoDB Cassandra, and Couchbase. Then he addresses the use of Docker in the Hadoop ecosystem with complete chapters on utilizing not only Hadoop, but Hive, HBase, Sqoop, Kafka, Solr and Spark. What You Will Learn How to install a Docker image How to create a Docker container How to run an Application in a Docker Container Use Docker with Apache Hadoop Ecosystem Use Docker with NoSQL Databases Use Docker with RDBMS Who This Book Is ForApache Hadoop Developers. Database developers. NoSQL Developers.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781484218303"
          },
          {
            "type": "ISBN_10",
            "identifier": "1484218302"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 256,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "1.5.3.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=S69PCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=S69PCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.es/books?id=S69PCwAAQBAJ&printsec=frontcover&dq=%22docker%22+subject:Computers&hl=&cd=7&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=S69PCwAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://market.android.com/details?id=book-S69PCwAAQBAJ"
      },
      "saleInfo": {
        "country": "ES",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 42.34,
          "currencyCode": "EUR"
        },
        "retailPrice": {
          "amount": 40.22,
          "currencyCode": "EUR"
        },
        "buyLink": "https://play.google.com/store/books/details?id=S69PCwAAQBAJ&rdid=book-S69PCwAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 4.234E7,
              "currencyCode": "EUR"
            },
            "retailPrice": {
              "amountInMicros": 4.022E7,
              "currencyCode": "EUR"
            },
            "giftable": true
          }
        ]
      },
      "accessInfo": {
        "country": "ES",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.es/books/download/Pro_Docker-sample-epub.acsm?id=S69PCwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "pdf": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.es/books/download/Pro_Docker-sample-pdf.acsm?id=S69PCwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://books.google.es/books/reader?id=S69PCwAAQBAJ&hl=&printsec=frontcover&output=reader&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "In this fast-paced book on the Docker open standards platform for developing, packaging and running portable distributed applications, Deepak Vorhadiscusses how to build, ship and run applications on any platform such as a PC, the cloud, ..."
      }
    },
    {
      "kind": "books#volume",
      "id": "6BUMogEACAAJ",
      "etag": "A4zcop7hU0M",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/6BUMogEACAAJ",
      "volumeInfo": {
        "title": "Docker: Up and Running",
        "authors": [
          "Karl Matthias",
          "Sean P. Kane"
        ],
        "publisher": "O'Reilly Media",
        "publishedDate": "2015-06-25",
        "description": "Quickly learn how to use Docker and containers in general to create packaged images for easy management, testing, and deployment of software. This practical guide lets you hit the ground running by demonstrating how Docker allows developers to package their application with all of its dependencies and to test and then ship the exact same bundle to production. You’ll also learn how Docker enables operations engineers to help the development team quickly iterate on their software. Learn Docker’s philosophy, design, and intent Use your own custom software to build Docker images Launch Docker images as running containers Explore advanced Docker concepts and topics Get valuable references to related tools in the Docker ecosystem",
        "industryIdentifiers": [
          {
            "type": "ISBN_10",
            "identifier": "1491917571"
          },
          {
            "type": "ISBN_13",
            "identifier": "9781491917572"
          }
        ],
        "readingModes": {
          "text": false,
          "image": false
        },
        "pageCount": 214,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "averageRating": 4.0,
        "ratingsCount": 1,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=6BUMogEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=6BUMogEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.es/books?id=6BUMogEACAAJ&dq=%22docker%22+subject:Computers&hl=&cd=8&source=gbs_api",
        "infoLink": "http://books.google.es/books?id=6BUMogEACAAJ&dq=%22docker%22+subject:Computers&hl=&source=gbs_api",
        "canonicalVolumeLink": "http://books.google.es/books/about/Docker_Up_and_Running.html?hl=&id=6BUMogEACAAJ"
      },
      "saleInfo": {
        "country": "ES",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "ES",
        "viewability": "NO_PAGES",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://books.google.es/books/reader?id=6BUMogEACAAJ&hl=&printsec=frontcover&output=reader&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "With this practical guide, you’ll learn how to use Docker to package your applications with all of their dependencies, and then test, ship, scale, and support your containers in production."
      }
    },
    {
      "kind": "books#volume",
      "id": "MD3lCwAAQBAJ",
      "etag": "aBW5xNwEfck",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/MD3lCwAAQBAJ",
      "volumeInfo": {
        "title": "Monitoring Docker",
        "authors": [
          "Russ McKendrick"
        ],
        "publisher": "Packt Publishing Ltd",
        "publishedDate": "2015-12-15",
        "description": "Monitor your Docker containers and their apps using various native and third-party tools with the help of this exclusive guide! About This Book Get the only book that covers multiple methods to monitoring Docker Containers -your one-stop solution to all your Docker monitoring needs Learn how to implement third-party tools such as Datalog, cAdvisor, and more with this example-rich, hands-on guide Learn how to efficiently monitor Docker containers and get an edge over other administrators while maintaining apps on these containers Who This Book Is For This book is for DevOps engineers and system administrators who manage Docker containers and want to better manage these containers using expert techniques and methods and better maintain applications built on Docker. What You Will Learn Discover the tools built into Docker to gain an insight into your containers' performance Augment Docker's built-in tools with modern tools such as cAdvisor from Google, SysDig by Draios, and Soundcloud's Prometheus Integrate the monitoring of your containers with more traditional monitoring solutions such as Zabbix Take advantage of the various SaaS offerings from third parties to move monitoring away from your local infrastructure and into the cloud Discover the various ways to ship your applications' logs from the container to a central logging service Get the most out of your application and resources with the right implementation of your monitoring method In Detail This book will show you how monitoring containers and keeping a keen eye on the working of applications helps improve the overall performance of the applications that run on Docker. With the increased adoption of Docker containers, the need to monitor which containers are running, what resources they are consuming, and how these factors affect the overall performance of the system has become the need of the moment. This book covers monitoring containers using Docker's native monitoring functions, various plugins, as well as third-party tools that help in monitoring. Well start with how to obtain detailed stats for active containers, resources consumed, and container behavior. We also show you how to use these stats to improve the overall performance of the system. Next, you will learn how to use SysDig to both view your containers performance metrics in real time and record sessions to query later. By the end of this book, you will have a complete knowledge of how to implement monitoring for your containerized applications and make the most of the metrics you are collecting Style and approach This is an easy-to-follow guide with plenty of hands-on examples that can be executed both on your local machine and externally hosted services.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781785885501"
          },
          {
            "type": "ISBN_10",
            "identifier": "1785885502"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 148,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "2.2.2.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=MD3lCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=MD3lCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.es/books?id=MD3lCwAAQBAJ&printsec=frontcover&dq=%22docker%22+subject:Computers&hl=&cd=9&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=MD3lCwAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://market.android.com/details?id=book-MD3lCwAAQBAJ"
      },
      "saleInfo": {
        "country": "ES",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 35.08,
          "currencyCode": "EUR"
        },
        "retailPrice": {
          "amount": 33.33,
          "currencyCode": "EUR"
        },
        "buyLink": "https://play.google.com/store/books/details?id=MD3lCwAAQBAJ&rdid=book-MD3lCwAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 3.508E7,
              "currencyCode": "EUR"
            },
            "retailPrice": {
              "amountInMicros": 3.333E7,
              "currencyCode": "EUR"
            },
            "giftable": true
          }
        ]
      },
      "accessInfo": {
        "country": "ES",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true
        },
        "pdf": {
          "isAvailable": true
        },
        "webReaderLink": "http://books.google.es/books/reader?id=MD3lCwAAQBAJ&hl=&printsec=frontcover&output=reader&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "About This Book Get the only book that covers multiple methods to monitoring Docker Containers -your one-stop solution to all your Docker monitoring needs Learn how to implement third-party tools such as Datalog, cAdvisor, and more with ..."
      }
    },
    {
      "kind": "books#volume",
      "id": "XbXjCwAAQBAJ",
      "etag": "lz7FEOKHyVI",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/XbXjCwAAQBAJ",
      "volumeInfo": {
        "title": "Securing Docker",
        "authors": [
          "Scott Gallagher"
        ],
        "publisher": "Packt Publishing Ltd",
        "publishedDate": "2016-03-30",
        "description": "Learn how to secure your Docker environment and keep your environments secure irrespective of the threats out there About This Book Gain confidence in using Docker for containerization without compromising on security This book covers different techniques to help you develop your container security skills It is loaded with practical examples and real-world scenarios to secure your container-based applications Who This Book Is For This book is for developers who wish to use Docker as their testing platform as well as security professionals who are interested in securing Docker containers. You must be familiar with the basics of Docker. What You Will Learn Find out how to secure your Docker hosts and nodes Secure your Docker components Explore different security measures/methods for Linux kernels Install and run the Docker Bench security application Monitor and report security issues Familiarize yourself with third-party tools such as Traffic Authorization, Summon, sVirt, and SELinux to secure your Docker environment In Detail With the rising integration and adoption of Docker containers, there is a growing need to ensure their security. The purpose of this book is to provide techniques and enhance your skills to secure Docker containers easily and efficiently. The book starts by sharing the techniques to configure Docker components securely and explore the different security measures/methods one can use to secure the kernel. Furthermore, we will cover the best practices to report Docker security findings and will show you how you can safely report any security findings you come across. Toward the end, we list the internal and third-party tools that can help you immunize your Docker environment. By the end of this book, you will have a complete understanding of Docker security so you are able to protect your container-based applications. Style and approach This book is your one-stop solution to resolve all your Docker security concerns. It will familiarize you with techniques to safeguard your applications that run on Docker containers.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781785881961"
          },
          {
            "type": "ISBN_10",
            "identifier": "1785881965"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 126,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "0.3.4.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=XbXjCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=XbXjCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.es/books?id=XbXjCwAAQBAJ&printsec=frontcover&dq=%22docker%22+subject:Computers&hl=&cd=10&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=XbXjCwAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://market.android.com/details?id=book-XbXjCwAAQBAJ"
      },
      "saleInfo": {
        "country": "ES",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 35.08,
          "currencyCode": "EUR"
        },
        "retailPrice": {
          "amount": 33.33,
          "currencyCode": "EUR"
        },
        "buyLink": "https://play.google.com/store/books/details?id=XbXjCwAAQBAJ&rdid=book-XbXjCwAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 3.508E7,
              "currencyCode": "EUR"
            },
            "retailPrice": {
              "amountInMicros": 3.333E7,
              "currencyCode": "EUR"
            },
            "giftable": true
          }
        ]
      },
      "accessInfo": {
        "country": "ES",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true
        },
        "pdf": {
          "isAvailable": true
        },
        "webReaderLink": "http://books.google.es/books/reader?id=XbXjCwAAQBAJ&hl=&printsec=frontcover&output=reader&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Learn how to secure your Docker environment and keep your environments secure irrespective of the threats out there About This Book Gain confidence in using Docker for containerization without compromising on security This book covers ..."
      }
    },
    {
      "kind": "books#volume",
      "id": "bOrnBwAAQBAJ",
      "etag": "uutfSDhmXbA",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/bOrnBwAAQBAJ",
      "volumeInfo": {
        "title": "Build Your Own PaaS with Docker",
        "authors": [
          "Oskar Hane"
        ],
        "publisher": "Packt Publishing Ltd",
        "publishedDate": "2015-04-07",
        "description": "This book is intended for those who want to take full advantage of separating services into module containers and connect them to form a complete platform. It will give you all the insights and knowledge needed to run your own PaaS.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781784394561"
          },
          {
            "type": "ISBN_10",
            "identifier": "1784394564"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 138,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "1.1.1.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=bOrnBwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=bOrnBwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.es/books?id=bOrnBwAAQBAJ&printsec=frontcover&dq=%22docker%22+subject:Computers&hl=&cd=11&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=bOrnBwAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://market.android.com/details?id=book-bOrnBwAAQBAJ"
      },
      "saleInfo": {
        "country": "ES",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 24.19,
          "currencyCode": "EUR"
        },
        "retailPrice": {
          "amount": 22.98,
          "currencyCode": "EUR"
        },
        "buyLink": "https://play.google.com/store/books/details?id=bOrnBwAAQBAJ&rdid=book-bOrnBwAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 2.419E7,
              "currencyCode": "EUR"
            },
            "retailPrice": {
              "amountInMicros": 2.298E7,
              "currencyCode": "EUR"
            },
            "giftable": true
          }
        ]
      },
      "accessInfo": {
        "country": "ES",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true
        },
        "pdf": {
          "isAvailable": true
        },
        "webReaderLink": "http://books.google.es/books/reader?id=bOrnBwAAQBAJ&hl=&printsec=frontcover&output=reader&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "This book is intended for those who want to take full advantage of separating services into module containers and connect them to form a complete platform. It will give you all the insights and knowledge needed to run your own PaaS."
      }
    },
    {
      "kind": "books#volume",
      "id": "-zrcCQAAQBAJ",
      "etag": "oPC0eCg76dg",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/-zrcCQAAQBAJ",
      "volumeInfo": {
        "title": "Docker: Up & Running",
        "subtitle": "Shipping Reliable Containers in Production",
        "authors": [
          "Karl Matthias",
          "Sean P. Kane"
        ],
        "publisher": "\"O'Reilly Media, Inc.\"",
        "publishedDate": "2015-06-11",
        "description": "Updated to cover Docker version 1.10 Docker is quickly changing the way that organizations are deploying software at scale. But understanding how Linux containers fit into your workflow—and getting the integration details right—are not trivial tasks. With this practical guide, you’ll learn how to use Docker to package your applications with all of their dependencies, and then test, ship, scale, and support your containers in production. Two Lead Site Reliability Engineers at New Relic share much of what they have learned from using Docker in production since shortly after its initial release. Their goal is to help you reap the benefits of this technology while avoiding the many setbacks they experienced. Learn how Docker simplifies dependency management and deployment workflow for your applications Start working with Docker images, containers, and command line tools Use practical techniques to deploy and test Docker-based Linux containers in production Debug containers by understanding their composition and internal processes Deploy production containers at scale inside your data center or cloud environment Explore advanced Docker topics, including deployment tools, networking, orchestration, security, and configuration",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781491918517"
          },
          {
            "type": "ISBN_10",
            "identifier": "1491918519"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 232,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "1.6.7.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=-zrcCQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=-zrcCQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.es/books?id=-zrcCQAAQBAJ&printsec=frontcover&dq=%22docker%22+subject:Computers&hl=&cd=12&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=-zrcCQAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://market.android.com/details?id=book--zrcCQAAQBAJ"
      },
      "saleInfo": {
        "country": "ES",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 32.67,
          "currencyCode": "EUR"
        },
        "retailPrice": {
          "amount": 31.04,
          "currencyCode": "EUR"
        },
        "buyLink": "https://play.google.com/store/books/details?id=-zrcCQAAQBAJ&rdid=book--zrcCQAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 3.267E7,
              "currencyCode": "EUR"
            },
            "retailPrice": {
              "amountInMicros": 3.104E7,
              "currencyCode": "EUR"
            },
            "giftable": true
          }
        ]
      },
      "accessInfo": {
        "country": "ES",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true
        },
        "pdf": {
          "isAvailable": true
        },
        "webReaderLink": "http://books.google.es/books/reader?id=-zrcCQAAQBAJ&hl=&printsec=frontcover&output=reader&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "With this practical guide, you’ll learn how to use Docker to package your applications with all of their dependencies, and then test, ship, scale, and support your containers in production."
      }
    },
    {
      "kind": "books#volume",
      "id": "Q00FswEACAAJ",
      "etag": "MdYMSb1j/sY",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/Q00FswEACAAJ",
      "volumeInfo": {
        "title": "Docker in Practice",
        "authors": [
          "Ian Miell",
          "Aidan Hobson Sayers"
        ],
        "publishedDate": "2016-01-31",
        "description": "Docker is impossible to ignore. This lightweight container system is easier to deploy and more flexible than traditional VMs. Built for simplicity and speed, it radically reduces your reliance on manual system administration for tasks like configuring servers, creating disposable (and portable!) development environments, and predictably rolling out applications on unknown systems. While the idea behind Docker is simple, it can have a major impact on how software is developed and deployed. Docker in Practice is a hands-on guide to over 100 specific techniques that can be used to get the most out of Docker. Following a cookbook-style Problem/Solution/Discussion format, this practical handbook offers instantly-useful solutions for important areas like effortless server maintenance and configuration, deploying microservices, creating safe environments for experimentation, and much more. The book takes readers from Docker basics to must-have practices like integrating Docker with Continuous Integration process, automating complex container creation with Chef, and orchestration with Kubernetes. Purchase of the print book includes a free eBook in PDF, Kindle, and ePub formats from Manning Publications.",
        "industryIdentifiers": [
          {
            "type": "ISBN_10",
            "identifier": "1617292729"
          },
          {
            "type": "ISBN_13",
            "identifier": "9781617292729"
          }
        ],
        "readingModes": {
          "text": false,
          "image": false
        },
        "pageCount": 275,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=Q00FswEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=Q00FswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.es/books?id=Q00FswEACAAJ&dq=%22docker%22+subject:Computers&hl=&cd=13&source=gbs_api",
        "infoLink": "http://books.google.es/books?id=Q00FswEACAAJ&dq=%22docker%22+subject:Computers&hl=&source=gbs_api",
        "canonicalVolumeLink": "http://books.google.es/books/about/Docker_in_Practice.html?hl=&id=Q00FswEACAAJ"
      },
      "saleInfo": {
        "country": "ES",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "ES",
        "viewability": "NO_PAGES",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://books.google.es/books/reader?id=Q00FswEACAAJ&hl=&printsec=frontcover&output=reader&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "About the Book Docker in Practice is a hands-on guide that covers 101 specific techniques you can use to get the most out of Docker."
      }
    },
    {
      "kind": "books#volume",
      "id": "tMnBDQAAQBAJ",
      "etag": "IStjUKulC5o",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/tMnBDQAAQBAJ",
      "volumeInfo": {
        "title": "Deploying Rails with Docker, Kubernetes and ECS",
        "authors": [
          "Pablo Acuña"
        ],
        "publisher": "Apress",
        "publishedDate": "2016-12-19",
        "description": "Learn how to use the power of Docker and Kubernetes to deploy your Rails applications easily and efficiently. Deploying Rails with Docker, Kubernetes and ECS shows you how to set up the project, push it to DockerHub, manage services and set up an efficient continuous integration environment. Every concept is clearly explained alongside a full Ruby on Rails application deployment. You’ll also learn how to deploy via Docker using Amazon EC2 Container Service. Docker and Kubernetes are increasing in popularity every day, but what if you want to leverage their benefits for your Rails application? This is the quick guide you need. What You Will Learn Create a Rails API application using Rails 5 and PostgreSQL, and Dockerize it Write and test templates to run the application with Kubernetes Create a Kubernetes cluster in Amazon Web Services and run your Inspect and troubleshoot problems in the cluster Automatize the the whole deployment process with Jenkins Who This Book Is For This book is for anyone who wants to understand how to effectively deploy a Rails application using Docker and Kubernetes. You will need to understand Rails and have basic knowledge of what Docker and Kubernetes are used for.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781484224151"
          },
          {
            "type": "ISBN_10",
            "identifier": "1484224159"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 127,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "1.1.1.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=tMnBDQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=tMnBDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.es/books?id=tMnBDQAAQBAJ&printsec=frontcover&dq=%22docker%22+subject:Computers&hl=&cd=14&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=tMnBDQAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://market.android.com/details?id=book-tMnBDQAAQBAJ"
      },
      "saleInfo": {
        "country": "ES",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 24.19,
          "currencyCode": "EUR"
        },
        "retailPrice": {
          "amount": 22.98,
          "currencyCode": "EUR"
        },
        "buyLink": "https://play.google.com/store/books/details?id=tMnBDQAAQBAJ&rdid=book-tMnBDQAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 2.419E7,
              "currencyCode": "EUR"
            },
            "retailPrice": {
              "amountInMicros": 2.298E7,
              "currencyCode": "EUR"
            },
            "giftable": true
          }
        ]
      },
      "accessInfo": {
        "country": "ES",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.es/books/download/Deploying_Rails_with_Docker_Kubernetes_a-sample-epub.acsm?id=tMnBDQAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "pdf": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.es/books/download/Deploying_Rails_with_Docker_Kubernetes_a-sample-pdf.acsm?id=tMnBDQAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://books.google.es/books/reader?id=tMnBDQAAQBAJ&hl=&printsec=frontcover&output=reader&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "This is the book you need. Deploying Rails with Docker, Kubernetes and ECS shows you how to set up the project, push it to DockerHub, manage services and set up an efficient continuous integration environment."
      }
    },
    {
      "kind": "books#volume",
      "id": "t2mCCwAAQBAJ",
      "etag": "lXcy5ldVA9Q",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/t2mCCwAAQBAJ",
      "volumeInfo": {
        "title": "Containers com Docker: Do desenvolvimento à produção",
        "authors": [
          "Daniel Romero"
        ],
        "publisher": "Editora Casa do Código",
        "publishedDate": "2015-10-02",
        "description": "Dores de cabeça com configuração de ambiente, noites perdidas com versões inválidas de algum pacote e tempo perdido na instalação de pré-requisitos, sendo que tudo isso poderia ser facilmente automatizado e nenhum dos inconvenientes precisaria acontecer. Neste livro, Daniel Romero mostrará como esses e outros problemas podem ser resolvidos com Docker, poderosa ferramenta que nos permite isolar e manter diferentes ambientes de forma simples e facilmente configurável. Aproveite o primeiro livro sobre Docker do Brasil. Prefácio escrito por Jérôme Petazzoni, desenvolvedor do Docker. Conheça todos os nossos livros em www.casadocodigo.com.br.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9788555191046"
          },
          {
            "type": "ISBN_10",
            "identifier": "8555191041"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 127,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=t2mCCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=t2mCCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "pt",
        "previewLink": "http://books.google.es/books?id=t2mCCwAAQBAJ&printsec=frontcover&dq=%22docker%22+subject:Computers&hl=&cd=15&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=t2mCCwAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://market.android.com/details?id=book-t2mCCwAAQBAJ"
      },
      "saleInfo": {
        "country": "ES",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 11.99,
          "currencyCode": "EUR"
        },
        "retailPrice": {
          "amount": 11.39,
          "currencyCode": "EUR"
        },
        "buyLink": "https://play.google.com/store/books/details?id=t2mCCwAAQBAJ&rdid=book-t2mCCwAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 1.199E7,
              "currencyCode": "EUR"
            },
            "retailPrice": {
              "amountInMicros": 1.139E7,
              "currencyCode": "EUR"
            },
            "giftable": true
          }
        ]
      },
      "accessInfo": {
        "country": "ES",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.es/books/download/Containers_com_Docker_Do_desenvolvimento-sample-epub.acsm?id=t2mCCwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "pdf": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.es/books/download/Containers_com_Docker_Do_desenvolvimento-sample-pdf.acsm?id=t2mCCwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://books.google.es/books/reader?id=t2mCCwAAQBAJ&hl=&printsec=frontcover&output=reader&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Neste livro, Daniel Romero mostrará como esses e outros problemas podem ser resolvidos com Docker, poderosa ferramenta que nos permite isolar e manter diferentes ambientes de forma simples e facilmente configurável."
      }
    },
    {
      "kind": "books#volume",
      "id": "jkkOCgAAQBAJ",
      "etag": "2SmTN8p5aj4",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/jkkOCgAAQBAJ",
      "volumeInfo": {
        "title": "Learning Docker",
        "authors": [
          "Pethuru Raj",
          "Jeeva S. Chelladhurai",
          "Vinod Singh"
        ],
        "publisher": "Packt Publishing Ltd",
        "publishedDate": "2015-06-29",
        "description": "Docker is a next-generation platform for simplifying application containerization life-cycle. Docker allows you to create a robust and resilient environment in which you can generate portable, composable, scalable, and stable application containers. This book is a step-by-step guide that will walk you through the various features of Docker from Docker software installation to the impenetrable security of containers. The book starts off by elucidating the installation procedure for Docker and a few troubleshooting techniques. You will be introduced to the process of downloading Docker images and running them as containers. You'll learn how to run containers as a service (CaaS) and also discover how to share data among containers. Later on, you'll explore how to establish the link between containers and orchestrate containers using Docker Compose. You will also come across relevant details about application testing inside a container. You will discover how to debug a container using the docker exec command and the nsenter tool. Finally, you will learn how to secure your containers with SELinux and other proven methods.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781784391935"
          },
          {
            "type": "ISBN_10",
            "identifier": "178439193X"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 240,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "1.1.1.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=jkkOCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=jkkOCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.es/books?id=jkkOCgAAQBAJ&printsec=frontcover&dq=%22docker%22+subject:Computers&hl=&cd=16&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=jkkOCgAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://market.android.com/details?id=book-jkkOCgAAQBAJ"
      },
      "saleInfo": {
        "country": "ES",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 41.13,
          "currencyCode": "EUR"
        },
        "retailPrice": {
          "amount": 39.07,
          "currencyCode": "EUR"
        },
        "buyLink": "https://play.google.com/store/books/details?id=jkkOCgAAQBAJ&rdid=book-jkkOCgAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 4.113E7,
              "currencyCode": "EUR"
            },
            "retailPrice": {
              "amountInMicros": 3.907E7,
              "currencyCode": "EUR"
            },
            "giftable": true
          }
        ]
      },
      "accessInfo": {
        "country": "ES",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true
        },
        "pdf": {
          "isAvailable": true
        },
        "webReaderLink": "http://books.google.es/books/reader?id=jkkOCgAAQBAJ&hl=&printsec=frontcover&output=reader&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "This book is a step-by-step guide that will walk you through the various features of Docker from Docker software installation to the impenetrable security of containers."
      }
    },
    {
      "kind": "books#volume",
      "id": "aKAFCwAAQBAJ",
      "etag": "R5fGl4Rh/7I",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/aKAFCwAAQBAJ",
      "volumeInfo": {
        "title": "Docker Containers (includes Content Update Program)",
        "subtitle": "Build and Deploy with Kubernetes, Flannel, Cockpit, and Atomic",
        "authors": [
          "Christopher Negus"
        ],
        "publisher": "Prentice Hall",
        "publishedDate": "2015-11-26",
        "description": "The Practical Guide to Running Docker on Linux Systems or Cloud Environments Whether on your laptop or a remote cloud, Docker can transform how you create, test, deploy, and manage your most critical applications. In Doc ker Containers , Christopher Negus helps you master Docker containerization from the ground up. You’ll start out running a few Docker container images in Ubuntu, Fedora, RHEL, CoreOS, or Project Atomic. By the time you’ve finished, you’ll be deploying enterprise-quality, multi-container Kubernetes setups in modern Linux and cloud environments. Writing for system administrators, software developers, and technology enthusiasts, Negus touches on every aspect of working with Docker: setting up containerized applications, working with both individual and multiple containers, running containers in cloud environments, and developing containers. Teaching through realistic examples of desktop applications, system services, and games, Negus guides you through building and deploying your own Dockerized applications. As you build your expertise, you’ll also learn indispensable Docker best practices for building and integrating containers, managing Docker on a day-to-day basis, and much more: • Understanding what Docker is and what you can do with it • Installing Docker on standard Linux or specialized container operating systems such as Atomic Host and CoreOS • Setting up a container runtime environment and private Docker Registry • Creating, running, and investigating Docker images and containers • Finding, pulling, saving, loading, and tagging container images • Pulling and pushing containers between local systems and Docker Registries • Integrating Docker containers with host networking and storage • Building containers with the docker build command and Dockerfile files • Minimizing space consumption and erasing unneeded containers • Accessing special host privileges from within a container • Orchestrating multiple containers into complex applications with Kubernetes • Using super privileged containers in cloud environments • Managing containers in the cloud with Cockpit • Getting started with Docker container development • Learning container build techniques from shared Dockerfiles This book is part of the Pearson Content Update Program. As the technology changes, sections of this book will be updated or new sections will be added. The updates will be delivered to you via a free Web Edition of this book, which can be accessed with any Internet connection.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9780134136622"
          },
          {
            "type": "ISBN_10",
            "identifier": "0134136624"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 304,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "1.3.3.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=aKAFCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=aKAFCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.es/books?id=aKAFCwAAQBAJ&printsec=frontcover&dq=%22docker%22+subject:Computers&hl=&cd=17&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=aKAFCwAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://market.android.com/details?id=book-aKAFCwAAQBAJ"
      },
      "saleInfo": {
        "country": "ES",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 29.03,
          "currencyCode": "EUR"
        },
        "retailPrice": {
          "amount": 27.58,
          "currencyCode": "EUR"
        },
        "buyLink": "https://play.google.com/store/books/details?id=aKAFCwAAQBAJ&rdid=book-aKAFCwAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 2.903E7,
              "currencyCode": "EUR"
            },
            "retailPrice": {
              "amountInMicros": 2.758E7,
              "currencyCode": "EUR"
            },
            "giftable": true
          }
        ]
      },
      "accessInfo": {
        "country": "ES",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
        "epub": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.es/books/download/Docker_Containers_includes_Content_Updat-sample-epub.acsm?id=aKAFCwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "pdf": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.es/books/download/Docker_Containers_includes_Content_Updat-sample-pdf.acsm?id=aKAFCwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://books.google.es/books/reader?id=aKAFCwAAQBAJ&hl=&printsec=frontcover&output=reader&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "As the technology changes, sections of this book will be updated or new sections will be added. The updates will be delivered to you via a free Web Edition of this book, which can be accessed with any Internet connection."
      }
    },
    {
      "kind": "books#volume",
      "id": "4xQKBAAAQBAJ",
      "etag": "6qRNwtuGmtY",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/4xQKBAAAQBAJ",
      "volumeInfo": {
        "title": "The Docker Book",
        "subtitle": "Containerization is the new virtualization",
        "authors": [
          "James Turnbull"
        ],
        "publisher": "James Turnbull",
        "publishedDate": "2014-07-14",
        "description": "Updated for Docker Community Edition v17.03.0! Docker book designed for SysAdmins, Operations staff, Developers and DevOps who are interested in deploying the open source container service Docker. In this book, we'll walk you through installing, deploying, managing, and extending Docker. We're going to do that by first introducing you to the basics of Docker and its components. Then we'll start to use Docker to build containers and services to perform a variety of tasks. We're going to take you through the development life cycle, from testing to production, and see where Docker fits in and how it can make your life easier. We'll make use of Docker to build test environments for new projects, demonstrate how to integrate Docker with continuous integration workflow, and then how to build application services and platforms. Finally, we'll show you how to use Docker's API and how to extend Docker yourself. We'll teach you how to: * Install Docker. * Take your first steps with a Docker container. * Build Docker images. * Manage and share Docker images. * Run and manage more complex Docker containers. * Deploy Docker containers as part of your testing pipeline. * Build multi-container applications and environments. * Learn about orchestration using Compose and Swarm for the orchestration of Docker containers and Consul for service discovery. * Explore the Docker API. * Getting Help and Extending Docker.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9780988820203"
          },
          {
            "type": "ISBN_10",
            "identifier": "098882020X"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 342,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "averageRating": 4.0,
        "ratingsCount": 1,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "4.60.61.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=4xQKBAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=4xQKBAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.es/books?id=4xQKBAAAQBAJ&printsec=frontcover&dq=%22docker%22+subject:Computers&hl=&cd=18&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=4xQKBAAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://market.android.com/details?id=book-4xQKBAAAQBAJ"
      },
      "saleInfo": {
        "country": "ES",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 10.94,
          "currencyCode": "EUR"
        },
        "retailPrice": {
          "amount": 10.39,
          "currencyCode": "EUR"
        },
        "buyLink": "https://play.google.com/store/books/details?id=4xQKBAAAQBAJ&rdid=book-4xQKBAAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 1.094E7,
              "currencyCode": "EUR"
            },
            "retailPrice": {
              "amountInMicros": 1.039E7,
              "currencyCode": "EUR"
            },
            "giftable": true
          }
        ]
      },
      "accessInfo": {
        "country": "ES",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true
        },
        "pdf": {
          "isAvailable": true
        },
        "webReaderLink": "http://books.google.es/books/reader?id=4xQKBAAAQBAJ&hl=&printsec=frontcover&output=reader&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "In this book, we&#39;ll walk you through installing, deploying, managing, and extending Docker. We&#39;re going to do that by first introducing you to the basics of Docker and its components."
      }
    },
    {
      "kind": "books#volume",
      "id": "Lt_BsgEACAAJ",
      "etag": "ZGjCAtXSRGo",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/Lt_BsgEACAAJ",
      "volumeInfo": {
        "title": "Docker in Action",
        "authors": [
          "Jeff Nickoloff"
        ],
        "publisher": "Manning Publications",
        "publishedDate": "2016-03-22",
        "description": "Summary Docker in Action teaches readers how to create, deploy, and manage applications hosted in Docker containers. Purchase of the print book includes a free eBook in PDF, Kindle, and ePub formats from Manning Publications. About the Technology The idea behind Docker is simple. Create a tiny virtual environment, called a container, that holds just your application and its dependencies. The Docker engine uses the host operating system to build and account for these containers. They are easy to install, manage, and remove. Applications running inside containers share resources, making their footprints small. About the Book Docker in Action teaches readers how to create, deploy, and manage applications hosted in Docker containers. After starting with a clear explanation of the Docker model, you will learn how to package applications in containers, including techniques for testing and distributing applications. You will also learn how to run programs securely and how to manage shared resources. Using carefully designed examples, the book teaches you how to orchestrate containers and applications from installation to removal. Along the way, you'll discover techniques for using Docker on systems ranging from dev-and-test machines to full-scale cloud deployments. What's Inside Packaging containers for deployment Installing, managing, and removing containers Working with Docker images Distributing with DockerHub About the Reader Readers need only have a working knowledge of the Linux OS. No prior knowledge of Docker is assumed. About the Author Jeff Nickoloff, a software engineer, has presented Docker and its applications to hundreds of developers and administrators at Desert Code Camp, Amazon.com, and technology meetups. Table of Contents PART 1 KEEPING A TIDY COMPUTER Welcome to Docker Running software in containers Software installation simplified Persistent storage and shared state with volumes Network exposure Limiting risk with isolation PART 2 PACKAGING SOFTWARE FOR DISTRIBUTION Packaging software in images Build automation and advanced image considerations Public and private software distribution Running customized registries PART 3 MULTI-CONTAINER AND MULTI-HOST ENVIRONMENTS Declarative environments with Docker Clusters with Machine and Swarm",
        "industryIdentifiers": [
          {
            "type": "ISBN_10",
            "identifier": "1633430235"
          },
          {
            "type": "ISBN_13",
            "identifier": "9781633430235"
          }
        ],
        "readingModes": {
          "text": false,
          "image": false
        },
        "pageCount": 304,
        "printType": "BOOK",
        "categories": [
          "Application software"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=Lt_BsgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=Lt_BsgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.es/books?id=Lt_BsgEACAAJ&dq=%22docker%22+subject:Computers&hl=&cd=19&source=gbs_api",
        "infoLink": "http://books.google.es/books?id=Lt_BsgEACAAJ&dq=%22docker%22+subject:Computers&hl=&source=gbs_api",
        "canonicalVolumeLink": "http://books.google.es/books/about/Docker_in_Action.html?hl=&id=Lt_BsgEACAAJ"
      },
      "saleInfo": {
        "country": "ES",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "ES",
        "viewability": "NO_PAGES",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://books.google.es/books/reader?id=Lt_BsgEACAAJ&hl=&printsec=frontcover&output=reader&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Applications running inside containers share resources, making their footprints small. About the Book Docker in Action teaches readers how to create, deploy, and manage applications hosted in Docker containers."
      }
    },
    {
      "kind": "books#volume",
      "id": "FgRwDQAAQBAJ",
      "etag": "P7ezdmopAUM",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/FgRwDQAAQBAJ",
      "volumeInfo": {
        "title": "Extending Docker",
        "authors": [
          "Russ McKendrick"
        ],
        "publisher": "Packt Publishing Ltd",
        "publishedDate": "2016-06-16",
        "description": "Master the art of making Docker more extensible, composable, and modular by leveraging plugins and other supporting tools About This Book Get the first book on the market that shows you how to extend the capabilities of Docker using plugins and third-party tools Master the skills of creating various plugins and integrating great tools in order to enhance the functionalities of Docker A practical and learning guide that ensures your investment in Docker becomes more valuable Who This Book Is For This book is for developers and sys admins who are well versed Docker and have knowledge on basic programming languages. If you can't wait to extend Docker and customize it to meet your requirements, this is the book for you! What You Will Learn Find out about Docker plugins and the problems they solve Gain insights into creating your own plugin Use Docker tools to extend the basic functionality of the core Docker engine Get to grips with the installation and configuration of third-party tools available to use with Docker plugins Install, configure, and use a scheduling service to manage the containers in your environment Enhance your day-to-day Docker usage through security, troubleshooting, and best practices In Detail With Docker, it is possible to get a lot of apps running on the same old servers, making it very easy to package and ship programs. The ability to extend Docker using plugins and load third-party plugins is incredible, and organizations can massively benefit from it. In this book, you will read about what first and third party tools are available to extend the functionality of your existing Docker installation and how to approach your next Docker infrastructure deployment. We will show you how to work with Docker plugins, install it, and cover its lifecycle. We also cover network and volume plugins, and you will find out how to build your own plugin. You'll discover how to integrate it with Puppet, Ansible, Jenkins, Flocker, Rancher, Packer, and more with third-party plugins. Then, you'll see how to use Schedulers such as Kubernetes and Amazon ECS. Finally, we'll delve into security, troubleshooting, and best practices when extending Docker. By the end of this book, you will learn how to extend Docker and customize it based on your business requirements with the help of various tools and plugins. Style and approach An easy to follow guide with plenty of hands-on practical examples which can be executed both on your local machine or externally hosted services.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781786462312"
          },
          {
            "type": "ISBN_10",
            "identifier": "1786462311"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 334,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "2.2.2.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=FgRwDQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=FgRwDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.es/books?id=FgRwDQAAQBAJ&pg=PA44&dq=%22docker%22+subject:Computers&hl=&cd=20&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=FgRwDQAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://market.android.com/details?id=book-FgRwDQAAQBAJ"
      },
      "saleInfo": {
        "country": "ES",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 43.55,
          "currencyCode": "EUR"
        },
        "retailPrice": {
          "amount": 41.37,
          "currencyCode": "EUR"
        },
        "buyLink": "https://play.google.com/store/books/details?id=FgRwDQAAQBAJ&rdid=book-FgRwDQAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 4.355E7,
              "currencyCode": "EUR"
            },
            "retailPrice": {
              "amountInMicros": 4.137E7,
              "currencyCode": "EUR"
            },
            "giftable": true
          }
        ]
      },
      "accessInfo": {
        "country": "ES",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true
        },
        "pdf": {
          "isAvailable": true
        },
        "webReaderLink": "http://books.google.es/books/reader?id=FgRwDQAAQBAJ&hl=&printsec=frontcover&output=reader&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "The other thing to mention about \u003cb\u003eDocker\u003c/b\u003e Machine is that, by default, it operates \u003cbr\u003e\nand opts in for crash reporting, considering the amount of different configuration/\u003cbr\u003e\nenvironment combinations \u003cb\u003eDocker\u003c/b\u003e Machine can be used with, it is important that\u003cbr\u003e\n&nbsp;..."
      }
    },
    {
      "kind": "books#volume",
      "id": "L08IrgEACAAJ",
      "etag": "8VOcDajTT8Q",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/L08IrgEACAAJ",
      "volumeInfo": {
        "title": "Docker Containers",
        "subtitle": "From Start to Enterprise",
        "authors": [
          "Christopher Negus"
        ],
        "publisher": "Addison-Wesley Professional",
        "publishedDate": "2015-09-01",
        "description": "The Practical Guide to Running Docker on Linux Systems or Cloud Environments Whether on your laptop or a remote cloud, Docker can transform how you create, test, deploy, and manage your most critical applications. In Doc ker Containers , Christopher Negus helps you master Docker containerization from the ground up. You'll start out running a few Docker container images in Ubuntu, Fedora, RHEL, CoreOS, or Project Atomic. By the time you've finished, you'll be deploying enterprise-quality, multi-container Kubernetes setups in modern Linux and cloud environments. Writing for system administrators, software developers, and technology enthusiasts, Negus touches on every aspect of working with Docker: setting up containerized applications, working with both individual and multiple containers, running containers in cloud environments, and developing containers. Teaching through realistic examples of desktop applications, system services, and games, Negus guides you through building and deploying your own Dockerized applications. As you build your expertise, you'll also learn indispensable Docker best practices for building and integrating containers, managing Docker on a day-to-day basis, and much more: * Understanding what Docker is and what you can do with it * Installing Docker on standard Linux or specialized container operating systems such as Atomic Host and CoreOS * Setting up a container runtime environment and private Docker Registry * Creating, running, and investigating Docker images and containers * Finding, pulling, saving, loading, and tagging container images * Pulling and pushing containers between local systems and Docker Registries * Integrating Docker containers with host networking and storage * Building containers with the docker build command and Dockerfile files * Minimizing space consumption and erasing unneeded containers * Accessing special host privileges from within a container * Orchestrating multiple containers into complex applications with Kubernetes * Using super privileged containers in cloud environments * Managing containers in the cloud with Cockpit * Getting started with Docker container development * Learning container build techniques from shared Dockerfiles This book is part of the Pearson Content Update Program. As the technology changes, sections of this book will be updated or new sections will be added. The updates will be delivered to you via a free Web Edition of this book, which can be accessed with any Internet connection.",
        "industryIdentifiers": [
          {
            "type": "ISBN_10",
            "identifier": "013413656X"
          },
          {
            "type": "ISBN_13",
            "identifier": "9780134136561"
          }
        ],
        "readingModes": {
          "text": false,
          "image": false
        },
        "pageCount": 350,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=L08IrgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=L08IrgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.es/books?id=L08IrgEACAAJ&dq=%22docker%22+subject:Computers&hl=&cd=21&source=gbs_api",
        "infoLink": "http://books.google.es/books?id=L08IrgEACAAJ&dq=%22docker%22+subject:Computers&hl=&source=gbs_api",
        "canonicalVolumeLink": "http://books.google.es/books/about/Docker_Containers.html?hl=&id=L08IrgEACAAJ"
      },
      "saleInfo": {
        "country": "ES",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "ES",
        "viewability": "NO_PAGES",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://books.google.es/books/reader?id=L08IrgEACAAJ&hl=&printsec=frontcover&output=reader&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "&quot;Whether on your laptop or a remote cloud, Docker can transform how you create, test, deploy and manage your most critical applications. In Docker Containers, Christopher Negus helps you master Docker containerization from the ground up ."
      }
    },
    {
      "kind": "books#volume",
      "id": "aEvZDQAAQBAJ",
      "etag": "DIZ5HgFcsBM",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/aEvZDQAAQBAJ",
      "volumeInfo": {
        "title": "Docker: Creating Structured Containers",
        "authors": [
          "Pethuru Raj",
          "Jeeva S. Chelladhurai",
          "Vinod Singh",
          "Shrikrishna Holla",
          "Oskar Hane",
          "Neependra Khare",
          "Rajdeep Dua",
          "Vaibhav Kohli",
          "Santosh Kumar Konduri",
          "Russ McKendrick"
        ],
        "publisher": "Packt Publishing Ltd",
        "publishedDate": "2016-06-13",
        "description": "Become an expert in the innovative containerization tool to unlock new opportunities in the way you use and deploy software About This Book Harness the power of Docker to create a robust and resilient environment in which you can generate portable, composable, scalable, and stable application containers Learn the art of container networking with elevated efficiency using Docker Better manage Docker containers using expert techniques and methods Explore the ways to keep your Docker environment secure Deploy your applications easily Who This Book Is For Whether you are a developer or a sysadmin, or anything in between, this course will give you the guidance you need to use Docker to build, test, and deploy your applications and make them easier, even enjoyable. What You Will Learn Learn how to install Docker across all the platforms along with a few troubleshooting techniques Build, push, and publish images on Docker Hub Orchestrate multiple containers with Docker Compose Test and debug applications inside a Docker container Get to know the basics of networking and see how Docker networking works Discover the tools built into Docker to gain an insight into your container's performance Take advantage of the various SaaS offerings from third parties to move monitoring away from your local infrastructure and into the cloud Familiarize yourself with third-party tools such as Traffic Authorization, Summon, sVirt, and SELinux to secure your Docker environment Integrate Docker with a wide range of cloud and configuration tools to fully realize its potential In Detail So hot off the presses, the latest buzz that has been on the tip of everyone's tongues and the topic of almost any conversation that includes containers these days is Docker! Docker has been a game-changer when it comes to virtualization. With this course, you will go from just being the person in the office who hears that buzz to the one who is tooting it around every day. This course will be a smooth journey covering Docker from scratch to finish! The first module will help you get familiarized with the fundamentals of Docker. The second module will show you how to create, deploy, and manage a virtual network for connecting containers spanning single or multiple hosts. In the third module, you'll get to grips with monitoring your Docker apps and containers - this will show you how monitoring containers and keeping a keen eye on the working of applications helps improve the overall performance of the applications that run on Docker. The purpose of our fourth module, Securing Docker, is to provide techniques and enhance your skills to secure Docker containers easily and efficiently. Finally, you'll see how to deploy Docker in production and three interesting GUI applications: Shipyard, Panamax, and Tutum. Style and approach Covering best practices to make sure you're confident with the basics, such as building, managing, and storing containers, before diving deeper into Docker security, you'll find everything you need to help you extend and integrate Docker in new and innovative ways.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781786463012"
          },
          {
            "type": "ISBN_10",
            "identifier": "1786463016"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 820,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "1.2.1.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=aEvZDQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=aEvZDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.es/books?id=aEvZDQAAQBAJ&pg=PA13&dq=%22docker%22+subject:Computers&hl=&cd=22&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=aEvZDQAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://market.android.com/details?id=book-aEvZDQAAQBAJ"
      },
      "saleInfo": {
        "country": "ES",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 62.91,
          "currencyCode": "EUR"
        },
        "retailPrice": {
          "amount": 59.76,
          "currencyCode": "EUR"
        },
        "buyLink": "https://play.google.com/store/books/details?id=aEvZDQAAQBAJ&rdid=book-aEvZDQAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 6.291E7,
              "currencyCode": "EUR"
            },
            "retailPrice": {
              "amountInMicros": 5.976E7,
              "currencyCode": "EUR"
            },
            "giftable": true
          }
        ]
      },
      "accessInfo": {
        "country": "ES",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true
        },
        "pdf": {
          "isAvailable": true
        },
        "webReaderLink": "http://books.google.es/books/reader?id=aEvZDQAAQBAJ&hl=&printsec=frontcover&output=reader&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "You have now installed \u003cb\u003eDocker\u003c/b\u003e onto your system. Remember that the command \u003cbr\u003e\nhas been renamed \u003cb\u003edocker\u003c/b\u003e.io, so you will have to run all \u003cb\u003eDocker\u003c/b\u003e commands with \u003cbr\u003e\n\u003cb\u003edocker\u003c/b\u003e.io instead of \u003cb\u003edocker\u003c/b\u003e. However, for your convenience, you can create a soft\u003cbr\u003e\n&nbsp;..."
      }
    },
    {
      "kind": "books#volume",
      "id": "Dm1LDAAAQBAJ",
      "etag": "Xk3CaGDrAQU",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/Dm1LDAAAQBAJ",
      "volumeInfo": {
        "title": "Learning Docker Networking",
        "authors": [
          "Rajdeep Dua",
          "Vaibhav Kohli",
          "Santosh Kumar Konduri"
        ],
        "publisher": "Packt Publishing Ltd",
        "publishedDate": "2016-02-23",
        "description": "Become a proficient Linux administrator by learning the art of container networking with elevated efficiency using Docker About This Book Set up, configure, and monitor a virtual network of containers using a bridge network and virtual switches Master the skill of networking Docker Containers using frameworks such as Kubernetes, Docker Swarm, and Mesosphere Acquire hands-on experience through practical examples of Docker networking spanning multiple containers, over multiple hosts, clubbed with various frameworks Who This Book Is For If you are a Linux administrator who wants to learn networking using Docker to ensure the efficient administration of core elements and applications, then this book is for you. Basic knowledge of LXC/Docker is assumed. What You Will Learn Get to know the basics of networking and see how Docker networking works Expose the strengths and weaknesses of the current Docker network implementation and third party landscape Understand Docker networking spanning multiple containers over multiple hosts through practical examples Observe the pitfalls of Docker networking and how to overcome them Learn how Docker networking works for Docker Swarm and Kubernetes Configure Networking using Docker's container network model (CNM) Explore OpenvSwitch to connect contain In Detail Docker is a Linux container implementation that enables the creation of light weight portable development and production environments. These environments can be updated incrementally. Docker achieves this by leveraging containment principles like cgroups and Linux namespaces along with Overlay filesystem based portable images. Docker provides the networking primitives that allow administrators to specify how different containers network with each application and connect each of its components, then distribute them across a large number of servers and ensure coordination between them irrespective of the host or VM they are running in. This book will show you how to create, deploy, and manage a virtual network for connecting containers spanning single or multiple hosts. Style and approach This step-by-step guide covers the fundamentals relating to typical applications with a practical approach. There is a focus on providing the practical skills required to develop applications, with a summary of the key concepts where necessary.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781785288319"
          },
          {
            "type": "ISBN_10",
            "identifier": "1785288318"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 176,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "1.1.1.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=Dm1LDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=Dm1LDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.es/books?id=Dm1LDAAAQBAJ&pg=PA53&dq=%22docker%22+subject:Computers&hl=&cd=23&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=Dm1LDAAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://market.android.com/details?id=book-Dm1LDAAAQBAJ"
      },
      "saleInfo": {
        "country": "ES",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 35.08,
          "currencyCode": "EUR"
        },
        "retailPrice": {
          "amount": 33.33,
          "currencyCode": "EUR"
        },
        "buyLink": "https://play.google.com/store/books/details?id=Dm1LDAAAQBAJ&rdid=book-Dm1LDAAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 3.508E7,
              "currencyCode": "EUR"
            },
            "retailPrice": {
              "amountInMicros": 3.333E7,
              "currencyCode": "EUR"
            },
            "giftable": true
          }
        ]
      },
      "accessInfo": {
        "country": "ES",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true
        },
        "pdf": {
          "isAvailable": true
        },
        "webReaderLink": "http://books.google.es/books/reader?id=Dm1LDAAAQBAJ&hl=&printsec=frontcover&output=reader&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "In this chapter, you will learn how \u003cb\u003eDocker\u003c/b\u003e containers are networked when using \u003cbr\u003e\nframeworks like Kubernetes, \u003cb\u003eDocker\u003c/b\u003e Swarm, and Mesosphere. We will cover the \u003cbr\u003e\nfollowing topics: • \u003cb\u003eDocker\u003c/b\u003e Swarm • Kubernetes ° Networked containers in a&nbsp;..."
      }
    },
    {
      "kind": "books#volume",
      "id": "IthcDAAAQBAJ",
      "etag": "pKyZyctiwkA",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/IthcDAAAQBAJ",
      "volumeInfo": {
        "title": "Microservices with Docker on Microsoft Azure (includes Content Update Program)",
        "authors": [
          "Boris Scholl",
          "Trent Swanson",
          "Daniel Fernandez"
        ],
        "publisher": "Addison-Wesley Professional",
        "publishedDate": "2016-06-24",
        "description": "Microservices and Docker on Microsoft Azure Unleashed is for anyone who wants to learn how to build microservices-based applications on Azure. Readers can expect to come away with a solid understanding of both the benefits and challenges of microservices based applications. Readers will gain knowledge that can then be applied to designing microservices-based applications on Azure from the ground up, or to deconstruct an existing monolithic application into microservices over time. The authors, all subject matter experts, participated in the design and implementation of many of these features, as well as working with many internal Microsoft product development teams, such as Azure DB, Skype, and Cortana- groups which have been successfully using microservices architectures for years. They have invaluable experience and perspective when it comes to the considerations and challenges a developer has to consider for designing and building microservices-based applications. Readers can expect to learn: The difference between microservices-based applications and traditional monolithic applications, and the pros and cons for each approach About Docker containers in the context of microservices architectures, about basic Docker operations, and about how to create Docker hosts on Azure Best practices for setting up development and dev-ops environments for microservices-based applications Cluster and container orchestration capabilities on Azure Scenarios for monitoring containerized microservices applications and monitoring tools available on Azure How Azure Service Fabric enables developers to develop microservices-based applications An extensive sample application demonstrating the microservices concepts discussed throughout the book is included.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9780134218618"
          },
          {
            "type": "ISBN_10",
            "identifier": "0134218612"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 320,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "1.1.1.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=IthcDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=IthcDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.es/books?id=IthcDAAAQBAJ&pg=PT72&dq=%22docker%22+subject:Computers&hl=&cd=24&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=IthcDAAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://market.android.com/details?id=book-IthcDAAAQBAJ"
      },
      "saleInfo": {
        "country": "ES",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 37.5,
          "currencyCode": "EUR"
        },
        "retailPrice": {
          "amount": 35.62,
          "currencyCode": "EUR"
        },
        "buyLink": "https://play.google.com/store/books/details?id=IthcDAAAQBAJ&rdid=book-IthcDAAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 3.75E7,
              "currencyCode": "EUR"
            },
            "retailPrice": {
              "amountInMicros": 3.562E7,
              "currencyCode": "EUR"
            },
            "giftable": true
          }
        ]
      },
      "accessInfo": {
        "country": "ES",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
        "epub": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.es/books/download/Microservices_with_Docker_on_Microsoft_A-sample-epub.acsm?id=IthcDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "pdf": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.es/books/download/Microservices_with_Docker_on_Microsoft_A-sample-pdf.acsm?id=IthcDAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://books.google.es/books/reader?id=IthcDAAAQBAJ&hl=&printsec=frontcover&output=reader&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "The \u003cb\u003eDocker\u003c/b\u003e web site (https://www.\u003cb\u003edocker\u003c/b\u003e.com/) provides a very good overview of \u003cbr\u003e\nthe \u003cb\u003eDocker\u003c/b\u003e architecture and how it works, in case you want to gain a deeper \u003cbr\u003e\nunderstanding of \u003cb\u003eDocker\u003c/b\u003e internals. For the purpose of this book, we do not need \u003cbr\u003e\nto&nbsp;..."
      }
    },
    {
      "kind": "books#volume",
      "id": "rJUFDAAAQBAJ",
      "etag": "wyAL8Q6lDNI",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/rJUFDAAAQBAJ",
      "volumeInfo": {
        "title": "Kubernetes Microservices with Docker",
        "authors": [
          "Deepak Vohra"
        ],
        "publisher": "Apress",
        "publishedDate": "2016-04-16",
        "description": "Start using Kubernetes in complex big data and enterprise applications, including Docker containers. Starting with installing Kubernetes on a single node, the book introduces Kubernetes with a simple Hello example and discusses using environment variables in Kubernetes. Next, Kubernetes Microservices with Docker discusses using Kubernetes with all major groups of technologies such as relational databases, NoSQL databases, and in the Apache Hadoop ecosystem. The book concludes with using multi container pods and installing Kubernetes on a multi node cluster. What You Will Learn Install Kubernetes on a single node Set environment variables Create multi-container pods using Docker Use volumes Use Kubernetes with the Apache Hadoop ecosystem, NoSQL databases, and RDBMSs Install Kubernetes on a multi-node cluster Who This Book Is For Application developers including Apache Hadoop developers, database developers and NoSQL developers.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781484219072"
          },
          {
            "type": "ISBN_10",
            "identifier": "1484219074"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 432,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "2.2.2.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=rJUFDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=rJUFDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.es/books?id=rJUFDAAAQBAJ&printsec=frontcover&dq=%22docker%22+subject:Computers&hl=&cd=25&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=rJUFDAAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://market.android.com/details?id=book-rJUFDAAAQBAJ"
      },
      "saleInfo": {
        "country": "ES",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 48.39,
          "currencyCode": "EUR"
        },
        "retailPrice": {
          "amount": 45.97,
          "currencyCode": "EUR"
        },
        "buyLink": "https://play.google.com/store/books/details?id=rJUFDAAAQBAJ&rdid=book-rJUFDAAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 4.839E7,
              "currencyCode": "EUR"
            },
            "retailPrice": {
              "amountInMicros": 4.597E7,
              "currencyCode": "EUR"
            },
            "giftable": true
          }
        ]
      },
      "accessInfo": {
        "country": "ES",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.es/books/download/Kubernetes_Microservices_with_Docker-sample-epub.acsm?id=rJUFDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "pdf": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.es/books/download/Kubernetes_Microservices_with_Docker-sample-pdf.acsm?id=rJUFDAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://books.google.es/books/reader?id=rJUFDAAAQBAJ&hl=&printsec=frontcover&output=reader&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "The book is about Kubernetes, a container cluster manager. The book discusses all aspects of using Kubernetes in applications."
      }
    },
    {
      "kind": "books#volume",
      "id": "Ngz_DQAAQBAJ",
      "etag": "No+Z/MUrKGE",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/Ngz_DQAAQBAJ",
      "volumeInfo": {
        "title": "Kubernetes Management Design Patterns",
        "subtitle": "With Docker, CoreOS Linux, and Other Platforms",
        "authors": [
          "Deepak Vohra"
        ],
        "publisher": "Apress",
        "publishedDate": "2017-01-20",
        "description": "Take container cluster management to the next level; learn how to administer and configure Kubernetes on CoreOS; and apply suitable management design patterns such as Configmaps, Autoscaling, elastic resource usage, and high availability. Some of the other features discussed are logging, scheduling, rolling updates, volumes, service types, and multiple cloud provider zones. The atomic unit of modular container service in Kubernetes is a Pod, which is a group of containers with a common filesystem and networking. The Kubernetes Pod abstraction enables design patterns for containerized applications similar to object-oriented design patterns. Containers provide some of the same benefits as software objects such as modularity or packaging, abstraction, and reuse. CoreOS Linux is used in the majority of the chapters and other platforms discussed are CentOS with OpenShift, Debian 8 (jessie) on AWS, and Debian 7 for Google Container Engine. CoreOS is the main focus becayse Docker is pre-installed on CoreOS out-of-the-box. CoreOS: Supports most cloud providers (including Amazon AWS EC2 and Google Cloud Platform) and virtualization platforms (such as VMWare and VirtualBox) Provides Cloud-Config for declaratively configuring for OS items such as network configuration (flannel), storage (etcd), and user accounts Provides a production-level infrastructure for containerized applications including automation, security, and scalability Leads the drive for container industry standards and founded appc Provides the most advanced container registry, Quay Docker was made available as open source in March 2013 and has become the most commonly used containerization platform. Kubernetes was open-sourced in June 2014 and has become the most widely used container cluster manager. The first stable version of CoreOS Linux was made available in July 2014 and since has become one of the most commonly used operating system for containers. What You'll Learn Use Kubernetes with Docker Create a Kubernetes cluster on CoreOS on AWS Apply cluster management design patterns Use multiple cloud provider zones Work with Kubernetes and tools like Ansible Discover the Kubernetes-based PaaS platform OpenShift Create a high availability website Build a high availability Kubernetes master cluster Use volumes, configmaps, services, autoscaling, and rolling updates Manage compute resources Configure logging and scheduling Who This Book Is For Linux admins, CoreOS admins, application developers, and container as a service (CAAS) developers. Some pre-requisite knowledge of Linux and Docker is required. Introductory knowledge of Kubernetes is required such as creating a cluster, creating a Pod, creating a service, and creating and scaling a replication controller. For introductory Docker and Kubernetes information, refer to Pro Docker (Apress) and Kubernetes Microservices with Docker (Apress). Some pre-requisite knowledge about using Amazon Web Services (AWS) EC2, CloudFormation, and VPC is also required.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781484225981"
          },
          {
            "type": "ISBN_10",
            "identifier": "1484225988"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 399,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "1.1.1.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=Ngz_DQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=Ngz_DQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.es/books?id=Ngz_DQAAQBAJ&printsec=frontcover&dq=%22docker%22+subject:Computers&hl=&cd=26&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=Ngz_DQAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://market.android.com/details?id=book-Ngz_DQAAQBAJ"
      },
      "saleInfo": {
        "country": "ES",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 42.34,
          "currencyCode": "EUR"
        },
        "retailPrice": {
          "amount": 40.22,
          "currencyCode": "EUR"
        },
        "buyLink": "https://play.google.com/store/books/details?id=Ngz_DQAAQBAJ&rdid=book-Ngz_DQAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 4.234E7,
              "currencyCode": "EUR"
            },
            "retailPrice": {
              "amountInMicros": 4.022E7,
              "currencyCode": "EUR"
            },
            "giftable": true
          }
        ]
      },
      "accessInfo": {
        "country": "ES",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.es/books/download/Kubernetes_Management_Design_Patterns-sample-epub.acsm?id=Ngz_DQAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "pdf": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.es/books/download/Kubernetes_Management_Design_Patterns-sample-pdf.acsm?id=Ngz_DQAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://books.google.es/books/reader?id=Ngz_DQAAQBAJ&hl=&printsec=frontcover&output=reader&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "What You&#39;ll Learn Use Kubernetes with Docker Create a Kubernetes cluster on CoreOS on AWS Apply cluster management design patterns Use multiple cloud provider zones Work with Kubernetes and tools like Ansible Discover the Kubernetes-based ..."
      }
    },
    {
      "kind": "books#volume",
      "id": "UzDWBgAAQBAJ",
      "etag": "YOhE1R8UxR4",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/UzDWBgAAQBAJ",
      "volumeInfo": {
        "title": "Vagrant Virtual Development Environment Cookbook",
        "authors": [
          "Chad Thompson"
        ],
        "publisher": "Packt Publishing Ltd",
        "publishedDate": "2015-02-26",
        "description": "If you are a software developer or administrator who wishes to create simple, reusable environments using Vagrant, this book is the perfect choice for you. Whether you are a system administrator with extensive experience in virtualization or a developer wishing to create development scripts for cloud deployment, you will find easy-to-follow recipes and techniques in this book that will allow you to create robust and reproducible virtual environments.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781784391089"
          },
          {
            "type": "ISBN_10",
            "identifier": "1784391085"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 250,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "2.2.2.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=UzDWBgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=UzDWBgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.es/books?id=UzDWBgAAQBAJ&pg=PA218&dq=%22docker%22+subject:Computers&hl=&cd=27&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=UzDWBgAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://market.android.com/details?id=book-UzDWBgAAQBAJ"
      },
      "saleInfo": {
        "country": "ES",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 26.61,
          "currencyCode": "EUR"
        },
        "retailPrice": {
          "amount": 25.28,
          "currencyCode": "EUR"
        },
        "buyLink": "https://play.google.com/store/books/details?id=UzDWBgAAQBAJ&rdid=book-UzDWBgAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 2.661E7,
              "currencyCode": "EUR"
            },
            "retailPrice": {
              "amountInMicros": 2.528E7,
              "currencyCode": "EUR"
            },
            "giftable": true
          }
        ]
      },
      "accessInfo": {
        "country": "ES",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true
        },
        "pdf": {
          "isAvailable": true
        },
        "webReaderLink": "http://books.google.es/books/reader?id=UzDWBgAAQBAJ&hl=&printsec=frontcover&output=reader&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "An open source project was started by dotCloud (a cloud hosting company) to \u003cbr\u003e\nhelp manage the complexity of dealing with containers into simple build and \u003cbr\u003e\ndeployment processes. This project was named \u003cb\u003eDocker\u003c/b\u003e and has now grown to \u003cbr\u003e\nbecome&nbsp;..."
      }
    },
    {
      "kind": "books#volume",
      "id": "LiJ-BwAAQBAJ",
      "etag": "2WeOiLHBRe4",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/LiJ-BwAAQBAJ",
      "volumeInfo": {
        "title": "DevOps for VMware Administrators",
        "authors": [
          "Trevor A. Roberts Jr.",
          "Josh Atwell",
          "Egle Sigler",
          "Yvo van Doorn"
        ],
        "publisher": "VMWare Press",
        "publishedDate": "2015-03-19",
        "description": "DevOps for VMware® Administrators is the first book focused on using DevOps tools and practices with VMware technologies. The authors introduce high-value tools from third parties and VMware itself, and guide you through using them to improve the performance of all your virtualized systems and applications. You’ll walk through automating and optimizing configuration management, provisioning, log management, continuous integration, and more. The authors also offer step-by-step coverage of deploying and managing applications at scale with Docker containers and Google Kubernetes. They conclude with an up-to-the-minute discussion of VMware’s newest DevOps initiatives, including VMware vRealize Automation and VMware vRealize Code Stream. Coverage includes • Understanding the challenges that DevOps tools and practices can help VMware administrators to solve • Using Vagrant to quickly deploy Dev and Test environments that match production system specifications • Writing Chef “recipes” that streamline server configuration and maintenance • Simplifying Unix/Linux configuration management and orchestration with Ansible • Implementing Docker containers for faster and easier application management • Automating provisioning across the full lifecycle with Razor • Integrating Microsoft PowerShell Desired State Configuration (DSC) and VMware PowerCLI to automate key Windows Server and vSphere VM admin tasks • Using Puppet to automate infrastructure provisioning, configuration, orchestration, and reporting • Supercharging log management with ELK (Elasticsearch, Logstash, Kibana) • Supporting DevOps source code management with Git and continuous integration practices with Jenkins • Achieving continuous integration, delivery, and deployment with VMware’s vRealize Code Stream",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9780133795264"
          },
          {
            "type": "ISBN_10",
            "identifier": "0133795268"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 384,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "2.3.2.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=LiJ-BwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=LiJ-BwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.es/books?id=LiJ-BwAAQBAJ&pg=PA204&dq=%22docker%22+subject:Computers&hl=&cd=28&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=LiJ-BwAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://market.android.com/details?id=book-LiJ-BwAAQBAJ"
      },
      "saleInfo": {
        "country": "ES",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 36.29,
          "currencyCode": "EUR"
        },
        "retailPrice": {
          "amount": 34.48,
          "currencyCode": "EUR"
        },
        "buyLink": "https://play.google.com/store/books/details?id=LiJ-BwAAQBAJ&rdid=book-LiJ-BwAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 3.629E7,
              "currencyCode": "EUR"
            },
            "retailPrice": {
              "amountInMicros": 3.448E7,
              "currencyCode": "EUR"
            },
            "giftable": true
          }
        ]
      },
      "accessInfo": {
        "country": "ES",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://books.google.es/books/reader?id=LiJ-BwAAQBAJ&hl=&printsec=frontcover&output=reader&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "The most common method for installing \u003cb\u003eDocker\u003c/b\u003e is to use your operating system&#39;s \u003cbr\u003e\npackage manager. Another option is to use a Linux distribution, such as CoreOS, \u003cbr\u003e\nwhich includes \u003cb\u003eDocker\u003c/b\u003e in its base build. Alternatively, you could use&nbsp;..."
      }
    },
    {
      "kind": "books#volume",
      "id": "_SPHBgAAQBAJ",
      "etag": "Ls2eInM26uM",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/_SPHBgAAQBAJ",
      "volumeInfo": {
        "title": "Puppet Cookbook - Third Edition",
        "authors": [
          "Thomas Uphill",
          "John Arundel"
        ],
        "publisher": "Packt Publishing Ltd",
        "publishedDate": "2015-02-20",
        "description": "This book is for anyone who builds and administers servers, especially in a web operations context. It requires some experience of Linux systems administration, including familiarity with the command line, file system, and text editing. No programming experience is required.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781784393731"
          },
          {
            "type": "ISBN_10",
            "identifier": "1784393738"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 336,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "2.2.2.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=_SPHBgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=_SPHBgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.es/books?id=_SPHBgAAQBAJ&pg=PA248&dq=%22docker%22+subject:Computers&hl=&cd=29&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=_SPHBgAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://market.android.com/details?id=book-_SPHBgAAQBAJ"
      },
      "saleInfo": {
        "country": "ES",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 26.61,
          "currencyCode": "EUR"
        },
        "retailPrice": {
          "amount": 25.28,
          "currencyCode": "EUR"
        },
        "buyLink": "https://play.google.com/store/books/details?id=_SPHBgAAQBAJ&rdid=book-_SPHBgAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 2.661E7,
              "currencyCode": "EUR"
            },
            "retailPrice": {
              "amountInMicros": 2.528E7,
              "currencyCode": "EUR"
            },
            "giftable": true
          }
        ]
      },
      "accessInfo": {
        "country": "ES",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true
        },
        "pdf": {
          "isAvailable": true
        },
        "webReaderLink": "http://books.google.es/books/reader?id=_SPHBgAAQBAJ&hl=&printsec=frontcover&output=reader&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Notice: /Stage[main]/Main/Node[shipyard]/\u003cb\u003eDocker\u003c/b\u003e::Run[cookbook]/ File[/etc/init.d/\u003cbr\u003e\n\u003cb\u003edocker\u003c/b\u003e-cookbook]/ensure: created Info: /Stage[main]/Main/Node[shipyard]/\u003cb\u003eDocker\u003c/b\u003e\u003cbr\u003e\n::Run[cookbook]/ File[/etc/init.d/\u003cb\u003edocker\u003c/b\u003e-cookbook]: Scheduling refresh of&nbsp;..."
      }
    },
    {
      "kind": "books#volume",
      "id": "F2_DCwAAQBAJ",
      "etag": "IbqJjXGEaN0",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/F2_DCwAAQBAJ",
      "volumeInfo": {
        "title": "Aprendendo Docker",
        "subtitle": "Do básico à orquestração de contêineres",
        "authors": [
          "Wellington Figueira da Silva"
        ],
        "publisher": "Novatec Editora",
        "publishedDate": "2016-03-18",
        "description": "Contêineres Linux não são uma ferramenta nova, mas o Docker está revolucionando a maneira como preparamos ambientes para trabalhar. Com o mote \"Build, ship, and run any app, anywhere\" – construir, transportar e executar qualquer aplicação em qualquer lugar –, o Docker oferece ferramentas que permitem criar, gerenciar, escalar e compartilhar sistemas baseados em hosts Linux – e o melhor: economizando recursos de máquina se comparado à virtualização tradicional baseada em hypervisors. Aprendendo Docker possibilitará não apenas entender como funcionam os contêineres Linux, mas também como tirar melhor proveito de todo o poder do Docker e suas ferramentas. Começando pelo básico, você não ficará perdido. Tópicos sobre como criar, iniciar e gravar alterações e automatizar construção de contêineres lhe darão subsídios para decidir como montar os ambientes de suas aplicações. Os tópicos sobre orquestração de contêineres proporcionarão o conhecimento sobre as ferramentas Compose, Machine e Swarm e possibilitarão planejar a utilização do Docker em produção. Alguns dos conteúdos abordados: • Visão geral do Docker, contêineres e diferenças para a virtualização tradicional com hypervisors. • Diferentes tipos de instalação. • Comandos e fluxo de trabalho para gerenciamento de contêineres e imagens. • Comunicação entre contêineres, volumes, redes, portas e rotas. • Escalabilidade horizontal facilitada. • Contêineres que rodam em hosts diferentes, inclusive em provedores de serviços de cloud.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9788575224861"
          },
          {
            "type": "ISBN_10",
            "identifier": "8575224867"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "pageCount": 240,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=F2_DCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=F2_DCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "pt",
        "previewLink": "http://books.google.es/books?id=F2_DCwAAQBAJ&printsec=frontcover&dq=%22docker%22+subject:Computers&hl=&cd=30&source=gbs_api",
        "infoLink": "http://books.google.es/books?id=F2_DCwAAQBAJ&dq=%22docker%22+subject:Computers&hl=&source=gbs_api",
        "canonicalVolumeLink": "http://books.google.es/books/about/Aprendendo_Docker.html?hl=&id=F2_DCwAAQBAJ"
      },
      "saleInfo": {
        "country": "ES",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "ES",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://books.google.es/books/reader?id=F2_DCwAAQBAJ&hl=&printsec=frontcover&output=reader&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Aprendendo Docker possibilitará não apenas entender como funcionam os contêineres Linux, mas também como tirar melhor proveito de todo o poder do Docker e suas ferramentas. Começando pelo básico, você não ficará perdido."
      }
    },
    {
      "kind": "books#volume",
      "id": "U8L8DAAAQBAJ",
      "etag": "tcaVsNV1IYA",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/U8L8DAAAQBAJ",
      "volumeInfo": {
        "title": "Docker",
        "subtitle": "Pratique des architectures à base de conteneurs",
        "authors": [
          "Pierre-Yves Cloux",
          "Thomas Garlot",
          "Johann Kohler"
        ],
        "publisher": "Dunod",
        "publishedDate": "2016-09-07",
        "description": "Docker est une technologie open source qui a pour but de faciliter le déploiement d'une application ainsi que la gestion de l'infrastructure sous-jacente. L'application est embarquée dans un conteneur virtuel qui pourra s'exécuter sur n'importe quel serveur (Linux ou Windows). Le but de cet ouvrage est d'offrir une approche pratique à Docker et à l'écosystème technologique qui l'accompagne. Autour du Docker Engine qui exécute les conteneurs il existe plusieurs outils complémentaires pour conditionner, assembler et orchestrer les applications (CoreOS, Apache Mesos, RKT, Kubernetes...).",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9782100753512"
          },
          {
            "type": "ISBN_10",
            "identifier": "2100753517"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 320,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "1.1.1.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=U8L8DAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=U8L8DAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "fr",
        "previewLink": "http://books.google.es/books?id=U8L8DAAAQBAJ&printsec=frontcover&dq=%22docker%22+subject:Computers&hl=&cd=31&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=U8L8DAAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://market.android.com/details?id=book-U8L8DAAAQBAJ"
      },
      "saleInfo": {
        "country": "ES",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 21.99,
          "currencyCode": "EUR"
        },
        "retailPrice": {
          "amount": 21.99,
          "currencyCode": "EUR"
        },
        "buyLink": "https://play.google.com/store/books/details?id=U8L8DAAAQBAJ&rdid=book-U8L8DAAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 2.199E7,
              "currencyCode": "EUR"
            },
            "retailPrice": {
              "amountInMicros": 2.199E7,
              "currencyCode": "EUR"
            },
            "giftable": true
          }
        ]
      },
      "accessInfo": {
        "country": "ES",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.es/books/download/Docker-sample-epub.acsm?id=U8L8DAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "pdf": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.es/books/download/Docker-sample-pdf.acsm?id=U8L8DAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://books.google.es/books/reader?id=U8L8DAAAQBAJ&hl=&printsec=frontcover&output=reader&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Docker est une technologie open source qui a pour but de faciliter le déploiement d&#39;une application ainsi que la gestion de l&#39;infrastructure sous-jacente."
      }
    },
    {
      "kind": "books#volume",
      "id": "NEToCgAAQBAJ",
      "etag": "6nJCzaOyFow",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/NEToCgAAQBAJ",
      "volumeInfo": {
        "title": "プログラマのためのDocker教科書 インフラの基礎知識&コードによる環境構築の自動化",
        "authors": [
          "WINGSプロジェクト 阿佐志保"
        ],
        "publisher": "翔泳社",
        "publishedDate": "2015-11-19",
        "description": "従来、システム開発のプログラマは、顧客の業務要件を理解し、要件に応じた設計を行ない、プログラミング言語を使ってシステムを実装し、仕様通りの機能を持つかをテストすることが主なミッションでした。今日ではそれに加えて、構成管理ツールを使って、開発したシステムの実行環境のプロビジョニングなどを行なうケースも増え、ネットワーク設計やOSの導入、システム/データベースサーバなどのミドルウェアの設定やセキュリティといったインフラ構築の知識が求められています。 本書は、Linuxのコンテナ仮想化ツールであるDockerを使って、コードでインフラ環境を構築するための入門書です。開発環境や実行環境などインフラ構築「自動化」の経験がない開発者を対象に、おさえておきたいシステム基盤&インフラの基礎知識に加えて、Dockerによるインフラ構築と管理の方法をやさしく解説します。理解しにくいネットワークや仮想技術などのインフラの基礎概念を図解しながら、開発/実行環境を実際に構築することで、構成管理ツールを使ったインフラ構築の流れを解説していきます。 ・おさえておきたいシステム/インフラの知識 ・コンテナ仮想化技術とDocker ・Dockerのインストールと基本コマンド ・Dockerfileを使ったコードによるサーバ構築 ・Dockerイメージの共有─Docker Registry ・複数コンテナの一元管理─Docker Compose ・マルチホスト環境でのDocker運用─Docker Machine、Docker Swarm ・クラウドでのDocker運用 ※本電子書籍は同名出版物を底本として作成しました。記載内容は印刷出版当時のものです。 ※印刷出版再現のため電子書籍としては不要な情報を含んでいる場合があります。 ※印刷出版とは異なる表記・表現の場合があります。予めご了承ください。 ※プレビューにてお手持ちの電子端末での表示状態をご確認の上、商品をお買い求めください。 (翔泳社)",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9784798144627"
          },
          {
            "type": "ISBN_10",
            "identifier": "4798144622"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "pageCount": 312,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "1.271.0.0.preview.1",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=NEToCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=NEToCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "ja",
        "previewLink": "http://books.google.es/books?id=NEToCgAAQBAJ&printsec=frontcover&dq=%22docker%22+subject:Computers&hl=&cd=32&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=NEToCgAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://market.android.com/details?id=book-NEToCgAAQBAJ"
      },
      "saleInfo": {
        "country": "ES",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 30.02,
          "currencyCode": "EUR"
        },
        "retailPrice": {
          "amount": 28.52,
          "currencyCode": "EUR"
        },
        "buyLink": "https://play.google.com/store/books/details?id=NEToCgAAQBAJ&rdid=book-NEToCgAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 3.002E7,
              "currencyCode": "EUR"
            },
            "retailPrice": {
              "amountInMicros": 2.852E7,
              "currencyCode": "EUR"
            },
            "giftable": true
          }
        ]
      },
      "accessInfo": {
        "country": "ES",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.es/books/download/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9E%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AEDocker%E6%95%99%E7%A7%91-sample-pdf.acsm?id=NEToCgAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://books.google.es/books/reader?id=NEToCgAAQBAJ&hl=&printsec=frontcover&output=reader&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "従来、システム開発のプログラマは、顧客の業務要件を理解し、要件に応じた設計を行ない、プログラミング言語を使ってシステムを実装し、仕様通りの機能を持つかをテストす ..."
      }
    },
    {
      "kind": "books#volume",
      "id": "6xnkDAAAQBAJ",
      "etag": "ZIWEP2k5XLo",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/6xnkDAAAQBAJ",
      "volumeInfo": {
        "title": "Descomplicando o Docker",
        "subtitle": "",
        "authors": [
          "Jeferson Fernando Noronha Vitalino",
          "Marcus André Nunes Castro"
        ],
        "publisher": "Brasport",
        "publishedDate": "2016-08-17",
        "description": "DON’T PANIC! O assunto é bem mais fácil do que parece. :) Você se interessou por esse negócio de containers, porém ainda tem dificuldade de assimilar algum conceito? Está buscando aprender? Neste livro você irá entender na prática como utilizar containers Docker de uma forma que (realmente) esperamos que seja divertida! Haverá muitas explicações, analogias, exemplos, tudo para que você consiga dominar o Docker e a utilização de containers de forma efetiva. Então, para você que é desenvolvedor, o Docker vai proporcionar maior autonomia e flexibilidade – e principalmente a compatibilidade vai deixar tudo mais fácil para que você faça o que gosta e ainda é pago para fazer: “codar”! Se você trabalha em operações, chega de perder horas configurando um servidor de aplicação e quebrando a cabeça pensando em como escalar seu ambiente de maneira fácil, rápida e que não custe os olhos da cara.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9788574527970"
          },
          {
            "type": "ISBN_10",
            "identifier": "8574527971"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 120,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "1.1.1.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=6xnkDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=6xnkDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "pt",
        "previewLink": "http://books.google.es/books?id=6xnkDAAAQBAJ&printsec=frontcover&dq=%22docker%22+subject:Computers&hl=&cd=33&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=6xnkDAAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://market.android.com/details?id=book-6xnkDAAAQBAJ"
      },
      "saleInfo": {
        "country": "ES",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 11.36,
          "currencyCode": "EUR"
        },
        "retailPrice": {
          "amount": 10.79,
          "currencyCode": "EUR"
        },
        "buyLink": "https://play.google.com/store/books/details?id=6xnkDAAAQBAJ&rdid=book-6xnkDAAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 1.136E7,
              "currencyCode": "EUR"
            },
            "retailPrice": {
              "amountInMicros": 1.079E7,
              "currencyCode": "EUR"
            },
            "giftable": true
          }
        ]
      },
      "accessInfo": {
        "country": "ES",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.es/books/download/Descomplicando_o_Docker-sample-epub.acsm?id=6xnkDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "pdf": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.es/books/download/Descomplicando_o_Docker-sample-pdf.acsm?id=6xnkDAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://books.google.es/books/reader?id=6xnkDAAAQBAJ&hl=&printsec=frontcover&output=reader&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "DON’T PANIC!"
      }
    },
    {
      "kind": "books#volume",
      "id": "5jM_BgAAQBAJ",
      "etag": "OxVbRmW0hUI",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/5jM_BgAAQBAJ",
      "volumeInfo": {
        "title": "가장 빨리 만나는 Docker",
        "subtitle": "클라우드 플랫폼 어디서나 빠르게 배포하고 실행할 수 있는 리눅스 기반 경량화 컨테이너",
        "authors": [
          "이재홍"
        ],
        "publisher": "(주)도서출판길벗",
        "publishedDate": "2015-01-30",
        "description": "1. 한 번 빌드하면 어디서나 실행할 수 있는 애플리케이션 배포 시스템 Docker만 있으면 언제 어디서나 애플리케이션을 실행할 수 있는 안전한 런타임 환경을 구성할 수 있다. 시스템에 따라 설치, 설정, 의존성 같은 반복 작업을 하지 않아도 애플리케이션을 빠르게 배포하는 것이 가능하다. 가상 머신이 시스템간 호환성, 이동성에 제약이 있다면 Docker는 그런 제약에서 자유롭다. 아마존 웹 서비스, 구글 클라우드 플랫폼, 마이크로소프트 애저 같은 플랫폼을 자유롭게 이동하고 배포할 수 있다. 2. 가상 머신의 부하 없이 즐기는 가상 환경 하이퍼바이저가 CPU, RAM, 스토리지 같은 하드웨어를 전부 추상화했다면, Docker는 운영체제 커널만 추상화했다. Docker는 운영체제를 공유하면서 애플리케이션에 필요한 가상화와 격리를 제공하기 때문에 가볍고 빠르다. 이미지 생성, 스냅샷 생성, 초기화도 Docker라면 빠르게 처리할 수 있다. 3. 개발자와 운영자를 위한 진정한 배포 시스템 런타임 환경을 한 번 만들고, 패키징만 하면 어떤 머신에서나 반복해서 실행할 수 있다. 가상 머신처럼 호스트와 격리된 환경에서 실행된다. 개발자는 코드 품질에 더 많은 시간을 집중할 수 있고, 운영자는 개별 서버를 일일이 관리하는 대신 배포 이미지 관리에 집중함으로써 시스템의 일관성을 높일 수 있다. Docker 기반 배포를 구현하면 개발, 테스트, 서비스 단계의 시스템 불일치나 호환성 문제를 줄이거나 제거할 수 있다.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9788966189113"
          },
          {
            "type": "ISBN_10",
            "identifier": "8966189113"
          }
        ],
        "readingModes": {
          "text": true,
          "image": false
        },
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "1.4.5.0.preview.2",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=5jM_BgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=5jM_BgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "ko",
        "previewLink": "http://books.google.es/books?id=5jM_BgAAQBAJ&printsec=frontcover&dq=%22docker%22+subject:Computers&hl=&cd=34&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=5jM_BgAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://market.android.com/details?id=book-5jM_BgAAQBAJ"
      },
      "saleInfo": {
        "country": "ES",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 16.8,
          "currencyCode": "EUR"
        },
        "retailPrice": {
          "amount": 15.96,
          "currencyCode": "EUR"
        },
        "buyLink": "https://play.google.com/store/books/details?id=5jM_BgAAQBAJ&rdid=book-5jM_BgAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 1.68E7,
              "currencyCode": "EUR"
            },
            "retailPrice": {
              "amountInMicros": 1.596E7,
              "currencyCode": "EUR"
            },
            "giftable": true
          }
        ]
      },
      "accessInfo": {
        "country": "ES",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.es/books/download/%EA%B0%80%EC%9E%A5_%EB%B9%A8%EB%A6%AC_%EB%A7%8C%EB%82%98%EB%8A%94_Docker-sample-epub.acsm?id=5jM_BgAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://books.google.es/books/reader?id=5jM_BgAAQBAJ&hl=&printsec=frontcover&output=reader&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "1. 한 번 빌드하면 어디서나 실행할 수 있는 애플리케이션 배포 시스템 Docker만 있으면 언제 어디서나 애플리케이션을 실행할 수 있는 안전한 런타임 환경을 구성할 수 있다. ..."
      }
    },
    {
      "kind": "books#volume",
      "id": "wfAhDAAAQBAJ",
      "etag": "iRb9AyHNjUc",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/wfAhDAAAQBAJ",
      "volumeInfo": {
        "title": "Usando Docker",
        "subtitle": "Desenvolvendo e implantando software com contêineres",
        "authors": [
          "Adrian Mouat"
        ],
        "publisher": "Novatec Editora",
        "publishedDate": "2016-05-09",
        "description": "Os contêineres do Docker oferecem métodos simples, rápidos e robustos para o desenvolvimento, a distribuição e a execução de softwares, principalmente em ambientes dinâmicos e distribuídos. Com este guia prático, você aprenderá por que os contêineres são tão importantes, o que a adoção do Docker oferece e como torná-lo parte de seu processo de desenvolvimento. Ideal para desenvolvedores, engenheiros de operações e administradores de sistemas – especialmente os inclinados a adotar uma abordagem DevOps – Usando Docker parte dos aspectos básicos e vai até a execução de vários contêineres em um sistema multi-host com rede e agendamento. O objetivo do livro é guiá-lo pelas etapas necessárias para desenvolver, testar e implantar um aplicativo web com o Docker. ■■ Comece a usar o Docker construindo e implantando um aplicativo web simples. ■■ Use técnicas de Implantação Contínua para levar seu aplicativo para o ambiente de produção muitas vezes ao dia. ■■ Conheça várias opções e técnicas para o registro e o monitoramento de múltiplos contêineres. ■■ Examine a descoberta de rede e de serviços: como os contêineres encontrarão uns aos outros e como conectá-los? ■■ Orquestre e agrupe os contêineres para cuidar do balanceamento de carga, escalonamento, failover e agendamento. ■■ Proteja seu sistema seguindo os princípios da defesa em profundidade e do privilégio mínimo. ■■ Explore os contêineres para construir arquiteturas de microsserviços.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9788575224922"
          },
          {
            "type": "ISBN_10",
            "identifier": "8575224921"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "pageCount": 384,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=wfAhDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=wfAhDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "pt",
        "previewLink": "http://books.google.es/books?id=wfAhDAAAQBAJ&printsec=frontcover&dq=%22docker%22+subject:Computers&hl=&cd=35&source=gbs_api",
        "infoLink": "http://books.google.es/books?id=wfAhDAAAQBAJ&dq=%22docker%22+subject:Computers&hl=&source=gbs_api",
        "canonicalVolumeLink": "http://books.google.es/books/about/Usando_Docker.html?hl=&id=wfAhDAAAQBAJ"
      },
      "saleInfo": {
        "country": "ES",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "ES",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://books.google.es/books/reader?id=wfAhDAAAQBAJ&hl=&printsec=frontcover&output=reader&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Ideal para desenvolvedores, engenheiros de operações e administradores de sistemas – especialmente os inclinados a adotar uma abordagem DevOps – Usando Docker parte dos aspectos básicos e vai até a execução de vários contêineres ..."
      }
    },
    {
      "kind": "books#volume",
      "id": "tNBtDQAAQBAJ",
      "etag": "zaMIa0QPZfE",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/tNBtDQAAQBAJ",
      "volumeInfo": {
        "title": "Puppet for Containerization",
        "authors": [
          "Scott Coulton"
        ],
        "publisher": "Packt Publishing Ltd",
        "publishedDate": "2016-05-16",
        "description": "Learn about configuration management and gain complete control of your Docker containers using Puppet About This Book This is the first book that focuses specifically on the combination of containerization and configuration management tools as the landscape for system administration changes It demonstrates to administrators how to seamlessly integrate containerization without disrupting their entire system It provides a canny way for you to grow your tool kit and embrace new tech such as Docker while building on your existing skill set Who This Book Is For This book is designed for system administrators who are looking to explore containerization. Intermediate experience and expertise with Puppet is presumed. What You Will Learn Write Puppet modules to build Docker Create Docker Compose templates with .erb files Get to know the architecture of Docker schedulers Create a Docker network and service discovery framework Build a fully functional Docker scheduler with Puppet Make Docker production ready with Puppet In Detail This book teaches you how to take advantage of the new benefits of containerization systems such as Docker, Kubernetes, Docker Swarm, and Docker UCP, without losing the panoptical power of proper configuration management. You will learn how to integrate your containerized applications and modules with your Puppet workflow. You will also understand how to manage, monitor, and orchestrate hosts to keep deployed containers running seamlessly. With the help of this book, you can efficiently automate and document with containers, as a part of your system. The book will also cover use cases of deploying Puppet within a containerized environment. Style and approach This book uniquely focuses on the pain point of making containerization part of a bigger, established workflow of system administration. It will begin with the presumption that one has a use for Docker containers, and a background in system administration. Then, step by step, it takes you through the concepts and methods necessary to integrate this new time-saving technology into a well-managed configuration run by Puppet.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781785885389"
          },
          {
            "type": "ISBN_10",
            "identifier": "1785885383"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 222,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "1.2.2.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=tNBtDQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=tNBtDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.es/books?id=tNBtDQAAQBAJ&printsec=frontcover&dq=%22docker%22+subject:Computers&hl=&cd=36&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=tNBtDQAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://market.android.com/details?id=book-tNBtDQAAQBAJ"
      },
      "saleInfo": {
        "country": "ES",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 39.92,
          "currencyCode": "EUR"
        },
        "retailPrice": {
          "amount": 37.92,
          "currencyCode": "EUR"
        },
        "buyLink": "https://play.google.com/store/books/details?id=tNBtDQAAQBAJ&rdid=book-tNBtDQAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 3.992E7,
              "currencyCode": "EUR"
            },
            "retailPrice": {
              "amountInMicros": 3.792E7,
              "currencyCode": "EUR"
            },
            "giftable": true
          }
        ]
      },
      "accessInfo": {
        "country": "ES",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true
        },
        "pdf": {
          "isAvailable": true
        },
        "webReaderLink": "http://books.google.es/books/reader?id=tNBtDQAAQBAJ&hl=&printsec=frontcover&output=reader&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "With the help of this book, you can efficiently automate and document with containers, as a part of your system. The book will also cover use cases of deploying Puppet within a containerized environment."
      }
    },
    {
      "kind": "books#volume",
      "id": "mNkfCwAAQBAJ",
      "etag": "MIsnAMiKrh4",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/mNkfCwAAQBAJ",
      "volumeInfo": {
        "title": "Docker実践ガイド",
        "authors": [
          "古賀政純"
        ],
        "publisher": "（株）インプレス",
        "publishedDate": "2015-12-17",
        "description": "Dockerが利用される環境や背景から始め、導入前のシステム設計、Dockerの基本的な利用方法、Dockerfileによる自動化の手法、プロセッサ、ネットワーク、ストレージなどの資源管理、管理・監視ツールについて解説する。また、Dockerの周辺のシステム環境として、Atomic Host、CoreOSといったコンテナの運用OSや、より複雑な本番環境で求められる、マルチホスト環境、KubernetesやDocker Swarmによるクラスタ環境の構築についても言及する。 発行：インプレス",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9784844339625"
          },
          {
            "type": "ISBN_10",
            "identifier": "4844339621"
          }
        ],
        "readingModes": {
          "text": false,
          "image": false
        },
        "pageCount": 328,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "1.1.1.0.preview.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=mNkfCwAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=mNkfCwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "ja",
        "previewLink": "http://books.google.es/books?id=mNkfCwAAQBAJ&dq=%22docker%22+subject:Computers&hl=&cd=37&source=gbs_api",
        "infoLink": "http://books.google.es/books?id=mNkfCwAAQBAJ&dq=%22docker%22+subject:Computers&hl=&source=gbs_api",
        "canonicalVolumeLink": "http://books.google.es/books/about/Docker%E5%AE%9F%E8%B7%B5%E3%82%AC%E3%82%A4%E3%83%89.html?hl=&id=mNkfCwAAQBAJ"
      },
      "saleInfo": {
        "country": "ES",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "ES",
        "viewability": "NO_PAGES",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": true
        },
        "webReaderLink": "http://books.google.es/books/reader?id=mNkfCwAAQBAJ&hl=&printsec=frontcover&output=reader&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Dockerが利用される環境や背景から始め、導入前のシステム設計、Dockerの基本的な利用方法、Dockerfileによる自動化の手法、プロセッサ、ネットワーク、ストレージなどの資源管理 ..."
      }
    },
    {
      "kind": "books#volume",
      "id": "I8N-DAAAQBAJ",
      "etag": "pCXh25P5N5c",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/I8N-DAAAQBAJ",
      "volumeInfo": {
        "title": "Docker",
        "subtitle": "Webseiten mittels Containerarchitektur erstellen",
        "authors": [
          "Sascha Sambale"
        ],
        "publisher": "entwickler.Press",
        "publishedDate": "2016-02-03",
        "description": "Docker entwickelt sich stetig weiter und hat in der Community einen regelrechten Hype erzeugt. In diesem shortcut beschreibt Sascha Sambale, wie mittels Docker-Containern und Docker Compose eine vollständige Webseite inklusive RESTful-API und Datenbank erstellt werden kann.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9783868025767"
          },
          {
            "type": "ISBN_10",
            "identifier": "3868025766"
          }
        ],
        "readingModes": {
          "text": true,
          "image": false
        },
        "pageCount": 28,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "0.1.2.0.preview.2",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=I8N-DAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=I8N-DAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "de",
        "previewLink": "http://books.google.es/books?id=I8N-DAAAQBAJ&dq=%22docker%22+subject:Computers&hl=&cd=38&source=gbs_api",
        "infoLink": "http://books.google.es/books?id=I8N-DAAAQBAJ&dq=%22docker%22+subject:Computers&hl=&source=gbs_api",
        "canonicalVolumeLink": "http://books.google.es/books/about/Docker.html?hl=&id=I8N-DAAAQBAJ"
      },
      "saleInfo": {
        "country": "ES",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "ES",
        "viewability": "NO_PAGES",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true
        },
        "pdf": {
          "isAvailable": true
        },
        "webReaderLink": "http://books.google.es/books/reader?id=I8N-DAAAQBAJ&hl=&printsec=frontcover&output=reader&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "In diesem shortcut beschreibt Sascha Sambale, wie mittels Docker-Containern und Docker Compose eine vollständige Webseite inklusive RESTful-API und Datenbank erstellt werden kann."
      }
    },
    {
      "kind": "books#volume",
      "id": "5JjmDAAAQBAJ",
      "etag": "8NqLgwLkuIA",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/5JjmDAAAQBAJ",
      "volumeInfo": {
        "title": "Docker Praxiseinstieg",
        "subtitle": "Deployment, Testen und Debugging von Containern in Produktivumgebungen",
        "authors": [
          "Sean P. Kane",
          "Matthias Karl"
        ],
        "publisher": "MITP-Verlags GmbH & Co. KG",
        "publishedDate": "2016-08-25",
        "description": "Docker-Images und -Container verwenden Container deployen und debuggen Einsatz von Tools: Docker Swarm, Centurion, Amazon EC2 Container Services Linux-Container besitzen das Potenzial, das Deployment von Applikationen für verschiedene Umgebungen stark zu verändern. Dieses Buch weist Ihnen den Weg zu einer funktionierenden Docker-Umgebung. Die Autoren zeigen Ihnen, wie Sie Docker-Images Ihrer Anwendungen inklusive aller Abhängigkeiten erstellen, wie Sie diese testen, deployen und skalieren können, und wie Sie die Container in der Produktivumgebung pflegen und warten. Dabei kommen Themen wie die Einrichtung, das Testen und das Deployment von Docker-Anwendungen ebenso zur Sprache wie das Debugging eines laufenden Systems. Mit diesem Buch werden Sie verstehen, was Docker wirklich leistet, welche Relevanz es hat, wie Sie es zum Laufen bekommen, wie Sie damit Ihre Anwendungen deployen können und was erforderlich ist, um es in einer Produktivumgebung einzusetzen. Die Autoren dieses Buches sind in dem Unternehmen New Relic für die Sicherstellung der Stabilität der dort entwickelten Anwendungen zuständig und lassen Sie an ihren im praktischen Umgang mit Docker gesammelten Erfahrungen teilhaben. Ihre Zielsetzung lautet, Sie von ihren Erkenntnissen profitieren zu lassen und davor zu bewahren, dieselben Rückschläge hinnehmen zu müssen, die den Autoren in diesem Kontext widerfahren sind.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9783958454095"
          },
          {
            "type": "ISBN_10",
            "identifier": "3958454097"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 276,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "1.1.1.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=5JjmDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=5JjmDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "de",
        "previewLink": "http://books.google.es/books?id=5JjmDAAAQBAJ&printsec=frontcover&dq=%22docker%22+subject:Computers&hl=&cd=39&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=5JjmDAAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://market.android.com/details?id=book-5JjmDAAAQBAJ"
      },
      "saleInfo": {
        "country": "ES",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 25.99,
          "currencyCode": "EUR"
        },
        "retailPrice": {
          "amount": 24.69,
          "currencyCode": "EUR"
        },
        "buyLink": "https://play.google.com/store/books/details?id=5JjmDAAAQBAJ&rdid=book-5JjmDAAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 2.599E7,
              "currencyCode": "EUR"
            },
            "retailPrice": {
              "amountInMicros": 2.469E7,
              "currencyCode": "EUR"
            },
            "giftable": true
          }
        ]
      },
      "accessInfo": {
        "country": "ES",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.es/books/download/Docker_Praxiseinstieg-sample-epub.acsm?id=5JjmDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "pdf": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.es/books/download/Docker_Praxiseinstieg-sample-pdf.acsm?id=5JjmDAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://books.google.es/books/reader?id=5JjmDAAAQBAJ&hl=&printsec=frontcover&output=reader&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Docker-Images und -Container verwenden Container deployen und debuggen Einsatz von Tools: Docker Swarm, Centurion, Amazon EC2 Container Services Linux-Container besitzen das Potenzial, das Deployment von Applikationen für verschiedene ..."
      }
    },
    {
      "kind": "books#volume",
      "id": "SfvGDAAAQBAJ",
      "etag": "Y4J6ZNynugA",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/SfvGDAAAQBAJ",
      "volumeInfo": {
        "title": "[리얼타임] Docker로 PaaS 구성하기",
        "authors": [
          "오스카 하네"
        ],
        "publisher": "한빛미디어",
        "publishedDate": "2016-05-26",
        "description": "\u003c책소개\u003e 현장 개발자를 위한 Docker 안내서 『Docker로 PaaS 구성하기』는 Docker를 상용 환경에서 사용하는 데 필요한 설정들과 Docker를 둘러싼 생태계에 관해 이야기를 풀어나갑니다. 이 책은 하나의 서비스를 컨테이너들로 모듈화하고 각 컨테이너를 연결함으로써 하나의 거대한 플랫폼을 구성하는 방법을 배우길 원하는 사람들을 위한 책입니다. Docker에 대해 알지만, 설치해본 적이 없거나 사용해본 적이 없을지도 모릅니다. 또는 Docker를 설치했지만, 서비스를 분할하여 사용하지 않고 하나의 컨테이너에 모든 것을 담아서 사용하고 있을 수도 있습니다. 이러한 상황에서 Docker를 활용하는 방법을 찾고 있다면 이 책이 그 방향을 잡는 데 도움이 될 것입니다. 『Docker로 PaaS 구성하기』는 Docker를 설치하는 방법부터 PaaS를 구성하기까지 필요한 모든 단계를 설명하므로 PaaS를 구성하기 위해 필요한 모든 지식과 통찰력을 줄 것입니다. (이 책에서는 Amazon EC2 인스턴스에서 Docker를 사용합니다. Amazon EC2는 PaaS를 구축하기 위한 최고의 장소입니다. 또한, 이 책은 예제 코드가 포함되어 있습니다.)",
        "industryIdentifiers": [
          {
            "type": "OTHER",
            "identifier": "PKEY:00443000394"
          }
        ],
        "readingModes": {
          "text": false,
          "image": false
        },
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "0.2.0.0.preview.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=SfvGDAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=SfvGDAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "ko",
        "previewLink": "http://books.google.es/books?id=SfvGDAAAQBAJ&pg=PP1&dq=%22docker%22+subject:Computers&hl=&cd=40&source=gbs_api",
        "infoLink": "http://books.google.es/books?id=SfvGDAAAQBAJ&dq=%22docker%22+subject:Computers&hl=&source=gbs_api",
        "canonicalVolumeLink": "http://books.google.es/books/about/%EB%A6%AC%EC%96%BC%ED%83%80%EC%9E%84_Docker%EB%A1%9C_PaaS_%EA%B5%AC%EC%84%B1%ED%95%98%EA%B8%B0.html?hl=&id=SfvGDAAAQBAJ"
      },
      "saleInfo": {
        "country": "ES",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "ES",
        "viewability": "NO_PAGES",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": true
        },
        "webReaderLink": "http://books.google.es/books/reader?id=SfvGDAAAQBAJ&hl=&printsec=frontcover&output=reader&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
      }
    }
  ]
};

export default function (state = initialState.items, action) {
  switch (action.type) {
    case FETCH_BOOKS:
      return action.payload.data;
    case GOOGLE_API_SEARCH:
      if (action.payload.data.totalItems > 0) {
        return action.payload.data.items;
      }
      return state;
    default:
      return state;
  }
}

/*

 Pagination
 You can paginate the volumes list by specifying two values in the parameters for the request:
 startIndex - The position in the collection at which to start. The index of the first item is 0.
 maxResults - The maximum number of results to return. The default is 10, and the maximum allowable value is 40.

 */