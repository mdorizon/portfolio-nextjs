'use client';

const CtaPrimary = ({ link, text } : { link: string, text: string }) => {

  return (
    <>
      <a href={link}>
        <div className="cta_primary">
          <p>{text}</p>
        </div>
      </a>
    </>
  );
};

export default CtaPrimary;