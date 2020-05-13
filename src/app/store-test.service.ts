import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreTestService {

  database1 = [
    { image: 'https://via.placeholder.com/130x135?text=Visit',
      title: 'Report',
      text: 'Explore Instagram Video: How to convert, engage, and get more Instagra...',
      read: 'Read Report'
    },
    { image: 'https://via.placeholder.com/130x135?text=Visit',
      title: 'Blog Post',
      text: 'How to make social video work for your marketing team',
      read: 'Read Store'
    },
    { image: 'https://via.placeholder.com/130x135?text=Visit',
      title: 'Webinar',
      text: 'The video Forecast: 2019 predictions from industry leaders',
      read: 'Watch Webinar'
    },
    { image: 'https://via.placeholder.com/130x135?text=Visit',
      title: 'Report',
      text: 'Winning strategies for digital video',
      read: 'Read report'
    }
  ];

  database2 = [
    { image: 'https://via.placeholder.com/320x260?text=Visit',
      title: 'Blog Post',
      text: '4 organic ways to improve your website KPIs',
      read: 'Read Story'
    },
    { image: 'https://via.placeholder.com/320x260?text=Visit',
      title: 'Blog Post',
      text: 'How to turn your next event into a video content goldmine',
      read: 'Read Store'
    },
    { image: 'https://via.placeholder.com/320x260?text=Visit',
      title: 'Blog Post',
      text: 'How to quickly turn your podcast into a video script',
      read: 'Read Story'
    },
  ];

  database3 = [
    { image: 'https://via.placeholder.com/120x120?text=Visit',
      title: 'Blog Post',
      text: 'Thr Basic: Distributing Your Videos Across Different Channels',
      read: 'Read Story'
    },
    { image: 'https://via.placeholder.com/120x120?text=Visit',
      title: 'Webinar',
      text: 'Thr Basic: Structuring Your Video Marketing Strategy',
      read: 'Watch Webinar'
    },
    { image: 'https://via.placeholder.com/120x120?text=Visit',
      title: 'Report',
      text: 'Thr Basic: Structuring Marketing Strategy',
      read: 'Read Report'
    },
  ];

  database4 = [
    { image: 'https://via.placeholder.com/320x260?text=Visit',
      title: 'Webinar',
      text: 'Micro-influencers and B2C brand videos: A match made in heaven',
      read: 'Watch Webinar'
    },
    { image: 'https://via.placeholder.com/320x260?text=Visit',
      title: 'Webinar',
      text: 'Webinar: Improving content marketing trough visual storytelling',
      read: 'Watch Webinar'
    },
    { image: 'https://via.placeholder.com/320x260?text=Visit',
      title: 'Webinar',
      text: 'How to reach audiences with social video: From Millennials to Gen Z',
      read: 'Watch Webinar'
    },
  ];

  constructor() { }
}
