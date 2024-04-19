"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.scss";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
type course = {
  id: number;
  name: string;
  description: string;
  image: string;
  tutor: string;
  rating: number;
};

type feedback = {
  id: number;
  name: string;
  message: string;
  image: string;
};

let courses_: course[] = [
  {
    id: 1,
    name: "Mathematics",
    description:
      "Mathematics is a powerful tool for global understanding and communication that organizes our lives and prevents chaos. Mathematics helps us understand the world and provides an effective way of building mental discipline.",
    image:
      "https://th.bing.com/th/id/R.172d69fecf1b4d1d89c3cd6c49229509?rik=oBm1rWVl3ojecQ&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f05%2fMath-HD-Wallpapers.jpg&ehk=ZZH1Y90LjYPi3yEJm4Esff55XRuqQqXk4UXpkTRIiVE%3d&risl=&pid=ImgRaw&r=0",
    tutor: "Jose Misha",
    rating: 3,
  },
  {
    id: 2,
    name: "Chemistry",
    description:
      "It is the central science, and chemical principles touch on biology, physics, geology, astronomy, medicine, engineering, mathematics, and other disciplines.",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/disp/20046794784477.5e874b22ea7f2.jpg",
    tutor: "Jose Misha",
    rating: 4,
  },
  {
    id: 3,
    name: "phyics",
    description:
      "It leads to great discoveries, like computers and lasers, that lead to technologies which change our lives—from healing joints, to curing cancer, to developing sustainable energy solutions",
    image: "https://i.ytimg.com/vi/ML3upSi24cU/maxresdefault.jpg",
    tutor: "Jose Misha",
    rating: 5,
  },
  {
    id: 4,
    name: "Geography",
    description:
      "Develop responsible citizens especially in relation to sustainable development education and global citizenship.",
    image:
      "https://th.bing.com/th/id/OIP.2PlyU_Lc6aj_Bv98jVcJHgHaEK?rs=1&pid=ImgDetMain",
    tutor: "John Mark",
    rating: 3,
  },
  {
    id: 5,
    name: "English",
    description:
      "English is the language of international communication, the media and the internet, so learning English is important for socialising and entertainment as well as work!",
    image:
      "https://i0.wp.com/www.inlinguamalta.com/wp-content/uploads/2012/12/shutterstock_73723744.jpg?ssl=1",
    tutor: "Mrs M Theresa ",
    rating: 2,
  },
  {
    id: 6,
    name: "differential calculus",
    description:
      "Calculating the velocity and acceleration of objects in motion, modeling physical phenomena, and solving problems related to forces and energy.",
    image:
      "https://th.bing.com/th/id/OIP.78cc_JdMmniF9Ut2Miy1IQAAAA?rs=1&pid=ImgDetMain",
    tutor: "Mr F Hassan",
    rating: 1,
  },
];

const feedbacks: feedback[] = [
  {
    id: 1,
    name: "Black Man",
    message:
      "Along with sharing personal impressions, student testimonials at Yoga Flow  are highly authentic. On this online course’s website, visitors can find students’ opinions and discover thenames and even social media pages of course participants, which means the authors of these comments are real people and not just paid reviewers.",
    image:
      "https://asset20.ckassets.com/thegoodlookbook/wp-content/uploads/sites/2/2019/03/10-3.jpg",
  },
  {
    id: 2,
    name: "Sofya",
    message:
      "Testimonials don't need to be elaborate. In fact, this testimonial is great because it's easily shared via social media or the company's website. That way, the brand can engage with leads on the channels they're most comfortable using",
    image: "https://jooinn.com/images/pretty-girl-15.jpg",
  },
  {
    id: 3,
    name: "Tanya",
    message:
      "Sometimes testimonials don't have to come from customers. In this example, a Los Angeles-based restaurant was given a wonderful review by a critic from the LA Times.While these testimonials don't come every day, it's important to seize these opportunities and put this content on blast for potential leads to see.",
    image:
      "https://th.bing.com/th/id/OIP.1YsSkSbyyogbDYx8PJsjugAAAA?w=300&h=300&rs=1&pid=ImgDetMain",
  },
  {
    id: 4,
    name: "Andrey",
    message:
      "A quote we love: These are noodles with a mean streak, a potent lashing of hot chile and oil, laced with just enough Sichuan peppercorn to numb your palate, to make the next bite not just tolerable but actually kind of great.",
    image:
      "https://th.bing.com/th/id/OIP.8xb2_8i7Ch_6N0r-pI_4HAHaHa?w=512&h=512&rs=1&pid=ImgDetMain",
  },
  {
    id: 5,
    name: "Melody",
    message:
      "What we love: Even if users don't write a lengthy caption singing praises to your product, a picture will more than say enough. The quality of the product and the user's emotion in the picture will show that your product works.",
    image:
      "https://th.bing.com/th/id/OIP.sBgsPBswyqSDwCtXX2FBigHaLH?rs=1&pid=ImgDetMain",
  },
];

