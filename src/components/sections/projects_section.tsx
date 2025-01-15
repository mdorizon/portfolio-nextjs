'use client';

import React, { useState } from 'react';
import PostCard from '@/src/components/components/postCard';
import { PostData, PostCategory } from '@/src/utils/lib/definitions'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

const postsData: PostData[] = [
  {
    id: 1,
    title: "Projet création d'une maquette pour le portfolio",
    subtitle: "Création de la maquette du portfolio, design crée de 0, avec des inspirations prises sur dribbble, (les inspirations utilisées pour la création sont visibles sur le figma).",
    imageUrl: "/images/portfolio.webp",
    projectButton: { url: "/lien1", enabled: false },
    button2: { text: "Voir plus", url: "https://www.figma.com/file/lpv75N1hQSnSzSeKmcYD6R/portfolio?type=design&node-id=0%3A1&mode=design&t=v1oQIgQMFrVDR33X-1", enabled: true },
    category: "Webdesign",
    technologies: [
      {text: 'Figma', icon: 'IconBrandFigma'}
    ],
  },
  {
    id: 2,
    title: "Landing page jessica aroztegui",
    subtitle: "Landing page pour une vrai cliente proposé comme projet par l'esd, nous devions tous intégrer la maquette, et par la suite une des intégrations à été choisis par l'école pour être l'intégration finale de la cliente !",
    imageUrl: "/images/real_customer.webp",
    projectButton: { url: "https://github.com/mdorizon/jessica_aroztegui", enabled: true },
    button2: { text: "Voir plus", url: "https://aroztegui.mdorizon.fr/", enabled: true },
    category: "Front-End",
    technologies: [
      {text: 'HTML', icon: 'IconBrandHtml5'},
      {text: 'CSS', icon: 'IconBrandCss3'}
    ],
  },
  {
    id: 3,
    title: "Landing page foodies entrainement",
    subtitle: "foodies est une maquette que nous avions à intégrer pour s'entrainer à l'intégration, elle est une maquette fictive d'entrainement, et fait parti des premières intégrations faites.",
    imageUrl: "/images/foodies.webp",
    projectButton: { url: "https://github.com/mdorizon/foodies-landing-training", enabled: true },
    button2: { text: "Voir plus", url: "https://foodies.mdorizon.fr/", enabled: true },
    category: "Front-End",
    technologies: [
      {text: 'HTML', icon: 'IconBrandHtml5'},
      {text: 'CSS', icon: 'IconBrandCss3'}
    ],
  },
  {
    id: 4,
    title: "Cabinet Martin, Les briefs créatifs",
    subtitle: "Le Cabinet Martin est un projet de design réalisé dans le cadre du jeu 'les Briefs Créatifs', voici donc la single page présentant le projet ( les couleurs, typos, et inspirations du projet )",
    imageUrl: "/images/CabinetMartinImage.webp",
    projectButton: { url: "https://dribbble.com/shots/25280284-Brand-Board-Cabinet-Martin-les-briefs-cr-atifs?utm_source=Clipboard_Shot&utm_campaign=MDorizon&utm_content=Brand%20Board%20(Cabinet%20Martin%2C%20les%20briefs%20cr%C3%A9atifs)&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=MDorizon&utm_content=Brand%20Board%20(Cabinet%20Martin%2C%20les%20briefs%20cr%C3%A9atifs)&utm_medium=Social_Share", enabled: false },
    button2: { text: "Voir plus", url: "https://cdn.dribbble.com/userupload/17846508/file/original-b30427359f65f92c03b0e6de8328bcc3.webp?resize=2048x5760&vertical=center", enabled: true },
    category: "Webdesign",
    technologies: [
      {text: 'Figma', icon: 'IconBrandFigma'}
    ],
  },
  {
    id: 5,
    title: "Premier Projet d'entrainement à NestJS",
    subtitle: "Ce projet est un premier entrainement à l'utilisation de NestJS il n'y a que l'API, Vous pouvez la tester si vous le souhaitez",
    imageUrl: "/images/nestjs.webp",
    projectButton: { url: "https://github.com/mdorizon/ESD-NestJS-Training", enabled: true },
    button2: { text: "Voir plus", url: "", enabled: false },
    category: "Back-End",
    technologies: [
      {text: 'NestJS', icon: 'IconApi'}
    ],
  },
  {
    id: 6,
    title: "Projet de groupe UX : Loc'Art",
    subtitle: "",
    imageUrl: "/images/locart.webp",
    projectButton: { url: "", enabled: false },
    button2: { text: "Voir plus", url: "", enabled: true },
    category: "Webdesign",
    technologies: [
      {text: 'Figma', icon: 'IconBrandFigma'}
    ],
  },
  {
    id: 7,
    title: "Projet Auth Blog",
    subtitle: "Ce projet est une API Express avec authentification par token JWT, utilisant PostgreSQL pour la gestion des utilisateurs et des articles. Il permet de créer, lire, mettre à jour et supprimer des utilisateurs et des articles. L'authentification est gérée via un système de token JWT pour sécuriser les routes.",
    imageUrl: "/images/authblog.webp",
    projectButton: { url: "https://github.com/mdorizon/ESD-auth-blog", enabled: true },
    button2: { text: "Voir plus", url: "", enabled: false },
    category: "Back-End",
    technologies: [
      {text: 'Express', icon: 'IconApi'}
    ],
  },
  {
    id: 8,
    title: "Projet Blog Prismic",
    subtitle: "Ce projet est un blog simple utilisant Prismic pour gérer le contenu. Il permet de créer, modifier, publier et organiser des articles, une Landing Page et un menu.",
    imageUrl: "/images/prismicblog.webp",
    projectButton: { url: "https://github.com/mdorizon/esd-prismic-blog", enabled: true },
    button2: { text: "Voir plus", url: "", enabled: false },
    category: "Back-End",
    technologies: [
      {text: 'Prismic', icon: 'IconLayoutNavbarFilled'}
    ],
  },
];
// IconBrandHtml5 IconLayoutNavbarFilled IconBrandSass IconBrandCss3 IconBrandFigma IconBrandPhp IconBrandNextjs IconBrandAngular IconApi

const postsCategories: PostCategory[] = [
  {id: 1, slug: "all", text: "Tous les projets"},
  {id: 2, slug: "Front-End", text: "Front-End"},
  {id: 3, slug: "Back-End", text: "Back-End"},
  {id: 4, slug: "Webdesign", text: "Webdesign"},
]

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const handleCategoryChange = (category: string): void => {
    setSelectedCategory(category);
  };

  const filteredPosts = postsData.filter((post) => {
    return selectedCategory === 'all' || post.category.toLowerCase() === selectedCategory.toLowerCase();
  });

  return (
    <>
      <section className="projects-section" id="projects">
        <div className="cards-container">
          <div className="sort-buttons">
            {postsCategories.map((category) => (
              <div key={category.id} className={`sort-button ${selectedCategory === category.slug ? 'active' : ''}`} onClick={() => handleCategoryChange(category.slug)}>
                <p>{category.text}</p>
              </div>
            ))}
          </div>
          <Swiper
            modules={[ Pagination, Autoplay]}
            loop={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            spaceBetween={24}
            slidesPerView={3}
            breakpoints={{
              320: {
                slidesPerView: 1
              },
              769: {
                slidesPerView: 2
              },
              1441: {
                slidesPerView: 3
              }
            }}
            className='cards'
          >
            {filteredPosts.map((post) => (
              <SwiperSlide key={post.id}>
                <PostCard {...post} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Projects;