import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import RouteWrapper from "../RouteWrapper";

const Course = ({ course, selected, toggleCourse }) => (
  <button
    className={`custom-item-toggle flush ${selected ? "is-active" : ""}`}
    onClick={() => toggleCourse(course)}
    aria-label={`Toggle selection for ${course.name}`}>
    <div className='custom-item-toggle__icon'></div>
    <h3>{course.name}</h3>
    <p>{course.desc}</p>
  </button>
);

const Category = ({ category, courses, selectedCourses, toggleCourse }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    setHeight(ref.current.scrollHeight);
  }, []);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    setHeight(!isOpen ? ref.current.scrollHeight : 0);
  };

  const countSelectedCourses = () => {
    return courses.filter((course) =>
      selectedCourses.some(
        (selectedCourse) => selectedCourse.name === course.name && selectedCourse.category === course.category
      )
    ).length;
  };

  return (
    <div className={`accordion-element ${isOpen ? "is-active" : ""}`}>
      <div className='accordion-wrapper'>
        <button
          type='button'
          className='accordion-title text-uppercase'
          aria-expanded={isOpen}
          id={`title__collapse__${category}`}
          aria-controls='accordion-1'
          onClick={toggleOpen}>
          {category}{" "}
          <span className='active-count'>
            ({countSelectedCourses()} / {courses.length})
          </span>
        </button>
        <div className='accordion-container' style={{ height: `${height}px` }}>
          <div className='accordion-content wysiwyg' aria-labelledby={`title__collapse__${category}`} ref={ref}>
            <div className='collapse-content-wrapper'>
              {courses.map((course) => (
                <Course
                  key={course.name}
                  course={course}
                  selected={selectedCourses.some(
                    (selectedCourse) =>
                      selectedCourse.name === course.name && selectedCourse.category === course.category
                  )}
                  toggleCourse={toggleCourse}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ({ courses, selectedCourses, setSelectedCourses }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const crumb = {
    home: { href: "/", text: t("breadcrumbs.home") },
    packs: { href: "/packs", text: t("breadcrumbs.packs") },
    current: { text: t("breadcrumbs.courses") },
  };

  const categories = courses.reduce((acc, course) => {
    if (!acc[course.category]) {
      acc[course.category] = [];
    }
    acc[course.category].push(course);
    return acc;
  }, {});

  const toggleCourse = (course) => {
    if (
      selectedCourses.some(
        (selectedCourse) => selectedCourse.name === course.name && selectedCourse.category === course.category
      )
    ) {
      setSelectedCourses(
        selectedCourses.filter(
          (selectedCourse) => selectedCourse.name !== course.name || selectedCourse.category !== course.category
        )
      );
    } else {
      setSelectedCourses([...selectedCourses, course]);
    }
  };

  return (
    <RouteWrapper
      hasCallout='true'
      breadcrumbLinks={[crumb.home, crumb.packs, crumb.current]}
      titleText={t("routeCourses.title")}>
      <div className='mega-row cms-row vertical-spacing-bottom'>
        <div className='container container-medium'>
          <div className='row'>
            <div className='col col-sm-12'>
              <div className='accordion'>
                <div className='accordion-main-wrapper'>
                  {Object.entries(categories).map(([category, courses]) => (
                    <Category
                      key={category}
                      category={category}
                      courses={courses}
                      selectedCourses={selectedCourses}
                      toggleCourse={toggleCourse}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className='col col-sm-12'>
              <div className='wysiwyg text-right'>
                <button
                  onClick={() => selectedCourses.length > 0 && navigate("/overview")}
                  disabled={selectedCourses.length === 0}
                  className='button'>
                  {t("routeCourses.buttonText")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RouteWrapper>
  );
};
