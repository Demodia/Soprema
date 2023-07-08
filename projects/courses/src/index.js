import { h, render } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { Router } from 'preact-router';
import Home from './components/pages/Home';
import Packs from './components/pages/Packs';
import Courses from './components/pages/Courses';
import Overview from './components/pages/Overview';
import Checkout from './components/pages/Checkout';
import Thanks from './components/pages/Thanks';

const App = () => {
  const [courses, setCourses] = useState([]);
  const [packs, setPacks] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);

  useEffect(() => {
    fetch('https://cdn.jsdelivr.net/gh/Demodia/Soprema/projects/courses/data/courses.json')
      .then(response => response.json())
      .then(data => setCourses(data.filter(course => course.enable)));

    fetch('https://cdn.jsdelivr.net/gh/Demodia/Soprema/projects/courses/data/packs.json')
      .then(response => response.json())
      .then(data => setPacks(data));
  }, []);

  return (
    <div id="app">
      <Router>
        <Home path="/" />
        <Packs path="/packs" packs={packs} setSelectedCourses={setSelectedCourses} />
        <Courses path="/courses" courses={courses} selectedCourses={selectedCourses} setSelectedCourses={setSelectedCourses} />
        <Overview path="/overview" selectedCourses={selectedCourses} setSelectedCourses={setSelectedCourses} />
        <Checkout path="/checkout" selectedCourses={selectedCourses} setSelectedCourses={setSelectedCourses} />
        <Thanks path="/thanks" />
      </Router>
    </div>
  );
};

render(<App />, document.getElementById('role-main'));
