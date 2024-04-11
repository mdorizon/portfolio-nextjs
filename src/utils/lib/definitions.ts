//-----------------------//
// Post Cards Interfaces //
//-----------------------//

import { IconBrandHtml5, IconBrandSass, IconBrandCss3, IconBrandFigma, IconBrandPhp, IconBrandNextjs, IconBrandAngular } from "@tabler/icons-react";

export const iconComponents = {  
  IconBrandFigma: IconBrandFigma,
  IconBrandHtml5: IconBrandHtml5,
  IconBrandSass: IconBrandSass,
  IconBrandCss3: IconBrandCss3,
  IconBrandPhp: IconBrandPhp,
  IconBrandNextjs: IconBrandNextjs,
  IconBrandAngular: IconBrandAngular,
};

export type IconName = keyof typeof iconComponents;
export interface ButtonProps {
  text?: string;
  url: string;
  enabled: boolean;
}

export interface TechnoProps {
  text: string;
  icon: IconName;
}

export interface PostCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  projectButton?: ButtonProps;
  button2?: ButtonProps;
  category: string;
  technologies: Array<TechnoProps>;
}

export interface PostData {
  id: number;
  title: string;
  subtitle: string;
  imageUrl: string;
  projectButton?: ButtonProps;
  button2?: ButtonProps;
  category: string;
  technologies: Array<TechnoProps>;
}

export interface PostCategory {
  id: number;
  slug: string;
  text: string;
}


// Navigation

export interface NavLinks {
  id: number;
  href: string;
  text: string;
}