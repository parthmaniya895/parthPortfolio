"use client";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import Slider from "react-slick";
const BlogSlider = () => {
  const blogItems = [
    {
      id: 1,
      title: "What is UI/UX Design? A Beginner’s Guide to Digital Experiences",
      img: "assets/img/blog/blog-img-1.png",
      category: "UI/UX Design",
      date: "June 16, 2025",
      readingTime: "16 min",
    },
    {
      id: 2,
      title: "UI vs UX: Why Both Are Critical for Successful Products",
      img: "assets/img/blog/blog-img-2.png",
      category: "User Research",
      date: "July 1, 2025",
      readingTime: "15 min",
    },
    {
      id: 3,
      title: "The Importance of User Research in Product Design",
      img: "assets/img/blog/blog-img-2.jpg",
      category: "User Research",
      date: "Nov 6, 2025",
      readingTime: "15 min",
    },
    {
      id: 4,
      title: "Design Thinking: A Beginner’s Guide to User-Centered Products",
      img: "assets/img/blog/blog-img-3.jpg",
      category: "Product Design",
      date: "Nov 6, 2025",
      readingTime: "15 min",
    },
  ];
  return (
    <div className="article-publications">
      <h2 className="main-common-title">Article and Publications</h2>
      <div className="article-publications-main">
        <Slider
          {...sliderProps.blogSlider}
          className="row article-publications-slider"
        >
          {blogItems.map((item) => (
            <div className="col-lg-6" key={item.id}>
              <div className="article-publications-item">
                <div className="image">
                  <Link href="article" className="d-block w-100">
                    <img
                      src={item.img}
                      alt="blog-img-1"
                      className="img-fluid w-100"
                    />
                  </Link>
                  <Link href="article" className="tags">
                    {item.category}
                  </Link>
                </div>
                <div className="text">
                  <Link href="article" className="title">
                    {item.title}
                  </Link>
                  <ul className="list-unstyled">
                    <li>{item.readingTime} read</li>
                    <li>{item.date}</li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default BlogSlider;