export default function Home() {
  const [value, setValue] = useState<number>(2);
  const [courses, setCourses] = useState<course[]>(courses_);
  const [testimonials, setTestimonials] = useState<feedback[]>(feedbacks);
  const handleChageRating = (id: number) => {
    setCourses(
      courses.map((course: course) => {
        if (course.id === id) {
          return { ...course, rating: value };
        }
        return course;
      })
    );
  };
  return (
    <main className={styles.main}>
      <div className={styles.intro}>
        <p className={styles.toptxt}>Welcome to Misha website</p>
        <p className={styles.bottomtxt}>
          we offer online classes to different age groups
        </p>
        <div className={styles.continue}>
          <Chip
            label="Continue as a student >"
            color="secondary"
            component="a"
            href="#basic-chip"
            clickable
            sx={{ backgroundColor: "yellow", color: "grey" }}
          />
          <Chip
            label="Continue as a tutor >"
            color="secondary"
            component="a"
            href="#basic-chip"
            clickable
            sx={{ backgroundColor: "yellow", color: "grey" }}
          />
        </div>
      </div>

      <div className={styles.freeCourses}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          Have a look at some of our free courses
        </Typography>
        <div className={styles.courses}>
          {courses.map((course: course) => (
            <Card sx={{ maxWidth: 345 }} key={course.id}>
              <CardMedia
                sx={{ height: 140 }}
                image={course.image}
                title={course.name}
              />
              <CardContent>
                <Typography gutterBottom variant="body1" component="div">
                  {course.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {course.description}
                </Typography>
                <div
                  style={{
                    display: "flex",
                    flexFlow: "row nowrap",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <Typography variant="body1">tutor</Typography>
                    <Typography
                      variant="body2"
                      component="div"
                      color="text.secondary"
                    >
                      {course.tutor}
                    </Typography>
                  </div>
                  <Rating
                    name="simple-controlled"
                    value={course.rating}
                    onChange={async (event, newValue) => {
                      await setValue(Number(newValue));
                      await handleChageRating(course.id);
                    }}
                  />
                </div>
              </CardContent>
              <CardActions>
                <Button size="small" style={{ textTransform: "lowercase" }}>
                  Share
                </Button>
                <Button size="small" style={{ textTransform: "lowercase" }}>
                  Learn More
                </Button>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
      <div className={styles.studentFeedback}>
        <div className={styles.header}>
          <Typography gutterBottom variant="h5" component="div">
            what students say about us ?
          </Typography>
        </div>
        <div className={styles.students}>
          {testimonials.map((testimonial: feedback) => (
            <Paper className={styles.card} key={testimonial.id}>
              <div className={styles.cardImage}>
                <img
                  src={testimonial.image}
                  alt="stud-image"
                  style={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "60px",
                    float: "left",
                  }}
                />
                <Typography
                  variant="body2"
                  component="div"
                  color="text.secondary"
                >
                  {testimonial.message}
                </Typography>
              </div>
              <div className={styles.cardFooter}>
                <Typography variant="body1" component="div">
                  {testimonial.name}
                </Typography>
              </div>
            </Paper>
          ))}
        </div>
      </div>
    </main>
  );
}
