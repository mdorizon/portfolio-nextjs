'use client';

import { IconDownload } from '@tabler/icons-react';

const CtaSecondary = ({ link, text } : { link: string, text: string }) => {

  return (
    <>
      <a href={link} download>
        <div className="cta_secondary">
          <p>{text}</p>
          <IconDownload />
        </div>
      </a>
    </>
  );
};

export default CtaSecondary;