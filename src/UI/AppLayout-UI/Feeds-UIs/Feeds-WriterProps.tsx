import graceIMG from "../../../assets/images/grace-article-img.png";
import oluwatobiIMG from "../../../assets/images/oluwatobi-article-img.png";
import adebobolaIMG from "../../../assets/images/adebobola-article-img.pmg.png";
import adebobolaAVI from "../../../assets/images/user-2.png";
import oluwatobiAVI from "../../../assets/images/user-4.png";
import graceAVI from "../../../assets/images/user-3.png";

export interface WriterProps {
  id: number | string;
  name: string;
  writerAVI: string;
  occupation: string;
  publicationTime: string;
  readingTime: string;
  publicatonArticleTitle: string;
  publicationArticle: string;
  publicationIMG: string;
  publicationComments: number;
  publicationLikes: number;
  publicationViews: number;
  writterFollowers: string[];
  profileVisit: number;
  postList: string[];
}

const getDate = (date: string) => {
  return new Date(date).toDateString().slice(4, 15);
};

export const writerProps: WriterProps[] = [
  {
    id: 1,
    name: "Grace Ikpang",
    writerAVI: graceAVI,
    occupation: "Product designer",
    publicationTime: getDate("May 25, 2023"),
    readingTime: "10",
    publicatonArticleTitle: "Starting out as a Product designer",
    publicationArticle:
      "Embarking on a journey as a product designer can be an exhilarating and fulfilling experience. As a profession that bridges the realms of art, technology, and problem-solving, product design offers an opportunity to shape the way people interact with the world around them.",
    publicationIMG: graceIMG,
    publicationComments: 200,
    publicationLikes: 120,
    publicationViews: 2980,
    writterFollowers: ["Jude", "James", "Porch"],
    profileVisit: 65,
    postList: [
      "Embarking on a journey as a product designer can be an exhilarating and fulfilling experience. As a profession that bridges the realms of art, technology, and problem-solving, product design offers an opportunity to shape the way people interact with the world around them.",
    ]
  },
  {
    id: 2,
    name: "Oluwatobi Ogunniyi",
    writerAVI: oluwatobiAVI,
    occupation: "Software developer",
    publicationTime: getDate("May 22, 2023"),
    readingTime: "10",
    publicatonArticleTitle: "Using CSS Selectors",
    publicationArticle:
      "Cascading Style Sheets (CSS) is a fundamental technology that lies at the heart of modern web design. It empowers developers and designers to transform plain HTML into visually captivating and interactive web pages.",
    publicationIMG: oluwatobiIMG,
    publicationComments: 200,
    publicationLikes: 120,
    publicationViews: 2980,
    writterFollowers: ["Jude", "James", "Porch", "Manchi"],
    profileVisit: 97,
    postList: [
      "Cascading Style Sheets (CSS) is a fundamental technology that lies at the heart of modern web design. It empowers developers and designers to transform plain HTML into visually captivating and interactive web pages.",
    ]
  },
  {
    id: 3,
    name: "Adebobola Muhydeen",
    writerAVI: adebobolaAVI,
    occupation: "Political analyst",
    publicationTime: getDate("May 21, 2023"),
    readingTime: "10",
    publicatonArticleTitle: "The Impact of social media on Political discourse",
    publicationArticle:
      "In the era of digital communication, social media platforms have become pervasive in our daily lives, revolutionizing the way we connect, share information, and engage with the world.",
    publicationIMG: adebobolaIMG,
    publicationComments: 200,
    publicationLikes: 120,
    publicationViews: 2980,
    writterFollowers: ["Jude", "James", "Porch", "Monye", "Toby", "Richard"],
    profileVisit: 45,
    postList: [
      "In the era of digital communication, social media platforms have become pervasive in our daily lives, revolutionizing the way we connect, share information, and engage with the world.",
    ]
  },
];
