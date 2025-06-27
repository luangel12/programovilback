-- CREACION DE TABLAS

-- Tabla Colleges
CREATE TABLE colleges (
    college_id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    image_url TEXT,
    teachers_amount INTEGER
);


-- Tabla Faculties
CREATE TABLE faculties (
    faculty_id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    college_id INTEGER,
    teachers_amount INTEGER,
    FOREIGN KEY (college_id) REFERENCES colleges(college_id)
);


-- Tabla Groups
CREATE TABLE groups (
    group_id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    text TEXT,
    image_url TEXT
);


-- Tabla Labels
CREATE TABLE labels (
    label_id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    image_url TEXT,
    group_id INTEGER,
    FOREIGN KEY (group_id) REFERENCES groups(group_id)
);


-- Tabla Users
CREATE TABLE users (
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL,
    college_id INTEGER,
    image_url TEXT,
    FOREIGN KEY (college_id) REFERENCES colleges(college_id)
);


-- Tabla Teachers
CREATE TABLE teachers (
    teacher_id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    image_url TEXT,
    college_id INTEGER,
    ratings INTEGER,
    FOREIGN KEY (college_id) REFERENCES colleges(college_id)
);


-- Tabla Reviews
CREATE TABLE reviews (
    review_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    teacher_id INTEGER,
    course_id INTEGER,
    comment TEXT,
    date TEXT,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (teacher_id) REFERENCES teachers(teacher_id),
    FOREIGN KEY (course_id) REFERENCES courses(course_id)
);


-- Tabla Teacher_colleges
CREATE TABLE teachers_colleges (
    teacher_college_id INTEGER PRIMARY KEY AUTOINCREMENT,
    college_id INTEGER,
    teacher_id INTEGER,
    FOREIGN KEY (college_id) REFERENCES colleges(college_id),
    FOREIGN KEY (teacher_id) REFERENCES teachers(teacher_id)
);


-- Tabla Courses
CREATE TABLE courses (
    course_id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    faculty_id INTEGER,
    teachers_amount INTEGER,
    FOREIGN KEY (faculty_id) REFERENCES faculties(faculty_id)
);


-- Tabla Reviws_lables
CREATE TABLE review_labels (
    review_label_id INTEGER PRIMARY KEY AUTOINCREMENT,
    review_id INTEGER,
    label_id INTEGER,
    FOREIGN KEY (review_id) REFERENCES reviews(review_id),
    FOREIGN KEY (label_id) REFERENCES labels(label_id)
);


CREATE TABLE teacher_course (
  teacher_course_id INTEGER PRIMARY KEY AUTOINCREMENT,
  teacher_id INTEGER NOT NULL,
  course_id INTEGER NOT NULL,
  FOREIGN KEY (teacher_id) REFERENCES teachers(teacher_id),
  FOREIGN KEY (course_id) REFERENCES courses(course_id)
);
