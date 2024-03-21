'use client';

// reste à intégrer:
// slider pour les cards (sliderjs)
// le changement de couleur des boutons en fonction de la catégorie choisie


import React, { useState } from 'react';
import PostCard from '@/src/components/postCard';
import { PostData } from '@/src/utils/lib/definitions'

const postsData: PostData[] = [
  {
    id: 1,
    title: "Projet création d'une maquette pour le portfolio",
    subtitle: "Création de la maquette du portfolio, design crée de 0, avec des inspirations prises sur dribbble, (les inspirations utilisées pour la création sont visibles sur le figma).",
    imageUrl: "/images/portfolio.png",
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
    imageUrl: "/images/real_customer.png",
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
    imageUrl: "/images/foodies.png",
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
    imageUrl: "/images/travee.png",
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
    imageUrl: "/images/Music-Dashboard.png",
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
    imageUrl: "/images/forum-php.png",
    projectButton: { url: "https://github.com/mdorizon/foodies-landing-training", enabled: false },
    button2: { text: "Voir plus", url: "https://github.com/mdorizon/forum-training", enabled: true },
    category: "App PHP",
    technologies: [
      {text: 'PHP', icon: 'IconBrandPhp'},
    ],
  },
];
// IconBrandHtml5 IconBrandSass IconBrandCss3 IconBrandFigma IconBrandPhp IconBrandNextjs IconBrandAngular

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
      <section className="projects-section flex flex-dir-col align-center" id="projects">
        <div className="cards-container flex flex-dir-col">
          <div className="sort-buttons flex align-start wrap">
            <div className="sort-button flex justify-center align-center active" onClick={() => handleCategoryChange('all')}>
              <p>tout les projets</p>
            </div>
            <div className="sort-button flex justify-center align-center" onClick={() => handleCategoryChange('intégration')}>
              <p>intégration</p>
            </div>
            <div className="sort-button flex justify-center align-center" onClick={() => handleCategoryChange('webdesign')}>
              <p>webdesign</p>
            </div>
            <div className="sort-button flex justify-center align-center" onClick={() => handleCategoryChange('app php')}>
              <p>app PHP</p>
            </div>
            <div className="sort-button flex justify-center align-center" onClick={() => handleCategoryChange('personnels')}>
              <p>personnels</p>
            </div>
          </div>
          <div className="cards">
              {filteredPosts.map((post) => (
                <PostCard key={post.id} {...post} />
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;