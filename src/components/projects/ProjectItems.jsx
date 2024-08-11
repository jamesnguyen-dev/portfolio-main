import React from 'react';
import { HiOutlineArrowSmRight } from "react-icons/hi";

const ProjectItems = ({item}) => {
  return (
        <div className="project__card" key={item.id}>
            <img className="project__img" src={item.image} alt="" />
            <h3 className="project__title">{item.title}</h3>
            <h4 className="project__description">{item.description}</h4>
            <a href={item.link} className="project__button">
                Demo <HiOutlineArrowSmRight className="project__button-icon" />
            </a>
        </div>
    );
}

export default ProjectItems;