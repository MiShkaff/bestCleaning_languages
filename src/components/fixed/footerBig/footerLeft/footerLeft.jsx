import React from 'react';
import FooterLeftLink from './footerLeftCard';
import '../../../UI/footer/footer.scss';

let footerLeftLink = [
  {
    title: "Cleaning",
    items: [
      "Office spaces",
      "Apartments",
      "Outdoor spaces"
    ]
  },
  {
    title: "Washing",
    items: [
      "Windows",
      "Stained windows",
      "Facades",
      "Billboards"
    ]
  },
  {
    title: "Articles",
    items: []
  },
  {
    title: "Chem. cleaning",
    items: [
      "Upholstered furniture",
      "Area rug cleaning",
      "Sofa"
    ]
  },
  {
    title: "Carpet washing with delivery",
    items: [
      "Rugs",
      "Carpets"
    ]
  },
  {
    title: "Apinist group providing",
    items: [
      "Hard-reach places cleaning"
    ]
  },
  {
    title: "Outsourcing",
    items: [
      "Serving staff recruitment and provision"
    ]
  },
  {
    title: "Air cleaning and sterilization",
    items: []
  },
  {
    title: "Disinfection of areas",
    items: []
  },
];

const FooterLeft = () => {
  const firstBlock = footerLeftLink.slice(0, 3);
  const secondBlock = footerLeftLink.slice(3);
  const firstBlockMap = firstBlock.map(el => (
    <FooterLeftLink title={el.title} items={el.items} key={el.title} />
  ));
  const secondBlockMap = secondBlock.map(el => (
    <FooterLeftLink title={el.title} items={el.items} key={el.title} />
  ));

  return (
    <div className='footerLeft'>
      <div className='footerLeft__left'>
        {firstBlockMap}
      </div>
      <div className='footerLeft__right'>
        {secondBlockMap}
      </div>
    </div>
  );
}

export default FooterLeft;