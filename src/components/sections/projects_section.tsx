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
    category: "Intégration",
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
    category: "Intégration",
    technologies: [
      {text: 'HTML', icon: 'IconBrandHtml5'},
      {text: 'CSS', icon: 'IconBrandCss3'}
    ],
  },
  {
    id: 4,
    title: "Projet découverte de l'intégration",
    subtitle: "Cette intégration est la toute première que nous avions à faire, elle nous as fait découvrir les bases de l'HTML et CSS !",
    imageUrl: "/images/travee.webp",
    projectButton: { url: "https://github.com/mdorizon/Travee-training", enabled: true },
    button2: { text: "Voir plus", url: "https://travee.mdorizon.fr/", enabled: true },
    category: "Intégration",
    technologies: [
      {text: 'HTML', icon: 'IconBrandHtml5'},
      {text: 'CSS', icon: 'IconBrandCss3'}
    ],
  },
  {
    id: 5,
    title: "Projet music-dashboard",
    subtitle: "Ce projet est parmis nos premiers projets de webdesign, nous avions une wireframe d'un dashboard de musique, auquel nous devions y mettre du contenu, couleurs, boutons, sections",
    imageUrl: "/images/Music-Dashboard.webp",
    projectButton: { url: "https://github.com/mdorizon/foodies-landing-training", enabled: false },
    button2: { text: "Voir plus", url: "https://www.figma.com/file/GCi5kWl7xqoKg1MYabVTyA/Music-Dashboard?type=design&node-id=1%3A5&mode=design&t=7rmP4YdIuGvJDsTw-1", enabled: true },
    category: "WebDesign",
    technologies: [
      {text: 'Figma', icon: 'IconBrandFigma'},
      {text: 'CSS', icon: 'IconBrandCss3'}
    ],
  },
  {
    id: 6,
    title: "Projet forum PHP",
    subtitle: "Projet de création d'un forum php en 1 heure, (n'ayant pas encore vu les base de données, les données du forum sont enregistrées dans un fichier json) et la création d'un nouveau post se fait sans compte, l'interface est crée avec bootstrap, le forum contient un système de upvote !",
    imageUrl: "/images/forum-php.webp",
    projectButton: { url: "https://github.com/mdorizon/foodies-landing-training", enabled: false },
    button2: { text: "Voir plus", url: "https://github.com/mdorizon/forum-training", enabled: true },
    category: "App PHP",
    technologies: [
      {text: 'PHP', icon: 'IconBrandPhp'},
    ],
  },
];
// IconBrandHtml5 IconBrandSass IconBrandCss3 IconBrandFigma IconBrandPhp IconBrandNextjs IconBrandAngular

const postsCategories: PostCategory[] = [
  {id: 1, slug: "all", text: "tout les projets"},
  {id: 2, slug: "intégration", text: "intégration"},
  {id: 3, slug: "webdesign", text: "webdesign"},
  {id: 4, slug: "app php", text: "app PHP"}
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
              disableOnInteraction: false,
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