import { h, render } from "preact";
import { useState, useEffect } from "preact/hooks";
import { Router } from "preact-router";

import Home from "./components/pages/Home";
import Packs from "./components/pages/Packs";
import Courses from "./components/pages/Courses";
import Overview from "./components/pages/Overview";
import Checkout from "./components/pages/Checkout";
import Thanks from "./components/pages/Thanks";

const App = () => {
  const [hash, setHash] = useState(window.location.hash);
  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const [courses, setCourses] = useState([]);
  const [packs, setPacks] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState(() => {
    const savedCourses = localStorage.getItem("selectedCourses");
    return savedCourses ? JSON.parse(savedCourses) : [];
  });

  useEffect(() => {
    localStorage.setItem("selectedCourses", JSON.stringify(selectedCourses));
  }, [selectedCourses]);

  const handleRemoveCourse = (courseToRemove) => {
    setSelectedCourses(selectedCourses.filter((course) => course.name !== courseToRemove.name || course.category !== courseToRemove.category));
  };

  const handleCourseComment = (courseToComment, comment) => {
    setSelectedCourses(
      selectedCourses.map((course) => {
        if (course.name === courseToComment.name && course.category === courseToComment.category) {
          return { ...course, comment };
        } else {
          return course;
        }
      })
    );
  };

  useEffect(() => {
    fetch("https://cdn.jsdelivr.net/gh/Demodia/Soprema/projects/courses/data/courses.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setCourses(data.filter((course) => course.enable)))
      .catch((error) => {
        console.error("Error fetching courses:", error);
        // TODO: Handle the error in UI
      });

    fetch("https://cdn.jsdelivr.net/gh/Demodia/Soprema/projects/courses/data/packs.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setPacks(data))
      .catch((error) => {
        console.error("Error fetching packs:", error);
        // TODO: Handle the error in UI
      });
  }, []);

  return (
    <div id="app">
      <Router key={hash} url={hash ? hash.slice(1) : "/"}>
        <Home path="/" />
        <Packs path="/packs" packs={packs} courses={courses} setSelectedCourses={setSelectedCourses} />
        <Courses path="/courses" courses={courses} selectedCourses={selectedCourses} setSelectedCourses={setSelectedCourses} />
        <Overview path="/overview" selectedCourses={selectedCourses} handleRemoveCourse={handleRemoveCourse} handleCourseComment={handleCourseComment} />
        <Checkout path="/checkout" selectedCourses={selectedCourses} setSelectedCourses={setSelectedCourses} />
        <Thanks path="/thanks" />
      </Router>
    </div>
  );
};

render(<App />, document.getElementById("role-main"));
