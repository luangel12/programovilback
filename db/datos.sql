-- INSERCION DE DATOS

-- Datos Colleges
INSERT INTO colleges (college_id, name, image_url, teachers_amount) VALUES
(1, 'Universidad de Lima', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLV7QKUXe0yNPpaBBv7c2YO-w45tYVIfdKKw&s', 120),
(2, 'Universidad Autonoma Metropolitana', 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/012011/untitled-1_6.png?itok=kAcHD1tL', 120),
(3, 'Pontificia Universidad Católica del Perú', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxPWMnGYOZ0ZwhAzmtDxon-JMjnr3sDRkCqQ&s', 120),
(4, 'UTEC', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/UTEC-Logo.jpg/960px-UTEC-Logo.jpg', 120),
(5, 'Universidad Nacional de San Agustín de Arequipa', 'https://xxvicongresoperuanoquimica2012.wordpress.com/wp-content/uploads/2012/07/unsa.png', 120),
(6, 'Universidad Nacional de Trujillo', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo-teRUlBUWINfwycZRLFvwmxrGxVnnsrqbg&s', 120),
(7, 'Universidad Nacional Mayor de San Marcos', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxf49uTNFrTn-j01GqhHYJBd0XIc5IgNKAtg&s', 120),
(8, 'Universidad ESAN', 'https://carrerasuniversitarias.pe/logos/original/logo-universidad-esan.webp', 120),
(9, 'Universidad del Pacífico', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIC0AeNPiyXIht6eyDqTTRFL1gMNWC0GnGlQ&s', 120),
(10, 'Universidad Nacional ', 'https://dondeestudiar.pe/wp-content/uploads/2023/01/Unsaac.jpg', 120);


-- Datos Faculties
INSERT INTO faculties (faculty_id, name, college_id, teachers_amount) VALUES
(1, 'Facultad de Ingeniería', 1, 10),
(11, 'Facultad de Derecho', 1, 8),
(2, 'Facultad de Ciencias', 2, 28),
(12, 'Facultad de Medicina', 2, 15),
(3, 'Facultad de Humanidades', 3, 15),
(13, 'Facultad de Arquitectura', 3, 7),
(4, 'Facultad de Economía y Negocios', 4, 18),
(14, 'Facultad de Ingeniería Ambiental', 4, 5),
(5, 'Facultad de Ciencias Sociales', 5, 14),
(15, 'Facultad de Psicología', 5, 6),
(6, 'Facultad de Ingeniería', 6, 20),
(16, 'Facultad de Ciencias Económicas', 6, 12),
(7, 'Facultad de Ciencias', 7, 25),
(17, 'Facultad de Derecho', 7, 10),
(8, 'Facultad de Economía y Negocios', 8, 22),
(18, 'Facultad de Administración', 8, 9),
(9, 'Facultad de Humanidades', 9, 17),
(19, 'Facultad de Derecho', 9, 7),
(10, 'Facultad de Ciencias Sociales', 10, 12),
(20, 'Facultad de Ingeniería Civil', 10, 8);



-- Datos Groups
INSERT INTO groups (group_id, name, text, image_url) VALUES
(2, 'curso', 'Elige el curso', 'assets/images/groups/curso.png'),
(4, 'Puntualidad', '¿El profesor llega y termina a tiempo sus clases?', 'assets/images/groups/puntualidad.png'),
(5, 'Uso de recursos', '¿Utiliza materiales o recursos que apoyan el aprendizaje?', 'assets/images/groups/recursos.png'),
(6, 'Interacción con estudiantes', '¿Fomenta la participación y responde preguntas?', 'assets/images/groups/interaccion.png'),
(7, 'Evaluación justa', '¿Las evaluaciones son coherentes con lo enseñado?', 'assets/images/groups/evaluacion.png'),
(8, 'Retroalimentación', '¿Proporciona comentarios útiles para mejorar?', 'assets/images/groups/retroalimentacion.png'),
(9, 'Actitud profesional', '¿Mantiene una actitud respetuosa y profesional?', 'assets/images/groups/actitud.png'),
(10, 'Motivación', '¿Inspira o motiva a los estudiantes a aprender?', 'assets/images/groups/motivacion.png'),
(1, 'claridad', 'En general, ¿qué calificación le darías al profesor?', ''),
(3, 'comentario', 'Añade un comentario\n(opcional)', 'assets/images/groups/comentario.png');



-- Datos Labels
INSERT INTO labels (label_id, name, image_url, group_id) VALUES
(1, '😄', '', 1),
(2, '🙂', '', 1),
(3, '😐', '', 1),
(4, '😞', '', 1),
(5, 'Muy claro', '', 2),
(6, 'Claro', '', 2),
(7, 'Algo claro', '', 2),
(8, 'Un poco claro', '', 2),
(9, 'Entusiasta', '', 3),
(10, 'Paciente', '', 3),
(11, 'Motivador', '', 3),
(12, 'Empático', '', 3),
(13, 'Muy puntual', '', 4),
(14, 'Puntual', '', 4),
(15, 'Poco puntual', '', 4),
(16, 'Impuntual', '', 4),
(17, 'Usa muchos recursos', '', 5),
(18, 'Usa algunos recursos', '', 5),
(19, 'Usa pocos recursos', '', 5),
(20, 'No usa recursos', '', 5),
(21, 'Muy participativo', '', 6),
(22, 'Participativo', '', 6),
(23, 'Poco participativo', '', 6),
(24, 'Nada participativo', '', 6),
(25, 'Muy justo', '', 7),
(26, 'Justo', '', 7),
(27, 'Poco justo', '', 7),
(28, 'Injusto', '', 7),
(29, 'Retroalimenta muy bien', '', 8),
(30, 'Retroalimenta bien', '', 8),
(31, 'Retroalimenta poco', '', 8),
(32, 'No retroalimenta', '', 8),
(33, 'Muy profesional', '', 9),
(34, 'Profesional', '', 9),
(35, 'Poco profesional', '', 9),
(36, 'Nada profesional', '', 9),
(37, 'Muy motivador', '', 10),
(38, 'Motivador', '', 10),
(39, 'Poco motivador', '', 10),
(40, 'Nada motivador', '', 10);



-- Datos Users
INSERT INTO users (user_id, username, email, password, college_id, image_url) VALUES
(1, 'Alvaro Mendoza', 'alvaro.mendoza@example.com', '123456', 1, 'assets/images/users/alvaro.png'),
(2, 'Paulina torres', 'paulina.torres@example.com', 'abcdef', 2, 'assets/images/users/paulina.png'),
(3, 'Diego Alvarez', 'diego.alvarez@example.com', 'qwerty', 1, 'assets/images/profileDefault.png'),
(4, 'veronicaramirez', 'veronica.ramirez@example.com', '123abc', 3, 'assets/images/profileDefault.png'),
(5, 'fernandosalazar', 'fernando.salazar@example.com', 'lopez456', 2, 'assets/images/profileDefault.png'),
(6, 'camila.lopez', 'camila.lopez@example.com', 'pass123', 3, 'assets/images/profileDefault.png'),
(7, 'mario.garcia', 'mario.garcia@example.com', 'secure456', 1, 'assets/images/profileDefault.png'),
(8, 'luciana.martinez', 'luciana.martinez@example.com', 'mypassword', 4, 'assets/images/profileDefault.png'),
(9, 'jose.luna', 'jose.luna@example.com', 'luna2025', 2, 'assets/images/profileDefault.png'),
(10, 'sofia.paredes', 'sofia.paredes@example.com', 'paredes789', 3, 'assets/images/profileDefault.png'),
(11, 'ricardo.fernandez', 'ricardo.fernandez@example.com', '12345678', 4, 'assets/images/profileDefault.png'),
(12, 'daniela.santos', 'daniela.santos@example.com', 'abcdefg', 1, 'assets/images/profileDefault.png'),
(13, 'sebastian.rios', 'sebastian.rios@example.com', 'riospass', 5, 'assets/images/profileDefault.png'),
(14, 'valentina.quispe', 'valentina.quispe@example.com', 'quispe456', 4, 'assets/images/profileDefault.png'),
(15, 'cristian.mejia', 'cristian.mejia@example.com', 'mejiapass', 3, 'assets/images/profileDefault.png'),
(16, 'mariana.flores', 'mariana.flores@example.com', 'flores123', 2, 'assets/images/profileDefault.png'),
(17, 'andres.vargas', 'andres.vargas@example.com', 'vargaspass', 1, 'assets/images/profileDefault.png'),
(18, 'laura.castro', 'laura.castro@example.com', 'castro789', 2, 'assets/images/profileDefault.png'),
(19, 'julio.reyes', 'julio.reyes@example.com', 'julio456', 4, 'assets/images/profileDefault.png'),
(20, 'martina.silva', 'martina.silva@example.com', 'silva123', 5, 'assets/images/profileDefault.png'),
(21, 'luis.cardenas', 'luis.cardenas@example.com', 'cardenaspass', 3, 'assets/images/profileDefault.png');



-- Datos Teachers
INSERT INTO teachers (teacher_id, name, image_url, college_id, ratings) VALUES
(1, 'Juan Pérez', 'assets/images/teachers/profile.png', 1, 15),
(2, 'María Gómez', 'assets/images/teachers/profile2.png', 2, 12),
(3, 'Carlos Sánchez', 'assets/images/teachers/profile.png', 1, 16),
(4, 'Laura Fernández', 'assets/images/teachers/profile2.png', 3, 19),
(5, 'Ana Torres', 'assets/images/teachers/profile2.png', 2, 13),
(6, 'Miguel Rodríguez', 'assets/images/teachers/profile.png', 1, 11),
(7, 'Sofía Martínez', 'assets/images/teachers/profile2.png', 3, 12),
(8, 'Fiorella Capcha', 'assets/images/teachers/profile2.png', 4, 12),
(9, 'Ricardo López', 'assets/images/teachers/profile.png', 6, 10),
(10, 'Valeria Ríos', 'assets/images/teachers/profile2.png', 4, 14),
(11, 'Pedro Jiménez', 'assets/images/teachers/profile.png', 5, 9),
(12, 'Camila Ortega', 'assets/images/teachers/profile2.png', 7, 17),
(13, 'Lucía Navarro', 'assets/images/teachers/profile2.png', 6, 18),
(14, 'Andrés Palacios', 'assets/images/teachers/profile.png', 8, 7),
(15, 'Diana Ramírez', 'assets/images/teachers/profile2.png', 7, 21),
(16, 'Hugo Morales', 'assets/images/teachers/profile.png', 9, 10),
(17, 'Isabel Vega', 'assets/images/teachers/profile2.png', 10, 13),
(18, 'Samuel Aguirre', 'assets/images/teachers/profile.png', 7, 16),
(19, 'Patricia Salas', 'assets/images/teachers/profile2.png', 9, 11),
(20, 'Diego León', 'assets/images/teachers/profile.png', 8, 14);



-- Datos Teaches_colleges
INSERT INTO teachers_colleges (teacher_college_id, college_id, teacher_id) VALUES
(1, 1, 1),
(2, 2, 1),
(3, 2, 2),
(4, 3, 2),
(5, 1, 3),
(6, 4, 3),
(7, 3, 4),
(8, 5, 4),
(9, 2, 5),
(10, 6, 5),
(11, 1, 6),
(12, 7, 6),
(13, 3, 7),
(14, 8, 7),
(15, 4, 8),
(16, 6, 9),
(17, 5, 10),
(18, 4, 10),
(19, 5, 11),
(20, 7, 12),
(21, 6, 13),
(22, 8, 14),
(23, 7, 15),
(24, 9, 16),
(25, 10, 17),
(26, 7, 18),
(27, 9, 19),
(28, 8, 20),
(29, 10, 17);



